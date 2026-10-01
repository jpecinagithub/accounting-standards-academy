import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shuffle, GraduationCap, Target, Layers, ArrowRight } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { shuffle } from '../data/index.js';
import { SKILL_LABEL, DIFFICULTY_LABEL, label } from '../i18n/labels.js';
import { PageHeader, StatCard } from '../components/ui.jsx';

const DIFFICULTIES = ['Foundation', 'Intermediate', 'Advanced'];

export default function Quizzes() {
  const { store } = useProgress();
  const t = useT();
  const lang = store.lang === 'es' ? 'es' : 'en';
  const { SKILLS, QUESTION_BANK, questionsBySkill, MODULES } = useContent();
  const navigate = useNavigate();

  const startSkill = (sk) => navigate(`/practice?skill=${encodeURIComponent(sk)}`);
  const startRandom = () => {
    sessionStorage.setItem('afa-practice', JSON.stringify({
      title: t('quizzes.mixedTitle'), questions: shuffle(QUESTION_BANK).slice(0, 12),
    }));
    navigate('/practice?mode=session');
  };

  return (
    <div>
      <PageHeader
        kicker={t('quizzes.kicker')}
        title={t('nav.quizzes')}
        lead={t('quizzes.lead')}
        actions={
          <>
            <button className="btn btn-ghost" onClick={startRandom}><Shuffle /> {t('quizzes.mixedSet')}</button>
            <Link className="btn btn-primary" to="/exam"><GraduationCap /> {t('nav.exam')}</Link>
          </>
        }
      />

      <h2 className="mb">{t('quizzes.bySkill')}</h2>
      <div className="grid grid-3 mb">
        {SKILLS.map(sk => {
          const total = questionsBySkill(sk).length;
          const s = (store.skillStats || {})[sk];
          const pct = s && s.total > 0 ? Math.round((s.correct / s.total) * 100) : null;
          return (
            <div className="card" key={sk}>
              <div className="flex between center">
                <h3 style={{ margin: 0 }}>{label(SKILL_LABEL, sk, lang)}</h3>
                {pct !== null && <span className="badge badge-gold serif-num">{pct}%</span>}
              </div>
              <p className="small muted">{t('quizzes.inBank', { total })}{s ? ` ${t('quizzes.yourScore', { correct: s.correct, total: s.total })}` : ''}</p>
              <button className="btn btn-ghost btn-sm" onClick={() => startSkill(sk)}>
                {t('common.practice')} <ArrowRight size={14} />
              </button>
            </div>
          );
        })}
      </div>

      <h2 className="mb">{t('quizzes.byDifficulty')}</h2>
      <div className="grid grid-3">
        {DIFFICULTIES.map(d => {
          const total = QUESTION_BANK.filter(q => q.difficulty === d).length;
          return (
            <div className="card" key={d}>
              <h3><Target /> {label(DIFFICULTY_LABEL, d, lang)}</h3>
              <p className="small muted">{t('common.questions', { n: total })}</p>
              <button className="btn btn-ghost btn-sm" onClick={() => {
                sessionStorage.setItem('afa-practice', JSON.stringify({
                  title: t('quizzes.difficultyTitle', { d: label(DIFFICULTY_LABEL, d, lang) }),
                  questions: shuffle(QUESTION_BANK.filter(q => q.difficulty === d)).slice(0, 12),
                }));
                navigate('/practice?mode=session');
              }}>
                {t('common.start')} <ArrowRight size={14} />
              </button>
            </div>
          );
        })}
      </div>

      <div className="card mt">
        <h3><Layers /> {t('quizzes.moduleQuizzes')}</h3>
        <p className="small muted">{t('quizzes.moduleQuizzesText', { n: MODULES.length })}</p>
        <Link className="btn btn-ghost btn-sm" to="/path">{t('quizzes.goToPath')} <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
