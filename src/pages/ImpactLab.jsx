import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { IMPACT_LAB } from '../data/index.js';
import { PageHeader, Callout } from '../components/ui.jsx';

const LETTERS = ['A', 'B', 'C', 'D'];
const GROUPS = [
  { key: 'pl', label: 'Profit & Loss impact' },
  { key: 'bs', label: 'Balance Sheet impact' },
  { key: 'cf', label: 'Cash Flow impact' },
];

function Exercise({ ex, index }) {
  const { store, recordLab } = useProgress();
  const [picks, setPicks] = useState({ pl: null, bs: null, cf: null });
  const [checked, setChecked] = useState(false);
  const done = !!store.labs?.[ex.id];
  const allPicked = GROUPS.every(g => picks[g.key] !== null);
  const score = GROUPS.filter(g => picks[g.key] === ex.answer[g.key]).length;
  const perfect = checked && score === 3;

  const check = () => { setChecked(true); if (score === 3) recordLab(ex.id); };
  const reset = () => { setPicks({ pl: null, bs: null, cf: null }); setChecked(false); };

  return (
    <div className="lab-ex">
      <div className="flex between center wrap gap mb">
        <span className="badge">Exercise {index + 1}</span>
        {done && <span className="badge badge-green"><CheckCircle2 size={12} /> Solved</span>}
      </div>
      <div className="journal-card">
        <div className="txn">Journal entry</div>
        <div style={{ fontWeight: 700, fontSize: '1rem' }}>{ex.entry}</div>
      </div>
      {GROUPS.map(g => (
        <div key={g.key} className="mb">
          <div className="field"><label>{g.label}</label></div>
          <div className="opt-list">
            {ex[g.key].map((opt, i) => {
              let cls = 'opt';
              if (checked) {
                if (i === ex.answer[g.key]) cls += ' correct';
                else if (i === picks[g.key]) cls += ' wrong';
              } else if (i === picks[g.key]) cls += ' selected';
              return (
                <button key={i} className={cls} disabled={checked}
                  onClick={() => setPicks({ ...picks, [g.key]: i })}>
                  <span className="letter">{LETTERS[i]}</span><span>{opt}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <div className="flex gap">
        {!checked && <button className="btn btn-primary btn-sm" disabled={!allPicked} onClick={check}>Check impact</button>}
        {checked && <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCcw /> Try again</button>}
      </div>
      {checked && (
        <div className={`quiz-feedback ${perfect ? 'ok' : 'no'} mt`}>
          <strong className="flex center gap" style={{ gap: 6 }}>
            {perfect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
            {perfect ? `Perfect — ${score}/3 correct.` : `${score}/3 correct.`}
          </strong>
          {ex.explanation}
        </div>
      )}
    </div>
  );
}

export default function ImpactLab() {
  const { store } = useProgress();
  const done = IMPACT_LAB.filter(e => store.labs?.[e.id]).length;
  return (
    <div>
      <PageHeader
        kicker="Think like a controller"
        title="Financial Statement Impact Lab"
        lead="Given a journal entry, identify exactly what happens to the P&L, the balance sheet and the cash flow statement. This is the core judgment skill of financial reporting."
      />
      <p className="small muted mb">{done} of {IMPACT_LAB.length} exercises solved</p>
      {IMPACT_LAB.map((ex, i) => <Exercise key={ex.id} ex={ex} index={i} />)}
      <Callout type="key" title="Why this matters">
        Auditors, controllers and FP&A all live in this question: “I booked X — so what moved, and by how much?” If you can answer it for any entry, you can read any set of accounts.
      </Callout>
    </div>
  );
}
