// Level 9 — Practical Financial Reporting (m36–m40)
export default [
  {
    id: 'm36', level: 9, levelTitle: 'Practical Financial Reporting', title: 'Management Reporting',
    standard: 'Operations', tagline: 'Numbers inform; stories persuade. Do both.',
    description: 'Management reporting turns the close into decisions. This module covers the monthly pack, variance analysis that explains rather than describes, KPI discipline, and financial storytelling — including the good-versus-bad commentary example that separates reporters from analysts.',
    minutes: 18, skills: ['Financial Analysis'],
    sections: [
      {
        heading: 'The Monthly Pack',
        paragraphs: [
          'The monthly management pack is the finance team\'s flagship product: the P&L with variance analysis, the balance sheet with working-capital commentary, the cash flow with a forecast bridge, a page of KPIs, and written commentary that explains what happened and what management should do about it. It lands on a fixed date — credibility dies when the pack is late — and it is short enough that a busy executive actually reads it.',
          'Design for the reader, not the preparer. One page of headlines up front (what happened, why, what next), detail behind for those who want it, consistent definitions month to month so trends are comparable. A pack that changes its KPIs every month is not evolving — it is hiding.'
        ],
        bullets: ['P&L, balance sheet, and cash flow with variance analysis.', 'One page of KPIs — consistent definitions, comparable trends.', 'Written commentary: what happened, why, and what management should do.', 'Fixed timetable; headlines first, detail behind.']
      },
      {
        heading: 'Variance Analysis That Explains',
        paragraphs: [
          'Variance analysis in management reporting answers "why", not "what". "Revenue was $80,000 below budget" is a fact the reader can see; "revenue was $80,000 below budget because volumes in the North region fell 12% after the price increase, partly offset by 3% higher average selling prices" is an analysis the reader can act on. Every material variance needs a cause — volume, price, mix, FX, cost — borrowed from the bridge toolkit of m31.',
          'The discipline: investigate before you write. Commentary written from the desk without talking to sales, operations, or procurement is fiction with formatting. The best finance teams treat variance analysis as journalism — call the source, verify the story, then publish.'
        ],
        callout: { type: 'example', text: 'Bad: "Revenue decreased by 8%." Better: "Revenue decreased by 8%, primarily due to lower volumes in the North region following the January price increase, partially offset by a 3% improvement in average selling prices from the shift toward premium products."' }
      },
      {
        heading: 'KPIs and Dashboards',
        paragraphs: [
          'KPIs translate strategy into numbers people watch. Good KPIs are few (five to ten, not forty), relevant to decisions, defined precisely, and timely. Mix leading indicators (order intake, pipeline, customer complaints — they predict) with lagging ones (revenue, profit, cash — they confirm). A dashboard of only lagging indicators is a rear-view mirror.',
          'Each KPI needs a target, a trend, and an owner. A KPI without a target is trivia; without a trend is noise; without an owner is nobody\'s problem. And definitions must be locked: changing how "churn" or "on-time delivery" is calculated mid-year destroys comparability and trust.'
        ],
        table: { headers: ['KPI', 'Type', 'Why it matters'], rows: [['Order intake', 'Leading', 'Predicts future revenue'], ['DSO', 'Leading', 'Early warning on cash collection'], ['Gross margin %', 'Lagging', 'Confirms pricing and cost discipline'], ['Operating cash flow', 'Lagging', 'Confirms profit quality'], ['Customer complaints', 'Leading', 'Predicts churn and warranty cost']] }
      },
      {
        heading: 'Financial Storytelling',
        paragraphs: [
          'Storytelling is not decoration — it is how analysis becomes action. A good commentary follows a structure: headline (the one thing to know), evidence (the numbers, with bridge logic), cause (the operational reason, verified with the business), and implication (what it means for the forecast and what decision is needed). Executives remember stories, not tables.',
          'The bad habits to kill: restating numbers without explaining them ("costs were $50,000 over budget" — visible in the table already), burying bad news in footnotes, writing in passive fog ("it was decided"), and ending without actions. Every commentary should close with: so what, now what, who does it, by when.'
        ],
        bullets: ['Structure: headline → evidence → verified cause → implication and decision.', 'Kill: number-restating, buried bad news, passive fog, action-free endings.', 'Close every commentary with so what, now what, owner, deadline.']
      },
      {
        heading: 'From Numbers to Decisions',
        paragraphs: [
          'The pack\'s final test: did anything change because of it? Each month\'s meeting should produce actions with owners and deadlines — renegotiate the supplier contract, accelerate the collection drive, pause the hiring plan — and next month\'s pack should report on them. Reporting without follow-through is expensive theatre.',
          'This closes the loop of the whole reporting cycle: the close produces trusted numbers (m26), analysis explains them (m31–m35), management reporting turns them into narrative, and decisions turn narrative into results. Finance earns its seat at the table not by reporting the past precisely, but by shaping what happens next.'
        ],
        callout: { type: 'interview', text: 'Asked "what makes a good management pack?" — answer: timeliness (fixed date), brevity (headlines first), explanation over description (every variance has a verified cause), consistent KPIs with targets and owners, and a closed loop (actions from last month reported this month). Then give the commentary example: bad "Revenue decreased by 8%" vs better with the North-region volume cause and the price/mix offset.' }
      }
    ],
    mistakes: [
      'Commentary that restates numbers without explaining why they moved.',
      'Too many KPIs — a 40-metric dashboard is read by nobody.',
      'Reporting variances without actions, owners, or deadlines.',
      'Hiding bad news in footnotes or appendices.',
      'Changing KPI definitions month to month, destroying comparability.',
      'Publishing the pack late — stale analysis is decoration.'
    ],
    interviewQA: [
      { q: 'What makes good management commentary?', a: 'It explains, not describes. Structure: headline, evidence with bridge logic, a cause verified with the business (not guessed from the desk), and the implication — what it means for the forecast and what decision is needed. Bad commentary: "Revenue decreased by 8%." Good: "Revenue decreased 8%, primarily from lower North-region volumes after the January price increase, partly offset by 3% better average prices from the premium mix shift." And it always closes with actions, owners, and deadlines.' },
      { q: 'How do you choose KPIs for a monthly pack?', a: 'Few and decision-relevant: five to ten, not forty. A mix of leading indicators (order intake, pipeline, complaints) that predict and lagging ones (revenue, margin, cash) that confirm. Each KPI needs a precise locked definition, a target, a trend, and an owner — without those it is trivia, noise, or nobody\'s problem. And definitions must not change mid-year, or trends become meaningless.' }
    ],
    quiz: [
      { question: 'The primary purpose of the monthly management pack is to:', options: ['Satisfy the external auditor', 'Replace the statutory financial statements', 'Archive transactions for tax purposes', 'Give management trusted numbers, explanations, and decision-ready actions'], answer: 3, explanation: 'The pack exists to drive decisions: what happened, why, and what to do — delivered on a fixed date, short enough to be read.', difficulty: 'Foundation', topic: 'Management Pack', skill: 'Financial Analysis' },
      { question: 'Which commentary is better?', options: ['"Revenue fell 8%, driven by lower North-region volumes after the price rise, partly offset by 3% better average prices from premium mix."', '"Revenue decreased by 8%."', '"Revenue was $920,000 vs a budget of $1,000,000."', '"Revenue missed due to market conditions."'], answer: 0, explanation: 'Good commentary explains with verified causes (volume, price, mix) instead of restating the number or blaming vague "market conditions".', difficulty: 'Intermediate', topic: 'Storytelling', skill: 'Financial Analysis' },
      { question: 'Order intake is best described as a:', options: ['Lagging indicator — it confirms past revenue', 'Leading indicator — it predicts future revenue', 'Vanity metric with no analytical use', 'Financial ratio'], answer: 1, explanation: 'Leading indicators (orders, pipeline, complaints) foreshadow results; lagging ones (revenue, profit) confirm them. Dashboards need both.', difficulty: 'Intermediate', topic: 'KPIs', skill: 'Financial Analysis' },
      { question: 'Variance analysis in management reporting should answer:', options: ['Only what the variance amount is', 'Who is to blame for the variance', 'Why the variance happened — with a verified operational cause', 'Whether the budget was realistic'], answer: 2, explanation: '"Revenue was $80,000 below budget" is visible in the table; the value is the cause — volume, price, mix, FX — verified with the business, not guessed.', difficulty: 'Foundation', topic: 'Variance Analysis', skill: 'Financial Analysis' },
      { question: 'A good KPI must have:', options: ['A precise definition, a target, a trend, and an owner', 'A large absolute value', 'Daily recalculation', 'Approval from the external auditor'], answer: 0, explanation: 'Without a target it is trivia, without a trend it is noise, without an owner it is nobody\'s problem — and without a locked definition trends are meaningless.', difficulty: 'Intermediate', topic: 'KPIs', skill: 'Financial Analysis' },
      { question: 'Gross margin fell 2 percentage points. The commentary should:', options: ['Report only the 2-point figure', 'Blame the finance team', 'Omit it if the absolute profit still grew', 'Cite the verified cause, e.g., a mix shift toward lower-margin products'], answer: 3, explanation: 'Margin moves need causal explanation — mix, pricing, input costs — verified with operations. Restating the figure adds nothing; omitting it hides a trend.', difficulty: 'Intermediate', topic: 'Storytelling', skill: 'Financial Analysis' },
      { question: 'The audience for the monthly management pack is:', options: ['The tax authority', 'The general public', 'External auditors, as their primary evidence', 'Management and the board — for running the business'], answer: 3, explanation: 'Management reporting serves internal decision-making, unlike statutory statements for external users. Different audience, different design.', difficulty: 'Foundation', topic: 'Management Pack', skill: 'Financial Analysis' },
      { question: 'Which practice destroys trust in KPI reporting?', options: ['Showing trends over twelve months', 'Changing KPI definitions mid-year to flatter results', 'Including targets alongside actuals', 'Assigning an owner to each KPI'], answer: 1, explanation: 'Redefining metrics breaks comparability and signals manipulation. Consistent definitions are the foundation of credible trends.', difficulty: 'Advanced', topic: 'KPIs', skill: 'Financial Analysis' },
      { question: 'In a RAG status, "Red" for a KPI typically means:', options: ['Significantly off target — needs intervention', 'On target', 'Slightly off target — watch', 'Not yet measured'], answer: 0, explanation: 'Red-Amber-Green: green is on track, amber is watch, red demands action. The thresholds behind the colors must be defined and stable.', difficulty: 'Intermediate', topic: 'KPIs', skill: 'Financial Analysis' }
    ]
  },
  {
    id: 'm37', level: 9, levelTitle: 'Practical Financial Reporting', title: 'Budget vs Actual',
    standard: 'Operations', tagline: 'The plan met reality — here is the scorecard.',
    description: 'Budget-vs-actual analysis is the control loop of financial management: compare, explain, act. This module covers absolute and percentage variances, favorable versus unfavorable (and why it depends on the line), investigation discipline with materiality thresholds, and flexed budgets — with exercises that make the mechanics stick.',
    minutes: 18, skills: ['Financial Analysis'],
    sections: [
      {
        heading: 'Absolute and Percentage Variance',
        paragraphs: [
          'Variance = Actual − Budget. That is the whole formula — but presenting it well is a skill. Show the absolute variance (in currency) and the percentage variance (variance ÷ budget), because each misleads alone: a $80,000 revenue shortfall on a $1,000,000 budget is −8% (material); the same $80,000 on a $10,000,000 budget is −0.8% (noise). Conversely, a 50% variance on a $2,000 budget line is $1,000 — dramatic percentage, trivial money.',
          'Sign conventions must be consistent and explicit. State yours once: for revenue, positive variance is good; for costs, negative variance (spent less) is good. Then label every variance Favorable or Unfavorable rather than leaving readers to decode signs — especially for cost lines, where a negative number is good news.'
        ],
        table: { headers: ['Line', 'Budget', 'Actual', 'Variance', '%', 'Direction'], rows: [['Revenue', '$1,000,000', '$920,000', '−$80,000', '−8.0%', 'Unfavorable'], ['Operating expenses', '$400,000', '$370,000', '−$30,000', '−7.5%', 'Favorable']] },
        callout: { type: 'key', text: 'Always show both: absolute variance (how much money) and percentage variance (how much it matters). Label Favorable/Unfavorable — never make readers decode signs.' }
      },
      {
        heading: 'Favorable vs Unfavorable: It Depends on the Line',
        paragraphs: [
          'Favorable means "good for profit", unfavorable means "bad for profit" — and the direction flips by line. Revenue above budget: favorable. Costs below budget: favorable. So a negative cost variance is favorable, while a negative revenue variance is unfavorable. This is why labels beat signs: "−$30,000 Favorable" on operating expenses is instantly clear; "−$30,000" alone invites misreading.',
          'The subtlety: favorable is not always good. Travel costs 20% under budget because the sales team cancelled customer visits is "favorable" on paper and damaging in reality — the saving cost more in lost revenue than it saved. Always ask what behavior produced the variance before celebrating it.'
        ],
        bullets: ['Revenue up vs budget → favorable; revenue down → unfavorable.', 'Costs down vs budget → favorable; costs up → unfavorable.', 'Favorable on paper can be unfavorable in reality — ask what behavior caused it.']
      },
      {
        heading: 'Reading a Variance Report',
        paragraphs: [
          'Read a variance report in layers. First, the headline: total revenue and total cost variance, and the resulting profit variance. Then the drivers: which lines moved most, in both absolute and percentage terms. Then the story: for each material line, the operational cause (volume, price, headcount, timing). A $80,000 unfavorable revenue variance explained as "volumes 12% down in the North after the price increase, partly offset by 3% price/mix gains" is actionable; "market conditions" is not.',
          'Watch for offsetting variances that hide problems: revenue $80,000 unfavorable but costs $80,000 favorable looks flat at profit level — yet if the cost saving came from frozen hiring while revenue weakness persists, next quarter the problem compounds. Netting is the enemy of insight.'
        ],
        callout: { type: 'warning', text: 'Beware offsetting variances: flat profit can hide a revenue problem masked by unsustainable cost savings. Read the lines, not just the total.' }
      },
      {
        heading: 'Investigating Variances: Thresholds and Discipline',
        paragraphs: [
          'You cannot investigate everything — so set materiality thresholds and investigate only what breaches them, e.g., variances above both 5% and $10,000. Below the threshold, monitor; above it, explain in writing with a verified cause and, where needed, a corrective action. The threshold keeps analysis focused on what can move decisions.',
          'The investigation routine: quantify (how much, what %), decompose (price/volume/mix for revenue; rate/volume for costs), verify (talk to the business owner — do not guess), and conclude (one-off or structural? action needed?). Document the conclusion in the pack so next month starts from answers, not from re-asking the same questions.'
        ],
        steps: ['Step 1 — Quantify: absolute and percentage variance vs threshold.', 'Step 2 — Decompose: price/volume/mix (revenue) or rate/volume (costs).', 'Step 3 — Verify the cause with the business owner — never guess from the desk.', 'Step 4 — Conclude: one-off or structural? Action, owner, deadline.']
      },
      {
        heading: 'Flexed Budgets: Comparing Apples to Apples',
        paragraphs: [
          'A fixed budget assumes a volume that rarely materializes. If the budget assumed 10,000 units but only 9,000 sold, comparing actual costs to the full budget confuses volume effects with efficiency. The flexed budget restates the budget at actual volume: budgeted revenue per unit × actual units. Budget was $1,000,000 for 10,000 units ($100/unit); flexed for 9,000 actual units = $900,000.',
          'Now the analysis is honest: actual revenue $920,000 vs flexed budget $900,000 = +$20,000 favorable on a like-for-like basis — pricing/mix over-delivered even though volume disappointed. The volume shortfall itself ($100,000) is reported separately as a sales-volume variance. Flexing separates "we sold less" from "we sold badly", which demand completely different responses.'
        ],
        table: { headers: ['Measure', 'Calculation', 'Result'], rows: [['Original budget', '10,000 units x $100', '$1,000,000'], ['Flexed budget', '9,000 actual units x $100', '$900,000'], ['Actual', '—', '$920,000'], ['Flexed variance', '$920,000 − $900,000', '+$20,000 Favorable'], ['Volume variance', '$900,000 − $1,000,000', '−$100,000 Unfavorable']] }
      }
    ],
    mistakes: [
      'Calling a cost underrun "favorable" when it came from cancelled activity that also destroyed revenue.',
      'Investigating every tiny variance — without thresholds, analysis drowns in noise.',
      'Comparing actuals to a stale budget after major changes instead of re-forecasting.',
      'Mixing sign conventions: presenting overspends as positive numbers confuses everyone.',
      'Blaming "the budget" instead of finding the operational cause of the variance.',
      'Letting favorable and unfavorable variances net out and hide the real story.'
    ],
    interviewQA: [
      { q: 'How do you decide which variances to investigate?', a: 'With dual materiality thresholds — for example, variances exceeding both 5% and $10,000 get written explanations; below that, I monitor. Then I prioritize by decision relevance: a small variance signaling a structural problem (margin erosion starting) beats a large one-off timing variance. For each investigated variance I quantify, decompose into price/volume/mix or rate/volume, verify the cause with the business owner rather than guessing, and conclude whether it is one-off or structural with an action, owner, and deadline.' },
      { q: 'Revenue is 8% below budget. How do you analyze it?', a: 'First the numbers: −$80,000 on $1,000,000, so −8%, clearly material. Then I decompose with a bridge — volume, price, mix, FX — to find the driver. Suppose it is volume down 12% in the North after the January price increase, partly offset by 3% price/mix gains. I verify with sales (was it the price rise, a lost customer, a delayed order?), judge one-off vs structural, and propose actions: if the price increase is sticking and mix is improving, the volume dip may be acceptable; if a competitor took share, that needs a commercial response. And I check whether costs flexed with the lower volume or stayed fixed.' }
    ],
    quiz: [
      { question: 'Variance is correctly defined as:', options: ['Budget − Actual', 'Actual + Budget', 'Actual − Budget', 'Actual / Budget'], answer: 2, explanation: 'Variance = Actual minus Budget. Sign conventions and Favorable/Unfavorable labels are then applied consistently on top.', difficulty: 'Foundation', topic: 'Variance Basics', skill: 'Financial Analysis' },
      { question: 'Budget revenue $1,000,000; actual $920,000. The variance is:', options: ['+$80,000 (+8%) Favorable', '−$80,000 (−8%) Unfavorable', '−$80,000 (−8%) Favorable', '$0 — within tolerance'], answer: 1, explanation: '−$80,000 is 8% of budget, and revenue below budget is unfavorable for profit.', difficulty: 'Intermediate', topic: 'Variance Basics', skill: 'Financial Analysis' },
      { question: 'Operating expenses: budget $400,000; actual $370,000. The variance is:', options: ['−$30,000 (−7.5%) Unfavorable', '+$30,000 (+7.5%) Favorable', '−$30,000 (−7.5%) Favorable', '+$30,000 (+8.1%) Unfavorable'], answer: 2, explanation: 'Spending $30,000 less than budget is favorable for profit: −$30,000, which is 7.5% of the $400,000 budget.', difficulty: 'Intermediate', topic: 'Variance Basics', skill: 'Financial Analysis' },
      { question: 'Percentage variance is calculated as:', options: ['Variance / Budget', 'Variance / Actual', 'Budget / Actual', 'Actual x Budget'], answer: 0, explanation: 'Percentage variance scales the variance against the plan: (Actual − Budget) / Budget.', difficulty: 'Intermediate', topic: 'Variance Basics', skill: 'Financial Analysis' },
      { question: 'Whether a variance is favorable or unfavorable depends on:', options: ['The sign alone — positive is always favorable', 'Management\'s mood that month', 'The size of the budget', 'The line item — revenue up is favorable, costs up is unfavorable'], answer: 3, explanation: 'Favorable means good for profit. A positive variance on revenue is favorable; a positive variance on costs is unfavorable. Labels beat raw signs.', difficulty: 'Foundation', topic: 'Favorable vs Unfavorable', skill: 'Financial Analysis' },
      { question: 'Budget: 10,000 units at $100 ($1,000,000). Actual: 9,000 units, revenue $920,000. On a flexed-budget basis, revenue variance is:', options: ['−$80,000 Unfavorable (vs original budget)', '+$20,000 Favorable (vs $900,000 flexed budget)', '+$100,000 Favorable', '$0'], answer: 1, explanation: 'Flexed budget = 9,000 × $100 = $900,000. Actual $920,000 − $900,000 = +$20,000 favorable like-for-like; the −$100,000 volume shortfall is reported separately.', difficulty: 'Advanced', topic: 'Flexed Budgets', skill: 'Financial Analysis' },
      { question: 'Which variance most deserves investigation?', options: ['A $50,000 variance that is 25% of its budget line', 'A $50,000 variance that is 0.5% of its budget line', 'A $100 variance that is 90% of a trivial line', 'Variances should never be investigated'], answer: 0, explanation: 'Dual thresholds (absolute and percentage) focus effort: 25% of a line is structural until proven otherwise; 0.5% is noise; 90% of a trivial line is trivial money.', difficulty: 'Intermediate', topic: 'Investigation', skill: 'Financial Analysis' },
      { question: 'Travel costs came in 20% under budget because the sales team cancelled customer visits. This is:', options: ['Unambiguously favorable — savings are always good', 'Unfavorable — costs should never be under budget', 'Favorable on paper but potentially damaging — the saving may cost more in lost revenue', 'Irrelevant to analysis'], answer: 2, explanation: 'Variance analysis must ask what behavior produced the number. Savings from cancelled revenue-generating activity are not genuine efficiency.', difficulty: 'Intermediate', topic: 'Interpretation', skill: 'Financial Analysis' },
      { question: 'Budget-vs-actual analysis is best described as:', options: ['A one-time annual exercise', 'A way to assign blame for misses', 'Only useful for cost centers', 'A control loop: compare, explain with verified causes, and act'], answer: 3, explanation: 'The loop only works if variances are explained (not just measured) and lead to actions with owners — every month, across revenue and costs.', difficulty: 'Foundation', topic: 'Variance Basics', skill: 'Financial Analysis' }
    ]
  },
  {
    id: 'm38', level: 9, levelTitle: 'Practical Financial Reporting', title: 'Forecasting',
    standard: 'Operations', tagline: 'The budget is a promise; the forecast is the truth as we see it today.',
    description: 'Forecasting keeps financial reporting pointed at the future. This module distinguishes budgets, rolling forecasts, and latest estimates; shows how driver-based forecasts are built; introduces scenarios and sensitivity analysis; and connects forecasting to its financial-reporting jobs — impairment tests, going concern, deferred tax, and covenants.',
    minutes: 16, skills: ['Financial Analysis'],
    sections: [
      {
        heading: 'Budget, Forecast, Latest Estimate: Three Different Tools',
        paragraphs: [
          'The budget is the annual plan approved at year-start — a commitment and a performance benchmark. It goes stale as reality diverges, which is why finance maintains forecasts: updated views of the full year (or beyond) reflecting what is now known. The latest estimate (LE) is the current-period forecast — "where will this quarter land?" — refreshed as results come in.',
          'The rolling forecast goes further: always looking 12–18 months ahead, updated quarterly or monthly, dropping the elapsed period and adding a new one. Unlike the budget, which freezes in January, the rolling forecast never goes stale — there is always a forward view. Best practice runs both: the budget as the fixed target people are measured against, the forecast as the honest view used for decisions.'
        ],
        table: { headers: ['Tool', 'Horizon', 'Purpose'], rows: [['Budget', 'Fiscal year, fixed', 'Target and performance benchmark'], ['Latest estimate', 'Current quarter/year', 'Where will we land?'], ['Rolling forecast', 'Always 12–18 months ahead', 'Decision-making, never stale']] },
        callout: { type: 'key', text: 'Budget = the promise (fixed target). Forecast = the honest view (updated truth). Never confuse the two — and never punish people for forecasting honestly.' }
      },
      {
        heading: 'Rolling Forecasts in Practice',
        paragraphs: [
          'A rolling forecast is rebuilt each cycle: actuals replace estimates for elapsed months, assumptions are refreshed, and a new month is added at the far end. Quarterly updates suit stable businesses; monthly suits volatile ones. The mechanics matter less than the discipline — the forecast must be refreshed on rhythm, not only when someone asks for it.',
          'The cultural point is critical: forecasts must be unbiased. If managers learn that honest forecasts get punished ("you forecasted a miss, so your budget increases"), they will forecast what leadership wants to hear — and the forecast becomes a second budget, useless for decisions. Protect forecast honesty like you protect the close.'
        ],
        bullets: ['Always 12–18 months ahead; refreshed quarterly or monthly on rhythm.', 'Actuals replace estimates as months elapse; assumptions are re-challenged.', 'Unbiased by design: never punish honest forecasts, or they become fiction.']
      },
      {
        heading: 'Building the Forecast: Drivers, Not Wishes',
        paragraphs: [
          'Good forecasts are driver-based: revenue = units × price, built from pipeline, seasonality, and market assumptions — not "last year + 5%". Costs split by behavior: variable costs flex with volume, fixed costs step with capacity decisions, headcount plans drive personnel cost. Working capital follows the CCC logic from m34: more sales means more receivables and inventory, funded somehow.',
          'And a forecast is three statements, not one. A P&L forecast without the balance sheet misses the working-capital funding need; without the cash flow it misses the overdraft. Every forecast should answer: what profit, what cash, and what funding — otherwise it is a wish with numbers.'
        ],
        bullets: ['Revenue from drivers: units × price, pipeline, seasonality — not last-year-plus-x%.', 'Costs by behavior: variable flexes, fixed steps, headcount plans drive payroll.', 'Always three statements: profit, balance sheet, cash — and the funding need.']
      },
      {
        heading: 'Scenarios and Sensitivity',
        paragraphs: [
          'A single-point forecast pretends certainty that does not exist. Scenario analysis runs coherent alternatives — base, upside, downside — each with internally consistent assumptions (a downside revenue scenario also cuts variable costs and working capital, it does not just slash the top line). Sensitivity analysis isolates one variable: how much does profit move if prices fall 2%, or if the euro strengthens 5%?',
          'The output is a range with probabilities, not a number: "base-case full-year profit $2.0m, downside $1.4m if the North region volumes do not recover." That framing changes decisions — it sizes the risk, triggers contingency plans, and stops the organization from planning to the single most optimistic number.'
        ],
        callout: { type: 'example', text: 'Base case: profit $2.0m. Sensitivity: −2% pricing = −$180k profit. Downside scenario (volume −10%, partial cost flex): profit $1.4m. Decision: the contingency plan triggers if Q3 volumes miss by more than 5%.' }
      },
      {
        heading: 'Forecasting Meets Financial Reporting',
        paragraphs: [
          'Forecasts are not just management tools — they feed the financial statements. Impairment tests (IAS 36) discount forecast cash flows: optimistic forecasts hide impairments. Going concern assessments (IAS 1) rely on forecast cash sufficiency for at least twelve months. Deferred tax asset recognition (IAS 12) requires probable future taxable profit — proven by forecasts. Covenant compliance is tested against forecast ratios.',
          'This is why auditors challenge forecasts aggressively: every optimistic assumption in the forecast flatters an impairment test, a DTA, or a going-concern conclusion. Forecasts used in financial reporting must be consistent with the forecasts used to run the business — two sets of forecasts is a red flag auditors are trained to find.'
        ],
        bullets: ['IAS 36 impairments, IAS 1 going concern, IAS 12 DTAs, and covenants all run on forecasts.', 'One set of forecasts for business and reporting — two sets is an audit red flag.', 'Document assumptions: a forecast without stated assumptions is a guess.']
      }
    ],
    mistakes: [
      'Treating the forecast as a target — forecasts must be unbiased, targets are for budgets.',
      'Forecasting the P&L without the balance sheet and cash flow — missing the funding need.',
      'Anchoring on last year plus x% with no driver logic behind the growth.',
      'Never comparing forecast to actual — no learning loop, same errors repeated.',
      'Hiding assumptions: a forecast without stated assumptions cannot be challenged or trusted.',
      'Running one optimistic scenario and calling it the forecast.'
    ],
    interviewQA: [
      { q: 'What is the difference between a budget and a rolling forecast?', a: 'The budget is the fixed annual plan approved at year-start — a commitment and the benchmark people are measured against. The rolling forecast is the honest, updated view: always 12–18 months ahead, refreshed quarterly or monthly, with actuals replacing estimates as time passes. The budget goes stale; the rolling forecast never does. Best practice runs both — but they serve different masters, and punishing managers for honest forecasts turns the forecast into a second, useless budget.' },
      { q: 'How do you make a forecast more reliable?', a: 'Build it from drivers, not from last-year-plus-x%: revenue as units × price from pipeline and seasonality, costs by behavior (variable flexing, fixed stepping). Forecast three statements so the funding need is visible. State every assumption explicitly so it can be challenged. Run scenarios and sensitivities instead of a single point. And close the learning loop — compare every forecast to actuals and feed the errors back into the next cycle. Reliability comes from process, not from optimism.' }
    ],
    quiz: [
      { question: 'A rolling forecast is best described as:', options: ['The annual budget approved in January', 'A forecast prepared once a year', 'A forecast always covering the next 12–18 months, updated regularly', 'A synonym for the latest estimate'], answer: 2, explanation: 'Rolling means the horizon never shortens: each update drops elapsed months and adds new ones, so there is always a forward view.', difficulty: 'Foundation', topic: 'Forecast Types', skill: 'Financial Analysis' },
      { question: 'The difference between a budget and a latest estimate is:', options: ['There is no difference', 'The budget is the fixed annual target; the latest estimate is the updated view of where the period will land', 'The latest estimate is fixed; the budget is updated', 'Only the budget uses actual data'], answer: 1, explanation: 'Budget = promise (fixed benchmark). Latest estimate = current truth (refreshed as results arrive). Both are needed; they serve different purposes.', difficulty: 'Intermediate', topic: 'Forecast Types', skill: 'Financial Analysis' },
      { question: 'Scenario analysis is used to:', options: ['Test coherent alternative futures (base, upside, downside) for decision-making', 'Produce a single certain prediction', 'Replace the budget', 'Avoid making assumptions'], answer: 0, explanation: 'Scenarios size the range of outcomes with internally consistent assumptions, triggering contingency plans instead of betting on one number.', difficulty: 'Intermediate', topic: 'Scenarios', skill: 'Financial Analysis' },
      { question: 'A forecast should be:', options: ['Optimistic, to motivate the team', 'Pessimistic, to guarantee beats', 'Identical to the budget always', 'Unbiased — the honest view, not an aspirational target'], answer: 3, explanation: 'Forecasts guide decisions; bias destroys their value. Targets motivate — that is the budget\'s job. Punishing honest forecasts guarantees dishonest ones.', difficulty: 'Foundation', topic: 'Forecast Discipline', skill: 'Financial Analysis' },
      { question: 'Sensitivity analysis answers:', options: ['What the single correct forecast is', 'Whether the budget was accurate', 'How to eliminate all forecast error', 'How much profit moves if one key assumption changes'], answer: 3, explanation: 'Sensitivity isolates one variable — e.g., −2% pricing = −$180k profit — identifying which assumptions deserve the most scrutiny.', difficulty: 'Intermediate', topic: 'Sensitivity', skill: 'Financial Analysis' },
      { question: 'A driver-based revenue forecast is built as:', options: ['Last year\'s revenue + 5%', 'Units × price, from pipeline, seasonality, and market assumptions', 'Whatever hits the budget target', 'Cash collections only'], answer: 1, explanation: 'Drivers connect the forecast to operational reality. Last-year-plus-x% bakes in whatever was wrong last year and explains nothing.', difficulty: 'Intermediate', topic: 'Driver-Based Forecasting', skill: 'Financial Analysis' },
      { question: 'Deferred tax asset recognition depends on forecasts because:', options: ['Forecasts determine the tax rate', 'Tax authorities approve forecasts', 'IAS 12 requires probable future taxable profit, evidenced by forecast profits', 'DTAs are measured at forecast cost'], answer: 2, explanation: 'The DTA probability test runs on forecast taxable profits — which is why auditors challenge forecast optimism aggressively.', difficulty: 'Advanced', topic: 'Forecasting and Reporting', skill: 'Financial Analysis' },
      { question: 'The going-concern assessment uses forecasts to check:', options: ['Cash sufficiency for at least the next twelve months', 'Whether profit will grow', 'The share price trend', 'Dividend capacity only'], answer: 0, explanation: 'Going concern is about survival: can the entity meet obligations for the foreseeable future (at least twelve months)? Forecast cash flows answer that.', difficulty: 'Intermediate', topic: 'Forecasting and Reporting', skill: 'Financial Analysis' },
      { question: 'A complete forecast should be refreshed:', options: ['Once a year with the budget', 'Only when results miss badly', 'On a fixed rhythm (monthly or quarterly), not only when asked', 'Never — forecasts go stale by design'], answer: 2, explanation: 'Rhythm keeps the forecast honest and current. Event-driven forecasting means the forward view is always out of date when it is needed most.', difficulty: 'Foundation', topic: 'Forecast Discipline', skill: 'Financial Analysis' }
    ]
  },
  {
    id: 'm39', level: 9, levelTitle: 'Practical Financial Reporting', title: 'Audit Readiness',
    standard: 'Operations', tagline: 'Be audit-ready every month, and the audit becomes a non-event.',
    description: 'External audit goes smoothly when finance teams prepare all year, not in a pre-audit panic. This module covers what auditors do, the audit trail, PBC discipline and evidence, materiality, common audit adjustments — with a worked example — and the monthly habits that make audit season boring.',
    minutes: 18, skills: ['Month-End Closing'],
    sections: [
      {
        heading: 'What Auditors Actually Do',
        paragraphs: [
          'The external auditor\'s job is to give reasonable assurance — not absolute certainty, not a fraud guarantee — that the financial statements are free of material misstatement. The audit is risk-based: auditors identify where misstatement is most likely (revenue recognition, estimates, management override) and aim their testing there, rather than checking every transaction.',
          'Understanding this changes how you prepare. Auditors do not want volume; they want the right evidence for the risky areas. A finance team that hands over clean reconciliations, supported journals, and documented estimates for the high-risk balances will sail through; one that dumps unsorted files and oral explanations will drown in follow-up queries.'
        ],
        callout: { type: 'key', text: 'Reasonable assurance, not certainty. Risk-based testing, not total checking. Give auditors the right evidence for the risky areas — not volume.' }
      },
      {
        heading: 'The Audit Trail',
        paragraphs: [
          'An audit trail means every reported number can be traced back to its source: from the financial statements to the trial balance, to the journal, to the invoice, contract, or bank statement beneath it. If a number cannot be traced, it cannot be audited — and unaudited numbers get adjusted or qualified.',
          'Building the trail is a daily habit, not a year-end project: attach supporting documents to journals when you post them, keep contracts and approvals filed where the balance they support can find them, and document estimates (provisions, impairments, valuations) with their assumptions while the reasoning is fresh. Reconstruction in March of what you were thinking in December is unreliable and auditors know it.'
        ],
        bullets: ['Every number traceable: statements → trial balance → journal → source document.', 'Attach support when posting, not when asked.', 'Document estimates with assumptions while the reasoning is fresh.']
      },
      {
        heading: 'PBC Lists and Supporting Evidence',
        paragraphs: [
          'The PBC (Provided by Client) list is the auditor\'s shopping list: trial balances, reconciliations, contracts, invoices, bank statements, legal confirmations, management representations. Treat it as a project: assign owners, set internal deadlines ahead of the auditor\'s, and deliver complete, final versions — draft reconciliations marked "v7_final_FINAL" destroy credibility.',
          'Evidence has a hierarchy, and auditors rank it explicitly. External evidence (bank confirmations, supplier statements, legal letters) beats internal evidence (your own schedules). Original documents beat copies; documented controls beat oral assurance. When you know what persuades, you prepare what persuades: get the bank confirmations requested early, because third parties are always the bottleneck.'
        ],
        table: { headers: ['Evidence', 'Strength', 'Tip'], rows: [['Bank / third-party confirmations', 'Highest — external and independent', 'Request early; third parties are slow'], ['Contracts, invoices, legal letters', 'High — documentary', 'File with the balance they support'], ['Reconciliations with sign-off', 'Medium-high — controlled internal', 'Reviewer sign-off must be real'], ['Oral explanations', 'Lowest', 'Never sufficient alone — document it']] }
      },
      {
        heading: 'Common Audit Adjustments',
        paragraphs: [
          'Audit adjustments cluster in familiar places: unrecorded liabilities found by the subsequent-payments test, cut-off errors around year-end, inadequate provisions, premature revenue, and estimates whose assumptions do not hold up. Each one the auditor finds is one the close should have caught — which is why the monthly discipline of m26 and m27 is really audit preparation in disguise.',
          'Worked example: the auditor\'s legal letter reveals a probable $25,000 settlement that management had not provided for. The adjustment debits legal expense and credits the provision — profit falls, the liability appears. Proposed adjustments below materiality may be left unbooked but are still communicated to management and the audit committee: "immaterial" does not mean "invisible".'
        ],
        journal: {
          transaction: 'Audit adjustment: provide for probable legal settlement of $25,000 identified from the legal confirmation',
          lines: [
            { account: 'Legal Expense', dr: 25000, cr: null },
            { account: 'Provision for Legal Claims', dr: null, cr: 25000 }
          ],
          narration: 'Probable outflow, reliably estimable: IAS 37 requires the provision. Found by the auditor; should have been caught at close.'
        },
        impact: { pl: 'Profit $25,000 lower.', bs: 'Provision liability of $25,000 recognized.', cf: 'No cash effect until the claim is settled.' }
      },
      {
        heading: 'Being Audit-Ready All Year',
        paragraphs: [
          'The teams with painless audits do twelve monthly mini-audits: every balance sheet account reconciled with sign-off, journals supported at posting, estimates documented, intercompany matched, and a rolling file of key contracts and correspondence. When the PBC list arrives, 80% of it already exists in final form.',
          'Add three year-end accelerators: a pre-audit meeting with the auditors to agree scope, timetable, and the tricky areas (so there are no surprises); an internal review of the draft statements with fresh eyes before the auditors see them; and a management representation process that starts early, because the representations must be true — and "true" needs checking, not signing on faith.'
        ],
        bullets: ['Twelve monthly mini-audits: reconciled, supported, documented, matched.', 'Pre-audit meeting: agree scope, timetable, and tricky areas upfront.', 'Fresh-eyes review of draft statements before the auditors arrive.']
      }
    ],
    mistakes: [
      'Preparing support only when the auditor asks — scramble mode produces errors and delays.',
      'Offering oral explanations without written evidence to back them.',
      'Posting top-side journals with no supporting documentation.',
      'Hiding known errors hoping auditors will not find them — they will, and trust is lost.',
      'Sending draft reconciliations as final PBC items.',
      'Signing management representations without verifying every statement in them.'
    ],
    interviewQA: [
      { q: 'How does a finance team prepare for the external audit?', a: 'By being ready all year: monthly reconciliations with real sign-offs, journals supported at posting, estimates documented with assumptions while fresh, intercompany matched. When the PBC list arrives, most of it already exists. Then three accelerators: a pre-audit meeting to agree scope, timetable, and the tricky areas; a fresh-eyes internal review of the draft statements; and an early start on management representations so every statement in them is verified, not signed on faith. The goal is no surprises — for us or for the auditors.' },
      { q: 'What is materiality?', a: 'Materiality is the threshold above which a misstatement could influence users\' economic decisions — the lens for the whole audit. Auditors set overall materiality (often as a percentage of profit, revenue, or assets) and a lower performance materiality for testing, so that individually immaterial items do not accumulate into a material one. It drives what gets tested, what gets adjusted, and what gets reported: proposed adjustments below materiality may go unbooked but are still communicated to management and the audit committee.' }
    ],
    quiz: [
      { question: 'The objective of an external audit is to:', options: ['Guarantee no fraud exists anywhere in the company', 'Provide reasonable assurance the statements are free of material misstatement', 'Prepare the financial statements for management', 'Certify every transaction is correct'], answer: 1, explanation: 'Reasonable (not absolute) assurance, focused on material misstatement. Audits are risk-based, not total checks; fraud detection is not the primary objective.', difficulty: 'Foundation', topic: 'Audit Objective', skill: 'Month-End Closing' },
      { question: 'Materiality means:', options: ['The total value of all audit adjustments', 'The auditor\'s fee', 'The size of the company', 'The threshold above which misstatements could influence users\' decisions'], answer: 3, explanation: 'Materiality is decision-usefulness: would this change a reader\'s mind? It sets testing scope, adjustment thresholds, and reporting lines.', difficulty: 'Intermediate', topic: 'Materiality', skill: 'Month-End Closing' },
      { question: 'An audit trail is:', options: ['The ability to trace every reported number back to its source document', 'The auditor\'s travel itinerary', 'A log of who entered the building', 'The list of audit adjustments'], answer: 0, explanation: 'Statements → trial balance → journal → invoice/contract/bank statement. Untraceable numbers cannot be audited.', difficulty: 'Intermediate', topic: 'Audit Trail', skill: 'Month-End Closing' },
      { question: 'The auditor finds a probable $25,000 legal settlement with no provision. The adjustment is:', options: ['Dr Provision $25,000 / Cr Cash $25,000', 'No entry — settlements are disclosed only', 'Dr Legal Expense $25,000 / Cr Provision for Legal Claims $25,000', 'Dr Equity $25,000 / Cr Provision $25,000'], answer: 2, explanation: 'Probable outflow, reliably estimable: IAS 37 requires recognizing the provision with the expense in profit or loss.', difficulty: 'Intermediate', topic: 'Audit Adjustments', skill: 'Month-End Closing' },
      { question: 'PBC stands for:', options: ['Provided by Client — the auditor\'s list of required documents', 'Public Balance Certificate', 'Pre-Balance Calculation', 'Professional Billing Code'], answer: 0, explanation: 'The PBC list is the auditor\'s evidence shopping list. Treat it as a project with owners and early internal deadlines.', difficulty: 'Foundation', topic: 'PBC', skill: 'Month-End Closing' },
      { question: 'Which evidence is strongest in an audit?', options: ['Oral explanations from management', 'External confirmations (e.g., bank letters)', 'Internal spreadsheets without sign-off', 'Draft reconciliations'], answer: 1, explanation: 'External, independent evidence outranks internal; documented outranks oral. Request third-party confirmations early — they are always the bottleneck.', difficulty: 'Intermediate', topic: 'Evidence', skill: 'Month-End Closing' },
      { question: 'Proposed audit adjustments below materiality are:', options: ['Always ignored completely', 'Always booked regardless', 'Reported to regulators immediately', 'Often left unbooked but still communicated to management and the audit committee'], answer: 3, explanation: 'Immaterial individually does not mean invisible: uncorrected misstatements are accumulated and communicated so governance can judge the pattern.', difficulty: 'Advanced', topic: 'Materiality', skill: 'Month-End Closing' },
      { question: 'To test purchase cut-off, auditors typically:', options: ['Ask management if cut-off was fine', 'Only examine December invoices', 'Skip cut-off — it is low risk', 'Sample January invoices and trace them to goods-received dates'], answer: 3, explanation: 'Completeness testing works from the next period backwards: January invoices for December receipts reveal unaccrued liabilities. Cut-off is a designated fraud-risk area, not low risk.', difficulty: 'Intermediate', topic: 'Cut-off Testing', skill: 'Month-End Closing' },
      { question: 'Management\'s responsibility for the financial statements is to:', options: ['Have the auditor prepare them', 'Prepare them fairly; the auditor gives an opinion on them', 'Avoid all estimates', 'Guarantee future profits'], answer: 1, explanation: 'Management prepares; the auditor opines. The division is fundamental — auditors do not certify their own work.', difficulty: 'Foundation', topic: 'Responsibilities', skill: 'Month-End Closing' }
    ]
  },
  {
    id: 'm40', level: 9, levelTitle: 'Practical Financial Reporting', title: 'Internal Controls',
    standard: 'Operations', tagline: 'Trust your people; verify with controls.',
    description: 'Internal controls prevent and detect fraud and error before they reach the financial statements. This module covers segregation of duties, approval limits and access controls, detective controls like reconciliations and journal reviews, and fraud scenarios showing exactly how controls catch — or miss — the classic schemes.',
    minutes: 18, skills: ['Month-End Closing'],
    sections: [
      {
        heading: 'Why Controls Exist',
        paragraphs: [
          'Every financial statement is produced by people and systems that can err or be corrupted. Internal controls are the processes that keep both in check: preventive controls stop problems happening (approvals, segregation, access limits); detective controls find the ones that slipped through (reconciliations, reviews, exception reports). Together they give management — and auditors — reason to rely on the numbers.',
          'The COSO framework organizes controls into five components: control environment (tone at the top), risk assessment, control activities (the actual approvals and reconciliations), information and communication, and monitoring. You do not need to memorize COSO for daily work — but its logic is the logic of every control below: the right environment, aimed at the right risks, with activities that actually operate and are monitored.'
        ],
        callout: { type: 'key', text: 'Preventive controls stop errors and fraud; detective controls find what slipped through. You need both — prevention is cheaper, detection is the safety net.' }
      },
      {
        heading: 'Segregation of Duties: No One Person Owns a Process',
        paragraphs: [
          'Segregation of duties (SoD) means no single person controls all stages of a transaction. The person who creates suppliers cannot approve payments to them. The person who handles cash cannot reconcile the bank. The person who runs payroll cannot add employees to the payroll master file. Each pairing removed is a fraud scheme made impossible — or at least requiring collusion, which is far rarer and riskier.',
          'Small teams struggle with pure segregation, so compensating controls matter: independent review of the whole process by the owner, mandatory holidays (frauds often surface when the perpetrator is away), and rotation of duties. "We are too small to segregate" is an explanation, not an excuse — it demands stronger detective controls, not none.'
        ],
        table: { headers: ['Toxic combination', 'Fraud it enables', 'Fix'], rows: [['Create suppliers + approve payments', 'Pay fictitious suppliers', 'Separate master-data entry from payment approval'], ['Handle cash + reconcile bank', 'Steal cash, hide it in the rec', 'Independent preparer for the bank rec'], ['Run payroll + maintain employee master', 'Ghost employees', 'HR owns master data; payroll only processes'], ['Raise PO + approve PO + post invoice', 'Approve own spending, split orders', 'Separate requester, approver, and poster']] }
      },
      {
        heading: 'Approvals, Limits, and Access Controls',
        paragraphs: [
          'Approval matrices set who can approve what up to which amount: a team lead approves to $5,000, a director to $50,000, the CFO above that. Limits must reflect real authority — and "urgent" overrides need their own control (post-approval review within 48 hours), or every fraud will arrive labeled urgent. Purchase orders before spend, not after, keep commitments visible.',
          'System access enforces the matrix: least-privilege access (only the transactions your role needs), no shared logins (shared credentials destroy accountability — every fraud investigation starts with "who was logged in?"), and prompt removal of leavers\' access. Periodic access reviews — recertifying who can do what — catch the privilege creep of role changes and cover assignments.'
        ],
        bullets: ['Approval matrix: authority by amount, with controlled urgent-override procedures.', 'POs before spend; post-approval review for genuine emergencies.', 'Least privilege, no shared logins, leavers removed immediately, access recertified periodically.']
      },
      {
        heading: 'Detective Controls: Reconciliations, Reviews, Exceptions',
        paragraphs: [
          'Detective controls are where finance lives daily. Bank, AP, AR, and intercompany reconciliations (m27) prove balances. Management review controls — the controller challenging flux movements, the CFO reviewing the pack — catch what reconciliations miss. Exception reports flag the anomalies systems can find: duplicate invoices, payments just below approval limits, journals posted at midnight, suppliers with no tax ID.',
          'The manual journal review deserves special emphasis: journals bypass the system\'s built-in checks, making them the classic fraud and error channel. Every manual journal needs supporting documentation, a business reason, and independent approval — with extra scrutiny for journals posted late in the close, to unusual accounts, or by senior staff overriding controls.'
        ],
        bullets: ['Reconciliations prove balances; management review challenges movements.', 'Exception reports: duplicates, split orders, midnight journals, missing tax IDs.', 'Manual journals: documented, independently approved, extra scrutiny for late or unusual entries.']
      },
      {
        heading: 'Fraud and Error Scenarios',
        paragraphs: [
          'Scenario one — the fictitious supplier. An AP clerk with rights to create suppliers and approve payments sets up "Consulting Services Ltd", approves its invoices, and diverts payment. The controls that stop it: segregation (master-data entry separate from payment approval), new-supplier verification against independent sources, and exception reports on suppliers with no purchase history. The control that catches it late: supplier statement reconciliations and spend analysis.',
          'Scenario two — the midnight journal. On close day 5, a $200,000 credit to revenue with a debit to a suspense account, posted by a senior manager, no support attached. The controls: mandatory journal approval independent of the poster, a ban on unsupported top-side entries, and flux analysis that screams at a $200,000 revenue spike. Scenario three is error, not fraud: the same invoice entered twice because the first entry "didn\'t seem to save" — caught by duplicate-invoice exception reports and three-way matching (PO, goods receipt, invoice).'
        ],
        callout: { type: 'warning', text: 'The fraud triangle: pressure + opportunity + rationalization. Controls cannot remove pressure or rationalization — but they can remove opportunity. Every control you design should answer: which opportunity does this close?' }
      }
    ],
    mistakes: [
      'One person raising purchase orders, approving them, and posting the invoices.',
      'Shared system logins — when everyone is "admin", no one is accountable.',
      'Approval limits that anyone can override by marking things "urgent".',
      'Reviewing reconciliations by ticking boxes without understanding the items.',
      'No independent review of manual journals — the classic fraud channel left open.',
      'Assuming small teams cannot have controls — they need compensating detective controls instead.'
    ],
    interviewQA: [
      { q: 'What is segregation of duties? Give an example.', a: 'Segregation of duties means no one person controls all stages of a transaction, so fraud or error needs collusion rather than one bad actor. The classic example: the person who creates suppliers in the master file must not approve payments to them — otherwise they can invent a fictitious supplier and pay it. Other toxic pairs: handling cash plus reconciling the bank; running payroll plus maintaining the employee master file. In small teams where full segregation is impossible, compensating controls apply: independent review, mandatory holidays, and duty rotation.' },
      { q: 'A supplier master-change request arrives by email asking to update bank details. What controls apply?', a: 'This is a textbook payment-diversion fraud setup, so I treat it as hostile until verified. Controls: never act on the email alone — call back on a known, independently verified number, not the one in the email. Require dual authorization for master-data changes with evidence of the verification. Log who requested, who verified, and who approved. Then monitor: exception reports on changed bank details followed by payments, and supplier statement reconciliations. One unverified bank-detail change can empty the payment run.' }
    ],
    quiz: [
      { question: 'The primary purpose of internal controls is to:', options: ['Prevent and detect fraud and error in financial reporting', 'Slow down business processes', 'Replace the external audit', 'Increase headcount in finance'], answer: 0, explanation: 'Controls exist so the numbers can be relied on: prevention stops problems, detection catches what slipped through.', difficulty: 'Foundation', topic: 'Control Objectives', skill: 'Month-End Closing' },
      { question: 'Which pairing violates segregation of duties?', options: ['The sales manager approves customer credit limits', 'The controller reviews the monthly pack', 'The cashier prepares the bank reconciliation', 'The auditor tests the reconciliations'], answer: 2, explanation: 'Handling cash and checking cash must be separate — otherwise theft can be hidden in the reconciliation. The other pairings are legitimate review and approval roles.', difficulty: 'Intermediate', topic: 'Segregation of Duties', skill: 'Month-End Closing' },
      { question: 'An approval limit is a __________ control; a bank reconciliation is a __________ control.', options: ['Detective; preventive', 'Preventive; detective', 'Corrective; preventive', 'Detective; corrective'], answer: 1, explanation: 'Approvals stop bad transactions before they happen (preventive); reconciliations find problems afterwards (detective). Both layers are needed.', difficulty: 'Intermediate', topic: 'Control Types', skill: 'Month-End Closing' },
      { question: 'Manual journals require special scrutiny because:', options: ['They are always fraudulent', 'They cannot be reversed', 'They bypass the system\'s built-in checks, making them a classic fraud and error channel', 'Auditors refuse to test them'], answer: 2, explanation: 'Journals override normal processing, so each needs documentation, a business reason, and independent approval — especially late, large, or unusual ones.', difficulty: 'Intermediate', topic: 'Journal Controls', skill: 'Month-End Closing' },
      { question: 'The fraud triangle consists of:', options: ['Pressure, opportunity, and rationalization', 'Cash, invoices, and journals', 'Prevention, detection, and correction', 'Assets, liabilities, and equity'], answer: 0, explanation: 'People commit fraud under pressure, when opportunity exists, with a self-justifying story. Controls mainly attack opportunity — the one organizations can design away.', difficulty: 'Advanced', topic: 'Fraud', skill: 'Month-End Closing' },
      { question: 'An AP clerk can create suppliers in the master file and approve payments to them. The correct fix is to:', options: ['Give the clerk a higher approval limit', 'Remove all approval requirements to speed up payments', 'Let the clerk also reconcile the bank for efficiency', 'Separate supplier creation from payment approval, with independent verification of new suppliers'], answer: 3, explanation: 'This toxic combination enables fictitious-supplier fraud. Split the duties and verify new suppliers against independent sources.', difficulty: 'Intermediate', topic: 'Segregation of Duties', skill: 'Month-End Closing' },
      { question: 'The purpose of approval limits is to:', options: ['Delay all purchases', 'Prevent any spending', 'Replace budgets', 'Ensure spending is authorized at the right level before commitment'], answer: 3, explanation: 'Authority scales with amount so material commitments get senior eyes — with POs raised before spend, not after.', difficulty: 'Foundation', topic: 'Approvals', skill: 'Month-End Closing' },
      { question: 'Good access control includes:', options: ['Least-privilege access, no shared logins, and prompt removal of leavers', 'One shared admin login for the whole finance team', 'Permanent access for former employees just in case', 'No passwords to avoid lockouts'], answer: 0, explanation: 'Accountability requires knowing who did what: individual logins, minimal necessary rights, leavers removed immediately, access recertified periodically.', difficulty: 'Intermediate', topic: 'Access Controls', skill: 'Month-End Closing' },
      { question: 'Even well-designed controls can fail because of:', options: ['Too much documentation', 'Management override and collusion — hence whistleblowing channels and monitoring', 'External audits', 'Monthly reconciliations'], answer: 1, explanation: 'No control survives a manager who can override it or two people colluding. Tone at the top, whistleblowing channels, and monitoring (the COSO components) are the backstop.', difficulty: 'Advanced', topic: 'Control Limitations', skill: 'Month-End Closing' }
    ]
  }
];
