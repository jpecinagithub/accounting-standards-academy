import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import LearningPath from './pages/LearningPath.jsx';
import ModulePage from './pages/ModulePage.jsx';
import IFRSIndex from './pages/IFRSIndex.jsx';
import StatementsHub from './pages/StatementsHub.jsx';
import JournalLab from './pages/JournalLab.jsx';
import ImpactLab from './pages/ImpactLab.jsx';
import CaseStudies from './pages/CaseStudies.jsx';
import CasePage from './pages/CasePage.jsx';
import Quizzes from './pages/Quizzes.jsx';
import PracticeQuiz from './pages/PracticeQuiz.jsx';
import Interview from './pages/Interview.jsx';
import RapidInterview from './pages/RapidInterview.jsx';
import Review from './pages/Review.jsx';
import Glossary from './pages/Glossary.jsx';
import Progress from './pages/Progress.jsx';
import FinalExam from './pages/FinalExam.jsx';
import Simulator from './pages/Simulator.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/path" element={<LearningPath />} />
        <Route path="/module/:id" element={<ModulePage />} />
        <Route path="/ifrs" element={<IFRSIndex />} />
        <Route path="/statements" element={<StatementsHub />} />
        <Route path="/journal-lab" element={<JournalLab />} />
        <Route path="/impact-lab" element={<ImpactLab />} />
        <Route path="/cases" element={<CaseStudies />} />
        <Route path="/case/:id" element={<CasePage />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/practice" element={<PracticeQuiz />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/interview/rapid" element={<RapidInterview />} />
        <Route path="/review" element={<Review />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/exam" element={<FinalExam />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
