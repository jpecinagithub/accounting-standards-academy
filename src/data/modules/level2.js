// Level 2 — IFRS Framework (m05–m09)
export default [
  {
    id: 'm05', level: 2, levelTitle: 'IFRS Framework', title: 'IFRS and the Conceptual Framework',
    standard: 'Conceptual Framework', tagline: 'Who writes the rules, what "good" reporting means, and where IFRS genuinely differs from US GAAP.',
    description: 'This module puts IFRS in context: the IASB\'s mission, the Conceptual Framework\'s qualitative characteristics, and an honest IFRS vs US GAAP comparison — including the differences that actually move numbers, like LIFO, development costs and impairment reversals.',
    minutes: 20, skills: ['IFRS Fundamentals'],
    sections: [
      {
        heading: 'The IASB and Why IFRS Exists',
        paragraphs: [
          'The International Accounting Standards Board (IASB), overseen by the IFRS Foundation, develops IFRS Accounting Standards with a single mission: to bring transparency, accountability and efficiency to financial markets through a common global reporting language. Over 140 jurisdictions now require or permit IFRS, which means an analyst in Madrid can read a Korean manufacturer\'s statements using the same framework.',
          'IFRS is principles-based rather than rules-based. Instead of prescribing a treatment for every scenario, standards state objectives and principles and require judgement in applying them — supported by disclosure of the significant judgements made (IAS 1). This is why the Conceptual Framework matters: when no standard covers a transaction directly, preparers reason from the Framework\'s definitions and characteristics.'
        ],
        callout: { type: 'key', text: 'IFRS = principles over rules. US GAAP = rules over principles, with far more industry-specific guidance. The practical consequence: IFRS demands more documented professional judgement; US GAAP demands more detailed rule-following.' }
      },
      {
        heading: 'Qualitative Characteristics: What Makes Information Useful',
        paragraphs: [
          'The Conceptual Framework defines two fundamental qualitative characteristics. Relevance: information must be capable of influencing decisions — it has predictive value, confirmatory value, or both, and it is material if omitting or misstating it could change a decision. Faithful representation: the depiction must be complete, neutral and free from error — substance over legal form.',
          'Four enhancing characteristics improve usefulness further: comparability (across periods and entities), verifiability, timeliness, and understandability. And one pervasive constraint governs everything: cost. Reporting must not cost more than the benefit it delivers to users. When characteristics conflict — say, timeliness versus completeness — judgement balances them.'
        ],
        bullets: ['Fundamental: relevance (including materiality) and faithful representation.', 'Enhancing: comparability, verifiability, timeliness, understandability.', 'Constraint: the cost of reporting must not exceed its benefit.'],
        callout: { type: 'interview', text: '"What is materiality?" Answer: information is material if omitting, misstating or obscuring it could reasonably be expected to influence the decisions of primary users. Materiality is entity-specific and judgemental — there is no fixed percentage threshold in IFRS.' }
      },
      {
        heading: 'IFRS vs US GAAP: The Differences That Move Numbers',
        paragraphs: [
          'Both frameworks aim at decision-useful reporting, but several differences change reported profit and equity materially. First, inventory: IFRS bans LIFO (last-in, first-out); US GAAP permits it. In inflationary periods LIFO raises cost of sales and lowers profit and tax — a US company using LIFO can report significantly lower earnings than its IFRS twin.',
          'Second, development costs: IFRS requires capitalisation when all six IAS 38 criteria are met; US GAAP generally expenses R&D as incurred (with narrow exceptions like certain software costs). A pharmaceutical company looks far more profitable under IFRS during heavy development phases. Third, impairment: IFRS permits reversing impairments of non-financial assets (except goodwill) when conditions improve; US GAAP prohibits reversals (except for assets held for sale). An IFRS company can write an asset back up; a US company cannot.',
          'Further differences: IFRS permits the revaluation model for PPE and intangibles (US GAAP: historical cost only); IFRS uses a single-step impairment test for many assets versus US GAAP\'s two-step test; IFRS classifies interest and dividends paid/received flexibly in the cash flow statement while US GAAP largely forces them into operating activities.'
        ],
        callout: { type: 'warning', text: 'Never say "IFRS and US GAAP are basically the same now." Convergence stalled years ago. LIFO, development capitalisation, impairment reversals and revaluation alone can swing profit by double-digit percentages between the two frameworks.' },
        table: { headers: ['Area', 'IFRS', 'US GAAP'], rows: [['Inventory (LIFO)', 'Prohibited', 'Permitted'], ['Development costs', 'Capitalise if 6 criteria met', 'Expense as incurred (mostly)'], ['Impairment reversals', 'Permitted (except goodwill)', 'Prohibited'], ['PPE revaluation', 'Permitted (revaluation model)', 'Not permitted'], ['Interest paid (cash flow)', 'Operating or financing (choice)', 'Operating']] }
      },
      {
        heading: 'Recognition, Measurement and the Hierarchy',
        paragraphs: [
          'The Framework sets the recognition test: recognise an item only if it meets the definition of an element and recognition provides relevant, faithfully-represented information. Measurement bases include historical cost, current value (fair value, value in use, current cost) — and the choice of basis directly affects reported profit, which is why measurement is half the syllabus.',
          'When standards conflict or a transaction is novel, the hierarchy is: first the applicable IFRS standard, then the Conceptual Framework by analogy, then pronouncements of other standard-setters. IAS 8 (m08) formalises this. The habit to build: always ask which standard governs before reaching for the Framework.'
        ],
        callout: { type: 'key', text: 'Recognition needs two things: the definition of an asset, liability, income or expense is met, AND recognising it gives users relevant, faithfully represented information. Failing either test means no recognition — disclosure may still be required.' }
      }
    ],
    mistakes: [
      'Claiming IFRS and US GAAP have converged — material differences remain in LIFO, development costs, impairment reversals and revaluation.',
      'Treating materiality as a fixed rule (e.g. "5% of profit") — IFRS defines it judgementally by reference to users\' decisions.',
      'Invoking the Conceptual Framework when a specific standard applies — the standard always wins; the Framework is the fallback.',
      'Confusing fundamental and enhancing characteristics — relevance and faithful representation are fundamental; the other four only enhance.',
      'Forgetting the cost constraint — perfect information that costs more than it is worth should not be produced.',
      'Assuming "faithful representation" means exact precision — it means complete, neutral and free from error, not perfectly certain.'
    ],
    interviewQA: [
      { q: 'Name three substantive differences between IFRS and US GAAP.', a: 'First, LIFO is banned under IFRS but permitted under US GAAP, so in inflationary times US reporters can show lower profits. Second, IFRS requires capitalising development costs when the six IAS 38 criteria are met, while US GAAP mostly expenses R&D immediately — this flatters IFRS profits during development. Third, IFRS permits reversing impairments of non-financial assets when recoverable amount recovers, except goodwill; US GAAP prohibits reversals. I would add PPE revaluation, permitted under IFRS but not US GAAP.' },
      { q: 'What are the fundamental qualitative characteristics of useful financial information?', a: 'Relevance and faithful representation. Relevance means the information can influence decisions — it has predictive or confirmatory value, and materiality is part of relevance. Faithful representation means the depiction is complete, neutral and free from error. The enhancing characteristics — comparability, verifiability, timeliness and understandability — improve usefulness but cannot rescue information that is irrelevant or unfaithfully represented.' },
      { q: 'When would you use the Conceptual Framework instead of a standard?', a: 'Only when no IFRS standard specifically applies to the transaction. The hierarchy is: the applicable standard first, then the Framework by analogy, then other standard-setters\' guidance. IAS 8 requires management to use judgement to develop a policy that gives relevant, reliable information, and to disclose that judgement. The Framework never overrides an explicit standard.' }
    ],
    quiz: [
      { question: 'Which body develops IFRS Accounting Standards?', options: ['The International Accounting Standards Board (IASB)', 'The US Securities and Exchange Commission', 'The Financial Accounting Standards Board (FASB)', 'The European Central Bank'], answer: 0, explanation: 'The IASB, overseen by the IFRS Foundation, develops IFRS. FASB writes US GAAP; the SEC enforces it for US listed companies.', difficulty: 'Foundation', topic: 'IASB', skill: 'IFRS Fundamentals' },
      { question: 'The two fundamental qualitative characteristics are:', options: ['Relevance and faithful representation', 'Comparability and timeliness', 'Verifiability and understandability', 'Prudence and consistency'], answer: 0, explanation: 'Relevance and faithful representation are fundamental. Comparability, verifiability, timeliness and understandability are enhancing characteristics.', difficulty: 'Foundation', topic: 'Qualitative Characteristics', skill: 'IFRS Fundamentals' },
      { question: 'How does IFRS treat LIFO for inventory?', options: ['It is prohibited', 'It is permitted as an accounting policy choice', 'It is required in inflationary economies', 'It is permitted only for retailers'], answer: 0, explanation: 'IFRS bans LIFO; only FIFO and weighted average are allowed. US GAAP permits LIFO, a major framework difference.', difficulty: 'Intermediate', topic: 'IFRS vs US GAAP', skill: 'IFRS Fundamentals' },
      { question: 'Under IFRS, development expenditure must be:', options: ['Capitalised when all six IAS 38 criteria are met', 'Always expensed as incurred', 'Capitalised at management\'s discretion', 'Amortised over a maximum of 5 years'], answer: 0, explanation: 'IAS 38 requires capitalisation when all six criteria are met — it is not optional. US GAAP generally expenses R&D as incurred.', difficulty: 'Intermediate', topic: 'IFRS vs US GAAP', skill: 'IFRS Fundamentals' },
      { question: 'An asset impaired last year has recovered in value. Under IFRS (non-goodwill asset):', options: ['The impairment may be reversed, up to the carrying amount without the impairment', 'The impairment can never be reversed', 'The reversal is credited directly to share capital', 'Reversal is only allowed for inventory'], answer: 0, explanation: 'IAS 36 permits reversing impairments of non-financial assets (except goodwill) when recoverable amount increases. US GAAP prohibits such reversals.', difficulty: 'Intermediate', topic: 'IFRS vs US GAAP', skill: 'IFRS Fundamentals' },
      { question: 'Information is material under the Conceptual Framework if:', options: ['Omitting or misstating it could influence users\' decisions', 'It exceeds 5% of profit before tax', 'It relates to the current year only', 'An auditor flags it'], answer: 0, explanation: 'Materiality is defined by reference to users\' decisions, not fixed thresholds. It is entity-specific and judgemental.', difficulty: 'Intermediate', topic: 'Materiality', skill: 'IFRS Fundamentals' },
      { question: 'Which statement best describes principles-based vs rules-based standard setting?', options: ['IFRS states objectives and requires judgement; US GAAP prescribes detailed rules', 'IFRS prescribes detailed rules; US GAAP requires judgement', 'Both frameworks are identical in approach', 'IFRS has no disclosure requirements'], answer: 0, explanation: 'IFRS is principles-based: objectives plus judgement, with disclosure of significant judgements. US GAAP is far more prescriptive and industry-specific.', difficulty: 'Intermediate', topic: 'Standard Setting', skill: 'IFRS Fundamentals' },
      { question: 'The pervasive constraint on useful financial information is:', options: ['Cost — benefits of reporting must exceed the costs', 'Timeliness — speed always beats accuracy', 'Confidentiality — competitors must not see it', 'Complexity — only experts should understand it'], answer: 0, explanation: 'The Framework\'s cost constraint: producing information must be worth it. The other options misstate enhancing characteristics or invent constraints.', difficulty: 'Advanced', topic: 'Qualitative Characteristics', skill: 'IFRS Fundamentals' },
      { question: 'A novel transaction is not covered by any IFRS standard. What should management do?', options: ['Develop a policy using judgement, referring to the Conceptual Framework, and disclose it', 'Leave the transaction unrecorded', 'Apply US GAAP automatically', 'Ask the auditor to choose the treatment'], answer: 0, explanation: 'IAS 8 requires management to develop an accounting policy using judgement, considering the Framework, that yields relevant and reliable information — and to disclose the judgement.', difficulty: 'Advanced', topic: 'Hierarchy', skill: 'IFRS Fundamentals' }
    ]
  },
  {
    id: 'm06', level: 2, levelTitle: 'IFRS Framework', title: 'IAS 1 — Financial Statement Presentation',
    standard: 'IAS 1', tagline: 'The rules of the game: what must be shown, how it must be classified, and what must be compared.',
    description: 'IAS 1 sets the overall requirements for presenting financial statements. You will learn the current/non-current classification rules, the statement structure, material accounting policy disclosures, and why comparatives are mandatory.',
    minutes: 18, skills: ['IFRS Fundamentals'],
    sections: [
      {
        heading: 'What IAS 1 Requires',
        paragraphs: [
          'IAS 1 prescribes the basis for presentation of general-purpose financial statements: fair presentation, going concern, accrual basis, materiality and aggregation, no offsetting, frequency of reporting, and comparative information. Fair presentation is the overriding requirement — it means faithful representation of transactions in accordance with the standards, and in the extremely rare case where compliance would be misleading, departure is permitted with full disclosure.',
          'Offsetting is generally prohibited: assets and liabilities, or income and expenses, must not be netted unless a standard permits it. Netting a receivable against a payable with the same supplier hides both the credit risk and the obligation — readers need the gross amounts to assess liquidity.'
        ],
        callout: { type: 'key', text: 'IAS 1\'s core demands: fair presentation, going concern, accrual basis, materiality, no offsetting, and comparatives. Memorise this list — it is the skeleton of every compliant set of statements.' },
        bullets: ['Fair presentation overrides everything; departure allowed only in extremely rare cases with disclosure.', 'No offsetting of assets/liabilities or income/expenses unless specifically permitted.', 'Separate material items; aggregate only immaterial items of similar nature.']
      },
      {
        heading: 'Current vs Non-Current Classification',
        paragraphs: [
          'IAS 1 requires the statement of financial position to distinguish current from non-current assets and liabilities (unless a liquidity presentation is more relevant, as for banks). An asset is current if it is expected to be realised, sold or consumed within twelve months after the reporting period or within the normal operating cycle — whichever is longer. A liability is current if it is due within twelve months, held for trading, or the entity has no right to defer settlement beyond twelve months.',
          'The refinancing trap is examinable: a loan due in 3 months is current even if management intends to refinance it — unless the refinancing was completed before the reporting date, or the entity has an unconditional right to defer. Intent alone does not reclassify. This single rule has caused restatements at listed companies.'
        ],
        callout: { type: 'warning', text: 'A loan due within 12 months stays current even if management fully intends to refinance — unless the new agreement is signed before year-end or a contractual right to defer exists. Intent is not a right.' },
        table: { headers: ['Item', 'Classification', 'Reason'], rows: [['Inventory to be sold in 8 months', 'Current', 'Realised within 12 months'], ['Machine, 10-year life', 'Non-current', 'Held long-term'], ['Loan due in 3 months, no deferral right', 'Current', 'Settlement due < 12 months'], ['Trade payables', 'Current', 'Settled in normal operating cycle']] }
      },
      {
        heading: 'Material Accounting Policies and the Notes',
        paragraphs: [
          'IAS 1 requires disclosure of material accounting policies — not a boilerplate dump of every policy, but the policies that matter to understanding the numbers. Following recent amendments, the test is materiality: would the policy choice influence users\' decisions? A revenue recognition policy for a software company is material; the depreciation policy for office chairs probably is not.',
          'Beyond policies, the notes must disclose the judgements management made (apart from estimates) with the most significant effect — for example, whether a lease contains a purchase option, or whether an investee is a subsidiary. Then come the estimation uncertainties: provisions, impairment assumptions, fair value inputs. Analysts read these sections first because they reveal where the numbers are softest.'
        ],
        callout: { type: 'interview', text: '"What is the difference between a judgement and an estimate in the notes?" A judgement is a decision about application — e.g. whether control exists over an entity. An estimate is a measurement assumption — e.g. the discount rate in a provision. Both must be disclosed when material, but they sit in different note sections.' }
      },
      {
        heading: 'Comparative Information and Consistency',
        paragraphs: [
          'IAS 1 requires comparative information for the preceding period for all amounts presented — every number has a prior-year twin. When policies change or errors are corrected (m08), comparatives are restated so trends remain meaningful. If the entity reclassifies items, it must reclassify comparatives too and disclose the nature, amount and reason.',
          'Consistency of presentation matters: the same classifications and formats period after period, changed only when a change gives more relevant information. Combined with comparatives, this is what makes a five-year trend analysis possible — and what makes a silent reclassification without disclosure a red flag.'
        ],
        bullets: ['Comparatives required for all amounts: every current-year number needs its prior-year twin.', 'Policy changes and error corrections restate comparatives (retrospective application).', 'Reclassifications must be applied to comparatives with disclosure of nature, amount and reason.']
      },
      {
        heading: 'Structure of the Statements',
        paragraphs: [
          'IAS 1 sets minimum line items but not a rigid format. The statement of financial position must show, among others: PPE, investment property, intangibles, financial assets, inventories, trade receivables, cash, trade payables, provisions, financial liabilities, current tax, equity attributable to owners. Additional line items are required when relevant to understanding the position.',
          'The statement of profit or loss must show revenue, finance costs, tax expense, and profit or loss — with expenses classifiable by nature (salaries, depreciation) or by function (cost of sales, admin). The choice must give the most relevant presentation, and whichever is chosen, the notes must disclose enough for users to understand the cost structure.'
        ],
        callout: { type: 'key', text: 'By nature vs by function: a manufacturer might show "cost of sales" (function); a service firm might show "employee benefits expense" (nature). There is no universally correct choice — relevance to the reader decides, and the notes must fill the gaps.' }
      }
    ],
    mistakes: [
      'Netting receivables against payables with the same counterparty — offsetting is prohibited unless a standard permits it.',
      'Classifying a loan due in 6 months as non-current because management "plans to refinance" — intent without a contractual right changes nothing.',
      'Disclosing every accounting policy ever written instead of material ones — boilerplate notes obscure what matters.',
      'Presenting comparatives inconsistently after a reclassification — comparatives must be restated with disclosure.',
      'Omitting the going-concern disclosure when material uncertainties exist — IAS 1 requires explicit disclosure of them.',
      'Choosing expense presentation (nature vs function) arbitrarily instead of whichever is most relevant to readers.'
    ],
    interviewQA: [
      { q: 'When is a liability classified as current under IAS 1?', a: 'When it is expected to be settled in the normal operating cycle, held primarily for trading, due within twelve months of the reporting period, or the entity does not have a right to defer settlement for at least twelve months. The critical point is the right to defer: management\'s intention to refinance is irrelevant unless the refinancing is completed before the reporting date or a contractual deferral right exists.' },
      { q: 'What does "material accounting policies" mean, and why did IAS 1 move away from "significant"?', a: 'The amendment replaced "significant" with "material" to stop boilerplate disclosures. A policy is disclosed only if it is material — if the choice could influence users\' decisions. Disclosing immaterial policies is actively discouraged because it buries what matters. So a software company discloses its revenue recognition policy in detail but can omit the depreciation policy for immaterial office equipment.' },
      { q: 'Can an entity depart from IFRS and still claim compliance?', a: 'Only in the extremely rare circumstance where compliance with a requirement would be so misleading that it conflicts with the objective of fair presentation. The departure, its reasons, and its financial effect must be fully disclosed. In practice this almost never happens — auditors and regulators treat it as a last resort, not a planning tool.' }
    ],
    quiz: [
      { question: 'An asset is classified as current under IAS 1 when:', options: ['It is expected to be realised within 12 months or the normal operating cycle', 'It cost less than $50,000', 'It is depreciated', 'Management intends to sell it eventually'], answer: 0, explanation: 'Current classification depends on timing of realisation (12 months or operating cycle), not cost, depreciation, or vague intentions.', difficulty: 'Foundation', topic: 'Classification', skill: 'IFRS Fundamentals' },
      { question: 'A $2 million loan is due in 4 months. Management fully intends to refinance it but no agreement is signed at year-end. Classification?', options: ['Current liability', 'Non-current liability', 'Equity', 'Contingent liability'], answer: 0, explanation: 'Intent to refinance does not create a right to defer. Without a signed refinancing or contractual deferral right at the reporting date, the loan is current.', difficulty: 'Intermediate', topic: 'Classification', skill: 'IFRS Fundamentals' },
      { question: 'IAS 1\'s general rule on offsetting is:', options: ['Prohibited unless a standard specifically permits it', 'Always permitted for simplicity', 'Required for all financial instruments', 'Allowed when amounts are immaterial'], answer: 0, explanation: 'Offsetting hides gross exposures, so IAS 1 bans it except where standards explicitly allow (e.g. certain financial instrument netting with legal right and intent).', difficulty: 'Intermediate', topic: 'Offsetting', skill: 'IFRS Fundamentals' },
      { question: 'Which item must appear as a minimum line item in the statement of financial position?', options: ['Inventories', 'Marketing expenses', 'Proposed dividends', 'Budget for next year'], answer: 0, explanation: 'IAS 1 lists minimum line items including PPE, inventories, trade receivables, cash, provisions and equity components. Expenses and budgets do not belong on the balance sheet.', difficulty: 'Foundation', topic: 'Presentation', skill: 'IFRS Fundamentals' },
      { question: 'Under the amended IAS 1, entities must disclose:', options: ['Material accounting policies', 'All significant accounting policies regardless of materiality', 'No accounting policies at all', 'Only policies that changed in the year'], answer: 0, explanation: 'The amendment shifted from "significant" to "material" to kill boilerplate. Only policies that could influence users\' decisions are disclosed.', difficulty: 'Intermediate', topic: 'Disclosures', skill: 'IFRS Fundamentals' },
      { question: 'Comparative information under IAS 1 means:', options: ['Prior-period amounts for every amount presented in the current period', 'Only the prior-year profit figure', 'A narrative comparison with competitors', 'Forecasts for the next period'], answer: 0, explanation: 'Every current-period amount needs its prior-period twin so users can see trends. Policy changes and errors restate those comparatives.', difficulty: 'Foundation', topic: 'Comparatives', skill: 'IFRS Fundamentals' },
      { question: 'Expenses in the statement of profit or loss may be presented:', options: ['By nature or by function, whichever is most relevant', 'Only by nature', 'Only by function', 'Alphabetically'], answer: 0, explanation: 'IAS 1 permits nature (salaries, depreciation) or function (cost of sales, admin) — the entity chooses whichever gives the most relevant information.', difficulty: 'Intermediate', topic: 'Presentation', skill: 'IFRS Fundamentals' },
      { question: 'A company reclassifies $500,000 from admin expenses to cost of sales. What must happen to comparatives?', options: ['They must be reclassified too, with disclosure of nature, amount and reason', 'They stay as originally presented', 'They are deleted', 'Only the total profit is restated'], answer: 0, explanation: 'Reclassification must be applied to comparatives with disclosure, otherwise the trend is meaningless and the change looks like a real cost movement.', difficulty: 'Advanced', topic: 'Comparatives', skill: 'IFRS Fundamentals' },
      { question: 'Fair presentation under IAS 1 is achieved by:', options: ['Applying IFRS properly, with additional disclosure when needed for understanding', 'Maximising reported profit', 'Following local tax rules', 'Using only historical cost'], answer: 0, explanation: 'Fair presentation = faithful representation through proper IFRS application, plus extra disclosure when compliance alone is insufficient for users to understand. It is not about maximising profit.', difficulty: 'Advanced', topic: 'Fair Presentation', skill: 'IFRS Fundamentals' }
    ]
  },
  {
    id: 'm07', level: 2, levelTitle: 'IFRS Framework', title: 'IAS 7 — Cash Flow Statement',
    standard: 'IAS 7', tagline: 'Follow the cash: the statement that is hardest to manipulate and easiest to read badly.',
    description: 'IAS 7 requires cash flows to be split into operating, investing and financing activities. You will learn both the direct and indirect methods, the classification choices IFRS allows for interest and dividends, and how to classify any cash flow with confidence.',
    minutes: 20, skills: ['Cash Flow'],
    sections: [
      {
        heading: 'The Three Buckets',
        paragraphs: [
          'Every cash movement goes into exactly one of three activities. Operating: the principal revenue-producing activities — cash from customers, payments to suppliers and employees, tax paid. Investing: acquiring and disposing of long-term assets — buying PPE, selling a subsidiary. Financing: changes in capital structure — issuing shares, borrowing, repaying debt, paying dividends.',
          'The classification is not decorative: it answers the three questions lenders and investors ask. Can the business generate cash from its core operations? Is it investing for the future? How is it funded? A company with strong operating cash flow funding its own investment needs no external finance; one whose operating cash flow cannot cover dividends is borrowing to pay shareholders — a warning sign.'
        ],
        callout: { type: 'key', text: 'Operating = running the business. Investing = buying/selling long-term assets. Financing = debt and equity. Ask "why did the cash move?" and the bucket usually answers itself.' },
        table: { headers: ['Cash flow', 'Activity', 'Why'], rows: [['Payment to supplier', 'Operating', 'Core trading cost'], ['Purchase of equipment', 'Investing', 'Long-term asset acquired'], ['Loan proceeds received', 'Financing', 'Change in borrowings'], ['Dividend received', 'Operating or investing (choice)', 'IAS 7 permits either, with disclosure']] }
      },
      {
        heading: 'Direct vs Indirect Method',
        paragraphs: [
          'The operating section can be presented two ways. The direct method shows gross cash receipts and payments: cash received from customers $X, cash paid to suppliers $Y. The indirect method starts from profit and adjusts: add back non-cash expenses (depreciation, amortisation, provisions), then adjust for working capital changes (receivables up = subtract; payables up = add).',
          'IAS 7 encourages the direct method because it shows where cash came from and went — more useful for forecasting. In practice almost everyone uses the indirect method because it reconciles profit to cash, directly answering "why is profit not cash?" Know both: exams test the indirect method\'s adjustments relentlessly, and analysts prefer the direct method\'s transparency.'
        ],
        callout: { type: 'example', text: 'Indirect method mini-reconciliation: Profit $100,000 + depreciation $20,000 (non-cash) − increase in receivables $30,000 + increase in payables $10,000 = operating cash flow $100,000. Each adjustment converts one accrual item back to its cash effect.' },
        steps: ['Start with profit before tax (or net profit, depending on presentation).', 'Add back non-cash expenses: depreciation, amortisation, impairment, provisions.', 'Adjust for working capital: receivables/inventory up = subtract; payables up = add.', 'Deduct interest and tax paid (if shown in operating) to reach net operating cash flow.']
      },
      {
        heading: 'The Interest and Dividend Choices',
        paragraphs: [
          'Here IFRS differs sharply from US GAAP. Interest paid may be classified as operating or financing — financing reflects that interest is a cost of obtaining funds. Interest and dividends received may be operating or investing. Dividends paid are normally financing (a return on capital), though some argue operating. Whatever is chosen must be applied consistently and disclosed.',
          'This choice moves numbers between sections and changes reported operating cash flow — the metric many covenants and valuations use. When comparing two companies, always check the accounting policy note: one company\'s "operating cash flow" may include interest paid while another\'s excludes it. Analysts often restate to a common basis before comparing.'
        ],
        callout: { type: 'warning', text: 'Never compare operating cash flow across companies without checking the interest/dividend classification policy. A company classifying interest paid as financing will show higher operating cash flow than an identical one classifying it as operating — same economics, different bucket.' }
      },
      {
        heading: 'Classification Drill: Six Cash Flows',
        paragraphs: [
          'Apply the framework to the required set. Payment to a supplier: operating — it is a core trading cash outflow. Interest payment: operating or financing at the entity\'s consistent choice (disclosed). Loan proceeds received: financing — new borrowing changes capital structure. Purchase of equipment: investing — a long-term asset acquired.',
          'Dividend received: operating or investing at the entity\'s choice (investing is common, reflecting a return on investment). Tax payment: normally operating — taxes arise from operations; only when specifically identifiable with investing or financing is another bucket used. Work through each with "why did the cash move?" and classification becomes a habit, not a memory test.'
        ],
        table: { headers: ['Cash flow', 'Classification', 'Note'], rows: [['Payment to supplier', 'Operating', 'Core trading'], ['Interest payment', 'Operating or financing', 'Entity choice, disclosed'], ['Loan proceeds', 'Financing', 'New borrowing'], ['Purchase of equipment', 'Investing', 'PPE acquired'], ['Dividend received', 'Operating or investing', 'Entity choice, disclosed'], ['Tax payment', 'Operating (normally)', 'Arises from operations']] }
      },
      {
        heading: 'Non-Cash Transactions and Reconciliation Discipline',
        paragraphs: [
          'Investing and financing transactions with no cash effect — acquiring PPE via a finance lease, converting debt to equity — are excluded from the cash flow statement but must be disclosed elsewhere. Including them would corrupt the statement\'s purpose: tracking cash.',
          'Finally, the statement must reconcile: opening cash plus net cash flows equals closing cash, and closing cash must agree to the balance sheet. Foreign exchange effects on cash are shown separately. This articulation is a powerful error check — when the cash flow statement does not tie to the balance sheet, something is wrong in the working capital adjustments.'
        ],
        callout: { type: 'interview', text: '"Why is the cash flow statement considered harder to manipulate than the P&L?" Because cash either moved or it did not — accruals, provisions and estimates barely touch it. Aggressive revenue recognition inflates profit but leaves operating cash flow behind, so the divergence itself becomes the red flag.' }
      }
    ],
    mistakes: [
      'Classifying the purchase of equipment as operating — buying long-term assets is investing, always.',
      'Putting loan repayments in operating activities — debt movements are financing.',
      'Forgetting that interest/dividends classification is a choice under IFRS — and failing to check the policy when comparing companies.',
      'Including non-cash transactions (e.g. asset acquired via lease) in the cash flow totals instead of disclosing them separately.',
      'Sign errors in the indirect method: increases in receivables/inventory are subtracted; increases in payables are added.',
      'Treating tax paid as investing or financing by default — it is normally operating.'
    ],
    interviewQA: [
      { q: 'Walk me through the indirect method from profit to operating cash flow.', a: 'Start with profit before tax. Add back non-cash charges — depreciation, amortisation, impairment losses, provisions — because they reduced profit without using cash. Then adjust for working capital: subtract increases in receivables and inventory (profit recognised but cash not yet received, or cash spent), add increases in payables (costs recognised but not yet paid). Finally deduct interest and tax paid if presented in operating. The result is cash generated from operations — the bridge between accrual profit and cash reality.' },
      { q: 'Where can interest paid appear under IFRS, and why does it matter?', a: 'IAS 7 allows interest paid to be classified as operating or financing, applied consistently and disclosed — unlike US GAAP, which forces it into operating. It matters because operating cash flow feeds covenants, valuations and management bonuses. A company classifying interest as financing reports higher operating cash flow than an identical peer choosing operating, so analysts must check the policy note before comparing.' },
      { q: 'A company buys a machine for $500,000, paying $200,000 cash and financing $300,000 with a loan from the vendor. How is this shown?', a: 'Only the $200,000 cash paid appears in the cash flow statement, as an investing outflow. The $300,000 vendor financing is a non-cash investing and financing transaction — excluded from the statement totals but disclosed in the notes. When the loan is later repaid in cash, those repayments appear as financing outflows.' }
    ],
    quiz: [
      { question: 'Payment to a supplier for inventory is classified as:', options: ['Operating cash outflow', 'Investing cash outflow', 'Financing cash outflow', 'Not shown — it is non-cash'], answer: 0, explanation: 'Supplier payments are core trading cash flows: operating activities.', difficulty: 'Foundation', topic: 'Classification', skill: 'Cash Flow' },
      { question: 'Proceeds from a new bank loan are classified as:', options: ['Financing cash inflow', 'Operating cash inflow', 'Investing cash inflow', 'Other comprehensive income'], answer: 0, explanation: 'Borrowing changes the capital structure — a financing activity.', difficulty: 'Foundation', topic: 'Classification', skill: 'Cash Flow' },
      { question: 'Purchase of equipment for cash is classified as:', options: ['Investing cash outflow', 'Operating cash outflow', 'Financing cash outflow', 'An expense in operating activities'], answer: 0, explanation: 'Acquiring long-term assets is investing. It is capitalised on the balance sheet, not expensed.', difficulty: 'Foundation', topic: 'Classification', skill: 'Cash Flow' },
      { question: 'Under IFRS, interest paid may be classified as:', options: ['Operating or financing, applied consistently and disclosed', 'Only operating', 'Only financing', 'Only investing'], answer: 0, explanation: 'IAS 7 permits the choice for interest paid (and dividends received), unlike US GAAP. Consistency and disclosure are required.', difficulty: 'Intermediate', topic: 'Classification Choices', skill: 'Cash Flow' },
      { question: 'Dividends received may be classified under IFRS as:', options: ['Operating or investing, applied consistently and disclosed', 'Only financing', 'Only operating', 'They are not shown in the cash flow statement'], answer: 0, explanation: 'IAS 7 allows dividends received in operating or investing — investing is common since they are returns on investments.', difficulty: 'Intermediate', topic: 'Classification Choices', skill: 'Cash Flow' },
      { question: 'In the indirect method, an increase in trade receivables of $30,000 is:', options: ['Subtracted from profit', 'Added to profit', 'Ignored — receivables are non-cash', 'Shown in investing activities'], answer: 0, explanation: 'Higher receivables mean revenue recognised without cash received, so the increase is deducted to convert profit toward cash.', difficulty: 'Intermediate', topic: 'Indirect Method', skill: 'Cash Flow' },
      { question: 'In the indirect method, depreciation of $20,000 is:', options: ['Added back to profit', 'Subtracted from profit', 'Shown as an investing outflow', 'Ignored because it is an estimate'], answer: 0, explanation: 'Depreciation reduced profit but used no cash, so it is added back to arrive at cash generated.', difficulty: 'Foundation', topic: 'Indirect Method', skill: 'Cash Flow' },
      { question: 'Tax paid is normally classified as:', options: ['Operating cash outflow', 'Investing cash outflow', 'Financing cash outflow', 'It is netted against profit and not shown'], answer: 0, explanation: 'Taxes normally arise from operations, so tax paid is operating — unless specifically identifiable with an investing or financing transaction.', difficulty: 'Intermediate', topic: 'Classification', skill: 'Cash Flow' },
      { question: 'A machine acquired entirely through a new finance lease (no cash paid) is:', options: ['Excluded from cash flow totals but disclosed as a non-cash transaction', 'Shown as an investing outflow at fair value', 'Shown as a financing inflow', 'Ignored completely with no disclosure'], answer: 0, explanation: 'Non-cash investing/financing transactions are excluded from the statement but must be disclosed so users see the full investment picture.', difficulty: 'Advanced', topic: 'Non-Cash Transactions', skill: 'Cash Flow' }
    ]
  },
  {
    id: 'm08', level: 2, levelTitle: 'IFRS Framework', title: 'IAS 8 — Accounting Policies and Errors',
    standard: 'IAS 8', tagline: 'Changed your mind, changed your estimate, or just wrong? Each gets a different fix.',
    description: 'IAS 8 draws the lines that keep financial history honest: voluntary policy changes apply retrospectively, estimate changes apply prospectively, and prior-period errors require restating comparatives. You will learn to classify any change and account for it correctly.',
    minutes: 16, skills: ['IFRS Fundamentals'],
    sections: [
      {
        heading: 'Three Different Things',
        paragraphs: [
          'IAS 8 deals with three distinct events that are constantly confused. A change in accounting policy: switching from one acceptable treatment to another, e.g. moving from cost model to revaluation model for PPE, or changing inventory costing from weighted average to FIFO. A change in accounting estimate: revising a measurement assumption because of new information, e.g. extending an asset\'s useful life or changing a warranty provision percentage. A prior-period error: a mistake — mathematical errors, misapplied policies, overlooked facts that existed.',
          'The distinction drives everything that follows. Policies look backward (restate history as if always applied); estimates look forward (apply from now on); errors require history to be corrected (restate comparatives). Misclassifying an error as an "estimate change" is a classic earnings-management trick — and auditors are trained to spot it.'
        ],
        callout: { type: 'key', text: 'Policy change → retrospective. Estimate change → prospective. Error → restate comparatives. Three words that answer most IAS 8 exam questions.' },
        table: { headers: ['Event', 'Example', 'Treatment'], rows: [['Policy change', 'Weighted average → FIFO', 'Retrospective'], ['Estimate change', 'Useful life 5 → 8 years', 'Prospective'], ['Prior-period error', 'Forgot to accrue $50k expense', 'Restate comparatives']] }
      },
      {
        heading: 'Policy Changes: Retrospective Application',
        paragraphs: [
          'A voluntary policy change is permitted only if it results in more relevant and reliable information. When made, it is applied retrospectively: restate comparatives as if the new policy had always been applied, and adjust opening retained earnings of the earliest period presented for the cumulative effect.',
          'Example: switching inventory from weighted average to FIFO when it better reflects the flow of goods. The prior-year balance sheet, P&L and retained earnings are all restated. The notes disclose the nature of the change, why the new policy is better, and the effect on each line item. Retrospective application preserves trend comparability — the whole point of IAS 8.'
        ],
        journal: { transaction: 'Retrospective effect of a voluntary policy change increasing prior-year profit by $60,000 (cumulative).', lines: [{ account: 'Inventory', dr: 60000, cr: null }, { account: 'Retained Earnings (opening restated)', dr: null, cr: 60000 }], narration: 'Cumulative effect of change from weighted average to FIFO' },
        impact: { pl: 'Prior-year comparatives restated; current-year P&L unaffected by the catch-up.', bs: 'Comparative assets/equity restated; opening retained earnings adjusted.', cf: 'No cash effect — a pure accounting restatement.' },
        callout: { type: 'warning', text: 'Retrospective does not mean restating every year since the company was founded — only the comparative periods presented, with the cumulative pre-comparative effect in opening retained earnings.' }
      },
      {
        heading: 'Estimate Changes: Prospective Application',
        paragraphs: [
          'Estimates are revised constantly as new information arrives — that is normal, not an error. A change in estimate is applied prospectively: adjust the current period and future periods, never restate the past. If a machine\'s remaining useful life is revised from 3 to 6 years, depreciation is simply recalculated over the new remaining life from now on.',
          'The logic: the old estimate was reasonable given what was known then. Restating history would rewrite decisions made in good faith. The notes disclose the nature and effect of the change. Examiners love the boundary case: is extending useful life an estimate change (yes — new information about usage) or an error (only if the original life was based on a clear mistake or misuse of facts available at the time)?'
        ],
        callout: { type: 'example', text: 'Machine cost $120,000, 2 years of a 5-year life used, carrying amount $72,000. Remaining life revised from 3 to 6 years → new annual depreciation $72,000 ÷ 6 = $12,000 (was $24,000). Applied prospectively from the revision date; prior years untouched.' }
      },
      {
        heading: 'Errors: Restate the Comparatives',
        paragraphs: [
          'Prior-period errors — mathematical mistakes, mistakes in applying policies, oversights or misinterpretations of facts that existed when the statements were authorised — are corrected retrospectively by restating the comparative amounts. The opening balances of the earliest presented period are corrected, and if the error predates that, opening retained earnings absorbs it.',
          'Disclosure is extensive: the nature of the error, the correction for each line item and prior period, and the effect on basic/diluted EPS. This transparency is the price of rewriting history — users must see exactly what changed and why. A "prior year adjustment" that quietly appears without this disclosure is a red flag for analysts.'
        ],
        journal: { transaction: 'Correction of prior-year error: $50,000 of December expenses were omitted from last year\'s statements.', lines: [{ account: 'Retained Earnings (opening restated)', dr: 50000, cr: null }, { account: 'Accrued Expenses', dr: null, cr: 50000 }], narration: 'Correction of prior-period error — omitted accrual' },
        impact: { pl: 'Comparative P&L restated (expenses +$50,000); current-year P&L shows no catch-up.', bs: 'Comparative liabilities +$50,000; opening retained earnings −$50,000.', cf: 'No cash effect in either period from the correction itself.' }
      },
      {
        heading: 'The Classification Test',
        paragraphs: [
          'When faced with any change, run this decision tree. First: was it a mistake given facts available at the time? If yes — error, restate. Second: is it a switch between acceptable accounting treatments? If yes — policy change, retrospective (only if more relevant/reliable). Third: is it new information changing a measurement? If yes — estimate change, prospective.',
          'The impracticability escape hatch: retrospective application is required unless impracticable — meaning it cannot be done after making every reasonable effort (e.g. data no longer exists). "Difficult" or "expensive" is not impracticable. When impracticable, apply from the earliest date feasible and disclose why.'
        ],
        steps: ['Was it wrong based on facts available at the time? → Error → restate comparatives.', 'Is it a switch of acceptable treatment? → Policy change → retrospective (if more relevant).', 'Is it new information revising a measurement? → Estimate change → prospective.', 'Retrospective impracticable? Apply from earliest feasible date and disclose why.'],
        callout: { type: 'interview', text: '"Management wants to extend asset lives to boost profit — policy or estimate?" Estimate change, applied prospectively. Then the follow-up: "How would you audit it?" I would challenge the new information justifying the change, check for bias (does it always flatter profit?), and verify disclosure. Repeated "estimate refinements" that always increase profit are an earnings-management signal.' }
      }
    ],
    mistakes: [
      'Treating a prior-period error as a change in estimate to avoid restating comparatives — auditors specifically test this boundary.',
      'Applying policy changes prospectively — voluntary policy changes are retrospective, restating comparatives.',
      'Restating past periods for an estimate change — new information applies from now on, never backward.',
      'Changing policies voluntarily without the "more relevant and reliable" justification — IAS 8 permits it only then.',
      'Burying error corrections without the required disclosures of nature and line-item effects.',
      'Claiming retrospective application is "impracticable" merely because it is difficult or costly.'
    ],
    interviewQA: [
      { q: 'Distinguish a change in accounting policy, a change in estimate, and a prior-period error.', a: 'A policy change switches between acceptable treatments — e.g. weighted average to FIFO — and applies retrospectively with restated comparatives, permitted only if it gives more relevant, reliable information. An estimate change revises a measurement for new information — e.g. extending useful life — and applies prospectively only. A prior-period error is a mistake given facts available at the time — e.g. an omitted accrual — corrected by restating comparatives with full disclosure of the nature and effects.' },
      { q: 'A company discovers it failed to depreciate a building for the last two years. How is this corrected?', a: 'This is a prior-period error, not an estimate change — depreciation was required and omitted. The company restates the comparative statements: catch-up depreciation reduces comparative profit, accumulated depreciation rises, and opening retained earnings of the earliest presented period absorbs the pre-comparative effect. The notes disclose the nature of the error and its effect on each line item. Current-year profit shows only current-year depreciation, not the catch-up.' },
      { q: 'When is retrospective application not required?', a: 'When it is impracticable — defined narrowly as impossible after every reasonable effort, for example because the historical data needed no longer exists and cannot be reconstructed. Mere difficulty or cost does not qualify. In that case the new policy or correction is applied from the earliest date practicable, with disclosure of why full retrospective application was impracticable.' }
    ],
    quiz: [
      { question: 'A voluntary change in accounting policy is applied:', options: ['Retrospectively, restating comparatives', 'Prospectively from the change date', 'Only in the notes, without restatement', 'By adjusting current-year profit only'], answer: 0, explanation: 'Policy changes apply retrospectively: comparatives are restated as if the new policy had always applied, preserving trend comparability.', difficulty: 'Foundation', topic: 'Policy Changes', skill: 'IFRS Fundamentals' },
      { question: 'A change in accounting estimate (e.g. longer useful life) is applied:', options: ['Prospectively, affecting current and future periods only', 'Retrospectively, restating all prior periods', 'By restating opening retained earnings only', 'It cannot be changed once set'], answer: 0, explanation: 'Estimates reflect new information; the old estimate was reasonable when made, so only current and future periods change.', difficulty: 'Foundation', topic: 'Estimate Changes', skill: 'IFRS Fundamentals' },
      { question: 'A prior-period error is corrected by:', options: ['Restating the comparative amounts', 'Booking the catch-up in current-year profit', 'Disclosing it without changing any numbers', 'Adjusting next year\'s budget'], answer: 0, explanation: 'Errors require restating comparatives so history is corrected; the current-year P&L must not absorb the catch-up.', difficulty: 'Foundation', topic: 'Errors', skill: 'IFRS Fundamentals' },
      { question: 'Switching inventory costing from weighted average to FIFO because it better reflects physical flow is a:', options: ['Change in accounting policy', 'Change in accounting estimate', 'Prior-period error', 'Non-adjusting event'], answer: 0, explanation: 'Switching between acceptable treatments is a policy change — retrospective, and permitted only if it yields more relevant, reliable information.', difficulty: 'Intermediate', topic: 'Classification', skill: 'IFRS Fundamentals' },
      { question: 'Revising a warranty provision from 2% to 3% of sales based on new claims data is a:', options: ['Change in accounting estimate', 'Change in accounting policy', 'Prior-period error', 'Contingent liability'], answer: 0, explanation: 'New information revising a measurement assumption is an estimate change — prospective application.', difficulty: 'Intermediate', topic: 'Classification', skill: 'IFRS Fundamentals' },
      { question: 'Discovering that last year\'s statements omitted a $50,000 accrual is a:', options: ['Prior-period error', 'Change in accounting estimate', 'Change in accounting policy', 'Adjusting event after the reporting period'], answer: 0, explanation: 'An omission of facts that existed at the time is an error — comparatives are restated, not the current year.', difficulty: 'Intermediate', topic: 'Classification', skill: 'IFRS Fundamentals' },
      { question: 'Machine: cost $120,000, carrying amount $72,000 after 2 years of a 5-year life. Remaining life is revised from 3 to 6 years. New annual depreciation?', options: ['$12,000', '$24,000', '$20,000', '$8,000'], answer: 0, explanation: '$72,000 ÷ 6 years = $12,000 per year, applied prospectively. The $24,000 was the old charge; $20,000 ignores the 2 years already depreciated.', difficulty: 'Advanced', topic: 'Estimate Changes', skill: 'IFRS Fundamentals' },
      { question: 'A voluntary policy change is permitted only when:', options: ['It results in more relevant and reliable information', 'Management prefers the new method', 'It increases reported profit', 'The auditor suggests it'], answer: 0, explanation: 'IAS 8 allows voluntary changes only if the new policy gives more relevant and reliable information — preference or profit motives do not qualify.', difficulty: 'Intermediate', topic: 'Policy Changes', skill: 'IFRS Fundamentals' },
      { question: 'Retrospective application is excused only when it is:', options: ['Impracticable after every reasonable effort', 'Expensive to perform', 'Time-consuming for the finance team', 'Likely to confuse investors'], answer: 0, explanation: 'Impracticable means impossible after all reasonable efforts — not merely difficult or costly. Then apply from the earliest feasible date with disclosure.', difficulty: 'Advanced', topic: 'Impracticability', skill: 'IFRS Fundamentals' }
    ]
  },
  {
    id: 'm09', level: 2, levelTitle: 'IFRS Framework', title: 'IAS 10 — Events After the Reporting Period',
    standard: 'IAS 10', tagline: 'The year is closed — but the world kept moving. Which post-year-end events rewrite the numbers?',
    description: 'IAS 10 governs events between the reporting date and authorisation of the statements. You will learn the adjusting vs non-adjusting test, work through the classic cases — customer bankruptcy, post-year-end fire, declared dividends — and see the disclosure each requires.',
    minutes: 15, skills: ['IFRS Fundamentals'],
    sections: [
      {
        heading: 'The Window and the Test',
        paragraphs: [
          'Events after the reporting period are those occurring between the reporting date (e.g. 31 December) and the date the statements are authorised for issue (e.g. 15 March). IAS 10 asks one question about each: does it provide evidence of conditions that existed at the reporting date? If yes — adjusting event: update the numbers. If it indicates conditions arising after the reporting date — non-adjusting: do not change the numbers, but disclose if material.',
          'The test is about conditions, not timing of knowledge. Learning in February that a customer was already insolvent at 31 December adjusts the statements; a fire in February that destroys a warehouse does not — the warehouse existed intact at year-end. Get the condition timing right and the classification follows.'
        ],
        callout: { type: 'key', text: 'The single test: did the event reveal conditions existing AT the reporting date? Yes → adjust the numbers. No → disclose if material, but leave the numbers alone.' },
        table: { headers: ['Event', 'Conditions at reporting date?', 'Treatment'], rows: [['Customer bankruptcy (insolvent at year-end)', 'Yes', 'Adjusting — impair receivable'], ['Fire destroys warehouse after year-end', 'No', 'Non-adjusting — disclose'], ['Dividends declared after reporting date', 'No', 'Non-adjusting — disclose'], ['Fraud discovered, existed at year-end', 'Yes', 'Adjusting — correct statements']] }
      },
      {
        heading: 'Adjusting Events: Rewrite the Numbers',
        paragraphs: [
          'Classic adjusting events: the bankruptcy of a customer confirming the receivable was impaired at year-end; the settlement of litigation confirming the provision amount; the discovery of fraud or errors showing the statements were incorrect; the determination of asset costs or sale proceeds (e.g. inventory sold after year-end below cost, confirming NRV at year-end).',
          'Take the customer bankruptcy: at 31 December the company carried a $200,000 receivable. In February the customer is liquidated, and evidence shows it was already insolvent at year-end. The statements are adjusted: Dr Impairment Loss $200,000, Cr Allowance for Doubtful Debts $200,000. The balance sheet now shows the economic reality that existed at the reporting date.'
        ],
        journal: { transaction: 'Customer owing $200,000 is liquidated in February; evidence shows insolvency existed at 31 December.', lines: [{ account: 'Impairment Loss (P&L)', dr: 200000, cr: null }, { account: 'Allowance for Doubtful Debts', dr: null, cr: 200000 }], narration: 'Adjusting event — receivable impaired at reporting date' },
        impact: { pl: 'Impairment loss $200,000 recognised in the reporting period.', bs: 'Receivables (net) −$200,000; retained earnings −$200,000.', cf: 'No cash effect.' },
        callout: { type: 'warning', text: 'Bankruptcy is adjusting ONLY if conditions existed at the reporting date. If the customer was healthy at year-end and failed later due to a post-year-end event, it is non-adjusting — disclose, do not impair.' }
      },
      {
        heading: 'Non-Adjusting Events: Disclose, Don\'t Adjust',
        paragraphs: [
          'Non-adjusting events reflect new conditions: a fire destroying a plant in February, a major acquisition or disposal announced in January, foreign exchange upheavals, or a restructuring announced after year-end. The year-end numbers stand — the warehouse genuinely existed at 31 December — but if the event is material, IAS 10 requires disclosure of its nature and an estimate of its financial effect.',
          'Dividends declared after the reporting date are the textbook case: IAS 10 explicitly states they are non-adjusting. No liability is recognised at year-end for dividends declared in January — the obligation did not exist at 31 December. The amount is disclosed in the notes instead. This surprises beginners who expect declared dividends to hit the balance sheet immediately.'
        ],
        callout: { type: 'example', text: 'Fire on 10 February destroys a warehouse carried at $1.5 million. Non-adjusting: the 31 December balance sheet still shows the warehouse. The notes disclose the fire, the carrying amount lost, and whether insurance is expected to cover it — material information for users, without rewriting history.' }
      },
      {
        heading: 'Going Concern: The Event That Overrides Everything',
        paragraphs: [
          'One post-year-end development changes the entire basis of preparation: if events after the reporting period indicate the going-concern assumption is no longer appropriate — say, the company\'s only customer cancels in January and no replacement exists — the statements must NOT be prepared on a going concern basis, even though the reporting date has passed.',
          'This is effectively an adjusting event of the highest order: assets are written down to liquidation values and the basis is disclosed. IAS 10 is explicit because the alternative — issuing going-concern statements for a dying company — would be actively misleading. Auditors treat post-year-end going-concern indicators as a critical review area.'
        ],
        callout: { type: 'interview', text: '"A major customer representing 80% of revenue goes bankrupt in February, before authorisation. Adjusting or non-adjusting?" The bankruptcy itself may be non-adjusting (conditions arose after year-end), BUT if it destroys going concern, the statements must be prepared on a non-going-concern basis. Always check the going-concern implication separately — it overrides the normal classification.' }
      }
    ],
    mistakes: [
      'Adjusting for a post-year-end fire — new conditions after the reporting date are non-adjusting; disclose, don\'t rewrite.',
      'Recognising a liability for dividends declared after the reporting date — IAS 10 explicitly prohibits this; disclose only.',
      'Treating every customer bankruptcy as adjusting — only if insolvency conditions existed at the reporting date.',
      'Forgetting the going-concern override: a post-year-end event killing going concern changes the whole basis of preparation.',
      'Disclosing non-adjusting events without quantifying the financial effect (or stating why it cannot be estimated).',
      'Adjusting the numbers for a non-adjusting event just because it is material — materiality drives disclosure, not adjustment.'
    ],
    interviewQA: [
      { q: 'A customer owing $200,000 goes bankrupt in February, before the statements are authorised. Adjusting or not?', a: 'It depends on conditions at the reporting date. If evidence shows the customer was already insolvent at 31 December, it is adjusting: recognise the impairment in the reporting period. If the customer was healthy at year-end and failed due to post-year-end events, it is non-adjusting: disclose the bankruptcy and its estimated effect, but do not impair the year-end receivable. The question to ask is always "what did we know, or what existed, at the reporting date?"' },
      { q: 'Why are dividends declared after the reporting date not recognised as a liability?', a: 'Because at the reporting date no obligation existed — the board had not yet declared them. IAS 10 explicitly classifies post-reporting-date dividend declarations as non-adjusting events. Recognising a liability would rewrite history to show an obligation that did not exist. Instead, the dividend amount is disclosed in the notes so users can factor it into their decisions.' },
      { q: 'What must happen if post-year-end events cast significant doubt on going concern?', a: 'The financial statements must not be prepared on a going concern basis — this overrides the normal adjusting/non-adjusting analysis. Assets and liabilities are measured on the applicable alternative basis (e.g. liquidation values), and the basis, the reasons, and the uncertainties are disclosed. It is the one post-year-end event that rewrites the entire foundation of the statements.' }
    ],
    quiz: [
      { question: 'Events after the reporting period are those occurring between:', options: ['The reporting date and the date the statements are authorised for issue', 'The reporting date and the next reporting date', 'Authorisation and the AGM', 'The audit start and audit end dates'], answer: 0, explanation: 'IAS 10 defines the window as reporting date to authorisation date. Events after authorisation are outside its scope.', difficulty: 'Foundation', topic: 'Scope', skill: 'IFRS Fundamentals' },
      { question: 'The test distinguishing adjusting from non-adjusting events is:', options: ['Whether the event evidences conditions existing at the reporting date', 'Whether the event is favourable or unfavourable', 'Whether the amount exceeds materiality', 'Whether the auditor discovered it'], answer: 0, explanation: 'Conditions at the reporting date → adjusting. New conditions arising after → non-adjusting (disclose if material). Favourability and size do not decide.', difficulty: 'Foundation', topic: 'Classification', skill: 'IFRS Fundamentals' },
      { question: 'A customer is liquidated in February; evidence shows insolvency existed at 31 December. Treatment?', options: ['Adjusting — impair the receivable in the reporting period', 'Non-adjusting — disclose only', 'Ignore — the bankruptcy happened next year', 'Adjusting — but only in the cash flow statement'], answer: 0, explanation: 'The conditions existed at the reporting date, so the statements are adjusted to reflect the impaired receivable.', difficulty: 'Intermediate', topic: 'Adjusting Events', skill: 'IFRS Fundamentals' },
      { question: 'A fire destroys a warehouse in February, after a 31 December year-end. Treatment?', options: ['Non-adjusting — disclose nature and estimated financial effect', 'Adjusting — remove the warehouse from the year-end balance sheet', 'Adjusting — recognise the insurance claim as an asset', 'No action required at all'], answer: 0, explanation: 'The fire reflects new conditions after the reporting date. The year-end numbers stand; material details are disclosed.', difficulty: 'Intermediate', topic: 'Non-Adjusting Events', skill: 'IFRS Fundamentals' },
      { question: 'Dividends declared by the board in January for a 31 December year-end are:', options: ['Non-adjusting — disclosed, not recognised as a liability', 'Adjusting — recognised as a liability at year-end', 'Recognised directly in equity at year-end', 'Ignored entirely'], answer: 0, explanation: 'IAS 10 explicitly states post-reporting-date dividend declarations are non-adjusting: no obligation existed at the reporting date.', difficulty: 'Intermediate', topic: 'Dividends', skill: 'IFRS Fundamentals' },
      { question: 'Inventory carried at cost $100,000 is sold in January for $70,000, confirming its NRV at year-end was $70,000. Treatment?', options: ['Adjusting — write inventory down to $70,000 at year-end', 'Non-adjusting — the sale happened next year', 'Adjusting — recognise a $30,000 gain', 'Disclose only, keep at $100,000'], answer: 0, explanation: 'The sale provides evidence of conditions (NRV) existing at the reporting date — a classic adjusting event under IAS 10.', difficulty: 'Advanced', topic: 'Adjusting Events', skill: 'IFRS Fundamentals' },
      { question: 'Post-year-end events reveal the going-concern basis is no longer appropriate. The entity must:', options: ['Prepare statements on an alternative basis (not going concern) with disclosure', 'Still use going concern because the year has ended', 'Delay authorisation indefinitely', 'Issue the statements without any mention'], answer: 0, explanation: 'IAS 10 requires abandoning the going-concern basis in this case — it overrides normal classification, with full disclosure.', difficulty: 'Advanced', topic: 'Going Concern', skill: 'IFRS Fundamentals' },
      { question: 'For a material non-adjusting event, IAS 10 requires disclosure of:', options: ['Its nature and an estimate of its financial effect (or a statement that it cannot be estimated)', 'Only its nature, never amounts', 'A full restatement of the primary statements', 'Nothing — non-adjusting means no disclosure'], answer: 0, explanation: 'Material non-adjusting events require disclosure of nature plus estimated financial effect, or an explicit statement that estimation is impossible.', difficulty: 'Intermediate', topic: 'Disclosure', skill: 'IFRS Fundamentals' },
      { question: 'Settlement of litigation in February confirms a provision recognised at year-end was $50,000 too low. Treatment?', options: ['Adjusting — increase the provision in the reporting period', 'Non-adjusting — book the extra $50,000 next year', 'Non-adjusting — provisions cannot be changed', 'Adjusting — but disclose only'], answer: 0, explanation: 'The settlement evidences the obligation\'s true amount at the reporting date — adjusting. The year-end provision is corrected.', difficulty: 'Advanced', topic: 'Adjusting Events', skill: 'IFRS Fundamentals' }
    ]
  }
];
