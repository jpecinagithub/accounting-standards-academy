import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Lightbulb } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { JOURNAL_LAB, CHART_OF_ACCOUNTS } from '../data/index.js';
import { PageHeader, JournalEntryCard, FSImpact, Callout } from '../components/ui.jsx';

function Exercise({ ex, index }) {
  const { store, recordLab } = useProgress();
  const [dr, setDr] = useState('');
  const [cr, setCr] = useState('');
  const [amt, setAmt] = useState('');
  const [checked, setChecked] = useState(false);
  const done = !!store.labs?.[ex.id];

  const exp = ex.entry;
  const norm = (s) => (s || '').trim().toLowerCase();
  const isOk = () => {
    if (exp.debits.length !== 1 || exp.credits.length !== 1) return false;
    return norm(dr) === norm(exp.debits[0].account)
      && norm(cr) === norm(exp.credits[0].account)
      && Number(amt) === Number(exp.debits[0].amount);
  };
  const ok = checked && isOk();

  const check = () => {
    setChecked(true);
    if (isOk()) recordLab(ex.id);
  };
  const reset = () => { setDr(''); setCr(''); setAmt(''); setChecked(false); };

  return (
    <div className="lab-ex">
      <div className="flex between center wrap gap mb">
        <span className="badge">Exercise {index + 1}</span>
        {done && <span className="badge badge-green"><CheckCircle2 size={12} /> Solved</span>}
      </div>
      <p className="situation"><strong>Situation:</strong> {ex.situation}</p>
      {ex.hint && !checked && (
        <Callout type="key" title="Hint">{ex.hint}</Callout>
      )}
      <div className="lab-grid">
        <div className="field">
          <label>Debit account</label>
          <select value={dr} onChange={e => setDr(e.target.value)} disabled={checked && ok}>
            <option value="">— select —</option>
            {CHART_OF_ACCOUNTS.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
        <div className="field">
          <label>Credit account</label>
          <select value={cr} onChange={e => setCr(e.target.value)} disabled={checked && ok}>
            <option value="">— select —</option>
            {CHART_OF_ACCOUNTS.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
      </div>
      <div className="lab-grid">
        <div className="field">
          <label>Amount</label>
          <input type="number" min="0" placeholder="e.g. 10000" value={amt} onChange={e => setAmt(e.target.value)} disabled={checked && ok} />
        </div>
        <div className="field" style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
          {!checked || !ok ? (
            <button className="btn btn-primary btn-sm" onClick={check} disabled={!dr || !cr || !amt}>Check entry</button>
          ) : null}
          {checked && <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCcw /> Reset</button>}
        </div>
      </div>

      {checked && (
        ok ? (
          <div>
            <div className="quiz-feedback ok"><strong><span className="flex center gap" style={{ gap: 6 }}><CheckCircle2 size={16} /> Correct entry.</span></strong>{ex.explanation}</div>
            <h4 className="mt">Financial statement impact</h4>
            <FSImpact impact={ex.impact} />
          </div>
        ) : (
          <div>
            <div className="quiz-feedback no">
              <strong><span className="flex center gap" style={{ gap: 6 }}><XCircle size={16} /> Not quite — here is the correct entry:</span></strong>
            </div>
            <JournalEntryCard journal={{
              transaction: ex.situation,
              lines: [
                ...exp.debits.map(d => ({ account: d.account, dr: d.amount, cr: null })),
                ...exp.credits.map(c => ({ account: c.account, dr: null, cr: c.amount })),
              ],
            }} />
            <p className="small">{ex.explanation}</p>
            <h4 className="mt">Financial statement impact</h4>
            <FSImpact impact={ex.impact} />
          </div>
        )
      )}
    </div>
  );
}

export default function JournalLab() {
  const { store } = useProgress();
  const done = JOURNAL_LAB.filter(e => store.labs?.[e.id]).length;
  return (
    <div>
      <PageHeader
        kicker="Hands-on double entry"
        title="Journal Entry Lab"
        lead="Real business situations. You choose the debit, the credit and the amount — then see the full P&L, balance sheet and cash flow impact, every time."
      />
      <p className="small muted mb">{done} of {JOURNAL_LAB.length} exercises solved</p>
      {JOURNAL_LAB.map((ex, i) => <Exercise key={ex.id} ex={ex} index={i} />)}
      <Callout type="interview" title="The discipline">
        Never learn a journal entry in isolation. Every entry answers three questions: what happens to profit, what happens to the balance sheet, and does any cash move?
      </Callout>
    </div>
  );
}
