import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Bookmark } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { LEVEL_LABEL, label } from '../i18n/labels.js';
import { PageHeader, ModuleStatusDot, ProgressBar } from '../components/ui.jsx';

export default function LearningPath() {
  const { store } = useProgress();
  const t = useT();
  const lang = store.lang === 'es' ? 'es' : 'en';
  const { LEVELS, MODULES } = useContent();
  const completed = store.completed || {};
  const totalQuiz = MODULES.reduce((a, m) => a + (m.quiz?.length || 0), 0);

  return (
    <div>
      <PageHeader
        kicker={t('path.kicker')}
        title={t('nav.learningPath')}
        lead={t('path.lead', { modules: MODULES.length, total: totalQuiz })}
      />
      {LEVELS.map(lv => {
        const done = lv.modules.filter(m => completed[m.id]).length;
        const pct = Math.round((done / lv.modules.length) * 100);
        return (
          <div className="level-block" key={lv.n}>
            <div className="level-head">
              <span className="level-num">{t('common.level', { n: lv.n })}</span>
              <h2 style={{ margin: 0 }}>{label(LEVEL_LABEL, lv.title, lang)}</h2>
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
                        <span className="flex center gap" style={{ gap: 4 }}><Clock size={13} />{t('common.minutes', { n: m.minutes })}</span>
                        <span>{t('common.questions', { n: m.quiz?.length || 0 })}</span>
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
