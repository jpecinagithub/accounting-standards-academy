import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Timer, Eye, EyeOff } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';
import { useContent } from '../i18n/content.js';
import { CATEGORY_LABEL, label } from '../i18n/labels.js';
import { PageHeader, Callout } from '../components/ui.jsx';

const ALL = '__all__';

function InterviewCard({ item, blurred, onToggle, t, lang }) {
  return (
    <div className="card mb">
      <div className="flex between center wrap gap">
        <span className="badge badge-blue">{label(CATEGORY_LABEL, item.category, lang)}</span>
        <button className="btn btn-ghost btn-sm" onClick={onToggle}>
          {blurred ? <Eye /> : <EyeOff />} {blurred ? t('interview.reveal') : t('interview.hide')}
        </button>
      </div>
      <h3 className="mt">{item.q}</h3>
      <div className={blurred ? 'answer-hidden' : ''}>
        <p>{item.a}</p>
        {item.keyPoints?.length > 0 && (
          <>
            <strong className="small">{t('interview.keyPoints')}</strong>
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
  const t = useT();
  const { store } = useProgress();
  const lang = store.lang === 'es' ? 'es' : 'en';
  const { INTERVIEW } = useContent();
  const [cat, setCat] = useState(ALL);
  const [revealed, setRevealed] = useState({});

  const cats = useMemo(() => [...new Set(INTERVIEW.map(q => q.category))], [INTERVIEW]);
  const list = useMemo(() => cat === ALL ? INTERVIEW : INTERVIEW.filter(q => q.category === cat), [cat, INTERVIEW]);

  return (
    <div>
      <PageHeader
        kicker={t('interview.kicker')}
        title={t('nav.interview')}
        lead={t('interview.lead')}
        actions={<Link className="btn btn-primary" to="/interview/rapid"><Timer /> {t('interview.rapid')}</Link>}
      />
      <div className="flex gap wrap mb">
        <button className={`btn btn-sm ${cat === ALL ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setCat(ALL)}>{t('interview.all')}</button>
        {cats.map(c => (
          <button key={c} className={`btn btn-sm ${cat === c ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setCat(c)}>{label(CATEGORY_LABEL, c, lang)}</button>
        ))}
      </div>
      {list.map(item => (
        <InterviewCard
          key={item.id} item={item}
          blurred={!revealed[item.id]}
          onToggle={() => setRevealed(r => ({ ...r, [item.id]: !r[item.id] }))}
          t={t} lang={lang}
        />
      ))}
      <Callout type="interview" title={t('interview.howTitle')}>
        {t('interview.howText')}
      </Callout>
    </div>
  );
}
