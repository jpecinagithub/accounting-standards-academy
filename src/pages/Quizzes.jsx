import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shuffle, GraduationCap, Target, Layers, ArrowRight } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { SKILLS, QUESTION_BANK, questionsBySkill, shuffle, MODULES } from '../data/index.js';
import { PageHeader, StatCard } from '../components/ui.jsx';

export default function Quizzes() {
  const { store } = useProgress();
  const navigate = useNavigate();

  const startSkill = (sk) => navigate(`/practice?skill=${encodeURIComponent(sk)}`);
  const startRandom = () => {
    sessionStorage.setItem('afa-practice', JSON.stringify({
      title: 'Mixed practice', questions: shuffle(QUESTION_BANK).slice(0, 12),
    }));
    navigate('/practice?mode=session');
  };

  return (
    <div>
      <PageHeader
        kicker="Test yourself"
        title="Quizzes"
        lead="Practice by skill area or difficulty, take a mixed set, or sit the 60-question final assessment."
        actions={
          <>
            <button className="btn btn-ghost" onClick={startRandom}><Shuffle /> Mixed set (12)</button>
            <Link className="btn btn-primary" to="/exam"><GraduationCap /> Final Exam</Link>
          </>
        }
      />

      <h2 className="mb">Practice by skill</h2>
      <div className="grid grid-3 mb">
        {SKILLS.map(sk => {
          const total = questionsBySkill(sk).length;
          const s = (store.skillStats || {})[sk];
          const pct = s && s.total > 0 ? Math.round((s.correct / s.total) * 100) : null;
          return (
            <div className="card" key={sk}>
              <div className="flex between center">
                <h3 style={{ margin: 0 }}>{sk}</h3>
                {pct !== null && <span className="badge badge-gold serif-num">{pct}%</span>}
              </div>
              <p className="small muted">{total} questions in bank{s ? ` · ${s.correct}/${s.total} correct by you` : ''}</p>
              <button className="btn btn-ghost btn-sm" onClick={() => startSkill(sk)}>
                Practice <ArrowRight size={14} />
              </button>
            </div>
          );
        })}
      </div>

      <h2 className="mb">Practice by difficulty</h2>
      <div className="grid grid-3">
        {['Foundation', 'Intermediate', 'Advanced'].map(d => {
          const total = QUESTION_BANK.filter(q => q.difficulty === d).length;
          return (
            <div className="card" key={d}>
              <h3><Target /> {d}</h3>
              <p className="small muted">{total} questions</p>
              <button className="btn btn-ghost btn-sm" onClick={() => {
                sessionStorage.setItem('afa-practice', JSON.stringify({
                  title: `${d} practice`, questions: shuffle(QUESTION_BANK.filter(q => q.difficulty === d)).slice(0, 12),
                }));
                navigate('/practice?mode=session');
              }}>
                Start <ArrowRight size={14} />
              </button>
            </div>
          );
        })}
      </div>

      <div className="card mt">
        <h3><Layers /> Module quizzes</h3>
        <p className="small muted">Each of the {MODULES.length} modules ends with its own 8–12 question quiz — the fastest way to lock in what you just learned.</p>
        <Link className="btn btn-ghost btn-sm" to="/path">Go to Learning Path <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
