import React, { useState } from 'react';
import { GitBranch, ArrowDown, Layers, Workflow } from 'lucide-react';

/* Interactive visual learning components, referenced from module data via `visuals` keys. */

function Box({ title, icon: Icon, children }) {
  return (
    <div className="visual-box">
      <div className="v-title">{Icon && <Icon />}{title}</div>
      {children}
    </div>
  );
}

export function AccountingEquation() {
  const [lit, setLit] = useState(null);
  const terms = [
    { key: 'a', name: 'Assets', val: '500,000', def: 'Resources controlled by the entity from past events, expected to generate future economic benefits.' },
    { key: 'l', name: 'Liabilities', val: '200,000', def: 'Present obligations from past events; settlement will require an outflow of resources.' },
    { key: 'e', name: 'Equity', val: '300,000', def: 'The residual interest in assets after deducting liabilities — what belongs to the owners.' },
  ];
  return (
    <Box title="The accounting equation — click each term" icon={Layers}>
      <div className="eq-row">
        <div className={`eq-term${lit === 'a' ? ' lit' : ''}`} onClick={() => setLit(lit === 'a' ? null : 'a')}>
          <div className="t-name">Assets</div><div className="t-val serif-num">500,000</div><div className="t-def">{terms[0].def}</div>
        </div>
        <div className="eq-op">=</div>
        <div className={`eq-term${lit === 'l' ? ' lit' : ''}`} onClick={() => setLit(lit === 'l' ? null : 'l')}>
          <div className="t-name">Liabilities</div><div className="t-val serif-num">200,000</div><div className="t-def">{terms[1].def}</div>
        </div>
        <div className="eq-op">+</div>
        <div className={`eq-term${lit === 'e' ? ' lit' : ''}`} onClick={() => setLit(lit === 'e' ? null : 'e')}>
          <div className="t-name">Equity</div><div className="t-val serif-num">300,000</div><div className="t-def">{terms[2].def}</div>
        </div>
      </div>
      <p className="small muted mt" style={{ textAlign: 'center' }}>Every transaction keeps this equation in balance — that is what double-entry guarantees.</p>
    </Box>
  );
}

export function StatementsFlow() {
  const node = (t, hl) => <div className={`flow-node${hl ? ' hl' : ''}`}>{t}</div>;
  const arrow = <div className="flow-arrow"><ArrowDown size={18} /></div>;
  return (
    <Box title="How the statements connect" icon={Workflow}>
      <div className="flow-col">
        {node('Revenue')}
        {arrow}{node('− Costs & expenses')}
        {arrow}{node('Profit (Net Income)', true)}
        {arrow}{node('Retained Earnings (Equity)')}
        {arrow}{node('Balance Sheet balances the equation', true)}
      </div>
      <div className="divider" />
      <div className="flow-col">
        {node('Net Income', true)}
        {arrow}{node('+ Non-cash charges (e.g. depreciation)')}
        {arrow}{node('± Changes in working capital')}
        {arrow}{node('Cash flow from operations (indirect method)', true)}
      </div>
      <p className="small muted mt" style={{ textAlign: 'center' }}>Profit explains equity. Cash flow reconciles profit to cash. The three statements are one story.</p>
    </Box>
  );
}

function DecisionTree({ title, steps, results }) {
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
          <div className="tree-back"><button className="btn btn-ghost btn-sm" onClick={() => setPath([])}>Restart</button></div>
        </div>
      </Box>
    );
  }
  return (
    <Box title={title} icon={GitBranch}>
      <div className="tree-node">
        <div className="tree-q">{step.q}</div>
        <div className="tree-opts">
          <button className="btn btn-ghost btn-sm" onClick={() => setPath([...path, 'y'])}>{step.yes}</button>
          <button className="btn btn-ghost btn-sm" onClick={() => setPath([...path, 'n'])}>{step.no}</button>
        </div>
        {path.length > 0 && <div className="tree-back"><button className="btn btn-ghost btn-sm" onClick={() => setPath(path.slice(0, -1))}>Back</button></div>}
      </div>
    </Box>
  );
}

export function IAS37Tree() {
  return (
    <DecisionTree
      title="IAS 37 — Provision decision tree"
      steps={[
        { q: 'Is there a present obligation from a past event?', yes: 'Yes', no: 'No' },
        { q: 'Is an outflow of resources probable (>50%)?', yes: 'Yes', no: 'No' },
        { q: 'Can the amount be estimated reliably?', yes: 'Yes', no: 'No' },
      ]}
      results={{
        n: { label: 'No provision', desc: 'No present obligation. Disclose a contingent liability only if there is a possible obligation.', tone: 'var(--info)' },
        yn: { label: 'Contingent liability — disclose', desc: 'Outflow is possible but not probable. Disclose in the notes; do not recognize.', tone: 'var(--warn)' },
        yyn: { label: 'Contingent liability — disclose', desc: 'Probable outflow but no reliable estimate is rare — disclose the contingency and keep reassessing.', tone: 'var(--warn)' },
        yyy: { label: 'Recognize a provision', desc: 'Dr Expense / Cr Provision. Remeasure at each reporting date; unwind discounting over time.', tone: 'var(--success)' },
      }}
    />
  );
}

export function IFRS9Tree() {
  return (
    <DecisionTree
      title="IFRS 9 — Classification decision tree"
      steps={[
        { q: 'Is the business model "hold to collect" contractual cash flows?', yes: 'Yes', no: 'No' },
        { q: 'Do the cash flows pass the SPPI test (solely payments of principal and interest)?', yes: 'Yes', no: 'No' },
      ]}
      results={{
        yy: { label: 'Amortized cost', desc: 'E.g. plain-vanilla loans and receivables held to maturity. Interest via effective interest rate; ECL applies.', tone: 'var(--success)' },
        yn: { label: 'FVTPL', desc: 'Fails SPPI — measured at fair value through profit or loss.', tone: 'var(--warn)' },
        ny: { label: 'FVTPL (or FVOCI)', desc: 'Trading / other models → FVTPL. Note: "hold to collect and sell" + SPPI → FVOCI for debt; equity FVOCI is an irrevocable election.', tone: 'var(--info)' },
        nn: { label: 'FVTPL', desc: 'Fair value through profit or loss.', tone: 'var(--warn)' },
      }}
    />
  );
}

export function ECLStages() {
  const [active, setActive] = useState(0);
  const stages = [
    { name: 'Stage 1', sub: 'Performing', ecl: '12-month ECL', desc: 'No significant increase in credit risk (SICR) since origination. Recognize a 12-month expected credit loss allowance. Interest is calculated on the gross carrying amount.' },
    { name: 'Stage 2', sub: 'SICR observed', ecl: 'Lifetime ECL', desc: 'Significant increase in credit risk since origination — e.g. 30+ days past due, rating downgrade, adverse outlook. Switch to lifetime ECL. Interest still on gross carrying amount.' },
    { name: 'Stage 3', sub: 'Credit-impaired', ecl: 'Lifetime ECL', desc: 'Objective evidence of impairment — default, 90+ days past due, unlikely to pay. Lifetime ECL, and interest is now calculated on the net (amortized cost) amount.' },
  ];
  return (
    <Box title="IFRS 9 — ECL staging (click each stage)" icon={Layers}>
      <div className="flex center" style={{ alignItems: 'stretch' }}>
        <div className="stage-row" style={{ flex: 1 }}>
          {stages.map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="stage-arrow"><div>{i === 1 ? 'SICR' : 'Credit-impaired'}<br />↓</div></div>}
              <div className={`stage-card${active === i ? ' active' : ''}`} onClick={() => setActive(i)}>
                <div className="s-name">{s.name}</div>
                <div className="s-sub">{s.sub}</div>
                <div className="badge badge-gold mt" style={{ marginTop: 8 }}>{s.ecl}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="stage-detail"><strong>{stages[active].name} — {stages[active].sub}:</strong> {stages[active].desc}</div>
    </Box>
  );
}

export function LeaseTimeline() {
  // 3-year lease, 50k annual payment, 5% discount rate
  const rows = [];
  let bal = 136162;
  for (let y = 1; y <= 3; y++) {
    const interest = Math.round(bal * 0.05);
    const closing = bal + interest - 50000;
    rows.push([`Year ${y}`, bal, interest, 50000, Math.max(0, closing)]);
    bal = closing;
  }
  const dep = Math.round(136162 / 3);
  return (
    <Box title="IFRS 16 — worked example: 3-yr lease, 50,000/yr, 5%" icon={Workflow}>
      <p className="small">PV of payments = 50,000 × 2.7232 = <strong className="serif-num">136,162</strong>. Initial journals: Dr Right-of-use asset 136,162 / Cr Lease liability 136,162.</p>
      <div style={{ overflowX: 'auto' }}>
        <table className="data">
          <thead><tr><th></th><th className="num">Opening liability</th><th className="num">Interest 5%</th><th className="num">Payment</th><th className="num">Closing liability</th></tr></thead>
          <tbody>{rows.map((r, i) => <tr key={i}><td>{r[0]}</td><td className="num">{r[1].toLocaleString()}</td><td className="num">{r[2].toLocaleString()}</td><td className="num">{r[3].toLocaleString()}</td><td className="num">{r[4].toLocaleString()}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="small">ROU depreciation (straight-line): <strong className="serif-num">{dep.toLocaleString()}/yr</strong>. Total Year-1 P&L charge = {dep.toLocaleString()} + 6,808 = <strong className="serif-num">52,195</strong> — front-loaded vs. the old 50,000 straight-line rent. EBITDA rises (rent replaced by depreciation + interest below EBITDA); operating cash flow rises, financing cash flow falls (principal repayments).</p>
    </Box>
  );
}

export function CCCDiagram() {
  const [dso, setDso] = useState(45);
  const [dio, setDio] = useState(60);
  const [dpo, setDpo] = useState(50);
  const ccc = dso + dio - dpo;
  return (
    <Box title="Cash conversion cycle — interactive" icon={Workflow}>
      <div className="eq-row">
        <div className="eq-term lit"><div className="t-name">DSO</div><div className="t-val serif-num">{dso}</div><div className="t-def" style={{ display: 'block' }}>Days sales outstanding — how fast customers pay.</div></div>
        <div className="eq-op">+</div>
        <div className="eq-term lit"><div className="t-name">DIO</div><div className="t-val serif-num">{dio}</div><div className="t-def" style={{ display: 'block' }}>Days inventory outstanding — how long stock sits.</div></div>
        <div className="eq-op">−</div>
        <div className="eq-term lit"><div className="t-name">DPO</div><div className="t-val serif-num">{dpo}</div><div className="t-def" style={{ display: 'block' }}>Days payables outstanding — how slowly you pay suppliers.</div></div>
        <div className="eq-op">=</div>
        <div className="eq-term lit" style={{ borderColor: 'var(--accent)' }}><div className="t-name">CCC</div><div className="t-val serif-num">{ccc} days</div><div className="t-def" style={{ display: 'block' }}>Cash tied up in the operating cycle.</div></div>
      </div>
      <div className="grid grid-3 mt">
        {[['DSO', dso, setDso], ['DIO', dio, setDio], ['DPO', dpo, setDpo]].map(([lbl, v, set]) => (
          <div className="field" key={lbl}>
            <label>{lbl}: {v} days</label>
            <input type="range" min={0} max={120} value={v} onChange={e => set(Number(e.target.value))} />
          </div>
        ))}
      </div>
      <p className="small muted mt">Shortening the CCC — collect faster, hold less stock, negotiate longer supplier terms — frees cash without changing profit.</p>
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
