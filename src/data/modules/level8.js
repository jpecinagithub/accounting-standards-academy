// Level 8 — Financial Analysis (m31–m35)
export default [
  {
    id: 'm31', level: 8, levelTitle: 'Financial Analysis', title: 'P&L Analysis',
    standard: 'Analysis', tagline: 'Revenue is vanity, profit is sanity — and the bridge explains both.',
    description: 'This module teaches you to read a profit and loss statement like an analyst: from revenue through gross profit, EBITDA, EBIT, and net income; the margins that matter; and the bridge analysis that decomposes Actual vs Budget into price, volume, mix, FX, and cost effects — the single most-used tool in management reporting.',
    minutes: 24, skills: ['Financial Analysis'],
    sections: [
      {
        heading: 'Reading the P&L Top to Bottom',
        paragraphs: [
          'The P&L is a waterfall: each line strips away a layer of cost to reveal a purer measure of performance. Revenue is the top line — what customers paid. Gross profit (revenue minus cost of sales) shows the margin on what was sold. EBITDA (earnings before interest, tax, depreciation, and amortization) approximates operating cash generation before capital intensity. EBIT (before interest and tax) includes the cost of wearing assets out. EBT deducts financing; net income deducts tax — the bottom line attributable to shareholders.',
          'Each step answers a different question. Gross profit asks: is the business model viable? EBITDA asks: does the operation generate cash before reinvestment? EBIT asks: what does the operation earn including asset consumption? Net income asks: what is left for owners? Skipping straight to net income misses where performance actually changed.'
        ],
        table: { headers: ['Line', 'Formula', 'Answers'], rows: [['Revenue', '—', 'What did customers pay?'], ['Gross profit', 'Revenue − Cost of sales', 'Is the core business model viable?'], ['EBITDA', 'EBIT + Depreciation + Amortization', 'Operating cash generation before capex'], ['EBIT', 'Gross profit − Operating expenses', 'Operating earnings including asset wear'], ['EBT', 'EBIT − Net interest', 'Earnings before the taxman'], ['Net income', 'EBT − Tax', 'What is left for shareholders']] },
        callout: { type: 'key', text: 'Read the P&L as a waterfall: Revenue → Gross profit → EBITDA → EBIT → EBT → Net income. Each line isolates a different layer of performance.' }
      },
      {
        heading: 'Margins That Matter',
        paragraphs: [
          'Absolute profit flatters large companies and punishes small ones; margins level the field. Gross margin (gross profit ÷ revenue) measures pricing power and production efficiency. EBITDA margin shows operating leverage before capital intensity. Net margin shows what finally sticks. Track each over time and against peers — a single year\'s margin is trivia; the trend is the story.',
          'Work the numbers: revenue $2,000,000, cost of sales $1,200,000 → gross profit $800,000, gross margin 40%. Operating expenses $400,000 (including $100,000 depreciation) → EBITDA $400,000 (20% margin), EBIT $300,000. Interest $50,000, tax $50,000 → net income $200,000, net margin 10%. If gross margin slips from 40% to 36% while revenue grows, the business is buying sales with discounts or suffering input inflation — either way, growth is getting more expensive.'
        ],
        bullets: ['Gross margin = Gross profit / Revenue — pricing power and production efficiency.', 'EBITDA margin = EBITDA / Revenue — operating leverage before capex.', 'Net margin = Net income / Revenue — what finally reaches shareholders.']
      },
      {
        heading: 'EBITDA: Useful, and Misleading',
        paragraphs: [
          'EBITDA is beloved because it approximates operating cash flow and enables comparison across companies with different asset ages and financing. A young company with heavy depreciation and an old one with fully depreciated assets can have identical EBITDA but wildly different EBIT — EBITDA washes that out.',
          'But EBITDA has famous blind spots, and interviewers love them. It ignores capital expenditure: two companies with the same EBITDA can have completely different cash needs if one must constantly replace equipment. It ignores working capital. And it can be gamed by classifying operating costs creatively. Warren Buffett\'s line stands: "Does management think the tooth fairy pays for capital expenditures?" Use EBITDA — but always alongside capex, working capital, and cash flow.'
        ],
        callout: { type: 'warning', text: 'EBITDA ignores capex, working capital, and financing. A company can grow EBITDA every year while burning cash — always read it with the cash flow statement.' }
      },
      {
        heading: 'Bridge Analysis: Actual vs Budget',
        paragraphs: [
          'The bridge (or waterfall) decomposes the gap between budget and actual into its causes — turning "revenue is $65,000 above budget" into an explanation. The standard revenue bridge walks through five effects: volume (sold more units), price (sold at higher prices), mix (sold a richer product blend), FX (currency translation), and then cost effects carry the bridge down from gross profit to EBITDA.',
          'Take the worked example: budget revenue $1,000,000. Volume effect: +500 units × $100 budget price = +$50,000. Price effect: +$2 × 10,500 actual units = +$21,000. Mix effect: shift toward premium products = +$4,000. FX effect: stronger home currency = −$10,000. Actual revenue = $1,065,000. Now the $65,000 beat has a story: real growth (volume + price + mix = +$75,000) partly masked by currency (−$10,000).'
        ],
        table: { headers: ['Bridge step', 'Calculation', 'Effect'], rows: [['Budget revenue', '10,000 units x $100', '$1,000,000'], ['Volume effect', '+500 units x $100', '+$50,000'], ['Price effect', '+$2 x 10,500 units', '+$21,000'], ['Mix effect', 'Shift to premium products', '+$4,000'], ['FX effect', 'Currency translation', '−$10,000'], ['Actual revenue', '—', '$1,065,000']] }
      },
      {
        heading: 'Volume, Price, Mix: The Holy Trinity',
        paragraphs: [
          'Volume, price, and mix are the three levers of revenue, and confusing them is the classic analytical error. Volume effect is measured at budget prices: (actual units − budget units) × budget price — it isolates how much of the variance came from selling more or fewer units. Price effect is measured at actual volumes: (actual price − budget price) × actual units — it isolates pure pricing. Mix effect captures the rest: selling the same total units but a richer blend raises the average price without any list-price change.',
          'Why it matters: revenue up 8% sounds great until the bridge shows volume down 3% and the whole gain came from a one-off price increase — that is a shrinking business charging more, not a growing one. Management acts on levers, not totals: volume problems need commercial action, price problems need pricing discipline, mix problems need portfolio decisions.'
        ],
        callout: { type: 'example', text: 'Revenue is 8% above budget — but the bridge shows volume −3%, price +9%, mix +2%. Verdict: the business sold fewer units at higher prices. Celebrate the pricing power, but investigate the volume decline before it compounds.' }
      },
      {
        heading: 'Cost Bridges and Opex Analysis',
        paragraphs: [
          'The bridge does not stop at revenue. From gross profit down to EBITDA, each cost line gets the same treatment: personnel costs vs budget (headcount × average cost), input costs (purchase price variances), logistics, marketing. A cost bridge that shows personnel +$80,000 unfavorable needs the next question — headcount over plan, or cost per head over plan? — because the corrective action differs completely.',
          'The discipline is symmetrical with revenue: decompose into rate and volume (price × quantity) wherever possible. "Marketing overspent by $30,000" is a fact; "marketing overspent because cost-per-lead rose 25% while lead volume held" is an analysis that points to media inflation, not waste.'
        ],
        bullets: ['Bridge every material cost line, not just revenue.', 'Decompose costs into rate × volume (headcount × cost per head; units × input price).', 'Link cost variances to operational causes — the bridge must end in actions, not adjectives.']
      },
      {
        heading: 'One-Offs and Underlying Profit',
        paragraphs: [
          'Reported profit includes everything — including items that will never repeat. A $200,000 gain on selling a warehouse, a restructuring charge, a lawsuit settlement: these belong to this year\'s accounts but not to the run-rate of the business. Underlying (or adjusted) profit strips them out to reveal the sustainable earnings trend.',
          'The abuse vector is obvious: companies love to adjust away bad news ("one-off" restructuring charges taken every single year) while keeping one-off gains in the headline. The analyst\'s rule: accept adjustments that are genuinely non-recurring and symmetrical — if you strip out the bad one-offs, strip out the good ones too — and distrust any company whose "underlying" profit permanently exceeds its reported profit.'
        ],
        callout: { type: 'warning', text: 'A restructuring charge taken three years in a row is not one-off — it is the business model. Adjust symmetrically, or not at all.' }
      },
      {
        heading: 'Red Flags in the P&L',
        paragraphs: [
          'Certain P&L patterns should trigger immediate skepticism. Revenue growing while operating cash flow stagnates suggests aggressive recognition or channel stuffing. Gross margin compressing for several years suggests structural pricing pressure, not bad luck. "Other income" growing faster than revenue suggests profit is being manufactured outside the core business. And expenses that grow in perfect lockstep with revenue targets — never missing, never beating by much — suggest managed numbers.',
          'None of these proves anything alone; each is a prompt to dig into the notes, the segment reporting, and the cash flow statement. The P&L tells you where to look — it rarely tells you the answer.'
        ],
        bullets: ['Revenue up, operating cash flat → recognition or collection problems.', 'Margin compression over years → structural pressure, not a blip.', '"Other income" outpacing revenue → profit manufactured outside the core.', 'Expenses tracking targets too perfectly → possibly managed numbers.']
      }
    ],
    mistakes: [
      'Celebrating revenue growth driven entirely by price while volumes collapse — a shrinking business charging more.',
      'Comparing EBITDA across companies with very different capital intensity.',
      'Ignoring mix effects: flat average price can hide a shift toward low-margin products.',
      'Treating one-off gains as recurring profit in forecasts and valuations.',
      'Analyzing absolute variances without percentages (or percentages without absolutes) — both mislead alone.',
      'Forgetting FX translation effects when analyzing a multi-currency group\'s growth.'
    ],
    interviewQA: [
      { q: 'Revenue is 8% above budget. How do you explain it?', a: 'I build a bridge: volume effect at budget prices, price effect at actual volumes, mix effect from product blend shifts, and FX translation. Suppose the bridge shows volume +$50,000, price +$21,000, mix +$4,000, FX −$10,000 on a $1,000,000 budget. Then the story is real operating growth (+$75,000) partly masked by currency (−$10,000). I would also check whether the volume growth is sustainable or pulled forward, and whether the price gain came with any volume sacrifice.' },
      { q: 'Why might EBITDA be misleading?', a: 'Three blind spots. First, it ignores capital expenditure — two companies with identical EBITDA can have completely different cash needs if one constantly replaces equipment. Second, it ignores working capital movements. Third, it can be flattered by aggressive cost classification. I use EBITDA for operating comparability, but always alongside capex, working capital, and operating cash flow — and I am wary of "adjusted EBITDA" figures where the adjustments are suspiciously one-directional.' },
      { q: 'Walk me through a P&L bridge.', a: 'Start from the budget and walk to actuals step by step. On revenue: volume effect (unit variance at budget price), price effect (price variance at actual units), mix effect (blend shifts), FX effect (translation). Then continue down: cost of sales variances (input prices, efficiency), opex variances (headcount vs cost per head), arriving at EBITDA, then interest and tax to net income. Each step must be calculable from underlying data and must end in an operational explanation — the bridge is only finished when every material step has a cause and, where needed, an action.' }
    ],
    quiz: [
      { question: 'Put these P&L lines in correct top-to-bottom order:', options: ['Revenue → Gross profit → EBITDA → EBIT → Net income', 'Revenue → EBITDA → Gross profit → Net income → EBIT', 'Gross profit → Revenue → EBIT → EBITDA → Net income', 'Revenue → Net income → Gross profit → EBITDA → EBIT'], answer: 0, explanation: 'The P&L is a waterfall: revenue, minus cost of sales (gross profit), minus opex before D&A (EBITDA), minus D&A (EBIT), minus interest and tax (net income).', difficulty: 'Foundation', topic: 'P&L Structure', skill: 'Financial Analysis' },
      { question: 'EBITDA can be computed from EBIT by:', options: ['Adding back depreciation and amortization', 'Subtracting depreciation and amortization', 'Adding back interest and tax', 'Subtracting cost of sales'], answer: 0, explanation: 'EBITDA = EBIT + D&A. Interest and tax are already excluded from EBIT, so only the non-cash asset-consumption charges are added back.', difficulty: 'Intermediate', topic: 'EBITDA', skill: 'Financial Analysis' },
      { question: 'Revenue is $2,000,000 and cost of sales is $1,200,000. Gross margin is:', options: ['40%', '60%', '167%', '25%'], answer: 0, explanation: 'Gross profit = $2,000,000 − $1,200,000 = $800,000; gross margin = $800,000 / $2,000,000 = 40%.', difficulty: 'Intermediate', topic: 'Margins', skill: 'Financial Analysis' },
      { question: 'Budget revenue is $1,000,000. The bridge shows volume +$50,000, price +$21,000, mix +$4,000, FX −$10,000. Actual revenue is:', options: ['$1,065,000', '$1,075,000', '$1,085,000', '$935,000'], answer: 0, explanation: '$1,000,000 + $50,000 + $21,000 + $4,000 − $10,000 = $1,065,000.', difficulty: 'Intermediate', topic: 'Bridge Analysis', skill: 'Financial Analysis' },
      { question: 'The volume effect in a revenue bridge is correctly calculated as:', options: ['(Actual units − Budget units) x Budget price', '(Actual price − Budget price) x Actual units', '(Actual units − Budget units) x Actual price', 'Actual revenue − Budget revenue, with no split'], answer: 0, explanation: 'Volume is isolated at budget prices so price changes do not contaminate it; price is then measured at actual units. That split is what makes the bridge add up.', difficulty: 'Advanced', topic: 'Bridge Analysis', skill: 'Financial Analysis' },
      { question: 'The price effect in a revenue bridge is correctly calculated as:', options: ['(Actual price − Budget price) x Actual units', '(Actual price − Budget price) x Budget units', '(Actual units − Budget units) x Budget price', 'Budget revenue x inflation rate'], answer: 0, explanation: 'Price effect applies the price difference to actual volumes — the units actually sold at the new price. Using budget units would understate it when volumes grew.', difficulty: 'Intermediate', topic: 'Bridge Analysis', skill: 'Financial Analysis' },
      { question: 'Actual costs of $370,000 come in below a budget of $400,000. This variance is:', options: ['Favorable $30,000 (7.5%)', 'Unfavorable $30,000 (7.5%)', 'Favorable $30,000 (8.1%)', 'Neither — cost variances have no direction'], answer: 0, explanation: 'Spending less than budget on a cost line is favorable: $400,000 − $370,000 = $30,000, which is 7.5% of the $400,000 budget.', difficulty: 'Foundation', topic: 'Variances', skill: 'Financial Analysis' },
      { question: 'What is the difference between EBIT and EBITDA?', options: ['EBIT includes depreciation and amortization; EBITDA adds them back', 'EBIT includes interest; EBITDA excludes it', 'There is no difference', 'EBIT is after tax; EBITDA is before tax'], answer: 0, explanation: 'Both exclude interest and tax. The difference is D&A: EBIT charges the consumption of assets, EBITDA does not — which is why EBITDA approximates pre-capex operating cash generation.', difficulty: 'Intermediate', topic: 'EBITDA', skill: 'Financial Analysis' },
      { question: 'Revenue is up 8% vs budget but sales volumes are down 3%. The correct interpretation is:', options: ['Growth is price/mix-driven; investigate the volume decline', 'The business is growing strongly — celebrate', 'The bridge must be wrong; revenue and volume always move together', 'Cut prices immediately to restore volume'], answer: 0, explanation: 'If revenue rises while units fall, price and mix did all the work. Pricing power is good news, but shrinking volumes compound — find the cause before acting on price.', difficulty: 'Advanced', topic: 'Bridge Analysis', skill: 'Financial Analysis' },
      { question: 'A $200,000 gain on selling a warehouse appears in other income. For trend analysis you should:', options: ['Exclude it from underlying profit — it will not repeat', 'Include it — profit is profit', 'Spread it over the next five years', 'Deduct it from revenue'], answer: 0, explanation: 'Underlying profit strips out non-recurring items to reveal the sustainable run-rate. A warehouse sale happens once; including it flatters the trend.', difficulty: 'Intermediate', topic: 'Underlying Profit', skill: 'Financial Analysis' },
      { question: 'Total units sold match budget, but revenue is above budget because customers bought more premium products. This is a:', options: ['Favorable mix effect', 'Volume effect', 'Price effect', 'FX effect'], answer: 0, explanation: 'Same volume, richer blend, higher average price without list-price changes — the textbook definition of a mix effect.', difficulty: 'Advanced', topic: 'Bridge Analysis', skill: 'Financial Analysis' },
      { question: 'EBT is $250,000 and income tax expense is $50,000. Net income is:', options: ['$200,000', '$300,000', '$250,000', '$150,000'], answer: 0, explanation: 'Net income = EBT − tax = $250,000 − $50,000 = $200,000 — the bottom line for shareholders.', difficulty: 'Foundation', topic: 'P&L Structure', skill: 'Financial Analysis' }
    ]
  },
  {
    id: 'm32', level: 8, levelTitle: 'Financial Analysis', title: 'Balance Sheet Analysis',
    standard: 'Analysis', tagline: 'A photograph of the business — but only in motion does it speak.',
    description: 'The balance sheet shows what the business owns, owes, and is worth at a point in time. This module teaches you to interrogate it: working capital, liquidity ratios, receivables/inventory/payables discipline, debt and equity structure — with a full ratio workout on real numbers and the red flags that separate healthy balance sheets from fragile ones.',
    minutes: 22, skills: ['Financial Analysis'],
    sections: [
      {
        heading: 'The Balance Sheet as a Photograph',
        paragraphs: [
          'The P&L covers a period; the balance sheet captures an instant — midnight on the reporting date. Assets (what is controlled), liabilities (what is owed), equity (the residual). Because it is a snapshot, a single balance sheet can mislead: a company can look liquid on 31 December after collecting year-end receivables and repaying its overdraft, then run dry by February. Always read at least two consecutive balance sheets and watch the movement.',
          'Structure matters as much as totals. Current vs non-current tells you about timing: can short-term resources cover short-term obligations? The notes reveal what the face hides — pledged assets, contingent liabilities, related-party balances. An analyst who reads only the face of the balance sheet is reading the cover, not the book.'
        ],
        callout: { type: 'key', text: 'The balance sheet is a photograph: read it in motion. Two consecutive balance sheets plus the cash flow statement tell you more than any single snapshot.' }
      },
      {
        heading: 'Working Capital Deep Dive',
        paragraphs: [
          'Working capital (current assets − current liabilities) measures the short-term buffer. But the sharper tool is operating working capital: receivables + inventory − payables — the cash tied up in the operating cycle, stripped of cash itself and of financing items. Growing sales almost always grow operating working capital, which is why fast-growing companies can be profitable and cash-starved at the same time (m34 goes deep on the cycle).',
          'Our worked company: current assets $800,000 (receivables $350,000, inventory $300,000, cash $150,000), current liabilities $500,000. Working capital = $300,000. Operating working capital = $350,000 + $300,000 − payables. If payables are $200,000, operating WC = $450,000 — meaning $450,000 of the company\'s funding is locked in the day-to-day trading cycle.'
        ],
        bullets: ['Working capital = Current assets − Current liabilities.', 'Operating working capital = Receivables + Inventory − Payables (the trading-cycle investment).', 'Rising operating WC faster than sales → cash is being absorbed; investigate.']
      },
      {
        heading: 'Liquidity: Can We Pay Tomorrow?',
        paragraphs: [
          'Liquidity ratios test short-term survival. The current ratio (current assets ÷ current liabilities) asks whether short-term resources cover short-term obligations: $800,000 ÷ $500,000 = 1.6x — comfortable. The quick ratio (acid test) is stricter: it excludes inventory, which may be slow-moving or obsolete: ($800,000 − $300,000) ÷ $500,000 = 1.0x — exactly covered without selling a single unit of stock.',
          'Ratios need context to mean anything. A current ratio of 1.6 with receivables 90 days overdue is weaker than 1.2 with cash-like receivables. Supermarkets run current ratios below 1.0 safely because inventory turns in days and suppliers fund them. Read liquidity with the aging schedules and the cash conversion cycle, never alone.'
        ],
        table: { headers: ['Ratio', 'Formula', 'Our company', 'Reading'], rows: [['Current ratio', 'Current assets / Current liabilities', '$800,000 / $500,000 = 1.6x', 'Comfortable short-term cover'], ['Quick ratio', '(Current assets − Inventory) / Current liabilities', '$500,000 / $500,000 = 1.0x', 'Covered even without selling inventory'], ['Cash ratio', 'Cash / Current liabilities', '$150,000 / $500,000 = 0.3x', 'Immediate cash cover — the strictest test']] }
      },
      {
        heading: 'Receivables, Inventory, Payables',
        paragraphs: [
          'The three working-capital balances each tell a story. Receivables growing faster than revenue suggests collection problems, looser credit terms to hit targets, or channel stuffing — all of which inflate profit today and create bad debts tomorrow. The allowance for doubtful accounts is management\'s estimate of what will not be collected: too thin, and assets and profit are overstated; it must move sensibly with the aging.',
          'Inventory piling up faster than sales whispers obsolescence — and IFRS requires inventory at the lower of cost and net realizable value, so overstock eventually becomes a writedown. Payables stretching out flatters operating cash flow temporarily but can signal distress (or strong bargaining power — context decides). Related-party balances buried in any of these lines deserve separate scrutiny: they may not behave like arm\'s-length commercial terms.'
        ],
        journal: {
          transaction: 'Recognize allowance for doubtful accounts: $20,000 of receivables judged unlikely to be collected',
          lines: [
            { account: 'Bad Debt Expense', dr: 20000, cr: null },
            { account: 'Allowance for Doubtful Accounts', dr: null, cr: 20000 }
          ],
          narration: 'The allowance is a contra-asset: receivables are presented net, and the expected loss hits profit now.'
        },
        impact: { pl: 'Profit $20,000 lower from the bad debt expense.', bs: 'Receivables carried net at $330,000 ($350,000 − $20,000).', cf: 'No cash effect — the loss is an estimate until specific debts are written off.' }
      },
      {
        heading: 'Debt and Equity: Who Funds the Business?',
        paragraphs: [
          'The right side of the balance sheet shows the funding mix. Total debt of $600,000 against equity of $900,000 gives a debt-to-equity ratio of 0.67x — moderate leverage. But analysts almost always net off cash first: net debt = debt − cash = $600,000 − $150,000 = $450,000, because cash could repay debt tomorrow. Net debt ÷ EBITDA then measures how many years of operating earnings would clear the debt — the single most quoted leverage metric in credit analysis.',
          'Equity quality matters as much as quantity. Equity built from retained profits is earned; equity inflated by revaluation surpluses is paper. And watch the maturity profile in the notes: $600,000 of debt due next year is a refinancing risk that the total alone does not show.'
        ],
        bullets: ['Debt/Equity = Total debt / Total equity = 0.67x here — moderate.', 'Net debt = Debt − Cash = $450,000 — the debt that cash cannot immediately cover.', 'Read the notes: maturity profile, covenants, pledged assets, and related-party funding.']
      },
      {
        heading: 'Ratio Workout: The Full Set',
        paragraphs: [
          'Pulling the module\'s numbers together in one view — this is the shape of a real analytical summary. Every ratio below is computed from the same company, so you can see how the pieces connect: liquidity is solid, leverage is moderate, and the working-capital balances deserve the closest watch.'
        ],
        table: { headers: ['Area', 'Ratio', 'Calculation', 'Result'], rows: [['Liquidity', 'Current ratio', '$800,000 / $500,000', '1.6x'], ['Liquidity', 'Quick ratio', '$500,000 / $500,000', '1.0x'], ['Working capital', 'Working capital', '$800,000 − $500,000', '$300,000'], ['Leverage', 'Debt / Equity', '$600,000 / $900,000', '0.67x'], ['Leverage', 'Net debt', '$600,000 − $150,000', '$450,000'], ['Asset quality', 'Receivables net of allowance', '$350,000 − $20,000', '$330,000']] }
      },
      {
        heading: 'Balance Sheet Red Flags',
        paragraphs: [
          'Some patterns should make any analyst reach for the notes. Receivables growing much faster than revenue — profit without cash. Inventory growing faster than sales — future writedowns. Current liabilities exceeding current assets persistently in a non-retail business — structural illiquidity. Debt rising while equity is flat — leverage creeping up silently. And goodwill dominating total assets — the balance sheet is betting that past acquisitions keep justifying their prices (impairment tests in the notes will show how close to the edge they are).',
          'The meta-rule: compare growth rates, not just levels. When any balance sheet line grows persistently faster than the revenue it serves, something structural is happening — find out what before the market does.'
        ],
        callout: { type: 'warning', text: 'Compare growth rates, not levels. Receivables, inventory, or debt growing persistently faster than revenue is the balance sheet telling you something — listen before the writedown does it for you.' }
      }
    ],
    mistakes: [
      'Reading a single balance sheet without prior periods — the snapshot only makes sense in motion.',
      'Treating all current assets as equally liquid: slow-moving inventory is not cash.',
      'Analyzing debt without netting cash — gross debt overstates the burden.',
      'Ignoring the notes: maturities, covenants, pledged assets, and contingencies live there.',
      'Forgetting that revaluations inflate equity without generating a cent of cash.',
      'Missing related-party balances buried inside receivables and payables.'
    ],
    interviewQA: [
      { q: 'How do you assess a company\'s liquidity from the balance sheet?', a: 'I start with the current ratio and the stricter quick ratio — for example 1.6x and 1.0x — but I never stop there. I check what the current assets actually are: are receivables collectible (read the aging and the bad-debt allowance), is inventory saleable, how much is real cash? Then I look at the trend over several periods and the cash conversion cycle, because a ratio is a snapshot and liquidity is about timing. A supermarket can live below 1.0; a manufacturer with 1.6 and rotting receivables cannot.' },
      { q: 'Receivables are growing faster than revenue. What do you investigate?', a: 'Three hypotheses: collection problems (customers paying slower — check DSO and aging), looser credit terms granted to hit sales targets (check credit policy changes and whether the growth is concentrated in risky customers), or channel stuffing (pushing product into distributors to recognize revenue early). I would examine the AR aging, the bad-debt allowance relative to overdue balances, cash collection after year-end, and segment data. Receivables growing without cash is one of the most reliable early warnings of earnings quality problems.' },
      { q: 'What does negative working capital mean, and is it always bad?', a: 'Negative working capital means current liabilities exceed current assets. In retail and supermarkets it is normal and even desirable — inventory sells in days, customers pay cash, and suppliers are paid in 60 days, so suppliers fund the business. In manufacturing or services it is usually a warning: the company may be stretching payables because it cannot pay, or carrying debt it must refinance. Context — the business model and the cash conversion cycle — decides whether it is efficiency or distress.' }
    ],
    quiz: [
      { question: 'The fundamental balance sheet equation is:', options: ['Assets = Liabilities + Equity', 'Assets = Liabilities − Equity', 'Revenue − Expenses = Assets', 'Cash = Profit + Equity'], answer: 0, explanation: 'Every balance sheet balances: what the business controls equals what it owes plus the owners\' residual claim.', difficulty: 'Foundation', topic: 'BS Equation', skill: 'Financial Analysis' },
      { question: 'Current assets are $800,000 and current liabilities are $500,000. Working capital is:', options: ['$300,000', '$1,300,000', '$500,000', '$800,000'], answer: 0, explanation: 'Working capital = current assets − current liabilities = $800,000 − $500,000 = $300,000.', difficulty: 'Intermediate', topic: 'Working Capital', skill: 'Financial Analysis' },
      { question: 'With the same figures, the current ratio is:', options: ['1.6x', '0.625x', '1.0x', '2.6x'], answer: 0, explanation: 'Current ratio = $800,000 / $500,000 = 1.6x — short-term resources cover short-term obligations 1.6 times.', difficulty: 'Intermediate', topic: 'Liquidity Ratios', skill: 'Financial Analysis' },
      { question: 'Inventory is $300,000. The quick ratio is:', options: ['1.0x', '1.6x', '0.6x', '2.2x'], answer: 0, explanation: 'Quick ratio = (current assets − inventory) / current liabilities = ($800,000 − $300,000) / $500,000 = 1.0x.', difficulty: 'Intermediate', topic: 'Liquidity Ratios', skill: 'Financial Analysis' },
      { question: 'Total debt is $600,000 and cash is $150,000. Net debt is:', options: ['$450,000', '$750,000', '$600,000', '$150,000'], answer: 0, explanation: 'Net debt = debt − cash = $600,000 − $150,000 = $450,000 — the debt that available cash cannot immediately repay.', difficulty: 'Intermediate', topic: 'Leverage', skill: 'Financial Analysis' },
      { question: 'Debt of $600,000 against equity of $900,000 gives a debt-to-equity ratio of 0.67x. This indicates:', options: ['Moderate leverage — debt is two-thirds of equity', 'Dangerous over-leverage requiring immediate action', 'No debt at all', 'Negative equity'], answer: 0, explanation: '0.67x is moderate: for every $1 of equity there is $0.67 of debt. Context (industry, maturity, cash flow cover) completes the judgement.', difficulty: 'Advanced', topic: 'Leverage', skill: 'Financial Analysis' },
      { question: 'Receivables have grown 35% while revenue grew 8%. The most concerning interpretation is:', options: ['Collection problems or aggressive revenue recognition — profit without cash', 'Excellent sales performance', 'Proof of strong customer loyalty', 'A successful marketing campaign'], answer: 0, explanation: 'Receivables should broadly track revenue. A large gap suggests slower collection, looser credit to hit targets, or channel stuffing — investigate DSO, aging, and post-year-end cash collection.', difficulty: 'Intermediate', topic: 'Red Flags', skill: 'Financial Analysis' },
      { question: 'Which asset is the most liquid?', options: ['Cash', 'Trade receivables', 'Inventory', 'Property, plant and equipment'], answer: 0, explanation: 'Liquidity is about speed and certainty of conversion to cash: cash is immediate, receivables take collection effort, inventory must be sold first, PPE last.', difficulty: 'Foundation', topic: 'Liquidity', skill: 'Financial Analysis' },
      { question: 'A supermarket chain reports negative working capital year after year. This most likely means:', options: ['Suppliers fund the operating cycle — normal for fast-turning retail', 'The company is certainly insolvent', 'Its auditors will qualify the accounts', 'It has no inventory'], answer: 0, explanation: 'Retailers collect cash in days and pay suppliers in weeks: negative working capital is efficient, not distressed. In manufacturing the same figure would be a warning — business model decides.', difficulty: 'Advanced', topic: 'Working Capital', skill: 'Financial Analysis' },
      { question: '$20,000 of receivables are judged uncollectible. The correct entry is:', options: ['Dr Bad Debt Expense $20,000 / Cr Allowance for Doubtful Accounts $20,000', 'Dr Allowance for Doubtful Accounts $20,000 / Cr Cash $20,000', 'Dr Receivables $20,000 / Cr Revenue $20,000', 'No entry until the customer formally defaults'], answer: 0, explanation: 'The expected loss hits profit now via the contra-asset allowance; receivables are presented net. Waiting for formal default overstates assets and profit.', difficulty: 'Intermediate', topic: 'Bad Debts', skill: 'Financial Analysis' },
      { question: 'The allowance for doubtful accounts affects the statements by:', options: ['Reducing receivables on the balance sheet and reducing profit via bad debt expense', 'Reducing cash and reducing revenue', 'Increasing liabilities and reducing equity directly', 'Having no effect until a debt is written off'], answer: 0, explanation: 'It is a contra-asset (receivables shown net) with the offsetting expense in profit or loss — the expected-loss model recognizes the cost when identified, not when finally written off.', difficulty: 'Advanced', topic: 'Bad Debts', skill: 'Financial Analysis' },
      { question: 'Equity can legitimately increase through:', options: ['Retained profits from operations', 'Revaluing liabilities downward arbitrarily', 'Issuing debt', 'Writing off assets'], answer: 0, explanation: 'Retained profits accumulate in equity as the business earns. Debt increases liabilities, not equity; arbitrary revaluations and write-offs do not create genuine equity.', difficulty: 'Foundation', topic: 'Equity', skill: 'Financial Analysis' }
    ]
  },
  {
    id: 'm33', level: 8, levelTitle: 'Financial Analysis', title: 'Cash Flow Analysis',
    standard: 'IAS 7', tagline: 'Profit is an opinion. Cash is a fact.',
    description: 'IAS 7\'s cash flow statement answers the question profit cannot: where did the cash actually go? This module covers the three cash flow buckets, the indirect method from profit to operating cash flow, the classic paradoxes (profit up, cash down), and free cash flow — the number investors trust most.',
    minutes: 18, skills: ['Cash Flow', 'Financial Analysis'],
    sections: [
      {
        heading: 'Profit ≠ Cash: The Core Insight',
        paragraphs: [
          'Profit is measured on an accrual basis; cash is measured when it moves. Between the two sit all the timing differences that make financial analysis interesting: credit sales booked as revenue before cash arrives, depreciation charged as expense with no cash outflow, inventory built up that consumed cash but not profit, suppliers paid later than expenses recognized. A company can report record profit while its bank balance shrinks — and it can bleed cash while reporting losses that are mostly depreciation.',
          'This is why IAS 7 makes the cash flow statement a primary statement, not a footnote. Lenders care because debt is repaid in cash, not in EBITDA. Investors care because dividends are paid in cash. And fraudsters hate it, because while profit can be managed with accruals, cash movements leave bank trails.'
        ],
        callout: { type: 'key', text: 'Profit measures performance on an accrual basis; cash measures survival. Read them together — the gap between them is where the analysis lives.' }
      },
      {
        heading: 'The Three Buckets: Operating, Investing, Financing',
        paragraphs: [
          'IAS 7 sorts every cash flow into three activities. Operating: the cash effects of the core business — receipts from customers, payments to suppliers and employees, tax paid. Investing: buying and selling long-term assets — capex, acquisitions, disposals. Financing: transactions with capital providers — borrowings and repayments, share issues, dividends paid.',
          'The classification tells the company\'s story at a glance. A healthy pattern: operating inflows funding investing outflows, with financing as the balancing item. An unhealthy one: operating outflows masked by continuous borrowing — the company survives on financing, not on its business. Always ask which bucket is funding which.'
        ],
        table: { headers: ['Activity', 'Inflows', 'Outflows'], rows: [['Operating', 'Cash from customers', 'Paid to suppliers, employees, tax'], ['Investing', 'Sale of equipment, investments', 'Capex, acquisitions'], ['Financing', 'New loans, share issues', 'Loan repayments, dividends']] }
      },
      {
        heading: 'Reading Operating Cash Flow: The Indirect Method',
        paragraphs: [
          'Most companies present operating cash flow via the indirect method: start with profit, add back non-cash charges, then adjust for working capital movements. Work it: profit $200,000. Add back depreciation $80,000 (charged to profit, no cash left). Receivables increased $150,000 — sales booked but cash not collected — subtract. Payables increased $40,000 — expenses booked but cash not yet paid — add. Operating cash flow = $200,000 + $80,000 − $150,000 + $40,000 = $170,000.',
          'The sign logic is mechanical once internalized: an increase in an operating asset (receivables, inventory) consumes cash — subtract; an increase in an operating liability (payables) preserves cash — add. Decreases do the reverse. Every working-capital movement in the indirect method is just asking: did this change bring cash in or take cash out?'
        ],
        callout: { type: 'example', text: 'Profit $200,000 + depreciation $80,000 − receivables increase $150,000 + payables increase $40,000 = operating cash flow $170,000. Profit looked better than cash because $110,000 of it is still sitting in working capital.' }
      },
      {
        heading: 'Classic Paradoxes',
        paragraphs: [
          'Paradox one: profit up, cash down. Sales grew on generous credit terms — receivables absorbed every dollar of extra profit and more. The P&L celebrates; the bank account does not. Paradox two: the growing company that always needs cash. Each extra dollar of sales demands inventory and receivables upfront — growth consumes cash before it generates it, which is why fast growers raise funding even while profitable.',
          'Paradox three: capex affects cash now, profit over years. A $120,000 machine purchase is a $120,000 investing outflow today but only ~$24,000 of annual depreciation in profit. Capital-intensive businesses therefore show the widest profit-cash gaps — and analysts who value them on earnings multiples without checking cash flow are valuing the depreciation policy, not the business.'
        ],
        bullets: ['Profit up, cash down → working capital absorbed the profit; check receivables and inventory.', 'Profitable but always fundraising → growth consumes cash upfront.', 'Capex-heavy: cash leaves now, profit recognizes it over years — expect persistent gaps.']
      },
      {
        heading: 'Free Cash Flow: The Number Investors Trust',
        paragraphs: [
          'Free cash flow (FCF) = operating cash flow − capital expenditure. It answers the only question that ultimately matters to a business owner: after running the business and maintaining its assets, how much cash is left for lenders, shareholders, and growth? Our example: operating cash flow $170,000 − capex $120,000 = FCF $50,000.',
          'FCF is hard to manipulate precisely because it sits at the end of the cash chain — you cannot accrue your way to cash. That is why valuation models discount free cash flows, not earnings. The caveats: capex timing is lumpy (a quiet capex year flatters FCF), and "maintenance vs growth" capex splits are judgemental — but as a measure of cash reality, nothing in the statements beats it.'
        ],
        callout: { type: 'interview', text: 'Interview classic: "Profit is up 30% but cash is down — explain." Answer with the three suspects: working capital absorbed cash (receivables/inventory up, payables down), heavy capex (investing outflow, not in profit), or non-cash profit boosts (reversals, fair value gains). Then prove it by walking from profit to operating cash flow via the indirect method.' }
      }
    ],
    mistakes: [
      'Equating profit with cash available for dividends — dividends are paid from cash, not from retained earnings alone.',
      'Ignoring working capital movements when reconciling profit to cash.',
      'Classifying operating outflows as investing to flatter operating cash flow.',
      'Forgetting that capex hits cash immediately but profit gradually through depreciation.',
      'Reading only the bottom-line cash movement without asking which activity drove it.',
      'Treating "adjusted" operating cash flow figures as seriously as the IAS 7 statement.'
    ],
    interviewQA: [
      { q: 'Profit is up 30% but cash is down. Explain.', a: 'I would walk from profit to cash using the indirect method and check three suspects. First, working capital: if receivables or inventory grew faster than sales, profit is trapped there — the classic cause. Second, capex: heavy investing outflows do not touch profit immediately. Third, non-cash profit boosts like provision reversals or fair value gains that never were cash. In most real cases it is working capital: I would check DSO, inventory days, and whether payables were paid down, then look at post-year-end cash collection to see if the profit was real.' },
      { q: 'What is free cash flow and why does it matter?', a: 'Free cash flow is operating cash flow minus capital expenditure — the cash left after running the business and maintaining its asset base. It matters because it is the cash genuinely available to lenders, shareholders, and growth; it is hard to manipulate since it sits at the end of the cash chain; and valuation models discount free cash flows rather than earnings. The main caveat is capex lumpiness — a quiet capex year flatters FCF, so I look at multi-year averages and question the maintenance-versus-growth capex split.' }
    ],
    quiz: [
      { question: 'IAS 7 classifies cash flows into:', options: ['Operating, investing, and financing activities', 'Revenue, expenses, and profit', 'Current and non-current flows', 'Cash and non-cash flows'], answer: 0, explanation: 'The three IAS 7 buckets separate the cash of running the business (operating), buying/selling long-term assets (investing), and dealing with capital providers (financing).', difficulty: 'Foundation', topic: 'IAS 7 Structure', skill: 'Cash Flow' },
      { question: 'Profit $200,000; depreciation $80,000; receivables up $150,000; payables up $40,000. Operating cash flow (indirect) is:', options: ['$170,000', '$280,000', '$390,000', '$30,000'], answer: 0, explanation: '$200,000 + $80,000 (add back non-cash) − $150,000 (receivables absorb cash) + $40,000 (payables preserve cash) = $170,000.', difficulty: 'Intermediate', topic: 'Indirect Method', skill: 'Cash Flow' },
      { question: 'In the indirect method, an increase in trade receivables is:', options: ['Subtracted from profit — cash is tied up in uncollected sales', 'Added to profit — receivables are an asset', 'Ignored — it is non-cash', 'Added to investing cash flows'], answer: 0, explanation: 'Higher receivables mean sales were booked without cash arriving: cash was absorbed, so the increase is deducted from profit to reach cash.', difficulty: 'Intermediate', topic: 'Indirect Method', skill: 'Cash Flow' },
      { question: 'A company buys a machine for $120,000 cash. The immediate effects are:', options: ['Investing cash outflow $120,000; no immediate P&L effect', 'A $120,000 expense in profit or loss', 'Operating cash outflow $120,000', 'No effect anywhere until depreciation starts'], answer: 0, explanation: 'Capex is an investing outflow today; profit recognizes the cost gradually through depreciation. This timing gap is why profit and cash diverge in capital-intensive businesses.', difficulty: 'Intermediate', topic: 'Capex', skill: 'Cash Flow' },
      { question: 'Depreciation is added back to profit in the indirect method because:', options: ['It reduced profit but involved no cash outflow', 'It is an investing activity', 'It increases the tax bill', 'It represents cash saved for replacements'], answer: 0, explanation: 'Depreciation is a non-cash allocation of past capex. Adding it back reverses its profit effect to get closer to cash — it does not create cash.', difficulty: 'Foundation', topic: 'Indirect Method', skill: 'Cash Flow' },
      { question: 'Under IAS 7, interest paid may be classified as:', options: ['Operating or financing — the entity chooses and applies it consistently', 'Only as operating, with no choice', 'Only as investing', 'It must be split 50/50'], answer: 0, explanation: 'IAS 7 permits interest paid in operating or financing (and interest/dividends received in operating or investing); the choice must be consistent period to period — which is why you check the policy note before comparing companies.', difficulty: 'Intermediate', topic: 'Classification', skill: 'Cash Flow' },
      { question: 'Profit is $500,000 but operating cash flow is −$50,000. The most likely explanation is:', options: ['Working capital absorbed more cash than the profit generated — investigate receivables and inventory', 'The company committed fraud', 'Depreciation was too high', 'Tax rates increased'], answer: 0, explanation: 'A $550,000 negative swing from profit to cash screams working capital: receivables and/or inventory ballooned, or payables were paid down. Verify with DSO, inventory days, and post-year-end collections.', difficulty: 'Advanced', topic: 'Profit vs Cash', skill: 'Financial Analysis' },
      { question: 'Operating cash flow is $170,000 and capex is $120,000. Free cash flow is:', options: ['$50,000', '$290,000', '$170,000', '−$50,000'], answer: 0, explanation: 'FCF = operating cash flow − capex = $170,000 − $120,000 = $50,000 — the cash left after running the business and maintaining its assets.', difficulty: 'Intermediate', topic: 'Free Cash Flow', skill: 'Financial Analysis' },
      { question: 'Dividends paid appear in the cash flow statement under:', options: ['Financing activities', 'Operating activities only', 'Investing activities', 'They do not appear — dividends are non-cash'], answer: 0, explanation: 'Dividends are returns to capital providers: financing outflows. (IAS 7 allows dividends paid in operating or financing; financing is the standard presentation.)', difficulty: 'Foundation', topic: 'Classification', skill: 'Cash Flow' }
    ]
  },
  {
    id: 'm34', level: 8, levelTitle: 'Financial Analysis', title: 'Working Capital',
    standard: 'Analysis', tagline: 'How many days is your cash doing someone else\'s job?',
    description: 'Working capital is the cash tied up in the day-to-day trading cycle. This module makes it measurable: DSO, DIO, and DPO — and the cash conversion cycle (CCC = DSO + DIO − DPO) that combines them. You will calculate each from real numbers, learn the levers that shorten the cycle, and understand why growth so often eats cash.',
    minutes: 20, skills: ['Financial Analysis'], visuals: ['ccc'],
    sections: [
      {
        heading: 'What Working Capital Really Is',
        paragraphs: [
          'Operating working capital = receivables + inventory − payables. It is the investment the trading cycle demands: cash leaves to suppliers and sits in inventory and receivables before customers pay it back. Unlike the textbook current-assets-minus-current-liabilities, this version strips out cash itself and financing items, isolating the operational lock-up.',
          'The key insight: working capital is not free. Every dollar in receivables and inventory is a dollar funded by someone — equity, debt, or suppliers. A company with $450,000 of operating working capital has $450,000 of funding permanently parked in its day-to-day operations. Manage it well and funding needs shrink; manage it badly and the overdraft grows while profit looks fine.'
        ],
        callout: { type: 'key', text: 'Operating working capital = Receivables + Inventory − Payables. It is the cash your trading cycle holds hostage.' }
      },
      {
        heading: 'DSO, DIO, DPO: The Three Dials',
        paragraphs: [
          'Three ratios convert the balances into days, making them comparable across companies and periods. DSO (days sales outstanding) = receivables ÷ revenue × 365: how long customers take to pay. DIO (days inventory outstanding) = inventory ÷ cost of sales × 365: how long stock sits before selling. DPO (days payable outstanding) = payables ÷ cost of sales × 365: how long you take to pay suppliers.',
          'Note the denominators: receivables relate to sales (revenue), while inventory and payables relate to purchases (cost of sales). Mixing them up — DSO on cost of sales, for instance — is the most common calculation error. And use average balances over the period where possible; year-end snapshots can flatter or punish seasonal businesses.'
        ],
        table: { headers: ['Metric', 'Formula', 'Asks'], rows: [['DSO', 'Receivables / Revenue x 365', 'How fast do customers pay?'], ['DIO', 'Inventory / Cost of sales x 365', 'How fast does stock turn?'], ['DPO', 'Payables / Cost of sales x 365', 'How slowly do we pay suppliers?']] }
      },
      {
        heading: 'The Cash Conversion Cycle',
        paragraphs: [
          'The cash conversion cycle combines the three dials into one number: CCC = DSO + DIO − DPO. Read it as a timeline: you pay suppliers after DPO days, but your cash was already working — tied in inventory for DIO days and in receivables for DSO days. The CCC is the number of days your cash funds someone else\'s benefit: first your suppliers\' (while stock sits), then your customers\' (while they delay payment), net of the funding your suppliers give you.',
          'Our worked company: receivables $350,000 on revenue $2,555,000 → DSO = 50 days. Inventory $300,000 on cost of sales $1,825,000 → DIO = 60 days. Payables $200,000 on cost of sales $1,825,000 → DPO = 40 days. CCC = 50 + 60 − 40 = 70 days. Every day of sales therefore needs 70 days of funding — at $7,000 daily cost of sales, that is roughly $490,000 of cash permanently in the cycle.'
        ],
        callout: { type: 'key', text: 'CCC = DSO + DIO − DPO. Lower is generally better — but only if achieved without starving sales or strangling suppliers.' }
      },
      {
        heading: 'Calculation Workout',
        paragraphs: [
          'Work the numbers yourself — analysts do this from memory in meetings. Step 1: DSO = $350,000 ÷ $2,555,000 × 365 = 50 days. Customers take fifty days to pay. Step 2: DIO = $300,000 ÷ $1,825,000 × 365 = 60 days. Stock sits for two months. Step 3: DPO = $200,000 ÷ $1,825,000 × 365 = 40 days. Suppliers are paid in forty days. Step 4: CCC = 50 + 60 − 40 = 70 days.',
          'Now stress it: if DSO slips to 65 days (customers paying slower), CCC rises to 85 days and the funding need grows by 15 days × $5,000 daily cost of sales = $75,000 of extra cash absorbed. That is how a "good sales month" with lax collection quietly eats the overdraft.'
        ],
        table: { headers: ['Step', 'Calculation', 'Result'], rows: [['DSO', '$350,000 / $2,555,000 x 365', '50 days'], ['DIO', '$300,000 / $1,825,000 x 365', '60 days'], ['DPO', '$200,000 / $1,825,000 x 365', '40 days'], ['CCC', '50 + 60 − 40', '70 days']] }
      },
      {
        heading: 'Levers to Improve the CCC',
        paragraphs: [
          'Each dial has levers — and each lever has a cost. Shorten DSO: invoice immediately, offer early-payment discounts, tighten credit terms, chase overdues systematically. The cost: discounts erode margin and tough terms can lose sales. Shorten DIO: improve forecasting, cut slow-moving lines, negotiate consignment stock. The cost: stockouts lose sales and rush orders cost more. Extend DPO: negotiate longer terms, use supply-chain finance. The cost: suppliers may raise prices or deprioritize you — squeezing suppliers is borrowing from the relationship.',
          'The professional approach: benchmark each dial against peers, attack the worst one first, and measure the cash released. A 10-day DSO improvement on $2,555,000 revenue frees roughly $70,000 of cash — often cheaper than any loan.'
        ],
        bullets: ['DSO levers: prompt invoicing, early-payment discounts, credit control — watch margin and sales impact.', 'DIO levers: forecasting, range rationalization, consignment — watch stockouts.', 'DPO levers: negotiated terms, supply-chain finance — watch supplier relationships.']
      },
      {
        heading: 'Working Capital and Growth: The Cash Trap',
        paragraphs: [
          'Here is the paradox that kills growing companies: growth consumes cash. Each extra dollar of sales needs its share of receivables and inventory before the cash comes back — at a 70-day CCC, growing revenue by $1,000,000 permanently locks up roughly $192,000 more cash ($1,000,000 × 70/365). A company growing 30% a year can be profitable every month and still run out of cash, because the working-capital investment outruns retained profit.',
          'This is why lenders ask for working-capital forecasts alongside profit forecasts, and why "sales are booming but we need a bigger overdraft" is the most normal sentence in corporate finance. Growth must be funded — by profit retention, by working-capital efficiency, or by external finance. The CCC tells you how much.'
        ],
        callout: { type: 'warning', text: 'Growth eats cash: at a 70-day CCC, $1,000,000 of extra annual sales locks up ~$192,000 of permanent working capital. Profitable growth can still be fatal without funding.' }
      }
    ],
    mistakes: [
      'Using year-end balances instead of averages for DSO, DIO, and DPO — seasonal spikes distort the picture.',
      'Mixing denominators: DSO uses revenue; DIO and DPO use cost of sales.',
      'Comparing CCC across industries without context — retail and construction live in different worlds.',
      'Stretching payables so far that suppliers raise prices, deprioritize you, or fail.',
      'Cutting inventory so hard that stockouts lose more margin than the cash released.',
      'Celebrating a falling CCC achieved by delaying supplier payments into distress territory.'
    ],
    interviewQA: [
      { q: 'What is the cash conversion cycle, and what does 70 days mean?', a: 'CCC = DSO + DIO − DPO: the days between paying for inputs and collecting cash from sales. Seventy days means the company funds 70 days of its trading cycle itself — cash is tied up in inventory and receivables, partly offset by supplier credit. I would break it into its dials (say DSO 50, DIO 60, DPO 40), benchmark each against peers, and quantify the funding: at $5,000 daily cost of sales, 70 days locks up about $350,000 of permanent working capital. Then I would ask which dial is improvable without hurting sales or suppliers.' },
      { q: 'Sales are booming but the company needs a bigger overdraft. Why?', a: 'Growth consumes working capital: every extra dollar of sales needs receivables and inventory investment before cash returns. At a 70-day CCC, $1 million of additional annual sales permanently locks up roughly $192,000 of cash. If that investment outruns retained profit, the overdraft grows even though the P&L looks great. I would check whether DSO or DIO deteriorated (making it worse than pure growth), forecast the working-capital funding need alongside profit, and consider whether efficiency gains or external funding should cover it.' }
    ],
    quiz: [
      { question: 'Operating working capital is defined as:', options: ['Receivables + Inventory − Payables', 'Current assets − Current liabilities including cash', 'Cash + Receivables − Payables', 'Total assets − Total liabilities'], answer: 0, explanation: 'Operating working capital isolates the trading cycle: what customers owe you plus stock on hand, minus what you owe suppliers. Cash and financing items are excluded.', difficulty: 'Foundation', topic: 'Working Capital', skill: 'Financial Analysis' },
      { question: 'Receivables are $350,000 and annual revenue is $2,555,000. DSO is:', options: ['50 days', '36 days', '73 days', '137 days'], answer: 0, explanation: 'DSO = $350,000 / $2,555,000 × 365 = 50 days. Customers take fifty days on average to pay.', difficulty: 'Intermediate', topic: 'DSO', skill: 'Financial Analysis' },
      { question: 'Inventory is $300,000 and annual cost of sales is $1,825,000. DIO is:', options: ['60 days', '50 days', '40 days', '70 days'], answer: 0, explanation: 'DIO = $300,000 / $1,825,000 × 365 = 60 days. Stock sits for two months before selling.', difficulty: 'Intermediate', topic: 'DIO', skill: 'Financial Analysis' },
      { question: 'Payables are $200,000 and annual cost of sales is $1,825,000. DPO is:', options: ['40 days', '50 days', '60 days', '30 days'], answer: 0, explanation: 'DPO = $200,000 / $1,825,000 × 365 = 40 days. Suppliers are paid after forty days on average.', difficulty: 'Intermediate', topic: 'DPO', skill: 'Financial Analysis' },
      { question: 'With DSO 50, DIO 60, and DPO 40, the cash conversion cycle is:', options: ['70 days', '150 days', '30 days', '110 days'], answer: 0, explanation: 'CCC = DSO + DIO − DPO = 50 + 60 − 40 = 70 days.', difficulty: 'Intermediate', topic: 'CCC', skill: 'Financial Analysis' },
      { question: 'A lower cash conversion cycle generally means:', options: ['Less cash tied up in the trading cycle — but check it was not achieved abusively', 'Higher profit margins', 'Lower revenue', 'More long-term debt'], answer: 0, explanation: 'A shorter CCC frees cash. But if it came from strangling suppliers or stockouts, it destroys value — always check how it was achieved.', difficulty: 'Advanced', topic: 'CCC', skill: 'Financial Analysis' },
      { question: 'Which action shortens the cash conversion cycle?', options: ['Collecting receivables faster (reducing DSO)', 'Holding more inventory', 'Paying suppliers earlier', 'Increasing credit sales'], answer: 0, explanation: 'CCC = DSO + DIO − DPO: reducing DSO shortens it. More inventory lengthens DIO; earlier supplier payments shorten DPO (lengthening CCC); more credit sales raise DSO.', difficulty: 'Intermediate', topic: 'CCC Levers', skill: 'Financial Analysis' },
      { question: 'Extending DPO from 40 to 55 days, with annual cost of sales of $1,825,000, releases approximately:', options: ['$75,000 of cash', '$27,375 of cash', '$1,825,000 of cash', 'No cash — DPO does not affect cash'], answer: 0, explanation: '15 extra days × ($1,825,000 / 365 = $5,000 per day) = $75,000 of supplier funding replacing your own cash.', difficulty: 'Advanced', topic: 'CCC Levers', skill: 'Financial Analysis' },
      { question: 'A retailer collects cash from customers in 5 days, sells inventory in 20 days, and pays suppliers in 45 days. Its CCC is:', options: ['−20 days — it is funded by suppliers', '70 days', '60 days', '30 days'], answer: 0, explanation: 'CCC = 5 + 20 − 45 = −20 days: negative. Customers and inventory turn faster than supplier payments — suppliers fund the cycle, the classic supermarket model.', difficulty: 'Foundation', topic: 'CCC', skill: 'Financial Analysis' }
    ]
  },
  {
    id: 'm35', level: 8, levelTitle: 'Financial Analysis', title: 'Financial Ratios',
    standard: 'Analysis', tagline: 'Ratios turn raw numbers into judgements.',
    description: 'Ratios are the analyst\'s shorthand: profitability, liquidity, leverage, and efficiency distilled into comparable figures. This module works through every key ratio with formulas and real numbers, shows how the DuPont breakdown explains ROE, and teaches the honest use of ratios — trends, peers, and limitations.',
    minutes: 22, skills: ['Financial Analysis'],
    sections: [
      {
        heading: 'Profitability Ratios: How Much Sticks',
        paragraphs: [
          'Profitability ratios measure what the business keeps from each dollar of activity. Gross margin (gross profit ÷ revenue) shows pricing power over direct costs: $800,000 ÷ $2,000,000 = 40%. EBITDA margin (EBITDA ÷ revenue) shows operating leverage before capital intensity: $400,000 ÷ $2,000,000 = 20%. Net margin (net income ÷ revenue) shows what reaches shareholders: $200,000 ÷ $2,000,000 = 10%.',
          'Return ratios scale profit against the resources used. ROA (return on assets) = net income ÷ total assets = $200,000 ÷ $2,500,000 = 8%: how hard the asset base works. ROE (return on equity) = net income ÷ equity = $200,000 ÷ $1,000,000 = 20%: the return on shareholders\' investment. ROE exceeds ROA whenever the business uses debt — leverage magnifies returns in both directions.'
        ],
        table: { headers: ['Ratio', 'Formula', 'Our company'], rows: [['Gross margin', 'Gross profit / Revenue', '$800,000 / $2,000,000 = 40%'], ['EBITDA margin', 'EBITDA / Revenue', '$400,000 / $2,000,000 = 20%'], ['Net margin', 'Net income / Revenue', '$200,000 / $2,000,000 = 10%'], ['ROA', 'Net income / Total assets', '$200,000 / $2,500,000 = 8%'], ['ROE', 'Net income / Equity', '$200,000 / $1,000,000 = 20%']] },
        callout: { type: 'key', text: 'Margins scale profit against sales; returns scale profit against resources. Track both — a high ROE built on thin margins and heavy leverage is fragile.' }
      },
      {
        heading: 'Liquidity Ratios: Survival First',
        paragraphs: [
          'Liquidity ratios were covered in depth in m32; here they join the full toolkit. Current ratio = current assets ÷ current liabilities = 1.6x. Quick ratio = (current assets − inventory) ÷ current liabilities = 1.0x. The analyst\'s habit: compute both, then ask what sits inside current assets — the ratios are only as honest as the receivables aging and the inventory writedown policy behind them.',
          'Liquidity ratios are point-in-time and backward-looking. Complement them with forward-looking cover: how many months of operating cash outflow does the cash balance cover? And with the cash conversion cycle from m34, which tells you whether working capital will consume or release cash next quarter.'
        ],
        bullets: ['Current ratio 1.6x; quick ratio 1.0x — then interrogate the components.', 'Point-in-time: pair with cash burn cover and the CCC for the forward view.']
      },
      {
        heading: 'Leverage Ratios: How Much Debt Is Too Much?',
        paragraphs: [
          'Debt-to-equity = total debt ÷ equity = $600,000 ÷ $900,000 = 0.67x: moderate balance-sheet leverage. But the ratio lenders watch most is net debt ÷ EBITDA = $450,000 ÷ $400,000 = 1.1x — roughly 1.1 years of operating earnings to repay net debt. Below 2x is comfortable for most industries; above 4x raises eyebrows; above 6x is distressed territory (all else equal).',
          'Leverage ratios must be read with interest cover (EBIT ÷ interest: can earnings service the interest bill?) and the debt maturity profile. A 1.1x net debt/EBITDA with all debt due next year is riskier than 2.5x with maturities spread over a decade. And remember: ratios using book equity can flatter companies with large revaluation reserves or understate those with heavy intangibles.'
        ],
        table: { headers: ['Ratio', 'Formula', 'Our company', 'Rule of thumb'], rows: [['Debt / Equity', 'Total debt / Equity', '$600,000 / $900,000 = 0.67x', '< 1.0x moderate (varies by industry)'], ['Net debt / EBITDA', 'Net debt / EBITDA', '$450,000 / $400,000 = 1.1x', '< 2x comfortable; > 4x stretched']] }
      },
      {
        heading: 'Efficiency Ratios: Sweating the Assets',
        paragraphs: [
          'Efficiency ratios ask how hard assets work. Asset turnover = revenue ÷ total assets = $2,000,000 ÷ $2,500,000 = 0.8x: each dollar of assets generates $0.80 of annual sales. Inventory turnover = cost of sales ÷ inventory = $1,200,000 ÷ $300,000 = 4x: stock turns four times a year (about every 90 days — consistent with a 60-day DIO only if... well, check the averaging: point-in-time ratios are approximations).',
          'Efficiency is strategy-dependent: a supermarket turns assets fast on thin margins; a luxury brand turns slowly on fat margins. Comparing asset turnover across business models is meaningless — compare against the company\'s own history and true peers, and always alongside margins, because turnover × margin is what ultimately drives ROA.'
        ],
        bullets: ['Asset turnover 0.8x — sales generated per dollar of assets.', 'Inventory turnover 4x — stock cycles four times a year.', 'Turnover × margin = ROA: efficiency and profitability multiply.']
      },
      {
        heading: 'The DuPont Breakdown: Explaining ROE',
        paragraphs: [
          'ROE of 20% is a fact; DuPont analysis explains it. ROE = net margin × asset turnover × financial leverage (assets ÷ equity). With net margin 10%, asset turnover 1.2x, and leverage 2.0x: 10% × 1.2 × 2.0 = 24% ROE. (Our company\'s own figures give 10% × 0.8 × 2.5 = 20% — same logic.) Three levers, three strategic questions: can we earn more per sale (margin), sell more per asset (turnover), or — carefully — use more leverage?',
          'DuPont\'s power is diagnostic. Two companies with 20% ROE can be opposites: one earns it with 15% margins and no debt (quality), the other with 4% margins and 5x leverage (fragile). When ROE rises, DuPont tells you whether to applaud (margin or turnover improved) or worry (leverage did it).'
        ],
        callout: { type: 'example', text: 'ROE 24% = 10% net margin × 1.2 asset turnover × 2.0 leverage. If next year ROE rises to 28% purely because leverage went to 2.4x, the business did not improve — it just borrowed more risk.' }
      },
      {
        heading: 'Using Ratios Honestly',
        paragraphs: [
          'Ratios are powerful and easily abused. Five rules keep them honest. One: compare like with like — same industry, same business model, same accounting policies (a company capitalizing development will show different margins than one expensing it). Two: trends beat snapshots — a ratio moving the wrong way for three years matters more than its level. Three: check definitions — "net debt" and "EBITDA" vary between companies; always read the footnotes.',
          'Four: remember what ratios hide — averages conceal dispersion, and year-end figures conceal seasonality. Five: never let a ratio decide alone. A 1.1x net debt/EBITDA is comfortable until you learn the debt matures next quarter; a 40% gross margin is great until you learn it required channel stuffing. Ratios frame the questions; the notes and cash flow statement answer them.'
        ],
        bullets: ['Compare like with like: peers, policies, business models.', 'Trends over snapshots; check every definition in the footnotes.', 'Ratios ask the questions — the notes and cash flow give the answers.']
      }
    ],
    mistakes: [
      'Comparing ratios across different industries or business models.',
      'Using year-end equity for ROE right after a large dividend distorted it — consider averages.',
      'Assuming everyone defines EBITDA and net debt the same way — definitions vary.',
      'Reading a single year\'s ratio without its trend.',
      'Forgetting FX translation effects when comparing multinational ratios.',
      'Letting one ratio decide: leverage looks fine until the maturity profile is checked.'
    ],
    interviewQA: [
      { q: 'How would you analyze a company\'s profitability?', a: 'I work top-down through the margins: gross margin for pricing power and production efficiency, EBITDA margin for operating leverage, net margin for what reaches shareholders — then ROA and ROE to scale profit against resources. I look at three-to-five-year trends and peer benchmarks, because a single year is trivia. Then I use DuPont to explain ROE: is it driven by margin, asset turnover, or leverage? A 20% ROE from 15% margins with no debt is quality; the same ROE from 4% margins with 5x leverage is fragile. Finally I cross-check against cash flow — margins without cash conversion are suspect.' },
      { q: 'What does DuPont analysis tell you beyond ROE alone?', a: 'ROE is one number; DuPont splits it into net margin × asset turnover × leverage, revealing how the return was earned. It distinguishes quality from risk: margin-driven ROE reflects pricing power or efficiency, turnover-driven ROE reflects asset productivity, and leverage-driven ROE reflects financial risk. When ROE changes, DuPont identifies the driver — an ROE increase from higher leverage deserves worry, not applause. It also frames strategy: the three levers are earn more per sale, sell more per asset, or borrow more — with very different risk profiles.' }
    ],
    quiz: [
      { question: 'Gross profit is $800,000 on revenue of $2,000,000. Gross margin is:', options: ['40%', '60%', '250%', '25%'], answer: 0, explanation: '$800,000 / $2,000,000 = 40%.', difficulty: 'Foundation', topic: 'Profitability', skill: 'Financial Analysis' },
      { question: 'EBITDA is $400,000 on revenue of $2,000,000. EBITDA margin is:', options: ['20%', '40%', '10%', '50%'], answer: 0, explanation: '$400,000 / $2,000,000 = 20%.', difficulty: 'Intermediate', topic: 'Profitability', skill: 'Financial Analysis' },
      { question: 'Net income is $200,000, total assets $2,500,000, equity $1,000,000. ROA and ROE are:', options: ['ROA 8%, ROE 20%', 'ROA 20%, ROE 8%', 'ROA 10%, ROE 25%', 'ROA 12.5%, ROE 5%'], answer: 0, explanation: 'ROA = $200,000 / $2,500,000 = 8%; ROE = $200,000 / $1,000,000 = 20%. Leverage (assets/equity = 2.5x) explains why ROE exceeds ROA.', difficulty: 'Intermediate', topic: 'Returns', skill: 'Financial Analysis' },
      { question: 'Net debt is $450,000 and EBITDA is $400,000. Net debt/EBITDA of 1.1x means:', options: ['About 1.1 years of EBITDA would repay net debt — comfortable leverage', 'The company is insolvent', 'Debt costs 110% per year', 'Equity is 1.1 times debt'], answer: 0, explanation: 'Net debt/EBITDA measures repayment capacity in years of operating earnings. Around 1.1x is comfortable; concern typically starts above 4x.', difficulty: 'Intermediate', topic: 'Leverage', skill: 'Financial Analysis' },
      { question: 'Cost of sales is $1,200,000 and inventory is $300,000. Inventory turnover is:', options: ['4x — stock turns four times a year', '0.25x', '40x', '4%'], answer: 0, explanation: '$1,200,000 / $300,000 = 4x. Higher turnover generally means less cash locked in stock — unless achieved by understocking.', difficulty: 'Intermediate', topic: 'Efficiency', skill: 'Financial Analysis' },
      { question: 'DuPont: net margin 10%, asset turnover 1.2x, leverage (assets/equity) 2.0x. ROE is:', options: ['24%', '13.2%', '32%', '12%'], answer: 0, explanation: 'ROE = 10% × 1.2 × 2.0 = 24%.', difficulty: 'Advanced', topic: 'DuPont', skill: 'Financial Analysis' },
      { question: 'The quick ratio differs from the current ratio because it:', options: ['Excludes inventory — the least liquid current asset', 'Includes non-current assets', 'Excludes cash', 'Uses market values instead of book values'], answer: 0, explanation: 'The quick (acid-test) ratio removes inventory, testing whether short-term obligations are covered without selling stock.', difficulty: 'Intermediate', topic: 'Liquidity', skill: 'Financial Analysis' },
      { question: 'ROE is rising while ROA is flat. The most likely driver is:', options: ['Increased financial leverage (or share buybacks shrinking equity)', 'Higher gross margins', 'Faster asset turnover', 'Lower tax rates'], answer: 0, explanation: 'With ROA (profit/assets) flat, a rising ROE (profit/equity) means equity shrank relative to assets — more leverage or buybacks — not better operations.', difficulty: 'Advanced', topic: 'DuPont', skill: 'Financial Analysis' },
      { question: 'Asset turnover of 0.8x means:', options: ['Each $1 of assets generates $0.80 of annual revenue', 'Assets turn into cash in 0.8 days', '80% of assets are obsolete', 'The company has 0.8 years of asset life left'], answer: 0, explanation: 'Asset turnover = revenue / total assets: a pure efficiency measure of sales generated per dollar of asset base.', difficulty: 'Foundation', topic: 'Efficiency', skill: 'Financial Analysis' }
    ]
  }
];
