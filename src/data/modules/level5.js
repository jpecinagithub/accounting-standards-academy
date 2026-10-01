export default [
  {
    id: 'm18', level: 5, levelTitle: 'Financial Instruments', title: 'IFRS 9 — Financial Instruments',
    standard: 'IFRS 9', tagline: 'Two questions decide everything: what is your business model, and do the cash flows pass the SPPI test?',
    description: 'IFRS 9 classifies every financial asset using just two drivers — the business model for managing it and whether its contractual cash flows are solely payments of principal and interest. This module teaches the classification engine, the three measurement categories, financial liabilities, and the effective interest rate that ties it all together.',
    minutes: 30, skills: ['Financial Instruments'],
    visuals: ['ifrs9-tree'],
    sections: [
      {
        heading: 'The Classification Engine: Two Questions',
        paragraphs: [
          'Every financial asset under IFRS 9 is classified by answering two questions in order. First: what is the business model for managing the asset — hold to collect contractual cash flows, hold to collect and sell, or something else (such as trading)? The business model is assessed at a portfolio level based on how management actually runs the business, not on intentions for a single instrument.',
          'Second: do the contractual cash flows meet the SPPI test — are they solely payments of principal and interest on the principal outstanding? Interest here means compensation for the time value of money, credit risk, basic lending costs, and a profit margin. Anything else — equity kickers, commodity-linked returns, leverage — fails SPPI.',
          'The answers map to exactly three measurement categories: amortized cost, fair value through other comprehensive income (FVOCI), or fair value through profit or loss (FVTPL). Get the two questions right and classification becomes mechanical; get them wrong and every subsequent number — impairment, interest income, OCI — is wrong too.'
        ],
        bullets: [
          'Question 1 — Business model: hold to collect? hold to collect and sell? other/trading?',
          'Question 2 — SPPI: are cash flows solely principal + interest (time value, credit risk, basic lending margin)?',
          'Assess the business model at portfolio level, from observable management behavior — not wishful intent.',
          'Failed SPPI (convertibles, equity-linked notes) always lands in FVTPL for debt instruments.'
        ],
        callout: { type: 'key', text: 'The classification engine: business model \u00d7 SPPI \u2192 amortized cost / FVOCI / FVTPL. Everything in IFRS 9 measurement flows from these two answers.' }
      },
      {
        heading: 'The Three Measurement Categories',
        paragraphs: [
          'Amortized cost is for debt instruments held to collect contractual cash flows where those cash flows pass SPPI — the classic bank loan or held-to-maturity-style bond. Interest is recognized using the effective interest rate, and impairment follows the expected credit loss model. Fair value changes are irrelevant until derecognition.',
          'FVOCI has two flavors. For debt (hold to collect and sell + SPPI), fair value changes go to OCI but interest, impairment, and FX go to profit or loss, and the cumulative OCI gain or loss is recycled to P&L on disposal. For equity, there is an irrevocable election at initial recognition to present fair value changes in OCI — but dividends go to P&L, impairment is not recognized, and there is no recycling on sale: the gain stays in equity forever.',
          'FVTPL is the residual category: trading assets, derivatives, anything failing SPPI, and instruments designated at FVTPL to eliminate an accounting mismatch (the fair value option). All fair value changes hit profit or loss immediately, and transaction costs are expensed rather than capitalized.'
        ],
        table: {
          headers: ['Category', 'Criteria', 'P&L vs OCI treatment'],
          rows: [
            ['Amortized cost', 'Hold to collect + SPPI', 'EIR interest, ECL impairment, FX in P&L; no fair value moves'],
            ['FVOCI (debt)', 'Hold to collect and sell + SPPI', 'Interest/ECL/FX in P&L; fair value moves in OCI, recycled on sale'],
            ['FVOCI (equity, elected)', 'Irrevocable election per instrument', 'Dividends in P&L; fair value moves in OCI, never recycled'],
            ['FVTPL', 'Trading, failed SPPI, derivatives, fair value option', 'Everything in P&L; transaction costs expensed']
          ]
        },
        journal: {
          transaction: 'Buy 1,000 of 5-year corporate bonds classified at amortized cost (hold to collect, fixed coupons pass SPPI).',
          lines: [
            { account: 'Financial Asset — Amortized Cost', dr: 1000, cr: null },
            { account: 'Cash', dr: null, cr: 1000 }
          ],
          narration: 'Initial recognition of debt instrument at amortized cost'
        },
        impact: {
          pl: 'No P&L impact on purchase (transaction costs, if any, are capitalized into the carrying amount).',
          bs: 'Financial assets up 1,000; cash down 1,000. No leverage effect beyond the asset swap.',
          cf: 'Investing cash outflow of 1,000.'
        }
      },
      {
        heading: 'Decision Tree: Classifying a Debt Instrument',
        paragraphs: [
          'Apply the tree top to bottom for each debt instrument. The most common real-world error is stopping at question one — "we intend to hold it" — while the cash flows quietly fail SPPI because of an embedded derivative or a leveraged coupon.',
          'Remember the fair value option: even an instrument that qualifies for amortized cost or FVOCI may be designated at FVTPL on initial recognition if doing so eliminates or significantly reduces an accounting mismatch — for example, a fixed-rate loan funded by liabilities measured at FVTPL. The designation is irrevocable.'
        ],
        steps: [
          'Step 1 — Is it a debt instrument from the holder\u2019s perspective? (Equity follows a separate, simpler path: default FVTPL with an optional irrevocable FVOCI election.)',
          'Step 2 — What is the business model: hold to collect, hold to collect and sell, or other (e.g., active trading)? Base this on how the portfolio is actually managed and reported to key management.',
          'Step 3 — Apply the SPPI test to the contractual cash flows: only principal and interest (time value, credit risk, basic lending costs and margin)? A conversion option into shares fails SPPI.',
          'Step 4 — Map the answers: hold-to-collect + SPPI \u2192 amortized cost; hold-to-collect-and-sell + SPPI \u2192 FVOCI; anything else \u2192 FVTPL.',
          'Step 5 — Consider the fair value option: would FVTPL designation eliminate an accounting mismatch? If yes, it may be elected irrevocably at initial recognition.'
        ],
        callout: { type: 'example', text: 'A convertible bond held to collect contractual cash flows: business model says amortized cost, but the equity conversion option means cash flows are not solely principal and interest — SPPI fails, so the whole instrument goes to FVTPL. One failed test overrides a perfect business model.' }
      },
      {
        heading: 'Amortized Cost and the Effective Interest Rate',
        paragraphs: [
          'Amortized cost is not just "cost minus repayments." It is the initial amount, minus principal repayments, plus or minus the cumulative amortization of any premium, discount, fees, or transaction costs using the effective interest rate — minus any loss allowance. The EIR is the single rate that exactly discounts the expected future cash flows to the initial carrying amount.',
          'The EIR is what makes a 1,000 loan with a 50 origination fee behave honestly: the lender\u2019s net investment is 950, but the contractual cash flows are priced on 1,000, so the accounting yield must be higher than the contractual coupon to spread the 50 fee over the loan\u2019s life. Each period, interest income equals the opening amortized cost multiplied by the EIR — a constant yield on a changing balance.',
          'For floating-rate instruments, the EIR is updated when the rate reprices. And crucially for the next module: when an amortized-cost or FVOCI-debt asset becomes credit-impaired (Stage 3), interest is recognized on the net carrying amount (gross minus loss allowance), not the gross amount.'
        ],
        bullets: [
          'Amortized cost = initial amount \u2212 repayments \u00b1 EIR amortization of fees/premiums/discounts \u2212 loss allowance.',
          'EIR = the rate discounting expected cash flows back to the initial carrying amount (fees and transaction costs included).',
          'Interest income each period = opening amortized cost \u00d7 EIR: a constant yield, not the contractual coupon.',
          'Stage 3 credit-impaired assets accrue interest on the net (post-allowance) carrying amount.'
        ],
        callout: { type: 'key', text: 'The contractual coupon tells you what cash arrives; the EIR tells you what yield you actually earned on your net investment. IFRS 9 always reports the latter.' }
      },
      {
        heading: 'Financial Liabilities: Simpler, With One Twist',
        paragraphs: [
          'Financial liabilities are simpler: the default is amortized cost using the EIR — bank borrowings, bonds issued, trade payables. Liabilities held for trading (including derivatives) and liabilities designated under the fair value option go to FVTPL, with all changes in profit or loss.',
          'The twist is own credit risk. For a liability designated at FVTPL, the portion of the fair value change attributable to changes in the entity\u2019s own credit risk goes to OCI, not profit or loss. Without this rule, a company whose creditworthiness deteriorates would book a profit as its own debt falls in value — the infamous "profit from own default" that IFRS 9 deliberately prevents. Those OCI amounts are never recycled to P&L.',
          'Initial recognition for all financial instruments is at fair value. Transaction costs are added to the initial carrying amount for amortized-cost and FVOCI instruments but expensed immediately for FVTPL instruments — a small rule with big exam presence.'
        ],
        journal: {
          transaction: 'Trading portfolio gains 80 in fair value during the period (FVTPL asset).',
          lines: [
            { account: 'Financial Asset — FVTPL', dr: 80, cr: null },
            { account: 'Fair Value Gain (P&L)', dr: null, cr: 80 }
          ],
          narration: 'Remeasurement of trading asset to fair value'
        },
        impact: {
          pl: 'Profit up 80 immediately — FVTPL means no deferral to OCI.',
          bs: 'Financial assets up 80; equity up 80 via retained earnings.',
          cf: 'No cash effect — unrealized gain, disclosed as a non-cash adjustment in operating cash flow.'
        },
        callout: { type: 'warning', text: 'Never recycle the FVOCI equity election: when those shares are sold, the cumulative OCI gain stays in equity (typically transferred to retained earnings). Only FVOCI debt recycles to profit or loss on disposal.' }
      },
      {
        heading: 'Reclassification and Derecognition',
        paragraphs: [
          'Reclassification between categories is allowed only when the business model for managing the assets changes — a rare, significant, demonstrable event such as acquiring or disposing of a business line, not a reaction to market movements or a change of intent for one instrument. When it happens, it applies prospectively from the reclassification date; prior periods are not restated.',
          'Derecognition follows the risks-and-rewards logic: a financial asset is derecognized when the contractual rights to cash flows expire or when the asset is transferred and substantially all risks and rewards are transferred (as in most true sales and securitizations without recourse). If risks and rewards are retained — a repo, most factoring with recourse — the asset stays and a liability is recognized for the proceeds.',
          'This is also where classification meets impairment: the expected credit loss model (next module) applies to amortized-cost assets and FVOCI debt, but never to FVTPL or FVOCI-equity instruments. Classification decisions therefore directly control where credit losses appear.'
        ],
        bullets: [
          'Reclassify only on a genuine business-model change; prospective application, no restatement.',
          'Derecognize when rights expire or substantially all risks and rewards are transferred.',
          'Repos and recourse factoring: asset stays, recognize a financing liability.',
          'ECL impairment applies to amortized cost and FVOCI debt — never to FVTPL or FVOCI equity.'
        ]
      },
      {
        heading: 'Why Classification Matters: A Finance Professional\u2019s View',
        paragraphs: [
          'Classification is not an accounting technicality — it changes reported profit volatility, equity composition, and covenant headroom. Two identical bond portfolios can produce different earnings simply because one is managed hold-to-collect (smooth EIR income) and the other hold-to-collect-and-sell (OCI volatility with recycling). Treasury strategy and accounting classification must be designed together.',
          'For analysts, the first question on any financial institution\u2019s accounts is the mix: how much sits in FVTPL (earnings volatility), how much in FVOCI debt (OCI volatility, recyclable), and how much at amortized cost (ECL provisions as the key judgment). The business-model disclosures in the notes exist precisely so readers can judge whether the classification matches reality.'
        ],
        callout: { type: 'interview', text: 'Expect: "A bank holds a bond portfolio it may sell for liquidity management — how is it classified?" Answer: hold to collect and sell + SPPI \u2192 FVOCI debt. Selling for liquidity needs is part of that business model, unlike opportunistic trading, and interest plus ECL still run through P&L.' }
      }
    ],
    mistakes: [
      'Classifying based on intent for a single instrument instead of the observable business model for the portfolio.',
      'Skipping the SPPI test — structured coupons, leverage, or equity kickers silently fail it and force FVTPL.',
      'Reclassifying assets because of market moves or a change of mind; only a genuine business-model change permits reclassification.',
      'Recycling FVOCI equity gains to profit or loss on disposal — they stay in equity permanently.',
      'Capitalizing transaction costs on FVTPL instruments instead of expensing them immediately.',
      'Applying the ECL model to FVTPL assets or FVOCI equities, where it does not belong.'
    ],
    interviewQA: [
      {
        q: 'Walk me through classifying a 5-year fixed-coupon corporate bond the bank intends to hold to maturity.',
        a: 'First the business model: hold to collect contractual cash flows, assessed from how the portfolio is managed. Second the SPPI test: fixed coupons compensate for time value, credit risk, and margin — they pass. So the bond is measured at amortized cost, with interest recognized at the effective interest rate and impairment under the ECL model. If the bond instead had an equity conversion option, SPPI would fail and the whole instrument would go to FVTPL despite the hold-to-collect intent.'
      },
      {
        q: 'Why does IFRS 9 send own-credit-risk changes on FVTPL liabilities to OCI?',
        a: 'Because otherwise a deteriorating company would recognize a profit as the fair value of its own debt falls — profit from its own default, which is economically perverse and was widely criticized under IAS 39. IFRS 9 keeps that component in OCI with no recycling, so profit or loss reflects operating and market performance, not the market\u2019s view of the issuer\u2019s survival odds. It is one of the clearest examples of the standard prioritizing decision-useful information over mechanical fair value.'
      },
      {
        q: 'When can a company reclassify financial assets, and how is it applied?',
        a: 'Only when its business model for managing the assets changes — a significant, demonstrable, and rare event like acquiring, disposing of, or terminating a business line. Changes in market conditions, a bad quarter, or a new CFO\u2019s preferences do not qualify. Reclassification is applied prospectively from the reclassification date with no restatement of comparatives, and the disclosures must explain the change so users can see exactly what moved and why.'
      }
    ],
    quiz: [
      { question: 'IFRS 9 classifies financial assets using which two drivers?', options: ['Management intent and tax treatment', 'Business model and the SPPI test on contractual cash flows', 'Maturity and credit rating', 'Historical cost and fair value hierarchy'], answer: 1, explanation: 'Classification rests on the business model for managing the asset and whether contractual cash flows are solely payments of principal and interest (SPPI). Intent for a single asset and tax treatment are irrelevant.', difficulty: 'Foundation', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'The SPPI test asks whether contractual cash flows are:', options: ['Stable and predictable in nominal terms', 'Solely payments of principal and interest on the principal outstanding', 'Paid in the functional currency', 'Sufficient to cover the purchase price'], answer: 1, explanation: 'SPPI = solely payments of principal and interest, where interest compensates for time value of money, credit risk, basic lending costs, and a profit margin. Anything else (equity kickers, commodity linkage) fails.', difficulty: 'Intermediate', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'A bond held to collect contractual cash flows, with fixed coupons passing SPPI, is measured at:', options: ['FVTPL', 'FVOCI', 'Amortized cost', 'Historical cost less depreciation'], answer: 2, explanation: 'Hold to collect + SPPI maps to amortized cost: interest at the effective interest rate, ECL impairment, and no fair value volatility in the statements.', difficulty: 'Intermediate', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'A bond held to collect AND sell (liquidity management), with coupons passing SPPI, is measured at:', options: ['Amortized cost', 'FVTPL', 'FVOCI (debt)', 'Cost'], answer: 2, explanation: 'Hold to collect and sell + SPPI gives FVOCI for debt: fair value on the balance sheet, but interest, impairment, and FX still in P&L, with cumulative OCI recycled to P&L on disposal.', difficulty: 'Intermediate', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'A convertible bond (convertible into the issuer\u2019s shares) held to collect cash flows is classified as:', options: ['Amortized cost, because of the hold-to-collect model', 'FVOCI debt', 'FVTPL, because the conversion option fails SPPI', 'Split into debt and equity components by the holder'], answer: 2, explanation: 'The equity conversion option means cash flows are not solely principal and interest — SPPI fails, so the entire instrument goes to FVTPL. One failed test overrides the business model.', difficulty: 'Advanced', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'For listed shares, the default IFRS 9 treatment is FVTPL, but the company may:', options: ['Elect amortized cost if it intends to hold them long term', 'Make an irrevocable election for FVOCI, with gains never recycled to P&L', 'Classify them as FVOCI debt', 'Measure them at cost if fair value is volatile'], answer: 1, explanation: 'Equities default to FVTPL, with an optional irrevocable FVOCI election per instrument. Under the election, dividends go to P&L but fair value changes stay in OCI permanently — no recycling on sale.', difficulty: 'Advanced', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'Reclassification of financial assets between categories is permitted:', options: ['Whenever management changes its intent', 'Only when the business model for managing the assets changes, applied prospectively', 'At each reporting date for FVTPL assets', 'Only with auditor approval'], answer: 1, explanation: 'Reclassification requires a genuine, significant business-model change (e.g., disposing of a business line), not market moves or changed intent. It applies prospectively with no restatement.', difficulty: 'Advanced', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'Transaction costs on initial recognition are:', options: ['Expensed for all financial instruments', 'Capitalized for amortized-cost and FVOCI instruments, expensed for FVTPL', 'Capitalized only for liabilities', 'Always added to goodwill'], answer: 1, explanation: 'Transaction costs are included in the initial carrying amount except for FVTPL instruments, where they are expensed immediately — because FVTPL is remeasured to fair value anyway.', difficulty: 'Intermediate', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'The default measurement for financial liabilities such as bank borrowings is:', options: ['FVTPL', 'Amortized cost using the effective interest rate', 'FVOCI', 'Nominal value'], answer: 1, explanation: 'Financial liabilities default to amortized cost with EIR amortization. FVTPL applies to trading liabilities, derivatives, and liabilities designated under the fair value option.', difficulty: 'Intermediate', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'For a liability designated at FVTPL, the fair value change due to the entity\u2019s own credit risk is recognized in:', options: ['Profit or loss, like all FVTPL changes', 'OCI, with no recycling to profit or loss', 'Retained earnings directly', 'Profit or loss only when the liability is settled'], answer: 1, explanation: 'Own-credit changes go to OCI without recycling, preventing the perverse "profit from own default" that would arise if a company\u2019s deteriorating creditworthiness created P&L gains.', difficulty: 'Advanced', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'A bank sells loans but retains substantially all risks and rewards (e.g., a repo). The correct treatment is:', options: ['Derecognize the loans and recognize a sale', 'Keep the loans on balance sheet and recognize a financing liability', 'Reclassify the loans to FVTPL', 'Net the proceeds against the loans'], answer: 1, explanation: 'Derecognition requires transfer of substantially all risks and rewards. In a repo the seller keeps them, so the asset stays and the cash received is a collateralized borrowing.', difficulty: 'Advanced', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'The ECL impairment model applies to:', options: ['All financial assets including FVTPL', 'Amortized-cost assets and FVOCI debt only', 'FVOCI equity investments', 'Only trade receivables'], answer: 1, explanation: 'ECL applies to amortized-cost and FVOCI-debt instruments (plus loan commitments and guarantees). FVTPL assets already reflect credit risk in fair value, and FVOCI equities carry no impairment concept.', difficulty: 'Intermediate', topic: 'Financial Instruments', skill: 'Financial Instruments' }
    ]
  },
  {
    id: 'm19', level: 5, levelTitle: 'Financial Instruments', title: 'Expected Credit Losses',
    standard: 'IFRS 9', tagline: 'Stop waiting for the default: IFRS 9 makes you book credit losses before they happen.',
    description: 'The ECL model replaced the old "wait for a loss event" approach with forward-looking provisions staged by credit deterioration. This module teaches the three stages, what triggers a move to lifetime losses, the simplified approach for trade receivables, and the full lifecycle from origination through default, write-off, and recovery.',
    minutes: 28, skills: ['Financial Instruments'],
    visuals: ['ecl-stages'],
    sections: [
      {
        heading: 'From Incurred Loss to Expected Loss',
        paragraphs: [
          'Under the old IAS 39 incurred-loss model, banks recognized impairment only after a loss event — a missed payment, a bankruptcy filing. Provisions arrived late, spiking exactly when the economy was weakest, which amplified the financial crisis. The G20 asked for better, and IFRS 9 answered with expected credit losses: recognize a loss allowance from day one, based on forward-looking estimates.',
          'ECL is the probability-weighted present value of cash shortfalls — the difference between contractual cash flows and what the entity actually expects to receive, discounted at the original effective interest rate. It incorporates past events, current conditions, and reasonable forecasts (GDP, unemployment, house prices) without undue cost or effort.',
          'The key structural idea is staging: the allowance equals 12-month expected losses while credit risk is stable, and switches to lifetime expected losses once credit risk has increased significantly. The staging flow visual in this module tracks a loan through that lifecycle.'
        ],
        bullets: [
          'IAS 39: recognize after a loss event — too little, too late.',
          'IFRS 9: recognize expected losses from origination, updated every period.',
          'ECL = probability-weighted cash shortfalls, discounted at the original EIR.',
          'Forward-looking: include reasonable forecasts of economic conditions.'
        ],
        callout: { type: 'key', text: 'ECL is not a prediction that a specific borrower will default — it is a probability-weighted expectation across scenarios. A 12-month ECL on a healthy loan is small but never zero.' }
      },
      {
        heading: 'The Three Stages',
        paragraphs: [
          'Stage 1 covers performing assets with no significant increase in credit risk (SICR) since initial recognition: the allowance equals 12-month ECL — the losses from default events possible in the next 12 months, not the losses over the next 12 months of the loan\u2019s life. Interest revenue is calculated on the gross carrying amount.',
          'Stage 2 is triggered by a SICR since origination: the allowance steps up to lifetime ECL — expected shortfalls over the full remaining life. Interest is still recognized on the gross carrying amount. This is where provisions jump materially, which is why the SICR assessment is the most judgmental area in the whole model.',
          'Stage 3 is for credit-impaired assets — objective evidence of default such as 90 days past due or the borrower in financial difficulty. The allowance is lifetime ECL, but interest revenue now switches to the net carrying amount (gross minus loss allowance). Assets can cure: if credit quality improves, they transfer back to Stage 2 or Stage 1.'
        ],
        table: {
          headers: ['Stage', 'Trigger', 'Allowance', 'Interest basis'],
          rows: [
            ['Stage 1 — Performing', 'No SICR since origination', '12-month ECL', 'Gross carrying amount'],
            ['Stage 2 — SICR', 'Significant increase in credit risk', 'Lifetime ECL', 'Gross carrying amount'],
            ['Stage 3 — Credit-impaired', 'Objective evidence of impairment', 'Lifetime ECL', 'Net carrying amount (after allowance)']
          ]
        },
        callout: { type: 'warning', text: 'The classic confusion: Stage 2 and Stage 3 both use lifetime ECL, but they differ in the interest basis (gross vs net) and in what triggered the move (risk increase vs actual impairment). Examiners test exactly this boundary.' }
      },
      {
        heading: 'SICR: The Trigger That Moves You to Stage 2',
        paragraphs: [
          'A significant increase in credit risk is assessed by comparing the risk of default at the reporting date with the risk at initial recognition — it is a relative test, not an absolute one. A loan originated to a risky borrower that stays equally risky has no SICR; a prime mortgage whose default probability doubles does.',
          'IFRS 9 gives indicators rather than a formula: significant increase in probability of default, actual or expected downgrade in credit rating, adverse changes in business or economic conditions affecting the borrower, breach of covenant, and significant increase in credit risk on other instruments of the same borrower. There is a rebuttable presumption that 30 days past due signals SICR.',
          'Two reliefs matter. The low-credit-risk exemption lets investment-grade assets stay in Stage 1 without a full SICR assessment. And for the simplified approach (trade receivables without significant financing components), there is no staging at all — always lifetime ECL from origination.'
        ],
        bullets: [
          'SICR = relative increase in default risk since origination, not an absolute risk level.',
          '30 days past due: rebuttable presumption of SICR.',
          'Indicators: PD increase, downgrades, covenant breaches, borrower financial difficulty, adverse outlook.',
          'Low credit risk (investment grade): may remain in Stage 1.'
        ]
      },
      {
        heading: 'The Staging Flow: A Loan\u2019s Life in Steps',
        paragraphs: [
          'Follow a 200,000 mortgage originated at 4% to see the stages in motion. At origination it enters Stage 1 with a 12-month ECL of, say, 1,500 — a small day-one provision that reduces the loan\u2019s carrying amount immediately. Each period the ECL is remeasured as forecasts and borrower behavior evolve.',
          'Eighteen months later the borrower loses overtime income, misses one payment, and the probability of default doubles versus origination: SICR is triggered and the loan moves to Stage 2, where the lifetime ECL might be 14,000. The 12,500 increase hits profit or loss at once — this "cliff effect" is the most dramatic P&L feature of the model.',
          'A year later the borrower stops paying entirely and the loan is 90 days past due: objective evidence of impairment moves it to Stage 3. Lifetime ECL is now 40,000 and interest accrues on the net 160,000. If the borrower later resumes full payments and the arrears clear, the loan can transfer back to Stage 2 or even Stage 1 — staging is not a one-way street.'
        ],
        steps: [
          'Step 1 — Origination: recognize the loan and a Stage 1 allowance for 12-month ECL (debit credit-loss expense, credit loss allowance).',
          'Step 2 — Each reporting date: reassess SICR by comparing current default risk with origination; update the ECL measurement with fresh forecasts.',
          'Step 3 — SICR identified (e.g., 30+ days past due, PD doubled): transfer to Stage 2 and remeasure to lifetime ECL; the increase hits P&L immediately.',
          'Step 4 — Objective evidence of impairment (90 DPD, financial difficulty): transfer to Stage 3; lifetime ECL continues but interest switches to the net carrying amount.',
          'Step 5 — Resolution: write off balances with no reasonable expectation of recovery, or transfer back through the stages if credit quality cures.'
        ]
      },
      {
        heading: 'Journal Entries: Recognition and Stage Transfers',
        paragraphs: [
          'The loss allowance is a contra-asset presented against the loan — the statement shows the gross carrying amount and the allowance separately in the notes. Increases in ECL are debited to credit impairment losses in profit or loss; decreases (improvements, cures) are credited back through the same line. Stage transfers themselves need no entry beyond remeasuring the allowance to the new basis.',
          'Continuing the mortgage example: the move from Stage 1 (1,500 allowance) to Stage 2 (14,000 lifetime ECL) requires a 12,500 top-up. When the loan later reaches Stage 3 with a 40,000 allowance, a further 26,000 is recognized. Each top-up reduces profit immediately — there is no smoothing and no deferral.',
          'Disclosure is extensive: the notes must show the loss allowance by stage, the movements between stages, the inputs and assumptions (including forward-looking information), and how SICR is determined. For banks, this note is often the single most-scrutinized page in the annual report.'
        ],
        journal: {
          transaction: 'Mortgage moves to Stage 2: lifetime ECL 14,000 vs existing Stage 1 allowance 1,500 \u2192 top-up 12,500.',
          lines: [
            { account: 'Credit Impairment Loss (P&L)', dr: 12500, cr: null },
            { account: 'Loss Allowance — Loans', dr: null, cr: 12500 }
          ],
          narration: 'Increase loss allowance on transfer to Stage 2 (lifetime ECL)'
        },
        impact: {
          pl: 'Profit down 12,500 in the period of transfer — the "cliff effect" of moving from 12-month to lifetime ECL.',
          bs: 'Net loan carrying amount down 12,500 (contra-asset up); equity down 12,500 via retained earnings. Gross loan unchanged.',
          cf: 'No cash effect — the allowance is non-cash until actual default and write-off.'
        }
      },
      {
        heading: 'The Simplified Approach: Trade Receivables',
        paragraphs: [
          'For trade receivables, contract assets, and lease receivables without a significant financing component, IFRS 9 permits — and in some cases requires — the simplified approach: always measure the loss allowance at lifetime ECL from initial recognition. No staging, no SICR assessment, no 12-month ECL.',
          'In practice this is implemented with a provision matrix: receivables are grouped by age (current, 1–30 days, 31–60, 61–90, over 90 days past due) and a historical loss rate, adjusted for forward-looking information, is applied to each bucket. A 10 million receivables ledger might carry 1% on current balances but 25% on balances over 90 days.',
          'This is the ECL model most non-financial companies actually use. The audit focus is on whether the historical rates are still relevant and whether the forward-looking overlay (e.g., a downturn in the customer\u2019s sector) is reasonable — not on staging mechanics.'
        ],
        table: {
          headers: ['Aging bucket', 'Gross receivables', 'Loss rate', 'ECL allowance'],
          rows: [
            ['Current', '6,000,000', '1%', '60,000'],
            ['1–30 days past due', '2,000,000', '3%', '60,000'],
            ['31–60 days past due', '1,000,000', '8%', '80,000'],
            ['61–90 days past due', '500,000', '15%', '75,000'],
            ['Over 90 days past due', '500,000', '25%', '125,000'],
            ['Total', '10,000,000', '', '400,000']
          ]
        },
        callout: { type: 'example', text: 'Total lifetime ECL of 400,000 is recognized from day one on these receivables — 4% of the ledger — with no Stage 1 concept. As balances age into worse buckets, the allowance is topped up through profit or loss.' }
      },
      {
        heading: 'Default, Write-Off, and Recovery',
        paragraphs: [
          'IFRS 9 presumes default at 90 days past due (rebuttable with reasonable evidence) or earlier when the borrower is unlikely to pay in full without recourse to collateral — bankruptcy, major financial difficulty, or a distressed restructuring all qualify. Default feeds the Stage 3 assessment and the regulatory capital calculations that run alongside.',
          'A write-off happens when there is no reasonable expectation of recovering the contractual cash flows — in full or in part. The gross asset and the related allowance are derecognized together. Crucially, write-off does not end collection efforts: the company may keep pursuing the debt, and any subsequent recovery is recognized in profit or loss (typically as a credit to impairment losses).',
          'Partial write-offs are common: a 200,000 loan with a 150,000 allowance might be written down by 100,000 where recovery of that portion is hopeless, leaving a 100,000 net asset still pursued. The discipline is that write-off reflects economic reality, not a decision to forgive.'
        ],
        journal: {
          transaction: 'Write off 100,000 of a loan with no reasonable expectation of recovery (allowance already 150,000).',
          lines: [
            { account: 'Loss Allowance — Loans', dr: 100000, cr: null },
            { account: 'Loan Receivable (gross)', dr: null, cr: 100000 }
          ],
          narration: 'Partial write-off of unrecoverable loan balance'
        },
        impact: {
          pl: 'No P&L impact if the allowance already covered the amount — the loss was recognized when the ECL was booked. Under-provisioned write-offs hit P&L here.',
          bs: 'Gross loan and allowance both down 100,000; net carrying amount unchanged.',
          cf: 'No cash effect at write-off. Any later cash recovery is recognized in P&L and as an operating cash inflow.'
        },
        callout: { type: 'interview', text: 'Interviewers probe write-offs to test whether you understand timing: the P&L pain of a write-off usually happened quarters earlier when the ECL was recognized. A write-off with no P&L impact is a sign the provisioning worked — not a sign nothing was lost.' }
      }
    ],
    mistakes: [
      'Using 12-month ECL after a SICR — Stage 2 and Stage 3 always require lifetime ECL.',
      'Treating SICR as an absolute risk test instead of comparing default risk with initial recognition.',
      'Recognizing interest on the gross amount for Stage 3 assets instead of the net carrying amount.',
      'Applying the three-stage model to trade receivables instead of the simplified lifetime-ECL approach.',
      'Assuming a write-off ends the story — recoveries after write-off are recognized in profit or loss.',
      'Ignoring forward-looking information and booking ECL on historical loss rates alone.'
    ],
    interviewQA: [
      {
        q: 'Explain the difference between 12-month ECL and lifetime ECL, and when each applies.',
        a: '12-month ECL is the portion of lifetime expected losses resulting from default events possible within 12 months of the reporting date — it is not the expected losses over the next 12 months of cash flows. It applies in Stage 1, where there has been no significant increase in credit risk since origination. Lifetime ECL covers expected shortfalls over the full remaining life and applies in Stage 2 (SICR) and Stage 3 (credit-impaired). The switch from 12-month to lifetime is what creates the cliff effect in provisions when a loan deteriorates.'
      },
      {
        q: 'What triggers a move from Stage 1 to Stage 2, and why is it so judgmental?',
        a: 'A significant increase in credit risk since initial recognition — assessed by comparing the current risk of default with the risk at origination, a relative test. Indicators include higher probability of default, rating downgrades, covenant breaches, and 30 days past due as a rebuttable presumption. It is judgmental because "significant" has no bright line, the assessment blends quantitative models with qualitative overlays, and the resulting jump from 12-month to lifetime ECL can move earnings materially — making it a prime area for management bias and audit challenge.'
      },
      {
        q: 'How does the simplified approach for trade receivables differ from the general model?',
        a: 'There is no staging and no SICR assessment: the loss allowance is always lifetime ECL from initial recognition. In practice companies use a provision matrix — aging buckets with historical loss rates adjusted for forward-looking conditions. It exists because trade receivables are short-term and numerous, so a full three-stage apparatus would cost more than it informs. The key audit point is whether the historical rates and the forward-looking overlay remain appropriate, not whether staging was applied.'
      }
    ],
    quiz: [
      { question: 'The core change from IAS 39 to IFRS 9 impairment was:', options: ['Higher discount rates', 'From incurred loss (after a loss event) to expected credit losses recognized from origination', 'From lifetime to 12-month measurement', 'Removing impairment for banks'], answer: 1, explanation: 'IAS 39 waited for objective evidence of a loss event, recognizing too little too late. IFRS 9 requires forward-looking ECL from day one, with staging as credit risk changes.', difficulty: 'Foundation', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'A performing loan with no significant increase in credit risk since origination sits in:', options: ['Stage 3', 'Stage 2', 'Stage 1 — 12-month ECL', 'Outside the ECL model'], answer: 2, explanation: 'Stage 1 is for performing assets without SICR: the allowance is 12-month ECL and interest accrues on the gross carrying amount.', difficulty: 'Foundation', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: '12-month ECL means:', options: ['The losses expected over the next 12 months of the loan\u2019s cash flows', 'The lifetime losses from default events that are possible within the next 12 months', 'One twelfth of lifetime ECL', 'The losses already incurred in the last 12 months'], answer: 1, explanation: '12-month ECL is the portion of lifetime expected credit losses arising from default events possible in the next 12 months — a probability-weighted slice of lifetime losses, not a 12-month cash-flow forecast.', difficulty: 'Advanced', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'A borrower\u2019s probability of default doubles versus origination and the loan is 35 days past due. The correct staging is:', options: ['Remains Stage 1 — payment is only slightly late', 'Stage 2 — SICR triggers lifetime ECL', 'Stage 3 — 35 days past due means default', 'Write off immediately'], answer: 1, explanation: 'Doubled PD plus 30+ days past due (the rebuttable SICR presumption) is a significant increase in credit risk: move to Stage 2 and remeasure to lifetime ECL. Default is presumed at 90 days, not 35.', difficulty: 'Intermediate', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'In Stage 3, interest revenue is recognized on:', options: ['The gross carrying amount, as in Stages 1 and 2', 'The net carrying amount (gross minus loss allowance)', 'Cash received only', 'The original principal'], answer: 1, explanation: 'Once an asset is credit-impaired, interest accrues on the amortized (net) carrying amount — recognizing interest on money not expected to be recovered would overstate income.', difficulty: 'Intermediate', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'IFRS 9\u2019s rebuttable presumption for default is:', options: ['30 days past due', '90 days past due or unlikeliness to pay', '180 days past due', 'Any missed payment'], answer: 1, explanation: 'Default is presumed at 90 days past due or when the borrower is unlikely to pay in full without recourse to collateral — 30 days is the SICR presumption, a different threshold.', difficulty: 'Intermediate', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'A mortgage moves from Stage 1 (allowance 1,500) to Stage 2 (lifetime ECL 14,000). The entry is:', options: ['Debit loss allowance 12,500 / credit P&L 12,500', 'Debit credit impairment loss 12,500 / credit loss allowance 12,500', 'No entry — staging is disclosure only', 'Debit loan receivable 12,500 / credit cash 12,500'], answer: 1, explanation: 'The allowance is topped up by 12,500 (14,000 \u2212 1,500) with the increase hitting profit or loss immediately — the cliff effect of moving to lifetime ECL.', difficulty: 'Intermediate', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'Under the simplified approach, trade receivables are measured at:', options: ['12-month ECL with staging', 'Lifetime ECL from initial recognition, no staging', 'Amortized cost with no impairment', 'Fair value through profit or loss'], answer: 1, explanation: 'Trade receivables without significant financing components use lifetime ECL from day one — typically via a provision matrix by aging bucket — with no Stage 1/2/3 mechanics.', difficulty: 'Intermediate', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'A loan is written off because there is no reasonable expectation of recovery. Which statement is true?', options: ['The P&L loss always occurs at write-off', 'Gross asset and allowance are derecognized together; later recoveries go to P&L', 'Collection efforts must stop at write-off', 'Write-off increases the loss allowance'], answer: 1, explanation: 'Write-off derecognizes the gross balance against the allowance (P&L impact only if under-provisioned). Enforcement may continue, and any subsequent recovery is recognized in profit or loss.', difficulty: 'Advanced', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'A Stage 3 loan cures — the borrower resumes full payments and arrears clear. It may:', options: ['Stay in Stage 3 permanently', 'Transfer back to Stage 2 or Stage 1 if credit risk improves', 'Be written off', 'Move directly to FVTPL'], answer: 1, explanation: 'Staging is not one-way: if the SICR reverses or the credit impairment is cured, the asset transfers back and the allowance is remeasured to the lower basis, crediting P&L.', difficulty: 'Intermediate', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'An investment-grade bond with no SICR indicators may:', options: ['Skip ECL entirely', 'Remain in Stage 1 under the low-credit-risk exemption', 'Use the simplified approach', 'Be measured at FVTPL to avoid ECL'], answer: 1, explanation: 'The low-credit-risk exemption allows investment-grade instruments to stay in Stage 1 without a full SICR assessment — though a (small) 12-month ECL allowance is still required.', difficulty: 'Advanced', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'ECL cash shortfalls are discounted at:', options: ['The current market rate', 'The original effective interest rate', 'The risk-free rate', 'They are not discounted'], answer: 1, explanation: 'ECL is the present value of cash shortfalls discounted at the original EIR (or an approximation), keeping the impairment measurement consistent with the asset\u2019s amortized-cost basis.', difficulty: 'Advanced', topic: 'Credit Losses', skill: 'Financial Instruments' }
    ]
  },
  {
    id: 'm20', level: 5, levelTitle: 'Financial Instruments', title: 'Effective Interest Rate',
    standard: 'IFRS 9', tagline: 'The coupon tells you what cash arrives; the effective rate tells you what you actually earned.',
    description: 'A loan priced at 6% can easily yield 7.9% once fees, premiums, and transaction costs are spread over its life. This module explains the effective interest rate — the constant yield IFRS 9 uses for amortized cost — through a worked loan example, and shows why accounting interest almost never equals contractual interest.',
    minutes: 18, skills: ['Financial Instruments'],
    sections: [
      {
        heading: 'Contract Rate vs Accounting Yield',
        paragraphs: [
          'Consider a 3-year loan: principal 1,000, contractual interest 6% payable annually (60 per year), plus a 50 origination fee paid by the borrower upfront. The lender disburses 1,000 but immediately receives 50, so its net investment is 950 — yet the contractual cash flows (60, 60, 1,060) are priced on 1,000. Earning those cash flows on a 950 investment must produce a yield above 6%.',
          'The effective interest rate is the single rate that exactly discounts the expected future cash receipts to the initial carrying amount of 950. Solving 950 = 60/(1+r) + 60/(1+r)\u00b2 + 1,060/(1+r)\u00b3 gives r \u2248 7.9%. That 1.9 percentage-point gap is the fee being spread over the loan\u2019s life — and it is why "interest income" in IFRS financial statements rarely matches the contractual coupon.',
          'The borrower\u2019s mirror image: its liability starts at 950 (proceeds net of the fee it paid) and its effective borrowing cost is also 7.9%, not the 6% coupon. Both sides amortize the same economics in opposite directions.'
        ],
        bullets: [
          'Net investment 950 vs contractual cash flows priced on 1,000 \u2192 yield must exceed the 6% coupon.',
          'EIR \u2248 7.9%: the rate discounting expected cash flows back to the 950 initial carrying amount.',
          'The 50 fee is not day-one income — it is spread over the loan\u2019s life through the higher yield.',
          'Borrower and lender both use 7.9% on their 950 carrying amounts.'
        ],
        callout: { type: 'key', text: 'The effective interest rate is the rate that exactly discounts estimated future cash payments or receipts through the expected life to the gross carrying amount of the asset (or amortized cost of the liability). Fees, points, transaction costs, premiums, and discounts are all inside it.' }
      },
      {
        heading: 'Amortized Cost Mechanics, Year by Year',
        paragraphs: [
          'Each period, interest income equals the opening amortized cost multiplied by the EIR — a constant 7.9% yield on a changing balance. Cash received (60) is less than interest income in the early years, so the difference accretes to the carrying amount: that accretion is the fee being recognized gradually.',
          'Year 1: opening 950 \u00d7 7.9% = 75 interest income; cash 60 received; closing amortized cost 950 + 75 \u2212 60 = 965. Year 2: 965 \u00d7 7.9% = 76; cash 60; closing 981. Year 3: 981 \u00d7 7.9% \u2248 78; cash 1,060 (60 interest + 1,000 principal); closing \u2248 0. Total interest income over the life is 229 — the 180 of contractual coupons plus the 50 fee, less rounding.',
          'Notice the discipline: total income over the loan\u2019s life is identical whether you think in coupons-plus-fee or in EIR terms. The EIR only controls timing — front-loading the fee into a constant yield instead of recognizing it all on day one.'
        ],
        table: {
          headers: ['Year', 'Opening amortized cost', 'Interest income (7.9%)', 'Cash received', 'Closing amortized cost'],
          rows: [
            ['1', '950', '75', '(60)', '965'],
            ['2', '965', '76', '(60)', '981'],
            ['3', '981', '78', '(1,060)', '0'],
            ['Total', '', '229', '(1,180)', '']
          ]
        },
        journal: {
          transaction: 'Origination: disburse 1,000 loan, receive 50 origination fee in cash — net carrying amount 950.',
          lines: [
            { account: 'Loan Receivable', dr: 950, cr: null },
            { account: 'Cash', dr: null, cr: 950 }
          ],
          narration: 'Loan recognized at net amount including fee received (EIR \u2248 7.9%)'
        },
        impact: {
          pl: 'No day-one profit: the 50 fee is deferred into the yield, not recognized immediately.',
          bs: 'Loan receivable 950 (not 1,000) — the fee reduces the initial carrying amount.',
          cf: 'Net investing cash outflow of 950 (1,000 disbursed less 50 fee received).'
        }
      },
      {
        heading: 'Year 1 Interest: Accrual vs Cash',
        paragraphs: [
          'The Year 1 entries show the EIR method working. First, accrue interest income of 75 — 15 more than the 60 coupon — and add it to the loan\u2019s carrying amount. Then record the 60 cash receipt against the loan. The net 15 increase in the carrying amount is the first slice of the 50 fee flowing into income.',
          'Compare with naive coupon accounting: 60 of income and a flat 950 carrying amount would leave the 50 fee unrecognized until maturity (or misstate the yield every year). The EIR method instead reports a true 7.9% return on the actual money at risk each period — the number a treasury manager would want for performance measurement.',
          'For the borrower, the entries mirror: interest expense 75 accrued to the liability, 60 paid in cash, liability growing by 15. Same rate, same economics, opposite sides.'
        ],
        journal: {
          transaction: 'Year 1: accrue interest income at EIR (950 \u00d7 7.9% = 75), then receive the 60 coupon in cash.',
          lines: [
            { account: 'Loan Receivable', dr: 75, cr: null },
            { account: 'Interest Income (P&L)', dr: null, cr: 75 }
          ],
          narration: 'Year 1 interest at effective rate 7.9% (coupon 60 + fee amortization 15)'
        },
        impact: {
          pl: 'Interest income 75 vs 60 cash coupon — the 15 difference is fee amortization recognized through the yield.',
          bs: 'Loan carrying amount rises to 1,025 before the cash receipt, then falls to 965 after the 60 is received.',
          cf: 'No cash effect on the accrual; the 60 receipt is an investing cash inflow (or operating, per the entity\u2019s policy for a lender).'
        },
        callout: { type: 'warning', text: 'The 15 gap between income (75) and cash (60) is not an error — it is the whole point. If interest income always equaled the coupon, fees would never be recognized and yields would be misstated.' }
      },
      {
        heading: 'What Goes Into the EIR Calculation',
        paragraphs: [
          'IFRS 9 is explicit: the EIR calculation includes all fees and points paid or received between parties to the contract that are an integral part of the effective interest rate, plus transaction costs, premiums, and discounts. Origination fees, commitment fees (when drawdown is probable), and direct broker costs all adjust the initial carrying amount and hence the yield.',
          'What stays out: future credit losses are not included in the EIR for assets that are not purchased or originated credit-impaired (the EIR is calculated on contractual cash flows, with ECL handled separately via the loss allowance). Expected prepayments can be included if they can be reliably estimated; otherwise the contractual life is used.',
          'For floating-rate instruments, the EIR is not locked at inception — it is recalculated when the contractual rate reprices, so the carrying amount tracks the new market rate. And when estimated cash flows are revised (e.g., a fee waiver), the amortized cost is recalculated by discounting the revised cash flows at the original EIR, with the adjustment recognized immediately in profit or loss.'
        ],
        bullets: [
          'Included: origination fees, integral points, transaction costs, premiums/discounts.',
          'Excluded: future expected credit losses (ECL is separate), unless the asset is purchased credit-impaired.',
          'Floating-rate loans: EIR updated at each repricing date.',
          'Revised cash-flow estimates: recalculate amortized cost at the original EIR; difference hits P&L immediately.'
        ]
      },
      {
        heading: 'EIR in Practice: Why Finance Teams Care',
        paragraphs: [
          'The EIR is the bridge between deal economics and reported income. A mortgage desk quoting 6% while collecting 2 points of fees is really earning near 8% on deployed cash in the early years — the EIR reveals the true return on capital and prices the next deal correctly. Misstating it misstates both profitability and the impairment discount rate, since ECL shortfalls are discounted at the original EIR.',
          'Common failure points: recognizing origination fees as day-one income (front-running profit), forgetting to include transaction costs in the yield, and using the contractual rate to discount ECL cash shortfalls instead of the EIR. Each one distorts the timing of income the EIR method exists to get right.',
          'For analysts, comparing net interest margins across banks requires knowing how aggressively each one recognizes fees — two banks with identical coupons can report different interest income purely through fee amortization profiles.'
        ],
        callout: { type: 'interview', text: 'Expect: "A bank charges a 50 fee on a 1,000 loan at 6% — what is interest income in Year 1?" Walk through: net investment 950, EIR \u2248 7.9%, income = 950 \u00d7 7.9% = 75, not 60. Then explain the 15 is fee amortization and total life income is 229 (180 coupons + 50 fee).' }
      }
    ],
    mistakes: [
      'Recognizing origination fees as day-one income instead of spreading them through the EIR.',
      'Using the contractual coupon (6%) as the accounting yield instead of the EIR (7.9%).',
      'Excluding transaction costs and integral fees from the initial carrying amount and yield calculation.',
      'Discounting ECL cash shortfalls at the market rate or coupon instead of the original EIR.',
      'Locking the EIR forever on floating-rate loans instead of updating it at repricing dates.',
      'Including expected future credit losses in the EIR for ordinary (non-credit-impaired) assets.'
    ],
    interviewQA: [
      {
        q: 'A loan of 1,000 at 6% carries a 50 origination fee. Why is the accounting yield not 6%?',
        a: 'Because the lender\u2019s net investment is 950 after the fee, while the contractual cash flows of 60 per year plus 1,000 at maturity are priced on 1,000. The effective interest rate — the rate discounting those cash flows back to 950 — is approximately 7.9%. Each year\u2019s interest income is the opening amortized cost times 7.9%, so Year 1 shows 75 of income against 60 of cash, with the 15 difference being the fee amortized through the yield. Total life income is 229: the 180 of coupons plus the 50 fee.'
      },
      {
        q: 'What happens to amortized cost when expected cash flows are revised mid-life?',
        a: 'The entity recalculates the carrying amount by discounting the revised estimated cash flows at the original effective interest rate, and recognizes the difference immediately in profit or loss. The original EIR is preserved because it represents the yield agreed at inception; only the cash-flow estimates change. This catch-up adjustment is how fee waivers, restructured payment schedules, and revised prepayment expectations flow through the amortized-cost model without restating prior periods.'
      }
    ],
    quiz: [
      { question: 'The effective interest rate is defined as:', options: ['The contractual coupon rate on the loan', 'The rate that exactly discounts estimated future cash flows to the initial carrying amount', 'The central bank base rate plus a margin', 'Total interest divided by the loan term'], answer: 1, explanation: 'The EIR is the internal rate of return equating expected cash payments/receipts with the initial carrying amount — it is the definition that makes fee and discount amortization work.', difficulty: 'Foundation', topic: 'Interest', skill: 'Financial Instruments' },
      { question: 'A 3-year loan of 1,000 at 6% has a 50 origination fee received upfront. The EIR is approximately:', options: ['6.0% — the contractual rate', '5.0% — net of the fee', '7.9% — above the coupon, because 950 of net investment earns 1,000-priced cash flows', '9.0% — double the fee spread'], answer: 2, explanation: 'Net investment is 950; discounting the cash flows (60, 60, 1,060) back to 950 requires about 7.9%. The fee raises the yield above the coupon — it is never day-one income.', difficulty: 'Intermediate', topic: 'Interest', skill: 'Financial Instruments' },
      { question: 'Why does the EIR exceed the contractual rate when an origination fee is received?', options: ['Because fees are added to the coupon', 'Because the same cash flows are earned on a smaller net investment, so the yield must be higher', 'Because of credit risk', 'Because of inflation'], answer: 1, explanation: 'Yield is return on money actually invested. The 50 fee means only 950 is at risk while cash flows are priced on 1,000 — the mathematics of a smaller denominator forces a higher rate.', difficulty: 'Intermediate', topic: 'Interest', skill: 'Financial Instruments' },
      { question: 'Which items are included in the EIR calculation?', options: ['Only the contractual coupon', 'Fees, points, transaction costs, premiums and discounts integral to the loan', 'Expected future credit losses', 'Operating costs of the lending department'], answer: 1, explanation: 'IFRS 9 includes all integral fees, points, transaction costs, premiums, and discounts in the EIR. Future credit losses are handled separately through ECL, not baked into the yield.', difficulty: 'Intermediate', topic: 'Interest', skill: 'Financial Instruments' },
      { question: 'In Year 1 of the example (opening 950, EIR 7.9%, coupon 60), interest income is:', options: ['60 — the cash coupon', '75 — opening amortized cost \u00d7 EIR', '50 — the fee', '110 — coupon plus fee'], answer: 1, explanation: 'Interest income = 950 \u00d7 7.9% = 75. The 15 excess over the 60 coupon is the first slice of fee amortization accreted to the carrying amount.', difficulty: 'Intermediate', topic: 'Interest', skill: 'Financial Instruments' },
      { question: 'At loan origination (disburse 1,000, receive 50 fee), the correct entry is:', options: ['Debit loan 1,000 / credit cash 1,000; credit fee income 50', 'Debit loan receivable 950 / credit cash 950 (fee reduces initial carrying amount)', 'Debit cash 50 / credit fee income 50 immediately', 'No entry until first repayment'], answer: 1, explanation: 'The fee is part of the yield, so the loan is recognized at the net 950. Crediting 50 to day-one income would front-run profit that belongs to the whole loan term.', difficulty: 'Advanced', topic: 'Interest', skill: 'Financial Instruments' },
      { question: 'For a floating-rate loan, the EIR is:', options: ['Fixed forever at the inception rate', 'Recalculated when the contractual rate reprices', 'Replaced by the coupon each period', 'Set to the market rate at each year-end'], answer: 1, explanation: 'Floating-rate instruments update their EIR at each repricing date so the carrying amount tracks the new contractual rate — unlike fixed-rate loans, where the original EIR is locked.', difficulty: 'Advanced', topic: 'Interest', skill: 'Financial Instruments' },
      { question: 'When estimated cash flows on an amortized-cost asset are revised, the entity:', options: ['Restates prior periods', 'Recalculates amortized cost using the original EIR and books the difference in P&L immediately', 'Changes the EIR to keep the carrying amount flat', 'Ignores the revision until maturity'], answer: 1, explanation: 'The catch-up approach: discount revised cash flows at the original EIR, recognize the adjustment in profit or loss at once. The original yield is preserved; only estimates change.', difficulty: 'Advanced', topic: 'Interest', skill: 'Financial Instruments' },
      { question: 'ECL cash shortfalls on an amortized-cost loan are discounted at:', options: ['The contractual coupon rate', 'The original effective interest rate', 'The current market borrowing rate', 'Zero — ECL is undiscounted'], answer: 1, explanation: 'IFRS 9 requires discounting ECL shortfalls at the original EIR (or an approximation), keeping impairment measurement consistent with the asset\u2019s amortized-cost basis. Using the coupon would understate the provision.', difficulty: 'Advanced', topic: 'Interest', skill: 'Financial Instruments' }
    ]
  },
  {
    id: 'm21', level: 5, levelTitle: 'Financial Instruments', title: 'IAS 21 — Foreign Exchange',
    standard: 'IAS 21', tagline: 'One invoice, two exchange rates, and a gain or loss you never invoiced anyone for.',
    description: 'A USD 100,000 invoice booked at 1.10 and retranslated at 1.15 creates a 3,952 foreign exchange loss with no new transaction. This module teaches functional versus presentation currency, why monetary items are retranslated at the closing rate with differences in profit or loss, and how translating a foreign subsidiary differs completely.',
    minutes: 20, skills: ['IFRS Fundamentals'],
    sections: [
      {
        heading: 'Three Currencies, Not One',
        paragraphs: [
          'IAS 21 works with three distinct currency concepts, and confusing them is the root of most FX errors. The functional currency is the currency of the primary economic environment in which the entity operates — the one that mainly drives its sales prices and costs. Every entity has exactly one functional currency, determined by economic facts, not by choice.',
          'The presentation currency is the currency in which the financial statements are presented — a free choice (a euro-functional company may present in USD for its American investors). A foreign currency is then simply any currency other than the functional currency. Transactions denominated in a foreign currency are translated into the functional currency; translating functional-currency statements into a presentation currency is a separate, later step with different rules.'
        ],
        bullets: [
          'Functional currency: the primary economic environment\u2019s currency — determined by facts, one per entity.',
          'Presentation currency: the reporting choice — can differ from functional currency.',
          'Foreign currency: anything other than the functional currency.',
          'Step 1: foreign \u2192 functional (this module\u2019s core). Step 2: functional \u2192 presentation (different rules).'
        ],
        callout: { type: 'key', text: 'All foreign currency transactions are first measured in the functional currency. The presentation currency only enters at the final translation step — it never affects how individual transactions are recorded.' }
      },
      {
        heading: 'Finding the Functional Currency',
        paragraphs: [
          'IAS 21 lists primary indicators: the currency that mainly influences sales prices (and the country whose regulations and competitive forces shape them), and the currency that mainly influences labor, material, and other costs. Secondary indicators include the currency of financing and of operating receipts retained.',
          'A Spanish manufacturer selling across Europe in euros, paying staff and suppliers in euros, and borrowing in euros is euro-functional — even if it invoices some customers in dollars. But a Peruvian subsidiary that buys in soles, sells in soles, and is funded locally is sol-functional, even though the group presents in euros. Functional currency follows the economics of the operation, not the nationality of the parent.',
          'Getting this wrong poisons everything downstream: every FX gain and loss, and the entire translation method, keys off the functional currency. It is changed only if the underlying economic facts change — it is not an accounting policy choice to be flipped for convenience.'
        ],
        bullets: [
          'Primary: currency driving sales prices and operating costs.',
          'Secondary: currency of financing and retained operating receipts.',
          'A subsidiary\u2019s functional currency is assessed on its own economics, not the parent\u2019s.',
          'Change it only when the underlying facts change — rarely.'
        ]
      },
      {
        heading: 'Recording the Transaction: Spot Rate on Day One',
        paragraphs: [
          'A foreign currency transaction is initially recognized in the functional currency using the spot exchange rate at the date of the transaction. In practice, a weekly or monthly average rate may be used if exchange rates do not fluctuate significantly — but for material transactions, the actual spot rate is expected.',
          'Worked example: a euro-functional company sells goods for USD 100,000 when the spot rate is 1.10 USD per euro. The receivable and revenue are recognized at 100,000 \u00f7 1.10 = 90,909. From this moment, the 100,000 dollars owed is a monetary item — a right to receive a fixed number of currency units — and it will be retranslated at every reporting date until settled.',
          'Monetary items are cash and rights/obligations to receive or pay a fixed or determinable number of currency units: receivables, payables, loans, cash balances. Non-monetary items — inventory, prepayments, advances received, equity investments at cost — are not retranslated.'
        ],
        journal: {
          transaction: 'Sale of goods for USD 100,000; spot rate 1.10 USD/EUR \u2192 90,909 recognized.',
          lines: [
            { account: 'Trade Receivable', dr: 90909, cr: null },
            { account: 'Revenue', dr: null, cr: 90909 }
          ],
          narration: 'USD 100,000 sale translated at spot rate 1.10 on transaction date'
        },
        impact: {
          pl: 'Revenue 90,909 at the transaction-date rate. No FX gain or loss yet.',
          bs: 'Monetary asset (receivable) of 90,909; equity up via retained earnings.',
          cf: 'No cash effect until the customer pays.'
        },
        callout: { type: 'example', text: 'Rate convention matters: 1.10 USD per EUR means each euro buys 1.10 dollars, so 100,000 dollars converts to fewer euros: 100,000 \u00f7 1.10 = 90,909. Always check which way the quote runs before dividing.' }
      },
      {
        heading: 'Year-End: Monetary Items Get Retranslated',
        paragraphs: [
          'At each reporting date, monetary items in a foreign currency are retranslated at the closing rate, and the resulting exchange differences are recognized in profit or loss. Continuing the example: at year-end the rate is 1.15 USD per euro, so the USD 100,000 receivable is now worth 100,000 \u00f7 1.15 = 86,957. The euro strengthened, the dollar claim buys fewer euros, and the 3,952 difference is a foreign exchange loss in profit or loss.',
          'This loss is real economics, not an accounting fiction: the company will genuinely receive fewer euros than it recorded. Had the euro weakened instead (say to 1.05), the receivable would have risen to 95,238 and a 4,329 gain would hit P&L. Every open foreign-currency monetary balance reprices this way — receivables, payables, loans, and foreign-currency cash itself.',
          'Non-monetary items carried at historical cost are not retranslated — they stay at the transaction-date rate. A USD advance paid to a supplier (a right to receive goods, not currency) keeps its original euro amount. The classic error is retranslating prepayments and deferred revenue as if they were monetary.'
        ],
        journal: {
          transaction: 'Year-end retranslation: USD 100,000 at closing rate 1.15 \u2192 86,957; previously 90,909 \u2192 loss 3,952.',
          lines: [
            { account: 'Foreign Exchange Loss (P&L)', dr: 3952, cr: null },
            { account: 'Trade Receivable', dr: null, cr: 3952 }
          ],
          narration: 'Retranslation of USD monetary receivable at closing rate 1.15'
        },
        impact: {
          pl: 'FX loss of 3,952 in profit or loss (usually within operating or finance costs per presentation policy). Profit down with no new transaction.',
          bs: 'Receivable down to 86,957; equity down 3,952 via retained earnings.',
          cf: 'No cash effect — unrealized. It reverses or crystallizes when the cash is received.'
        },
        callout: { type: 'warning', text: 'Monetary \u2192 retranslate at closing rate, differences in P&L. Non-monetary at cost \u2192 frozen at the historical rate. Advances, prepayments, and deferred income are non-monetary — retranslating them is one of the most common IAS 21 errors.' }
      },
      {
        heading: 'Settlement: Crystallizing the Difference',
        paragraphs: [
          'When the receivable is finally settled, any exchange difference between the last carrying amount and the cash received also goes to profit or loss. Suppose the customer pays the USD 100,000 when the rate is 1.12: the cash received is 89,286, against a carrying amount of 86,957 — a 2,329 FX gain in P&L on settlement.',
          'Over the full lifecycle, the total P&L effect is simply cash received minus revenue originally recognized: 89,286 \u2212 90,909 = \u2212 1,623, split into the \u2212 3,952 year-end loss and the + 2,329 settlement gain. The interim retranslation entries never change the total — they only allocate it across periods.',
          'Netting presentation is standard: FX gains and losses on the same class of items are typically presented net, and IAS 21 requires disclosure of the total exchange differences recognized in profit or loss.'
        ],
        bullets: [
          'Settlement differences go to P&L, like period-end retranslations.',
          'Total lifetime FX effect = cash ultimately received \u2212 amount originally recognized.',
          'Interim retranslations only allocate that total across reporting periods.',
          'Disclose the total exchange differences recognized in profit or loss.'
        ]
      },
      {
        heading: 'Translating a Foreign Operation: A Different Game',
        paragraphs: [
          'Translating an entire foreign subsidiary\u2019s financial statements into the presentation currency uses the closing-rate method, and its rules are deliberately different from transaction retranslation. Assets and liabilities are translated at the closing rate, income and expenses at the rates at the transaction dates (average rates in practice), and all resulting exchange differences go to other comprehensive income — accumulated in a translation reserve — not profit or loss.',
          'The logic: the parent\u2019s investment in the subsidiary is a net investment whose value fluctuates with exchange rates, but those fluctuations are unrealized until disposal. Sending them through P&L would inject FX noise into operating performance every period. On disposal of the foreign operation, the cumulative translation reserve is recycled to profit or loss as part of the gain or loss on disposal.',
          'Contrast this with the invoice example: a monetary receivable retranslated at the closing rate hits P&L immediately, while a subsidiary\u2019s net assets translated at the closing rate hit OCI. Same closing rate, opposite statement — because one is a foreign currency transaction and the other is a presentation translation.'
        ],
        table: {
          headers: ['Item', 'Transaction (foreign \u2192 functional)', 'Translation (functional \u2192 presentation)'],
          rows: [
            ['Monetary receivable/payable', 'Closing rate; difference in P&L', 'Closing rate; difference in OCI'],
            ['Non-monetary at cost', 'Historical rate; no retranslation', 'Closing rate (whole BS at closing)'],
            ['Income statement', 'Spot rate at transaction date', 'Transaction-date / average rates'],
            ['Where differences land', 'Profit or loss', 'OCI translation reserve; recycled on disposal']
          ]
        },
        callout: { type: 'interview', text: 'The favorite interview trap: "Why does FX on a USD receivable hit P&L but FX on translating a US subsidiary hit OCI?" Answer: the receivable is a foreign currency transaction settled in cash — a realized-or-near economic gain/loss in the functional currency. The subsidiary translation is a presentation exercise on a net investment; the gain is unrealized until the subsidiary is sold, so it waits in OCI.' }
      }
    ],
    mistakes: [
      'Recording foreign transactions directly in the presentation currency instead of the functional currency.',
      'Retranslating non-monetary items (advances, prepayments, deferred revenue) at the closing rate.',
      'Putting transaction FX differences in OCI — they belong in profit or loss (OCI is only for net-investment hedges and presentation translation).',
      'Using an average rate for a material transaction on a day the rate moved significantly.',
      'Forgetting to retranslate foreign-currency cash balances — cash is a monetary item too.',
      'Recycling the translation reserve before the foreign operation is actually disposed of.'
    ],
    interviewQA: [
      {
        q: 'A euro-functional company has a USD 100,000 receivable booked at 1.10. At year-end the rate is 1.15. Walk me through it.',
        a: 'The receivable is a monetary item, so it is retranslated at the closing rate: 100,000 \u00f7 1.15 = 86,957, down from 90,909 — a 3,952 foreign exchange loss recognized in profit or loss. The euro strengthened, so the dollar claim converts to fewer euros. There is no cash effect; the loss reverses or crystallizes at settlement. If the rate had moved the other way, to 1.05, we would book a 4,329 gain instead. The key judgments are the rate direction and remembering that monetary items retranslate while non-monetary items at cost do not.'
      },
      {
        q: 'How do you determine an entity\u2019s functional currency, and can management simply choose it?',
        a: 'No — it is determined by economic facts, not choice. The primary indicators are the currency that mainly influences sales prices and the currency that mainly influences labor, material, and other costs, with financing and retained receipts as secondary indicators. A subsidiary is assessed on its own economics: a sol-based Peruvian operation is sol-functional even with a euro parent. It changes only when the underlying facts change, which is rare — flipping it to manage reported results would be a serious misstatement.'
      }
    ],
    quiz: [
      { question: 'The functional currency is:', options: ['The currency chosen for presenting the financial statements', 'The currency of the primary economic environment in which the entity operates', 'Always the parent company\u2019s currency', 'The currency of the largest transaction'], answer: 1, explanation: 'Functional currency is determined by economic facts — primarily the currencies driving sales prices and costs — not by management choice or the parent\u2019s currency.', difficulty: 'Foundation', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' },
      { question: 'A euro-functional company sells goods for USD 100,000 at a spot rate of 1.10 USD/EUR. Revenue is recognized at:', options: ['USD 100,000', '90,909 (100,000 \u00f7 1.10)', '110,000 (100,000 \u00d7 1.10)', 'The year-end rate'], answer: 1, explanation: 'Foreign currency transactions are initially recorded in the functional currency at the spot rate on the transaction date: 100,000 \u00f7 1.10 = 90,909.', difficulty: 'Intermediate', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' },
      { question: 'At year-end the rate is 1.15 USD/EUR. The USD 100,000 receivable is retranslated to:', options: ['90,909 — historical cost never changes', '86,957, with a 3,952 loss in profit or loss', '86,957, with the difference in OCI', '95,238, with a gain in profit or loss'], answer: 1, explanation: 'Monetary items retranslate at the closing rate: 100,000 \u00f7 1.15 = 86,957. The euro strengthened, so the loss of 3,952 (90,909 \u2212 86,957) is recognized in profit or loss.', difficulty: 'Intermediate', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' },
      { question: 'If the euro had weakened to 1.05 instead, the year-end effect would be:', options: ['A 3,952 loss in P&L', 'A 4,329 gain in P&L (95,238 \u2212 90,909)', 'No entry — gains are not recognized', 'A gain in OCI'], answer: 1, explanation: '100,000 \u00f7 1.05 = 95,238, which exceeds the 90,909 carrying amount: a 4,329 FX gain in profit or loss. FX gains and losses on monetary items are symmetric in P&L.', difficulty: 'Intermediate', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' },
      { question: 'A USD advance paid to a supplier (for future goods) at year-end should be:', options: ['Retranslated at the closing rate like a receivable', 'Left at the historical rate — it is non-monetary', 'Written off', 'Remeasured to fair value'], answer: 1, explanation: 'An advance for goods is a right to receive goods, not currency — it is non-monetary and stays at the transaction-date rate. Only monetary items (fixed currency amounts) retranslate.', difficulty: 'Advanced', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' },
      { question: 'Exchange differences on settling a foreign currency payable are recognized in:', options: ['OCI', 'Profit or loss', 'Retained earnings directly', 'Against the related asset'], answer: 1, explanation: 'Both period-end retranslations and settlement differences on monetary items go to profit or loss. OCI is reserved for presentation translation and qualifying net-investment hedges.', difficulty: 'Intermediate', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' },
      { question: 'When translating a foreign subsidiary into the presentation currency, exchange differences go to:', options: ['Profit or loss immediately', 'OCI, accumulated in a translation reserve and recycled on disposal', 'Goodwill', 'They are not recognized'], answer: 1, explanation: 'The closing-rate translation method sends differences to OCI because they reflect unrealized movements in the net investment. They are recycled to P&L only when the foreign operation is disposed of.', difficulty: 'Advanced', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' },
      { question: 'Under the presentation-translation method, the subsidiary\u2019s income statement is translated at:', options: ['The closing rate', 'The historical rate', 'Exchange rates at the transaction dates (average rates in practice)', 'The parent\u2019s functional currency rate'], answer: 2, explanation: 'Income and expenses use transaction-date rates (averages as a practical expedient), while assets and liabilities use the closing rate — the mismatch is exactly what creates the OCI translation difference.', difficulty: 'Advanced', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' },
      { question: 'A company holds USD 50,000 in a foreign-currency bank account at year-end. It should:', options: ['Leave it at the historical rate — cash is not retranslated', 'Retranslate it at the closing rate with the difference in P&L', 'Translate it at the average rate for the year', 'Disclose it but not retranslate'], answer: 1, explanation: 'Cash is the most monetary of monetary items — a fixed amount of currency. Foreign-currency cash balances are retranslated at the closing rate with differences in profit or loss.', difficulty: 'Intermediate', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' }
    ]
  }
];
