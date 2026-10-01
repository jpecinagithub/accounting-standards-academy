import React, { useState } from 'react';
import { Check, FlaskConical, Flag, RotateCcw } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { AREA_LABEL, label } from '../i18n/labels.js';
import { PageHeader, Callout, ProgressBar } from '../components/ui.jsx';

const LETTERS = ['A', 'B', 'C', 'D'];

export default function Simulator() {
  const { store, recordLab, recordSim } = useProgress();
  const t = useT();
  const lang = store.lang === 'es' ? 'es' : 'en';
  const { MONTH_END } = useContent();
  const [ticks, setTicks] = useState({});
  const [phase, setPhase] = useState('checklist'); // checklist | issues | done
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const checklist = MONTH_END.checklist;
  const issues = MONTH_END.scenario.issues;
  const doneCount = Object.values(ticks).filter(Boolean).length;
  const allChecked = doneCount === checklist.length;

  const toggleTick = (i) => setTicks(t2 => ({ ...t2, [i]: !t2[i] }));

  const submitIssues = () => {
    setSubmitted(true);
    const score = issues.filter((iss, i) => answers[i] === iss.answer).length;
    recordLab('simulator-monthend');
    recordSim('monthend', { score, total: issues.length, checklist: doneCount, date: new Date().toISOString() });
    setPhase('done');
    window.scrollTo(0, 0);
  };

  const reset = () => { setTicks({}); setAnswers({}); setSubmitted(false); setPhase('checklist'); };

  const prev = store.sim?.monthend;

  return (
    <div>
      <PageHeader
        kicker={t('sim.kicker')}
        title={t('nav.simulator')}
        lead={t('sim.lead')}
        actions={prev && <span className="badge badge-gold">{t('sim.lastRun', { score: prev.score, total: prev.total })}</span>}
      />

      {phase === 'checklist' && (
        <div className="card">
          <h3><FlaskConical /> {t('sim.step1')}</h3>
          <p className="small muted">{t('sim.step1Text')}</p>
          <div className="mb"><ProgressBar value={(doneCount / checklist.length) * 100} /></div>
          <ul className="checklist">
            {checklist.map((c, i) => (
              <li key={i} className={ticks[i] ? 'done' : ''} onClick={() => toggleTick(i)}>
                <span className="cb"><Check /></span>{c}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary mt" disabled={!allChecked} onClick={() => { setPhase('issues'); window.scrollTo(0, 0); }}>
            {allChecked ? t('sim.complete') : t('sim.incomplete', { done: doneCount, total: checklist.length })}
          </button>
        </div>
      )}

      {phase !== 'checklist' && (
        <div className="card mb">
          <h3>{t('common.background')}</h3>
          <p>{MONTH_END.scenario.background}</p>
          <Callout type="warning" title={t('sim.yourJob')}>
            {t('sim.yourJobText')}
          </Callout>
        </div>
      )}

      {phase === 'issues' && issues.map((iss, i) => (
        <div className="lab-ex" key={iss.id}>
          <div className="flex between center wrap gap mb">
            <span className="badge">{t('sim.issue', { n: i + 1 })}</span>
            <span className="badge badge-blue">{label(AREA_LABEL, iss.area, lang)}</span>
          </div>
          <p><strong>{t('common.situation')}</strong> {iss.description}</p>
          <p className="small muted">{iss.question}</p>
          <div className="opt-list">
            {iss.options.map((opt, j) => (
              <button key={j}
                className={`opt${answers[i] === j ? ' selected' : ''}`}
                onClick={() => setAnswers(a => ({ ...a, [i]: j }))}>
                <span className="letter">{LETTERS[j]}</span><span>{opt}</span>
              </button>
            ))}
          </div>
        </div>
      ))}

      {phase === 'issues' && (
        <button className="btn btn-primary" disabled={Object.keys(answers).length < issues.length} onClick={submitIssues}>
          <Flag /> {t('sim.signoff', { a: Object.keys(answers).length, total: issues.length })}
        </button>
      )}

      {phase === 'done' && (
        <div>
          <div className="card mb" style={{ textAlign: 'center' }}>
            <h2>{t('sim.signedOff')}</h2>
            <div className="score-ring serif-num">
              {issues.filter((iss, i) => answers[i] === iss.answer).length} / {issues.length}
            </div>
            <p className="muted">{t('sim.resolvedCorrectly')}</p>
            <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCcw /> {t('sim.again')}</button>
          </div>
          {issues.map((iss, i) => {
            const ok = answers[i] === iss.answer;
            return (
              <div className="lab-ex" key={iss.id}>
                <div className="flex between center wrap gap mb">
                  <span className="badge">{label(AREA_LABEL, iss.area, lang)}</span>
                  <span className={`badge ${ok ? 'badge-green' : 'badge-red'}`}>{ok ? t('common.resolvedOk') : t('common.missed')}</span>
                </div>
                <p className="small"><strong>{t('common.situation')}</strong> {iss.description}</p>
                <p className="small">{t('sim.correctTreatment')} <strong style={{ color: 'var(--success)' }}>{LETTERS[iss.answer]} — {iss.options[iss.answer]}</strong></p>
                <p className="small muted">{iss.explanation}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
