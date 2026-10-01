import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { shuffle } from '../data/index.js';
import { PageHeader, JournalEntryCard, FSImpact, Callout } from '../components/ui.jsx';

function Exercise({ ex, index, accounts }) {
  const { store, recordLab } = useProgress();
  const t = useT();
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
        <span className="badge">{t('common.exercise', { n: index + 1 })}</span>
        {done && <span className="badge badge-green"><CheckCircle2 size={12} /> {t('common.solved')}</span>}
      </div>
      <p className="situation"><strong>{t('common.situation')}</strong> {ex.situation}</p>
      {ex.hint && !checked && (
        <Callout type="key" title={t('common.hint')}>{ex.hint}</Callout>
      )}
      <div className="lab-grid">
        <div className="field">
          <label>{t('jlab.debitAccount')}</label>
          <select value={dr} onChange={e => setDr(e.target.value)} disabled={checked && ok}>
            <option value="">{t('common.select')}</option>
            {accounts.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
        <div className="field">
          <label>{t('jlab.creditAccount')}</label>
          <select value={cr} onChange={e => setCr(e.target.value)} disabled={checked && ok}>
            <option value="">{t('common.select')}</option>
            {accounts.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
      </div>
      <div className="lab-grid">
        <div className="field">
          <label>{t('common.amount')}</label>
          <input type="number" min="0" placeholder={t('jlab.amountPh')} value={amt} onChange={e => setAmt(e.target.value)} disabled={checked && ok} />
        </div>
        <div className="field" style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
          {(!checked || !ok) && (
            <button className="btn btn-primary btn-sm" onClick={check} disabled={!dr || !cr || !amt}>{t('jlab.check')}</button>
          )}
          {checked && <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCcw /> {t('common.reset')}</button>}
        </div>
      </div>

      {checked && (
        ok ? (
          <div>
            <div className="quiz-feedback ok"><strong><span className="flex center gap" style={{ gap: 6 }}><CheckCircle2 size={16} /> {t('jlab.correct')}</span></strong>{ex.explanation}</div>
            <h4 className="mt">{t('jlab.impact')}</h4>
            <FSImpact impact={ex.impact} />
          </div>
        ) : (
          <div>
            <div className="quiz-feedback no">
              <strong><span className="flex center gap" style={{ gap: 6 }}><XCircle size={16} /> {t('jlab.notQuite')}</span></strong>
            </div>
            <JournalEntryCard journal={{
              transaction: ex.situation,
              lines: [
                ...exp.debits.map(d => ({ account: d.account, dr: d.amount, cr: null })),
                ...exp.credits.map(c => ({ account: c.account, dr: null, cr: c.amount })),
              ],
            }} />
            <p className="small">{ex.explanation}</p>
            <h4 className="mt">{t('jlab.impact')}</h4>
            <FSImpact impact={ex.impact} />
          </div>
        )
      )}
    </div>
  );
}

export default function JournalLab() {
  const { store } = useProgress();
  const t = useT();
  const { JOURNAL_LAB, CHART_OF_ACCOUNTS } = useContent();
  const done = JOURNAL_LAB.filter(e => store.labs?.[e.id]).length;
  return (
    <div>
      <PageHeader
        kicker={t('jlab.kicker')}
        title={t('nav.journalLab')}
        lead={t('jlab.lead')}
      />
      <p className="small muted mb">{t('jlab.progress', { done, total: JOURNAL_LAB.length })}</p>
      {JOURNAL_LAB.map((ex, i) => <Exercise key={ex.id} ex={ex} index={i} accounts={CHART_OF_ACCOUNTS} />)}
      <Callout type="interview" title={t('jlab.discipline')}>
        {t('jlab.disciplineText')}
      </Callout>
    </div>
  );
}
