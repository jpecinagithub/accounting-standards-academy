import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Route as RouteIcon, Landmark, FileBarChart2, BookOpenCheck,
  Scale, Briefcase, HelpCircle, Mic, AlertCircle, BookMarked, TrendingUp,
  Menu, X, Sun, Moon, GraduationCap, FlaskConical,
} from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';

const NAV = [
  { section: 'nav.learn' },
  { to: '/', label: 'nav.dashboard', icon: LayoutDashboard, end: true },
  { to: '/path', label: 'nav.learningPath', icon: RouteIcon },
  { to: '/ifrs', label: 'nav.ifrs', icon: Landmark },
  { to: '/statements', label: 'nav.statements', icon: FileBarChart2 },
  { section: 'nav.practice' },
  { to: '/journal-lab', label: 'nav.journalLab', icon: BookOpenCheck },
  { to: '/impact-lab', label: 'nav.impactLab', icon: Scale },
  { to: '/cases', label: 'nav.cases', icon: Briefcase },
  { to: '/quizzes', label: 'nav.quizzes', icon: HelpCircle },
  { to: '/exam', label: 'nav.exam', icon: GraduationCap },
  { to: '/simulator', label: 'nav.simulator', icon: FlaskConical },
  { to: '/interview', label: 'nav.interview', icon: Mic },
  { section: 'nav.review' },
  { to: '/review', label: 'nav.reviewMistakes', icon: AlertCircle, badge: 'mistakes' },
  { to: '/glossary', label: 'nav.glossary', icon: BookMarked },
  { to: '/progress', label: 'nav.progress', icon: TrendingUp },
];

const TITLES = {
  '/': 'nav.dashboard', '/path': 'nav.learningPath', '/ifrs': 'nav.ifrs',
  '/statements': 'nav.statements', '/journal-lab': 'nav.journalLab',
  '/impact-lab': 'nav.impactLab', '/cases': 'nav.cases',
  '/quizzes': 'nav.quizzes', '/exam': 'nav.exam', '/simulator': 'nav.simulator',
  '/interview': 'nav.interview', '/review': 'nav.reviewMistakes',
  '/glossary': 'nav.glossary', '/progress': 'nav.progress',
};

export default function Layout({ children }) {
  const { store, toggleTheme, setLang } = useProgress();
  const t = useT();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const mistakeCount = (store.mistakes || []).length;

  const titleFor = (path) => {
    if (path.startsWith('/module/')) return t('nav.module');
    if (path.startsWith('/case/')) return t('nav.case');
    if (path.startsWith('/practice')) return t('nav.practiceQuiz');
    if (path.startsWith('/interview/rapid')) return t('nav.rapidInterview');
    return t(TITLES[path] || 'nav.academy');
  };

  return (
    <div className="app-shell">
      {open && <div className="scrim" onClick={() => setOpen(false)} />}
      <aside className={`sidebar${open ? ' open' : ''}`}>
        <div className="brand">
          <div className="brand-mark"><Landmark size={20} /></div>
          <div>
            <div className="brand-name">Accounting Standards Academy</div>
            <div className="brand-sub">IFRS · Reporting</div>
          </div>
        </div>
        <nav className="nav">
          {NAV.map((item, i) =>
            item.section ? (
              <div className="nav-section" key={i}>{t(item.section)}</div>
            ) : (
              <NavLink
                key={item.to} to={item.to} end={item.end}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={() => setOpen(false)}
              >
                <item.icon />
                {t(item.label)}
                {item.badge === 'mistakes' && mistakeCount > 0 && (
                  <span className="nav-badge">{mistakeCount}</span>
                )}
              </NavLink>
            )
          )}
        </nav>
        <div className="sidebar-foot">{t('nav.sidebarFoot')}</div>
      </aside>

      <div className="main-col">
        <header className="topbar">
          <button className="icon-btn menu-btn" onClick={() => setOpen(true)} aria-label={t('common.openMenu')}><Menu /></button>
          <div className="topbar-title">{titleFor(location.pathname)}</div>
          <div className="topbar-spacer" />
          <select
            className="lang-select"
            value={store.lang === 'es' ? 'es' : 'en'}
            onChange={e => setLang(e.target.value)}
            aria-label={t('lang.label')}
          >
            <option value="en">{t('lang.english')}</option>
            <option value="es">{t('lang.spanish')}</option>
          </select>
          <button className="icon-btn" onClick={toggleTheme} aria-label={t('common.toggleTheme')} title={t('common.toggleThemeTitle')}>
            {store.theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <button className="icon-btn" onClick={() => setOpen(o => !o)} aria-label={t('common.toggleSidebar')} style={{ display: 'none' }}>
            <X />
          </button>
        </header>
        <main className="main">{children}</main>
      </div>
    </div>
  );
}
