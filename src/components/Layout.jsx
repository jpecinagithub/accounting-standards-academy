import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Route as RouteIcon, Landmark, FileBarChart2, BookOpenCheck,
  Scale, Briefcase, HelpCircle, Mic, AlertCircle, BookMarked, TrendingUp,
  Menu, X, Sun, Moon, GraduationCap, FlaskConical,
} from 'lucide-react';
import { useProgress } from '../store/progress.jsx';

const NAV = [
  { section: 'Learn' },
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/path', label: 'Learning Path', icon: RouteIcon },
  { to: '/ifrs', label: 'IFRS Standards', icon: Landmark },
  { to: '/statements', label: 'Financial Statements', icon: FileBarChart2 },
  { section: 'Practice' },
  { to: '/journal-lab', label: 'Journal Entry Lab', icon: BookOpenCheck },
  { to: '/impact-lab', label: 'Statement Impact Lab', icon: Scale },
  { to: '/cases', label: 'Practical Cases', icon: Briefcase },
  { to: '/quizzes', label: 'Quizzes', icon: HelpCircle },
  { to: '/exam', label: 'Final Exam', icon: GraduationCap },
  { to: '/simulator', label: 'Month-End Simulator', icon: FlaskConical },
  { to: '/interview', label: 'Interview Practice', icon: Mic },
  { section: 'Review' },
  { to: '/review', label: 'Review Mistakes', icon: AlertCircle, badge: 'mistakes' },
  { to: '/glossary', label: 'Glossary', icon: BookMarked },
  { to: '/progress', label: 'My Progress', icon: TrendingUp },
];

const TITLES = {
  '/': 'Dashboard', '/path': 'Learning Path', '/ifrs': 'IFRS Standards',
  '/statements': 'Financial Statements', '/journal-lab': 'Journal Entry Lab',
  '/impact-lab': 'Statement Impact Lab', '/cases': 'Practical Cases',
  '/quizzes': 'Quizzes', '/exam': 'Final Exam', '/simulator': 'Month-End Simulator',
  '/interview': 'Interview Practice', '/review': 'Review Mistakes',
  '/glossary': 'Glossary', '/progress': 'My Progress',
};

export default function Layout({ children }) {
  const { store, toggleTheme } = useProgress();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const mistakeCount = (store.mistakes || []).length;

  const titleFor = (path) => {
    if (path.startsWith('/module/')) return 'Module';
    if (path.startsWith('/case/')) return 'Case Study';
    if (path.startsWith('/practice')) return 'Practice Quiz';
    if (path.startsWith('/interview/rapid')) return 'Rapid Interview';
    return TITLES[path] || 'Academy';
  };

  return (
    <div className="app-shell">
      {open && <div className="scrim" onClick={() => setOpen(false)} />}
      <aside className={`sidebar${open ? ' open' : ''}`}>
        <div className="brand">
          <div className="brand-mark"><Landmark size={20} /></div>
          <div>
            <div className="brand-eyebrow">Eleving Group</div>
            <div className="brand-name">Accounting Standards Academy</div>
            <div className="brand-sub">IFRS · Reporting</div>
          </div>
        </div>
        <nav className="nav">
          {NAV.map((item, i) =>
            item.section ? (
              <div className="nav-section" key={i}>{item.section}</div>
            ) : (
              <NavLink
                key={item.to} to={item.to} end={item.end}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={() => setOpen(false)}
              >
                <item.icon />
                {item.label}
                {item.badge === 'mistakes' && mistakeCount > 0 && (
                  <span className="nav-badge">{mistakeCount}</span>
                )}
              </NavLink>
            )
          )}
        </nav>
        <div className="sidebar-foot">40 modules · 350+ questions · IFRS</div>
      </aside>

      <div className="main-col">
        <header className="topbar">
          <button className="icon-btn menu-btn" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
          <div className="topbar-title">{titleFor(location.pathname)}</div>
          <div className="topbar-spacer" />
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle light / dark mode">
            {store.theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <button className="icon-btn" onClick={() => setOpen(o => !o)} aria-label="Toggle sidebar" style={{ display: 'none' }}>
            <X />
          </button>
        </header>
        <main className="main">{children}</main>
      </div>
    </div>
  );
}
