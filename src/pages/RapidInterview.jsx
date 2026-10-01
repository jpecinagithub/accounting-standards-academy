import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Eye, Timer, Flag } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { INTERVIEW, shuffle } from '../data/index.js';
import { PageHeader } from '../components/ui.jsx';

const PER_Q = 60;

export default function RapidInterview() {
  const navigate = useNavigate();
  const { recordInterview } = useProgress();
  const questions = useMemo(() => shuffle(INTERVIEW).slice(0, 10), []);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [secs, setSecs] = useState(PER_Q);
  const [done, setDone] = useState(false);
  const [seen, setSeen] = useState([0]);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSecs(s => {
        if (s <= 1) { setRevealed(true); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [idx]);

  const q = questions[idx];

  const next = () => {
    if (idx + 1 >= questions.length) {
      clearInterval(timerRef.current);
      setDone(true);
      recordInterview({ mode: 'rapid', total: questions.length, revealed: seen.length });
    } else {
      const n = idx + 1;
      setIdx(n); setRevealed(false); setSecs(PER_Q);
      setSeen(s => s.includes(n) ? s : [...s, n]);
    }
  };

  if (done) {
    return (
      <div>
        <PageHeader kicker="Rapid interview" title="Session complete" lead="10 questions under time pressure — the closest simulation to a real technical screen." />
        <div className="card" style={{ textAlign: 'center' }}>
          <Flag size={36} style={{ color: 'var(--accent-text)' }} />
          <h2 className="mt">Well done under pressure</h2>
          <p className="muted">Review the suggested answers for any question where you hesitated. Hesitation is the signal — it marks exactly what to study next.</p>
          <div className="flex gap wrap" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => navigate(0)}>Run it again</button>
            <Link className="btn btn-ghost" to="/interview">Back to question bank</Link>
          </div>
        </div>
        <div className="mt">
          {questions.map((item, i) => (
            <div className="card mb" key={item.id}>
              <span className="badge badge-blue">{item.category}</span>
              <h3 className="mt">{i + 1}. {item.q}</h3>
              <p className="small">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Link to="/interview" className="small muted flex center gap" style={{ gap: 6, marginBottom: '0.8rem' }}>
        <ArrowLeft size={14} /> Interview Practice
      </Link>
      <PageHeader kicker="10-minute finance interview" title={`Question ${idx + 1} of ${questions.length}`} />
      <div className="flex between center wrap gap mb">
        <span className="badge badge-blue">{q.category}</span>
        <span className={`timer${secs <= 10 ? ' low' : ''}`}><Timer size={16} /> 0:{String(secs).padStart(2, '0')}</span>
      </div>
      <div className="quiz-box">
        <div className="quiz-q" style={{ fontSize: '1.25rem' }}>{q.q}</div>
        <p className="small muted">Answer out loud, 60–90 seconds, then reveal.</p>
        <button className="btn btn-ghost btn-sm mb" onClick={() => setRevealed(r => !r)}>
          <Eye /> {revealed ? 'Hide' : 'Reveal'} suggested answer
        </button>
        <div className={revealed ? '' : 'answer-hidden'}>
          <p>{q.a}</p>
          {q.keyPoints?.length > 0 && (
            <ul className="small muted">{q.keyPoints.map((k, i) => <li key={i}>{k}</li>)}</ul>
          )}
        </div>
        <div className="quiz-nav">
          <span className="small muted">{revealed ? 'Compare, then move on.' : 'Think first — the timer is running.'}</span>
          <button className="btn btn-primary btn-sm" onClick={next}>
            {idx + 1 >= questions.length ? 'Finish' : 'Next question'} <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
