import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';

const KEY = 'afa-progress-v1';

const DEFAULT = {
  theme: 'dark',
  completed: {},        // moduleId -> ISO date
  quizzes: {},          // quizId -> { score, total, date, attempts }
  skillStats: {},       // skill -> { correct, total }
  mistakes: [],         // [{ qid, moduleId, skill, topic, difficulty, question, options, answer, explanation, picked, date, quizId }]
  bookmarks: [],        // [moduleId]
  lastVisited: null,    // moduleId
  labs: {},             // labId -> date
  exams: [],            // [{ score, total, pct, date }]
  interviews: [],       // [{ mode: 'rapid', score-ish, date, total }]
  sim: {},              // simulator results
};

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...DEFAULT, ...JSON.parse(raw) };
  } catch { /* ignore */ }
  return { ...DEFAULT };
}

const Ctx = createContext(null);

export function ProgressProvider({ children }) {
  const [store, setStore] = useState(load);

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(store)); } catch { /* ignore */ }
  }, [store]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', store.theme || 'dark');
  }, [store.theme]);

  const toggleTheme = useCallback(() => {
    setStore(s => ({ ...s, theme: s.theme === 'dark' ? 'light' : 'dark' }));
  }, []);

  const completeModule = useCallback((id) => {
    setStore(s => s.completed[id] ? s : ({ ...s, completed: { ...s.completed, [id]: new Date().toISOString() } }));
  }, []);

  const uncompleteModule = useCallback((id) => {
    setStore(s => {
      const c = { ...s.completed }; delete c[id];
      return { ...s, completed: c };
    });
  }, []);

  const recordQuizResult = useCallback((quizId, { score, total, answers }) => {
    const date = new Date().toISOString();
    setStore(s => {
      const skillStats = { ...s.skillStats };
      const newMistakes = [];
      (answers || []).forEach(a => {
        const sk = a.skill || 'General';
        const cur = skillStats[sk] || { correct: 0, total: 0 };
        skillStats[sk] = { correct: cur.correct + (a.correct ? 1 : 0), total: cur.total + 1 };
        if (!a.correct) {
          newMistakes.push({
            qid: a.qid, moduleId: a.moduleId, skill: a.skill, topic: a.topic,
            difficulty: a.difficulty, question: a.question, options: a.options,
            answer: a.answer, explanation: a.explanation, picked: a.picked,
            date, quizId,
          });
        }
      });
      const prev = s.quizzes[quizId];
      const mistakes = [...newMistakes, ...s.mistakes].slice(0, 400);
      return {
        ...s,
        skillStats,
        mistakes,
        quizzes: { ...s.quizzes, [quizId]: { score, total, date, attempts: (prev?.attempts || 0) + 1 } },
      };
    });
  }, []);

  const recordLab = useCallback((labId) => {
    setStore(s => s.labs[labId] ? s : ({ ...s, labs: { ...s.labs, [labId]: new Date().toISOString() } }));
  }, []);

  const recordExam = useCallback(({ score, total }) => {
    setStore(s => ({ ...s, exams: [{ score, total, pct: Math.round((score / total) * 100), date: new Date().toISOString() }, ...s.exams].slice(0, 20) }));
  }, []);

  const recordInterview = useCallback((entry) => {
    setStore(s => ({ ...s, interviews: [{ ...entry, date: new Date().toISOString() }, ...s.interviews].slice(0, 20) }));
  }, []);

  const recordSim = useCallback((key, value) => {
    setStore(s => ({ ...s, sim: { ...s.sim, [key]: value } }));
  }, []);

  const toggleBookmark = useCallback((id) => {
    setStore(s => ({
      ...s,
      bookmarks: s.bookmarks.includes(id) ? s.bookmarks.filter(b => b !== id) : [...s.bookmarks, id],
    }));
  }, []);

  const setLastVisited = useCallback((id) => {
    setStore(s => (s.lastVisited === id ? s : { ...s, lastVisited: id }));
  }, []);

  const removeMistake = useCallback((qid, date) => {
    setStore(s => ({ ...s, mistakes: s.mistakes.filter(m => !(m.qid === qid && m.date === date)) }));
  }, []);

  const clearMistakesTopic = useCallback((topic) => {
    setStore(s => ({ ...s, mistakes: s.mistakes.filter(m => m.topic !== topic && m.skill !== topic) }));
  }, []);

  const resetAll = useCallback(() => {
    const theme = load().theme;
    setStore({ ...DEFAULT, theme });
  }, []);

  const value = useMemo(() => ({
    store, toggleTheme, completeModule, uncompleteModule, recordQuizResult,
    recordLab, recordExam, recordInterview, recordSim, toggleBookmark,
    setLastVisited, removeMistake, clearMistakesTopic, resetAll,
  }), [store, toggleTheme, completeModule, uncompleteModule, recordQuizResult, recordLab, recordExam, recordInterview, recordSim, toggleBookmark, setLastVisited, removeMistake, clearMistakesTopic, resetAll]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useProgress() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}

/* ---------- derived helpers ---------- */

export function skillMastery(skillStats, skill) {
  const s = skillStats?.[skill];
  if (!s || s.total === 0) return null;
  return Math.round((s.correct / s.total) * 100);
}

export function overallMastery(skillStats) {
  const vals = Object.values(skillStats || {});
  const total = vals.reduce((a, v) => a + v.total, 0);
  if (total === 0) return 0;
  const correct = vals.reduce((a, v) => a + v.correct, 0);
  return Math.round((correct / total) * 100);
}

export function quizAccuracy(quizzes) {
  const vals = Object.values(quizzes || {});
  const total = vals.reduce((a, v) => a + (v.total || 0), 0);
  const score = vals.reduce((a, v) => a + (v.score || 0), 0);
  if (total === 0) return null;
  return Math.round((score / total) * 100);
}

export function weakSkills(skillStats, skills, minAttempts = 4, threshold = 75) {
  return skills
    .map(sk => ({ skill: sk, pct: skillMastery(skillStats, sk), attempts: skillStats?.[sk]?.total || 0 }))
    .filter(x => x.pct !== null && x.attempts >= minAttempts && x.pct < threshold)
    .sort((a, b) => a.pct - b.pct);
}
