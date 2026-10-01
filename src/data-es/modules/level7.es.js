// Level 7 — Financial Reporting Operations (m26–m30)
export default [
  {
    id: 'm26', level: 7, levelTitle: 'Financial Reporting Operations', title: 'Cierre mensual',
    standard: 'Operations', tagline: 'El cierre es donde la contabilidad se gana su credibilidad — o la pierde.',
    description: 'El cierre mensual convierte un mes de transacciones en cifras en las que la dirección puede confiar. Este módulo profundiza: el calendario del cierre, el corte de operaciones y los devengos, los pagos anticipados y la amortización, las conciliaciones de bancos/cuentas a pagar/cuentas a cobrar/intercompañía, las nóminas, la revalorización de moneda extranjera, las provisiones y la revisión por la dirección que lo aprueba todo — organizado como una lista práctica que se puede ejecutar de verdad.',
    minutes: 26, skills: ['Month-End Closing'],
    sections: [
      {
        heading: 'Por qué importa el cierre',
        paragraphs: [
          'Cada cifra del informe de gestión mensual — ingresos, margen, fondo de maniobra — vale lo que vale el cierre que la respalda. Un cierre descuidado lleva a decidir sobre ficción: bonus pagados sobre un resultado inflado, previsiones de tesorería construidas sobre saldos bancarios sin conciliar, y el auditor encontrando los errores que se deberían haber detectado. Un cierre disciplinado, en cambio, es el producto principal del equipo financiero.',
          'El cierre tiene tres objetivos: integridad (todo lo que pertenece al mes está dentro), exactitud (está medido correctamente) y corte de operaciones (nada del mes siguiente se ha colado dentro, nada de este mes se ha escapado fuera). La rapidez también importa — un cierre perfecto entregado el día 20 no sirve para gestionar el negocio — por eso el cierre se ejecuta como una lista de tareas con responsables y plazos, no como un acto heroico.'
        ],
        callout: { type: 'key', text: 'El cierre responde a tres preguntas: ¿está todo dentro?, ¿está bien?, ¿está en el periodo correcto? La rapidez es la cuarta: las cifras tardías son decoración.' }
      },
      {
        heading: 'El calendario del cierre: una lista práctica',
        paragraphs: [
          'Un cierre fiable es un plan de proyecto, no un estado de ánimo. El calendario siguiente es el ritmo típico día a día de una empresa mediana que cierra en «día 5» — cinco días laborables después del cierre del mes. Cada línea tiene un responsable y un plazo; el controller dirige una breve reunión diaria durante la semana del cierre para seguir lo hecho, lo bloqueado y lo retrasado.'
        ],
        steps: ['Día 1 — Congelar los submódulos: se cierran las cuentas a pagar, las cuentas a cobrar y el inmovilizado; ningún apunte más al mes cerrado sin aprobación del controller.', 'Días 1–2 — Contabilizar los asientos recurrentes: devengos, pagos anticipados, amortización, nóminas.', 'Día 2 — Conciliar las cuentas bancarias; contabilizar los cargos, intereses y correcciones detectados.', 'Días 2–3 — Ejecutar la conciliación intercompañía; investigar y resolver cada diferencia significativa.', 'Día 3 — Revalorizar los saldos en moneda extranjera; revisar las provisiones y actualizarlas si es necesario.', 'Días 3–4 — Completar todas las conciliaciones del balance; cada cuenta tiene un responsable y una aprobación.', 'Día 4 — Análisis de variaciones: investigar los movimientos inusuales frente al mes anterior y frente al presupuesto.', 'Día 5 — Revisión por la dirección del borrador del informe; contabilizar los ajustes finales; bloquear el periodo en el ERP.']
      },
      {
        heading: 'Corte de operaciones y devengos',
        paragraphs: [
          'El corte de operaciones es el alma del cierre: los gastos y los ingresos deben quedar en el mes en que ocurrió el hecho económico, no en el mes en que llegó el papeleo. La factura de la luz de diciembre llega en enero — pero la electricidad se consumió en diciembre, de modo que diciembre soporta el gasto mediante un devengo. A la inversa, una factura de enero por servicios de enero no debe retrotraerse a diciembre solo porque alguien quiera los costes «en el año pasado».',
          'Los devengos son estimaciones por naturaleza — rara vez se conoce el importe exacto de la luz el día 1 — de modo que la disciplina consiste en devengar un importe razonable y regularizarlo cuando llega la factura. El fallo clásico es contabilizar devengos y no revertirlos nunca: al mes siguiente llega la factura real, también se contabiliza, y el coste queda duplicado. Todo devengo necesita un plan de reversión o de regularización.'
        ],
        journal: {
          transaction: 'Devengar la electricidad de diciembre: factura de $12,000 recibida en enero por el consumo de diciembre',
          lines: [
            { account: 'Gastos de suministros', dr: 12000, cr: null },
            { account: 'Gastos devengados', dr: null, cr: 12000 }
          ],
          narration: 'Diciembre soporta el coste del consumo de diciembre. Cuando la factura llegue en enero, cancelará el devengo (o se regularizará por la diferencia).'
        },
        impact: { pl: 'El resultado de diciembre es $12,000 menor — el gasto se imputa al mes correcto.', bs: 'Un pasivo devengado de $12,000 aparece hasta que se paga la factura.', cf: 'Sin efecto en la tesorería de diciembre; la salida afectará al flujo de efectivo operativo cuando se pague en enero.' }
      },
      {
        heading: 'Pagos anticipados y amortización',
        paragraphs: [
          'Los pagos anticipados son el espejo de los devengos: efectivo pagado antes de consumir el beneficio. Una prima de seguro anual de $60,000 pagada en enero cubre doce meses — cada mes se imputan $5,000 de gasto y se reduce el activo anticipado. Contabilizar toda la prima como gasto de enero destrozaría el resultado de enero y maquillaría los otros once meses.',
          'La amortización es la misma idea aplicada al inmovilizado: la parte del coste del activo correspondiente al mes. Ambas son asientos recurrentes, lo que significa que deben estar plantillados y automatizados — el cierre nunca debe depender de que alguien recuerde contabilizar la amortización manualmente. Revisar el registro de inmovilizado cada mes por altas, bajas y activos que hayan quedado totalmente amortizados.'
        ],
        journal: {
          transaction: 'Amortizar el seguro anticipado: prima anual de $60,000, cargo mensual de diciembre',
          lines: [
            { account: 'Primas de seguros', dr: 5000, cr: null },
            { account: 'Seguros anticipados', dr: null, cr: 5000 }
          ],
          narration: 'En diciembre se consume una doceava parte de la prima anual; el activo anticipado se reduce en consecuencia.'
        },
        impact: { pl: 'Resultado de diciembre $5,000 menor; seguirán once cargos mensuales más.', bs: 'Activo por seguros anticipados reducido en $5,000.', cf: 'Sin efecto en la tesorería de diciembre — el efectivo salió en enero, cuando se pagó la prima.' },
        bullets: ['Pagos anticipados: primero el efectivo, después el gasto — liberar mensualmente.', 'Devengos: primero el gasto, después el efectivo — devengar, luego regularizar o revertir.', 'Amortización: plantillarla; no depender nunca de la memoria.']
      },
      {
        heading: 'Conciliaciones: bancos, cuentas a pagar, cuentas a cobrar, intercompañía',
        paragraphs: [
          'Las conciliaciones son los controles detectives del cierre: cada una acredita que un saldo es íntegro y exacto. La conciliación bancaria ata el saldo de efectivo del mayor al extracto bancario mediante cheques pendientes, depósitos en tránsito y cargos no registrados. Las conciliaciones de cuentas a pagar atan el mayor de proveedores a los extractos de los proveedores, detectando facturas no registradas. Las conciliaciones de cuentas a cobrar atan las cuentas a cobrar a los saldos de los clientes, sacando a la luz disputas y cobros mal aplicados. La conciliación intercompañía (m25) garantiza que los saldos internos del grupo cuadran antes de la consolidación.',
          'Toda conciliación necesita tres cosas: un preparador independiente de los apuntes subyacentes, un revisor que revise de verdad y un plazo. Una cuenta de balance sin conciliar es una afirmación sin auditar — y los auditores la tratarán como tal.'
        ],
        table: { headers: ['Conciliación', 'Se concilia con', 'Detecta'], rows: [['Bancos', 'Extracto bancario', 'Cargos no registrados, errores, partidas temporales'], ['Cuentas a pagar', 'Extractos de proveedores', 'Facturas pendientes de registrar, pagos duplicados'], ['Cuentas a cobrar', 'Saldos/antigüedad de clientes', 'Disputas, cobros mal aplicados, créditos incobrables'], ['Intercompañía', 'Mayor de la contraparte', 'Diferencias que bloquean la consolidación'], ['Inmovilizado', 'Registro físico', 'Activos fantasma, altas no registradas']] }
      },
      {
        heading: 'Nóminas, revalorización de moneda extranjera y provisiones',
        paragraphs: [
          'Las nóminas rara vez caen justo en el cierre del mes: si el día de pago es el 5, los últimos días del mes deben devengarse, junto con las cargas sociales patronales (la mecánica completa en m29). Los saldos en moneda extranjera deben revalorizarse al tipo de cierre cada mes — una empresa del euro que debe $100,000 ve crecer ese pasivo cuando el euro se debilita, y la diferencia es una ganancia o pérdida por diferencias de cambio en la cuenta de resultados.',
          'Las provisiones se revisan de nuevo en cada cierre: ¿sigue siendo adecuada la provisión por garantías con las ventas de este mes? ¿Ha evolucionado el litigio? La información nueva posterior al cierre del mes pero anterior a la aprobación puede exigir ajustes — aquí es donde el cierre se encuentra con la NIC 37 y la NIC 10 (hechos posteriores al periodo sobre el que se informa).'
        ],
        journal: {
          transaction: 'Revalorización de moneda extranjera: empresa del euro que debe $100,000; el euro se debilitó y el pasivo se revaloriza al alza en $8,000 al tipo de cierre',
          lines: [
            { account: 'Diferencias de cambio', dr: 8000, cr: null },
            { account: 'Cuentas a pagar (proveedor USD)', dr: null, cr: 8000 }
          ],
          narration: 'Los pasivos monetarios en moneda extranjera se convierten al tipo de cierre; el incremento de $8,000 es una pérdida por diferencias de cambio.'
        },
        impact: { pl: 'Resultado $8,000 menor por la pérdida por diferencias de cambio.', bs: 'La cuenta a pagar en USD es $8,000 mayor al tipo de cierre.', cf: 'Sin efecto en tesorería — la pérdida no está realizada hasta que se liquide la cuenta a pagar.' }
      },
      {
        heading: 'Revisión por la dirección y análisis de variaciones',
        paragraphs: [
          'Antes de bloquear el periodo, la dirección revisa las cifras provisionales — y la herramienta más afilada es el análisis de variaciones: comparar cada línea significativa con el mes anterior y con el presupuesto, y exigir una explicación para los movimientos inusuales. ¿Ingresos un 12% arriba con volúmenes planos? Explicar el precio o el mix. ¿Los gastos de viaje se han duplicado? Mostrar el proyecto. El análisis de variaciones es donde afloran los errores: un devengo de $200,000 contabilizado en la cuenta equivocada grita en una revisión de variaciones mucho antes de que lo encuentre un auditor.',
          'La revisión termina con aprobaciones: el preparador firma cada conciliación, el controller firma el informe y la dirección financiera aprueba los ajustes finales. Entonces — y solo entonces — se bloquea el periodo en el ERP. Un periodo bloqueado con un rastro documental de revisión es lo que hace más rápido el cierre del mes siguiente y más barata la auditoría.'
        ],
        callout: { type: 'interview', text: '¿Te piden «explicar un cierre mensual»? Estructúralo: congelar submódulos → asientos recurrentes (devengos, pagos anticipados, amortización, nóminas) → conciliaciones (bancos, cuentas a pagar, cuentas a cobrar, intercompañía) → moneda extranjera y provisiones → análisis de variaciones → revisión por la dirección y aprobaciones → bloqueo. Luego nombra las dos cosas que más suelen fallar: devengos nunca revertidos e intercompañía sin conciliar.' }
      },
      {
        heading: 'Cierre suave frente a cierre duro',
        paragraphs: [
          'No todos los meses necesitan la ceremonia completa. Muchos grupos hacen un cierre suave la mayoría de los meses — cuenta de resultados completa con las conciliaciones clave — y un cierre duro trimestral o anual con cada cuenta de balance conciliada, revisión completa de provisiones y documentación lista para auditoría. El cierre duro es también cuando las estimaciones reciben su escrutinio más profundo: deterioros, provisiones fiscales y devengos de bonus.',
          'El truco es decidir de antemano qué meses son cuáles y mantener la línea. Un cierre «suave» en el que nadie concilia nada no es un cierre suave — es ningún cierre. Incluso en los meses suaves, lo innegociable se mantiene: conciliación bancaria, disciplina de corte e intercompañía, porque esas tres son las que más rápido se degradan si se omiten.'
        ],
        bullets: ['Cierre suave (la mayoría de los meses): cuenta de resultados completa, conciliaciones clave, calendario más rápido.', 'Cierre duro (trimestre/cierre anual): cada cuenta de balance conciliada, estimaciones escrutadas, documentación lista para auditoría.', 'Innegociable incluso en meses suaves: conciliación bancaria, corte, intercompañía.']
      }
    ],
    mistakes: [
      'Empezar el cierre antes de congelar los submódulos de cuentas a pagar, cuentas a cobrar e inmovilizado — los asientos siguen moviéndose bajo los pies.',
      'Contabilizar devengos sin plan de reversión o regularización, de modo que la factura real del mes siguiente duplica el coste.',
      'Omitir la conciliación bancaria porque «el saldo parece correcto» — ahí se esconden cargos no registrados y errores.',
      'Contabilizar asientos manuales de ajuste sin documentación de soporte adjunta.',
      'Dejar que las diferencias intercompañía pasen al mes siguiente en lugar de resolverlas antes de la consolidación.',
      'Bloquear el periodo en el ERP antes de la aprobación de la revisión por la dirección — y luego encontrar el error que requería una «reapertura rápida».'
    ],
    interviewQA: [
      { q: 'Explícame un cierre mensual típico.', a: 'Día 1: congelar los submódulos — cuentas a pagar, cuentas a cobrar, inmovilizado. Días 1–2: contabilizar los asientos recurrentes — devengos, pagos anticipados, amortización, nóminas. Día 2: conciliación bancaria, contabilizando cargos o correcciones. Días 2–3: conciliación intercompañía investigando todas las diferencias. Día 3: revalorización de moneda extranjera y nueva revisión de las provisiones. Días 3–4: conciliar cada cuenta de balance con firma del preparador y del revisor. Día 4: análisis de variaciones frente al mes anterior y al presupuesto para detectar errores. Día 5: revisión por la dirección, ajustes finales y bloqueo del periodo. Las dos cosas que más vigilo: devengos que nunca se revierten e intercompañía sin conciliar.' },
      { q: 'El cierre va con retraso y el director financiero quiere las cifras mañana. ¿Cómo priorizas?', a: 'Protejo lo innegociable: corte de operaciones, conciliación bancaria e intercompañía — son lo que más rápido se degrada y el auditor lo encontrará igualmente. Contabilizaría devengos con la mejor estimación para todo lo que siga abierto en lugar de dejar huecos, señalaría cada estimación claramente en el informe y pasaría las conciliaciones inmateriales a una lista de repaso del día 6. Lo que nunca hago es tapar diferencias con apuntes de cuadre ni saltarme las aprobaciones para cumplir una fecha — un cierre rápido construido sobre cuadres cuesta mucho más en ajustes de auditoría y reformulaciones.' },
      { q: '¿Qué es un cierre suave y cuándo es apropiado?', a: 'Un cierre suave es una rutina mensual más ligera — cuenta de resultados completa con las conciliaciones clave en un calendario más rápido — mientras que un cierre duro (trimestral o anual) concilia cada cuenta de balance, escruta las estimaciones a fondo y produce documentación lista para auditoría. Los cierres suaves encajan en los meses estables entre cierres duros. Pero «suave» nunca significa omitir lo esencial: la conciliación bancaria, la disciplina de corte y la conciliación intercompañía siguen siendo obligatorias, porque esas tres son las que más rápido se deterioran si se descuidan.' }
    ],
    quiz: [
      { question: '¿Cuáles son los tres objetivos principales del cierre mensual?', options: ['Integridad, exactitud y corte de operaciones — más rapidez', 'Rapidez, secretismo y simplicidad', 'Maximizar el resultado, minimizar impuestos y contentar a los auditores', 'Cerrar submódulos, pagar a proveedores y presentar impuestos'], answer: 0, explanation: 'Un buen cierre garantiza que todo lo que pertenece al mes está dentro (integridad), medido correctamente (exactitud), en el periodo correcto (corte) — y entregado lo bastante rápido para ser útil.', difficulty: 'Foundation', topic: 'Close Objectives', skill: 'Month-End Closing' },
      { question: 'La factura de la luz de diciembre ($12,000) llega en enero. El tratamiento correcto es:', options: ['Contabilizar el gasto de $12,000 en enero, cuando se factura', 'Repartirlo a partes iguales entre diciembre y enero', 'Contabilizarlo en diciembre solo si es significativo', 'Devengar $12,000 de gasto de suministros en diciembre'], answer: 3, explanation: 'La electricidad se consumió en diciembre, de modo que diciembre soporta el gasto mediante un devengo — con independencia de cuándo llegue la factura. El corte sigue al hecho económico.', difficulty: 'Intermediate', topic: 'Accruals', skill: 'Month-End Closing' },
      { question: '¿Qué asiento devenga correctamente la factura de la luz de diciembre de $12,000?', options: ['Debe Gastos devengados $12,000 / Haber Gastos de suministros $12,000', 'Debe Efectivo $12,000 / Haber Gastos de suministros $12,000', 'Debe Gastos de suministros $12,000 / Haber Gastos devengados $12,000', 'Debe Gastos de suministros $12,000 / Haber Efectivo $12,000'], answer: 2, explanation: 'El gasto se carga al debe (coste de diciembre) y la obligación al haber. El efectivo no se toca — aún no se ha pagado nada.', difficulty: 'Intermediate', topic: 'Accruals', skill: 'Month-End Closing' },
      { question: 'Una prima de seguro anual de $60,000 pagada en enero cubre todo el año. El asiento de diciembre es:', options: ['Debe Primas de seguros $60,000 / Haber Efectivo $60,000', 'Sin asiento — se imputó todo como gasto en enero', 'Debe Primas de seguros $5,000 / Haber Seguros anticipados $5,000', 'Debe Seguros anticipados $5,000 / Haber Primas de seguros $5,000'], answer: 2, explanation: 'Cada mes se consume una doceava parte del beneficio anticipado: $60,000 / 12 = $5,000 de gasto, reduciendo el activo anticipado.', difficulty: 'Foundation', topic: 'Prepayments', skill: 'Month-End Closing' },
      { question: 'El extracto bancario muestra un cargo por comisiones de $500 que no está en el mayor. La acción correcta es:', options: ['Deducir $500 del saldo del extracto bancario', 'Ignorarlo — se revertirá el mes que viene', 'Sumar $500 a los depósitos en tránsito', 'Contabilizar Debe Comisiones bancarias $500 / Haber Efectivo $500 en el mayor'], answer: 3, explanation: 'Los cargos bancarios son un ajuste del lado de los libros: el mayor debe actualizarse para reflejar lo que el banco ya hizo. Los ajustes del lado del extracto son solo para partidas temporales como los cheques pendientes.', difficulty: 'Intermediate', topic: 'Bank Reconciliation', skill: 'Month-End Closing' },
      { question: 'Una empresa del euro debe a un proveedor estadounidense $100,000. Al cierre del mes el euro se ha debilitado y el pasivo es $8,000 mayor en términos de euros. El asiento es:', options: ['Debe Cuentas a pagar $8,000 / Haber Diferencias de cambio $8,000', 'Debe Diferencias de cambio $8,000 / Haber Cuentas a pagar $8,000', 'Sin asiento hasta que la cuenta a pagar se pague realmente', 'Debe Patrimonio neto $8,000 / Haber Cuentas a pagar $8,000'], answer: 1, explanation: 'Las partidas monetarias en moneda extranjera se reconvierten al tipo de cierre cada mes; el incremento del pasivo es una pérdida por diferencias de cambio en la cuenta de resultados.', difficulty: 'Intermediate', topic: 'FX Revaluation', skill: 'Month-End Closing' },
      { question: '¿Por qué se realiza una conciliación de cuentas a pagar/cuentas a cobrar al cierre del mes?', options: ['Para acreditar que los saldos del mayor son íntegros y exactos, detectando facturas pendientes de registrar y cobros mal aplicados', 'Para decidir a qué proveedores pagar primero', 'Para calcular la declaración del IVA', 'Para cerrar los submódulos de forma permanente'], answer: 0, explanation: 'Las conciliaciones son controles detectives: atar los mayores a los extractos de proveedores y a los saldos de clientes saca a la luz facturas no registradas, pagos duplicados, disputas y cobros mal aplicados.', difficulty: 'Foundation', topic: 'Reconciliations', skill: 'Month-End Closing' },
      { question: 'Los salarios de diciembre se pagan el 5 de enero. El tratamiento correcto en diciembre es:', options: ['Contabilizar todo el coste en enero, el día de pago', 'Devengar solo el neto a pagar, ignorando las cargas patronales', 'Contabilizarlo en diciembre solo para el personal directivo', 'Devengar en diciembre el coste salarial de diciembre (y las cargas patronales)'], answer: 3, explanation: 'Los empleados prestaron el servicio en diciembre, de modo que diciembre soporta el coste íntegro — salarios brutos más cargas sociales patronales — mediante un devengo, aunque el efectivo salga en enero.', difficulty: 'Intermediate', topic: 'Payroll Accrual', skill: 'Month-End Closing' },
      { question: '¿Cuál es la diferencia clave entre un devengo y una provisión?', options: ['Un devengo es por un importe cierto debido (solo cuestión de momento); una provisión implica incertidumbre en el momento o el importe', 'Los devengos nunca se revierten, pero las provisiones sí', 'Las provisiones son siempre mayores que los devengos', 'No hay diferencia — los términos son intercambiables'], answer: 0, explanation: 'Un devengo (p. ej., la luz de diciembre) es cierto en su importe; solo falta la factura. Una provisión (p. ej., un litigio) es incierta en momento o importe y cae bajo la NIC 37.', difficulty: 'Advanced', topic: 'Provisions', skill: 'Month-End Closing' },
      { question: 'En el análisis de variaciones, los ingresos suben un 12% frente al mes anterior mientras los volúmenes de venta están planos. El siguiente paso más útil es:', options: ['Celebrarlo — el crecimiento de ingresos siempre es buena noticia', 'Contabilizar un devengo para suavizar el incremento', 'Investigar los efectos de precio y mix para explicar el incremento', 'Reformular los ingresos del mes anterior'], answer: 2, explanation: 'El análisis de variaciones exige explicaciones para los movimientos inusuales. Volúmenes planos con ingresos al alza apuntan a subidas de precio o a un cambio de mix hacia productos premium — o a un error que hay que encontrar.', difficulty: 'Intermediate', topic: 'Flux Analysis', skill: 'Month-End Closing' },
      { question: 'La intercompañía muestra una diferencia de $5,000 el día 3 del cierre. Lo correcto es:', options: ['Cuadrarla en una cuenta de diferencias e investigarla el mes que viene', 'Investigarla y resolverla ahora — nunca cuadrarla ni pasarla al mes siguiente', 'Dejar que la consolidación la netee automáticamente', 'Repartir la diferencia entre ambas entidades'], answer: 1, explanation: 'Las diferencias intercompañía bloquean una consolidación limpia y cada una es un error en los libros de alguien. Resolver antes de que avance el cierre; los cuadres y los traspasos agravan el problema.', difficulty: 'Advanced', topic: 'Intercompany', skill: 'Month-End Closing' },
      { question: '¿Cuál es la secuencia correcta de un cierre controlado?', options: ['Bloquear el periodo → contabilizar asientos → conciliar → revisar', 'Congelar submódulos → contabilizar asientos → conciliar → revisión y análisis de variaciones → bloquear el periodo', 'Contabilizar asientos → congelar submódulos → bloquear → conciliar', 'Revisar primero, luego congelar submódulos y contabilizar asientos'], answer: 1, explanation: 'Los submódulos se congelan primero para que los asientos descansen sobre datos estables; las conciliaciones acreditan los saldos; la revisión por la dirección y el análisis de variaciones detectan errores; solo entonces se bloquea el periodo.', difficulty: 'Foundation', topic: 'Close Sequence', skill: 'Month-End Closing' }
    ]
  },
  {
    id: 'm27', level: 7, levelTitle: 'Financial Reporting Operations', title: 'Conciliaciones de cuentas',
    standard: 'Operations', tagline: 'Confiar sí, pero conciliar: todo saldo debe acreditarse.',
    description: 'Las conciliaciones son los controles detectives de la información financiera — la prueba mensual de que los saldos son íntegros y exactos. Este módulo se centra en un ejercicio práctico de conciliación bancaria (extracto $125,000 frente a mayor $118,000), y después cubre las conciliaciones de proveedores, clientes e intercompañía, la disciplina de balance y qué hacer cuando una conciliación se niega a cuadrar.',
    minutes: 24, skills: ['Month-End Closing'],
    sections: [
      {
        heading: 'Qué acredita una conciliación',
        paragraphs: [
          'Una conciliación ata el saldo de un mayor a una fuente independiente y explica cada diferencia. La conciliación bancaria ata el efectivo del mayor al extracto bancario. La conciliación de cuentas a pagar ata las cuentas a pagar a los extractos de los proveedores. La disciplina es idéntica cada vez: listar las diferencias, clasificar cada una como partida temporal (se resuelve sola) o como error (requiere un asiento), y liquidar los errores antes de que termine el cierre.',
          'Las conciliaciones son controles detectives: no previenen errores, los encuentran. Por eso el preparador debe ser independiente de quien contabilizó las operaciones subyacentes — el cajero no debe conciliar el banco, y el administrativo de compras no debe confirmar los saldos de proveedores. Una conciliación preparada por quien hizo los apuntes es teatro, no control.'
        ],
        callout: { type: 'key', text: 'Toda diferencia es o temporal (documentarla) o un error (contabilizarla). «Sin explicar» no es una categoría — es una investigación abierta.' }
      },
      {
        heading: 'Ejercicio: extracto bancario $125,000 frente a efectivo en el mayor $118,000',
        paragraphs: [
          'Este es el caso. El extracto bancario a 31 de diciembre muestra $125,000. La cuenta de efectivo del mayor muestra $118,000. La diferencia de $7,000 debe quedar totalmente explicada — y cada dólar quedará explicado. El expediente contiene cuatro elementos: (1) cheques pendientes de $13,000 — cheques emitidos y registrados en el mayor pero aún no presentados al banco; (2) un depósito en tránsito de $8,000 — efectivo registrado en el mayor el 31 de diciembre pero abonado por el banco el 2 de enero; (3) comisiones bancarias de $500 en el extracto, nunca registradas en el mayor; (4) intereses de $2,500 abonados por el banco, nunca registrados en el mayor.',
          'Trabajar los dos lados. Lado del banco: partir del extracto y ajustar por las partidas temporales que el banco aún no conoce — sumar el depósito en tránsito ($125,000 + $8,000) y deducir los cheques pendientes (−$13,000) hasta llegar a un saldo bancario ajustado de $120,000. Lado de los libros: partir del mayor y contabilizar lo que los libros omitieron — deducir los cargos no registrados ($118,000 − $500) y sumar los intereses no registrados (+$2,500) hasta llegar a un saldo contable ajustado de $120,000. Ambos lados cuadran en $120,000: conciliado.',
          'El patrón a interiorizar: las partidas temporales (cheques pendientes, depósitos en tránsito) ajustan el extracto bancario y no necesitan asiento — se resuelven solas cuando el banco se pone al día. Las partidas originadas en el banco (comisiones, intereses, errores) ajustan los libros y necesitan asientos. Si alguna vez surge la tentación de contabilizar un cheque pendiente, detenerse — se estaría registrando como error propio el desfase temporal del banco.'
        ],
        steps: ['Paso 1 — Listar cada diferencia entre el extracto ($125,000) y el mayor ($118,000).', 'Paso 2 — Clasificar: temporales (cheques pendientes $13,000, depósito en tránsito $8,000) frente a errores en libros (comisiones $500, intereses $2,500).', 'Paso 3 — Banco ajustado: $125,000 + $8,000 − $13,000 = $120,000.', 'Paso 4 — Libros ajustados: $118,000 − $500 + $2,500 = $120,000. Ambos lados cuadran.', 'Paso 5 — Contabilizar las partidas del lado de los libros para que el propio mayor alcance $120,000.'],
        journal: {
          transaction: 'Contabilizar las partidas originadas en el banco detectadas en la conciliación',
          lines: [
            { account: 'Efectivo', dr: 2000, cr: null },
            { account: 'Comisiones bancarias', dr: 500, cr: null },
            { account: 'Ingresos por intereses', dr: null, cr: 2500 }
          ],
          narration: 'Efecto neto: efectivo +$2,000 (−$500 de comisiones + $2,500 de intereses), llevando el mayor al saldo ajustado de $120,000.'
        },
        impact: { pl: 'Incremento neto del resultado de $2,000 ($2,500 de ingresos por intereses menos $500 de comisiones).', bs: 'El efectivo sube a $120,000, totalmente conciliado con el saldo bancario ajustado.', cf: 'Sin nuevo movimiento de efectivo — el banco ya registró estas partidas; el mayor se está poniendo al día.' }
      },
      {
        heading: 'Conciliaciones de proveedores (cuentas a pagar)',
        paragraphs: [
          'Atar el mayor de cuentas a pagar de cada proveedor importante al extracto de ese proveedor. Los sospechosos habituales: facturas recibidas pero aún no introducidas (especialmente en torno al corte), pagos en tránsito registrados por nosotros pero aún no por el proveedor, abonos emitidos pero no aplicados, y el clásico eterno — la factura introducida dos veces. Un extracto de proveedor que muestra $90,000 frente a $84,000 en nuestro mayor, con una factura de $6,000 ausente en nuestros libros, es un pasivo no registrado de manual: contabilizarlo ahora, porque la prueba de pasivos no registrados del auditor lo encontrará en enero igualmente.',
          'Ejecutar las conciliaciones de proveedores de los saldos más grandes cada mes y rotar el resto trimestralmente. Y vigilar los saldos deudores en cuentas a pagar — un proveedor que aparece como activo suele significar un pago contabilizado sin su factura, o un abono nunca reclamado.'
        ],
        callout: { type: 'example', text: 'Extracto del proveedor: $90,000. Nuestro mayor de cuentas a pagar: $84,000. La diferencia de $6,000 es la factura INV-774, recibida el 28 de diciembre pero nunca introducida. Asiento: Debe Compras/Gastos $6,000 / Haber Cuentas a pagar $6,000. El corte de diciembre queda correcto — y la búsqueda de pasivos no registrados del auditor sale vacía.' }
      },
      {
        heading: 'Conciliaciones de clientes (cuentas a cobrar) y aplicación de cobros',
        paragraphs: [
          'Las conciliaciones de cuentas a cobrar atan el mayor de clientes a lo que los clientes dicen deber — y los desacuerdos son donde está el aprendizaje. Un cliente paga $2,000 de menos alegando un abono que nunca se emitió: no darlo de baja por teléfono. Investigar primero — puede ser una disputa de precios, una reclamación de devoluciones, o el cliente compensando una partida no relacionada. Las bajas necesitan evidencia y aprobación, nunca conveniencia.',
          'El otro campo de batalla de las cuentas a cobrar es la aplicación de cobros: cobros aplicados al cliente o a la factura equivocados crean vencidos fantasma y provocan llamadas de recobro a clientes que ya pagaron — la forma más rápida de dañar las relaciones comerciales. El efectivo sin aplicar debe investigarse y analizarse por antigüedad como cualquier otra partida abierta, no dejarse acumular.'
        ],
        bullets: ['Deducciones en disputa: investigar antes de dar de baja — precio, devoluciones o juegos de compensación.', 'Efectivo sin aplicar: analizado por antigüedad y liquidado, nunca dejado acumular.', 'Saldos acreedores en cuentas a cobrar: normalmente pagos en exceso o abonos sin procesar — devolver o aplicar, no ignorar.']
      },
      {
        heading: 'Conciliaciones intercompañía',
        paragraphs: [
          'Las conciliaciones intercompañía siguen la misma mecánica que las de proveedores y clientes, salvo que la contraparte es un colega — lo que las hace políticamente más fáciles y técnicamente idénticas. La cuenta a cobrar de la sociedad A debe reflejar la cuenta a pagar de la sociedad B (el manual completo de investigación de $150,000 frente a $145,000 está en m25). Como estos saldos se eliminan en la consolidación, cualquier diferencia sin resolver o bloquea el cierre o fuerza un feo apunte de cuadre a nivel de grupo que los auditores desharán.',
          'La disciplina que funciona: confirmación bilateral mensual en fecha fija, códigos de socio estándar para que las facturas no puedan dirigirse mal, y un análisis de antigüedad a nivel de grupo de las partidas sin conciliar con responsables asignados. La intercompañía es también un canal de fraude — ventas ficticias a una filial inflan ingresos y cuentas a cobrar a la vez — de modo que la confirmación debe ser independiente de quienes contabilizan las operaciones.'
        ]
      },
      {
        heading: 'Conciliaciones de balance y antigüedad de saldos',
        paragraphs: [
          'El estándar de oro: cada cuenta de balance conciliada, cada mes, con un responsable asignado y la aprobación del revisor. En la práctica, los grupos gradúan el esfuerzo — bancos, cuentas a cobrar, cuentas a pagar, intercompañía y provisiones mensualmente; pagos anticipados, inmovilizado y devengos mensual o trimestralmente según el movimiento. Lo que nunca es aceptable es una cuenta sin dueño: los saldos sin dueño son donde los errores van a jubilarse.',
          'La antigüedad de saldos es la gemela analítica de la conciliación. Un saldo de cuentas a cobrar que concilia pero está al 40% con más de 90 días de vencimiento habla de cobrabilidad, no de exactitud — es lo que alimenta la provisión por insolvencias. Una antigüedad de cuentas a pagar llena de abonos antiguos puede esconder dinero sin reclamar. Leer siempre la conciliación junto con su antigüedad.'
        ],
        table: { headers: ['Cuenta', 'Conciliar con', 'Leer junto con'], rows: [['Efectivo', 'Extractos bancarios', 'Antigüedad de cheques pendientes — investigar cheques antiguos'], ['Cuentas a cobrar', 'Saldos/extractos de clientes', 'Antigüedad de saldos de clientes — determina la provisión por insolvencias'], ['Cuentas a pagar', 'Extractos de proveedores', 'Antigüedad de saldos de proveedores — los saldos deudores requieren explicación'], ['Intercompañía', 'Mayores de la contraparte', 'Antigüedad de partidas sin conciliar con responsables asignados'], ['Provisiones', 'Cálculos de soporte', 'Análisis de movimientos frente al mes anterior']] }
      },
      {
        heading: 'Cuando una conciliación falla',
        paragraphs: [
          'A veces ambos lados parecen correctos y aun así no cuadran. Trabajar la escalera: volver a extraer los datos fuente (los extractos desactualizados son la falsa alarma n.º 1), revisar de nuevo los rangos de fechas, buscar dígitos transpuestos ($12,540 frente a $12,450) y apuntes duplicados, y luego ampliar la red a periodos adyacentes — la partida que falta suele estar contabilizada un mes antes o después. Si la diferencia sobrevive a todo eso, escalar al controller con los papeles de trabajo: lo comprobado, lo descartado y la hipótesis.',
          'Dos reglas duras para el final. Primera: las partidas antiguas se resuelven, no se arrastran eternamente: un cheque pendiente de ocho meses no está pendiente — contactar con el beneficiario, reemitirlo o anularlo. Segunda: nunca forzar el cuadre. Un apunte de cuadre a «diferencias de conciliación» es una confesión que se leerá en voz alta en la reunión de cierre de la auditoría.'
        ],
        callout: { type: 'warning', text: 'Un cheque pendiente de 8 meses ya no es una diferencia temporal — es un instrumento muerto. Contactar con el beneficiario, reemitirlo o anularlo, y liquidar la partida. Arrastrar partidas antiguas año tras año es como las conciliaciones se convierten en ficción.' }
      }
    ],
    mistakes: [
      'Conciliar con un extracto desactualizado — fecha errónea, saldo erróneo, hora perdida.',
      'Tratar cheques pendientes antiquísimos como si siguieran pendientes en lugar de investigarlos y liquidarlos.',
      'Forzar el cuadre con un apunte a «diferencias de conciliación» en lugar de encontrar la causa.',
      'Conciliar solo el total y nunca las partidas subyacentes ni la antigüedad.',
      'Dejar que quien maneja el efectivo prepare la conciliación bancaria — un fallo de segregación.',
      'Archivar la conciliación sin la aprobación del revisor, de modo que ningún superior la miró jamás.'
    ],
    interviewQA: [
      { q: 'El extracto bancario muestra $125,000 pero el mayor muestra $118,000. ¿Cómo lo investigas?', a: 'Listo cada diferencia y la clasifico como temporal o como error. Las partidas temporales — cheques pendientes, depósitos en tránsito — ajustan el lado del banco y no necesitan asiento. Las partidas originadas en el banco — comisiones, intereses, errores bancarios — ajustan el lado de los libros y necesitan asientos. En este caso: banco ajustado $125,000 + $8,000 de depósito en tránsito − $13,000 de cheques pendientes = $120,000; libros ajustados $118,000 − $500 de comisiones + $2,500 de intereses = $120,000. Ambos lados cuadran, así que contabilizo las comisiones de $500 y los intereses de $2,500 para llevar el mayor a $120,000.' },
      { q: '¿Cuál es la diferencia entre una diferencia temporal y un error en una conciliación bancaria?', a: 'Una diferencia temporal está registrada correctamente por ambos lados pero en distintos periodos — un cheque pendiente está en mis libros hoy y en el extracto la semana que viene. Se resuelve sola y se documenta, no se contabiliza. Un error — un cargo bancario no registrado, un dígito transpuesto, un depósito duplicado — significa que un lado está mal y necesita un asiento corrector. La prueba es simple: ¿desaparecerá esta diferencia por sí sola cuando llegue el próximo extracto? Si sí, temporal; si no, error.' },
      { q: '¿Cómo tratas una partida de conciliación pendiente desde hace mucho tiempo?', a: 'Primero verifico que esté genuinamente pendiente y no sea un problema de datos desactualizados. Luego actúo según su naturaleza: un cheque pendiente antiguo significa contactar con el beneficiario y reemitirlo o anularlo — después de seis a doce meses ya no es una partida temporal. Un cobro antiguo sin aplicar se investiga y se aplica o se devuelve. Lo que nunca hago es arrastrarlo indefinidamente ni cuadrarlo con un apunte; las partidas antiguas se acumulan hasta convertirse en incorrecciones significativas y los auditores las tienen en el punto de mira.' }
    ],
    quiz: [
      { question: '¿Cuál es el propósito principal de una conciliación bancaria?', options: ['Decidir qué cheques anular', 'Calcular los ingresos por intereses del año', 'Elegir qué banco utilizar', 'Acreditar que el saldo de efectivo del mayor es íntegro y exacto atándolo al extracto bancario y explicando cada diferencia'], answer: 3, explanation: 'La conciliación bancaria es un control detective: verifica el efectivo — el activo más sensible al fraude — contra evidencia independiente y obliga a clasificar y liquidar cada diferencia.', difficulty: 'Foundation', topic: 'Bank Reconciliation', skill: 'Month-End Closing' },
      { question: 'Un depósito de $8,000 registrado en el mayor el 31 de diciembre aparece en el extracto bancario el 2 de enero. En la conciliación del 31 de diciembre es:', options: ['Un depósito en tránsito — se suma al saldo del extracto bancario', 'Se deduce del saldo del mayor', 'Un error que requiere un asiento', 'Se ignora hasta enero'], answer: 0, explanation: 'Los depósitos en tránsito son partidas temporales: los libros están bien, el banco simplemente aún no se ha puesto al día. Sumar al lado del banco; no se necesita asiento.', difficulty: 'Intermediate', topic: 'Timing Differences', skill: 'Month-End Closing' },
      { question: 'Los cheques pendientes de $13,000 en la conciliación son:', options: ['Se suman al saldo de efectivo del mayor', 'Se contabilizan como gasto', 'Se deducen del saldo del extracto bancario', 'Se suman al saldo del extracto bancario'], answer: 2, explanation: 'Los cheques pendientes redujeron el mayor al emitirse pero aún no han llegado al banco — por tanto se deducen del lado del banco para llegar al verdadero saldo comparable.', difficulty: 'Intermediate', topic: 'Timing Differences', skill: 'Month-End Closing' },
      { question: 'El extracto muestra $500 de comisiones bancarias no registradas en el mayor. El tratamiento correcto es:', options: ['Deducir $500 del saldo del extracto bancario', 'Sumar $500 a los depósitos en tránsito', 'Dejarlas — el banco las revertirá', 'Contabilizarlas en los libros: Debe Comisiones bancarias $500 / Haber Efectivo $500'], answer: 3, explanation: 'Las partidas originadas en el banco que los libros omitieron son ajustes del lado de los libros: actualizar el mayor con un asiento. Solo las partidas temporales ajustan el lado del extracto.', difficulty: 'Intermediate', topic: 'Book Adjustments', skill: 'Month-End Closing' },
      { question: 'En el ejercicio (extracto $125,000; mayor $118,000; depósito en tránsito $8,000; cheques pendientes $13,000), el saldo bancario ajustado es:', options: ['$120,000', '$125,000', '$118,000', '$112,000'], answer: 0, explanation: '$125,000 + $8,000 (depósito en tránsito) − $13,000 (cheques pendientes) = $120,000.', difficulty: 'Advanced', topic: 'Bank Reconciliation', skill: 'Month-End Closing' },
      { question: 'Siguiendo el ejercicio (comisiones $500 e intereses $2,500 no registrados en el mayor), el saldo contable ajustado es:', options: ['$118,000', '$120,000', '$121,000', '$115,000'], answer: 1, explanation: '$118,000 − $500 (comisiones) + $2,500 (intereses) = $120,000 — cuadra con el saldo bancario ajustado. Conciliado.', difficulty: 'Advanced', topic: 'Bank Reconciliation', skill: 'Month-End Closing' },
      { question: '¿Cómo se distingue una diferencia temporal de un error?', options: ['Las diferencias temporales son siempre mayores que los errores', 'Los errores solo ocurren en el banco, nunca en los libros', 'Una diferencia temporal se resuelve sola cuando llega el próximo extracto; un error necesita un asiento corrector', 'No hay diferencia práctica'], answer: 2, explanation: 'La prueba es si la diferencia desaparece por sí sola. Los cheques pendientes se liquidan la semana que viene (temporal); un cargo bancario no registrado nunca se liquida solo (error — contabilizarlo).', difficulty: 'Foundation', topic: 'Timing vs Errors', skill: 'Month-End Closing' },
      { question: 'Un extracto de proveedor muestra $90,000 pero nuestro mayor de cuentas a pagar muestra $84,000. La investigación encuentra una factura de $6,000 recibida el 28 de diciembre pero nunca introducida. Se debe:', options: ['Contabilizar la factura en enero, cuando se encontró', 'Pedir al proveedor que anule la factura', 'Deducir $6,000 del extracto del proveedor', 'Contabilizar Debe Compras/Gastos $6,000 / Haber Cuentas a pagar $6,000 en diciembre'], answer: 3, explanation: 'El pasivo existía a 31 de diciembre — los bienes/servicios se recibieron en diciembre. Contabilizarlo en diciembre corrige tanto el saldo de cuentas a pagar como el corte; la prueba de pasivos no registrados del auditor lo encontraría en caso contrario.', difficulty: 'Intermediate', topic: 'AP Reconciliation', skill: 'Month-End Closing' },
      { question: 'Un cliente paga $2,000 de menos alegando un abono que nunca se emitió. La respuesta correcta es:', options: ['Investigar la reclamación antes de dar de baja nada', 'Dar de baja inmediatamente los $2,000 como descuento', 'Demandar al cliente', 'Aplicar el pago parcial a la cuenta de otro cliente'], answer: 0, explanation: 'Los pagos parciales pueden reflejar disputas de precios, devoluciones o juegos de compensación. Las bajas necesitan evidencia y aprobación — dar de baja por lo que diga el cliente invita a repetir la conducta.', difficulty: 'Intermediate', topic: 'AR Reconciliation', skill: 'Month-End Closing' },
      { question: 'Un cheque lleva «pendiente» ocho meses. La acción correcta es:', options: ['Seguir arrastrándolo como pendiente indefinidamente', 'Contactar con el beneficiario, y reemitir o anular el cheque y liquidar la partida', 'Darlo de baja contra resultados inmediatamente sin investigar', 'Volver a sumarlo al saldo del extracto bancario'], answer: 1, explanation: 'Después de meses, no es una diferencia temporal — es un instrumento muerto. Resolverlo con el beneficiario; arrastrar partidas antiguas convierte la conciliación en ficción.', difficulty: 'Advanced', topic: 'Stale Items', skill: 'Month-End Closing' },
      { question: '¿Quién debe preparar la conciliación bancaria mensual?', options: ['El cajero que maneja el efectivo', 'El administrativo de compras que contabiliza los pagos a proveedores', 'Alguien independiente del manejo del efectivo y de la contabilización', 'El auditor externo'], answer: 2, explanation: 'Segregación de funciones: el preparador debe ser independiente de las operaciones que se controlan, o el control es teatro. El auditor revisa las conciliaciones; no las prepara.', difficulty: 'Intermediate', topic: 'Controls', skill: 'Month-End Closing' },
      { question: '¿Con qué frecuencia deben conciliarse las cuentas clave (bancos, cuentas a cobrar, cuentas a pagar, intercompañía)?', options: ['Una vez al año, al cierre del ejercicio', 'Mensualmente, como mínimo', 'Solo cuando lo pida el auditor', 'Cada tres años'], answer: 1, explanation: 'La conciliación mensual es el control detective básico del cierre. Conciliar solo una vez al año deja que los errores se acumulen durante once meses antes de que nadie los mire.', difficulty: 'Foundation', topic: 'Reconciliation Discipline', skill: 'Month-End Closing' }
    ]
  },
  {
    id: 'm28', level: 7, levelTitle: 'Financial Reporting Operations', title: 'Corte de operaciones',
    standard: 'Operations', tagline: 'El coste de diciembre en diciembre, los ingresos de enero en enero — sin excepciones.',
    description: 'El corte de operaciones es la disciplina de registrar las transacciones en el periodo contable correcto. Este módulo recorre las trampas clásicas: facturas que llegan tarde, mercancías recibidas sin factura, ingresos facturados antes de la entrega y mercancías en tránsito al cierre del ejercicio — con pruebas de corte estilo auditor y casos de test en los que decides a qué periodo pertenece cada transacción.',
    minutes: 20, skills: ['Month-End Closing', 'IFRS Fundamentals'],
    sections: [
      {
        heading: 'Qué significa el corte de operaciones — y por qué mueve los mercados',
        paragraphs: [
          'El corte de operaciones es la aplicación del principio de devengo en los límites del periodo: las transacciones se registran cuando ocurre el hecho económico, no cuando se mueve el papeleo. Hacerlo mal y dos periodos quedan mal medidos a la vez — diciembre se queda con el coste de enero (o pierde el suyo), enero hereda la distorsión. Para las cotizadas, trasladar ingresos o gastos de un ejercicio a otro puede ser la diferencia entre cumplir las previsiones y no cumplirlas, por eso los auditores tratan el corte como un área de riesgo de fraude, no solo como un control de exactitud.',
          'El modelo mental es simple: preguntarse «¿cuándo ocurrió el hecho?» — cuándo se recibieron las mercancías, se prestó el servicio, se transfirieron los riesgos y beneficios — y luego comprobar que la fecha contable coincide con la fecha del hecho, no con la fecha de la factura ni con la fecha de contabilización. Cada ejemplo siguiente es una variación de esa única pregunta.'
        ],
        callout: { type: 'key', text: 'Pregunta de corte: ¿cuándo ocurrió el hecho económico? El periodo contable sigue al hecho — nunca a la fecha de la factura, nunca a la fecha de contabilización.' }
      },
      {
        heading: 'Corte de gastos: la factura de enero por servicios de diciembre',
        paragraphs: [
          'La empresa de instalaciones envía por correo su factura de diciembre el 8 de enero: $12,000 por limpieza y mantenimiento de diciembre. El servicio se prestó en diciembre — de modo que diciembre soporta el gasto, mediante un devengo. Contabilizarlo en enero porque «es cuando llegó la factura» infravalora los costes de diciembre y sobrevalora el resultado de diciembre, mientras enero recibe un golpe que no se ganó.',
          'Este es el error de corte más común en la práctica, porque resulta natural contabilizar por fecha de factura. El control es sencillo: al cierre, preguntar a cada departamento «¿qué servicios de diciembre hemos recibido pero aún no nos han facturado?» — y devengar las respuestas. Luego revertir o regularizar cuando lleguen las facturas.'
        ],
        journal: {
          transaction: 'Devengar los servicios de diciembre facturados en enero ($12,000)',
          lines: [
            { account: 'Gastos de mantenimiento', dr: 12000, cr: null },
            { account: 'Gastos devengados', dr: null, cr: 12000 }
          ],
          narration: 'Servicio prestado en diciembre: el gasto pertenece a diciembre. La factura de enero cancelará este devengo.'
        },
        impact: { pl: 'Resultado de diciembre $12,000 menor; resultado de enero no afectado por la actividad de diciembre.', bs: 'Un pasivo devengado de $12,000 a 31 de diciembre.', cf: 'Sin efecto en la tesorería de diciembre; la salida aparece en el flujo de efectivo operativo de enero.' }
      },
      {
        heading: 'Mercancías recibidas, factura pendiente (GRNI)',
        paragraphs: [
          'Las materias primas llegan el 28 de diciembre; la factura del proveedor llega el 6 de enero. A 31 de diciembre la empresa tiene las mercancías — están en existencias, y existe la obligación de pagar. El tratamiento correcto es devengar el pasivo al cierre del ejercicio (a menudo llamado GRNI — mercancías recibidas no facturadas), normalmente usando el precio del pedido de compra, y regularizar cuando llegue la factura.',
          'Omitir el GRNI es el generador clásico de pasivos no registrados: las existencias se cuentan (así que los activos parecen correctos) pero falta la cuenta a pagar (así que los pasivos están infravalorados y el resultado sobrevalorado). Los auditores lo buscan específicamente conciliando las facturas de compra de enero con los albaranes de recepción de diciembre — si no lo devengaste, lo encontrarán.'
        ],
        bullets: ['Mercancías recibidas en diciembre + factura en enero → devengar el pasivo en diciembre (GRNI).', 'Usar el precio del pedido como estimación; regularizar al recibir la factura.', 'Prueba del auditor: muestrear facturas de enero y rastrearlas hasta las fechas de recepción.']
      },
      {
        heading: 'Corte de ingresos: facturado antes de la entrega',
        paragraphs: [
          'El 30 de diciembre la empresa factura a un cliente $30,000 por un trabajo de consultoría que se entregará en enero — y el efectivo llega el mismo día. Tentador contabilizar ingresos en diciembre. Error. Según la NIIF 15, los ingresos se reconocen cuando (o a medida que) se satisface la obligación de desempeño — cuando se entrega el servicio. Facturar antes crea un pasivo por contrato (ingresos diferidos), no ingresos.',
          'Este es el corte funcionando en la dirección de los ingresos, y aquí es donde vive la gestión del resultado: adelantar las ventas de enero a diciembre maquilla el ejercicio recién terminado. El control refleja el del lado de los gastos: conciliar las facturas de diciembre con la prueba de entrega o de prestación del servicio antes de reconocer un solo dólar de ingresos.'
        ],
        journal: {
          transaction: 'Factura emitida el 30 de diciembre ($30,000) por servicios a entregar en enero; efectivo recibido',
          lines: [
            { account: 'Efectivo', dr: 30000, cr: null },
            { account: 'Pasivo por contrato (ingresos diferidos)', dr: null, cr: 30000 }
          ],
          narration: 'Sin prestación aún, sin ingresos: la obligación de entregar queda como pasivo hasta enero.'
        },
        impact: { pl: 'Ingresos y resultado de diciembre no afectados — los $30,000 serán ingresos en enero, a la entrega.', bs: 'Efectivo $30,000 arriba, pasivo por contrato $30,000 arriba a 31 de diciembre.', cf: 'Entrada de efectivo en el flujo operativo de diciembre, sin resultado de diciembre que la acompañe — una divergencia clásica entre resultado y tesorería.' },
        callout: { type: 'warning', text: 'Facturado no significa devengado. Los ingresos siguen a la entrega de la obligación de desempeño — facturar antes crea un pasivo, no ingresos.' }
      },
      {
        heading: 'Mercancías en tránsito: ¿de quién son al cierre del ejercicio?',
        paragraphs: [
          'Las mercancías expedidas el 30 de diciembre que llegan el 3 de enero pertenecen a alguien a 31 de diciembre — y las condiciones de entrega deciden quién. En FOB puerto de embarque (franco a bordo en origen), la propiedad pasa cuando las mercancías salen del vendedor: el comprador las incluye en existencias al cierre (y devenga la cuenta a pagar), aunque el camión siga en carretera. En FOB destino, la propiedad pasa a la llegada: las mercancías siguen en las existencias del vendedor al cierre.',
          'Hacerlo mal y las existencias se cuentan dos veces (ambos lados las incluyen) o desaparecen (ningún lado las incluye) — y el recuento físico no salvará, porque las mercancías están en un camión, no en ninguno de los almacenes. Los procedimientos de corte al cierre siempre incluyen una revisión de los envíos en tránsito frente a sus condiciones.'
        ],
        table: { headers: ['Condiciones', 'La propiedad se transmite', 'A 31 de diciembre, las mercancías están en', '¿El comprador devenga la cuenta a pagar?'], rows: [['FOB puerto de embarque', 'Al embarque (30 dic)', 'Existencias del comprador', 'Sí'], ['FOB destino', 'A la llegada (3 ene)', 'Existencias del vendedor', 'No']] }
      },
      {
        heading: 'Pruebas de corte: cómo los auditores comprueban el trabajo',
        paragraphs: [
          'Los auditores no se fían del corte — lo prueban en ambas direcciones. Para compras: muestrear facturas registradas en los primeros días de enero y rastrearlas hasta los albaranes de recepción — todo lo recibido en diciembre debería haberse devengado. Para ventas: muestrear facturas de diciembre cercanas al cierre y exigir prueba de entrega con fecha de diciembre; luego muestrear facturas de enero y comprobar que nada expedido en diciembre quedó retenido.',
          'Lo elegante de las pruebas de corte es que se autocontrolan: las pruebas de integridad (enero → diciembre) detectan pasivos infravalorados e ingresos adelantados; las pruebas de ocurrencia (diciembre → prueba) detectan actividad de diciembre sobrevalorada. Un expediente de corte limpio — registros de recepción, pruebas de entrega y el cálculo del GRNI — hace estas pruebas rápidas y aburridas, que es exactamente lo que se quiere.'
        ],
        steps: ['Paso 1 — Extraer todas las facturas de compra de los primeros 10 días de enero; rastrear cada una hasta su fecha de recepción.', 'Paso 2 — Toda mercancía recibida en diciembre sin devengo en diciembre: proponer un ajuste.', 'Paso 3 — Extraer las facturas de venta de diciembre de los últimos 5 días; exigir prueba de entrega con fecha de diciembre.', 'Paso 4 — Extraer las facturas de venta de enero de los primeros 5 días; verificar que nada expedido en diciembre quedó retenido.', 'Paso 5 — Revisar los envíos en tránsito al cierre frente a las condiciones FOB.']
      },
      {
        heading: 'Errores de corte y su impacto en los estados financieros',
        paragraphs: [
          'Cada error de corte mide mal dos periodos en direcciones opuestas — por eso «se compensa con el tiempo» no es defensa para los estados del ejercicio actual. La tabla siguiente mapea los errores clásicos con sus efectos; usarla como lista de comprobación al revisar el cierre.'
        ],
        table: { headers: ['Error', 'Cuenta de resultados del ejercicio', 'Balance a cierre'], rows: [['Gasto de diciembre contabilizado en enero', 'Resultado sobrevalorado', 'Pasivos infravalorados'], ['Gasto de enero anticipado a diciembre', 'Resultado infravalorado', 'Pasivos sobrevalorados'], ['GRNI de diciembre omitido', 'Resultado sobrevalorado', 'Existencias correctas (contadas), cuentas a pagar infravaloradas'], ['Ingresos facturados en dic, entregados en ene', 'Ingresos/resultado sobrevalorados', 'Falta el pasivo por contrato; cuentas a cobrar sobrevaloradas'], ['Mercancías en tránsito FOB puerto de embarque ignoradas por el comprador', 'Sin efecto aún en resultados', 'Existencias y cuentas a pagar del comprador infravaloradas']] }
      }
    ],
    mistakes: [
      'Registrar los gastos por fecha de factura en lugar de por fecha de servicio o entrega.',
      'Reconocer ingresos al facturar en lugar de cuando se satisface la obligación de desempeño.',
      'Ignorar las mercancías en tránsito al cierre — existencias contadas dos veces o desaparecidas.',
      'Tratar el GRNI como «problema del mes que viene» en lugar de devengarlo al cierre.',
      'Contabilizar abonos de enero contra los ingresos de diciembre sin comprobar cuándo se devolvieron las mercancías.',
      'Suponer que la fecha de contabilización del ERP coincide siempre con la fecha del hecho económico.'
    ],
    interviewQA: [
      { q: 'Una factura con fecha 5 de enero se refiere a servicios de diciembre. ¿Cuándo reconoces el gasto?', a: 'En diciembre. El corte sigue al hecho económico — el servicio se prestó en diciembre — no a la fecha de la factura. Devengaría el gasto en diciembre (debe al gasto, haber a pasivos devengados) y dejaría que la factura de enero cancelara el devengo. Contabilizarlo en enero sobrevalora el resultado de diciembre e infravalora el de enero. El control es preguntar a los departamentos al cierre qué servicios de diciembre llegaron sin factura.' },
      { q: '¿Cómo prueban los auditores el corte?', a: 'En ambas direcciones. Para la integridad: muestrear facturas de compra de enero y rastrearlas hasta las fechas de recepción — todo lo recibido en diciembre debería haberse devengado (la prueba del GRNI). Para la ocurrencia: muestrear facturas de venta de diciembre cercanas al cierre y exigir prueba de entrega con fecha de diciembre, y comprobar en las ventas de principios de enero que nada expedido en diciembre quedó retenido. También revisan los envíos en tránsito frente a las condiciones FOB. Un expediente limpio de registros de recepción, pruebas de entrega y el cálculo del GRNI lo hace rápido.' },
      { q: 'Mercancías expedidas el 30 de diciembre FOB destino, que llegan el 3 de enero — ¿existencias de quién a 31 de diciembre?', a: 'Del vendedor. En FOB destino, la propiedad pasa a la llegada, así que a 31 de diciembre las mercancías siguen siendo existencias del vendedor y el comprador no devenga nada. En FOB puerto de embarque sería al revés: el comprador es propietario desde el embarque y las incluye en existencias (con la cuenta a pagar devengada). El recuento físico no puede resolverlo — las mercancías están en un camión — así que hay que comprobar las condiciones.' }
    ],
    quiz: [
      { question: '¿Qué significa el corte de operaciones en contabilidad?', options: ['Registrar cada transacción en el periodo en que ocurrió el hecho económico', 'Detener todos los apuntes el último día del mes', 'Recortar costes al cierre para cumplir objetivos', 'Cerrar los libros exactamente a medianoche del 31 de diciembre'], answer: 0, explanation: 'El corte aplica el principio de devengo en los límites del periodo: el periodo contable sigue al hecho (servicio prestado, mercancías entregadas), no a la fecha de la factura ni a la de contabilización.', difficulty: 'Foundation', topic: 'Cut-off Concept', skill: 'Month-End Closing' },
      { question: 'Una factura recibida el 8 de enero por $12,000 de servicios de mantenimiento de diciembre pertenece a:', options: ['Enero — contabilizarla al facturar', 'Repartida a partes iguales entre diciembre y enero', 'Diciembre — devengar el gasto en diciembre', 'El periodo que tenga presupuesto disponible'], answer: 2, explanation: 'El servicio se prestó en diciembre, así que diciembre soporta el gasto mediante un devengo. La fecha de la factura no determina el periodo.', difficulty: 'Intermediate', topic: 'Expense Cut-off', skill: 'Month-End Closing' },
      { question: 'Las mercancías llegan el 28 de diciembre; la factura del proveedor llega el 6 de enero. A 31 de diciembre se debe:', options: ['Ignorar ambas hasta que llegue la factura en enero', 'Incluir las mercancías en existencias pero no registrar pasivo', 'Registrar el pasivo pero excluir las mercancías de existencias', 'Incluir las mercancías en existencias y devengar el pasivo (GRNI)'], answer: 3, explanation: 'Se tienen las mercancías y se debe el dinero al cierre — se reconocen ambos lados del hecho: existencias arriba, pasivo devengado arriba (normalmente al precio del pedido, regularizado después).', difficulty: 'Intermediate', topic: 'GRNI', skill: 'Month-End Closing' },
      { question: 'El 30 de diciembre facturas $30,000 por consultoría a entregar en enero, y el efectivo llega de inmediato. El tratamiento correcto en diciembre es:', options: ['Debe Efectivo $30,000 / Haber Ingresos ordinarios $30,000', 'Debe Efectivo $30,000 / Haber Pasivo por contrato $30,000 — sin ingresos en diciembre', 'Debe Cuentas a cobrar $30,000 / Haber Ingresos ordinarios $30,000', 'Sin asiento hasta enero'], answer: 1, explanation: 'Según la NIIF 15 los ingresos siguen a la satisfacción de la obligación de desempeño. Facturar antes crea un pasivo por contrato; los $30,000 serán ingresos en enero, a la entrega. (El efectivo se recibe, así que se registra — contra el pasivo.)', difficulty: 'Intermediate', topic: 'Revenue Cut-off', skill: 'IFRS Fundamentals' },
      { question: '¿Qué asiento revierte correctamente ingresos reconocidos prematuramente por $30,000 (facturados pero aún no entregados)?', options: ['Debe Ingresos ordinarios $30,000 / Haber Pasivo por contrato $30,000', 'Debe Pasivo por contrato $30,000 / Haber Ingresos ordinarios $30,000', 'Debe Efectivo $30,000 / Haber Ingresos ordinarios $30,000', 'Debe Gastos $30,000 / Haber Ingresos ordinarios $30,000'], answer: 0, explanation: 'Los ingresos deben salir (debe) y la obligación de entregar va al balance como pasivo por contrato (haber) hasta que se produzca la prestación.', difficulty: 'Intermediate', topic: 'Revenue Cut-off', skill: 'IFRS Fundamentals' },
      { question: 'Mercancías expedidas el 30 de diciembre FOB puerto de embarque, que llegan el 3 de enero. A 31 de diciembre son:', options: ['Existencias del vendedor — la propiedad pasa a la llegada', 'Existencias de ninguna de las partes hasta la llegada', 'Existencias de ambas partes', 'Existencias del comprador — la propiedad pasó al embarque'], answer: 3, explanation: 'FOB puerto de embarque: la propiedad (y el riesgo) pasan cuando las mercancías salen del vendedor. El comprador las incluye en las existencias del cierre y devenga la cuenta a pagar.', difficulty: 'Advanced', topic: 'Goods in Transit', skill: 'Month-End Closing' },
      { question: 'El mismo envío, pero FOB destino. A 31 de diciembre las mercancías son:', options: ['Existencias del comprador — el embarque basta', 'Dadas de baja como perdidas en tránsito', 'Existencias del vendedor — la propiedad pasa a la llegada', 'Registradas como venta por el vendedor'], answer: 2, explanation: 'FOB destino: la propiedad pasa a la llegada (3 de enero). Al cierre las mercancías siguen siendo existencias del vendedor; aún no se registra venta.', difficulty: 'Advanced', topic: 'Goods in Transit', skill: 'Month-End Closing' },
      { question: 'Un servicio de $10,000 se presta uniformemente del 15 de diciembre al 15 de enero, facturado el 20 de enero. El reparto correcto es:', options: ['$10,000 en enero, al facturar', '$10,000 en diciembre, cuando empezó el trabajo', '$10,000 en diciembre porque la factura cubre mayormente diciembre', '$5,000 de gasto en diciembre, $5,000 en enero'], answer: 3, explanation: 'El servicio se devenga uniformemente durante el periodo de prestación — aproximadamente la mitad en cada mes. El corte sigue el patrón de la prestación, prorrateado.', difficulty: 'Intermediate', topic: 'Pro-rating', skill: 'Month-End Closing' },
      { question: '¿Por qué importa el corte a los usuarios de los estados financieros?', options: ['No tiene efecto — todo se compensa con el tiempo', 'Solo importa para impuestos, no para los inversores', 'Las transacciones mal asignadas miden mal el resultado y el fondo de maniobra en dos periodos a la vez', 'Solo afecta al estado de flujos de efectivo'], answer: 2, explanation: 'Cada error de corte sobrevalora un periodo e infravalora el siguiente: el resultado, los pasivos y el fondo de maniobra quedan distorsionados en el ejercicio informado — «se compensa después» no es defensa para unos estados mal medidos.', difficulty: 'Foundation', topic: 'Cut-off Concept', skill: 'IFRS Fundamentals' },
      { question: 'Un auditor que prueba el corte de compras lo más probable es que:', options: ['Pregunte a la dirección si el corte fue correcto', 'Muestree facturas de enero y las rastree hasta las fechas de recepción', 'Solo compruebe las facturas de diciembre', 'Ignore enero por completo'], answer: 1, explanation: 'Las pruebas de integridad trabajan hacia atrás desde el periodo siguiente: las facturas de enero por recepciones de diciembre revelan pasivos no devengados (GRNI omitido).', difficulty: 'Intermediate', topic: 'Cut-off Testing', skill: 'Month-End Closing' },
      { question: 'Un cliente devuelve mercancías el 30 de diciembre; emites el abono el 4 de enero. La devolución pertenece a:', options: ['Diciembre — las mercancías volvieron en diciembre, así que se ajustan los ingresos de diciembre', 'Enero — manda la fecha del abono', 'Ninguno — las devoluciones están fuera de libros', 'Diciembre solo si el importe es significativo'], answer: 0, explanation: 'El hecho económico (la devolución) ocurrió en diciembre, así que los ingresos de diciembre se reducen — normalmente mediante un devengo por el abono esperado. El documento de enero cancela el devengo.', difficulty: 'Advanced', topic: 'Sales Returns', skill: 'Month-End Closing' },
      { question: 'Los salarios de diciembre se pagan el 5 de enero. Los salarios pertenecen a:', options: ['Enero — el día de pago determina el periodo', 'Diciembre — devengar el coste en diciembre', 'Repartidos entre los dos meses por fecha de pago', 'Diciembre solo a efectos fiscales'], answer: 1, explanation: 'Los empleados trabajaron en diciembre, así que el coste es de diciembre — devengado al cierre del mes con independencia de la fecha de pago de enero.', difficulty: 'Intermediate', topic: 'Payroll Cut-off', skill: 'Month-End Closing' }
    ]
  },
  {
    id: 'm29', level: 7, levelTitle: 'Financial Reporting Operations', title: 'Contabilidad de nóminas',
    standard: 'IAS 19', tagline: 'Salario bruto, retenciones y cotizaciones patronales: el coste íntegro de las personas.',
    description: 'La nómina suele ser la mayor línea de gasto — y una de las peor contabilizadas. Este módulo desglosa la nómina en sus partes (salario bruto, retenciones al empleado, cotizaciones patronales), recorre el asiento completo de la nómina, cubre devengos y bonus, y destila el tratamiento de la NIC 19 para los beneficios a corto plazo y post-empleo.',
    minutes: 16, skills: ['Month-End Closing'],
    sections: [
      {
        heading: 'La anatomía de la nómina',
        paragraphs: [
          'Toda nómina tiene tres capas. El salario bruto es lo que el empleado ha ganado. Las retenciones al empleado se deducen de él: el impuesto sobre la renta (la empresa lo recauda y lo ingresa a la Hacienda pública) y la cuota del empleado a la Seguridad Social. El neto a pagar — bruto menos retenciones — es lo que llega a la cuenta bancaria del empleado. Luego está la capa que muchos olvidan: las cotizaciones patronales — la cuota de la empresa a la Seguridad Social y cargas similares — que son un coste adicional sobre el salario bruto, no una deducción de él.',
          'La consecuencia contable: el coste total de la nómina para la empresa es salarios brutos más cotizaciones patronales. Las retenciones no son gastos — son importes que la empresa debe a terceros (Hacienda, fondos de la Seguridad Social) en nombre del empleado. Confundir retenciones con costes infravalora el verdadero coste del empleo.'
        ],
        table: { headers: ['Componente', 'Ejemplo', 'Naturaleza contable'], rows: [['Salario bruto', '$200,000', 'Gasto — coste del servicio'], ['IRPF retenido', '$40,000', 'Pasivo — debido a la Hacienda pública'], ['Seguridad Social del empleado', '$12,000', 'Pasivo — debido a la Seguridad Social'], ['Neto a pagar', '$148,000', 'Pasivo — debido a los empleados hasta el día de pago'], ['Seguridad Social patronal', '$50,000', 'Gasto — coste adicional para la empresa']] },
        callout: { type: 'key', text: 'Coste total de la nómina = salarios brutos + cotizaciones patronales. Las retenciones son pasivos, no ahorros.' }
      },
      {
        heading: 'El asiento de la nómina',
        paragraphs: [
          'Un solo asiento mensual captura toda la nómina. Al debe los gastos — salarios brutos y cotizaciones patronales. Al haber los pasivos — IRPF retenido, Seguridad Social total a pagar (cuotas del empleado y de la empresa), y salarios netos a pagar. El día de pago, un segundo asiento cancela el pasivo de neto a pagar contra efectivo; los pasivos de IRPF y Seguridad Social se cancelan al ingresarlos a las administraciones.',
          'Recorrer los importes: salarios brutos $200,000, IRPF retenido $40,000, Seguridad Social del empleado $12,000, Seguridad Social patronal $50,000. Neto a pagar = $200,000 − $40,000 − $12,000 = $148,000. Seguridad Social total a pagar = $12,000 + $50,000 = $62,000. Debes: $250,000. Haberes: $40,000 + $62,000 + $148,000 = $250,000.'
        ],
        journal: {
          transaction: 'Registrar la nómina de diciembre: bruto $200,000; IRPF retenido $40,000; Seguridad Social del empleado $12,000; Seguridad Social patronal $50,000',
          lines: [
            { account: 'Sueldos y salarios', dr: 200000, cr: null },
            { account: 'Cuotas patronales de Seguridad Social', dr: 50000, cr: null },
            { account: 'Retenciones de IRPF pendientes de pago', dr: null, cr: 40000 },
            { account: 'Seguridad Social pendiente de pago', dr: null, cr: 62000 },
            { account: 'Salarios pendientes de pago (neto)', dr: null, cr: 148000 }
          ],
          narration: 'Reconocer el coste íntegro de la nómina de $250,000: $200,000 de salarios brutos más $50,000 de cargas patronales; las retenciones y el neto a pagar quedan como pasivos hasta su pago.'
        },
        impact: { pl: 'Resultado reducido por el coste íntegro de la nómina de $250,000 — no solo por los $148,000 de neto a pagar.', bs: 'Los pasivos aumentan en $250,000 (salarios, IRPF y Seguridad Social a pagar).', cf: 'Salida de efectivo operativa de $250,000 a medida que se liquida cada pasivo (día de pago, luego las liquidaciones fiscales).' }
      },
      {
        heading: 'Devengos y bonus',
        paragraphs: [
          'La nómina rara vez respeta el cierre del mes: si el día de pago es el 5, devengar los últimos días de diciembre (salarios y cargas patronales) para que diciembre soporte su verdadero coste. Los bonus necesitan el mismo tratamiento con una prueba extra — ¿existe obligación? Un plan de bonus contractual o bien establecido crea una obligación implícita: devengar la mejor estimación cada mes a medida que se presta el servicio. Un bonus puramente discrecional «quizá» sin compromiso no se devenga hasta que se decide.',
          'El cierre del ejercicio es temporada de bonus y temporada de estimaciones a la vez: el devengo del bonus debe reflejar el desempeño hasta la fecha, las bajas esperadas y la fórmula del plan. Los auditores lo prueban contra las reglas del plan y los patrones de pago de años anteriores — un devengo de bonus que nunca se parece a los pagos reales es un ajuste de auditoría permanente.'
        ],
        journal: {
          transaction: 'Devengar la parte de diciembre de los bonus anuales: $30,000 devengados pero aún no pagados',
          lines: [
            { account: 'Gastos por bonus', dr: 30000, cr: null },
            { account: 'Provisión por bonus', dr: null, cr: 30000 }
          ],
          narration: 'Los bonus se devengan a medida que se presta el servicio bajo un plan establecido; la parte impagada es un pasivo al cierre del ejercicio.'
        },
        impact: { pl: 'Resultado de diciembre $30,000 menor.', bs: 'Pasivo por provisión de bonus de $30,000.', cf: 'Sin efecto en tesorería hasta que se paguen los bonus.' }
      },
      {
        heading: 'Controles de la nómina',
        paragraphs: [
          'La nómina es un foco de fraude — empleados fantasma, horas infladas, neto a pagar desviado — así que los controles son estrictos. Segregación: quien da de alta a los nuevos empleados no puede aprobar la nómina, y quien procesa la nómina no puede modificar los datos bancarios en solitario. Cada proceso de nómina necesita revisión y aprobación independientes antes del pago; los cambios en datos maestros (nuevos empleados, cambios de cuenta bancaria, ajustes salariales) necesitan doble autorización con evidencia.',
          'Las conciliaciones cierran el círculo: el coste de nómina según el informe de nómina cuadra con las cuentas de nómina del mayor; la plantilla según la nómina cuadra con los registros de RR. HH.; y el neto a pagar según el fichero bancario cuadra con la cuenta puente de salarios a pagar. Una cuenta puente que no queda a cero después del día de pago está agitando una señal de alerta.'
        ],
        bullets: ['Segregar: alta de empleados, proceso de nómina y cambios de datos bancarios en distintas manos.', 'Doble autorización para cambios en datos maestros (nuevas altas, cuentas bancarias, salarios).', 'Conciliar informe de nómina → mayor → plantilla → fichero bancario en cada proceso.']
      },
      {
        heading: 'La NIC 19 en una página',
        paragraphs: [
          'La NIC 19 (Retribuciones a los empleados) clasifica los beneficios por momento. Los beneficios a corto plazo — salarios, permisos retribuidos, participación en beneficios pagadera en doce meses — se reconocen sin descontar a medida que los empleados prestan el servicio, que es exactamente la lógica de devengo anterior. Los permisos retribuidos acumulativos (vacaciones no disfrutadas trasladadas) se devengan a medida que se generan.',
          'Los beneficios post-empleo se dividen en dos. Planes de aportación definida (la empresa paga una aportación fija a un fondo): el gasto es simplemente la aportación debida del periodo — sin drama actuarial. Planes de prestación definida (la empresa promete un nivel de pensión): la obligación se mide actuarialmente con el coste de los servicios y el interés neto en la cuenta de resultados y las nuevas mediciones en otro resultado global — conceptualmente, la empresa soporta el riesgo de inversión y de longevidad. Las indemnizaciones por cese se reconocen cuando la empresa ya no puede retirar la oferta.'
        ],
        callout: { type: 'interview', text: 'Clásico de entrevista: «¿Aportación definida frente a prestación definida?» En un plan de aportación definida la obligación de la empresa termina con la aportación — el gasto equivale a las aportaciones debidas. En un plan de prestación definida la empresa garantiza un resultado, así que mantiene una obligación medida actuarialmente, con el riesgo actuarial y de inversión en su propio balance.' }
      }
    ],
    mistakes: [
      'Registrar solo el neto a pagar como gasto — las cargas sociales patronales son un coste adicional real.',
      'Olvidar devengar el tramo parcial cuando el día de pago cae después del cierre del mes.',
      'Compensar las retenciones al empleado contra el gasto salarial en lugar de mostrar los pasivos debidos a las administraciones.',
      'Devengar un bonus sin plan ni compromiso — la esperanza no es una obligación implícita.',
      'Contabilizar la nómina por fecha de pago en lugar de por periodo de servicio, distorsionando las tendencias mensuales.',
      'Dejar que la cuenta puente de salarios a pagar mantenga saldo después del día de pago sin investigarlo.'
    ],
    interviewQA: [
      { q: 'Explícame el asiento de la nómina.', a: 'Cada mes cargo al debe el coste íntegro — salarios brutos y Seguridad Social patronal — y abono al haber los pasivos: IRPF retenido, Seguridad Social total a pagar (cuotas del empleado más las patronales) y salarios netos a pagar. Por ejemplo: $200,000 de bruto más $50,000 de cargas patronales dan $250,000 de debes; los haberes son $40,000 de IRPF retenido, $62,000 de Seguridad Social y $148,000 de neto a pagar. El día de pago cancela el neto a pagar contra efectivo. El punto clave que siempre destaco: el gasto es $250,000, no los $148,000 de neto a pagar — las retenciones son pasivos, no ahorros de coste.' },
      { q: '¿Cómo contabilizas un bonus de cierre de ejercicio que no se pagará hasta marzo?', a: 'Si existe un plan de bonus contractual o establecido que crea una obligación, devengo la mejor estimación cada mes a medida que se presta el servicio — debe a gasto por bonus, haber a provisión por bonus — para que diciembre soporte su parte. La estimación refleja la fórmula del plan, el desempeño hasta la fecha y las bajas esperadas. Si el bonus es puramente discrecional sin compromiso, no hay obligación y nada se devenga hasta que se toma la decisión. Los auditores probarán el devengo contra las reglas del plan y los patrones históricos de pago.' }
    ],
    quiz: [
      { question: 'Un empleado gana un salario bruto de $5,000; el IRPF retenido es $1,000 y la Seguridad Social del empleado es $300. El neto a pagar es:', options: ['$3,700', '$5,000', '$4,000', '$4,700'], answer: 0, explanation: 'Neto a pagar = bruto − retenciones = $5,000 − $1,000 − $300 = $3,700. Esto es lo que recibe el empleado.', difficulty: 'Foundation', topic: 'Payroll Components', skill: 'Month-End Closing' },
      { question: 'Los salarios brutos son $200,000 y la Seguridad Social patronal es $50,000. El coste total de la nómina para la empresa es:', options: ['$200,000', '$150,000', '$148,000', '$250,000'], answer: 3, explanation: 'Coste total = salarios brutos + cotizaciones patronales = $200,000 + $50,000 = $250,000. Las retenciones al empleado no reducen el coste de la empresa.', difficulty: 'Intermediate', topic: 'Payroll Cost', skill: 'Month-End Closing' },
      { question: 'En el asiento mensual de la nómina, ¿qué cuentas se abonan al haber?', options: ['Gasto salarial y gasto de Seguridad Social patronal', 'Efectivo y descubierto bancario', 'IRPF retenido a pagar, Seguridad Social a pagar y salarios a pagar (neto)', 'Provisión por bonus y salarios anticipados'], answer: 2, explanation: 'Los gastos van al debe; las obligaciones — con los empleados (neto a pagar), con la Hacienda pública y con los fondos de la Seguridad Social — van al haber como pasivos hasta su liquidación.', difficulty: 'Intermediate', topic: 'Payroll Journal', skill: 'Month-End Closing' },
      { question: '¿Cuándo se reconoce el gasto salarial?', options: ['El día de pago, cuando se paga el efectivo', 'Cuando se firma el contrato de trabajo', 'Al cierre del ejercicio en un único asiento anual', 'A medida que los empleados prestan el servicio (el mes trabajado)'], answer: 3, explanation: 'Según la NIC 19 y el principio de devengo, los beneficios a corto plazo se reconocen a medida que se presta el servicio. El momento del pago solo afecta al efectivo y a la cuenta a pagar.', difficulty: 'Foundation', topic: 'Recognition', skill: 'Month-End Closing' },
      { question: 'Un plan de bonus garantiza pagos según objetivos anuales; a 31 de diciembre hay $30,000 devengados pero impagados. El tratamiento correcto es:', options: ['Devengar: Debe Gastos por bonus $30,000 / Haber Provisión por bonus $30,000', 'Esperar al pago en marzo para reconocer nada', 'Solo informar — los bonus nunca se devengan', 'Debe Provisión por bonus $30,000 / Haber Gastos por bonus $30,000'], answer: 0, explanation: 'Un plan establecido crea una obligación implícita: el bonus se devenga con el servicio, así que diciembre registra el pasivo. El pago de marzo lo cancelará.', difficulty: 'Intermediate', topic: 'Bonus Accrual', skill: 'Month-End Closing' },
      { question: 'En un plan de pensiones de aportación definida, el gasto por pensiones de la empresa del periodo equivale a:', options: ['Un coste de los servicios calculado actuarialmente', 'Las aportaciones debidas del periodo', 'Las pensiones realmente pagadas a los jubilados', 'Cero — el fondo soporta todo el coste'], answer: 1, explanation: 'En un plan de aportación definida la obligación termina con la aportación — sin medición actuarial, sin riesgo en balance. Gasto = aportaciones a pagar.', difficulty: 'Advanced', topic: 'IAS 19', skill: 'Month-End Closing' },
      { question: 'Se registra una nómina mensual de $250,000. El efecto inmediato en los estados financieros es:', options: ['Resultado $148,000 menor (solo el neto a pagar)', 'Activos $250,000 menores de inmediato', 'Resultado $250,000 menor y pasivos $250,000 mayores', 'Sin efecto hasta el día de pago'], answer: 2, explanation: 'El coste íntegro golpea el resultado cuando se presta el servicio, con $250,000 de cuentas a pagar como contrapartida. El efectivo cae después, a medida que se liquida cada pasivo.', difficulty: 'Intermediate', topic: 'FS Impact', skill: 'Month-End Closing' },
      { question: 'El IRPF retenido a los empleados sobre los salarios es:', options: ['Una reducción del gasto salarial', 'Un activo — recuperable del empleado', 'Parte de la Seguridad Social patronal', 'Un pasivo — la empresa lo debe a la Hacienda pública'], answer: 3, explanation: 'La retención convierte a la empresa en agente recaudador: el importe se debe a la Hacienda pública, así que queda como pasivo hasta su ingreso — nunca reduce el gasto.', difficulty: 'Foundation', topic: 'Deductions', skill: 'Month-End Closing' },
      { question: 'La cuenta puente de salarios a pagar aún muestra saldo dos semanas después del día de pago. Lo más probable es que indique:', options: ['Importes impagados, errores de contabilización o un descuadre del fichero bancario que debe investigarse', 'Momento normal — siempre mantiene saldo', 'Resultado que puede liberarse a ingresos', 'Una devolución fiscal pendiente'], answer: 0, explanation: 'La cuenta puente debería quedar a cero después del día de pago. Un saldo persistente significa que algo no se liquidó — pagos fallidos, apuntes erróneos o problemas de datos maestros — y necesita investigación, no paciencia.', difficulty: 'Intermediate', topic: 'Payroll Controls', skill: 'Month-End Closing' }
    ]
  },
  {
    id: 'm30', level: 7, levelTitle: 'Financial Reporting Operations', title: 'Contabilidad fiscal — Introducción a la NIC 12',
    standard: 'IAS 12', tagline: 'El resultado contable y el resultado fiscal son primos, no gemelos.',
    description: 'La NIC 12 tiende un puente entre el resultado de los estados financieros y el resultado que grava la administración tributaria. Este módulo introduce el impuesto corriente frente al diferido, las diferencias temporarias (importe en libros frente a base fiscal) y los dos resultados centrales: las diferencias temporarias imponibles crean pasivos por impuesto diferido, las deducibles crean activos por impuesto diferido.',
    minutes: 18, skills: ['IFRS Fundamentals'],
    sections: [
      {
        heading: 'Impuesto corriente frente a impuesto diferido',
        paragraphs: [
          'El impuesto corriente es el impuesto a pagar (o recuperar) sobre el resultado fiscal de este año — calculado según la normativa fiscal, pagadero a la administración, normalmente en los meses siguientes al cierre. El impuesto diferido es la consecuencia fiscal futura de cosas ya incluidas en los estados financieros: si el importe en libros de un activo producirá en el futuro más renta imponible de la que permite su base fiscal, parte del resultado contable de hoy queda gravada, en efecto, mañana.',
          'El gasto total por impuesto sobre beneficios en la cuenta de resultados es la suma de ambos: gasto por impuesto corriente más gasto por impuesto diferido (o menos ingreso por impuesto diferido). Los analistas vigilan la relación entre ambos — una empresa cuyo impuesto corriente está persistentemente muy por debajo de su gasto contable por impuestos está difiriendo impuestos al futuro, útil saberlo antes de alabar su «baja» tributación.'
        ],
        callout: { type: 'key', text: 'Gasto por impuesto sobre beneficios = impuesto corriente + impuesto diferido. El impuesto corriente se liquida con la administración ahora; el impuesto diferido sigue al impuesto que pertenece a estos estados pero se pagará (o ahorrará) después.' }
      },
      {
        heading: 'Diferencias temporarias: importe en libros frente a base fiscal',
        paragraphs: [
          'Una diferencia temporaria es la brecha entre el importe en libros de un activo o pasivo (en el balance NIIF) y su base fiscal (su importe a efectos fiscales). La palabra temporaria importa: la diferencia se revertirá con el tiempo a medida que el activo se recupere o el pasivo se liquide. Compárese con las diferencias permanentes — una multa no deducible, un ingreso exento — que nunca se revierten y nunca crean impuesto diferido.',
          'La dirección lo es todo. Si recuperar el activo creará en el futuro más importes imponibles de los que implica su base fiscal, la diferencia es imponible y produce un pasivo por impuesto diferido. Si liquidar la partida creará deducciones fiscales futuras, la diferencia es deducible y produce un activo por impuesto diferido. Trabajarlo con los ejemplos siguientes hasta que la dirección resulte mecánica.'
        ],
        table: { headers: ['Situación', 'Importe en libros frente a base fiscal', 'Tipo', 'Resultado'], rows: [['Maquinaria: importe en libros $100,000, base fiscal $40,000', 'Importe en libros > base fiscal', 'Diferencia temporaria imponible', 'Pasivo por impuesto diferido'], ['Provisión por garantías: importe en libros $30,000, base fiscal $0', 'Importe en libros > base fiscal (pasivo)', 'Diferencia temporaria deducible', 'Activo por impuesto diferido'], ['Multa no deducible devengada $10,000', 'Nunca deducible', 'Diferencia permanente', 'Sin impuesto diferido']] }
      },
      {
        heading: 'Pasivos por impuesto diferido: diferencias temporarias imponibles',
        paragraphs: [
          'El DTL de manual: la amortización fiscal acelerada. Una maquinaria con importe en libros de $100,000 en la contabilidad NIIF tiene una base fiscal de solo $40,000 porque la normativa fiscal permitió amortizarla más rápido. Cuando los $100,000 restantes de importe en libros se recuperen mediante el uso, el resultado fiscal superará al resultado contable en $60,000 — impuesto que pertenece, económicamente, a los periodos que reconocieron el resultado contable. Con un tipo impositivo del 25%, el pasivo por impuesto diferido es $60,000 × 25% = $15,000.',
          'Los DTL se miden con el tipo impositivo que se espera aplicar cuando la diferencia se revierta — el tipo aprobado o prácticamente aprobado — y nunca se descuentan. Un DTL no es una factura que venza mañana; es la consecuencia fiscal ya incorporada en el balance de hoy, esperando a materializarse.'
        ],
        journal: {
          transaction: 'Reconocer el pasivo por impuesto diferido: diferencia temporaria imponible $60,000 × tipo impositivo 25%',
          lines: [
            { account: 'Gasto por impuesto sobre beneficios (diferido)', dr: 15000, cr: null },
            { account: 'Pasivo por impuesto diferido', dr: null, cr: 15000 }
          ],
          narration: 'Diferencia temporaria imponible de $60,000 (importe en libros $100,000 − base fiscal $40,000) al 25% = $15,000 de DTL.'
        },
        impact: { pl: 'El gasto total por impuestos sube $15,000 (parte diferida); el resultado cae.', bs: 'Aparece un pasivo por impuesto diferido de $15,000 — no corriente.', cf: 'Sin efecto en tesorería: es impuesto a pagar en periodos futuros, no hoy.' }
      },
      {
        heading: 'Activos por impuesto diferido: diferencias temporarias deducibles',
        paragraphs: [
          'Ahora la imagen especular. La empresa reconoce una provisión por garantías de $30,000 — un gasto hoy en la contabilidad NIIF — pero la normativa fiscal solo permite la deducción cuando se pagan realmente las reclamaciones. Importe en libros $30,000, base fiscal $0: una diferencia temporaria deducible de $30,000. Cuando se paguen las reclamaciones, el resultado fiscal será $30,000 menor que el resultado contable — un ahorro fiscal futuro. Al 25%, el activo por impuesto diferido es $7,500.',
          'Los DTA vienen con un guardián: solo se reconocen en la medida en que sea probable disponer de resultados fiscales futuros para utilizarlos. Una empresa con pérdidas sin un giro convincente no puede contabilizar un DTA sobre sus pérdidas fiscales — por grandes que sean. Esta prueba de probabilidad es una de las áreas con más juicio en la contabilidad fiscal y un campo de batalla favorito de la auditoría.'
        ],
        journal: {
          transaction: 'Reconocer el activo por impuesto diferido: diferencia temporaria deducible $30,000 × tipo impositivo 25%',
          lines: [
            { account: 'Activo por impuesto diferido', dr: 7500, cr: null },
            { account: 'Gasto por impuesto sobre beneficios (diferido)', dr: null, cr: 7500 }
          ],
          narration: 'Diferencia temporaria deducible de $30,000 (provisión aún no deducible fiscalmente) al 25% = $7,500 de DTA, reconocido porque el resultado fiscal futuro es probable.'
        },
        impact: { pl: 'El gasto total por impuestos cae $7,500 (ingreso por impuesto diferido); el resultado sube.', bs: 'Aparece un activo por impuesto diferido de $7,500.', cf: 'Sin efecto en tesorería — el ahorro se materializa cuando se pagan las garantías y se deducen.' },
        callout: { type: 'warning', text: 'Un DTA solo se reconoce si el resultado fiscal futuro es probable. Las pérdidas por sí solas no crean un activo — la esperanza no es una estrategia de planificación fiscal.' }
      },
      {
        heading: 'Juntando las piezas: el gasto por impuestos y el tipo efectivo',
        paragraphs: [
          'Gasto total por impuestos = impuesto corriente (sobre el resultado fiscal de este año) ± impuesto diferido (el movimiento de DTL y DTA). Como el resultado contable y el resultado fiscal difieren — momento de la amortización, provisiones, partidas no deducibles — el tipo impositivo efectivo (gasto por impuestos ÷ resultado contable) rara vez equivale al tipo legal. La NIC 12 exige una conciliación que explique la brecha: los gastos no deducibles lo empujan hacia arriba, los ingresos exentos y los créditos lo tiran hacia abajo.',
          'Esa conciliación es oro analítico. Un tipo efectivo a la baja impulsado por DTL crecientes significa que el impuesto se está difiriendo, no evitando — la factura llegará. Un tipo persistentemente por debajo del legal sin explicación merece preguntas escépticas, no aplausos.'
        ],
        bullets: ['Gasto por impuestos = impuesto corriente + movimiento del impuesto diferido.', 'Tipo impositivo efectivo = gasto por impuestos / resultado contable.', 'Conciliar el tipo legal con el efectivo — y leer lo que la brecha está diciendo.']
      }
    ],
    mistakes: [
      'Tratar las diferencias permanentes (multas no deducibles, ingresos exentos) como temporarias — nunca crean impuesto diferido.',
      'Reconocer un activo por impuesto diferido sin comprobar si el resultado fiscal futuro es probable.',
      'Usar el tipo impositivo erróneo — la NIC 12 exige tipos aprobados o prácticamente aprobados, no los del año pasado ni los deseados.',
      'Compensar activos y pasivos por impuesto diferido que corresponden a distintas administraciones tributarias o entidades.',
      'Olvidar revaluar los saldos de impuesto diferido cuando cambian los tipos — el efecto va a la cuenta de resultados.',
      'Descontar los saldos de impuesto diferido — la NIC 12 lo prohíbe.'
    ],
    interviewQA: [
      { q: '¿Cuál es la diferencia entre impuesto corriente e impuesto diferido?', a: 'El impuesto corriente es el impuesto a pagar sobre el resultado fiscal de este año según la normativa fiscal — se liquida con la administración. El impuesto diferido captura las consecuencias fiscales futuras de partidas ya incluidas en los estados financieros: cuando el importe en libros de un activo difiere de su base fiscal, recuperarlo o liquidarlo cambiará el resultado fiscal futuro, así que hoy reconocemos un pasivo o activo por impuesto diferido. El gasto total por impuesto sobre beneficios es la suma de ambos, por eso el gasto por impuestos de una empresa puede diferir notablemente del impuesto que realmente paga este año.' },
      { q: '¿Cuándo reconoces un activo por impuesto diferido?', a: 'Cuando existe una diferencia temporaria deducible — o pérdidas o créditos fiscales no utilizados — y es probable disponer de resultado fiscal futuro para utilizarlo. El ejemplo clásico es una provisión por garantías contabilizada como gasto pero deducible solo cuando se paga: eso crea un ahorro fiscal futuro, luego un DTA. Pero la probabilidad es el guardián — una empresa con pérdidas persistentes sin previsión convincente no puede reconocer el activo, lo que lo convierte en una de las áreas con más juicio de la información financiera.' },
      { q: 'Dame un ejemplo de diferencia temporaria imponible.', a: 'La amortización fiscal acelerada: una maquinaria con importe en libros de $100,000 en el balance NIIF con base fiscal de $40,000. La brecha de $60,000 es imponible — recuperar la maquinaria generará $60,000 más de resultado fiscal de lo que implica la base fiscal — así que con un tipo del 25% reconocemos un pasivo por impuesto diferido de $15,000. Otros ejemplos: ingresos reconocidos en libros antes de ser gravables, o costes de desarrollo activados en libros pero deducidos de inmediato a efectos fiscales.' }
    ],
    quiz: [
      { question: 'El impuesto corriente se describe mejor como:', options: ['El gasto total por impuestos mostrado en la cuenta de resultados', 'El impuesto que se espera pagar en años futuros', 'El impuesto a pagar sobre el resultado fiscal de este año según la normativa fiscal', 'Una provisión solo para posiciones fiscales inciertas'], answer: 2, explanation: 'El impuesto corriente es el importe a pagar (o recuperar) por el resultado fiscal del periodo actual. El gasto total por impuestos suma encima el movimiento del impuesto diferido.', difficulty: 'Foundation', topic: 'Current Tax', skill: 'IFRS Fundamentals' },
      { question: 'Una maquinaria tiene un importe en libros de $100,000 y una base fiscal de $40,000. La diferencia temporaria es:', options: ['$60,000 de diferencia temporaria deducible', '$60,000 de diferencia temporaria imponible', '$140,000 de diferencia temporaria imponible', 'No hay diferencia temporaria'], answer: 1, explanation: '$100,000 − $40,000 = $60,000. Recuperar el activo producirá $60,000 más de resultado fiscal de lo que permite la base fiscal — una diferencia temporaria imponible.', difficulty: 'Intermediate', topic: 'Temporary Differences', skill: 'IFRS Fundamentals' },
      { question: 'Una diferencia temporaria imponible da lugar a:', options: ['Un activo por impuesto diferido', 'Impuesto corriente a pagar', 'Un pasivo por impuesto diferido', 'Ninguna contabilización fiscal'], answer: 2, explanation: 'Imponible = más impuesto en el futuro = pasivo por impuesto diferido. (Las diferencias deducibles dan activos por impuesto diferido.)', difficulty: 'Intermediate', topic: 'DTL', skill: 'IFRS Fundamentals' },
      { question: 'Con un tipo impositivo del 25%, la diferencia temporaria imponible de $60,000 anterior crea:', options: ['Un pasivo por impuesto diferido de $15,000', 'Un activo por impuesto diferido de $15,000', 'Un pasivo por impuesto diferido de $60,000', 'Impuesto corriente a pagar de $15,000'], answer: 0, explanation: '$60,000 × 25% = $15,000 de DTL. El tipo aplicado es el tipo aprobado que se espera cuando la diferencia se revierta.', difficulty: 'Intermediate', topic: 'DTL Measurement', skill: 'IFRS Fundamentals' },
      { question: 'Una diferencia temporaria deducible da lugar a:', options: ['Un pasivo por impuesto diferido', 'Un activo por impuesto diferido', 'Una diferencia permanente', 'Un aumento del impuesto corriente'], answer: 1, explanation: 'Deducible = deducciones fiscales futuras = ahorro fiscal futuro = activo por impuesto diferido (sujeto a la prueba de probabilidad).', difficulty: 'Intermediate', topic: 'DTA', skill: 'IFRS Fundamentals' },
      { question: 'Una provisión por garantías de $30,000 se contabiliza como gasto pero es deducible fiscalmente solo cuando se pagan las reclamaciones. Al 25%, esto crea:', options: ['Un pasivo por impuesto diferido de $7,500', 'Un activo por impuesto diferido de $30,000', 'Sin impuesto diferido — las provisiones son diferencias permanentes', 'Un activo por impuesto diferido de $7,500'], answer: 3, explanation: 'Importe en libros $30,000 frente a base fiscal $0 = $30,000 de diferencia temporaria deducible; $30,000 × 25% = $7,500 de DTA, reconocido si el resultado fiscal futuro es probable.', difficulty: 'Intermediate', topic: 'DTA Measurement', skill: 'IFRS Fundamentals' },
      { question: 'La empresa devenga una multa de $10,000 que nunca es deducible fiscalmente. El efecto fiscal es:', options: ['Un activo por impuesto diferido de $2,500', 'Sin impuesto diferido — es una diferencia permanente', 'Un pasivo por impuesto diferido de $2,500', 'Una reducción del impuesto corriente en $2,500'], answer: 1, explanation: 'Las diferencias permanentes nunca se revierten, así que nunca crean impuesto diferido. La multa simplemente eleva el tipo impositivo efectivo vía la conciliación de tipos.', difficulty: 'Foundation', topic: 'Permanent Differences', skill: 'IFRS Fundamentals' },
      { question: 'Una empresa con historial de pérdidas y sin previsión convincente de resultados futuros tiene grandes diferencias temporarias deducibles. Debe:', options: ['Reconocer el DTA íntegro igualmente', 'Reconocer la mitad del DTA como compromiso', 'No reconocer un activo por impuesto diferido — el resultado fiscal futuro no es probable', 'Reconocer un DTL en su lugar'], answer: 2, explanation: 'La prueba de probabilidad de la NIC 12 es el guardián: sin resultado fiscal futuro probable, el DTA no se reconoce — por grandes que sean las diferencias.', difficulty: 'Advanced', topic: 'DTA Recognition', skill: 'IFRS Fundamentals' },
      { question: '¿Qué asiento reconoce un pasivo por impuesto diferido de $15,000?', options: ['Debe Gasto por impuesto sobre beneficios (diferido) $15,000 / Haber Pasivo por impuesto diferido $15,000', 'Debe Pasivo por impuesto diferido $15,000 / Haber Efectivo $15,000', 'Debe Gasto por impuesto sobre beneficios $15,000 / Haber Efectivo $15,000', 'Debe Activo por impuesto diferido $15,000 / Haber Gasto por impuesto sobre beneficios $15,000'], answer: 0, explanation: 'Crear un DTL aumenta el gasto por impuestos (debe) y el pasivo (haber). El efectivo no se toca — es impuesto futuro, no un pago actual.', difficulty: 'Intermediate', topic: 'DTL Journal', skill: 'IFRS Fundamentals' }
    ]
  }
];
