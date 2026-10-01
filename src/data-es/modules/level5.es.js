export default [
  {
    id: 'm18', level: 5, levelTitle: 'Financial Instruments', title: 'NIIF 9 — Instrumentos financieros',
    standard: 'IFRS 9', tagline: 'Dos preguntas lo deciden todo: ¿cuál es su modelo de negocio y los flujos de efectivo superan el test SPPI?',
    description: 'La NIIF 9 clasifica cada activo financiero utilizando solo dos criterios: el modelo de negocio para gestionarlo y si sus flujos de efectivo contractuales son únicamente pagos de principal e intereses. Este módulo enseña el motor de clasificación, las tres categorías de valoración, los pasivos financieros y el tipo de interés efectivo que lo une todo.',
    minutes: 30, skills: ['Financial Instruments'],
    visuals: ['ifrs9-tree'],
    sections: [
      {
        heading: 'El motor de clasificación: dos preguntas',
        paragraphs: [
          'Cada activo financiero bajo la NIIF 9 se clasifica respondiendo dos preguntas en orden. Primera: ¿cuál es el modelo de negocio para gestionar el activo — mantener para cobrar los flujos de efectivo contractuales, mantener para cobrar y vender, u otro (como la negociación)? El modelo de negocio se evalúa a nivel de cartera en función de cómo la dirección realmente gestiona el negocio, no de las intenciones para un instrumento concreto.',
          'Segunda: ¿los flujos de efectivo contractuales cumplen el test SPPI — son únicamente pagos de principal e intereses sobre el principal pendiente? Interés aquí significa compensación por el valor temporal del dinero, el riesgo de crédito, los costes básicos de concesión de préstamos y un margen de beneficio. Cualquier otra cosa — opciones sobre acciones, rendimientos ligados a materias primas, apalancamiento — no supera el SPPI.',
          'Las respuestas conducen a exactamente tres categorías de valoración: coste amortizado, valor razonable con cambios en otro resultado global (FVOCI) o valor razonable con cambios en resultados (FVTPL). Acertar las dos preguntas convierte la clasificación en algo mecánico; equivocarse implica que todos los números posteriores — deterioro, ingresos por intereses, otro resultado global — también estarán equivocados.'
        ],
        bullets: [
          'Pregunta 1 — Modelo de negocio: ¿mantener para cobrar? ¿mantener para cobrar y vender? ¿otro/negociación?',
          'Pregunta 2 — SPPI: ¿los flujos de efectivo son únicamente principal + intereses (valor temporal, riesgo de crédito, margen básico de préstamo)?',
          'Evaluar el modelo de negocio a nivel de cartera, a partir del comportamiento observable de la dirección — no de intenciones deseadas.',
          'El incumplimiento del SPPI (convertibles, pagarés ligados a acciones) siempre termina en FVTPL para instrumentos de deuda.'
        ],
        callout: { type: 'key', text: 'El motor de clasificación: modelo de negocio × SPPI → coste amortizado / FVOCI / FVTPL. Toda la valoración de la NIIF 9 fluye de estas dos respuestas.' }
      },
      {
        heading: 'Las tres categorías de valoración',
        paragraphs: [
          'El coste amortizado es para instrumentos de deuda mantenidos para cobrar flujos de efectivo contractuales cuando dichos flujos superan el SPPI: el préstamo bancario clásico o el bono de estilo mantenido hasta el vencimiento. Los intereses se reconocen utilizando el tipo de interés efectivo, y el deterioro sigue el modelo de pérdidas crediticias esperadas. Los cambios en el valor razonable son irrelevantes hasta la baja.',
          'FVOCI tiene dos variantes. Para la deuda (mantener para cobrar y vender + SPPI), los cambios en el valor razonable van al otro resultado global, pero los intereses, el deterioro y las diferencias de cambio van a resultados, y la ganancia o pérdida acumulada en el otro resultado global se recicla a resultados al enajenar. Para el patrimonio neto, existe una opción irrevocable en el reconocimiento inicial para presentar los cambios en el valor razonable en el otro resultado global — pero los dividendos van a resultados, no se reconoce deterioro, y no hay reciclaje al vender: la ganancia permanece en el patrimonio neto para siempre.',
          'FVTPL es la categoría residual: activos de negociación, derivados, todo lo que no supera el SPPI e instrumentos designados en FVTPL para eliminar un desajuste contable (la opción de valor razonable). Todos los cambios en el valor razonable van a resultados inmediatamente, y los costes de transacción se llevan a gastos en lugar de capitalizarse.'
        ],
        table: {
          headers: ['Categoría', 'Criterios', 'Tratamiento en resultados frente a otro resultado global'],
          rows: [
            ['Coste amortizado', 'Mantener para cobrar + SPPI', 'Intereses TIE, deterioro PCE, diferencias de cambio en resultados; sin movimientos de valor razonable'],
            ['FVOCI (deuda)', 'Mantener para cobrar y vender + SPPI', 'Intereses/PCE/diferencias de cambio en resultados; movimientos de valor razonable en otro resultado global, reciclados al vender'],
            ['FVOCI (patrimonio, con opción)', 'Opción irrevocable por instrumento', 'Dividendos en resultados; movimientos de valor razonable en otro resultado global, nunca reciclados'],
            ['FVTPL', 'Negociación, SPPI no superado, derivados, opción de valor razonable', 'Todo en resultados; costes de transacción llevados a gastos']
          ]
        },
        journal: {
          transaction: 'Compra de 1.000 en bonos corporativos a 5 años clasificados a coste amortizado (mantener para cobrar, cupones fijos que superan el SPPI).',
          lines: [
            { account: 'Activo financiero — Coste amortizado', dr: 1000, cr: null },
            { account: 'Efectivo', dr: null, cr: 1000 }
          ],
          narration: 'Reconocimiento inicial del instrumento de deuda a coste amortizado'
        },
        impact: {
          pl: 'Sin impacto en resultados en la compra (los costes de transacción, si los hay, se capitalizan en el importe en libros).',
          bs: 'Activos financieros aumentan 1.000; efectivo disminuye 1.000. Sin efecto de apalancamiento más allá del intercambio de activos.',
          cf: 'Salida de efectivo por inversión de 1.000.'
        }
      },
      {
        heading: 'Árbol de decisión: clasificación de un instrumento de deuda',
        paragraphs: [
          'Aplicar el árbol de arriba abajo para cada instrumento de deuda. El error más frecuente en la práctica es detenerse en la primera pregunta — "tenemos intención de mantenerlo" — mientras los flujos de efectivo no superan silenciosamente el SPPI por un derivado implícito o un cupón apalancado.',
          'Recordar la opción de valor razonable: incluso un instrumento que cumple los requisitos para coste amortizado o FVOCI puede designarse en FVTPL en el reconocimiento inicial si ello elimina o reduce significativamente un desajuste contable — por ejemplo, un préstamo a tipo fijo financiado con pasivos valorados a FVTPL. La designación es irrevocable.'
        ],
        steps: [
          'Paso 1 — ¿Es un instrumento de deuda desde la perspectiva del tenedor? (El patrimonio sigue un camino separado y más simple: FVTPL por defecto con una opción irrevocable de FVOCI.)',
          'Paso 2 — ¿Cuál es el modelo de negocio: mantener para cobrar, mantener para cobrar y vender, u otro (p. ej., negociación activa)? Basarlo en cómo se gestiona realmente la cartera y se informa a la alta dirección.',
          'Paso 3 — Aplicar el test SPPI a los flujos de efectivo contractuales: ¿solo principal e intereses (valor temporal, riesgo de crédito, costes básicos de préstamo y margen)? Una opción de conversión en acciones no supera el SPPI.',
          'Paso 4 — Mapear las respuestas: mantener para cobrar + SPPI → coste amortizado; mantener para cobrar y vender + SPPI → FVOCI; cualquier otra cosa → FVTPL.',
          'Paso 5 — Considerar la opción de valor razonable: ¿la designación en FVTPL eliminaría un desajuste contable? En caso afirmativo, puede elegirse de forma irrevocable en el reconocimiento inicial.'
        ],
        callout: { type: 'example', text: 'Un bono convertible mantenido para cobrar flujos de efectivo contractuales: el modelo de negocio dice coste amortizado, pero la opción de conversión en acciones significa que los flujos de efectivo no son únicamente principal e intereses — el SPPI no se supera, por lo que todo el instrumento va a FVTPL. Un test fallido prevalece sobre un modelo de negocio perfecto.' }
      },
      {
        heading: 'Coste amortizado y tipo de interés efectivo',
        paragraphs: [
          'El coste amortizado no es simplemente "coste menos amortizaciones". Es el importe inicial, menos las amortizaciones de principal, más o menos la amortización acumulada de cualquier prima, descuento, comisiones o costes de transacción utilizando el tipo de interés efectivo — menos cualquier provisión por pérdidas. El TIE es el tipo único que descuenta exactamente los flujos de efectivo futuros esperados hasta el importe en libros inicial.',
          'El TIE es lo que hace que un préstamo de 1.000 con una comisión de originación de 50 se comporte honestamente: la inversión neta del prestamista es 950, pero los flujos de efectivo contractuales se calculan sobre 1.000, por lo que el rendimiento contable debe ser superior al cupón contractual para distribuir la comisión de 50 a lo largo de la vida del préstamo. Cada periodo, los ingresos por intereses equivalen al coste amortizado inicial multiplicado por el TIE: un rendimiento constante sobre un saldo cambiante.',
          'Para instrumentos a tipo variable, el TIE se actualiza cuando se revisa el tipo. Y crucial para el siguiente módulo: cuando un activo a coste amortizado o de deuda en FVOCI sufre deterioro crediticio (Fase 3), los intereses se reconocen sobre el importe en libros neto (bruto menos provisión por pérdidas), no sobre el importe bruto.'
        ],
        bullets: [
          'Coste amortizado = importe inicial − amortizaciones ± amortización TIE de comisiones/primas/descuentos − provisión por pérdidas.',
          'TIE = el tipo que descuenta los flujos de efectivo esperados hasta el importe en libros inicial (comisiones y costes de transacción incluidos).',
          'Ingresos por intereses cada periodo = coste amortizado inicial × TIE: un rendimiento constante, no el cupón contractual.',
          'Los activos con deterioro crediticio de Fase 3 devengan intereses sobre el importe en libros neto (tras la provisión).'
        ],
        callout: { type: 'key', text: 'El cupón contractual dice qué efectivo llega; el TIE dice qué rendimiento se ha ganado realmente sobre la inversión neta. La NIIF 9 siempre informa este último.' }
      },
      {
        heading: 'Pasivos financieros: más simple, con un matiz',
        paragraphs: [
          'Los pasivos financieros son más simples: el valor por defecto es el coste amortizado utilizando el TIE — préstamos bancarios, bonos emitidos, cuentas a pagar. Los pasivos mantenidos para negociación (incluidos los derivados) y los pasivos designados bajo la opción de valor razonable van a FVTPL, con todos los cambios en resultados.',
          'El matiz es el riesgo de crédito propio. Para un pasivo designado en FVTPL, la parte del cambio en el valor razonable atribuible a cambios en el riesgo de crédito propio de la entidad va al otro resultado global, no a resultados. Sin esta regla, una empresa cuya solvencia se deteriora registraría un beneficio a medida que cae el valor de su propia deuda — el infame "beneficio por el propio incumplimiento" que la NIIF 9 previene deliberadamente. Esos importes del otro resultado global nunca se reciclan a resultados.',
          'El reconocimiento inicial de todos los instrumentos financieros es a valor razonable. Los costes de transacción se añaden al importe en libros inicial para instrumentos a coste amortizado y FVOCI, pero se llevan a gastos inmediatamente para instrumentos en FVTPL — una regla pequeña con gran presencia en exámenes.'
        ],
        journal: {
          transaction: 'La cartera de negociación gana 80 en valor razonable durante el periodo (activo en FVTPL).',
          lines: [
            { account: 'Activo financiero — FVTPL', dr: 80, cr: null },
            { account: 'Ganancia por valor razonable (resultados)', dr: null, cr: 80 }
          ],
          narration: 'Revaloración del activo de negociación a valor razonable'
        },
        impact: {
          pl: 'Resultado aumenta 80 inmediatamente — FVTPL significa que no hay diferimiento al otro resultado global.',
          bs: 'Activos financieros aumentan 80; patrimonio neto aumenta 80 vía reservas.',
          cf: 'Sin efecto en efectivo — ganancia no realizada, revelada como ajuste no monetario en el flujo de efectivo operativo.'
        },
        callout: { type: 'warning', text: 'Nunca reciclar la opción de FVOCI para patrimonio: cuando esas acciones se venden, la ganancia acumulada en el otro resultado global permanece en el patrimonio neto (normalmente transferida a reservas). Solo la deuda en FVOCI se recicla a resultados en la enajenación.' }
      },
      {
        heading: 'Reclasificación y baja en cuentas',
        paragraphs: [
          'La reclasificación entre categorías solo se permite cuando cambia el modelo de negocio para gestionar los activos — un hecho raro, significativo y demostrable, como adquirir o enajenar una línea de negocio, no una reacción a los movimientos del mercado o un cambio de intención para un instrumento concreto. Cuando ocurre, se aplica prospectivamente desde la fecha de reclasificación; los periodos anteriores no se reexpresan.',
          'La baja en cuentas sigue la lógica de riesgos y beneficios: un activo financiero se da de baja cuando expiran los derechos contractuales sobre los flujos de efectivo o cuando el activo se transfiere y se han transferido sustancialmente todos los riesgos y beneficios (como en la mayoría de las ventas reales y titulizaciones sin recurso). Si los riesgos y beneficios se retienen — una repo, la mayoría del factoring con recurso — el activo permanece y se reconoce un pasivo por los fondos recibidos.',
          'Aquí es también donde la clasificación se encuentra con el deterioro: el modelo de pérdidas crediticias esperadas (siguiente módulo) se aplica a los activos a coste amortizado y a la deuda en FVOCI, pero nunca a FVTPL ni a los instrumentos de patrimonio en FVOCI. Las decisiones de clasificación controlan, por tanto, directamente dónde aparecen las pérdidas crediticias.'
        ],
        bullets: [
          'Reclasificar solo ante un cambio genuino del modelo de negocio; aplicación prospectiva, sin reexpresión.',
          'Dar de baja cuando expiran los derechos o se transfieren sustancialmente todos los riesgos y beneficios.',
          'Repos y factoring con recurso: el activo permanece, reconocer un pasivo financiero.',
          'El deterioro por PCE se aplica al coste amortizado y a la deuda en FVOCI — nunca a FVTPL ni al patrimonio en FVOCI.'
        ]
      },
      {
        heading: 'Por qué importa la clasificación: la visión de un profesional de las finanzas',
        paragraphs: [
          'La clasificación no es una tecnicidad contable — cambia la volatilidad del resultado informado, la composición del patrimonio neto y el margen de los covenants. Dos carteras de bonos idénticas pueden producir resultados diferentes simplemente porque una se gestiona para mantener hasta cobrar (ingresos TIE suaves) y la otra para mantener hasta cobrar y vender (volatilidad en el otro resultado global con reciclaje). La estrategia de tesorería y la clasificación contable deben diseñarse juntas.',
          'Para los analistas, la primera pregunta sobre las cuentas de cualquier entidad financiera es la composición: cuánto está en FVTPL (volatilidad del resultado), cuánto en deuda FVOCI (volatilidad del otro resultado global, reciclable) y cuánto a coste amortizado (las provisiones por PCE como juicio clave). La información a revelar sobre el modelo de negocio en las notas existe precisamente para que los lectores puedan juzgar si la clasificación refleja la realidad.'
        ],
        callout: { type: 'interview', text: 'Previsible: "Un banco mantiene una cartera de bonos que puede vender para gestión de liquidez — ¿cómo se clasifica?" Respuesta: mantener para cobrar y vender + SPPI → deuda en FVOCI. Vender por necesidades de liquidez forma parte de ese modelo de negocio, a diferencia de la negociación oportunista, y los intereses más la PCE siguen pasando por resultados.' }
      }
    ],
    mistakes: [
      'Clasificar en función de la intención para un instrumento concreto en lugar del modelo de negocio observable para la cartera.',
      'Omitir el test SPPI — cupones estructurados, apalancamiento u opciones sobre acciones lo incumplen silenciosamente y fuerzan el FVTPL.',
      'Reclasificar activos por movimientos del mercado o un cambio de opinión; solo un cambio genuino del modelo de negocio permite la reclasificación.',
      'Reciclar a resultados las ganancias de patrimonio en FVOCI al enajenar — permanecen en el patrimonio neto de forma permanente.',
      'Capitalizar los costes de transacción en instrumentos en FVTPL en lugar de llevarlos a gastos inmediatamente.',
      'Aplicar el modelo de PCE a activos en FVTPL o patrimonios en FVOCI, donde no corresponde.'
    ],
    interviewQA: [
      {
        q: 'Explicar la clasificación de un bono corporativo a 5 años de cupón fijo que el banco pretende mantener hasta el vencimiento.',
        a: 'Primero el modelo de negocio: mantener para cobrar los flujos de efectivo contractuales, evaluado a partir de cómo se gestiona la cartera. Segundo el test SPPI: los cupones fijos compensan el valor temporal, el riesgo de crédito y el margen — lo superan. Así, el bono se valora a coste amortizado, con intereses reconocidos al tipo de interés efectivo y deterioro según el modelo de PCE. Si el bono tuviera en cambio una opción de conversión en acciones, el SPPI no se superaría y todo el instrumento iría a FVTPL a pesar de la intención de mantener hasta cobrar.'
      },
      {
        q: '¿Por qué la NIIF 9 envía a otro resultado global los cambios por riesgo de crédito propio en pasivos en FVTPL?',
        a: 'Porque de otro modo una empresa en deterioro registraría un beneficio a medida que cae el valor razonable de su propia deuda — beneficio por su propio incumplimiento, económicamente perverso y ampliamente criticado bajo la NIC 39. La NIIF 9 mantiene ese componente en el otro resultado global sin reciclaje, de modo que los resultados reflejan el rendimiento operativo y de mercado, no la visión del mercado sobre las probabilidades de supervivencia del emisor. Es uno de los ejemplos más claros de la norma priorizando la información útil para la toma de decisiones sobre el valor razonable mecánico.'
      },
      {
        q: '¿Cuándo puede una empresa reclasificar activos financieros y cómo se aplica?',
        a: 'Solo cuando cambia su modelo de negocio para gestionar los activos — un hecho significativo, demostrable y raro, como adquirir, enajenar o terminar una línea de negocio. Los cambios en las condiciones del mercado, un mal trimestre o las preferencias de un nuevo director financiero no cualifican. La reclasificación se aplica prospectivamente desde la fecha de reclasificación sin reexpresar comparativas, y la información a revelar debe explicar el cambio para que los usuarios vean exactamente qué se movió y por qué.'
      }
    ],
    quiz: [
      { question: 'La NIIF 9 clasifica los activos financieros utilizando qué dos criterios?', options: ['La intención de la dirección y el tratamiento fiscal', 'El modelo de negocio y el test SPPI sobre los flujos de efectivo contractuales', 'El vencimiento y la calificación crediticia', 'El coste histórico y la jerarquía del valor razonable'], answer: 1, explanation: 'La clasificación se basa en el modelo de negocio para gestionar el activo y en si los flujos de efectivo contractuales son únicamente pagos de principal e intereses (SPPI). La intención para un activo concreto y el tratamiento fiscal son irrelevantes.', difficulty: 'Foundation', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'El test SPPI pregunta si los flujos de efectivo contractuales son:', options: ['Estables y predecibles en términos nominales', 'Pagados en la moneda funcional', 'Suficientes para cubrir el precio de compra', 'Únicamente pagos de principal e intereses sobre el principal pendiente'], answer: 3, explanation: 'SPPI = únicamente pagos de principal e intereses, donde el interés compensa el valor temporal del dinero, el riesgo de crédito, los costes básicos de préstamo y un margen de beneficio. Cualquier otra cosa (opciones sobre acciones, vinculación a materias primas) no lo supera.', difficulty: 'Intermediate', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'Un bono mantenido para cobrar flujos de efectivo contractuales, con cupones fijos que superan el SPPI, se valora a:', options: ['Coste amortizado', 'FVTPL', 'FVOCI', 'Coste histórico menos amortización'], answer: 0, explanation: 'Mantener para cobrar + SPPI conduce al coste amortizado: intereses al tipo de interés efectivo, deterioro por PCE y sin volatilidad de valor razonable en los estados.', difficulty: 'Intermediate', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'Un bono mantenido para cobrar Y vender (gestión de liquidez), con cupones que superan el SPPI, se valora a:', options: ['Coste amortizado', 'FVOCI (deuda)', 'FVTPL', 'Coste'], answer: 1, explanation: 'Mantener para cobrar y vender + SPPI da FVOCI para deuda: valor razonable en el balance, pero intereses, deterioro y diferencias de cambio siguen en resultados, con el otro resultado global acumulado reciclado a resultados en la enajenación.', difficulty: 'Intermediate', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'Un bono convertible (convertible en acciones del emisor) mantenido para cobrar flujos de efectivo se clasifica como:', options: ['Coste amortizado, por el modelo de mantener para cobrar', 'Deuda en FVOCI', 'FVTPL, porque la opción de conversión no supera el SPPI', 'Dividido en componentes de deuda y patrimonio por el tenedor'], answer: 2, explanation: 'La opción de conversión en acciones significa que los flujos de efectivo no son únicamente principal e intereses — el SPPI no se supera, por lo que todo el instrumento va a FVTPL. Un test fallido prevalece sobre el modelo de negocio.', difficulty: 'Advanced', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'Para acciones cotizadas, el tratamiento por defecto de la NIIF 9 es FVTPL, pero la empresa puede:', options: ['Elegir el coste amortizado si pretende mantenerlas a largo plazo', 'Hacer una opción irrevocable por FVOCI, con ganancias nunca recicladas a resultados', 'Clasificarlas como deuda en FVOCI', 'Valorarlas al coste si el valor razonable es volátil'], answer: 1, explanation: 'El patrimonio va a FVTPL por defecto, con una opción irrevocable de FVOCI por instrumento. Bajo la opción, los dividendos van a resultados pero los cambios en el valor razonable permanecen en el otro resultado global de forma permanente — sin reciclaje al vender.', difficulty: 'Advanced', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'La reclasificación de activos financieros entre categorías está permitida:', options: ['Siempre que la dirección cambie su intención', 'En cada fecha de cierre para activos en FVTPL', 'Solo cuando cambia el modelo de negocio para gestionar los activos, aplicada prospectivamente', 'Solo con aprobación del auditor'], answer: 2, explanation: 'La reclasificación requiere un cambio genuino y significativo del modelo de negocio (p. ej., enajenar una línea de negocio), no movimientos del mercado ni cambios de intención. Se aplica prospectivamente sin reexpresión.', difficulty: 'Advanced', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'Los costes de transacción en el reconocimiento inicial son:', options: ['Llevados a gastos para todos los instrumentos financieros', 'Capitalizados solo para pasivos', 'Añadidos siempre al fondo de comercio', 'Capitalizados para instrumentos a coste amortizado y FVOCI, llevados a gastos para FVTPL'], answer: 3, explanation: 'Los costes de transacción se incluyen en el importe en libros inicial excepto para instrumentos en FVTPL, donde se llevan a gastos inmediatamente — porque el FVTPL se revalora a valor razonable de todos modos.', difficulty: 'Intermediate', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'La valoración por defecto para pasivos financieros como los préstamos bancarios es:', options: ['Coste amortizado utilizando el tipo de interés efectivo', 'FVTPL', 'FVOCI', 'Valor nominal'], answer: 0, explanation: 'Los pasivos financieros van a coste amortizado por defecto con amortización TIE. El FVTPL se aplica a pasivos de negociación, derivados y pasivos designados bajo la opción de valor razonable.', difficulty: 'Intermediate', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'Para un pasivo designado en FVTPL, el cambio en el valor razonable debido al riesgo de crédito propio de la entidad se reconoce en:', options: ['Resultados, como todos los cambios en FVTPL', 'Otro resultado global, sin reciclaje a resultados', 'Reservas directamente', 'Resultados solo cuando se liquida el pasivo'], answer: 1, explanation: 'Los cambios por crédito propio van al otro resultado global sin reciclaje, evitando el perverso "beneficio por el propio incumplimiento" que surgiría si el deterioro de la solvencia de una empresa generara ganancias en resultados.', difficulty: 'Advanced', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'Un banco vende préstamos pero retiene sustancialmente todos los riesgos y beneficios (p. ej., una repo). El tratamiento correcto es:', options: ['Dar de baja los préstamos y reconocer una venta', 'Reclasificar los préstamos a FVTPL', 'Mantener los préstamos en el balance y reconocer un pasivo financiero', 'Netear los fondos contra los préstamos'], answer: 2, explanation: 'La baja requiere la transferencia de sustancialmente todos los riesgos y beneficios. En una repo el vendedor los retiene, por lo que el activo permanece y el efectivo recibido es un préstamo con garantía.', difficulty: 'Advanced', topic: 'Financial Instruments', skill: 'Financial Instruments' },
      { question: 'El modelo de deterioro por PCE se aplica a:', options: ['Solo activos a coste amortizado y deuda en FVOCI', 'Todos los activos financieros incluido FVTPL', 'Inversiones en patrimonio en FVOCI', 'Solo cuentas a cobrar'], answer: 0, explanation: 'La PCE se aplica a instrumentos a coste amortizado y de deuda en FVOCI (más compromisos de préstamo y garantías). Los activos en FVTPL ya reflejan el riesgo de crédito en el valor razonable, y el patrimonio en FVOCI no tiene concepto de deterioro.', difficulty: 'Intermediate', topic: 'Financial Instruments', skill: 'Financial Instruments' }
    ]
  },
  {
    id: 'm19', level: 5, levelTitle: 'Financial Instruments', title: 'Pérdidas crediticias esperadas',
    standard: 'IFRS 9', tagline: 'Dejar de esperar el impago: la NIIF 9 obliga a registrar las pérdidas crediticias antes de que ocurran.',
    description: 'El modelo de PCE sustituyó el antiguo enfoque de "esperar un hecho generador de pérdida" por provisiones prospectivas escalonadas según el deterioro crediticio. Este módulo enseña las tres fases, qué provoca el paso a pérdidas de toda la vida, el enfoque simplificado para cuentas a cobrar, y el ciclo de vida completo desde la originación hasta el impago, la baja y la recuperación.',
    minutes: 28, skills: ['Financial Instruments'],
    visuals: ['ecl-stages'],
    sections: [
      {
        heading: 'De la pérdida incurrida a la pérdida esperada',
        paragraphs: [
          'Bajo el antiguo modelo de pérdida incurrida de la NIC 39, los bancos reconocían el deterioro solo tras un hecho generador de pérdida — un pago incumplido, una declaración de quiebra. Las provisiones llegaban tarde, disparándose exactamente cuando la economía estaba más débil, lo que amplificó la crisis financiera. El G20 pidió algo mejor, y la NIIF 9 respondió con pérdidas crediticias esperadas: reconocer una provisión por pérdidas desde el primer día, basada en estimaciones prospectivas.',
          'La PCE es el valor actual ponderado por probabilidad de los déficits de efectivo — la diferencia entre los flujos de efectivo contractuales y lo que la entidad espera realmente recibir, descontados al tipo de interés efectivo original. Incorpora hechos pasados, condiciones actuales y previsiones razonables (PIB, desempleo, precios de la vivienda) sin coste ni esfuerzo indebidos.',
          'La idea estructural clave es el escalonamiento: la provisión equivale a las pérdidas esperadas a 12 meses mientras el riesgo de crédito es estable, y cambia a pérdidas esperadas de toda la vida una vez que el riesgo de crédito ha aumentado significativamente. El diagrama de flujo de fases de este módulo sigue un préstamo a lo largo de ese ciclo de vida.'
        ],
        bullets: [
          'NIC 39: reconocer tras un hecho generador de pérdida — muy poco, muy tarde.',
          'NIIF 9: reconocer las pérdidas esperadas desde la originación, actualizadas cada periodo.',
          'PCE = déficits de efectivo ponderados por probabilidad, descontados al TIE original.',
          'Visión prospectiva: incluir previsiones razonables de las condiciones económicas.'
        ],
        callout: { type: 'key', text: 'La PCE no es una predicción de que un prestatario concreto incumplirá — es una expectativa ponderada por probabilidad entre escenarios. Una PCE a 12 meses sobre un préstamo sano es pequeña pero nunca cero.' }
      },
      {
        heading: 'Las tres fases',
        paragraphs: [
          'La Fase 1 cubre activos que funcionan con normalidad sin aumento significativo del riesgo de crédito (SICR) desde el reconocimiento inicial: la provisión equivale a la PCE a 12 meses — las pérdidas por hechos de impago posibles en los próximos 12 meses, no las pérdidas durante los próximos 12 meses de la vida del préstamo. Los ingresos por intereses se calculan sobre el importe en libros bruto.',
          'La Fase 2 se activa por un SICR desde la originación: la provisión aumenta a la PCE de toda la vida — los déficits esperados durante toda la vida restante. Los intereses siguen reconociéndose sobre el importe en libros bruto. Aquí es donde las provisiones saltan materialmente, por lo que la evaluación del SICR es el área más discrecional de todo el modelo.',
          'La Fase 3 es para activos con deterioro crediticio — evidencia objetiva de impago como 90 días de mora o el prestatario en dificultades financieras. La provisión es la PCE de toda la vida, pero los ingresos por intereses cambian ahora al importe en libros neto (bruto menos provisión por pérdidas). Los activos pueden curarse: si la calidad crediticia mejora, vuelven a la Fase 2 o la Fase 1.'
        ],
        table: {
          headers: ['Fase', 'Activador', 'Provisión', 'Base de intereses'],
          rows: [
            ['Fase 1 — Normal', 'Sin SICR desde la originación', 'PCE a 12 meses', 'Importe en libros bruto'],
            ['Fase 2 — SICR', 'Aumento significativo del riesgo de crédito', 'PCE de toda la vida', 'Importe en libros bruto'],
            ['Fase 3 — Deterioro crediticio', 'Evidencia objetiva de deterioro', 'PCE de toda la vida', 'Importe en libros neto (tras la provisión)']
          ]
        },
        callout: { type: 'warning', text: 'La confusión clásica: las Fases 2 y 3 usan ambas la PCE de toda la vida, pero difieren en la base de intereses (bruto frente a neto) y en lo que provocó el cambio (aumento del riesgo frente a deterioro real). Los examinadores prueban exactamente este límite.' }
      },
      {
        heading: 'SICR: el activador que lleva a la Fase 2',
        paragraphs: [
          'Un aumento significativo del riesgo de crédito se evalúa comparando el riesgo de impago en la fecha de cierre con el riesgo en el reconocimiento inicial — es un test relativo, no absoluto. Un préstamo originado a un prestatario arriesgado que sigue igual de arriesgado no tiene SICR; una hipoteca prime cuya probabilidad de impago se duplica sí.',
          'La NIIF 9 da indicadores en lugar de una fórmula: aumento significativo de la probabilidad de impago, rebaja real o esperada de la calificación crediticia, cambios adversos en las condiciones empresariales o económicas que afectan al prestatario, incumplimiento de covenants, y aumento significativo del riesgo de crédito en otros instrumentos del mismo prestatario. Existe una presunción refutable de que 30 días de mora señalan SICR.',
          'Dos alivios importan. La exención de bajo riesgo de crédito permite que los activos de grado de inversión permanezcan en Fase 1 sin una evaluación completa del SICR. Y para el enfoque simplificado (cuentas a cobrar sin componente significativo de financiación), no hay fases en absoluto — siempre PCE de toda la vida desde la originación.'
        ],
        bullets: [
          'SICR = aumento relativo del riesgo de impago desde la originación, no un nivel absoluto de riesgo.',
          '30 días de mora: presunción refutable de SICR.',
          'Indicadores: aumento de la PD, rebajas, incumplimientos de covenants, dificultades financieras del prestatario, perspectiva adversa.',
          'Bajo riesgo de crédito (grado de inversión): puede permanecer en Fase 1.'
        ]
      },
      {
        heading: 'El flujo de fases: la vida de un préstamo paso a paso',
        paragraphs: [
          'Seguir una hipoteca de 200.000 originada al 4 % para ver las fases en movimiento. En la originación entra en Fase 1 con una PCE a 12 meses de, digamos, 1.500 — una pequeña provisión de primer día que reduce el importe en libros del préstamo inmediatamente. Cada periodo la PCE se revalora a medida que evolucionan las previsiones y el comportamiento del prestatario.',
          'Dieciocho meses después, el prestatario pierde ingresos por horas extra, incumple un pago, y la probabilidad de impago se duplica frente a la originación: se activa el SICR y el préstamo pasa a la Fase 2, donde la PCE de toda la vida podría ser 14.000. El aumento de 12.500 va a resultados de una vez — este "efecto acantilado" es la característica más dramática del modelo en resultados.',
          'Un año después, el prestatario deja de pagar por completo y el préstamo está a 90 días de mora: la evidencia objetiva de deterioro lo lleva a la Fase 3. La PCE de toda la vida es ahora 40.000 y los intereses se devengan sobre los 160.000 netos. Si el prestatario reanuda después los pagos íntegros y la mora desaparece, el préstamo puede volver a la Fase 2 o incluso a la Fase 1 — el escalonamiento no es un camino de una sola dirección.'
        ],
        steps: [
          'Paso 1 — Originación: reconocer el préstamo y una provisión de Fase 1 por la PCE a 12 meses (debe gasto por deterioro crediticio, haber provisión por pérdidas).',
          'Paso 2 — Cada fecha de cierre: reevaluar el SICR comparando el riesgo de impago actual con el de la originación; actualizar la medición de la PCE con previsiones frescas.',
          'Paso 3 — SICR identificado (p. ej., 30+ días de mora, PD duplicada): transferir a la Fase 2 y revalorar a la PCE de toda la vida; el aumento va a resultados inmediatamente.',
          'Paso 4 — Evidencia objetiva de deterioro (90 días de mora, dificultades financieras): transferir a la Fase 3; la PCE de toda la vida continúa pero los intereses cambian al importe en libros neto.',
          'Paso 5 — Resolución: dar de baja los saldos sin expectativa razonable de recuperación, o transferir de vuelta por las fases si la calidad crediticia se cura.'
        ]
      },
      {
        heading: 'Asientos contables: reconocimiento y transferencias de fase',
        paragraphs: [
          'La provisión por pérdidas es una cuenta correctora del activo presentada contra el préstamo — el estado muestra el importe en libros bruto y la provisión por separado en las notas. Los aumentos de la PCE se cargan a pérdidas por deterioro crediticio en resultados; las disminuciones (mejoras, curaciones) se abonan de vuelta por la misma línea. Las transferencias de fase no necesitan asiento más allá de revalorar la provisión a la nueva base.',
          'Continuando con el ejemplo de la hipoteca: el paso de la Fase 1 (provisión 1.500) a la Fase 2 (PCE de toda la vida 14.000) requiere una dotación adicional de 12.500. Cuando el préstamo llega después a la Fase 3 con una provisión de 40.000, se reconocen otros 26.000. Cada dotación reduce el resultado inmediatamente — no hay suavizado ni diferimiento.',
          'La información a revelar es extensa: las notas deben mostrar la provisión por pérdidas por fases, los movimientos entre fases, las variables y supuestos (incluida la información prospectiva), y cómo se determina el SICR. Para los bancos, esta nota suele ser la página más escrutada del informe anual.'
        ],
        journal: {
          transaction: 'La hipoteca pasa a la Fase 2: PCE de toda la vida 14.000 frente a la provisión existente de Fase 1 de 1.500 → dotación adicional 12.500.',
          lines: [
            { account: 'Pérdidas por deterioro crediticio (resultados)', dr: 12500, cr: null },
            { account: 'Provisión por pérdidas — Préstamos', dr: null, cr: 12500 }
          ],
          narration: 'Aumento de la provisión por pérdidas en la transferencia a la Fase 2 (PCE de toda la vida)'
        },
        impact: {
          pl: 'Resultado disminuye 12.500 en el periodo de la transferencia — el "efecto acantilado" de pasar de la PCE a 12 meses a la de toda la vida.',
          bs: 'Importe neto en libros del préstamo disminuye 12.500 (cuenta correctora aumenta); patrimonio neto disminuye 12.500 vía reservas. El préstamo bruto no cambia.',
          cf: 'Sin efecto en efectivo — la provisión es no monetaria hasta el impago real y la baja.'
        }
      },
      {
        heading: 'El enfoque simplificado: cuentas a cobrar',
        paragraphs: [
          'Para cuentas a cobrar, activos de contratos y cuentas a cobrar por arrendamientos sin un componente significativo de financiación, la NIIF 9 permite — y en algunos casos exige — el enfoque simplificado: valorar siempre la provisión por pérdidas a la PCE de toda la vida desde el reconocimiento inicial. Sin fases, sin evaluación del SICR, sin PCE a 12 meses.',
          'En la práctica se implementa con una matriz de provisiones: las cuentas a cobrar se agrupan por antigüedad (corriente, 1–30 días, 31–60, 61–90, más de 90 días de mora) y se aplica a cada tramo una tasa de pérdida histórica, ajustada por información prospectiva. Un libro de cuentas a cobrar de 10 millones podría llevar el 1 % en saldos corrientes pero el 25 % en saldos de más de 90 días.',
          'Este es el modelo de PCE que realmente usan la mayoría de las empresas no financieras. El foco de la auditoría es si las tasas históricas siguen siendo relevantes y si el ajuste prospectivo (p. ej., una recesión en el sector del cliente) es razonable — no la mecánica de las fases.'
        ],
        table: {
          headers: ['Tramo de antigüedad', 'Cuentas a cobrar brutas', 'Tasa de pérdida', 'Provisión PCE'],
          rows: [
            ['Corriente', '6.000.000', '1 %', '60.000'],
            ['1–30 días de mora', '2.000.000', '3 %', '60.000'],
            ['31–60 días de mora', '1.000.000', '8 %', '80.000'],
            ['61–90 días de mora', '500.000', '15 %', '75.000'],
            ['Más de 90 días de mora', '500.000', '25 %', '125.000'],
            ['Total', '10.000.000', '', '400.000']
          ]
        },
        callout: { type: 'example', text: 'La PCE total de toda la vida de 400.000 se reconoce desde el primer día sobre estas cuentas a cobrar — el 4 % del libro — sin concepto de Fase 1. A medida que los saldos envejecen hacia peores tramos, la provisión se dota a través de resultados.' }
      },
      {
        heading: 'Impago, baja y recuperación',
        paragraphs: [
          'La NIIF 9 presume el impago a los 90 días de mora (refutable con evidencia razonable) o antes cuando es improbable que el prestatario pague íntegramente sin recurrir a la garantía — quiebra, dificultades financieras graves o una reestructuración forzosa cualifican. El impago alimenta la evaluación de la Fase 3 y los cálculos de capital regulatorio que corren en paralelo.',
          'Una baja ocurre cuando no hay expectativa razonable de recuperar los flujos de efectivo contractuales — total o parcialmente. El activo bruto y la provisión relacionada se dan de baja juntos. Crucialmente, la baja no termina los esfuerzos de cobro: la empresa puede seguir reclamando la deuda, y cualquier recuperación posterior se reconoce en resultados (normalmente como abono a pérdidas por deterioro).',
          'Las bajas parciales son habituales: un préstamo de 200.000 con una provisión de 150.000 podría reducirse en 100.000 donde la recuperación de esa parte es imposible, dejando un activo neto de 100.000 aún en reclamación. La disciplina es que la baja refleja la realidad económica, no una decisión de perdonar.'
        ],
        journal: {
          transaction: 'Baja de 100.000 de un préstamo sin expectativa razonable de recuperación (provisión ya de 150.000).',
          lines: [
            { account: 'Provisión por pérdidas — Préstamos', dr: 100000, cr: null },
            { account: 'Préstamo a cobrar (bruto)', dr: null, cr: 100000 }
          ],
          narration: 'Baja parcial del saldo irrecuperable del préstamo'
        },
        impact: {
          pl: 'Sin impacto en resultados si la provisión ya cubría el importe — la pérdida se reconoció cuando se registró la PCE. Las bajas infraprovisionadas van a resultados aquí.',
          bs: 'Préstamo bruto y provisión disminuyen 100.000; el importe en libros neto no cambia.',
          cf: 'Sin efecto en efectivo en la baja. Cualquier recuperación posterior en efectivo se reconoce en resultados y como entrada de efectivo operativa.'
        },
        callout: { type: 'interview', text: 'Los entrevistadores indagan en las bajas para comprobar si se entiende el momento: el dolor en resultados de una baja suele haber ocurrido trimestres antes, cuando se reconoció la PCE. Una baja sin impacto en resultados es señal de que la provisión funcionó — no de que nada se perdió.' }
      }
    ],
    mistakes: [
      'Usar la PCE a 12 meses tras un SICR — las Fases 2 y 3 siempre requieren la PCE de toda la vida.',
      'Tratar el SICR como un test de riesgo absoluto en lugar de comparar el riesgo de impago con el reconocimiento inicial.',
      'Reconocer intereses sobre el importe bruto para activos de Fase 3 en lugar del importe en libros neto.',
      'Aplicar el modelo de tres fases a cuentas a cobrar en lugar del enfoque simplificado de PCE de toda la vida.',
      'Suponer que una baja termina la historia — las recuperaciones tras la baja se reconocen en resultados.',
      'Ignorar la información prospectiva y registrar la PCE solo con tasas de pérdida históricas.'
    ],
    interviewQA: [
      {
        q: 'Explicar la diferencia entre la PCE a 12 meses y la PCE de toda la vida, y cuándo se aplica cada una.',
        a: 'La PCE a 12 meses es la parte de las pérdidas esperadas de toda la vida derivada de hechos de impago posibles dentro de los 12 meses desde la fecha de cierre — no son las pérdidas esperadas durante los próximos 12 meses de flujos de efectivo. Se aplica en la Fase 1, donde no ha habido aumento significativo del riesgo de crédito desde la originación. La PCE de toda la vida cubre los déficits esperados durante toda la vida restante y se aplica en la Fase 2 (SICR) y la Fase 3 (deterioro crediticio). El cambio de 12 meses a toda la vida es lo que crea el efecto acantilado en las provisiones cuando un préstamo se deteriora.'
      },
      {
        q: '¿Qué provoca el paso de la Fase 1 a la Fase 2, y por qué es tan discrecional?',
        a: 'Un aumento significativo del riesgo de crédito desde el reconocimiento inicial — evaluado comparando el riesgo actual de impago con el riesgo en la originación, un test relativo. Los indicadores incluyen mayor probabilidad de impago, rebajas de calificación, incumplimientos de covenants, y 30 días de mora como presunción refutable. Es discrecional porque "significativo" no tiene un límite preciso, la evaluación combina modelos cuantitativos con ajustes cualitativos, y el salto resultante de la PCE a 12 meses a la de toda la vida puede mover el resultado materialmente — convirtiéndolo en un área prioritaria de sesgo de la dirección y de reto de auditoría.'
      },
      {
        q: '¿En qué se diferencia el enfoque simplificado para cuentas a cobrar del modelo general?',
        a: 'No hay fases ni evaluación del SICR: la provisión por pérdidas es siempre la PCE de toda la vida desde el reconocimiento inicial. En la práctica las empresas usan una matriz de provisiones — tramos de antigüedad con tasas de pérdida históricas ajustadas por condiciones prospectivas. Existe porque las cuentas a cobrar son a corto plazo y numerosas, de modo que un aparato completo de tres fases costaría más de lo que informa. El punto clave de auditoría es si las tasas históricas y el ajuste prospectivo siguen siendo apropiados, no si se aplicó el escalonamiento.'
      }
    ],
    quiz: [
      { question: 'El cambio central del deterioro de la NIC 39 a la NIIF 9 fue:', options: ['Tipos de descuento más altos', 'De la medición de toda la vida a la de 12 meses', 'Eliminar el deterioro para los bancos', 'De la pérdida incurrida (tras un hecho generador de pérdida) a las pérdidas crediticias esperadas reconocidas desde la originación'], answer: 3, explanation: 'La NIC 39 esperaba evidencia objetiva de un hecho generador de pérdida, reconociendo muy poco y muy tarde. La NIIF 9 exige la PCE prospectiva desde el primer día, con fases a medida que cambia el riesgo de crédito.', difficulty: 'Foundation', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'Un préstamo que funciona con normalidad sin aumento significativo del riesgo de crédito desde la originación está en:', options: ['Fase 3', 'Fase 2', 'Fuera del modelo de PCE', 'Fase 1 — PCE a 12 meses'], answer: 3, explanation: 'La Fase 1 es para activos sanos sin SICR: la provisión es la PCE a 12 meses y los intereses se devengan sobre el importe en libros bruto.', difficulty: 'Foundation', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'La PCE a 12 meses significa:', options: ['Las pérdidas esperadas durante los próximos 12 meses de los flujos de efectivo del préstamo', 'Un doceavo de la PCE de toda la vida', 'Las pérdidas de toda la vida por hechos de impago posibles dentro de los próximos 12 meses', 'Las pérdidas ya incurridas en los últimos 12 meses'], answer: 2, explanation: 'La PCE a 12 meses es la parte de las pérdidas crediticias esperadas de toda la vida derivada de hechos de impago posibles en los próximos 12 meses — una porción ponderada por probabilidad de las pérdidas de toda la vida, no una previsión de flujos a 12 meses.', difficulty: 'Advanced', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'La probabilidad de impago de un prestatario se duplica frente a la originación y el préstamo está a 35 días de mora. El escalonamiento correcto es:', options: ['Permanece en Fase 1 — el pago solo está ligeramente atrasado', 'Fase 2 — el SICR activa la PCE de toda la vida', 'Fase 3 — 35 días de mora significa impago', 'Baja inmediata'], answer: 1, explanation: 'PD duplicada más 30+ días de mora (la presunción refutable de SICR) es un aumento significativo del riesgo de crédito: pasar a la Fase 2 y revalorar a la PCE de toda la vida. El impago se presume a los 90 días, no a los 35.', difficulty: 'Intermediate', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'En la Fase 3, los ingresos por intereses se reconocen sobre:', options: ['El importe en libros neto (bruto menos provisión por pérdidas)', 'El importe en libros bruto, como en las Fases 1 y 2', 'Solo el efectivo recibido', 'El principal original'], answer: 0, explanation: 'Una vez que un activo tiene deterioro crediticio, los intereses se devengan sobre el importe en libros neto (amortizado) — reconocer intereses sobre dinero que no se espera recuperar sobrevaloraría los ingresos.', difficulty: 'Intermediate', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'La presunción refutable de impago de la NIIF 9 es:', options: ['30 días de mora', '90 días de mora o improbabilidad de pago', '180 días de mora', 'Cualquier pago incumplido'], answer: 1, explanation: 'El impago se presume a los 90 días de mora o cuando es improbable que el prestatario pague íntegramente sin recurrir a la garantía — 30 días es la presunción de SICR, un umbral diferente.', difficulty: 'Intermediate', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'Una hipoteca pasa de la Fase 1 (provisión 1.500) a la Fase 2 (PCE de toda la vida 14.000). El asiento es:', options: ['Debe provisión por pérdidas 12.500 / haber resultados 12.500', 'Sin asiento — el escalonamiento es solo información a revelar', 'Debe pérdida por deterioro crediticio 12.500 / haber provisión por pérdidas 12.500', 'Debe préstamo a cobrar 12.500 / haber efectivo 12.500'], answer: 2, explanation: 'La provisión se dota en 12.500 (14.000 − 1.500) con el aumento en resultados inmediatamente — el efecto acantilado de pasar a la PCE de toda la vida.', difficulty: 'Intermediate', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'Bajo el enfoque simplificado, las cuentas a cobrar se valoran a:', options: ['PCE de toda la vida desde el reconocimiento inicial, sin fases', 'PCE a 12 meses con fases', 'Coste amortizado sin deterioro', 'Valor razonable con cambios en resultados'], answer: 0, explanation: 'Las cuentas a cobrar sin componente significativo de financiación usan la PCE de toda la vida desde el primer día — normalmente vía una matriz de provisiones por tramo de antigüedad — sin mecánica de Fases 1/2/3.', difficulty: 'Intermediate', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'Un préstamo se da de baja porque no hay expectativa razonable de recuperación. ¿Qué afirmación es verdadera?', options: ['La pérdida en resultados siempre ocurre en la baja', 'Los esfuerzos de cobro deben cesar en la baja', 'La baja aumenta la provisión por pérdidas', 'El activo bruto y la provisión se dan de baja juntos; las recuperaciones posteriores van a resultados'], answer: 3, explanation: 'La baja da de baja el saldo bruto contra la provisión (impacto en resultados solo si estaba infraprovisionado). La gestión de cobro puede continuar, y cualquier recuperación posterior se reconoce en resultados.', difficulty: 'Advanced', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'Un préstamo de Fase 3 se cura — el prestatario reanuda los pagos íntegros y la mora desaparece. Puede:', options: ['Volver a la Fase 2 o la Fase 1 si el riesgo de crédito mejora', 'Permanecer en la Fase 3 permanentemente', 'Ser dado de baja', 'Pasar directamente a FVTPL'], answer: 0, explanation: 'El escalonamiento no es de una sola dirección: si el SICR se revierte o el deterioro crediticio se cura, el activo vuelve y la provisión se revalora a la base inferior, abonando resultados.', difficulty: 'Intermediate', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'Un bono de grado de inversión sin indicadores de SICR puede:', options: ['Omitir la PCE por completo', 'Usar el enfoque simplificado', 'Permanecer en Fase 1 bajo la exención de bajo riesgo de crédito', 'Valorarse a FVTPL para evitar la PCE'], answer: 2, explanation: 'La exención de bajo riesgo de crédito permite que los instrumentos de grado de inversión permanezcan en Fase 1 sin una evaluación completa del SICR — aunque sigue requiriéndose una (pequeña) provisión de PCE a 12 meses.', difficulty: 'Advanced', topic: 'Credit Losses', skill: 'Financial Instruments' },
      { question: 'Los déficits de efectivo de la PCE se descuentan a:', options: ['El tipo de mercado actual', 'El tipo de interés efectivo original', 'El tipo libre de riesgo', 'No se descuentan'], answer: 1, explanation: 'La PCE es el valor actual de los déficits de efectivo descontados al TIE original (o una aproximación), manteniendo la medición del deterioro coherente con la base de coste amortizado del activo.', difficulty: 'Advanced', topic: 'Credit Losses', skill: 'Financial Instruments' }
    ]
  },
  {
    id: 'm20', level: 5, levelTitle: 'Financial Instruments', title: 'Tipo de interés efectivo',
    standard: 'IFRS 9', tagline: 'El cupón dice qué efectivo llega; el tipo efectivo dice qué se ha ganado realmente.',
    description: 'Un préstamo al 6 % puede rendir fácilmente un 7,9 % una vez que comisiones, primas y costes de transacción se distribuyen a lo largo de su vida. Este módulo explica el tipo de interés efectivo — el rendimiento constante que la NIIF 9 usa para el coste amortizado — a través de un ejemplo de préstamo desarrollado, y muestra por qué el interés contable casi nunca equivale al interés contractual.',
    minutes: 18, skills: ['Financial Instruments'],
    sections: [
      {
        heading: 'Tipo contractual frente a rendimiento contable',
        paragraphs: [
          'Considerar un préstamo a 3 años: principal 1.000, interés contractual 6 % pagadero anualmente (60 al año), más una comisión de originación de 50 pagada por el prestatario por adelantado. El prestamista desembolsa 1.000 pero recibe inmediatamente 50, por lo que su inversión neta es 950 — sin embargo, los flujos de efectivo contractuales (60, 60, 1.060) se calculan sobre 1.000. Obtener esos flujos de efectivo sobre una inversión de 950 debe producir un rendimiento superior al 6 %.',
          'El tipo de interés efectivo es el tipo único que descuenta exactamente los cobros futuros esperados hasta el importe en libros inicial de 950. Resolver 950 = 60/(1+r) + 60/(1+r)² + 1.060/(1+r)³ da r ≈ 7,9 %. Esa diferencia de 1,9 puntos porcentuales es la comisión distribuida a lo largo de la vida del préstamo — y es la razón por la que los "ingresos por intereses" en los estados financieros NIIF rara vez coinciden con el cupón contractual.',
          'La imagen espejo del prestatario: su pasivo parte de 950 (fondos netos de la comisión pagada) y su coste efectivo de financiación también es 7,9 %, no el cupón del 6 %. Ambas partes amortizan la misma economía en direcciones opuestas.'
        ],
        bullets: [
          'Inversión neta 950 frente a flujos contractuales calculados sobre 1.000 → el rendimiento debe superar el cupón del 6 %.',
          'TIE ≈ 7,9 %: el tipo que descuenta los flujos de efectivo esperados hasta el importe en libros inicial de 950.',
          'La comisión de 50 no es ingreso del primer día — se distribuye a lo largo de la vida del préstamo a través del mayor rendimiento.',
          'Prestatario y prestamista usan ambos el 7,9 % sobre sus importes en libros de 950.'
        ],
        callout: { type: 'key', text: 'El tipo de interés efectivo es el tipo que descuenta exactamente los pagos o cobros futuros estimados a lo largo de la vida esperada hasta el importe en libros bruto del activo (o el coste amortizado del pasivo). Comisiones, puntos, costes de transacción, primas y descuentos están todos dentro.' }
      },
      {
        heading: 'Mecánica del coste amortizado, año a año',
        paragraphs: [
          'Cada periodo, los ingresos por intereses equivalen al coste amortizado inicial multiplicado por el TIE — un rendimiento constante del 7,9 % sobre un saldo cambiante. El efectivo recibido (60) es menor que los ingresos por intereses en los primeros años, por lo que la diferencia se acumula al importe en libros: esa acumulación es la comisión reconociéndose gradualmente.',
          'Año 1: inicial 950 × 7,9 % = 75 de ingresos por intereses; efectivo 60 recibido; coste amortizado final 950 + 75 − 60 = 965. Año 2: 965 × 7,9 % = 76; efectivo 60; final 981. Año 3: 981 × 7,9 % ≈ 78; efectivo 1.060 (60 de intereses + 1.000 de principal); final ≈ 0. Los ingresos totales por intereses durante la vida son 229 — los 180 de cupones contractuales más la comisión de 50, menos redondeo.',
          'Observar la disciplina: el ingreso total durante la vida del préstamo es idéntico se piense en cupones-más-comisión o en términos de TIE. El TIE solo controla el momento — cargando la comisión al inicio en un rendimiento constante en lugar de reconocerla toda el primer día.'
        ],
        table: {
          headers: ['Año', 'Coste amortizado inicial', 'Ingresos por intereses (7,9 %)', 'Efectivo recibido', 'Coste amortizado final'],
          rows: [
            ['1', '950', '75', '(60)', '965'],
            ['2', '965', '76', '(60)', '981'],
            ['3', '981', '78', '(1.060)', '0'],
            ['Total', '', '229', '(1.180)', '']
          ]
        },
        journal: {
          transaction: 'Originación: desembolsar préstamo de 1.000, recibir comisión de originación de 50 en efectivo — importe neto en libros 950.',
          lines: [
            { account: 'Préstamo a cobrar', dr: 950, cr: null },
            { account: 'Efectivo', dr: null, cr: 950 }
          ],
          narration: 'Préstamo reconocido por el importe neto incluida la comisión recibida (TIE ≈ 7,9 %)'
        },
        impact: {
          pl: 'Sin beneficio el primer día: la comisión de 50 se difiere al rendimiento, no se reconoce inmediatamente.',
          bs: 'Préstamo a cobrar 950 (no 1.000) — la comisión reduce el importe en libros inicial.',
          cf: 'Salida neta de efectivo por inversión de 950 (1.000 desembolsados menos 50 de comisión recibida).'
        }
      },
      {
        heading: 'Interés del Año 1: devengo frente a efectivo',
        paragraphs: [
          'Los asientos del Año 1 muestran el método TIE en funcionamiento. Primero, devengar ingresos por intereses de 75 — 15 más que el cupón de 60 — y añadirlos al importe en libros del préstamo. Después registrar el cobro en efectivo de 60 contra el préstamo. El aumento neto de 15 en el importe en libros es la primera porción de la comisión de 50 fluyendo a ingresos.',
          'Comparar con la contabilidad ingenua del cupón: 60 de ingresos y un importe en libros plano de 950 dejarían la comisión de 50 sin reconocer hasta el vencimiento (o distorsionarían el rendimiento cada año). El método TIE, en cambio, informa una rentabilidad real del 7,9 % sobre el dinero realmente en riesgo cada periodo — el número que un responsable de tesorería querría para medir el rendimiento.',
          'Para el prestatario, los asientos son espejo: gasto por intereses de 75 devengado al pasivo, 60 pagados en efectivo, pasivo que crece en 15. Mismo tipo, misma economía, lados opuestos.'
        ],
        journal: {
          transaction: 'Año 1: devengar ingresos por intereses al TIE (950 × 7,9 % = 75), después recibir el cupón de 60 en efectivo.',
          lines: [
            { account: 'Préstamo a cobrar', dr: 75, cr: null },
            { account: 'Ingresos por intereses (resultados)', dr: null, cr: 75 }
          ],
          narration: 'Interés del Año 1 al tipo efectivo 7,9 % (cupón 60 + amortización de comisión 15)'
        },
        impact: {
          pl: 'Ingresos por intereses 75 frente a cupón en efectivo de 60 — la diferencia de 15 es amortización de la comisión reconocida a través del rendimiento.',
          bs: 'El importe en libros del préstamo sube a 1.025 antes del cobro en efectivo, después baja a 965 tras recibir los 60.',
          cf: 'Sin efecto en efectivo en el devengo; el cobro de 60 es una entrada de efectivo por inversión (u operativa, según la política de la entidad para un prestamista).'
        },
        callout: { type: 'warning', text: 'La diferencia de 15 entre ingresos (75) y efectivo (60) no es un error — es el objetivo. Si los ingresos por intereses siempre igualaran el cupón, las comisiones nunca se reconocerían y los rendimientos estarían distorsionados.' }
      },
      {
        heading: 'Qué entra en el cálculo del TIE',
        paragraphs: [
          'La NIIF 9 es explícita: el cálculo del TIE incluye todas las comisiones y puntos pagados o recibidos entre las partes del contrato que sean parte integrante del tipo de interés efectivo, más los costes de transacción, primas y descuentos. Las comisiones de originación, las comisiones de compromiso (cuando el desembolso es probable) y los costes directos de intermediación ajustan el importe en libros inicial y, por tanto, el rendimiento.',
          'Lo que queda fuera: las pérdidas crediticias futuras no se incluyen en el TIE para activos que no se compran u originan con deterioro crediticio (el TIE se calcula sobre los flujos de efectivo contractuales, con la PCE gestionada por separado vía la provisión por pérdidas). Los pagos anticipados esperados pueden incluirse si pueden estimarse con fiabilidad; en caso contrario se usa la vida contractual.',
          'Para instrumentos a tipo variable, el TIE no queda fijado en el inicio — se recalcula cuando se revisa el tipo contractual, de modo que el importe en libros sigue el nuevo tipo de mercado. Y cuando se revisan los flujos de efectivo estimados (p. ej., una condonación de comisión), el coste amortizado se recalcula descontando los flujos revisados al TIE original, con el ajuste reconocido inmediatamente en resultados.'
        ],
        bullets: [
          'Incluido: comisiones de originación, puntos integrantes, costes de transacción, primas/descuentos.',
          'Excluido: pérdidas crediticias futuras esperadas (la PCE va por separado), salvo que el activo se compre con deterioro crediticio.',
          'Préstamos a tipo variable: TIE actualizado en cada fecha de revisión.',
          'Estimaciones de flujos revisadas: recalcular el coste amortizado al TIE original; la diferencia va a resultados inmediatamente.'
        ]
      },
      {
        heading: 'El TIE en la práctica: por qué importa a los equipos financieros',
        paragraphs: [
          'El TIE es el puente entre la economía del acuerdo y el ingreso informado. Un equipo hipotecario que cotiza el 6 % mientras cobra 2 puntos de comisiones está ganando realmente cerca del 8 % sobre el efectivo desplegado en los primeros años — el TIE revela la rentabilidad real sobre el capital y fija correctamente el precio del siguiente acuerdo. Distorsionarlo distorsiona tanto la rentabilidad como el tipo de descuento del deterioro, ya que los déficits de la PCE se descuentan al TIE original.',
          'Puntos de fallo habituales: reconocer las comisiones de originación como ingreso del primer día (anticipar el beneficio), olvidar incluir los costes de transacción en el rendimiento, y usar el tipo contractual para descontar los déficits de la PCE en lugar del TIE. Cada uno distorsiona el momento de los ingresos que el método TIE existe para acertar.',
          'Para los analistas, comparar los márgenes netos de intereses entre bancos exige saber cuán agresivamente reconoce cada uno las comisiones — dos bancos con cupones idénticos pueden informar ingresos por intereses diferentes puramente por los perfiles de amortización de comisiones.'
        ],
        callout: { type: 'interview', text: 'Previsible: "Un banco cobra una comisión de 50 en un préstamo de 1.000 al 6 % — ¿cuáles son los ingresos por intereses en el Año 1?" Recorrer: inversión neta 950, TIE ≈ 7,9 %, ingresos = 950 × 7,9 % = 75, no 60. Después explicar que los 15 son amortización de la comisión y que el ingreso total de la vida es 229 (180 de cupones + 50 de comisión).' }
      }
    ],
    mistakes: [
      'Reconocer las comisiones de originación como ingreso del primer día en lugar de distribuirlas a través del TIE.',
      'Usar el cupón contractual (6 %) como rendimiento contable en lugar del TIE (7,9 %).',
      'Excluir los costes de transacción y las comisiones integrantes del importe en libros inicial y del cálculo del rendimiento.',
      'Descontar los déficits de efectivo de la PCE al tipo de mercado o al cupón en lugar del TIE original.',
      'Fijar el TIE para siempre en préstamos a tipo variable en lugar de actualizarlo en las fechas de revisión.',
      'Incluir las pérdidas crediticias futuras esperadas en el TIE para activos ordinarios (sin deterioro crediticio).'
    ],
    interviewQA: [
      {
        q: 'Un préstamo de 1.000 al 6 % lleva una comisión de originación de 50. ¿Por qué el rendimiento contable no es 6 %?',
        a: 'Porque la inversión neta del prestamista es 950 tras la comisión, mientras que los flujos de efectivo contractuales de 60 al año más 1.000 al vencimiento se calculan sobre 1.000. El tipo de interés efectivo — el tipo que descuenta esos flujos hasta 950 — es aproximadamente 7,9 %. Los ingresos por intereses de cada año son el coste amortizado inicial por 7,9 %, por lo que el Año 1 muestra 75 de ingresos contra 60 de efectivo, siendo la diferencia de 15 la comisión amortizada a través del rendimiento. El ingreso total de la vida es 229: los 180 de cupones más la comisión de 50.'
      },
      {
        q: '¿Qué ocurre con el coste amortizado cuando se revisan los flujos de efectivo esperados a mitad de vida?',
        a: 'La entidad recalcula el importe en libros descontando los flujos de efectivo estimados revisados al tipo de interés efectivo original, y reconoce la diferencia inmediatamente en resultados. El TIE original se preserva porque representa el rendimiento acordado al inicio; solo cambian las estimaciones de flujos. Este ajuste de puesta al día es cómo las condonaciones de comisiones, los calendarios de pago reestructurados y las expectativas revisadas de pago anticipado fluyen a través del modelo de coste amortizado sin reexpresar periodos anteriores.'
      }
    ],
    quiz: [
      { question: 'El tipo de interés efectivo se define como:', options: ['El tipo de cupón contractual del préstamo', 'El tipo base del banco central más un margen', 'El interés total dividido por el plazo del préstamo', 'El tipo que descuenta exactamente los flujos de efectivo futuros estimados hasta el importe en libros inicial'], answer: 3, explanation: 'El TIE es la tasa interna de rentabilidad que iguala los pagos/cobros esperados con el importe en libros inicial — es la definición que hace funcionar la amortización de comisiones y descuentos.', difficulty: 'Foundation', topic: 'Interest', skill: 'Financial Instruments' },
      { question: 'Un préstamo a 3 años de 1.000 al 6 % tiene una comisión de originación de 50 recibida por adelantado. El TIE es aproximadamente:', options: ['6,0 % — el tipo contractual', '7,9 % — por encima del cupón, porque 950 de inversión neta ganan flujos calculados sobre 1.000', '5,0 % — neto de la comisión', '9,0 % — el doble del diferencial de la comisión'], answer: 1, explanation: 'La inversión neta es 950; descontar los flujos (60, 60, 1.060) hasta 950 requiere alrededor del 7,9 %. La comisión eleva el rendimiento por encima del cupón — nunca es ingreso del primer día.', difficulty: 'Intermediate', topic: 'Interest', skill: 'Financial Instruments' },
      { question: '¿Por qué el TIE supera el tipo contractual cuando se recibe una comisión de originación?', options: ['Porque las comisiones se añaden al cupón', 'Por el riesgo de crédito', 'Por la inflación', 'Porque los mismos flujos de efectivo se ganan sobre una inversión neta menor, por lo que el rendimiento debe ser mayor'], answer: 3, explanation: 'El rendimiento es retorno sobre el dinero realmente invertido. La comisión de 50 significa que solo 950 están en riesgo mientras los flujos se calculan sobre 1.000 — la matemática de un denominador menor fuerza un tipo mayor.', difficulty: 'Intermediate', topic: 'Interest', skill: 'Financial Instruments' },
      { question: '¿Qué partidas se incluyen en el cálculo del TIE?', options: ['Comisiones, puntos, costes de transacción, primas y descuentos integrantes del préstamo', 'Solo el cupón contractual', 'Las pérdidas crediticias futuras esperadas', 'Los costes operativos del departamento de préstamos'], answer: 0, explanation: 'La NIIF 9 incluye en el TIE todas las comisiones integrantes, puntos, costes de transacción, primas y descuentos. Las pérdidas crediticias futuras se gestionan por separado a través de la PCE, no integradas en el rendimiento.', difficulty: 'Intermediate', topic: 'Interest', skill: 'Financial Instruments' },
      { question: 'En el Año 1 del ejemplo (inicial 950, TIE 7,9 %, cupón 60), los ingresos por intereses son:', options: ['60 — el cupón en efectivo', '50 — la comisión', '75 — coste amortizado inicial × TIE', '110 — cupón más comisión'], answer: 2, explanation: 'Ingresos por intereses = 950 × 7,9 % = 75. El exceso de 15 sobre el cupón de 60 es la primera porción de amortización de la comisión acumulada al importe en libros.', difficulty: 'Intermediate', topic: 'Interest', skill: 'Financial Instruments' },
      { question: 'En la originación del préstamo (desembolsar 1.000, recibir comisión de 50), el asiento correcto es:', options: ['Debe préstamo 1.000 / haber efectivo 1.000; haber ingreso por comisión 50', 'Debe préstamo a cobrar 950 / haber efectivo 950 (la comisión reduce el importe en libros inicial)', 'Debe efectivo 50 / haber ingreso por comisión 50 inmediatamente', 'Sin asiento hasta la primera amortización'], answer: 1, explanation: 'La comisión forma parte del rendimiento, por lo que el préstamo se reconoce por los 950 netos. Abonar 50 a ingresos del primer día anticiparía un beneficio que pertenece a toda la vida del préstamo.', difficulty: 'Advanced', topic: 'Interest', skill: 'Financial Instruments' },
      { question: 'Para un préstamo a tipo variable, el TIE es:', options: ['Recalculado cuando se revisa el tipo contractual', 'Fijo para siempre al tipo de inicio', 'Sustituido por el cupón cada periodo', 'Fijado al tipo de mercado en cada cierre anual'], answer: 0, explanation: 'Los instrumentos a tipo variable actualizan su TIE en cada fecha de revisión para que el importe en libros siga el nuevo tipo contractual — a diferencia de los préstamos a tipo fijo, donde el TIE original queda fijado.', difficulty: 'Advanced', topic: 'Interest', skill: 'Financial Instruments' },
      { question: 'Cuando se revisan los flujos de efectivo estimados en un activo a coste amortizado, la entidad:', options: ['Reexpresa periodos anteriores', 'Cambia el TIE para mantener plano el importe en libros', 'Recalcula el coste amortizado usando el TIE original y registra la diferencia en resultados inmediatamente', 'Ignora la revisión hasta el vencimiento'], answer: 2, explanation: 'El enfoque de puesta al día: descontar los flujos revisados al TIE original, reconocer el ajuste en resultados de una vez. El rendimiento original se preserva; solo cambian las estimaciones.', difficulty: 'Advanced', topic: 'Interest', skill: 'Financial Instruments' },
      { question: 'Los déficits de efectivo de la PCE en un préstamo a coste amortizado se descuentan a:', options: ['El tipo de cupón contractual', 'El tipo de financiación actual de mercado', 'Cero — la PCE no se descuenta', 'El tipo de interés efectivo original'], answer: 3, explanation: 'La NIIF 9 exige descontar los déficits de la PCE al TIE original (o una aproximación), manteniendo la medición del deterioro coherente con la base de coste amortizado del activo. Usar el cupón infravaloraría la provisión.', difficulty: 'Advanced', topic: 'Interest', skill: 'Financial Instruments' }
    ]
  },
  {
    id: 'm21', level: 5, levelTitle: 'Financial Instruments', title: 'NIC 21 — Diferencias de cambio',
    standard: 'IAS 21', tagline: 'Una factura, dos tipos de cambio, y una ganancia o pérdida que nunca se facturó a nadie.',
    description: 'Una factura de 100.000 USD registrada a 1,10 y reconvertida a 1,15 crea una pérdida por diferencias de cambio de 3.952 sin ninguna transacción nueva. Este módulo enseña moneda funcional frente a moneda de presentación, por qué las partidas monetarias se reconvierten al tipo de cierre con diferencias en resultados, y en qué difiere por completo la conversión de una filial extranjera.',
    minutes: 20, skills: ['IFRS Fundamentals'],
    sections: [
      {
        heading: 'Tres monedas, no una',
        paragraphs: [
          'La NIC 21 trabaja con tres conceptos de moneda distintos, y confundirlos es la raíz de la mayoría de los errores de cambio. La moneda funcional es la moneda del entorno económico principal en el que opera la entidad — la que principalmente impulsa sus precios de venta y sus costes. Cada entidad tiene exactamente una moneda funcional, determinada por los hechos económicos, no por elección.',
          'La moneda de presentación es la moneda en la que se presentan los estados financieros — una elección libre (una empresa euro-funcional puede presentar en USD para sus inversores americanos). Una moneda extranjera es entonces simplemente cualquier moneda distinta de la moneda funcional. Las transacciones denominadas en moneda extranjera se convierten a la moneda funcional; convertir los estados en moneda funcional a una moneda de presentación es un paso separado y posterior con reglas diferentes.'
        ],
        bullets: [
          'Moneda funcional: la moneda del entorno económico principal — determinada por los hechos, una por entidad.',
          'Moneda de presentación: la elección de información — puede diferir de la moneda funcional.',
          'Moneda extranjera: cualquier otra distinta de la moneda funcional.',
          'Paso 1: extranjera → funcional (el núcleo de este módulo). Paso 2: funcional → presentación (reglas diferentes).'
        ],
        callout: { type: 'key', text: 'Todas las transacciones en moneda extranjera se valoran primero en la moneda funcional. La moneda de presentación solo entra en el paso final de conversión — nunca afecta cómo se registran las transacciones individuales.' }
      },
      {
        heading: 'Determinar la moneda funcional',
        paragraphs: [
          'La NIC 21 enumera indicadores primarios: la moneda que influye principalmente en los precios de venta (y el país cuyas regulaciones y fuerzas competitivas los configuran), y la moneda que influye principalmente en los costes de mano de obra, materiales y otros. Los indicadores secundarios incluyen la moneda de la financiación y de los cobros operativos retenidos.',
          'Un fabricante español que vende por toda Europa en euros, paga a personal y proveedores en euros, y se financia en euros es euro-funcional — aunque facture a algunos clientes en dólares. Pero una filial peruana que compra en soles, vende en soles, y se financia localmente es sol-funcional, aunque el grupo presente en euros. La moneda funcional sigue la economía de la operación, no la nacionalidad de la matriz.',
          'Equivocarse aquí envenena todo lo posterior: cada ganancia y pérdida de cambio, y todo el método de conversión, dependen de la moneda funcional. Solo se cambia si cambian los hechos económicos subyacentes — no es una elección de política contable que pueda alterarse por conveniencia.'
        ],
        bullets: [
          'Primarios: moneda que impulsa los precios de venta y los costes operativos.',
          'Secundarios: moneda de la financiación y de los cobros operativos retenidos.',
          'La moneda funcional de una filial se evalúa por su propia economía, no por la de la matriz.',
          'Cambiarla solo cuando cambien los hechos subyacentes — rara vez.'
        ]
      },
      {
        heading: 'Registrar la transacción: tipo de contado el primer día',
        paragraphs: [
          'Una transacción en moneda extranjera se reconoce inicialmente en la moneda funcional utilizando el tipo de cambio de contado en la fecha de la transacción. En la práctica, puede usarse un tipo medio semanal o mensual si los tipos de cambio no fluctúan significativamente — pero para transacciones materiales, se espera el tipo de contado real.',
          'Ejemplo desarrollado: una empresa euro-funcional vende mercancías por 100.000 USD cuando el tipo de contado es 1,10 USD por euro. La cuenta a cobrar y los ingresos se reconocen a 100.000 ÷ 1,10 = 90.909. Desde este momento, los 100.000 dólares adeudados son una partida monetaria — un derecho a recibir un número fijo de unidades monetarias — y se reconvertirá en cada fecha de cierre hasta su liquidación.',
          'Las partidas monetarias son el efectivo y los derechos/obligaciones de recibir o pagar un número fijo o determinable de unidades monetarias: cuentas a cobrar, cuentas a pagar, préstamos, saldos de efectivo. Las partidas no monetarias — existencias, pagos anticipados, anticipos recibidos, inversiones en patrimonio a coste — no se reconvierten.'
        ],
        journal: {
          transaction: 'Venta de mercancías por 100.000 USD; tipo de contado 1,10 USD/EUR → 90.909 reconocidos.',
          lines: [
            { account: 'Cuentas a cobrar', dr: 90909, cr: null },
            { account: 'Ingresos ordinarios', dr: null, cr: 90909 }
          ],
          narration: 'Venta de 100.000 USD convertida al tipo de contado 1,10 en la fecha de la transacción'
        },
        impact: {
          pl: 'Ingresos ordinarios 90.909 al tipo de la fecha de la transacción. Aún sin ganancia o pérdida de cambio.',
          bs: 'Activo monetario (cuenta a cobrar) de 90.909; patrimonio neto aumenta vía reservas.',
          cf: 'Sin efecto en efectivo hasta que el cliente pague.'
        },
        callout: { type: 'example', text: 'La convención de cotización importa: 1,10 USD por EUR significa que cada euro compra 1,10 dólares, por lo que 100.000 dólares se convierten en menos euros: 100.000 ÷ 1,10 = 90.909. Comprobar siempre en qué sentido va la cotización antes de dividir.' }
      },
      {
        heading: 'Cierre del ejercicio: las partidas monetarias se reconvierten',
        paragraphs: [
          'En cada fecha de cierre, las partidas monetarias en moneda extranjera se reconvierten al tipo de cierre, y las diferencias de cambio resultantes se reconocen en resultados. Continuando el ejemplo: al cierre el tipo es 1,15 USD por euro, por lo que la cuenta a cobrar de 100.000 USD vale ahora 100.000 ÷ 1,15 = 86.957. El euro se fortaleció, el derecho en dólares compra menos euros, y la diferencia de 3.952 es una pérdida por diferencias de cambio en resultados.',
          'Esta pérdida es economía real, no una ficción contable: la empresa recibirá genuinamente menos euros de los registrados. Si el euro se hubiera debilitado en cambio (digamos a 1,05), la cuenta a cobrar habría subido a 95.238 y una ganancia de 4.329 habría ido a resultados. Cada saldo monetario abierto en moneda extranjera se revaloriza así — cuentas a cobrar, cuentas a pagar, préstamos, y el propio efectivo en moneda extranjera.',
          'Las partidas no monetarias a coste histórico no se reconvierten — permanecen al tipo de la fecha de la transacción. Un anticipo en USD pagado a un proveedor (un derecho a recibir mercancías, no moneda) conserva su importe original en euros. El error clásico es reconvertir pagos anticipados e ingresos diferidos como si fueran monetarios.'
        ],
        journal: {
          transaction: 'Reconversión al cierre: 100.000 USD al tipo de cierre 1,15 → 86.957; antes 90.909 → pérdida 3.952.',
          lines: [
            { account: 'Diferencias de cambio (resultados)', dr: 3952, cr: null },
            { account: 'Cuentas a cobrar', dr: null, cr: 3952 }
          ],
          narration: 'Reconversión de la cuenta a cobrar monetaria en USD al tipo de cierre 1,15'
        },
        impact: {
          pl: 'Pérdida por diferencias de cambio de 3.952 en resultados (normalmente dentro de gastos operativos o financieros según la política de presentación). Resultado disminuye sin nueva transacción.',
          bs: 'Cuenta a cobrar disminuye a 86.957; patrimonio neto disminuye 3.952 vía reservas.',
          cf: 'Sin efecto en efectivo — no realizada. Se revierte o cristaliza cuando se recibe el efectivo.'
        },
        callout: { type: 'warning', text: 'Monetaria → reconvertir al tipo de cierre, diferencias en resultados. No monetaria a coste → congelada al tipo histórico. Anticipos, pagos anticipados e ingresos diferidos son no monetarios — reconvertirlos es uno de los errores más comunes de la NIC 21.' }
      },
      {
        heading: 'Liquidación: cristalizar la diferencia',
        paragraphs: [
          'Cuando la cuenta a cobrar se liquida finalmente, cualquier diferencia de cambio entre el último importe en libros y el efectivo recibido también va a resultados. Supongamos que el cliente paga los 100.000 USD cuando el tipo es 1,12: el efectivo recibido es 89.286, contra un importe en libros de 86.957 — una ganancia por diferencias de cambio de 2.329 en resultados en la liquidación.',
          'En todo el ciclo de vida, el efecto total en resultados es simplemente efectivo recibido menos ingresos originalmente reconocidos: 89.286 − 90.909 = −1.623, dividido en la pérdida de −3.952 al cierre y la ganancia de +2.329 en la liquidación. Los asientos intermedios de reconversión nunca cambian el total — solo lo distribuyen entre periodos.',
          'La presentación neta es estándar: las ganancias y pérdidas de cambio de la misma clase de partidas se presentan normalmente netas, y la NIC 21 exige revelar el total de diferencias de cambio reconocidas en resultados.'
        ],
        bullets: [
          'Las diferencias en la liquidación van a resultados, como las reconversiones al cierre.',
          'Efecto total de cambio en la vida = efectivo finalmente recibido − importe originalmente reconocido.',
          'Las reconversiones intermedias solo distribuyen ese total entre periodos de información.',
          'Revelar el total de diferencias de cambio reconocidas en resultados.'
        ]
      },
      {
        heading: 'Convertir una operación extranjera: un juego diferente',
        paragraphs: [
          'Convertir los estados financieros completos de una filial extranjera a la moneda de presentación usa el método del tipo de cierre, y sus reglas son deliberadamente diferentes de la reconversión de transacciones. Activos y pasivos se convierten al tipo de cierre, ingresos y gastos a los tipos de las fechas de las transacciones (tipos medios en la práctica), y todas las diferencias de cambio resultantes van a otro resultado global — acumuladas en una reserva de conversión — no a resultados.',
          'La lógica: la inversión de la matriz en la filial es una inversión neta cuyo valor fluctúa con los tipos de cambio, pero esas fluctuaciones no están realizadas hasta la enajenación. Enviarlas por resultados inyectaría ruido de cambio en el rendimiento operativo cada periodo. En la enajenación de la operación extranjera, la reserva de conversión acumulada se recicla a resultados como parte de la ganancia o pérdida en la enajenación.',
          'Contrastar con el ejemplo de la factura: una cuenta a cobrar monetaria reconvertida al tipo de cierre va a resultados inmediatamente, mientras que los activos netos de una filial convertidos al tipo de cierre van a otro resultado global. Mismo tipo de cierre, estado opuesto — porque una es una transacción en moneda extranjera y la otra es una conversión de presentación.'
        ],
        table: {
          headers: ['Partida', 'Transacción (extranjera → funcional)', 'Conversión (funcional → presentación)'],
          rows: [
            ['Cuenta a cobrar/pagar monetaria', 'Tipo de cierre; diferencia en resultados', 'Tipo de cierre; diferencia en otro resultado global'],
            ['No monetaria a coste', 'Tipo histórico; sin reconversión', 'Tipo de cierre (todo el balance al cierre)'],
            ['Cuenta de resultados', 'Tipo de contado en la fecha de la transacción', 'Tipos de fecha de transacción / medios'],
            ['Dónde van las diferencias', 'Resultados', 'Reserva de conversión en otro resultado global; reciclada en la enajenación']
          ]
        },
        callout: { type: 'interview', text: 'La trampa favorita de las entrevistas: "¿Por qué el cambio en una cuenta a cobrar en USD va a resultados pero el cambio al convertir una filial americana va a otro resultado global?" Respuesta: la cuenta a cobrar es una transacción en moneda extranjera liquidada en efectivo — una ganancia/pérdida económica realizada o cercana en la moneda funcional. La conversión de la filial es un ejercicio de presentación sobre una inversión neta; la ganancia no está realizada hasta que se vende la filial, por lo que espera en otro resultado global.' }
      }
    ],
    mistakes: [
      'Registrar transacciones extranjeras directamente en la moneda de presentación en lugar de la moneda funcional.',
      'Reconventir partidas no monetarias (anticipos, pagos anticipados, ingresos diferidos) al tipo de cierre.',
      'Llevar las diferencias de cambio de transacciones a otro resultado global — pertenecen a resultados (el otro resultado global es solo para coberturas de inversión neta y conversión de presentación).',
      'Usar un tipo medio para una transacción material en un día en que el tipo se movió significativamente.',
      'Olvidar reconvertir los saldos de efectivo en moneda extranjera — el efectivo también es una partida monetaria.',
      'Reciclar la reserva de conversión antes de enajenar realmente la operación extranjera.'
    ],
    interviewQA: [
      {
        q: 'Una empresa euro-funcional tiene una cuenta a cobrar de 100.000 USD registrada a 1,10. Al cierre el tipo es 1,15. Explicar el proceso.',
        a: 'La cuenta a cobrar es una partida monetaria, por lo que se reconvierte al tipo de cierre: 100.000 ÷ 1,15 = 86.957, desde 90.909 — una pérdida por diferencias de cambio de 3.952 reconocida en resultados. El euro se fortaleció, por lo que el derecho en dólares se convierte en menos euros. No hay efecto en efectivo; la pérdida se revierte o cristaliza en la liquidación. Si el tipo se hubiera movido al contrario, a 1,05, se registraría una ganancia de 4.329. Los juicios clave son la dirección del tipo y recordar que las partidas monetarias se reconvierten mientras que las no monetarias a coste no.'
      },
      {
        q: '¿Cómo se determina la moneda funcional de una entidad, y puede la dirección simplemente elegirla?',
        a: 'No — se determina por los hechos económicos, no por elección. Los indicadores primarios son la moneda que influye principalmente en los precios de venta y la moneda que influye principalmente en los costes de mano de obra, materiales y otros, con la financiación y los cobros retenidos como indicadores secundarios. Una filial se evalúa por su propia economía: una operación peruana basada en soles es sol-funcional incluso con una matriz en euros. Solo cambia cuando cambian los hechos subyacentes, lo que es raro — alterarla para gestionar los resultados informados sería una incorrección grave.'
      }
    ],
    quiz: [
      { question: 'La moneda funcional es:', options: ['La moneda elegida para presentar los estados financieros', 'La moneda del entorno económico principal en el que opera la entidad', 'Siempre la moneda de la matriz', 'La moneda de la transacción más grande'], answer: 1, explanation: 'La moneda funcional se determina por los hechos económicos — principalmente las monedas que impulsan los precios de venta y los costes — no por elección de la dirección ni por la moneda de la matriz.', difficulty: 'Foundation', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' },
      { question: 'Una empresa euro-funcional vende mercancías por 100.000 USD a un tipo de contado de 1,10 USD/EUR. Los ingresos se reconocen a:', options: ['100.000 USD', '110.000 (100.000 × 1,10)', 'El tipo de cierre del ejercicio', '90.909 (100.000 ÷ 1,10)'], answer: 3, explanation: 'Las transacciones en moneda extranjera se registran inicialmente en la moneda funcional al tipo de contado en la fecha de la transacción: 100.000 ÷ 1,10 = 90.909.', difficulty: 'Intermediate', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' },
      { question: 'Al cierre el tipo es 1,15 USD/EUR. La cuenta a cobrar de 100.000 USD se reconvierte a:', options: ['86.957, con una pérdida de 3.952 en resultados', '90.909 — el coste histórico nunca cambia', '86.957, con la diferencia en otro resultado global', '95.238, con una ganancia en resultados'], answer: 0, explanation: 'Las partidas monetarias se reconvierten al tipo de cierre: 100.000 ÷ 1,15 = 86.957. El euro se fortaleció, por lo que la pérdida de 3.952 (90.909 − 86.957) se reconoce en resultados.', difficulty: 'Intermediate', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' },
      { question: 'Si el euro se hubiera debilitado a 1,05 en cambio, el efecto al cierre sería:', options: ['Una pérdida de 3.952 en resultados', 'Sin asiento — las ganancias no se reconocen', 'Una ganancia de 4.329 en resultados (95.238 − 90.909)', 'Una ganancia en otro resultado global'], answer: 2, explanation: '100.000 ÷ 1,05 = 95.238, que supera el importe en libros de 90.909: una ganancia por diferencias de cambio de 4.329 en resultados. Las ganancias y pérdidas de cambio en partidas monetarias son simétricas en resultados.', difficulty: 'Intermediate', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' },
      { question: 'Un anticipo en USD pagado a un proveedor (por mercancías futuras) al cierre debe:', options: ['Reconventirse al tipo de cierre como una cuenta a cobrar', 'Darse de baja', 'Mantenerse al tipo histórico — es no monetario', 'Revalorarse a valor razonable'], answer: 2, explanation: 'Un anticipo por mercancías es un derecho a recibir mercancías, no moneda — es no monetario y permanece al tipo de la fecha de la transacción. Solo las partidas monetarias (importes fijos de moneda) se reconvierten.', difficulty: 'Advanced', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' },
      { question: 'Las diferencias de cambio al liquidar una cuenta a pagar en moneda extranjera se reconocen en:', options: ['Otro resultado global', 'Resultados', 'Reservas directamente', 'Contra el activo relacionado'], answer: 1, explanation: 'Tanto las reconversiones al cierre como las diferencias en la liquidación de partidas monetarias van a resultados. El otro resultado global se reserva para la conversión de presentación y las coberturas de inversión neta que cualifiquen.', difficulty: 'Intermediate', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' },
      { question: 'Al convertir una filial extranjera a la moneda de presentación, las diferencias de cambio van a:', options: ['Resultados inmediatamente', 'Fondo de comercio', 'No se reconocen', 'Otro resultado global, acumuladas en una reserva de conversión y recicladas en la enajenación'], answer: 3, explanation: 'El método de conversión al tipo de cierre envía las diferencias a otro resultado global porque reflejan movimientos no realizados en la inversión neta. Solo se reciclan a resultados cuando se enajena la operación extranjera.', difficulty: 'Advanced', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' },
      { question: 'Bajo el método de conversión de presentación, la cuenta de resultados de la filial se convierte a:', options: ['Tipos de cambio en las fechas de las transacciones (tipos medios en la práctica)', 'El tipo de cierre', 'El tipo histórico', 'El tipo de la moneda funcional de la matriz'], answer: 0, explanation: 'Ingresos y gastos usan tipos de fecha de transacción (medias como expediente práctico), mientras que activos y pasivos usan el tipo de cierre — el desajuste es exactamente lo que crea la diferencia de conversión en otro resultado global.', difficulty: 'Advanced', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' },
      { question: 'Una empresa mantiene 50.000 USD en una cuenta bancaria en moneda extranjera al cierre. Debe:', options: ['Reconventirlos al tipo de cierre con la diferencia en resultados', 'Mantenerlos al tipo histórico — el efectivo no se reconvierte', 'Convertirlos al tipo medio del año', 'Revelarlos pero no reconvertir'], answer: 0, explanation: 'El efectivo es la más monetaria de las partidas monetarias — un importe fijo de moneda. Los saldos de efectivo en moneda extranjera se reconvierten al tipo de cierre con diferencias en resultados.', difficulty: 'Intermediate', topic: 'Foreign Exchange', skill: 'IFRS Fundamentals' }
    ]
  }
];
