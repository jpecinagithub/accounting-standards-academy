import React, { useState, useMemo } from 'react';
import { GraduationCap, PlayCircle, Clock } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { shuffle } from '../data/index.js';
import { PageHeader, Callout } from '../components/ui.jsx';
import Quiz from '../components/Quiz.jsx';

const N = 60;

function band(pct, t) {
  if (pct >= 90) return { label: t('exam.band90'), color: 'var(--success)', desc: t('exam.band90d') };
  if (pct >= 80) return { label: t('exam.band80'), color: 'var(--accent-text)', desc: t('exam.band80d') };
  if (pct >= 70) return { label: t('exam.band70'), color: 'var(--info)', desc: t('exam.band70d') };
  if (pct >= 60) return { label: t('exam.band60'), color: 'var(--warn)', desc: t('exam.band60d') };
  return { label: t('exam.band0'), color: 'var(--danger)', desc: t('exam.band0d') };
}

export default function FinalExam() {
  const { store, recordExam } = useProgress();
  const t = useT();
  const { QUESTION_BANK } = useContent();
  const [started, setStarted] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState(null);

  const questions = useMemo(() => shuffle(QUESTION_BANK).slice(0, Math.min(N, QUESTION_BANK.length)), [attempt]); // eslint-disable-line

  const onComplete = ({ score, total }) => {
    const pct = Math.round((score / total) * 100);
    recordExam({ score, total });
    setResult({ score, total, pct, ...band(pct, t) });
    window.scrollTo(0, 0);
  };

  if (!started) {
    return (
      <div>
        <PageHeader
          kicker={t('exam.kicker')}
          title={t('nav.exam')}
          lead={t('exam.lead')}
        />
        <div className="card" style={{ maxWidth: 640 }}>
          <h3><GraduationCap /> {t('exam.how')}</h3>
          <ul>
            <li><strong>{t('exam.b1', { n: Math.min(N, QUESTION_BANK.length) })}</strong> {t('exam.b1b', { total: QUESTION_BANK.length })}</li>
            <li>{t('exam.b2')}</li>
            <li>{t('exam.b3')}</li>
            <li>{t('exam.b4')}</li>
          </ul>
          <div className="flex gap wrap mt">
            <span className="badge"><Clock size={12} /> {t('exam.time')}</span>
            {store.exams?.length > 0 && <span className="badge badge-gold">{t('exam.best', { pct: Math.max(...store.exams.map(e => e.pct)) })}</span>}
          </div>
          <div className="mt">
            <button className="btn btn-primary" onClick={() => setStarted(true)}><PlayCircle /> {t('exam.start')}</button>
          </div>
        </div>
        <Callout type="interview" title={t('exam.strategy')}>
          {t('exam.strategyText')}
        </Callout>
      </div>
    );
  }

  return (
    <div>
      <PageHeader kicker={t('exam.kicker2')} title={t('exam.assessTitle')} lead={t('exam.assessLead', { n: questions.length })} />
      {result && (
        <div className="exam-band" style={{ borderColor: result.color, background: 'var(--panel)' }}>
          <div className="band-label" style={{ color: result.color }}>{result.pct}% — {result.label}</div>
          <p className="muted" style={{ marginBottom: 0 }}>{result.desc}</p>
          <p className="serif-num muted">{t('exam.resultScore', { score: result.score, total: result.total })}</p>
          <button className="btn btn-ghost btn-sm" onClick={() => { setAttempt(a => a + 1); setResult(null); setStarted(true); }}>{t('exam.retake')}</button>
        </div>
      )}
      <Quiz
        key={attempt}
        questions={questions}
        quizId={`final-exam-${attempt}`}
        title={t('exam.quizTitle')}
        instantFeedback={false}
        ctaLabel={t('exam.submit')}
        onComplete={onComplete}
      />
    </div>
  );
}
