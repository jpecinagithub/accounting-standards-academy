import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { PageHeader } from '../components/ui.jsx';
import CaseRunner from '../components/CaseRunner.jsx';

export default function CasePage() {
  const { id } = useParams();
  const t = useT();
  const { CASES } = useContent();
  const c = CASES.find(x => x.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!c) {
    return (
      <div className="empty">
        <h3>{t('casePage.notFound')}</h3>
        <Link className="btn btn-ghost" to="/cases">{t('casePage.back')}</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/cases" className="small muted flex center gap" style={{ gap: 6, marginBottom: '0.8rem' }}>
        <ArrowLeft size={14} /> {t('nav.cases')}
      </Link>
      <PageHeader
        kicker={t('casePage.kicker')}
        title={c.title}
        lead={null}
      />
      <div className="flex gap wrap mb">
        <span className="badge"><Clock size={12} /> {t('common.minutes', { n: c.minutes })}</span>
        {c.id === 'case-capstone' && <span className="badge badge-gold">{t('casePage.capstoneBadge')}</span>}
      </div>
      <div className="card"><CaseRunner caseData={c} /></div>
    </div>
  );
}
