/**
 * Spanish dataset — complete European-Spanish (Spain) mirror of src/data/.
 * Imports the ES translations from ./modules/level1.es.js … level9.es.js and
 * ./extras.es.js. Exports EXACTLY the same names as src/data/index.js.
 * The English files remain the source of truth and are never modified.
 */
import level1 from './modules/level1.es.js';
import level2 from './modules/level2.es.js';
import level3 from './modules/level3.es.js';
import level4 from './modules/level4.es.js';
import level5 from './modules/level5.es.js';
import level6 from './modules/level6.es.js';
import level7 from './modules/level7.es.js';
import level8 from './modules/level8.es.js';
import level9 from './modules/level9.es.js';
import { GLOSSARY, CHART_OF_ACCOUNTS, JOURNAL_LAB, IMPACT_LAB, CASES, INTERVIEW, MONTH_END } from './extras.es.js';

export const MODULES = [...level1, ...level2, ...level3, ...level4, ...level5, ...level6, ...level7, ...level8, ...level9]
  .sort((a, b) => a.id.localeCompare(b.id));

export const LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => {
  const mods = MODULES.filter(m => m.level === n);
  return { n, title: mods[0]?.levelTitle || `Nivel ${n}`, modules: mods };
});

export const SKILLS = [
  'IFRS Fundamentals',
  'Revenue Recognition',
  'Leases',
  'Financial Instruments',
  'Provisions',
  'Consolidation',
  'Cash Flow',
  'Month-End Closing',
  'Financial Analysis',
];

/** Full question bank: every module quiz question, tagged with its module. */
export const QUESTION_BANK = MODULES.flatMap(m =>
  (m.quiz || []).map((q, i) => ({ ...q, moduleId: m.id, qid: `${m.id}-q${i}` }))
);

export const getModule = (id) => MODULES.find(m => m.id === id);

export const getNeighbors = (id) => {
  const i = MODULES.findIndex(m => m.id === id);
  return { prev: MODULES[i - 1] || null, next: MODULES[i + 1] || null };
};

export const questionsBySkill = (skill) => QUESTION_BANK.filter(q => q.skill === skill);
export const questionsByDifficulty = (diff) => QUESTION_BANK.filter(q => q.difficulty === diff);
export const questionsByModule = (moduleId) => QUESTION_BANK.filter(q => q.moduleId === moduleId);

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export { GLOSSARY, CHART_OF_ACCOUNTS, JOURNAL_LAB, IMPACT_LAB, CASES, INTERVIEW, MONTH_END };
