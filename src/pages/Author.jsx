import React from 'react';
import { Mail, UserRound } from 'lucide-react';
import { PageHeader, Callout } from '../components/ui.jsx';
import { useT } from '../i18n/useT.js';

const EMAIL = 'jpecina@gmail.com';

export default function Author() {
  const t = useT();
  return (
    <div>
      <PageHeader
        kicker={t('author.kicker')}
        title={t('author.name')}
        lead={t('author.role')}
      />
      <div className="card mb">
        <h3><UserRound /> {t('author.name')}</h3>
        <p>{t('author.bio1')}</p>
        <p style={{ marginBottom: 0 }}>{t('author.bio2')}</p>
      </div>
      <Callout type="key" title={t('author.contactTitle')}>
        {t('author.contactText')}
        <div style={{ marginTop: '0.8rem' }}>
          <a className="btn btn-primary btn-sm" href={`mailto:${EMAIL}`}>
            <Mail /> {EMAIL}
          </a>
        </div>
      </Callout>
    </div>
  );
}
