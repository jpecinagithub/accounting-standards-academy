// Level 6 — Group Accounting (m22–m25)
export default [
  {
    id: 'm22', level: 6, levelTitle: 'Group Accounting', title: 'Consolidation Fundamentals',
    standard: 'IFRS 10', tagline: 'A group is one economic entity — even when the lawyers say it is twenty.',
    description: 'IFRS 10 requires a parent that controls subsidiaries to present consolidated financial statements. This module builds the consolidation mindset: what control means at a high level, how the non-controlling interest works, and the three eliminations every consolidation must get right — intercompany balances, intercompany sales, and unrealized profit in inventory.',
    minutes: 20, skills: ['Consolidation'],
    sections: [
      {
        heading: 'Why Groups Consolidate',
        paragraphs: [
          'Legally, a parent and its subsidiaries are separate companies. Economically, they are one business under common control — and investors, lenders, and regulators want to see that economic reality. IFRS 10 therefore requires a parent to present consolidated financial statements: the assets, liabilities, equity, income, expenses, and cash flows of the parent and all its subsidiaries presented as if they belonged to a single entity.',
          'Consolidation is also an anti-abuse mechanism. Without it, a group could hide debt in a subsidiary, shift profits between entities with transfer pricing, or make the parent look asset-light while the group is heavily leveraged. Consolidated statements strip out the internal plumbing and show only the group\'s dealings with the outside world.'
        ],
        callout: { type: 'key', text: 'Consolidation presents the group as a single economic entity. Everything the group does with itself is eliminated; only transactions with outsiders remain.' }
      },
      {
        heading: 'Parent, Subsidiary, and Control — The Vocabulary',
        paragraphs: [
          'A parent is an entity that controls one or more other entities. A subsidiary is an entity that is controlled by another entity. The trigger for consolidation is control, not the percentage owned: a 51%-owned company is consolidated just like a 100%-owned one, while a 40% holding with no control is not (it may be an associate or a simple investment).',
          'IFRS 10 defines control through three cumulative elements: power over the investee, exposure (or rights) to variable returns from involvement with it, and the ability to use that power to affect the amount of those returns. All three must be present. Module m23 takes each element apart with real-world examples; for now, remember that control is about substance — who really calls the shots — not just the share certificate count.'
        ],
        bullets: ['Parent: the entity that controls.', 'Subsidiary: the entity that is controlled.', 'Consolidation trigger: control, not 100% ownership.', 'Control in brief: power + variable returns + the ability to link the two.']
      },
      {
        heading: 'Non-Controlling Interest (NCI)',
        paragraphs: [
          'When the parent owns less than 100% of a subsidiary — say 80% — the remaining 20% belongs to outside investors. That slice is the non-controlling interest (NCI), formerly called minority interest. Consolidation brings in 100% of the subsidiary\'s assets, liabilities, income, and expenses, and then shows the NCI\'s share separately so readers can see what belongs to the parent\'s shareholders and what belongs to others.',
          'In the consolidated statement of financial position, NCI is presented within equity, separately from equity attributable to owners of the parent. It is not a liability: NCI holders are owners, not creditors. In the consolidated statement of profit or loss, the subsidiary\'s full profit is included and then split: profit attributable to owners of the parent, and profit attributable to NCI. At acquisition, IFRS 3 lets the group measure NCI either at fair value (the full goodwill method) or at its proportionate share of the subsidiary\'s identifiable net assets (the partial goodwill method).'
        ],
        callout: { type: 'warning', text: 'NCI sits inside equity, not in liabilities. Classifying it as debt overstates leverage and misleads every creditor reading the balance sheet.' },
        journal: {
          transaction: 'Recognize NCI and goodwill: Parent pays $400,000 cash for 80% of Sub; Sub\'s identifiable net assets have a fair value of $450,000',
          lines: [
            { account: 'Identifiable Net Assets (Sub, at fair value)', dr: 450000, cr: null },
            { account: 'Goodwill', dr: 40000, cr: null },
            { account: 'Investment in Sub (parent\'s books)', dr: null, cr: 400000 },
            { account: 'Non-Controlling Interest (20% x $450,000)', dr: null, cr: 90000 }
          ],
          narration: 'Goodwill = $400,000 consideration − 80% x $450,000 = $40,000. The parent\'s one-line investment is replaced with Sub\'s full net assets, goodwill, and the NCI share, using the partial goodwill method.'
        },
        impact: { pl: 'No immediate P&L effect on acquisition day (acquisition-related costs are expensed separately).', bs: 'Goodwill of $40,000 recognized as an asset; NCI of $90,000 presented within equity.', cf: 'The $400,000 cash paid appears in investing activities.' }
      },
      {
        heading: 'Eliminations I: Intercompany Balances and Transactions',
        paragraphs: [
          'If the group is one economic entity, it cannot owe money to itself or sell to itself. So every intercompany balance and transaction is eliminated in full. Parent\'s receivable from Sub cancels against Sub\'s payable to Parent. Parent\'s dividend income from Sub cancels against Sub\'s dividend distribution. Intercompany sales and the matching intercompany purchases cancel so that consolidated revenue reflects only sales to external customers.',
          'The mechanics are simple but the discipline is everything: eliminations must be complete and symmetrical. Eliminate the receivable but forget the payable, and the consolidated balance sheet will not balance. Eliminate the sale but forget the purchase, and gross profit is distorted. In practice, groups run an intercompany matching process before consolidation (see m25) precisely because these eliminations only work when both sides agree on the amounts.'
        ],
        bullets: ['Receivable vs payable: both removed, no P&L effect.', 'Intercompany sale vs purchase: revenue and cost of sales both removed.', 'Intercompany dividends: parent\'s dividend income removed against the subsidiary\'s distribution.', 'Intercompany loans: loan asset vs loan liability removed, with accrued interest too.']
      },
      {
        heading: 'Eliminations II: Unrealized Profit in Inventory',
        paragraphs: [
          'The subtlest elimination concerns profit the group has not really earned yet. Suppose Parent sells goods costing $40,000 to Sub for $50,000, and Sub still holds them in inventory at year-end. From the group\'s perspective nothing has happened: the goods merely moved from one warehouse to another, but the parent\'s books show a $10,000 profit. That profit is unrealized — it only becomes real when Sub sells the goods to an outside customer.',
          'Consolidation therefore eliminates the full intercompany sale and strips the $10,000 margin out of inventory, restoring it to original cost ($40,000). Note the word full: under the full elimination approach, the entire unrealized profit is removed from group profit regardless of the NCI percentage. (How unrealized profit is attributed between parent and NCI in upstream vs downstream sales is a refinement beyond this module.)'
        ],
        callout: { type: 'example', text: 'Parent sells to Sub for $50,000 (cost $40,000); goods unsold at year-end. Elimination: Dr Revenue $50,000, Cr Cost of sales $40,000, Cr Inventory $10,000. Group revenue falls $50,000, group inventory falls to true cost $40,000, group profit falls $10,000.' },
        journal: {
          transaction: 'Eliminate unrealized profit: intercompany sale of $50,000 (cost $40,000), goods still in Sub\'s inventory',
          lines: [
            { account: 'Revenue', dr: 50000, cr: null },
            { account: 'Cost of Sales', dr: null, cr: 40000 },
            { account: 'Inventory', dr: null, cr: 10000 }
          ],
          narration: 'Remove the intercompany sale in full and take the $10,000 unrealized margin out of Sub\'s inventory, leaving it at original group cost.'
        },
        impact: { pl: 'Group revenue and cost of sales both fall; group gross profit falls by the $10,000 unrealized margin.', bs: 'Inventory is carried at $40,000 original cost; no intercompany receivable or payable remains.', cf: 'No cash effect — this is a consolidation-only adjustment.' }
      }
    ],
    mistakes: [
      'Consolidating only wholly-owned subsidiaries: a 51%-owned company is controlled and must be consolidated, with NCI shown for the rest.',
      'Eliminating the intercompany receivable but forgetting the matching payable — the balance sheet will not balance.',
      'Eliminating the intercompany sale but not the purchase: revenue falls while cost of sales stays, distorting gross profit.',
      'Leaving unrealized profit in inventory, which overstates both group profit and group assets.',
      'Presenting NCI as a liability instead of within equity, which overstates the group\'s leverage.',
      'Forgetting to eliminate intercompany dividends: the parent\'s dividend income and the subsidiary\'s distribution must both disappear.'
    ],
    interviewQA: [
      { q: 'Why do we eliminate intercompany transactions in consolidation?', a: 'Because consolidated statements present the group as a single economic entity, and an entity cannot transact with itself. Leaving intercompany sales in would double-count revenue and profit; leaving intercompany balances in would inflate assets and liabilities. Eliminations ensure only transactions with the outside world remain. The most commonly missed one is unrealized profit in inventory: goods moved between group companies at a markup must be written back to original cost until sold externally.' },
      { q: 'What is the non-controlling interest and where does it appear?', a: 'NCI is the portion of a subsidiary\'s equity not owned by the parent — for example 20% when the parent holds 80%. Consolidation includes 100% of the subsidiary\'s assets, liabilities, income, and expenses, then shows the NCI share separately: within equity in the statement of financial position (never as a liability), and as a separate profit attribution line in the statement of profit or loss. At acquisition, IFRS 3 allows measuring NCI at fair value or at its proportionate share of identifiable net assets.' },
      { q: 'Parent sells goods to its subsidiary at a profit and the goods are unsold at year-end. What is the consolidation adjustment?', a: 'Eliminate the full intercompany sale — debit revenue for the selling price — and remove the unrealized margin from inventory so it is carried at original cost to the group: credit cost of sales for the original cost and credit inventory for the margin. Group profit falls by the unrealized amount because, economically, the group has only moved goods between its own warehouses. Next period, when the subsidiary sells externally, the profit is recognized.' }
    ],
    quiz: [
      { question: 'What are consolidated financial statements?', options: ['The parent company\'s separate financial statements only', 'A simple sum of all group companies\' trial balances with no adjustments', 'The financial statements of a group, presenting the parent and its subsidiaries as a single economic entity', 'The subsidiary\'s financial statements translated into the parent\'s currency'], answer: 2, explanation: 'Consolidation is not a simple addition: intercompany balances and transactions are eliminated so the group is presented as one economic entity, as IFRS 10 requires.', difficulty: 'Foundation', topic: 'Consolidation Basics', skill: 'Consolidation' },
      { question: 'Which of the following best defines a subsidiary?', options: ['Any company in which another company holds shares', 'An entity that is controlled by another entity (its parent)', 'An entity that operates in a foreign country', 'A company acquired within the last twelve months'], answer: 1, explanation: 'Control is the defining criterion — not the size of the shareholding, the location, or the acquisition date.', difficulty: 'Foundation', topic: 'Consolidation Basics', skill: 'Consolidation' },
      { question: 'Parent owns 70% of Sub. Sub reports profit of $100,000 for the year. How much of Sub\'s profit is attributed to the non-controlling interest?', options: ['$0 — all profit belongs to the parent', '$70,000', '$100,000', '$30,000'], answer: 3, explanation: 'NCI holds 30%, so 30% x $100,000 = $30,000 is attributed to NCI and shown as a separate line in the consolidated profit or loss.', difficulty: 'Intermediate', topic: 'NCI', skill: 'Consolidation' },
      { question: 'Parent sold goods costing $40,000 to its subsidiary for $50,000. At year-end the goods are still in the subsidiary\'s inventory. Which elimination is correct?', options: ['Dr Revenue $50,000 / Cr Cost of sales $40,000 / Cr Inventory $10,000', 'Dr Inventory $10,000 / Cr Cost of sales $10,000', 'Dr Revenue $50,000 / Cr Inventory $50,000', 'No elimination — the sale was at an arm\'s-length price'], answer: 0, explanation: 'The full intercompany sale ($50,000) is removed and the $10,000 unrealized margin is taken out of inventory, leaving it at original cost ($40,000). Arm\'s-length pricing is irrelevant inside the group.', difficulty: 'Intermediate', topic: 'Unrealized Profit', skill: 'Consolidation' },
      { question: 'Company A (parent) shows a $20,000 receivable from Company B (subsidiary), and B shows a $20,000 payable to A. What is the effect of eliminating them in consolidation?', options: ['Group profit falls by $20,000', 'Group assets and group liabilities both fall by $20,000; group profit is unchanged', 'Group equity falls by $20,000', 'There is no effect on any consolidated total'], answer: 1, explanation: 'Receivable and payable cancel each other: assets down $20,000, liabilities down $20,000. There is no P&L effect because no margin was involved.', difficulty: 'Intermediate', topic: 'Eliminations', skill: 'Consolidation' },
      { question: 'Under IFRS 3, the non-controlling interest at acquisition can be measured at:', options: ['Always at fair value — no choice is permitted', 'The book value of the subsidiary\'s equity', 'Fair value, or the NCI\'s proportionate share of the identifiable net assets', 'Zero, because NCI is not recognized on acquisition'], answer: 2, explanation: 'IFRS 3 offers a choice for each acquisition: fair value (full goodwill method) or the proportionate share of identifiable net assets (partial goodwill method).', difficulty: 'Advanced', topic: 'NCI', skill: 'Consolidation' },
      { question: 'The group forgets to eliminate $10,000 of unrealized profit sitting in a subsidiary\'s year-end inventory. What is misstated?', options: ['Group profit is understated by $10,000', 'Only the subsidiary\'s separate financial statements are affected', 'Group cash is overstated by $10,000', 'Group profit and group inventory are both overstated by $10,000'], answer: 3, explanation: 'The phantom margin inflates consolidated profit (revenue without real sale) and inflates inventory above its true cost to the group. Cash is unaffected.', difficulty: 'Intermediate', topic: 'Unrealized Profit', skill: 'Consolidation' },
      { question: 'Parent sells goods to Sub (a downstream sale) with $10,000 of unrealized profit still in Sub\'s inventory at year-end. Under the full elimination approach:', options: ['The full $10,000 is eliminated from group profit', 'Only the parent\'s ownership share of the $10,000 is eliminated', 'Nothing is eliminated for downstream sales', 'The $10,000 is charged against NCI'], answer: 0, explanation: 'Full elimination removes the entire unrealized profit from group profit and inventory. Attribution of the adjustment between parent and NCI in upstream versus downstream cases is a refinement beyond this module.', difficulty: 'Advanced', topic: 'Unrealized Profit', skill: 'Consolidation' },
      { question: 'Where is the non-controlling interest presented in the consolidated financial statements?', options: ['As a non-current liability', 'As a provision', 'Within equity, separately from equity attributable to owners of the parent', 'Netted against goodwill'], answer: 2, explanation: 'NCI holders are owners, not creditors, so NCI sits inside equity — shown on its own line so readers can distinguish it from the parent shareholders\' equity.', difficulty: 'Foundation', topic: 'NCI', skill: 'Consolidation' }
    ]
  },
  {
    id: 'm23', level: 6, levelTitle: 'Group Accounting', title: 'IFRS 10 — Control',
    standard: 'IFRS 10', tagline: 'Control is not a percentage. It is power, returns, and the link between them.',
    description: 'This module dissects the IFRS 10 definition of control: power over the investee, exposure to variable returns, and the ability to use power to affect those returns. You will work through majority voting, de facto control, potential voting rights, principal-versus-agent situations, and structured entities — the cases where the share percentage lies.',
    minutes: 18, skills: ['Consolidation'],
    sections: [
      {
        heading: 'The Three Elements of Control',
        paragraphs: [
          'IFRS 10 says an investor controls an investee if and only if it has all three of the following: (1) power over the investee — existing rights that give the current ability to direct the relevant activities, i.e., the activities that most affect returns; (2) exposure, or rights, to variable returns from its involvement — returns that vary with the investee\'s performance, such as dividends, cost savings, synergies, or residual interests on liquidation; and (3) the ability to use its power to affect the amount of those returns — the link between power and returns.',
          'All three are cumulative. Power without returns (a hired manager paid a fixed fee with no upside) is not control. Returns without power (a passive 10% shareholder) is not control. And power plus returns without the linkage — for example a fund manager who must act strictly in investors\' interests and can be removed at will — is not control either. The assessment is continuous: control is reassessed whenever facts and circumstances change.'
        ],
        callout: { type: 'key', text: 'Control = power + exposure to variable returns + the ability to use power to affect returns. Miss any one of the three and there is no control.' }
      },
      {
        heading: 'Power I: Majority Voting Rights',
        paragraphs: [
          'The straightforward case: holding more than half the voting rights usually gives power, because it lets the investor appoint the board and direct strategy, budgets, and major transactions — the relevant activities of a typical operating company. But IFRS 10 insists on looking past the headline percentage in both directions: sometimes less than half is enough (de facto control), and sometimes more than half is not enough.',
          'A majority can fail to deliver power when someone else holds substantive potential voting rights that would swing control, when voting rights are restricted by contract or regulation, or when the investor is acting as an agent for others rather than for itself. The question is always: who can currently direct the activities that matter?'
        ],
        bullets: ['>50% of voting rights: power is presumed, then verified.', 'Relevant activities: the ones that most affect returns — strategy, budgets, key appointments, major transactions.', 'Voting rights must be substantive, not merely protective (see below).']
      },
      {
        heading: 'Power II: De Facto Control',
        paragraphs: [
          'De facto control arises when an investor holds less than half the votes but can still direct the investee in practice. The classic pattern: Investor holds 45%, and the remaining 55% is scattered among thousands of small shareholders who historically do not vote or never coordinate. If the 45% holder has consistently won every shareholder vote, it has power — de facto, but power nonetheless.',
          'IFRS 10 lists the evidence to weigh: the size of the holding relative to the dispersion of others, historical voting patterns, potential voting rights, and any contractual arrangements. De facto control is a judgement call, and auditors probe it hard, because consolidating (or not consolidating) on this basis transforms the group\'s reported size.'
        ],
        callout: { type: 'example', text: 'HoldCo owns 42% of OpCo. The other 58% is held by 3,000 retail investors; turnout at general meetings has never exceeded 30% of total votes, and HoldCo\'s candidates have always been elected. HoldCo has de facto power and consolidates OpCo — even though it owns less than half.' }
      },
      {
        heading: 'Potential Voting Rights and the Principal-vs-Agent Test',
        paragraphs: [
          'Potential voting rights — options, warrants, convertible bonds — count toward power only if they are substantive: currently exercisable (or exercisable when decisions about relevant activities are made), and economically sensible to exercise (deeply out-of-the-money options that nobody would exercise are ignored). A 40% holder with currently exercisable options over another 15% effectively holds power.',
          'Then there is the principal-versus-agent question. A decision-maker (for example a fund manager) might appear to direct relevant activities, but if it acts on behalf of others — if its discretion is narrow, its remuneration is at market without real variability, and investors hold substantive removal (kick-out) rights — it is an agent, not a principal, and does not control. Kick-out rights held by a single party weigh heavily toward agency; rights exercisable only by a dispersed majority weigh less.'
        ],
        bullets: ['Substantive potential voting rights: currently exercisable and economically rational to exercise.', 'Protective rights (veto over issuing new shares, approving the sale of the whole business) protect an investment; they do not give power.', 'Agent indicators: narrow decision scope, market-rate fixed remuneration, substantive kick-out rights held by others.']
      },
      {
        heading: 'Structured Entities',
        paragraphs: [
          'A structured entity is designed so that voting or similar rights are not the dominant factor in deciding who controls it — voting rights may relate only to administrative tasks while the relevant activities are directed by contractual arrangements. Think of securitization vehicles, asset-backed financing conduits, or certain investment funds: the contracts (who services the assets, who absorbs first losses, who decides on defaults) determine control, not the ballot box.',
          'For structured entities, the control analysis focuses on the purpose and design of the entity, which party directed its setup, which contractual rights govern the relevant activities, and who is most exposed to variable returns. Sponsors that designed the vehicle, service its assets, and retain the equity tranche very often control it — which is exactly why the standard exists: to stop risks being parked off-balance-sheet in vehicles the sponsor effectively runs.'
        ],
        callout: { type: 'warning', text: 'When voting rights are irrelevant by design, look at the contracts. The party that designed the vehicle, directs its relevant activities contractually, and takes the variable returns usually controls it.' },
        table: { headers: ['Situation', 'Likely control conclusion', 'Why'], rows: [['55% of voting rights, no restrictions', 'Control — consolidate', 'Power + variable returns + linkage all present'], ['42%, dispersed others, always wins votes', 'De facto control — consolidate', 'Power in practice despite <50%'], ['Currently exercisable option taking holding to 60%', 'Control — consolidate', 'Substantive potential voting rights give power'], ['Fund manager, investors can remove at will', 'No control — agent', 'Acts for others; kick-out rights indicate agency'], ['Sponsor of a securitization vehicle, services assets, holds equity tranche', 'Control — consolidate', 'Contractual power + variable returns in a structured entity']] }
      },
      {
        heading: 'Losing Control and Reassessment',
        paragraphs: [
          'Control is not a one-time verdict: IFRS 10 requires reassessment whenever facts change — a new shareholder agreement, expiring options, a dilution from a capital increase, or a regulator stepping in. When control is lost, the accounting is decisive: derecognize the subsidiary\'s assets and liabilities (including any NCI and related goodwill), derecognize the carrying amount of the former parent\'s investment is replaced by recognizing any retained interest at fair value on the date control is lost, and recognize the resulting gain or loss in profit or loss.',
          'That gain or loss can be large, because the retained interest is remeasured to fair value even if nothing was sold — for example when a subsidiary issues new shares to a third party and the parent is diluted from 60% to 40%. From that date the former subsidiary becomes an associate, a joint arrangement, or a financial asset, and equity accounting or fair value takes over.'
        ],
        journal: {
          transaction: 'Loss of control: Parent diluted from 60% to 40%; retained 40% interest has a fair value of $300,000; carrying amount of net assets derecognized (after NCI) is $260,000',
          lines: [
            { account: 'Investment in Associate (40% at fair value)', dr: 300000, cr: null },
            { account: 'Net Assets of Former Subsidiary (carrying amount)', dr: null, cr: 260000 },
            { account: 'Gain on Loss of Control (P&L)', dr: null, cr: 40000 }
          ],
          narration: 'On losing control, derecognize the subsidiary\'s net assets and remeasure the retained interest to fair value; the $40,000 difference is a gain in profit or loss.'
        },
        impact: { pl: 'A $40,000 gain is recognized in profit or loss on the date control is lost.', bs: 'Subsidiary assets/liabilities leave the balance sheet; a $300,000 associate investment appears.', cf: 'No cash effect when control is lost through dilution without a sale.' }
      }
    ],
    mistakes: [
      'Assuming 51% always means control — substantive potential voting rights held by others, or an agency relationship, can defeat it.',
      'Treating protective rights (veto on fundamental changes) as power: they protect an investment but do not direct relevant activities.',
      'Ignoring de facto control: a 42% holding that always wins shareholder votes is power in substance.',
      'Forgetting structured entities, where voting rights are irrelevant and the contracts decide.',
      'Never reassessing control after a capital increase, expired options, or a new shareholder agreement.',
      'On loss of control, forgetting to remeasure the retained interest to fair value — the gain or loss is often missed.'
    ],
    interviewQA: [
      { q: 'What are the three elements of control under IFRS 10?', a: 'Power over the investee — existing rights giving the current ability to direct the relevant activities; exposure or rights to variable returns from the involvement, such as dividends, synergies, or cost savings; and the ability to use that power to affect the amount of the returns. All three must be present simultaneously. I would add that the assessment is continuous: if facts change — new agreements, expiring options, dilution — control must be reassessed.' },
      { q: 'Give me an example of de facto control.', a: 'An investor holds 45% of a listed company while the remaining 55% is scattered among thousands of retail shareholders who rarely vote. If the 45% holder has historically appointed the board and won every vote, it has de facto power despite owning less than half. IFRS 10 requires weighing the relative size of the holding, the dispersion of other holders, and voting history — it is a judgement, and one auditors challenge, because it decides whether the entity is consolidated.' },
      { q: 'What is a structured entity, and why does IFRS 10 single it out?', a: 'A structured entity is designed so that voting rights are not the dominant factor — they may cover only administrative tasks while contracts direct the relevant activities. Examples are securitization vehicles and financing conduits. The standard singles them out because sponsors used to park risks off-balance-sheet in vehicles they effectively ran. The control test looks at the vehicle\'s purpose and design, who directs activities contractually, and who takes the variable returns — often the sponsor that set it up and holds the equity tranche.' }
    ],
    quiz: [
      { question: 'Under IFRS 10, an investor controls an investee when it has:', options: ['More than 50% of the shares, regardless of any other facts', 'Exposure to variable returns only', 'Power over the investee only', 'Power over the investee, exposure to variable returns, and the ability to use its power to affect those returns'], answer: 3, explanation: 'All three elements are cumulative: power, variable returns, and the linkage between them. A majority shareholding is only evidence of power, not the whole test.', difficulty: 'Foundation', topic: 'Control Definition', skill: 'Consolidation' },
      { question: 'Which of the following is an example of a variable return?', options: ['A fixed salary paid to the investee\'s receptionist', 'Dividends that rise and fall with the investee\'s performance', 'A bank loan with a fixed interest rate made to the investee', 'Office rent paid by the investee to a third-party landlord'], answer: 1, explanation: 'Variable returns vary with performance: dividends, cost savings, synergies, economies of scale, or residual interests. Fixed contractual cash flows to third parties are not the investor\'s variable returns.', difficulty: 'Foundation', topic: 'Variable Returns', skill: 'Consolidation' },
      { question: 'Investor holds 45% of Target. The other 55% is held by thousands of small investors who never vote, and the investor has appointed the board for five years running. The correct conclusion is:', options: ['No control — 45% is less than half, so equity accounting applies', 'Control only if the investor buys another 6%', 'Joint control with the small investors', 'The investor has de facto control and consolidates Target'], answer: 3, explanation: 'Power is assessed in substance: a 45% holder that consistently directs the investee because other holdings are dispersed and passive has de facto power, hence control.', difficulty: 'Intermediate', topic: 'De Facto Control', skill: 'Consolidation' },
      { question: 'An investor holds 40% of the votes plus options, exercisable today at a sensible price, over another 20%. How do the options affect the control assessment?', options: ['They are ignored because they have not been exercised', 'They give joint control with the option writer', 'They are substantive potential voting rights and give the investor power (60% effective)', 'They only matter if the investor already holds 50%'], answer: 2, explanation: 'Currently exercisable options on sensible terms are substantive potential voting rights: the investor currently has the ability to reach 60% of the votes, which is power.', difficulty: 'Intermediate', topic: 'Potential Voting Rights', skill: 'Consolidation' },
      { question: 'A fund manager directs a fund\'s investments, earns a market-rate fixed fee, and investors can remove the manager at any time without cause. The manager:', options: ['Is an agent and does not control the fund', 'Controls the fund because it directs the relevant activities', 'Jointly controls the fund with the investors', 'Controls the fund only if it also invests its own money'], answer: 0, explanation: 'Substantive kick-out rights, narrow discretion, and market-rate remuneration without real variability point to an agency relationship: the manager acts for the investors and does not control.', difficulty: 'Intermediate', topic: 'Principal vs Agent', skill: 'Consolidation' },
      { question: 'Which right is protective rather than giving power?', options: ['The right to appoint the majority of the board', 'A lender\'s veto over the borrower selling its entire business', 'The right to approve the annual budget', 'The right to direct day-to-day operating policies'], answer: 1, explanation: 'Protective rights guard an investment against fundamental changes; they do not give the current ability to direct the relevant activities, so they do not confer power.', difficulty: 'Intermediate', topic: 'Power', skill: 'Consolidation' },
      { question: 'A bank sponsors a securitization vehicle: it designed the vehicle, services the underlying loans under contract, and holds the first-loss equity tranche. Voting rights cover only administrative matters. The bank:', options: ['Controls the vehicle and consolidates it', 'Does not control it because it holds no voting majority', 'Has only significant influence', 'Must treat the vehicle as a joint venture'], answer: 0, explanation: 'In a structured entity, contracts — not votes — direct the relevant activities. The sponsor that designed the vehicle, directs it contractually, and takes the variable returns (first-loss tranche) controls it.', difficulty: 'Advanced', topic: 'Structured Entities', skill: 'Consolidation' },
      { question: 'If only two of the three control elements are present (say, power and variable returns, but the investor is an agent acting for others):', options: ['There is control — two out of three is enough', 'There is joint control', 'There is no control', 'There is control only if ownership exceeds 50%'], answer: 2, explanation: 'The three elements are cumulative. An agent may have apparent power and even some returns, but without the ability to use power for its own benefit there is no control.', difficulty: 'Foundation', topic: 'Control Definition', skill: 'Consolidation' },
      { question: 'On losing control of a subsidiary while retaining a 40% interest, the correct accounting includes:', options: ['Keeping the retained interest at its old carrying amount with no P&L effect', 'Remeasuring the retained 40% interest to fair value and recognizing a gain or loss in profit or loss', 'Recognizing the retained interest at historical cost of the original investment', 'Writing the retained interest down to zero'], answer: 1, explanation: 'IFRS 10 requires derecognition of the subsidiary\'s assets, liabilities, and NCI, recognition of any retained interest at fair value on the date control is lost, and a gain or loss in profit or loss for the difference.', difficulty: 'Advanced', topic: 'Loss of Control', skill: 'Consolidation' }
    ]
  },
  {
    id: 'm24', level: 6, levelTitle: 'Group Accounting', title: 'IFRS 3 — Business Combinations',
    standard: 'IFRS 3', tagline: 'Buy a business, not just assets: the acquisition method in four steps.',
    description: 'IFRS 3 governs how an acquirer accounts for buying control of a business. This module walks through the acquisition method — identifying the acquirer, measuring consideration at fair value, recognizing identifiable net assets at fair value, and computing goodwill or a bargain purchase gain — with simplified acquisition cases you can follow line by line.',
    minutes: 22, skills: ['Consolidation'],
    sections: [
      {
        heading: 'What Counts as a Business Combination?',
        paragraphs: [
          'A business combination is a transaction in which an acquirer obtains control of a business. And a business is not just a pile of assets: it is an integrated set of activities and assets — inputs and substantive processes — that is capable of producing outputs. Buying a single machine is an asset purchase; buying a factory with its workforce, contracts, and production processes is a business combination.',
          'Why the distinction matters: only business combinations use the acquisition method with goodwill. An asset purchase simply allocates cost to the assets bought, with no goodwill and no bargain purchase gain. IFRS 3 even provides an optional concentration test: if substantially all the fair value is concentrated in a single asset (or group of similar assets), the set is not a business and the test can shortcut the analysis.'
        ],
        callout: { type: 'key', text: 'Business = inputs + substantive processes capable of creating outputs. No substantive processes, no business — and no goodwill.' }
      },
      {
        heading: 'The Acquisition Method in Four Steps',
        paragraphs: [
          'Every business combination under IFRS 3 follows the same four steps. Step 1: identify the acquirer — the entity that obtains control (usually, but not always, the one paying). Step 2: determine the acquisition date — the date control actually passes, because that fixes all fair value measurements. Step 3: recognize and measure the identifiable assets acquired and liabilities assumed at their acquisition-date fair values — including intangible assets like customer relationships and brands that the target never recognized itself, provided they are identifiable. Step 4: recognize and measure goodwill or a gain from a bargain purchase as the residual.',
          'Two recognition principles make step 3 demanding: identifiable means either separable (could be sold on its own) or arising from contractual/legal rights; and everything is measured at fair value on acquisition date — not at the target\'s old book values. Contingent liabilities are recognized too, if they are present obligations measurable at fair value, which is stricter than normal IAS 37 treatment.'
        ],
        steps: ['Step 1 — Identify the acquirer: who obtained control?', 'Step 2 — Fix the acquisition date: when did control pass?', 'Step 3 — Recognize identifiable assets and liabilities at acquisition-date fair value.', 'Step 4 — Compute goodwill (or a bargain purchase gain) as the residual.']
      },
      {
        heading: 'Measuring Goodwill',
        paragraphs: [
          'Goodwill is the premium paid for what cannot be separately identified: the assembled workforce, going-concern value, expected synergies. The formula is mechanical: Goodwill = consideration transferred − fair value of the identifiable net assets acquired (with NCI adjustments when the holding is below 100%, covered in m22). Consideration is measured at fair value and includes cash, shares issued (at their acquisition-date fair value), and contingent consideration (earn-outs) at fair value.',
          'Three rules around the edges: acquisition-related costs — legal fees, due diligence, advisory — are expensed, never added to consideration or goodwill. Contingent consideration classified as a liability is remeasured to fair value at each reporting date with changes in profit or loss; classified as equity, it is not remeasured. And in a step acquisition, any previously held equity interest is remeasured to fair value at the acquisition date, with the gain or loss in profit or loss.'
        ],
        journal: {
          transaction: 'Acquisition: Parent pays $500,000 cash for 100% of Target; identifiable net assets have a fair value of $420,000',
          lines: [
            { account: 'Identifiable Net Assets (at fair value)', dr: 420000, cr: null },
            { account: 'Goodwill ($500,000 − $420,000)', dr: 80000, cr: null },
            { account: 'Cash', dr: null, cr: 500000 }
          ],
          narration: 'Apply the acquisition method: recognize what can be identified at fair value; the $80,000 residual is goodwill.'
        },
        impact: { pl: 'No day-one P&L effect (transaction costs, if any, are expensed separately).', bs: 'Net assets up $420,000 at fair value; goodwill asset of $80,000 recognized.', cf: '$500,000 cash outflow in investing activities.' },
        callout: { type: 'warning', text: 'Acquisition-related costs (lawyers, advisors, due diligence) are expensed. Adding them to goodwill is one of the most common IFRS 3 errors.' }
      },
      {
        heading: 'Bargain Purchases: When You Pay Less Than Fair Value',
        paragraphs: [
          'Sometimes the price is below the fair value of the net assets — a distressed sale, a forced seller, a mispriced auction. Before celebrating, IFRS 3 requires a reassessment: double-check that all identifiable assets and liabilities were captured and correctly measured. If the bargain survives that review, the difference is recognized immediately as a gain in profit or loss.',
          'A bargain purchase gain is not deferred, not parked in equity, and not netted against assets. It goes straight to profit or loss on acquisition date. Economically it means the acquirer bought $420,000 of net value for $380,000 — the $40,000 discount is income, because the group is $40,000 richer the moment control passes.'
        ],
        journal: {
          transaction: 'Bargain purchase: Parent pays $380,000 cash for 100% of Target; identifiable net assets have a fair value of $420,000 (after reassessment)',
          lines: [
            { account: 'Identifiable Net Assets (at fair value)', dr: 420000, cr: null },
            { account: 'Cash', dr: null, cr: 380000 },
            { account: 'Gain on Bargain Purchase (P&L)', dr: null, cr: 40000 }
          ],
          narration: 'After reassessing all measurements, the $40,000 excess of fair value over consideration is recognized as a gain in profit or loss.'
        },
        impact: { pl: 'A $40,000 gain increases profit on acquisition date.', bs: 'Net assets of $420,000 recognized; no goodwill.', cf: '$380,000 cash outflow in investing activities.' }
      },
      {
        heading: 'Consideration Transferred: Cash, Shares, and Earn-Outs',
        paragraphs: [
          'Consideration is whatever the acquirer gives up, measured at fair value on acquisition date. Cash is simple. Shares issued are measured at their market price on acquisition date — not at par, not at some negotiated value. Contingent consideration (earn-outs payable if the target hits profit targets) is measured at fair value at acquisition date, which means estimating probabilities and discounting, not waiting to see what happens.',
          'The classification of contingent consideration drives its later life: liability-classified earn-outs are remeasured each period through profit or loss (so a target that outperforms expectations creates extra expense), while equity-classified earn-outs (a fixed number of shares to be issued) are frozen at acquisition-date fair value. Getting this classification right at day one prevents years of misstatement.'
        ],
        table: { headers: ['Form of consideration', 'Measured at', 'Later treatment'], rows: [['Cash paid', 'Amount paid', 'None — done'], ['Shares issued', 'Fair value at acquisition date', 'None — equity'], ['Contingent consideration (liability)', 'Fair value at acquisition date', 'Remeasured through P&L each period'], ['Contingent consideration (equity)', 'Fair value at acquisition date', 'Not remeasured'], ['Advisory and legal fees', '—', 'Expensed immediately, never part of consideration']] }
      },
      {
        heading: 'Simplified Acquisition Case: Putting It Together',
        paragraphs: [
          'Alpha pays $500,000 cash for 100% of Beta on 1 March. Beta\'s books show net assets of $350,000, but a valuation finds: a customer-relationship intangible worth $40,000 that Beta never recognized, and inventory written up $30,000 to fair value. Identifiable net assets at fair value = $350,000 + $40,000 + $30,000 = $420,000. Goodwill = $500,000 − $420,000 = $80,000 — exactly the journal in the goodwill section above.',
          'Notice what the fair value exercise did: $70,000 of the apparent $150,000 premium was actually identifiable value (intangibles, inventory uplift), leaving only $80,000 of true goodwill. Sloppy purchase price allocations dump everything into goodwill; good ones identify intangibles first, because goodwill — unlike a customer-relationship intangible — cannot be amortized and tells investors nothing about what was actually bought.'
        ],
        callout: { type: 'interview', text: 'Interviewers love: "Why do acquirers prefer identifying intangibles over leaving value in goodwill?" Because identifiable intangibles with finite lives are amortized systematically, while goodwill is only impairment-tested — and because the allocation reveals what was actually bought (brands, relationships, technology) instead of hiding it in a residual.' }
      }
    ],
    mistakes: [
      'Measuring consideration at book or negotiated values instead of fair value at acquisition date.',
      'Capitalizing acquisition-related costs (legal, advisory, due diligence) into goodwill — they must be expensed.',
      'Recognizing goodwill on an asset purchase that is not a business; run the concentration test first.',
      'Recognizing a bargain purchase gain before the mandatory reassessment of assets, liabilities, and consideration.',
      'Using the target\'s old carrying amounts instead of acquisition-date fair values for identifiable net assets.',
      'Forgetting to remeasure a previously held equity interest to fair value in a step acquisition.'
    ],
    interviewQA: [
      { q: 'How is goodwill calculated under IFRS 3?', a: 'Goodwill is the residual: consideration transferred (measured at fair value, including shares at market value and contingent consideration at fair value) minus the acquisition-date fair value of the identifiable net assets acquired. In a partial acquisition, the NCI measurement choice affects the figure. It captures what cannot be separately identified — synergies, the assembled workforce, going-concern value. A useful discipline is to identify intangibles first (brands, customer relationships, technology), so goodwill is a true residual rather than a dumping ground.' },
      { q: 'What is a bargain purchase and where does the gain go?', a: 'A bargain purchase happens when the fair value of the identifiable net assets exceeds the consideration transferred — typically a distressed or forced sale. IFRS 3 first requires a reassessment to confirm nothing was missed or mismeasured. If the bargain stands, the difference is recognized immediately as a gain in profit or loss, not deferred or parked in equity. Economically, the group is richer by that amount the moment control passes.' },
      { q: 'Why are acquisition-related costs expensed rather than included in goodwill?', a: 'Because they are not part of what the acquirer gives up for the business — they are separate transactions for services consumed (legal advice, due diligence). Including them in consideration would inflate goodwill with costs that have no future economic benefit. IFRS 3 is explicit: transaction costs are expensed as incurred, which also stops acquirers from burying fees in an unamortized residual.' }
    ],
    quiz: [
      { question: 'Which transaction is a business combination under IFRS 3?', options: ['Buying a single delivery van for cash', 'Purchasing a plot of land as an investment', 'Repaying a bank loan', 'Acquiring control of a factory with its workforce, contracts, and production processes'], answer: 3, explanation: 'A business needs inputs and substantive processes capable of producing outputs. A factory with workforce and processes qualifies; single assets do not, and they are accounted for as asset purchases with no goodwill.', difficulty: 'Foundation', topic: 'Scope', skill: 'Consolidation' },
      { question: 'Parent pays $500,000 cash for 100% of Target. Identifiable net assets have a fair value of $420,000. Goodwill is:', options: ['$500,000', '$80,000', '$420,000', '$920,000'], answer: 1, explanation: 'Goodwill = consideration transferred − fair value of identifiable net assets = $500,000 − $420,000 = $80,000.', difficulty: 'Intermediate', topic: 'Goodwill Measurement', skill: 'Consolidation' },
      { question: 'Parent pays $380,000 for net assets with a fair value of $420,000 (after reassessment). The correct treatment is:', options: ['Recognize $40,000 of negative goodwill as an asset', 'Defer the $40,000 and amortize it over five years', 'Recognize a $40,000 gain in profit or loss', 'Reduce the carrying amounts of the acquired assets by $40,000'], answer: 2, explanation: 'After the mandatory reassessment, a bargain purchase gain goes immediately to profit or loss. It is never deferred, netted against assets, or called negative goodwill.', difficulty: 'Intermediate', topic: 'Bargain Purchase', skill: 'Consolidation' },
      { question: 'Legal and advisory fees of $25,000 incurred on an acquisition are:', options: ['Added to goodwill', 'Added to the consideration transferred', 'Capitalized as an intangible asset', 'Expensed in profit or loss'], answer: 3, explanation: 'IFRS 3 requires acquisition-related costs to be expensed as incurred; they are services consumed, not part of the price paid for the business.', difficulty: 'Foundation', topic: 'Acquisition Method', skill: 'Consolidation' },
      { question: 'The acquirer issues 10,000 shares as consideration. The shares trade at $32 on the acquisition date. The consideration includes:', options: ['$320,000 measured at the acquisition-date market price', '$100,000 measured at par value of $10', 'Nothing — share consideration is disclosed only', 'Whatever value the parties negotiated privately'], answer: 0, explanation: 'Share consideration is measured at fair value on the acquisition date — the market price of $32 — not at par or at a negotiated figure.', difficulty: 'Intermediate', topic: 'Consideration', skill: 'Consolidation' },
      { question: 'Contingent consideration (an earn-out) classified as a liability is:', options: ['Frozen at acquisition-date fair value forever', 'Remeasured to fair value at each reporting date with changes in profit or loss', 'Amortized over the earn-out period', 'Recognized only when the earn-out is actually paid'], answer: 1, explanation: 'Liability-classified contingent consideration is a financial liability remeasured through P&L each period — a target that beats expectations creates additional expense. Equity-classified contingent consideration is not remeasured.', difficulty: 'Advanced', topic: 'Contingent Consideration', skill: 'Consolidation' },
      { question: 'Which of the following is NOT part of the consideration transferred?', options: ['Cash paid to the seller', 'Shares issued to the seller', 'Contingent consideration at fair value', 'Due diligence fees paid to external advisors'], answer: 3, explanation: 'Transaction costs for services (due diligence, legal, advisory) are expensed separately. Consideration is what is given up for the business itself: cash, shares, and contingent payments.', difficulty: 'Intermediate', topic: 'Consideration', skill: 'Consolidation' },
      { question: 'In a step acquisition, Parent already owned 20% of Target and now buys another 40%, gaining control. The previously held 20% interest is:', options: ['Remeasured to fair value at the acquisition date, with the gain or loss in profit or loss', 'Kept at its original cost with no remeasurement', 'Written off against goodwill', 'Transferred to NCI'], answer: 0, explanation: 'Achieving control is treated as disposing of the old interest and reacquiring it: the previously held equity interest is remeasured to acquisition-date fair value, and the difference goes to profit or loss.', difficulty: 'Advanced', topic: 'Step Acquisition', skill: 'Consolidation' },
      { question: 'Under IFRS 3\'s amended definition, a set of activities and assets is a business if it includes:', options: ['Inputs, processes, and actual outputs — all three are mandatory', 'Only outputs, such as existing revenues', 'Inputs and substantive processes that together are capable of producing outputs', 'Any group of assets bought together'], answer: 2, explanation: 'Outputs are no longer strictly required: inputs plus substantive processes capable of creating outputs are enough. That is why an early-stage R&D company with no revenue can still be a business.', difficulty: 'Foundation', topic: 'Scope', skill: 'Consolidation' }
    ]
  },
  {
    id: 'm25', level: 6, levelTitle: 'Group Accounting', title: 'Intercompany Accounting',
    standard: 'IFRS 10', tagline: 'If A says 150,000 and B says 145,000, somebody is wrong — find out who.',
    description: 'Before consolidation eliminations can work, intercompany balances must agree. This module is built around a live case: Company A\'s intercompany receivable of $150,000 against Company B\'s payable of $145,000. You will run the investigation, learn the five classic causes of mismatches, and see how the matching and confirmation process prevents them.',
    minutes: 16, skills: ['Consolidation', 'Month-End Closing'],
    sections: [
      {
        heading: 'Why Intercompany Must Balance First',
        paragraphs: [
          'Consolidation eliminations assume mirror images: A\'s receivable from B equals B\'s payable to A. When they do not match, the elimination cannot be booked cleanly — and the difference is never just a rounding error waiting to be ignored. A persistent mismatch means a transaction was recorded by one side and not the other, recorded twice, recorded in the wrong currency, or recorded against the wrong partner. Each of those is either an error in someone\'s separate financial statements or, in the worst case, a concealment.',
          'That is why groups run intercompany matching as a hard gate in the close: no consolidation until material intercompany differences are investigated and resolved. The discipline also protects the separate financial statements — Company A\'s auditors and Company B\'s auditors each rely on these balances being right.'
        ],
        callout: { type: 'key', text: 'Intercompany differences are never plugged. They are investigated, explained, and corrected — because each one is an error (or worse) in somebody\'s books.' }
      },
      {
        heading: 'The Case: $150,000 vs $145,000',
        paragraphs: [
          'Month-end. Company A reports an intercompany receivable from Company B of $150,000. Company B reports an intercompany payable to Company A of $145,000. The $5,000 gap blocks the consolidation. Your job: find it. The investigation follows a fixed sequence — never start by guessing, and never start by booking an adjustment.',
          'First, pull the detailed ledgers: A\'s subledger of invoices issued to B, and B\'s subledger of invoices received from A, with dates, amounts, currencies, and document numbers. Second, compare transaction by transaction and isolate the unmatched items. Third, for each unmatched item, determine the cause from the classic five below. Fourth, book the correction in the right entity\'s books. Fifth, re-run the match and confirm both sides now agree at $150,000.'
        ],
        steps: ['Step 1 — Pull both detailed subledgers (A\'s receivables, B\'s payables) with document numbers and dates.', 'Step 2 — Match transaction by transaction; isolate every unmatched item.', 'Step 3 — Diagnose each unmatched item against the five classic causes.', 'Step 4 — Book the correction in the correct entity — never a plug in consolidation.', 'Step 5 — Re-run the match; both sides must agree before consolidation proceeds.'],
        callout: { type: 'example', text: 'The match isolates one item: A issued invoice INV-2291 for $5,000 (IT support, December) which appears in A\'s ledger but nowhere in B\'s. Diagnosis: missing invoice — B never recorded it. Resolution: B books Dr IT Expense $5,000 / Cr Intercompany payable — A $5,000. Both sides now agree at $150,000.' }
      },
      {
        heading: 'The Five Classic Causes',
        paragraphs: [
          'Nearly every intercompany mismatch traces to one of five causes. Learn to recognize the signature of each and you will resolve most cases in minutes. The table below is worth memorizing — it is also, almost verbatim, what interviewers ask for.'
        ],
        table: { headers: ['Cause', 'Signature', 'Fix'], rows: [['Missing invoice / unrecorded transaction', 'In A\'s ledger, absent in B\'s (or vice versa)', 'The missing side records the transaction'], ['Timing difference', 'Recorded by both, in different periods (e.g., goods shipped Dec 31, received Jan 2)', 'No correction — document the timing; it self-resolves'], ['Cash in transit', 'A paid on Dec 31; B\'s bank shows it on Jan 3', 'No correction — disclose as in-transit; confirm receipt'], ['Foreign exchange', 'Amounts match in transaction currency but differ after translation', 'Each side books its FX gain/loss; agree on the rate source and timing'], ['Incorrect posting', 'Invoice posted to the wrong intercompany partner code or wrong account', 'Reclassify to the correct partner/account']] }
      },
      {
        heading: 'The Matching and Confirmation Process',
        paragraphs: [
          'Best-practice groups do not discover mismatches at consolidation — they prevent them with a monthly rhythm. Each pair of counterparties exchanges a statement of intercompany balances; each side confirms or disputes every line; disputes go to a named owner with a deadline; and the group finance team tracks aging of unmatched items the way it tracks overdue receivables.',
          'Two design choices matter. First, a single intercompany chart of accounts and partner codes across the group, so an invoice cannot be posted to the wrong counterparty by accident. Second, segregation: the person who confirms Company B\'s balance should not be the same person who posted Company B\'s payables. Intercompany is a classic fraud channel — fictitious sales to a subsidiary inflate both revenue and receivables — and independent confirmation is the control that catches it.'
        ],
        bullets: ['Monthly intercompany statements exchanged and confirmed by both sides.', 'Standard partner codes and a single intercompany chart of accounts group-wide.', 'Named owners and deadlines for every disputed item; aging tracked centrally.', 'Confirmation done independently of the people who posted the transactions.']
      },
      {
        heading: 'Resolving the Case: Booking the Correction',
        paragraphs: [
          'Back to our case: the investigation found the missing $5,000 invoice — A billed B for December IT support, and B never recorded it. The correction belongs in B\'s books, because B\'s payable is understated. B records the expense and the liability; A changes nothing. After posting, B\'s intercompany payable to A is $150,000, matching A\'s receivable, and consolidation can proceed.',
          'Notice what we did not do: we did not book a $5,000 plug to a consolidation difference account, we did not adjust A\'s receivable down to $145,000 to force agreement, and we did not net anything. Corrections go to the entity whose books are wrong, with proper supporting documentation — the invoice, in this case — attached to the journal.'
        ],
        journal: {
          transaction: 'Company B records the missing invoice INV-2291 ($5,000 IT support, December) from Company A',
          lines: [
            { account: 'IT Support Expense', dr: 5000, cr: null },
            { account: 'Intercompany Payable — Company A', dr: null, cr: 5000 }
          ],
          narration: 'B\'s payable was understated: the invoice existed in A\'s ledger but was never recorded by B. After this entry both sides agree at $150,000.'
        },
        impact: { pl: 'Company B\'s profit falls by $5,000 (the expense belongs to December).', bs: 'B\'s intercompany payable rises to $150,000, matching A\'s receivable; group working capital is now stated correctly.', cf: 'No cash effect yet — cash moves when B pays the invoice.' }
      }
    ],
    mistakes: [
      'Plugging the difference to a suspense or "intercompany differences" account instead of investigating the cause.',
      'Forcing agreement by adjusting the correct side down to the wrong side\'s figure.',
      'Booking FX differences to the intercompany balance instead of to foreign exchange gain/loss.',
      'Confirming balances verbally or by email without exchanging detailed statements.',
      'Letting small recurring differences roll forward — they compound and become unauditable.',
      'Offsetting intercompany receivables against payables in separate financial statements without a legal right of set-off.'
    ],
    interviewQA: [
      { q: 'Company A\'s intercompany receivable is $150,000 but Company B\'s payable is $145,000. Walk me through your investigation.', a: 'First I pull both detailed subledgers — A\'s invoices to B and B\'s invoices from A — with document numbers, dates, amounts, and currencies. Then I match transaction by transaction to isolate the unmatched items. For each one I diagnose the cause: missing invoice, timing difference, cash in transit, FX, or incorrect posting. In this case I would find A\'s $5,000 invoice missing from B\'s books, so B records the expense and payable. I never plug the difference, and I re-run the match to confirm both sides agree at $150,000 before consolidation.' },
      { q: 'What are the most common causes of intercompany mismatches?', a: 'Five classics: a transaction recorded by one side and not the other (missing invoice); timing differences where both sides record in different periods; cash in transit at period end; foreign exchange where the transaction currency matches but translation differs; and incorrect posting to the wrong partner code or account. Timing and cash-in-transit self-resolve and need documentation, not journals; the others need corrections in the right entity\'s books.' },
      { q: 'How do you prevent intercompany differences from blocking the close?', a: 'With a monthly rhythm, not a year-end scramble: standardized partner codes and one intercompany chart of accounts, monthly statement exchange and formal confirmation between counterparties, named owners with deadlines for disputes, and central tracking of unmatched-item aging. Confirmation should be independent of the people posting the transactions, because intercompany is a known fraud channel — fictitious sales to a subsidiary inflate revenue and receivables simultaneously.' }
    ],
    quiz: [
      { question: 'Why must intercompany balances agree before consolidation eliminations are booked?', options: ['IFRS 10 forbids any elimination when balances differ by more than 1%', 'Auditors refuse to audit groups with intercompany transactions', 'Eliminations assume mirror images — a mismatch means an error in someone\'s books that must be found first', 'The consolidation software cannot process unbalanced inputs'], answer: 2, explanation: 'An elimination cancels A\'s receivable against B\'s payable. If they differ, the difference is a real error (missing invoice, FX, wrong posting) sitting in somebody\'s separate financial statements — plugging it would bury the error.', difficulty: 'Foundation', topic: 'Intercompany Basics', skill: 'Consolidation' },
      { question: 'A\'s receivable from B is $150,000; B\'s payable to A is $145,000. What is the correct first step?', options: ['Book a $5,000 adjustment to make the balances agree', 'Pull both detailed subledgers and match transaction by transaction to isolate unmatched items', 'Ask B to reduce its payable to $145,000 and move on', 'Eliminate $145,000 and leave the $5,000 in a suspense account'], answer: 1, explanation: 'Investigation starts with evidence: detailed ledgers from both sides, matched line by line. Adjustments come only after the cause is diagnosed — never before.', difficulty: 'Intermediate', topic: 'Investigation', skill: 'Consolidation' },
      { question: 'The match finds that A recorded a $5,000 invoice that B never recorded. The correct resolution is:', options: ['A books Dr Expense $5,000 / Cr Intercompany receivable — B $5,000', 'Book a $5,000 plug to consolidation reserves', 'Reduce A\'s receivable to $145,000 to force agreement', 'B books Dr Expense $5,000 / Cr Intercompany payable — A $5,000'], answer: 3, explanation: 'B\'s books are the wrong ones — its payable is understated. The correction belongs in B: recognize the expense and the liability. A changes nothing.', difficulty: 'Intermediate', topic: 'Corrections', skill: 'Consolidation' },
      { question: 'A pays B $20,000 on 31 December; B\'s bank statement shows the receipt on 3 January. This is:', options: ['Cash in transit — a timing difference that self-resolves; document it, do not journal it', 'An error requiring B to book the cash in December', 'An error requiring A to reverse the payment', 'Evidence of fraud that must be reported immediately'], answer: 0, explanation: 'Cash in transit is the classic timing difference: both sides are correct in their own period. Document it as a reconciling item and confirm receipt — no journal needed.', difficulty: 'Intermediate', topic: 'Timing Differences', skill: 'Month-End Closing' },
      { question: 'A (euro entity) invoices B (dollar entity) €10,000. Both record €10,000, but after translation the balances differ. The cause and fix are:', options: ['A missing invoice — one side must record the transaction', 'Foreign exchange movement — each side books its FX gain/loss using an agreed rate source', 'Cash in transit — wait for the next period', 'Incorrect partner code — reclassify the invoice'], answer: 1, explanation: 'The transaction currency agrees, so nothing is missing — the difference comes from translating at different rates or dates. Each entity recognizes its own FX gain or loss; groups prevent recurrence by agreeing the rate source and timing.', difficulty: 'Intermediate', topic: 'FX Differences', skill: 'Consolidation' },
      { question: 'An invoice from A was posted by B against intercompany partner "Company C" instead of "Company A". The fix is to:', options: ['Reclassify the payable from C to A', 'Book a new invoice from A', 'Write off the payable as a gain', 'Leave it — it nets to zero in consolidation'], answer: 0, explanation: 'Incorrect posting is fixed by reclassification to the right partner code. It does not net to zero: A\'s receivable would dangle unmatched and C would show a phantom payable.', difficulty: 'Foundation', topic: 'Incorrect Posting', skill: 'Consolidation' },
      { question: 'A issues a $3,000 credit note to B, recorded by A but never recorded by B. As a result:', options: ['A\'s receivable from B is overstated by $3,000', 'Both balances are correct', 'B\'s payable to A is overstated by $3,000', 'Group revenue is overstated by $3,000'], answer: 2, explanation: 'A reduced its receivable via the credit note; B, missing it, still shows the higher payable. B must record Dr Intercompany payable — A $3,000 / Cr the relevant expense or inventory account.', difficulty: 'Intermediate', topic: 'Credit Notes', skill: 'Consolidation' },
      { question: 'Which control best prevents intercompany mismatches from blocking the close?', options: ['Consolidating before intercompany is matched', 'Allowing each entity to choose its own partner codes', 'Having the AP clerk confirm the balances they posted', 'Monthly statement exchange with formal confirmation by both counterparties'], answer: 3, explanation: 'A monthly exchange-and-confirm rhythm catches differences while they are small and fresh. The confirmation must be independent of the poster — self-confirmation is no control at all.', difficulty: 'Intermediate', topic: 'Controls', skill: 'Month-End Closing' },
      { question: 'An unexplained $5,000 intercompany difference at year-end should be:', options: ['Plugged to profit or loss so the consolidation balances', 'Investigated until the cause is found and corrected in the right entity\'s books', 'Netted against next month\'s intercompany transactions', 'Disclosed in the notes without further action'], answer: 1, explanation: 'Unexplained differences are never plugged, netted, or merely disclosed away. Every one is an error (or potential fraud) in somebody\'s books and must be resolved with a supported correction.', difficulty: 'Foundation', topic: 'Investigation', skill: 'Consolidation' }
    ]
  }
];
