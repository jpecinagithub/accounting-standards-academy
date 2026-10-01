import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Bookmark, BookmarkCheck, CheckCircle2, AlertTriangle, MessageCircleQuestion, Clock } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { SKILL_LABEL, LEVEL_LABEL, label } from '../i18n/labels.js';
import { PageHeader, SectionRenderer, Callout } from '../components/ui.jsx';
import { VISUALS } from '../components/visuals.jsx';
import Quiz from '../components/Quiz.jsx';

export default function ModulePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { store, completeModule, uncompleteModule, toggleBookmark, setLastVisited } = useProgress();
  const t = useT();
  const lang = store.lang === 'es' ? 'es' : 'en';
  const { getModule, getNeighbors } = useContent();
  const [openQA, setOpenQA] = useState(null);
  const mod = getModule(id);

  useEffect(() => {
    if (mod) setLastVisited(mod.id);
    setOpenQA(null);
    window.scrollTo(0, 0);
  }, [id]); // eslint-disable-line

  if (!mod) {
    return (
      <div className="empty">
        <h3>{t('module.notFound')}</h3>
        <Link className="btn btn-ghost" to="/path">{t('module.backToPath')}</Link>
      </div>
    );
  }

  const { prev, next } = getNeighbors(id);
  const done = !!store.completed?.[id];
  const bookmarked = (store.bookmarks || []).includes(id);
  const quizResult = store.quizzes?.[`module-${id}`];

  return (
    <div>
      <Link to="/path" className="small muted flex center gap" style={{ gap: 6, marginBottom: '0.8rem' }}>
        <ArrowLeft size={14} /> {t('nav.learningPath')}
      </Link>
      <PageHeader
        kicker={t('module.kicker', { level: mod.level, levelTitle: label(LEVEL_LABEL, mod.levelTitle, lang), standard: mod.standard })}
        title={mod.title}
        lead={mod.description}
        actions={
          <>
            <button className="btn btn-ghost btn-sm" onClick={() => toggleBookmark(id)}>
              {bookmarked ? <BookmarkCheck /> : <Bookmark />} {bookmarked ? t('module.saved') : t('module.bookmark')}
            </button>
            <button
              className={`btn btn-sm ${done ? 'btn-ghost' : 'btn-primary'}`}
              onClick={() => (done ? uncompleteModule(id) : completeModule(id))}
            >
              <CheckCircle2 /> {done ? t('module.completedUndo') : t('module.markComplete')}
            </button>
          </>
        }
      />
      <div className="flex gap wrap mb">
        <span className="badge badge-gold">{mod.standard}</span>
        <span className="badge"><Clock size={12} /> {t('common.minutes', { n: mod.minutes })}</span>
        <span className="badge badge-blue">{t('module.quizQuestions', { n: mod.quiz?.length || 0 })}</span>
        {(mod.skills || []).map(s => <span className="badge" key={s}>{label(SKILL_LABEL, s, lang)}</span>)}
        {quizResult && <span className="badge badge-green">{t('module.quizBest', { pct: Math.round((quizResult.score / quizResult.total) * 100) })}</span>}
      </div>

      <div className="card article mb">
        {(mod.visuals || []).map(v => {
          const V = VISUALS[v];
          return V ? <V key={v} /> : null;
        })}
        {(mod.sections || []).map((s, i) => <SectionRenderer key={i} section={s} />)}
      </div>

      {mod.mistakes?.length > 0 && (
        <div className="card mb">
          <h3><AlertTriangle /> {t('module.mistakes')}</h3>
          <ul className="mistake-list">
            {mod.mistakes.map((m, i) => <li key={i}><AlertTriangle /><span>{m}</span></li>)}
          </ul>
        </div>
      )}

      {mod.interviewQA?.length > 0 && (
        <div className="card mb">
          <h3><MessageCircleQuestion /> {t('module.interviewQA')}</h3>
          {mod.interviewQA.map((qa, i) => (
            <div className={`qa-item${openQA === i ? ' open' : ''}`} key={i}>
              <button className="qa-q" onClick={() => setOpenQA(openQA === i ? null : i)}>
                {qa.q}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
              </button>
              {openQA === i && <div className="qa-a">{qa.a}</div>}
            </div>
          ))}
        </div>
      )}

      <h2 className="mb">{t('module.quizTitle')}</h2>
      <Quiz
        questions={mod.quiz || []}
        quizId={`module-${mod.id}`}
        title={mod.title}
        subtitle={t('module.quizTitle')}
        onComplete={({ score, total }) => {
          if (total > 0 && score / total >= 0.7) completeModule(mod.id);
        }}
      />

      <div className="flex between mt mb">
        {prev
          ? <button className="btn btn-ghost btn-sm" onClick={() => navigate(`/module/${prev.id}`)}><ArrowLeft /> {prev.title}</button>
          : <span />}
        {next
          ? <button className="btn btn-ghost btn-sm" onClick={() => navigate(`/module/${next.id}`)}>{next.title} <ArrowRight /></button>
          : <span />}
      </div>
    </div>
  );
}
