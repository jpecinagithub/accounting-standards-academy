import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { shuffle } from '../data/index.js';
import { useProgress } from '../store/progress.jsx';
import { SKILL_LABEL, label } from '../i18n/labels.js';
import { PageHeader } from '../components/ui.jsx';
import Quiz from '../components/Quiz.jsx';

export default function PracticeQuiz() {
  const [params] = useSearchParams();
  const t = useT();
  const { store } = useProgress();
  const lang = store.lang === 'es' ? 'es' : 'en';
  const { questionsBySkill } = useContent();
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
      return { title: t('practice.skillTitle', { skill: label(SKILL_LABEL, skill, lang) }), questions: qs };
    }
    return { title: t('practice.title'), questions: [] };
  }, [skill, mode]); // eslint-disable-line

  const quizId = `practice-${skill || mode || 'general'}-${title}`.slice(0, 60);

  return (
    <div>
      <Link to="/quizzes" className="small muted flex center gap" style={{ gap: 6, marginBottom: '0.8rem' }}>
        <ArrowLeft size={14} /> {t('nav.quizzes')}
      </Link>
      <PageHeader kicker={t('practice.kicker')} title={title} lead={t('practice.lead', { n: questions.length })} />
      <Quiz questions={questions} quizId={quizId} title={title} />
    </div>
  );
}
