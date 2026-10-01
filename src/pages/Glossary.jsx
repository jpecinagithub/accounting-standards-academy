import React, { useState, useMemo } from 'react';
import { Search, BookMarked } from 'lucide-react';
import { GLOSSARY } from '../data/index.js';
import { PageHeader } from '../components/ui.jsx';

export default function Glossary() {
  const [q, setQ] = useState('');
  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    const all = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
    if (!t) return all;
    return all.filter(g => g.term.toLowerCase().includes(t) || g.definition.toLowerCase().includes(t));
  }, [q]);

  return (
    <div>
      <PageHeader
        kicker="Speak the language"
        title="Glossary"
        lead={`${GLOSSARY.length} terms every finance professional should be able to define without hesitation.`}
      />
      <div className="gloss-search">
        <input
          type="text" placeholder="Search terms or definitions…" value={q}
          onChange={e => setQ(e.target.value)}
        />
      </div>
      <p className="small muted mb">{list.length} term{list.length === 1 ? '' : 's'}</p>
      <div className="gloss-grid">
        {list.map((g, i) => (
          <div className="gloss-card" key={i}>
            <div className="term">{g.term}</div>
            <div className="def">{g.definition}</div>
          </div>
        ))}
      </div>
      {list.length === 0 && (
        <div className="empty"><BookMarked /><h3>No matches</h3><p className="muted small">Try a different search.</p></div>
      )}
    </div>
  );
}
