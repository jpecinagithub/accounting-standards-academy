import React, { useState, useMemo } from 'react';
import { ArrowRight, RotateCcw, CheckCircle2, XCircle, Trophy } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';
import { SKILL_LABEL, TOPIC_LABEL, DIFFICULTY_LABEL, label } from '../i18n/labels.js';
import { ProgressBar } from './ui.jsx';

const LETTERS = ['A', 'B', 'C', 'D'];

/**
 * Generic quiz runner.
 * props: questions, quizId, title, subtitle, instantFeedback (default true),
 *        onComplete({score,total}) optional, ctaLabel
 */
export default function Quiz({ questions, quizId, title, subtitle, instantFeedback = true, onComplete, ctaLabel }) {
  const { store, recordQuizResult } = useProgress();
  const t = useT();
  const lang = store.lang === 'es' ? 'es' : 'en';
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);
  const [recorded, setRecorded] = useState(false);

  const qs = useMemo(() => questions || [], [questions]);
  const q = qs[idx];

  if (!qs.length) return <p className="muted">{t('quiz.noQuestions')}</p>;

  const finish = (allAnswers) => {
    const score = allAnswers.filter(a => a.correct).length;
    if (!recorded) {
      recordQuizResult(quizId, { score, total: allAnswers.length, answers: allAnswers });
      setRecorded(true);
    }
    setDone(true);
    if (onComplete) onComplete({ score, total: allAnswers.length });
  };

  const choose = (i) => {
    if (picked !== null) return;
    setPicked(i);
    const correct = i === q.answer;
    const entry = {
      qid: q.qid || `${quizId}-${idx}`,
      moduleId: q.moduleId, skill: q.skill, topic: q.topic, difficulty: q.difficulty,
      question: q.question, options: q.options, answer: q.answer,
      explanation: q.explanation, picked: i, correct,
    };
    const next = [...answers, entry];
    setAnswers(next);
    if (!instantFeedback && idx + 1 >= qs.length) {
      // small delay so the last pick registers visually
      setTimeout(() => finish(next), 350);
    }
  };

  const next = () => {
    if (idx + 1 >= qs.length) finish(answers);
    else { setIdx(idx + 1); setPicked(null); }
  };

  const restart = () => { setIdx(0); setPicked(null); setAnswers([]); setDone(false); setRecorded(false); };

  if (done) {
    const score = answers.filter(a => a.correct).length;
    const pct = Math.round((score / qs.length) * 100);
    return (
      <div className="quiz-box">
        <div className="quiz-results">
          <Trophy size={40} style={{ color: 'var(--accent-text)' }} />
          <h2 className="mt">{title || t('quiz.complete')}</h2>
          <div className="score-ring serif-num" style={{ color: pct >= 70 ? 'var(--success)' : pct >= 50 ? 'var(--warn)' : 'var(--danger)' }}>
            {pct}%
          </div>
          <p className="muted">{t('quiz.scoreOf', { score, total: qs.length })}</p>
          <p className="small muted">
            {pct >= 90 ? t('quiz.band90') :
             pct >= 70 ? t('quiz.band70') :
             pct >= 50 ? t('quiz.band50') :
             t('quiz.band0')}
          </p>
          <div className="flex gap center wrap" style={{ justifyContent: 'center' }}>
            <button className="btn btn-ghost btn-sm" onClick={restart}><RotateCcw />{t('quiz.retake')}</button>
          </div>
        </div>
        <div className="answer-review">
          {answers.map((a, i) => (
            <div className="review-item" key={i}>
              <div className="rq">{i + 1}. {a.question}</div>
              <div className="ra">
                {t('quiz.yourAnswer')} <strong style={{ color: a.correct ? 'var(--success)' : 'var(--danger)' }}>{LETTERS[a.picked]} — {a.options[a.picked]}</strong>
                {!a.correct && <span> · {t('quiz.correctIs')} <strong style={{ color: 'var(--success)' }}>{LETTERS[a.answer]} — {a.options[a.answer]}</strong></span>}
              </div>
              {a.explanation && <div className="ra mt" style={{ color: 'var(--text-muted)' }}>{a.explanation}</div>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const showFeedback = picked !== null && instantFeedback;
  const isCorrectPick = picked === q.answer;

  return (
    <div className="quiz-box">
      <div className="quiz-top">
        <span>{title || t('quiz.title')} {subtitle && <span className="muted">· {subtitle}</span>}</span>
        <span className="serif-num">{t('quiz.questionOf', { n: idx + 1, total: qs.length })}</span>
      </div>
      <ProgressBar thin value={((idx) / qs.length) * 100} />
      <div className="quiz-q" style={{ marginTop: '1rem' }}>{q.question}</div>
      <div className="flex gap wrap mb">
        {q.topic && <span className="badge">{label(TOPIC_LABEL, q.topic, lang)}</span>}
        {q.difficulty && <span className="badge badge-blue">{label(DIFFICULTY_LABEL, q.difficulty, lang)}</span>}
        {q.skill && <span className="badge badge-gold">{label(SKILL_LABEL, q.skill, lang)}</span>}
      </div>
      <div className="opt-list">
        {q.options.map((opt, i) => {
          let cls = 'opt';
          if (picked !== null) {
            if (i === q.answer) cls += ' correct';
            else if (i === picked) cls += ' wrong';
          } else if (i === picked) cls += ' selected';
          return (
            <button key={i} className={cls} onClick={() => choose(i)} disabled={picked !== null}>
              <span className="letter">{LETTERS[i]}</span>
              <span>{opt}</span>
              {picked !== null && i === q.answer && <CheckCircle2 size={17} style={{ marginLeft: 'auto', flexShrink: 0 }} />}
              {picked !== null && i === picked && i !== q.answer && <XCircle size={17} style={{ marginLeft: 'auto', flexShrink: 0 }} />}
            </button>
          );
        })}
      </div>
      {showFeedback && (
        <div className={`quiz-feedback ${isCorrectPick ? 'ok' : 'no'}`}>
          <strong>{isCorrectPick ? t('quiz.feedbackOk') : t('quiz.feedbackNo')}</strong>
          {q.explanation}
        </div>
      )}
      <div className="quiz-nav">
        <span className="small muted">
          {t('quiz.correctSoFar', { n: answers.filter(a => a.correct).length })}
        </span>
        <button className="btn btn-primary btn-sm" disabled={picked === null} onClick={next}>
          {idx + 1 >= qs.length ? (ctaLabel || t('common.finish')) : t('quiz.next')} <ArrowRight />
        </button>
      </div>
    </div>
  );
}
