import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Bookmark } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { LEVELS, MODULES } from '../data/index.js';
import { PageHeader, ModuleStatusDot, ProgressBar } from '../components/ui.jsx';

export default function LearningPath() {
  const { store } = useProgress();
  const completed = store.completed || {};
  const totalQuiz = MODULES.reduce((a, m) => a + (m.quiz?.length || 0), 0);

  return (
    <div>
      <PageHeader
        kicker="Structured curriculum"
        title="Learning Path"
        lead={`${MODULES.length} modules across 9 levels, ${totalQuiz} quiz questions. Work top to bottom — each level builds on the last.`}
      />
      {LEVELS.map(lv => {
        const done = lv.modules.filter(m => completed[m.id]).length;
        const pct = Math.round((done / lv.modules.length) * 100);
        return (
          <div className="level-block" key={lv.n}>
            <div className="level-head">
              <span className="level-num">Level {lv.n}</span>
              <h2 style={{ margin: 0 }}>{lv.title}</h2>
              <span className="level-progress serif-num">{done}/{lv.modules.length}</span>
            </div>
            <ProgressBar thin value={pct} />
            <div className="grid mt" style={{ marginTop: '0.9rem' }}>
              {lv.modules.map(m => (
                <Link key={m.id} to={`/module/${m.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="module-card">
                    <ModuleStatusDot done={!!completed[m.id]} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4>{m.title} {store.bookmarks?.includes(m.id) && <Bookmark size={14} style={{ color: 'var(--accent-text)', verticalAlign: '-2px' }} />}</h4>
                      <div className="module-meta">
                        <span className="badge badge-gold">{m.standard}</span>
                        <span className="flex center gap" style={{ gap: 4 }}><Clock size={13} />{m.minutes} min</span>
                        <span>{m.quiz?.length || 0} questions</span>
                      </div>
                      <p className="module-desc">{m.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
