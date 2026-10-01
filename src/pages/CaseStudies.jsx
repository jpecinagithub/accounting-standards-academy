import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Clock, CheckCircle2, ArrowRight, Crown } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { CASES } from '../data/index.js';
import { PageHeader, Callout } from '../components/ui.jsx';

export default function CaseStudies() {
  const { store } = useProgress();
  return (
    <div>
      <PageHeader
        kicker="Real judgment, real data"
        title="Practical Cases"
        lead="Month-end packs, loan portfolios, leases and anomalies. Select the findings that warrant investigation, then read the suggested professional review."
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
                    {capstone && <span className="badge badge-gold">Capstone</span>}
                    <span className="flex center gap" style={{ gap: 4 }}><Clock size={13} />{c.minutes} min</span>
                    <span>{c.findings?.length || 0} findings to assess</span>
                  </div>
                  <p className="module-desc">{c.background?.slice(0, 160)}…</p>
                  <span className="small flex center gap" style={{ gap: 5, fontWeight: 700, marginTop: 6 }}>Open case <ArrowRight size={14} /></span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Callout type="warning" title="A note on professional skepticism">
        In every case, some findings are red herrings. A controller who investigates everything investigates nothing — focus is part of the skill being tested.
      </Callout>
    </div>
  );
}
