import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { CASES } from '../data/index.js';
import { PageHeader } from '../components/ui.jsx';
import CaseRunner from '../components/CaseRunner.jsx';

export default function CasePage() {
  const { id } = useParams();
  const c = CASES.find(x => x.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!c) {
    return (
      <div className="empty">
        <h3>Case not found</h3>
        <Link className="btn btn-ghost" to="/cases">Back to cases</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/cases" className="small muted flex center gap" style={{ gap: 6, marginBottom: '0.8rem' }}>
        <ArrowLeft size={14} /> Practical Cases
      </Link>
      <PageHeader
        kicker="Case study"
        title={c.title}
        lead={null}
      />
      <div className="flex gap wrap mb">
        <span className="badge"><Clock size={12} /> {c.minutes} min</span>
        {c.id === 'case-capstone' && <span className="badge badge-gold">CFO / Controller capstone</span>}
      </div>
      <div className="card"><CaseRunner caseData={c} /></div>
    </div>
  );
}
