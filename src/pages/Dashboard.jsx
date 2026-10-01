import React from 'react';
import { Link } from 'react-router-dom';
import {
  PlayCircle, BookOpen, Target, FlaskConical, GraduationCap,
  FileCheck2, PenLine, Scale, AlertTriangle, Mic,
} from 'lucide-react';
import { useProgress, overallMastery, quizAccuracy, weakSkills } from '../store/progress.jsx';
import { MODULES, SKILLS, getModule, CASES } from '../data/index.js';
import { PageHeader, StatCard, ProgressBar } from '../components/ui.jsx';

export default function Dashboard() {
  const { store } = useProgress();
  const mastery = overallMastery(store.skillStats);
  const completedCount = Object.keys(store.completed || {}).length;
  const accuracy = quizAccuracy(store.quizzes);
  const weak = weakSkills(store.skillStats, SKILLS);
  const lastMod = store.lastVisited ? getModule(store.lastVisited) : null;
  const casesDone = Object.keys(store.labs || {}).filter(k => k.startsWith('case-')).length;
  const labsDone = Object.keys(store.labs || {}).filter(k => !k.startsWith('case-')).length;
  const interviewsDone = (store.interviews || []).length;
  const answered = Object.values(store.skillStats || {}).reduce((a, v) => a + v.total, 0);

  return (
    <div>
      <PageHeader
        kicker="Eleving Group · Finance Academy"
        title="Dashboard"
        lead="Train like a controller: theory, journal entries, statement impact, real cases — tracked as you go."
        actions={<Link className="btn btn-primary" to="/exam"><GraduationCap /> Final Exam</Link>}
      />

      <div className="grid grid-2 mb">
        <div className="card">
          <div className="mastery-hero">
            <div>
              <div className="stat-label">Accounting Standards Mastery</div>
              <div className="mastery-big serif-num">{mastery}<small>%</small></div>
            </div>
            <div style={{ flex: 1, minWidth: 180 }}>
              <ProgressBar value={mastery} />
              <p className="small muted mt" style={{ marginBottom: 0 }}>
                {answered === 0
                  ? 'Answer quiz questions to build your mastery score.'
                  : `Based on ${answered} answered questions across ${Object.keys(store.skillStats || {}).length} skill areas.`}
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="stat-label">Continue learning</div>
          {lastMod ? (
            <>
              <h3 className="mt">{lastMod.title}</h3>
              <p className="small muted">Level {lastMod.level} · {lastMod.levelTitle} · {lastMod.standard}</p>
              <Link className="btn btn-primary btn-sm" to={`/module/${lastMod.id}`}><PlayCircle /> Continue course</Link>
            </>
          ) : (
            <>
              <h3 className="mt">Start with the foundations</h3>
              <p className="small muted">Module 1 — Accounting Fundamentals: the equation everything else rests on.</p>
              <Link className="btn btn-primary btn-sm" to="/module/m01"><PlayCircle /> Start course</Link>
            </>
          )}
        </div>
      </div>

      <h2 className="mb">Skill overview</h2>
      <div className="grid grid-skills mb">
        {SKILLS.map(sk => {
          const s = (store.skillStats || {})[sk];
          const pct = s && s.total > 0 ? Math.round((s.correct / s.total) * 100) : null;
          return (
            <Link key={sk} to={`/practice?skill=${encodeURIComponent(sk)}`} className="card skill-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="row">
                <span className="skill-name">{sk}</span>
                <span className="skill-pct serif-num">{pct === null ? '—' : `${pct}%`}</span>
              </div>
              <ProgressBar thin value={pct || 0} />
              <div className="small muted mt" style={{ marginBottom: 0 }}>
                {s ? `${s.correct}/${s.total} correct` : 'Not attempted yet'}
              </div>
            </Link>
          );
        })}
      </div>

      <h2 className="mb">Statistics</h2>
      <div className="grid grid-4 mb">
        <StatCard icon={BookOpen} label="Modules completed" value={`${completedCount} / ${MODULES.length}`} sub={`${Math.round((completedCount / MODULES.length) * 100)}% of the path`} />
        <StatCard icon={Target} label="Quiz accuracy" value={accuracy === null ? '—' : `${accuracy}%`} sub={accuracy === null ? 'No quizzes taken yet' : 'Across all quizzes'} />
        <StatCard icon={FileCheck2} label="Cases solved" value={`${casesDone} / ${CASES.length}`} sub="Practical case studies" />
        <StatCard icon={PenLine} label="Lab exercises done" value={labsDone} sub="Journal + impact labs" />
        <StatCard icon={AlertTriangle} label="Weak topics" value={weak.length} sub={weak.length ? weak[0].skill + ' needs work' : 'None flagged yet'} />
        <StatCard icon={Mic} label="Interviews practiced" value={interviewsDone} sub="Rapid + review sessions" />
        <StatCard icon={Scale} label="Mistakes logged" value={(store.mistakes || []).length} sub="Review them to improve" />
        <StatCard icon={GraduationCap} label="Best exam score" value={store.exams?.length ? `${Math.max(...store.exams.map(e => e.pct))}%` : '—'} sub={store.exams?.length ? `${store.exams.length} attempt(s)` : '60-question final'} />
      </div>

      <h2 className="mb">High-impact practice</h2>
      <div className="grid grid-3">
        <Link to="/simulator" className="card skill-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3><FlaskConical /> Month-End Simulator</h3>
          <p className="small muted">Run a full close checklist and catch the hidden issues before the controller signs off.</p>
        </Link>
        <Link to="/journal-lab" className="card skill-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3><PenLine /> Journal Entry Lab</h3>
          <p className="small muted">Build debits and credits yourself — then see the P&L, balance sheet and cash flow impact.</p>
        </Link>
        <Link to="/cases" className="card skill-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3><FileCheck2 /> CFO Capstone</h3>
          <p className="small muted">A full month-end pack with hidden accounting issues. Find them like a financial controller would.</p>
        </Link>
      </div>
    </div>
  );
}
