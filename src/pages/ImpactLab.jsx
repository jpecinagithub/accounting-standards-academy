import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { PageHeader, Callout } from '../components/ui.jsx';

const LETTERS = ['A', 'B', 'C', 'D'];

function Exercise({ ex, index, t }) {
  const { store, recordLab } = useProgress();
  const [picks, setPicks] = useState({ pl: null, bs: null, cf: null });
  const [checked, setChecked] = useState(false);
  const done = !!store.labs?.[ex.id];
  const GROUPS = [
    { key: 'pl', label: t('ilab.pl') },
    { key: 'bs', label: t('ilab.bs') },
    { key: 'cf', label: t('ilab.cf') },
  ];
  const allPicked = GROUPS.every(g => picks[g.key] !== null);
  const score = GROUPS.filter(g => picks[g.key] === ex.answer[g.key]).length;
  const perfect = checked && score === 3;

  const check = () => { setChecked(true); if (score === 3) recordLab(ex.id); };
  const reset = () => { setPicks({ pl: null, bs: null, cf: null }); setChecked(false); };

  return (
    <div className="lab-ex">
      <div className="flex between center wrap gap mb">
        <span className="badge">{t('common.exercise', { n: index + 1 })}</span>
        {done && <span className="badge badge-green"><CheckCircle2 size={12} /> {t('common.solved')}</span>}
      </div>
      <div className="journal-card">
        <div className="txn">{t('ilab.journalEntry')}</div>
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
        {!checked && <button className="btn btn-primary btn-sm" disabled={!allPicked} onClick={check}>{t('ilab.check')}</button>}
        {checked && <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCcw /> {t('common.retry')}</button>}
      </div>
      {checked && (
        <div className={`quiz-feedback ${perfect ? 'ok' : 'no'} mt`}>
          <strong className="flex center gap" style={{ gap: 6 }}>
            {perfect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
            {perfect ? t('ilab.perfect', { score }) : t('ilab.score', { score })}
          </strong>
          {ex.explanation}
        </div>
      )}
    </div>
  );
}

export default function ImpactLab() {
  const { store } = useProgress();
  const t = useT();
  const { IMPACT_LAB } = useContent();
  const done = IMPACT_LAB.filter(e => store.labs?.[e.id]).length;
  return (
    <div>
      <PageHeader
        kicker={t('ilab.kicker')}
        title={t('nav.impactLab')}
        lead={t('ilab.lead')}
      />
      <p className="small muted mb">{t('ilab.progress', { done, total: IMPACT_LAB.length })}</p>
      {IMPACT_LAB.map((ex, i) => <Exercise key={ex.id} ex={ex} index={i} t={t} />)}
      <Callout type="key" title={t('ilab.why')}>
        {t('ilab.whyText')}
      </Callout>
    </div>
  );
}
