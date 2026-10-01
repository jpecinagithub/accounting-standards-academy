import React, { useState } from 'react';
import { GitBranch, ArrowDown, Layers, Workflow } from 'lucide-react';
import { useProgress } from '../store/progress.jsx';
import { useT } from '../i18n/useT.js';

/* Interactive visual learning components, referenced from module data via `visuals` keys. */

function Box({ title, icon: Icon, children }) {
  return (
    <div className="visual-box">
      <div className="v-title">{Icon && <Icon />}{title}</div>
      {children}
    </div>
  );
}

function useNumFmt() {
  const { store } = useProgress();
  const locale = store.lang === 'es' ? 'es-ES' : 'en-US';
  return (n) => Number(n).toLocaleString(locale);
}

export function AccountingEquation() {
  const t = useT();
  const [lit, setLit] = useState(null);
  const terms = [
    { key: 'a', name: t('visual.equation.a'), def: t('visual.equation.aDef') },
    { key: 'l', name: t('visual.equation.l'), def: t('visual.equation.lDef') },
    { key: 'e', name: t('visual.equation.e'), def: t('visual.equation.eDef') },
  ];
  const vals = ['500,000', '200,000', '300,000'];
  const ops = ['=', '+'];
  return (
    <Box title={t('visual.equation.title')} icon={Layers}>
      <div className="eq-row">
        {terms.map((term, i) => (
          <React.Fragment key={term.key}>
            {i > 0 && <div className="eq-op">{ops[i - 1]}</div>}
            <div className={`eq-term${lit === term.key ? ' lit' : ''}`} onClick={() => setLit(lit === term.key ? null : term.key)}>
              <div className="t-name">{term.name}</div><div className="t-val serif-num">{vals[i]}</div><div className="t-def">{term.def}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <p className="small muted mt" style={{ textAlign: 'center' }}>{t('visual.equation.footer')}</p>
    </Box>
  );
}

export function StatementsFlow() {
  const t = useT();
  const node = (txt, hl) => <div className={`flow-node${hl ? ' hl' : ''}`}>{txt}</div>;
  const arrow = <div className="flow-arrow"><ArrowDown size={18} /></div>;
  return (
    <Box title={t('visual.flow.title')} icon={Workflow}>
      <div className="flow-col">
        {node(t('visual.flow.revenue'))}
        {arrow}{node(t('visual.flow.costs'))}
        {arrow}{node(t('visual.flow.profit'), true)}
        {arrow}{node(t('visual.flow.retained'))}
        {arrow}{node(t('visual.flow.bs'), true)}
      </div>
      <div className="divider" />
      <div className="flow-col">
        {node(t('visual.flow.netIncome'), true)}
        {arrow}{node(t('visual.flow.noncash'))}
        {arrow}{node(t('visual.flow.wc'))}
        {arrow}{node(t('visual.flow.cfo'), true)}
      </div>
      <p className="small muted mt" style={{ textAlign: 'center' }}>{t('visual.flow.footer')}</p>
    </Box>
  );
}

function DecisionTree({ title, steps, results }) {
  const t = useT();
  const [path, setPath] = useState([]);
  const step = steps[path.length];
  if (!step) {
    const res = results[path.join('')];
    return (
      <Box title={title} icon={GitBranch}>
        <div className="tree-node">
          <div className="tree-result">
            <div className="res-label" style={{ color: res.tone }}>{res.label}</div>
            <div className="res-desc">{res.desc}</div>
          </div>
          <div className="tree-back"><button className="btn btn-ghost btn-sm" onClick={() => setPath([])}>{t('common.restart')}</button></div>
        </div>
      </Box>
    );
  }
  return (
    <Box title={title} icon={GitBranch}>
      <div className="tree-node">
        <div className="tree-q">{step.q}</div>
        <div className="tree-opts">
          <button className="btn btn-ghost btn-sm" onClick={() => setPath([...path, 'y'])}>{t('common.yes')}</button>
          <button className="btn btn-ghost btn-sm" onClick={() => setPath([...path, 'n'])}>{t('common.no')}</button>
        </div>
        {path.length > 0 && <div className="tree-back"><button className="btn btn-ghost btn-sm" onClick={() => setPath(path.slice(0, -1))}>{t('common.back')}</button></div>}
      </div>
    </Box>
  );
}

export function IAS37Tree() {
  const t = useT();
  return (
    <DecisionTree
      title={t('visual.ias37.title')}
      steps={[
        { q: t('visual.ias37.q1') },
        { q: t('visual.ias37.q2') },
        { q: t('visual.ias37.q3') },
      ]}
      results={{
        n: { label: t('visual.ias37.rN'), desc: t('visual.ias37.rNd'), tone: 'var(--info)' },
        yn: { label: t('visual.ias37.rYn'), desc: t('visual.ias37.rYnd'), tone: 'var(--warn)' },
        yyn: { label: t('visual.ias37.rYyn'), desc: t('visual.ias37.rYynd'), tone: 'var(--warn)' },
        yyy: { label: t('visual.ias37.rYyy'), desc: t('visual.ias37.rYyyd'), tone: 'var(--success)' },
      }}
    />
  );
}

export function IFRS9Tree() {
  const t = useT();
  return (
    <DecisionTree
      title={t('visual.ifrs9.title')}
      steps={[
        { q: t('visual.ifrs9.q1') },
        { q: t('visual.ifrs9.q2') },
      ]}
      results={{
        yy: { label: t('visual.ifrs9.rYY'), desc: t('visual.ifrs9.rYYd'), tone: 'var(--success)' },
        yn: { label: t('visual.ifrs9.rYN'), desc: t('visual.ifrs9.rYNd'), tone: 'var(--warn)' },
        ny: { label: t('visual.ifrs9.rNY'), desc: t('visual.ifrs9.rNYd'), tone: 'var(--info)' },
        nn: { label: t('visual.ifrs9.rNN'), desc: t('visual.ifrs9.rNNd'), tone: 'var(--warn)' },
      }}
    />
  );
}

export function ECLStages() {
  const t = useT();
  const [active, setActive] = useState(0);
  const stages = [
    { name: t('visual.ecl.s1'), sub: t('visual.ecl.s1sub'), ecl: t('visual.ecl.s1ecl'), desc: t('visual.ecl.s1d') },
    { name: t('visual.ecl.s2'), sub: t('visual.ecl.s2sub'), ecl: t('visual.ecl.s2ecl'), desc: t('visual.ecl.s2d') },
    { name: t('visual.ecl.s3'), sub: t('visual.ecl.s3sub'), ecl: t('visual.ecl.s3ecl'), desc: t('visual.ecl.s3d') },
  ];
  const arrows = [t('visual.ecl.arrow1'), t('visual.ecl.arrow2')];
  return (
    <Box title={t('visual.ecl.title')} icon={Layers}>
      <div className="flex center" style={{ alignItems: 'stretch' }}>
        <div className="stage-row" style={{ flex: 1 }}>
          {stages.map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="stage-arrow"><div>{arrows[i - 1]}<br />↓</div></div>}
              <div className={`stage-card${active === i ? ' active' : ''}`} onClick={() => setActive(i)}>
                <div className="s-name">{s.name}</div>
                <div className="s-sub">{s.sub}</div>
                <div className="badge badge-gold mt" style={{ marginTop: 8 }}>{s.ecl}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="stage-detail"><strong>{t('visual.ecl.detail', { name: stages[active].name, sub: stages[active].sub })}</strong> {stages[active].desc}</div>
    </Box>
  );
}

export function LeaseTimeline() {
  const t = useT();
  const fmt = useNumFmt();
  // 3-year lease, 50k annual payment, 5% discount rate
  const rows = [];
  let bal = 136162;
  for (let y = 1; y <= 3; y++) {
    const interest = Math.round(bal * 0.05);
    const closing = bal + interest - 50000;
    rows.push([t('visual.lease.year', { y }), bal, interest, 50000, Math.max(0, closing)]);
    bal = closing;
  }
  const dep = Math.round(136162 / 3);
  return (
    <Box title={t('visual.lease.title')} icon={Workflow}>
      <p className="small">{t('visual.lease.intro', { pv: fmt(136162), journal: t('visual.lease.journal', { pv: fmt(136162) }) })}</p>
      <div style={{ overflowX: 'auto' }}>
        <table className="data">
          <thead><tr><th></th><th className="num">{t('visual.lease.opening')}</th><th className="num">{t('visual.lease.interest')}</th><th className="num">{t('visual.lease.payment')}</th><th className="num">{t('visual.lease.closing')}</th></tr></thead>
          <tbody>{rows.map((r, i) => <tr key={i}><td>{r[0]}</td><td className="num">{fmt(r[1])}</td><td className="num">{fmt(r[2])}</td><td className="num">{fmt(r[3])}</td><td className="num">{fmt(r[4])}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="small">{t('visual.lease.depLine', { dep: fmt(dep), i1: fmt(6808), total1: fmt(dep + 6808) })}</p>
    </Box>
  );
}

export function CCCDiagram() {
  const t = useT();
  const [dso, setDso] = useState(45);
  const [dio, setDio] = useState(60);
  const [dpo, setDpo] = useState(50);
  const ccc = dso + dio - dpo;
  return (
    <Box title={t('visual.ccc.title')} icon={Workflow}>
      <div className="eq-row">
        <div className="eq-term lit"><div className="t-name">DSO</div><div className="t-val serif-num">{dso}</div><div className="t-def" style={{ display: 'block' }}>{t('visual.ccc.dso')}</div></div>
        <div className="eq-op">+</div>
        <div className="eq-term lit"><div className="t-name">DIO</div><div className="t-val serif-num">{dio}</div><div className="t-def" style={{ display: 'block' }}>{t('visual.ccc.dio')}</div></div>
        <div className="eq-op">−</div>
        <div className="eq-term lit"><div className="t-name">DPO</div><div className="t-val serif-num">{dpo}</div><div className="t-def" style={{ display: 'block' }}>{t('visual.ccc.dpo')}</div></div>
        <div className="eq-op">=</div>
        <div className="eq-term lit" style={{ borderColor: 'var(--accent)' }}><div className="t-name">CCC</div><div className="t-val serif-num">{t('visual.ccc.days', { n: ccc })}</div><div className="t-def" style={{ display: 'block' }}>{t('visual.ccc.ccc')}</div></div>
      </div>
      <div className="grid grid-3 mt">
        {[['DSO', dso, setDso], ['DIO', dio, setDio], ['DPO', dpo, setDpo]].map(([lbl, v, set]) => (
          <div className="field" key={lbl}>
            <label>{t('visual.ccc.slider', { lbl, v })}</label>
            <input type="range" min={0} max={120} value={v} onChange={e => set(Number(e.target.value))} />
          </div>
        ))}
      </div>
      <p className="small muted mt">{t('visual.ccc.footer')}</p>
    </Box>
  );
}

export const VISUALS = {
  'accounting-equation': AccountingEquation,
  'statements-flow': StatementsFlow,
  'ias37-tree': IAS37Tree,
  'ifrs9-tree': IFRS9Tree,
  'ecl-stages': ECLStages,
  'lease-timeline': LeaseTimeline,
  'ccc': CCCDiagram,
};
