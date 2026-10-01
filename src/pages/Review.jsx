import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertTriangle, Trash2, ArrowRight, Target, CheckCircle2 } from 'lucide-react';
import { useProgress, weakSkills } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { SKILL_LABEL, TOPIC_LABEL, label } from '../i18n/labels.js';
import { PageHeader, ProgressBar, Empty, Callout } from '../components/ui.jsx';

const LETTERS = ['A', 'B', 'C', 'D'];

export default function Review() {
  const { store, removeMistake, clearMistakesTopic } = useProgress();
  const t = useT();
  const lang = store.lang === 'es' ? 'es' : 'en';
  const { SKILLS, getModule } = useContent();
  const navigate = useNavigate();
  const weak = weakSkills(store.skillStats, SKILLS);
  const mistakes = store.mistakes || [];

  // group mistakes by skill for targeted practice
  const bySkill = {};
  mistakes.forEach(m => {
    const k = m.skill || 'General';
    if (!bySkill[k]) bySkill[k] = [];
    bySkill[k].push(m);
  });

  return (
    <div>
      <PageHeader
        kicker={t('review.kicker')}
        title={t('nav.reviewMistakes')}
        lead={t('review.lead')}
      />

      <h2 className="mb">{t('review.weak')}</h2>
      {weak.length === 0 ? (
        <div className="card mb">
          <p className="flex center gap" style={{ gap: 8, margin: 0 }}><CheckCircle2 style={{ color: 'var(--success)' }} /> {t('review.noWeak')}</p>
        </div>
      ) : (
        <div className="grid grid-3 mb">
          {weak.map(w => (
            <div className="card" key={w.skill}>
              <div className="flex between center">
                <h3 style={{ margin: 0 }}>{label(SKILL_LABEL, w.skill, lang)}</h3>
                <span className="badge badge-red serif-num">{w.pct}%</span>
              </div>
              <div className="mt mb"><ProgressBar thin value={w.pct} /></div>
              <p className="small muted">{t('review.attempts', { attempts: w.attempts, mistakes: bySkill[w.skill]?.length || 0 })}</p>
              <button className="btn btn-primary btn-sm" onClick={() => navigate(`/practice?skill=${encodeURIComponent(w.skill)}`)}>
                <Target /> {t('review.practiceSkill', { skill: label(SKILL_LABEL, w.skill, lang) })}
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex between center wrap gap mb">
        <h2 style={{ margin: 0 }}>{t('review.logged', { n: mistakes.length })}</h2>
      </div>

      {mistakes.length === 0 ? (
        <Empty icon={CheckCircle2} title={t('review.emptyTitle')}>
          {t('review.emptyText')}
        </Empty>
      ) : (
        Object.keys(bySkill).sort().map(sk => (
          <div key={sk} className="mb">
            <div className="flex between center wrap gap mb">
              <h3 style={{ margin: 0 }}>{label(SKILL_LABEL, sk, lang)} <span className="badge">{bySkill[sk].length}</span></h3>
              <div className="flex gap">
                <button className="btn btn-ghost btn-sm" onClick={() => navigate(`/practice?skill=${encodeURIComponent(sk)}`)}>
                  {t('common.practice')} <ArrowRight size={13} />
                </button>
                <button className="btn btn-danger-ghost btn-sm" onClick={() => { if (window.confirm(t('review.confirmClear', { skill: label(SKILL_LABEL, sk, lang) }))) clearMistakesTopic(sk); }}>
                  <Trash2 /> {t('common.clear')}
                </button>
              </div>
            </div>
            {bySkill[sk].slice(0, 8).map((m, i) => {
              const mod = m.moduleId ? getModule(m.moduleId) : null;
              return (
                <div className="review-item mb" key={i}>
                  <div className="rq">{m.question}</div>
                  <div className="ra">
                    {t('review.youChose')} <strong style={{ color: 'var(--danger)' }}>{LETTERS[m.picked]} — {m.options?.[m.picked]}</strong>
                    {' '}· {t('review.correctWas')} <strong style={{ color: 'var(--success)' }}>{LETTERS[m.answer]} — {m.options?.[m.answer]}</strong>
                  </div>
                  {m.explanation && <div className="ra" style={{ color: 'var(--text-muted)' }}>{m.explanation}</div>}
                  <div className="flex between center wrap gap mt">
                    <span className="small muted">
                      {m.topic && <span className="badge" style={{ marginRight: 6 }}>{label(TOPIC_LABEL, m.topic, lang)}</span>}
                      {mod && <Link className="small" to={`/module/${mod.id}`}>{t('review.revisit', { title: mod.title })}</Link>}
                    </span>
                    <button className="btn btn-ghost btn-sm" onClick={() => removeMistake(m.qid, m.date)}>{t('common.dismiss')}</button>
                  </div>
                </div>
              );
            })}
            {bySkill[sk].length > 8 && <p className="small muted">{t('review.more', { n: bySkill[sk].length - 8 })}</p>}
          </div>
        ))
      )}

      <Callout type="key" title={t('review.howTitle')}>
        {t('review.howText')}
      </Callout>
    </div>
  );
}
