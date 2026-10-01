// Level 4 — Liabilities and Complex Accounting (m15–m17)
export default [
  {
    id: 'm15', level: 4, levelTitle: 'Liabilities and Complex Accounting', title: 'NIIF 16 — Arrendamientos',
    standard: 'IFRS 16', tagline: 'El alquiler ya no es solo alquiler: la mayoría de los arrendamientos son ahora deuda más un activo en el balance.',
    description: 'La NIIF 16 puso fin a la era de los arrendamientos operativos fuera de balance. Los arrendatarios reconocen ahora un activo por derecho de uso y un pasivo por arrendamiento para casi todos los arrendamientos, lo que remodela el EBITDA, el apalancamiento y la presentación del flujo de caja. Este módulo trabaja un ejemplo completo de un arrendamiento de 3 años desde el reconocimiento inicial hasta el último pago.',
    minutes: 30, skills: ['Leases'],
    visuals: ['lease-timeline'],
    sections: [
      {
        heading: 'Por qué existe la NIIF 16',
        paragraphs: [
          'Con la antigua NIC 17, los arrendamientos se dividían en financieros (en el balance) y operativos (fuera del balance, solo revelados en las notas). Aerolíneas, minoristas y empresas de logística arrastraban enormes compromisos por arrendamientos operativos — flotas de aviones, cientos de tiendas — que nunca aparecían como deuda. Los analistas tenían que capitalizarlos manualmente para comparar empresas, y cada uno lo hacía de forma distinta.',
          'La NIIF 16, efectiva para ejercicios iniciados a partir del 1 de enero de 2019, eliminó esa distinción para los arrendatarios. La lógica es simple: si se controla un activo durante años y se deben pagos contractuales, se tiene tanto un activo como un pasivo, se llame como se llame el contrato. La contabilidad del arrendador apenas cambió — los arrendadores siguen clasificando los arrendamientos en operativos o financieros.',
          'Para los profesionales de las finanzas esto importa porque reescribió de la noche a la mañana las métricas más vigiladas: la deuda declarada se disparó, el EBITDA subió (desapareció el gasto por alquileres) y el flujo de caja operativo mejoró mientras el flujo de financiación caía. Entender esta reordenación es esencial para leer cualquier cuenta posterior a 2019.'
        ],
        bullets: [
          'NIC 17: los arrendamientos operativos estaban fuera de balance — una fuente importante de apalancamiento oculto.',
          'NIIF 16: los arrendatarios reconocen un activo por derecho de uso y un pasivo por arrendamiento para casi todos los arrendamientos.',
          'La contabilidad del arrendador apenas cambia (se mantiene la distinción entre arrendamiento operativo y financiero).',
          'Solo existen exenciones para arrendamientos a corto plazo y activos de bajo valor.'
        ],
        callout: { type: 'key', text: 'Modelo central de la NIIF 16: al inicio, el arrendatario reconoce un activo que representa el derecho a usar el activo subyacente y un pasivo que representa la obligación de realizar los pagos por arrendamiento — medidos al valor actual de esos pagos.' }
      },
      {
        heading: 'Identificar un arrendamiento',
        paragraphs: [
          'Antes de medir nada, hay que decidir si un contrato contiene un arrendamiento — y aquí es donde vive el juicio en el mundo real. Muchos contratos de servicios (logística, externalización de TI, espacios publicitarios) combinan el uso de un activo con servicios, y solo el componente de arrendamiento recibe el tratamiento de la NIIF 16.',
          'Un contrato es o contiene un arrendamiento si transmite el derecho a controlar el uso de un activo identificado durante un periodo de tiempo a cambio de una contraprestación. Control significa dos cosas juntas: el derecho a obtener sustancialmente todos los beneficios económicos del uso del activo, y el derecho a dirigir cómo y con qué propósito se usa el activo.'
        ],
        steps: [
          'Paso 1 — ¿Hay un activo identificado? Debe estar especificado explícita o implícitamente, y el proveedor no debe tener un derecho sustantivo de sustitución durante el periodo.',
          'Paso 2 — ¿Obtiene el cliente sustancialmente todos los beneficios económicos del activo (p. ej., uso exclusivo del camión, de la planta del edificio)?',
          'Paso 3 — ¿Puede el cliente dirigir cómo y con qué propósito se usa el activo (decidir rutas, horarios de operación, producción)? Si las tres respuestas son sí, hay un arrendamiento.'
        ],
        callout: { type: 'warning', text: 'Atención a los arrendamientos implícitos dentro de contratos de servicios. Un contrato logístico que dedica camiones específicos a tus rutas puede contener un arrendamiento aunque la palabra «arrendamiento» no aparezca nunca. Pasar por alto estos casos es uno de los errores más comunes de la NIIF 16.' }
      },
      {
        heading: 'Reconocimiento inicial: el gran asiento',
        paragraphs: [
          'En la fecha de inicio, el arrendatario mide el pasivo por arrendamiento al valor actual de los pagos por arrendamiento aún no pagados, descontados al tipo de interés implícito en el arrendamiento — o, si no puede determinarse fácilmente (el caso habitual), al tipo de interés incremental del endeudamiento del arrendatario. El activo por derecho de uso parte del mismo importe, más los costes directos iniciales, los pagos anticipados por arrendamiento y los costes estimados de desmantelamiento, menos los incentivos por arrendamiento recibidos.',
          'Los pagos por arrendamiento incluidos en la medición son: pagos fijos (incluidos los pagos fijos en sustancia), pagos variables que dependen de un índice o una tasa (medidos con el índice vigente al inicio), importes esperados por garantías de valor residual, el precio de ejercicio de una opción de compra si es razonablemente cierto que se ejercerá, y penalizaciones por terminación si el plazo del arrendamiento refleja su pago. Los pagos variables vinculados al uso o a las ventas (p. ej., el alquiler como porcentaje de la facturación de la tienda) se excluyen y se llevan a gastos a medida que se incurren.',
          'Ejemplo práctico: un arrendamiento de 3 años con pagos anuales de 50.000 pagaderos al final de cada año, tipo de descuento del 5 %. El factor de valor actual de una anualidad de 3 años al 5 % es 2,7232, así que el pasivo — y el activo por derecho de uso — es 50.000 × 2,7232 = 136.162.'
        ],
        journal: {
          transaction: 'Inicio del arrendamiento: arrendamiento de 3 años, 50.000 al año vencidos, tipo de descuento del 5 %. VA = 136.162.',
          lines: [
            { account: 'Activo por derecho de uso', dr: 136162, cr: null },
            { account: 'Pasivo por arrendamiento', dr: null, cr: 136162 }
          ],
          narration: 'Reconocimiento inicial del activo por derecho de uso y del pasivo por arrendamiento a valor actual'
        },
        impact: {
          pl: 'Sin impacto en la cuenta de resultados al inicio.',
          bs: 'Activos +136.162 (activo por derecho de uso, normalmente dentro del inmovilizado material o junto a él); pasivos +136.162 (repartidos entre pasivo por arrendamiento corriente y no corriente). Patrimonio neto sin cambios; las ratios de apalancamiento empeoran de inmediato.',
          cf: 'Sin impacto en el flujo de caja al inicio (actividad de inversión y financiación no monetaria, revelada por separado).'
        },
        callout: { type: 'example', text: 'Comprobación del VA: 50.000/1,05 + 50.000/1,05² + 50.000/1,05³ = 47.619 + 45.351 + 43.192 = 136.162. El pasivo es simplemente lo que valen hoy esos tres pagos futuros.' }
      },
      {
        heading: 'Medición posterior: un arrendamiento, dos gastos',
        paragraphs: [
          'Tras el inicio, el pasivo se mide como cualquier deuda a coste amortizado: devenga intereses al tipo de descuento y se reduce con los pagos. El activo por derecho de uso se amortiza, normalmente en línea recta durante el menor entre el plazo del arrendamiento y la vida útil del activo (salvo que una opción de compra haga razonablemente cierta la propiedad).',
          'Esta división es el corazón de la NIIF 16. Un único pago anual por arrendamiento de 50.000 se convierte en dos gastos con distinto hogar en la cuenta de resultados: amortización (un gasto operativo, que se suma de nuevo en el EBITDA) e intereses (un gasto financiero, por debajo del resultado de explotación). Conviene observar el cuadro de amortización: los intereses están cargados al principio porque se calculan sobre el saldo vivo del pasivo.',
          'Año 1: intereses = 136.162 × 5 % = 6.808; el pasivo cae en 50.000 − 6.808 = 43.192 hasta 92.970. Amortización = 136.162 ÷ 3 = 45.387. Gasto total del año 1 = 52.195 — más que los 50.000 en efectivo pagados, porque el perfil del gasto está cargado al principio (se invierte en los años posteriores).'
        ],
        table: {
          headers: ['Año', 'Pasivo inicial', 'Intereses (5 %)', 'Pago', 'Pasivo final'],
          rows: [
            ['1', '136,162', '6,808', '(50,000)', '92,970'],
            ['2', '92,970', '4,649', '(50,000)', '47,619'],
            ['3', '47,619', '2,381', '(50,000)', '0'],
            ['Total', '', '13,838', '(150,000)', '']
          ]
        },
        journal: {
          transaction: 'Año 1: devengar intereses sobre el pasivo por arrendamiento al 5 %.',
          lines: [
            { account: 'Intereses de deudas (gastos financieros)', dr: 6808, cr: null },
            { account: 'Pasivo por arrendamiento', dr: null, cr: 6808 }
          ],
          narration: 'Devengo del descuento del pasivo por arrendamiento — Año 1'
        },
        impact: {
          pl: 'Gastos financieros +6.808 (por debajo del resultado de explotación, así que el EBITDA no se ve afectado por esta línea). El beneficio neto del año 1 es 2.195 menor que con el antiguo tratamiento de arrendamiento operativo (52.195 frente a 50.000) — el efecto de la carga inicial.',
          bs: 'Pasivo por arrendamiento +6.808 antes de realizar el pago; patrimonio neto −6.808 vía reservas.',
          cf: 'Sin movimiento de efectivo en el propio devengo de intereses.'
        }
      },
      {
        heading: 'Registrar la amortización y el pago en efectivo',
        paragraphs: [
          'Los dos asientos restantes del año 1 completan el cuadro. La amortización del activo por derecho de uso pasa por los gastos operativos — 45.387 en línea recta — y el pago en efectivo de 50.000 simplemente liquida parte del pasivo. Conviene fijarse bien: el pago en efectivo no es un gasto en absoluto según la NIIF 16; el gasto ya se reconoció como amortización más intereses.',
          'Compárese con el antiguo arrendamiento operativo de la NIC 17: un único gasto por alquiler de 50.000 en los costes operativos. Con la NIIF 16 la misma economía produce 45.387 de amortización más 6.808 de intereses. El gasto total es mayor en el año 1 (52.195) y menor en el año 3 (45.387 + 2.381 = 47.768) — la carga inicial se invierte a lo largo del plazo, y el gasto total en todo el plazo iguala el efectivo total pagado (150.000) en ambos modelos.'
        ],
        journal: {
          transaction: 'Año 1: amortizar el activo por derecho de uso en línea recta durante el plazo de 3 años (136.162 / 3).',
          lines: [
            { account: 'Amortización del inmovilizado (activo por derecho de uso)', dr: 45387, cr: null },
            { account: 'Amortización acumulada — Activo por derecho de uso', dr: null, cr: 45387 }
          ],
          narration: 'Amortización lineal del activo por derecho de uso — Año 1'
        },
        impact: {
          pl: 'Gastos operativos +45.387, así que el resultado de explotación es 4.613 mayor que con el antiguo gasto por alquiler de 50.000 (50.000 − 45.387). La amortización se suma de nuevo para el EBITDA, así que el EBITDA es 50.000 mayor que antes — todo el antiguo cargo por alquiler desaparece del cálculo del EBITDA.',
          bs: 'El valor en libros del activo por derecho de uso cae a 90.775; patrimonio neto −45.387 vía reservas.',
          cf: 'La amortización no es efectivo; sin efecto en el flujo de caja.'
        }
      },
      {
        heading: 'El pago en efectivo y la reordenación de los estados',
        paragraphs: [
          'Cuando se pagan los 50.000, el asiento divide el pasivo: la parte de intereses (6.808) y la parte de principal (43.192). Esta división impulsa la famosa reordenación del flujo de caja — según la NIC 7, la devolución de la parte de principal de un pasivo por arrendamiento es una salida de efectivo de financiación, mientras que los intereses pagados pueden presentarse como operativos o de financiación según la política de la empresa (la mayoría los presenta de forma coherente con los demás intereses pagados).',
          'El efecto neto en los tres estados es por lo que los analistas se preocupan tanto: el EBITDA sube porque el gasto por alquiler se sustituye por amortización (que se suma de nuevo) e intereses (por debajo de la línea del EBITDA); el resultado de explotación sube por la diferencia entre alquiler y amortización; los gastos financieros suben; activos y pasivos suben, perjudicando la rentabilidad sobre activos y el endeudamiento; el flujo de caja operativo sube (los pagos ahora están en financiación) mientras el flujo de financiación cae en la misma medida. El flujo de caja total no cambia — solo se mueve la geografía.',
          'Una consecuencia más: los covenants. Los contratos de préstamo redactados antes de 2019 a menudo definían la deuda y el EBITDA sobre una base de NIC 17. La adopción de la NIIF 16 podía incumplir técnicamente los covenants de deuda de la noche a la mañana, por lo que muchas facilidades se renegociaron con cláusulas de «PCGA congelados».'
        ],
        journal: {
          transaction: 'Año 1: pagar la cuota anual del arrendamiento de 50.000 (intereses 6.808 + principal 43.192).',
          lines: [
            { account: 'Pasivo por arrendamiento', dr: 50000, cr: null },
            { account: 'Efectivo', dr: null, cr: 50000 }
          ],
          narration: 'Pago anual del arrendamiento — Año 1'
        },
        impact: {
          pl: 'Sin impacto en la cuenta de resultados — el gasto ya se reconoció como amortización e intereses.',
          bs: 'Pasivo por arrendamiento −50.000 hasta 92.970; efectivo −50.000.',
          cf: 'El flujo de caja operativo es 50.000 mayor que con el antiguo tratamiento (sin alquiler en actividades operativas); el flujo de financiación es 50.000 menor (devolución del principal; la parte de intereses sigue la política de intereses pagados de la empresa). Flujo de caja total sin cambios.'
        },
        callout: { type: 'key', text: 'Marcador de la NIIF 16 frente al arrendamiento operativo de la NIC 17: EBITDA al alza, resultado de explotación al alza, gastos financieros al alza, beneficio neto ligeramente a la baja al principio y al alza después, activos y pasivos al alza, flujo de caja operativo al alza / flujo de financiación a la baja. Memoriza este patrón — es el resultado de la NIIF 16 más examinado en las entrevistas.' }
      },
      {
        heading: 'Cronología del arrendamiento: hechos que cambian los números',
        paragraphs: [
          'Un arrendamiento no es «medir una vez y olvidar». El pasivo se revalúa — con el ajuste correspondiente en el activo por derecho de uso — cuando ocurren hechos concretos: un cambio en un índice o tasa usado para los pagos variables (p. ej., reajustes de alquileres vinculados al IPC), una reevaluación del plazo del arrendamiento (una opción de prórroga pasa a ser razonablemente cierta de ejercerse, o no), o un cambio en la valoración de una opción de compra. El tipo de descuento solo se revisa por reevaluaciones del plazo o de la opción de compra (y cambios en tipos variables), no por meros cambios de índice.',
          'Las modificaciones que no son contratos separados — como añadir espacio o cambiar la contraprestación — también provocan revaluaciones. Y si un ajuste redujera el activo por derecho de uso por debajo de cero, el exceso va a la cuenta de resultados. El visual de la cronología de este módulo sitúa el inicio, cada fecha de pago, los puntos de reajuste del índice y los detonantes de reevaluación a lo largo del ejemplo de 3 años.'
        ],
        steps: [
          'Día 0 (inicio): reconocer el activo por derecho de uso y el pasivo por arrendamiento al VA de los pagos (136.162 en nuestro ejemplo).',
          'Cada cierre de año: devengar intereses al 5 %, amortizar el activo por derecho de uso, pagar 50.000 contra el pasivo.',
          'Reajuste del índice (p. ej., parte vinculada al IPC): revaluar el pasivo con los nuevos importes de pago usando el tipo de descuento original; ajustar el activo por derecho de uso.',
          'Hecho de reevaluación (la opción de prórroga ahora es razonablemente cierta): revaluar usando los pagos revisados Y un tipo de descuento revisado.',
          'Fin del plazo: el pasivo llega a cero; si se devuelve el activo, dar de baja el valor en libros restante del derecho de uso.'
        ],
        callout: { type: 'warning', text: 'Olvidar revaluar es un hallazgo clásico de auditoría. Los arrendamientos vinculados al IPC en un entorno inflacionario pueden desviarse silenciosamente muy lejos de su pasivo reconocido si nadie vigila las fechas de reajuste.' }
      },
      {
        heading: 'Exenciones: a corto plazo y de bajo valor',
        paragraphs: [
          'La NIIF 16 ofrece dos soluciones prácticas que permiten a los arrendatarios eludir la capitalización y llevar simplemente los pagos por arrendamiento a gastos en línea recta. La exención a corto plazo se aplica a arrendamientos con un plazo de 12 meses o menos al inicio que no contengan opción de compra — la elección se hace por clase de activo subyacente (p. ej., todos los arrendamientos de vehículos).',
          'La exención de bajo valor se evalúa activo por activo, según el valor del activo subyacente cuando es nuevo, con independencia de su antigüedad al inicio del arrendamiento o del umbral de importancia relativa del arrendatario. Los Fundamentos de las Conclusiones del IASB mencionan alrededor de 5.000 USD como orientación — portátiles, tabletas y mobiliario de oficina pequeño cualifican; coches, inmuebles y la mayoría de los equipos no. No puede usarse para mantener una flota de vehículos fuera del balance alegando que cada coche es «de bajo valor para nosotros».'
        ],
        bullets: [
          'Corto plazo: ≤12 meses, sin opción de compra, elegido por clase de activo subyacente.',
          'Bajo valor: evaluado por activo según su valor como nuevo (orientación ≈ 5.000 USD); sin coches, sin inmuebles.',
          'Ambas exenciones: reconocer los pagos como gasto, normalmente en línea recta — la antigua sensación de «arrendamiento operativo» solo sobrevive aquí.',
          'Sigue exigiéndose revelar el gasto reconocido con estas soluciones.'
        ],
        callout: { type: 'interview', text: 'A los entrevistadores les encanta preguntar por qué una empresa no puede aplicar la exención de bajo valor a 200 portátiles arrendados de 4.000 cada uno. Respuesta: puede — la prueba es por activo, así que una gran población de activos individualmente de bajo valor cualifica de verdad. La trampa es la inversa: un coche de 40.000 no cualifica solo porque sea inmaterial para un gran grupo.' }
      },
      {
        heading: 'Presentación e información a revelar',
        paragraphs: [
          'En el balance, el activo por derecho de uso se presenta dentro de la misma línea que los activos propios de la misma clase (p. ej., dentro del inmovilizado material) o como línea separada — pero si se presenta dentro del inmovilizado, las notas deben revelar cuánto corresponde a activos por derecho de uso. El pasivo por arrendamiento se divide en porciones corriente y no corriente.',
          'En la cuenta de resultados, la amortización del activo por derecho de uso y los intereses del pasivo por arrendamiento deben mostrarse por separado — los intereses no pueden enterrarse dentro de la amortización ni viceversa. Las revelaciones incluyen un análisis de vencimientos de los pasivos por arrendamiento, el gasto por arrendamientos a corto plazo y de bajo valor, e información que ayude a los usuarios a evaluar el efecto de los arrendamientos: adiciones a activos por derecho de uso, pagos variables llevados a gastos y ganancias o pérdidas de ventas con arrendamiento posterior.'
        ],
        bullets: [
          'Activo por derecho de uso: línea separada o dentro de la clase de activos propios (con revelación en notas en ambos casos).',
          'Pasivo por arrendamiento: dividido en corriente frente a no corriente.',
          'Cuenta de resultados: amortización e intereses mostrados por separado.',
          'Notas: análisis de vencimientos, gasto de corto plazo/bajo valor, adiciones al derecho de uso, pagos variables por arrendamiento.'
        ]
      }
    ],
    mistakes: [
      'Usar el tipo de interés incremental del endeudamiento sin comprobar antes si el tipo implícito en el arrendamiento es determinable — el tipo implícito tiene prioridad.',
      'Incluir pagos variables basados en el uso o en las ventas en la medición inicial del pasivo; solo se incluyen las variables vinculadas a un índice o tasa (al índice de la fecha de inicio).',
      'Aplicar la exención de bajo valor a coches o inmuebles, o juzgar el «bajo valor» contra la importancia relativa de la empresa en lugar del valor como nuevo del activo.',
      'No revaluar nunca los arrendamientos vinculados al IPC cuando el índice se reajusta, dejando que el pasivo se desvíe de la realidad.',
      'Presentar el pago íntegro del arrendamiento como salida de efectivo operativa en lugar de dividir el principal (financiación) y los intereses (según la política).',
      'Pasar por alto arrendamientos implícitos en contratos de servicios, logística o externalización porque la palabra «arrendamiento» no aparece.'
    ],
    interviewQA: [
      {
        q: '¿Cómo cambia la NIIF 16 el EBITDA, la deuda neta y las ratios de apalancamiento frente a los arrendamientos operativos de la NIC 17?',
        a: 'El EBITDA sube porque el gasto operativo por alquiler se sustituye por amortización, que se suma de nuevo, e intereses, que están por debajo de la línea del EBITDA — así que el EBITDA aumenta aproximadamente en el antiguo cargo por alquiler. La deuda neta sube porque ahora se reconoce el pasivo por arrendamiento, y los activos suben por el activo por derecho de uso, así que el endeudamiento empeora y la rentabilidad sobre activos cae. El beneficio neto es ligeramente menor en los primeros años porque los intereses están cargados al principio, y mayor después; en todo el plazo el gasto total iguala el efectivo total pagado. El flujo de caja operativo mejora mientras el flujo de financiación se deteriora en la misma medida, con el flujo de caja total sin cambios.'
      },
      {
        q: 'Explícame cómo identificas si un contrato contiene un arrendamiento.',
        a: 'Primero compruebo si hay un activo identificado — especificado explícita o implícitamente, sin derecho sustantivo de sustitución para el proveedor. Después pregunto si el cliente obtiene sustancialmente todos los beneficios económicos del activo, por ejemplo mediante el uso exclusivo. Por último compruebo si el cliente dirige cómo y con qué propósito se usa el activo, como decidir los horarios de operación o la producción. Las tres deben cumplirse. Esto importa porque los arrendamientos implícitos se esconden en contratos de logística, TI y externalización, y pasarlos por alto es un error común y material.'
      },
      {
        q: '¿Por qué el perfil del gasto de un arrendamiento está cargado al principio según la NIIF 16 aunque los pagos en efectivo sean constantes?',
        a: 'Porque los dos gastos se comportan de forma distinta: la amortización del activo por derecho de uso es lineal, pero los intereses se calculan sobre el saldo vivo del pasivo, que es mayor al principio. En nuestro ejemplo el año 1 muestra 45.387 de amortización más 6.808 de intereses = 52.195 frente a un pago de 50.000, mientras que el año 3 muestra 45.387 más solo 2.381 de intereses = 47.768. El gasto total del arrendamiento iguala el efectivo total pagado, así que la carga inicial es puramente un patrón temporal, no un coste extra.'
      }
    ],
    quiz: [
      { question: 'Según la NIIF 16, ¿qué debe reconocer un arrendatario al inicio para la mayoría de los arrendamientos?', options: ['Solo un pasivo por arrendamiento, con el alquiler llevado a gastos al pagarse', 'Una cuenta a cobrar por arrendamiento financiero e ingresos por intereses', 'Un activo por derecho de uso y un pasivo por arrendamiento', 'Nada en el balance — solo revelación en las notas'], answer: 2, explanation: 'El modelo central de la NIIF 16 exige que los arrendatarios reconozcan un activo por derecho de uso y un pasivo por arrendamiento para casi todos los arrendamientos, poniendo fin al tratamiento fuera de balance del arrendamiento operativo de la NIC 17.', difficulty: 'Foundation', topic: 'Leases', skill: 'Leases' },
      { question: '¿Por qué introdujo el IASB la NIIF 16?', options: ['Para eliminar el tratamiento fuera de balance de los arrendamientos operativos, que ocultaba un apalancamiento significativo', 'Para simplificar la contabilidad del arrendador', 'Para reducir las cuotas de amortización de las aerolíneas', 'Para alinear los plazos de arrendamiento con la normativa fiscal'], answer: 0, explanation: 'Los arrendamientos operativos de la NIC 17 mantenían fuera del balance obligaciones materiales (flotas de aviones, carteras de tiendas). La NIIF 16 las incorpora para que el apalancamiento sea visible y comparable.', difficulty: 'Intermediate', topic: 'Leases', skill: 'Leases' },
      { question: 'Un contrato logístico dedica 10 camiones específicos a las rutas de un cliente, y el cliente decide horarios y rutas. ¿Contiene un arrendamiento?', options: ['No, porque el contrato se llama acuerdo de servicios', 'No, porque el cliente no es propietario de los camiones', 'Solo si los camiones son nuevos', 'Sí — activos identificados, sustancialmente todos los beneficios, y el cliente dirige el uso'], answer: 3, explanation: 'La etiqueta no importa. Hay activos identificados sin sustitución sustantiva, el cliente obtiene sustancialmente todos los beneficios económicos y dirige cómo y con qué propósito se usan los activos — se cumplen los tres criterios de identificación del arrendamiento.', difficulty: 'Advanced', topic: 'Leases', skill: 'Leases' },
      { question: 'Un arrendamiento de 3 años tiene pagos anuales de 50.000 vencidos y un tipo de descuento del 5 %. ¿Cuál es el pasivo por arrendamiento inicial?', options: ['150.000 (total sin descontar)', '45.387 (la amortización de un año)', '136.162 (valor actual de los pagos)', '50.000 (solo el primer pago)'], answer: 2, explanation: 'El pasivo es el valor actual de los pagos futuros: 50.000 × 2,7232 (factor de anualidad a 3 años al 5 %) = 136.162. Usar el total sin descontar sobrestimaría el pasivo.', difficulty: 'Intermediate', topic: 'Leases', skill: 'Leases' },
      { question: '¿Qué tipo de descuento debe usar el arrendatario si el tipo implícito en el arrendamiento no puede determinarse fácilmente?', options: ['El tipo de endeudamiento del arrendador', 'El tipo de interés incremental del endeudamiento del arrendatario', 'El tipo libre de riesgo', 'El coste medio ponderado del capital'], answer: 1, explanation: 'La NIIF 16 prioriza el tipo implícito en el arrendamiento; solo si no puede determinarse fácilmente el arrendatario usa su tipo de interés incremental del endeudamiento — el tipo que pagaría por endeudarse a un plazo similar con garantía similar.', difficulty: 'Intermediate', topic: 'Leases', skill: 'Leases' },
      { question: '¿Qué pagos están EXCLUIDOS de la medición inicial del pasivo por arrendamiento?', options: ['Pagos variables basados en un porcentaje de las ventas de la tienda', 'Pagos fijos', 'Pagos variables vinculados a un índice de precios al consumo', 'Pagos fijos en sustancia'], answer: 0, explanation: 'Los pagos variables basados en ventas o uso se excluyen y se llevan a gastos a medida que se incurren porque no son inevitables. Las variables vinculadas a índices SÍ se incluyen, medidas al índice de la fecha de inicio.', difficulty: 'Advanced', topic: 'Leases', skill: 'Leases' },
      { question: 'En el año 1 del ejemplo (pasivo 136.162, tipo 5 %, pago 50.000), ¿cuál es el gasto por intereses?', options: ['2.500', '45.387', '50.000', '6.808'], answer: 3, explanation: 'Intereses = pasivo inicial × tipo de descuento = 136.162 × 5 % = 6.808. Está cargado al principio porque se calcula sobre el saldo vivo.', difficulty: 'Intermediate', topic: 'Leases', skill: 'Leases' },
      { question: '¿Cuál es la amortización del año 1 del activo por derecho de uso en el ejemplo?', options: ['50.000', '45.387 (136.162 ÷ 3, en línea recta)', '6.808', '13.838'], answer: 1, explanation: 'El activo por derecho de uso de 136.162 se amortiza en línea recta durante el plazo de 3 años: 136.162 ÷ 3 = 45.387 al año.', difficulty: 'Intermediate', topic: 'Leases', skill: 'Leases' },
      { question: 'Frente al tratamiento de arrendamiento operativo de la NIC 17, la NIIF 16 normalmente hace que el EBITDA:', options: ['Caiga, porque la amortización es mayor', 'Se mantenga exactamente igual', 'Suba por el importe del gasto por intereses', 'Suba, porque el gasto por alquiler se sustituye por amortización (que se suma de nuevo) e intereses (por debajo del EBITDA)'], answer: 3, explanation: 'El antiguo cargo por alquiler estaba en los gastos operativos y reducía el EBITDA. Con la NIIF 16 se convierte en amortización (que se suma de nuevo en el cálculo del EBITDA) más intereses (por debajo de la línea del resultado de explotación), así que el EBITDA sube aproximadamente en el antiguo alquiler.', difficulty: 'Advanced', topic: 'Leases', skill: 'Leases' },
      { question: 'En el estado de flujos de efectivo, la parte de principal de los pagos por arrendamiento de la NIIF 16 se presenta como:', options: ['Una salida de efectivo operativa, como solía ser el alquiler', 'Una salida de efectivo de inversión', 'Una salida de efectivo de financiación', 'No se muestra — se compensa contra el pasivo'], answer: 2, explanation: 'La devolución del principal del pasivo por arrendamiento es una actividad de financiación. Por eso el flujo de caja operativo sube y el de financiación cae en la transición, con el flujo de caja total sin cambios.', difficulty: 'Intermediate', topic: 'Leases', skill: 'Leases' },
      { question: '¿Qué arrendamiento cualifica para la exención de reconocimiento de la NIIF 16?', options: ['Un arrendamiento de equipos de 9 meses sin opción de compra', 'Un arrendamiento de oficinas de 5 años', 'Un arrendamiento de furgonetas de reparto de 3 años', 'Un arrendamiento de tiendas minoristas de 10 años'], answer: 0, explanation: 'La exención a corto plazo cubre arrendamientos de 12 meses o menos sin opción de compra. Las demás opciones son demasiado largas (o, para las furgonetas, no de bajo valor) y deben capitalizarse.', difficulty: 'Intermediate', topic: 'Leases', skill: 'Leases' },
      { question: 'Un minorista capitaliza cientos de arrendamientos de tiendas al adoptar la NIIF 16. ¿Qué ocurre con su ratio de endeudamiento?', options: ['Mejora porque los activos aumentan', 'Empeora porque los pasivos aumentan sin un aumento equivalente del patrimonio neto', 'No se ve afectado — los activos por derecho de uso compensan el pasivo', 'Mejora porque el EBITDA sube'], answer: 1, explanation: 'El pasivo por arrendamiento aumenta la deuda mientras el patrimonio neto no se mueve en la transición (el activo por derecho de uso lo compensa en el activo total, pero el patrimonio neto no se mueve). Más deuda sobre el mismo patrimonio neto significa peor apalancamiento — una razón clave por la que hubo que renegociar covenants.', difficulty: 'Advanced', topic: 'Leases', skill: 'Leases' }
    ]
  },
  {
    id: 'm16', level: 4, levelTitle: 'Liabilities and Complex Accounting', title: 'NIC 37 — Provisiones y contingencias',
    standard: 'IAS 37', tagline: 'Una provisión necesita las tres cosas: una obligación presente, una salida probable y una estimación fiable — si falta una, queda fuera del balance.',
    description: 'La NIC 37 traza una línea dura entre los pasivos que deben reconocerse y las incertidumbres que solo se revelan. Este módulo enseña las tres condiciones de reconocimiento, el árbol de decisión que separa las provisiones de los pasivos contingentes y los activos contingentes, cómo medir la mejor estimación y las trampas clásicas: planes de reestructuración, demandas y pérdidas operativas futuras.',
    minutes: 22, skills: ['Provisions'],
    visuals: ['ias37-tree'],
    sections: [
      {
        heading: 'Las tres condiciones — todo o nada',
        paragraphs: [
          'Una provisión es un pasivo de momento o importe incierto — piensa en indemnizaciones por demandas, reclamaciones de garantía o costes de desmantelamiento. La NIC 37 solo permite el reconocimiento cuando las tres condiciones se cumplen simultáneamente: existe una obligación presente (legal o implícita) como resultado de un suceso pasado; es probable una salida de recursos que incorporen beneficios económicos, es decir, más probable que improbable (>50 %); y el importe puede estimarse con fiabilidad.',
          'Si falla una sola condición, no hay provisión. Una salida probable sin obligación presente (por ejemplo, el mantenimiento futuro planificado) no es una provisión — el hecho que genera la obligación aún no ha ocurrido. Esta disciplina de «las tres o nada» es lo que impide a las empresas crear reservas discrecionales o, al contrario, esconder obligaciones genuinas.',
          'La obligación puede ser legal (un contrato, una ley, una sentencia) o implícita — surgida de prácticas pasadas, políticas publicadas o declaraciones que crean en terceros la expectativa válida de que la empresa actuará. Una política medioambiental de limpieza publicada que la empresa ha seguido sistemáticamente puede crear una obligación implícita aun sin ley.'
        ],
        bullets: [
          'Obligación presente por un suceso pasado — legal o implícita.',
          'Salida probable (>50 % de probabilidad) de beneficios económicos.',
          'Estimación fiable del importe.',
          'Las tres son necesarias: si falla una, el reconocimiento está prohibido.'
        ],
        callout: { type: 'key', text: 'El hecho que genera la obligación es el suceso pasado que crea la obligación. Sin hecho que genere la obligación, no hay provisión — esta única prueba elimina la mayoría de los intentos de provisionar costes futuros como reparaciones planificadas o pérdidas operativas futuras.' }
      },
      {
        heading: 'Árbol de decisión: provisión, pasivo contingente o nada',
        paragraphs: [
          'Cuando no se cumplen las tres condiciones, la NIC 37 no se queda en silencio — prescribe una escala de revelación. Un pasivo contingente es una obligación posible (cuya existencia solo se confirmará por sucesos futuros inciertos no totalmente bajo el control de la empresa) o una obligación presente que no supera la prueba de «probable» o de «estimación fiable». Los pasivos contingentes se revelan en las notas, nunca se reconocen — salvo que la posibilidad de salida sea remota, en cuyo caso ni siquiera se exige revelación.',
          'Los activos contingentes son la imagen especular con un tratamiento más estricto: un activo posible surgido de sucesos pasados solo se revela cuando es probable una entrada de beneficios económicos, y solo se reconoce como activo cuando su realización es prácticamente cierta. La asimetría es deliberada — la prudencia hace que las ganancias esperen más que las pérdidas.',
          'Conviene recorrer el árbol en orden para cada partida incierta: primero la obligación, después la probabilidad, después la medibilidad. El fallo más común en exámenes y entrevistas es saltar directamente a «probable» sin establecer una obligación presente.'
        ],
        steps: [
          'Paso 1 — ¿Hay una obligación presente por un suceso pasado? Si solo es una obligación posible (p. ej., una demanda aún no interpuesta cuyo resultado depende del demandante), ir a pasivo contingente.',
          'Paso 2 — ¿Es probable la salida (>50 %)? Si solo es posible, revelar un pasivo contingente; si es remota, no revelar nada.',
          'Paso 3 — ¿Puede estimarse el importe con fiabilidad? Si no, revelar un pasivo contingente (raro en la práctica — «fiable» pone el listón bajo).',
          'Paso 4 — Las tres sí: reconocer una provisión medida a la mejor estimación.',
          'Paso 5 — Para activos potenciales: reconocer solo cuando sea prácticamente cierto; revelar cuando sea probable; en caso contrario, silencio.'
        ],
        callout: { type: 'warning', text: 'El lenguaje de la probabilidad es preciso: «probable» significa más probable que improbable y activa el reconocimiento para los pasivos; «prácticamente cierto» (mucho más exigente) se necesita para reconocer un activo contingente. Confundir estos dos umbrales es un error grave.' }
      },
      {
        heading: 'Medición: la mejor estimación',
        paragraphs: [
          'Una provisión se mide a la mejor estimación del desembolso necesario para liquidar la obligación presente en la fecha de cierre — el importe que la empresa pagaría racionalmente para liquidarla o transferirla. Para una gran población de partidas (garantías de productos), eso significa el valor esperado: ponderar por probabilidad los posibles resultados. Para una obligación única (una demanda), es el resultado más probable, ajustado por el riesgo.',
          'Dos matices importan. Primero, los riesgos e incertidumbres se reflejan en la estimación, pero la incertidumbre por sí sola no justifica una prudencia excesiva — sobrestimar deliberadamente las provisiones está prohibido. Segundo, cuando el valor temporal del dinero es material (desmantelamiento dentro de 20 años, litigios de larga cola), la provisión se descuenta a valor actual, y el devengo del descuento se reconoce como gasto financiero en cada periodo.',
          'Las provisiones se revisan en cada fecha de cierre y se ajustan a la mejor estimación actual; las provisiones no utilizadas se revierten. Y si parte o todo el desembolso será reembolsado (seguro, indemnización), el reembolso se reconoce como un activo separado solo cuando sea prácticamente cierto — no se compensa contra la provisión más allá de presentar el gasto neto en la cuenta de resultados.'
        ],
        table: {
          headers: ['Situación', 'Enfoque de medición'],
          rows: [
            ['Garantía sobre 10.000 unidades vendidas', 'Valor esperado: coste ponderado por probabilidad en la población'],
            ['Demanda única, 60 % de probabilidad de perder 200.000', 'Resultado más probable: 200.000 (el escenario del 60 %)'],
            ['Desmantelamiento dentro de 20 años', 'Valor actual del coste futuro; devengar el descuento como gasto financiero cada año'],
            ['Recuperación esperada del seguro', 'Activo separado solo cuando sea prácticamente cierto; la provisión se mantiene bruta']
          ]
        },
        callout: { type: 'key', text: 'El valor esperado es para poblaciones; el resultado más probable es para hechos únicos. Usar el resultado más probable para una población de garantías infravalora la provisión porque ignora la cola ponderada por probabilidad.' }
      },
      {
        heading: 'Reclamaciones legales en la práctica',
        paragraphs: [
          'Las demandas son el campo de batalla clásico de la NIC 37. Supón que un cliente demanda por 500.000 por una instalación defectuosa. El asesor externo indica un 65 % de probabilidad de perder, con daños estimados en 200.000. Hay una obligación presente (el presunto trabajo defectuoso es un suceso pasado que crea una exposición legal), la salida es probable (65 % > 50 %) y el importe es estimable con fiabilidad — así que se reconoce una provisión de 200.000, no los 500.000 reclamados.',
          'Si el asesor estimara en cambio la probabilidad de perder en un 30 %, no habría provisión: la obligación existe pero la salida no es probable, así que la exposición de 200.000 se revela como pasivo contingente con una estimación de su efecto financiero. Si la reclamación fuera frívola con solo una probabilidad remota de éxito, ni siquiera se exigiría revelación.',
          'El asiento es directo, pero el juicio detrás lo es todo: los auditores cuestionarán la valoración de la probabilidad y la estimación, y el sesgo de la dirección (sobreprovisionar o infraprovisionar) es un área de riesgo de auditoría permanente.'
        ],
        journal: {
          transaction: 'Cierre del ejercicio: reconocer provisión por litigio — 65 % de probabilidad de perder, daños estimados 200.000.',
          lines: [
            { account: 'Gastos jurídicos (cuenta de resultados)', dr: 200000, cr: null },
            { account: 'Provisión para litigios', dr: null, cr: 200000 }
          ],
          narration: 'Provisión por pérdida probable en demanda, mejor estimación 200.000'
        },
        impact: {
          pl: 'Gastos +200.000; beneficio −200.000. Sin deducción fiscal todavía en la mayoría de las jurisdicciones (deducible al pagarse) — normalmente surge un activo por impuesto diferido.',
          bs: 'Pasivos +200.000 (provisión, dividida en corriente/no corriente según el momento esperado); patrimonio neto −200.000 vía reservas.',
          cf: 'Sin efecto en el flujo de caja hasta que se liquide la reclamación — un cargo no monetario clásico que los analistas suman de nuevo al evaluar la conversión del efectivo operativo.'
        }
      },
      {
        heading: 'Provisiones por reestructuración: un caso especial',
        paragraphs: [
          'Las provisiones por reestructuración tienen su propia puerta estricta porque la tentación de provisionar pronto — y liberar después para embellecer resultados — es muy fuerte. Una provisión por reestructuración solo puede reconocerse cuando existe un plan formal detallado que identifique el negocio, las ubicaciones, los empleados, el calendario y el desembolso, Y la empresa ha generado en los afectados la expectativa válida de que llevará a cabo la reestructuración — empezando a ejecutar el plan o anunciando sus características principales.',
          'Una decisión del consejo por sí sola no basta. Hasta que el plan se comunica o empieza la ejecución, no hay obligación implícita — empleados y proveedores no tienen ninguna expectativa válida, así que no hay provisión. Solo cualifican los desembolsos directos necesariamente derivados de la reestructuración: indemnizaciones por despido, penalizaciones por rescisión de contratos, costes de cierre de plantas. La formación del personal, el marketing en nuevos mercados y la inversión en nuevos sistemas están excluidos porque se refieren a operaciones futuras.',
          'Y la prohibición absoluta: nunca provisionar pérdidas operativas futuras. Las pérdidas esperadas en operaciones futuras no derivan de un hecho pasado que genere obligación — son un indicio de posible deterioro de los activos relacionados, que es una cuestión de la NIC 36, no de la NIC 37.'
        ],
        bullets: [
          'Reconocer solo con: plan formal detallado + expectativa válida (anuncio o ejecución iniciada).',
          'Costes que cualifican: solo desembolsos directos necesariamente derivados (indemnizaciones, costes de cierre, penalizaciones contractuales).',
          'Excluidos: formación, reubicación del personal que continúa, marketing, nuevos sistemas informáticos — benefician a periodos futuros.',
          'Pérdidas operativas futuras: nunca se provisionan, sin excepciones.'
        ],
        callout: { type: 'interview', text: 'La pregunta clásica de entrevista: «El consejo aprobó una reestructuración en diciembre pero la anunció en enero — ¿podemos provisionar al cierre?» Respuesta: no. Sin anuncio ni ejecución, no existe expectativa válida en la fecha de cierre, así que no hay obligación implícita — la provisión pertenece al periodo siguiente.' }
      },
      {
        heading: 'Activos contingentes y contratos onerosos',
        paragraphs: [
          'Dos piezas finales completan el cuadro. Los activos contingentes — una posible recuperación del seguro, una reconvención con entrada probable — siguen la escala estricta: revelar cuando la entrada es probable, reconocer solo cuando es prácticamente cierta. Una empresa que contabiliza una victoria legal «probable» como cuenta a cobrar está vulnerando la NIC 37.',
          'Los contratos onerosos son la excepción que confirma la regla de la «obligación presente»: cuando los costes inevitables de cumplir un contrato superan los beneficios, la obligación presente se reconoce como provisión medida al menor entre el coste de cumplir el contrato y las penalizaciones por incumplirlo. Antes de provisionar, los activos dedicados al contrato se someten primero a prueba de deterioro. Los contratos de suministro a largo plazo firmados a precios que después resultan deficitarios son el ejemplo de manual.'
        ],
        bullets: [
          'Activo contingente: entrada probable → revelar; prácticamente cierta → reconocer; en caso contrario, silencio.',
          'Contrato oneroso: costes inevitables > beneficios esperados → provisionar al menor entre el coste de cumplimiento y las penalizaciones de salida.',
          'Primero el deterioro: dar de baja los activos dedicados (NIC 36) antes de reconocer la provisión por contrato oneroso.'
        ]
      }
    ],
    mistakes: [
      'Reconocer una provisión cumpliendo solo dos de las tres condiciones — lo más frecuente, una salida probable sin obligación presente (p. ej., reparaciones futuras).',
      'Provisionar pérdidas operativas futuras, que la NIC 37 prohíbe expresamente.',
      'Reconocer una provisión por reestructuración solo con la decisión del consejo, antes de que ningún anuncio o ejecución cree una expectativa válida.',
      'Compensar un reembolso esperado del seguro contra la provisión en lugar de reconocer un activo separado cuando sea prácticamente cierto.',
      'Contabilizar un activo contingente (p. ej., una victoria legal probable) como cuenta a cobrar antes de que su realización sea prácticamente cierta.',
      'Olvidar descontar las provisiones a largo plazo (desmantelamiento, reclamaciones de larga cola) cuando el valor temporal del dinero es material.'
    ],
    interviewQA: [
      {
        q: '¿Qué diferencia hay entre una provisión y un pasivo contingente, y cómo difiere la contabilidad?',
        a: 'Una provisión cumple las tres condiciones de la NIC 37 — obligación presente por un suceso pasado, salida probable, estimación fiable — y se reconoce en el balance a la mejor estimación. Un pasivo contingente es una obligación posible o una obligación presente que no supera la prueba de probabilidad o de medibilidad, y solo se revela en las notas, nunca se reconoce. Si la probabilidad de salida es remota, se abandona incluso la revelación. La consecuencia práctica es significativa: las provisiones golpean el beneficio y el apalancamiento de inmediato, mientras que los pasivos contingentes son un riesgo de revelación que los analistas deben valorar por sí mismos.'
      },
      {
        q: '¿Cuándo puede una empresa reconocer una provisión por reestructuración?',
        a: 'Dos condiciones acumulativas: un plan formal detallado que cubra el negocio, las ubicaciones, los empleados afectados, el calendario y el desembolso, más una expectativa válida generada entre los afectados de que la reestructuración se producirá — creada al iniciar la ejecución o anunciar las características principales del plan. Una resolución del consejo por sí sola es insuficiente porque no crea obligación implícita. Solo cualifican los desembolsos directos necesariamente derivados, como indemnizaciones y penalizaciones contractuales; los costes de formación o de nuevos sistemas que benefician a operaciones futuras están excluidos, y las pérdidas operativas futuras nunca pueden provisionarse.'
      },
      {
        q: '¿Cómo se mide una provisión por garantías para miles de unidades vendidas?',
        a: 'Usando el método del valor esperado: ponderar por probabilidad los posibles resultados en la población. Por ejemplo, con un 70 % de probabilidad de no tener reclamaciones, un 20 % de reparaciones menores que cuestan 1 millón y un 10 % de reparaciones mayores que cuestan 4 millones, la provisión es 0,2 × 1 m + 0,1 × 4 m = 600.000. El enfoque del resultado más probable daría erróneamente cero. La provisión se revisa en cada periodo, y el devengo de cualquier descuento en garantías de larga cola se reconoce como gasto financiero.'
      }
    ],
    quiz: [
      { question: '¿Qué tres condiciones deben cumplirse TODAS para reconocer una provisión según la NIC 37?', options: ['Obligación posible, salida posible, estimación aproximada', 'Obligación legal, salida cierta, importe exacto', 'Obligación implícita, salida remota, mejor conjetura', 'Obligación presente por un suceso pasado, salida probable, estimación fiable'], answer: 3, explanation: 'La NIC 37 exige las tres: una obligación presente (legal o implícita) por un suceso pasado, una salida probable (>50 %) de beneficios económicos y una estimación fiable. Fallar una sola bloquea el reconocimiento.', difficulty: 'Foundation', topic: 'Provisions', skill: 'Provisions' },
      { question: 'Una demanda tiene un 65 % de probabilidad de resultar en daños estimados en 200.000. El tratamiento correcto es:', options: ['Reconocer una provisión de 200.000', 'Revelar un pasivo contingente por los 500.000 reclamados', 'Reconocer una provisión de 500.000', 'No hacer nada — el resultado es incierto'], answer: 0, explanation: 'Obligación presente (el suceso pasado que origina la reclamación), salida probable (65 % > 50 %), estimación fiable (200.000) — las tres condiciones cumplidas, así que reconocer una provisión de 200.000 medida a la mejor estimación, no al importe reclamado.', difficulty: 'Intermediate', topic: 'Provisions', skill: 'Provisions' },
      { question: 'La misma demanda se estima en cambio con un 30 % de probabilidad de perder 200.000. El tratamiento correcto es:', options: ['Reconocer una provisión de 200.000', 'Reconocer una provisión de 60.000 (30 % × 200.000)', 'Revelar un pasivo contingente — sin provisión', 'Ignorarla por completo'], answer: 2, explanation: 'La salida es posible pero no probable, así que la prueba de reconocimiento falla. La obligación presente existe pero no alcanza el umbral de probabilidad: revelar como pasivo contingente con una estimación del efecto financiero.', difficulty: 'Intermediate', topic: 'Provisions', skill: 'Provisions' },
      { question: 'Una empresa espera ganar una reconvención de 1 millón; los abogados dicen que el éxito es probable pero no prácticamente cierto. Debe:', options: ['Revelar un activo contingente en las notas', 'Reconocer una cuenta a cobrar de 1 millón', 'Reconocer una cuenta a cobrar de 500.000 por prudencia', 'Compensarlo contra la provisión relacionada'], answer: 0, explanation: 'Los activos contingentes se revelan cuando la entrada es probable y solo se reconocen cuando es prácticamente cierta. Contabilizarlo antes anticiparía una ganancia en vulneración de la prudencia asimétrica de la NIC 37.', difficulty: 'Intermediate', topic: 'Provisions', skill: 'Provisions' },
      { question: 'El consejo aprueba un plan de reestructuración en diciembre pero se anuncia al personal en enero, tras el cierre. Al 31 de diciembre:', options: ['Reconocer la provisión por reestructuración íntegra', 'Sin provisión — no existía expectativa válida en la fecha de cierre', 'Reconocer la mitad de la provisión', 'Revelar un pasivo contingente'], answer: 1, explanation: 'Sin anuncio ni ejecución, los afectados no tienen expectativa válida, así que no hay obligación implícita en la fecha de cierre. La provisión pertenece al periodo siguiente.', difficulty: 'Advanced', topic: 'Provisions', skill: 'Provisions' },
      { question: '¿Qué coste puede incluirse en una provisión por reestructuración?', options: ['Formar al personal que continúa para nuevos roles', 'Comercializar el negocio en su nueva ubicación', 'Indemnizaciones legales al personal despedido', 'Invertir en un nuevo sistema ERP'], answer: 2, explanation: 'Solo cualifican los desembolsos directos necesariamente derivados de la reestructuración — las indemnizaciones son el ejemplo de manual. La formación, el marketing y los nuevos sistemas benefician a operaciones futuras y están excluidos.', difficulty: 'Intermediate', topic: 'Provisions', skill: 'Provisions' },
      { question: 'Una empresa prevé pérdidas operativas de 2 millones el próximo año en una división deficitaria. Según la NIC 37 debe:', options: ['Reconocer una provisión de 2 millones', 'Reconocer una provisión descontada a valor actual', 'Revelar un pasivo contingente', 'No provisionar — las pérdidas operativas futuras nunca se provisionan'], answer: 3, explanation: 'Las pérdidas operativas futuras no derivan de un hecho pasado que genere obligación, así que la NIC 37 prohíbe expresamente provisionarlas. En cambio pueden indicar deterioro de los activos de la división según la NIC 36.', difficulty: 'Intermediate', topic: 'Provisions', skill: 'Provisions' },
      { question: 'Una provisión por garantías que cubre 10.000 unidades vendidas debe medirse usando:', options: ['El resultado único más probable', 'La reclamación máxima posible', 'El valor esperado — resultados ponderados por probabilidad', 'Las reclamaciones reales del año anterior'], answer: 2, explanation: 'Para una gran población, la NIC 37 exige el método del valor esperado: ponderar cada resultado por su probabilidad. El método del resultado más probable sirve para obligaciones únicas como una demanda, no para poblaciones.', difficulty: 'Advanced', topic: 'Provisions', skill: 'Provisions' },
      { question: 'Una obligación de desmantelamiento pagadera dentro de 20 años debe:', options: ['Reconocerse al coste futuro íntegro sin descontar', 'Descontarse a valor actual, reconociendo el devengo como gasto financiero', 'Solo revelarse, ya que el pago está lejos', 'Reconocerse gradualmente a lo largo de los 20 años'], answer: 1, explanation: 'Cuando el valor temporal del dinero es material, las provisiones se miden a valor actual. El descuento se devenga en cada periodo como gasto financiero, de modo que la provisión vuelve a crecer hasta el importe de liquidación futuro.', difficulty: 'Advanced', topic: 'Provisions', skill: 'Provisions' }
    ]
  },
  {
    id: 'm17', level: 4, levelTitle: 'Liabilities and Complex Accounting', title: 'NIC 19 — Retribuciones a los empleados (intro)',
    standard: 'IAS 19', tagline: 'Si el personal lo devengó este mes, se debe este mes — aunque nadie envíe una factura.',
    description: 'Salarios, bonus y vacaciones no disfrutadas son pasivos en el momento en que se presta el servicio, no cuando se paga la nómina. Este módulo cubre las retribuciones a corto plazo, el devengo de las vacaciones pagadas, las obligaciones por bonus y la crucial división conceptual entre planes de aportación definida y de prestación definida — la distinción que todo profesional de las finanzas necesita para las pensiones.',
    minutes: 16, skills: ['IFRS Fundamentals'],
    sections: [
      {
        heading: 'Retribuciones a corto plazo: reconocer al devengarse',
        paragraphs: [
          'La NIC 19 exige que las retribuciones a corto plazo a los empleados — salarios, sueldos, cotizaciones a la seguridad social, vacaciones anuales pagadas, bajas por enfermedad pagadas, bonus y retribuciones no monetarias que se espera liquidar dentro de los 12 meses del servicio — se reconozcan como gasto cuando el empleado presta el servicio, medidas al importe sin descontar que se espera pagar.',
          'El principio es pura contabilidad de devengo: la obligación se acumula día a día a medida que la gente trabaja, con independencia del ciclo de nómina. Si la fecha de cierre cae a mitad del ciclo de nómina, o hay bonus y derechos de vacaciones pendientes, debe reconocerse un pasivo. No hay descuento para las retribuciones a corto plazo — los importes se liquidan demasiado pronto para que el valor temporal del dinero importe.'
        ],
        bullets: [
          'Reconocer cuando se presta el servicio, no cuando se paga el efectivo.',
          'Medido sin descontar al importe que se espera pagar.',
          'Cubre salarios, cargas sociales, permisos pagados a corto plazo, bonus y ventajas no monetarias.',
          'Se aplica a retribuciones que se espera liquidar dentro de 12 meses.'
        ],
        callout: { type: 'key', text: 'Sin factura, sin pago, sin problema: el pasivo existe porque se recibió el servicio. Los devengos de nómina a fin de mes son la aplicación más rutinaria — y más comúnmente infravalorada — de la NIC 19.' }
      },
      {
        heading: 'Vacaciones pagadas: el problema de las vacaciones acumulables',
        paragraphs: [
          'Las ausencias retribuidas se dividen en dos tipos. Las ausencias acumulables (vacaciones no disfrutadas que se trasladan) crean un pasivo: la empresa reconoce el coste esperado del derecho acumulable a medida que los empleados prestan el servicio, medido al importe sin descontar de los pagos adicionales esperados por el derecho no utilizado.',
          'Las ausencias no acumulables (las típicas bajas por enfermedad que caducan si no se usan) no crean pasivo hasta que la ausencia ocurre realmente — no hay derecho trasladable que devengar. La distinción mueve dinero real: una empresa con políticas generosas de traslado de vacaciones puede tener un pasivo material por vacaciones devengadas que crece cada mes que no se reconoce.',
          'Ejemplo práctico: 200 empleados devengan cada uno 25 días de vacaciones al año; al cierre el saldo medio no disfrutado es de 5 días a un coste diario medio de 220. El devengo es 200 × 5 × 220 = 220.000 — un pasivo genuino en «otras cuentas a pagar» que muchas empresas descubren solo en su primera auditoría seria.'
        ],
        journal: {
          transaction: 'Devengo de cierre por vacaciones acumulables no disfrutadas: 200 empleados × 5 días × 220/día = 220.000.',
          lines: [
            { account: 'Gastos de vacaciones', dr: 220000, cr: null },
            { account: 'Vacaciones pendientes de pago (pasivo)', dr: null, cr: 220000 }
          ],
          narration: 'Devengo por vacaciones anuales acumulables no disfrutadas al cierre'
        },
        impact: {
          pl: 'Costes de personal +220.000; beneficio de explotación y EBITDA −220.000. Omitir este devengo embellece ambos.',
          bs: 'Pasivos corrientes +220.000; patrimonio neto −220.000 vía reservas. El fondo de maniobra se deteriora.',
          cf: 'Sin efecto en el efectivo — la salida de efectivo ocurre cuando se disfrutan las vacaciones o se pagan.'
        }
      },
      {
        heading: 'Bonus y participación en beneficios',
        paragraphs: [
          'Los planes de bonus y participación en beneficios crean un pasivo cuando la empresa tiene una obligación presente legal o implícita de realizar los pagos como resultado de sucesos pasados, y puede hacerse una estimación fiable. La obligación implícita es la parte interesante: una práctica pasada coherente de pagar bonus — aun sin promesa contractual — puede crear en los empleados la expectativa válida de que la empresa seguirá haciéndolo.',
          'Existe una estimación fiable cuando la fórmula del plan está fijada (p. ej., 10 % del beneficio antes de impuestos) o el importe puede determinarse antes de que se autoricen los estados financieros. El error clásico es esperar a la aprobación del consejo en febrero para devengar un bonus del cierre de diciembre: si la fórmula y la práctica pasada hacían del pago una conclusión inevitable al cierre, la obligación ya existía.',
          'La medición sigue el coste esperado, sin descontar para los planes a corto plazo. Para bonus plurianuales por antigüedad, se aplican el descuento y la estimación de tipo actuarial — un puente hacia el territorio más complejo de la NIC 19.'
        ],
        bullets: [
          'Obligación legal: el contrato o los términos del plan prometen el bonus.',
          'Obligación implícita: la práctica pasada coherente crea una expectativa válida.',
          'Devengar al cierre si la fórmula hace el importe estimable con fiabilidad — no esperar a la aprobación formal.',
          'Los bonus a corto plazo se miden sin descontar.'
        ],
        callout: { type: 'warning', text: 'Discrecional no significa evitable. Si se ha pagado una paga de Navidad durante diez años seguidos y nunca se sugirió que fuera a dejar de pagarse, la NIC 19 probablemente la trata como obligación implícita — los auditores esperarán un devengo.' }
      },
      {
        heading: 'Aportación definida frente a prestación definida: la gran división',
        paragraphs: [
          'Los planes de pensiones se dividen en dos cubos fundamentalmente distintos, y la contabilidad refleja quién asume el riesgo. En un plan de aportación definida, la empresa paga aportaciones fijas a un fondo separado y no tiene más obligación — si el fondo rinde mal, la pensión del empleado se reduce, no el balance de la empresa. La contabilidad es simple: reconocer la aportación como gasto cuando los empleados prestan el servicio.',
          'En un plan de prestación definida, la empresa promete una prestación determinada (p. ej., el 60 % del salario final), así que asume el riesgo actuarial y de inversión. La empresa debe estimar la obligación con hipótesis actuariales (tipo de descuento, crecimiento salarial, mortalidad), reconocer el pasivo o activo neto por prestación definida y dividir el coste: el coste de los servicios y el interés neto van a la cuenta de resultados, mientras que las nuevas mediciones — ganancias y pérdidas actuariales y el rendimiento de los activos del plan — van a otro resultado global, sin reciclarse nunca a resultados.',
          'Este módulo se mantiene conceptual en la contabilidad de la prestación definida — la mecánica actuarial completa es territorio de especialistas — pero todo profesional de las finanzas debería captar el punto del riesgo: una promesa de prestación definida es un pasivo apalancado de larga duración cuya volatilidad aterriza en otro resultado global y cuyos déficits pueden empequeñecer los activos operativos. Por eso la mayoría de las empresas han pasado dos décadas cerrando los planes de prestación definida a nuevos miembros.'
        ],
        table: {
          headers: ['Característica', 'Aportación definida', 'Prestación definida'],
          rows: [
            ['¿Quién asume el riesgo actuarial/de inversión?', 'El empleado', 'El empleador'],
            ['Reconocimiento del gasto', 'Aportaciones a pagar del periodo', 'Coste de los servicios + interés neto en resultados'],
            ['Nuevas mediciones', 'Ninguna', 'Ganancias/pérdidas actuariales en otro resultado global (sin reciclaje)'],
            ['Balance', 'Solo aportaciones impagadas', 'Pasivo/activo neto por prestación definida'],
            ['Ejemplo', '5 % fijo del salario a un fondo de pensiones', 'Promesa del 60 % del salario final']
          ]
        },
        callout: { type: 'key', text: 'El riesgo es el divisor: aportaciones fijas sin más obligación = aportación definida. Un nivel de prestación prometido = prestación definida, con el riesgo actuarial en el empleador y las nuevas mediciones en otro resultado global.' }
      },
      {
        heading: 'Devengo de nómina a fin de mes: juntando las piezas',
        paragraphs: [
          'El cierre de fin de mes es donde la NIC 19 se encuentra con el trabajo financiero rutinario. Los salarios por días trabajados aún no pagados, la seguridad social del empleador sobre esos salarios, los movimientos de vacaciones devengadas y la parte mensual del bonus anual necesitan devengarse. Un devengo de nómina limpio mantiene el EBITDA honesto mes a mes en lugar de dar bandazos con el calendario de nómina.',
          'Ejemplo: el cierre de diciembre cae 3 días laborables antes de la nómina de enero. Los salarios brutos de esos 3 días son 48.000, las cargas sociales del empleador del 30 % añaden 14.400, y la provisión mensual de bonus es 25.000. El devengo totaliza 87.400 — lo bastante material para mover un resultado mensual de gestión, y totalmente rutinario.',
          'La mejor práctica es una lista de comprobación mensual estándar: días de corte de nómina, informe de saldos de vacaciones de RR. HH., cálculo del bonus acumulado según la fórmula en lo que va de año, y tipos de cargas sociales. Las empresas que se saltan esto sistemáticamente sobrestiman el beneficio en los meses cortos y lo infraestiman en los largos.'
        ],
        journal: {
          transaction: 'Cierre de diciembre: devengar 3 días de salarios (48.000), cargas sociales del empleador (14.400) y parte mensual del bonus (25.000).',
          lines: [
            { account: 'Sueldos y salarios', dr: 48000, cr: null },
            { account: 'Seguridad social a cargo de la empresa', dr: 14400, cr: null },
            { account: 'Gastos por bonus', dr: 25000, cr: null },
            { account: 'Remuneraciones y cargas sociales pendientes de pago', dr: null, cr: 87400 }
          ],
          narration: 'Devengo de nómina de fin de mes por días trabajados aún no pagados'
        },
        impact: {
          pl: 'Costes de personal +87.400 en diciembre; EBITDA y beneficio de explotación −87.400. Sin el devengo, el beneficio de diciembre quedaría sobrestimado y el de enero infraestimado.',
          bs: 'Pasivos corrientes +87.400; patrimonio neto −87.400 vía reservas.',
          cf: 'Sin efecto en el efectivo a fin de mes; la salida aparece en el flujo de caja operativo de enero cuando se paga la nómina.'
        }
      }
    ],
    mistakes: [
      'Reconocer el gasto salarial cuando se paga la nómina en lugar de cuando se presta el servicio — omitiendo el devengo de corte de fin de mes.',
      'No devengar las vacaciones acumulables no disfrutadas, dejando que un pasivo material crezca silenciosamente fuera del balance.',
      'Tratar las bajas por enfermedad no acumulables como las vacaciones y devengar por permisos que caducan si no se usan.',
      'Esperar a la aprobación formal del consejo antes de devengar un bonus con fórmula que ya era obligación implícita al cierre.',
      'Descontar las retribuciones a corto plazo — la NIC 19 las mide sin descontar.',
      'Confundir los planes de aportación definida y de prestación definida y no ver que una «promesa de pensión» deja el riesgo actuarial en el empleador.'
    ],
    interviewQA: [
      {
        q: '¿Cómo se contabilizan las vacaciones no disfrutadas de los empleados al cierre?',
        a: 'Las vacaciones acumulables no disfrutadas se devengan como pasivo al coste esperado sin descontar — días no utilizados multiplicados por el coste diario. El asiento carga gastos de vacaciones y abona vacaciones pendientes de pago, reduciendo el EBITDA sin efecto en el efectivo hasta que se disfrutan. Las ausencias no acumulables, como los días de enfermedad que caducan, no se devengan hasta que ocurre la ausencia. Los auditores se fijan en esto porque las políticas generosas de traslado pueden crear un pasivo sorprendentemente material que las empresas suelen infradevengar.'
      },
      {
        q: '¿Qué diferencia hay entre un plan de pensiones de aportación definida y uno de prestación definida, y por qué importa?',
        a: 'En un plan de aportación definida el empleador paga aportaciones fijas y no tiene más obligación — el empleado asume el riesgo de inversión, y la contabilidad simplemente lleva a gastos las aportaciones a medida que se presta el servicio. En un plan de prestación definida el empleador promete un nivel de prestación, así que asume el riesgo actuarial y de inversión: reconoce un pasivo o activo neto por prestación definida, con el coste de los servicios y el interés neto en la cuenta de resultados y las nuevas mediciones (ganancias y pérdidas actuariales) en otro resultado global sin reciclaje. Importa porque las promesas de prestación definida son pasivos apalancados de larga duración cuyos déficits pueden ser enormes, por lo que las empresas han pasado décadas cerrándolos.'
      }
    ],
    quiz: [
      { question: 'Según la NIC 19, las retribuciones a corto plazo se miden a:', options: ['Valor actual descontado', 'Valor razonable con cambios en resultados', 'Valor nominal menos deterioro', 'El importe sin descontar que se espera pagar'], answer: 3, explanation: 'Las retribuciones a corto plazo (liquidadas dentro de 12 meses) se reconocen sin descontar al importe que se espera pagar — el valor temporal del dinero es inmaterial en periodos tan cortos.', difficulty: 'Foundation', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' },
      { question: 'El salario de diciembre de un empleado se paga el 5 de enero. El gasto debe reconocerse en:', options: ['Diciembre, cuando se prestó el servicio', 'Enero, cuando se paga el efectivo', 'En cualquiera de los dos meses, siempre que sea coherente', 'El mes en que se aprueba la nómina'], answer: 0, explanation: 'La NIC 19 exige reconocer el gasto cuando el empleado presta el servicio. Diciembre necesita un devengo de nómina por los días trabajados aún no pagados; el momento del efectivo es irrelevante.', difficulty: 'Foundation', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' },
      { question: 'Los días de vacaciones no disfrutados que los empleados pueden trasladar al año siguiente deben:', options: ['Ignorarse hasta que se disfrutan', 'Revelarse solo como pasivo contingente', 'Devengarse como pasivo al cierre al coste esperado sin descontar', 'Devengarse a valor actual descontado'], answer: 2, explanation: 'Las ausencias pagadas acumulables crean una obligación presente a medida que se presta el servicio. La empresa devenga el coste esperado del derecho no utilizado, sin descontar para permisos a corto plazo.', difficulty: 'Intermediate', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' },
      { question: 'Las bajas por enfermedad que caducan si no se usan en el año (no acumulables) se contabilizan:', options: ['Reconociendo un pasivo solo cuando ocurre la ausencia', 'Devengando el derecho anual íntegro cada mes', 'Descontando los días de enfermedad esperados a valor actual', 'Tratándolas como obligación por prestación definida'], answer: 0, explanation: 'Las ausencias no acumulables no crean derecho trasladable, así que no existe pasivo hasta que el empleado está realmente ausente. Devengar por permisos que caducan sobrestimaría los pasivos.', difficulty: 'Intermediate', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' },
      { question: 'Una empresa ha pagado una paga de Navidad durante diez años sin promesa contractual. Al cierre debe:', options: ['No devengar nada — el bonus es discrecional', 'Esperar a la aprobación del consejo antes de reconocer nada', 'Revelarlo como pasivo contingente', 'Devengar el bonus — la práctica pasada crea una obligación implícita'], answer: 3, explanation: 'La práctica pasada coherente puede crear una expectativa válida entre los empleados — una obligación implícita según la NIC 19. Si el importe es estimable con fiabilidad, el bonus se devenga al cierre con independencia del momento de la aprobación formal.', difficulty: 'Advanced', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' },
      { question: 'En un plan de pensiones de aportación definida:', options: ['El empleador garantiza un nivel de pensión determinado', 'La obligación del empleador se limita a las aportaciones debidas, llevadas a gastos a medida que se presta el servicio', 'Las ganancias y pérdidas actuariales van a otro resultado global', 'El empleador reconoce un pasivo neto por pensiones'], answer: 1, explanation: 'Aportación definida significa aportaciones fijas sin más obligación — el empleado asume el riesgo. La contabilidad simplemente reconoce el gasto por aportación cuando es debido.', difficulty: 'Intermediate', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' },
      { question: 'En un plan de prestación definida, las ganancias y pérdidas actuariales (nuevas mediciones) se reconocen en:', options: ['Otro resultado global, sin reciclaje posterior a resultados', 'La cuenta de resultados de inmediato', 'Reservas directamente, eludiendo otro resultado global', 'La cuenta de resultados repartidas en el servicio restante'], answer: 0, explanation: 'La NIC 19 exige las nuevas mediciones del pasivo/activo neto por prestación definida en otro resultado global, y nunca se reciclan a la cuenta de resultados — un diseño deliberado para mantener la volatilidad de las pensiones fuera del resultado declarado.', difficulty: 'Advanced', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' },
      { question: 'Un cierre de diciembre cae 3 días antes de la nómina de enero: salarios 48.000, cargas del empleador 14.400, parte del bonus 25.000. El asiento correcto:', options: ['Sin asiento hasta que se pague la nómina de enero', 'Devengar solo los 48.000 de salarios', 'Devengar 87.400: cargar las cuentas de costes de personal, abonar cuentas a pagar', 'Cargar el gasto de enero por anticipado'], answer: 2, explanation: 'Los tres importes se refieren al servicio de diciembre y deben devengarse: 48.000 + 14.400 + 25.000 = 87.400, cargando las cuentas de gastos y abonando remuneraciones y cargas sociales pendientes de pago. Omitirlo sobrestima el EBITDA de diciembre.', difficulty: 'Intermediate', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' },
      { question: '¿Por qué los devengos de nómina omitidos distorsionan el EBITDA mensual?', options: ['Cambian el tipo impositivo', 'Afectan al tipo de descuento de las provisiones', 'Reclasifican el flujo de caja operativo como financiación', 'Desplazan los costes de personal entre meses, sobrestimando el beneficio en los meses cortos e infraestimándolo en los largos'], answer: 3, explanation: 'Sin devengos de corte, los meses con menos días pagados parecen artificialmente rentables y los meses de puesta al día peores, aunque el coste de personal subyacente sea estable. Los devengos mantienen el EBITDA honesto mes a mes.', difficulty: 'Intermediate', topic: 'Employee Benefits', skill: 'IFRS Fundamentals' }
    ]
  }
];
