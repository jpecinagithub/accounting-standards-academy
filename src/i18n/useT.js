import { UI_STRINGS } from './ui.js';
import { useProgress } from '../store/progress.jsx';

/**
 * useT() -> t(key, vars?)
 * Returns the translated UI string for the current language.
 * Falls back to English, then to the key itself. Supports {var} interpolation.
 */
export function useT() {
  const { store } = useProgress();
  const lang = store.lang === 'es' ? 'es' : 'en';
  return (key, vars) => {
    const dict = UI_STRINGS[lang] || {};
    let s = dict[key] ?? UI_STRINGS.en[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        s = String(s).split(`{${k}}`).join(String(v));
      }
    }
    return s;
  };
}

/** Non-hook version for use outside components (takes lang explicitly). */
export function translate(key, lang = 'en', vars) {
  const l = lang === 'es' ? 'es' : 'en';
  const dict = UI_STRINGS[l] || {};
  let s = dict[key] ?? UI_STRINGS.en[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      s = String(s).split(`{${k}}`).join(String(v));
    }
  }
  return s;
}
