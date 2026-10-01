// Level 7 — Financial Reporting Operations (m26–m30)
export default [
  {
    id: 'm26', level: 7, levelTitle: 'Financial Reporting Operations', title: 'Month-End Closing',
    standard: 'Operations', tagline: 'The close is where accounting earns its credibility — or loses it.',
    description: 'Month-end close turns a month of transactions into numbers management can trust. This module goes deep: the close calendar, cutoff and accruals, prepayments and depreciation, bank/AP/AR/intercompany reconciliations, payroll, FX revaluation, provisions, and the management review that signs it all off — organized as a practical checklist you can actually run.',
    minutes: 26, skills: ['Month-End Closing'],
    sections: [
      {
        heading: 'Why the Close Matters',
        paragraphs: [
          'Every number in the monthly management pack — revenue, margin, working capital — is only as good as the close behind it. A sloppy close means decisions made on fiction: bonuses paid on overstated profit, cash forecasts built on unreconciled bank balances, auditors finding the errors you should have found. A disciplined close, by contrast, is the finance team\'s core product.',
          'The close has three objectives: completeness (everything that belongs to the month is in), accuracy (it is measured right), and cutoff (nothing from next month leaked in, nothing from this month leaked out). Speed matters too — a perfect close delivered on day 20 is useless for managing the business — which is why the close is run as a checklist with owners and deadlines, not as heroics.'
        ],
        callout: { type: 'key', text: 'The close answers three questions: Is everything in? Is it right? Is it in the right period? Speed is the fourth — late numbers are decoration.' }
      },
      {
        heading: 'The Close Calendar: A Practical Checklist',
        paragraphs: [
          'A reliable close is a project plan, not a mood. The calendar below is a typical day-by-day rhythm for a mid-size company closing on a "day 5" timetable — five working days after month-end. Every line has an owner and a deadline; the controller runs a short daily stand-up during close week tracking what is done, blocked, or late.'
        ],
        steps: ['Day 1 — Freeze subledgers: AP, AR, and fixed assets close; no more postings to the closed month without controller approval.', 'Day 1–2 — Book recurring journals: accruals, prepayments, depreciation, payroll.', 'Day 2 — Reconcile bank accounts; book charges, interest, and corrections found.', 'Day 2–3 — Run intercompany matching; investigate and resolve every material difference.', 'Day 3 — Revalue foreign currency balances; review provisions and update where needed.', 'Day 3–4 — Complete all balance sheet reconciliations; every account has an owner and a sign-off.', 'Day 4 — Flux analysis: investigate unusual movements vs prior month and vs budget.', 'Day 5 — Management review of the draft pack; book final adjustments; lock the period in the ERP.']
      },
      {
        heading: 'Cutoff and Accruals',
        paragraphs: [
          'Cutoff is the soul of the close: expenses and revenues must sit in the month the economic event happened, not the month the paperwork arrived. The December electricity bill arrives in January — but the electricity was consumed in December, so December bears the expense via an accrual. Conversely, a January invoice for January services must not be pulled back into December just because someone wants costs "in last year".',
          'Accruals are estimates by nature — you rarely know the exact electricity amount on day 1 — so the discipline is to accrue a reasonable amount and then true it up when the invoice arrives. The classic failure is booking accruals and never reversing them: next month the real invoice arrives, gets booked too, and the cost is double-counted. Every accrual needs a reversal plan or a true-up.'
        ],
        journal: {
          transaction: 'Accrue December electricity: invoice of $12,000 arrives in January for December consumption',
          lines: [
            { account: 'Utilities Expense', dr: 12000, cr: null },
            { account: 'Accrued Expenses', dr: null, cr: 12000 }
          ],
          narration: 'December bears the cost of December consumption. When the invoice arrives in January, it settles the accrual (or is trued up for any difference).'
        },
        impact: { pl: 'December profit is $12,000 lower — the expense is matched to the right month.', bs: 'A $12,000 accrued liability appears until the invoice is paid.', cf: 'No cash effect in December; the outflow hits operating cash flow when paid in January.' }
      },
      {
        heading: 'Prepayments and Depreciation',
        paragraphs: [
          'Prepayments are the mirror of accruals: cash paid before the benefit is consumed. A $60,000 annual insurance premium paid in January covers twelve months — each month expenses $5,000 and reduces the prepaid asset. Booking the whole premium as January expense would trash January\'s profit and flatter the other eleven months.',
          'Depreciation is the same idea applied to fixed assets: the month\'s share of an asset\'s cost. Both are recurring journals, which means they should be templated and automated — the close should never depend on someone remembering to book depreciation manually. Review the fixed asset register monthly for additions, disposals, and assets that became fully depreciated.'
        ],
        journal: {
          transaction: 'Amortize prepaid insurance: $60,000 annual premium, monthly charge for December',
          lines: [
            { account: 'Insurance Expense', dr: 5000, cr: null },
            { account: 'Prepaid Insurance', dr: null, cr: 5000 }
          ],
          narration: 'One twelfth of the annual premium is consumed in December; the prepaid asset falls accordingly.'
        },
        impact: { pl: 'December profit $5,000 lower; eleven more monthly charges will follow.', bs: 'Prepaid insurance asset reduced by $5,000.', cf: 'No December cash effect — the cash left in January when the premium was paid.' },
        bullets: ['Prepayments: cash first, expense later — release monthly.', 'Accruals: expense first, cash later — accrue, then true up or reverse.', 'Depreciation: template it; never rely on memory.']
      },
      {
        heading: 'Reconciliations: Bank, AP, AR, Intercompany',
        paragraphs: [
          'Reconciliations are the close\'s detective controls: each one proves a balance is complete and accurate. The bank reconciliation ties the GL cash balance to the bank statement via outstanding cheques, deposits in transit, and unrecorded charges. AP reconciliations tie the payables ledger to supplier statements, catching unrecorded invoices. AR reconciliations tie receivables to customer balances, surfacing disputes and misapplied cash. Intercompany matching (m25) ensures the group\'s internal balances agree before consolidation.',
          'Every reconciliation needs three things: a preparer independent of the underlying postings, a reviewer who actually reviews, and a deadline. An unreconciled balance sheet account is an unaudited assertion — and auditors will treat it that way.'
        ],
        table: { headers: ['Reconciliation', 'Ties to', 'Catches'], rows: [['Bank', 'Bank statement', 'Unrecorded charges, errors, timing items'], ['Accounts payable', 'Supplier statements', 'Missing invoices, duplicate payments'], ['Accounts receivable', 'Customer balances / aging', 'Disputes, misapplied cash, bad debts'], ['Intercompany', 'Counterparty ledger', 'Mismatches that block consolidation'], ['Fixed assets', 'Physical register', 'Ghost assets, missing additions']] }
      },
      {
        heading: 'Payroll, FX Revaluation, and Provisions',
        paragraphs: [
          'Payroll rarely falls neatly on month-end: if payday is the 5th, the last days of the month must be accrued, and employer social charges accrued with them (full mechanics in m29). Foreign currency balances must be revalued at the closing rate every month — a euro company owing $100,000 sees that liability grow when the euro weakens, and the difference is a foreign exchange gain or loss in profit or loss.',
          'Provisions get a fresh look each close: is the warranty provision still adequate given this month\'s sales? Has the legal case developed? New information after month-end but before sign-off can require adjusting — this is where the close meets IAS 37 and IAS 10 (events after the reporting period).'
        ],
        journal: {
          transaction: 'FX revaluation: euro company owes $100,000; euro weakened, liability revalued upward by $8,000 at month-end rate',
          lines: [
            { account: 'Foreign Exchange Loss (P&L)', dr: 8000, cr: null },
            { account: 'Accounts Payable (USD supplier)', dr: null, cr: 8000 }
          ],
          narration: 'Monetary liabilities in foreign currency are retranslated at the closing rate; the $8,000 increase is an exchange loss.'
        },
        impact: { pl: 'Profit $8,000 lower from the exchange loss.', bs: 'The USD payable is $8,000 higher at the closing rate.', cf: 'No cash effect — the loss is unrealized until the payable is settled.' }
      },
      {
        heading: 'Management Review and Flux Analysis',
        paragraphs: [
          'Before the period locks, management reviews the draft numbers — and the sharpest tool is flux analysis: compare every material line to last month and to budget, and demand an explanation for unusual movements. Revenue up 12% with flat volumes? Explain the price or mix. Travel costs doubled? Show the project. Flux analysis is where errors surface: a $200,000 accrual posted to the wrong account screams in a flux review long before an auditor finds it.',
          'The review ends with sign-offs: the preparer signs each reconciliation, the controller signs the pack, and finance leadership approves the final adjustments. Then — and only then — the period is locked in the ERP. A locked period with a documented review trail is what makes next month\'s close faster and the audit cheaper.'
        ],
        callout: { type: 'interview', text: 'Asked to "walk me through a month-end close"? Structure it: subledger freeze → recurring journals (accruals, prepayments, depreciation, payroll) → reconciliations (bank, AP, AR, intercompany) → FX and provisions → flux analysis → management review and sign-off → lock. Then name the two things that most often go wrong: accruals never reversed, and intercompany left unmatched.' }
      },
      {
        heading: 'Soft Close vs Hard Close',
        paragraphs: [
          'Not every month needs the full ceremony. Many groups run a soft close most months — full P&L with key reconciliations — and a hard close quarterly or yearly with every balance sheet account reconciled, full provision reviews, and audit-ready documentation. The hard close is also when estimates get their deepest challenge: impairments, tax provisions, and bonus accruals.',
          'The trick is deciding in advance which months are which, and holding the line. A "soft" close where nobody reconciles anything is not a soft close — it is no close. Even in soft months, the non-negotiables stay: bank rec, cutoff discipline, and intercompany matching, because those three rot fastest when skipped.'
        ],
        bullets: ['Soft close (most months): full P&L, key reconciliations, faster timetable.', 'Hard close (quarter/year-end): every BS account reconciled, estimates challenged, audit-ready.', 'Non-negotiable even in soft months: bank rec, cutoff, intercompany.']
      }
    ],
    mistakes: [
      'Starting the close before AP, AR, and fixed assets subledgers are frozen — journals keep shifting under you.',
      'Booking accruals without a reversal or true-up plan, so next month\'s real invoice double-counts the cost.',
      'Skipping the bank reconciliation because "the balance looks fine" — unrecorded charges and errors hide there.',
      'Posting manual top-side journals with no supporting documentation attached.',
      'Letting intercompany differences roll into next month instead of resolving them before consolidation.',
      'Locking the period in the ERP before management review sign-off — then finding the error that needed a "quick reopen".'
    ],
    interviewQA: [
      { q: 'Walk me through a typical month-end close.', a: 'Day 1: freeze the subledgers — AP, AR, fixed assets. Days 1–2: book recurring journals — accruals, prepayments, depreciation, payroll. Day 2: bank reconciliation, booking any charges or corrections. Days 2–3: intercompany matching with all differences investigated. Day 3: FX revaluation and a fresh look at provisions. Days 3–4: reconcile every balance sheet account with preparer and reviewer sign-off. Day 4: flux analysis against prior month and budget to catch errors. Day 5: management review, final adjustments, then lock the period. The two things I watch most: accruals that never get reversed, and intercompany left unmatched.' },
      { q: 'The close is behind schedule and the CFO wants the numbers tomorrow. How do you prioritize?', a: 'I protect the non-negotiables: cutoff, bank rec, and intercompany — those rot fastest and auditors will find them anyway. I would book best-estimate accruals for anything still open rather than leave holes, flag every estimate clearly in the pack, and push immaterial reconciliations to a day-6 tidy-up list. What I never do is plug differences or skip review sign-offs to hit a date — a fast close built on plugs costs far more in audit adjustments and restatements.' },
      { q: 'What is a soft close, and when is it appropriate?', a: 'A soft close is a lighter monthly routine — full P&L with key reconciliations on a faster timetable — while a hard close (quarterly or yearly) reconciles every balance sheet account, challenges estimates deeply, and produces audit-ready documentation. Soft closes suit stable months in between hard closes. But "soft" never means skipping the essentials: bank reconciliation, cutoff discipline, and intercompany matching stay mandatory, because those three deteriorate fastest when neglected.' }
    ],
    quiz: [
      { question: 'What are the three core objectives of the month-end close?', options: ['Completeness, accuracy, and cutoff — plus speed', 'Speed, secrecy, and simplicity', 'Maximizing profit, minimizing tax, and pleasing auditors', 'Closing subledgers, paying suppliers, and filing taxes'], answer: 0, explanation: 'A good close ensures everything belonging to the month is in (completeness), measured correctly (accuracy), in the right period (cutoff) — and delivered fast enough to be useful.', difficulty: 'Foundation', topic: 'Close Objectives', skill: 'Month-End Closing' },
      { question: 'The December electricity invoice ($12,000) arrives in January. The correct treatment is:', options: ['Book the $12,000 expense in January when invoiced', 'Split it evenly between December and January', 'Book it in December only if it is material', 'Accrue $12,000 of utilities expense in December'], answer: 3, explanation: 'The electricity was consumed in December, so December bears the expense via an accrual — regardless of when the invoice arrives. Cutoff follows the economic event.', difficulty: 'Intermediate', topic: 'Accruals', skill: 'Month-End Closing' },
      { question: 'Which journal correctly accrues the $12,000 December electricity bill?', options: ['Dr Accrued Expenses $12,000 / Cr Utilities Expense $12,000', 'Dr Cash $12,000 / Cr Utilities Expense $12,000', 'Dr Utilities Expense $12,000 / Cr Accrued Expenses $12,000', 'Dr Utilities Expense $12,000 / Cr Cash $12,000'], answer: 2, explanation: 'Expense is debited (December cost) and the obligation credited. Cash is untouched — nothing has been paid yet.', difficulty: 'Intermediate', topic: 'Accruals', skill: 'Month-End Closing' },
      { question: 'A $60,000 annual insurance premium paid in January covers the full year. The December entry is:', options: ['Dr Insurance Expense $60,000 / Cr Cash $60,000', 'No entry — it was fully expensed in January', 'Dr Insurance Expense $5,000 / Cr Prepaid Insurance $5,000', 'Dr Prepaid Insurance $5,000 / Cr Insurance Expense $5,000'], answer: 2, explanation: 'Each month consumes one twelfth of the prepaid benefit: $60,000 / 12 = $5,000 of expense, reducing the prepaid asset.', difficulty: 'Foundation', topic: 'Prepayments', skill: 'Month-End Closing' },
      { question: 'The bank statement shows a $500 service charge that is not in the GL. The correct action is:', options: ['Deduct $500 from the bank statement balance', 'Ignore it — it will reverse next month', 'Add $500 to deposits in transit', 'Book Dr Bank Charges $500 / Cr Cash $500 in the GL'], answer: 3, explanation: 'Bank charges are a book-side adjustment: the GL must be updated to reflect what the bank already did. Statement-side adjustments are only for timing items like outstanding cheques.', difficulty: 'Intermediate', topic: 'Bank Reconciliation', skill: 'Month-End Closing' },
      { question: 'A euro company owes a US supplier $100,000. At month-end the euro has weakened and the liability is $8,000 higher in euro terms. The entry is:', options: ['Dr Accounts Payable $8,000 / Cr Foreign Exchange Gain $8,000', 'Dr Foreign Exchange Loss $8,000 / Cr Accounts Payable $8,000', 'No entry until the payable is actually paid', 'Dr Equity $8,000 / Cr Accounts Payable $8,000'], answer: 1, explanation: 'Foreign-currency monetary items are retranslated at the closing rate each month; the increase in the liability is an exchange loss in profit or loss.', difficulty: 'Intermediate', topic: 'FX Revaluation', skill: 'Month-End Closing' },
      { question: 'Why is an AP/AR reconciliation performed at month-end?', options: ['To prove the ledger balances are complete and accurate, catching missing invoices and misapplied cash', 'To decide which suppliers to pay first', 'To calculate the VAT return', 'To close the subledgers permanently'], answer: 0, explanation: 'Reconciliations are detective controls: tying ledgers to supplier statements and customer balances surfaces unrecorded invoices, duplicate payments, disputes, and misapplied receipts.', difficulty: 'Foundation', topic: 'Reconciliations', skill: 'Month-End Closing' },
      { question: 'Salaries for December are paid on 5 January. The correct December treatment is:', options: ['Book the full cost in January on payday', 'Accrue only the net pay, ignoring employer charges', 'Book it in December only for senior staff', 'Accrue the December salary cost (and employer charges) in December'], answer: 3, explanation: 'Employees rendered the service in December, so December bears the full cost — gross salaries plus employer social charges — via an accrual, even though cash leaves in January.', difficulty: 'Intermediate', topic: 'Payroll Accrual', skill: 'Month-End Closing' },
      { question: 'What is the key difference between an accrual and a provision?', options: ['An accrual is for a known amount owed (timing only); a provision involves uncertainty in timing or amount', 'Accruals are never reversed but provisions are', 'Provisions are always larger than accruals', 'There is no difference — the terms are interchangeable'], answer: 0, explanation: 'An accrual (e.g., December electricity) is certain in amount, only the invoice is pending. A provision (e.g., a lawsuit) is uncertain in timing or amount and falls under IAS 37.', difficulty: 'Advanced', topic: 'Provisions', skill: 'Month-End Closing' },
      { question: 'In flux analysis, revenue is up 12% versus last month while sales volumes are flat. The most useful next step is:', options: ['Celebrate — revenue growth is always good news', 'Book an accrual to smooth the increase', 'Investigate price and mix effects to explain the increase', 'Restate last month\'s revenue'], answer: 2, explanation: 'Flux analysis demands explanations for unusual movements. Flat volumes with rising revenue points to price increases or a mix shift toward premium products — or to an error that needs finding.', difficulty: 'Intermediate', topic: 'Flux Analysis', skill: 'Month-End Closing' },
      { question: 'Intercompany shows a $5,000 mismatch on day 3 of the close. The right move is:', options: ['Plug it to a difference account and investigate next month', 'Investigate and resolve it now — never plug it or roll it forward', 'Let consolidation net it out automatically', 'Split the difference between both entities'], answer: 1, explanation: 'Intercompany differences block clean consolidation and each one is an error in somebody\'s books. Resolve before the close proceeds; plugs and roll-forwards compound the problem.', difficulty: 'Advanced', topic: 'Intercompany', skill: 'Month-End Closing' },
      { question: 'What is the correct sequence for a controlled close?', options: ['Lock the period → book journals → reconcile → review', 'Freeze subledgers → book journals → reconcile → review and flux analysis → lock the period', 'Book journals → freeze subledgers → lock → reconcile', 'Review first, then freeze subledgers, then book journals'], answer: 1, explanation: 'Subledgers freeze first so journals rest on stable data; reconciliations prove the balances; management review and flux analysis catch errors; only then is the period locked.', difficulty: 'Foundation', topic: 'Close Sequence', skill: 'Month-End Closing' }
    ]
  },
  {
    id: 'm27', level: 7, levelTitle: 'Financial Reporting Operations', title: 'Account Reconciliations',
    standard: 'Operations', tagline: 'Trust, but reconcile: every balance must prove itself.',
    description: 'Reconciliations are the detective controls of financial reporting — the monthly proof that balances are complete and accurate. This module centers on a hands-on bank reconciliation exercise (statement $125,000 vs GL $118,000), then covers supplier, customer, and intercompany reconciliations, balance sheet discipline, and what to do when a reconciliation refuses to balance.',
    minutes: 24, skills: ['Month-End Closing'],
    sections: [
      {
        heading: 'What a Reconciliation Proves',
        paragraphs: [
          'A reconciliation ties a general-ledger balance to an independent source and explains every difference. The bank rec ties GL cash to the bank statement. The AP rec ties payables to supplier statements. The discipline is identical each time: list the differences, classify each as a timing item (resolves itself) or an error (needs a journal), and clear the errors before the close ends.',
          'Reconciliations are detective controls: they do not prevent errors, they find them. That is why the preparer must be independent of the person who posted the underlying transactions — the cashier should not reconcile the bank, and the AP clerk should not confirm supplier balances. A reconciliation prepared by its own poster is theatre, not control.'
        ],
        callout: { type: 'key', text: 'Every difference is either timing (document it) or an error (journal it). "Unexplained" is not a category — it is an open investigation.' }
      },
      {
        heading: 'Exercise: Bank Statement $125,000 vs GL Cash $118,000',
        paragraphs: [
          'Here is your case. The bank statement at 31 December shows $125,000. The GL cash account shows $118,000. The $7,000 gap must be fully explained — and every dollar of it will be. Your evidence file contains four items: (1) outstanding cheques of $13,000 — cheques issued and recorded in the GL but not yet presented to the bank; (2) a deposit in transit of $8,000 — cash recorded in the GL on 31 December but credited by the bank on 2 January; (3) bank charges of $500 on the statement, never recorded in the GL; (4) interest of $2,500 credited by the bank, never recorded in the GL.',
          'Work the two sides. Bank side: start from the statement and adjust for timing items the bank does not know about yet — add the deposit in transit ($125,000 + $8,000) and deduct outstanding cheques (−$13,000) to reach an adjusted bank balance of $120,000. Book side: start from the GL and book what the books missed — deduct the unrecorded charges ($118,000 − $500) and add the unrecorded interest (+$2,500) to reach an adjusted book balance of $120,000. Both sides agree at $120,000: reconciled.',
          'The pattern to internalize: timing items (outstanding cheques, deposits in transit) adjust the bank statement and need no journal — they self-resolve when the bank catches up. Bank-originated items (charges, interest, errors) adjust the books and need journals. If you ever find yourself journaling an outstanding cheque, stop — you are booking the bank\'s timing as your error.'
        ],
        steps: ['Step 1 — List every difference between the statement ($125,000) and the GL ($118,000).', 'Step 2 — Classify: timing (outstanding cheques $13,000, deposit in transit $8,000) vs book errors (charges $500, interest $2,500).', 'Step 3 — Adjusted bank: $125,000 + $8,000 − $13,000 = $120,000.', 'Step 4 — Adjusted books: $118,000 − $500 + $2,500 = $120,000. Both sides agree.', 'Step 5 — Journal the book-side items so the GL itself reaches $120,000.'],
        journal: {
          transaction: 'Book the bank-originated items found in the reconciliation',
          lines: [
            { account: 'Cash', dr: 2000, cr: null },
            { account: 'Bank Charges', dr: 500, cr: null },
            { account: 'Interest Income', dr: null, cr: 2500 }
          ],
          narration: 'Net effect: cash +$2,000 (−$500 charges + $2,500 interest), bringing the GL to the adjusted balance of $120,000.'
        },
        impact: { pl: 'Net $2,000 profit increase ($2,500 interest income less $500 charges).', bs: 'Cash rises to $120,000, fully reconciled to the adjusted bank balance.', cf: 'No new cash movement — the bank already recorded these; the GL is catching up.' }
      },
      {
        heading: 'Supplier (AP) Reconciliations',
        paragraphs: [
          'Tie the AP ledger for each major supplier to that supplier\'s statement. The usual suspects: invoices received but not yet entered (especially around cutoff), payments in transit recorded by you but not yet by the supplier, credit notes issued but not applied, and the eternal classic — the invoice entered twice. A supplier statement showing $90,000 against your ledger\'s $84,000 with one $6,000 invoice missing from your books is a textbook unrecorded liability: book it now, because the auditor\'s unrecorded-liabilities test will find it in January anyway.',
          'Run AP recs on the biggest balances monthly and rotate through the rest quarterly. And watch for debit balances in AP — a supplier showing as an asset usually means a payment posted without its invoice, or a credit note never claimed.'
        ],
        callout: { type: 'example', text: 'Supplier statement: $90,000. Your AP ledger: $84,000. The $6,000 gap is invoice INV-774, received 28 December but never entered. Entry: Dr Purchases/Expense $6,000 / Cr Accounts Payable $6,000. December cutoff is now correct — and the auditor\'s search for unrecorded liabilities comes up empty.' }
      },
      {
        heading: 'Customer (AR) Reconciliations and Cash Application',
        paragraphs: [
          'AR reconciliations tie the receivables ledger to what customers say they owe — and the disagreements are where the learning happens. A customer short-pays by $2,000 claiming a credit note you never issued: do not write it off on the phone. Investigate first — it may be a pricing dispute, a returns claim, or the customer netting an unrelated item. Write-offs need evidence and approval, never convenience.',
          'The other AR battleground is cash application: receipts posted to the wrong customer or the wrong invoice create phantom overdues and trigger collection calls to customers who already paid — the fastest way to damage commercial relationships. Unapplied cash should be investigated and aged like any other open item, not left to accumulate.'
        ],
        bullets: ['Disputed deductions: investigate before writing off — price, returns, or netting games.', 'Unapplied cash: aged and cleared, never left to accumulate.', 'Credit balances in AR: usually overpayments or unprocessed credit notes — refund or apply, do not ignore.']
      },
      {
        heading: 'Intercompany Reconciliations',
        paragraphs: [
          'Intercompany reconciliations follow the same mechanics as supplier and customer recs, except your counterparty is a colleague — which makes them politically easier and technically identical. Company A\'s receivable must mirror Company B\'s payable (the full $150,000 vs $145,000 investigation playbook lives in m25). Because these balances are eliminated in consolidation, any unresolved difference either blocks the close or forces an ugly top-side plug that auditors will unwind.',
          'The discipline that works: monthly bilateral confirmation on a fixed date, standard partner codes so invoices cannot be misaddressed, and a group-level aging of unmatched items with named owners. Intercompany is also a fraud channel — fictitious sales to a subsidiary inflate revenue and receivables together — so confirmation must be independent of the people posting the transactions.'
        ]
      },
      {
        heading: 'Balance Sheet Reconciliations and Aging',
        paragraphs: [
          'The gold standard: every balance sheet account reconciled, every month, with a named owner and a reviewer sign-off. In practice, groups tier the effort — bank, AR, AP, intercompany, and provisions monthly; prepayments, fixed assets, and accruals monthly or quarterly depending on movement. What is never acceptable is an account nobody owns: unowned balances are where errors go to retire.',
          'Aging is the reconciliation\'s analytical twin. An AR balance that reconciles but is 40% over 90 days past due is telling you about collectability, not accuracy — it drives the bad-debt provision. An AP aging full of ancient credits may hide unclaimed money. Always read the reconciliation together with its aging.'
        ],
        table: { headers: ['Account', 'Reconcile to', 'Read with'], rows: [['Cash', 'Bank statements', 'Outstanding cheque aging — investigate stale cheques'], ['Receivables', 'Customer balances / statements', 'AR aging — drives bad-debt provision'], ['Payables', 'Supplier statements', 'AP aging — debit balances need explaining'], ['Intercompany', 'Counterparty ledgers', 'Unmatched-item aging with owners'], ['Provisions', 'Supporting calculations', 'Movement analysis vs prior month']] }
      },
      {
        heading: 'When a Reconciliation Fails',
        paragraphs: [
          'Sometimes both sides look right and still do not agree. Work the escalation ladder: re-pull the source data (stale statements are the #1 false alarm), re-check the date ranges, scan for transposed digits ($12,540 vs $12,450) and duplicated entries, then widen the net to adjacent periods — the missing item is often booked one month early or late. If the gap survives all that, escalate to the controller with your working papers: what you checked, what you ruled out, and your hypothesis.',
          'Two hard rules for the endgame. First, stale items get resolved, not carried forever: a cheque outstanding for eight months is not outstanding — contact the payee, reissue or cancel it. Second, never force-balance. A plug to "reconciliation differences" is a confession that will be read aloud in the audit closing meeting.'
        ],
        callout: { type: 'warning', text: 'A cheque outstanding for 8 months is not a timing difference anymore — it is a dead instrument. Contact the payee, reissue or cancel it, and clear the item. Carrying stale items year after year is how reconciliations become fiction.' }
      }
    ],
    mistakes: [
      'Reconciling to a stale statement — wrong date, wrong balance, wasted hour.',
      'Treating ancient outstanding cheques as still outstanding instead of investigating and clearing them.',
      'Force-balancing with a plug to "reconciliation differences" instead of finding the cause.',
      'Reconciling only the total and never the underlying items and aging.',
      'Letting the person who handles cash prepare the bank reconciliation — a segregation failure.',
      'Filing the reconciliation without reviewer sign-off, so nobody senior ever looked at it.'
    ],
    interviewQA: [
      { q: 'The bank statement shows $125,000 but the GL shows $118,000. How do you investigate?', a: 'I list every difference and classify each as timing or error. Timing items — outstanding cheques, deposits in transit — adjust the bank side and need no journal. Bank-originated items — charges, interest, bank errors — adjust the book side and need journals. In this case: adjusted bank is $125,000 + $8,000 deposit in transit − $13,000 outstanding cheques = $120,000; adjusted books are $118,000 − $500 charges + $2,500 interest = $120,000. Both sides agree, so I journal the $500 charges and $2,500 interest to bring the GL to $120,000.' },
      { q: 'What is the difference between a timing difference and an error in a bank reconciliation?', a: 'A timing difference is recorded correctly by both sides but in different periods — an outstanding cheque is in my books today and on the bank statement next week. It self-resolves and is documented, not journaled. An error — an unrecorded bank charge, a transposed digit, a duplicated deposit — means one side is wrong and needs a correcting journal. The test is simple: will this difference disappear on its own when the next statement arrives? If yes, timing; if no, error.' },
      { q: 'How do you handle a long-outstanding reconciling item?', a: 'First I verify it is genuinely outstanding and not a stale data problem. Then I act according to its nature: an old outstanding cheque means contacting the payee and reissuing or cancelling it — after six to twelve months it is not a timing item anymore. An old unapplied receipt gets investigated and applied or refunded. What I never do is carry it forward indefinitely or plug it away; stale items accumulate into material misstatements and auditors specifically target them.' }
    ],
    quiz: [
      { question: 'What is the primary purpose of a bank reconciliation?', options: ['To decide which cheques to cancel', 'To calculate interest income for the year', 'To choose which bank to use', 'To prove the GL cash balance is complete and accurate by tying it to the bank statement and explaining every difference'], answer: 3, explanation: 'The bank rec is a detective control: it verifies cash — the most fraud-sensitive asset — against independent evidence and forces every difference to be classified and cleared.', difficulty: 'Foundation', topic: 'Bank Reconciliation', skill: 'Month-End Closing' },
      { question: 'A $8,000 deposit recorded in the GL on 31 December appears on the bank statement on 2 January. In the 31 December reconciliation it is:', options: ['A deposit in transit — added to the bank statement balance', 'Deducted from the GL balance', 'An error requiring a journal', 'Ignored until January'], answer: 0, explanation: 'Deposits in transit are timing items: the books are right, the bank just has not caught up. Add to the bank side; no journal needed.', difficulty: 'Intermediate', topic: 'Timing Differences', skill: 'Month-End Closing' },
      { question: 'Outstanding cheques of $13,000 in the reconciliation are:', options: ['Added to the GL cash balance', 'Booked as an expense', 'Deducted from the bank statement balance', 'Added to the bank statement balance'], answer: 2, explanation: 'Outstanding cheques reduced the GL when issued but have not hit the bank yet — so deduct them from the bank side to reach the true comparable balance.', difficulty: 'Intermediate', topic: 'Timing Differences', skill: 'Month-End Closing' },
      { question: 'The statement shows $500 of bank charges not recorded in the GL. The correct treatment is:', options: ['Deduct $500 from the bank statement balance', 'Add $500 to deposits in transit', 'Leave them — the bank will reverse them', 'Journal them in the books: Dr Bank Charges $500 / Cr Cash $500'], answer: 3, explanation: 'Bank-originated items the books missed are book-side adjustments: update the GL with a journal. Only timing items adjust the statement side.', difficulty: 'Intermediate', topic: 'Book Adjustments', skill: 'Month-End Closing' },
      { question: 'In the exercise (statement $125,000; GL $118,000; deposit in transit $8,000; outstanding cheques $13,000), the adjusted bank balance is:', options: ['$120,000', '$125,000', '$118,000', '$112,000'], answer: 0, explanation: '$125,000 + $8,000 (deposit in transit) − $13,000 (outstanding cheques) = $120,000.', difficulty: 'Advanced', topic: 'Bank Reconciliation', skill: 'Month-End Closing' },
      { question: 'Continuing the exercise (charges $500 and interest $2,500 unrecorded in the GL), the adjusted book balance is:', options: ['$118,000', '$120,000', '$121,000', '$115,000'], answer: 1, explanation: '$118,000 − $500 (charges) + $2,500 (interest) = $120,000 — agreeing with the adjusted bank balance. Reconciled.', difficulty: 'Advanced', topic: 'Bank Reconciliation', skill: 'Month-End Closing' },
      { question: 'How do you distinguish a timing difference from an error?', options: ['Timing differences are always larger than errors', 'Errors only happen at the bank, never in the books', 'A timing difference self-resolves when the next statement arrives; an error needs a correcting journal', 'There is no practical difference'], answer: 2, explanation: 'The test is whether the difference disappears on its own. Outstanding cheques clear next week (timing); an unrecorded bank charge never clears itself (error — journal it).', difficulty: 'Foundation', topic: 'Timing vs Errors', skill: 'Month-End Closing' },
      { question: 'A supplier statement shows $90,000 but your AP ledger shows $84,000. Investigation finds a $6,000 invoice received 28 December but never entered. You should:', options: ['Book the invoice in January when you found it', 'Ask the supplier to cancel the invoice', 'Deduct $6,000 from the supplier statement', 'Book Dr Purchases/Expense $6,000 / Cr Accounts Payable $6,000 in December'], answer: 3, explanation: 'The liability existed at 31 December — the goods/services were received in December. Booking it in December fixes both the AP balance and cutoff; the auditor\'s unrecorded-liabilities test would find it otherwise.', difficulty: 'Intermediate', topic: 'AP Reconciliation', skill: 'Month-End Closing' },
      { question: 'A customer short-pays by $2,000, claiming a credit note you never issued. The correct response is:', options: ['Investigate the claim before writing anything off', 'Immediately write off the $2,000 as a discount', 'Sue the customer', 'Apply the short payment to another customer\'s account'], answer: 0, explanation: 'Short payments may reflect pricing disputes, returns, or netting games. Write-offs need evidence and approval — writing off on the customer\'s say-so invites repeat behavior.', difficulty: 'Intermediate', topic: 'AR Reconciliation', skill: 'Month-End Closing' },
      { question: 'A cheque has been "outstanding" for eight months. The right action is:', options: ['Keep carrying it as outstanding indefinitely', 'Contact the payee, then reissue or cancel the cheque and clear the item', 'Write it off to profit immediately without investigation', 'Add it back to the bank statement balance'], answer: 1, explanation: 'After months, it is not a timing difference — it is a dead instrument. Resolve it with the payee; carrying stale items turns the reconciliation into fiction.', difficulty: 'Advanced', topic: 'Stale Items', skill: 'Month-End Closing' },
      { question: 'Who should prepare the monthly bank reconciliation?', options: ['The cashier who handles the cash', 'The AP clerk who posts supplier payments', 'Someone independent of cash handling and posting', 'The external auditor'], answer: 2, explanation: 'Segregation of duties: the preparer must be independent of the transactions being checked, or the control is theatre. The auditor reviews reconciliations; they do not prepare them.', difficulty: 'Intermediate', topic: 'Controls', skill: 'Month-End Closing' },
      { question: 'How often should key accounts (bank, AR, AP, intercompany) be reconciled?', options: ['Once a year at year-end', 'Monthly, at a minimum', 'Only when the auditor asks', 'Every three years'], answer: 1, explanation: 'Monthly reconciliation is the baseline detective control of the close. Annual-only reconciliation lets errors compound for eleven months before anyone looks.', difficulty: 'Foundation', topic: 'Reconciliation Discipline', skill: 'Month-End Closing' }
    ]
  },
  {
    id: 'm28', level: 7, levelTitle: 'Financial Reporting Operations', title: 'Cut-off',
    standard: 'Operations', tagline: 'December\'s cost in December, January\'s revenue in January — no exceptions.',
    description: 'Cut-off is the discipline of recording transactions in the correct accounting period. This module works through the classic traps: invoices arriving late, goods received without invoices, revenue invoiced before delivery, and goods in transit at year-end — with auditor-style cut-off testing and quiz cases where you decide which period each transaction belongs to.',
    minutes: 20, skills: ['Month-End Closing', 'IFRS Fundamentals'],
    sections: [
      {
        heading: 'What Cut-off Means — and Why It Moves Markets',
        paragraphs: [
          'Cut-off is the application of the accrual basis at period boundaries: transactions are recorded when the economic event occurs, not when the paperwork moves. Get it wrong and two periods are misstated at once — December takes January\'s cost (or misses its own), January inherits the distortion. For listed companies, shifting revenue or expenses across a year-end can be the difference between meeting guidance and missing it, which is why auditors treat cut-off as a fraud-risk area, not just an accuracy check.',
          'The mental model is simple: ask "when did the event happen?" — when were the goods received, the service performed, the risks and rewards transferred — and then check that the accounting date matches the event date, not the invoice date or the posting date. Every example below is a variation on that one question.'
        ],
        callout: { type: 'key', text: 'Cut-off question: when did the economic event happen? The accounting period follows the event — never the invoice date, never the posting date.' }
      },
      {
        heading: 'Expense Cut-off: The January Invoice for December Services',
        paragraphs: [
          'The facilities company emails its December invoice on 8 January: $12,000 for December cleaning and maintenance. The service was performed in December — so December bears the expense, via an accrual. Booking it in January because "that is when the invoice arrived" understates December costs and overstates December profit, while January takes a hit it did not earn.',
          'This is the single most common cut-off error in practice, because it feels natural to book by invoice date. The control is a simple one: at close, ask every department "what December services have we received but not yet been invoiced for?" — and accrue the answers. Then reverse or true up when the invoices arrive.'
        ],
        journal: {
          transaction: 'Accrue December services invoiced in January ($12,000)',
          lines: [
            { account: 'Maintenance Expense', dr: 12000, cr: null },
            { account: 'Accrued Expenses', dr: null, cr: 12000 }
          ],
          narration: 'Service performed in December: expense belongs to December. The January invoice will settle this accrual.'
        },
        impact: { pl: 'December profit $12,000 lower; January profit unaffected by December activity.', bs: 'A $12,000 accrued liability at 31 December.', cf: 'No December cash effect; outflow appears in January operating cash flow.' }
      },
      {
        heading: 'Goods Received, Invoice Pending (GRNI)',
        paragraphs: [
          'Raw materials arrive on 28 December; the supplier\'s invoice arrives on 6 January. At 31 December the company holds the goods — they are in inventory, and the obligation to pay exists. The correct treatment is to accrue the liability at year-end (often called GRNI — goods received not invoiced), typically using the purchase order price, then true up when the invoice arrives.',
          'Missing GRNI is the classic unrecorded-liability generator: inventory is counted (so assets look right) but the payable is missing (so liabilities are understated and profit overstated). Auditors specifically hunt for it by matching January purchase invoices back to December goods-received notes — if you did not accrue it, they will find it.'
        ],
        bullets: ['Goods received in December + invoice in January → accrue the liability in December (GRNI).', 'Use the PO price as the estimate; true up on invoice receipt.', 'Auditor test: sample January invoices, trace to goods-received dates.']
      },
      {
        heading: 'Revenue Cut-off: Invoiced Before Delivery',
        paragraphs: [
          'On 30 December the company invoices a customer $30,000 for consulting work to be delivered in January — and the cash arrives the same day. Tempting to book December revenue. Wrong. Under IFRS 15, revenue is recognized when (or as) the performance obligation is satisfied — when the service is delivered. Invoicing early creates a contract liability (deferred revenue), not revenue.',
          'This is cut-off working in the revenue direction, and it is where earnings management lives: pulling January sales into December flatters the year just ended. The control mirrors the expense side: match December invoices to proof of delivery or service completion before recognizing a dollar of revenue.'
        ],
        journal: {
          transaction: 'Invoice issued 30 December ($30,000) for services to be delivered in January; cash received',
          lines: [
            { account: 'Cash', dr: 30000, cr: null },
            { account: 'Contract Liability (Deferred Revenue)', dr: null, cr: 30000 }
          ],
          narration: 'No performance yet, no revenue: the obligation to deliver sits as a liability until January.'
        },
        impact: { pl: 'December revenue and profit unaffected — the $30,000 will be revenue in January on delivery.', bs: 'Cash up $30,000, contract liability up $30,000 at 31 December.', cf: 'Cash inflow in December operating cash flow, with no matching December profit — a classic profit-vs-cash divergence.' },
        callout: { type: 'warning', text: 'Invoiced does not mean earned. Revenue follows delivery of the performance obligation — invoicing early creates a liability, not revenue.' }
      },
      {
        heading: 'Goods in Transit: Who Owns Them at Year-End?',
        paragraphs: [
          'Goods shipped on 30 December and arriving 3 January belong to somebody at 31 December — and the shipping terms decide who. Under FOB shipping point (free on board at origin), ownership passes when the goods leave the seller: the buyer includes them in inventory at year-end (and accrues the payable), even though the truck is still on the road. Under FOB destination, ownership passes on arrival: the goods stay in the seller\'s inventory at year-end.',
          'Get this wrong and inventory is double-counted (both sides include it) or vanishes (neither side includes it) — and the physical count will not save you, because the goods are on a truck, not in either warehouse. Year-end cut-off procedures always include a review of in-transit shipments against their terms.'
        ],
        table: { headers: ['Terms', 'Ownership passes', 'At 31 Dec, goods are in', 'Buyer accrues payable?'], rows: [['FOB shipping point', 'On shipment (30 Dec)', 'Buyer\'s inventory', 'Yes'], ['FOB destination', 'On arrival (3 Jan)', 'Seller\'s inventory', 'No']] }
      },
      {
        heading: 'Cut-off Testing: How Auditors Check Your Work',
        paragraphs: [
          'Auditors do not take your cut-off on faith — they test it from both directions. For purchases: sample invoices recorded in the first days of January and trace them back to goods-received notes — anything received in December should have been accrued. For sales: sample December invoices close to year-end and demand proof of delivery dated December; then sample January invoices and check nothing shipped in December was held back.',
          'The elegant part of cut-off testing is that it is self-checking: completeness testing (January → December) catches understated liabilities and revenue pulled forward; occurrence testing (December → proof) catches overstated December activity. A clean cut-off file — GRN logs, delivery proofs, and the GRNI calculation — makes this testing fast and boring, which is exactly what you want.'
        ],
        steps: ['Step 1 — Pull all purchase invoices from the first 10 days of January; trace each to its goods-received date.', 'Step 2 — Any goods received in December without a December accrual: propose an adjustment.', 'Step 3 — Pull December sales invoices from the last 5 days; demand delivery proof dated December.', 'Step 4 — Pull January sales invoices from the first 5 days; verify nothing shipped in December.', 'Step 5 — Review in-transit shipments at year-end against FOB terms.']
      },
      {
        heading: 'Cut-off Errors and Their Financial Statement Impact',
        paragraphs: [
          'Every cut-off error misstates two periods in opposite directions — which is why "it nets out over time" is not a defense for the current year\'s statements. The table below maps the classic errors to their effects; use it as a checklist when reviewing the close.'
        ],
        table: { headers: ['Error', 'This year P&L', 'Year-end BS'], rows: [['December expense booked in January', 'Profit overstated', 'Liabilities understated'], ['January expense pulled into December', 'Profit understated', 'Liabilities overstated'], ['December GRNI missed', 'Profit overstated', 'Inventory OK (counted), payables understated'], ['Revenue invoiced Dec, delivered Jan', 'Revenue/profit overstated', 'Contract liability missing; receivables overstated'], ['FOB-shipping-point goods in transit ignored by buyer', 'No P&L effect yet', 'Buyer inventory and payables understated']] }
      }
    ],
    mistakes: [
      'Recording expenses by invoice date instead of by service or delivery date.',
      'Recognizing revenue when invoiced rather than when the performance obligation is satisfied.',
      'Ignoring goods in transit at year-end — inventory double-counted or vanished.',
      'Treating GRNI as "next month\'s problem" instead of accruing it at year-end.',
      'Booking January credit notes against December revenue without checking when the goods were returned.',
      'Assuming the ERP posting date always equals the economic event date.'
    ],
    interviewQA: [
      { q: 'An invoice dated 5 January relates to December services. When do you recognize the expense?', a: 'In December. Cut-off follows the economic event — the service was performed in December — not the invoice date. I would accrue the expense in December (debit expense, credit accrued liabilities) and let the January invoice settle the accrual. Booking it in January overstates December profit and understates January profit. The control is asking departments at close what December services arrived without invoices.' },
      { q: 'How do auditors test cut-off?', a: 'From both directions. For completeness: sample January purchase invoices and trace to goods-received dates — anything received in December should have been accrued (the GRNI test). For occurrence: sample December sales invoices near year-end and demand delivery proof dated December, and check early-January sales for anything shipped in December. They also review in-transit shipments against FOB terms. A clean file of GRN logs, delivery proofs, and the GRNI calculation makes this fast.' },
      { q: 'Goods shipped 30 December FOB destination, arriving 3 January — whose inventory at 31 December?', a: 'The seller\'s. Under FOB destination, ownership passes on arrival, so at 31 December the goods are still the seller\'s inventory and the buyer accrues nothing. Under FOB shipping point it would be the reverse: the buyer owns them from shipment and includes them in inventory (with the payable accrued). The physical count cannot resolve this — the goods are on a truck — so the terms must be checked.' }
    ],
    quiz: [
      { question: 'What does cut-off mean in accounting?', options: ['Recording each transaction in the period when the economic event occurred', 'Stopping all postings on the last day of the month', 'Cutting costs at year-end to hit targets', 'Closing the books exactly at midnight on 31 December'], answer: 0, explanation: 'Cut-off applies the accrual basis at period boundaries: the accounting period follows the event (service performed, goods delivered), not the invoice or posting date.', difficulty: 'Foundation', topic: 'Cut-off Concept', skill: 'Month-End Closing' },
      { question: 'An invoice received on 8 January for $12,000 of December maintenance services belongs to:', options: ['January — book it when invoiced', 'Split evenly between December and January', 'December — accrue the expense in December', 'Whichever period has budget available'], answer: 2, explanation: 'The service was performed in December, so December bears the expense via an accrual. Invoice date does not determine the period.', difficulty: 'Intermediate', topic: 'Expense Cut-off', skill: 'Month-End Closing' },
      { question: 'Goods arrive on 28 December; the supplier invoice arrives 6 January. At 31 December you should:', options: ['Ignore both until the invoice arrives in January', 'Include the goods in inventory but record no liability', 'Record the liability but exclude the goods from inventory', 'Include the goods in inventory and accrue the liability (GRNI)'], answer: 3, explanation: 'You hold the goods and owe the money at year-end — both sides of the event are recognized: inventory up, accrued liability up (typically at PO price, trued up later).', difficulty: 'Intermediate', topic: 'GRNI', skill: 'Month-End Closing' },
      { question: 'On 30 December you invoice $30,000 for consulting to be delivered in January, and cash arrives immediately. The correct December treatment is:', options: ['Dr Cash $30,000 / Cr Revenue $30,000', 'Dr Cash $30,000 / Cr Contract Liability $30,000 — no December revenue', 'Dr Receivables $30,000 / Cr Revenue $30,000', 'No entry until January'], answer: 1, explanation: 'Under IFRS 15 revenue follows satisfaction of the performance obligation. Invoicing early creates a contract liability; the $30,000 becomes revenue in January on delivery. (Cash is received, so it is recorded — against the liability.)', difficulty: 'Intermediate', topic: 'Revenue Cut-off', skill: 'IFRS Fundamentals' },
      { question: 'Which journal correctly reverses prematurely recognized revenue of $30,000 (invoiced but not yet delivered)?', options: ['Dr Revenue $30,000 / Cr Contract Liability $30,000', 'Dr Contract Liability $30,000 / Cr Revenue $30,000', 'Dr Cash $30,000 / Cr Revenue $30,000', 'Dr Expense $30,000 / Cr Revenue $30,000'], answer: 0, explanation: 'Revenue must come out (debit) and the obligation to deliver goes on the balance sheet as a contract liability (credit) until performance occurs.', difficulty: 'Intermediate', topic: 'Revenue Cut-off', skill: 'IFRS Fundamentals' },
      { question: 'Goods shipped 30 December FOB shipping point, arriving 3 January. At 31 December they are:', options: ['The seller\'s inventory — ownership passes on arrival', 'Neither party\'s inventory until arrival', 'Both parties\' inventory', 'The buyer\'s inventory — ownership passed on shipment'], answer: 3, explanation: 'FOB shipping point: ownership (and risk) passes when goods leave the seller. The buyer includes them in year-end inventory and accrues the payable.', difficulty: 'Advanced', topic: 'Goods in Transit', skill: 'Month-End Closing' },
      { question: 'The same shipment, but FOB destination. At 31 December the goods are:', options: ['The buyer\'s inventory — shipment is enough', 'Written off as lost in transit', 'The seller\'s inventory — ownership passes on arrival', 'Recorded as a sale by the seller'], answer: 2, explanation: 'FOB destination: ownership passes on arrival (3 January). At year-end the goods remain the seller\'s inventory; no sale is recorded yet.', difficulty: 'Advanced', topic: 'Goods in Transit', skill: 'Month-End Closing' },
      { question: 'A $10,000 service is performed evenly from 15 December to 15 January, invoiced 20 January. The correct split is:', options: ['$10,000 in January when invoiced', '$10,000 in December when the work started', '$10,000 in December because the invoice covers mostly December', '$5,000 expense in December, $5,000 in January'], answer: 3, explanation: 'The service accrues evenly over the performance period — roughly half in each month. Cut-off follows the pattern of performance, pro-rated.', difficulty: 'Intermediate', topic: 'Pro-rating', skill: 'Month-End Closing' },
      { question: 'Why does cut-off matter to users of financial statements?', options: ['It has no effect — everything nets out over time', 'It only matters for tax, not for investors', 'Misallocated transactions misstate profit and working capital in two periods at once', 'It only affects the cash flow statement'], answer: 2, explanation: 'Every cut-off error overstates one period and understates the next: profit, liabilities, and working capital are all distorted in the reported year — "it nets out later" is no defense for misstated statements.', difficulty: 'Foundation', topic: 'Cut-off Concept', skill: 'IFRS Fundamentals' },
      { question: 'An auditor testing purchase cut-off will most likely:', options: ['Ask management whether cut-off was correct', 'Sample January invoices and trace them to goods-received dates', 'Only check December invoices', 'Ignore January entirely'], answer: 1, explanation: 'Completeness testing works backwards from the next period: January invoices for December receipts reveal unaccrued liabilities (missed GRNI).', difficulty: 'Intermediate', topic: 'Cut-off Testing', skill: 'Month-End Closing' },
      { question: 'A customer returns goods on 30 December; you issue the credit note on 4 January. The return belongs to:', options: ['December — the goods came back in December, so December revenue is adjusted', 'January — the credit note date governs', 'Neither — returns are off-book', 'December only if the amount is material'], answer: 0, explanation: 'The economic event (the return) happened in December, so December revenue is reduced — typically via an accrual for the expected credit note. The January document settles the accrual.', difficulty: 'Advanced', topic: 'Sales Returns', skill: 'Month-End Closing' },
      { question: 'December salaries are paid on 5 January. The salaries belong to:', options: ['January — payday determines the period', 'December — accrue the cost in December', 'Split between the two months by pay date', 'December only for tax purposes'], answer: 1, explanation: 'Employees worked in December, so the cost is December\'s — accrued at month-end regardless of the January pay date.', difficulty: 'Intermediate', topic: 'Payroll Cut-off', skill: 'Month-End Closing' }
    ]
  },
  {
    id: 'm29', level: 7, levelTitle: 'Financial Reporting Operations', title: 'Payroll Accounting',
    standard: 'IAS 19', tagline: 'Gross pay, deductions, employer charges: the full cost of people.',
    description: 'Payroll is usually the largest expense line — and one of the most misbooked. This module breaks payroll into its parts (gross salary, employee deductions, employer contributions), works through the complete payroll journal, covers accruals and bonuses, and distills IAS 19\'s treatment of short-term and post-employment benefits.',
    minutes: 16, skills: ['Month-End Closing'],
    sections: [
      {
        heading: 'The Anatomy of Payroll',
        paragraphs: [
          'Every payroll has three layers. Gross salary is what the employee earned. Employee deductions are withheld from it: income tax (the employer collects it and remits it to the tax authority) and the employee\'s share of social security. Net pay — gross minus deductions — is what lands in the employee\'s bank account. Then there is the layer many forget: employer contributions — the employer\'s share of social security and similar charges — which are an additional cost on top of gross salary, not a deduction from it.',
          'The accounting consequence: the company\'s total payroll cost is gross salaries plus employer contributions. The deductions are not expenses — they are amounts the company owes to third parties (tax authorities, social security funds) on the employee\'s behalf. Confusing deductions with costs understates the true cost of employment.'
        ],
        table: { headers: ['Component', 'Example', 'Accounting nature'], rows: [['Gross salary', '$200,000', 'Expense — the cost of service'], ['Income tax withheld', '$40,000', 'Liability — owed to the tax authority'], ['Employee social security', '$12,000', 'Liability — owed to the social fund'], ['Net pay', '$148,000', 'Liability — owed to employees until payday'], ['Employer social security', '$50,000', 'Expense — additional cost to the company']] },
        callout: { type: 'key', text: 'Total payroll cost = gross salaries + employer contributions. Deductions are liabilities, not savings.' }
      },
      {
        heading: 'The Payroll Journal',
        paragraphs: [
          'One monthly journal captures the whole payroll. Debit the expenses — gross salaries and employer contributions. Credit the liabilities — tax withheld, total social security payable (employee + employer shares), and net salaries payable. On payday, a second entry clears the net pay liability against cash; the tax and social security liabilities clear when remitted to the authorities.',
          'Work through the numbers: gross salaries $200,000, income tax withheld $40,000, employee social security $12,000, employer social security $50,000. Net pay = $200,000 − $40,000 − $12,000 = $148,000. Total social security payable = $12,000 + $50,000 = $62,000. Debits: $250,000. Credits: $40,000 + $62,000 + $148,000 = $250,000.'
        ],
        journal: {
          transaction: 'Record December payroll: gross $200,000; tax withheld $40,000; employee social security $12,000; employer social security $50,000',
          lines: [
            { account: 'Salary Expense', dr: 200000, cr: null },
            { account: 'Employer Social Security Expense', dr: 50000, cr: null },
            { account: 'Income Tax Withheld Payable', dr: null, cr: 40000 },
            { account: 'Social Security Payable', dr: null, cr: 62000 },
            { account: 'Salaries Payable (Net Pay)', dr: null, cr: 148000 }
          ],
          narration: 'Recognize the full $250,000 payroll cost: $200,000 gross salaries plus $50,000 employer charges; deductions and net pay sit as liabilities until paid.'
        },
        impact: { pl: 'Profit reduced by the full $250,000 payroll cost — not just the $148,000 net pay.', bs: 'Liabilities increase by $250,000 (salaries, tax, and social security payables).', cf: 'Operating cash outflow of $250,000 as each liability is settled (payday, then tax filings).' }
      },
      {
        heading: 'Accruals and Bonuses',
        paragraphs: [
          'Payroll rarely respects month-end: if payday is the 5th, accrue the last days of December (salaries and employer charges) so December bears its true cost. Bonuses need the same treatment with one extra test — is there an obligation? A contractual or well-established bonus plan creates a constructive obligation: accrue the best estimate each month as the service is rendered. A purely discretionary "maybe" bonus with no commitment is not accrued until decided.',
          'Year-end is bonus season and estimate season together: the bonus accrual must reflect performance to date, expected forfeitures, and the plan\'s formula. Auditors test it against the plan rules and prior-year payout patterns — a bonus accrual that never resembles actual payouts is a standing audit adjustment.'
        ],
        journal: {
          transaction: 'Accrue December portion of annual bonuses: $30,000 earned but not yet paid',
          lines: [
            { account: 'Bonus Expense', dr: 30000, cr: null },
            { account: 'Bonus Accrual', dr: null, cr: 30000 }
          ],
          narration: 'Bonuses are earned as service is rendered under an established plan; the unpaid portion is a liability at year-end.'
        },
        impact: { pl: 'December profit $30,000 lower.', bs: 'Bonus accrual liability of $30,000.', cf: 'No cash effect until bonuses are paid.' }
      },
      {
        heading: 'Payroll Controls',
        paragraphs: [
          'Payroll is a fraud hotspot — ghost employees, inflated hours, diverted net pay — so controls are tight. Segregation: the person who enters new hires cannot approve payroll, and the person who runs payroll cannot amend bank details alone. Every payroll run needs independent review and approval before payment; changes to master data (new employees, bank account changes, salary adjustments) need dual authorization with evidence.',
          'Reconciliations close the loop: payroll cost per the payroll report ties to the GL payroll accounts; headcount per payroll ties to HR records; and net pay per the bank file ties to the salaries payable clearing account. A clearing account that does not clear to zero after payday is waving a red flag.'
        ],
        bullets: ['Segregate: hire entry, payroll processing, and bank-detail changes in different hands.', 'Dual authorization for master-data changes (new hires, bank accounts, salaries).', 'Reconcile payroll report → GL → headcount → bank file every run.']
      },
      {
        heading: 'IAS 19 in One Page',
        paragraphs: [
          'IAS 19 (Employee Benefits) sorts benefits by timing. Short-term benefits — wages, paid leave, profit-sharing payable within twelve months — are recognized undiscounted as employees render service, which is exactly the accrual logic above. Accumulating paid leave (unused vacation carried forward) is accrued as it is earned.',
          'Post-employment benefits split two ways. Defined contribution plans (the company pays a fixed contribution into a fund): the expense is simply the contribution due for the period — no actuarial drama. Defined benefit plans (the company promises a pension level): the obligation is measured actuarially with service cost and net interest in profit or loss and remeasurements in other comprehensive income — conceptually, the company bears the investment and longevity risk. Termination benefits are recognized when the company can no longer withdraw the offer.'
        ],
        callout: { type: 'interview', text: 'Interview staple: "Defined contribution vs defined benefit?" In a defined contribution plan the company\'s obligation ends with the contribution — expense equals contributions due. In a defined benefit plan the company guarantees an outcome, so it carries an actuarially measured obligation, with investment and actuarial risk on its own balance sheet.' }
      }
    ],
    mistakes: [
      'Recording only net pay as the expense — employer social charges are a real additional cost.',
      'Forgetting to accrue the stub period when payday falls after month-end.',
      'Netting employee deductions against salary expense instead of showing the liabilities owed to tax authorities.',
      'Accruing a bonus with no plan or commitment — hope is not a constructive obligation.',
      'Posting payroll by pay date instead of by service period, distorting monthly trends.',
      'Letting the salaries-payable clearing account carry a balance after payday without investigating.'
    ],
    interviewQA: [
      { q: 'Walk me through the payroll journal.', a: 'Each month I debit the full cost — gross salaries and employer social security — and credit the liabilities: income tax withheld, total social security payable (employee plus employer shares), and net salaries payable. For example: $200,000 gross plus $50,000 employer charges gives $250,000 of debits; credits are $40,000 tax withheld, $62,000 social security, and $148,000 net pay. Payday then clears net pay against cash. The key point I always make: the expense is $250,000, not the $148,000 net pay — deductions are liabilities, not cost savings.' },
      { q: 'How do you account for a year-end bonus that will not be paid until March?', a: 'If there is a contractual or established bonus plan creating an obligation, I accrue the best estimate each month as service is rendered — debit bonus expense, credit bonus accrual — so December carries its share. The estimate reflects the plan formula, performance to date, and expected forfeitures. If the bonus is purely discretionary with no commitment, there is no obligation and nothing is accrued until the decision is made. Auditors will test the accrual against plan rules and historical payout patterns.' }
    ],
    quiz: [
      { question: 'An employee earns gross salary of $5,000; income tax withheld is $1,000 and employee social security is $300. Net pay is:', options: ['$3,700', '$5,000', '$4,000', '$4,700'], answer: 0, explanation: 'Net pay = gross − deductions = $5,000 − $1,000 − $300 = $3,700. This is what the employee receives.', difficulty: 'Foundation', topic: 'Payroll Components', skill: 'Month-End Closing' },
      { question: 'Gross salaries are $200,000 and employer social security is $50,000. The company\'s total payroll cost is:', options: ['$200,000', '$150,000', '$148,000', '$250,000'], answer: 3, explanation: 'Total cost = gross salaries + employer contributions = $200,000 + $50,000 = $250,000. Employee deductions do not reduce the employer\'s cost.', difficulty: 'Intermediate', topic: 'Payroll Cost', skill: 'Month-End Closing' },
      { question: 'In the monthly payroll journal, which accounts are credited?', options: ['Salary expense and employer social security expense', 'Cash and bank overdraft', 'Tax withheld payable, social security payable, and salaries payable (net pay)', 'Bonus accrual and prepaid salaries'], answer: 2, explanation: 'Expenses are debited; the obligations — to employees (net pay), to tax authorities, and to social security funds — are credited as liabilities until settled.', difficulty: 'Intermediate', topic: 'Payroll Journal', skill: 'Month-End Closing' },
      { question: 'When is salary expense recognized?', options: ['On payday, when cash is paid', 'When the employment contract is signed', 'At year-end in one annual entry', 'As employees render the service (the month worked)'], answer: 3, explanation: 'Under IAS 19 and the accrual basis, short-term benefits are recognized as service is rendered. Payday timing only affects cash and the payable.', difficulty: 'Foundation', topic: 'Recognition', skill: 'Month-End Closing' },
      { question: 'A bonus plan guarantees payouts based on annual targets; at 31 December $30,000 is earned but unpaid. The correct treatment is:', options: ['Accrue: Dr Bonus Expense $30,000 / Cr Bonus Accrual $30,000', 'Wait until payment in March to recognize anything', 'Disclose only — bonuses are never accrued', 'Dr Bonus Accrual $30,000 / Cr Bonus Expense $30,000'], answer: 0, explanation: 'An established plan creates a constructive obligation: the bonus is earned through service, so December accrues the liability. The March payment will settle it.', difficulty: 'Intermediate', topic: 'Bonus Accrual', skill: 'Month-End Closing' },
      { question: 'Under a defined contribution pension plan, the company\'s pension expense for the period equals:', options: ['An actuarially calculated service cost', 'The contributions due for the period', 'The actual pensions paid to retirees', 'Zero — the fund bears all cost'], answer: 1, explanation: 'In a defined contribution plan the obligation ends with the contribution — no actuarial measurement, no balance sheet risk. Expense = contributions payable.', difficulty: 'Advanced', topic: 'IAS 19', skill: 'Month-End Closing' },
      { question: 'A $250,000 monthly payroll is recorded. The immediate financial-statement effect is:', options: ['Profit down $148,000 (net pay only)', 'Assets down $250,000 immediately', 'Profit down $250,000 and liabilities up $250,000', 'No effect until payday'], answer: 2, explanation: 'The full cost hits profit when service is rendered, matched by $250,000 of payables. Cash falls later, as each liability is settled.', difficulty: 'Intermediate', topic: 'FS Impact', skill: 'Month-End Closing' },
      { question: 'Employee income tax withheld from salaries is:', options: ['A reduction of salary expense', 'An asset — recoverable from the employee', 'Part of employer social security', 'A liability — the company owes it to the tax authority'], answer: 3, explanation: 'Withholding makes the employer a collection agent: the amount is owed to the tax authority, so it sits as a liability until remitted — it never reduces the expense.', difficulty: 'Foundation', topic: 'Deductions', skill: 'Month-End Closing' },
      { question: 'The salaries-payable clearing account still shows a balance two weeks after payday. This most likely indicates:', options: ['Unpaid amounts, posting errors, or a bank-file mismatch that must be investigated', 'Normal timing — it always carries a balance', 'Profit that can be released to income', 'A tax refund due'], answer: 0, explanation: 'The clearing account should zero out after payday. A lingering balance means something did not clear — failed payments, mis-postings, or master-data issues — and it needs investigation, not patience.', difficulty: 'Intermediate', topic: 'Payroll Controls', skill: 'Month-End Closing' }
    ]
  },
  {
    id: 'm30', level: 7, levelTitle: 'Financial Reporting Operations', title: 'Tax Accounting — IAS 12 Intro',
    standard: 'IAS 12', tagline: 'Accounting profit and taxable profit are cousins, not twins.',
    description: 'IAS 12 bridges the gap between the profit in the financial statements and the profit the tax authority taxes. This module introduces current versus deferred tax, temporary differences (carrying amount vs tax base), and the two core outcomes: taxable temporary differences create deferred tax liabilities, deductible ones create deferred tax assets.',
    minutes: 18, skills: ['IFRS Fundamentals'],
    sections: [
      {
        heading: 'Current Tax vs Deferred Tax',
        paragraphs: [
          'Current tax is the tax payable (or recoverable) on this year\'s taxable profit — computed under tax law, payable to the authority, usually within months of year-end. Deferred tax is the future tax consequence of things already in the financial statements: if an asset\'s carrying amount will produce more taxable income later than its tax base allows, some of today\'s accounting profit is effectively taxed tomorrow.',
          'Total income tax expense in profit or loss is the sum of both: current tax expense plus deferred tax expense (or minus deferred tax income). Analysts watch the relationship between the two — a company whose current tax is persistently far below its accounting tax expense is deferring tax into the future, which is useful to know before praising its "low" tax rate.'
        ],
        callout: { type: 'key', text: 'Income tax expense = current tax + deferred tax. Current tax settles with the authority now; deferred tax tracks tax that belongs to these statements but will be paid (or saved) later.' }
      },
      {
        heading: 'Temporary Differences: Carrying Amount vs Tax Base',
        paragraphs: [
          'A temporary difference is the gap between an asset\'s or liability\'s carrying amount (in the IFRS balance sheet) and its tax base (its amount for tax purposes). The word temporary matters: the difference will reverse over time as the asset is recovered or the liability settled. Compare this with permanent differences — a non-deductible fine, tax-exempt income — which never reverse and never create deferred tax.',
          'Direction is everything. If recovering the asset will create more taxable amounts in the future than its tax base implies, the difference is taxable and produces a deferred tax liability. If settling the item will create future tax deductions, the difference is deductible and produces a deferred tax asset. Work it with the examples below until the direction feels mechanical.'
        ],
        table: { headers: ['Situation', 'Carrying amount vs tax base', 'Type', 'Result'], rows: [['Machine: CA $100,000, tax base $40,000', 'CA > tax base', 'Taxable temporary difference', 'Deferred tax liability'], ['Warranty provision: CA $30,000, tax base $0', 'CA > tax base (liability)', 'Deductible temporary difference', 'Deferred tax asset'], ['Non-deductible fine accrued $10,000', 'Never deductible', 'Permanent difference', 'No deferred tax']] }
      },
      {
        heading: 'Deferred Tax Liabilities: Taxable Temporary Differences',
        paragraphs: [
          'The textbook DTL: accelerated tax depreciation. A machine carried at $100,000 in the IFRS books has a tax base of only $40,000 because tax law let the company depreciate it faster. When the machine\'s remaining $100,000 of carrying amount is recovered through use, taxable profit will exceed accounting profit by $60,000 — tax that belongs, economically, to the periods that recognized the accounting profit. At a 25% tax rate, the deferred tax liability is $60,000 × 25% = $15,000.',
          'DTLs are measured with the tax rate expected to apply when the difference reverses — the enacted or substantively enacted rate — and they are never discounted. A DTL is not a bill due tomorrow; it is the tax consequence already baked into today\'s balance sheet, waiting to materialize.'
        ],
        journal: {
          transaction: 'Recognize deferred tax liability: taxable temporary difference $60,000 x 25% tax rate',
          lines: [
            { account: 'Income Tax Expense (deferred)', dr: 15000, cr: null },
            { account: 'Deferred Tax Liability', dr: null, cr: 15000 }
          ],
          narration: 'Taxable temporary difference of $60,000 ($100,000 carrying amount − $40,000 tax base) at 25% = $15,000 DTL.'
        },
        impact: { pl: 'Total tax expense rises by $15,000 (deferred portion); profit falls.', bs: 'A $15,000 deferred tax liability — non-current — appears.', cf: 'No cash effect: this is tax payable in future periods, not today.' }
      },
      {
        heading: 'Deferred Tax Assets: Deductible Temporary Differences',
        paragraphs: [
          'Now the mirror image. The company recognizes a $30,000 warranty provision — an expense today in the IFRS books — but tax law allows the deduction only when warranty claims are actually paid. Carrying amount $30,000, tax base $0: a deductible temporary difference of $30,000. When the claims are paid, taxable profit will be $30,000 lower than accounting profit was — a future tax saving. At 25%, the deferred tax asset is $7,500.',
          'DTAs come with a gatekeeper: they are recognized only to the extent it is probable that future taxable profit will be available to use them. A loss-making company with no convincing turnaround cannot book a DTA on its tax losses — no matter how large they are. This probability test is one of the most judgement-heavy areas in tax accounting and a favorite audit battleground.'
        ],
        journal: {
          transaction: 'Recognize deferred tax asset: deductible temporary difference $30,000 x 25% tax rate',
          lines: [
            { account: 'Deferred Tax Asset', dr: 7500, cr: null },
            { account: 'Income Tax Expense (deferred)', dr: null, cr: 7500 }
          ],
          narration: 'Deductible temporary difference of $30,000 (provision not yet tax-deductible) at 25% = $7,500 DTA, recognized because future taxable profit is probable.'
        },
        impact: { pl: 'Total tax expense falls by $7,500 (deferred tax income); profit rises.', bs: 'A $7,500 deferred tax asset appears.', cf: 'No cash effect — the saving materializes when the warranties are paid and deducted.' },
        callout: { type: 'warning', text: 'A DTA is only recognized if future taxable profit is probable. Losses alone do not create an asset — hope is not a tax planning strategy.' }
      },
      {
        heading: 'Putting It Together: The Tax Expense and the Effective Rate',
        paragraphs: [
          'Total tax expense = current tax (on this year\'s taxable profit) ± deferred tax (the movement in DTLs and DTAs). Because accounting profit and taxable profit differ — depreciation timing, provisions, non-deductible items — the effective tax rate (tax expense ÷ accounting profit) rarely equals the statutory rate. IAS 12 requires a reconciliation explaining the gap: non-deductible expenses push it up, tax-exempt income and credits pull it down.',
          'That reconciliation is analytical gold. A falling effective rate driven by growing DTLs means tax is being deferred, not avoided — the bill is coming. A rate persistently below statutory with no explanation deserves skeptical questions, not applause.'
        ],
        bullets: ['Tax expense = current tax + deferred tax movement.', 'Effective tax rate = tax expense / accounting profit.', 'Reconcile statutory to effective rate — and read what the gap is telling you.']
      }
    ],
    mistakes: [
      'Treating permanent differences (non-deductible fines, exempt income) as temporary — they never create deferred tax.',
      'Recognizing a deferred tax asset without testing whether future taxable profit is probable.',
      'Using the wrong tax rate — IAS 12 requires enacted or substantively enacted rates, not last year\'s or hoped-for rates.',
      'Offsetting deferred tax assets and liabilities that relate to different tax authorities or entities.',
      'Forgetting to remeasure deferred tax balances when tax rates change — the effect goes through profit or loss.',
      'Discounting deferred tax balances — IAS 12 prohibits it.'
    ],
    interviewQA: [
      { q: 'What is the difference between current and deferred tax?', a: 'Current tax is the tax payable on this year\'s taxable profit under tax law — it settles with the authority. Deferred tax captures the future tax consequences of items already in the financial statements: when an asset\'s carrying amount differs from its tax base, recovering or settling it will change future taxable profit, so we recognize a deferred tax liability or asset today. Total income tax expense is the sum of both, which is why a company\'s tax expense can differ sharply from the tax it actually pays this year.' },
      { q: 'When do you recognize a deferred tax asset?', a: 'When there is a deductible temporary difference — or unused tax losses or credits — and it is probable that future taxable profit will be available to use it. The classic example is a warranty provision expensed in the books but deductible only when paid: that creates a future tax saving, hence a DTA. But probability is the gatekeeper — a persistently loss-making company with no convincing forecast cannot recognize the asset, which makes this one of the most judgemental areas in financial reporting.' },
      { q: 'Give me an example of a taxable temporary difference.', a: 'Accelerated tax depreciation: a machine carried at $100,000 in the IFRS balance sheet with a tax base of $40,000. The $60,000 gap is taxable — recovering the machine will generate $60,000 more taxable profit than the tax base implies — so at a 25% rate we recognize a $15,000 deferred tax liability. Other examples: revenue recognized in the books before it is taxable, or development costs capitalized in the books but deducted immediately for tax.' }
    ],
    quiz: [
      { question: 'Current tax is best described as:', options: ['The total tax expense shown in profit or loss', 'Tax expected to be paid in future years', 'The tax payable on this year\'s taxable profit under tax law', 'A provision for uncertain tax positions only'], answer: 2, explanation: 'Current tax is the amount payable (or recoverable) for the current period\'s taxable profit. Total tax expense adds the deferred tax movement on top.', difficulty: 'Foundation', topic: 'Current Tax', skill: 'IFRS Fundamentals' },
      { question: 'A machine has a carrying amount of $100,000 and a tax base of $40,000. The temporary difference is:', options: ['$60,000 deductible temporary difference', '$60,000 taxable temporary difference', '$140,000 taxable temporary difference', 'No temporary difference'], answer: 1, explanation: '$100,000 − $40,000 = $60,000. Recovering the asset will produce $60,000 more taxable profit than the tax base allows — a taxable temporary difference.', difficulty: 'Intermediate', topic: 'Temporary Differences', skill: 'IFRS Fundamentals' },
      { question: 'A taxable temporary difference gives rise to:', options: ['A deferred tax asset', 'Current tax payable', 'A deferred tax liability', 'No tax accounting at all'], answer: 2, explanation: 'Taxable = more tax in the future = deferred tax liability. (Deductible differences give deferred tax assets.)', difficulty: 'Intermediate', topic: 'DTL', skill: 'IFRS Fundamentals' },
      { question: 'At a 25% tax rate, the taxable temporary difference of $60,000 above creates:', options: ['A deferred tax liability of $15,000', 'A deferred tax asset of $15,000', 'A deferred tax liability of $60,000', 'Current tax payable of $15,000'], answer: 0, explanation: '$60,000 × 25% = $15,000 DTL. The rate applied is the enacted rate expected when the difference reverses.', difficulty: 'Intermediate', topic: 'DTL Measurement', skill: 'IFRS Fundamentals' },
      { question: 'A deductible temporary difference gives rise to:', options: ['A deferred tax liability', 'A deferred tax asset', 'A permanent difference', 'An increase in current tax'], answer: 1, explanation: 'Deductible = future tax deductions = future tax saving = deferred tax asset (subject to the probability test).', difficulty: 'Intermediate', topic: 'DTA', skill: 'IFRS Fundamentals' },
      { question: 'A $30,000 warranty provision is expensed in the books but deductible for tax only when claims are paid. At 25%, this creates:', options: ['A deferred tax liability of $7,500', 'A deferred tax asset of $30,000', 'No deferred tax — provisions are permanent differences', 'A deferred tax asset of $7,500'], answer: 3, explanation: 'Carrying amount $30,000 vs tax base $0 = $30,000 deductible temporary difference; $30,000 × 25% = $7,500 DTA, recognized if future taxable profit is probable.', difficulty: 'Intermediate', topic: 'DTA Measurement', skill: 'IFRS Fundamentals' },
      { question: 'The company accrues a $10,000 fine that is never tax-deductible. The tax effect is:', options: ['A deferred tax asset of $2,500', 'No deferred tax — it is a permanent difference', 'A deferred tax liability of $2,500', 'A reduction of current tax by $2,500'], answer: 1, explanation: 'Permanent differences never reverse, so they never create deferred tax. The fine simply increases the effective tax rate via the rate reconciliation.', difficulty: 'Foundation', topic: 'Permanent Differences', skill: 'IFRS Fundamentals' },
      { question: 'A company with a history of losses and no convincing forecast of future profits has large deductible temporary differences. It should:', options: ['Recognize the full DTA anyway', 'Recognize half the DTA as a compromise', 'Not recognize a deferred tax asset — future taxable profit is not probable', 'Recognize a DTL instead'], answer: 2, explanation: 'IAS 12\'s probability test is the gatekeeper: without probable future taxable profit, the DTA is not recognized — no matter how large the differences.', difficulty: 'Advanced', topic: 'DTA Recognition', skill: 'IFRS Fundamentals' },
      { question: 'Which journal recognizes a $15,000 deferred tax liability?', options: ['Dr Income Tax Expense (deferred) $15,000 / Cr Deferred Tax Liability $15,000', 'Dr Deferred Tax Liability $15,000 / Cr Cash $15,000', 'Dr Income Tax Expense $15,000 / Cr Cash $15,000', 'Dr Deferred Tax Asset $15,000 / Cr Income Tax Expense $15,000'], answer: 0, explanation: 'Creating a DTL increases tax expense (debit) and the liability (credit). Cash is untouched — this is future tax, not a current payment.', difficulty: 'Intermediate', topic: 'DTL Journal', skill: 'IFRS Fundamentals' }
    ]
  }
];
