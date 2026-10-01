export default [
  {
    id: 'm15', level: 4, levelTitle: 'Liabilities and Complex Accounting', title: 'IFRS 16 — Leases',
    standard: 'IFRS 16', tagline: 'Rent is no longer just rent — most leases are now debt plus an asset on your balance sheet.',
    description: 'IFRS 16 ended the era of off-balance-sheet operating leases. Lessees now recognize a right-of-use asset and a lease liability for almost every lease, which reshapes EBITDA, leverage, and cash flow presentation. This module works through a full 3-year lease example from initial recognition to the final payment.',
    minutes: 30, skills: ['Leases'],
    visuals: ['lease-timeline'],
    sections: [
      {
        heading: 'Why IFRS 16 Exists',
        paragraphs: [
          'Under the old IAS 17, leases were split into finance leases (on the balance sheet) and operating leases (off the balance sheet, disclosed only in the notes). Airlines, retailers, and logistics companies carried enormous operating lease commitments — fleets of aircraft, hundreds of stores — that never appeared as debt. Analysts had to capitalize them manually to compare companies, and everyone did it differently.',
          'IFRS 16, effective for periods beginning on or after 1 January 2019, killed that distinction for lessees. The logic is simple: if you control an asset for years and owe contractual payments, you have both an asset and a liability, regardless of what the contract is called. Lessor accounting barely changed — lessors still classify leases as operating or finance.',
          'For finance professionals this matters because it rewrote the most-watched metrics overnight: reported debt jumped, EBITDA rose (rent expense disappeared), and operating cash flow improved while financing cash flow fell. Understanding this reshuffle is essential for reading any post-2019 set of accounts.'
        ],
        bullets: [
          'IAS 17: operating leases were off-balance-sheet — a major source of hidden leverage.',
          'IFRS 16: lessees recognize a right-of-use (ROU) asset and a lease liability for almost all leases.',
          'Lessor accounting is largely unchanged (operating vs finance lease distinction remains).',
          'Exemptions exist only for short-term leases and low-value assets.'
        ],
        callout: { type: 'key', text: 'IFRS 16 core model: at commencement, the lessee recognizes an asset representing the right to use the underlying asset and a liability representing the obligation to make lease payments — measured at the present value of those payments.' }
      },
      {
        heading: 'Identifying a Lease',
        paragraphs: [
          'Before measuring anything, you must decide whether a contract contains a lease — and this is where real-world judgment lives. Many service contracts (logistics, IT outsourcing, advertising space) bundle the use of an asset with services, and only the lease component gets IFRS 16 treatment.',
          'A contract is or contains a lease if it conveys the right to control the use of an identified asset for a period of time in exchange for consideration. Control means two things together: the right to obtain substantially all of the economic benefits from use of the asset, and the right to direct how and for what purpose the asset is used.'
        ],
        steps: [
          'Step 1 — Is there an identified asset? It must be explicitly or implicitly specified, and the supplier must not have a substantive right to substitute it during the period.',
          'Step 2 — Does the customer get substantially all economic benefits from the asset (e.g., exclusive use of the truck, the floor of the building)?',
          'Step 3 — Can the customer direct how and for what purpose the asset is used (deciding routes, operating hours, output)? If yes to all three, you have a lease.'
        ],
        callout: { type: 'warning', text: 'Watch for embedded leases inside service contracts. A logistics contract that dedicates specific trucks to your routes can contain a lease even though the word "lease" never appears. Missing these is one of the most common IFRS 16 errors.' }
      },
      {
        heading: 'Initial Recognition: The Big Journal',
        paragraphs: [
          'At the commencement date, the lessee measures the lease liability at the present value of the lease payments not yet paid, discounted using the interest rate implicit in the lease — or, if that cannot be readily determined (the usual case), the lessee\u2019s incremental borrowing rate. The ROU asset starts at the same amount, plus any initial direct costs, prepaid lease payments, and estimated dismantling costs, less any lease incentives received.',
          'Lease payments included in the measurement are: fixed payments (including in-substance fixed payments), variable payments that depend on an index or rate (measured using the index at commencement), amounts expected under residual value guarantees, the exercise price of a purchase option if reasonably certain to be exercised, and termination penalties if the lease term reflects their payment. Variable payments linked to usage or sales (e.g., rent as a percentage of store turnover) are excluded and expensed as incurred.',
          'Worked example: a 3-year lease with annual payments of 50,000 payable at each year-end, discount rate 5%. The present value factor for a 3-year annuity at 5% is 2.7232, so the liability — and the ROU asset — is 50,000 \u00d7 2.7232 = 136,162.'
        ],
        journal: {
          transaction: 'Lease commencement: 3-year lease, 50,000 per year in arrears, discount rate 5%. PV = 136,162.',
          lines: [
            { account: 'ROU Asset', dr: 136162, cr: null },
            { account: 'Lease Liability', dr: null, cr: 136162 }
          ],
          narration: 'Initial recognition of right-of-use asset and lease liability at present value'
        },
        impact: {
          pl: 'No P&L impact at commencement.',
          bs: 'Assets up 136,162 (ROU asset, usually within or alongside PPE); liabilities up 136,162 (split between current and non-current lease liability). Equity unchanged; leverage ratios deteriorate immediately.',
          cf: 'No cash flow impact at commencement (non-cash investing and financing activity, disclosed separately).'
        },
        callout: { type: 'example', text: 'PV check: 50,000/1.05 + 50,000/1.05\u00b2 + 50,000/1.05\u00b3 = 47,619 + 45,351 + 43,192 = 136,162. The liability is simply what those three future payments are worth today.' }
      },
      {
        heading: 'Subsequent Measurement: One Lease, Two Expenses',
        paragraphs: [
          'After commencement, the liability is measured like any amortized-cost debt: it accrues interest at the discount rate and is reduced by payments. The ROU asset is depreciated, normally straight-line over the shorter of the lease term and the asset\u2019s useful life (unless a purchase option makes ownership reasonably certain).',
          'This split is the heart of IFRS 16. A single 50,000 annual lease payment becomes two expenses with different homes in the income statement: depreciation (an operating expense, added back in EBITDA) and interest (a finance cost, below operating profit). Watch the amortization schedule: interest is front-loaded because it is charged on the outstanding liability balance.',
          'Year 1: interest = 136,162 \u00d7 5% = 6,808; the liability falls by 50,000 \u2212 6,808 = 43,192 to 92,970. Depreciation = 136,162 \u00f7 3 = 45,387. Total Year 1 expense = 52,195 — more than the 50,000 cash paid, because the expense profile is front-loaded (it reverses in later years).'
        ],
        table: {
          headers: ['Year', 'Opening liability', 'Interest (5%)', 'Payment', 'Closing liability'],
          rows: [
            ['1', '136,162', '6,808', '(50,000)', '92,970'],
            ['2', '92,970', '4,649', '(50,000)', '47,619'],
            ['3', '47,619', '2,381', '(50,000)', '0'],
            ['Total', '', '13,838', '(150,000)', '']
          ]
        },
        journal: {
          transaction: 'Year 1: accrue interest on the lease liability at 5%.',
          lines: [
            { account: 'Interest Expense (finance cost)', dr: 6808, cr: null },
            { account: 'Lease Liability', dr: null, cr: 6808 }
          ],
          narration: 'Unwinding of discount on lease liability — Year 1'
        },
        impact: {
          pl: 'Finance costs up 6,808 (below operating profit, so EBITDA is unaffected by this line). Net profit in Year 1 is 2,195 lower than under old operating-lease treatment (52,195 vs 50,000) — the front-loading effect.',
          bs: 'Lease liability up 6,808 before the payment is made; equity down 6,808 via retained earnings.',
          cf: 'No cash movement on the interest accrual itself.'
        }
      },
      {
        heading: 'Recording Depreciation and the Cash Payment',
        paragraphs: [
          'The two remaining Year 1 entries complete the picture. Depreciation of the ROU asset runs through operating expenses — 45,387 straight-line — and the 50,000 cash payment simply settles part of the liability. Note carefully: the cash payment is not an expense at all under IFRS 16; the expense was already recognized as depreciation plus interest.',
          'Compare with the old IAS 17 operating lease: a single 50,000 rent expense sitting in operating costs. Under IFRS 16 the same economics produce 45,387 of depreciation plus 6,808 of interest. Total expense is higher in Year 1 (52,195) and lower in Year 3 (45,387 + 2,381 = 47,768) — the front-loading reverses over the lease term, and total expense over the full term equals total cash paid (150,000) in both models.'
        ],
        journal: {
          transaction: 'Year 1: depreciate the ROU asset straight-line over the 3-year term (136,162 / 3).',
          lines: [
            { account: 'Depreciation Expense (ROU asset)', dr: 45387, cr: null },
            { account: 'Accumulated Depreciation — ROU Asset', dr: null, cr: 45387 }
          ],
          narration: 'Straight-line depreciation of right-of-use asset — Year 1'
        },
        impact: {
          pl: 'Operating expenses up 45,387, so operating profit is 4,613 higher than under the old 50,000 rent expense (50,000 \u2212 45,387). Depreciation is added back for EBITDA, so EBITDA is 50,000 higher than before — the entire old rent charge drops out of the EBITDA calculation.',
          bs: 'ROU asset carrying amount falls to 90,775; equity down 45,387 via retained earnings.',
          cf: 'Depreciation is non-cash; no cash flow effect.'
        }
      },
      {
        heading: 'The Cash Payment and the Statement Reshuffle',
        paragraphs: [
          'When the 50,000 is paid, the entry splits the liability: the interest portion (6,808) and the principal portion (43,192). This split drives the famous cash flow reshuffle — under IAS 7, repayment of the principal portion of a lease liability is a financing cash outflow, while interest paid may be presented as operating or financing depending on the company\u2019s policy (most present it consistently with other interest paid).',
          'The net effect across the three statements is why analysts care so much: EBITDA rises because rent expense is replaced by depreciation (added back) and interest (below the EBITDA line); operating profit rises by the rent-minus-depreciation difference; finance costs rise; assets and liabilities both rise, hurting return on assets and debt-to-equity; operating cash flow rises (payments now sit in financing) while financing cash flow falls by the same amount. Total cash flow is unchanged — only the geography moves.',
          'One more consequence: covenants. Loan agreements written before 2019 often defined debt and EBITDA on an IAS 17 basis. IFRS 16 adoption could technically breach debt covenants overnight, which is why many facilities were renegotiated with "frozen GAAP" clauses.'
        ],
        journal: {
          transaction: 'Year 1: pay the annual lease instalment of 50,000 (interest 6,808 + principal 43,192).',
          lines: [
            { account: 'Lease Liability', dr: 50000, cr: null },
            { account: 'Cash', dr: null, cr: 50000 }
          ],
          narration: 'Annual lease payment — Year 1'
        },
        impact: {
          pl: 'No P&L impact — the expense was already recognized as depreciation and interest.',
          bs: 'Lease liability down 50,000 to 92,970; cash down 50,000.',
          cf: 'Operating cash flow is 50,000 higher than under old treatment (no rent in operating activities); financing cash flow is 50,000 lower (principal repayment; interest portion follows the company\u2019s interest-paid policy). Total cash flow unchanged.'
        },
        callout: { type: 'key', text: 'IFRS 16 scoreboard vs IAS 17 operating lease: EBITDA up, operating profit up, finance costs up, net profit slightly down early then up later, assets and liabilities up, operating cash flow up / financing cash flow down. Memorize this pattern — it is the single most-tested IFRS 16 outcome in interviews.' }
      },
      {
        heading: 'Lease Timeline: Events That Change the Numbers',
        paragraphs: [
          'A lease is not "measure once and forget." The liability is remeasured — with a matching adjustment to the ROU asset — when specific events occur: a change in an index or rate used for variable payments (e.g., CPI-linked rent resets), a reassessment of the lease term (an extension option becomes reasonably certain to be exercised, or not), or a change in the assessment of a purchase option. The discount rate is revised only for term or purchase-option reassessments (and floating-rate changes), not for pure index changes.',
          'Modifications that are not separate contracts — such as adding space or changing consideration — also trigger remeasurement. And if the ROU asset would be reduced below zero by an adjustment, the excess goes to profit or loss. The timeline visual for this module maps commencement, each payment date, index reset points, and reassessment triggers across the 3-year example.'
        ],
        steps: [
          'Day 0 (commencement): recognize ROU asset and lease liability at PV of payments (136,162 in our example).',
          'Each year-end: accrue interest at 5%, depreciate the ROU asset, pay 50,000 against the liability.',
          'Index reset (e.g., CPI-linked portion): remeasure the liability with the new payment amounts using the original discount rate; adjust the ROU asset.',
          'Reassessment event (extension option now reasonably certain): remeasure using revised payments AND a revised discount rate.',
          'End of term: liability reaches zero; if the asset is returned, derecognize any remaining ROU carrying amount.'
        ],
        callout: { type: 'warning', text: 'Forgetting to remeasure is a classic audit finding. CPI-linked leases in an inflationary environment can quietly drift far from their recognized liability if nobody monitors the reset dates.' }
      },
      {
        heading: 'Exemptions: Short-Term and Low-Value',
        paragraphs: [
          'IFRS 16 offers two practical expedients that let lessees skip capitalization and simply expense lease payments on a straight-line basis. The short-term exemption applies to leases with a term of 12 months or less at commencement that contain no purchase option — the election is made by class of underlying asset (e.g., all vehicle leases).',
          'The low-value exemption is assessed asset by asset, based on the value of the underlying asset when new, regardless of its age at lease commencement or the lessee\u2019s materiality threshold. The IASB\u2019s Basis for Conclusions mentions around USD 5,000 as a guide — laptops, tablets, small office furniture qualify; cars, property, and most equipment do not. You cannot use it to keep a fleet of vehicles off the balance sheet by arguing each car is "low value to us."'
        ],
        bullets: [
          'Short-term: \u226412 months, no purchase option, elected by class of underlying asset.',
          'Low-value: assessed per asset on its as-new value (guidance \u2248 USD 5,000); no cars, no property.',
          'Both exemptions: recognize payments as an expense, typically straight-line — the old "operating lease" feel survives only here.',
          'Disclosure is still required for the expense recognized under these expedients.'
        ],
        callout: { type: 'interview', text: 'Interviewers love asking why a company cannot apply the low-value exemption to 200 leased laptops each worth 4,000. Answer: it can — the test is per asset, so a large population of individually low-value assets genuinely qualifies. The trap is the reverse: one 40,000 car does not qualify just because it is immaterial to a large group.' }
      },
      {
        heading: 'Presentation and Disclosure',
        paragraphs: [
          'On the balance sheet, the ROU asset is presented either within the same line as owned assets of the same class (e.g., within property, plant and equipment) or as a separate line — but if presented within PPE, the notes must disclose how much relates to ROU assets. The lease liability is split into current and non-current portions.',
          'In profit or loss, depreciation of the ROU asset and interest on the lease liability must be shown separately — interest cannot be buried inside depreciation or vice versa. Disclosures include a maturity analysis of lease liabilities, the expense for short-term and low-value leases, and information that helps users assess the effect of leases: additions to ROU assets, variable payments expensed, and sale-and-leaseback gains or losses.'
        ],
        bullets: [
          'ROU asset: separate line or within the owned-asset class (with note disclosure either way).',
          'Lease liability: split current vs non-current.',
          'P&L: depreciation and interest shown separately.',
          'Notes: maturity analysis, short-term/low-value expense, ROU additions, variable lease payments.'
        ]
      }
    ],
    mistakes: [
      'Using the incremental borrowing rate without first checking whether the rate implicit in the lease is determinable — the implicit rate takes priority.',
      'Including usage- or sales-based variable payments in the initial liability measurement; only index/rate-linked variables are included (at the commencement-date index).',
      'Applying the low-value exemption to cars or property, or judging "low value" against company materiality instead of the asset\u2019s as-new value.',
      'Never remeasuring CPI-linked leases when the index resets, letting the liability drift from reality.',
      'Presenting the full lease payment as an operating cash outflow instead of splitting principal (financing) and interest (per policy).',
      'Missing embedded leases in service, logistics, or outsourcing contracts because the word "lease" never appears.'
    ],
    interviewQA: [
      {
        q: 'How does IFRS 16 change EBITDA, net debt, and leverage ratios compared with IAS 17 operating leases?',
        a: 'EBITDA rises because the operating rent expense is replaced by depreciation, which is added back, and interest, which sits below the EBITDA line — so EBITDA increases by roughly the old rent charge. Net debt rises because the lease liability is now recognized, and assets rise by the ROU asset, so debt-to-equity worsens and ROA falls. Net profit is slightly lower in the early years because interest is front-loaded, then higher later; over the full term total expense equals total cash paid. Operating cash flow improves while financing cash flow deteriorates by the same amount, with total cash flow unchanged.'
      },
      {
        q: 'Walk me through how you identify whether a contract contains a lease.',
        a: 'First I check for an identified asset — explicitly or implicitly specified, with no substantive substitution right for the supplier. Then I ask whether the customer obtains substantially all the economic benefits from the asset, for example through exclusive use. Finally I check whether the customer directs how and for what purpose the asset is used, such as deciding operating schedules or output. All three must hold. This matters because embedded leases hide in logistics, IT, and outsourcing contracts, and missing them is a common and material error.'
      },
      {
        q: 'Why is the expense profile of a lease front-loaded under IFRS 16 even though the cash payments are flat?',
        a: 'Because the two expenses behave differently: depreciation of the ROU asset is straight-line, but interest is charged on the outstanding liability balance, which is largest at the start. In our example Year 1 shows 45,387 of depreciation plus 6,808 of interest = 52,195 against a 50,000 payment, while Year 3 shows 45,387 plus only 2,381 of interest = 47,768. Total expense over the lease equals total cash paid, so the front-loading is purely a timing pattern, not extra cost.'
      }
    ],
    quiz: [
      { question: 'Under IFRS 16, what must a lessee recognize at commencement for most leases?', options: ['Only a lease liability, with rent expensed as paid', 'A finance lease receivable and interest income', 'A right-of-use asset and a lease liability', 'Nothing on the balance sheet — disclosure in the notes only'], answer: 2, explanation: 'The core IFRS 16 model requires lessees to recognize a right-of-use asset and a lease liability for almost all leases, ending the IAS 17 operating-lease off-balance-sheet treatment.', difficulty: 'Foundation', topic: 'Leases', skill: 'Leases' },
      { question: 'Why did the IASB introduce IFRS 16?', options: ['To eliminate the off-balance-sheet treatment of operating leases, which hid significant leverage', 'To simplify lessor accounting', 'To reduce depreciation charges for airlines', 'To align lease terms with tax law'], answer: 0, explanation: 'Operating leases under IAS 17 kept material obligations (aircraft fleets, store portfolios) off the balance sheet. IFRS 16 brings them on so leverage is visible and comparable.', difficulty: 'Intermediate', topic: 'Leases', skill: 'Leases' },
      { question: 'A logistics contract dedicates 10 specific trucks to a customer\u2019s routes, and the customer decides schedules and routes. Does it contain a lease?', options: ['No, because the contract is called a service agreement', 'No, because the customer does not own the trucks', 'Only if the trucks are new', 'Yes — identified assets, substantially all benefits, and the customer directs use'], answer: 3, explanation: 'The label does not matter. There are identified assets with no substantive substitution, the customer gets substantially all economic benefits, and directs how and for what purpose the assets are used — all three lease-identification criteria are met.', difficulty: 'Advanced', topic: 'Leases', skill: 'Leases' },
      { question: 'A 3-year lease has annual payments of 50,000 in arrears and a discount rate of 5%. What is the initial lease liability?', options: ['150,000 (undiscounted total)', '45,387 (one year’s depreciation)', '136,162 (present value of payments)', '50,000 (first payment only)'], answer: 2, explanation: 'The liability is the present value of future payments: 50,000 \u00d7 2.7232 (3-year annuity factor at 5%) = 136,162. Using the undiscounted total would overstate the liability.', difficulty: 'Intermediate', topic: 'Leases', skill: 'Leases' },
      { question: 'Which discount rate should the lessee use if the rate implicit in the lease cannot be readily determined?', options: ['The lessor’s borrowing rate', 'The lessee’s incremental borrowing rate', 'The risk-free rate', 'The weighted average cost of capital'], answer: 1, explanation: 'IFRS 16 prioritizes the rate implicit in the lease; only if it cannot be readily determined does the lessee use its incremental borrowing rate — the rate it would pay to borrow over a similar term with similar security.', difficulty: 'Intermediate', topic: 'Leases', skill: 'Leases' },
      { question: 'Which payments are EXCLUDED from the initial measurement of the lease liability?', options: ['Variable payments based on a percentage of store sales', 'Fixed payments', 'Variable payments linked to a consumer price index', 'In-substance fixed payments'], answer: 0, explanation: 'Sales- or usage-based variable payments are excluded and expensed as incurred because they are not unavoidable. Index-linked variables ARE included, measured at the commencement-date index.', difficulty: 'Advanced', topic: 'Leases', skill: 'Leases' },
      { question: 'In Year 1 of the example (liability 136,162, rate 5%, payment 50,000), what is the interest expense?', options: ['2,500', '45,387', '50,000', '6,808'], answer: 3, explanation: 'Interest = opening liability \u00d7 discount rate = 136,162 \u00d7 5% = 6,808. It is front-loaded because it is charged on the outstanding balance.', difficulty: 'Intermediate', topic: 'Leases', skill: 'Leases' },
      { question: 'What is the Year 1 depreciation of the ROU asset in the example?', options: ['50,000', '45,387 (136,162 ÷ 3, straight-line)', '6,808', '13,838'], answer: 1, explanation: 'The ROU asset of 136,162 is depreciated straight-line over the 3-year lease term: 136,162 \u00f7 3 = 45,387 per year.', difficulty: 'Intermediate', topic: 'Leases', skill: 'Leases' },
      { question: 'Compared with IAS 17 operating-lease treatment, IFRS 16 typically causes EBITDA to:', options: ['Fall, because depreciation is higher', 'Stay exactly the same', 'Rise by the amount of interest expense', 'Rise, because rent expense is replaced by depreciation (added back) and interest (below EBITDA)'], answer: 3, explanation: 'The old rent charge sat in operating expenses and reduced EBITDA. Under IFRS 16 it becomes depreciation (added back in the EBITDA calculation) plus interest (below the operating profit line), so EBITDA rises by approximately the former rent.', difficulty: 'Advanced', topic: 'Leases', skill: 'Leases' },
      { question: 'In the cash flow statement, the principal portion of IFRS 16 lease payments is presented as:', options: ['An operating cash outflow, like rent used to be', 'An investing cash outflow', 'A financing cash outflow', 'It is not shown — it nets against the liability'], answer: 2, explanation: 'Repayment of the lease liability principal is a financing activity. This is why operating cash flow rises and financing cash flow falls on transition, with total cash flow unchanged.', difficulty: 'Intermediate', topic: 'Leases', skill: 'Leases' },
      { question: 'Which lease qualifies for the IFRS 16 recognition exemption?', options: ['A 9-month lease of equipment with no purchase option', 'A 5-year lease of office space', 'A 3-year lease of delivery vans', 'A 10-year lease of retail stores'], answer: 0, explanation: 'The short-term exemption covers leases of 12 months or less with no purchase option. The other options are too long (or, for vans, not low-value) and must be capitalized.', difficulty: 'Intermediate', topic: 'Leases', skill: 'Leases' },
      { question: 'A retailer capitalizes hundreds of store leases on IFRS 16 adoption. What happens to its debt-to-equity ratio?', options: ['It improves because assets increase', 'It deteriorates because liabilities increase with no matching equity increase', 'It is unaffected — ROU assets offset the liability', 'It improves because EBITDA rises'], answer: 1, explanation: 'The lease liability increases debt while equity is unchanged at transition (the ROU asset offsets it in total assets, but equity does not move). Higher debt over unchanged equity means worse leverage — a key reason covenants had to be renegotiated.', difficulty: 'Advanced', topic: 'Leases', skill: 'Leases' }
    ]
  },
  {
    id: 'm16', level: 4, levelTitle: 'Liabilities and Complex Accounting', title: 'IAS 37 — Provisions and Contingencies',
    standard: 'IAS 37', tagline: 'A provision needs all three: a present obligation, a probable outflow, and a reliable estimate — miss one and it stays off the balance sheet.',
    description: 'IAS 37 draws a hard line between liabilities you must recognize and uncertainties you only disclose. This module teaches the three recognition conditions, the decision tree that separates provisions from contingent liabilities and contingent assets, how to measure the best estimate, and the classic traps: restructuring plans, lawsuits, and future operating losses.',
    minutes: 22, skills: ['Provisions'],
    visuals: ['ias37-tree'],
    sections: [
      {
        heading: 'The Three Conditions — All or Nothing',
        paragraphs: [
          'A provision is a liability of uncertain timing or amount — think lawsuit damages, warranty claims, or decommissioning costs. IAS 37 permits recognition only when all three conditions are met simultaneously: there is a present obligation (legal or constructive) as a result of a past event; an outflow of resources embodying economic benefits is probable, meaning more likely than not (>50%); and the amount can be reliably estimated.',
          'If any one condition fails, you do not have a provision. A probable outflow with no present obligation (for example, planned future maintenance) is not a provision — the obligating event has not happened yet. This "all three or nothing" discipline is what stops companies from building cookie-jar reserves or, conversely, hiding genuine obligations.',
          'The obligation can be legal (a contract, a law, a court ruling) or constructive — arising from past practice, published policies, or statements that create a valid expectation in others that the company will act. A published environmental cleanup policy that the company has consistently followed can create a constructive obligation even without a law.'
        ],
        bullets: [
          'Present obligation from a past event — legal or constructive.',
          'Probable outflow (>50% likelihood) of economic benefits.',
          'Reliable estimate of the amount.',
          'All three required: fail one, and recognition is prohibited.'
        ],
        callout: { type: 'key', text: 'The obligating event is the past event that creates the obligation. No obligating event, no provision — this single test kills most attempts to provide for future costs such as planned repairs or future operating losses.' }
      },
      {
        heading: 'Decision Tree: Provision, Contingent Liability, or Nothing',
        paragraphs: [
          'When the three conditions are not all met, IAS 37 does not simply stay silent — it prescribes a disclosure ladder. A contingent liability is either a possible obligation (existence confirmed only by uncertain future events not wholly in the company\u2019s control) or a present obligation that fails the "probable" or "reliable estimate" test. Contingent liabilities are disclosed in the notes, never recognized — unless the possibility of outflow is remote, in which case even disclosure is not required.',
          'Contingent assets are the mirror image with stricter treatment: a possible asset arising from past events is disclosed only when an inflow of economic benefits is probable, and it is recognized as an asset only when realization is virtually certain. The asymmetry is deliberate — prudence means gains wait longer than losses.',
          'Walk every uncertain item through the tree in order: obligation first, then probability, then measurability. The most common exam and interview failure is jumping straight to "probable" without establishing a present obligation.'
        ],
        steps: [
          'Step 1 — Is there a present obligation from a past event? If it is only a possible obligation (e.g., a lawsuit not yet filed where the outcome depends on the claimant), go to contingent liability.',
          'Step 2 — Is an outflow probable (>50%)? If merely possible, disclose a contingent liability; if remote, disclose nothing.',
          'Step 3 — Can the amount be reliably estimated? If not, disclose a contingent liability (rare in practice — "reliable" sets a low bar).',
          'Step 4 — All three yes: recognize a provision measured at the best estimate.',
          'Step 5 — For potential assets: recognize only when virtually certain; disclose when probable; otherwise stay silent.'
        ],
        callout: { type: 'warning', text: 'Probability language is precise: "probable" means more likely than not and triggers recognition for liabilities; "virtually certain" (much higher) is needed to recognize a contingent asset. Mixing these two thresholds up is a serious error.' }
      },
      {
        heading: 'Measurement: The Best Estimate',
        paragraphs: [
          'A provision is measured at the best estimate of the expenditure required to settle the present obligation at the reporting date — the amount the company would rationally pay to settle or transfer it. For a large population of items (product warranties), that means the expected value: probability-weight the possible outcomes. For a single obligation (one lawsuit), it is the most likely outcome, adjusted for risk.',
          'Two refinements matter. First, risks and uncertainties are reflected in the estimate, but uncertainty alone does not justify excessive prudence — deliberately overstating provisions is prohibited. Second, where the time value of money is material (decommissioning in 20 years, long-tail litigation), the provision is discounted to present value, with the unwinding of the discount recognized as a finance cost each period.',
          'Provisions are reviewed at every reporting date and adjusted to the current best estimate; unused provisions are reversed. And if some or all of the expenditure will be reimbursed (insurance, indemnity), the reimbursement is recognized as a separate asset only when it is virtually certain — it is not netted against the provision beyond presenting the expense net in profit or loss.'
        ],
        table: {
          headers: ['Situation', 'Measurement approach'],
          rows: [
            ['Warranty on 10,000 units sold', 'Expected value: probability-weighted cost across the population'],
            ['Single lawsuit, 60% chance of losing 200,000', 'Most likely outcome: 200,000 (the 60% scenario)'],
            ['Decommissioning in 20 years', 'Present value of future cost; unwind discount as finance cost yearly'],
            ['Insurance recovery expected', 'Separate asset only when virtually certain; provision stays gross']
          ]
        },
        callout: { type: 'key', text: 'Expected value is for populations; most-likely outcome is for single events. Using the most likely outcome for a warranty population understates the provision because it ignores the probability-weighted tail.' }
      },
      {
        heading: 'Legal Claims in Practice',
        paragraphs: [
          'Lawsuits are the classic IAS 37 battleground. Suppose a customer sues for 500,000 over a defective installation. External counsel advises there is a 65% chance of losing, with damages estimated at 200,000. There is a present obligation (the alleged defective work is a past event creating a legal exposure), outflow is probable (65% > 50%), and the amount is reliably estimable — so a 200,000 provision is recognized, not the 500,000 claimed.',
          'If counsel instead assessed the chance of losing at 30%, there would be no provision: the obligation exists but outflow is not probable, so the 200,000 exposure is disclosed as a contingent liability with an estimate of its financial effect. If the claim were frivolous with only a remote chance of success, not even disclosure would be required.',
          'The journal is straightforward, but the judgment behind it is everything: auditors will challenge the probability assessment and the estimate, and management bias (over- or under-providing) is a perennial audit risk area.'
        ],
        journal: {
          transaction: 'Year-end: recognize provision for litigation — 65% probability of losing, estimated damages 200,000.',
          lines: [
            { account: 'Legal Expense (P&L)', dr: 200000, cr: null },
            { account: 'Provision for Litigation', dr: null, cr: 200000 }
          ],
          narration: 'Provision for probable lawsuit loss, best estimate 200,000'
        },
        impact: {
          pl: 'Expense up 200,000; profit down 200,000. No tax deduction yet in most jurisdictions (deductible when paid) — a deferred tax asset typically arises.',
          bs: 'Liabilities up 200,000 (provision, split current/non-current by expected timing); equity down 200,000 via retained earnings.',
          cf: 'No cash flow effect until the claim is settled — a classic non-cash charge that analysts add back when assessing operating cash conversion.'
        }
      },
      {
        heading: 'Restructuring Provisions: A Special Case',
        paragraphs: [
          'Restructuring provisions have their own strict gate because the temptation to provide early — and release later to flatter earnings — is so strong. A restructuring provision can be recognized only when there is a detailed formal plan identifying the business, locations, employees, timing, and expenditure, AND the company has raised a valid expectation in those affected that it will carry out the restructuring — by starting to implement the plan or announcing its main features.',
          'A board decision alone is not enough. Until the plan is communicated or implementation begins, there is no constructive obligation — employees and suppliers have no valid expectation, so no provision. Only direct expenditures necessarily entailed by the restructuring qualify: employee termination benefits, contract termination penalties, plant closure costs. Retraining staff, marketing in new markets, and investment in new systems are excluded because they relate to future operations.',
          'And the absolute prohibition: never provide for future operating losses. Expected losses on future operations do not stem from a past obligating event — they are a sign of possible impairment of the related assets, which is an IAS 36 question, not an IAS 37 one.'
        ],
        bullets: [
          'Recognize only with: detailed formal plan + valid expectation (announcement or implementation started).',
          'Qualifying costs: only direct expenditures necessarily entailed (severance, closure costs, contract penalties).',
          'Excluded: retraining, relocation of continuing staff, marketing, new IT systems — these benefit future periods.',
          'Future operating losses: never provisioned, no exceptions.'
        ],
        callout: { type: 'interview', text: 'The classic interview probe: "The board approved a restructuring in December but announced it in January — can we provide at year-end?" Answer: no. Without announcement or implementation, no valid expectation exists at the reporting date, so no constructive obligation — the provision belongs to the next period.' }
      },
      {
        heading: 'Contingent Assets and Onerous Contracts',
        paragraphs: [
          'Two final pieces complete the picture. Contingent assets — a possible insurance recovery, a counterclaim with a probable inflow — follow the strict ladder: disclose when the inflow is probable, recognize only when virtually certain. A company that books a "probable" legal victory as a receivable is violating IAS 37.',
          'Onerous contracts are the exception that proves the "present obligation" rule: when the unavoidable costs of meeting a contract exceed the benefits, the present obligation is recognized as a provision measured at the lower of the cost of fulfilling the contract and the penalties for failing to meet it. Before providing, any assets dedicated to the contract are tested for impairment first. Long-term supply contracts signed at prices that later turn loss-making are the textbook example.'
        ],
        bullets: [
          'Contingent asset: probable inflow \u2192 disclose; virtually certain \u2192 recognize; otherwise silent.',
          'Onerous contract: unavoidable costs > expected benefits \u2192 provide for the lower of fulfilment cost and exit penalties.',
          'Impairment first: write down dedicated assets (IAS 36) before recognizing the onerous-contract provision.'
        ]
      }
    ],
    mistakes: [
      'Recognizing a provision with only two of the three conditions met — most often a probable outflow with no present obligation (e.g., future repairs).',
      'Providing for future operating losses, which IAS 37 explicitly prohibits.',
      'Recognizing a restructuring provision on a board decision alone, before any announcement or implementation creates a valid expectation.',
      'Netting an expected insurance reimbursement against the provision instead of recognizing a separate asset when virtually certain.',
      'Booking a contingent asset (e.g., a probable legal victory) as a receivable before realization is virtually certain.',
      'Forgetting to discount long-term provisions (decommissioning, long-tail claims) when the time value of money is material.'
    ],
    interviewQA: [
      {
        q: 'What is the difference between a provision and a contingent liability, and how does the accounting differ?',
        a: 'A provision meets all three IAS 37 conditions — present obligation from a past event, probable outflow, reliable estimate — and is recognized on the balance sheet at the best estimate. A contingent liability is either a possible obligation or a present obligation failing the probability or measurability test, and it is only disclosed in the notes, never recognized. If the chance of outflow is remote, even disclosure is dropped. The practical consequence is significant: provisions hit profit and leverage immediately, while contingent liabilities are a disclosure risk that analysts must price themselves.'
      },
      {
        q: 'When can a company recognize a restructuring provision?',
        a: 'Two cumulative conditions: a detailed formal plan covering the business, locations, employees affected, timing, and expenditure, plus a valid expectation raised among those affected that the restructuring will happen — created by starting implementation or announcing the plan\u2019s main features. A board resolution alone is insufficient because it creates no constructive obligation. Only direct expenditures necessarily entailed qualify, such as termination benefits and contract penalties; costs of retraining or new systems that benefit future operations are excluded, and future operating losses can never be provided for.'
      },
      {
        q: 'How do you measure a warranty provision for thousands of units sold?',
        a: 'Using the expected-value method: probability-weight the possible outcomes across the population. For example, with a 70% chance of no claims, 20% chance of minor repairs costing 1 million, and 10% chance of major repairs costing 4 million, the provision is 0.2 \u00d7 1m + 0.1 \u00d7 4m = 600,000. The most-likely-outcome approach would wrongly give zero. The provision is reviewed each period, and the unwinding of any discount on long-tail warranties is recognized as a finance cost.'
      }
    ],
    quiz: [
      { question: 'Which three conditions must ALL be met to recognize a provision under IAS 37?', options: ['Possible obligation, possible outflow, approximate estimate', 'Legal obligation, certain outflow, exact amount', 'Constructive obligation, remote outflow, best guess', 'Present obligation from a past event, probable outflow, reliable estimate'], answer: 3, explanation: 'IAS 37 requires all three: a present obligation (legal or constructive) from a past event, a probable (>50%) outflow of economic benefits, and a reliable estimate. Failing any one blocks recognition.', difficulty: 'Foundation', topic: 'Provisions', skill: 'Provisions' },
      { question: 'A lawsuit has a 65% chance of resulting in damages estimated at 200,000. The correct treatment is:', options: ['Recognize a provision of 200,000', 'Disclose a contingent liability of 500,000 claimed', 'Recognize a provision of 500,000', 'Do nothing — the outcome is uncertain'], answer: 0, explanation: 'Present obligation (the past event giving rise to the claim), probable outflow (65% > 50%), reliable estimate (200,000) — all three conditions met, so recognize a 200,000 provision measured at the best estimate, not the amount claimed.', difficulty: 'Intermediate', topic: 'Provisions', skill: 'Provisions' },
      { question: 'The same lawsuit is instead assessed at a 30% chance of losing 200,000. The correct treatment is:', options: ['Recognize a 200,000 provision', 'Recognize a 60,000 provision (30% × 200,000)', 'Disclose a contingent liability — no provision', 'Ignore it completely'], answer: 2, explanation: 'Outflow is possible but not probable, so the recognition test fails. The present obligation exists but does not meet the probability threshold: disclose as a contingent liability with an estimate of the financial effect.', difficulty: 'Intermediate', topic: 'Provisions', skill: 'Provisions' },
      { question: 'A company expects to win a 1 million counterclaim; lawyers say success is probable but not virtually certain. It should:', options: ['Disclose a contingent asset in the notes', 'Recognize a 1 million receivable', 'Recognize a 500,000 receivable to be prudent', 'Net it against the related provision'], answer: 0, explanation: 'Contingent assets are disclosed when inflow is probable and recognized only when virtually certain. Booking it early would anticipate a gain in violation of IAS 37\u2019s asymmetric prudence.', difficulty: 'Intermediate', topic: 'Provisions', skill: 'Provisions' },
      { question: 'The board approves a restructuring plan in December but it is announced to staff in January, after year-end. At 31 December:', options: ['Recognize the full restructuring provision', 'No provision — no valid expectation existed at the reporting date', 'Recognize half the provision', 'Disclose a contingent liability'], answer: 1, explanation: 'Without announcement or implementation, those affected have no valid expectation, so there is no constructive obligation at the reporting date. The provision belongs to the next period.', difficulty: 'Advanced', topic: 'Provisions', skill: 'Provisions' },
      { question: 'Which cost can be included in a restructuring provision?', options: ['Retraining remaining staff for new roles', 'Marketing the business in its new location', 'Statutory severance payments to dismissed employees', 'Investment in a new ERP system'], answer: 2, explanation: 'Only direct expenditures necessarily entailed by the restructuring qualify — severance is the textbook example. Retraining, marketing, and new systems benefit future operations and are excluded.', difficulty: 'Intermediate', topic: 'Provisions', skill: 'Provisions' },
      { question: 'A company forecasts operating losses of 2 million next year on a loss-making division. Under IAS 37 it should:', options: ['Recognize a 2 million provision', 'Recognize a provision discounted to present value', 'Disclose a contingent liability', 'Not provide — future operating losses are never provisioned'], answer: 3, explanation: 'Future operating losses do not arise from a past obligating event, so IAS 37 explicitly prohibits providing for them. They may instead indicate impairment of the division\u2019s assets under IAS 36.', difficulty: 'Intermediate', topic: 'Provisions', skill: 'Provisions' },
      { question: 'A warranty provision covering 10,000 units sold should be measured using:', options: ['The most likely single outcome', 'The maximum possible claim', 'The expected value — probability-weighted outcomes', 'The prior year’s actual claims'], answer: 2, explanation: 'For a large population, IAS 37 requires the expected-value method: weight each outcome by its probability. The most-likely-outcome method suits single obligations like one lawsuit, not populations.', difficulty: 'Advanced', topic: 'Provisions', skill: 'Provisions' },
      { question: 'A decommissioning obligation payable in 20 years should be:', options: ['Recognized at the full undiscounted future cost', 'Discounted to present value, with the unwinding recognized as a finance cost', 'Disclosed only, since payment is far away', 'Recognized gradually over the 20 years'], answer: 1, explanation: 'Where the time value of money is material, provisions are measured at present value. The discount unwinds each period as a finance cost, so the provision accretes back to the future settlement amount.', difficulty: 'Advanced', topic: 'Provisions', skill: 'Provisions' }
    ]
  },
  {
    id: 'm17', level: 4, levelTitle: 'Liabilities and Complex Accounting', title: 'IAS 19 — Employee Benefits (Intro)',
    standard: 'IAS 19', tagline: 'If staff earned it this month, you owe it this month — even if nobody sends an invoice.',
    description: 'Salaries, bonuses, and unused vacation are liabilities the moment the service is rendered, not when payroll runs. This module covers short-term employee benefits, the accrual of paid leave, bonus obligations, and the crucial conceptual split between defined contribution and defined benefit plans — the distinction every finance professional needs for pensions.',
    minutes: 16, skills: ['IFRS Fundamentals'],
    sections: [
      {
        heading: 'Short-Term Employee Benefits: Recognize as Earned',
        paragraphs: [
          'IAS 19 requires short-term employee benefits — wages, salaries, social security contributions, paid annual leave, paid sick leave, bonuses, and non-monetary benefits expected to be settled within 12 months of the service — to be recognized as an expense when the employee renders the service, measured at the undiscounted amount expected to be paid.',
          'The principle is pure accrual accounting: the obligation builds day by day as people work, regardless of the payroll cycle. If the reporting date falls mid-payroll-cycle, or bonuses and leave entitlements are outstanding, a liability must be recognized. There is no discounting for short-term benefits — the amounts are settled too soon for the time value of money to matter.'
        ],
        bullets: [
          'Recognize when service is rendered, not when cash is paid.',
          'Measured undiscounted at the amount expected to be paid.',
          'Covers wages, social charges, short-term paid leave, bonuses, and non-monetary perks.',
          'Applies to benefits expected to be settled within 12 months.'
        ],
        callout: { type: 'key', text: 'No invoice, no payment, no problem: the liability exists because the service was received. Month-end payroll accruals are the most routine — and most commonly understated — IAS 19 application.' }
      },
      {
        heading: 'Paid Leave: The Accruing Vacation Problem',
        paragraphs: [
          'Paid absences split into two types. Accumulating absences (unused vacation carried forward) create a liability: the company recognizes the expected cost of the accumulating entitlement as employees render service, measured at the undiscounted amount of the additional payments expected for the unused entitlement.',
          'Non-accumulating absences (typical sick leave that lapses if unused) create no liability until the absence actually occurs — there is no carried-forward entitlement to accrue. The distinction drives real money: a company with generous carry-forward vacation policies can hold a material accrued-leave liability that grows every month it is not recognized.',
          'Practical example: 200 employees each earn 25 vacation days a year; at year-end the average unused balance is 5 days at an average daily cost of 220. The accrual is 200 \u00d7 5 \u00d7 220 = 220,000 — a genuine liability sitting in "other payables" that many companies discover only during their first proper audit.'
        ],
        journal: {
          transaction: 'Year-end accrual for unused accumulating vacation: 200 staff \u00d7 5 days \u00d7 220/day = 220,000.',
          lines: [
            { account: 'Holiday Pay Expense', dr: 220000, cr: null },
            { account: 'Accrued Holiday Pay (liability)', dr: null, cr: 220000 }
          ],
          narration: 'Accrual for unused accumulating annual leave at year-end'
        },
        impact: {
          pl: 'Staff costs up 220,000; operating profit and EBITDA down 220,000. Missing this accrual flatters both.',
          bs: 'Current liabilities up 220,000; equity down 220,000 via retained earnings. Working capital deteriorates.',
          cf: 'No cash effect — the cash outflow happens when the leave is taken or paid out.'
        }
      },
      {
        heading: 'Bonuses and Profit-Sharing',
        paragraphs: [
          'Bonus and profit-sharing plans create a liability when the company has a present legal or constructive obligation to make the payments as a result of past events, and a reliable estimate can be made. The constructive obligation is the interesting part: a consistent past practice of paying bonuses — even without a contractual promise — can create a valid expectation among employees that the company will continue to do so.',
          'A reliable estimate exists when the plan\u2019s formula is set (e.g., 10% of profit before tax) or the amount can be determined before the financial statements are authorized. The classic error is waiting for board approval in February to accrue a December year-end bonus: if the formula and past practice made the payment a foregone conclusion at year-end, the obligation already existed.',
          'Measurement follows the expected cost, undiscounted for short-term plans. For multi-year long-service bonuses, discounting and actuarial-style estimation apply — a bridge to the more complex IAS 19 territory.'
        ],
        bullets: [
          'Legal obligation: contract or plan terms promise the bonus.',
          'Constructive obligation: consistent past practice creates a valid expectation.',
          'Accrue at year-end if the formula makes the amount reliably estimable — do not wait for formal approval.',
          'Short-term bonuses are measured undiscounted.'
        ],
        callout: { type: 'warning', text: 'Discretionary does not mean avoidable. If you have paid a Christmas bonus for ten straight years and never suggested it would stop, IAS 19 likely treats it as a constructive obligation — auditors will expect an accrual.' }
      },
      {
        heading: 'Defined Contribution vs Defined Benefit: The Great Divide',
        paragraphs: [
          'Post-employment plans fall into two fundamentally different buckets, and the accounting reflects who bears the risk. In a defined contribution plan, the company pays fixed contributions into a separate fund and has no further obligation — if the fund underperforms, the employee\u2019s pension shrinks, not the company\u2019s balance sheet. Accounting is simple: recognize the contribution as an expense when employees render the service.',
          'In a defined benefit plan, the company promises a specified benefit (e.g., 60% of final salary), so it bears the actuarial and investment risk. The company must estimate the obligation using actuarial assumptions (discount rate, salary growth, mortality), recognize the net defined benefit liability or asset, and split the cost: service cost and net interest go to profit or loss, while remeasurements — actuarial gains and losses and the return on plan assets — go to other comprehensive income, never recycled to P&L.',
          'This module stays conceptual on defined benefit accounting — full actuarial mechanics are specialist territory — but every finance professional should grasp the risk point: a defined benefit promise is a long-dated, leveraged liability whose volatility lands in OCI and whose deficits can dwarf operating assets. That is why most companies have spent two decades closing DB plans to new members.'
        ],
        table: {
          headers: ['Feature', 'Defined Contribution', 'Defined Benefit'],
          rows: [
            ['Who bears investment/actuarial risk?', 'Employee', 'Employer'],
            ['Expense recognition', 'Contributions payable for the period', 'Service cost + net interest in P&L'],
            ['Remeasurements', 'None', 'Actuarial gains/losses in OCI (no recycling)'],
            ['Balance sheet', 'Only unpaid contributions', 'Net defined benefit liability/asset'],
            ['Example', 'Fixed 5% of salary to a pension fund', 'Promise of 60% of final salary']
          ]
        },
        callout: { type: 'key', text: 'Risk is the divider: fixed contributions with no further obligation = defined contribution. A promised benefit level = defined benefit, with actuarial risk on the employer and remeasurements in OCI.' }
      },
      {
        heading: 'Payroll Accrual at Month-End: Putting It Together',
        paragraphs: [
          'Month-end close is where IAS 19 meets routine finance work. Salaries for days worked but not yet paid, employer social security on those salaries, accrued vacation movements, and the monthly slice of the annual bonus all need accruing. A clean payroll accrual keeps EBITDA honest month to month instead of lurching with the payroll calendar.',
          'Example: December close falls 3 working days before the January payroll run. Gross salaries for those 3 days are 48,000, employer social charges 30% add 14,400, and the monthly bonus provision is 25,000. The accrual totals 87,400 — material enough to swing a monthly management result, and entirely routine.',
          'Best practice is a standard monthly checklist: payroll cut-off days, vacation balance report from HR, bonus formula year-to-date calculation, and social charge rates. Companies that skip this systematically overstate profit in short months and understate it in long ones.'
        ],
        journal: {
          transaction: 'December month-end: accrue 3 days\u2019 salaries (48,000), employer social charges (14,400), and monthly bonus slice (25,000).',
          lines: [
            { account: 'Salaries Expense', dr: 48000, cr: null },
            { account: 'Employer Social Charges Expense', dr: 14400, cr: null },
            { account: 'Bonus Expense', dr: 25000, cr: null },
            { account: 'Salaries and Social Charges Payable', dr: null, cr: 87400 }
          ],
          narration: 'Month-end payroll accrual for days worked not yet paid'
        },
        impact: {
          pl: 'Staff costs up 87,400 in December; EBITDA and operating profit down by the same amount. Without the accrual, December profit would be overstated and January understated.',
          bs: 'Current liabilities up 87,400; equity down 87,400 via retained earnings.',
          cf: 'No cash effect at month-end; the outflow appears in January\u2019s operating cash flow when payroll is paid.'
        }
      }
    ],
    mistakes: [
      'Recognizing salary expense when payroll is paid instead of when the service is rendered — missing the month-end cut-off accrual.',
      'Failing to accrue accumulating unused vacation, letting a material liability build silently off the balance sheet.',
      'Treating non-accumulating sick leave like vacation and accruing for leave that lapses if unused.',
      'Waiting for formal board approval before accruing a formula-driven bonus that was already a constructive obligation at year-end.',
      'Discounting short-term employee benefits — IAS 19 measures them undiscounted.',
      'Confusing defined contribution and defined benefit plans and missing that a "pension promise" leaves actuarial risk with the employer.'
    ],
    interviewQA: [
      {
        q: 'How do you account for unused employee vacation at year-end?',
        a: 'Unused accumulating vacation is accrued as a liability at the undiscounted expected cost — unused days multiplied by the daily cost rate. The entry debits holiday pay expense and credits accrued holiday pay, reducing EBITDA with no cash effect until the leave is taken. Non-accumulating leave, such as sick days that lapse, is not accrued until the absence occurs. Auditors focus on this because generous carry-forward policies can create a surprisingly material liability that companies often under-accrue.'
      },
      {
        q: 'What is the difference between a defined contribution and a defined benefit pension plan, and why does it matter?',
        a: 'In a defined contribution plan the employer pays fixed contributions and has no further obligation — the employee bears investment risk, and accounting is simply expensing contributions as service is rendered. In a defined benefit plan the employer promises a benefit level, so it bears actuarial and investment risk: it recognizes a net defined benefit liability or asset, with service cost and net interest in profit or loss and remeasurements (actuarial gains and losses) in OCI with no recycling. It matters because DB promises are long-dated leveraged liabilities whose deficits can be enormous, which is why companies have spent decades closing them.'
      }
    ],
    quiz: [
      { question: 'Under IAS 19, short-term employee benefits are measured at:', options: ['Discounted present value', 'Fair value through profit or loss', 'Nominal value less impairment', 'The undiscounted amount expected to be paid'], answer: 3, explanation: 'Short-term benefits (settled within 12 months) are recognized undiscounted at the amount expected to be paid — the time value of money is immaterial over such short periods.', difficulty: 'Foundation', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' },
      { question: 'An employee\u2019s salary for December is paid on 5 January. The expense should be recognized in:', options: ['December, when the service was rendered', 'January, when the cash is paid', 'Either month, as long as it is consistent', 'The month the payroll is approved'], answer: 0, explanation: 'IAS 19 requires expense recognition when the employee renders the service. December needs a payroll accrual for days worked but not yet paid; cash timing is irrelevant.', difficulty: 'Foundation', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' },
      { question: 'Unused vacation days that employees may carry forward to next year should be:', options: ['Ignored until the leave is taken', 'Disclosed only as a contingent liability', 'Accrued as a liability at year-end at the expected undiscounted cost', 'Accrued at discounted present value'], answer: 2, explanation: 'Accumulating paid absences create a present obligation as service is rendered. The company accrues the expected cost of the unused entitlement, undiscounted for short-term leave.', difficulty: 'Intermediate', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' },
      { question: 'Sick leave that lapses if not used in the year (non-accumulating) is accounted for by:', options: ['Recognizing a liability only when the absence occurs', 'Accruing the full annual entitlement each month', 'Discounting the expected sick days to present value', 'Treating it as a defined benefit obligation'], answer: 0, explanation: 'Non-accumulating absences create no carried-forward entitlement, so no liability exists until the employee is actually absent. Accruing for leave that lapses would overstate liabilities.', difficulty: 'Intermediate', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' },
      { question: 'A company has paid a Christmas bonus for ten years with no contractual promise. At year-end it should:', options: ['Accrue nothing — the bonus is discretionary', 'Wait for board approval before recognizing anything', 'Disclose it as a contingent liability', 'Accrue the bonus — past practice creates a constructive obligation'], answer: 3, explanation: 'Consistent past practice can create a valid expectation among employees — a constructive obligation under IAS 19. If the amount is reliably estimable, the bonus is accrued at year-end regardless of formal approval timing.', difficulty: 'Advanced', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' },
      { question: 'In a defined contribution pension plan:', options: ['The employer guarantees a specified pension level', 'The employer’s obligation is limited to the contributions due, expensed as service is rendered', 'Actuarial gains and losses go to OCI', 'The employer recognizes a net pension liability'], answer: 1, explanation: 'Defined contribution means fixed contributions with no further obligation — the employee bears the risk. Accounting is simply recognizing the contribution expense when due.', difficulty: 'Intermediate', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' },
      { question: 'In a defined benefit plan, actuarial gains and losses (remeasurements) are recognized in:', options: ['Other comprehensive income, with no subsequent recycling to P&L', 'Profit or loss immediately', 'Retained earnings directly, bypassing OCI', 'Profit or loss spread over remaining service'], answer: 0, explanation: 'IAS 19 requires remeasurements of the net defined benefit liability/asset in OCI, and they are never recycled to profit or loss — a deliberate design to keep pension volatility out of reported earnings.', difficulty: 'Advanced', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' },
      { question: 'A December month-end falls 3 days before the January payroll: salaries 48,000, employer charges 14,400, bonus slice 25,000. The correct entry:', options: ['No entry until January payroll is paid', 'Accrue only the 48,000 salaries', 'Accrue 87,400: debit staff cost accounts, credit payables', 'Debit January expense in advance'], answer: 2, explanation: 'All three amounts relate to December service and must be accrued: 48,000 + 14,400 + 25,000 = 87,400, debiting the expense accounts and crediting salaries and social charges payable. Missing it overstates December EBITDA.', difficulty: 'Intermediate', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' },
      { question: 'Why do missing payroll accruals distort monthly EBITDA?', options: ['They change the tax rate', 'They affect the discount rate on provisions', 'They reclassify operating cash flow as financing', 'They shift staff costs between months, overstating profit in short months and understating it in long ones'], answer: 3, explanation: 'Without cut-off accruals, months with fewer paid days look artificially profitable and catch-up months look worse, even though the underlying staff cost is stable. Accruals keep EBITDA honest month to month.', difficulty: 'Intermediate', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' }
    ]
  }
];
