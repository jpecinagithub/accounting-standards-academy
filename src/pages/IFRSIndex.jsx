import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Clock } from 'lucide-react';
import { MODULES } from '../data/index.js';
import { useProgress } from '../store/progress.jsx';
import { PageHeader, ModuleStatusDot } from '../components/ui.jsx';

export default function IFRSIndex() {
  const { store } = useProgress();
  const completed = store.completed || {};
  const groups = {};
  MODULES.forEach(m => {
    const key = m.standard || 'General';
    if (!groups[key]) groups[key] = [];
    groups[key].push(m);
  });
  const order = Object.keys(groups).sort();

  return (
    <div>
      <PageHeader
        kicker="Standard by standard"
        title="IFRS Standards"
        lead="Every module mapped to the standard it teaches — from the Conceptual Framework and IAS 1 through IFRS 9, 15 and 16 to group accounting."
      />
      <div className="grid grid-2">
        {order.map(std => (
          <div className="card" key={std}>
            <h3><Landmark /> {std}</h3>
            <div className="flex" style={{ flexDirection: 'column', gap: '0.5rem', marginTop: '0.6rem' }}>
              {groups[std].map(m => (
                <Link key={m.id} to={`/module/${m.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="flex center gap" style={{ gap: '0.7rem', padding: '0.45rem 0.5rem', borderRadius: 9, background: 'var(--bg-soft)' }}>
                    <ModuleStatusDot done={!!completed[m.id]} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{m.title}</div>
                      <div className="small muted flex center gap" style={{ gap: 5 }}><Clock size={12} />{m.minutes} min · {m.quiz?.length || 0} questions</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
