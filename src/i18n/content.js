import { useProgress } from '../store/progress.jsx';
import * as EN from '../data/index.js';
import * as ES from '../data-es/index.js';

/**
 * useContent() -> the dataset (modules, glossary, labs, cases, ...) for the
 * current language. Both datasets export the same names; EN is the default.
 */
export function useContent() {
  const { store } = useProgress();
  return store.lang === 'es' ? ES : EN;
}

/** Non-hook selector (takes lang explicitly). */
export function contentFor(lang) {
  return lang === 'es' ? ES : EN;
}
