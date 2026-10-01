# Translation brief — Accounting Standards Academy EN → ES

## Goal
Create a complete, professional **European Spanish (Spain)** mirror of the portal's
educational data. The English files are the source of truth and must NOT be modified.

## Files
| Source (EN, do not touch) | Target (ES, create) |
|---|---|
| `src/data/modules/level1.js` … `level9.js` | `src/data-es/modules/level1.es.js` … `level9.es.js` |
| `src/data/extras.js` | `src/data-es/extras.es.js` |

Then **rewrite** `src/data-es/index.js` (currently a stub re-exporting EN) so it
imports the ES files and exports **exactly the same names** as `src/data/index.js`
(MODULES, LEVELS, SKILLS, QUESTION_BANK, GLOSSARY, CHART_OF_ACCOUNTS, JOURNAL_LAB,
IMPACT_LAB, CASES, INTERVIEW, MONTH_END, getModule, getNeighbors,
questionsBySkill, questionsByDifficulty, questionsByModule, shuffle).

## KEEP in English (canonical keys — never translate)
`id`, `level`, `levelTitle`, `skills[]`, `standard` (e.g. "IFRS 16", "IAS 36"),
`difficulty`, `topic`, `skill`, `category`, `area`, `minutes`, `answer`
(the integer index), all numbers/amounts/currency symbols (`$10,000` stays
`$10,000`), dates in ISO form, variable/field names.

## TRANSLATE (professional accounting Spanish, Spain register)
`title`, `tagline`, `description`, section `heading`/`paragraphs`/`bullets`/
`callout`, `table` (headers AND cells, except pure numbers), `mistakes[]`,
`interviewQA` (`q`, `a`), quiz `question`, `options[]`, `explanation`,
`GLOSSARY` (`term`, `definition`), `CHART_OF_ACCOUNTS` entries,
`JOURNAL_LAB` (`situation`, `hint`, `explanation`, `impact`; journal `account`
names — translated consistently with the chart of accounts),
`IMPACT_LAB` (`entry`, `pl`, `bs`, `cf`, `explanation`; keep `answer` index),
`CASES` (`title`, `background`, `tables`, `task`, `findings`, `review`),
`INTERVIEW` (`q`, `a`; keep `category` in English),
`MONTH_END` (`checklist`, `scenario`).

## Style rules
- Register: professional, neutral. Prefer impersonal/infinitive constructions;
  avoid tú/usted and regionalisms (no Latin-American-only terms).
- Quiz `options[]`: translate in place, keep the array order, keep `answer`
  pointing at the correct (translated) option.
- `explanation` fields teach — keep their full pedagogical value.
- Standard codes stay: "IFRS 16", "IAS 36", "IFRS 9". In running prose you may
  use "NIIF" for the framework ("las NIIF", "la NIIF 16").
- "US GAAP" stays "US GAAP".

## Terminology glossary (use consistently)
| EN | ES |
|---|---|
| journal entry | asiento (contable) |
| debit / credit (entry side) | debe / haber |
| ledger | libro mayor |
| trial balance | balance de comprobación |
| financial statements | estados financieros |
| statement of profit or loss | cuenta de resultados |
| statement of financial position | balance (de situación) |
| statement of cash flows | estado de flujos de efectivo |
| statement of changes in equity | estado de cambios en el patrimonio neto |
| other comprehensive income (OCI) | otro resultado global |
| revenue | ingresos (ordinarios) |
| asset / liability / equity | activo / pasivo / patrimonio neto |
| provision | provisión |
| accrual | devengo |
| prepayment / prepaid | pago anticipado / anticipado |
| deferred revenue | ingresos diferidos |
| accrued income | ingresos devengados |
| cut-off | corte (de operaciones) |
| reconciliation | conciliación |
| month-end close | cierre mensual |
| controller | controller |
| goodwill | fondo de comercio |
| non-controlling interest (NCI) | participación no dominante |
| impairment | deterioro |
| recoverable amount | importe recuperable |
| value in use | valor en uso |
| fair value | valor razonable |
| amortised cost | coste amortizado |
| expected credit loss | pérdida crediticia esperada |
| lease | arrendamiento |
| right-of-use asset | activo por derecho de uso |
| lease liability | pasivo por arrendamiento |
| lessee / lessor | arrendatario / arrendador |
| inventory | existencias |
| receivables / payables | cuentas a cobrar / cuentas a pagar |
| share capital | capital social |
| retained earnings | reservas / resultados acumulados (use "reservas") |
| dividend | dividendo |
| tax | impuesto; deferred tax | impuesto diferido |
| temporary difference | diferencia temporaria |
| quiz | test |
| mock / final exam | examen final |
| case study | caso práctico |
| glossary | glosario |
| mistake review | repaso de errores |
| flashcard | tarjeta |
| bookmark | guardado |
| dashboard | panel |
| progress | progreso |
| skill | competencia |
| interview | entrevista |
| hedge accounting | contabilidad de coberturas |
| consolidation | consolidación |
| subsidiary / parent | filial / matriz |
| acquisition | adquisición |
| bargain purchase | compra ventajosa |
| contingent consideration | contraprestación contingente |
| foreign exchange | diferencias de cambio |
| going concern | empresa en funcionamiento |
| materiality | importancia relativa |
| substance over form | fondo sobre forma |
| prudence | prudencia |
| offsetting | compensación |
| disclosure | información a revelar |
| accounting policy | política contable |
| accounting estimate | estimación contable |
| prior-period error | error de ejercicios anteriores |
| adjusting / non-adjusting event | hecho posterior ajustable / no ajustable |
| performance obligation | obligación de desempeño |
| variable consideration | contraprestación variable |
| principal vs agent | principal frente a agente |
| over time / point in time | a lo largo del tiempo / en un momento determinado |
| research / development | investigación / desarrollo |
| component (PPE) | componente |
| revaluation | revalorización |
| cash-generating unit | unidad generadora de efectivo |
| payroll | nómina |
| bonus accrual | provisión por bonus |
| bank reconciliation | conciliación bancaria |
| GRNI (goods received not invoiced) | mercancía recibida no facturada |
| flux analysis | análisis de variaciones |
| working capital | fondo de maniobra |
| free cash flow | flujo de caja libre |
| EBITDA | EBITDA |
| ratio | ratio |
| red flag | señal de alerta |
| audit | auditoría |
| audit trail | rastro de auditoría |
| segregation of duties | segregación de funciones |
| fraud | fraude |

## Integrity checks (mandatory before finishing)
1. Every ES file parses (`node --check`) and every array has the same length as EN.
2. Every quiz question: `options.length === 4`, `answer` in 0..3, explanation non-empty.
3. Spot-verify: the correct option text (translated) still matches the explanation.
4. `src/data-es/index.js` exports exactly the same names as `src/data/index.js`.
5. Spot-check `node -e` import of the ES bundle: 40 modules, 393+ questions total.
