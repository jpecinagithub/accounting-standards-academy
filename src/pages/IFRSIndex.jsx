import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Clock } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { PageHeader, ModuleStatusDot } from '../components/ui.jsx';

export default function IFRSIndex() {
  const { store } = useProgress();
  const t = useT();
  const { MODULES } = useContent();
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
        kicker={t('ifrs.kicker')}
        title={t('nav.ifrs')}
        lead={t('ifrs.lead')}
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
                      <div className="small muted flex center gap" style={{ gap: 5 }}><Clock size={12} />{t('common.minutes', { n: m.minutes })} · {t('common.questions', { n: m.quiz?.length || 0 })}</div>
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
