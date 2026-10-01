import React, { useState, useMemo } from 'react';
import { BookMarked } from 'lucide-react';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { PageHeader } from '../components/ui.jsx';

export default function Glossary() {
  const t = useT();
  const { GLOSSARY } = useContent();
  const [q, setQ] = useState('');
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    const all = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
    if (!s) return all;
    return all.filter(g => g.term.toLowerCase().includes(s) || g.definition.toLowerCase().includes(s));
  }, [q, GLOSSARY]);

  return (
    <div>
      <PageHeader
        kicker={t('glossary.kicker')}
        title={t('nav.glossary')}
        lead={t('glossary.lead', { n: GLOSSARY.length })}
      />
      <div className="gloss-search">
        <input
          type="text" placeholder={t('glossary.search')} value={q}
          onChange={e => setQ(e.target.value)}
          aria-label={t('glossary.search')}
        />
      </div>
      <p className="small muted mb">{t('glossary.manyTerms', { n: list.length })}</p>
      <div className="gloss-grid">
        {list.map((g, i) => (
          <div className="gloss-card" key={i}>
            <div className="term">{g.term}</div>
            <div className="def">{g.definition}</div>
          </div>
        ))}
      </div>
      {list.length === 0 && (
        <div className="empty"><BookMarked /><h3>{t('common.noMatches')}</h3><p className="muted small">{t('glossary.tryDifferent')}</p></div>
      )}
    </div>
  );
}
