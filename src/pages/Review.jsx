import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertTriangle, Trash2, ArrowRight, Target, CheckCircle2 } from 'lucide-react';
import { useProgress, weakSkills } from '../store/progress.jsx';
import { SKILLS, getModule } from '../data/index.js';
import { PageHeader, ProgressBar, Empty, Callout } from '../components/ui.jsx';

const LETTERS = ['A', 'B', 'C', 'D'];

export default function Review() {
  const { store, removeMistake, clearMistakesTopic } = useProgress();
  const navigate = useNavigate();
  const weak = weakSkills(store.skillStats, SKILLS);
  const mistakes = store.mistakes || [];

  // group mistakes by skill for targeted practice
  const bySkill = {};
  mistakes.forEach(m => {
    const k = m.skill || 'General';
    if (!bySkill[k]) bySkill[k] = [];
    bySkill[k].push(m);
  });

  return (
    <div>
      <PageHeader
        kicker="Turn errors into mastery"
        title="Review Mistakes"
        lead="Every wrong quiz answer is stored here. Weak areas are computed from your actual accuracy — practice them directly."
      />

      <h2 className="mb">Weak areas</h2>
      {weak.length === 0 ? (
        <div className="card mb">
          <p className="flex center gap" style={{ gap: 8, margin: 0 }}><CheckCircle2 style={{ color: 'var(--success)' }} /> No weak areas flagged yet — keep answering questions and they will appear here when accuracy drops below 75%.</p>
        </div>
      ) : (
        <div className="grid grid-3 mb">
          {weak.map(w => (
            <div className="card" key={w.skill}>
              <div className="flex between center">
                <h3 style={{ margin: 0 }}>{w.skill}</h3>
                <span className="badge badge-red serif-num">{w.pct}%</span>
              </div>
              <div className="mt mb"><ProgressBar thin value={w.pct} /></div>
              <p className="small muted">{w.attempts} attempts · {bySkill[w.skill]?.length || 0} logged mistakes</p>
              <button className="btn btn-primary btn-sm" onClick={() => navigate(`/practice?skill=${encodeURIComponent(w.skill)}`)}>
                <Target /> Practice {w.skill}
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex between center wrap gap mb">
        <h2 style={{ margin: 0 }}>Logged mistakes ({mistakes.length})</h2>
      </div>

      {mistakes.length === 0 ? (
        <Empty icon={CheckCircle2} title="Nothing to review">
          Wrong answers will appear here with their explanations. For now — a clean sheet.
        </Empty>
      ) : (
        Object.keys(bySkill).sort().map(sk => (
          <div key={sk} className="mb">
            <div className="flex between center wrap gap mb">
              <h3 style={{ margin: 0 }}>{sk} <span className="badge">{bySkill[sk].length}</span></h3>
              <div className="flex gap">
                <button className="btn btn-ghost btn-sm" onClick={() => navigate(`/practice?skill=${encodeURIComponent(sk)}`)}>
                  Practice <ArrowRight size={13} />
                </button>
                <button className="btn btn-danger-ghost btn-sm" onClick={() => { if (window.confirm(`Clear all logged mistakes for ${sk}?`)) clearMistakesTopic(sk); }}>
                  <Trash2 /> Clear
                </button>
              </div>
            </div>
            {bySkill[sk].slice(0, 8).map((m, i) => {
              const mod = m.moduleId ? getModule(m.moduleId) : null;
              return (
                <div className="review-item mb" key={i}>
                  <div className="rq">{m.question}</div>
                  <div className="ra">
                    You chose: <strong style={{ color: 'var(--danger)' }}>{LETTERS[m.picked]} — {m.options?.[m.picked]}</strong>
                    {' '}· Correct: <strong style={{ color: 'var(--success)' }}>{LETTERS[m.answer]} — {m.options?.[m.answer]}</strong>
                  </div>
                  {m.explanation && <div className="ra" style={{ color: 'var(--text-muted)' }}>{m.explanation}</div>}
                  <div className="flex between center wrap gap mt">
                    <span className="small muted">
                      {m.topic && <span className="badge" style={{ marginRight: 6 }}>{m.topic}</span>}
                      {mod && <Link className="small" to={`/module/${mod.id}`}>Revisit: {mod.title}</Link>}
                    </span>
                    <button className="btn btn-ghost btn-sm" onClick={() => removeMistake(m.qid, m.date)}>Dismiss</button>
                  </div>
                </div>
              );
            })}
            {bySkill[sk].length > 8 && <p className="small muted">+ {bySkill[sk].length - 8} more — practice the topic to clear them faster than dismissing one by one.</p>}
          </div>
        ))
      )}

      <Callout type="key" title="How to use this page">
        Don't just re-read explanations. For each weak skill, run a 12-question practice set, then re-check this page — mastery moves only when answers change.
      </Callout>
    </div>
  );
}
