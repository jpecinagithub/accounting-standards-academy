import React, { useState } from 'react';
import { Check, FlaskConical, Flag, RotateCcw } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { MONTH_END } from '../data/index.js';
import { PageHeader, Callout, ProgressBar } from '../components/ui.jsx';

const LETTERS = ['A', 'B', 'C', 'D'];

export default function Simulator() {
  const { store, recordLab, recordSim } = useProgress();
  const [ticks, setTicks] = useState({});
  const [phase, setPhase] = useState('checklist'); // checklist | issues | done
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const checklist = MONTH_END.checklist;
  const issues = MONTH_END.scenario.issues;
  const doneCount = Object.values(ticks).filter(Boolean).length;
  const allChecked = doneCount === checklist.length;

  const toggleTick = (i) => setTicks(t => ({ ...t, [i]: !t[i] }));

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
        kicker="Close the books"
        title="Month-End Simulator"
        lead="Work the close like a controller: complete the checklist, then catch the issues hidden in the numbers before sign-off."
        actions={prev && <span className="badge badge-gold">Last run: {prev.score}/{prev.total} issues found</span>}
      />

      {phase === 'checklist' && (
        <div className="card">
          <h3><FlaskConical /> Step 1 — Close checklist</h3>
          <p className="small muted">Tick each item as you “complete” it. A disciplined close is a checklist followed in order, every month.</p>
          <div className="mb"><ProgressBar value={(doneCount / checklist.length) * 100} /></div>
          <ul className="checklist">
            {checklist.map((c, i) => (
              <li key={i} className={ticks[i] ? 'done' : ''} onClick={() => toggleTick(i)}>
                <span className="cb"><Check /></span>{c}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary mt" disabled={!allChecked} onClick={() => { setPhase('issues'); window.scrollTo(0, 0); }}>
            {allChecked ? 'Checklist complete — review the numbers' : `Complete the checklist (${doneCount}/${checklist.length})`}
          </button>
        </div>
      )}

      {phase !== 'checklist' && (
        <div className="card mb">
          <h3>Background</h3>
          <p>{MONTH_END.scenario.background}</p>
          <Callout type="warning" title="Your job">
            Six issues are hiding below. For each one, choose the correct accounting treatment. The close cannot be signed off until they are resolved.
          </Callout>
        </div>
      )}

      {phase === 'issues' && issues.map((iss, i) => (
        <div className="lab-ex" key={iss.id}>
          <div className="flex between center wrap gap mb">
            <span className="badge">Issue {i + 1}</span>
            <span className="badge badge-blue">{iss.area}</span>
          </div>
          <p><strong>Situation:</strong> {iss.description}</p>
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
          <Flag /> Sign off the close ({Object.keys(answers).length}/{issues.length} resolved)
        </button>
      )}

      {phase === 'done' && (
        <div>
          <div className="card mb" style={{ textAlign: 'center' }}>
            <h2>Close signed off</h2>
            <div className="score-ring serif-num">
              {issues.filter((iss, i) => answers[i] === iss.answer).length} / {issues.length}
            </div>
            <p className="muted">issues resolved correctly</p>
            <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCcw /> Run the close again</button>
          </div>
          {issues.map((iss, i) => {
            const ok = answers[i] === iss.answer;
            return (
              <div className="lab-ex" key={iss.id}>
                <div className="flex between center wrap gap mb">
                  <span className="badge">{iss.area}</span>
                  <span className={`badge ${ok ? 'badge-green' : 'badge-red'}`}>{ok ? 'Resolved correctly' : 'Missed'}</span>
                </div>
                <p className="small"><strong>Situation:</strong> {iss.description}</p>
                <p className="small">Correct treatment: <strong style={{ color: 'var(--success)' }}>{LETTERS[iss.answer]} — {iss.options[iss.answer]}</strong></p>
                <p className="small muted">{iss.explanation}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
