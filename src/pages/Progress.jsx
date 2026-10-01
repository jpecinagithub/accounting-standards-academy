import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Bookmark, GraduationCap, Mic } from 'lucide-react';
import { useProgress, overallMastery, quizAccuracy } from '../store/progress.jsx';
import { MODULES, LEVELS, SKILLS, getModule, JOURNAL_LAB, IMPACT_LAB, CASES } from '../data/index.js';
import { PageHeader, ProgressBar, StatCard } from '../components/ui.jsx';
import { BookOpen, Target, FlaskConical } from 'lucide-react';

export default function Progress() {
  const { store, resetAll } = useProgress();
  const completed = store.completed || {};
  const completedCount = Object.keys(completed).length;
  const mastery = overallMastery(store.skillStats);
  const accuracy = quizAccuracy(store.quizzes);
  const labsDone = Object.keys(store.labs || {}).length;
  const totalLabs = JOURNAL_LAB.length + IMPACT_LAB.length + CASES.length + 1; // +1 simulator

  return (
    <div>
      <PageHeader
        kicker="Your journey"
        title="My Progress"
        lead="Everything you have completed, mastered and practiced — in one place."
        actions={
          <button className="btn btn-danger-ghost btn-sm" onClick={() => { if (window.confirm('Reset ALL progress? This cannot be undone.')) resetAll(); }}>
            <Trash2 /> Reset all
          </button>
        }
      />

      <div className="grid grid-4 mb">
        <StatCard icon={BookOpen} label="Modules completed" value={`${completedCount}/${MODULES.length}`} />
        <StatCard icon={Target} label="Overall mastery" value={`${mastery}%`} />
        <StatCard icon={FlaskConical} label="Labs & cases" value={`${labsDone}/${totalLabs}`} />
        <StatCard icon={GraduationCap} label="Quiz accuracy" value={accuracy === null ? '—' : `${accuracy}%`} />
      </div>

      <h2 className="mb">Progress by level</h2>
      <div className="card mb">
        {LEVELS.map(lv => {
          const done = lv.modules.filter(m => completed[m.id]).length;
          const pct = Math.round((done / lv.modules.length) * 100);
          return (
            <div key={lv.n} className="mb" style={{ marginBottom: '1rem' }}>
              <div className="flex between center mb" style={{ marginBottom: '0.35rem' }}>
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Level {lv.n} — {lv.title}</span>
                <span className="small muted serif-num">{done}/{lv.modules.length} · {pct}%</span>
              </div>
              <ProgressBar thin value={pct} />
            </div>
          );
        })}
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3><Bookmark /> Bookmarked modules</h3>
          {(store.bookmarks || []).length === 0
            ? <p className="small muted">No bookmarks yet — save modules you want to revisit.</p>
            : (store.bookmarks || []).map(id => {
              const m = getModule(id);
              return m ? <div key={id} className="mb"><Link to={`/module/${id}`}>{m.title}</Link> <span className="small muted">· {m.standard}</span></div> : null;
            })}
        </div>
        <div className="card">
          <h3><GraduationCap /> Final exam history</h3>
          {(store.exams || []).length === 0
            ? <p className="small muted">No attempts yet. <Link to="/exam">Take the 60-question final assessment.</Link></p>
            : <div style={{ overflowX: 'auto' }}>
              <table className="data">
                <thead><tr><th>Date</th><th className="num">Score</th><th className="num">Result</th></tr></thead>
                <tbody>
                  {store.exams.map((e, i) => (
                    <tr key={i}>
                      <td className="small">{new Date(e.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</td>
                      <td className="num serif-num">{e.score}/{e.total}</td>
                      <td className="num"><span className={`badge ${e.pct >= 70 ? 'badge-green' : 'badge-red'}`}>{e.pct}%</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>}
        </div>
      </div>

      <div className="card mt">
        <h3><Mic /> Interview sessions</h3>
        {(store.interviews || []).length === 0
          ? <p className="small muted">No rapid interview sessions yet.</p>
          : <p className="small muted">{store.interviews.length} rapid session(s) completed. Last: {new Date(store.interviews[0].date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>}
      </div>
    </div>
  );
}
