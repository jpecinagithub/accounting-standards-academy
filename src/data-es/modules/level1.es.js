// level1 — Spanish translation (auto-generated from TSV worklist; do not edit by hand)
export default [
  {
    id: 'm01',
    level: 1,
    levelTitle: 'Accounting Foundations',
    title: 'Fundamentos de contabilidad',
    standard: 'Conceptual Framework',
    tagline: 'Toda historia financiera jamás contada empieza con una ecuación: Activo = Pasivo + Patrimonio neto.',
    description: 'Este módulo construye el modelo mental que sustenta toda la información financiera. Se aprenderá la ecuación contable, los elementos de los estados financieros y por qué existe la contabilidad de devengo: la base sobre la que se apoyan todos los módulos posteriores.',
    minutes: 15,
    skills: [
      'IFRS Fundamentals'
    ],
    visuals: [
      'accounting-equation'
    ],
    sections: [
      {
        heading: 'La ecuación contable',
        paragraphs: [
          'Todo balance del mundo, desde una tienda de barrio hasta una multinacional, obedece una única ecuación: Activo = Pasivo + Patrimonio neto. El activo es lo que la empresa posee o controla; el pasivo, lo que debe; el patrimonio neto es la participación residual: lo que quedaría para los propietarios si se vendieran todos los activos y se pagaran todos los pasivos. La ecuación no es una convención que pudiera haber sido distinta; es una identidad lógica. Cada transacción afecta al menos a dos partidas, de modo que ambos lados permanecen siempre en equilibrio.',
          'Conviene pensar en la ecuación como una ley de conservación. El valor no puede aparecer de la nada: si el activo crece en $100,000, o bien el pasivo creció en $100,000 (alguien lo prestó) o bien el patrimonio neto creció en $100,000 (los propietarios lo invirtieron o la empresa lo ganó). Al leer los estados financieros, la pregunta constante será: ¿qué lado de la ecuación se movió y qué se movió con él?'
        ],
        callout: {
          type: 'key',
          text: 'Activo = Pasivo + Patrimonio neto. Reformulada como Patrimonio neto = Activo − Pasivo: el patrimonio neto es lo que queda tras pagar a los acreedores. Esa naturaleza residual explica por qué los accionistas asumen el mayor riesgo — y también la mayor recompensa.'
        },
        table: {
          headers: [
            'Elemento',
            'Definición',
            'Ejemplo'
          ],
          rows: [
            [
              'Activo',
              'Recursos controlados como consecuencia de hechos pasados, de los que se espera obtener beneficios económicos futuros',
              'Efectivo, existencias, maquinaria'
            ],
            [
              'Pasivo',
              'Obligaciones presentes de transferir recursos económicos como consecuencia de hechos pasados',
              'Préstamos bancarios, cuentas a pagar a proveedores'
            ],
            [
              'Patrimonio neto',
              'La participación residual en el activo una vez deducido el pasivo',
              'Capital social, reservas'
            ]
          ]
        }
      },
      {
        heading: 'Ingresos y gastos: el motor del patrimonio neto',
        paragraphs: [
          'El resultado no es efectivo. El resultado mide cuánto más ricos se hicieron los propietarios a través de las operaciones durante un periodo: Ingresos menos Gastos. Cuando la empresa obtiene $50,000 de ingresos ordinarios, el patrimonio neto aumenta en $50,000; cuando incurre en $30,000 de gastos, el patrimonio neto disminuye en $30,000. El efecto neto — $20,000 de resultado — fluye a las reservas, un componente del patrimonio neto.',
          'Este es el puente entre los dos grandes estados. La cuenta de resultados explica cómo surgió el resultado; el balance muestra los saldos resultantes. Perder de vista este vínculo hace que los estados financieros parezcan listas inconexas; mantenerlo convierte cada estado en una visión distinta de la misma historia.'
        ],
        callout: {
          type: 'example',
          text: 'Una empresa vende mercancías por $200,000 que le costaron $120,000. Ingresos +$200,000, gastos +$120,000, resultado +$80,000. El activo también cambia: las existencias caen $120,000, el efectivo (o las cuentas a cobrar) sube $200,000: el activo neto aumenta $80,000 y el patrimonio neto aumenta $80,000. Ambos lados cuadran.'
        }
      },
      {
        heading: '¿Por qué devengo y no caja?',
        paragraphs: [
          'La contabilidad de caja solo registra el dinero que entra y sale. La contabilidad de devengo registra los hechos económicos cuando ocurren, con independencia del momento del cobro o pago. Una venta a crédito en diciembre cuenta como ingreso de diciembre aunque el efectivo llegue en enero; la electricidad consumida en diciembre cuenta como gasto de diciembre aunque la factura se pague en febrero.',
          'El devengo importa porque el momento del efectivo es ruidoso y a menudo está desconectado del rendimiento. Una empresa que cobra pronto pero entrega tarde, o que entrega ahora y cobra después, mostraría resultados muy engañosos con contabilidad de caja. El principio de correlación — los gastos siguen a los ingresos que ayudaron a generar — permite a los inversores comparar el rendimiento entre periodos y entre empresas. Todo lo que contiene el módulo m03 existe para que esta idea funcione.'
        ],
        callout: {
          type: 'warning',
          text: 'No confundir el resultado con el efectivo. Una empresa rentable puede quebrar si su efectivo está inmovilizado en existencias y cuentas a cobrar mientras los proveedores exigen el pago: el clásico fracaso de «rentable pero sin liquidez». Por eso existe el estado de flujos de efectivo junto a la cuenta de resultados.'
        }
      },
      {
        heading: 'Las hipótesis subyacentes',
        paragraphs: [
          'Todas las NIIF descansan sobre dos hipótesis fundamentales del Marco Conceptual. Primera, la hipótesis de empresa en funcionamiento: los estados financieros se preparan como si la empresa fuera a continuar operando en el futuro previsible (al menos doce meses). Si no va a ser así — si la liquidación es probable —, los activos no pueden presentarse a sus valores contables normales y ese hecho debe revelarse.',
          'Segunda, la base de devengo (vista arriba): los efectos de las transacciones se reconocen cuando ocurren, no cuando se recibe o se paga el efectivo. Un tercer principio permanente es la uniformidad y la comparabilidad: una misma entidad debe aplicar las mismas políticas periodo tras periodo para que las tendencias sean significativas, y los estados deben permitir a los usuarios comparar entre entidades.'
        ],
        bullets: [
          'Empresa en funcionamiento: se presume que la empresa continúa; si no, revelar y revaluar.',
          'Base de devengo: reconocer las transacciones cuando ocurren.',
          'Comparabilidad: políticas uniformes en el tiempo que permiten el análisis de tendencias.'
        ],
        callout: {
          type: 'interview',
          text: 'Una pregunta clásica de entrevista: «¿Cuándo pueden prepararse los estados financieros sobre una base distinta de la empresa en funcionamiento?» Respuesta: cuando la dirección tiene la intención de liquidar, cesar la actividad o no tiene alternativa realista; entonces activos y pasivos se valoran sobre una base de liquidación y dicha base debe revelarse.'
        }
      }
    ],
    mistakes: [
      'Decir que «Activo − Pasivo = Patrimonio neto» es incorrecto: es la misma ecuación, pero escribirla al revés oculta la lógica de que el patrimonio neto es el residual.',
      'Tratar el resultado como efectivo en el banco: el resultado mide el rendimiento sobre la base de devengo; el efectivo es una historia aparte que cuenta el estado de flujos de efectivo.',
      'Clasificar las retiradas de los propietarios (dividendos, retiradas) como gastos: reducen el patrimonio neto directamente y nunca tocan el resultado.',
      'Olvidar que cada transacción afecta al menos a dos elementos; un apunte de una sola parte rompe la ecuación y siempre es un error.',
      'Confundir el pasivo con el patrimonio neto: un préstamo debe devolverse con independencia del rendimiento; los tenedores de patrimonio solo cobran después de los acreedores.'
    ],
    interviewQA: [
      {
        q: 'Explicar la ecuación contable y por qué siempre debe cuadrar.',
        a: 'Activo = Pasivo + Patrimonio neto: todo lo que la empresa controla está financiado por acreedores o por propietarios. Siempre debe cuadrar porque cada transacción se registra con al menos dos apuntes de igual valor: el valor no puede crearse ni destruirse, solo transformarse. Si la ecuación no cuadra, falta un apunte o hay un error. También muestra que el patrimonio neto es una participación residual: los accionistas cobran los últimos, por eso exigen la mayor rentabilidad.'
      },
      {
        q: '¿Por qué se utiliza la contabilidad de devengo en lugar de limitarse a seguir el efectivo?',
        a: 'Porque el momento del efectivo está desconectado del rendimiento económico. Una empresa podría mostrar un enorme «resultado» cobrando pagos anticipados que aún no ha ganado, o parecer terrible mientras invierte en existencias que aún no ha vendido. La contabilidad de devengo reconoce las transacciones cuando ocurren y correlaciona los gastos con los ingresos que generaron, de modo que el resultado mide el rendimiento operativo real y es comparable entre periodos y empresas.'
      },
      {
        q: 'Una empresa obtiene $1 millón de resultado pero se queda sin efectivo. ¿Es posible?',
        a: 'Absolutamente: el resultado es un concepto de devengo, no de efectivo. El resultado puede quedar atrapado en cuentas a cobrar y existencias crecientes mientras a los proveedores se les paga puntualmente; la amortización es un gasto no monetario que reduce el resultado pero no el efectivo; y las actividades de inversión, como comprar maquinaria, consumen efectivo sin tocar el resultado. Por eso el estado de flujos de efectivo es un estado principal según la NIC 1.'
      }
    ],
    quiz: [
      {
        question: 'Una empresa tiene un activo total de $850,000 y un pasivo total de $520,000. ¿Cuál es su patrimonio neto?',
        options: [
          '$1,370,000',
          '$520,000',
          'No puede determinarse con esta información',
          '$330,000'
        ],
        answer: 3,
        explanation: 'Patrimonio neto = Activo − Pasivo = $850,000 − $520,000 = $330,000.',
        difficulty: 'Foundation',
        topic: 'Accounting Equation',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Una empresa compra existencias por $40,000 a crédito a un proveedor. ¿Qué ocurre con la ecuación contable?',
        options: [
          'El activo aumenta $40,000 y el patrimonio neto aumenta $40,000',
          'Solo cambia el activo: las existencias suben $40,000 y las cuentas a pagar bajan $40,000',
          'El activo aumenta $40,000 y el pasivo aumenta $40,000',
          'El patrimonio neto disminuye $40,000 y el pasivo aumenta $40,000'
        ],
        answer: 2,
        explanation: 'Las existencias (activo) suben $40,000 y la cuenta a pagar al proveedor (pasivo) sube $40,000. Ambos lados de la ecuación aumentan por igual, de modo que sigue cuadrando.',
        difficulty: 'Foundation',
        topic: 'Accounting Equation',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'El propietario de una empresa individual retira $15,000 en efectivo para uso personal. ¿Cómo se registra?',
        options: [
          'Como una reducción del patrimonio neto (retirada), sin efecto en el resultado',
          'Como un gasto de $15,000 en la cuenta de resultados',
          'Como un pasivo de $15,000',
          'No se registra porque es una transacción personal'
        ],
        answer: 0,
        explanation: 'Las retiradas del propietario son distribuciones del patrimonio neto, no gastos de la empresa. El efectivo cae y el patrimonio neto cae directamente; el resultado no se ve afectado.',
        difficulty: 'Intermediate',
        topic: 'Equity',
        skill: 'IFRS Fundamentals'
      },
      {
        question: '¿Cuál de las siguientes opciones define mejor un pasivo según el Marco Conceptual?',
        options: [
          'Cualquier compromiso futuro que la empresa tenga intención de asumir',
          'Una obligación presente de transferir un recurso económico como consecuencia de hechos pasados',
          'Un coste futuro probable que la dirección espera',
          'Un importe debido solo cuando existe una orden judicial'
        ],
        answer: 1,
        explanation: 'Un pasivo exige una obligación presente derivada de un hecho pasado, con una transferencia esperada de recursos económicos. Las intenciones futuras o las meras expectativas no son pasivos.',
        difficulty: 'Intermediate',
        topic: 'Elements',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Una empresa vende mercancías por $200,000 que costaron $120,000, todo en efectivo. ¿Cuál es el efecto sobre el patrimonio neto?',
        options: [
          'El patrimonio neto aumenta en $200,000',
          'El patrimonio neto no cambia porque el efectivo solo se movió entre activos',
          'El patrimonio neto aumenta en $80,000',
          'El patrimonio neto disminuye en $120,000'
        ],
        answer: 2,
        explanation: 'Resultado = $200,000 − $120,000 = $80,000, y el resultado fluye a las reservas, aumentando el patrimonio neto en $80,000. La visión de solo efectivo ($200,000 − $120,000) coincide aquí por casualidad, pero el patrimonio neto se mueve por el resultado, no por el efectivo bruto.',
        difficulty: 'Intermediate',
        topic: 'Profit and Equity',
        skill: 'IFRS Fundamentals'
      },
      {
        question: '¿Por qué la contabilidad de devengo produce cifras de resultado más útiles que la contabilidad de caja?',
        options: [
          'Registra las transacciones cuando ocurren y correlaciona los gastos con los ingresos relacionados',
          'Siempre muestra un resultado mayor que la contabilidad de caja',
          'Ignora las ventas a crédito hasta que se recibe el efectivo',
          'Es más sencilla porque solo se sigue el movimiento del efectivo'
        ],
        answer: 0,
        explanation: 'La contabilidad de devengo reconoce los hechos económicos cuando ocurren y correlaciona los gastos con los ingresos que ayudaron a generar, de modo que el resultado refleja el rendimiento en lugar del accidente del momento del efectivo.',
        difficulty: 'Intermediate',
        topic: 'Accrual Basis',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Según la hipótesis de empresa en funcionamiento, los estados financieros se preparan sobre la base de que:',
        options: [
          'La entidad será liquidada en los próximos doce meses',
          'La entidad continuará operando en el futuro previsible',
          'Todos los activos se venderán a valor de mercado el próximo año',
          'La dirección tiene la intención de vender la empresa'
        ],
        answer: 1,
        explanation: 'Empresa en funcionamiento significa que se espera que la entidad continúe operando, por lo que los activos no se reducen a valores de liquidación. Si la liquidación es probable, debe utilizarse y revelarse una base distinta.',
        difficulty: 'Foundation',
        topic: 'Assumptions',
        skill: 'IFRS Fundamentals'
      },
      {
        question: '¿Qué par vincula correctamente un estado financiero con lo que explica?',
        options: [
          'Cuenta de resultados → movimientos de efectivo; balance → resultado',
          'Cuenta de resultados → saldos de patrimonio neto; estado de flujos de efectivo → resultado',
          'Balance → cómo surgió el resultado; cuenta de resultados → saldos resultantes',
          'Cuenta de resultados → cómo surgió el resultado; balance → saldos resultantes'
        ],
        answer: 3,
        explanation: 'La cuenta de resultados explica el rendimiento (ingresos menos gastos); el balance muestra los saldos resultantes de activo, pasivo y patrimonio neto. Ambos están vinculados a través de las reservas.',
        difficulty: 'Foundation',
        topic: 'Financial Statements',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Una empresa recibe $60,000 en efectivo por anticipado por servicios que prestará el próximo año. ¿Cómo cambia hoy la ecuación contable?',
        options: [
          'El activo aumenta $60,000 y el patrimonio neto aumenta $60,000 como ingreso',
          'Solo aumenta el efectivo; nada más cambia',
          'El activo aumenta $60,000 y el pasivo aumenta $60,000; aún no hay ingreso',
          'El activo aumenta $60,000 y el resultado aumenta $60,000'
        ],
        answer: 2,
        explanation: 'El efectivo sube $60,000, pero la empresa ahora debe un servicio: un pasivo por contrato de $60,000. El ingreso solo se reconoce cuando se presta el servicio, no cuando llega el efectivo.',
        difficulty: 'Advanced',
        topic: 'Accrual Basis',
        skill: 'IFRS Fundamentals'
      }
    ]
  },
  {
    id: 'm02',
    level: 1,
    levelTitle: 'Accounting Foundations',
    title: 'Partida doble',
    standard: 'Conceptual Framework',
    tagline: 'Por cada debe hay un haber: la maquinaria de 500 años que mantiene honesta la ecuación.',
    description: 'La partida doble es el sistema de teneduría de libros que hay detrás de todo juego moderno de cuentas. Se aprenderán las reglas del debe y el haber para cada elemento, se trabajará una transacción completa y se verá cómo los asientos fluyen hacia los estados financieros.',
    minutes: 20,
    skills: [
      'IFRS Fundamentals'
    ],
    sections: [
      {
        heading: 'Debe y haber: una convención, no un juicio de valor',
        paragraphs: [
          'Debe y haber son simplemente el lado izquierdo y el lado derecho de una cuenta. «Debe» no significa «malo» ni «disminución»: significa el lado izquierdo de una cuenta en T. Que un debe aumente o disminuya una cuenta depende del elemento al que pertenezca la cuenta. El activo y los gastos aumentan con el debe; el pasivo, el patrimonio neto y los ingresos aumentan con el haber.',
          'La única regla inquebrantable: en cada asiento, el total del debe debe igualar el total del haber. Así es como la ecuación contable se mantiene en equilibrio de forma mecánica. Un asiento que carga $100,000 al debe y $100,000 al haber mueve valor entre cuentas sin crearlo ni destruirlo.'
        ],
        callout: {
          type: 'key',
          text: 'DEAD CLIC: al debe aumentan los Gastos (Expenses), el Activo (Assets) y las Retiradas (Drawings); al haber aumentan el Pasivo (Liabilities), los Ingresos (Income) y el Capital (Capital). Memorizarlo convierte todo el sistema del debe y el haber en algo mecánico.'
        },
        table: {
          headers: [
            'Elemento',
            'Aumenta con',
            'Disminuye con',
            'Saldo normal'
          ],
          rows: [
            [
              'Activo',
              'Debe',
              'Haber',
              'Debe'
            ],
            [
              'Gastos',
              'Debe',
              'Haber',
              'Debe'
            ],
            [
              'Pasivo',
              'Haber',
              'Debe',
              'Haber'
            ],
            [
              'Patrimonio neto',
              'Haber',
              'Debe',
              'Haber'
            ],
            [
              'Ingresos',
              'Haber',
              'Debe',
              'Haber'
            ]
          ]
        }
      },
      {
        heading: 'Caso práctico: comprar maquinaria al contado',
        paragraphs: [
          'Una empresa compra maquinaria por $100,000 y paga en efectivo de inmediato. Ocurren dos cosas a la vez: la empresa gana maquinaria (un activo no corriente) y pierde efectivo (un activo corriente). Ambos cambios están en el lado del activo, de modo que el activo total no cambia: el valor simplemente se movió del efectivo a la maquinaria.',
          'El asiento carga $100,000 al Inmovilizado material — Maquinaria (el activo aumenta con el debe) y abona $100,000 al Efectivo (el activo disminuye con el haber). No hay efecto en el resultado: comprar maquinaria es intercambiar un activo por otro, no un gasto. La amortización llegará a la cuenta de resultados más tarde, año a año, pero la compra en sí nunca lo hace.'
        ],
        journal: {
          transaction: 'La empresa compra maquinaria por $100,000 al contado.',
          lines: [
            {
              account: 'Inmovilizado material — Maquinaria',
              dr: 100000,
              cr: null
            },
            {
              account: 'Efectivo',
              dr: null,
              cr: 100000
            }
          ],
          narration: 'Compra de maquinaria pagada al contado'
        },
        impact: {
          pl: 'Sin impacto inicial en la cuenta de resultados: la compra es un intercambio de activos, no un gasto.',
          bs: 'Inmovilizado material +$100,000; Efectivo −$100,000. Activo total sin cambios; la ecuación sigue cuadrando.',
          cf: 'Salida de efectivo por inversión de $100,000 (la compra de inmovilizado material es una actividad de inversión según la NIC 7).'
        },
        callout: {
          type: 'warning',
          text: 'A los entrevistadores les encanta esta trampa: «La empresa gastó $100,000 en maquinaria, ¿cae el resultado en $100,000?» No. Comprar un activo no es un gasto. El coste llega a la cuenta de resultados gradualmente como amortización a lo largo de la vida útil del activo.'
        }
      },
      {
        heading: 'Del asiento al balance de comprobación',
        paragraphs: [
          'Cada transacción se registra primero como un asiento con debe y haber iguales. Esos asientos se traspasan a las cuentas individuales del libro mayor y, al cierre del periodo, los saldos de todas las cuentas se listan en un balance de comprobación. Si el total del debe no iguala el total del haber, se ha cometido un error en algún lugar: el balance de comprobación es el autocontrol integrado del sistema.',
          'El balance de comprobación alimenta después los estados financieros: los saldos de activo, pasivo y patrimonio neto van al balance; los saldos de ingresos y gastos van a la cuenta de resultados. Este flujo — asiento → libro mayor → balance de comprobación → estados — es el mismo en todos los sistemas contables del mundo.'
        ],
        steps: [
          'Analizar la transacción: ¿qué elementos se movieron?',
          'Elegir las cuentas y aplicar DEAD CLIC para el debe y el haber.',
          'Redactar el asiento; comprobar que el debe = el haber.',
          'Traspasar a las cuentas del libro mayor y extraer un balance de comprobación.',
          'Asignar los saldos a los estados financieros.'
        ]
      },
      {
        heading: 'Por qué importa: detección de errores y control del fraude',
        paragraphs: [
          'La partida doble es más que aritmética. Como cada asiento tiene dos lados, los errores son más fáciles de detectar: un apunte omitido rompe el balance de comprobación de inmediato. En las entrevistas y en la práctica, esto se presenta como un control interno: el sistema obliga a explicar cada movimiento de valor desde dos direcciones.',
          'También impone disciplina en el pensamiento. Antes de poder contabilizar nada, hay que responder: ¿qué recibimos y qué entregamos? Esa pregunta es el hábito que separa a quienes pueden «llevar los libros» de quienes entienden el negocio. Todos los módulos a partir de aquí utilizarán asientos contables: dominar esto ahora rinde interés compuesto.'
        ],
        callout: {
          type: 'interview',
          text: '«Explica la partida doble a un no contable.» Respuesta sólida: cada hecho empresarial tiene dos efectos: nunca se gasta dinero sin más, se gasta dinero *en algo*. Registrar ambos efectos mantiene los libros autocontrolados: si los dos lados no coinciden, algo va mal.'
        }
      }
    ],
    mistakes: [
      'Cargar Efectivo cuando se paga en efectivo: los pagos son abonos al Efectivo, los cobros son cargos.',
      'Contabilizar la compra de maquinaria de $100,000 como un gasto, lo que infravalora el activo y el resultado en el primer año y sobrevalora el resultado después.',
      'Registrar una venta a crédito como Debe Efectivo / Haber Ingresos ordinarios en lugar de Debe Cuentas a cobrar / Haber Ingresos ordinarios: no se recibió efectivo.',
      'Olvidar la narración o redactar narraciones vagas; un asiento sin narración es un hallazgo de auditoría en potencia.',
      'Pensar que el balance de comprobación demuestra la corrección: solo demuestra que el debe iguala al haber; un asiento totalmente erróneo pero cuadrado pasa igualmente.',
      'Confundir el tratamiento de gasto y de activo de los costes: los costes que crean un beneficio futuro se capitalizan, los costes consumidos en el periodo se llevan a gastos.'
    ],
    interviewQA: [
      {
        q: 'Explícame el asiento de la compra de maquinaria por $100,000 al contado y su efecto en cada estado.',
        a: 'Debe Inmovilizado material — Maquinaria $100,000, Haber Efectivo $100,000: un activo se intercambia por otro. La cuenta de resultados no se ve afectada al inicio: es una compra de activo, no un gasto. El balance muestra el inmovilizado material +$100,000 y el efectivo −$100,000, con el activo total sin cambios. El estado de flujos de efectivo muestra una salida de $100,000 por inversión. La amortización imputará después el coste a lo largo de la vida útil del activo.'
      },
      {
        q: '¿Qué significa que un balance de comprobación no cuadre?',
        a: 'Significa que existe al menos un error: un apunte de una sola parte, una transposición o un debe y un haber desiguales en algún lugar. Sin embargo, un balance de comprobación cuadrado no demuestra que los libros sean correctos: los errores de omisión, de cuenta errónea o los asientos invertidos pero cuadrados pasan desapercibidos. Es una comprobación necesaria pero no suficiente.'
      },
      {
        q: '¿Un debe es siempre un aumento?',
        a: 'No: debe significa el lado izquierdo de la cuenta, y su efecto depende del elemento. El debe aumenta el activo, los gastos y las retiradas, pero disminuye el pasivo, el patrimonio neto y los ingresos. La regla DEAD CLIC lo resume: al debe aumentan los Gastos, el Activo y las Retiradas; al haber aumentan el Pasivo, los Ingresos y el Capital.'
      }
    ],
    quiz: [
      {
        question: '¿Qué asiento registra correctamente la compra de maquinaria por $100,000 al contado?',
        options: [
          'Debe Efectivo $100,000; Haber Inmovilizado material — Maquinaria $100,000',
          'Debe Inmovilizado material — Maquinaria $100,000; Haber Efectivo $100,000',
          'Debe Gasto en maquinaria $100,000; Haber Efectivo $100,000',
          'Debe Efectivo $100,000; Haber Capital social $100,000'
        ],
        answer: 1,
        explanation: 'La maquinaria (activo) aumenta → debe; el efectivo (activo) disminuye → haber. Es un intercambio de activos, no un gasto.',
        difficulty: 'Foundation',
        topic: 'Journal Entries',
        skill: 'IFRS Fundamentals'
      },
      {
        question: '¿Cuál es el efecto inmediato en la cuenta de resultados de comprar la maquinaria de $100,000 al contado?',
        options: [
          'Sin efecto inicial en la cuenta de resultados',
          'Un gasto de $100,000 de inmediato',
          'Una ganancia de $100,000 de inmediato',
          'Un gasto de $50,000 y un activo de $50,000'
        ],
        answer: 0,
        explanation: 'Comprar un activo es intercambiar efectivo por maquinaria. El coste llega a la cuenta de resultados gradualmente a través de la amortización, no en la compra.',
        difficulty: 'Foundation',
        topic: 'FS Impact',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Un cliente paga $25,000 en efectivo por servicios ya prestados el mes pasado. El asiento correcto es:',
        options: [
          'Debe Cuentas a cobrar $25,000; Haber Ingresos ordinarios $25,000',
          'Debe Efectivo $25,000; Haber Ingresos ordinarios $25,000',
          'Debe Ingresos ordinarios $25,000; Haber Efectivo $25,000',
          'Debe Efectivo $25,000; Haber Cuentas a cobrar $25,000'
        ],
        answer: 3,
        explanation: 'El ingreso ya se reconoció el mes pasado cuando se prestó el servicio (Debe Cuentas a cobrar / Haber Ingresos ordinarios). El cobro solo convierte un activo (cuenta a cobrar) en otro (efectivo).',
        difficulty: 'Intermediate',
        topic: 'Journal Entries',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Según DEAD CLIC, ¿qué cuentas aumentan con el haber?',
        options: [
          'Gastos, activos, retiradas',
          'Pasivos, ingresos, capital',
          'Activos, pasivos, ingresos',
          'Gastos, pasivos, capital'
        ],
        answer: 1,
        explanation: 'DEAD CLIC: al debe aumentan los Gastos, el Activo y las Retiradas; al haber aumentan el Pasivo, los Ingresos y el Capital.',
        difficulty: 'Foundation',
        topic: 'Debits and Credits',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'La empresa pide prestados $200,000 a un banco y recibe el efectivo de inmediato. ¿Cuál es el efecto sobre la ecuación contable?',
        options: [
          'Activo +$200,000; Patrimonio neto +$200,000',
          'Efectivo +$200,000; Efectivo −$200,000 (sin cambio neto)',
          'Pasivo +$200,000; Patrimonio neto −$200,000',
          'Activo +$200,000; Pasivo +$200,000'
        ],
        answer: 3,
        explanation: 'El efectivo (activo) sube y el préstamo bancario (pasivo) sube en el mismo importe. El patrimonio neto no se toca: pedir prestado no es un ingreso.',
        difficulty: 'Foundation',
        topic: 'Accounting Equation',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Un balance de comprobación muestra un debe total de $1,450,000 y un haber total de $1,430,000. ¿Qué puede concluirse?',
        options: [
          'Existe al menos un error; la diferencia de $20,000 debe investigarse',
          'Los libros son correctos salvo una partida de redondeo de $20,000',
          'El resultado está infravalorado en $20,000',
          'Nada: los balances de comprobación nunca cuadran exactamente'
        ],
        answer: 0,
        explanation: 'Un balance de comprobación descuadrado siempre indica un error: un apunte de una sola parte, una transposición o un traspaso erróneo. Hay que encontrarlo y corregirlo, no ignorarlo.',
        difficulty: 'Intermediate',
        topic: 'Trial Balance',
        skill: 'IFRS Fundamentals'
      },
      {
        question: '¿Cuál de estas es una limitación del balance de comprobación como control?',
        options: [
          'No puede detectar ningún error',
          'Solo funciona para transacciones en efectivo',
          'Un asiento cuadrado pero totalmente erróneo (cuentas equivocadas) pasa igualmente',
          'Detecta el fraude con certeza'
        ],
        answer: 2,
        explanation: 'El balance de comprobación solo comprueba que el debe iguale al haber. Los errores de principio (cuenta errónea), de omisión o los errores compensados pasan desapercibidos.',
        difficulty: 'Intermediate',
        topic: 'Trial Balance',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'La empresa declara un dividendo de $30,000 a los accionistas. El asiento correcto es:',
        options: [
          'Debe Gasto por dividendos $30,000; Haber Efectivo $30,000',
          'Debe Efectivo $30,000; Haber Ingreso por dividendos $30,000',
          'Debe Reservas $30,000; Haber Dividendos a pagar $30,000',
          'Debe Capital social $30,000; Haber Efectivo $30,000'
        ],
        answer: 2,
        explanation: 'Los dividendos son distribuciones del patrimonio neto, nunca gastos. La declaración crea un pasivo (dividendos a pagar) y reduce directamente las reservas.',
        difficulty: 'Advanced',
        topic: 'Equity',
        skill: 'IFRS Fundamentals'
      },
      {
        question: '¿Cómo se clasifica la compra de maquinaria de $100,000 en el estado de flujos de efectivo?',
        options: [
          'Salida de efectivo de explotación',
          'Salida de efectivo de inversión',
          'Salida de efectivo de financiación',
          'No aparece porque el activo total no cambió'
        ],
        answer: 1,
        explanation: 'Las compras de inmovilizado material son actividades de inversión según la NIC 7. El estado de flujos de efectivo sigue los movimientos de efectivo, no los cambios netos del activo: $100,000 de efectivo salieron de la empresa.',
        difficulty: 'Intermediate',
        topic: 'FS Impact',
        skill: 'Cash Flow'
      }
    ]
  },
  {
    id: 'm03',
    level: 1,
    levelTitle: 'Accounting Foundations',
    title: 'Devengos y pagos anticipados',
    standard: 'Conceptual Framework',
    tagline: 'Pagado por un año, usado por un mes: por qué la fecha del efectivo rara vez es la fecha del gasto.',
    description: 'Los devengos y los pagos anticipados son los ajustes que hacen real la contabilidad de devengo. Se aprenderá a repartir costes e ingresos entre los periodos a los que pertenecen, con un caso completo de seguro y los asientos que lo sustentan.',
    minutes: 18,
    skills: [
      'IFRS Fundamentals'
    ],
    sections: [
      {
        heading: 'El principio de devengo en acción',
        paragraphs: [
          'El momento del efectivo y el momento económico divergen constantemente. Se paga en enero el seguro de todo el año; se consume electricidad en diciembre pero se paga en febrero. El principio de devengo dice: registrar el coste en el periodo en que se consume el beneficio, no en el periodo en que se mueve el efectivo. Dos familias de ajustes lo hacen posible: los pagos anticipados (efectivo pagado antes del beneficio: un diferimiento) y los devengos (beneficio consumido antes del efectivo: una anticipación).',
          'Equivocarse aquí falsea el resultado en dos periodos a la vez. Cargar un año entero de seguro a enero deja enero fatal y febrero-diciembre artificialmente bien. Estos ajustes de cierre mensual están entre los asientos más habituales en los departamentos financieros reales: la competencia de «Cierre mensual» empieza aquí.'
        ],
        callout: {
          type: 'key',
          text: 'Pago anticipado = pagado antes del beneficio (primero activo, después gasto). Devengo = beneficio antes del pago (primero gasto, después pasivo). Imágenes especulares: uno difiere un gasto ya pagado, el otro anticipa un gasto aún no pagado.'
        },
        table: {
          headers: [
            'Situación',
            'Al pago/uso',
            'Después, cada periodo'
          ],
          rows: [
            [
              'Seguro anticipado',
              'Debe Seguros anticipados (activo) / Haber Efectivo',
              'Debe Primas de seguros / Haber Seguros anticipados'
            ],
            [
              'Electricidad devengada',
              'Debe Gastos de suministros / Haber Pasivos devengados',
              'Debe Pasivos devengados / Haber Efectivo (al pago)'
            ]
          ]
        }
      },
      {
        heading: 'Caso práctico: prima anual de seguro de $120,000 pagada por anticipado',
        paragraphs: [
          'El 1 de enero la empresa paga $120,000 en efectivo por una póliza de seguro de 12 meses. Los $120,000 completos no son el gasto de enero: la empresa ha comprado 12 meses de cobertura, de modo que en el momento del pago posee un activo anticipado por valor de $120,000. El asiento es Debe Seguros anticipados $120,000, Haber Efectivo $120,000.',
          'Cada mes se consume una doceava parte de la cobertura: $120,000 ÷ 12 = $10,000. El asiento de ajuste mensual es Debe Primas de seguros $10,000, Haber Seguros anticipados $10,000. Tras tres meses, el activo anticipado queda en $90,000 y el gasto acumulado es de $30,000. Es el principio de correlación en acción: cada mes soporta exactamente el coste del seguro de la protección que disfrutó.'
        ],
        journal: {
          transaction: 'Prima anual de seguro de $120,000 pagada en efectivo el 1 de enero para 12 meses de cobertura.',
          lines: [
            {
              account: 'Seguros anticipados',
              dr: 120000,
              cr: null
            },
            {
              account: 'Efectivo',
              dr: null,
              cr: 120000
            }
          ],
          narration: 'Pago de la prima de seguro de 12 meses'
        },
        impact: {
          pl: 'Sin gasto en el pago. Después, $10,000 de gasto de seguro al mes a medida que se consume la cobertura.',
          bs: 'Activo por seguro anticipado de $120,000 en el pago, que disminuye $10,000/mes; efectivo −$120,000 por adelantado.',
          cf: 'Salida total de $120,000 de efectivo de explotación en el pago; los asientos de ajuste no tienen efecto en el efectivo.'
        },
        callout: {
          type: 'example',
          text: 'Ajuste mensual (al cierre de cada mes): Debe Primas de seguros $10,000 / Haber Seguros anticipados $10,000. Si el cierre del ejercicio cae a mitad de la póliza — digamos, 6 meses consumidos —, el balance debe mostrar Seguros anticipados $60,000 y la cuenta de resultados $60,000 de gasto. Los auditores comprueban exactamente esto.'
        }
      },
      {
        heading: 'Gastos devengados: consumidos pero aún no pagados',
        paragraphs: [
          'Ahora la imagen especular. Los empleados devengan salarios de diciembre por $45,000 pero cobran el 5 de enero. La cuenta de resultados de diciembre debe mostrar el coste de $45,000 porque el trabajo se hizo en diciembre: esperar a la fecha de pago infravaloraría los gastos de diciembre y sobrevaloraría los de enero. El asiento de cierre es Debe Sueldos y salarios $45,000, Haber Sueldos y salarios devengados (pasivo) $45,000.',
          'Cuando el efectivo se paga en enero, el asiento es Debe Sueldos y salarios devengados $45,000, Haber Efectivo $45,000: la cuenta de resultados de enero no se toca. Una trampa clásica de exámenes y entrevistas es llevar el pago a gasto en enero; eso duplica o desplaza el coste. La regla es mecánica: el gasto sigue al periodo del beneficio, el efectivo sigue a la fecha de pago.'
        ],
        journal: {
          transaction: 'Salarios de diciembre por $45,000 devengados por el personal, pagaderos el 5 de enero.',
          lines: [
            {
              account: 'Sueldos y salarios',
              dr: 45000,
              cr: null
            },
            {
              account: 'Sueldos y salarios devengados',
              dr: null,
              cr: 45000
            }
          ],
          narration: 'Devengo de los salarios de diciembre pagaderos en enero'
        },
        impact: {
          pl: '$45,000 de gasto de salarios en diciembre.',
          bs: 'Pasivo por salarios devengados de $45,000 a 31 de diciembre.',
          cf: 'Sin efecto en el efectivo en diciembre; salida de $45,000 de efectivo de explotación en enero.'
        }
      },
      {
        heading: 'Ingresos diferidos e ingresos devengados',
        paragraphs: [
          'La misma lógica se aplica a los ingresos. El efectivo recibido antes de la entrega son ingresos diferidos (un pasivo: se debe el servicio), reconocidos como ingreso solo cuando se entrega. A la inversa, los servicios prestados pero aún no facturados crean ingresos devengados: Debe Ingresos devengados (activo), Haber Ingresos ordinarios.',
          'Obsérvese la simetría en los cuatro casos. Los pagos anticipados y los ingresos diferidos son aparcamientos del balance para el efectivo que se ha movido antes que la economía; los devengos y los ingresos devengados son marcadores del balance para la economía que ha ocurrido antes que el efectivo. Dominar estos cuatro permite razonar casi cualquier ajuste de cierre mensual.'
        ],
        callout: {
          type: 'warning',
          text: 'Los ingresos diferidos son un pasivo, no un ingreso: el efectivo está en el banco pero la venta aún no se ha producido. Las startups que contabilizan los pagos anticipados como ingresos sobrevaloran el crecimiento y no pasarán una auditoría sobre la NIIF 15.'
        },
        table: {
          headers: [
            'Caso',
            'Efectivo frente a economía',
            'Partida del balance'
          ],
          rows: [
            [
              'Gasto anticipado',
              'Efectivo antes del beneficio',
              'Activo (pago anticipado)'
            ],
            [
              'Gasto devengado',
              'Beneficio antes del efectivo',
              'Pasivo (devengo)'
            ],
            [
              'Ingreso diferido',
              'Efectivo antes de la entrega',
              'Pasivo (pasivo por contrato)'
            ],
            [
              'Ingreso devengado',
              'Entrega antes del efectivo',
              'Activo (ingreso devengado / cuenta a cobrar)'
            ]
          ]
        }
      }
    ],
    mistakes: [
      'Llevar a gasto en enero la prima de seguro completa de $120,000 en lugar de repartir $10,000 al mes: falsea el resultado de todos los meses del año.',
      'Contabilizar los salarios de diciembre como gasto de enero cuando se pagan: el coste pertenece a diciembre, cuando se hizo el trabajo.',
      'Tratar los ingresos diferidos (efectivo recibido por anticipado) como ingresos: es un pasivo hasta que se presta el servicio.',
      'Olvidar revertir los devengos: contabilizar el pago de salarios de enero como Debe Sueldos y salarios en lugar de Debe Sueldos y salarios devengados duplica el coste.',
      'Dejar sin ajustar los saldos anticipados al cierre del ejercicio, sobrevalorando el activo e infravalorando los gastos.',
      'Confundir pagos anticipados con devengos: pago anticipado = pagado primero (activo); devengo = consumido primero (pasivo).'
    ],
    interviewQA: [
      {
        q: 'Una empresa paga $120,000 el 1 de enero por una póliza de seguro de 12 meses. Explícame la contabilidad.',
        a: 'En el pago: Debe Seguros anticipados $120,000, Haber Efectivo $120,000: la empresa posee un activo, 12 meses de cobertura, y aún no hay gasto. Cada mes, Debe Primas de seguros $10,000, Haber Seguros anticipados $10,000, reflejando la cobertura consumida. A 31 de diciembre el saldo anticipado es cero y los $120,000 completos se han llevado a gasto a $10,000 al mes. El estado de flujos de efectivo muestra la salida de $120,000 de efectivo de explotación en enero; los ajustes mensuales no tienen efecto en el efectivo.'
      },
      {
        q: '¿Cuál es la diferencia entre un devengo y un pago anticipado?',
        a: 'Ambos corrigen diferencias temporales entre el efectivo y la economía, pero en direcciones opuestas. Un pago anticipado es efectivo pagado antes de consumir el beneficio: un activo que se convierte en gasto con el tiempo, como el seguro pagado por adelantado. Un devengo es un beneficio consumido antes de pagar el efectivo: un gasto reconocido ahora con un pasivo, como los salarios de diciembre pagados en enero. Los pagos anticipados difieren gastos ya pagados; los devengos anticipan gastos aún no pagados.'
      },
      {
        q: '¿Por qué los auditores examinan con lupa los pagos anticipados y los devengos al cierre?',
        a: 'Porque desplazan directamente el resultado entre periodos, lo que los convierte en una palanca clásica de gestión del resultado. Un pago anticipado sin ajustar sobrevalora el activo e infravalora los gastos; un devengo omitido infravalora el pasivo y sobrevalora el resultado. Los auditores comprueban el corte de operaciones — si cada coste está en el periodo correcto — y muestrearán los mayores saldos de pagos anticipados y devengos para obtener evidencia.'
      }
    ],
    quiz: [
      {
        question: 'El 1 de enero una empresa paga $120,000 en efectivo por 12 meses de seguro. ¿Cuál es el asiento correcto en el pago?',
        options: [
          'Debe Primas de seguros $120,000; Haber Efectivo $120,000',
          'Debe Efectivo $120,000; Haber Seguros anticipados $120,000',
          'Debe Primas de seguros $10,000; Haber Efectivo $10,000',
          'Debe Seguros anticipados $120,000; Haber Efectivo $120,000'
        ],
        answer: 3,
        explanation: 'En el pago la empresa posee un activo: 12 meses de cobertura. Los $120,000 se convierten en gasto gradualmente a $10,000 al mes.',
        difficulty: 'Foundation',
        topic: 'Prepayments',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Para la misma póliza de $120,000, ¿cuál es el asiento de ajuste mensual?',
        options: [
          'Debe Primas de seguros $10,000; Haber Seguros anticipados $10,000',
          'Debe Seguros anticipados $10,000; Haber Efectivo $10,000',
          'Debe Primas de seguros $120,000; Haber Seguros anticipados $120,000',
          'Debe Efectivo $10,000; Haber Primas de seguros $10,000'
        ],
        answer: 0,
        explanation: 'Cada mes se consume una doceava parte de la cobertura: $120,000 ÷ 12 = $10,000 pasan del activo anticipado al gasto.',
        difficulty: 'Foundation',
        topic: 'Prepayments',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Tras 4 meses de la póliza, ¿cuál es el saldo del seguro anticipado?',
        options: [
          '$40,000',
          '$120,000',
          '$0',
          '$80,000'
        ],
        answer: 3,
        explanation: '$120,000 − (4 × $10,000) = $80,000 quedan como activo; $40,000 se han llevado a gasto.',
        difficulty: 'Intermediate',
        topic: 'Prepayments',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Salarios de diciembre por $45,000 devengados pero pagados el 5 de enero. El asiento correcto a 31 de diciembre es:',
        options: [
          'Debe Sueldos y salarios $45,000; Haber Efectivo $45,000',
          'Sin asiento hasta que se pague el efectivo en enero',
          'Debe Sueldos y salarios $45,000; Haber Sueldos y salarios devengados $45,000',
          'Debe Salarios anticipados $45,000; Haber Efectivo $45,000'
        ],
        answer: 2,
        explanation: 'El trabajo se hizo en diciembre, de modo que diciembre soporta el gasto con un pasivo paralelo. El efectivo se mueve en enero contra el devengo.',
        difficulty: 'Intermediate',
        topic: 'Accruals',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Cuando los $45,000 de salarios devengados se pagan en enero, el asiento es:',
        options: [
          'Debe Sueldos y salarios devengados $45,000; Haber Efectivo $45,000',
          'Debe Sueldos y salarios $45,000; Haber Efectivo $45,000',
          'Debe Efectivo $45,000; Haber Sueldos y salarios devengados $45,000',
          'Sin asiento: ya se registró'
        ],
        answer: 0,
        explanation: 'El pago liquida el pasivo creado en diciembre. Volver a cargar el gasto duplicaría el coste.',
        difficulty: 'Intermediate',
        topic: 'Accruals',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Un cliente paga $36,000 por anticipado el 1 de octubre por 12 meses de servicio a partir de ese día. A 31 de diciembre, ¿cuánto ingreso se reconoce?',
        options: [
          '$36,000',
          '$9,000',
          '$27,000',
          '$0'
        ],
        answer: 1,
        explanation: 'Tres meses prestados (oct–dic): $36,000 ÷ 12 × 3 = $9,000 de ingreso. Los $27,000 restantes quedan como ingresos diferidos (pasivo).',
        difficulty: 'Advanced',
        topic: 'Deferred Revenue',
        skill: 'IFRS Fundamentals'
      },
      {
        question: '¿Qué afirmación sobre los ingresos diferidos es correcta?',
        options: [
          'Es un pasivo que representa una obligación de entregar bienes o servicios',
          'Es un ingreso porque el efectivo ya se ha recibido',
          'Es un activo que representa entradas futuras de efectivo',
          'Solo aparece en el estado de flujos de efectivo'
        ],
        answer: 0,
        explanation: 'El efectivo recibido antes de la entrega crea una obligación de cumplir: un pasivo. El ingreso solo se reconoce cuando se produce la prestación.',
        difficulty: 'Intermediate',
        topic: 'Deferred Revenue',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Una empresa olvida devengar $20,000 de electricidad de diciembre consumida pero facturada en enero. ¿Cuál es el efecto en los estados de diciembre?',
        options: [
          'Gastos sobrevalorados y resultado infravalorado en $20,000',
          'Gastos infravalorados y resultado sobrevalorado en $20,000; pasivo infravalorado',
          'Sin efecto: la factura pertenece a enero',
          'Activo sobrevalorado en $20,000'
        ],
        answer: 1,
        explanation: 'Omitir el devengo omite tanto el gasto como el pasivo: el resultado de diciembre queda $20,000 por encima y el pasivo $20,000 por debajo.',
        difficulty: 'Advanced',
        topic: 'Accruals',
        skill: 'Month-End Closing'
      },
      {
        question: 'Los ingresos devengados (servicios prestados, aún no facturados) se registran como:',
        options: [
          'Debe Efectivo; Haber Ingresos ordinarios',
          'Debe Ingresos ordinarios; Haber Ingresos devengados',
          'Debe Cuentas a cobrar; Haber Ingresos diferidos',
          'Debe Ingresos devengados (activo); Haber Ingresos ordinarios'
        ],
        answer: 3,
        explanation: 'El ingreso está ganado (abono a ingresos ordinarios) pero el efectivo aún no es exigible: se reconoce un activo (ingresos devengados) hasta la facturación.',
        difficulty: 'Intermediate',
        topic: 'Accrued Income',
        skill: 'IFRS Fundamentals'
      }
    ]
  },
  {
    id: 'm04',
    level: 1,
    levelTitle: 'Accounting Foundations',
    title: 'Estados financieros',
    standard: 'IAS 1',
    tagline: 'Cuatro estados, una historia: cómo el resultado, el efectivo y el patrimonio neto se explican entre sí.',
    description: 'Este módulo recorre el juego completo de estados financieros según la NIC 1 y — lo más importante — muestra cómo se conectan. Los ingresos fluyen al resultado, el resultado fluye a las reservas y el resultado neto se concilia con el efectivo: dominar este cableado permite leer cualquier informe anual.',
    minutes: 22,
    skills: [
      'IFRS Fundamentals'
    ],
    visuals: [
      'statements-flow'
    ],
    sections: [
      {
        heading: 'El juego completo',
        paragraphs: [
          'La NIC 1 exige un juego completo de estados financieros: (1) balance, (2) cuenta de resultados y otro resultado global, (3) estado de cambios en el patrimonio neto, (4) estado de flujos de efectivo, más (5) notas con las políticas contables materiales e información explicativa. Cada uno responde a una pregunta distinta; juntos lo responden todo.',
          'Un marco mental útil: el balance es una fotografía en un momento dado; los otros tres son películas que cubren el periodo. Las notas son los comentarios del director: sin ellas, los números pueden inducir seriamente a error. Los analistas profesionales dedican tanto tiempo a las notas como a los estados.'
        ],
        callout: {
          type: 'key',
          text: 'Cinco componentes, siempre: situación financiera, resultado + otro resultado global, cambios en el patrimonio neto, flujos de efectivo y notas. Si falta alguno, el juego no está completo según la NIC 1.'
        },
        table: {
          headers: [
            'Estado',
            'Pregunta a la que responde',
            'Dimensión temporal'
          ],
          rows: [
            [
              'Balance',
              '¿Qué poseemos y debemos ahora mismo?',
              'Momento dado'
            ],
            [
              'Cuenta de resultados',
              '¿Cuánto hemos ganado?',
              'Periodo'
            ],
            [
              'Estado de flujos de efectivo',
              '¿Adónde fue el efectivo?',
              'Periodo'
            ],
            [
              'Estado de cambios en el patrimonio neto',
              '¿Por qué se movió el patrimonio neto?',
              'Periodo'
            ]
          ]
        }
      },
      {
        heading: 'Cuenta de resultados',
        paragraphs: [
          'La cuenta de resultados parte de los ingresos ordinarios y resta costes por capas: el coste de ventas da el margen bruto; los gastos de explotación dan el resultado de explotación; los costes financieros y los impuestos dan el resultado del ejercicio (resultado neto). Cada capa cuenta una historia distinta: el margen bruto habla de precios y eficiencia productiva, el margen de explotación del control de costes, el margen neto de toda la máquina incluidos financiación e impuestos.',
          'El otro resultado global (ORG) se sitúa bajo el resultado: ganancias y pérdidas que eluden la cuenta de resultados, como los superávits de revalorización del inmovilizado material o las diferencias de conversión de moneda extranjera. Resultado global total = resultado + ORG. Las partidas del ORG se aparcan en el patrimonio neto hasta que se realizan: un detalle que importa cuando lleguen las revalorizaciones de la NIC 16 en el módulo m12.'
        ],
        bullets: [
          'Ingresos ordinarios − coste de ventas = margen bruto',
          'Margen bruto − gastos de explotación = resultado de explotación',
          'Resultado de explotación − costes financieros − impuestos = resultado del ejercicio',
          'Resultado + otro resultado global = resultado global total'
        ]
      },
      {
        heading: 'Balance',
        paragraphs: [
          'El balance lista el activo, luego el pasivo y después el patrimonio neto, cumpliendo siempre Activo = Pasivo + Patrimonio neto. La NIC 1 exige la distinción corriente/no corriente: corriente significa que se espera realizar, vender, consumir o liquidar en los doce meses siguientes o en el ciclo normal de explotación; todo lo demás es no corriente. Esta división es la primera señal de liquidez que comprueba un lector.',
          'Dentro del patrimonio neto se verán el capital social, las reservas (beneficios acumulados no distribuidos) y otras reservas. Las reservas son el vínculo vivo con la cuenta de resultados: el resultado de cada año, menos los dividendos, se añade a ellas. Seguir ese vínculo y los dos estados dejan de ser documentos separados.'
        ],
        callout: {
          type: 'example',
          text: 'Evolución de las reservas: saldo inicial $500,000 + resultado del ejercicio $120,000 − dividendos $40,000 = saldo final $580,000. Esta conciliación exacta aparece en el estado de cambios en el patrimonio neto: así es como el resultado se convierte en patrimonio neto.'
        }
      },
      {
        heading: 'Estado de flujos de efectivo y cambios en el patrimonio neto',
        paragraphs: [
          'El estado de flujos de efectivo divide los movimientos de efectivo en explotación (negocio principal), inversión (compra/venta de activos a largo plazo) y financiación (deuda y patrimonio neto). Parte del resultado y ajusta por partidas no monetarias y cambios en el fondo de maniobra: esa conciliación es el puente entre el resultado de devengo y la realidad del efectivo, tratada en profundidad en el módulo m07.',
          'El estado de cambios en el patrimonio neto explica cada movimiento del patrimonio neto: resultado del ejercicio, ORG, dividendos, emisiones y recompras de acciones. Cuando algo del patrimonio neto se movió y no se sabe por qué, este estado es donde hay que mirar: los auditores lo concilian línea a línea.'
        ],
        callout: {
          type: 'warning',
          text: 'Los tres estados deben articularse: el resultado neto de la cuenta de resultados debe igualar la línea de resultado del estado de patrimonio neto y el punto de partida del estado de flujos de efectivo; el efectivo final del estado de flujos debe igualar el efectivo del balance. Si no es así, hay un error.'
        }
      },
      {
        heading: 'Cómo se conectan los estados',
        paragraphs: [
          'Este es el esquema de cableado que hay que interiorizar. Los ingresos fluyen por la cuenta de resultados: ingresos ordinarios → margen bruto → resultado de explotación → resultado neto. El resultado neto fluye al patrimonio neto: aumenta las reservas (tras los dividendos). Y el resultado neto fluye al estado de flujos de efectivo como punto de partida de la sección de explotación, donde se reintegran los gastos no monetarios como la amortización y los cambios en el fondo de maniobra lo ajustan al efectivo generado.',
          'Recorrer una transacción por los tres. Vender mercancías por $10,000 a crédito con coste de $6,000: la cuenta de resultados muestra ingresos ordinarios $10,000, coste $6,000, resultado $4,000. El balance muestra cuentas a cobrar +$10,000, existencias −$6,000, reservas +$4,000. El flujo de caja (indirecto) parte del resultado $4,000, no reintegra nada, resta el aumento de $10,000 en cuentas a cobrar y suma la disminución de $6,000 en existencias: flujo de caja de explotación $0, lo cual es correcto: aún no se ha movido efectivo.'
        ],
        steps: [
          'Cuenta de resultados: Ingresos ordinarios ↓ gastos = Resultado neto.',
          'Estado de patrimonio neto: Resultado neto − dividendos → Reservas.',
          'Flujo de caja: Resultado neto ± partidas no monetarias ± fondo de maniobra = Flujo de caja de explotación.',
          'Balance: el efectivo final debe coincidir con el estado de flujos de efectivo; las reservas deben coincidir con el estado de patrimonio neto.'
        ]
      },
      {
        heading: 'Las notas: donde vive la historia real',
        paragraphs: [
          'La NIC 1 exige revelar las políticas contables materiales y cualquier información necesaria para entender los estados. Las notas revelan los juicios detrás de los números: qué método de amortización, cómo se reconocen los ingresos, qué suponen las provisiones, qué segmentos tiene el negocio.',
          'Dos empresas pueden presentar resultados idénticos con perfiles de riesgo completamente distintos, y solo las notas lo dirán. Reconocimiento agresivo de ingresos, provisiones optimistas, transacciones con partes vinculadas: las señales de alerta que buscan los analistas viven en las notas. Leer los estados financieros sin las notas es como juzgar una película por su cartel.'
        ],
        callout: {
          type: 'interview',
          text: '«¿Dónde mirarías primero en un informe anual?» Respuesta sólida: el estado de flujos de efectivo (el más difícil de manipular), después las notas sobre políticas contables y juicios, y luego la cuenta de resultados. Quien empieza en los ingresos y se detiene ahí no ha hecho análisis.'
        }
      }
    ],
    mistakes: [
      'Leer la cuenta de resultados como una historia de efectivo: los ingresos incluyen ventas a crédito y el resultado incluye gastos no monetarios.',
      'Tratar el ORG como parte del resultado del ejercicio: el ORG elude el resultado y va directo a las reservas del patrimonio neto.',
      'Olvidar que los dividendos reducen las reservas pero nunca aparecen como gasto en la cuenta de resultados.',
      'Ignorar las notas, donde se revelan políticas, juicios y riesgos.',
      'Confundir la dimensión temporal: el balance es en un momento dado; la cuenta de resultados, los flujos de efectivo y el estado de patrimonio neto cubren un periodo.',
      'Suponer que los estados son independientes: se articulan; el resultado neto, el efectivo final y las reservas deben conciliarse entre estados.'
    ],
    interviewQA: [
      {
        q: 'Explícame cómo se vinculan los tres estados principales.',
        a: 'Empezar por la cuenta de resultados: los ingresos menos los gastos dan el resultado neto. El resultado neto fluye al estado de cambios en el patrimonio neto, aumentando las reservas tras los dividendos. El estado de flujos de efectivo parte del resultado neto, reintegra las partidas no monetarias como la amortización y ajusta por los movimientos del fondo de maniobra para llegar al flujo de caja de explotación; las secciones de inversión y financiación explican después el resto del movimiento de efectivo. Finalmente, el efectivo final del estado de flujos de efectivo debe igualar el efectivo del balance, y las reservas finales deben igualar el estado de patrimonio neto. Si algún vínculo se rompe, hay un error.'
      },
      {
        q: '¿Qué es el otro resultado global y por qué elude el resultado?',
        a: 'El ORG recoge ganancias y pérdidas que las normas excluyen deliberadamente del resultado: por ejemplo, superávits de revalorización del inmovilizado material, ciertas diferencias de conversión de moneda extranjera y remediciones de planes de prestación definida. Eluden la cuenta de resultados porque incluir partidas volátiles no realizadas distorsionaría la medida del rendimiento; en su lugar se acumulan en las reservas del patrimonio neto. El resultado global total (resultado + ORG) ofrece la imagen completa del cambio del patrimonio neto por causas distintas de los propietarios.'
      },
      {
        q: 'Una empresa presenta resultados crecientes pero un flujo de caja de explotación decreciente. ¿Qué investigarías?',
        a: 'Sospecharía resultado atrapado en el fondo de maniobra: cuentas a cobrar que crecen más rápido que las ventas (problemas de cobro o channel stuffing), existencias que se acumulan (riesgo de obsolescencia) o cuentas a pagar estiradas. También comprobaría devengos agresivos — ingresos reconocidos antes de tiempo o gastos diferidos — leyendo las notas sobre reconocimiento de ingresos y provisiones. La divergencia persistente entre resultado y efectivo es una de las señales de alerta más potentes del análisis financiero.'
      }
    ],
    quiz: [
      {
        question: '¿Cuál de los siguientes NO es un componente exigido de un juego completo de estados financieros según la NIC 1?',
        options: [
          'Balance',
          'Estado de flujos de efectivo',
          'Una previsión financiera a cinco años',
          'Notas con las políticas contables materiales'
        ],
        answer: 2,
        explanation: 'La NIC 1 exige los cuatro estados más las notas. Las previsiones no forman parte de los estados financieros.',
        difficulty: 'Foundation',
        topic: 'IAS 1',
        skill: 'IFRS Fundamentals'
      },
      {
        question: '¿En qué orden fluyen los ingresos por los estados?',
        options: [
          'Ingresos ordinarios → resultado → reservas → patrimonio neto',
          'Ingresos ordinarios → efectivo → resultado → patrimonio neto',
          'Ingresos ordinarios → patrimonio neto → resultado → efectivo',
          'Ingresos ordinarios → reservas → resultado → patrimonio neto'
        ],
        answer: 0,
        explanation: 'Los ingresos ordinarios impulsan el resultado en la cuenta de resultados; el resultado (tras los dividendos) aumenta las reservas; las reservas son un componente del patrimonio neto.',
        difficulty: 'Foundation',
        topic: 'Statements Flow',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'En el método indirecto del flujo de caja, la sección de explotación empieza con:',
        options: [
          'El efectivo en bancos',
          'El margen bruto',
          'Los ingresos ordinarios',
          'El resultado neto (resultado del ejercicio)'
        ],
        answer: 3,
        explanation: 'El método indirecto concilia del resultado de devengo al efectivo: se parte del resultado neto, se reintegran las partidas no monetarias y se ajusta por los cambios en el fondo de maniobra.',
        difficulty: 'Intermediate',
        topic: 'Cash Flow',
        skill: 'Cash Flow'
      },
      {
        question: 'Se declara y paga un dividendo de $40,000. ¿Qué estados se ven afectados?',
        options: [
          'La cuenta de resultados como un gasto de $40,000',
          'Solo el estado de flujos de efectivo',
          'El estado de cambios en el patrimonio neto y el balance (caen el efectivo y las reservas)',
          'Ningún estado: los dividendos están fuera de los libros'
        ],
        answer: 2,
        explanation: 'Los dividendos son distribuciones del patrimonio neto: caen las reservas y el efectivo. Nunca llegan a la cuenta de resultados como gasto; la salida de efectivo aparece en las actividades de financiación.',
        difficulty: 'Intermediate',
        topic: 'Dividends',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'El otro resultado global (ORG) se describe mejor como:',
        options: [
          'Un sinónimo del resultado neto',
          'Ganancias y pérdidas que eluden el resultado y se acumulan en las reservas del patrimonio neto',
          'Ganancias de efectivo excluidas del estado de flujos de efectivo',
          'Solo saldos de efectivo en moneda extranjera'
        ],
        answer: 1,
        explanation: 'Las partidas del ORG — superávits de revalorización, diferencias de conversión, ciertas remediciones de pensiones — van directas al patrimonio neto, manteniendo las partidas volátiles no realizadas fuera del resultado.',
        difficulty: 'Intermediate',
        topic: 'OCI',
        skill: 'IFRS Fundamentals'
      },
      {
        question: '¿Qué partida del balance se clasifica como corriente?',
        options: [
          'Una máquina con una vida útil de 10 años',
          'Un préstamo bancario a 5 años',
          'El fondo de comercio',
          'Cuentas a cobrar que se espera cobrar en 3 meses'
        ],
        answer: 3,
        explanation: 'Corriente significa que se espera realizar en los doce meses siguientes o en el ciclo de explotación. La máquina, el préstamo a largo plazo y el fondo de comercio son no corrientes.',
        difficulty: 'Foundation',
        topic: 'Classification',
        skill: 'IFRS Fundamentals'
      },
      {
        question: 'Una empresa vende mercancías por $10,000 a crédito; las mercancías costaron $6,000. ¿Cuál es el flujo de caja de explotación de esta transacción (método indirecto)?',
        options: [
          '$4,000',
          '$0: aún no se ha movido efectivo',
          '$10,000',
          '−$6,000'
        ],
        answer: 1,
        explanation: 'Se parte del resultado $4,000, se resta el aumento de $10,000 en cuentas a cobrar y se suma la disminución de $6,000 en existencias: $4,000 − $10,000 + $6,000 = $0. Correcto: no se ha movido efectivo.',
        difficulty: 'Advanced',
        topic: 'Statements Flow',
        skill: 'Cash Flow'
      },
      {
        question: 'La evolución de las reservas es: saldo inicial $500,000, resultado $120,000, dividendos $40,000. ¿Reservas finales?',
        options: [
          '$580,000',
          '$540,000',
          '$620,000',
          '$460,000'
        ],
        answer: 0,
        explanation: '$500,000 + $120,000 − $40,000 = $580,000. Esta conciliación es el núcleo del estado de cambios en el patrimonio neto.',
        difficulty: 'Intermediate',
        topic: 'Equity',
        skill: 'IFRS Fundamentals'
      },
      {
        question: '¿Por qué los analistas profesionales dedican tanto tiempo a las notas de los estados financieros?',
        options: [
          'Las notas contienen la cifra de resultado auditada',
          'Los estados no están auditados sin las notas',
          'Las notas revelan las políticas, los juicios y los riesgos que determinan lo que significan los números',
          'Las notas sustituyen al estado de flujos de efectivo'
        ],
        answer: 2,
        explanation: 'Resultados idénticos pueden ocultar perfiles de riesgo muy distintos; solo las notas revelan las políticas de reconocimiento de ingresos, las hipótesis de las provisiones y las operaciones con partes vinculadas.',
        difficulty: 'Intermediate',
        topic: 'Notes',
        skill: 'Financial Analysis'
      }
    ]
  }
];
