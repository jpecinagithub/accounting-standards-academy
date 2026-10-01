import React, { useState } from 'react';
import { Check, Flag, RotateCcw, ListChecks } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';
import { DataTable, Callout } from './ui.jsx';

/**
 * Interactive case study: select every finding that warrants investigation,
 * then compare against the answer key and read the suggested review.
 */
export default function CaseRunner({ caseData }) {
  const { recordLab } = useProgress();
  const t = useT();
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id) => {
    if (submitted) return;
    setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  };

  const issues = caseData.findings.filter(f => f.isIssue);
  const hits = selected.filter(id => issues.some(f => f.id === id));
  const falsePos = selected.filter(id => !issues.some(f => f.id === id));
  const missed = issues.filter(f => !selected.includes(f.id));

  const submit = () => {
    setSubmitted(true);
    recordLab(`case-${caseData.id}`);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const reset = () => { setSelected([]); setSubmitted(false); };

  return (
    <div>
      <p style={{ fontSize: '1rem' }}>{caseData.background}</p>

      {(caseData.tables || []).map((t2, i) => (
        <div key={i} className="mt">
          <h3>{t2.title}</h3>
          <DataTable headers={t2.headers} rows={t2.rows} />
        </div>
      ))}

      <div className="divider" />
      <h3><span className="flex center gap"><ListChecks size={19} />{caseData.task || t('case.taskDefault')}</span></h3>

      <div className="mt">
        {caseData.findings.map(f => {
          const checked = selected.includes(f.id);
          const isHit = submitted && f.isIssue && checked;
          const isMiss = submitted && f.isIssue && !checked;
          const isFalse = submitted && !f.isIssue && checked;
          return (
            <div key={f.id}>
              <div
                className={`finding${checked ? ' checked' : ''}${isHit ? ' hit' : ''}${isFalse ? ' miss' : ''}`}
                onClick={() => toggle(f.id)}
              >
                <div className="cb"><Check /></div>
                <div>
                  <div>{f.text}</div>
                  {submitted && (
                    <div className={`verdict ${f.isIssue ? 'ok' : 'bad'}`}>
                      {isHit && t('case.hit')}
                      {isMiss && t('case.miss')}
                      {isFalse && t('case.false')}
                      {!checked && !f.isIssue && t('case.ignored')}
                    </div>
                  )}
                </div>
              </div>
              {submitted && (isHit || isMiss || isFalse) && (
                <div className="small muted" style={{ margin: '-0.2rem 0 0.7rem 2.6rem' }}>{f.explanation}</div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <button className="btn btn-primary mt" onClick={submit} disabled={selected.length === 0}>
          <Flag /> {t('case.submit', { n: selected.length })}
        </button>
      ) : (
        <div className="mt">
          <div className="card">
            <h3>{t('case.score')}</h3>
            <p className="serif-num" style={{ fontSize: '1.6rem', fontWeight: 800 }}>
              {t('case.issuesFound', { hits: hits.length, total: issues.length })}
              <span className="small muted"> · {t('case.fpMissed', { fp: falsePos.length, missed: missed.length })}</span>
            </p>
            <p className="small muted">
              {hits.length === issues.length && falsePos.length === 0
                ? t('case.perfect')
                : t('case.imperfect')}
            </p>
            <button className="btn btn-ghost btn-sm" onClick={reset}><RotateCcw /> {t('common.retry')}</button>
          </div>

          <div className="divider" />
          <h2>{t('case.suggestedReview')}</h2>
          {(caseData.review || []).map((r, i) => (
            <Callout key={i} type={i === 0 ? 'key' : 'example'} title={r.title}>{r.body}</Callout>
          ))}
        </div>
      )}
    </div>
  );
}
