import React from 'react';
import { Link } from 'react-router-dom';
import { FileBarChart2, ArrowRight } from 'lucide-react';
import { MODULES } from '../data/index.js';
import { PageHeader, Callout } from '../components/ui.jsx';
import { StatementsFlow } from '../components/visuals.jsx';

const CARDS = [
  { moduleId: 'm04', title: 'The five statements', text: 'Income statement, balance sheet, cash flow statement, statement of changes in equity, and the notes — structure, purpose and how they articulate.' },
  { moduleId: 'm31', title: 'Reading the P&L', text: 'Revenue to net income: gross profit, EBITDA, EBIT. Bridge analysis — price, volume, mix, FX and cost effects.' },
  { moduleId: 'm32', title: 'Reading the balance sheet', text: 'Working capital, liquidity, leverage. What the statement of financial position tells you about risk.' },
  { moduleId: 'm33', title: 'Reading cash flow', text: 'Profit ≠ cash. Why cash can fall while profit rises — working capital absorption, capex timing, non-cash charges.' },
  { moduleId: 'm07', title: 'IAS 7 deep dive', text: 'Operating, investing, financing. Direct vs indirect method, and where interest, dividends and tax really belong.' },
];

export default function StatementsHub() {
  return (
    <div>
      <PageHeader
        kicker="One story, three statements"
        title="Financial Statements"
        lead="Master the statements themselves before the standards that shape them: how they connect, how to read them, and where controllers most often find the truth hiding."
      />
      <div className="card mb"><StatementsFlow /></div>
      <div className="grid grid-2">
        {CARDS.map(c => {
          const m = MODULES.find(x => x.id === c.moduleId);
          if (!m) return null;
          return (
            <Link key={c.moduleId} to={`/module/${c.moduleId}`} className="card skill-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3><FileBarChart2 /> {c.title}</h3>
              <p className="small muted">{c.text}</p>
              <span className="small flex center gap" style={{ gap: 5, fontWeight: 700 }}>{m.title} <ArrowRight size={14} /></span>
            </Link>
          );
        })}
      </div>
      <Callout type="key" title="Controller's rule" mt>
        When something looks odd in the P&L, the answer is usually in working capital on the balance sheet — and the cash flow statement will prove it.
      </Callout>
    </div>
  );
}
