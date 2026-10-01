import React, { useState, useMemo } from 'react';
import { GraduationCap, PlayCircle, Clock } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { QUESTION_BANK, shuffle } from '../data/index.js';
import { PageHeader, Callout } from '../components/ui.jsx';
import Quiz from '../components/Quiz.jsx';

const N = 60;

function band(pct) {
  if (pct >= 90) return { label: 'Advanced financial reporting mastery', color: 'var(--success)', desc: 'You reason like a seasoned controller. You are ready for technical interviews at the highest level.' };
  if (pct >= 80) return { label: 'Strong professional knowledge', color: 'var(--accent-text)', desc: 'Solid across the standards. Polish the remaining gaps via Review Mistakes.' };
  if (pct >= 70) return { label: 'Good working knowledge', color: 'var(--info)', desc: 'You can operate day-to-day. Deepen IFRS 9, 15 and 16 before interviews.' };
  if (pct >= 60) return { label: 'Developing proficiency', color: 'var(--warn)', desc: 'Foundations are forming. Revisit weak areas, then retake.' };
  return { label: 'Further study recommended', color: 'var(--danger)', desc: 'Work through the Learning Path level by level, then try again.' };
}

export default function FinalExam() {
  const { store, recordExam } = useProgress();
  const [started, setStarted] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState(null);

  const questions = useMemo(() => shuffle(QUESTION_BANK).slice(0, Math.min(N, QUESTION_BANK.length)), [attempt]); // eslint-disable-line

  const onComplete = ({ score, total }) => {
    const pct = Math.round((score / total) * 100);
    recordExam({ score, total });
    setResult({ score, total, pct, ...band(pct) });
    window.scrollTo(0, 0);
  };

  if (!started) {
    return (
      <div>
        <PageHeader
          kicker="Capstone assessment"
          title="Final Exam"
          lead="60 questions, randomly selected across the whole syllabus — fundamentals, IFRS, journal entries, month-end, analysis and real scenarios."
        />
        <div className="card" style={{ maxWidth: 640 }}>
          <h3><GraduationCap /> How it works</h3>
          <ul>
            <li><strong>{Math.min(N, QUESTION_BANK.length)} questions</strong> drawn at random from the {QUESTION_BANK.length}-question bank.</li>
            <li>No instant feedback — answers are revealed at the end, like a real exam.</li>
            <li>Your result is saved to My Progress with one of five mastery bands.</li>
            <li>Every attempt uses a fresh random set.</li>
          </ul>
          <div className="flex gap wrap mt">
            <span className="badge"><Clock size={12} /> Allow ~45 minutes</span>
            {store.exams?.length > 0 && <span className="badge badge-gold">Best so far: {Math.max(...store.exams.map(e => e.pct))}%</span>}
          </div>
          <div className="mt">
            <button className="btn btn-primary" onClick={() => setStarted(true)}><PlayCircle /> Start final exam</button>
          </div>
        </div>
        <Callout type="interview" title="Exam strategy">
          90%+ is the bar for “advanced mastery”. If you land below 70%, don’t retake immediately — spend a session in Review Mistakes first.
        </Callout>
      </div>
    );
  }

  return (
    <div>
      <PageHeader kicker="Final exam" title="Accounting Standards & Financial Reporting Assessment" lead={`${questions.length} questions · no instant feedback.`} />
      {result && (
        <div className="exam-band" style={{ borderColor: result.color, background: 'var(--panel)' }}>
          <div className="band-label" style={{ color: result.color }}>{result.pct}% — {result.label}</div>
          <p className="muted" style={{ marginBottom: 0 }}>{result.desc}</p>
          <p className="serif-num muted">{result.score} / {result.total} correct</p>
          <button className="btn btn-ghost btn-sm" onClick={() => { setAttempt(a => a + 1); setResult(null); setStarted(true); }}>Retake with new questions</button>
        </div>
      )}
      <Quiz
        key={attempt}
        questions={questions}
        quizId={`final-exam-${attempt}`}
        title="Final Assessment"
        instantFeedback={false}
        ctaLabel="Submit exam"
        onComplete={onComplete}
      />
    </div>
  );
}
