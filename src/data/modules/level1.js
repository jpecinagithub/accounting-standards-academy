// Level 1 — Accounting Foundations (m01–m04)
export default [
  {
    id: 'm01', level: 1, levelTitle: 'Accounting Foundations', title: 'Accounting Fundamentals',
    standard: 'Conceptual Framework', tagline: 'Every financial story ever told starts with one equation: Assets = Liabilities + Equity.',
    description: 'This module builds the mental model behind all of financial reporting. You will learn the accounting equation, the elements of financial statements, and why accrual accounting exists — the foundation every later module stands on.',
    minutes: 15, skills: ['IFRS Fundamentals'],
    visuals: ['accounting-equation'],
    sections: [
      {
        heading: 'The Accounting Equation',
        paragraphs: [
          'Every balance sheet in the world, from a village shop to a multinational, obeys a single equation: Assets = Liabilities + Equity. Assets are what the business owns or controls; liabilities are what it owes; equity is the residual claim — what would be left for the owners if every asset were sold and every liability paid. The equation is not a convention that could have been different; it is a logical identity. Every transaction touches at least two places, so the two sides always stay in balance.',
          'Think of the equation as a conservation law. Value cannot appear from nowhere: if assets grow by $100,000, either liabilities grew by $100,000 (someone lent it to you) or equity grew by $100,000 (owners invested it, or the business earned it). When you read financial statements later, you will constantly ask: which side of this equation moved, and what moved with it?'
        ],
        callout: { type: 'key', text: 'Assets = Liabilities + Equity. Reframe it as Equity = Assets − Liabilities: equity is what remains after creditors are paid. That residual nature is why shareholders bear the most risk — and the most reward.' },
        table: { headers: ['Element', 'Definition', 'Example'], rows: [['Assets', 'Resources controlled as a result of past events, from which future economic benefits are expected', 'Cash, inventory, machinery'], ['Liabilities', 'Present obligations to transfer economic resources as a result of past events', 'Bank loans, supplier payables'], ['Equity', 'The residual interest in assets after deducting liabilities', 'Share capital, retained earnings']] }
      },
      {
        heading: 'Income and Expenses: The Engine of Equity',
        paragraphs: [
          'Profit is not cash. Profit is the measure of how much richer the owners became through operations during a period: Income minus Expenses. When the business earns $50,000 of revenue, equity rises by $50,000; when it incurs $30,000 of expenses, equity falls by $30,000. The net effect — $20,000 of profit — flows into retained earnings, a component of equity.',
          'This is the bridge between the two great statements. The statement of profit or loss explains how profit arose; the statement of financial position shows the resulting balances. Lose sight of this link and financial statements look like disconnected lists; keep it, and every statement becomes a different view of the same story.'
        ],
        callout: { type: 'example', text: 'A company sells goods for $200,000 that cost it $120,000. Income +$200,000, expenses +$120,000, profit +$80,000. Assets change too: inventory falls $120,000, cash (or receivables) rises $200,000 — net assets up $80,000, equity up $80,000. Both sides balance.' }
      },
      {
        heading: 'Why Accrual, Not Cash?',
        paragraphs: [
          'Cash accounting records only money moving in and out. Accrual accounting records economic events when they occur, regardless of cash timing. A sale on credit in December counts as December revenue even though cash arrives in January; electricity used in December counts as December expense even though the bill is paid in February.',
          'Accrual matters because cash timing is noisy and often disconnected from performance. A business that collects cash early but delivers later, or delivers now and collects later, would show wildly misleading results under cash accounting. The matching principle — expenses follow the revenues they helped generate — lets investors compare performance across periods and across companies. Everything in m03 exists to make this one idea work.'
        ],
        callout: { type: 'warning', text: 'Do not confuse profit with cash. A profitable company can go bankrupt if its cash is locked in inventory and receivables while suppliers demand payment — the classic "profitable but illiquid" failure. This is why the cash flow statement exists alongside the profit and loss.' }
      },
      {
        heading: 'The Underlying Assumptions',
        paragraphs: [
          'All of IFRS rests on two foundational assumptions from the Conceptual Framework. First, the going concern assumption: financial statements are prepared as if the business will continue operating for the foreseeable future (at least twelve months). If it will not — if liquidation is likely — assets cannot be shown at normal carrying amounts and that fact must be disclosed.',
          'Second, the accrual basis of accounting (covered above): effects of transactions are recognised when they occur, not when cash is received or paid. A third standing principle is consistency and comparability: the same entity should apply the same policies period after period so that trends are meaningful, and statements should let users compare across entities.'
        ],
        bullets: ['Going concern: assume the business continues; if not, disclose and remeasure.', 'Accrual basis: recognise transactions when they occur.', 'Comparability: consistent policies over time enable trend analysis.'],
        callout: { type: 'interview', text: 'A classic interview question: "When can financial statements be prepared on a basis other than going concern?" Answer: when management intends to liquidate, cease trading, or has no realistic alternative — then assets and liabilities are measured on a liquidation basis and the basis must be disclosed.' }
      }
    ],
    mistakes: [
      'Saying "Assets − Liabilities = Equity" is wrong — it is the same equation, but writing it backwards hides the logic that equity is the residual.',
      'Treating profit as cash in the bank: profit measures performance on an accrual basis; cash is a separate story told by the cash flow statement.',
      'Classifying owner withdrawals (dividends, drawings) as expenses — they reduce equity directly and never touch profit.',
      'Forgetting that every transaction affects at least two elements; a single-sided entry breaks the equation and is always an error.',
      'Confusing liabilities with equity: a loan must be repaid regardless of performance; equity holders get paid only after creditors.'
    ],
    interviewQA: [
      { q: 'Explain the accounting equation and why it must always balance.', a: 'Assets = Liabilities + Equity: everything the business controls is financed either by creditors or by owners. It must always balance because every transaction is recorded with at least two entries of equal value — value cannot be created or destroyed, only transformed. If the equation does not balance, an entry is missing or wrong. It also shows that equity is a residual claim: shareholders are paid last, which is why they demand the highest return.' },
      { q: 'Why do we use accrual accounting instead of simply tracking cash?', a: 'Because cash timing is disconnected from economic performance. A company could show huge "profit" by collecting advance payments it has not earned, or look terrible while investing in inventory it has not yet sold. Accrual accounting recognises transactions when they occur and matches expenses to the revenues they generated, so profit measures real operating performance and is comparable across periods and companies.' },
      { q: 'A company makes $1 million profit but runs out of cash. Is that possible?', a: 'Absolutely — profit is an accrual concept, not cash. Profit can be trapped in growing receivables and inventory while suppliers are paid on time; depreciation is a non-cash expense that reduces profit but not cash; and investing activities like buying equipment consume cash without touching profit. This is exactly why the cash flow statement is a primary statement under IAS 1.' }
    ],
    quiz: [
      { question: 'A company has total assets of $850,000 and total liabilities of $520,000. What is its equity?', options: ['$330,000', '$1,370,000', '$520,000', 'Cannot be determined from this information'], answer: 0, explanation: 'Equity = Assets − Liabilities = $850,000 − $520,000 = $330,000.', difficulty: 'Foundation', topic: 'Accounting Equation', skill: 'IFRS Fundamentals' },
      { question: 'A business buys inventory for $40,000 on credit from a supplier. What happens to the accounting equation?', options: ['Assets increase $40,000 and liabilities increase $40,000', 'Assets increase $40,000 and equity increases $40,000', 'Only assets change: inventory up $40,000, payables down $40,000', 'Equity decreases $40,000 and liabilities increase $40,000'], answer: 0, explanation: 'Inventory (asset) rises $40,000 and the trade payable (liability) rises $40,000. Both sides of the equation increase equally, so it still balances.', difficulty: 'Foundation', topic: 'Accounting Equation', skill: 'IFRS Fundamentals' },
      { question: 'The owner of a sole proprietorship withdraws $15,000 cash for personal use. How is this recorded?', options: ['As an expense of $15,000 in profit or loss', 'As a reduction of equity (drawings), with no effect on profit', 'As a liability of $15,000', 'It is not recorded because it is a personal transaction'], answer: 1, explanation: 'Withdrawals by the owner are distributions of equity, not business expenses. Cash falls and equity falls directly; profit is unaffected.', difficulty: 'Intermediate', topic: 'Equity', skill: 'IFRS Fundamentals' },
      { question: 'Which of the following best defines a liability under the Conceptual Framework?', options: ['A present obligation to transfer an economic resource as a result of past events', 'Any future commitment the business intends to make', 'A probable future cost that management expects', 'An amount owed only when a court order exists'], answer: 0, explanation: 'A liability requires a present obligation arising from a past event, with a transfer of economic resources expected. Future intentions or mere expectations are not liabilities.', difficulty: 'Intermediate', topic: 'Elements', skill: 'IFRS Fundamentals' },
      { question: 'A company sells goods for $200,000 that cost $120,000, all in cash. What is the effect on equity?', options: ['Equity increases by $80,000', 'Equity increases by $200,000', 'Equity is unchanged because cash only moved between assets', 'Equity decreases by $120,000'], answer: 0, explanation: 'Profit = $200,000 − $120,000 = $80,000, and profit flows into retained earnings, increasing equity by $80,000. The cash-only view ($200,000 − $120,000) happens to match here, but equity moves by the profit, not the gross cash.', difficulty: 'Intermediate', topic: 'Profit and Equity', skill: 'IFRS Fundamentals' },
      { question: 'Why does accrual accounting produce more useful profit figures than cash accounting?', options: ['It records transactions when they occur and matches expenses to related revenue', 'It always shows higher profit than cash accounting', 'It ignores credit sales until cash is received', 'It is simpler because only cash movements are tracked'], answer: 0, explanation: 'Accrual accounting recognises economic events when they occur and matches expenses to the revenues they helped generate, so profit reflects performance rather than the accident of cash timing.', difficulty: 'Intermediate', topic: 'Accrual Basis', skill: 'IFRS Fundamentals' },
      { question: 'Under the going concern assumption, financial statements are prepared on the basis that:', options: ['The entity will continue in operation for the foreseeable future', 'The entity will be liquidated within twelve months', 'All assets will be sold at market value next year', 'Management intends to sell the business'], answer: 0, explanation: 'Going concern means the entity is expected to continue operating, so assets are not written down to fire-sale values. If liquidation is likely, a different basis must be used and disclosed.', difficulty: 'Foundation', topic: 'Assumptions', skill: 'IFRS Fundamentals' },
      { question: 'Which pair correctly links a financial statement to what it explains?', options: ['Statement of profit or loss → how profit arose; statement of financial position → resulting balances', 'Statement of profit or loss → cash movements; statement of financial position → profit', 'Statement of profit or loss → equity balances; cash flow statement → profit', 'Statement of financial position → how profit arose; profit or loss → resulting balances'], answer: 0, explanation: 'The P&L explains performance (income minus expenses); the statement of financial position shows the resulting asset, liability and equity balances. The two are linked through retained earnings.', difficulty: 'Foundation', topic: 'Financial Statements', skill: 'IFRS Fundamentals' },
      { question: 'A company receives $60,000 cash in advance for services it will deliver next year. How does the accounting equation change today?', options: ['Assets increase $60,000 and liabilities increase $60,000; no revenue yet', 'Assets increase $60,000 and equity increases $60,000 as revenue', 'Only cash increases; nothing else changes', 'Assets increase $60,000 and profit increases $60,000'], answer: 0, explanation: 'Cash rises $60,000 but the company now owes a service — a contract liability of $60,000. Revenue is recognised only when the service is delivered, not when cash arrives.', difficulty: 'Advanced', topic: 'Accrual Basis', skill: 'IFRS Fundamentals' }
    ]
  },
  {
    id: 'm02', level: 1, levelTitle: 'Accounting Foundations', title: 'Double-Entry Accounting',
    standard: 'Conceptual Framework', tagline: 'For every debit there is a credit — the 500-year-old machinery that keeps the equation honest.',
    description: 'Double-entry is the bookkeeping system behind every modern set of accounts. You will learn the debit/credit rules for each element, work through a full transaction, and see how journal entries flow into the financial statements.',
    minutes: 20, skills: ['IFRS Fundamentals'],
    sections: [
      {
        heading: 'Debits and Credits: A Convention, Not a Value Judgement',
        paragraphs: [
          'Debit and credit are simply the left and right sides of an account. "Debit" does not mean "bad" or "decrease" — it means the left side of a T-account. Whether a debit increases or decreases an account depends on which element the account belongs to. Assets and expenses increase with debits; liabilities, equity and income increase with credits.',
          'The one unbreakable rule: in every journal entry, total debits must equal total credits. That is how the accounting equation stays in balance mechanically. An entry that debits $100,000 and credits $100,000 moves value between accounts without creating or destroying it.'
        ],
        callout: { type: 'key', text: 'DEAD CLIC: Debits increase Expenses, Assets, Drawings; Credits increase Liabilities, Income, Capital. Memorise this and the whole debit/credit system becomes mechanical.' },
        table: { headers: ['Element', 'Increases with', 'Decreases with', 'Normal balance'], rows: [['Assets', 'Debit', 'Credit', 'Debit'], ['Expenses', 'Debit', 'Credit', 'Debit'], ['Liabilities', 'Credit', 'Debit', 'Credit'], ['Equity', 'Credit', 'Debit', 'Credit'], ['Income', 'Credit', 'Debit', 'Credit']] }
      },
      {
        heading: 'Worked Example: Buying Equipment for Cash',
        paragraphs: [
          'A company purchases equipment for $100,000 and pays in cash immediately. Two things happen at once: the company gains equipment (a non-current asset) and loses cash (a current asset). Both changes are on the asset side, so total assets are unchanged — the value simply moved from cash to equipment.',
          'The journal entry debits PPE — Equipment for $100,000 (assets increase with debits) and credits Cash for $100,000 (assets decrease with credits). There is no profit or loss effect: buying equipment is exchanging one asset for another, not an expense. Depreciation will hit the P&L later, year by year, but the purchase itself never does.'
        ],
        journal: { transaction: 'Company purchases equipment for $100,000 cash.', lines: [{ account: 'PPE — Equipment', dr: 100000, cr: null }, { account: 'Cash', dr: null, cr: 100000 }], narration: 'Purchase of equipment paid in cash' },
        impact: { pl: 'No P&L impact initially — the purchase is an asset exchange, not an expense.', bs: 'PPE +$100,000; Cash −$100,000. Total assets unchanged; equation still balances.', cf: 'Investing cash outflow of $100,000 (purchase of PPE is an investing activity under IAS 7).' },
        callout: { type: 'warning', text: 'Interviewers love this trap: "The company spent $100,000 on equipment — does profit fall by $100,000?" No. Buying an asset is not an expense. The cost reaches the P&L gradually as depreciation over the asset\'s useful life.' }
      },
      {
        heading: 'From Journal Entry to Trial Balance',
        paragraphs: [
          'Every transaction is first recorded as a journal entry with equal debits and credits. Those entries are posted to individual ledger accounts, and at period end the balances of all accounts are listed in a trial balance. If total debits do not equal total credits, an error has been made somewhere — the trial balance is the system\'s built-in self-check.',
          'The trial balance then feeds the financial statements: asset, liability and equity balances go to the statement of financial position; income and expense balances go to the statement of profit or loss. This pipeline — journal → ledger → trial balance → statements — is the same in every accounting system on earth.'
        ],
        steps: ['Analyse the transaction: which elements moved?', 'Choose the accounts and apply DEAD CLIC for debit/credit.', 'Write the journal entry; check debits = credits.', 'Post to ledger accounts and extract a trial balance.', 'Map balances to the financial statements.']
      },
      {
        heading: 'Why It Matters: Error Detection and Fraud Control',
        paragraphs: [
          'Double-entry is more than arithmetic. Because every entry has two sides, mistakes are easier to spot: a missing entry breaks the trial balance immediately. In interviews and in practice, this is framed as an internal control — the system forces every movement of value to be explained from two directions.',
          'It also enforces discipline in thinking. Before you can book anything, you must answer: what did we receive, and what did we give? That question is the habit that separates people who can "do the books" from people who understand the business. Every module from here on will use journal entries — mastering this now pays compound interest.'
        ],
        callout: { type: 'interview', text: '"Explain double-entry to a non-accountant." Strong answer: every business event has two effects — you never just spend money, you spend money *on something*. Recording both effects keeps the books self-checking: if the two sides don\'t match, something is wrong.' }
      }
    ],
    mistakes: [
      'Debiting Cash when cash is paid out — payments are credits to Cash, receipts are debits.',
      'Booking the $100,000 equipment purchase as an expense, which understates assets and profit in year one and overstates profit later.',
      'Recording a sale on credit as Dr Cash / Cr Revenue instead of Dr Receivables / Cr Revenue — cash was not received.',
      'Forgetting the narration or writing vague ones; a journal without narration is an audit finding waiting to happen.',
      'Thinking the trial balance proves correctness — it only proves debits equal credits; a completely wrong but balanced entry still passes.',
      'Mixing up expense and asset treatment of costs: costs that create future benefit are capitalised, costs consumed in the period are expensed.'
    ],
    interviewQA: [
      { q: 'Walk me through the journal entry for buying equipment for $100,000 in cash, and its effect on each statement.', a: 'Dr PPE — Equipment $100,000, Cr Cash $100,000: one asset is exchanged for another. The P&L is unaffected initially — this is an asset purchase, not an expense. The balance sheet shows PPE up $100,000 and cash down $100,000, with total assets unchanged. The cash flow statement shows a $100,000 investing outflow. Depreciation will then expense the cost over the asset\'s useful life.' },
      { q: 'What does it mean if a trial balance does not balance?', a: 'It means at least one error exists: a single-sided entry, a transposition, or unequal debits and credits somewhere. However, a balanced trial balance does not prove the books are correct — errors of omission, wrong accounts, or reversed-but-balanced entries all slip through. It is a necessary but not sufficient check.' },
      { q: 'Is a debit always an increase?', a: 'No — debit means the left side of the account, and its effect depends on the element. Debits increase assets, expenses and drawings, but decrease liabilities, equity and income. The DEAD CLIC mnemonic captures it: Debits increase Expenses, Assets, Drawings; Credits increase Liabilities, Income, Capital.' }
    ],
    quiz: [
      { question: 'Which journal entry correctly records the purchase of equipment for $100,000 cash?', options: ['Dr PPE — Equipment $100,000; Cr Cash $100,000', 'Dr Cash $100,000; Cr PPE — Equipment $100,000', 'Dr Equipment Expense $100,000; Cr Cash $100,000', 'Dr Cash $100,000; Cr Share Capital $100,000'], answer: 0, explanation: 'Equipment (asset) increases → debit; cash (asset) decreases → credit. It is an asset exchange, not an expense.', difficulty: 'Foundation', topic: 'Journal Entries', skill: 'IFRS Fundamentals' },
      { question: 'What is the immediate P&L effect of buying the $100,000 equipment for cash?', options: ['No P&L effect initially', 'A $100,000 expense immediately', 'A $100,000 gain immediately', 'A $50,000 expense and $50,000 asset'], answer: 0, explanation: 'Buying an asset is an exchange of cash for equipment. The cost reaches the P&L gradually through depreciation, not at purchase.', difficulty: 'Foundation', topic: 'FS Impact', skill: 'IFRS Fundamentals' },
      { question: 'A customer pays $25,000 in cash for services already delivered last month. The correct entry is:', options: ['Dr Cash $25,000; Cr Trade Receivables $25,000', 'Dr Trade Receivables $25,000; Cr Revenue $25,000', 'Dr Cash $25,000; Cr Revenue $25,000', 'Dr Revenue $25,000; Cr Cash $25,000'], answer: 0, explanation: 'Revenue was already recognised last month when the service was delivered (Dr Receivables / Cr Revenue). The cash collection just converts one asset (receivable) into another (cash).', difficulty: 'Intermediate', topic: 'Journal Entries', skill: 'IFRS Fundamentals' },
      { question: 'Under DEAD CLIC, which accounts increase with a credit?', options: ['Liabilities, Income, Capital', 'Expenses, Assets, Drawings', 'Assets, Liabilities, Income', 'Expenses, Liabilities, Capital'], answer: 0, explanation: 'DEAD CLIC: Debits increase Expenses, Assets, Drawings; Credits increase Liabilities, Income, Capital.', difficulty: 'Foundation', topic: 'Debits and Credits', skill: 'IFRS Fundamentals' },
      { question: 'The company borrows $200,000 from a bank, cash received immediately. What is the effect on the accounting equation?', options: ['Assets +$200,000; Liabilities +$200,000', 'Assets +$200,000; Equity +$200,000', 'Cash +$200,000; Cash −$200,000 (no net change)', 'Liabilities +$200,000; Equity −$200,000'], answer: 0, explanation: 'Cash (asset) rises and the bank loan (liability) rises by the same amount. Equity is untouched — borrowing is not income.', difficulty: 'Foundation', topic: 'Accounting Equation', skill: 'IFRS Fundamentals' },
      { question: 'A trial balance shows total debits of $1,450,000 and total credits of $1,430,000. What can you conclude?', options: ['At least one error exists; the $20,000 difference must be investigated', 'The books are correct apart from a $20,000 rounding item', 'Profit is understated by $20,000', 'Nothing — trial balances never balance exactly'], answer: 0, explanation: 'An unbalanced trial balance always indicates an error: a single-sided entry, transposition, or mis-posting. It must be found and corrected, not ignored.', difficulty: 'Intermediate', topic: 'Trial Balance', skill: 'IFRS Fundamentals' },
      { question: 'Which of these is a limitation of the trial balance as a control?', options: ['A balanced but completely wrong entry (wrong accounts) still passes', 'It cannot detect any errors at all', 'It only works for cash transactions', 'It detects fraud with certainty'], answer: 0, explanation: 'The trial balance only checks that debits equal credits. Errors of principle (wrong account), omission, or compensating errors all pass undetected.', difficulty: 'Intermediate', topic: 'Trial Balance', skill: 'IFRS Fundamentals' },
      { question: 'The company declares a $30,000 dividend to shareholders. The correct entry is:', options: ['Dr Retained Earnings $30,000; Cr Dividends Payable $30,000', 'Dr Dividend Expense $30,000; Cr Cash $30,000', 'Dr Cash $30,000; Cr Dividend Income $30,000', 'Dr Share Capital $30,000; Cr Cash $30,000'], answer: 0, explanation: 'Dividends are distributions of equity, never expenses. Declaring creates a liability (dividends payable) and reduces retained earnings directly.', difficulty: 'Advanced', topic: 'Equity', skill: 'IFRS Fundamentals' },
      { question: 'How is the $100,000 equipment purchase classified in the cash flow statement?', options: ['Investing cash outflow', 'Operating cash outflow', 'Financing cash outflow', 'It does not appear because total assets did not change'], answer: 0, explanation: 'Purchases of PPE are investing activities under IAS 7. The cash flow statement tracks cash movements, not net asset changes — $100,000 of cash left the business.', difficulty: 'Intermediate', topic: 'FS Impact', skill: 'Cash Flow' }
    ]
  },
  {
    id: 'm03', level: 1, levelTitle: 'Accounting Foundations', title: 'Accruals and Prepayments',
    standard: 'Conceptual Framework', tagline: 'Paid for a year, used for a month: why the cash date is rarely the expense date.',
    description: 'Accruals and prepayments are the adjustments that make accrual accounting real. You will learn how to spread costs and revenues across the periods they belong to, with a full worked insurance case and the journal entries behind it.',
    minutes: 18, skills: ['IFRS Fundamentals'],
    sections: [
      {
        heading: 'The Accrual Principle in Action',
        paragraphs: [
          'Cash timing and economic timing constantly diverge. You pay insurance for the whole year in January; you use electricity in December but pay in February. The accrual principle says: record the cost in the period the benefit is consumed, not the period the cash moves. Two adjustment families make this happen: prepayments (cash paid before the benefit — a deferral) and accruals (benefit consumed before the cash — an anticipation).',
          'Get this wrong and profit is misstated in two periods at once. Charge a full year of insurance to January and January looks terrible while February–December look artificially good. These month-end adjustments are among the most common journal entries in real finance departments — the "Month-End Closing" skill starts here.'
        ],
        callout: { type: 'key', text: 'Prepayment = paid before the benefit (asset first, expense later). Accrual = benefit before the payment (expense first, liability later). Mirror images: one defers an expense already paid, the other anticipates an expense not yet paid.' },
        table: { headers: ['Situation', 'At payment/usage', 'Then each period'], rows: [['Prepaid insurance', 'Dr Prepaid Insurance (asset) / Cr Cash', 'Dr Insurance Expense / Cr Prepaid Insurance'], ['Accrued electricity', 'Dr Electricity Expense / Cr Accrued Liabilities', 'Dr Accrued Liabilities / Cr Cash (on payment)']] }
      },
      {
        heading: 'Worked Case: $120,000 Annual Insurance Paid Upfront',
        paragraphs: [
          'On 1 January the company pays $120,000 cash for a 12-month insurance policy. The full $120,000 is not January\'s expense — the company has bought 12 months of coverage, so at the moment of payment it holds a prepaid asset worth $120,000. The entry is Dr Prepaid Insurance $120,000, Cr Cash $120,000.',
          'Each month, one twelfth of the coverage is consumed: $120,000 ÷ 12 = $10,000. The monthly adjusting entry is Dr Insurance Expense $10,000, Cr Prepaid Insurance $10,000. After three months the prepaid asset stands at $90,000 and cumulative expense is $30,000. This is the matching principle at work: each month bears exactly the insurance cost of the protection it enjoyed.'
        ],
        journal: { transaction: 'Annual insurance premium of $120,000 paid in cash on 1 January for 12 months of cover.', lines: [{ account: 'Prepaid Insurance', dr: 120000, cr: null }, { account: 'Cash', dr: null, cr: 120000 }], narration: 'Payment of 12-month insurance premium' },
        impact: { pl: 'No expense at payment. Then $10,000 insurance expense per month as cover is consumed.', bs: 'Prepaid insurance asset $120,000 at payment, decreasing by $10,000/month; cash −$120,000 upfront.', cf: 'Full $120,000 operating cash outflow at payment; adjusting entries have no cash effect.' },
        callout: { type: 'example', text: 'Monthly adjustment (end of each month): Dr Insurance Expense $10,000 / Cr Prepaid Insurance $10,000. If the year-end falls mid-policy — say 6 months used — the balance sheet must show Prepaid Insurance $60,000 and the P&L $60,000 of expense. Auditors test exactly this.' }
      },
      {
        heading: 'Accrued Expenses: Consumed but Not Yet Paid',
        paragraphs: [
          'Now the mirror image. Employees earn December salaries of $45,000 but are paid on 5 January. December\'s P&L must show the $45,000 cost because the work was done in December — waiting for the payment date would understate December expenses and overstate January\'s. The year-end entry is Dr Salaries Expense $45,000, Cr Accrued Salaries (liability) $45,000.',
          'When cash is paid in January, the entry is Dr Accrued Salaries $45,000, Cr Cash $45,000 — January\'s P&L is untouched. A classic exam and interview trap is to expense the payment in January; that double-counts or misplaces the cost. The rule is mechanical: expense follows the period of benefit, cash follows the payment date.'
        ],
        journal: { transaction: 'December salaries of $45,000 earned by staff, payable 5 January.', lines: [{ account: 'Salaries Expense', dr: 45000, cr: null }, { account: 'Accrued Salaries', dr: null, cr: 45000 }], narration: 'Accrual of December salaries payable in January' },
        impact: { pl: '$45,000 salaries expense in December.', bs: 'Accrued salaries liability $45,000 at 31 December.', cf: 'No cash effect in December; $45,000 operating outflow in January.' }
      },
      {
        heading: 'Deferred Revenue and Accrued Income',
        paragraphs: [
          'The same logic applies to revenue. Cash received before delivery is deferred revenue (a liability — you owe the service), recognised as revenue only when delivered. Conversely, services delivered but not yet billed create accrued income: Dr Accrued Income (asset), Cr Revenue.',
          'Notice the symmetry across all four cases. Prepayments and deferred revenue are balance-sheet parking spots for cash that has moved before the economics; accruals and accrued income are balance-sheet placeholders for economics that have happened before the cash. Master these four and you can reason through almost any month-end adjustment.'
        ],
        callout: { type: 'warning', text: 'Deferred revenue is a liability, not revenue — the cash is in the bank but the sale has not happened yet. Startups that book advance payments as revenue overstate growth and will fail an audit on IFRS 15.' },
        table: { headers: ['Case', 'Cash vs economics', 'Balance sheet item'], rows: [['Prepaid expense', 'Cash before benefit', 'Asset (prepayment)'], ['Accrued expense', 'Benefit before cash', 'Liability (accrual)'], ['Deferred revenue', 'Cash before delivery', 'Liability (contract liability)'], ['Accrued income', 'Delivery before cash', 'Asset (accrued income / receivable)']] }
      }
    ],
    mistakes: [
      'Expensing the full $120,000 insurance premium in January instead of spreading $10,000 per month — misstates profit in every month of the year.',
      'Booking December salaries as January expense when paid — the cost belongs to December, when the work was done.',
      'Treating deferred revenue (cash received in advance) as revenue — it is a liability until the service is delivered.',
      'Forgetting to reverse accruals: booking the January salary payment as Dr Salaries Expense instead of Dr Accrued Salaries double-counts the cost.',
      'Leaving prepaid balances unadjusted at year-end, overstating assets and understating expenses.',
      'Confusing prepayments with accruals: prepayment = paid first (asset); accrual = consumed first (liability).'
    ],
    interviewQA: [
      { q: 'A company pays $120,000 on 1 January for a 12-month insurance policy. Walk me through the accounting.', a: 'At payment: Dr Prepaid Insurance $120,000, Cr Cash $120,000 — the company holds an asset, 12 months of cover, and there is no expense yet. Each month, Dr Insurance Expense $10,000, Cr Prepaid Insurance $10,000, reflecting the cover consumed. At 31 December the prepaid balance is zero and the full $120,000 has been expensed at $10,000 per month. The cash flow statement shows the $120,000 operating outflow in January; the monthly adjustments have no cash effect.' },
      { q: 'What is the difference between an accrual and a prepayment?', a: 'Both correct timing differences between cash and economics, but in opposite directions. A prepayment is cash paid before the benefit is consumed — an asset that becomes an expense over time, like insurance paid upfront. An accrual is a benefit consumed before cash is paid — an expense recognised now with a liability, like December salaries paid in January. Prepayments defer expenses already paid; accruals anticipate expenses not yet paid.' },
      { q: 'Why do auditors scrutinise prepayments and accruals at year-end?', a: 'Because they directly shift profit between periods, making them a classic earnings-management lever. An unadjusted prepayment overstates assets and understates expenses; a missing accrual understates liabilities and overstates profit. Auditors test cut-off — whether each cost sits in the correct period — and will sample the largest prepayment and accrual balances for support.' }
    ],
    quiz: [
      { question: 'On 1 January a company pays $120,000 cash for 12 months of insurance. What is the correct entry at payment?', options: ['Dr Prepaid Insurance $120,000; Cr Cash $120,000', 'Dr Insurance Expense $120,000; Cr Cash $120,000', 'Dr Cash $120,000; Cr Prepaid Insurance $120,000', 'Dr Insurance Expense $10,000; Cr Cash $10,000'], answer: 0, explanation: 'At payment the company holds an asset — 12 months of cover. The $120,000 becomes an expense gradually at $10,000 per month.', difficulty: 'Foundation', topic: 'Prepayments', skill: 'IFRS Fundamentals' },
      { question: 'For the same $120,000 policy, what is the monthly adjusting entry?', options: ['Dr Insurance Expense $10,000; Cr Prepaid Insurance $10,000', 'Dr Prepaid Insurance $10,000; Cr Cash $10,000', 'Dr Insurance Expense $120,000; Cr Prepaid Insurance $120,000', 'Dr Cash $10,000; Cr Insurance Expense $10,000'], answer: 0, explanation: 'Each month one twelfth of the cover is consumed: $120,000 ÷ 12 = $10,000 moves from the prepaid asset to expense.', difficulty: 'Foundation', topic: 'Prepayments', skill: 'IFRS Fundamentals' },
      { question: 'After 4 months of the policy, what is the prepaid insurance balance?', options: ['$80,000', '$40,000', '$120,000', '$0'], answer: 0, explanation: '$120,000 − (4 × $10,000) = $80,000 remains as an asset; $40,000 has been expensed.', difficulty: 'Intermediate', topic: 'Prepayments', skill: 'IFRS Fundamentals' },
      { question: 'December salaries of $45,000 are earned but paid on 5 January. The correct 31 December entry is:', options: ['Dr Salaries Expense $45,000; Cr Accrued Salaries $45,000', 'Dr Salaries Expense $45,000; Cr Cash $45,000', 'No entry until cash is paid in January', 'Dr Prepaid Salaries $45,000; Cr Cash $45,000'], answer: 0, explanation: 'The work was done in December, so December bears the expense with a matching liability. Cash moves in January against the accrual.', difficulty: 'Intermediate', topic: 'Accruals', skill: 'IFRS Fundamentals' },
      { question: 'When the $45,000 accrued salaries are paid in January, the entry is:', options: ['Dr Accrued Salaries $45,000; Cr Cash $45,000', 'Dr Salaries Expense $45,000; Cr Cash $45,000', 'Dr Cash $45,000; Cr Accrued Salaries $45,000', 'No entry — it was already recorded'], answer: 0, explanation: 'The payment settles the liability created in December. Debiting expense again would double-count the cost.', difficulty: 'Intermediate', topic: 'Accruals', skill: 'IFRS Fundamentals' },
      { question: 'A client pays $36,000 in advance on 1 October for 12 months of service starting that day. At 31 December, how much revenue is recognised?', options: ['$9,000', '$36,000', '$27,000', '$0'], answer: 0, explanation: 'Three months delivered (Oct–Dec): $36,000 ÷ 12 × 3 = $9,000 revenue. The remaining $27,000 stays as deferred revenue (liability).', difficulty: 'Advanced', topic: 'Deferred Revenue', skill: 'IFRS Fundamentals' },
      { question: 'Which statement about deferred revenue is correct?', options: ['It is a liability representing an obligation to deliver goods or services', 'It is revenue because the cash has been received', 'It is an asset representing future cash inflows', 'It appears only in the cash flow statement'], answer: 0, explanation: 'Cash received before delivery creates an obligation to perform — a liability. Revenue is recognised only when the performance happens.', difficulty: 'Intermediate', topic: 'Deferred Revenue', skill: 'IFRS Fundamentals' },
      { question: 'A company forgets to accrue $20,000 of December electricity used but billed in January. What is the effect on the December statements?', options: ['Expenses understated and profit overstated by $20,000; liabilities understated', 'Expenses overstated and profit understated by $20,000', 'No effect — the bill belongs to January', 'Assets overstated by $20,000'], answer: 0, explanation: 'Missing the accrual omits both the expense and the liability: December profit is $20,000 too high and liabilities $20,000 too low.', difficulty: 'Advanced', topic: 'Accruals', skill: 'Month-End Closing' },
      { question: 'Accrued income (services delivered, not yet billed) is recorded as:', options: ['Dr Accrued Income (asset); Cr Revenue', 'Dr Cash; Cr Revenue', 'Dr Revenue; Cr Accrued Income', 'Dr Receivables; Cr Deferred Revenue'], answer: 0, explanation: 'The revenue is earned (credit revenue) but cash is not yet due — an asset (accrued income) is recognised until billed.', difficulty: 'Intermediate', topic: 'Accrued Income', skill: 'IFRS Fundamentals' }
    ]
  },
  {
    id: 'm04', level: 1, levelTitle: 'Accounting Foundations', title: 'Financial Statements',
    standard: 'IAS 1', tagline: 'Four statements, one story: how profit, cash and equity explain each other.',
    description: 'This module tours the complete set of financial statements under IAS 1 and — more importantly — shows how they connect. Revenue flows to profit, profit flows to retained earnings, and net income reconciles to cash: master this wiring and you can read any annual report.',
    minutes: 22, skills: ['IFRS Fundamentals'],
    visuals: ['statements-flow'],
    sections: [
      {
        heading: 'The Complete Set',
        paragraphs: [
          'IAS 1 requires a complete set of financial statements: (1) statement of financial position (balance sheet), (2) statement of profit or loss and other comprehensive income, (3) statement of changes in equity, (4) statement of cash flows, plus (5) notes with material accounting policies and explanatory information. Each answers a different question; together they answer everything.',
          'A useful mental frame: the balance sheet is a photograph at a point in time; the other three are films covering the period. The notes are the director\'s commentary — without them the numbers can be seriously misleading. Professional analysts spend as much time in the notes as in the statements themselves.'
        ],
        callout: { type: 'key', text: 'Five components, always: financial position, profit or loss + OCI, changes in equity, cash flows, and notes. If any is missing, the set is not complete under IAS 1.' },
        table: { headers: ['Statement', 'Question it answers', 'Time dimension'], rows: [['Statement of financial position', 'What do we own and owe right now?', 'Point in time'], ['Statement of profit or loss', 'How much did we earn?', 'Period'], ['Statement of cash flows', 'Where did the cash go?', 'Period'], ['Statement of changes in equity', 'Why did equity move?', 'Period']] }
      },
      {
        heading: 'Statement of Profit or Loss',
        paragraphs: [
          'The P&L starts with revenue and subtracts costs in layers: cost of sales gives gross profit; operating expenses give operating profit; finance costs and tax give profit for the year (net income). Each layer tells a different story — gross margin about pricing and production efficiency, operating margin about cost control, net margin about the whole machine including financing and tax.',
          'Other comprehensive income (OCI) sits below profit: gains and losses that bypass the P&L, such as revaluation surpluses on PPE or foreign currency translation differences. Total comprehensive income = profit + OCI. OCI items are parked in equity until they are realised — a detail that matters when you meet IAS 16 revaluations in m12.'
        ],
        bullets: ['Revenue − cost of sales = gross profit', 'Gross profit − operating expenses = operating profit', 'Operating profit − finance costs − tax = profit for the year', 'Profit + other comprehensive income = total comprehensive income']
      },
      {
        heading: 'Statement of Financial Position',
        paragraphs: [
          'The balance sheet lists assets, then liabilities, then equity — always satisfying Assets = Liabilities + Equity. IAS 1 requires current/non-current distinction: current means expected to be realised, sold, consumed or settled within twelve months or the normal operating cycle; everything else is non-current. This split is the first liquidity signal a reader checks.',
          'Within equity you will see share capital, retained earnings (accumulated profits not distributed), and other reserves. Retained earnings is the living link to the P&L: each year\'s profit, minus dividends, is added to it. Trace that link and the two statements stop being separate documents.'
        ],
        callout: { type: 'example', text: 'Retained earnings roll-forward: opening balance $500,000 + profit for the year $120,000 − dividends $40,000 = closing $580,000. This exact reconciliation appears in the statement of changes in equity — it is how profit becomes equity.' }
      },
      {
        heading: 'Statement of Cash Flows and Changes in Equity',
        paragraphs: [
          'The cash flow statement splits cash movements into operating (core business), investing (buying/selling long-term assets) and financing (debt and equity). It starts from profit and adjusts for non-cash items and working capital changes — that reconciliation is the bridge between accrual profit and cash reality, covered in depth in m07.',
          'The statement of changes in equity explains every movement in equity: profit for the year, OCI, dividends, share issues and buybacks. When something in equity moved and you do not know why, this statement is where you look — auditors reconcile it line by line.'
        ],
        callout: { type: 'warning', text: 'The three statements must articulate: net income on the P&L must equal the profit line in the equity statement and the starting point of the cash flow statement; closing cash on the cash flow statement must equal cash on the balance sheet. If they do not, there is an error.' }
      },
      {
        heading: 'How the Statements Connect',
        paragraphs: [
          'Here is the wiring diagram to internalise. Revenue flows down the P&L: Revenue → gross profit → operating profit → net income. Net income flows into equity: it increases retained earnings (after dividends). And net income flows into the cash flow statement as the starting point of the operating section, where non-cash expenses like depreciation are added back and working capital changes adjust it to cash generated.',
          'Walk a transaction through all three. Sell goods for $10,000 on credit costing $6,000: P&L shows revenue $10,000, cost $6,000, profit $4,000. Balance sheet shows receivables +$10,000, inventory −$6,000, retained earnings +$4,000. Cash flow (indirect) starts at profit $4,000, adds back nothing, subtracts the $10,000 receivables increase and adds the $6,000 inventory decrease — operating cash flow $0, which is correct: no cash moved yet.'
        ],
        steps: ['P&L: Revenue ↓ expenses = Net income.', 'Equity statement: Net income − dividends → Retained earnings.', 'Cash flow: Net income ± non-cash items ± working capital = Operating cash flow.', 'Balance sheet: closing cash must match the cash flow statement; retained earnings must match the equity statement.']
      },
      {
        heading: 'The Notes: Where the Real Story Lives',
        paragraphs: [
          'IAS 1 requires disclosure of material accounting policies and any information needed to understand the statements. The notes reveal the judgements behind the numbers: which depreciation method, how revenue is recognised, what the provisions assume, which segments the business has.',
          'Two companies can report identical profits with completely different risk profiles, and only the notes will tell you. Aggressive revenue recognition, optimistic provisions, related-party transactions — the red flags analysts hunt for live in the notes. Reading financial statements without the notes is like judging a film by its poster.'
        ],
        callout: { type: 'interview', text: '"Where would you look first in an annual report?" Strong answer: the cash flow statement (hardest to manipulate), then the notes on accounting policies and judgements, then the P&L. Anyone who starts at revenue and stops there has not done analysis.' }
      }
    ],
    mistakes: [
      'Reading the P&L as a cash story — revenue includes credit sales and profit includes non-cash expenses.',
      'Treating OCI as part of profit for the year — OCI bypasses profit and goes straight to equity reserves.',
      'Forgetting that dividends reduce retained earnings but never appear as an expense in the P&L.',
      'Ignoring the notes, where policies, judgements and risks are disclosed.',
      'Mixing up the time dimension: the balance sheet is at a point in time; the P&L, cash flows and equity statement cover a period.',
      'Assuming the statements are independent — they articulate: net income, closing cash and retained earnings must reconcile across statements.'
    ],
    interviewQA: [
      { q: 'Walk me through how the three main statements link together.', a: 'Start with the P&L: revenue minus expenses gives net income. Net income flows into the statement of changes in equity, increasing retained earnings after dividends. The cash flow statement starts from net income, adds back non-cash items like depreciation, and adjusts for working capital movements to reach operating cash flow; investing and financing sections then explain the rest of the cash movement. Finally, closing cash on the cash flow statement must equal cash on the balance sheet, and closing retained earnings must equal the equity statement. If any link breaks, there is an error.' },
      { q: 'What is other comprehensive income, and why does it bypass profit or loss?', a: 'OCI captures gains and losses that the standards deliberately exclude from profit — for example PPE revaluation surpluses, certain foreign currency translation differences, and remeasurements of defined benefit plans. They bypass the P&L because including volatile, unrealised items would distort the performance measure; instead they accumulate in equity reserves. Total comprehensive income (profit + OCI) gives the full picture of equity change from non-owner sources.' },
      { q: 'A company reports rising profits but falling operating cash flow. What would you investigate?', a: 'I would suspect profit trapped in working capital: receivables growing faster than sales (collection problems or channel stuffing), inventory building up (obsolescence risk), or payables being stretched. I would also check for aggressive accruals — revenue recognised early or expenses deferred — by reading the notes on revenue recognition and provisions. Persistent divergence between profit and cash is one of the strongest red flags in financial analysis.' }
    ],
    quiz: [
      { question: 'Which of the following is NOT a required component of a complete set of financial statements under IAS 1?', options: ['A five-year financial forecast', 'Statement of financial position', 'Statement of cash flows', 'Notes comprising material accounting policies'], answer: 0, explanation: 'IAS 1 requires the four statements plus notes. Forecasts are not part of the financial statements.', difficulty: 'Foundation', topic: 'IAS 1', skill: 'IFRS Fundamentals' },
      { question: 'Revenue flows through the statements in which order?', options: ['Revenue → profit → retained earnings → equity', 'Revenue → cash → profit → equity', 'Revenue → equity → profit → cash', 'Revenue → retained earnings → profit → equity'], answer: 0, explanation: 'Revenue drives profit in the P&L; profit (after dividends) increases retained earnings; retained earnings is a component of equity.', difficulty: 'Foundation', topic: 'Statements Flow', skill: 'IFRS Fundamentals' },
      { question: 'In the indirect cash flow method, the operating section starts with:', options: ['Net income (profit for the year)', 'Cash at bank', 'Gross profit', 'Revenue'], answer: 0, explanation: 'The indirect method reconciles from accrual profit to cash: start with net income, add back non-cash items, adjust for working capital changes.', difficulty: 'Intermediate', topic: 'Cash Flow', skill: 'Cash Flow' },
      { question: 'A $40,000 dividend is declared and paid. Which statements are affected?', options: ['Statement of changes in equity and statement of financial position (cash and retained earnings fall)', 'Statement of profit or loss as a $40,000 expense', 'Only the statement of cash flows', 'No statements — dividends are off-book'], answer: 0, explanation: 'Dividends are distributions of equity: retained earnings and cash both fall. They never hit the P&L as an expense; the cash outflow appears in financing activities.', difficulty: 'Intermediate', topic: 'Dividends', skill: 'IFRS Fundamentals' },
      { question: 'Other comprehensive income (OCI) is best described as:', options: ['Gains and losses that bypass profit or loss and accumulate in equity reserves', 'A synonym for net income', 'Cash gains excluded from the cash flow statement', 'Only foreign currency cash balances'], answer: 0, explanation: 'OCI items — revaluation surpluses, translation differences, certain pension remeasurements — go straight to equity, keeping volatile unrealised items out of profit.', difficulty: 'Intermediate', topic: 'OCI', skill: 'IFRS Fundamentals' },
      { question: 'Which balance sheet item classifies as current?', options: ['Trade receivables expected to be collected within 3 months', 'A machine with a 10-year useful life', 'A 5-year bank loan', 'Goodwill'], answer: 0, explanation: 'Current means expected to be realised within twelve months or the operating cycle. The machine, long-term loan and goodwill are non-current.', difficulty: 'Foundation', topic: 'Classification', skill: 'IFRS Fundamentals' },
      { question: 'A company sells goods for $10,000 on credit; the goods cost $6,000. What is operating cash flow from this transaction (indirect method)?', options: ['$0 — no cash has moved yet', '$4,000', '$10,000', '−$6,000'], answer: 0, explanation: 'Start with profit $4,000, subtract the $10,000 receivables increase, add the $6,000 inventory decrease: $4,000 − $10,000 + $6,000 = $0. Correct — no cash moved.', difficulty: 'Advanced', topic: 'Statements Flow', skill: 'Cash Flow' },
      { question: 'The retained earnings roll-forward is: opening $500,000, profit $120,000, dividends $40,000. Closing retained earnings?', options: ['$580,000', '$540,000', '$620,000', '$460,000'], answer: 0, explanation: '$500,000 + $120,000 − $40,000 = $580,000. This reconciliation is the core of the statement of changes in equity.', difficulty: 'Intermediate', topic: 'Equity', skill: 'IFRS Fundamentals' },
      { question: 'Why do professional analysts spend significant time in the notes to the financial statements?', options: ['The notes disclose policies, judgements and risks that determine what the numbers mean', 'The notes contain the audited profit figure', 'The statements are unaudited without the notes', 'The notes replace the cash flow statement'], answer: 0, explanation: 'Identical profits can hide very different risk profiles; only the notes reveal revenue recognition policies, provision assumptions, and related-party dealings.', difficulty: 'Intermediate', topic: 'Notes', skill: 'Financial Analysis' }
    ]
  }
];
