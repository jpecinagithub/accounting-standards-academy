import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Timer, Eye, EyeOff, Mic, ArrowRight } from 'lucide-react';
import { INTERVIEW } from '../data/index.js';
import { PageHeader, Callout } from '../components/ui.jsx';

const CATS = ['All', ...new Set(INTERVIEW.map(q => q.category))];

function InterviewCard({ item, blurred, onToggle }) {
  return (
    <div className="card mb">
      <div className="flex between center wrap gap">
        <span className="badge badge-blue">{item.category}</span>
        <button className="btn btn-ghost btn-sm" onClick={onToggle}>
          {blurred ? <Eye /> : <EyeOff />} {blurred ? 'Reveal strong answer' : 'Hide answer'}
        </button>
      </div>
      <h3 className="mt">{item.q}</h3>
      <div className={blurred ? 'answer-hidden' : ''}>
        <p>{item.a}</p>
        {item.keyPoints?.length > 0 && (
          <>
            <strong className="small">Key points the interviewer listens for:</strong>
            <ul className="qa-a keypts" style={{ border: 'none', padding: '0.3rem 0 0 1.2rem', background: 'none' }}>
              {item.keyPoints.map((k, i) => <li key={i}>{k}</li>)}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default function Interview() {
  const [cat, setCat] = useState('All');
  const [revealed, setRevealed] = useState({});
  const list = useMemo(() => cat === 'All' ? INTERVIEW : INTERVIEW.filter(q => q.category === cat), [cat]);

  return (
    <div>
      <PageHeader
        kicker="Sound like a controller"
        title="Technical Interview Practice"
        lead="Think first, then reveal the suggested strong answer. Interviewers test judgment, not memorization — every answer shows the reasoning."
        actions={<Link className="btn btn-primary" to="/interview/rapid"><Timer /> 10-Minute Rapid Interview</Link>}
      />
      <div className="flex gap wrap mb">
        {CATS.map(c => (
          <button key={c} className={`btn btn-sm ${cat === c ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      {list.map(item => (
        <InterviewCard
          key={item.id} item={item}
          blurred={!revealed[item.id]}
          onToggle={() => setRevealed(r => ({ ...r, [item.id]: !r[item.id] }))}
        />
      ))}
      <Callout type="interview" title="How to use this">
        Read the question out loud. Answer as if a CFO were listening — 60 to 90 seconds, structured, with one concrete example. Then reveal and compare.
      </Callout>
    </div>
  );
}
