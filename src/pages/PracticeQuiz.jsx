import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { questionsBySkill, shuffle } from '../data/index.js';
import { PageHeader } from '../components/ui.jsx';
import Quiz from '../components/Quiz.jsx';

export default function PracticeQuiz() {
  const [params] = useSearchParams();
  const skill = params.get('skill');
  const mode = params.get('mode');

  const { title, questions } = useMemo(() => {
    if (mode === 'session') {
      try {
        const s = JSON.parse(sessionStorage.getItem('afa-practice') || 'null');
        if (s?.questions?.length) return { title: s.title, questions: s.questions };
      } catch { /* fall through */ }
    }
    if (skill) {
      const qs = shuffle(questionsBySkill(skill)).slice(0, 12);
      return { title: `${skill} — practice`, questions: qs };
    }
    return { title: 'Practice', questions: [] };
  }, [skill, mode]);

  const quizId = `practice-${skill || mode || 'general'}-${title}`.slice(0, 60);

  return (
    <div>
      <Link to="/quizzes" className="small muted flex center gap" style={{ gap: 6, marginBottom: '0.8rem' }}>
        <ArrowLeft size={14} /> Quizzes
      </Link>
      <PageHeader kicker="Practice quiz" title={title} lead={`${questions.length} questions · instant feedback with explanations.`} />
      <Quiz questions={questions} quizId={quizId} title={title} />
    </div>
  );
}
