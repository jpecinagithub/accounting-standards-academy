import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Eye, Timer, Flag } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { shuffle } from '../data/index.js';
import { CATEGORY_LABEL, label } from '../i18n/labels.js';
import { PageHeader } from '../components/ui.jsx';

const PER_Q = 60;

export default function RapidInterview() {
  const navigate = useNavigate();
  const { store, recordInterview } = useProgress();
  const t = useT();
  const lang = store.lang === 'es' ? 'es' : 'en';
  const { INTERVIEW } = useContent();
  const questions = useMemo(() => shuffle(INTERVIEW).slice(0, 10), [INTERVIEW]); // eslint-disable-line
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [secs, setSecs] = useState(PER_Q);
  const [done, setDone] = useState(false);
  const [seen, setSeen] = useState([0]);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSecs(s => {
        if (s <= 1) { setRevealed(true); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [idx]);

  const q = questions[idx];

  const next = () => {
    if (idx + 1 >= questions.length) {
      clearInterval(timerRef.current);
      setDone(true);
      recordInterview({ mode: 'rapid', total: questions.length, revealed: seen.length });
    } else {
      const n = idx + 1;
      setIdx(n); setRevealed(false); setSecs(PER_Q);
      setSeen(s => s.includes(n) ? s : [...s, n]);
    }
  };

  if (done) {
    return (
      <div>
        <PageHeader kicker={t('rapid.kicker')} title={t('rapid.doneTitle')} lead={t('rapid.doneLead')} />
        <div className="card" style={{ textAlign: 'center' }}>
          <Flag size={36} style={{ color: 'var(--accent-text)' }} />
          <h2 className="mt">{t('rapid.wellDone')}</h2>
          <p className="muted">{t('rapid.reviewHint')}</p>
          <div className="flex gap wrap" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => navigate(0)}>{t('rapid.again')}</button>
            <Link className="btn btn-ghost" to="/interview">{t('rapid.backToBank')}</Link>
          </div>
        </div>
        <div className="mt">
          {questions.map((item, i) => (
            <div className="card mb" key={item.id}>
              <span className="badge badge-blue">{label(CATEGORY_LABEL, item.category, lang)}</span>
              <h3 className="mt">{i + 1}. {item.q}</h3>
              <p className="small">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Link to="/interview" className="small muted flex center gap" style={{ gap: 6, marginBottom: '0.8rem' }}>
        <ArrowLeft size={14} /> {t('nav.interview')}
      </Link>
      <PageHeader kicker={t('rapid.kicker')} title={t('rapid.questionOf', { n: idx + 1, total: questions.length })} />
      <div className="flex between center wrap gap mb">
        <span className="badge badge-blue">{label(CATEGORY_LABEL, q.category, lang)}</span>
        <span className={`timer${secs <= 10 ? ' low' : ''}`}><Timer size={16} /> 0:{String(secs).padStart(2, '0')}</span>
      </div>
      <div className="quiz-box">
        <div className="quiz-q" style={{ fontSize: '1.25rem' }}>{q.q}</div>
        <p className="small muted">{t('rapid.instructions')}</p>
        <button className="btn btn-ghost btn-sm mb" onClick={() => setRevealed(r => !r)}>
          <Eye /> {t('rapid.toggleAnswer', { verb: revealed ? t('common.hide') : t('common.show') })}
        </button>
        <div className={revealed ? '' : 'answer-hidden'}>
          <p>{q.a}</p>
          {q.keyPoints?.length > 0 && (
            <ul className="small muted">{q.keyPoints.map((k, i) => <li key={i}>{k}</li>)}</ul>
          )}
        </div>
        <div className="quiz-nav">
          <span className="small muted">{revealed ? t('rapid.compare') : t('rapid.think')}</span>
          <button className="btn btn-primary btn-sm" onClick={next}>
            {idx + 1 >= questions.length ? t('common.finish') : t('rapid.next')} <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
