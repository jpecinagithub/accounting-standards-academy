import React from 'react';
import { Link } from 'react-router-dom';
import { FileBarChart2, ArrowRight } from 'lucide-react';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { PageHeader, Callout } from '../components/ui.jsx';
import { StatementsFlow } from '../components/visuals.jsx';

const CARDS = [
  { moduleId: 'm04', title: 'statements.card1t', text: 'statements.card1x' },
  { moduleId: 'm31', title: 'statements.card2t', text: 'statements.card2x' },
  { moduleId: 'm32', title: 'statements.card3t', text: 'statements.card3x' },
  { moduleId: 'm33', title: 'statements.card4t', text: 'statements.card4x' },
  { moduleId: 'm07', title: 'statements.card5t', text: 'statements.card5x' },
];

export default function StatementsHub() {
  const t = useT();
  const { MODULES } = useContent();
  return (
    <div>
      <PageHeader
        kicker={t('statements.kicker')}
        title={t('nav.statements')}
        lead={t('statements.lead')}
      />
      <div className="card mb"><StatementsFlow /></div>
      <div className="grid grid-2">
        {CARDS.map(c => {
          const m = MODULES.find(x => x.id === c.moduleId);
          if (!m) return null;
          return (
            <Link key={c.moduleId} to={`/module/${c.moduleId}`} className="card skill-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3><FileBarChart2 /> {t(c.title)}</h3>
              <p className="small muted">{t(c.text)}</p>
              <span className="small flex center gap" style={{ gap: 5, fontWeight: 700 }}>{m.title} <ArrowRight size={14} /></span>
            </Link>
          );
        })}
      </div>
      <Callout type="key" title={t('statements.rule')}>
        {t('statements.ruleText')}
      </Callout>
    </div>
  );
}
