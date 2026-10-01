// Level 3 — Operating Accounting (m10–m14)
export default [
  {
    id: 'm10', level: 3, levelTitle: 'Operating Accounting', title: 'IFRS 15 — Revenue Recognition ★',
    standard: 'IFRS 15', tagline: 'Revenue is earned when promises are kept — the five-step model that decides when.',
    description: 'IFRS 15 is the most-tested standard in the revenue area and a favourite interview topic. You will master the five-step model, point-in-time vs over-time recognition, variable consideration, and the contract asset/receivable/contract liability distinction — through several worked cases.',
    minutes: 28, skills: ['Revenue Recognition'],
    sections: [
      {
        heading: 'Why IFRS 15 Exists',
        paragraphs: [
          'Before IFRS 15, revenue guidance was scattered and inconsistent — IAS 18 for goods, IAS 11 for construction contracts, plus interpretations. Identical economics could produce different revenue timing. IFRS 15 replaced them all with a single principle: recognise revenue to depict the transfer of promised goods or services in an amount reflecting the consideration the entity expects to be entitled to.',
          'The core idea is control: revenue is recognised when (or as) the customer obtains control of the good or service — the ability to direct its use and obtain its benefits. This single lens replaced the old "risks and rewards" test and is what makes software subscriptions, construction projects and bundled phone contracts all analysable with the same model.'
        ],
        callout: { type: 'key', text: 'One principle: recognise revenue when control of the promised good or service transfers to the customer, at the amount you expect to receive. Everything in the five steps serves this sentence.' }
      },
      {
        heading: 'The Five-Step Model',
        paragraphs: [
          'Step 1: Identify the contract — an agreement creating enforceable rights and obligations, with commercial substance, identifiable payment terms, and probable collection. Step 2: Identify the performance obligations — each distinct good or service promised. Step 3: Determine the transaction price — what you expect to be entitled to, including variable consideration. Step 4: Allocate the price to the obligations based on relative stand-alone selling prices. Step 5: Recognise revenue as each obligation is satisfied.',
          'Run every case through these steps in order. Most errors come from skipping Step 2 (bundling things that are distinct, or splitting things that are not) or from recognising revenue in Step 5 before control has actually transferred.'
        ],
        steps: ['Identify the contract with the customer.', 'Identify the performance obligations (distinct goods/services).', 'Determine the transaction price (including variable consideration).', 'Allocate the price to obligations by relative stand-alone selling prices.', 'Recognise revenue when (or as) each obligation is satisfied.'],
        callout: { type: 'interview', text: '"Walk me through the five steps." Interviewers want the crisp list plus one sentence on each. Bonus points for stating the control principle first and noting that Step 2 (distinct obligations) is where most real-world disputes live.' }
      },
      {
        heading: 'Performance Obligations: Distinct or Not?',
        paragraphs: [
          'A good or service is distinct if the customer can benefit from it on its own (or with readily available resources) and it is separately identifiable in the contract. A phone and its 24-month service plan are two obligations; installation that only works with the machine sold is not distinct from the machine.',
          'This matters because each distinct obligation gets its own price allocation and its own recognition timing. Bundle wrongly and revenue shifts between periods — a favourite earnings-management lever and a favourite audit adjustment. Telecom bundles, software plus implementation, equipment plus multi-year maintenance: always test distinctness first.'
        ],
        callout: { type: 'example', text: 'Phone contract: handset (stand-alone price $600) + 24 months of service ($30/month = $720). Total $1,320 for $1,200 cash. Two distinct obligations → allocate $1,200 by relative stand-alone prices: handset $1,200 × 600/1,320 = $545 recognised at delivery; service $655 recognised over 24 months.' }
      },
      {
        heading: 'Over Time vs Point in Time',
        paragraphs: [
          'Revenue is recognised over time only if one of three criteria is met: (1) the customer simultaneously receives and consumes the benefits (e.g. cleaning services, routine maintenance); (2) the entity\'s performance creates or enhances an asset the customer controls as it is created (e.g. building on the customer\'s land); or (3) the performance creates an asset with no alternative use and the entity has an enforceable right to payment for work done (e.g. specialised manufacturing).',
          'If none is met, recognition is at a point in time — when control transfers, indicated by: right to payment, legal title, physical possession, significant risks and rewards transferred, customer acceptance. A standard product sale is point-in-time at delivery; a two-year construction project on the client\'s site is over time, typically by percentage of completion.'
        ],
        callout: { type: 'warning', text: 'The three over-time criteria are AND/OR: meeting ANY ONE is enough. But "no alternative use" alone is not enough — it must be paired with an enforceable right to payment. Miss that pairing and revenue recognition collapses to a point in time.' },
        table: { headers: ['Scenario', 'Timing', 'Criterion'], rows: [['Monthly cleaning service', 'Over time', 'Simultaneous receive and consume'], ['Building on client\'s land', 'Over time', 'Customer controls asset as built'], ['Custom machine, no alternative use + right to payment', 'Over time', 'No alternative use + payment right'], ['Standard goods shipped', 'Point in time', 'Control at delivery']] }
      },
      {
        heading: 'Variable Consideration and the Constraint',
        paragraphs: [
          'Discounts, rebates, refunds, performance bonuses and penalties make the transaction price variable. IFRS 15 requires estimating it — by expected value or most likely amount, whichever predicts better — and then applying the constraint: include variable amounts only to the extent it is highly probable that no significant reversal will occur when the uncertainty resolves.',
          'Example: a $1 million contract with a $100,000 performance bonus that is 60% likely. Expected value $60,000 — but can you include it? Only the portion passing the "highly probable no significant reversal" test. If the bonus depends on factors outside your control, you may recognise zero bonus until it is earned. This constraint is deliberately conservative: it stops companies booking bonuses they might have to reverse.'
        ],
        callout: { type: 'example', text: 'Software licence $500,000 plus usage-based royalties estimated at $80,000 (expected value). If collection of the royalty is highly probable with no significant reversal risk, transaction price = $580,000. If the royalty depends on the customer\'s volatile sales, constrain it — recognise the $500,000 now and the royalty as it becomes certain.' }
      },
      {
        heading: 'Contract Asset vs Receivable vs Contract Liability',
        paragraphs: [
          'Three balance-sheet positions, three different meanings. A receivable is an unconditional right to consideration — only the passage of time stands before payment. A contract asset is a right to consideration conditional on something else — e.g. you delivered phase 1 but can only bill when phase 2 completes. A contract liability is the mirror: you received cash (or have an unconditional right to it) before performing — the old "deferred revenue".',
          'The distinction signals risk: a contract asset carries performance risk on top of credit risk, so IFRS 7/9 disclosures treat it differently from receivables. Analysts watch contract liabilities as a leading indicator — growing deferred revenue means future revenue is already funded.'
        ],
        table: { headers: ['Item', 'Meaning', 'Example'], rows: [['Receivable', 'Unconditional right — only time to payment', 'Billed invoice due in 30 days'], ['Contract asset', 'Right conditional on further performance', 'Phase 1 done, billable after phase 2'], ['Contract liability', 'Obligation to perform for cash received', 'Annual subscription paid upfront']] },
        journal: { transaction: 'Annual software subscription $120,000 billed and collected upfront on 1 January.', lines: [{ account: 'Cash', dr: 120000, cr: null }, { account: 'Contract Liability', dr: null, cr: 120000 }], narration: 'Cash collected before service delivered' },
        impact: { pl: 'No revenue yet — $10,000 recognised monthly as the service is provided.', bs: 'Cash +$120,000; contract liability $120,000 decreasing $10,000/month.', cf: '$120,000 operating cash inflow upfront.' }
      },
      {
        heading: 'Case: Construction Contract Over Time',
        paragraphs: [
          'A contractor signs a $5 million fixed-price deal to build a warehouse on the client\'s land, costs estimated at $4 million, over 2 years. The client controls the asset as it is built (criterion 2) → revenue over time. Progress is measured by costs incurred (input method): year 1 costs $1.6 million = 40% complete.',
          'Year 1: revenue $5m × 40% = $2 million; cost $1.6 million; profit $400,000. Billings of $1.8 million were issued and $1.5 million collected. Revenue ($2m) exceeds billings ($1.8m) → contract asset $200,000. The entry each period is Dr Contract Asset / Cr Revenue for the excess, reclassed to receivables on billing. If billings ever exceed revenue, the excess is a contract liability.'
        ],
        journal: { transaction: 'Year 1: recognise $2,000,000 revenue on 40% completion; billings issued $1,800,000.', lines: [{ account: 'Contract Asset', dr: 2000000, cr: null }, { account: 'Revenue', dr: null, cr: 2000000 }], narration: 'Revenue recognised over time, 40% complete' },
        impact: { pl: 'Revenue $2,000,000; costs $1,600,000; profit $400,000 in year 1.', bs: 'Contract asset $200,000 (revenue ahead of billings); receivables $1,800,000 on billing.', cf: 'Cash follows collections ($1,500,000), not revenue — operating inflow lags profit.' },
        callout: { type: 'key', text: 'Over-time profit emerges with progress, but cash follows billing and collection. A contractor can show strong profits with negative operating cash flow — the contract asset is where the gap lives.' }
      },
      {
        heading: 'Interview Angles and Red Flags',
        paragraphs: [
          'IFRS 15 is an interview staple because it tests judgement. Expect: "How would you recognise revenue for a SaaS company?" (subscription over time; implementation — distinct or not?; variable usage fees constrained). "Bill-and-hold arrangements?" (revenue only if control transferred: customer requested it, product identified separately, ready for delivery — strict criteria). "Principal vs agent?" (gross revenue if you control the good before transfer; net commission if you merely arrange).',
          'Red flags for analysts: revenue growing much faster than cash collections or contract liabilities shrinking while revenue grows (pulling forward); frequent changes in stand-alone selling price allocations; bill-and-hold or channel-stuffing spikes at quarter-end. IFRS 15\'s disclosure requirements — disaggregated revenue, remaining performance obligations — exist precisely to expose these.'
        ],
        callout: { type: 'interview', text: '"Principal or agent?" The test is control before transfer: if you control the goods before the customer gets them, you are principal and recognise gross revenue. If you only arrange the sale, you are agent and recognise the net commission. Marketplaces live and die by this assessment.' }
      }
    ],
    mistakes: [
      'Recognising revenue on cash collection instead of on transfer of control — cash timing is irrelevant to IFRS 15.',
      'Treating a bundle as one obligation without testing distinctness — phone + service plan are two obligations with different timing.',
      'Including fully variable bonuses in the transaction price without applying the "highly probable no significant reversal" constraint.',
      'Confusing contract assets with receivables — conditional rights carry performance risk and different disclosure.',
      'Recognising over-time revenue without meeting one of the three criteria — default is point in time.',
      'Booking bill-and-hold revenue before all strict control criteria are met — a classic premature-revenue trick.'
    ],
    interviewQA: [
      { q: 'Explain the five-step model briefly.', a: 'First, identify the contract — enforceable, commercial substance, probable collection. Second, identify the distinct performance obligations — goods or services the customer can benefit from separately. Third, determine the transaction price, estimating variable consideration subject to the constraint. Fourth, allocate the price by relative stand-alone selling prices. Fifth, recognise revenue as each obligation is satisfied — over time if one of the three criteria is met, otherwise at the point control transfers. The whole model serves one principle: revenue depicts the transfer of control.' },
      { q: 'When is revenue recognised over time?', a: 'When any one of three criteria is met: the customer simultaneously receives and consumes the benefits, as with services; the entity creates or enhances an asset the customer controls as it is created, as with building on the client\'s land; or the asset has no alternative use to the entity and there is an enforceable right to payment for performance completed, as with custom manufacturing. Otherwise recognition is at a point in time, judged by indicators like right to payment, title, possession and acceptance.' },
      { q: 'What is the difference between a contract asset and a receivable?', a: 'A receivable is an unconditional right to consideration — only the passage of time is needed before payment. A contract asset is conditional on something other than time, typically further performance — for example, phase 1 is delivered but the contract only allows billing when phase 2 completes. The contract asset carries performance risk in addition to credit risk, which is why IFRS requires it to be presented and disclosed separately from receivables.' },
      { q: 'How does IFRS 15 handle a performance bonus that might not be earned?', a: 'The bonus is variable consideration: estimate it by expected value or most likely amount, then apply the constraint — include it only to the extent it is highly probable that subsequent resolution will not cause a significant revenue reversal. If the bonus depends on uncertain or uncontrollable factors, recognise zero until the uncertainty resolves. The constraint deliberately prevents booking revenue that may have to be reversed.' }
    ],
    quiz: [
      { question: 'The core principle of IFRS 15 is to recognise revenue:', options: ['When control of promised goods or services transfers to the customer', 'When cash is received from the customer', 'When the contract is signed', 'When the invoice is issued'], answer: 0, explanation: 'IFRS 15 is built on transfer of control, not cash, signature or invoicing. Revenue depicts the transfer at the expected consideration.', difficulty: 'Foundation', topic: 'Core Principle', skill: 'Revenue Recognition' },
      { question: 'Which is the correct order of the five steps?', options: ['Identify contract → identify obligations → determine price → allocate price → recognise revenue', 'Determine price → identify contract → recognise revenue → allocate price → identify obligations', 'Identify obligations → recognise revenue → determine price → allocate price → identify contract', 'Recognise revenue → identify contract → determine price → identify obligations → allocate price'], answer: 0, explanation: 'The steps run in order: contract, obligations, price, allocation, recognition. Each step feeds the next.', difficulty: 'Foundation', topic: 'Five-Step Model', skill: 'Revenue Recognition' },
      { question: 'A good or service is distinct when:', options: ['The customer can benefit from it separately and it is separately identifiable in the contract', 'It is listed on a separate invoice line', 'It has a different VAT rate', 'It is delivered on a different day'], answer: 0, explanation: 'Distinctness needs both: standalone benefit (alone or with available resources) and separate identifiability in the contract. Invoicing or delivery timing alone does not decide.', difficulty: 'Intermediate', topic: 'Performance Obligations', skill: 'Revenue Recognition' },
      { question: 'Revenue may be recognised over time when:', options: ['The customer simultaneously receives and consumes the benefits of performance', 'The contract lasts more than one year', 'The customer pays in instalments', 'Total contract value exceeds $1 million'], answer: 0, explanation: 'Simultaneous receive-and-consume is one of the three over-time criteria. Duration, payment terms and size are irrelevant.', difficulty: 'Intermediate', topic: 'Over Time', skill: 'Revenue Recognition' },
      { question: 'A manufacturer builds a custom machine with no alternative use and has an enforceable right to payment for work performed. Revenue is recognised:', options: ['Over time', 'At a point in time on final delivery', 'Only when cash is fully collected', 'When the contract is signed'], answer: 0, explanation: 'No alternative use plus enforceable right to payment meets the third over-time criterion — revenue follows progress, not delivery.', difficulty: 'Advanced', topic: 'Over Time', skill: 'Revenue Recognition' },
      { question: 'Variable consideration is included in the transaction price only to the extent that:', options: ['It is highly probable that no significant reversal will occur', 'Management is optimistic about earning it', 'The customer has paid a deposit', 'The contract mentions a maximum amount'], answer: 0, explanation: 'The constraint: include variable amounts only if a significant revenue reversal is highly improbable when uncertainty resolves.', difficulty: 'Intermediate', topic: 'Variable Consideration', skill: 'Revenue Recognition' },
      { question: 'Phase 1 of a project is delivered; the contract allows billing only after phase 2 completes. The $200,000 right is a:', options: ['Contract asset', 'Receivable', 'Contract liability', 'Contingent asset'], answer: 0, explanation: 'The right is conditional on further performance (phase 2), not just the passage of time — a contract asset, not a receivable.', difficulty: 'Intermediate', topic: 'Contract Balances', skill: 'Revenue Recognition' },
      { question: 'A $120,000 annual subscription is collected upfront on 1 January. At that moment the entity recognises:', options: ['Cash $120,000 and a contract liability of $120,000; no revenue', 'Revenue of $120,000 immediately', 'A receivable of $120,000', 'Revenue of $10,000 and a liability of $110,000'], answer: 0, explanation: 'Cash before performance creates a contract liability (deferred revenue). Revenue of $10,000/month follows as the service is delivered.', difficulty: 'Intermediate', topic: 'Contract Balances', skill: 'Revenue Recognition' },
      { question: '$5m contract, 40% complete, $1.8m billed. Revenue recognised and the balance sheet position are:', options: ['Revenue $2,000,000; contract asset $200,000', 'Revenue $1,800,000; no contract asset', 'Revenue $2,000,000; contract liability $200,000', 'Revenue $5,000,000; receivable $3,200,000'], answer: 0, explanation: 'Revenue = $5m × 40% = $2m. Revenue ahead of billings ($2m − $1.8m) = contract asset $200,000.', difficulty: 'Advanced', topic: 'Over Time Case', skill: 'Revenue Recognition' },
      { question: 'Phone $600 stand-alone + service $720 stand-alone sold for $1,200 cash. Revenue allocated to the handset at delivery:', options: ['$545 (1,200 × 600/1,320)', '$600 (full stand-alone price)', '$1,200 (full contract price)', '$480 (1,200 × 600/1,500)'], answer: 0, explanation: 'Allocate by relative stand-alone prices: total $1,320. Handset: $1,200 × 600/1,320 = $545.45. The discount is spread proportionally.', difficulty: 'Advanced', topic: 'Allocation', skill: 'Revenue Recognition' },
      { question: 'In a bill-and-hold arrangement, revenue can be recognised before delivery only if:', options: ['Strict criteria are met, including customer request, separate identification and readiness for transfer', 'The customer has paid in full', 'The goods are manufactured', 'The sales team needs to meet its target'], answer: 0, explanation: 'Bill-and-hold needs all strict criteria: substantive reason (customer request), separately identified product, ready for physical transfer, and no ability to use or redirect it.', difficulty: 'Advanced', topic: 'Point in Time', skill: 'Revenue Recognition' },
      { question: 'A marketplace arranges sales between buyers and sellers without ever controlling the goods. It is:', options: ['An agent recognising net commission as revenue', 'A principal recognising gross sales as revenue', 'Not recognising any revenue', 'Recognising the full sale price as revenue'], answer: 0, explanation: 'Without control before transfer, the marketplace is an agent: revenue is the net commission, not the gross transaction value.', difficulty: 'Advanced', topic: 'Principal vs Agent', skill: 'Revenue Recognition' }
    ]
  },
  {
    id: 'm11', level: 3, levelTitle: 'Operating Accounting', title: 'IAS 2 — Inventories',
    standard: 'IAS 2', tagline: 'Stock on the shelf is only worth what you can sell it for — cost vs net realisable value.',
    description: 'IAS 2 governs the measurement of inventories: cost formulas, the lower-of-cost-and-NRV rule, and write-downs. You will work the full NRV case, learn when reversals are permitted, and see how inventory choices move gross profit.',
    minutes: 18, skills: ['IFRS Fundamentals'],
    sections: [
      {
        heading: 'What Counts as Inventory — and at What Cost',
        paragraphs: [
          'Inventories are assets held for sale in the ordinary course of business, in production for such sale, or as materials to be consumed in production. Cost includes purchase price, conversion costs (direct labour, production overheads) and other costs to bring inventories to their present location and condition. Abnormal waste, storage costs after production, and selling costs are excluded — they hit the P&L immediately.',
          'Fixed production overheads are allocated based on normal capacity, not actual production. In a low-output month, unallocated overhead is expensed, not buried in inventory — this stops companies inflating inventory (and profit) by under-producing. It is one of IAS 2\'s quiet anti-manipulation rules.'
        ],
        callout: { type: 'key', text: 'Inventory cost = purchase + conversion + costs to bring to present location and condition. Abnormal waste and post-production storage are expensed immediately — never capitalised.' }
      },
      {
        heading: 'Cost Formulas: FIFO and Weighted Average Only',
        paragraphs: [
          'IAS 2 permits FIFO and weighted average cost formulas; LIFO is prohibited (recall m05). The chosen formula must be applied consistently to all inventories of similar nature. For interchangeable items, specific identification is not allowed — you cannot cherry-pick which units were "sold" to manage margins.',
          'In rising prices, FIFO reports lower cost of sales and higher profit than weighted average (older, cheaper costs go first), leaving newer, higher costs in inventory. The choice is a policy under IAS 8: change it only if the new formula gives more relevant information, applied retrospectively.'
        ],
        callout: { type: 'example', text: 'Buy 100 units at $10, then 100 at $14. Sell 100 units. FIFO cost of sales = $1,000 (the $10 units); weighted average = $1,200. FIFO profit is $200 higher and ending inventory $200 higher — same economics, different profit.' }
      },
      {
        heading: 'The NRV Test: Lower of Cost and Net Realisable Value',
        paragraphs: [
          'Inventories are measured at the lower of cost and net realisable value. NRV is the estimated selling price less estimated costs of completion and costs to sell — what the inventory will actually realise, not what you hope for. When NRV falls below cost — obsolescence, damage, falling market prices — the inventory is written down, and the write-down is recognised as an expense in the period it occurs.',
          'The test is applied item by item (or to groups of similar items), not to total inventory — you cannot hide a dead product line behind a profitable one. Materials held for production are not written down below cost if the finished goods they will become are expected to sell above cost.'
        ],
        callout: { type: 'warning', text: 'NRV is forward-looking: estimated selling price minus costs to complete and sell. Using today\'s list price without deducting selling costs overstates NRV and understates the write-down.' }
      },
      {
        heading: 'Worked Case: Cost 100, NRV 82',
        paragraphs: [
          'A product line has a carrying cost of $100,000. Market prices have fallen: estimated selling price is $95,000, with $8,000 of costs to complete and $5,000 of selling costs. NRV = $95,000 − $8,000 − $5,000 = $82,000. Since NRV ($82,000) is below cost ($100,000), a write-down of $18,000 is required.',
          'The entry is Dr Cost of Sales (or Inventory Write-Down expense) $18,000, Cr Inventory $18,000. The P&L takes the hit now — prudence demands recognising the loss as soon as it is evident, not waiting for the sale. The balance sheet carries inventory at $82,000, its recoverable amount.'
        ],
        journal: { transaction: 'Inventory with cost $100,000 has NRV of $82,000; write down to NRV.', lines: [{ account: 'Cost of Sales — Inventory Write-Down', dr: 18000, cr: null }, { account: 'Inventory', dr: null, cr: 18000 }], narration: 'Write-down of inventory to net realisable value' },
        impact: { pl: 'Expense $18,000 recognised immediately; gross profit falls $18,000.', bs: 'Inventory carried at $82,000 instead of $100,000; equity −$18,000.', cf: 'No cash effect — the loss is unrealised until sale.' },
        callout: { type: 'key', text: 'Write-down = Cost − NRV = $100,000 − $82,000 = $18,000. Recognised immediately as an expense. Waiting for the sale to recognise the loss violates IAS 2.' }
      },
      {
        heading: 'Reversals: Permitted When Conditions Improve',
        paragraphs: [
          'Unlike many impairments, IAS 2 write-downs CAN be reversed. If the circumstances that caused the write-down no longer exist — market prices recover — the reversal is recognised as a reduction in cost of sales in the period of reversal, limited to the original write-down amount. Inventory can never be carried above its original cost through a reversal.',
          'Continuing the case: if NRV later recovers to $95,000, reverse $13,000 (up to the $18,000 written down): Dr Inventory $13,000, Cr Cost of Sales $13,000. The ceiling is cost ($100,000) — reversals restore, never revalue upward. This asymmetry (write down immediately, reverse only on evidence) is prudence in action.'
        ],
        callout: { type: 'interview', text: '"Can inventory write-downs be reversed under IFRS?" Yes — unlike goodwill impairments. Reversal is recognised in the period conditions improve, capped at the original write-down so inventory never exceeds cost. US GAAP prohibits reversals for inventory too, so this is another real IFRS/US GAAP difference.' }
      }
    ],
    mistakes: [
      'Using selling price as NRV without deducting costs of completion and costs to sell.',
      'Testing NRV on total inventory instead of item-by-item, hiding obsolete lines behind profitable ones.',
      'Capitalising abnormal waste or post-production storage into inventory cost.',
      'Using LIFO for inventory — prohibited under IFRS.',
      'Reversing a write-down above original cost — reversals can only restore, never revalue upward.',
      'Delaying the write-down until the goods are sold — the loss is recognised when NRV falls below cost.'
    ],
    interviewQA: [
      { q: 'Inventory cost is $100,000 and NRV is $82,000. Walk me through it.', a: 'IAS 2 requires the lower of cost and NRV, so an $18,000 write-down is recognised immediately: Dr Cost of Sales $18,000, Cr Inventory $18,000. Gross profit falls $18,000 this period and inventory is carried at $82,000. There is no cash effect yet. If NRV later recovers, the write-down can be reversed up to the original $18,000 — but inventory can never be carried above its $100,000 cost.' },
      { q: 'What is included in inventory cost, and what is excluded?', a: 'Included: purchase price net of discounts, conversion costs (direct labour and production overheads allocated on normal capacity), and other costs to bring inventories to present location and condition. Excluded: abnormal waste, storage after production, administrative overheads, and selling costs — all expensed immediately. The normal-capacity rule stops companies inflating inventory by allocating fixed overheads over tiny production runs.' },
      { q: 'How does the inventory cost formula choice affect profit in inflation?', a: 'With rising prices, FIFO charges the oldest (cheapest) costs to cost of sales, so FIFO reports higher gross profit and higher ending inventory than weighted average. The choice is an IAS 8 accounting policy: applied consistently, changeable only for more relevant information with retrospective restatement. And LIFO, which would show the lowest profit in inflation, is banned under IFRS.' }
    ],
    quiz: [
      { question: 'Inventory cost $100,000; estimated selling price $95,000; costs to complete $8,000; costs to sell $5,000. NRV and write-down?', options: ['NRV $82,000; write-down $18,000', 'NRV $95,000; write-down $5,000', 'NRV $87,000; write-down $13,000', 'NRV $100,000; no write-down'], answer: 0, explanation: 'NRV = $95,000 − $8,000 − $5,000 = $82,000. Write-down = $100,000 − $82,000 = $18,000.', difficulty: 'Intermediate', topic: 'NRV', skill: 'IFRS Fundamentals' },
      { question: 'The journal entry for the $18,000 write-down is:', options: ['Dr Cost of Sales $18,000; Cr Inventory $18,000', 'Dr Inventory $18,000; Cr Cost of Sales $18,000', 'Dr Cash $18,000; Cr Inventory $18,000', 'Dr Retained Earnings $18,000; Cr Inventory $18,000'], answer: 0, explanation: 'The write-down is an expense recognised immediately (usually in cost of sales), reducing the inventory carrying amount.', difficulty: 'Foundation', topic: 'Journal Entries', skill: 'IFRS Fundamentals' },
      { question: 'If NRV later recovers to $95,000, the reversal is:', options: ['$13,000 credited to cost of sales (inventory cannot exceed cost)', '$18,000 credited to revenue', '$5,000 debited to inventory', 'No reversal is permitted'], answer: 0, explanation: 'Reversal = $95,000 − $82,000 = $13,000, recognised as a reduction of cost of sales. The $100,000 cost ceiling caps it.', difficulty: 'Advanced', topic: 'Reversals', skill: 'IFRS Fundamentals' },
      { question: 'Which cost formula is prohibited by IAS 2?', options: ['LIFO', 'FIFO', 'Weighted average', 'Specific identification for non-interchangeable items'], answer: 0, explanation: 'IAS 2 bans LIFO. FIFO and weighted average are permitted; specific identification is required for non-interchangeable items.', difficulty: 'Foundation', topic: 'Cost Formulas', skill: 'IFRS Fundamentals' },
      { question: 'Which cost should be excluded from inventory?', options: ['Abnormal waste in production', 'Direct labour', 'Production overheads at normal capacity', 'Inbound freight to the warehouse'], answer: 0, explanation: 'Abnormal waste is expensed immediately. Direct labour, normal-capacity overheads and inbound freight are part of cost.', difficulty: 'Intermediate', topic: 'Cost Components', skill: 'IFRS Fundamentals' },
      { question: 'Fixed production overheads are allocated based on:', options: ['Normal capacity', 'Actual production in the period', 'Maximum theoretical capacity', 'Management\'s forecast'], answer: 0, explanation: 'Normal capacity prevents inflating inventory (and profit) during low-production periods; unallocated overhead is expensed.', difficulty: 'Intermediate', topic: 'Cost Components', skill: 'IFRS Fundamentals' },
      { question: 'The NRV test is applied:', options: ['Item by item (or groups of similar items)', 'To total inventory as one number', 'Only to finished goods', 'Only at year-end, never interim'], answer: 0, explanation: 'Item-by-item (or similar groups) so obsolete lines cannot hide behind profitable ones. It applies whenever indicators exist.', difficulty: 'Intermediate', topic: 'NRV', skill: 'IFRS Fundamentals' },
      { question: 'In a period of rising prices, compared with weighted average, FIFO reports:', options: ['Higher profit and higher ending inventory', 'Lower profit and lower ending inventory', 'Higher profit and lower ending inventory', 'The same profit — the formula does not matter'], answer: 0, explanation: 'FIFO expenses the oldest, cheapest costs first → lower cost of sales → higher profit; newer, pricier costs stay in inventory.', difficulty: 'Advanced', topic: 'Cost Formulas', skill: 'Financial Analysis' },
      { question: 'Materials held for production are written down below cost when:', options: ['The finished goods they will become are expected to sell below cost', 'Their replacement cost falls, regardless of finished goods', 'Management decides to', 'Never — materials are always at cost'], answer: 0, explanation: 'Materials follow the finished goods: write down only if the finished product\'s NRV is below its cost. Falling replacement cost alone is not enough.', difficulty: 'Advanced', topic: 'NRV', skill: 'IFRS Fundamentals' }
    ]
  },
  {
    id: 'm12', level: 3, levelTitle: 'Operating Accounting', title: 'IAS 16 — Property, Plant and Equipment',
    standard: 'IAS 16', tagline: 'Big machines, long lives: how cost becomes depreciation, components and revaluations.',
    description: 'IAS 16 covers tangible long-lived assets: initial cost, the depreciation exercise, component accounting, and the choice between cost and revaluation models. You will compute depreciation from first principles and learn why significant parts are depreciated separately.',
    minutes: 20, skills: ['IFRS Fundamentals'],
    sections: [
      {
        heading: 'Recognition and Initial Cost',
        paragraphs: [
          'PPE is recognised when it is probable that future economic benefits will flow to the entity and cost can be measured reliably. Initial cost is everything to bring the asset to working condition: purchase price, import duties, installation, professional fees, and the estimated cost of dismantling and site restoration (recognised with a matching provision under IAS 37).',
          'Borrowing costs on qualifying assets are capitalised under IAS 23. What is never included: general administrative overheads, training costs, and costs of opening a new facility — those are expensed. The discipline is the same as IAS 2: capitalise what creates the asset\'s future benefit, expense the rest.'
        ],
        callout: { type: 'key', text: 'Cost = all expenditure to get the asset ready for use, including dismantling provisions. Day-to-day servicing is expensed; only replacements of parts that meet recognition criteria are capitalised.' }
      },
      {
        heading: 'Depreciation: The Core Exercise',
        paragraphs: [
          'Depreciation allocates the depreciable amount (cost minus residual value) over the useful life. Residual value is what the asset is expected to be worth at the end of its life; useful life is the period the entity expects to use it — not the asset\'s physical maximum. Both are estimates, reviewed at least annually.',
          'Worked exercise: machine cost $120,000, useful life 5 years, residual value $20,000. Depreciable amount = $120,000 − $20,000 = $100,000. Straight-line annual depreciation = $100,000 ÷ 5 = $20,000. Each year: Dr Depreciation Expense $20,000, Cr Accumulated Depreciation $20,000. After 3 years the carrying amount is $120,000 − $60,000 = $60,000.'
        ],
        journal: { transaction: 'Annual depreciation of machine: cost $120,000, residual $20,000, 5-year life.', lines: [{ account: 'Depreciation Expense', dr: 20000, cr: null }, { account: 'Accumulated Depreciation — Machinery', dr: null, cr: 20000 }], narration: 'Straight-line depreciation, year 1 of 5' },
        impact: { pl: 'Depreciation expense $20,000 per year reduces profit.', bs: 'Carrying amount falls $20,000/year: $100,000 after year 1 … $20,000 (residual) after year 5.', cf: 'No cash effect — depreciation is a non-cash allocation.' },
        callout: { type: 'example', text: 'Depreciable amount = $120,000 − $20,000 = $100,000. Annual charge = $100,000 ÷ 5 = $20,000. Forgetting to subtract residual value is the single most common exam error — it overstates depreciation by $4,000/year here.' }
      },
      {
        heading: 'Component Accounting',
        paragraphs: [
          'IAS 16 requires each significant part of an asset to be depreciated separately. An aircraft\'s airframe (25 years), engines (10 years) and interior (5 years) are three components with three depreciation schedules. Treating the aircraft as one 25-year asset would understate early depreciation and overstate profit.',
          'Componentisation also governs replacements: when an engine is replaced, the old engine\'s carrying amount is derecognised and the new engine capitalised as its own component. Major inspections (e.g. a ship\'s dry-dock overhaul) can be capitalised as a component and depreciated until the next inspection. This is where IAS 16 gets practical — and where auditors test whether "repairs" are really replacements.'
        ],
        callout: { type: 'warning', text: 'Capitalising a routine repair as a "component replacement" inflates assets and profit. The test: does the expenditure replace a previously recognised component or meet the recognition criteria on its own? Day-to-day servicing never qualifies.' }
      },
      {
        heading: 'Cost Model vs Revaluation Model',
        paragraphs: [
          'After recognition, IAS 16 offers a policy choice per class of PPE: the cost model (cost less depreciation and impairment) or the revaluation model (fair value at revaluation date less subsequent depreciation/impairment). Revaluations must be regular enough that carrying amount does not differ materially from fair value.',
          'Revaluation increases go to other comprehensive income (revaluation surplus in equity), not profit — unless reversing a previous revaluation decrease that hit profit. Decreases hit profit unless a surplus exists for that asset. This asymmetry mirrors prudence: gains are parked in equity until realised; losses hit profit immediately. On disposal, the surplus transfers to retained earnings (never through profit).'
        ],
        journal: { transaction: 'Building revalued upward: carrying amount $800,000, fair value $950,000.', lines: [{ account: 'Building', dr: 150000, cr: null }, { account: 'Revaluation Surplus (OCI)', dr: null, cr: 150000 }], narration: 'Revaluation increase recognised in OCI' },
        impact: { pl: 'No profit effect on upward revaluation (goes to OCI).', bs: 'PPE +$150,000; revaluation surplus (equity) +$150,000.', cf: 'No cash effect.' },
        callout: { type: 'interview', text: '"Why would a company choose the revaluation model?" To show a more current balance sheet — relevant for asset-heavy companies seeking finance. The costs: regular valuations, volatility in equity, and higher future depreciation. Most companies stay on cost for simplicity.' }
      },
      {
        heading: 'Derecognition and Review Discipline',
        paragraphs: [
          'An asset is derecognised on disposal or when no future benefits are expected. Gain or loss = proceeds minus carrying amount, recognised in profit or loss. A fully depreciated asset still in use stays on the books at cost less accumulated depreciation (carrying amount = residual value) — it is not written off just because depreciation ended.',
          'Useful lives, residual values and depreciation methods are reviewed at least each year-end; changes are estimate changes under IAS 8 — prospective. And every asset is subject to IAS 36 impairment testing when indicators exist (m14). Depreciation, revaluation and impairment together keep carrying amounts honest between valuations.'
        ],
        bullets: ['Disposal gain/loss = proceeds − carrying amount → profit or loss.', 'Fully depreciated assets in use remain recognised; depreciation simply stops at residual value.', 'Life, residual and method reviewed annually — changes are prospective estimate changes.', 'Impairment indicators trigger IAS 36 testing regardless of depreciation schedule.']
      }
    ],
    mistakes: [
      'Computing depreciation on full cost without subtracting residual value — the depreciable amount is cost minus residual.',
      'Depreciating land — land normally has an indefinite life and is not depreciated (only the buildings on it are).',
      'Expensing a component replacement that should be capitalised, or capitalising routine servicing that should be expensed.',
      'Crediting revaluation gains to profit — upward revaluations go to OCI (revaluation surplus), not profit.',
      'Continuing depreciation below residual value — depreciation stops when carrying amount reaches residual.',
      'Treating a change in useful life as a policy change — it is an estimate change, applied prospectively.'
    ],
    interviewQA: [
      { q: 'Machine cost $120,000, useful life 5 years, residual $20,000. What is annual depreciation?', a: 'Depreciable amount is cost minus residual: $120,000 − $20,000 = $100,000. Straight-line over 5 years gives $20,000 per year: Dr Depreciation Expense $20,000, Cr Accumulated Depreciation $20,000. After 3 years the carrying amount is $60,000. The most common error is depreciating the full $120,000, which overstates the charge by $4,000 a year.' },
      { q: 'Explain component accounting with an example.', a: 'IAS 16 requires significant parts with different useful lives to be depreciated separately. An aircraft: airframe 25 years, engines 10 years, cabin interior 5 years — three components, three schedules. When an engine is replaced, the old engine\'s carrying amount is derecognised and the new one capitalised. Without componentisation, a single 25-year life would understate early depreciation and overstate profit.' },
      { q: 'Where do revaluation gains and losses go?', a: 'Upward revaluations go to other comprehensive income, accumulating in the revaluation surplus within equity — not to profit. Downward revaluations hit profit or loss, unless they reverse a previous surplus for the same asset, in which case they reduce the surplus first. On disposal the surplus transfers directly to retained earnings, never through profit or loss.' }
    ],
    quiz: [
      { question: 'Cost $120,000, useful life 5 years, residual value $20,000. Annual straight-line depreciation?', options: ['$20,000', '$24,000', '$16,000', '$4,000'], answer: 0, explanation: '($120,000 − $20,000) ÷ 5 = $20,000. The residual value must be subtracted first.', difficulty: 'Foundation', topic: 'Depreciation', skill: 'IFRS Fundamentals' },
      { question: 'After 3 years, what is the machine\'s carrying amount?', options: ['$60,000', '$48,000', '$72,000', '$20,000'], answer: 0, explanation: '$120,000 − (3 × $20,000) = $60,000. Accumulated depreciation is $60,000.', difficulty: 'Intermediate', topic: 'Depreciation', skill: 'IFRS Fundamentals' },
      { question: 'Which cost is included in the initial cost of PPE?', options: ['Estimated dismantling and site restoration costs', 'Staff training on the new machine', 'General administrative overheads', 'Advertising for the product it will make'], answer: 0, explanation: 'Dismantling/restoration is part of cost (with a matching provision). Training, admin and advertising are expensed.', difficulty: 'Intermediate', topic: 'Initial Cost', skill: 'IFRS Fundamentals' },
      { question: 'An aircraft\'s engines (10-year life) within a 25-year airframe should be:', options: ['Depreciated separately as a significant component', 'Depreciated over 25 years with the airframe', 'Expensed immediately', 'Treated as inventory'], answer: 0, explanation: 'IAS 16 requires significant parts with different lives to be componentised and depreciated separately.', difficulty: 'Intermediate', topic: 'Components', skill: 'IFRS Fundamentals' },
      { question: 'Under the revaluation model, an upward revaluation is recognised in:', options: ['Other comprehensive income (revaluation surplus)', 'Profit or loss as a gain', 'Revenue', 'Retained earnings directly'], answer: 0, explanation: 'Upward revaluations go to OCI and accumulate in the revaluation surplus in equity — never to profit (except reversing a prior P&L decrease).', difficulty: 'Intermediate', topic: 'Revaluation', skill: 'IFRS Fundamentals' },
      { question: 'A downward revaluation with no existing surplus for the asset is recognised in:', options: ['Profit or loss', 'Other comprehensive income', 'Retained earnings directly', 'It is not recognised'], answer: 0, explanation: 'Without a surplus to absorb it, the decrease hits profit or loss immediately.', difficulty: 'Intermediate', topic: 'Revaluation', skill: 'IFRS Fundamentals' },
      { question: 'Which asset is normally NOT depreciated?', options: ['Land', 'Buildings', 'Machinery', 'Vehicles'], answer: 0, explanation: 'Land normally has an indefinite useful life and is not depreciated; buildings, machinery and vehicles are.', difficulty: 'Foundation', topic: 'Depreciation', skill: 'IFRS Fundamentals' },
      { question: 'A change in an asset\'s useful life is accounted for as:', options: ['A change in estimate, applied prospectively', 'A change in policy, applied retrospectively', 'A prior-period error', 'It cannot be changed'], answer: 0, explanation: 'Useful life is an estimate; revisions apply prospectively under IAS 8 — current and future depreciation change, history is untouched.', difficulty: 'Advanced', topic: 'Estimates', skill: 'IFRS Fundamentals' },
      { question: 'A machine carried at $60,000 is sold for $72,000. The gain recognised is:', options: ['$12,000 in profit or loss', '$72,000 in profit or loss', '$12,000 in OCI', '$60,000 in retained earnings'], answer: 0, explanation: 'Gain = proceeds $72,000 − carrying amount $60,000 = $12,000, recognised in profit or loss on derecognition.', difficulty: 'Intermediate', topic: 'Derecognition', skill: 'IFRS Fundamentals' }
    ]
  },
  {
    id: 'm13', level: 3, levelTitle: 'Operating Accounting', title: 'IAS 38 — Intangible Assets',
    standard: 'IAS 38', tagline: 'Ideas on the balance sheet: when R&D becomes an asset and when it stays an expense.',
    description: 'IAS 38 draws the hardest line in operating accounting: research is always expensed, development is capitalised only if all six criteria are met. You will learn the six tests, amortisation rules, and why indefinite-lived intangibles skip amortisation for annual impairment tests.',
    minutes: 16, skills: ['IFRS Fundamentals'],
    sections: [
      {
        heading: 'What Is an Intangible Asset?',
        paragraphs: [
          'An intangible asset is an identifiable non-monetary asset without physical substance: patents, software, licences, customer relationships, brands (if acquired). Identifiable means separable (could be sold or licensed on its own) or arising from contractual/legal rights. A skilled workforce is not identifiable — it cannot be separated from the business — so it is never an intangible asset.',
          'Recognition needs the usual test: probable future benefits and reliably measurable cost. The big practical divide is how the asset arose: purchased intangibles are straightforward (cost is the price paid); internally generated ones face the research-vs-development gauntlet below. And one absolute rule: internally generated goodwill, brands, mastheads and customer lists are never recognised — their cost cannot be distinguished from developing the business as a whole.'
        ],
        callout: { type: 'key', text: 'Internally generated brands, goodwill, mastheads and customer lists: NEVER recognised as assets under IAS 38. Only acquired intangibles and qualifying development costs make the balance sheet.' }
      },
      {
        heading: 'Research vs Development: The Six Criteria',
        paragraphs: [
          'Research — original investigation to gain new knowledge — is always expensed. No exceptions. Development — applying research to a plan for new products or processes — is capitalised if and only if ALL six criteria are met: (1) technical feasibility of completion, (2) intention to complete and use/sell, (3) ability to use or sell, (4) probable future economic benefits (a market exists), (5) adequate technical, financial and other resources to complete, and (6) reliable measurement of the expenditure.',
          'Miss even one and everything stays in the P&L. The criteria are deliberately strict because capitalising development flatters profit — auditors test each one, especially technical feasibility and the existence of a market. Once capitalised, amortisation begins when the asset is available for use, not when the project starts.'
        ],
        callout: { type: 'warning', text: 'ALL six criteria, not "most of them". A project with proven technology but no committed funding fails criterion 5 — expense everything. This all-or-nothing test is the most examined sentence in IAS 38.' },
        table: { headers: ['Criterion', 'What it asks'], rows: [['Technical feasibility', 'Can we actually build it?'], ['Intention', 'Do we plan to finish it?'], ['Ability', 'Can we use or sell it?'], ['Future benefits', 'Does a market exist?'], ['Resources', 'Do we have funding and skills to complete?'], ['Measurement', 'Can we reliably track the cost?']] }
      },
      {
        heading: 'Worked Case: The Pharma Project',
        paragraphs: [
          'A pharmaceutical company spends $2 million on early-stage drug research (screening compounds) and then $5 million developing the successful candidate through trials. The $2 million research is expensed immediately — no debate. For the $5 million development: technical feasibility is demonstrated by trial results, the company intends to complete, it can sell the drug, a market exists, funding is secured, and costs are tracked per project. All six met → capitalise $5 million.',
          'Entries: during development, Dr Development Asset $5,000,000, Cr Cash/Payables $5,000,000. When the drug is approved and available for use, amortisation begins over its useful life (say 10 years → $500,000/year). If at any point a criterion fails — trials fail — capitalisation stops and the asset is tested for impairment.'
        ],
        journal: { transaction: 'Development costs of $5,000,000 meeting all six IAS 38 criteria.', lines: [{ account: 'Development Asset (Intangible)', dr: 5000000, cr: null }, { account: 'Cash / Payables', dr: null, cr: 5000000 }], narration: 'Capitalisation of qualifying development expenditure' },
        impact: { pl: 'No immediate expense — $5m stays off the P&L until amortisation begins (then $500,000/year over 10 years).', bs: 'Intangible asset +$5,000,000; profit $5m higher than if expensed.', cf: 'Cash outflow is operating or investing by policy; no P&L-cash distortion from capitalisation itself.' },
        callout: { type: 'key', text: 'Capitalising $5m of development instead of expensing it increases current-year profit by $5m. That is exactly why the six criteria are strict — and why analysts adjust for aggressive capitalisation.' }
      },
      {
        heading: 'Amortisation and Indefinite Useful Lives',
        paragraphs: [
          'Finite-lived intangibles are amortised over their useful life, reflecting the pattern of benefits — straight-line by default. Residual value is normally zero unless a third party has committed to buy the asset or an active market exists. Useful life is reviewed annually; changes are prospective estimate changes.',
          'Indefinite-lived intangibles — a brand with no foreseeable limit to the cash flows it generates, for example — are NOT amortised at all. "Indefinite" does not mean "infinite": it means no foreseeable end. Instead, they are tested for impairment annually (and whenever indicators exist) under IAS 36. The indefinite assessment itself is reviewed each year — if a limit becomes foreseeable, amortisation starts prospectively.'
        ],
        callout: { type: 'interview', text: '"Why isn\'t an indefinite-lived brand amortised?" Because amortisation allocates cost over a useful life, and an indefinite life has no allocation period — any amortisation charge would be arbitrary. Instead, the annual impairment test ensures the carrying amount never exceeds recoverable amount. It is discipline through testing rather than through spreading.' }
      },
      {
        heading: 'Acquired Intangibles and Goodwill\'s Neighbour',
        paragraphs: [
          'In a business combination, the acquirer recognises identifiable intangibles separately from goodwill at fair value — customer relationships, technology, brands. This matters because goodwill is not amortised and its impairment cannot be reversed, while identifiable intangibles usually are amortised. Misclassifying value into goodwill flatters future profits (no amortisation) but creates impairment risk.',
          'Separately purchased intangibles (a licence bought for $300,000) are simply recognised at cost. The recognition subtlety is only for internally generated assets — which is why IAS 38 spends most of its energy on the research/development boundary. In interviews, connect IAS 38 to IAS 36: capitalised development and indefinite-lived brands both face impairment testing, and goodwill impairments are never reversed (m14).'
        ],
        bullets: ['Acquired in a business combination: recognise separately from goodwill at fair value.', 'Separately purchased: recognise at cost — straightforward.', 'Internally generated goodwill/brands: never recognised.', 'Capitalised development and indefinite-lived intangibles: IAS 36 impairment testing applies.']
      }
    ],
    mistakes: [
      'Capitalising research expenditure — research is always expensed, no exceptions.',
      'Capitalising development when only five of six criteria are met — all six are required.',
      'Amortising an indefinite-lived intangible — no amortisation; annual impairment test instead.',
      'Recognising internally generated brands or goodwill — prohibited under IAS 38.',
      'Starting amortisation of a development asset before it is available for use.',
      'Forgetting the annual impairment test for indefinite-lived intangibles and development assets not yet in use.'
    ],
    interviewQA: [
      { q: 'When can development costs be capitalised?', a: 'Only when all six IAS 38 criteria are met: technical feasibility, intention to complete, ability to use or sell, probable future economic benefits, adequate resources to complete, and reliable measurement of cost. Research is always expensed. If any single criterion fails, all the expenditure stays in profit or loss. Capitalisation begins only from the point the criteria are met — earlier research-phase spending is never retrospectively capitalised.' },
      { q: 'How are indefinite-lived intangibles treated differently?', a: 'They are not amortised, because there is no useful life over which to allocate cost — any charge would be arbitrary. Instead they are tested for impairment annually and whenever indicators exist under IAS 36. The indefinite assessment is itself reviewed each year; if a finite life becomes foreseeable, the entity switches to amortisation prospectively as an estimate change.' },
      { q: 'Why does aggressive development capitalisation concern analysts?', a: 'Because capitalising instead of expensing directly inflates current profit and assets — every dollar capitalised is a dollar kept out of expenses. Analysts compare capitalisation ratios across peers, check whether the six criteria disclosures are credible (especially technical feasibility and market existence), and sometimes adjust by expensing capitalised development to compare underlying profitability. It is one of the most common earnings-management channels in tech and pharma.' }
    ],
    quiz: [
      { question: 'Research expenditure under IAS 38 is:', options: ['Always expensed', 'Capitalised if the project looks promising', 'Capitalised and amortised over 5 years', 'Deferred until the product launches'], answer: 0, explanation: 'Research is always expensed — no exceptions. Only development meeting all six criteria may be capitalised.', difficulty: 'Foundation', topic: 'Research vs Development', skill: 'IFRS Fundamentals' },
      { question: 'Development costs may be capitalised when:', options: ['All six IAS 38 criteria are met', 'Any three of the six criteria are met', 'Management intends to complete the project', 'The project has spent over $1 million'], answer: 0, explanation: 'All six criteria — technical feasibility, intention, ability, future benefits, resources, measurement — must be met simultaneously.', difficulty: 'Foundation', topic: 'Six Criteria', skill: 'IFRS Fundamentals' },
      { question: 'A project meets five of the six criteria but lacks committed funding. Treatment?', options: ['Expense all development costs', 'Capitalise 5/6 of the costs', 'Capitalise and disclose the funding risk', 'Defer the decision one year'], answer: 0, explanation: 'The criteria are all-or-nothing. Failing the resources test means no capitalisation — everything is expensed.', difficulty: 'Intermediate', topic: 'Six Criteria', skill: 'IFRS Fundamentals' },
      { question: 'An indefinite-lived brand is:', options: ['Not amortised; tested for impairment annually', 'Amortised over 20 years maximum', 'Amortised over its legal life', 'Expensed immediately'], answer: 0, explanation: 'Indefinite-lived intangibles skip amortisation and face annual IAS 36 impairment tests instead.', difficulty: 'Intermediate', topic: 'Indefinite Life', skill: 'IFRS Fundamentals' },
      { question: 'Which internally generated item can NEVER be recognised as an intangible asset?', options: ['A brand developed by the company\'s own marketing', 'Development costs meeting all six criteria', 'A purchased software licence', 'A patent acquired in a business combination'], answer: 0, explanation: 'Internally generated brands, goodwill, mastheads and customer lists are never recognised — their cost cannot be separated from developing the business.', difficulty: 'Intermediate', topic: 'Recognition', skill: 'IFRS Fundamentals' },
      { question: 'Amortisation of a capitalised development asset begins:', options: ['When the asset is available for use', 'When development spending starts', 'When the first criterion is met', 'When the product is profitable'], answer: 0, explanation: 'Amortisation starts at availability for use — when the asset is in the condition to operate as intended.', difficulty: 'Intermediate', topic: 'Amortisation', skill: 'IFRS Fundamentals' },
      { question: '$2m research + $5m qualifying development on a drug project. P&L expense this year?', options: ['$2,000,000 (research only)', '$7,000,000', '$0', '$500,000'], answer: 0, explanation: 'Research $2m is expensed; qualifying development $5m is capitalised (amortisation starts only when available for use).', difficulty: 'Advanced', topic: 'Case', skill: 'IFRS Fundamentals' },
      { question: 'If the "indefinite" assessment of a brand changes to a 10-year finite life, the entity:', options: ['Begins amortisation prospectively as an estimate change', 'Restates prior periods with 10 years of catch-up amortisation', 'Writes the brand off immediately', 'Keeps it unamortised for comparability'], answer: 0, explanation: 'The change is an estimate change under IAS 8: amortise prospectively over the remaining 10 years, no restatement.', difficulty: 'Advanced', topic: 'Indefinite Life', skill: 'IFRS Fundamentals' },
      { question: 'The residual value of an intangible asset is assumed to be zero unless:', options: ['A third party commits to purchase it or an active market exists', 'Management estimates a scrap value', 'It is a software asset', 'The asset is indefinite-lived'], answer: 0, explanation: 'IAS 38 sets a rebuttable presumption of zero residual value, overcome only by a purchase commitment or an active market.', difficulty: 'Advanced', topic: 'Amortisation', skill: 'IFRS Fundamentals' }
    ]
  },
  {
    id: 'm14', level: 3, levelTitle: 'Operating Accounting', title: 'IAS 36 — Impairment of Assets',
    standard: 'IAS 36', tagline: 'When assets are worth less than the books say: measuring, allocating and (sometimes) reversing impairment.',
    description: 'IAS 36 ensures assets are not carried above their recoverable amount. You will learn value in use vs fair value less costs of disposal, cash-generating units, the goodwill allocation rules — including the iron law that goodwill impairments are never reversed — through calculation exercises.',
    minutes: 20, skills: ['IFRS Fundamentals'],
    sections: [
      {
        heading: 'The Core Test: Carrying Amount vs Recoverable Amount',
        paragraphs: [
          'At each reporting date the entity assesses whether indicators of impairment exist — market value declines, adverse technological or economic changes, rising interest rates, physical damage, or worse-than-expected performance. If indicators exist (and always annually for goodwill and indefinite-lived intangibles), the asset\'s recoverable amount is estimated. If carrying amount exceeds recoverable amount, the difference is an impairment loss recognised immediately in profit or loss.',
          'Recoverable amount is the HIGHER of value in use and fair value less costs of disposal. The logic: a rational owner would either keep using the asset (value in use) or sell it (fair value less costs) — whichever yields more. Taking the higher of the two is not optimism; it reflects the real options available.'
        ],
        callout: { type: 'key', text: 'Recoverable amount = HIGHER of (a) value in use and (b) fair value less costs of disposal. Impairment loss = carrying amount − recoverable amount (when positive), recognised in profit or loss.' }
      },
      {
        heading: 'Value in Use vs Fair Value Less Costs of Disposal',
        paragraphs: [
          'Value in use is entity-specific: the present value of future cash flows from continuing to use the asset, discounted at a pre-tax rate reflecting current market assessments of time value and the asset\'s risks. Projections use management\'s reasonable assumptions (max 5 years of budgets unless justified), then a steady or declining growth rate for extrapolation. Restructuring benefits are excluded unless the entity is already committed.',
          'Fair value less costs of disposal is market-based: the price in an orderly transaction between market participants (IFRS 13), minus disposal costs like legal fees and removal costs. If an active market quote exists it dominates; otherwise valuation techniques apply. In practice, test both and take the higher — worked below.'
        ],
        callout: { type: 'example', text: 'Machine: carrying amount $500,000. Value in use $420,000; fair value less costs of disposal $450,000. Recoverable amount = $450,000 (higher). Impairment loss = $500,000 − $450,000 = $50,000: Dr Impairment Loss $50,000, Cr Accumulated Impairment $50,000.' }
      },
      {
        heading: 'Calculation Exercise: Full Impairment Workthrough',
        paragraphs: [
          'A production line: cost $1,200,000, accumulated depreciation $400,000 → carrying amount $800,000. Indicators exist (new technology). Value in use is calculated at $620,000; fair value less costs of disposal at $580,000. Recoverable amount = $620,000 (the higher). Impairment loss = $800,000 − $620,000 = $180,000.',
          'After impairment the carrying amount is $620,000, and future depreciation is based on the new carrying amount over the remaining useful life — a prospective estimate change. If the line had 4 years of life left, new annual depreciation = $620,000 ÷ 4 = $155,000 (ignoring residual). Impairment does not just hit profit once; it resets the depreciation base going forward.'
        ],
        journal: { transaction: 'Impairment of production line: carrying amount $800,000, recoverable amount $620,000.', lines: [{ account: 'Impairment Loss (P&L)', dr: 180000, cr: null }, { account: 'Accumulated Impairment — Production Line', dr: null, cr: 180000 }], narration: 'Impairment loss: carrying amount exceeds recoverable amount' },
        impact: { pl: 'Impairment loss $180,000 recognised immediately; future depreciation falls to $155,000/year.', bs: 'Production line carried at $620,000; equity −$180,000.', cf: 'No cash effect — a non-cash write-down.' }
      },
      {
        heading: 'Cash-Generating Units and Goodwill',
        paragraphs: [
          'Many assets do not generate independent cash flows — a machine in a factory is worthless alone. IAS 36 groups them into cash-generating units (CGUs): the smallest identifiable group of assets generating largely independent cash inflows. Goodwill, which never generates cash on its own, is allocated to CGUs (or groups) expected to benefit from the synergies, and tested annually.',
          'Impairment allocation order within a CGU is strict: FIRST reduce goodwill to zero, THEN reduce the other assets pro-rata by carrying amount (but no asset below its individual recoverable amount). Goodwill absorbs the hit first because it is the most subjective, least separable asset — the premium paid over identifiable value.'
        ],
        callout: { type: 'warning', text: 'GOODWILL IMPAIRMENTS ARE NEVER REVERSED. This is the iron law of IAS 36. The reason: a subsequent increase in recoverable amount is likely internally generated goodwill, which IAS 38 prohibits recognising. Other assets\' impairments may be reversed — goodwill\'s may not.' },
        table: { headers: ['CGU carrying amount', 'Recoverable amount', 'Impairment'], rows: [['Goodwill $200,000 + assets $800,000 = $1,000,000', '$750,000', '$250,000: goodwill → $0, assets → $750,000']] }
      },
      {
        heading: 'Reversals: Everything Except Goodwill',
        paragraphs: [
          'For assets other than goodwill, if recoverable amount later increases, the impairment is reversed — but capped so the carrying amount never exceeds what it would have been without the impairment (original depreciation path). The reversal is recognised in profit or loss (or OCI if the asset is carried at revaluation).',
          'Example: the production line impaired to $620,000 with 4 years left. One year later (depreciation $155,000 → carrying $465,000), recoverable amount is reassessed at $700,000. Without impairment the carrying amount would have been $800,000 − $200,000 = $600,000 (original $200k/year depreciation × 1 year... adjusted). Reversal is capped at the no-impairment carrying amount. Goodwill, meanwhile, stays written down forever — memorise this asymmetry, because examiners and interviewers test it constantly.'
        ],
        callout: { type: 'interview', text: '"Why can\'t goodwill impairments be reversed?" Because any recovery in value after a goodwill write-down is indistinguishable from internally generated goodwill — which IAS 38 forbids recognising. Reversing would smuggle self-created goodwill onto the balance sheet. The standard prefers a permanent write-down over a fictional asset.' }
      }
    ],
    mistakes: [
      'Using the LOWER of value in use and FVLCD — recoverable amount is the HIGHER of the two.',
      'Reversing a goodwill impairment when conditions improve — never permitted under IAS 36.',
      'Testing a single machine for impairment when it has no independent cash flows — test the CGU.',
      'Allocating CGU impairment pro-rata before writing goodwill down to zero — goodwill absorbs first.',
      'Reversing an impairment above the no-impairment carrying amount — the cap is the original depreciation path.',
      'Including uncommitted restructuring benefits in value-in-use cash flows.'
    ],
    interviewQA: [
      { q: 'How do you compute an impairment loss? Give me the steps.', a: 'First check indicators (or test annually for goodwill and indefinite-lived intangibles). Then estimate recoverable amount — the higher of value in use (discounted future cash flows from continued use) and fair value less costs of disposal. Compare with carrying amount: if carrying exceeds recoverable, the difference is the impairment loss, recognised immediately in profit or loss. Afterwards, depreciate the new carrying amount over the remaining life prospectively. For a CGU, allocate the loss to goodwill first, then pro-rata to other assets.' },
      { q: 'A CGU has goodwill of $200,000 and other assets of $800,000; recoverable amount is $750,000. Allocate the impairment.', a: 'Total carrying $1,000,000 vs recoverable $750,000 → impairment $250,000. Goodwill is reduced first: $200,000 to zero, absorbing $200,000. The remaining $50,000 is allocated pro-rata to the other assets, reducing them to $750,000 total. No individual asset may be reduced below its own recoverable amount. And the $200,000 goodwill write-down can never be reversed.' },
      { q: 'When can an impairment loss be reversed?', a: 'For all assets except goodwill, when the recoverable amount increases due to changed estimates — the reversal is recognised in profit or loss, capped at the carrying amount that would have applied without the impairment (the original depreciation path). Goodwill impairments are never reversed, because the recovery would represent internally generated goodwill, which IAS 38 prohibits recognising.' }
    ],
    quiz: [
      { question: 'Recoverable amount is defined as:', options: ['The higher of value in use and fair value less costs of disposal', 'The lower of value in use and fair value less costs of disposal', 'Value in use only', 'Original cost less accumulated depreciation'], answer: 0, explanation: 'IAS 36 takes the higher — the owner would choose the better of continued use or sale.', difficulty: 'Foundation', topic: 'Recoverable Amount', skill: 'IFRS Fundamentals' },
      { question: 'Carrying amount $500,000; value in use $420,000; FVLCD $450,000. Impairment loss?', options: ['$50,000', '$80,000', '$30,000', '$0'], answer: 0, explanation: 'Recoverable = higher of $420k and $450k = $450,000. Loss = $500,000 − $450,000 = $50,000.', difficulty: 'Intermediate', topic: 'Calculation', skill: 'IFRS Fundamentals' },
      { question: 'Production line: carrying $800,000, recoverable $620,000. The entry is:', options: ['Dr Impairment Loss $180,000; Cr Accumulated Impairment $180,000', 'Dr Accumulated Impairment $180,000; Cr Impairment Loss $180,000', 'Dr Depreciation $180,000; Cr Production Line $180,000', 'No entry until the line is sold'], answer: 0, explanation: 'Loss = $800,000 − $620,000 = $180,000, recognised immediately in profit or loss.', difficulty: 'Foundation', topic: 'Journal Entries', skill: 'IFRS Fundamentals' },
      { question: 'After the $180,000 impairment with 4 years of life remaining, new annual depreciation is:', options: ['$155,000', '$200,000', '$45,000', '$180,000'], answer: 0, explanation: '$620,000 ÷ 4 = $155,000 per year, applied prospectively on the new carrying amount.', difficulty: 'Advanced', topic: 'Calculation', skill: 'IFRS Fundamentals' },
      { question: 'A machine cannot generate cash flows independently. It should be tested for impairment:', options: ['As part of its cash-generating unit', 'On its own using replacement cost', 'Only when sold', 'Never — only standalone assets are tested'], answer: 0, explanation: 'Assets without independent cash flows are grouped into the smallest CGU generating largely independent inflows.', difficulty: 'Intermediate', topic: 'CGUs', skill: 'IFRS Fundamentals' },
      { question: 'CGU impairment of $250,000 with goodwill $200,000 and assets $800,000 is allocated:', options: ['$200,000 to goodwill (to zero), $50,000 pro-rata to other assets', '$250,000 pro-rata across all assets including goodwill', '$250,000 to goodwill only', 'Entirely to the largest single asset'], answer: 0, explanation: 'Goodwill absorbs impairment first, down to zero; only the remainder goes pro-rata to other assets.', difficulty: 'Advanced', topic: 'CGUs', skill: 'IFRS Fundamentals' },
      { question: 'A goodwill impairment loss:', options: ['Can never be reversed', 'Can be reversed when recoverable amount recovers', 'Is reversed automatically after 5 years', 'Is credited to OCI on reversal'], answer: 0, explanation: 'IAS 36 prohibits reversing goodwill impairments — recovery would be internally generated goodwill.', difficulty: 'Foundation', topic: 'Goodwill', skill: 'IFRS Fundamentals' },
      { question: 'Value in use is based on:', options: ['Discounted future cash flows from continuing to use the asset', 'The current market selling price', 'Historical cost indexed for inflation', 'Replacement cost new'], answer: 0, explanation: 'Value in use is entity-specific: present value of cash flows from continued use, discounted at an appropriate pre-tax rate.', difficulty: 'Intermediate', topic: 'Value in Use', skill: 'IFRS Fundamentals' },
      { question: 'An impairment reversal for a non-goodwill asset is capped at:', options: ['The carrying amount without the original impairment (original depreciation path)', 'Original historical cost', 'Fair value at reversal date', 'There is no cap'], answer: 0, explanation: 'Reversals restore but never exceed what the carrying amount would have been — the asset cannot be revalued upward through reversal.', difficulty: 'Advanced', topic: 'Reversals', skill: 'IFRS Fundamentals' }
    ]
  }
];
