// level2 — Spanish translation (auto-generated from TSV worklist; do not edit by hand)
export default [
  {
    id: 'm05',
    level: 2,
    levelTitle: 'IFRS Framework',
    title: 'Las NIIF y el Marco Conceptual',
    standard: 'Conceptual Framework',
    tagline: 'Quién escribe las normas, qué significa informar «bien» y en qué difieren realmente las NIIF de los US GAAP.',
    description: 'Este módulo sitúa las NIIF en contexto: la misión del IASB, las características cualitativas del Marco Conceptual y una comparación honesta entre las NIIF y los US GAAP, incluidas las diferencias que de verdad mueven cifras, como el LIFO, los costes de desarrollo y las reversiones de deterioros.',
    minutes: 20,
    skills: [
      'IFRS Fundamentals'
    ],
    sections: [
      {
        heading: 'El IASB y por qué existen las NIIF',
        paragraphs: [
          'El Consejo de Normas Internacionales de Contabilidad (IASB), supervisado por la Fundación IFRS, desarrolla las Normas NIIF con una única misión: aportar transparencia, responsabilidad y eficiencia a los mercados financieros mediante un lenguaje común de información financiera global. Más de 140 jurisdicciones ya exigen o permiten las NIIF, lo que significa que un analista en Madrid puede leer los estados financieros de un fabricante coreano con el mismo marco.',
          'Las NIIF se basan en principios, no en reglas. En lugar de prescribir un tratamiento para cada supuesto, las normas enuncian objetivos y principios y exigen juicio profesional al aplicarlos, respaldado por la revelación de los juicios significativos realizados (IAS 1). Por eso importa el Marco Conceptual: cuando ninguna norma cubre directamente una transacción, los preparadores razonan a partir de las definiciones y características del Marco.'
        ],
        callout: {
          type: 'key',
          text: 'NIIF = principios por encima de reglas. US GAAP = reglas por encima de principios, con mucha más guía sectorial. Consecuencia práctica: las NIIF exigen más juicio profesional documentado; los US GAAP exigen un seguimiento más detallado de las reglas.'
        }
      },
      {
        heading: 'Características cualitativas: qué hace útil la información',
        paragraphs: [
          'El Marco Conceptual define dos características cualitativas fundamentales. Relevancia: la información debe ser capaz de influir en las decisiones —tiene valor predictivo, valor confirmatorio, o ambos— y es material si su omisión o inexactitud pudiera cambiar una decisión. Representación fiel: la imagen debe ser completa, neutral y libre de error —fondo sobre forma jurídica.',
          'Otras cuatro características mejoran aún más la utilidad: comparabilidad (entre ejercicios y entidades), verificabilidad, oportunidad y comprensibilidad. Y una restricción general lo condiciona todo: el coste. Elaborar la información no debe costar más que el beneficio que aporta a los usuarios. Cuando las características entran en conflicto —por ejemplo, oportunidad frente a integridad—, el juicio las equilibra.'
        ],
        bullets: [
          'Fundamentales: relevancia (incluida la importancia relativa) y representación fiel.',
          'De mejora: comparabilidad, verificabilidad, oportunidad, comprensibilidad.',
          'Restricción: el coste de elaborar la información no debe superar su beneficio.'
        ],
        callout: {
          type: 'interview',
          text: '«¿Qué es la importancia relativa?» Respuesta: la información es material si su omisión, inexactitud u ocultación pudiera razonablemente influir en las decisiones de los usuarios principales. La importancia relativa depende de la entidad y es discrecional: no existe un umbral porcentual fijo en las NIIF.'
        }
      },
      {
        heading: 'NIIF frente a US GAAP: las diferencias que mueven cifras',
        paragraphs: [
          'Ambos marcos buscan una información útil para la toma de decisiones, pero varias diferencias alteran materialmente el resultado y el patrimonio neto. Primera, existencias: las NIIF prohíben el LIFO (última entrada, primera salida); los US GAAP lo permiten. En periodos inflacionistas, el LIFO eleva el coste de ventas y reduce el resultado y el impuesto: una empresa estadounidense que use el LIFO puede declarar beneficios muy inferiores a los de su gemela bajo NIIF.',
          'Segunda, costes de desarrollo: las NIIF exigen su activación cuando se cumplen los seis criterios de IAS 38; los US GAAP los llevan a gasto a medida que se incurren (salvo excepciones limitadas, como ciertos costes de software). Una farmacéutica parece mucho más rentable bajo NIIF en fases de desarrollo intensivo. Tercera, deterioro: las NIIF permiten revertir deterioros de activos no financieros (salvo el fondo de comercio) cuando mejoran las condiciones; los US GAAP prohíben las reversiones (salvo activos mantenidos para la venta). Una empresa bajo NIIF puede revalorizar un activo al alza; una empresa estadounidense, no.',
          'Más diferencias: las NIIF permiten el modelo de revalorización para el inmovilizado material e intangible (US GAAP: solo coste histórico); las NIIF usan un test de deterioro en un solo paso para muchos activos frente al test en dos pasos de los US GAAP; las NIIF clasifican con flexibilidad los intereses y dividendos pagados/cobrados en el estado de flujos de efectivo, mientras que los US GAAP los concentran mayoritariamente en actividades de explotación.'
        ],
        callout: {
          type: 'warning',
          text: 'Nunca decir que «las NIIF y los US GAAP ya son básicamente lo mismo». La convergencia se estancó hace años. Solo el LIFO, la activación del desarrollo, las reversiones de deterioro y la revalorización pueden mover el resultado en porcentajes de dos dígitos entre ambos marcos.'
        },
        table: {
          headers: [
            'Área',
            'NIIF',
            'US GAAP'
          ],
          rows: [
            [
              'Existencias (LIFO)',
              'Prohibido',
              'Permitido'
            ],
            [
              'Costes de desarrollo',
              'Activar si se cumplen los 6 criterios',
              'Llevar a gasto a medida que se incurren (mayoritariamente)'
            ],
            [
              'Reversiones de deterioro',
              'Permitidas (salvo el fondo de comercio)',
              'Prohibidas'
            ],
            [
              'Revalorización del inmovilizado material',
              'Permitida (modelo de revalorización)',
              'No permitida'
            ],
            [
              'Intereses pagados (flujos de efectivo)',
              'Explotación o financiación (a elegir)',
              'Explotación'
            ]
          ]
        }
      },
      {
        heading: 'Reconocimiento, medición y jerarquía',
        paragraphs: [
          'El Marco establece el test de reconocimiento: reconocer una partida solo si cumple la definición de un elemento y su reconocimiento proporciona información relevante y fielmente representada. Las bases de medición incluyen el coste histórico y el valor actual (valor razonable, valor en uso, coste actual); la elección de la base afecta directamente al resultado declarado, y por eso la medición es la mitad del temario.',
          'Cuando las normas entran en conflicto o una transacción es novedosa, la jerarquía es: primero la norma NIIF aplicable, luego el Marco Conceptual por analogía y después los pronunciamientos de otros emisores de normas. IAS 8 (m08) lo formaliza. El hábito a construir: preguntar siempre qué norma rige antes de recurrir al Marco.'
        ],
        callout: {
          type: 'key',
          text: 'El reconocimiento exige dos cosas: que se cumpla la definición de activo, pasivo, ingreso o gasto, Y que reconocerlo proporcione a los usuarios información relevante y fielmente representada. Si falla cualquiera de los dos tests, no hay reconocimiento; aun así puede exigirse información a revelar.'
        }
      }
    ],
    mistakes: [
      'Afirmar que las NIIF y los US GAAP han convergido: persisten diferencias materiales en el LIFO, los costes de desarrollo, las reversiones de deterioro y la revalorización.',
      'Tratar la importancia relativa como una regla fija (p. ej., «el 5 % del resultado»): las NIIF la definen con criterio discrecional en función de las decisiones de los usuarios.',
      'Invocar el Marco Conceptual cuando existe una norma específica: la norma siempre prevalece; el Marco es la vía subsidiaria.',
      'Confundir las características fundamentales con las de mejora: relevancia y representación fiel son fundamentales; las otras cuatro solo mejoran.',
      'Olvidar la restricción del coste: la información perfecta que cuesta más de lo que vale no debe elaborarse.',
      'Suponer que «representación fiel» significa exactitud absoluta: significa completa, neutral y libre de error, no perfectamente cierta.'
    ],
    interviewQA: [
      {
        q: 'Nombre tres diferencias sustantivas entre las NIIF y los US GAAP.',
        a: 'Primera: el LIFO está prohibido bajo NIIF pero permitido bajo US GAAP, de modo que en épocas inflacionistas los emisores estadounidenses pueden mostrar menores beneficios. Segunda: las NIIF exigen activar los costes de desarrollo cuando se cumplen los seis criterios de IAS 38, mientras que los US GAAP llevan mayoritariamente la I+D a gasto de inmediato, lo que favorece los resultados NIIF durante el desarrollo. Tercera: las NIIF permiten revertir deterioros de activos no financieros cuando se recupera el importe recuperable, salvo el fondo de comercio; los US GAAP prohíben las reversiones. Añadiría la revalorización del inmovilizado material, permitida bajo NIIF pero no bajo US GAAP.'
      },
      {
        q: '¿Cuáles son las características cualitativas fundamentales de la información financiera útil?',
        a: 'Relevancia y representación fiel. Relevancia significa que la información puede influir en las decisiones: tiene valor predictivo o confirmatorio, y la importancia relativa forma parte de la relevancia. Representación fiel significa que la imagen es completa, neutral y libre de error. Las características de mejora —comparabilidad, verificabilidad, oportunidad y comprensibilidad— aumentan la utilidad, pero no pueden rescatar información irrelevante o no fielmente representada.'
      },
      {
        q: '¿Cuándo se usaría el Marco Conceptual en lugar de una norma?',
        a: 'Solo cuando ninguna norma NIIF sea específicamente aplicable a la transacción. La jerarquía es: primero la norma aplicable, luego el Marco por analogía y después la guía de otros emisores. IAS 8 exige a la dirección usar el juicio para desarrollar una política que proporcione información relevante y fiable, y revelar ese juicio. El Marco nunca prevalece sobre una norma explícita.'
      }
    ],
    quiz: [
      {
        question: '¿Qué organismo desarrolla las Normas NIIF?',
        options: [
          'La Securities and Exchange Commission de EE. UU.',
          'El Financial Accounting Standards Board (FASB)',
          'El Banco Central Europeo',
          'El Consejo de Normas Internacionales de Contabilidad (IASB)'
        ],
        answer: 3,
        explanation: 'El IASB, supervisado por la Fundación IFRS, desarrolla las NIIF. El FASB redacta los US GAAP; la SEC los hace cumplir para las cotizadas estadounidenses.',
        difficulty: 'Foundation',
        topic: 'IASB',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Las dos características cualitativas fundamentales son:',
        options: [
          'Comparabilidad y oportunidad',
          'Relevancia y representación fiel',
          'Verificabilidad y comprensibilidad',
          'Prudencia y uniformidad'
        ],
        answer: 1,
        explanation: 'La relevancia y la representación fiel son fundamentales. La comparabilidad, la verificabilidad, la oportunidad y la comprensibilidad son características de mejora.',
        difficulty: 'Foundation',
        topic: 'Qualitative Characteristics',
        skill: 'IFRS Fundamentals'
      },
      {
        question: '¿Cómo tratan las NIIF el LIFO para las existencias?',
        options: [
          'Está permitido como opción de política contable',
          'Es obligatorio en economías inflacionistas',
          'Está prohibido',
          'Solo está permitido para minoristas'
        ],
        answer: 2,
        explanation: 'Las NIIF prohíben el LIFO; solo se permiten el FIFO y el coste medio ponderado. Los US GAAP permiten el LIFO, una diferencia clave entre marcos.',
        difficulty: 'Intermediate',
        topic: 'IFRS vs US GAAP',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Bajo NIIF, los gastos de desarrollo deben:',
        options: [
          'Activarse cuando se cumplen los seis criterios de IAS 38',
          'Llevarse siempre a gasto a medida que se incurren',
          'Activarse a discreción de la dirección',
          'Amortizarse en un máximo de 5 años'
        ],
        answer: 0,
        explanation: 'IAS 38 exige la activación cuando se cumplen los seis criterios; no es opcional. Los US GAAP llevan la I+D a gasto a medida que se incurre.',
        difficulty: 'Intermediate',
        topic: 'IFRS vs US GAAP',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Un activo deteriorado el año pasado ha recuperado valor. Bajo NIIF (activo distinto del fondo de comercio):',
        options: [
          'El deterioro nunca puede revertirse',
          'La reversión se abona directamente al capital social',
          'El deterioro puede revertirse, hasta el valor en libros sin el deterioro',
          'La reversión solo se permite para existencias'
        ],
        answer: 2,
        explanation: 'IAS 36 permite revertir deterioros de activos no financieros (salvo el fondo de comercio) cuando aumenta el importe recuperable. Los US GAAP prohíben tales reversiones.',
        difficulty: 'Intermediate',
        topic: 'IFRS vs US GAAP',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'La información es material según el Marco Conceptual si:',
        options: [
          'Su omisión o inexactitud pudiera influir en las decisiones de los usuarios',
          'Supera el 5 % del resultado antes de impuestos',
          'Solo se refiere al ejercicio corriente',
          'La señala el auditor'
        ],
        answer: 0,
        explanation: 'La importancia relativa se define por referencia a las decisiones de los usuarios, no por umbrales fijos. Depende de la entidad y es discrecional.',
        difficulty: 'Intermediate',
        topic: 'Materiality',
        skill: 'IFRS Fundamentals'
      },
      {
        question: '¿Qué afirmación describe mejor la normalización basada en principios frente a la basada en reglas?',
        options: [
          'Las NIIF prescriben reglas detalladas; los US GAAP exigen juicio',
          'Ambos marcos son idénticos en su enfoque',
          'Las NIIF no tienen requisitos de información a revelar',
          'Las NIIF enuncian objetivos y exigen juicio; los US GAAP prescriben reglas detalladas'
        ],
        answer: 3,
        explanation: 'Las NIIF se basan en principios: objetivos más juicio, con revelación de los juicios significativos. Los US GAAP son mucho más prescriptivos y sectoriales.',
        difficulty: 'Intermediate',
        topic: 'Standard Setting',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'La restricción general sobre la información financiera útil es:',
        options: [
          'La oportunidad: la rapidez siempre vence a la exactitud',
          'El coste: los beneficios de informar deben superar los costes',
          'La confidencialidad: los competidores no deben verla',
          'La complejidad: solo los expertos deben entenderla'
        ],
        answer: 1,
        explanation: 'La restricción del coste del Marco: elaborar la información debe merecer la pena. Las demás opciones tergiversan las características de mejora o inventan restricciones.',
        difficulty: 'Advanced',
        topic: 'Qualitative Characteristics',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Una transacción novedosa no está cubierta por ninguna norma NIIF. ¿Qué debe hacer la dirección?',
        options: [
          'Dejar la transacción sin registrar',
          'Aplicar automáticamente los US GAAP',
          'Desarrollar una política con juicio, con referencia al Marco Conceptual, y revelarla',
          'Pedir al auditor que elija el tratamiento'
        ],
        answer: 2,
        explanation: 'IAS 8 exige a la dirección desarrollar una política contable con juicio, considerando el Marco, que proporcione información relevante y fiable, y revelar el juicio.',
        difficulty: 'Advanced',
        topic: 'Hierarchy',
        skill: 'IFRS Fundamentals'
      }
    ]
  },
  {
    id: 'm06',
    level: 2,
    levelTitle: 'IFRS Framework',
    title: 'IAS 1 — Presentación de los estados financieros',
    standard: 'IAS 1',
    tagline: 'Las reglas del juego: qué debe mostrarse, cómo debe clasificarse y qué debe compararse.',
    description: 'IAS 1 establece los requisitos generales para la presentación de los estados financieros. Se aprenderán las reglas de clasificación corriente/no corriente, la estructura de los estados, la revelación de políticas contables materiales y por qué la información comparativa es obligatoria.',
    minutes: 18,
    skills: [
      'IFRS Fundamentals'
    ],
    sections: [
      {
        heading: 'Lo que exige IAS 1',
        paragraphs: [
          'IAS 1 prescribe la base para la presentación de los estados financieros con propósito general: presentación razonable, empresa en funcionamiento, base de devengo, importancia relativa y agregación, no compensación, periodicidad de la información e información comparativa. La presentación razonable es el requisito primordial: significa la representación fiel de las transacciones conforme a las normas y, en el caso extremadamente raro de que el cumplimiento resultara engañoso, se permite apartarse de ellas con plena revelación.',
          'La compensación está generalmente prohibida: los activos y pasivos, o los ingresos y gastos, no deben netearse salvo que una norma lo permita. Netear una cuenta a cobrar contra una cuenta a pagar con el mismo proveedor oculta tanto el riesgo de crédito como la obligación: los lectores necesitan los importes brutos para evaluar la liquidez.'
        ],
        callout: {
          type: 'key',
          text: 'Las exigencias centrales de IAS 1: presentación razonable, empresa en funcionamiento, base de devengo, importancia relativa, no compensación e información comparativa. Memorizar esta lista: es el esqueleto de todo juego de estados conforme.'
        },
        bullets: [
          'La presentación razonable prevalece sobre todo; apartarse solo se permite en casos extremadamente raros y con revelación.',
          'No compensar activos/pasivos ni ingresos/gastos salvo permiso específico.',
          'Separar las partidas materiales; agregar solo partidas inmateriales de naturaleza similar.'
        ]
      },
      {
        heading: 'Clasificación corriente frente a no corriente',
        paragraphs: [
          'IAS 1 exige distinguir en el balance entre activos y pasivos corrientes y no corrientes (salvo que una presentación por liquidez sea más relevante, como en los bancos). Un activo es corriente si se espera realizarlo, venderlo o consumirlo dentro de los doce meses siguientes a la fecha de cierre o dentro del ciclo normal de explotación, el que sea mayor. Un pasivo es corriente si vence dentro de los doce meses, se mantiene para negociar, o la entidad no tiene derecho a diferir su liquidación más allá de doce meses.',
          'La trampa de la refinanciación es materia de examen: un préstamo que vence en 3 meses es corriente aunque la dirección pretenda refinanciarlo, salvo que la refinanciación se hubiera completado antes de la fecha de cierre o que la entidad tenga un derecho incondicional a diferir. La sola intención no reclasifica. Esta única regla ha provocado reexpresiones en cotizadas.'
        ],
        callout: {
          type: 'warning',
          text: 'Un préstamo que vence dentro de 12 meses sigue siendo corriente aunque la dirección pretenda refinanciarlo plenamente, salvo que el nuevo acuerdo se firme antes del cierre del ejercicio o exista un derecho contractual a diferir. La intención no es un derecho.'
        },
        table: {
          headers: [
            'Partida',
            'Clasificación',
            'Motivo'
          ],
          rows: [
            [
              'Existencias para vender en 8 meses',
              'Corriente',
              'Realizable dentro de 12 meses'
            ],
            [
              'Máquina, vida útil de 10 años',
              'No corriente',
              'Mantenida a largo plazo'
            ],
            [
              'Préstamo que vence en 3 meses, sin derecho a diferir',
              'Corriente',
              'Vencimiento < 12 meses'
            ],
            [
              'Cuentas a pagar comerciales',
              'Corriente',
              'Liquidable en el ciclo normal de explotación'
            ]
          ]
        }
      },
      {
        heading: 'Políticas contables materiales y las notas',
        paragraphs: [
          'IAS 1 exige revelar las políticas contables materiales: no un volcado genérico de todas las políticas, sino las que importan para entender las cifras. Tras las recientes modificaciones, el test es la importancia relativa: ¿podría la elección de la política influir en las decisiones de los usuarios? La política de reconocimiento de ingresos de una empresa de software es material; la política de amortización de las sillas de oficina probablemente no.',
          'Además de las políticas, las notas deben revelar los juicios realizados por la dirección (distintos de las estimaciones) con el efecto más significativo: por ejemplo, si un arrendamiento contiene una opción de compra o si una participada es una filial. Después vienen las incertidumbres en las estimaciones: provisiones, hipótesis de deterioro, inputs de valor razonable. Los analistas leen estas secciones primero porque revelan dónde las cifras son más blandas.'
        ],
        callout: {
          type: 'interview',
          text: '«¿Cuál es la diferencia entre un juicio y una estimación en las notas?» Un juicio es una decisión sobre la aplicación: p. ej., si existe control sobre una entidad. Una estimación es una hipótesis de medición: p. ej., el tipo de descuento de una provisión. Ambas deben revelarse cuando son materiales, pero van en secciones distintas de las notas.'
        }
      },
      {
        heading: 'Información comparativa y uniformidad',
        paragraphs: [
          'IAS 1 exige información comparativa del ejercicio anterior para todos los importes presentados: cada cifra tiene su gemela del año anterior. Cuando cambian las políticas o se corrigen errores (m08), las comparativas se reexpresan para que las tendencias sigan siendo significativas. Si la entidad reclasifica partidas, debe reclasificar también las comparativas y revelar la naturaleza, el importe y el motivo.',
          'La uniformidad en la presentación importa: las mismas clasificaciones y formatos ejercicio tras ejercicio, cambiados solo cuando el cambio aporta información más relevante. Combinada con las comparativas, esto es lo que hace posible un análisis de tendencias a cinco años, y lo que convierte una reclasificación silenciosa sin revelar en una señal de alerta.'
        ],
        bullets: [
          'Información comparativa exigida para todos los importes: cada cifra del ejercicio necesita su gemela del anterior.',
          'Los cambios de políticas y las correcciones de errores reexpresan las comparativas (aplicación retroactiva).',
          'Las reclasificaciones deben aplicarse a las comparativas revelando naturaleza, importe y motivo.'
        ]
      },
      {
        heading: 'Estructura de los estados',
        paragraphs: [
          'IAS 1 fija partidas mínimas pero no un formato rígido. El balance debe mostrar, entre otras: inmovilizado material, inversiones inmobiliarias, intangibles, activos financieros, existencias, cuentas a cobrar comerciales, efectivo, cuentas a pagar comerciales, provisiones, pasivos financieros, impuesto corriente, patrimonio neto atribuible a los propietarios. Se exigen partidas adicionales cuando sean relevantes para entender la posición.',
          'La cuenta de resultados debe mostrar los ingresos ordinarios, los costes financieros, el gasto por impuestos y el resultado, con los gastos clasificables por naturaleza (sueldos, amortización) o por función (coste de ventas, administración). La elección debe dar la presentación más relevante y, sea cual sea, las notas deben revelar lo suficiente para que los usuarios entiendan la estructura de costes.'
        ],
        callout: {
          type: 'key',
          text: 'Por naturaleza frente a por función: un fabricante podría mostrar «coste de ventas» (función); una empresa de servicios podría mostrar «gastos de personal» (naturaleza). No hay una elección universalmente correcta: la relevancia para el lector decide, y las notas deben cubrir las lagunas.'
        }
      }
    ],
    mistakes: [
      'Netear cuentas a cobrar contra cuentas a pagar con la misma contraparte: la compensación está prohibida salvo que una norma la permita.',
      'Clasificar como no corriente un préstamo que vence en 6 meses porque la dirección «planea refinanciarlo»: la intención sin derecho contractual no cambia nada.',
      'Revelar todas las políticas contables jamás escritas en lugar de las materiales: las notas genéricas ocultan lo importante.',
      'Presentar las comparativas de forma inconsistente tras una reclasificación: las comparativas deben reexpresarse con revelación.',
      'Omitir la revelación de empresa en funcionamiento cuando existen incertidumbres materiales: IAS 1 exige revelarlas expresamente.',
      'Elegir la presentación de gastos (naturaleza o función) arbitrariamente en lugar de la más relevante para los lectores.'
    ],
    interviewQA: [
      {
        q: '¿Cuándo se clasifica un pasivo como corriente según IAS 1?',
        a: 'Cuando se espera liquidarlo en el ciclo normal de explotación, se mantiene principalmente para negociar, vence dentro de los doce meses siguientes a la fecha de cierre, o la entidad no tiene derecho a diferir su liquidación al menos doce meses. El punto crítico es el derecho a diferir: la intención de la dirección de refinanciar es irrelevante salvo que la refinanciación se complete antes de la fecha de cierre o exista un derecho contractual de diferimiento.'
      },
      {
        q: '¿Qué significan «políticas contables materiales» y por qué IAS 1 abandonó «significativas»?',
        a: 'La modificación sustituyó «significativas» por «materiales» para acabar con las revelaciones genéricas. Una política solo se revela si es material: si la elección pudiera influir en las decisiones de los usuarios. Revelar políticas inmateriales está activamente desaconsejado porque entierra lo importante. Así, una empresa de software revela en detalle su política de reconocimiento de ingresos, pero puede omitir la política de amortización de un mobiliario de oficina inmaterial.'
      },
      {
        q: '¿Puede una entidad apartarse de las NIIF y seguir declarando cumplimiento?',
        a: 'Solo en la circunstancia extremadamente rara de que cumplir un requisito resultara tan engañoso que entrara en conflicto con el objetivo de la presentación razonable. El apartamiento, sus motivos y su efecto financiero deben revelarse íntegramente. En la práctica esto casi nunca ocurre: auditores y reguladores lo tratan como último recurso, no como herramienta de planificación.'
      }
    ],
    quiz: [
      {
        question: 'Un activo se clasifica como corriente según IAS 1 cuando:',
        options: [
          'Se espera realizarlo dentro de 12 meses o del ciclo normal de explotación',
          'Costó menos de $50,000',
          'Está amortizado',
          'La dirección pretende venderlo algún día'
        ],
        answer: 0,
        explanation: 'La clasificación corriente depende del momento de realización (12 meses o ciclo de explotación), no del coste, la amortización ni de intenciones vagas.',
        difficulty: 'Foundation',
        topic: 'Classification',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Un préstamo de $2 millones vence en 4 meses. La dirección pretende refinanciarlo plenamente, pero no hay acuerdo firmado al cierre. ¿Clasificación?',
        options: [
          'Pasivo no corriente',
          'Pasivo corriente',
          'Patrimonio neto',
          'Pasivo contingente'
        ],
        answer: 1,
        explanation: 'La intención de refinanciar no crea un derecho a diferir. Sin refinanciación firmada ni derecho contractual de diferimiento a la fecha de cierre, el préstamo es corriente.',
        difficulty: 'Intermediate',
        topic: 'Classification',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'La regla general de IAS 1 sobre la compensación es:',
        options: [
          'Siempre permitida por simplicidad',
          'Exigida para todos los instrumentos financieros',
          'Permitida cuando los importes son inmateriales',
          'Prohibida salvo que una norma lo permita expresamente'
        ],
        answer: 3,
        explanation: 'La compensación oculta exposiciones brutas, por lo que IAS 1 la prohíbe salvo donde las normas la permiten expresamente (p. ej., ciertos neteos de instrumentos financieros con derecho legal e intención).',
        difficulty: 'Intermediate',
        topic: 'Offsetting',
        skill: 'IFRS Fundamentals'
      },
      {
        question: '¿Qué partida debe aparecer como mínima en el balance?',
        options: [
          'Existencias',
          'Gastos de marketing',
          'Dividendos propuestos',
          'Presupuesto del próximo año'
        ],
        answer: 0,
        explanation: 'IAS 1 enumera partidas mínimas, incluidas el inmovilizado material, las existencias, las cuentas a cobrar comerciales, el efectivo, las provisiones y los componentes del patrimonio neto. Los gastos y los presupuestos no van en el balance.',
        difficulty: 'Foundation',
        topic: 'Presentation',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Según IAS 1 modificada, las entidades deben revelar:',
        options: [
          'Todas las políticas contables significativas con independencia de su importancia relativa',
          'Ninguna política contable',
          'Las políticas contables materiales',
          'Solo las políticas que cambiaron en el ejercicio'
        ],
        answer: 2,
        explanation: 'La modificación pasó de «significativas» a «materiales» para acabar con lo genérico. Solo se revelan las políticas que pudieran influir en las decisiones de los usuarios.',
        difficulty: 'Intermediate',
        topic: 'Disclosures',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'La información comparativa según IAS 1 significa:',
        options: [
          'Solo la cifra del resultado del año anterior',
          'Una comparación narrativa con competidores',
          'Previsiones para el próximo ejercicio',
          'Los importes del ejercicio anterior para cada importe presentado en el ejercicio corriente'
        ],
        answer: 3,
        explanation: 'Cada importe del ejercicio corriente necesita su gemelo del anterior para que los usuarios vean tendencias. Los cambios de políticas y los errores reexpresan esas comparativas.',
        difficulty: 'Foundation',
        topic: 'Comparatives',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Los gastos en la cuenta de resultados pueden presentarse:',
        options: [
          'Solo por naturaleza',
          'Por naturaleza o por función, la que sea más relevante',
          'Solo por función',
          'Alfabéticamente'
        ],
        answer: 1,
        explanation: 'IAS 1 permite por naturaleza (sueldos, amortización) o por función (coste de ventas, administración): la entidad elige la que dé la información más relevante.',
        difficulty: 'Intermediate',
        topic: 'Presentation',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Una empresa reclasifica $500,000 de gastos de administración a coste de ventas. ¿Qué debe ocurrir con las comparativas?',
        options: [
          'Quedan como se presentaron originalmente',
          'Se eliminan',
          'Deben reclasificarse también, revelando naturaleza, importe y motivo',
          'Solo se reexpresa el resultado total'
        ],
        answer: 2,
        explanation: 'La reclasificación debe aplicarse a las comparativas con revelación; de lo contrario, la tendencia pierde sentido y el cambio parece un movimiento real de costes.',
        difficulty: 'Advanced',
        topic: 'Comparatives',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'La presentación razonable según IAS 1 se logra:',
        options: [
          'Maximizando el resultado declarado',
          'Siguiendo las normas fiscales locales',
          'Usando solo el coste histórico',
          'Aplicando correctamente las NIIF, con revelación adicional cuando sea necesaria para la comprensión'
        ],
        answer: 3,
        explanation: 'Presentación razonable = representación fiel mediante la correcta aplicación de las NIIF, más revelación adicional cuando el solo cumplimiento no basta para que los usuarios entiendan. No se trata de maximizar el resultado.',
        difficulty: 'Advanced',
        topic: 'Fair Presentation',
        skill: 'IFRS Fundamentals'
      }
    ]
  },
  {
    id: 'm07',
    level: 2,
    levelTitle: 'IFRS Framework',
    title: 'IAS 7 — Estado de flujos de efectivo',
    standard: 'IAS 7',
    tagline: 'Seguir el efectivo: el estado más difícil de manipular y más fácil de leer mal.',
    description: 'IAS 7 exige dividir los flujos de efectivo en actividades de explotación, inversión y financiación. Se aprenderán los métodos directo e indirecto, las opciones de clasificación que las NIIF permiten para intereses y dividendos, y cómo clasificar cualquier flujo de efectivo con seguridad.',
    minutes: 20,
    skills: [
      'Cash Flow'
    ],
    sections: [
      {
        heading: 'Los tres cajones',
        paragraphs: [
          'Cada movimiento de efectivo va a exactamente una de tres actividades. Explotación: las actividades principales generadoras de ingresos: cobros de clientes, pagos a proveedores y empleados, impuestos pagados. Inversión: adquisición y enajenación de activos a largo plazo: compra de inmovilizado material, venta de una filial. Financiación: cambios en la estructura de capital: emisión de acciones, obtención de préstamos, amortización de deuda, pago de dividendos.',
          'La clasificación no es decorativa: responde a las tres preguntas que hacen prestamistas e inversores. ¿Puede el negocio generar efectivo con su actividad principal? ¿Está invirtiendo para el futuro? ¿Cómo se financia? Una empresa con un fuerte flujo de efectivo de explotación que financia su propia inversión no necesita financiación externa; una cuyo flujo de explotación no cubre los dividendos está pidiendo prestado para pagar a los accionistas: una señal de alerta.'
        ],
        callout: {
          type: 'key',
          text: 'Explotación = dirigir el negocio. Inversión = comprar/vender activos a largo plazo. Financiación = deuda y patrimonio. Preguntar «¿por qué se movió el efectivo?» y el cajón suele responder solo.'
        },
        table: {
          headers: [
            'Flujo de efectivo',
            'Actividad',
            'Por qué'
          ],
          rows: [
            [
              'Pago a proveedor',
              'Explotación',
              'Coste comercial principal'
            ],
            [
              'Compra de maquinaria',
              'Inversión',
              'Activo a largo plazo adquirido'
            ],
            [
              'Préstamo recibido',
              'Financiación',
              'Cambio en la deuda financiera'
            ],
            [
              'Dividendo cobrado',
              'Explotación o inversión (a elegir)',
              'IAS 7 permite ambas, con revelación'
            ]
          ]
        }
      },
      {
        heading: 'Método directo frente a método indirecto',
        paragraphs: [
          'La sección de explotación puede presentarse de dos formas. El método directo muestra los cobros y pagos brutos de efectivo: efectivo cobrado de clientes $X, efectivo pagado a proveedores $Y. El método indirecto parte del resultado y ajusta: se reincorporan los gastos no monetarios (amortización, deterioro, provisiones) y luego se ajusta por las variaciones del fondo de maniobra (cuentas a cobrar/existencias al alza = restar; cuentas a pagar al alza = sumar).',
          'IAS 7 anima al método directo porque muestra de dónde vino el efectivo y adónde fue, más útil para prever. En la práctica casi todos usan el indirecto porque concilia el resultado con el efectivo, respondiendo directamente a «¿por qué el resultado no es efectivo?». Hay que conocer ambos: los exámenes ponen a prueba sin piedad los ajustes del indirecto, y los analistas prefieren la transparencia del directo.'
        ],
        callout: {
          type: 'example',
          text: 'Mini-conciliación del método indirecto: Resultado $100,000 + amortización $20,000 (no monetaria) − aumento de cuentas a cobrar $30,000 + aumento de cuentas a pagar $10,000 = flujo de efectivo de explotación $100,000. Cada ajuste convierte una partida de devengo en su efecto de caja.'
        },
        steps: [
          'Partir del resultado antes de impuestos (o del resultado neto, según la presentación).',
          'Reincorporar los gastos no monetarios: amortización, deterioro, provisiones.',
          'Ajustar por el fondo de maniobra: cuentas a cobrar/existencias al alza = restar; cuentas a pagar al alza = sumar.',
          'Deducir los intereses e impuestos pagados (si figuran en explotación) hasta llegar al flujo neto de efectivo de explotación.'
        ]
      },
      {
        heading: 'Las opciones de intereses y dividendos',
        paragraphs: [
          'Aquí las NIIF difieren claramente de los US GAAP. Los intereses pagados pueden clasificarse como explotación o financiación: la financiación refleja que el interés es un coste de obtener fondos. Los intereses y dividendos cobrados pueden ser explotación o inversión. Los dividendos pagados son normalmente financiación (un retorno del capital), aunque algunos defienden la explotación. Lo que se elija debe aplicarse con uniformidad y revelarse.',
          'Esta elección mueve cifras entre secciones y cambia el flujo de efectivo de explotación declarado, la métrica que usan muchos covenants y valoraciones. Al comparar dos empresas, comprobar siempre la nota de políticas contables: el «flujo de efectivo de explotación» de una puede incluir los intereses pagados mientras que el de otra los excluye. Los analistas suelen reexpresar a una base común antes de comparar.'
        ],
        callout: {
          type: 'warning',
          text: 'Nunca comparar el flujo de efectivo de explotación entre empresas sin comprobar la política de clasificación de intereses/dividendos. Una empresa que clasifique los intereses pagados como financiación mostrará un flujo de explotación mayor que otra idéntica que los clasifique como explotación: misma economía, distinto cajón.'
        }
      },
      {
        heading: 'Ejercicio de clasificación: seis flujos de efectivo',
        paragraphs: [
          'Aplicar el marco al conjunto exigido. Pago a un proveedor: explotación: es una salida de efectivo comercial principal. Pago de intereses: explotación o financiación a elección uniforme de la entidad (revelada). Préstamo recibido: financiación: el nuevo endeudamiento cambia la estructura de capital. Compra de maquinaria: inversión: un activo a largo plazo adquirido.',
          'Dividendo cobrado: explotación o inversión a elección de la entidad (la inversión es habitual, pues refleja un retorno de la inversión). Pago de impuestos: normalmente explotación: los impuestos derivan de la explotación; solo cuando sean específicamente identificables con inversión o financiación se usa otro cajón. Trabajar cada uno con «¿por qué se movió el efectivo?» y la clasificación se vuelve hábito, no ejercicio de memoria.'
        ],
        table: {
          headers: [
            'Flujo de efectivo',
            'Clasificación',
            'Nota'
          ],
          rows: [
            [
              'Pago a proveedor',
              'Explotación',
              'Actividad comercial principal'
            ],
            [
              'Pago de intereses',
              'Explotación o financiación',
              'A elección de la entidad, revelada'
            ],
            [
              'Préstamo recibido',
              'Financiación',
              'Nuevo endeudamiento'
            ],
            [
              'Compra de maquinaria',
              'Inversión',
              'Inmovilizado material adquirido'
            ],
            [
              'Dividendo cobrado',
              'Explotación o inversión',
              'A elección de la entidad, revelada'
            ],
            [
              'Pago de impuestos',
              'Explotación (normalmente)',
              'Deriva de la explotación'
            ]
          ]
        }
      },
      {
        heading: 'Transacciones no monetarias y disciplina de conciliación',
        paragraphs: [
          'Las transacciones de inversión y financiación sin efecto en el efectivo —adquirir inmovilizado material mediante un arrendamiento financiero, convertir deuda en patrimonio— se excluyen del estado de flujos de efectivo pero deben revelarse en otro lugar. Incluirlas corrompería el propósito del estado: seguir el efectivo.',
          'Por último, el estado debe conciliar: efectivo inicial más flujos netos de efectivo igual a efectivo final, y el efectivo final debe cuadrar con el balance. Los efectos del tipo de cambio sobre el efectivo se muestran por separado. Esta articulación es un potente control de errores: cuando el estado de flujos de efectivo no cuadra con el balance, algo falla en los ajustes del fondo de maniobra.'
        ],
        callout: {
          type: 'interview',
          text: '«¿Por qué el estado de flujos de efectivo se considera más difícil de manipular que la cuenta de resultados?» Porque el efectivo o se movió o no se movió: los devengos, las provisiones y las estimaciones apenas lo tocan. Un reconocimiento agresivo de ingresos infla el resultado pero deja atrás el flujo de explotación, de modo que la propia divergencia se convierte en la señal de alerta.'
        }
      }
    ],
    mistakes: [
      'Clasificar la compra de maquinaria como explotación: comprar activos a largo plazo es inversión, siempre.',
      'Poner las amortizaciones de préstamos en actividades de explotación: los movimientos de deuda son financiación.',
      'Olvidar que la clasificación de intereses/dividendos es una opción bajo NIIF, y no comprobar la política al comparar empresas.',
      'Incluir transacciones no monetarias (p. ej., activo adquirido mediante arrendamiento) en los totales de flujos de efectivo en lugar de revelarlas por separado.',
      'Errores de signo en el método indirecto: los aumentos de cuentas a cobrar/existencias se restan; los aumentos de cuentas a pagar se suman.',
      'Tratar el impuesto pagado como inversión o financiación por defecto: normalmente es explotación.'
    ],
    interviewQA: [
      {
        q: 'Recorrer el método indirecto desde el resultado hasta el flujo de efectivo de explotación.',
        a: 'Partir del resultado antes de impuestos. Reincorporar los cargos no monetarios —amortización, pérdidas por deterioro, provisiones— porque redujeron el resultado sin usar efectivo. Después ajustar por el fondo de maniobra: restar los aumentos de cuentas a cobrar y existencias (resultado reconocido pero efectivo aún no cobrado, o efectivo gastado), sumar los aumentos de cuentas a pagar (costes reconocidos pero aún no pagados). Por último, deducir los intereses e impuestos pagados si se presentan en explotación. El resultado es el efectivo generado por las operaciones: el puente entre el resultado por devengo y la realidad de caja.'
      },
      {
        q: '¿Dónde pueden figurar los intereses pagados bajo NIIF y por qué importa?',
        a: 'IAS 7 permite clasificar los intereses pagados como explotación o financiación, con aplicación uniforme y revelación, a diferencia de los US GAAP, que los obligan a explotación. Importa porque el flujo de efectivo de explotación alimenta covenants, valoraciones y bonus de la dirección. Una empresa que clasifique los intereses como financiación declara un flujo de explotación mayor que otra idéntica que elija explotación, así que los analistas deben comprobar la nota de políticas antes de comparar.'
      },
      {
        q: 'Una empresa compra una máquina por $500,000, pagando $200,000 en efectivo y financiando $300,000 con un préstamo del proveedor. ¿Cómo se muestra?',
        a: 'Solo los $200,000 pagados en efectivo figuran en el estado de flujos de efectivo, como salida de inversión. Los $300,000 de financiación del proveedor son una transacción no monetaria de inversión y financiación: se excluyen de los totales del estado pero se revelan en las notas. Cuando el préstamo se amortice después en efectivo, esas amortizaciones figurarán como salidas de financiación.'
      }
    ],
    quiz: [
      {
        question: 'El pago a un proveedor por existencias se clasifica como:',
        options: [
          'Salida de efectivo de inversión',
          'Salida de efectivo de explotación',
          'Salida de efectivo de financiación',
          'No se muestra: es no monetario'
        ],
        answer: 1,
        explanation: 'Los pagos a proveedores son flujos de efectivo comerciales principales: actividades de explotación.',
        difficulty: 'Foundation',
        topic: 'Classification',
        skill: 'Cash Flow'
      },
      {
        question: 'Los fondos de un nuevo préstamo bancario se clasifican como:',
        options: [
          'Entrada de efectivo de financiación',
          'Entrada de efectivo de explotación',
          'Entrada de efectivo de inversión',
          'Otro resultado global'
        ],
        answer: 0,
        explanation: 'Endeudarse cambia la estructura de capital: una actividad de financiación.',
        difficulty: 'Foundation',
        topic: 'Classification',
        skill: 'Cash Flow'
      },
      {
        question: 'La compra de maquinaria al contado se clasifica como:',
        options: [
          'Salida de efectivo de explotación',
          'Salida de efectivo de financiación',
          'Salida de efectivo de inversión',
          'Un gasto en actividades de explotación'
        ],
        answer: 2,
        explanation: 'Adquirir activos a largo plazo es inversión. Se activa en el balance, no se lleva a gasto.',
        difficulty: 'Foundation',
        topic: 'Classification',
        skill: 'Cash Flow'
      },
      {
        question: 'Bajo NIIF, los intereses pagados pueden clasificarse como:',
        options: [
          'Explotación o financiación, con aplicación uniforme y revelación',
          'Solo explotación',
          'Solo financiación',
          'Solo inversión'
        ],
        answer: 0,
        explanation: 'IAS 7 permite la elección para los intereses pagados (y los dividendos cobrados), a diferencia de los US GAAP. Se exigen uniformidad y revelación.',
        difficulty: 'Intermediate',
        topic: 'Classification Choices',
        skill: 'Cash Flow'
      },
      {
        question: 'Los dividendos cobrados pueden clasificarse bajo NIIF como:',
        options: [
          'Solo financiación',
          'Explotación o inversión, con aplicación uniforme y revelación',
          'Solo explotación',
          'No figuran en el estado de flujos de efectivo'
        ],
        answer: 1,
        explanation: 'IAS 7 permite los dividendos cobrados en explotación o inversión: la inversión es habitual, pues son retornos de inversiones.',
        difficulty: 'Intermediate',
        topic: 'Classification Choices',
        skill: 'Cash Flow'
      },
      {
        question: 'En el método indirecto, un aumento de cuentas a cobrar comerciales de $30,000 es:',
        options: [
          'Sumado al resultado',
          'Ignorado: las cuentas a cobrar son no monetarias',
          'Mostrado en actividades de inversión',
          'Restado del resultado'
        ],
        answer: 3,
        explanation: 'Unas cuentas a cobrar mayores significan ingresos reconocidos sin efectivo cobrado, por lo que el aumento se deduce para convertir el resultado hacia el efectivo.',
        difficulty: 'Intermediate',
        topic: 'Indirect Method',
        skill: 'Cash Flow'
      },
      {
        question: 'En el método indirecto, una amortización de $20,000 es:',
        options: [
          'Restada del resultado',
          'Mostrada como salida de inversión',
          'Reincorporada al resultado',
          'Ignorada por ser una estimación'
        ],
        answer: 2,
        explanation: 'La amortización redujo el resultado pero no usó efectivo, por lo que se reincorpora para llegar al efectivo generado.',
        difficulty: 'Foundation',
        topic: 'Indirect Method',
        skill: 'Cash Flow'
      },
      {
        question: 'El impuesto pagado se clasifica normalmente como:',
        options: [
          'Salida de efectivo de inversión',
          'Salida de efectivo de explotación',
          'Salida de efectivo de financiación',
          'Se netea contra el resultado y no se muestra'
        ],
        answer: 1,
        explanation: 'Los impuestos derivan normalmente de la explotación, por lo que el impuesto pagado es explotación, salvo que sea específicamente identificable con una transacción de inversión o financiación.',
        difficulty: 'Intermediate',
        topic: 'Classification',
        skill: 'Cash Flow'
      },
      {
        question: 'Una máquina adquirida íntegramente mediante un nuevo arrendamiento financiero (sin efectivo pagado) es:',
        options: [
          'Mostrada como salida de inversión a valor razonable',
          'Mostrada como entrada de financiación',
          'Ignorada por completo sin revelación',
          'Excluida de los totales de flujos de efectivo pero revelada como transacción no monetaria'
        ],
        answer: 3,
        explanation: 'Las transacciones no monetarias de inversión/financiación se excluyen del estado pero deben revelarse para que los usuarios vean el cuadro completo de la inversión.',
        difficulty: 'Advanced',
        topic: 'Non-Cash Transactions',
        skill: 'Cash Flow'
      }
    ]
  },
  {
    id: 'm08',
    level: 2,
    levelTitle: 'IFRS Framework',
    title: 'IAS 8 — Políticas contables y errores',
    standard: 'IAS 8',
    tagline: '¿Cambio de criterio, cambio de estimación o simplemente un error? Cada uno tiene su arreglo.',
    description: 'IAS 8 traza las líneas que mantienen honesta la historia financiera: los cambios voluntarios de políticas se aplican retroactivamente, los cambios de estimaciones se aplican prospectivamente y los errores de ejercicios anteriores exigen reexpresar las comparativas. Se aprenderá a clasificar cualquier cambio y contabilizarlo correctamente.',
    minutes: 16,
    skills: [
      'IFRS Fundamentals'
    ],
    sections: [
      {
        heading: 'Tres cosas distintas',
        paragraphs: [
          'IAS 8 trata tres hechos distintos que se confunden constantemente. Un cambio de política contable: pasar de un tratamiento aceptable a otro, p. ej., del modelo de coste al modelo de revalorización para el inmovilizado material, o cambiar el coste de existencias de media ponderada a FIFO. Un cambio de estimación contable: revisar una hipótesis de medición por nueva información, p. ej., alargar la vida útil de un activo o cambiar el porcentaje de la provisión por garantías. Un error de ejercicios anteriores: un error: errores matemáticos, políticas mal aplicadas, hechos pasados por alto que existían.',
          'La distinción lo determina todo lo que sigue. Las políticas miran atrás (reexpresar la historia como si siempre se hubiera aplicado); las estimaciones miran adelante (aplicar desde ahora); los errores exigen corregir la historia (reexpresar las comparativas). Clasificar erróneamente un error como «cambio de estimación» es un truco clásico de gestión del resultado, y los auditores están entrenados para detectarlo.'
        ],
        callout: {
          type: 'key',
          text: 'Cambio de política → retroactivo. Cambio de estimación → prospectivo. Error → reexpresar comparativas. Tres palabras que responden a la mayoría de preguntas de examen de IAS 8.'
        },
        table: {
          headers: [
            'Hecho',
            'Ejemplo',
            'Tratamiento'
          ],
          rows: [
            [
              'Cambio de política',
              'Media ponderada → FIFO',
              'Retroactivo'
            ],
            [
              'Cambio de estimación',
              'Vida útil 5 → 8 años',
              'Prospectivo'
            ],
            [
              'Error de ejercicios anteriores',
              'Olvido de devengar $50k de gasto',
              'Reexpresar comparativas'
            ]
          ]
        }
      },
      {
        heading: 'Cambios de políticas: aplicación retroactiva',
        paragraphs: [
          'Un cambio voluntario de política solo se permite si da lugar a información más relevante y fiable. Cuando se realiza, se aplica retroactivamente: reexpresar las comparativas como si la nueva política siempre se hubiera aplicado, y ajustar las reservas iniciales del primer ejercicio presentado por el efecto acumulado.',
          'Ejemplo: cambiar las existencias de media ponderada a FIFO cuando refleja mejor el flujo de mercancías. El balance, la cuenta de resultados y las reservas del año anterior se reexpresan. Las notas revelan la naturaleza del cambio, por qué la nueva política es mejor y el efecto en cada partida. La aplicación retroactiva preserva la comparabilidad de tendencias: todo el sentido de IAS 8.'
        ],
        journal: {
          transaction: 'Efecto retroactivo de un cambio voluntario de política que aumenta el resultado del año anterior en $60,000 (acumulado).',
          lines: [
            {
              account: 'Existencias',
              dr: 60000,
              cr: null
            },
            {
              account: 'Reservas (reexpresadas al inicio)',
              dr: null,
              cr: 60000
            }
          ],
          narration: 'Efecto acumulado del cambio de media ponderada a FIFO'
        },
        impact: {
          pl: 'Comparativas del ejercicio anterior reexpresadas; la cuenta de resultados del ejercicio corriente no se ve afectada por la puesta al día.',
          bs: 'Activos/patrimonio neto comparativos reexpresados; reservas iniciales ajustadas.',
          cf: 'Sin efecto en el efectivo: una pura reexpresión contable.'
        },
        callout: {
          type: 'warning',
          text: 'Retroactivo no significa reexpresar cada año desde la fundación de la empresa: solo los ejercicios comparativos presentados, con el efecto acumulado previo a las comparativas en las reservas iniciales.'
        }
      },
      {
        heading: 'Cambios de estimaciones: aplicación prospectiva',
        paragraphs: [
          'Las estimaciones se revisan constantemente a medida que llega nueva información: eso es normal, no un error. Un cambio de estimación se aplica prospectivamente: ajustar el ejercicio corriente y los futuros, nunca reexpresar el pasado. Si la vida útil restante de una máquina se revisa de 3 a 6 años, la amortización simplemente se recalcula sobre la nueva vida restante desde ahora.',
          'La lógica: la antigua estimación era razonable con lo que se sabía entonces. Reexpresar la historia reescribiría decisiones tomadas de buena fe. Las notas revelan la naturaleza y el efecto del cambio. A los examinadores les encanta el caso límite: ¿alargar la vida útil es un cambio de estimación (sí: nueva información sobre el uso) o un error (solo si la vida original se basó en un error claro o un mal uso de los hechos disponibles entonces)?'
        ],
        callout: {
          type: 'example',
          text: 'Máquina coste $120,000, 2 años usados de una vida de 5 años, valor en libros $72,000. Vida restante revisada de 3 a 6 años → nueva amortización anual $72,000 ÷ 6 = $12,000 (era $24,000). Aplicada prospectivamente desde la fecha de revisión; ejercicios anteriores intactos.'
        }
      },
      {
        heading: 'Errores: reexpresar las comparativas',
        paragraphs: [
          'Los errores de ejercicios anteriores —errores matemáticos, errores al aplicar políticas, omisiones o malas interpretaciones de hechos que existían cuando se autorizaron los estados— se corrigen retroactivamente reexpresando los importes comparativos. Se corrigen los saldos iniciales del primer ejercicio presentado y, si el error es anterior, las reservas iniciales lo absorben.',
          'La revelación es extensa: la naturaleza del error, la corrección para cada partida y ejercicio anterior, y el efecto en el BPA básico/diluido. Esta transparencia es el precio de reescribir la historia: los usuarios deben ver exactamente qué cambió y por qué. Un «ajuste de ejercicios anteriores» que aparece discretamente sin esta revelación es una señal de alerta para los analistas.'
        ],
        journal: {
          transaction: 'Corrección de un error del ejercicio anterior: $50,000 de gastos de diciembre se omitieron en los estados del año pasado.',
          lines: [
            {
              account: 'Reservas (reexpresadas al inicio)',
              dr: 50000,
              cr: null
            },
            {
              account: 'Gastos devengados',
              dr: null,
              cr: 50000
            }
          ],
          narration: 'Corrección de un error de ejercicios anteriores: devengo omitido'
        },
        impact: {
          pl: 'Cuenta de resultados comparativa reexpresada (gastos +$50,000); la cuenta de resultados del ejercicio corriente no muestra puesta al día.',
          bs: 'Pasivos comparativos +$50,000; reservas iniciales −$50,000.',
          cf: 'Sin efecto en el efectivo en ningún ejercicio por la propia corrección.'
        }
      },
      {
        heading: 'El test de clasificación',
        paragraphs: [
          'Ante cualquier cambio, seguir este árbol de decisión. Primero: ¿estaba mal con los hechos disponibles entonces? Si sí: error, reexpresar. Segundo: ¿es un cambio entre tratamientos contables aceptables? Si sí: cambio de política, retroactivo (solo si es más relevante/fiable). Tercero: ¿es nueva información que cambia una medición? Si sí: cambio de estimación, prospectivo.',
          'La válvula de escape de la impracticabilidad: la aplicación retroactiva se exige salvo que sea impracticable, es decir, que no pueda hacerse tras agotar todos los esfuerzos razonables (p. ej., los datos ya no existen). «Difícil» o «caro» no es impracticable. Cuando sea impracticable, aplicar desde la primera fecha factible y revelar por qué.'
        ],
        steps: [
          '¿Estaba mal con los hechos disponibles entonces? → Error → reexpresar comparativas.',
          '¿Es un cambio de tratamiento aceptable? → Cambio de política → retroactivo (si es más relevante).',
          '¿Es nueva información que revisa una medición? → Cambio de estimación → prospectivo.',
          '¿Retroactivo impracticable? Aplicar desde la primera fecha factible y revelar por qué.'
        ],
        callout: {
          type: 'interview',
          text: '«La dirección quiere alargar las vidas de los activos para mejorar el resultado: ¿política o estimación?» Cambio de estimación, aplicado prospectivamente. Y la pregunta siguiente: «¿Cómo lo auditaría?» Cuestionaría la nueva información que justifica el cambio, buscaría sesgos (¿siempre favorece al resultado?) y verificaría la revelación. «Refinamientos de estimaciones» repetidos que siempre aumentan el resultado son una señal de gestión del resultado.'
        }
      }
    ],
    mistakes: [
      'Tratar un error de ejercicios anteriores como cambio de estimación para evitar reexpresar comparativas: los auditores prueban específicamente este límite.',
      'Aplicar prospectivamente los cambios de políticas: los cambios voluntarios de políticas son retroactivos, reexpresando comparativas.',
      'Reexpresar ejercicios pasados por un cambio de estimación: la nueva información se aplica desde ahora, nunca hacia atrás.',
      'Cambiar políticas voluntariamente sin la justificación de «más relevante y fiable»: IAS 8 solo lo permite entonces.',
      'Enterrar correcciones de errores sin las revelaciones exigidas de naturaleza y efectos por partida.',
      'Alegar que la aplicación retroactiva es «impracticable» solo porque es difícil o costosa.'
    ],
    interviewQA: [
      {
        q: 'Distinguir un cambio de política contable, un cambio de estimación y un error de ejercicios anteriores.',
        a: 'Un cambio de política alterna entre tratamientos aceptables —p. ej., de media ponderada a FIFO— y se aplica retroactivamente con comparativas reexpresadas, permitido solo si da información más relevante y fiable. Un cambio de estimación revisa una medición por nueva información —p. ej., alargar la vida útil— y se aplica solo prospectivamente. Un error de ejercicios anteriores es un error con los hechos disponibles entonces —p. ej., un devengo omitido— que se corrige reexpresando comparativas con plena revelación de la naturaleza y los efectos.'
      },
      {
        q: 'Una empresa descubre que no amortizó un edificio en los dos últimos años. ¿Cómo se corrige?',
        a: 'Es un error de ejercicios anteriores, no un cambio de estimación: la amortización era exigible y se omitió. La empresa reexpresa los estados comparativos: la amortización de puesta al día reduce el resultado comparativo, la amortización acumulada aumenta y las reservas iniciales del primer ejercicio presentado absorben el efecto previo a las comparativas. Las notas revelan la naturaleza del error y su efecto en cada partida. El resultado del ejercicio corriente muestra solo la amortización del ejercicio, no la puesta al día.'
      },
      {
        q: '¿Cuándo no se exige la aplicación retroactiva?',
        a: 'Cuando es impracticable: definido estrictamente como imposible tras agotar todos los esfuerzos razonables, por ejemplo porque los datos históricos necesarios ya no existen y no pueden reconstruirse. La mera dificultad o el coste no bastan. En ese caso, la nueva política o corrección se aplica desde la primera fecha practicable, revelando por qué la plena aplicación retroactiva fue impracticable.'
      }
    ],
    quiz: [
      {
        question: 'Un cambio voluntario de política contable se aplica:',
        options: [
          'Retroactivamente, reexpresando comparativas',
          'Prospectivamente desde la fecha del cambio',
          'Solo en las notas, sin reexpresión',
          'Ajustando solo el resultado del ejercicio corriente'
        ],
        answer: 0,
        explanation: 'Los cambios de políticas se aplican retroactivamente: las comparativas se reexpresan como si la nueva política siempre se hubiera aplicado, preservando la comparabilidad de tendencias.',
        difficulty: 'Foundation',
        topic: 'Policy Changes',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Un cambio de estimación contable (p. ej., mayor vida útil) se aplica:',
        options: [
          'Prospectivamente, afectando solo al ejercicio corriente y futuros',
          'Retroactivamente, reexpresando todos los ejercicios anteriores',
          'Reexpresando solo las reservas iniciales',
          'No puede cambiarse una vez fijada'
        ],
        answer: 0,
        explanation: 'Las estimaciones reflejan nueva información; la antigua estimación era razonable cuando se hizo, por lo que solo cambian el ejercicio corriente y los futuros.',
        difficulty: 'Foundation',
        topic: 'Estimate Changes',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Un error de ejercicios anteriores se corrige:',
        options: [
          'Registrando la puesta al día en el resultado del ejercicio corriente',
          'Reexpresando los importes comparativos',
          'Revelándolo sin cambiar ninguna cifra',
          'Ajustando el presupuesto del próximo año'
        ],
        answer: 1,
        explanation: 'Los errores exigen reexpresar las comparativas para corregir la historia; la cuenta de resultados del ejercicio corriente no debe absorber la puesta al día.',
        difficulty: 'Foundation',
        topic: 'Errors',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Cambiar el coste de existencias de media ponderada a FIFO porque refleja mejor el flujo físico es un:',
        options: [
          'Cambio de estimación contable',
          'Error de ejercicios anteriores',
          'Cambio de política contable',
          'Hecho posterior no ajustable'
        ],
        answer: 2,
        explanation: 'Alternar entre tratamientos aceptables es un cambio de política: retroactivo, y permitido solo si da información más relevante y fiable.',
        difficulty: 'Intermediate',
        topic: 'Classification',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Revisar una provisión por garantías del 2 % al 3 % de las ventas con nuevos datos de reclamaciones es un:',
        options: [
          'Cambio de política contable',
          'Error de ejercicios anteriores',
          'Pasivo contingente',
          'Cambio de estimación contable'
        ],
        answer: 3,
        explanation: 'La nueva información que revisa una hipótesis de medición es un cambio de estimación: aplicación prospectiva.',
        difficulty: 'Intermediate',
        topic: 'Classification',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Descubrir que los estados del año pasado omitieron un devengo de $50,000 es un:',
        options: [
          'Error de ejercicios anteriores',
          'Cambio de estimación contable',
          'Cambio de política contable',
          'Hecho posterior ajustable'
        ],
        answer: 0,
        explanation: 'Una omisión de hechos que existían entonces es un error: se reexpresan las comparativas, no el ejercicio corriente.',
        difficulty: 'Intermediate',
        topic: 'Classification',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Máquina: coste $120,000, valor en libros $72,000 tras 2 años de una vida de 5 años. La vida restante se revisa de 3 a 6 años. ¿Nueva amortización anual?',
        options: [
          '$24,000',
          '$20,000',
          '$12,000',
          '$8,000'
        ],
        answer: 2,
        explanation: '$72,000 ÷ 6 años = $12,000 al año, aplicados prospectivamente. Los $24,000 eran el cargo antiguo; $20,000 ignora los 2 años ya amortizados.',
        difficulty: 'Advanced',
        topic: 'Estimate Changes',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Un cambio voluntario de política solo se permite cuando:',
        options: [
          'La dirección prefiere el nuevo método',
          'Da lugar a información más relevante y fiable',
          'Aumenta el resultado declarado',
          'Lo sugiere el auditor'
        ],
        answer: 1,
        explanation: 'IAS 8 permite cambios voluntarios solo si la nueva política da información más relevante y fiable: la preferencia o los motivos de resultado no bastan.',
        difficulty: 'Intermediate',
        topic: 'Policy Changes',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'La aplicación retroactiva solo se excusa cuando es:',
        options: [
          'Cara de realizar',
          'Lleva mucho tiempo al equipo financiero',
          'Probablemente confunda a los inversores',
          'Impracticable tras agotar todos los esfuerzos razonables'
        ],
        answer: 3,
        explanation: 'Impracticable significa imposible tras agotar todos los esfuerzos razonables, no meramente difícil o costoso. Entonces aplicar desde la primera fecha factible con revelación.',
        difficulty: 'Advanced',
        topic: 'Impracticability',
        skill: 'IFRS Fundamentals'
      }
    ]
  },
  {
    id: 'm09',
    level: 2,
    levelTitle: 'IFRS Framework',
    title: 'IAS 10 — Hechos posteriores a la fecha de cierre',
    standard: 'IAS 10',
    tagline: 'El ejercicio está cerrado, pero el mundo siguió moviéndose. ¿Qué hechos posteriores al cierre reescriben las cifras?',
    description: 'IAS 10 regula los hechos ocurridos entre la fecha de cierre y la autorización de los estados. Se aprenderá el test de hechos ajustables frente a no ajustables, se trabajarán los casos clásicos —quiebra de un cliente, incendio posterior al cierre, dividendos declarados— y la revelación que cada uno exige.',
    minutes: 15,
    skills: [
      'IFRS Fundamentals'
    ],
    sections: [
      {
        heading: 'La ventana y el test',
        paragraphs: [
          'Los hechos posteriores a la fecha de cierre son los ocurridos entre la fecha de cierre (p. ej., 31 de diciembre) y la fecha de autorización de los estados para su publicación (p. ej., 15 de marzo). IAS 10 hace una sola pregunta sobre cada uno: ¿aporta evidencia de condiciones que existían a la fecha de cierre? Si sí: hecho ajustable: actualizar las cifras. Si indica condiciones surgidas después de la fecha de cierre: no ajustable: no cambiar las cifras, pero revelar si es material.',
          'El test trata de condiciones, no del momento del conocimiento. Saber en febrero que un cliente ya era insolvente a 31 de diciembre ajusta los estados; un incendio en febrero que destruye un almacén no: el almacén existía intacto al cierre. Acertar con el momento de la condición y la clasificación sigue.'
        ],
        callout: {
          type: 'key',
          text: 'El único test: ¿el hecho reveló condiciones existentes A la fecha de cierre? Sí → ajustar las cifras. No → revelar si es material, pero dejar las cifras intactas.'
        },
        table: {
          headers: [
            'Hecho',
            '¿Condiciones a la fecha de cierre?',
            'Tratamiento'
          ],
          rows: [
            [
              'Quiebra de un cliente (insolvente al cierre)',
              'Sí',
              'Ajustable: deteriorar la cuenta a cobrar'
            ],
            [
              'Incendio destruye un almacén tras el cierre',
              'No',
              'No ajustable: revelar'
            ],
            [
              'Dividendos declarados tras la fecha de cierre',
              'No',
              'No ajustable: revelar'
            ],
            [
              'Fraude descubierto, existente al cierre',
              'Sí',
              'Ajustable: corregir los estados'
            ]
          ]
        }
      },
      {
        heading: 'Hechos ajustables: reescribir las cifras',
        paragraphs: [
          'Hechos ajustables clásicos: la quiebra de un cliente que confirma que la cuenta a cobrar estaba deteriorada al cierre; la resolución de un litigio que confirma el importe de la provisión; el descubrimiento de fraude o errores que muestran que los estados eran incorrectos; la determinación de costes de activos o del producto de ventas (p. ej., existencias vendidas tras el cierre por debajo del coste, confirmando el VRN al cierre).',
          'Tomar la quiebra del cliente: a 31 de diciembre la empresa tenía una cuenta a cobrar de $200,000. En febrero el cliente se liquida, y la evidencia muestra que ya era insolvente al cierre. Los estados se ajustan: Debe Pérdidas por deterioro $200,000, Haber Provisión por pérdidas crediticias esperadas $200,000. El balance muestra ahora la realidad económica que existía a la fecha de cierre.'
        ],
        journal: {
          transaction: 'Un cliente que debía $200,000 se liquida en febrero; la evidencia muestra que la insolvencia existía a 31 de diciembre.',
          lines: [
            {
              account: 'Pérdidas por deterioro (cuenta de resultados)',
              dr: 200000,
              cr: null
            },
            {
              account: 'Provisión por pérdidas crediticias esperadas',
              dr: null,
              cr: 200000
            }
          ],
          narration: 'Hecho ajustable: cuenta a cobrar deteriorada a la fecha de cierre'
        },
        impact: {
          pl: 'Pérdida por deterioro de $200,000 reconocida en el ejercicio presentado.',
          bs: 'Cuentas a cobrar (netas) −$200,000; reservas −$200,000.',
          cf: 'Sin efecto en el efectivo.'
        },
        callout: {
          type: 'warning',
          text: 'La quiebra es ajustable SOLO si las condiciones existían a la fecha de cierre. Si el cliente estaba sano al cierre y quebró después por un hecho posterior al cierre, es no ajustable: revelar, no deteriorar.'
        }
      },
      {
        heading: 'Hechos no ajustables: revelar, no ajustar',
        paragraphs: [
          'Los hechos no ajustables reflejan condiciones nuevas: un incendio que destruye una planta en febrero, una adquisición o enajenación importante anunciada en enero, convulsiones cambiarias, o una reestructuración anunciada tras el cierre. Las cifras del cierre se mantienen: el almacén existía realmente a 31 de diciembre; pero si el hecho es material, IAS 10 exige revelar su naturaleza y una estimación de su efecto financiero.',
          'Los dividendos declarados tras la fecha de cierre son el caso de manual: IAS 10 dice expresamente que son no ajustables. No se reconoce pasivo al cierre por dividendos declarados en enero: la obligación no existía a 31 de diciembre. El importe se revela en las notas. Esto sorprende a los principiantes, que esperan que los dividendos declarados lleguen al balance de inmediato.'
        ],
        callout: {
          type: 'example',
          text: 'Incendio el 10 de febrero que destruye un almacén valorado en $1.5 millones. No ajustable: el balance a 31 de diciembre sigue mostrando el almacén. Las notas revelan el incendio, el valor en libros perdido y si se espera que el seguro lo cubra: información material para los usuarios, sin reescribir la historia.'
        }
      },
      {
        heading: 'Empresa en funcionamiento: el hecho que prevalece sobre todo',
        paragraphs: [
          'Un hecho posterior al cierre cambia toda la base de preparación: si los hechos posteriores a la fecha de cierre indican que la hipótesis de empresa en funcionamiento ya no es adecuada —p. ej., el único cliente de la empresa cancela en enero y no hay sustituto—, los estados NO deben prepararse sobre la base de empresa en funcionamiento, aunque la fecha de cierre haya pasado.',
          'Esto es efectivamente un hecho ajustable de máximo orden: los activos se reducen a valores de liquidación y la base se revela. IAS 10 es explícito porque la alternativa —emitir estados de empresa en funcionamiento para una empresa moribunda— sería activamente engañoso. Los auditores tratan los indicadores de empresa en funcionamiento posteriores al cierre como un área crítica de revisión.'
        ],
        callout: {
          type: 'interview',
          text: '«Un gran cliente que representa el 80 % de los ingresos quiebra en febrero, antes de la autorización. ¿Ajustable o no ajustable?» La quiebra en sí puede ser no ajustable (las condiciones surgieron tras el cierre), PERO si destruye la empresa en funcionamiento, los estados deben prepararse sobre una base distinta de la de empresa en funcionamiento. Comprobar siempre por separado la implicación de empresa en funcionamiento: prevalece sobre la clasificación normal.'
        }
      }
    ],
    mistakes: [
      'Ajustar por un incendio posterior al cierre: las condiciones nuevas tras la fecha de cierre son no ajustables; revelar, no reescribir.',
      'Reconocer un pasivo por dividendos declarados tras la fecha de cierre: IAS 10 lo prohíbe expresamente; solo revelar.',
      'Tratar toda quiebra de clientes como ajustable: solo si las condiciones de insolvencia existían a la fecha de cierre.',
      'Olvidar la prevalencia de la empresa en funcionamiento: un hecho posterior al cierre que acaba con ella cambia toda la base de preparación.',
      'Revelar hechos no ajustables sin cuantificar el efecto financiero (o indicar por qué no puede estimarse).',
      'Ajustar las cifras por un hecho no ajustable solo porque es material: la importancia relativa impulsa la revelación, no el ajuste.'
    ],
    interviewQA: [
      {
        q: 'Un cliente que debía $200,000 quiebra en febrero, antes de autorizar los estados. ¿Ajustable o no?',
        a: 'Depende de las condiciones a la fecha de cierre. Si la evidencia muestra que el cliente ya era insolvente a 31 de diciembre, es ajustable: reconocer el deterioro en el ejercicio presentado. Si el cliente estaba sano al cierre y quebró por hechos posteriores al cierre, es no ajustable: revelar la quiebra y su efecto estimado, pero no deteriorar la cuenta a cobrar del cierre. La pregunta a hacer es siempre «¿qué se sabía, o qué existía, a la fecha de cierre?».'
      },
      {
        q: '¿Por qué los dividendos declarados tras la fecha de cierre no se reconocen como pasivo?',
        a: 'Porque a la fecha de cierre no existía obligación: el consejo aún no los había declarado. IAS 10 clasifica expresamente las declaraciones de dividendos posteriores a la fecha de cierre como hechos no ajustables. Reconocer un pasivo reescribiría la historia para mostrar una obligación que no existía. En su lugar, el importe del dividendo se revela en las notas para que los usuarios lo incorporen a sus decisiones.'
      },
      {
        q: '¿Qué debe ocurrir si los hechos posteriores al cierre siembran dudas significativas sobre la empresa en funcionamiento?',
        a: 'Los estados financieros no deben prepararse sobre la base de empresa en funcionamiento: esto prevalece sobre el análisis normal de ajustable/no ajustable. Los activos y pasivos se miden sobre la base alternativa aplicable (p. ej., valores de liquidación), y se revelan la base, los motivos y las incertidumbres. Es el único hecho posterior al cierre que reescribe todo el fundamento de los estados.'
      }
    ],
    quiz: [
      {
        question: 'Los hechos posteriores a la fecha de cierre son los ocurridos entre:',
        options: [
          'La fecha de cierre y la fecha en que se autorizan los estados para su publicación',
          'La fecha de cierre y la siguiente fecha de cierre',
          'La autorización y la junta general',
          'El inicio y el fin de la auditoría'
        ],
        answer: 0,
        explanation: 'IAS 10 define la ventana como fecha de cierre a fecha de autorización. Los hechos posteriores a la autorización quedan fuera de su alcance.',
        difficulty: 'Foundation',
        topic: 'Scope',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'El test que distingue hechos ajustables de no ajustables es:',
        options: [
          'Si el hecho es favorable o desfavorable',
          'Si el hecho evidencia condiciones existentes a la fecha de cierre',
          'Si el importe supera la importancia relativa',
          'Si lo descubrió el auditor'
        ],
        answer: 1,
        explanation: 'Condiciones a la fecha de cierre → ajustable. Condiciones nuevas surgidas después → no ajustable (revelar si es material). Que sea favorable y su tamaño no deciden.',
        difficulty: 'Foundation',
        topic: 'Classification',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Un cliente se liquida en febrero; la evidencia muestra que la insolvencia existía a 31 de diciembre. ¿Tratamiento?',
        options: [
          'No ajustable: solo revelar',
          'Ignorar: la quiebra ocurrió el año siguiente',
          'Ajustable: deteriorar la cuenta a cobrar en el ejercicio presentado',
          'Ajustable, pero solo en el estado de flujos de efectivo'
        ],
        answer: 2,
        explanation: 'Las condiciones existían a la fecha de cierre, por lo que los estados se ajustan para reflejar la cuenta a cobrar deteriorada.',
        difficulty: 'Intermediate',
        topic: 'Adjusting Events',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Un incendio destruye un almacén en febrero, tras un cierre a 31 de diciembre. ¿Tratamiento?',
        options: [
          'Ajustable: eliminar el almacén del balance del cierre',
          'Ajustable: reconocer el siniestro del seguro como activo',
          'No se requiere ninguna actuación',
          'No ajustable: revelar la naturaleza y el efecto financiero estimado'
        ],
        answer: 3,
        explanation: 'El incendio refleja condiciones nuevas tras la fecha de cierre. Las cifras del cierre se mantienen; los detalles materiales se revelan.',
        difficulty: 'Intermediate',
        topic: 'Non-Adjusting Events',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Los dividendos declarados por el consejo en enero para un cierre a 31 de diciembre son:',
        options: [
          'Ajustables: reconocidos como pasivo al cierre',
          'Reconocidos directamente en patrimonio neto al cierre',
          'No ajustables: revelados, no reconocidos como pasivo',
          'Ignorados por completo'
        ],
        answer: 2,
        explanation: 'IAS 10 dice expresamente que las declaraciones de dividendos posteriores a la fecha de cierre son no ajustables: a la fecha de cierre no existía obligación.',
        difficulty: 'Intermediate',
        topic: 'Dividends',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Existencias valoradas al coste $100,000 vendidas en enero por $70,000, confirmando que su VRN al cierre era $70,000. ¿Tratamiento?',
        options: [
          'Ajustable: reducir las existencias a $70,000 al cierre',
          'No ajustable: la venta ocurrió el año siguiente',
          'Ajustable: reconocer una ganancia de $30,000',
          'Solo revelar, mantener en $100,000'
        ],
        answer: 0,
        explanation: 'La venta aporta evidencia de condiciones (VRN) existentes a la fecha de cierre: un hecho ajustable clásico según IAS 10.',
        difficulty: 'Advanced',
        topic: 'Adjusting Events',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Los hechos posteriores al cierre revelan que la base de empresa en funcionamiento ya no es adecuada. La entidad debe:',
        options: [
          'Seguir usando empresa en funcionamiento porque el ejercicio ha terminado',
          'Preparar los estados sobre una base alternativa (no de empresa en funcionamiento) con revelación',
          'Retrasar la autorización indefinidamente',
          'Emitir los estados sin mención alguna'
        ],
        answer: 1,
        explanation: 'IAS 10 exige abandonar la base de empresa en funcionamiento en este caso: prevalece sobre la clasificación normal, con plena revelación.',
        difficulty: 'Advanced',
        topic: 'Going Concern',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Para un hecho no ajustable material, IAS 10 exige revelar:',
        options: [
          'Solo su naturaleza, nunca importes',
          'Una reexpresión completa de los estados principales',
          'Nada: no ajustable significa sin revelación',
          'Su naturaleza y una estimación de su efecto financiero (o una declaración de que no puede estimarse)'
        ],
        answer: 3,
        explanation: 'Los hechos no ajustables materiales exigen revelar la naturaleza más el efecto financiero estimado, o una declaración expresa de que la estimación es imposible.',
        difficulty: 'Intermediate',
        topic: 'Disclosure',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'La resolución de un litigio en febrero confirma que una provisión reconocida al cierre era $50,000 demasiado baja. ¿Tratamiento?',
        options: [
          'No ajustable: registrar los $50,000 extra el año siguiente',
          'No ajustable: las provisiones no pueden cambiarse',
          'Ajustable: aumentar la provisión en el ejercicio presentado',
          'Ajustable, pero solo revelar'
        ],
        answer: 2,
        explanation: 'La resolución evidencia el verdadero importe de la obligación a la fecha de cierre: ajustable. La provisión del cierre se corrige.',
        difficulty: 'Advanced',
        topic: 'Adjusting Events',
        skill: 'IFRS Fundamentals'
      }
    ]
  }
];
