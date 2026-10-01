import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Bookmark, GraduationCap, Mic, BookOpen, Target, FlaskConical } from 'lucide-react';
import { useProgress, overallMastery, quizAccuracy } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { LEVEL_LABEL, label } from '../i18n/labels.js';
import { PageHeader, ProgressBar, StatCard } from '../components/ui.jsx';

export default function Progress() {
  const { store, resetAll } = useProgress();
  const t = useT();
  const lang = store.lang === 'es' ? 'es' : 'en';
  const locale = lang === 'es' ? 'es-ES' : 'en-GB';
  const { MODULES, LEVELS, getModule, JOURNAL_LAB, IMPACT_LAB, CASES } = useContent();
  const completed = store.completed || {};
  const completedCount = Object.keys(completed).length;
  const mastery = overallMastery(store.skillStats);
  const accuracy = quizAccuracy(store.quizzes);
  const labsDone = Object.keys(store.labs || {}).length;
  const totalLabs = JOURNAL_LAB.length + IMPACT_LAB.length + CASES.length + 1; // +1 simulator

  const dateFmt = (d, opts) => new Date(d).toLocaleDateString(locale, opts);

  return (
    <div>
      <PageHeader
        kicker={t('progress.kicker')}
        title={t('nav.progress')}
        lead={t('progress.lead')}
        actions={
          <button className="btn btn-danger-ghost btn-sm" onClick={() => { if (window.confirm(t('progress.confirmReset'))) resetAll(); }}>
            <Trash2 /> {t('common.resetAll')}
          </button>
        }
      />

      <div className="grid grid-4 mb">
        <StatCard icon={BookOpen} label={t('stats.modules')} value={`${completedCount}/${MODULES.length}`} />
        <StatCard icon={Target} label={t('stats.mastery')} value={`${mastery}%`} />
        <StatCard icon={FlaskConical} label={t('stats.labsCases')} value={`${labsDone}/${totalLabs}`} />
        <StatCard icon={GraduationCap} label={t('stats.accuracy')} value={accuracy === null ? '—' : `${accuracy}%`} />
      </div>

      <h2 className="mb">{t('progress.byLevel')}</h2>
      <div className="card mb">
        {LEVELS.map(lv => {
          const done = lv.modules.filter(m => completed[m.id]).length;
          const pct = Math.round((done / lv.modules.length) * 100);
          return (
            <div key={lv.n} className="mb" style={{ marginBottom: '1rem' }}>
              <div className="flex between center mb" style={{ marginBottom: '0.35rem' }}>
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t('progress.levelRow', { n: lv.n, title: label(LEVEL_LABEL, lv.title, lang) })}</span>
                <span className="small muted serif-num">{done}/{lv.modules.length} · {pct}%</span>
              </div>
              <ProgressBar thin value={pct} />
            </div>
          );
        })}
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3><Bookmark /> {t('progress.bookmarks')}</h3>
          {(store.bookmarks || []).length === 0
            ? <p className="small muted">{t('progress.noBookmarks')}</p>
            : (store.bookmarks || []).map(id => {
              const m = getModule(id);
              return m ? <div key={id} className="mb"><Link to={`/module/${id}`}>{m.title}</Link> <span className="small muted">· {m.standard}</span></div> : null;
            })}
        </div>
        <div className="card">
          <h3><GraduationCap /> {t('progress.examHistory')}</h3>
          {(store.exams || []).length === 0
            ? <p className="small muted">{t('progress.noExams')} <Link to="/exam">{t('progress.takeExam')}</Link></p>
            : <div style={{ overflowX: 'auto' }}>
              <table className="data">
                <thead><tr><th>{t('common.date')}</th><th className="num">{t('common.score')}</th><th className="num">{t('common.result')}</th></tr></thead>
                <tbody>
                  {store.exams.map((e, i) => (
                    <tr key={i}>
                      <td className="small">{dateFmt(e.date, { day: 'numeric', month: 'short' })}</td>
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
        <h3><Mic /> {t('progress.interviews')}</h3>
        {(store.interviews || []).length === 0
          ? <p className="small muted">{t('progress.noInterviews')}</p>
          : <p className="small muted">{t('progress.interviewsDone', { n: store.interviews.length, date: dateFmt(store.interviews[0].date, { day: 'numeric', month: 'short', year: 'numeric' }) })}</p>}
      </div>
    </div>
  );
}
