import React from 'react';
import { Link } from 'react-router-dom';
import {
  PlayCircle, BookOpen, Target, FlaskConical, GraduationCap,
  FileCheck2, PenLine, Scale, AlertTriangle, Mic,
} from 'lucide-react';
import { useProgress, overallMastery, quizAccuracy, weakSkills } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { SKILL_LABEL, LEVEL_LABEL, label } from '../i18n/labels.js';
import { PageHeader, StatCard, ProgressBar } from '../components/ui.jsx';

export default function Dashboard() {
  const { store } = useProgress();
  const t = useT();
  const lang = store.lang === 'es' ? 'es' : 'en';
  const { MODULES, SKILLS, getModule, CASES } = useContent();
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
        kicker={t('dashboard.kicker')}
        title={t('nav.dashboard')}
        lead={t('dashboard.lead')}
        actions={<Link className="btn btn-primary" to="/exam"><GraduationCap /> {t('nav.exam')}</Link>}
      />

      <div className="grid grid-2 mb">
        <div className="card">
          <div className="mastery-hero">
            <div>
              <div className="stat-label">{t('dashboard.mastery')}</div>
              <div className="mastery-big serif-num">{mastery}<small>%</small></div>
            </div>
            <div style={{ flex: 1, minWidth: 180 }}>
              <ProgressBar value={mastery} />
              <p className="small muted mt" style={{ marginBottom: 0 }}>
                {answered === 0
                  ? t('dashboard.masteryEmpty')
                  : t('dashboard.masteryBased', { answered, n: Object.keys(store.skillStats || {}).length })}
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="stat-label">{t('dashboard.continue')}</div>
          {lastMod ? (
            <>
              <h3 className="mt">{lastMod.title}</h3>
              <p className="small muted">{t('dashboard.continueMeta', { level: lastMod.level, levelTitle: label(LEVEL_LABEL, lastMod.levelTitle, lang), standard: lastMod.standard })}</p>
              <Link className="btn btn-primary btn-sm" to={`/module/${lastMod.id}`}><PlayCircle /> {t('dashboard.continueBtn')}</Link>
            </>
          ) : (
            <>
              <h3 className="mt">{t('dashboard.start')}</h3>
              <p className="small muted">{t('dashboard.startText')}</p>
              <Link className="btn btn-primary btn-sm" to="/module/m01"><PlayCircle /> {t('dashboard.startBtn')}</Link>
            </>
          )}
        </div>
      </div>

      <h2 className="mb">{t('dashboard.skills')}</h2>
      <div className="grid grid-skills mb">
        {SKILLS.map(sk => {
          const s = (store.skillStats || {})[sk];
          const pct = s && s.total > 0 ? Math.round((s.correct / s.total) * 100) : null;
          return (
            <Link key={sk} to={`/practice?skill=${encodeURIComponent(sk)}`} className="card skill-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="row">
                <span className="skill-name">{label(SKILL_LABEL, sk, lang)}</span>
                <span className="skill-pct serif-num">{pct === null ? '—' : `${pct}%`}</span>
              </div>
              <ProgressBar thin value={pct || 0} />
              <div className="small muted mt" style={{ marginBottom: 0 }}>
                {s ? t('dashboard.skillScore', { correct: s.correct, total: s.total }) : t('dashboard.notAttempted')}
              </div>
            </Link>
          );
        })}
      </div>

      <h2 className="mb">{t('dashboard.stats')}</h2>
      <div className="grid grid-4 mb">
        <StatCard icon={BookOpen} label={t('stats.modules')} value={`${completedCount} / ${MODULES.length}`} sub={t('stats.modulesSub', { pct: Math.round((completedCount / MODULES.length) * 100) })} />
        <StatCard icon={Target} label={t('stats.accuracy')} value={accuracy === null ? '—' : `${accuracy}%`} sub={accuracy === null ? t('stats.accuracyEmpty') : t('stats.accuracySub')} />
        <StatCard icon={FileCheck2} label={t('stats.cases')} value={`${casesDone} / ${CASES.length}`} sub={t('stats.casesSub')} />
        <StatCard icon={PenLine} label={t('stats.labs')} value={labsDone} sub={t('stats.labsSub')} />
        <StatCard icon={AlertTriangle} label={t('stats.weak')} value={weak.length} sub={weak.length ? t('stats.weakSub', { skill: label(SKILL_LABEL, weak[0].skill, lang) }) : t('stats.weakEmpty')} />
        <StatCard icon={Mic} label={t('stats.interviews')} value={interviewsDone} sub={t('stats.interviewsSub')} />
        <StatCard icon={Scale} label={t('stats.mistakes')} value={(store.mistakes || []).length} sub={t('stats.mistakesSub')} />
        <StatCard icon={GraduationCap} label={t('stats.exam')} value={store.exams?.length ? `${Math.max(...store.exams.map(e => e.pct))}%` : '—'} sub={store.exams?.length ? t('stats.examSub', { n: store.exams.length }) : t('stats.examEmpty')} />
      </div>

      <h2 className="mb">{t('dashboard.highImpact')}</h2>
      <div className="grid grid-3">
        <Link to="/simulator" className="card skill-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3><FlaskConical /> {t('nav.simulator')}</h3>
          <p className="small muted">{t('dashboard.cardSim')}</p>
        </Link>
        <Link to="/journal-lab" className="card skill-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3><PenLine /> {t('nav.journalLab')}</h3>
          <p className="small muted">{t('dashboard.cardJournal')}</p>
        </Link>
        <Link to="/cases" className="card skill-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3><FileCheck2 /> {t('dashboard.cardCapstone')}</h3>
          <p className="small muted">{t('dashboard.cardCapstoneText')}</p>
        </Link>
      </div>
    </div>
  );
}
