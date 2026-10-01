import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Clock, CheckCircle2, ArrowRight, Crown } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { PageHeader, Callout } from '../components/ui.jsx';

export default function CaseStudies() {
  const { store } = useProgress();
  const t = useT();
  const { CASES } = useContent();
  return (
    <div>
      <PageHeader
        kicker={t('cases.kicker')}
        title={t('nav.cases')}
        lead={t('cases.lead')}
      />
      <div className="grid">
        {CASES.map(c => {
          const done = !!store.labs?.[`case-${c.id}`];
          const capstone = c.id === 'case-capstone';
          return (
            <Link key={c.id} to={`/case/${c.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="module-card" style={capstone ? { borderColor: 'var(--accent-dim)' } : undefined}>
                <div className="stat-icon">{capstone ? <Crown /> : <Briefcase />}</div>
                <div style={{ flex: 1 }}>
                  <h4>{c.title} {done && <CheckCircle2 size={15} style={{ color: 'var(--success)', verticalAlign: '-2px' }} />}</h4>
                  <div className="module-meta">
                    {capstone && <span className="badge badge-gold">{t('cases.capstone')}</span>}
                    <span className="flex center gap" style={{ gap: 4 }}><Clock size={13} />{t('common.minutes', { n: c.minutes })}</span>
                    <span>{t('cases.findings', { n: c.findings?.length || 0 })}</span>
                  </div>
                  <p className="module-desc">{c.background?.slice(0, 160)}…</p>
                  <span className="small flex center gap" style={{ gap: 5, fontWeight: 700, marginTop: 6 }}>{t('cases.openCase')} <ArrowRight size={14} /></span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Callout type="warning" title={t('cases.noteTitle')}>
        {t('cases.noteText')}
      </Callout>
    </div>
  );
}
