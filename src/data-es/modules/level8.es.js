// level8 — Spanish translation (auto-generated from TSV worklist; do not edit by hand)
export default [
  {
    id: 'm31',
    level: 8,
    levelTitle: 'Financial Analysis',
    title: 'Análisis de la cuenta de resultados',
    standard: 'Analysis',
    tagline: 'Los ingresos son vanidad, el beneficio es cordura, y el puente explica ambos.',
    description: 'Este módulo enseña a leer una cuenta de resultados como un analista: desde los ingresos ordinarios hasta el resultado bruto, el EBITDA, el EBIT y el resultado neto; los márgenes que importan; y el análisis puente que descompone Real frente a Presupuesto en efectos de precio, volumen, mix, tipo de cambio y costes: la herramienta más usada en la información de gestión.',
    minutes: 24,
    skills: [
      'Financial Analysis'
    ],
    sections: [
      {
        heading: 'Leer la cuenta de resultados de arriba abajo',
        paragraphs: [
          'La cuenta de resultados es una cascada: cada línea elimina una capa de coste para revelar una medida más pura del rendimiento. Los ingresos ordinarios son la primera línea: lo que pagaron los clientes. El resultado bruto (ingresos ordinarios menos coste de ventas) muestra el margen de lo vendido. El EBITDA (resultado antes de intereses, impuestos, depreciaciones y amortizaciones) aproxima la generación de caja operativa antes de la intensidad de capital. El EBIT (antes de intereses e impuestos) incluye el coste de desgastar los activos. El EBT deduce la financiación; el resultado neto deduce el impuesto: la última línea atribuible a los accionistas.',
          'Cada paso responde a una pregunta distinta. El resultado bruto pregunta: ¿es viable el modelo de negocio? El EBITDA pregunta: ¿genera caja la operación antes de reinvertir? El EBIT pregunta: ¿qué gana la operación incluido el consumo de activos? El resultado neto pregunta: ¿qué queda para los propietarios? Saltar directamente al resultado neto pierde de vista dónde cambió realmente el rendimiento.'
        ],
        table: {
          headers: [
            'Línea',
            'Fórmula',
            'Responde a'
          ],
          rows: [
            [
              'Ingresos ordinarios',
              '—',
              '¿Qué pagaron los clientes?'
            ],
            [
              'Resultado bruto',
              'Ingresos ordinarios − Coste de ventas',
              '¿Es viable el modelo de negocio?'
            ],
            [
              'EBITDA',
              'EBIT + Amortizaciones',
              'Generación de caja operativa antes del capex'
            ],
            [
              'EBIT',
              'Resultado bruto − Gastos de explotación',
              'Resultado operativo incluido el desgaste de los activos'
            ],
            [
              'EBT',
              'EBIT − Intereses netos',
              'Resultado antes de impuestos'
            ],
            [
              'Resultado neto',
              'EBT − Impuestos',
              'Qué queda para los accionistas'
            ]
          ]
        },
        callout: {
          type: 'key',
          text: 'Leer la cuenta de resultados como una cascada: Ingresos ordinarios → Resultado bruto → EBITDA → EBIT → EBT → Resultado neto. Cada línea aísla una capa distinta del rendimiento.'
        }
      },
      {
        heading: 'Los márgenes que importan',
        paragraphs: [
          'El beneficio absoluto favorece a las grandes empresas y castiga a las pequeñas; los márgenes igualan el terreno. El margen bruto (resultado bruto ÷ ingresos ordinarios) mide el poder de fijación de precios y la eficiencia productiva. El margen EBITDA muestra el apalancamiento operativo antes de la intensidad de capital. El margen neto muestra lo que finalmente queda. Seguir cada uno en el tiempo y frente a comparables: el margen de un solo año es trivia; la tendencia es la historia.',
          'Trabajar las cifras: ingresos ordinarios $2,000,000, coste de ventas $1,200,000 → resultado bruto $800,000, margen bruto 40%. Gastos de explotación $400,000 (incluidos $100,000 de amortización) → EBITDA $400,000 (margen 20%), EBIT $300,000. Intereses $50,000, impuestos $50,000 → resultado neto $200,000, margen neto 10%. Si el margen bruto cae del 40% al 36% mientras crecen los ingresos, el negocio está comprando ventas con descuentos o sufriendo inflación de inputs: de un modo u otro, crecer sale cada vez más caro.'
        ],
        bullets: [
          'Margen bruto = Resultado bruto / Ingresos ordinarios: poder de precios y eficiencia productiva.',
          'Margen EBITDA = EBITDA / Ingresos ordinarios: apalancamiento operativo antes del capex.',
          'Margen neto = Resultado neto / Ingresos ordinarios: lo que finalmente llega a los accionistas.'
        ]
      },
      {
        heading: 'EBITDA: útil y engañoso',
        paragraphs: [
          'El EBITDA es querido porque aproxima el flujo de caja operativo y permite comparar empresas con distinta antigüedad de activos y financiación. Una empresa joven con fuerte amortización y otra vieja con activos totalmente amortizados pueden tener idéntico EBITDA pero EBIT muy distintos: el EBITDA lo neutraliza.',
          'Pero el EBITDA tiene puntos ciegos famosos, y a los entrevistadores les encantan. Ignora el capex: dos empresas con el mismo EBITDA pueden tener necesidades de caja completamente distintas si una debe reponer maquinaria constantemente. Ignora el fondo de maniobra. Y puede manipularse clasificando creativamente los costes operativos. La frase de Warren Buffett sigue vigente: «¿Cree la dirección que el hada de los dientes paga el capex?». Usar el EBITDA, pero siempre junto al capex, el fondo de maniobra y el flujo de caja.'
        ],
        callout: {
          type: 'warning',
          text: 'El EBITDA ignora el capex, el fondo de maniobra y la financiación. Una empresa puede aumentar el EBITDA cada año mientras quema caja: leerlo siempre con el estado de flujos de efectivo.'
        }
      },
      {
        heading: 'Análisis puente: real frente a presupuesto',
        paragraphs: [
          'El puente (o cascada) descompone la brecha entre presupuesto y real en sus causas, convirtiendo «los ingresos están $65,000 por encima del presupuesto» en una explicación. El puente de ingresos estándar recorre cinco efectos: volumen (más unidades vendidas), precio (precios de venta más altos), mix (una mezcla de productos más rica), tipo de cambio (conversión de moneda), y luego los efectos de costes llevan el puente desde el resultado bruto hasta el EBITDA.',
          'Tomar el ejemplo trabajado: ingresos presupuestados $1,000,000. Efecto volumen: +500 unidades × $100 precio presupuestado = +$50,000. Efecto precio: +$2 × 10,500 unidades reales = +$21,000. Efecto mix: desplazamiento hacia productos premium = +$4,000. Efecto tipo de cambio: moneda local más fuerte = −$10,000. Ingresos reales = $1,065,000. Ahora los $65,000 de superación tienen una historia: crecimiento real (volumen + precio + mix = +$75,000) parcialmente enmascarado por la moneda (−$10,000).'
        ],
        table: {
          headers: [
            'Paso del puente',
            'Cálculo',
            'Efecto'
          ],
          rows: [
            [
              'Ingresos presupuestados',
              '10,000 unidades x $100',
              '$1,000,000'
            ],
            [
              'Efecto volumen',
              '+500 unidades x $100',
              '+$50,000'
            ],
            [
              'Efecto precio',
              '+$2 x 10,500 unidades',
              '+$21,000'
            ],
            [
              'Efecto mix',
              'Desplazamiento hacia productos premium',
              '+$4,000'
            ],
            [
              'Efecto tipo de cambio',
              'Conversión de moneda',
              '−$10,000'
            ],
            [
              'Ingresos reales',
              '—',
              '$1,065,000'
            ]
          ]
        }
      },
      {
        heading: 'Volumen, precio, mix: la santísima trinidad',
        paragraphs: [
          'Volumen, precio y mix son las tres palancas de los ingresos, y confundirlas es el error analítico clásico. El efecto volumen se mide a precios presupuestados: (unidades reales − unidades presupuestadas) × precio presupuestado: aísla cuánto de la desviación vino de vender más o menos unidades. El efecto precio se mide a volúmenes reales: (precio real − precio presupuestado) × unidades reales: aísla el precio puro. El efecto mix captura el resto: vender las mismas unidades totales pero una mezcla más rica eleva el precio medio sin ningún cambio en la lista de precios.',
          'Por qué importa: unos ingresos un 8% por encima suenan genial hasta que el puente muestra volumen −3% y toda la ganancia vino de una subida de precios puntual: eso es un negocio que se encoge cobrando más, no uno que crece. La dirección actúa sobre palancas, no sobre totales: los problemas de volumen exigen acción comercial, los de precio exigen disciplina de precios, los de mix exigen decisiones de cartera.'
        ],
        callout: {
          type: 'example',
          text: 'Los ingresos están un 8% por encima del presupuesto, pero el puente muestra volumen −3%, precio +9%, mix +2%. Veredicto: el negocio vendió menos unidades a precios más altos. Celebrar el poder de precios, pero investigar la caída del volumen antes de que se agrave.'
        }
      },
      {
        heading: 'Puentes de costes y análisis de gastos de explotación',
        paragraphs: [
          'El puente no se detiene en los ingresos. Del resultado bruto al EBITDA, cada línea de coste recibe el mismo tratamiento: costes de personal frente a presupuesto (plantilla × coste medio), costes de inputs (desviaciones de precio de compra), logística, marketing. Un puente de costes que muestra personal +$80,000 desfavorable exige la siguiente pregunta —¿plantilla por encima del plan o coste por empleado por encima del plan?—, porque la acción correctora difiere por completo.',
          'La disciplina es simétrica con los ingresos: descomponer en tarifa y volumen (precio × cantidad) siempre que sea posible. «Marketing gastó $30,000 de más» es un hecho; «marketing gastó de más porque el coste por lead subió un 25% mientras el volumen de leads se mantuvo» es un análisis que apunta a inflación de medios, no a despilfarro.'
        ],
        bullets: [
          'Llevar al puente cada línea de coste material, no solo los ingresos.',
          'Descomponer los costes en tarifa × volumen (plantilla × coste por empleado; unidades × precio de input).',
          'Vincular las desviaciones de costes a causas operativas: el puente debe terminar en acciones, no en adjetivos.'
        ]
      },
      {
        heading: 'Extraordinarios y resultado subyacente',
        paragraphs: [
          'El resultado declarado lo incluye todo, incluidos elementos que nunca se repetirán. Una ganancia de $200,000 por vender un almacén, un cargo por reestructuración, una resolución judicial: pertenecen a las cuentas de este año pero no al ritmo del negocio. El resultado subyacente (o ajustado) los elimina para revelar la tendencia sostenible de beneficios.',
          'El vector de abuso es obvio: a las empresas les encanta ajustar las malas noticias («cargos de reestructuración "extraordinarios" cada año») manteniendo las ganancias extraordinarias en el titular. La regla del analista: aceptar ajustes genuinamente no recurrentes y simétricos —si se eliminan los extraordinarios malos, eliminar también los buenos— y desconfiar de cualquier empresa cuyo resultado «subyacente» supere permanentemente al declarado.'
        ],
        callout: {
          type: 'warning',
          text: 'Un cargo por reestructuración tres años seguidos no es extraordinario: es el modelo de negocio. Ajustar simétricamente, o no ajustar.'
        }
      },
      {
        heading: 'Señales de alerta en la cuenta de resultados',
        paragraphs: [
          'Ciertos patrones de la cuenta de resultados deberían provocar escepticismo inmediato. Ingresos creciendo mientras el flujo de caja de explotación se estanca sugiere reconocimiento agresivo o channel stuffing (acumulación artificial de existencias en el canal). Margen bruto comprimiéndose varios años sugiere presión estructural de precios, no mala suerte. «Otros ingresos» creciendo más rápido que los ingresos sugiere que el beneficio se fabrica fuera del negocio principal. Y gastos que crecen en perfecta sintonía con los objetivos de ingresos —sin fallar nunca, sin superar por mucho— sugieren cifras gestionadas.',
          'Ninguna de estas prueba nada por sí sola; cada una es una invitación a escarbar en las notas, la información por segmentos y el estado de flujos de efectivo. La cuenta de resultados dice dónde mirar: rara vez dice la respuesta.'
        ],
        bullets: [
          'Ingresos al alza, caja de explotación plana → problemas de reconocimiento o cobro.',
          'Compresión del margen durante años → presión estructural, no un bache.',
          '«Otros ingresos» superando a los ingresos → beneficio fabricado fuera del negocio principal.',
          'Gastos que siguen los objetivos demasiado al milímetro → cifras posiblemente gestionadas.'
        ]
      }
    ],
    mistakes: [
      'Celebrar un crecimiento de ingresos impulsado solo por el precio mientras los volúmenes se desploman: un negocio que se encoge cobrando más.',
      'Comparar el EBITDA entre empresas con intensidad de capital muy distinta.',
      'Ignorar los efectos mix: un precio medio plano puede ocultar un desplazamiento hacia productos de bajo margen.',
      'Tratar las ganancias extraordinarias como beneficio recurrente en previsiones y valoraciones.',
      'Analizar desviaciones absolutas sin porcentajes (o porcentajes sin absolutos): ambos engañan por separado.',
      'Olvidar los efectos de conversión de moneda al analizar el crecimiento de un grupo multidivisa.'
    ],
    interviewQA: [
      {
        q: 'Los ingresos están un 8% por encima del presupuesto. ¿Cómo lo explica?',
        a: 'Construiría un puente: efecto volumen a precios presupuestados, efecto precio a volúmenes reales, efecto mix por cambios en la mezcla de productos, y conversión de moneda. Supongamos que el puente muestra volumen +$50,000, precio +$21,000, mix +$4,000, tipo de cambio −$10,000 sobre un presupuesto de $1,000,000. Entonces la historia es crecimiento operativo real (+$75,000) parcialmente enmascarado por la moneda (−$10,000). También comprobaría si el crecimiento del volumen es sostenible o anticipado, y si la ganancia de precio llegó con algún sacrificio de volumen.'
      },
      {
        q: '¿Por qué puede ser engañoso el EBITDA?',
        a: 'Tres puntos ciegos. Primero, ignora el capex: dos empresas con EBITDA idéntico pueden tener necesidades de caja completamente distintas si una repone maquinaria constantemente. Segundo, ignora los movimientos del fondo de maniobra. Tercero, puede maquillarse con una clasificación agresiva de costes. Uso el EBITDA para la comparabilidad operativa, pero siempre junto al capex, el fondo de maniobra y el flujo de caja de explotación, y desconfío de las cifras de «EBITDA ajustado» donde los ajustes son sospechosamente unidireccionales.'
      },
      {
        q: 'Recorrer un puente de la cuenta de resultados.',
        a: 'Partir del presupuesto y caminar hasta lo real paso a paso. En ingresos: efecto volumen (desviación de unidades a precio presupuestado), efecto precio (desviación de precio a unidades reales), efecto mix (cambios de mezcla), efecto tipo de cambio (conversión). Después continuar hacia abajo: desviaciones del coste de ventas (precios de inputs, eficiencia), desviaciones de gastos de explotación (plantilla frente a coste por empleado), llegando al EBITDA, luego intereses e impuestos hasta el resultado neto. Cada paso debe ser calculable a partir de los datos subyacentes y debe terminar en una explicación operativa: el puente solo está terminado cuando cada paso material tiene una causa y, donde proceda, una acción.'
      }
    ],
    quiz: [
      {
        question: 'Ordenar estas líneas de la cuenta de resultados de arriba abajo:',
        options: [
          'Ingresos ordinarios → EBITDA → Resultado bruto → Resultado neto → EBIT',
          'Resultado bruto → Ingresos ordinarios → EBIT → EBITDA → Resultado neto',
          'Ingresos ordinarios → Resultado neto → Resultado bruto → EBITDA → EBIT',
          'Ingresos ordinarios → Resultado bruto → EBITDA → EBIT → Resultado neto'
        ],
        answer: 3,
        explanation: 'La cuenta de resultados es una cascada: ingresos ordinarios, menos coste de ventas (resultado bruto), menos gastos de explotación antes de amortizaciones (EBITDA), menos amortizaciones (EBIT), menos intereses e impuestos (resultado neto).',
        difficulty: 'Foundation',
        topic: 'P&L Structure',
        skill: 'Financial Analysis'
      },
      {
        question: 'El EBITDA puede calcularse desde el EBIT:',
        options: [
          'Reincorporando amortizaciones',
          'Deduciendo amortizaciones',
          'Reincorporando intereses e impuestos',
          'Deduciendo el coste de ventas'
        ],
        answer: 0,
        explanation: 'EBITDA = EBIT + amortizaciones. Intereses e impuestos ya están excluidos del EBIT, por lo que solo se reincorporan los cargos no monetarios por consumo de activos.',
        difficulty: 'Intermediate',
        topic: 'EBITDA',
        skill: 'Financial Analysis'
      },
      {
        question: 'Los ingresos son $2,000,000 y el coste de ventas $1,200,000. El margen bruto es:',
        options: [
          '60%',
          '167%',
          '25%',
          '40%'
        ],
        answer: 3,
        explanation: 'Resultado bruto = $2,000,000 − $1,200,000 = $800,000; margen bruto = $800,000 / $2,000,000 = 40%.',
        difficulty: 'Intermediate',
        topic: 'Margins',
        skill: 'Financial Analysis'
      },
      {
        question: 'Ingresos presupuestados $1,000,000. El puente muestra volumen +$50,000, precio +$21,000, mix +$4,000, tipo de cambio −$10,000. Los ingresos reales son:',
        options: [
          '$1,075,000',
          '$1,065,000',
          '$1,085,000',
          '$935,000'
        ],
        answer: 1,
        explanation: '$1,000,000 + $50,000 + $21,000 + $4,000 − $10,000 = $1,065,000.',
        difficulty: 'Intermediate',
        topic: 'Bridge Analysis',
        skill: 'Financial Analysis'
      },
      {
        question: 'El efecto volumen en un puente de ingresos se calcula correctamente como:',
        options: [
          '(Precio real − Precio presupuestado) x Unidades reales',
          '(Unidades reales − Unidades presupuestadas) x Precio real',
          '(Unidades reales − Unidades presupuestadas) x Precio presupuestado',
          'Ingresos reales − Ingresos presupuestados, sin desglose'
        ],
        answer: 2,
        explanation: 'El volumen se aísla a precios presupuestados para que los cambios de precio no lo contaminen; el precio se mide después a unidades reales. Ese desglose es lo que hace cuadrar el puente.',
        difficulty: 'Advanced',
        topic: 'Bridge Analysis',
        skill: 'Financial Analysis'
      },
      {
        question: 'El efecto precio en un puente de ingresos se calcula correctamente como:',
        options: [
          '(Precio real − Precio presupuestado) x Unidades presupuestadas',
          '(Unidades reales − Unidades presupuestadas) x Precio presupuestado',
          '(Precio real − Precio presupuestado) x Unidades reales',
          'Ingresos presupuestados x tasa de inflación'
        ],
        answer: 2,
        explanation: 'El efecto precio aplica la diferencia de precio a los volúmenes reales: las unidades realmente vendidas al nuevo precio. Usar unidades presupuestadas lo infravaloraría cuando crecen los volúmenes.',
        difficulty: 'Intermediate',
        topic: 'Bridge Analysis',
        skill: 'Financial Analysis'
      },
      {
        question: 'Costes reales de $370,000 frente a un presupuesto de $400,000. Esta desviación es:',
        options: [
          'Desfavorable $30,000 (7.5%)',
          'Favorable $30,000 (8.1%)',
          'Ninguna: las desviaciones de costes no tienen dirección',
          'Favorable $30,000 (7.5%)'
        ],
        answer: 3,
        explanation: 'Gastar menos de lo presupuestado en una línea de coste es favorable: $400,000 − $370,000 = $30,000, que es el 7.5% del presupuesto de $400,000.',
        difficulty: 'Foundation',
        topic: 'Variances',
        skill: 'Financial Analysis'
      },
      {
        question: '¿Cuál es la diferencia entre EBIT y EBITDA?',
        options: [
          'El EBIT incluye amortizaciones; el EBITDA las reincorpora',
          'El EBIT incluye intereses; el EBITDA los excluye',
          'No hay diferencia',
          'El EBIT es después de impuestos; el EBITDA es antes de impuestos'
        ],
        answer: 0,
        explanation: 'Ambos excluyen intereses e impuestos. La diferencia es la amortización: el EBIT carga el consumo de activos, el EBITDA no; por eso el EBITDA aproxima la generación de caja operativa antes del capex.',
        difficulty: 'Intermediate',
        topic: 'EBITDA',
        skill: 'Financial Analysis'
      },
      {
        question: 'Los ingresos suben un 8% frente al presupuesto pero los volúmenes de ventas caen un 3%. La interpretación correcta es:',
        options: [
          'El negocio crece con fuerza: celebrar',
          'El crecimiento es de precio/mix; investigar la caída del volumen',
          'El puente debe estar mal; ingresos y volumen siempre se mueven juntos',
          'Bajar precios de inmediato para recuperar volumen'
        ],
        answer: 1,
        explanation: 'Si los ingresos suben mientras las unidades caen, el precio y el mix hicieron todo el trabajo. El poder de precios es buena noticia, pero los volúmenes en caída se agravan: encontrar la causa antes de actuar sobre el precio.',
        difficulty: 'Advanced',
        topic: 'Bridge Analysis',
        skill: 'Financial Analysis'
      },
      {
        question: 'Una ganancia de $200,000 por vender un almacén figura en otros ingresos. Para el análisis de tendencias debería:',
        options: [
          'Incluirse: el beneficio es beneficio',
          'Repartirse en los próximos cinco años',
          'Excluirse del resultado subyacente: no se repetirá',
          'Deducirse de los ingresos'
        ],
        answer: 2,
        explanation: 'El resultado subyacente elimina los elementos no recurrentes para revelar el ritmo sostenible. Una venta de almacén ocurre una vez; incluirla maquilla la tendencia.',
        difficulty: 'Intermediate',
        topic: 'Underlying Profit',
        skill: 'Financial Analysis'
      },
      {
        question: 'Las unidades totales vendidas igualan el presupuesto, pero los ingresos superan el presupuesto porque los clientes compraron más productos premium. Esto es un:',
        options: [
          'Efecto volumen',
          'Efecto mix favorable',
          'Efecto precio',
          'Efecto tipo de cambio'
        ],
        answer: 1,
        explanation: 'Mismo volumen, mezcla más rica, precio medio más alto sin cambios en la lista de precios: la definición de manual del efecto mix.',
        difficulty: 'Advanced',
        topic: 'Bridge Analysis',
        skill: 'Financial Analysis'
      },
      {
        question: 'El EBT es $250,000 y el gasto por impuesto sobre beneficios es $50,000. El resultado neto es:',
        options: [
          '$300,000',
          '$250,000',
          '$150,000',
          '$200,000'
        ],
        answer: 3,
        explanation: 'Resultado neto = EBT − impuestos = $250,000 − $50,000 = $200,000: la última línea para los accionistas.',
        difficulty: 'Foundation',
        topic: 'P&L Structure',
        skill: 'Financial Analysis'
      }
    ]
  },
  {
    id: 'm32',
    level: 8,
    levelTitle: 'Financial Analysis',
    title: 'Análisis del balance',
    standard: 'Analysis',
    tagline: 'Una fotografía del negocio, pero solo en movimiento habla.',
    description: 'El balance muestra lo que el negocio posee, debe y vale en un momento dado. Este módulo enseña a interrogarlo: fondo de maniobra, ratios de liquidez, disciplina de cuentas a cobrar/existencias/cuentas a pagar, estructura de deuda y patrimonio, con un ejercicio completo de ratios sobre cifras reales y las señales de alerta que separan los balances sanos de los frágiles.',
    minutes: 22,
    skills: [
      'Financial Analysis'
    ],
    sections: [
      {
        heading: 'El balance como fotografía',
        paragraphs: [
          'La cuenta de resultados cubre un periodo; el balance captura un instante: la medianoche de la fecha de cierre. Activos (lo controlado), pasivos (lo debido), patrimonio neto (el residual). Como es una instantánea, un solo balance puede engañar: una empresa puede parecer líquida a 31 de diciembre tras cobrar las cuentas a cobrar de fin de año y cancelar su descubierto, y quedarse seca en febrero. Leer siempre al menos dos balances consecutivos y observar el movimiento.',
          'La estructura importa tanto como los totales. Corriente frente a no corriente habla de plazos: ¿pueden los recursos a corto cubrir las obligaciones a corto? Las notas revelan lo que la cara oculta: activos pignorados, pasivos contingentes, saldos con partes vinculadas. Un analista que solo lee la cara del balance está leyendo la portada, no el libro.'
        ],
        callout: {
          type: 'key',
          text: 'El balance es una fotografía: leerlo en movimiento. Dos balances consecutivos más el estado de flujos de efectivo dicen más que cualquier instantánea.'
        }
      },
      {
        heading: 'Fondo de maniobra en profundidad',
        paragraphs: [
          'El fondo de maniobra (activo corriente − pasivo corriente) mide el colchón a corto plazo. Pero la herramienta más afilada es el fondo de maniobra operativo: cuentas a cobrar + existencias − cuentas a pagar: el efectivo inmovilizado en el ciclo de explotación, depurado del propio efectivo y de las partidas financieras. El crecimiento de las ventas casi siempre aumenta el fondo de maniobra operativo, y por eso las empresas de rápido crecimiento pueden ser rentables y estar sedientas de caja a la vez (m34 profundiza en el ciclo).',
          'Nuestra empresa de ejemplo: activo corriente $800,000 (cuentas a cobrar $350,000, existencias $300,000, efectivo $150,000), pasivo corriente $500,000. Fondo de maniobra = $300,000. Fondo de maniobra operativo = $350,000 + $300,000 − cuentas a pagar. Si las cuentas a pagar son $200,000, el FM operativo = $450,000: es decir, $450,000 de la financiación de la empresa están inmovilizados en el ciclo comercial diario.'
        ],
        bullets: [
          'Fondo de maniobra = Activo corriente − Pasivo corriente.',
          'Fondo de maniobra operativo = Cuentas a cobrar + Existencias − Cuentas a pagar (la inversión del ciclo comercial).',
          'FM operativo creciendo más rápido que las ventas → el efectivo está siendo absorbido; investigar.'
        ]
      },
      {
        heading: 'Liquidez: ¿podemos pagar mañana?',
        paragraphs: [
          'Los ratios de liquidez prueban la supervivencia a corto plazo. El ratio de liquidez (activo corriente ÷ pasivo corriente) pregunta si los recursos a corto cubren las obligaciones a corto: $800,000 ÷ $500,000 = 1.6x: holgado. La prueba ácida es más estricta: excluye las existencias, que pueden ser de lenta rotación u obsoletas: ($800,000 − $300,000) ÷ $500,000 = 1.0x: cubierto exactamente sin vender una sola unidad de stock.',
          'Los ratios necesitan contexto para significar algo. Un ratio de liquidez de 1.6 con cuentas a cobrar vencidas 90 días es más débil que un 1.2 con cuentas a cobrar casi efectivo. Los supermercados funcionan con ratios de liquidez por debajo de 1.0 con seguridad porque las existencias rotan en días y los proveedores los financian. Leer la liquidez con los cuadros de antigüedad y el ciclo de conversión de caja, nunca sola.'
        ],
        table: {
          headers: [
            'Ratio',
            'Fórmula',
            'Nuestra empresa',
            'Lectura'
          ],
          rows: [
            [
              'Ratio de liquidez',
              'Activo corriente / Pasivo corriente',
              '$800,000 / $500,000 = 1.6x',
              'Cobertura holgada a corto plazo'
            ],
            [
              'Prueba ácida',
              '(Activo corriente − Existencias) / Pasivo corriente',
              '$500,000 / $500,000 = 1.0x',
              'Cubierto aun sin vender existencias'
            ],
            [
              'Ratio de caja',
              'Efectivo / Pasivo corriente',
              '$150,000 / $500,000 = 0.3x',
              'Cobertura inmediata de caja: el test más estricto'
            ]
          ]
        }
      },
      {
        heading: 'Cuentas a cobrar, existencias, cuentas a pagar',
        paragraphs: [
          'Los tres saldos del fondo de maniobra cuentan cada uno una historia. Unas cuentas a cobrar que crecen más rápido que los ingresos sugieren problemas de cobro, condiciones de crédito más laxas para cumplir objetivos, o channel stuffing (acumulación artificial de existencias en el canal): todo lo cual infla el beneficio hoy y crea impagados mañana. La provisión por pérdidas crediticias esperadas es la estimación de la dirección de lo que no se cobrará: demasiado fina, y los activos y el beneficio están sobrevalorados; debe moverse con sensatez con la antigüedad.',
          'Existencias acumulándose más rápido que las ventas susurran obsolescencia, y las NIIF exigen las existencias al menor entre coste y valor neto realizable, así que el exceso de stock acaba en deterioro. Las cuentas a pagar estiradas maquillan temporalmente el flujo de caja de explotación pero pueden señalar tensiones (o fuerte poder negociador: el contexto decide). Los saldos con partes vinculadas enterrados en cualquiera de estas líneas merecen escrutinio aparte: pueden no comportarse como condiciones comerciales entre independientes.'
        ],
        journal: {
          transaction: 'Reconocer provisión por insolvencias: $20,000 de cuentas a cobrar consideradas de improbable cobro',
          lines: [
            {
              account: 'Pérdidas por créditos incobrables',
              dr: 20000,
              cr: null
            },
            {
              account: 'Provisión por pérdidas crediticias esperadas',
              dr: null,
              cr: 20000
            }
          ],
          narration: 'La provisión es una cuenta correctora de activo: las cuentas a cobrar se presentan netas, y la pérdida esperada golpea al resultado ahora.'
        },
        impact: {
          pl: 'Resultado $20,000 menor por el gasto por insolvencias.',
          bs: 'Cuentas a cobrar netas en $330,000 ($350,000 − $20,000).',
          cf: 'Sin efecto en el efectivo: la pérdida es una estimación hasta que se dan de baja deudas concretas.'
        }
      },
      {
        heading: 'Deuda y patrimonio: ¿quién financia el negocio?',
        paragraphs: [
          'El lado derecho del balance muestra la mezcla de financiación. Una deuda total de $600,000 frente a un patrimonio neto de $900,000 da un ratio de endeudamiento de 0.67x: apalancamiento moderado. Pero los analistas casi siempre netean primero el efectivo: deuda neta = deuda − efectivo = $600,000 − $150,000 = $450,000, porque el efectivo podría amortizar deuda mañana. Deuda neta ÷ EBITDA mide entonces cuántos años de resultado operativo liquidarían la deuda: la métrica de apalancamiento más citada en el análisis de crédito.',
          'La calidad del patrimonio importa tanto como la cantidad. El patrimonio construido con beneficios retenidos es ganado; el patrimonio inflado con superávits de revalorización es papel. Y vigilar el perfil de vencimientos en las notas: $600,000 de deuda con vencimiento el próximo año es un riesgo de refinanciación que el total solo no muestra.'
        ],
        bullets: [
          'Deuda/Patrimonio neto = Deuda total / Patrimonio neto = 0.67x aquí: moderado.',
          'Deuda neta = Deuda − Efectivo = $450,000: la deuda que el efectivo no puede cubrir de inmediato.',
          'Leer las notas: perfil de vencimientos, covenants, activos pignorados y financiación de partes vinculadas.'
        ]
      },
      {
        heading: 'Ejercicio de ratios: el conjunto completo',
        paragraphs: [
          'Reuniendo las cifras del módulo en una vista: esta es la forma de un resumen analítico real. Cada ratio siguiente se calcula con la misma empresa, para ver cómo conectan las piezas: la liquidez es sólida, el apalancamiento es moderado, y los saldos del fondo de maniobra merecen la vigilancia más estrecha.'
        ],
        table: {
          headers: [
            'Área',
            'Ratio',
            'Cálculo',
            'Resultado'
          ],
          rows: [
            [
              'Liquidez',
              'Ratio de liquidez',
              '$800,000 / $500,000',
              '1.6x'
            ],
            [
              'Liquidez',
              'Prueba ácida',
              '$500,000 / $500,000',
              '1.0x'
            ],
            [
              'Fondo de maniobra',
              'Fondo de maniobra',
              '$800,000 − $500,000',
              '$300,000'
            ],
            [
              'Apalancamiento',
              'Deuda / Patrimonio neto',
              '$600,000 / $900,000',
              '0.67x'
            ],
            [
              'Apalancamiento',
              'Deuda neta',
              '$600,000 − $150,000',
              '$450,000'
            ],
            [
              'Calidad de activos',
              'Cuentas a cobrar netas de provisión',
              '$350,000 − $20,000',
              '$330,000'
            ]
          ]
        }
      },
      {
        heading: 'Señales de alerta del balance',
        paragraphs: [
          'Algunos patrones deberían hacer que cualquier analista acuda a las notas. Cuentas a cobrar creciendo mucho más rápido que los ingresos: beneficio sin caja. Existencias creciendo más rápido que las ventas: futuros deterioros. Pasivo corriente superando al activo corriente persistentemente en un negocio no minorista: iliquidez estructural. Deuda al alza mientras el patrimonio está plano: el apalancamiento sube en silencio. Y el fondo de comercio dominando el activo total: el balance apuesta a que las adquisiciones pasadas sigan justificando sus precios (los tests de deterioro de las notas mostrarán lo cerca del límite que están).',
          'La meta-regla: comparar tasas de crecimiento, no solo niveles. Cuando cualquier línea del balance crece persistentemente más rápido que los ingresos a los que sirve, algo estructural está ocurriendo: averiguar qué antes de que lo haga el mercado.'
        ],
        callout: {
          type: 'warning',
          text: 'Comparar tasas de crecimiento, no niveles. Cuentas a cobrar, existencias o deuda creciendo persistentemente más rápido que los ingresos es el balance diciendo algo: escuchar antes de que lo haga el deterioro.'
        }
      }
    ],
    mistakes: [
      'Leer un solo balance sin ejercicios anteriores: la instantánea solo tiene sentido en movimiento.',
      'Tratar todos los activos corrientes como igualmente líquidos: unas existencias de lenta rotación no son efectivo.',
      'Analizar la deuda sin netear el efectivo: la deuda bruta sobredimensiona la carga.',
      'Ignorar las notas: vencimientos, covenants, activos pignorados y contingencias viven allí.',
      'Olvidar que las revalorizaciones inflan el patrimonio sin generar un céntimo de caja.',
      'Pasar por alto los saldos con partes vinculadas enterrados dentro de cuentas a cobrar y a pagar.'
    ],
    interviewQA: [
      {
        q: '¿Cómo se evalúa la liquidez de una empresa desde el balance?',
        a: 'Empezaría con el ratio de liquidez y la más estricta prueba ácida —por ejemplo 1.6x y 1.0x—, pero nunca me detendría ahí. Comprobaría qué son realmente los activos corrientes: ¿son cobrables las cuentas a cobrar (leer la antigüedad y la provisión por insolvencias)?, ¿son vendibles las existencias?, ¿cuánto es efectivo real? Después miraría la tendencia en varios ejercicios y el ciclo de conversión de caja, porque un ratio es una instantánea y la liquidez es cuestión de plazos. Un supermercado puede vivir por debajo de 1.0; un fabricante con 1.6 y cuentas a cobrar podridas, no.'
      },
      {
        q: 'Las cuentas a cobrar crecen más rápido que los ingresos. ¿Qué se investiga?',
        a: 'Tres hipótesis: problemas de cobro (los clientes pagan más despacio: comprobar el DSO y la antigüedad), condiciones de crédito más laxas concedidas para cumplir objetivos de ventas (comprobar cambios en la política de crédito y si el crecimiento se concentra en clientes de riesgo), o channel stuffing (empujar producto a los distribuidores para reconocer ingresos antes). Examinaría la antigüedad de las cuentas a cobrar, la provisión por insolvencias frente a los saldos vencidos, el cobro en efectivo tras el cierre y los datos por segmentos. Unas cuentas a cobrar que crecen sin caja son una de las señales tempranas más fiables de problemas de calidad del resultado.'
      },
      {
        q: '¿Qué significa un fondo de maniobra negativo y es siempre malo?',
        a: 'Un fondo de maniobra negativo significa que el pasivo corriente supera al activo corriente. En la distribución y los supermercados es normal e incluso deseable: las existencias se venden en días, los clientes pagan al contado y a los proveedores se les paga a 60 días, así que los proveedores financian el negocio. En la industria o los servicios suele ser una advertencia: la empresa puede estar estirando las cuentas a pagar porque no puede pagar, o arrastrando deuda que debe refinanciar. El contexto —el modelo de negocio y el ciclo de conversión de caja— decide si es eficiencia o tensión.'
      }
    ],
    quiz: [
      {
        question: 'La ecuación fundamental del balance es:',
        options: [
          'Activo = Pasivo + Patrimonio neto',
          'Activo = Pasivo − Patrimonio neto',
          'Ingresos − Gastos = Activo',
          'Efectivo = Beneficio + Patrimonio neto'
        ],
        answer: 0,
        explanation: 'Todo balance cuadra: lo que el negocio controla iguala lo que debe más el derecho residual de los propietarios.',
        difficulty: 'Foundation',
        topic: 'BS Equation',
        skill: 'Financial Analysis'
      },
      {
        question: 'Activo corriente $800,000 y pasivo corriente $500,000. El fondo de maniobra es:',
        options: [
          '$300,000',
          '$1,300,000',
          '$500,000',
          '$800,000'
        ],
        answer: 0,
        explanation: 'Fondo de maniobra = activo corriente − pasivo corriente = $800,000 − $500,000 = $300,000.',
        difficulty: 'Intermediate',
        topic: 'Working Capital',
        skill: 'Financial Analysis'
      },
      {
        question: 'Con las mismas cifras, el ratio de liquidez es:',
        options: [
          '0.625x',
          '1.0x',
          '2.6x',
          '1.6x'
        ],
        answer: 3,
        explanation: 'Ratio de liquidez = $800,000 / $500,000 = 1.6x: los recursos a corto cubren las obligaciones a corto 1.6 veces.',
        difficulty: 'Intermediate',
        topic: 'Liquidity Ratios',
        skill: 'Financial Analysis'
      },
      {
        question: 'Las existencias son $300,000. La prueba ácida es:',
        options: [
          '1.6x',
          '1.0x',
          '0.6x',
          '2.2x'
        ],
        answer: 1,
        explanation: 'Prueba ácida = (activo corriente − existencias) / pasivo corriente = ($800,000 − $300,000) / $500,000 = 1.0x.',
        difficulty: 'Intermediate',
        topic: 'Liquidity Ratios',
        skill: 'Financial Analysis'
      },
      {
        question: 'La deuda total es $600,000 y el efectivo $150,000. La deuda neta es:',
        options: [
          '$750,000',
          '$600,000',
          '$450,000',
          '$150,000'
        ],
        answer: 2,
        explanation: 'Deuda neta = deuda − efectivo = $600,000 − $150,000 = $450,000: la deuda que el efectivo disponible no puede amortizar de inmediato.',
        difficulty: 'Intermediate',
        topic: 'Leverage',
        skill: 'Financial Analysis'
      },
      {
        question: 'Deuda de $600,000 frente a patrimonio neto de $900,000 da un ratio de endeudamiento de 0.67x. Esto indica:',
        options: [
          'Apalancamiento peligroso que exige acción inmediata',
          'Que no hay deuda',
          'Apalancamiento moderado: la deuda es dos tercios del patrimonio',
          'Patrimonio neto negativo'
        ],
        answer: 2,
        explanation: '0.67x es moderado: por cada $1 de patrimonio hay $0.67 de deuda. El contexto (sector, vencimientos, cobertura con flujos de caja) completa el juicio.',
        difficulty: 'Advanced',
        topic: 'Leverage',
        skill: 'Financial Analysis'
      },
      {
        question: 'Las cuentas a cobrar han crecido un 35% mientras los ingresos crecieron un 8%. La interpretación más preocupante es:',
        options: [
          'Problemas de cobro o reconocimiento agresivo de ingresos: beneficio sin caja',
          'Excelente rendimiento comercial',
          'Prueba de fuerte fidelidad de clientes',
          'Una campaña de marketing exitosa'
        ],
        answer: 0,
        explanation: 'Las cuentas a cobrar deberían seguir grosso modo a los ingresos. Una gran brecha sugiere cobro más lento, crédito más laxo para cumplir objetivos, o channel stuffing: investigar el DSO, la antigüedad y el cobro en efectivo tras el cierre.',
        difficulty: 'Intermediate',
        topic: 'Red Flags',
        skill: 'Financial Analysis'
      },
      {
        question: '¿Qué activo es el más líquido?',
        options: [
          'Cuentas a cobrar comerciales',
          'Existencias',
          'Inmovilizado material',
          'Efectivo'
        ],
        answer: 3,
        explanation: 'La liquidez trata de la rapidez y certeza de conversión en efectivo: el efectivo es inmediato, las cuentas a cobrar exigen gestión de cobro, las existencias deben venderse primero, el inmovilizado material el último.',
        difficulty: 'Foundation',
        topic: 'Liquidity',
        skill: 'Financial Analysis'
      },
      {
        question: 'Una cadena de supermercados declara fondo de maniobra negativo año tras año. Lo más probable es que:',
        options: [
          'La empresa sea ciertamente insolvente',
          'Los proveedores financian el ciclo operativo: normal en distribución de rápida rotación',
          'Sus auditores calificarán las cuentas',
          'No tiene existencias'
        ],
        answer: 1,
        explanation: 'Los minoristas cobran en días y pagan a proveedores en semanas: el fondo de maniobra negativo es eficiencia, no tensión. En la industria la misma cifra sería una advertencia: el modelo de negocio decide.',
        difficulty: 'Advanced',
        topic: 'Working Capital',
        skill: 'Financial Analysis'
      },
      {
        question: '$20,000 de cuentas a cobrar se consideran incobrables. El asiento correcto es:',
        options: [
          'Debe Provisión por pérdidas crediticias esperadas $20,000 / Haber Efectivo $20,000',
          'Debe Pérdidas por créditos incobrables $20,000 / Haber Provisión por pérdidas crediticias esperadas $20,000',
          'Debe Cuentas a cobrar $20,000 / Haber Ingresos ordinarios $20,000',
          'Sin asiento hasta que el cliente incumpla formalmente'
        ],
        answer: 1,
        explanation: 'La pérdida esperada golpea al resultado ahora vía la cuenta correctora de provisión; las cuentas a cobrar se presentan netas. Esperar al incumplimiento formal sobrevalora activos y beneficio.',
        difficulty: 'Intermediate',
        topic: 'Bad Debts',
        skill: 'Financial Analysis'
      },
      {
        question: 'La provisión por insolvencias afecta a los estados:',
        options: [
          'Reduciendo el efectivo y reduciendo los ingresos',
          'Aumentando los pasivos y reduciendo el patrimonio directamente',
          'Reduciendo las cuentas a cobrar en el balance y reduciendo el resultado vía el gasto por insolvencias',
          'Sin efecto hasta que se da de baja una deuda'
        ],
        answer: 2,
        explanation: 'Es una cuenta correctora de activo (cuentas a cobrar netas) con el gasto compensatorio en la cuenta de resultados: el modelo de pérdida esperada reconoce el coste cuando se identifica, no cuando finalmente se da de baja.',
        difficulty: 'Advanced',
        topic: 'Bad Debts',
        skill: 'Financial Analysis'
      },
      {
        question: 'El patrimonio neto puede aumentar legítimamente mediante:',
        options: [
          'Revalorizar pasivos a la baja arbitrariamente',
          'Emitir deuda',
          'Dar de baja activos',
          'Beneficios retenidos de la explotación'
        ],
        answer: 3,
        explanation: 'Los beneficios retenidos se acumulan en el patrimonio a medida que el negocio gana. La deuda aumenta los pasivos, no el patrimonio; las revalorizaciones arbitrarias y las bajas no crean patrimonio genuino.',
        difficulty: 'Foundation',
        topic: 'Equity',
        skill: 'Financial Analysis'
      }
    ]
  },
  {
    id: 'm33',
    level: 8,
    levelTitle: 'Financial Analysis',
    title: 'Análisis de los flujos de efectivo',
    standard: 'IAS 7',
    tagline: 'El beneficio es una opinión. El efectivo es un hecho.',
    description: 'El estado de flujos de efectivo de IAS 7 responde a la pregunta que el beneficio no puede: ¿adónde fue realmente el efectivo? Este módulo cubre los tres cajones de flujos de efectivo, el método indirecto del resultado al flujo de explotación, las paradojas clásicas (beneficio al alza, caja a la baja) y el flujo de caja libre: la cifra en la que más confían los inversores.',
    minutes: 18,
    skills: [
      'Cash Flow',
      'Financial Analysis'
    ],
    sections: [
      {
        heading: 'Beneficio ≠ Caja: la idea central',
        paragraphs: [
          'El beneficio se mide por devengo; el efectivo se mide cuando se mueve. Entre ambos están todas las diferencias temporales que hacen interesante el análisis financiero: ventas a crédito registradas como ingresos antes de que llegue el efectivo, amortización cargada como gasto sin salida de efectivo, existencias acumuladas que consumieron efectivo pero no beneficio, proveedores pagados después de reconocer los gastos. Una empresa puede declarar un beneficio récord mientras su saldo bancario se encoge, y puede sangrar caja mientras declara pérdidas que son mayoritariamente amortización.',
          'Por eso IAS 7 convierte el estado de flujos de efectivo en un estado principal, no en una nota. A los prestamistas les importa porque la deuda se amortiza en efectivo, no en EBITDA. A los inversores les importa porque los dividendos se pagan en efectivo. Y a los defraudadores les disgusta, porque mientras el beneficio puede gestionarse con devengos, los movimientos de efectivo dejan rastros bancarios.'
        ],
        callout: {
          type: 'key',
          text: 'El beneficio mide el rendimiento por devengo; el efectivo mide la supervivencia. Leerlos juntos: la brecha entre ambos es donde vive el análisis.'
        }
      },
      {
        heading: 'Los tres cajones: explotación, inversión, financiación',
        paragraphs: [
          'IAS 7 ordena cada flujo de efectivo en tres actividades. Explotación: los efectos de caja del negocio principal: cobros de clientes, pagos a proveedores y empleados, impuestos pagados. Inversión: compra y venta de activos a largo plazo: capex, adquisiciones, enajenaciones. Financiación: transacciones con los aportantes de capital: obtención y amortización de préstamos, emisiones de acciones, dividendos pagados.',
          'La clasificación cuenta la historia de la empresa de un vistazo. Un patrón sano: entradas de explotación financiando salidas de inversión, con la financiación como partida de equilibrio. Uno insano: salidas de explotación enmascaradas por endeudamiento continuo: la empresa sobrevive de la financiación, no de su negocio. Preguntar siempre qué cajón financia a cuál.'
        ],
        table: {
          headers: [
            'Actividad',
            'Entradas',
            'Salidas'
          ],
          rows: [
            [
              'Explotación',
              'Efectivo de clientes',
              'Pagado a proveedores, empleados, impuestos'
            ],
            [
              'Inversión',
              'Venta de maquinaria, inversiones',
              'Capex, adquisiciones'
            ],
            [
              'Financiación',
              'Nuevos préstamos, emisiones de acciones',
              'Amortizaciones de préstamos, dividendos'
            ]
          ]
        }
      },
      {
        heading: 'Leer el flujo de caja de explotación: el método indirecto',
        paragraphs: [
          'La mayoría de empresas presentan el flujo de explotación por el método indirecto: partir del resultado, reincorporar los cargos no monetarios y ajustar por los movimientos del fondo de maniobra. Trabajarlo: resultado $200,000. Reincorporar amortización $80,000 (cargada al resultado, sin salida de efectivo). Las cuentas a cobrar aumentaron $150,000 —ventas registradas pero efectivo no cobrado—: restar. Las cuentas a pagar aumentaron $40,000 —gastos registrados pero efectivo aún no pagado—: sumar. Flujo de caja de explotación = $200,000 + $80,000 − $150,000 + $40,000 = $170,000.',
          'La lógica de signos es mecánica una vez interiorizada: un aumento de un activo operativo (cuentas a cobrar, existencias) consume efectivo: restar; un aumento de un pasivo operativo (cuentas a pagar) preserva efectivo: sumar. Las disminuciones hacen lo contrario. Cada movimiento del fondo de maniobra en el método indirecto solo pregunta: ¿este cambio trajo efectivo o se lo llevó?'
        ],
        callout: {
          type: 'example',
          text: 'Resultado $200,000 + amortización $80,000 − aumento de cuentas a cobrar $150,000 + aumento de cuentas a pagar $40,000 = flujo de caja de explotación $170,000. El resultado parecía mejor que la caja porque $110,000 de él siguen en el fondo de maniobra.'
        }
      },
      {
        heading: 'Paradojas clásicas',
        paragraphs: [
          'Paradoja uno: beneficio al alza, caja a la baja. Las ventas crecieron con generosas condiciones de crédito: las cuentas a cobrar absorbieron cada dólar de beneficio extra y más. La cuenta de resultados celebra; la cuenta bancaria no. Paradoja dos: la empresa en crecimiento que siempre necesita caja. Cada dólar extra de ventas exige existencias y cuentas a cobrar por adelantado: el crecimiento consume caja antes de generarla, y por eso las empresas de rápido crecimiento amplían financiación aun siendo rentables.',
          'Paradoja tres: el capex afecta a la caja ahora, al beneficio durante años. Una compra de maquinaria de $120,000 es una salida de inversión de $120,000 hoy pero solo ~$24,000 de amortización anual en el resultado. Los negocios intensivos en capital muestran por tanto las mayores brechas beneficio-caja, y los analistas que los valoran con múltiplos de beneficios sin comprobar el flujo de caja están valorando la política de amortización, no el negocio.'
        ],
        bullets: [
          'Beneficio al alza, caja a la baja → el fondo de maniobra absorbió el beneficio; comprobar cuentas a cobrar y existencias.',
          'Rentable pero siempre ampliando financiación → el crecimiento consume caja por adelantado.',
          'Intensivo en capex: la caja sale ahora, el beneficio lo reconoce durante años: esperar brechas persistentes.'
        ]
      },
      {
        heading: 'Flujo de caja libre: la cifra en la que confían los inversores',
        paragraphs: [
          'Flujo de caja libre (FCF) = flujo de caja de explotación − capex. Responde a la única pregunta que en última instancia importa a un propietario de negocio: tras dirigir el negocio y mantener sus activos, ¿cuánta caja queda para prestamistas, accionistas y crecimiento? Nuestro ejemplo: flujo de caja de explotación $170,000 − capex $120,000 = FCF $50,000.',
          'El FCF es difícil de manipular precisamente porque está al final de la cadena de caja: no se puede llegar al efectivo por devengo. Por eso los modelos de valoración descuentan flujos de caja libres, no beneficios. Las salvedades: el calendario del capex es irregular (un año tranquilo de capex maquilla el FCF), y la división entre capex «de mantenimiento» y «de crecimiento» es discrecional; pero como medida de la realidad de caja, nada en los estados lo supera.'
        ],
        callout: {
          type: 'interview',
          text: 'Clásico de entrevista: «El beneficio sube un 30% pero la caja baja: explicar». Responder con los tres sospechosos: el fondo de maniobra absorbió caja (cuentas a cobrar/existencias al alza, cuentas a pagar a la baja), fuerte capex (salida de inversión, no en el resultado), o aumentos no monetarios del beneficio (reversiones, ganancias a valor razonable). Después demostrarlo recorriendo del resultado al flujo de caja de explotación por el método indirecto.'
        }
      }
    ],
    mistakes: [
      'Equiparar el beneficio con la caja disponible para dividendos: los dividendos se pagan con caja, no solo con reservas.',
      'Ignorar los movimientos del fondo de maniobra al conciliar resultado con caja.',
      'Clasificar salidas de explotación como inversión para maquillar el flujo de caja de explotación.',
      'Olvidar que el capex golpea a la caja de inmediato pero al resultado gradualmente vía la amortización.',
      'Leer solo el movimiento neto de caja sin preguntar qué actividad lo impulsó.',
      'Tratar las cifras de flujo de caja de explotación «ajustado» con la misma seriedad que el estado de IAS 7.'
    ],
    interviewQA: [
      {
        q: 'El beneficio sube un 30% pero la caja baja. Explicar.',
        a: 'Recorrería del beneficio a la caja por el método indirecto y comprobaría tres sospechosos. Primero, el fondo de maniobra: si las cuentas a cobrar o las existencias crecieron más rápido que las ventas, el beneficio está atrapado ahí: la causa clásica. Segundo, el capex: fuertes salidas de inversión no tocan el resultado de inmediato. Tercero, aumentos no monetarios del beneficio como reversiones de provisiones o ganancias a valor razonable que nunca fueron caja. En la mayoría de casos reales es el fondo de maniobra: comprobaría el DSO, los días de existencias y si se pagaron cuentas a pagar, y después el cobro en efectivo tras el cierre para ver si el beneficio era real.'
      },
      {
        q: '¿Qué es el flujo de caja libre y por qué importa?',
        a: 'El flujo de caja libre es el flujo de caja de explotación menos el capex: la caja que queda tras dirigir el negocio y mantener su base de activos. Importa porque es la caja genuinamente disponible para prestamistas, accionistas y crecimiento; es difícil de manipular pues está al final de la cadena de caja; y los modelos de valoración descuentan flujos de caja libres en lugar de beneficios. La principal salvedad es la irregularidad del capex: un año tranquilo de capex maquilla el FCF, así que miro medias multianuales y cuestiono la división entre capex de mantenimiento y de crecimiento.'
      }
    ],
    quiz: [
      {
        question: 'IAS 7 clasifica los flujos de efectivo en:',
        options: [
          'Actividades de explotación, inversión y financiación',
          'Ingresos, gastos y beneficio',
          'Flujos corrientes y no corrientes',
          'Flujos monetarios y no monetarios'
        ],
        answer: 0,
        explanation: 'Los tres cajones de IAS 7 separan la caja de dirigir el negocio (explotación), comprar/vender activos a largo plazo (inversión) y tratar con los aportantes de capital (financiación).',
        difficulty: 'Foundation',
        topic: 'IAS 7 Structure',
        skill: 'Cash Flow'
      },
      {
        question: 'Resultado $200,000; amortización $80,000; cuentas a cobrar al alza $150,000; cuentas a pagar al alza $40,000. El flujo de caja de explotación (indirecto) es:',
        options: [
          '$280,000',
          '$390,000',
          '$30,000',
          '$170,000'
        ],
        answer: 3,
        explanation: '$200,000 + $80,000 (reincorporar no monetario) − $150,000 (las cuentas a cobrar absorben caja) + $40,000 (las cuentas a pagar preservan caja) = $170,000.',
        difficulty: 'Intermediate',
        topic: 'Indirect Method',
        skill: 'Cash Flow'
      },
      {
        question: 'En el método indirecto, un aumento de cuentas a cobrar comerciales es:',
        options: [
          'Sumado al resultado: las cuentas a cobrar son un activo',
          'Ignorado: es no monetario',
          'Restado del resultado: la caja está inmovilizada en ventas no cobradas',
          'Sumado a los flujos de inversión'
        ],
        answer: 2,
        explanation: 'Unas cuentas a cobrar mayores significan ventas registradas sin llegada de efectivo: la caja fue absorbida, por lo que el aumento se deduce del resultado para llegar a la caja.',
        difficulty: 'Intermediate',
        topic: 'Indirect Method',
        skill: 'Cash Flow'
      },
      {
        question: 'Una empresa compra una máquina por $120,000 al contado. Los efectos inmediatos son:',
        options: [
          'Un gasto de $120,000 en la cuenta de resultados',
          'Salida de efectivo de inversión $120,000; sin efecto inmediato en la cuenta de resultados',
          'Salida de efectivo de explotación $120,000',
          'Sin efecto en ningún sitio hasta que empiece la amortización'
        ],
        answer: 1,
        explanation: 'El capex es una salida de inversión hoy; el resultado reconoce el coste gradualmente vía la amortización. Esta brecha temporal es por la que divergen beneficio y caja en negocios intensivos en capital.',
        difficulty: 'Intermediate',
        topic: 'Capex',
        skill: 'Cash Flow'
      },
      {
        question: 'La amortización se reincorpora al resultado en el método indirecto porque:',
        options: [
          'Redujo el resultado pero no implicó salida de efectivo',
          'Es una actividad de inversión',
          'Aumenta la factura fiscal',
          'Representa caja ahorrada para reposiciones'
        ],
        answer: 0,
        explanation: 'La amortización es una asignación no monetaria del capex pasado. Reincorporarla revierte su efecto en el resultado para acercarse a la caja: no crea caja.',
        difficulty: 'Foundation',
        topic: 'Indirect Method',
        skill: 'Cash Flow'
      },
      {
        question: 'Según IAS 7, los intereses pagados pueden clasificarse como:',
        options: [
          'Solo explotación, sin elección',
          'Explotación o financiación: la entidad elige y lo aplica con uniformidad',
          'Solo inversión',
          'Deben dividirse 50/50'
        ],
        answer: 1,
        explanation: 'IAS 7 permite los intereses pagados en explotación o financiación (y los intereses/dividendos cobrados en explotación o inversión); la elección debe ser uniforme ejercicio a ejercicio: por eso se comprueba la nota de políticas antes de comparar empresas.',
        difficulty: 'Intermediate',
        topic: 'Classification',
        skill: 'Cash Flow'
      },
      {
        question: 'El resultado es $500,000 pero el flujo de caja de explotación es −$50,000. La explicación más probable es:',
        options: [
          'La empresa cometió fraude',
          'La amortización fue demasiado alta',
          'El fondo de maniobra absorbió más caja de la que generó el beneficio: investigar cuentas a cobrar y existencias',
          'Los tipos impositivos aumentaron'
        ],
        answer: 2,
        explanation: 'Un giro negativo de $550,000 del resultado a la caja grita fondo de maniobra: las cuentas a cobrar y/o las existencias se dispararon, o se pagaron cuentas a pagar. Verificar con el DSO, los días de existencias y los cobros tras el cierre.',
        difficulty: 'Advanced',
        topic: 'Profit vs Cash',
        skill: 'Financial Analysis'
      },
      {
        question: 'El flujo de caja de explotación es $170,000 y el capex $120,000. El flujo de caja libre es:',
        options: [
          '$50,000',
          '$290,000',
          '$170,000',
          '−$50,000'
        ],
        answer: 0,
        explanation: 'FCF = flujo de caja de explotación − capex = $170,000 − $120,000 = $50,000: la caja que queda tras dirigir el negocio y mantener sus activos.',
        difficulty: 'Intermediate',
        topic: 'Free Cash Flow',
        skill: 'Financial Analysis'
      },
      {
        question: 'Los dividendos pagados figuran en el estado de flujos de efectivo en:',
        options: [
          'Solo actividades de explotación',
          'Actividades de inversión',
          'No figuran: los dividendos son no monetarios',
          'Actividades de financiación'
        ],
        answer: 3,
        explanation: 'Los dividendos son retornos a los aportantes de capital: salidas de financiación. (IAS 7 permite los dividendos pagados en explotación o financiación; la financiación es la presentación estándar.)',
        difficulty: 'Foundation',
        topic: 'Classification',
        skill: 'Cash Flow'
      }
    ]
  },
  {
    id: 'm34',
    level: 8,
    levelTitle: 'Financial Analysis',
    title: 'Fondo de maniobra',
    standard: 'Analysis',
    tagline: '¿Cuántos días lleva la caja haciendo el trabajo de otro?',
    description: 'El fondo de maniobra es el efectivo inmovilizado en el ciclo comercial diario. Este módulo lo hace medible: DSO, DIO y DPO, y el ciclo de conversión de caja (CCC = DSO + DIO − DPO) que los combina. Cada indicador se calcula con cifras reales, se aprenden las palancas que acortan el ciclo y se entiende por qué el crecimiento tan a menudo devora la caja.',
    minutes: 20,
    skills: [
      'Financial Analysis'
    ],
    visuals: [
      'ccc'
    ],
    sections: [
      {
        heading: 'Qué es realmente el fondo de maniobra',
        paragraphs: [
          'Fondo de maniobra operativo = cuentas a cobrar + existencias − cuentas a pagar. Es la inversión que exige el ciclo comercial: el efectivo sale hacia los proveedores y queda inmovilizado en existencias y cuentas a cobrar antes de que los clientes lo devuelvan. A diferencia del fondo de maniobra de manual (activo corriente menos pasivo corriente), esta versión excluye el propio efectivo y las partidas financieras, aislando la inmovilización operativa.',
          'La idea clave: el fondo de maniobra no es gratis. Cada dólar en cuentas a cobrar y existencias es un dólar financiado por alguien: patrimonio, deuda o proveedores. Una empresa con $450,000 de fondo de maniobra operativo tiene $450,000 de financiación aparcados permanentemente en su operativa diaria. Bien gestionado, las necesidades de financiación se reducen; mal gestionado, el descubierto crece mientras el beneficio parece sano.'
        ],
        callout: {
          type: 'key',
          text: 'Fondo de maniobra operativo = Cuentas a cobrar + Existencias − Cuentas a pagar. Es el efectivo que el ciclo comercial mantiene como rehén.'
        }
      },
      {
        heading: 'DSO, DIO, DPO: los tres mandos',
        paragraphs: [
          'Tres ratios convierten los saldos en días, haciéndolos comparables entre empresas y periodos. DSO (días de ventas pendientes de cobro) = cuentas a cobrar ÷ ingresos ordinarios × 365: cuánto tardan los clientes en pagar. DIO (días de existencias en almacén) = existencias ÷ coste de ventas × 365: cuánto tiempo permanece el stock antes de venderse. DPO (días de pago a proveedores) = cuentas a pagar ÷ coste de ventas × 365: cuánto se tarda en pagar a los proveedores.',
          'Atención a los denominadores: las cuentas a cobrar se relacionan con las ventas (ingresos ordinarios), mientras que las existencias y las cuentas a pagar se relacionan con las compras (coste de ventas). Mezclarlos —un DSO sobre el coste de ventas, por ejemplo— es el error de cálculo más común. Y usar saldos medios del periodo siempre que sea posible; las instantáneas de cierre pueden favorecer o castigar a los negocios estacionales.'
        ],
        table: {
          headers: [
            'Métrica',
            'Fórmula',
            'Pregunta'
          ],
          rows: [
            [
              'DSO',
              'Cuentas a cobrar / Ingresos ordinarios x 365',
              '¿Con qué rapidez pagan los clientes?'
            ],
            [
              'DIO',
              'Existencias / Coste de ventas x 365',
              '¿Con qué rapidez rota el stock?'
            ],
            [
              'DPO',
              'Cuentas a pagar / Coste de ventas x 365',
              '¿Con qué lentitud pagamos a los proveedores?'
            ]
          ]
        }
      },
      {
        heading: 'El ciclo de conversión de caja',
        paragraphs: [
          'El ciclo de conversión de caja combina los tres mandos en un solo número: CCC = DSO + DIO − DPO. Leerlo como una línea de tiempo: se paga a los proveedores a los DPO días, pero el efectivo ya estaba trabajando: inmovilizado en existencias durante los días del DIO y en cuentas a cobrar durante los días del DSO. El CCC es el número de días que la caja financia el beneficio de otro: primero el de los proveedores (mientras el stock espera), luego el de los clientes (mientras demoran el pago), neto de la financiación que dan los proveedores.',
          'Nuestra empresa de ejemplo: cuentas a cobrar $350,000 sobre ingresos ordinarios de $2,555,000 → DSO = 50 días. Existencias $300,000 sobre coste de ventas de $1,825,000 → DIO = 60 días. Cuentas a pagar $200,000 sobre coste de ventas de $1,825,000 → DPO = 40 días. CCC = 50 + 60 − 40 = 70 días. Cada día de ventas necesita por tanto 70 días de financiación: con $7,000 de coste de ventas diario, son unos $490,000 de caja permanentemente en el ciclo.'
        ],
        callout: {
          type: 'key',
          text: 'CCC = DSO + DIO − DPO. Más bajo suele ser mejor, pero solo si se logra sin dejar sin existencias a las ventas ni estrangular a los proveedores.'
        }
      },
      {
        heading: 'Ejercicio de cálculo',
        paragraphs: [
          'Trabajar los números uno mismo: los analistas lo hacen de memoria en las reuniones. Paso 1: DSO = $350,000 ÷ $2,555,000 × 365 = 50 días. Los clientes tardan cincuenta días en pagar. Paso 2: DIO = $300,000 ÷ $1,825,000 × 365 = 60 días. El stock espera dos meses. Paso 3: DPO = $200,000 ÷ $1,825,000 × 365 = 40 días. A los proveedores se les paga a cuarenta días. Paso 4: CCC = 50 + 60 − 40 = 70 días.',
          'Ahora tensionarlo: si el DSO se desliza a 65 días (clientes pagando más despacio), el CCC sube a 85 días y la necesidad de financiación crece en 15 días × $5,000 de coste de ventas diario = $75,000 de caja extra absorbida. Así es como un «buen mes de ventas» con cobro laxo se come silenciosamente el descubierto.'
        ],
        table: {
          headers: [
            'Paso',
            'Cálculo',
            'Resultado'
          ],
          rows: [
            [
              'DSO',
              '$350,000 / $2,555,000 x 365',
              '50 días'
            ],
            [
              'DIO',
              '$300,000 / $1,825,000 x 365',
              '60 días'
            ],
            [
              'DPO',
              '$200,000 / $1,825,000 x 365',
              '40 días'
            ],
            [
              'CCC',
              '50 + 60 − 40',
              '70 días'
            ]
          ]
        }
      },
      {
        heading: 'Palancas para mejorar el CCC',
        paragraphs: [
          'Cada mando tiene palancas, y cada palanca tiene un coste. Acortar el DSO: facturar de inmediato, ofrecer descuentos por pronto pago, endurecer las condiciones de crédito, reclamar vencidos sistemáticamente. El coste: los descuentos erosionan el margen y las condiciones duras pueden perder ventas. Acortar el DIO: mejorar la previsión, eliminar líneas de lenta rotación, negociar stock en consignación. El coste: las roturas de stock pierden ventas y los pedidos urgentes cuestan más. Alargar el DPO: negociar plazos más largos, usar financiación de la cadena de suministro. El coste: los proveedores pueden subir precios o relegarte: exprimir a los proveedores es pedir prestado a la relación.',
          'El enfoque profesional: comparar cada mando con los competidores, atacar primero el peor y medir la caja liberada. Una mejora de 10 días en el DSO sobre $2,555,000 de ingresos libera unos $70,000 de caja, a menudo más barato que cualquier préstamo.'
        ],
        bullets: [
          'Palancas del DSO: facturación inmediata, descuentos por pronto pago, control del crédito; vigilar el impacto en margen y ventas.',
          'Palancas del DIO: previsión, racionalización del surtido, consignación; vigilar las roturas de stock.',
          'Palancas del DPO: plazos negociados, financiación de la cadena de suministro; vigilar la relación con proveedores.'
        ]
      },
      {
        heading: 'Fondo de maniobra y crecimiento: la trampa de caja',
        paragraphs: [
          'Esta es la paradoja que mata a las empresas en crecimiento: el crecimiento consume caja. Cada dólar extra de ventas necesita su parte de cuentas a cobrar y existencias antes de que vuelva el efectivo: con un CCC de 70 días, crecer $1,000,000 en ingresos inmoviliza permanentemente unos $192,000 más de caja ($1,000,000 × 70/365). Una empresa que crece un 30% anual puede ser rentable cada mes y aun así quedarse sin caja, porque la inversión en fondo de maniobra supera al beneficio retenido.',
          'Por eso los prestamistas piden previsiones de fondo de maniobra junto a las de beneficio, y por eso «las ventas van como un tiro pero necesitamos más descubierto» es la frase más normal de las finanzas corporativas. El crecimiento hay que financiarlo: con retención de beneficios, con eficiencia del fondo de maniobra o con financiación externa. El CCC dice cuánto.'
        ],
        callout: {
          type: 'warning',
          text: 'El crecimiento devora caja: con un CCC de 70 días, $1,000,000 de ventas anuales extra inmovilizan ~$192,000 de fondo de maniobra permanente. El crecimiento rentable también puede ser mortal sin financiación.'
        }
      }
    ],
    mistakes: [
      'Usar saldos de cierre en lugar de medios para el DSO, el DIO y el DPO: los picos estacionales distorsionan la imagen.',
      'Mezclar denominadores: el DSO usa los ingresos ordinarios; el DIO y el DPO usan el coste de ventas.',
      'Comparar el CCC entre sectores sin contexto: la distribución y la construcción viven en mundos distintos.',
      'Estirar las cuentas a pagar hasta que los proveedores suben precios, te relegan o quiebran.',
      'Recortar existencias hasta que las roturas de stock pierden más margen que la caja liberada.',
      'Celebrar un CCC a la baja logrado demorando pagos a proveedores hasta territorio de tensión.'
    ],
    interviewQA: [
      {
        q: '¿Qué es el ciclo de conversión de caja y qué significan 70 días?',
        a: 'CCC = DSO + DIO − DPO: los días entre pagar los insumos y cobrar en efectivo las ventas. Setenta días significa que la empresa financia 70 días de su ciclo comercial por sí misma: la caja está inmovilizada en existencias y cuentas a cobrar, parcialmente compensada por el crédito de proveedores. Lo desglosaría en sus mandos (por ejemplo DSO 50, DIO 60, DPO 40), compararía cada uno con los competidores y cuantificaría la financiación: con $5,000 de coste de ventas diario, 70 días inmovilizan unos $350,000 de fondo de maniobra permanente. Después preguntaría qué mando puede mejorarse sin dañar las ventas ni a los proveedores.'
      },
      {
        q: 'Las ventas van como un tiro pero la empresa necesita más descubierto. ¿Por qué?',
        a: 'El crecimiento consume fondo de maniobra: cada dólar extra de ventas necesita inversión en cuentas a cobrar y existencias antes de que vuelva la caja. Con un CCC de 70 días, $1 millón de ventas anuales adicionales inmoviliza permanentemente unos $192,000 de caja. Si esa inversión supera al beneficio retenido, el descubierto crece aunque la cuenta de resultados luzca bien. Comprobaría si el DSO o el DIO se deterioraron (empeorándolo más allá del puro crecimiento), prevería la necesidad de financiación del fondo de maniobra junto al beneficio y valoraría si cubrirla con ganancias de eficiencia o con financiación externa.'
      }
    ],
    quiz: [
      {
        question: 'El fondo de maniobra operativo se define como:',
        options: [
          'Activo corriente − Pasivo corriente incluyendo el efectivo',
          'Cuentas a cobrar + Existencias − Cuentas a pagar',
          'Efectivo + Cuentas a cobrar − Cuentas a pagar',
          'Activo total − Pasivo total'
        ],
        answer: 1,
        explanation: 'El fondo de maniobra operativo aísla el ciclo comercial: lo que deben los clientes más el stock disponible, menos lo que se debe a los proveedores. El efectivo y las partidas financieras quedan excluidos.',
        difficulty: 'Foundation',
        topic: 'Working Capital',
        skill: 'Financial Analysis'
      },
      {
        question: 'Las cuentas a cobrar son $350,000 y los ingresos anuales $2,555,000. El DSO es:',
        options: [
          '36 días',
          '73 días',
          '137 días',
          '50 días'
        ],
        answer: 3,
        explanation: 'DSO = $350,000 / $2,555,000 × 365 = 50 días. Los clientes tardan de media cincuenta días en pagar.',
        difficulty: 'Intermediate',
        topic: 'DSO',
        skill: 'Financial Analysis'
      },
      {
        question: 'Las existencias son $300,000 y el coste de ventas anual $1,825,000. El DIO es:',
        options: [
          '60 días',
          '50 días',
          '40 días',
          '70 días'
        ],
        answer: 0,
        explanation: 'DIO = $300,000 / $1,825,000 × 365 = 60 días. El stock espera dos meses antes de venderse.',
        difficulty: 'Intermediate',
        topic: 'DIO',
        skill: 'Financial Analysis'
      },
      {
        question: 'Las cuentas a pagar son $200,000 y el coste de ventas anual $1,825,000. El DPO es:',
        options: [
          '50 días',
          '60 días',
          '40 días',
          '30 días'
        ],
        answer: 2,
        explanation: 'DPO = $200,000 / $1,825,000 × 365 = 40 días. A los proveedores se les paga de media a cuarenta días.',
        difficulty: 'Intermediate',
        topic: 'DPO',
        skill: 'Financial Analysis'
      },
      {
        question: 'Con DSO 50, DIO 60 y DPO 40, el ciclo de conversión de caja es:',
        options: [
          '70 días',
          '150 días',
          '30 días',
          '110 días'
        ],
        answer: 0,
        explanation: 'CCC = DSO + DIO − DPO = 50 + 60 − 40 = 70 días.',
        difficulty: 'Intermediate',
        topic: 'CCC',
        skill: 'Financial Analysis'
      },
      {
        question: 'Un ciclo de conversión de caja más bajo significa generalmente:',
        options: [
          'Mayores márgenes de beneficio',
          'Menores ingresos',
          'Más deuda a largo plazo',
          'Menos caja inmovilizada en el ciclo comercial, pero comprobar que no se logró de forma abusiva'
        ],
        answer: 3,
        explanation: 'Un CCC más corto libera caja. Pero si se logró estrangulando a proveedores o con roturas de stock, destruye valor: comprobar siempre cómo se logró.',
        difficulty: 'Advanced',
        topic: 'CCC',
        skill: 'Financial Analysis'
      },
      {
        question: '¿Qué acción acorta el ciclo de conversión de caja?',
        options: [
          'Mantener más existencias',
          'Pagar antes a los proveedores',
          'Cobrar más rápido a los clientes (reducir el DSO)',
          'Aumentar las ventas a crédito'
        ],
        answer: 2,
        explanation: 'CCC = DSO + DIO − DPO: reducir el DSO lo acorta. Más existencias alargan el DIO; pagar antes a proveedores acorta el DPO (alargando el CCC); más ventas a crédito elevan el DSO.',
        difficulty: 'Intermediate',
        topic: 'CCC Levers',
        skill: 'Financial Analysis'
      },
      {
        question: 'Alargar el DPO de 40 a 55 días, con un coste de ventas anual de $1,825,000, libera aproximadamente:',
        options: [
          '$27,375 de caja',
          '$75,000 de caja',
          '$1,825,000 de caja',
          'Nada de caja: el DPO no afecta a la caja'
        ],
        answer: 1,
        explanation: '15 días extra × ($1,825,000 / 365 = $5,000 al día) = $75,000 de financiación de proveedores que sustituye a la caja propia.',
        difficulty: 'Advanced',
        topic: 'CCC Levers',
        skill: 'Financial Analysis'
      },
      {
        question: 'Un minorista cobra en efectivo a los clientes en 5 días, vende las existencias en 20 días y paga a los proveedores en 45 días. Su CCC es:',
        options: [
          '−20 días: lo financian los proveedores',
          '70 días',
          '60 días',
          '30 días'
        ],
        answer: 0,
        explanation: 'CCC = 5 + 20 − 45 = −20 días: negativo. Clientes y existencias rotan más rápido que los pagos a proveedores: los proveedores financian el ciclo, el modelo clásico del supermercado.',
        difficulty: 'Foundation',
        topic: 'CCC',
        skill: 'Financial Analysis'
      }
    ]
  },
  {
    id: 'm35',
    level: 8,
    levelTitle: 'Financial Analysis',
    title: 'Ratios financieros',
    standard: 'Analysis',
    tagline: 'Los ratios convierten cifras brutas en juicios.',
    description: 'Los ratios son la taquigrafía del analista: rentabilidad, liquidez, apalancamiento y eficiencia destilados en cifras comparables. Este módulo recorre cada ratio clave con fórmulas y cifras reales, muestra cómo el desglose DuPont explica el ROE y enseña el uso honesto de los ratios: tendencias, comparables y limitaciones.',
    minutes: 22,
    skills: [
      'Financial Analysis'
    ],
    sections: [
      {
        heading: 'Ratios de rentabilidad: cuánto se queda',
        paragraphs: [
          'Los ratios de rentabilidad miden lo que el negocio conserva de cada dólar de actividad. El margen bruto (resultado bruto ÷ ingresos ordinarios) muestra el poder de fijación de precios sobre los costes directos: $800,000 ÷ $2,000,000 = 40%. El margen EBITDA (EBITDA ÷ ingresos ordinarios) muestra el apalancamiento operativo antes de la intensidad de capital: $400,000 ÷ $2,000,000 = 20%. El margen neto (resultado neto ÷ ingresos ordinarios) muestra lo que llega a los accionistas: $200,000 ÷ $2,000,000 = 10%.',
          'Los ratios de rendimiento escalan el beneficio contra los recursos empleados. ROA (rendimiento sobre activos) = resultado neto ÷ activo total = $200,000 ÷ $2,500,000 = 8%: cuánto trabaja la base de activos. ROE (rendimiento sobre patrimonio) = resultado neto ÷ patrimonio neto = $200,000 ÷ $1,000,000 = 20%: el rendimiento de la inversión de los accionistas. El ROE supera al ROA siempre que el negocio usa deuda: el apalancamiento magnifica los rendimientos en ambas direcciones.'
        ],
        table: {
          headers: [
            'Ratio',
            'Fórmula',
            'Nuestra empresa'
          ],
          rows: [
            [
              'Margen bruto',
              'Resultado bruto / Ingresos ordinarios',
              '$800,000 / $2,000,000 = 40%'
            ],
            [
              'Margen EBITDA',
              'EBITDA / Ingresos ordinarios',
              '$400,000 / $2,000,000 = 20%'
            ],
            [
              'Margen neto',
              'Resultado neto / Ingresos ordinarios',
              '$200,000 / $2,000,000 = 10%'
            ],
            [
              'ROA',
              'Resultado neto / Activo total',
              '$200,000 / $2,500,000 = 8%'
            ],
            [
              'ROE',
              'Resultado neto / Patrimonio neto',
              '$200,000 / $1,000,000 = 20%'
            ]
          ]
        },
        callout: {
          type: 'key',
          text: 'Los márgenes escalan el beneficio contra las ventas; los rendimientos, contra los recursos. Vigilar ambos: un ROE alto construido sobre márgenes finos y mucho apalancamiento es frágil.'
        }
      },
      {
        heading: 'Ratios de liquidez: la supervivencia primero',
        paragraphs: [
          'Los ratios de liquidez se cubrieron en profundidad en m32; aquí se unen a la caja de herramientas completa. Ratio de liquidez = activo corriente ÷ pasivo corriente = 1.6x. Prueba ácida = (activo corriente − existencias) ÷ pasivo corriente = 1.0x. El hábito del analista: calcular ambos y preguntar qué hay dentro del activo corriente: los ratios solo son tan honestos como la antigüedad de las cuentas a cobrar y la política de deterioros de existencias que hay detrás.',
          'Los ratios de liquidez son puntuales y miran atrás. Complementarlos con cobertura prospectiva: ¿cuántos meses de salidas de caja de explotación cubre el saldo de efectivo? Y con el ciclo de conversión de caja de m34, que dice si el fondo de maniobra consumirá o liberará caja el próximo trimestre.'
        ],
        bullets: [
          'Ratio de liquidez 1.6x; prueba ácida 1.0x: después interrogar los componentes.',
          'Puntuales: combinar con la cobertura de consumo de caja y el CCC para la visión prospectiva.'
        ]
      },
      {
        heading: 'Ratios de apalancamiento: ¿cuánta deuda es demasiada?',
        paragraphs: [
          'Deuda/patrimonio = deuda total ÷ patrimonio neto = $600,000 ÷ $900,000 = 0.67x: apalancamiento de balance moderado. Pero el ratio que más miran los prestamistas es deuda neta ÷ EBITDA = $450,000 ÷ $400,000 = 1.1x: más o menos 1.1 años de resultado operativo para amortizar la deuda neta. Por debajo de 2x es holgado para la mayoría de sectores; por encima de 4x levanta cejas; por encima de 6x es territorio de tensión (en igualdad de condiciones).',
          'Los ratios de apalancamiento deben leerse con la cobertura de intereses (EBIT ÷ intereses: ¿puede el resultado atender la factura de intereses?) y el perfil de vencimientos de la deuda. Un deuda neta/EBITDA de 1.1x con toda la deuda venciendo el próximo año es más arriesgado que un 2.5x con vencimientos repartidos en una década. Y recordar: los ratios que usan el patrimonio contable pueden favorecer a empresas con grandes reservas de revalorización o infravalorar a las de intangibles pesados.'
        ],
        table: {
          headers: [
            'Ratio',
            'Fórmula',
            'Nuestra empresa',
            'Regla práctica'
          ],
          rows: [
            [
              'Deuda / Patrimonio neto',
              'Deuda total / Patrimonio neto',
              '$600,000 / $900,000 = 0.67x',
              '< 1.0x moderado (varía por sector)'
            ],
            [
              'Deuda neta / EBITDA',
              'Deuda neta / EBITDA',
              '$450,000 / $400,000 = 1.1x',
              '< 2x holgado; > 4x tenso'
            ]
          ]
        }
      },
      {
        heading: 'Ratios de eficiencia: exprimir los activos',
        paragraphs: [
          'Los ratios de eficiencia preguntan cuánto trabajan los activos. Rotación de activos = ingresos ordinarios ÷ activo total = $2,000,000 ÷ $2,500,000 = 0.8x: cada dólar de activos genera $0.80 de ventas anuales. Rotación de existencias = coste de ventas ÷ existencias = $1,200,000 ÷ $300,000 = 4x: el stock rota cuatro veces al año (unos 90 días; coherente con un DIO de 60 días solo si... bueno, comprobar los promedios: los ratios puntuales son aproximaciones).',
          'La eficiencia depende de la estrategia: un supermercado rota activos rápido con márgenes finos; una marca de lujo rota despacio con márgenes amplios. Comparar la rotación de activos entre modelos de negocio no tiene sentido: comparar con la propia historia de la empresa y con competidores de verdad, y siempre junto a los márgenes, porque rotación × margen es lo que en última instancia mueve el ROA.'
        ],
        bullets: [
          'Rotación de activos 0.8x: ventas generadas por dólar de activos.',
          'Rotación de existencias 4x: el stock rota cuatro veces al año.',
          'Rotación × margen = ROA: eficiencia y rentabilidad se multiplican.'
        ]
      },
      {
        heading: 'El desglose DuPont: explicar el ROE',
        paragraphs: [
          'Un ROE del 20% es un hecho; el análisis DuPont lo explica. ROE = margen neto × rotación de activos × apalancamiento financiero (activo ÷ patrimonio). Con margen neto 10%, rotación de activos 1.2x y apalancamiento 2.0x: 10% × 1.2 × 2.0 = 24% de ROE. (Las propias cifras de nuestra empresa dan 10% × 0.8 × 2.5 = 20%: la misma lógica.) Tres palancas, tres preguntas estratégicas: ¿podemos ganar más por venta (margen), vender más por activo (rotación) o —con cuidado— usar más apalancamiento?',
          'El poder de DuPont es diagnóstico. Dos empresas con un ROE del 20% pueden ser opuestas: una lo gana con márgenes del 15% y sin deuda (calidad), la otra con márgenes del 4% y apalancamiento 5x (frágil). Cuando el ROE sube, DuPont dice si aplaudir (mejoraron el margen o la rotación) o preocuparse (lo hizo el apalancamiento).'
        ],
        callout: {
          type: 'example',
          text: 'ROE 24% = 10% de margen neto × 1.2 de rotación de activos × 2.0 de apalancamiento. Si el próximo año el ROE sube al 28% solo porque el apalancamiento pasó a 2.4x, el negocio no mejoró: solo tomó prestado más riesgo.'
        }
      },
      {
        heading: 'Usar los ratios con honestidad',
        paragraphs: [
          'Los ratios son potentes y fáciles de abusar. Cinco reglas los mantienen honestos. Uno: comparar lo comparable: mismo sector, mismo modelo de negocio, mismas políticas contables (una empresa que capitaliza el desarrollo mostrará márgenes distintos que una que lo lleva a gasto). Dos: las tendencias ganan a las instantáneas: un ratio moviéndose en la dirección equivocada tres años importa más que su nivel. Tres: comprobar las definiciones: «deuda neta» y «EBITDA» varían entre empresas; leer siempre las notas.',
          'Cuatro: recordar lo que los ratios ocultan: los promedios esconden la dispersión y las cifras de cierre esconden la estacionalidad. Cinco: nunca dejar que un ratio decida solo. Un deuda neta/EBITDA de 1.1x es holgado hasta que se descubre que la deuda vence el próximo trimestre; un margen bruto del 40% es estupendo hasta que se descubre que exigió channel stuffing. Los ratios enmarcan las preguntas; las notas y el estado de flujos de efectivo las responden.'
        ],
        bullets: [
          'Comparar lo comparable: competidores, políticas, modelos de negocio.',
          'Tendencias sobre instantáneas; comprobar cada definición en las notas.',
          'Los ratios hacen las preguntas; las notas y los flujos de caja dan las respuestas.'
        ]
      }
    ],
    mistakes: [
      'Comparar ratios entre distintos sectores o modelos de negocio.',
      'Usar el patrimonio de cierre para el ROE justo después de un gran dividendo que lo distorsionó: considerar promedios.',
      'Suponer que todos definen igual el EBITDA y la deuda neta: las definiciones varían.',
      'Leer el ratio de un solo año sin su tendencia.',
      'Olvidar los efectos de conversión de moneda al comparar ratios de multinacionales.',
      'Dejar que un ratio decida solo: el apalancamiento parece bien hasta que se revisa el perfil de vencimientos.'
    ],
    interviewQA: [
      {
        q: '¿Cómo se analizaría la rentabilidad de una empresa?',
        a: 'Trabajo de arriba abajo por los márgenes: margen bruto para el poder de fijación de precios y la eficiencia productiva, margen EBITDA para el apalancamiento operativo, margen neto para lo que llega a los accionistas; después ROA y ROE para escalar el beneficio contra los recursos. Miro tendencias de tres a cinco años y comparables sectoriales, porque un solo año es trivia. Después uso DuPont para explicar el ROE: ¿lo mueven el margen, la rotación de activos o el apalancamiento? Un ROE del 20% con márgenes del 15% y sin deuda es calidad; el mismo ROE con márgenes del 4% y apalancamiento 5x es frágil. Por último lo contrasto con el flujo de caja: márgenes sin conversión en caja son sospechosos.'
      },
      {
        q: '¿Qué dice el análisis DuPont más allá del ROE solo?',
        a: 'El ROE es un número; DuPont lo divide en margen neto × rotación de activos × apalancamiento, revelando cómo se ganó el rendimiento. Distingue calidad de riesgo: un ROE movido por el margen refleja poder de fijación de precios o eficiencia; movido por la rotación, productividad de los activos; movido por el apalancamiento, riesgo financiero. Cuando el ROE cambia, DuPont identifica el impulsor: una subida del ROE por mayor apalancamiento merece preocupación, no aplauso. También enmarca la estrategia: las tres palancas son ganar más por venta, vender más por activo o endeudarse más, con perfiles de riesgo muy distintos.'
      }
    ],
    quiz: [
      {
        question: 'El resultado bruto es $800,000 sobre ingresos ordinarios de $2,000,000. El margen bruto es:',
        options: [
          '60%',
          '250%',
          '40%',
          '25%'
        ],
        answer: 2,
        explanation: '$800,000 / $2,000,000 = 40%.',
        difficulty: 'Foundation',
        topic: 'Profitability',
        skill: 'Financial Analysis'
      },
      {
        question: 'El EBITDA es $400,000 sobre ingresos ordinarios de $2,000,000. El margen EBITDA es:',
        options: [
          '40%',
          '20%',
          '10%',
          '50%'
        ],
        answer: 1,
        explanation: '$400,000 / $2,000,000 = 20%.',
        difficulty: 'Intermediate',
        topic: 'Profitability',
        skill: 'Financial Analysis'
      },
      {
        question: 'El resultado neto es $200,000, el activo total $2,500,000, el patrimonio neto $1,000,000. El ROA y el ROE son:',
        options: [
          'ROA 20%, ROE 8%',
          'ROA 10%, ROE 25%',
          'ROA 12.5%, ROE 5%',
          'ROA 8%, ROE 20%'
        ],
        answer: 3,
        explanation: 'ROA = $200,000 / $2,500,000 = 8%; ROE = $200,000 / $1,000,000 = 20%. El apalancamiento (activo/patrimonio = 2.5x) explica por qué el ROE supera al ROA.',
        difficulty: 'Intermediate',
        topic: 'Returns',
        skill: 'Financial Analysis'
      },
      {
        question: 'La deuda neta es $450,000 y el EBITDA $400,000. Un deuda neta/EBITDA de 1.1x significa:',
        options: [
          'La empresa es insolvente',
          'La deuda cuesta un 110% anual',
          'Alrededor de 1.1 años de EBITDA amortizarían la deuda neta: apalancamiento holgado',
          'El patrimonio es 1.1 veces la deuda'
        ],
        answer: 2,
        explanation: 'Deuda neta/EBITDA mide la capacidad de amortización en años de resultado operativo. En torno a 1.1x es holgado; la preocupación suele empezar por encima de 4x.',
        difficulty: 'Intermediate',
        topic: 'Leverage',
        skill: 'Financial Analysis'
      },
      {
        question: 'El coste de ventas es $1,200,000 y las existencias $300,000. La rotación de existencias es:',
        options: [
          '0.25x',
          '40x',
          '4%',
          '4x: el stock rota cuatro veces al año'
        ],
        answer: 3,
        explanation: '$1,200,000 / $300,000 = 4x. Una rotación mayor suele significar menos caja inmovilizada en stock, salvo que se logre con falta de existencias.',
        difficulty: 'Intermediate',
        topic: 'Efficiency',
        skill: 'Financial Analysis'
      },
      {
        question: 'DuPont: margen neto 10%, rotación de activos 1.2x, apalancamiento (activo/patrimonio) 2.0x. El ROE es:',
        options: [
          '13.2%',
          '24%',
          '32%',
          '12%'
        ],
        answer: 1,
        explanation: 'ROE = 10% × 1.2 × 2.0 = 24%.',
        difficulty: 'Advanced',
        topic: 'DuPont',
        skill: 'Financial Analysis'
      },
      {
        question: 'La prueba ácida difiere del ratio de liquidez porque:',
        options: [
          'Excluye las existencias: el activo corriente menos líquido',
          'Incluye activos no corrientes',
          'Excluye el efectivo',
          'Usa valores de mercado en lugar de valores contables'
        ],
        answer: 0,
        explanation: 'La prueba ácida elimina las existencias, comprobando si las obligaciones a corto están cubiertas sin vender stock.',
        difficulty: 'Intermediate',
        topic: 'Liquidity',
        skill: 'Financial Analysis'
      },
      {
        question: 'El ROE sube mientras el ROA está plano. El impulsor más probable es:',
        options: [
          'Mayores márgenes brutos',
          'Rotación de activos más rápida',
          'Mayor apalancamiento financiero (o recompras de acciones que reducen el patrimonio)',
          'Tipos impositivos más bajos'
        ],
        answer: 2,
        explanation: 'Con el ROA (beneficio/activo) plano, un ROE creciente (beneficio/patrimonio) significa que el patrimonio se redujo frente a los activos: más apalancamiento o recompras, no mejores operaciones.',
        difficulty: 'Advanced',
        topic: 'DuPont',
        skill: 'Financial Analysis'
      },
      {
        question: 'Una rotación de activos de 0.8x significa:',
        options: [
          'Los activos se convierten en caja en 0.8 días',
          'Cada $1 de activos genera $0.80 de ingresos anuales',
          'El 80% de los activos está obsoleto',
          'A la empresa le quedan 0.8 años de vida de los activos'
        ],
        answer: 1,
        explanation: 'Rotación de activos = ingresos ordinarios / activo total: una medida pura de eficiencia de las ventas generadas por dólar de base de activos.',
        difficulty: 'Foundation',
        topic: 'Efficiency',
        skill: 'Financial Analysis'
      }
    ]
  }
];
