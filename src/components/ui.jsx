import React from 'react';
import { AlertTriangle, CheckCircle2, Info, Lightbulb, BookOpen, TrendingUp, Landmark, Banknote, FileText, Scale } from 'lucide-react';

/* ---------- generic ---------- */

export function PageHeader({ kicker, title, lead, actions }) {
  return (
    <div className="page-header">
      {kicker && <div className="kicker">{kicker}</div>}
      <div className="flex between center wrap gap">
        <h1>{title}</h1>
        {actions && <div className="flex gap wrap">{actions}</div>}
      </div>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function StatCard({ icon: Icon, label, value, sub, tone }) {
  return (
    <div className="card stat-card">
      <div className="stat-icon" style={tone ? { background: tone } : undefined}><Icon /></div>
      <div>
        <div className="stat-label">{label}</div>
        <div className="stat-value serif-num">{value}</div>
        {sub && <div className="stat-sub">{sub}</div>}
      </div>
    </div>
  );
}

export function ProgressBar({ value, thin }) {
  return (
    <div className={`progress${thin ? ' progress-thin' : ''}`}>
      <div style={{ width: `${Math.max(0, Math.min(100, value || 0))}%` }} />
    </div>
  );
}

export function Callout({ type = 'key', title, children }) {
  const icons = { key: Lightbulb, warning: AlertTriangle, interview: Info, example: BookOpen };
  const labels = { key: 'Key takeaway', warning: 'Watch out', interview: 'Interview angle', example: 'Worked example' };
  const Icon = icons[type] || Lightbulb;
  return (
    <div className={`callout ${type}`}>
      <strong><span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon size={14} />{title || labels[type]}</span></strong>
      <div>{children}</div>
    </div>
  );
}

export function DataTable({ headers, rows }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="data">
        <thead><tr>{headers.map((h, i) => <th key={i} className={typeof rows[0]?.[i] === 'number' ? 'num' : ''}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j} className={typeof c === 'number' ? 'num' : ''}>{typeof c === 'number' ? c.toLocaleString('en-US') : c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const fmt = (n) => n == null ? '—' : Number(n).toLocaleString('en-US');

/* ---------- journal entry + FS impact ---------- */

export function JournalEntryCard({ journal }) {
  if (!journal) return null;
  const drTotal = journal.lines.reduce((a, l) => a + (l.dr || 0), 0);
  const crTotal = journal.lines.reduce((a, l) => a + (l.cr || 0), 0);
  return (
    <div className="journal-card">
      {journal.transaction && <div className="txn">{journal.transaction}</div>}
      <table className="journal">
        <thead><tr><th>Account</th><th style={{ textAlign: 'right' }}>Debit</th><th style={{ textAlign: 'right' }}>Credit</th></tr></thead>
        <tbody>
          {journal.lines.map((l, i) => (
            <tr key={i}>
              <td>{l.account}</td>
              <td className="num">{fmt(l.dr)}</td>
              <td className="num">{fmt(l.cr)}</td>
            </tr>
          ))}
          <tr className="total"><td>Total</td><td className="num">{fmt(drTotal)}</td><td className="num">{fmt(crTotal)}</td></tr>
        </tbody>
      </table>
      {journal.narration && <div className="journal-narration">Narration: {journal.narration}</div>}
    </div>
  );
}

export function FSImpact({ impact }) {
  if (!impact) return null;
  const cells = [
    { key: 'pl', label: 'Profit & Loss', icon: TrendingUp },
    { key: 'bs', label: 'Balance Sheet', icon: Scale },
    { key: 'cf', label: 'Cash Flow', icon: Banknote },
  ];
  return (
    <div className="impact-grid">
      {cells.map(({ key, label, icon: Icon }) => (
        <div key={key} className={`impact-cell impact-${key}`}>
          <div className="lbl"><Icon />{label}</div>
          <div>{impact[key] || '—'}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- section renderer ---------- */

export function SectionRenderer({ section }) {
  return (
    <section>
      <h2>{section.heading}</h2>
      {(section.paragraphs || []).map((p, i) => <p key={i}>{p}</p>)}
      {section.bullets && (
        <ul>{section.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
      )}
      {section.steps && (
        <div className="steps-flow">
          {section.steps.map((s, i) => <div className="step-item" key={i}><div>{s}</div></div>)}
        </div>
      )}
      {section.table && <DataTable headers={section.table.headers} rows={section.table.rows} />}
      {section.callout && <Callout type={section.callout.type} title={section.callout.title}>{section.callout.text}</Callout>}
      {section.journal && <JournalEntryCard journal={section.journal} />}
      {section.impact && <FSImpact impact={section.impact} />}
    </section>
  );
}

export function Empty({ icon: Icon, title, children }) {
  return (
    <div className="empty">
      <Icon />
      <h3>{title}</h3>
      <p className="muted small">{children}</p>
    </div>
  );
}

export function ModuleStatusDot({ done }) {
  return (
    <div className={`module-status${done ? ' done' : ''}`}>
      <CheckCircle2 />
    </div>
  );
}
