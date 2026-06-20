// contenido.js - Reglamento Interno Concejo Municipal El Cerrito
// Acuerdo No. 024 de 2025
// CONSTRUCCIÓN POR MÓDULOS: Preámbulo + Títulos I-XII cargados. Título XIII pendiente.
// TOC con enlaces directos a módulos (campo 'modulo' en cada entrada del índice)

const CAPITULOS = [
  {
    "id": 0,
    "titulo": "PREÁMBULO",
    "nombre": "Índice y Considerandos",
    "subtitulo": "Tabla de contenido del Acuerdo y fundamentos legales (Considerandos a-p)",
    "icono": "📜",
    "articulos": [
      0
    ]
  },
  {
    "id": 1,
    "titulo": "TÍTULO I",
    "nombre": "Disposiciones Preliminares",
    "subtitulo": "El Concejo como Corporación Político-Administrativa y Popular",
    "icono": "🏛️",
    "articulos": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": 2,
    "titulo": "TÍTULO II",
    "nombre": "Concejo Pleno",
    "subtitulo": "Inauguración, Posesión, Periodo de Sesiones, Actas, Publicidad, Funciones, Delegación y Prohibiciones",
    "icono": "📋",
    "articulos": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32
    ]
  },
  {
    "id": 3,
    "titulo": "TÍTULO III",
    "nombre": "Dignatarios",
    "subtitulo": "Presidente, Vicepresidente, Mesa Directiva y Comité de Coordinación Política",
    "icono": "👔",
    "articulos": [
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42
    ]
  },
  {
    "id": 4,
    "titulo": "TÍTULO IV",
    "nombre": "Deberes y Derechos de los Concejales",
    "subtitulo": "Deberes, Derechos, Honorarios, Seguridad Social y Equidad de Género en Política",
    "icono": "⚖️",
    "articulos": [
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59
    ]
  },
  {
    "id": 5,
    "titulo": "TÍTULO V",
    "nombre": "El Secretario",
    "subtitulo": "Designación, Requisitos, Periodo y Funciones del Secretario General",
    "icono": "📝",
    "articulos": [
      60,
      61
    ]
  },
  {
    "id": 6,
    "titulo": "TÍTULO VI",
    "nombre": "Comisiones",
    "subtitulo": "Clases de Comisiones, Comisiones Permanentes y Comisión Legal para la Equidad de la Mujer",
    "icono": "👥",
    "articulos": [
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81
    ]
  },
  {
    "id": 7,
    "titulo": "TÍTULO VII",
    "nombre": "Sesiones",
    "subtitulo": "Reuniones, Citaciones, Orden del Día, Debates y Votaciones",
    "icono": "🗣️",
    "articulos": [
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104
    ]
  },
  {
    "id": 8,
    "titulo": "TÍTULO VIII",
    "nombre": "Del Control Político",
    "subtitulo": "Citaciones, Moción de Observación y Moción de Censura",
    "icono": "🔍",
    "articulos": [
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114
    ]
  },
  {
    "id": 9,
    "titulo": "TÍTULO IX",
    "nombre": "Proceso Normativo",
    "subtitulo": "Acuerdos Municipales, Primer Debate y Segundo Debate",
    "icono": "📜",
    "articulos": [
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
      129,
      130,
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      139,
      140
    ]
  },
  {
    "id": 10,
    "titulo": "TÍTULO X",
    "nombre": "De las Objeciones",
    "subtitulo": "Motivos, Plazos y Trámite de las Objeciones del Alcalde",
    "icono": "⚠️",
    "articulos": [
      141,
      142,
      143,
      144,
      145
    ]
  },
  {
    "id": 11,
    "titulo": "TÍTULO XI",
    "nombre": "Cabildo Abierto",
    "subtitulo": "Petición Ciudadana, Materias, Difusión, Asistencia y Vocería",
    "icono": "🏙️",
    "articulos": [
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      155
    ]
  },
  {
    "id": 12,
    "titulo": "TÍTULO XII",
    "nombre": "Estatuto de la Oposición",
    "subtitulo": "Derechos de la Oposición Política e Independientes",
    "icono": "🗳️",
    "articulos": [
      156,
      157,
      158,
      159,
      160,
      161,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169
    ]
  }
];

const ARTICULOS = {
  "0": {
    "numero": 0,
    "titulo": "Preámbulo — Índice General y Considerandos del Acuerdo 024 de 2025",
    "tipo": "preambulo",
    "encabezado": {
      "epigrafe": "PROYECTO DE ACUERDO No. 024 DE 2025 (NOVIEMBRE 25 DE 2025)",
      "titulo_acuerdo": "“Por medio del cual se Abroga el Acuerdo Número 004 de Mayo 29 de 2018 y se determina el Nuevo Reglamento Interno del Concejo Municipal de El Cerrito – Valle del Cauca”",
      "introduccion": "El Concejo Municipal de El Cerrito (Valle del Cauca) en ejercicio de sus funciones Constitucionales y legales, especialmente las previstas en el artículo 313 de la Constitución Política de 1991 y los artículos 31, 32 y 71 de la ley 136 de 1994, la ley 1551 de 2012 y,",
      "acuerda": "Por lo anterior el Honorable Concejo Municipal de EL Cerrito – Valle del Cauca, ACUERDA",
      "articulo_inicial": {
        "numero": 1,
        "texto": "Abróguese el Acuerdo Municipal 004 de 2018 “por medio del cual se expide el Reglamento Interno del Concejo Municipal de El Cerrito – Valle del Cauca” y en su reemplazo adóptese el que a continuación se establece:"
      }
    },
    "toc": [
      {
        "titulo": "REGLAMENTO INTERNO",
        "pagina": null,
        "modulo": null
      },
      {
        "titulo": "CONSIDERANDO:",
        "pagina": "2",
        "modulo": 0
      },
      {
        "titulo": "ACUERDA",
        "pagina": "5",
        "modulo": 0
      },
      {
        "titulo": "DISPOSICIONES PRELIMINARES",
        "pagina": "5",
        "modulo": 1
      },
      {
        "titulo": "EL CONCEJO COMO CORPORACIÓN POLÍTICO ADMINISTRATIVA Y POPULAR",
        "pagina": "5",
        "modulo": 1
      },
      {
        "titulo": "DEL CONCEJO",
        "pagina": "11",
        "modulo": 1
      },
      {
        "titulo": "PRINCIPIOS RECTORES Y CRITERIOS DE INTERPRETACIÓN",
        "pagina": "14",
        "modulo": 1
      },
      {
        "titulo": "DEL CONCEJO Y LAS BANCADAS",
        "pagina": "15",
        "modulo": 1
      },
      {
        "titulo": "ESTRUCTURA ORGÁNICA DEL CONCEJO",
        "pagina": "21",
        "modulo": 1
      },
      {
        "titulo": "CONCEJO PLENO",
        "pagina": "22",
        "modulo": 2
      },
      {
        "titulo": "INAUGURACIÓN. POSESIÓN. PERIODO DE SESIONES. ACTAS. PUBLICIDAD",
        "pagina": "22",
        "modulo": 2
      },
      {
        "titulo": "FUNCIONES. DELEGACIÓN. PROHIBICIONES",
        "pagina": "28",
        "modulo": 2
      },
      {
        "titulo": "DIGNATARIOS",
        "pagina": "36",
        "modulo": 3
      },
      {
        "titulo": "DEL PRESIDENTE, VICEPRESIDENTE. MESA DIRECTIVA. COMITÉ DE COORDINACIÓN POLÍTICA",
        "pagina": "37",
        "modulo": 3
      },
      {
        "titulo": "DEBERES Y DERECHOS DE LOS CONCEJALES",
        "pagina": "48",
        "modulo": 4
      },
      {
        "titulo": "De los Deberes",
        "pagina": "48",
        "modulo": 4
      },
      {
        "titulo": "DE LOS DERECHOS",
        "pagina": "51",
        "modulo": 4
      },
      {
        "titulo": "SECRETARIO",
        "pagina": "64",
        "modulo": 5
      },
      {
        "titulo": "Designación. Requisitos. Periodo. Funciones",
        "pagina": "64",
        "modulo": 5
      },
      {
        "titulo": "COMISIONES",
        "pagina": "67",
        "modulo": 6
      },
      {
        "titulo": "Clases de Comisiones",
        "pagina": "68",
        "modulo": 6
      },
      {
        "titulo": "COMISIONES PERMANENTES",
        "pagina": "70",
        "modulo": 6
      },
      {
        "titulo": "COMISIÓN LEGAL PARA LA EQUIDAD DE LA MUJER",
        "pagina": "78",
        "modulo": 6
      },
      {
        "titulo": "SESIONES",
        "pagina": "81",
        "modulo": 7
      },
      {
        "titulo": "Reuniones. Citaciones. Orden Interno y Sesiones en General",
        "pagina": "82",
        "modulo": 7
      },
      {
        "titulo": "ORDEN DEL DÍA",
        "pagina": "87",
        "modulo": 7
      },
      {
        "titulo": "DEBATES",
        "pagina": "88",
        "modulo": 7
      },
      {
        "titulo": "VOTACIONES",
        "pagina": "95",
        "modulo": 7
      },
      {
        "titulo": "DEL CONTROL POLÍTICO",
        "pagina": "100",
        "modulo": 8
      },
      {
        "titulo": "PROCESO NORMATIVO",
        "pagina": "108",
        "modulo": 9
      },
      {
        "titulo": "ACUERDOS MUNICIPALES",
        "pagina": "108",
        "modulo": 9
      },
      {
        "titulo": "PRIMER DEBATE",
        "pagina": "111",
        "modulo": 9
      },
      {
        "titulo": "SEGUNDO DEBATE",
        "pagina": "115",
        "modulo": 9
      },
      {
        "titulo": "DE LAS OBJECIONES",
        "pagina": "118",
        "modulo": 10
      },
      {
        "titulo": "MOTIVOS PLAZOS",
        "pagina": "118",
        "modulo": 10
      },
      {
        "titulo": "TRÁMITE DE LAS OBJECIONES",
        "pagina": "118",
        "modulo": 10
      },
      {
        "titulo": "CABILDO ABIERTO",
        "pagina": "120",
        "modulo": 11
      },
      {
        "titulo": "DISPOSICIONES GENERALES ESTATUTO DE LA OPOSICIÓN",
        "pagina": "123",
        "modulo": 12
      },
      {
        "titulo": "DERECHOS DE LA OPOSICIÓN",
        "pagina": "124",
        "modulo": 12
      },
      {
        "titulo": "DERECHOS DE LOS INDEPENDIENTES",
        "pagina": "131",
        "modulo": 12
      },
      {
        "titulo": "OTRAS DISPOSICIONES",
        "pagina": "132",
        "modulo": null
      },
      {
        "titulo": "VIGENCIA Y REVISIÓN",
        "pagina": "134",
        "modulo": null
      }
    ],
    "considerandos": [
      {
        "letra": "a)",
        "texto": "Que según el artículo 312 de la Constitución Política, modificado por el artículo 5 del Acto Legislativo 01 de 2007, manifiesta que “En cada municipio habrá una corporación político-administrativa elegida popularmente para períodos de cuatro (4) años que se denominará Concejo Municipal, integrada por no menos de 7 ni más de 21 miembros, según lo determine la ley, de acuerdo con la población respectiva”. Que estas Corporaciones podrán ejercer control político sobre la administración municipal."
      },
      {
        "letra": "b)",
        "texto": "Que corresponde a los Concejos ejercer las atribuciones que enumera la Constitución Política en su artículo 313, así como las que a su vez señalan la Ley 136 de 1994, ley 617 de 2000, Ley 1551 de 2012 y demás que la Constitución y la ley le asignen."
      },
      {
        "letra": "c)",
        "texto": "Que el artículo 72 del Decreto 1333 de 1986 en concordancia con el Art. 31 de la ley 136 de 1994 “por la cual se dictan normas tendientes a modernizar la organización y el funcionamiento de los municipios” establece la obligación para los Concejos de expedir un reglamento interno para su funcionamiento, en el cual se incluyan, entre otras, las normas referentes a las comisiones, a la actuación de los Concejales y la validez de las convocatorias y de las sesiones."
      },
      {
        "letra": "d)",
        "texto": "Que de conformidad con el artículo 21 de la ley 974 de 2005, a partir del 19 de julio del mismo año entró en vigencia el denominado Régimen de Bancadas para la actuación de tales organismos en las Corporaciones Públicas de Elección Popular, el cual es aplicable en lo pertinente a los Concejos Municipales según lo dispone el artículo 19 de la referida normatividad."
      },
      {
        "letra": "e)",
        "texto": "Que el Acto Legislativo 01 de 2007 fortalece el proceso de control político mediante la inclusión de la Moción de Censura y el fortalecimiento de la Moción de Observación como herramientas que podrán usar para sancionar políticamente la actuación irregular o deficiente gestión de quienes desempeñan funciones públicas en la administración municipal."
      },
      {
        "letra": "f)",
        "texto": "Que fue expedida la Ley 1148 de 2007, que crea nuevos derechos para los concejales, incrementa las sesiones ordinarias, reduce el régimen de prohibiciones para los familiares de los Concejales y establece la posibilidad de sesionar a distancia previo el cumplimiento de unos requisitos."
      },
      {
        "letra": "g)",
        "texto": "Que mediante el Acto Legislativo 01 de 2009 o Reforma Política, fueron modificados algunos derechos y atribuciones del Concejo Municipal, se eliminó la posibilidad de remplazar las faltas temporales, se desapareció la posibilidad de pedir licencia y se dictan disposiciones relacionadas con la actuación en bancada y el régimen de los Partidos y Movimientos Políticos."
      },
      {
        "letra": "h)",
        "texto": "Que mediante la Ley 1368 de 2009 fueron creados nuevos derechos para los Concejales, se modificó la forma de Liquidar los Honorarios, se creó el reconocimiento de transporte, se eliminó la retención en la fuente a los honorarios de algunos concejales y se creó la libertad de profesión u oficio."
      },
      {
        "letra": "i)",
        "texto": "Que mediante la expedición de la ley 1551 de 2012 fueron creados derechos para los Concejales en materia pensional, categorización de los municipios y elección de personeros, se dictaron otras disposiciones y en consecuencia se debe reformar el reglamento interno de la corporación."
      },
      {
        "letra": "j)",
        "texto": "Que mediante el acto legislativo 02 de 2015, en el cual se ajustan el número de curules de la Corporación cediendo un lugar a quien haya ocupado la segunda votación más alta para el cargo de alcalde en el respectivo municipio – en caso de que quiera aceptarse la mentada curul durante el periodo de la correspondiente corporación. Teniendo en cuenta la vigencia establecida en el Art. 1º, Parágrafo transitorio."
      },
      {
        "letra": "k)",
        "texto": "Que en virtud de la Ley 1909 de 2018, por medio de la cual se adopta el ESTATUTO DE LA OPOSICIÓN, “el cual establece el marco general para el ejercicio y la protección especial del derecho a la oposición de las organizaciones políticas y algunos derechos de las organizaciones independientes.”"
      },
      {
        "letra": "l)",
        "texto": "Que teniendo en cuenta la expedición de la Ley 1981 de 2019 \"Por medio del cual se modifica la ley 136 de 1994, el Decreto ley 1421 de 1993 y el Decreto Extraordinario 1222 de 1986, se dictan normas para crear la Comisión para la Equidad de la Mujer en los Concejos y Asambleas y se dictan otras disposiciones\"."
      },
      {
        "letra": "m)",
        "texto": "Que mediante la expedición de la Ley 2436 de 2024, se crea la modalidad de Licencia de Maternidad para Mujeres Electas en Corporaciones Públicas, se promueve la igualdad y la participación política de las mujeres, se modifica la Ley 5ª de 1992 y se dictan otras disposiciones –Licencia de maternidad para mujeres en política–."
      },
      {
        "letra": "n)",
        "texto": "Que mediante la expedición de la Ley 2453 del 2025, se establecieron medidas para prevenir, atender, rechazar y sancionar la violencia contra las mujeres en política y hacer efectivo su derecho a la participación en todos los niveles."
      },
      {
        "letra": "o)",
        "texto": "Que mediante la expedición de la Ley 2461 del 2025, se fortalece las corporaciones públicas municipales de elección popular, se reconoce la actividad de los concejales y se dictan otras disposiciones."
      },
      {
        "letra": "p)",
        "texto": "Que se hace necesario adecuar el Reglamento Interno del Concejo Municipal de EL Cerrito – Valle del Cauca a los preceptos normativos mencionados puesto que es deber de las autoridades administrativas coordinar sus actuaciones de conformidad con la Constitución y la Ley para el adecuado cumplimiento de los fines del Estado."
      }
    ]
  },
  "2": {
    "numero": 2,
    "titulo": "Definición, Integración y Periodo",
    "texto": "Definición, Integración y Periodo. El Concejo Municipal de EL Cerrito – Valle del Cauca, es una corporación político-administrativa de elección popular, integrada por el número de miembros que determina la ley, no pudiendo ser inferior a siete (7) ni superior a veintiuno (21), de acuerdo con la población respectiva. El Concejo ejercerá control político a la administración municipal.\nPara efecto de distribución de curules, posterior a un proceso electoral, se debe tener en cuenta lo señalado en el Art. 1º del Acto Legislativo 02 de 2015.\nSus miembros reciben el nombre de Concejales quienes representan al pueblo y en el ejercicio de sus funciones deberán actuar en bancadas, consultando al efecto el Régimen Disciplinario de sus partidos, movimientos políticos o grupos significativos de ciudadanos de conformidad con la Ley 1475 de 2011 – Ley de Partidos Políticos, y propendiendo siempre por la consolidación de decisiones justas que procuren el bien común. Su periodo de permanencia es de cuatro (4) años reelegibles indefinidamente.\nLos Concejales representan al pueblo y son responsables políticamente ante la sociedad y frente a sus electores del cumplimiento de las obligaciones propias de su investidura. Sus votaciones serán nominales y públicas – Art. 5º del Acto Legislativo 01 de 2009."
  },
  "3": {
    "numero": 3,
    "titulo": "Autonomía",
    "texto": "Autonomía. El Concejo, como suprema autoridad municipal es autónomo en materia administrativa y presupuestal."
  },
  "4": {
    "numero": 4,
    "titulo": "Atribuciones",
    "texto": "Atribuciones. El Concejo Municipal de EL Cerrito – Valle del Cauca ejercerá las atribuciones, funciones y competencias establecidas en la Constitución Política de 1991 y en el Régimen Legal ordinario aplicable a los municipios, especialmente en materia normativa y de control político.\nSegún el Art. 313 de la Constitución Política de Colombia son atribuciones de los Concejos Municipales:\n1. Reglamentar las funciones y la eficiente prestación de los servicios a cargo del municipio.\n2. Adoptar los correspondientes planes y programas de desarrollo económico y social y de obras públicas.\n3. Autorizar al alcalde para celebrar contratos y ejercer pro tempore precisas funciones de las que corresponden al Concejo.\n4. Votar de conformidad con la Constitución y la ley los tributos y los gastos locales.\n5. Dictar las normas orgánicas del presupuesto y expedir anualmente el presupuesto de rentas y gastos.\n6. Determinar la estructura de la administración municipal y las funciones de sus dependencias; las escalas de remuneración correspondientes a las distintas categorías de empleos; crear, a iniciativa del alcalde, establecimientos públicos y empresas industriales o comerciales y autorizar la constitución de sociedades de economía mixta.\n7. Reglamentar los usos del suelo y, dentro de los límites que fije la ley, vigilar y controlar las actividades relacionadas con la construcción y enajenación de inmuebles destinados a vivienda.\n8. Elegir Personero para el período que fije la ley y los demás funcionarios que ésta determine.\n9. Dictar las normas necesarias para el control, la preservación y defensa del patrimonio ecológico y cultural del municipio.\n10. Las demás que la Constitución y la Ley le asignen.\n11. En las capitales de los departamentos y los municipios con población mayor de veinticinco mil habitantes, citar y requerir a los secretarios del despacho del alcalde para que concurran a las sesiones. Las citaciones deberán hacerse con una anticipación no menor de cinco (5) días y formularse en cuestionario escrito. En caso de que los Secretarios no concurran, sin excusa aceptada por el Concejo Distrital o Municipal, este podrá proponer moción de censura. Los Secretarios deberán ser oídos en la sesión para la cual fueron citados, sin perjuicio de que el debate continúe en las sesiones posteriores por decisión del concejo. El debate no podrá extenderse a asuntos ajenos al cuestionario y deberá encabezar el orden del día de la sesión.\nLos concejos de los demás municipios, podrán citar y requerir a los Secretarios del Despacho del Alcalde para que concurran a las sesiones. Las citaciones deberán hacerse con una anticipación no menor de cinco (5) días y formularse en cuestionario escrito. En caso de que los Secretarios no concurran, sin excusa aceptada por el Concejo Distrital o Municipal, cualquiera de sus miembros podrá proponer moción de observaciones que no conlleva al retiro del funcionario correspondiente. Su aprobación requerirá el voto afirmativo de las dos terceras partes de los miembros que integran la corporación.\n12. Proponer moción de censura respecto de los Secretarios del Despacho del Alcalde por asuntos relacionados con funciones propias del cargo o por desatención a los requerimientos y citaciones del Concejo Distrital o Municipal. La moción de censura deberá ser propuesta por la mitad más uno de los miembros que componen el Concejo Distrital o Municipal. La votación se hará entre el tercero y el décimo día siguientes a la terminación del debate, con audiencia pública del funcionario respectivo. Su aprobación requerirá el voto afirmativo de las dos terceras partes de los miembros que integran la Corporación. Una vez aprobada, el funcionario quedará separado de su cargo. Si fuere rechazada, no podrá presentarse otra sobre la misma materia a menos que la motiven hechos nuevos. La renuncia del funcionario respecto del cual se haya promovido moción de censura no obsta para que la misma sea aprobada conforme a lo previsto en este artículo.\nSegún el Artículo 32 de la Ley 136 de 1994, modificada por la Ley 1551 de 2012, son atribuciones de los Concejos:\n13. Disponer lo referente a la policía en sus distintos ramos, sin contravenir las leyes y ordenanzas, ni los decretos del Gobierno Nacional o del Gobernador respectivo.\n14. Exigir informes escritos o citar a los secretarios de la Alcaldía, Directores de departamentos administrativos o entidades descentralizadas del orden municipal, al contralor y al personero, así como a cualquier funcionario municipal, excepto el alcalde, para que haga declaraciones orales sobre asuntos relacionados con la marcha del municipio. Igualmente, los concejos municipales podrán invitar a los diferentes funcionarios del Orden Departamental, así como a los representantes legales de los organismos descentralizados y de los establecimientos públicos del orden nacional, con sedes en el respectivo departamento o municipio, en relación con temas de interés local.\n15. Reglamentar la autorización al alcalde para contratar, señalando los casos en que requiere autorización previa del Concejo.\n16. Autorizar al alcalde para delegar en sus subalternos o en las juntas administradoras locales algunas funciones administrativas distintas de las que dispone esta ley.\n17. Determinar la nomenclatura de las vías públicas y de los predios o domicilios.\n18. Establecer, reformar o eliminar tributos, contribuciones, impuestos y sobretasas, de conformidad con la ley.\n19. Velar por la preservación y defensa del patrimonio cultural.\n20. Organizar la contraloría y la personería y dictar las normas necesarias para su funcionamiento.\n21. Dictar las normas de presupuesto y expedir anualmente el presupuesto de rentas y gastos, el cual deberá corresponder al plan municipal o distrital de desarrollo, teniendo especial atención con los planes de desarrollo de los organismos de acción comunal definidos en el presupuesto participativo y de conformidad con las normas orgánicas de planeación.\n22. Fijar un rubro destinado a la capacitación del personal que presta su servicio en la administración municipal.\n23. Garantizar el fortalecimiento de la democracia participativa y de los organismos de acción comunal.\n24. Citar a control especial a los Representantes Legales de las empresas de servicios públicos domiciliarios, sean públicas o privadas, para que absuelvan inquietudes sobre la prestación de servicios públicos domiciliarios en el respectivo Municipio o Distrito. La empresa de servicios públicos domiciliarios cuyo representante legal no atienda las solicitudes o citaciones del control especial emanadas de los Concejos Municipales o Distritales, será sujeto de investigación por parte de la Superintendencia de los Servicios Públicos Domiciliarios. Esta adelantará de oficio o por petición de la corporación respectiva, una investigación administrativa e impondrá las sanciones procedentes establecidas por la ley. Lo anterior sin perjuicio de las demás acciones legales o Constitucionales procedentes.\nParágrafo 1°. Los Concejos Municipales mediante acuerdo a iniciativa del alcalde establecerán la forma y los medios como los municipios puedan otorgar los beneficios, establecidos en el inciso final del Artículo 13, 46 y 368 de la Constitución Nacional.\nParágrafo 2°. Aquellas funciones normativas del municipio para las cuales no se haya señalado si la competencia corresponde a los alcaldes o los concejos, se entenderá asignada a estas corporaciones, siempre y cuando no contraríe la Constitución y la ley.\nParágrafo 3°. A través de las facultades concedidas en el numeral siete, no se autoriza a los municipios para gravar las rentas que el sector exportador haga al exterior.\nParágrafo 4°. De conformidad con el numeral 30 del Artículo 313 de la Constitución Política, el Concejo Municipal o Distrital deberá decidir sobre la autorización al alcalde para contratar en los siguientes casos:\n1. Contratación de empréstitos.\n2. Contratos que comprometan vigencias futuras.\n3. Enajenación y compraventa de bienes inmuebles.\n4. Enajenación de activos, acciones y cuotas partes.\n5. Concesiones.\n6. Las demás que determine la ley."
  },
  "5": {
    "numero": 5,
    "titulo": "Sede",
    "texto": "Sede. El Concejo sesionará en la cabecera municipal, en el recinto señalado oficialmente para tal efecto; ordinariamente por derecho propio, durante los períodos señalados por la ley y extraordinariamente por convocatoria del alcalde.\nParágrafo 1. Cuando se trate de asuntos que afecten específicamente a un corregimiento o comuna, el Concejo Municipal podrá hacer presencia cuando se convocare a cabildo abierto con sujeción a los preceptos de la ley 1757 de 2015 “Por la cual se dictan disposiciones en materia de promoción y protección del derecho a la participación democrática”.\nParágrafo 2. De conformidad con el Artículo 2º de la Ley 1148 de 2007 – en concordancia con el decreto No. 2255 de 2002. Cuando la Presidencia de la Corporación, por acto motivado declare que, por razones de orden público, intimidación o amenaza, no es posible que uno o varios miembros del Concejo Municipal concurran a su sede habitual, podrán participar de las sesiones de manera no presencial o fuera de la sede.\nPara tal fin, los miembros del Concejo podrán deliberar y decidir por comunicación simultánea o sucesiva, utilizando para el efecto los avances tecnológicos en materia de telecomunicaciones tales como fax, teléfono, teleconferencia, videoconferencia, Internet, conferencia virtual y todos aquellos medios que se encuentren al alcance de los Concejales.\nEn caso de existir comisiones permanentes, se podrán adelantar las sesiones en los mismos términos establecidos en el presente artículo.\nLos mismos medios podrán emplearse con el fin de escuchar a quienes deseen rendir declaraciones verbales o escritas sobre hechos o temas que requieran ser debatidos, o puedan aportar información o elementos de juicio útiles para las decisiones del Concejo."
  },
  "6": {
    "numero": 6,
    "titulo": "Decisiones del Concejo",
    "texto": "Decisiones del Concejo. Las principales decisiones de la corporación toman el nombre de “acuerdos”, actos administrativos obligatorios para las autoridades y los particulares en la jurisdicción del territorio municipal. También son decisiones del Concejo las que se adoptan mediante resoluciones, proposiciones, elecciones, citaciones, invitaciones, aceptación de renuncias y la aprobación de la moción de observación.\nDe conformidad con el artículo 83 de la Ley 136 de 1994, toda decisión del concejo distinta a las adoptadas mediante acuerdo, deberán ser suscritas por la mesa directiva y el secretario de la corporación. Se exceptúan la suscripción de contratos, los cuales serán suscritos por el presidente del concejo.\nSegún lo dispuesto en el Acto Legislativo 01 de 2009 las decisiones de los Concejos que se adopten en las sesiones plenarias y de comisión mediante voto de cada uno de sus miembros será nominal y pública, en algunos casos se aplicarán las disposiciones contenidas en la Ley 1431 de 2011, la Ley 2436 de 2024 el cual modifica el artículo 128 de la Ley 5 de 1992."
  },
  "7": {
    "numero": 7,
    "titulo": "Invalidez de las reuniones",
    "texto": "Invalidez de las reuniones. Por regla general las reuniones de los miembros del Concejo con el propósito de ejercer funciones propias de la Corporación, se efectuarán en la sede oficial del Concejo, ubicada en la cabecera municipal.\nLas reuniones que se realicen con desconocimiento de las disposiciones legales y reglamentarias serán inválidas y las decisiones que allí se tomen serán ilegales e ineficaces. Los Concejales que participen en sesiones que controviertan las anteriores disposiciones incurrirán en falta disciplinaria sancionable por el organismo correspondiente."
  },
  "8": {
    "numero": 8,
    "titulo": "Quórum y mayorías",
    "texto": "Quórum y mayorías. En cumplimiento de la disposición normativa contenida en el artículo 146 y 148 de la Constitución Política de 1991, las normas sobre quórum y mayorías decisorias previstas para el Congreso de la República regirán también para el Concejo Municipal de EL Cerrito – Valle del Cauca.\nEn consecuencia, en el Concejo Municipal regirá tanto el quórum deliberatorio como el decisorio. Mediante el primero, podrá abrir sus sesiones y deliberar con la asistencia de por lo menos una cuarta parte de sus miembros. Pero las decisiones únicamente podrán tomarse con la asistencia de la mayoría de los asistentes, lo cual constituye el quórum decisorio, salvo que la Constitución, la Ley o el presente reglamento determine un quórum diferente o que la Constitución exija expresamente una mayoría especial.\nEn el Concejo Pleno y en las comisiones permanentes, las decisiones se tomarán por la mayoría de los votos de los asistentes, salvo que la Constitución, la ley o el presente reglamento exija expresamente una mayoría especial."
  },
  "9": {
    "numero": 9,
    "titulo": "Principios rectores del Reglamento",
    "texto": "Principios rectores del Reglamento. Como estatuto que reglamenta el funcionamiento de una corporación pública al servicio de los intereses generales, las actuaciones de los Concejales y las bancadas a las que éstos pertenezcan deberán desarrollarse con sujeción a los Principios Generales de la función Administrativa contenidos en el artículo 209 de la Constitución Política de 1991 y el artículo 3º del Código de Procedimiento Administrativo y de lo Contencioso Administrativo y 5 de la ley 136 de 1994."
  },
  "10": {
    "numero": 10,
    "titulo": "Reglas de Interpretación del Reglamento",
    "texto": "Reglas de Interpretación del Reglamento. La interpretación de las disposiciones reglamentarias aquí contenidas habrá de realizarse según el sentido lógico y literal de las palabras. Con todo, en tratándose de aquellas que presenten dificultades interpretativas se tendrán en cuenta las contempladas en los artículos 25 a 32 del Código Civil Colombiano en lo que resulten pertinentes."
  },
  "11": {
    "numero": 11,
    "titulo": "Aplicación de disposiciones normativas análogas",
    "texto": "Aplicación de disposiciones normativas análogas, de doctrina constitucional y de los Principios Generales del Derecho. Cuando frente a situaciones fácticas particulares el presente Reglamento no proporcione disposiciones normativas aplicables, se acudirá a aquellas que regulen casos, materias o procedimientos semejantes y/o, en su defecto, a la doctrina constitucional y los principios generales del derecho o bajo el principio de integración se aplicarán las que contenga el Reglamento Interno del Congreso (Ley 5ª de 1992)."
  },
  "12": {
    "numero": 12,
    "titulo": "Prevalencia Normativa",
    "texto": "Prevalencia Normativa. La Constitución es norma de normas y de conformidad con la ley y sus decretos se regulará el funcionamiento y manejo de los concejos municipales. En todo caso de incompatibilidad entre la Constitución, la ley y sus decretos reglamentarios y el presente Reglamento, se aplicarán las disposiciones constitucionales y legales de carácter general."
  },
  "13": {
    "numero": 13,
    "titulo": "Definición de Bancada",
    "texto": "Definición. Para los efectos del presente acuerdo, de conformidad con el artículo 1 de la Ley 974 de 2005, los miembros de las Corporaciones Públicas elegidos por un mismo partido, movimiento social o grupo significativo de ciudadanos Constituyen una bancada en la respectiva corporación. Cada miembro de la corporación pertenecerá exclusivamente a la bancada del partido, movimiento político, social o grupo significativo de ciudadanos por el cual fue elegido.\nParágrafo único. Son los partidos y movimientos políticos los competentes para determinar, de manera general, los asuntos de conciencia y establecer un régimen disciplinario, que incluirá la gradualidad y las sanciones correspondientes por el incumplimiento a la obligación de actuar en bancadas al interior del Concejo Municipal.\nPara el caso de los grupos significativos de ciudadanos que no ostenten estatutos ó régimen disciplinario, las sanciones aplicables por el incumplimiento de actuar en bancada, serán las que dispongan sus consejos directivos o comités de ética, en caso de que estuvieren conformados; por regla general toda actuación de los miembros serán en bancada ó unánime de conformidad con la Ley."
  },
  "14": {
    "numero": 14,
    "titulo": "Constitución de las Bancadas",
    "texto": "Constitución. Las Bancadas del Concejo Municipal deberán constituirse a partir de la primera sesión que el Concejo tenga formalmente. Bien sea, desde el momento de su posesión o toma de juramento como Concejal, Al efecto, los Concejales pertenecientes a un mismo partido o movimiento político por el cual se inscribieron para la elección respectiva, deberán reunirse formalmente de conformidad con sus estatutos y la Ley y entregar a la Secretaría de la Corporación, documento en el que especifiquen los nombres y apellidos de los Concejales que integran la bancada respectiva.\nUna vez constituida la Bancada, deberá informar de ello a la Presidencia del Concejo mediante nota firmada por todos sus miembros integrantes, determinando específicamente el nombre de su vocero y el coordinador, una sola persona podrá ejercer ambas funciones. Así mismo, los nombres de quienes desempeñan otras actividades directivas al interior de dicha Bancada."
  },
  "15": {
    "numero": 15,
    "titulo": "Actuación en Bancadas",
    "texto": "Actuación en Bancadas. En cumplimiento de lo estipulado en el artículo 2 de la ley 974 de 2005, los miembros de cada bancada actuarán en grupo y coordinadamente y emplearán mecanismos democráticos para tomar sus decisiones al interior del Concejo en todos los temas que los Estatutos de sus respectivos Partidos o Movimiento Político no establezcan como de conciencia.\nDe Conformidad con la jurisprudencia Colombiana, los Concejales pertenecientes a un grupo significativo de ciudadanos constituyen una Bancada y al interior de la Corporación deberán actuar como tal."
  },
  "16": {
    "numero": 16,
    "titulo": "Facultades de las Bancadas",
    "texto": "Facultades de las Bancadas. Son facultades de las Bancadas existentes en el Concejo de EL Cerrito – Valle del Cauca las siguientes:\n1. Promover citaciones o debates e intervenir en ellos a través de sus respectivos voceros o portavoces.\n2. Participar con voz y voto en las sesiones plenarias del Concejo.\n3. Intervenir a través de sus voceros o portavoces en las sesiones en las que se discutan y se voten proyectos de acuerdo.\n4. Presentar mociones.\n5. Hacer interpelaciones.\n6. Solicitar votaciones nominales y públicas.\n7. Solicitar verificaciones de quórum.\n8. Solicitar mociones de orden, de suficiente ilustración y las demás establecidas en el presente reglamento.\n9. Postular Candidatos."
  },
  "17": {
    "numero": 17,
    "titulo": "Intervenciones",
    "texto": "Intervenciones. Para hacer uso de la palabra se requiere autorización previa de la Presidencia. Durante las sesiones plenarias o de comisión permanente, las bancadas podrán hacer uso de la palabra máximo hasta en dos (2) oportunidades por tema. En cada caso, la intervención de la bancada no podrá ser superior a 30 minutos, la cual se realizará a través del vocero determinado para el efecto. El vocero podrá distribuir su tiempo de intervención con los otros miembros de la bancada.\nLa Mesa Directiva fijará el tiempo de las intervenciones de cada uno de los oradores teniendo en cuenta la extensión del proyecto y la complejidad de la materia."
  },
  "18": {
    "numero": 18,
    "titulo": "Uso de la Palabra",
    "texto": "Uso de la Palabra. El uso de la palabra se concederá con sujeción al siguiente orden:\n1. Al (los) autor(es) ponente(s) para que sustente(n) su informe, con la proposición o razón de la citación.\n2. A los voceros y los miembros de las bancadas, hasta por veinte minutos por grupo. Cuando la bancada represente al menos el treinta por ciento de las curules, el tiempo de intervención podrá ampliarse hasta por diez minutos más.\n3. Los voceros tendrán 20 minutos al comienzo de cada debate para fijar la posición de sus colectividades y en casos especiales los partidos designarán otros voceros, los cuales tendrán 10 minutos para hacer su intervención.\n4. A los oradores en el orden en que se hubieren inscrito ante la Secretaria. Ninguna intervención individual, en esta instancia, podrá durar más de 10 minutos.\n5. Los servidores públicos que tengan derecho a intervenir por un término de 20 minutos, prorrogables a petición del mismo y aceptada por la plenaria.\n6. Los voceros de las bancadas podrán intervenir nuevamente y se cerrarán las intervenciones a criterio del Presidente de la Corporación.\nParágrafo 1. Ningún orador podrá referirse a un tema diferente del que se encuentra en discusión, y su desconocimiento obligará a la Presidencia a llamar la atención y suspender el derecho para continuar en la intervención. Sin perjuicio de lo establecido en las reglas de ética que para tal efecto señale el presente reglamento o el del partido, movimiento o grupo significativo de ciudadanos.\nParágrafo 2. Todos los oradores deben inscribirse en la Secretaria hasta con cinco minutos de anterioridad de la hora fijada para el inicio de la sesión. Harán uso de la palabra por una sola vez en la discusión de un tema."
  },
  "19": {
    "numero": 19,
    "titulo": "Número de Intervenciones",
    "texto": "Número de Intervenciones. No se podrá intervenir por más de dos veces en la discusión de un proyecto de acuerdo sobre el mismo tema, proposición o en su modificación, con excepción del autor del mismo o de los voceros de las bancadas.\nY no se podrá hablar más de una vez cuando se trate de:\n1. Proposiciones para alterar o diferir el orden del día.\n2. Cuestiones de orden.\n3. Proposiciones de suspensión o que dispongan iniciar o continuar en el orden del día.\n4. Apelaciones a lo resuelto por la presidencia o revocatoria.\n5. Proposiciones para que un proyecto regrese a primer debate."
  },
  "20": {
    "numero": 20,
    "titulo": "Programación Preferente",
    "texto": "Programación Preferente. Los proyectos de acuerdo o proposiciones presentados a nombre de una bancada se programarán en el orden del día de las comisiones permanentes o en la plenaria de manera preferente sobre las que hayan presentado a título personal los concejales miembros de la corporación."
  },
  "21": {
    "numero": 21,
    "titulo": "Constancia",
    "texto": "Constancia. Todos los Concejales deberán dejar constancia escrita de sus posiciones sobre todos los proyectos de acuerdo que se tramiten."
  },
  "22": {
    "numero": 22,
    "titulo": "Reglamentación especial para Debates de Control Político por citación de una Bancada",
    "texto": "Reglamentación especial para el trámite de los Debates de Control Político por citación de una Bancada. Para el trámite de los debates en el Concejo en ejercicio de su función de control político, se observarán las siguientes reglas preferentes:\n1. Para promover citaciones o debates de control político, deberá haber por lo menos una bancada responsable de la citación, que tendrá derecho a designar uno o varios ponentes que intervendrán hasta por veinte (20) minutos. De igual forma, varias bancadas podrán agruparse como una sola para efectos de adelantar debates de control político. Con todo, la coadyuvancia de una bancada a otra no concederá a la coadyuvante los derechos de la bancada citante, de suerte que en esos eventos será menester determinar concretamente el nombre de la bancada citante.\n2. A continuación, la Administración Municipal dispondrá de un tiempo máximo de una hora que podrá distribuirse proporcionalmente entre el número de servidores públicos citados.\n3. Posteriormente se escucharán las posiciones del o de los voceros que para el respectivo debate designen las bancadas no citantes las cuales podrán extenderse máximo hasta por 20 minutos. Cuando la bancada represente al menos el veinte por ciento de las curules, el tiempo de intervención podrá ampliarse hasta por diez minutos más.\n4. A continuación, intervendrán los oradores debidamente inscritos, hasta por un periodo máximo de 10 minutos. La presidencia podrá modificar el tiempo de la intervención dependiendo del número de inscripciones programadas, pero en ningún caso las intervenciones podrán durar menos de 5 minutos.\n5. En ese punto, la Administración Municipal podrá intervenir nuevamente hasta por espacio de 10 minutos, que podrá prorrogarse por el mismo tiempo a juicio de la Presidencia.\n6. Finalmente, el vocero de la bancada citante y el de las no citantes, si a bien lo consideran, dispondrán de 10 minutos adicionales para rendir su informe de conclusiones y presentar proposiciones a consideración de la corporación.\n7. Realizado lo anterior la Presidencia dará por terminada la sesión de Control Político."
  },
  "23": {
    "numero": 23,
    "titulo": "Función Normativa",
    "texto": "Función Normativa. Cuando se traten de proyecto de acuerdo presentado por una bancada, se observarán las siguientes recomendaciones tendientes a la racionalización de las intervenciones en el uso de la palabra:\nPrimera: El ponente, o coordinador ponente, según sea el caso, que será designado por el partido, y actuará como su vocero, dispondrá de 20 minutos para que sustente su informe. En caso de ponencia dividida, la ponencia alternativa podrá exponerse por el mismo tiempo que la ponencia principal.\nSegunda: En el caso de ponencias colectivas, los demás ponentes podrán hacer uso de la palabra hasta por 20 minutos que se distribuirán entre ellos, procurando la intervención de todas las bancadas que tienen representación en la ponencia.\nTercera: Los voceros de los partidos, que no hayan intervenido como ponentes, podrán intervenir sin el requisito de inscripción previa, de conformidad con lo establecido en el inciso final del artículo 10 de la Ley de Bancadas, hasta por 10 minutos si su partido o movimiento agrupa hasta 4 concejales, y 20 minutos si al partido o movimiento le corresponde un número superior.\nCuarta: La Administración Municipal, en conjunto, podrá intervenir hasta por un tiempo de 25 minutos.\nQuinta: Los inscritos con la antelación debida, podrán hacer uso de la palabra hasta por 5 minutos.\nSexta: El ponente, o coordinador ponente, en el caso de las ponencias colectivas, podrá intervenir nuevamente para cerrar el debate, durante 10 minutos adicionales y formulará las proposiciones que se someterán a votación.\nNo obstante, en caso de que se presente la discusión separada del articulado, se abrirán las inscripciones, y los oradores podrán intervenir hasta por 5 minutos, a juicio de la Presidencia, según el número de inscritos."
  },
  "24": {
    "numero": 24,
    "titulo": "Estructura Orgánica Interna",
    "texto": "Estructura Orgánica Interna. En ejercicio de sus funciones normativas y de control político, el Concejo Municipal de EL Cerrito – Valle del Cauca, con sujeción a las disposiciones legales vigentes, determina la siguiente estructura orgánica:\n1. Plenaria del Concejo Municipal: Conformada por la totalidad de los Concejales de la Corporación, se encuentra facultada para la elección del órgano de dirección y de gobierno denominado Mesa Directiva. Igualmente, la plenaria de la Corporación elige al Secretario General y los integrantes de las Comisiones Permanentes.\n2. La Mesa Directiva del Concejo Municipal: Es el órgano de dirección y de gobierno. Estará integrada por los siguientes miembros elegidos por la Plenaria de la Corporación para periodos fijos institucionales de un (1) año: Un Presidente, un Primer Vicepresidente y un Segundo Vicepresidente. El periodo de la Mesa Directiva del Concejo va desde el primero (1) de enero hasta el treinta y uno (31) de diciembre del respectivo año.\n3. Comisiones Permanentes: Son aquellas que cumplen funciones especializadas y específicas de acuerdo con la materia conforme lo disponga la ley y el presente reglamento. Son integradas para un periodo de un año que va desde el primero (1) de enero hasta el treinta y uno (31) de diciembre del respectivo año."
  },
  "25": {
    "numero": 25,
    "titulo": "Sesión inaugural",
    "texto": "Sesión inaugural. En cumplimiento de lo estipulado en el artículo 8 del decreto 2796 de 1994, reglamentario del artículo 60 del Decreto-Ley 2626 del mismo año, los Concejos Distritales y Municipales, sin atender a su categoría, se instalarán el día dos (2) de enero correspondiente a la iniciación de su período constitucional y se ocupará exclusivamente de la elección de la Mesa Directiva y de los funcionarios que le corresponde. Para los efectos mencionados, el Concejo se reunirá máximo hasta el diez (10) de enero, fecha en la cual clausurará este tipo de sesiones.\nEstablecido al menos el quórum para deliberar, los miembros presentes se constituirán en junta preparatoria, la que será presidida por el concejal a quien corresponda el primer lugar por orden alfabético de apellidos. Si hubiere dos o más concejales cuyos apellidos los coloquen en igualdad de condiciones, se preferirá el orden alfabético en el nombre.\nActuará como secretario provisional hasta que se elija secretario en propiedad, el Secretario General del Concejo del período inmediatamente anterior, quien previamente a la sesión inaugural obtendrá de la autoridad electoral la lista de los Concejales electos, para su debida identificación; en ausencia de aquel, actuará como secretario ad hoc el Concejal designado por el presidente de la junta preparatoria sin que exista incompatibilidad para ejercer sus derechos a voz y voto.\nAsí las cosas, se dará inicio al proceso de acreditación de los Concejales electos, la cual se llevará a cabo primeramente ante el presidente de la junta preparatoria y con posterioridad ante el presidente elegido en propiedad. Los documentos que acreditan su condición de servidores públicos serán aquellos que de conformidad con la Ley 190 de 1995 se aporten y en consecuencia serán revisados por la comisión especial de acreditación documental que se designe por el presidente de la junta preparatoria para tal efecto.\nDe conformidad con el artículo primero (1) de la Ley 190 de 1995, los Concejales, antes de su posesión deberán presentar al presidente de la Junta preparatoria o a la comisión especial de acreditación documental los siguientes documentos:\na. Formato Único de Hoja de vida debidamente diligenciado.\nb. Certificado de antecedentes disciplinarios expedido por la Procuraduría General de la Nación.\nc. Certificado de Antecedentes Judiciales expedido por el órgano competente.\nd. Declaración de Bienes y Rentas.\ne. Declaración de Actividades Económicas Privadas.\nSi por cualquier razón el Concejal llamado a posesionarse no pudiere aportar los documentos anteriormente descritos, el presidente de la Junta Preparatoria podrá otorgar un plazo no superior a diez (10) días para que los aporte, previo compromiso escrito del Concejal.\nA continuación, todos los miembros presentes se pondrán de píe, para dar respuesta a la siguiente pregunta formulada por el presidente provisional: “¿Declaran los Honorables Concejales presentes, constitucionalmente instalado el Concejo Municipal y abiertas sus sesiones?”\nParágrafo 1º. Si por fuerza mayor o caso fortuito no se pudiese llevar a cabo la instalación en la fecha antes mencionada se hará tan pronto como fuere posible.\nParágrafo 2º. Será requisito para la posesión y para el desempeño del cargo la declaración bajo juramento del elegido, donde conste la identificación de sus bienes. Tal información deberá ser actualizada cada año y, en todo caso, al momento de su retiro."
  },
  "26": {
    "numero": 26,
    "titulo": "Posesión del Presidente y de los Concejales",
    "texto": "Posesión del Presidente y de los Concejales. Instalado el Concejo, el presidente provisional jurará ante los miembros presentes de la corporación, diciendo en voz alta las palabras siguientes: “Invocando la protección de Dios, juro ante esta Honorable Corporación defender la Constitución Política y las leyes de la República, y desempeñar fielmente los deberes del cargo”.\nActo seguido, el Presidente provisional tomará el juramento de rigor a los Concejales presentes, el que se entenderá prestado por todo el período constitucional; estos contestarán afirmativamente a la siguiente pregunta: “Invocando la Protección de Dios, ¿juráis defender la Constitución Política y las leyes de la República, y desempeñar fielmente los deberes del cargo?”\nSi hubiere quórum decisorio, la Corporación procederá a elegir presidente y vicepresidentes primero y segundo, en forma separada, los cuales conformarán la mesa directiva. Para ello se deberá seguir el procedimiento contemplado en el presente reglamento.\nEl presidente tomará posesión ante la corporación, y los vicepresidentes ante el presidente. Todos prestarán juramento en los siguientes términos: “Juro a Dios y prometo al pueblo, cumplir fielmente la Constitución, las leyes y el reglamento”.\nParágrafo 1. El Presidente del Concejo instalará y clausurará las sesiones ordinarias y extraordinarias del Concejo Municipal. En estas sesiones al dar inicio se entonará el Himno Nacional y el del Municipio.\nParágrafo 2. En las sesiones de instalación y clausura se podrán adelantar debates de control político y discusiones de proyectos de acuerdo, a excepción de la sesión inaugural del Concejo Municipal en el primer año del período constitucional.\nParágrafo 3. En caso de que sobrevenga al acto de posesión de un Concejal, alguna inhabilidad o incompatibilidad, el Concejal deberá advertirlo inmediatamente al Presidente del Concejo. Si dentro de los tres meses siguientes el Concejal no ha puesto final a la situación que dio origen a la inhabilidad o incompatibilidad, procederá su retiro inmediato, sin perjuicio de las sanciones a que haya lugar por ese hecho. El anterior parágrafo solo es aplicable únicamente bajo el entendido de que la inhabilidad o incompatibilidad sobrevinientes no se hayan generado por dolo o culpa imputables al Concejal. (Artículo 6, Ley 190 de 1995)\nParágrafo 4. Las sesiones especiales de instalación e inaugurales efectuadas el primer año del periodo constitucional en el mes de enero, no serán pagadas a los Concejales que hayan participado en ellas."
  },
  "27": {
    "numero": 27,
    "titulo": "Periodo de sesiones",
    "texto": "Periodo de sesiones. De conformidad con el artículo 23 de la Ley 136 de 1994, el Concejo sesionará ordinariamente durante los siguientes periodos legales:\na. Primer Periodo Legal: Del 1º de febrero hasta el último día calendario de este mes.\nb. Segundo Periodo Legal: Del 1º de mayo hasta el 31 de mayo.\nc. Tercer Periodo Legal: Del 1º de agosto hasta el 31 de agosto.\nd. Cuarto Periodo Legal: Del 1º de noviembre hasta el 31 de noviembre.\nEl Concejo sesionará en la cabecera municipal y en el recinto señalado oficialmente para tal efecto, por derecho propio, cuatro veces al año y máximo una vez por día. Si por cualquier causa el Concejo no pudiere reunirse ordinariamente en las fechas indicadas, lo hará tan pronto como fuere posible, dentro del período correspondiente.\nParágrafo 1. Prórroga. Cada período ordinario podrá ser prorrogado por diez (10) días calendario más, a voluntad del Concejo. La proposición respectiva será aprobada en sesión plenaria e incorporada a resolución por la mesa directiva.\nParágrafo 2. Sesiones extraordinarias. El alcalde municipal podrá convocar al Concejo a sesiones extraordinarias en oportunidades que no coincidan con los períodos ordinarios de sesiones o con las prórrogas previamente aprobadas, para que se ocupe exclusivamente de los asuntos que se sometan a su consideración. En caso de que se hubiere clausurado el periodo de sesiones antes del último día del mes correspondiente y se requiera que el Concejo sesione formalmente, deberá convocarse a sesiones extraordinarias."
  },
  "28": {
    "numero": 28,
    "titulo": "Actas",
    "texto": "Actas. De toda sesión plenaria y de comisión permanente del Concejo se levantará un acta. En ella, se hará constar los nombres de los asistentes y también de los ausentes, así como las excusas presentadas, transcritas en forma textual; contendrá además una relación sucinta de los temas debatidos, las personas que han intervenido, los mensajes leídos, las proposiciones presentadas, las comisiones designadas y las decisiones adoptadas.\nAbierta la Sesión, el Presidente someterá a discusión y aprobación, previa lectura si los miembros de la Corporación lo consideran necesario, el Acta de la sesión anterior. No obstante, el Acta debe ser puesta previamente en conocimiento de los miembros de la Corporación, bien por su publicación en la Gaceta del Concejo, o bien mediante el medio que disponga el municipio para estos efectos. Toda constancia será presentada por escrito a la secretaría para su inserción en el acta siguiente.\nParágrafo. Cuando por circunstancias de tiempo en la transcripción no sea posible someter a consideración y aprobación el acta de la sesión anterior, esta deberá ser aprobada en cualquiera de las sesiones siguientes antes de que finalice el periodo legal de sesiones."
  },
  "29": {
    "numero": 29,
    "titulo": "Publicidad",
    "texto": "Publicidad. El Concejo debe implementar los medios necesarios para mantener informada a la población de sus actividades, para lo cual procurará habilitar sistemas electrónicos de archivo y transmisión de datos. En todo caso, tendrá un órgano o medio oficial escrito de publicidad de sus actos, denominado “Gaceta del Concejo”, cuyo director será el secretario de la corporación y a falta de éste quien la mesa directiva de la Corporación delegue para tal efecto.\nPara dar cumplimiento a la obligación dispuesta en el artículo 27 de la ley 1551 de 2012, los Concejos deberán publicar sus actos a través del medio que consideren oportuno, siempre y cuando ellos garanticen la efectividad de su difusión a la comunidad."
  },
  "30": {
    "numero": 30,
    "titulo": "Funciones y Atribuciones del Concejo pleno",
    "texto": "Funciones y Atribuciones del Concejo pleno. El Concejo ejercerá las atribuciones previstas en las disposiciones normativas contenidas en los artículos 313 de la Constitución Política de 1991, 32 de la ley 136 de 1994, 18 de la Ley 1551 de 2012, en las demás normas jurídicas pertinentes con sujeción al Sistema de Bancadas vigentes y todo el ordenamiento jurídico colombiano. Así las cosas, sus funciones concretas serán:\n\n1. Son funciones Constitucionales del Concejo (Art. 313 Constitución Política):\n1.1. Reglamentar las funciones y la eficiente prestación de los servicios a cargo del Municipio.\n1.2. Adoptar los correspondientes planes y programas de desarrollo económico y social de obras públicas. (Ley 152 de 1994)\n1.3. Autorizar al Alcalde para celebrar contratos y ejercer pro-témpore precisas funciones de las que corresponden al Concejo.\n1.4. Votar de conformidad con la Constitución y la Ley los tributos y los gastos locales.\n1.5. Dictar las normas orgánicas del presupuesto y expedir anualmente el presupuesto de Rentas y Gastos. (Decreto Ley 111 de 1996)\n1.6. Determinar la estructura de la Administración Municipal y las funciones de sus dependencias; las escalas de remuneración correspondientes a las distintas categorías de empleos; crear a iniciativa del Alcalde, establecimientos públicos y empresas industriales o comerciales y autorizar la constitución de Sociedades de Economía Mixta.\n1.7. Reglamentar los usos del suelo y, dentro de los límites que fije la ley, vigilar y controlar las actividades relacionadas con la construcción y enajenación de inmuebles destinados a vivienda. (Leyes 9ª de 1989, 152 de 1994 y 388 de 1997)\n1.8. Elegir Personero y Contralor Municipal, y posesionarlos. (C.N. Arts. 313 Nral. 8 y 272 inciso 3°; Ley 136 de 1994 Arts. 160 y 171, Ley 1551 de 2012 Art 35 Inciso 5: “En caso de falta absoluta del personero municipal o distrital, el respectivo Concejo designará como tal a la persona que siga en lista, y si no hubiere lista para hacerlo, designará un personero encargado, quien desempeñará el cargo hasta tanto se realice el concurso de méritos correspondiente”, de acuerdo a los lineamientos de la Sentencia C-105 de 2013, en la cual se establece que el Concejo deberá estructurar un reglamento que rija el concurso de méritos, para la escogencia del Personero Municipal. Se debe tener en cuenta además el Decreto 1083 de 2015.\n1.9. Dictar las normas necesarias para el Control, la preservación y defensa del patrimonio ecológico y cultural del Municipio. (Leyes 9ª de 1989, 152 de 1994, 388 de 1997 y 99 de 1993)\n1.10. Las demás que la Constitución y la ley le asignen.\n1.11. En las capitales de los departamentos y los municipios con población mayor de veinticinco mil habitantes, citar y requerir a los secretarios del despacho del alcalde para que concurran a las sesiones. Las citaciones deberán hacerse con una anticipación no menor de cinco (5) días y formularse en cuestionario escrito. En caso de que los Secretarios no concurran, sin excusa aceptada por el Concejo Distrital o Municipal, este podrá proponer moción de censura. Los Secretarios deberán ser oídos en la sesión para la cual fueron citados, sin perjuicio de que el debate continúe en las sesiones posteriores por decisión del concejo. El debate no podrá extenderse a asuntos ajenos al cuestionario y deberá encabezar el orden del día de la sesión.\n1.12. Los concejos de los demás municipios, podrán citar y requerir a los Secretarios del Despacho del Alcalde para que concurran a las sesiones. Las citaciones deberán hacerse con una anticipación no menor de cinco (5) días y formularse en cuestionario escrito. En caso de que los Secretarios no concurran, sin excusa aceptada por el Concejo Distrital o Municipal, cualquiera de sus miembros podrá proponer moción de observaciones que no conlleva al retiro del funcionario correspondiente. Su aprobación requerirá el voto afirmativo de las dos terceras partes de los miembros que integran la corporación.\n1.13. Proponer moción de censura respecto de los Secretarios del Despacho del Alcalde por asuntos relacionados con funciones propias del cargo o por desatención a los requerimientos y citaciones del Concejo Distrital o Municipal. La moción de censura deberá ser propuesta por la mitad más uno de los miembros que componen el Concejo Distrital o Municipal. La votación se hará entre el tercero y el décimo día siguientes a la terminación del debate, con audiencia pública del funcionario respectivo. Su aprobación requerirá el voto afirmativo de las dos terceras partes de los miembros que integran la Corporación. Una vez aprobada, el funcionario quedará separado de su cargo. Si fuere rechazada, no podrá presentarse otra sobre la misma materia a menos que la motiven hechos nuevos. La renuncia del funcionario respecto del cual se haya promovido moción de censura no obsta para que la misma sea aprobada conforme a lo previsto en este artículo.\n1.14. Aceptar la renuncia de los Concejales, cuando la Corporación se encuentre sesionando. En receso, dicha atribución le corresponde al Alcalde. (Acto legislativo Nº 03 de 1993 Art. 2 y ley 136 de 1994 Art. 53 y 91 literal A-8; Ley 1551 de 2012 Art. 29 literal A núm. 8º)\n\n2. Son atribuciones legales del concejo:\n2.1. Disponer lo referente a la Policía y sus diferentes ramas, sin contravenir la Constitución, las Leyes y las Ordenanzas, ni los Decretos del Gobierno Nacional o del Gobernador.\n2.2. Exigir los informes escritos o citar a los Secretarios de la Alcaldía, Directores de Departamentos Administrativos o Entidades Descentralizadas Municipales, al Contralor o al Personero, así como a cualquier funcionario Municipal, excepto al Alcalde, para que en sesión ordinaria haga declaraciones orales sobre asuntos relacionados con la marcha del Municipio. Igualmente, los concejos municipales podrán invitar a los diferentes funcionarios del Orden Departamental, así como a los representantes legales de los organismos descentralizados y de los establecimientos públicos del orden nacional, con sedes en el respectivo departamento o municipio, en relación con temas de interés local.\n2.3. Reglamentar la autorización al Alcalde para contratar, señalando los casos en los que requiere autorización previa del Concejo.\n2.4. Autorizar al Alcalde para delegar en sus subalternos o en las Juntas Administradoras Locales, algunas funciones administrativas diferentes a las consagradas en la Ley 136 de 1994.\n2.5. Determinar la nomenclatura de las vías públicas y de los predios o domicilios.\n2.6. Establecer, reformar o eliminar tributos, contribuciones, impuestos y sobretasas, de conformidad con la Ley, exceptuando los gravámenes sobre las rentas provenientes de las exportaciones. (Literal b, numeral 2, artículo 259 del Decreto Ley 1333 de 1986)\n2.7. Velar por la preservación y defensa del patrimonio cultural. (Ley 136 de 1994, Ley 152 de 1994 y Ley 388 de 1997)\n2.8. Organizar la Contraloría y la Personería y dictar las normas necesarias para su funcionamiento. (Numeral 11 del artículo 178, los artículos 156 y 159 de la Ley 136 de 1994; los artículos 23 y 24 de la Ley 136 de 1994)\n2.9. Dictar las normas orgánicas de presupuesto y expedir anualmente el Presupuesto de Rentas y Gastos, el cual deberá corresponder al Plan Municipal de Desarrollo, de conformidad con las normas orgánicas de Planeación (Ley 152 de 1994 y Decreto Ley 111 de 1996).\n2.10. Fijar un rubro destinado a la capacitación del personal que presta su servicio en la administración municipal.\n2.11. Garantizar el fortalecimiento de la democracia participativa y de los organismos de acción comunal.\n2.12. Citar a control especial a los Representantes Legales de las empresas de servicios públicos domiciliarios, sean públicas o privadas, para que absuelvan inquietudes sobre la prestación de servicios públicos domiciliarios en el respectivo Municipio o Distrito. La empresa de servicios públicos domiciliarios cuyo representante legal no atienda las solicitudes o citaciones del control especial emanadas de los Concejos Municipales o Distritales, será sujeto de investigación por parte de la Superintendencia de los Servicios Públicos Domiciliarios. Esta adelantará de oficio o por petición de la corporación respectiva, una investigación administrativa e impondrá las sanciones procedentes establecidas por la ley. Lo anterior sin perjuicio de las demás acciones legales o Constitucionales procedentes.\n2.13. A iniciativa del Alcalde, establecer la forma y los medios como el Municipio puede otorgar los beneficios establecidos en el inciso final de los Artículos 13, 46 y 368 de la Constitución Política.\n2.14. Ejercer las funciones normativas del Municipio para las cuales no se haya señalado si la competencia corresponde a los Alcaldes o Concejos, y que, de acuerdo con la Ley, se entiendan asignadas a esta Corporación, siempre y cuando no contraríen la Constitución y la Ley. (Parágrafo 2° art. 32 Ley 136 de 1994)\n2.15. De conformidad con el numeral 30 del artículo 313 de la Constitución Política, el Concejo Municipal o Distrital deberá decidir sobre la autorización al alcalde para contratar en los siguientes casos:\n   1. Contratación de empréstitos.\n   2. Contratos que comprometan vigencias futuras.\n   3. Enajenación y compraventa de bienes inmuebles.\n   4. Enajenación de activos, acciones y cuotas partes.\n   5. Concesiones.\n   6. Las demás que determine la ley.\n2.16. Elegir la mesa directiva compuesta de un presidente y dos vicepresidentes, en forma separada y para un período de un (1) año.\n2.17. Elegir Secretario General del Concejo.\n2.18. Durante los períodos de sesiones, autorizar al Alcalde para salir del país, previo informe de la comisión que va a cumplir. (Art. 112, Ley 136 de 1994; Art. 7 Ley 177 de 1994)\n2.19. Fijar los viáticos del Alcalde para comisiones dentro del país. (Art. 112, Ley 136 de 1994)\n2.20. Aceptar la renuncia del Presidente del Concejo, de los Concejales, del Secretario General de la Corporación (Art. 2° inciso 2 Acto Legislativo Nro. 3 de 1993; Art. 53 y 161 Ley 136 de 1994)\n2.21. Resolver la apelación de los proyectos de acuerdo rechazados por falta de unidad de materia y las reconsideraciones de los proyectos de acuerdo negados o archivados en Primer Debate. (Art. 72 y 73 Ley 136 de 1994)\n2.22. A iniciativa del Alcalde crear Fondos de Solidaridad y Redistribución de Ingresos destinados a subsidiar a los usuarios de los estratos 1, 2 y 3 (ley 142 de 1994 y 632 de 2000).\n2.23. Hacer seguimiento a la ejecución de los Acuerdos vigentes y solicitar a la Administración su cumplimiento mediante una Comisión Accidental Especial.\n2.24. Las demás que se les haya atribuido por normas legales vigentes."
  },
  "31": {
    "numero": 31,
    "titulo": "Delegación de competencias",
    "texto": "Delegación de competencias.\na) El Concejo Municipal podrá llevar a cabo procesos de concertación con la comunidad para impulsar la creación de la política pública de Presupuestos Participativos en el Municipio.\nb) El Concejo podrá delegar alguna o algunas de sus funciones en el alcalde, sobre materia precisa y por tiempo determinado, confiriéndole mediante acuerdo municipal las respectivas facultades y/o autorizaciones extraordinarias, cuando la necesidad lo exija o la conveniencia pública lo aconseje.\nEn todo caso, en cualquier evento de delegación, habrán de cumplirse las reglas que sobre el particular establece la ley 489 de 1998 y todas aquellas otras que la modifiquen o complementen."
  },
  "32": {
    "numero": 32,
    "titulo": "Prohibiciones",
    "texto": "Prohibiciones. Conforme a lo preceptuado por el artículo 41 de la ley 136 de 1994, le es prohibido al Concejo:\n1. Obligar a los habitantes, sean domiciliados o transeúntes, a contribuir con dineros o servicios para fiestas o regocijos públicos.\n2. Aplicar o destinar los bienes y rentas municipales a objetos distintos del servicio público.\n3. Intervenir en asuntos que no sean de su competencia, por medio de acuerdos o de resoluciones.\n4. Dar votos de aplauso o de censura a actos oficiales. Con todo, la corporación podrá pedir la revocación de los que estime ilegales o inconvenientes, exponiendo los motivos en que se funde.\n5. Privar a los vecinos de otros municipios de los derechos, garantías o protección de que disfruten los de su propio municipio.\n6. Decretar actos de proscripción o persecución contra personas naturales o jurídicas.\n7. Decretar auxilios o donaciones a favor de personas naturales o jurídicas de derecho privado.\n8. Tomar parte en el trámite o decisión de asuntos que no son de su competencia.\n9. Adscribirse al interior de una Bancada diferente a la del partido o movimiento político por el cual fue elegido.\n10. Omitir las directrices de actuación que coordinadamente determinen los miembros de la Bancada a la cual pertenece, salvo en lo relacionado con los asuntos determinados como de conciencia en los Estatutos del partido o movimiento político al cual pertenece.\n11. De conformidad con el artículo 291 de la Constitución Política, los Concejales no podrán aceptar cargo alguno en la administración pública, y si lo hicieren perderán su investidura."
  },
  "33": {
    "numero": 33,
    "titulo": "Presidencia y Vicepresidencias",
    "texto": "Presidencia y Vicepresidencias. En cumplimiento de lo estipulado en el artículo 28 de la ley 136 de 1994, el Concejo Municipal tendrá un presidente y dos vicepresidentes quienes en Conjunto integran la Mesa Directiva, cuyas funciones se enuncian en los artículos subsiguientes. Los integrantes de la mesa directiva del Concejo ostentan una dignidad que en ningún caso es asimilable a un nuevo cargo o empleo público y su periodo será de un año institucional del primero (1) de enero al treinta y uno (31) de diciembre del respectivo año independientemente del día de su posesión. Toda situación atípica frente a su elección o investidura como Presidente o Vicepresidente, se entenderá que se hará por el resto del periodo legal respectivo."
  },
  "34": {
    "numero": 34,
    "titulo": "Elección del Presidente",
    "texto": "Elección del Presidente. Será Presidente de la Corporación, el Concejal que obtenga la mayoría simple de los votos de los Concejales asistentes a la sesión Plenaria que conformen quórum decisorio. En un eventual empate entre dos o más candidatos, se repetirá la votación hasta por tres veces y de persistir el empate se procederá a dirimirlo por sorteo o suerte entre los candidatos empatados en la misma sesión. El Presidente que esté ejerciendo establecerá el mecanismo de dicho sorteo o suerte.\nParágrafo 1. Los aspirantes al cargo de Presidente, deberán presentar ante la plenaria de la Corporación su programa de acción anual de conformidad con la norma técnica de calidad en la gestión pública.\nParágrafo 2. El procedimiento señalado para elección de Presidente será el mismo para elegir al Primer y Segundo Vicepresidente. Así mismo, se deberán tener en cuenta las disposiciones detalladas en el artículo 88 del presente reglamento.\nParágrafo 3. No podrá ser Presidente del Concejo quien haya pertenecido a la Mesa Directiva el año inmediatamente anterior así fuere parcialmente."
  },
  "35": {
    "numero": 35,
    "titulo": "Posesión del Presidente",
    "texto": "Posesión del Presidente. El Presidente electo de la Mesa Directiva del Concejo Municipal se posesionará ante quien se encuentre actuando como tal, jurando cumplir fiel y cabalmente con las funciones propias de Presidente dentro del marco de la Constitución, las Leyes y los Acuerdos Municipales, con la dignidad y el decoro que su investidura exige, de conformidad con los parámetros estipulados en el presente reglamento.\nParágrafo único. En el primer año del periodo constitucional, tratándose de la posesión del presidente del Concejo, se procederá de conformidad con el artículo 25 del presente reglamento."
  },
  "36": {
    "numero": 36,
    "titulo": "Funciones del presidente del Concejo",
    "texto": "Funciones del presidente del Concejo. Son funciones del presidente del Concejo:\n1. Convocar, presidir y dirigir las sesiones del Concejo en pleno.\n2. Liderar la representación política del Concejo Municipal.\n3. Cuidar que los Concejales concurran puntualmente a las sesiones, requiriendo con apremio si fuere el caso, la presencia de los ausentes que no estén legalmente excusados, y mantener el orden interno.\n4. Cumplir y hacer cumplir el reglamento, y decidir las cuestiones o dudas que se presenten sobre la aplicación del mismo. Contra esta decisión, cualquier Concejal puede apelar ante la Plenaria y ésta adoptar otra posición.\n5. Disponer el reparto de los proyectos de acuerdo presentados, ordenar su debido trámite y en el momento oportuno, designar ponente y coordinador de ponentes cuando fueren dos o más los designados para un mismo proyecto de acuerdo.\n6. Rechazar las iniciativas que no se avengan con el principio de unidad de materia, respecto de todo proyecto de acuerdo, pero sus decisiones serán apelables ante la plenaria de la corporación.\n7. Suscribir los proyectos de acuerdo aprobados en las comisiones permanentes y en las plenarias, así como someter a discusión y firmar las respectivas actas.\n8. Sancionar y publicar los proyectos de acuerdo cuando la plenaria rechazare las objeciones por inconveniencia presentadas por el alcalde, y éste no los sancionare dentro del término legal de ocho (8) días.\n9. Llevar la debida representación de la corporación, y fomentar las buenas relaciones interinstitucionales.\n10. Designar las comisiones accidentales que demande la corporación, sus integrantes y coordinador.\n11. Dar curso, fuera de la sesión, a las comunicaciones y demás documentos o mensajes recibidos.\n12. Nombrar y remover los empleados de la Corporación que sean de libre nombramiento y remoción.\n13. Cuidar que el secretario y los demás empleados de la corporación cumplan debidamente sus funciones y deberes.\n14. Disponer las medidas conducentes para hacer efectiva la suspensión provisional de la elección de un Concejal, destitución o toda aquella, dispuesta por la jurisdicción contencioso-administrativa, o la suspensión provisional del desempeño de funciones dentro de un proceso disciplinario o penal.\n15. Tomar las medidas conducentes para hacer efectiva la decisión de la autoridad judicial competente en relación con la declaratoria de nulidad de la elección de un Concejal o la declaratoria de interdicción.\n16. Aceptar la renuncia que, voluntariamente, sea presentada por un Concejal con indicación de la fecha a partir de la cual se quiere hacer. Si el Concejo se encuentra en receso la aceptación de la renuncia de los Concejales es función del alcalde.\n17. Dar posesión al Concejal que entre a reemplazar a otro, así como al secretario, y a los subalternos si los hubiere.\n18. Declarar la vacancia absoluta de los Concejales y llamar al candidato que según el artículo 134 de la Constitución deba llenar una vacancia absoluta, dentro de los tres (3) días hábiles siguientes a la declaratoria, para que tome posesión del cargo vacante que corresponde.\n19. Hacer efectivas las sanciones impuestas por los órganos de control fiscal y administrativo competentes, respecto de concejales y empleados de la corporación.\n20. Presidir la mesa directiva y las sesiones plenarias ordinarias y extraordinarias.\n21. Actuar como ordenador de gasto en relación con el presupuesto de la corporación contenido en el Presupuesto General del Municipio, con sujeción a la ley orgánica del presupuesto y a la reglamentación de la mesa directiva en tratándose de pago a concejales.\n22. Celebrar a nombre de la corporación los contratos legalmente autorizados, con observancia de las normas contenidas en el Estatuto General de Contratación de la Administración Pública.\n23. Decidir por fuera de la sesión plenaria el curso que debe darse a las comunicaciones y demás documentos que se reciban.\n24. Solicitar a las entidades públicas o privadas en nombre del Concejo Municipal los documentos e informes que se requieran para el cumplimiento de las funciones que corresponde a su cargo.\n25. Formular ante las autoridades competentes las consultas que juzgue pertinentes para la buena marcha de la Corporación.\n26. Vigilar el funcionamiento del Concejo Municipal en todos los órdenes y coordinar con el Comandante de la Policía, la seguridad al interior del Concejo.\n27. Coordinar con la Alcaldía Municipal la oportuna y suficiente dotación de los elementos de trabajo para el adecuado funcionamiento de la Corporación.\n28. Resolver los derechos de petición que se presenten ante la Corporación, así como los que se dirijan ante los Concejales y hagan referencia exclusivamente a actuaciones o decisiones tomadas por el Concejo.\n29. Presentar, al término de su gestión, un informe sobre la labor cumplida.\n30. Representar al Concejo Municipal ante la Federación Nacional de Concejos, FENACON, en los seminarios, reuniones, congresos, proyectos y demás, pudiendo delegar esta función en otro concejal.\n31. Fomentar las buenas relaciones de la Corporación con el gobierno y con los demás Concejos del país.\n32. Requerir a las comisiones para que presenten sus informes dentro de los términos legales o en el que se les haya fijado.\n33. Las demás dispuestas por la Constitución y la ley."
  },
  "37": {
    "numero": 37,
    "titulo": "Faltas Absolutas o Temporales del Presidente",
    "texto": "Faltas Absolutas o Temporales del Presidente. Las faltas absolutas del presidente del Concejo determinarán la celebración de una nueva elección por el resto del período, en tanto que las faltas temporales serán suplidas por el Primer Vicepresidente y si no fuere posible por el Segundo Vicepresidente.\nCuando se presente falta absoluta del Presidente del Concejo y mientras se surte el proceso de elección del nuevo presidente, asumirá las funciones de presidente de manera provisional el primer vicepresidente y en su ausencia lo hará el Segundo Vicepresidente.\nA falta del Presidente, del Primer Vicepresidente y Segundo Vicepresidente, para presidir una sesión plenaria, deberá nombrarse un Presidente ad hoc."
  },
  "38": {
    "numero": 38,
    "titulo": "Recurso en vía Gubernativa",
    "texto": "Recurso en vía Gubernativa. Las decisiones del Presidente del Concejo en materia política, son apelables ante la Plenaria de la Corporación."
  },
  "39": {
    "numero": 39,
    "titulo": "Funciones de los vicepresidentes del Concejo",
    "texto": "Funciones de los vicepresidentes del Concejo. Las funciones de los vicepresidentes primero y segundo consisten en formar parte de la mesa directiva y, en su orden, reemplazar al presidente en sus faltas temporales, pues las absolutas se suplen con una nueva elección, para el resto del período. Desempeñan, además, otras funciones que les encomiende el presidente o la plenaria de la corporación, siempre que sean legales y ajustadas al presente reglamento.\nLlevar a cabo las funciones de control interno cuando no exista el comité del mismo dentro de la corporación.\n1. Son funciones del Primer Vicepresidente:\n1.1. Suplir al Presidente en sus ausencias temporales o accidentales.\n1.2. Asumir las funciones de Presidente Provisional cuando exista falta absoluta del presidente mientras se surte la nueva elección.\n1.3. Coordinar con los Presidentes de las Comisiones las reuniones, invitaciones o citaciones que se vayan a realizar en una Comisión.\n1.4. Organizar, en coordinación con el Presidente del Concejo, todo evento que promueva de manera positiva la imagen del Concejo.\n1.5. Realizar la revisión y supervisión de los procesos contractuales que se adelanten en la Corporación, verificando el cumplimiento de los requisitos de ley.\n1.6. Revisar y aprobar el contenido de la Gaceta del Concejo antes de ser publicada (cuando a ello hubiere lugar).\n1.7. Suscribir las decisiones más importantes o relevantes, que se tomen en el Concejo Municipal distintas a las adoptadas por acuerdo municipal. Se exceptúa la suscripción de los contratos.\n2. Son funciones del Segundo Vicepresidente:\n2.1. Suplir al Presidente o al Vicepresidente Primero en las ausencias temporales o accidentales.\n2.2. Asumir las funciones de Presidente Provisional cuando exista falta absoluta del presidente mientras se surte la nueva elección y hay ausencia del primer vicepresidente.\n2.3. Evaluar el Plan de Trabajo de la Secretaría General del Concejo y verificar que todas las actas de un periodo de sesiones se encuentren aprobadas por la plenaria.\n2.4. Darle inducción a los Concejales que lleguen por primera vez a la Corporación.\n2.5. Integrar, por derecho propio, las comisiones especiales de ética y de estudio de hojas de vida que conforme el Presidente de la Corporación.\n2.6. Suscribir las decisiones más importantes o relevantes, que se tomen en el Concejo Municipal distintas a las adoptadas por acuerdo municipal. Se exceptúa la suscripción de contratos."
  },
  "40": {
    "numero": 40,
    "titulo": "De la Mesa Directiva",
    "texto": "De la Mesa Directiva. La Plenaria del Concejo Municipal integrará y elegirá para un período institucional de un (1) año la Mesa Directiva del Concejo Municipal y de las Comisiones Permanentes.\nEn la conformación de la Mesa Directiva tendrá participación las bancadas de los partidos o movimientos políticos. Ningún partido podrá tener más de un integrante en la Mesa Directiva del Concejo salvo que no exista otro candidato habilitado para ocupar la dignidad correspondiente o quien tenga derecho a ocuparla renuncie expresamente a él. De la renuncia de un partido o de un Concejal habilitado para ocupar la Mesa Directiva se dejará constancia escrita o en el acta de la respectiva sesión.\nEn todo caso, de conformidad con el Estatuto de Oposición, el partido o movimiento político que se declare en oposición al gobierno municipal, tendrá participación en la mesa directiva de acuerdo a las reglas establecidas en el artículo 148 de este reglamento.\nParágrafo 1. Ningún concejal podrá ser reelegido en dos períodos consecutivos en la respectiva mesa directiva.\nParágrafo 2. La Mesa Directiva de la Corporación será la encargada de definir la agenda general del Concejo Municipal, la cual ha de ser concertada con los Coordinadores, jefes o voceros de las Bancadas con presencia en la Corporación.\nParágrafo 3. Constituye causal de mala conducta la no aceptación de una dignidad de la Mesa Directiva por un Concejal que sea el único habilitado para ocuparla, siempre que no medie alguna circunstancia de fuerza mayor o caso fortuito aceptada por la Plenaria. De esta situación se pondrá en conocimiento por parte de la Mesa Directiva a la autoridad disciplinaria correspondiente para los fines pertinentes.\nParágrafo 4. Cuando por cualquier circunstancia no sea posible ocupar en propiedad una de las dignidades que conforman la Mesa Directiva, le corresponderá, de manera Ad hoc, asumir esa dignidad al Concejal que según orden alfabético de apellido este de primero. Si el Concejal ya hace parte de la Mesa Directiva o no se encuentra presente en la correspondiente sesión, se continuará con el que sigue. El nombramiento Ad hoc de un Concejal en la Mesa Directiva no lo inhabilita para integrarla en el año siguiente."
  },
  "41": {
    "numero": 41,
    "titulo": "Funciones de la Mesa Directiva",
    "texto": "Funciones de la Mesa Directiva. Como órgano de orientación y dirección del Concejo, le corresponde:\n1. Elaborar el Plan de Acción que ha de regir para el año de su ejercicio, lo anterior, de conformidad con el Modelo Integrado de Planeación y Gestión – MIPG.\n2. Integrar las Comisiones Accidentales para dar primer debate a los proyectos de acuerdo, cuando no se hubieren conformado las comisiones permanentes o cuando no exista competencia a alguna de ellas.\n3. Adoptar las decisiones y medidas necesarias y procedentes para una mejor organización interna, en orden a una eficiente labor administrativa.\n4. Elaborar el proyecto de presupuesto anual del Concejo, y enviarlo al alcalde para su consideración en el proyecto de acuerdo definitivo sobre Presupuesto (rentas y gastos del municipio).\n5. Controlar la ejecución del presupuesto anual del Concejo; y ejercer el control interno, el cual estará en cabeza de alguna de las dos vicepresidencias. Sin que ello implique que no se pueda conformar un comité de control interno o lo ejerza algún Concejal más.\n6. Vigilar el funcionamiento de las comisiones y velar por el cumplimiento oportuno de las actividades encomendadas.\n7. Solicitar al tribunal administrativo departamental la declaratoria de pérdida de la investidura de Concejal, en los términos del parágrafo segundo del artículo 48 de la ley 617 de 2000.\n8. Autorizar comisiones oficiales de Concejales fuera de la sede del Concejo, siempre que no impliquen utilización de recursos del presupuesto de la Corporación.\n9. Expedir mociones de duelo y de reconocimiento cuando sean conducentes.\n10. Autorizar la asistencia de los Concejales a los seminarios de Capacitación con cargo al rubro de capacitación del presupuesto del Concejo en los términos del Concepto 908A del Consejo de Estado.\n11. Aceptar la renuncia; conceder licencias, vacaciones y permisos al personero, con fundamento en la atribución conferida en el inciso final del artículo 172 de la ley 136 de 1994.\n12. Dictar las resoluciones para el efecto de reconocimiento de honorarios a los Concejales que por su asistencia comprobada a las sesiones plenarias que tengan derecho, y ordenar su publicación en el medio oficial de información del Concejo (art. 65, inciso final, de la ley 136 de 1994).\n13. Suscribir, junto con el secretario de la corporación, las resoluciones y proposiciones.\n14. Regular el número de las comisiones permanentes y los asuntos de que conocerán.\n15. Remitir al alcalde para su sanción, los proyectos de acuerdo que hayan sido aprobados por el Concejo en los dos debates reglamentarios.\n16. Recibir la renuncia del presidente de la corporación y someterla a consideración de la plenaria.\n17. Garantizar que las bancadas con presencia en el Concejo, sesionen por lo menos una vez al mes en el lugar determinado por aquellas. Lo anterior teniendo en cuenta los Estatutos de cada partido.\n18. Determinar, previa votación de un proyecto de acuerdo, la celebración de sesiones de las bancadas con presencia en el Concejo con el objeto de que aquellas determinen el alcance de sus votos para dotar de un mayor grado de eficiencia el proceso de votación.\n19. Darles cumplimiento a las sanciones disciplinarias impuestas por los Partidos y Movimientos Políticos a los Concejales de las Bancadas con presencia en la Corporación.\n20. Acreditar a los voceros de las Bancadas para efectos de determinar las intervenciones de estas, en las sesiones en las que se voten Proyectos de Acuerdo o se adelante proceso de control político según las reglas de procedimiento determinadas precedentemente.\n21. Garantizar que en cada Comisión permanente tenga presencia al menos un miembro de las diferentes Bancadas que tenga presencia en la Corporación, cuando existan suficientes integrantes en la misma.\n22. Las demás establecidas en la ley o en el presente reglamento.\nParágrafo único. Durante los períodos de sesiones, la mesa directiva se reunirá por lo menos una vez a la semana, el día y hora que sea convocada por su presidente. Sus decisiones se tomarán por mayoría y de cada reunión deberá quedar constancia en acta."
  },
  "42": {
    "numero": 42,
    "titulo": "Comité de Coordinación Política",
    "texto": "Comité de Coordinación Política. Conformado por el Presidente de la corporación y los Jefes, Voceros o Coordinadores de las Bancadas y presidido por el primero de los nombrados, se reunirá por lo menos una vez a la semana durante cada periodo de sesiones, para el desarrollo de las siguientes funciones:\n1. Proponer la agenda de trabajo de la corporación.\n2. Coordinar con la presidencia el orden del día de las sesiones plenarias a celebrar.\n3. Promover y ejecutar acciones de concertación política."
  },
  "43": {
    "numero": 43,
    "titulo": "Deberes",
    "texto": "Deberes. Como todo servidor público, el concejal tiene el deber de cumplir y hacer que se cumplan los deberes contenidos en la Constitución, los tratados de Derecho Internacional Humanitario, los demás ratificados por el Congreso, las leyes, los decretos, las ordenanzas, los acuerdos distritales y municipales, los reglamentos y los manuales de funciones, las decisiones judiciales y disciplinarias, los contratos de trabajo y las órdenes superiores emitidas por funcionario competente, siendo responsable por su infracción y por omisión o extralimitación en el ejercicio de sus funciones.\nEspecialmente tendrá los siguientes deberes:\n1. Asistir puntualmente a las sesiones del Concejo en pleno y de las comisiones a que pertenezca.\n2. Respetar el presente reglamento.\n3. Guardar secreto sobre los asuntos que demanden reserva.\n4. Abstenerse de invocar su condición de Concejal para la obtención de algún provecho personal indebido.\n5. Utilizar adecuadamente los bienes y recursos asignados para el desempeño de su función.\n6. Tratar con respeto, imparcialidad y rectitud a las personas con que tenga relación por razón del servicio.\n7. Ejercer sus funciones consultando permanentemente los intereses del bien común, y teniendo siempre presente que los servicios que presta constituyen el reconocimiento y efectividad de un derecho y buscan la satisfacción de las necesidades generales de todos los ciudadanos.\n8. Abstenerse de incurrir en alguna de las causales de pérdida de la investidura, previstas en el artículo 48 de la ley 617 de 2000.\n9. Declarar, bajo juramento, el monto de sus bienes y rentas, antes de tomar posesión del cargo y al retirarse del mismo.\n10. Poner en conocimiento de la corporación o de la comisión de ética las situaciones de carácter moral o económico que lo inhiban para participar en el trámite de los asuntos sometidos a su consideración, conforme al artículo 70 de la ley 136 de 1994, así como las incompatibilidades en que pueda estar incurso. El Concejal deberá consignar la información sobre su actividad económica privada en el libro correspondiente, que tiene carácter público.\n11. Actuar exclusivamente en la bancada del Partido o Movimiento Político por el cual fue elegido y con sujeción a los parámetros de actuación que determinen aquellas y sus estatutos, salvo en los asuntos determinados como de conciencia.\n12. Custodiar y cuidar la documentación e información que por razón de su cargo o función conserve bajo su cuidado o a la cual tenga acceso, e impedir o evitar la sustracción, destrucción, ocultamiento o utilización indebida.\n13. Tratar con respeto, imparcialidad y rectitud a las personas con que tenga relación por razón del servicio.\n14. Desempeñar el cargo o función sin obtener o pretender beneficios adicionales a las contraprestaciones legales cuando a ellas tenga derecho.\n15. Acreditar los requisitos exigidos por la ley para la posesión y el desempeño del cargo.\n16. Permitir a los representantes del Ministerio Público, fiscales, jueces y demás autoridades competentes el acceso inmediato a los lugares donde deban adelantar sus actuaciones e investigaciones y el examen de los libros de registro, documentos y diligencias correspondientes. Así mismo, prestarles la colaboración necesaria para el desempeño de sus funciones.\n17. Explicar inmediata y satisfactoriamente al nominador, a la Procuraduría General de la Nación o a la personería, cuando estos lo requieran, la procedencia del incremento patrimonial obtenido durante el ejercicio del cargo, función o servicio.\n18. Denunciar los delitos, contravenciones y faltas disciplinarias de los cuales tuviere conocimiento, salvo las excepciones de ley.\n19. Acatar y poner en práctica los mecanismos que se diseñen para facilitar la participación de la comunidad en la planeación del desarrollo, la concertación y la toma de decisiones en la gestión administrativa de acuerdo con lo preceptuado en la ley."
  },
  "44": {
    "numero": 44,
    "titulo": "Derechos",
    "texto": "Derechos. El Concejal tiene los siguientes derechos principales:\n1. A voz, durante las sesiones y conforme al reglamento.\n2. A voto, participando en las votaciones que se realicen en las plenarias y en las comisiones a que pertenezca. Voto nominal y público, remoto y excepcionalmente secreto.\n3. A citar, en ejercicio del control político que corresponde a la corporación, a los funcionarios que autoriza la ley.\n4. A formar parte de una comisión permanente.\n5. Al reconocimiento y pago de honorarios por su asistencia comprobada a las sesiones plenarias de la corporación, conforme a la reglamentación legal.\n6. Al pago oportuno de los honorarios causados cada mes por concepto de su asistencia comprobada a las sesiones ordinarias y extraordinarias, como máximo dentro de los primeros cinco (5) días del mes siguiente al mes que fueron causados estos honorarios. (artículo 3 Ley 2461 de 2025)\n7. A la cotización al Sistema de Seguridad Social; pensión, salud, ARL y cajas de compensación familiar, la cual será a cargo al presupuesto central de la administración municipal, sin que esto implique vínculo laboral con la entidad territorial. (Artículo 4 Ley 2461 de 2025)\n8. Al pago de los gastos de viaje incurridos con ocasión del cumplimiento de comisiones oficiales dentro y fuera del municipio. La autorización previa para dichos viajes deberá ser aprobada por la plenaria del Concejo Municipal y estar debidamente justificada. (Artículo 6 Ley 2461 de 2025)\n9. A un seguro de vida y a la atención médico asistencial, de conformidad con los artículos 66, 68 y 69 de la ley 136 de 1994 y la jurisprudencia de la Corte Constitucional contenida en la sentencia C-043 de 2003, el decreto 3171 de 2004, Ley 1148 de 2007 y ley 1551 de 2012.\n10. Al reconocimiento del valor de transporte, en los casos en que resida en zona rural y deba desplazarse hasta la cabecera municipal para asistir a las sesiones plenarias o de comisión, con cargo al presupuesto general del municipio si pertenece a municipios de 4, 5 o 6 categoría y al presupuesto del Concejo para las demás categorías, con sujeción a la reglamentación que expida el Concejo Municipal a iniciativa del alcalde mediante acuerdo, de conformidad con el artículo 2 de la Ley 1368 de 2009.\n11. A ser beneficiario del Fondo de Solidaridad Pensional para que se le subsidie el 75% del valor de la cotización siempre y cuando cumpla los requisitos contenidos en el Decreto Nacional 1788 de 2013.\n12. A recibir capacitación para el mejor desempeño de sus funciones. De manera gratuita recibirá capacitación del SENA, la ESAP y las Corporaciones Autónomas Regionales. A recibir capacitación con cargo al presupuesto del Municipio y del Concejo.\n13. A agremiarse libremente y a que se respete su decisión.\n14. A participar en política y apoyar públicamente a los candidatos del partido al que pertenezca fuera del recinto oficial del Concejo.\n15. A ejercer libremente su profesión u oficio, siempre y cuando con ello no se interfiera en las funciones que ejerce como Servidor Público, ni se trate de asuntos en los cuales el municipio o sus entidades descentralizadas sean parte, ni implique vinculación como empleados públicos o trabajadores oficiales.\n16. A recibir protección del Municipio y del Estado, así como de las entidades públicas de seguridad, cuando en su contra existan amenazas provenientes por grupos al margen de la ley o como consecuencia del ejercicio de sus funciones públicas.\n17. A sesionar por cualquier medio de comunicación y a distancia cuando las circunstancias de orden público o amenazas contra su integridad personal y la de su familia así lo ameriten, previa autorización del presidente de la corporación.\n18. A postularse para ser beneficiario de un subsidio de vivienda para la adquisición de vivienda nueva, usada, construcción en lote propio o mejoramiento de vivienda con cargo a la Bolsa Especial de Vivienda para Concejales.\n19. A presentar proyectos de acuerdo de iniciativa propia, que no sean exclusiva del alcalde y a que se les dé trámite al interior de la Corporación.\n20. A que cualquier autoridad pública del municipio le suministre la información solicitada para el correcto ejercicio de sus funciones públicas sin exigir el pago de copias para tal fin.\n21. A recibir tratamiento cortés con arreglo a los principios básicos de las relaciones humanas.\n22. A los derechos consagrados en la Constitución, los tratados internacionales ratificados por el Congreso, las leyes, las ordenanzas, los acuerdos municipales, los reglamentos y manuales de funciones, las convenciones colectivas y los contratos de trabajo.\n23. A ejercer individualmente las actividades propias de su dignidad."
  },
  "45": {
    "numero": 45,
    "titulo": "Liquidación de Honorarios",
    "texto": "Liquidación de Honorarios. Atendiendo a la categorización establecida en la Ley 617 del 2000, el valor de los honorarios por cada sesión a que asistan los concejales será señalado en tabla indicada en el artículo 66 de la Ley 136 de 1994, modificado por el artículo 2 de la Ley 2461 de 2025, y a partir de enero del siguiente año de la entrada en vigencia de la Ley 2461 de 2025; los honorarios se incrementaran cada año en un porcentaje equivalente a la variación del IPC correspondiente al año inmediatamente anterior.\nEn los municipios de categoría especial, primera y segunda se pagarán anualmente ciento cincuenta (150) sesiones ordinarias y hasta cuarenta (40) extraordinarias al año. En los municipios de categorías tercera a sexta, se pagarán anualmente ochenta (80) sesiones ordinarias y hasta cuarenta (40) sesiones extraordinarias al año.\nParágrafo primero. Los honorarios son incompatibles con cualquier asignación proveniente del tesoro público del respectivo municipio, excepto con aquellas originadas en pensiones o sustituciones pensionales y las demás excepciones previstas en la Ley 4ª de 1992.\nParágrafo segundo. Se exceptúan los concejales de la ciudad de Bogotá, por cuanto el Decreto-ley 1421 de 1993, regula la materia.\nParágrafo tercero. El incremento en el valor de los honorarios de los concejales de municipios de quinta y sexta categoría estará a cargo del presupuesto central de la administración municipal, podrán ser concurrentes con los recursos del Gobierno Nacional, Presupuesto General de la Nación y se garantice en las proyecciones anuales, respetando la disponibilidad presupuestal, el Marco Fiscal de Mediano Plazo y el Marco de Gasto del Mediano Plazo.\nParágrafo cuarto. Para el pago de los honorarios y la seguridad social de los concejales, la administración municipal podrá utilizar recursos del propósito general del Sistema General de Participaciones, realizando los traslados presupuestales correspondientes."
  },
  "46": {
    "numero": 46,
    "titulo": "Reconocimiento de Transporte",
    "texto": "Reconocimiento de Transporte. Reconocer el valor de transporte, durante las sesiones plenarias y de comisión, a los Concejales que residan en zonas rurales y deban desplazarse desde y hasta la cabecera municipal, sede principal del funcionamiento de las corporaciones municipales. Estos gastos de transporte serán asumidos, en el caso de los municipios pertenecientes a categorías cuarta, quinta y sexta con cargo a la sección presupuestal del sector central del municipio, y no se tendrán en cuenta como gasto de funcionamiento de la administración, para el cálculo de los indicadores de límite de gastos de funcionamiento fijados por la Ley 617 de 2000.\nPara estos efectos, los Concejos Municipales a iniciativa de los alcaldes deberán expedir el reglamento en donde se fije el reconocimiento de transporte, atendiendo criterios razonables, con anterioridad al periodo de sesiones siguientes a la promulgación de la presente ley. Los pagos efectuados a los Concejales por gastos de transporte a que se refiere el presente artículo, no estarán sujetos a retención en la fuente."
  },
  "47": {
    "numero": 47,
    "titulo": "Pago Oportuno Honorarios",
    "texto": "Pago Oportuno Honorarios. Todos los concejales del país tendrán derecho a recibir el pago de los honorarios causados cada mes por concepto de su participación en sesiones ordinarias y extraordinarias, como máximo dentro de los primeros 5 días del mes siguiente al mes en el cual fueron causados estos honorarios. (Ley 2461 de 2025)"
  },
  "48": {
    "numero": 48,
    "titulo": "Cotización al Sistema de Seguridad Social",
    "texto": "Cotización al Sistema de Seguridad Social. Los concejales de todas las diferentes categorías de los municipios y distritos del país tendrán derecho a la cotización al Sistema de Seguridad Social; pensión, salud, ARL y cajas de compensación familiar, la cual se hará con cargo al presupuesto central de la administración municipal, sin que esto implique vínculo laboral con la entidad territorial.\nEn todo caso, la administración municipal estará encargada de la liquidación y pago de las planillas de los concejales.\nParágrafo. Los costos en seguridad social de los concejales, en ningún caso se tendrá en cuenta en los límites de gastos de los concejos de los que trata el artículo 10 de la Ley 617 de 2000. (Ley 2461 de 2025)"
  },
  "49": {
    "numero": 49,
    "titulo": "Cotización al Sistema de Seguridad Social (Afiliación)",
    "texto": "Cotización al Sistema de Seguridad Social. Para la afiliación de los concejales al sistema de seguridad social en pensión, salud, ARL y cajas de compensación familiar la administración municipal deberá realizar los aportes al régimen contributivo con cargo al presupuesto central de la administración municipal o podrá solicitar el pago del monto que faltare al Ministerio de Hacienda y Crédito Público respetando la disponibilidad presupuestal, el Marco Fiscal de Mediano Plazo y el Marco de Gasto del Mediano Plazo.\nEl ingreso base de cotización, que trata este artículo, será el resultante de sumar el valor total de los honorarios anuales que reciben los concejales por la asistencia a las sesiones ordinarias dividido entre doce (12). (Ley 2461 de 2025)."
  },
  "50": {
    "numero": 50,
    "titulo": "Gastos De Viaje",
    "texto": "Gastos De Viaje. Los concejos municipales podrán pagar del rubro de gasto de funcionamiento, los gastos de viajes de sus concejales con ocasión del cumplimiento de comisiones oficiales dentro y fuera del municipio. La autorización previa para dichos viajes deberá ser aprobada por la plenaria del Concejo Municipal y estar debidamente justificada. Los concejales rendirán un informe detallado sobre las actividades realizadas en la comisión. (Ley 2461 de 2025)."
  },
  "51": {
    "numero": 51,
    "titulo": "Retención en la Fuente",
    "texto": "Retención en la Fuente. La retención en la fuente a los pagos efectuados por cada periodo sesionado en los términos del artículo 23 de la Ley 136 de 1994, correspondiente a honorarios a los Concejales no declarantes del impuesto sobre la renta y complementarios, será la que resulte de aplicar a dichos pagos la tabla establecida para tal efecto.\nParágrafo 1. La Secretaria del Concejo Municipal solicitará por escrito a los Concejales, que manifiesten bajo esta misma modalidad (por escrito) a la Corporación si son declarantes del impuesto sobre la renta y complementarios, para efectos de determinar si les es aplicable el presente artículo.\nParágrafo 2. A los Concejales que sean declarantes del impuesto sobre la renta y complementarios se les aplicará una retención en la fuente del 10% sobre el valor de los honorarios que perciban en cada periodo legal de sesiones ordinarias o en periodo de sesiones extraordinarias."
  },
  "52": {
    "numero": 52,
    "titulo": "Violencia contra las mujeres en política",
    "texto": "Violencia contra las mujeres en política. Se entiende por violencia contra las mujeres en ejercicio de su derecho a la participación política, toda acción, conducta u omisión realizada de forma directa o a través de terceros en el ámbito público o privado que, basada en elementos de género, cause daño o sufrimiento a una o varias mujeres o a sus familias, sin distinción de su afinidad política o ideológica, y que tenga por objeto o resultado menoscabar, restringir, impedir, desestimular, dificultar o anular el reconocimiento, goce y ejercicio de sus derechos políticos, en el marco de los procesos electorales, de participación ciudadana y representación democrática y el ejercicio de la función pública.\nLa violencia contra las mujeres en política puede incluir, entre otras, violencia verbal, física, sexual, psicológica, moral, económica o patrimonial, digital y simbólica.\nParágrafo. Se entenderá que las acciones, conductas u omisiones se basan en elementos de género, cuando se dirijan a una mujer por su condición de mujer, y tengan un impacto diferenciado en ella o en la población que representa."
  },
  "53": {
    "numero": 53,
    "titulo": "Definiciones sobre violencia contra las mujeres en política",
    "texto": "Violencia contra las mujeres en política. Para los efectos de la aplicación del presente capitulo, se tendrán en cuenta las siguientes definiciones:\n1. Violencia por razón de género contra las mujeres: Es la violencia contra la mujer basada en roles y estereotipos de género que perpetúa su posición subordinada con respecto al hombre, como en el caso de las amenazas y agresiones verbales sexistas, el acoso y la violencia sexual; y que vulnera sus derechos humanos y libertades fundamentales en las esferas política, económica, social, cultural civil, tanto si se producen en la vida pública como en la vida privada.\n2. Interseccionalidad: Son los elementos por los cuales las mujeres son violentadas de manera simultánea a su género, sexo, orientación sexual, edad, raza, nacionalidad, religión, situación de discapacidad, etnia, ascendencia o cualquier otra característica o forma de identidad con la que se busque discriminar y/o poner en peligro a las mujeres, individual o colectivamente.\n3. Participación ciudadana de las mujeres: Se entiende como el derecho de las mujeres a intervenir en la postulación, conformación, ejercicio y control del poder político y la toma de decisiones en la esfera pública, de manera complementaria a los procesos electorales. Estas formas de participación incluyen el ejercicio de los mecanismos, formas, espacios, canales e instancias de participación ciudadana.\n4. Presunción de Riesgo extraordinario de género: Cuando las amenazas sean contra mujeres, lideresas y defensoras de derechos humanos, debe aplicarse la presunción de riesgo extraordinario de género. Esta presunción a favor de las mujeres en ejercicio de su derecho a la participación política debe concretarse en que, en los eventos en que ellas acudan a las autoridades para solicitar protección, la autoridad competente debe partir de que la solicitante, en efecto, se encuentra en riesgo extraordinario contra su vida, seguridad e integridad personal y tales riesgos se concretarían con actos de violencia de género."
  },
  "54": {
    "numero": 54,
    "titulo": "Categorías de violencia contra las mujeres en política",
    "texto": "Categorías de violencia contra las mujeres en política. Para los efectos de la aplicación del presente capitulo, la definen el tipo de violencia en las siguientes categorías:\n1. Violencia psicológica: Acción u omisión destinada a degradar y/o controlar las acciones, comportamientos, creencias y decisiones de las mujeres, por medio de coerción, acoso, boicot social, amenazas hostigamientos u ofensas verbales y/o escritas de violencia física y/o violencia sexual en su contra o en contra de su familia, entre otras formas de violencia psicológica.\n2. Violencia simbólica: Es aquella que a través de actos recurrentes de violencia contra las mujeres refuerza los estereotipos de género usando imágenes, gestos, comentarios, íconos o signos que reproducen la idea de dominación, desigualdad y discriminación en las relaciones sociales, sujetas a los procesos electorales y sus funciones públicas naturalizando la subordinación de la mujer en la sociedad y limitando su derecho a participar sin obstáculos en la vida pública. La violencia simbólica afecta principalmente a las mujeres de manera colectiva y a sus agendas políticas.\n3. Violencia económica: Acciones y omisiones que buscan controlar, restringir, impedir y/o anular el acceso a los recursos económicos y patrimoniales, asignados a las mujeres para ejercer política.\n4. Violencia física: Acciones que generan afectaciones a la integridad física de una mujer o de su familia. Se refiere a lesiones, homicidios, feminicidios, secuestros, desapariciones y maltratos, con el objetivo de limitar la actividad política.\n5. Violencia sexual: Cualquier acto de naturaleza sexual que se causa y/o tiene consecuencias en el contexto del ejercicio de la política, y a su vez resulta, o es probable que resulte, en daño físico, psicológico y emocional. Asimismo, estas acciones pueden tener como objetivo obligar a las mujeres a intercambiar favores sexuales para ganar una candidatura en el partido o movimiento político; o conseguir financiación para la campaña o acceso a recursos patrimoniales de la colectividad, e incluso anular o limitar la voluntad de la mujer.\n6. Violencia digital: Cualquier manifestación o acto de violencia contra las mujeres en ejercicio de su derecho a la participación política o que la afecta en forma desproporcionada cometido con la asistencia del uso de las Tecnologías de la Información y Comunicación o agravado por este; a través del uso de redes sociales, plataformas digitales, correo electrónico, aplicaciones móviles, celular o cualquier medio tecnológico desde el que se pueda acceder a Internet o a otros entornos digitales."
  },
  "55": {
    "numero": 55,
    "titulo": "Manifestaciones de violencia contra las mujeres en política",
    "texto": "Manifestaciones de violencia contra las mujeres en política. Las acciones, conductas u omisiones constitutivas de violencia contra las mujeres en política pueden manifestarse de manera física, sexual, psicológica, simbólica, digital y/o económica, y tienen el propósito de limitar, restringir o menoscabar su representación política, su liderazgo, su capacidad electoral o imagen pública o los derechos políticos de las mujeres en razón de su género, siendo algunas de ellas las siguientes:\n1. Aquellas conductas que atenten contra la vida e integridad personal de las mujeres con el objeto de limitar, anular o restringir sus derechos políticos o electorales, tales como las agresiones físicas, el homicidio, el secuestro, el feminicidio, actos discriminatorios, hostigamiento, extorsión, constreñimiento ilegal, entre otras.\n2. Aquellas conductas que atenten contra la libertad, integridad y formación sexual con el objeto de limitar, anular o restringir sus derechos políticos o electorales, tales como acoso, proposiciones, tocamientos, agresiones, o invitaciones sexuales que influyan en sus aspiraciones políticas o las condiciones de su actividad política, entre otras.\n3. Aquellas conductas que atenten contra la integridad moral con el objeto de limitar, anular o restringir sus derechos políticos o electorales, tales como injuriar, calumniar, reproducir mensajes de odio, realizar expresiones que denigren, desacrediten o descalifiquen, a las mujeres por su género, restringir los canales de comunicación en cualquier medio virtual o físico, divulgar material o información íntima o privada, entre otras.\n4. Aquellas conductas que atenten contra los Derechos políticos, mecanismos de participación democrática o aquellas que atenten contra la Seguridad Pública, las cuales se encuentran consagradas en el Capítulo 1 del Título XII del Código Penal, que se lleven a cabo con el objeto de limitar, anular o restringir sus derechos políticos o electorales, tales como restringir o anular el derecho al voto libre y secreto, proporcionar intencionalmente a las mujeres, a las autoridades administrativas, electorales información falsa, errónea o incompleta.\n5. Aquellas conductas que atenten contra la debida administración de justicia con el objeto de limitar, anular o restringir sus derechos políticos o electorales, tales como usar las acciones judiciales de forma temeraria o de mala fe en un proceso administrativo o judicial, obstaculizar o impedir el acceso a la justicia para proteger sus derechos políticos, electorales o desconocer las decisiones adoptadas, imponer sanciones injustificadas o abusivas, entre otras.\n6. Aquellas conductas que atenten contra la libertad de expresión con el objeto de limitar, anular o restringir sus derechos políticos o electorales, tales como restringir o anular su libertad de expresión en los canales de comunicación, entre otras.\n7. Suministrar intencionalmente a las mujeres que aspiran u ocupan un cargo de elección popular o en el ejercicio de sus derechos políticos, información falsa, errada, incompleta o imprecisa u omitir información a la mujer, que impida o induzca al incorrecto ejercicio de sus atribuciones o de sus derechos políticos o electorales en condiciones de igualdad e impedir que asistan a cualquier actividad que implique toma de decisiones.\n8. Limitar o negar arbitrariamente el uso de cualquier recurso y/o atribución inherente al cargo político que ocupa la mujer, incluido el pago de salarios y de prestaciones asociadas al ejercicio del cargo en condiciones de igualdad.\n9. Restringir el uso de la palabra de las mujeres en ejercicio de sus derechos políticos o electorales, impidiendo el derecho a voz de acuerdo con la normativa aplicable y en condiciones de igualdad.\n10. Discriminar a las mujeres en el ejercicio de sus derechos políticos, por encontrarse en estado de embarazo, parto, puerperio, o el ejercicio de la maternidad, impedir o restringir su reincorporación al cargo tras hacer uso de la licencia de maternidad, o de cualquier otra licencia contemplada en la normativa relacionada.\n11. Imponer con base en estereotipos de género la realización de actividades y tareas ajenas a las funciones y atribuciones de su cargo o posición, o que tengan como resultado la limitación del ejercicio de la función política.\n12. Instrumentalizar a la mujer a permanecer dentro del proceso electoral en contra de su voluntad, incluyendo la continuación de trámites sin su consentimiento y que comprometan sus derechos políticos.\n13. Obstaculizar en razón del género, los derechos de asociación y afiliación a todo tipo de organizaciones políticas y civiles.\n14. Suplantar la identidad de una mujer por cualquier medio incluyendo entornos digitales con el objetivo o el resultado de menoscabar o afectar negativamente su candidatura, imagen pública y/o limitar o anular sus derechos políticos o electorales como parte de su función política.\nParágrafo 1°. Las manifestaciones descritas en el presente artículo no son exhaustivas, pueden ser concurrentes, y los hechos deberán analizarse e investigarse por las autoridades competentes con enfoque de género, con seguimiento al principio de debida diligencia y a las medidas de protección de los derechos humanos de las mujeres."
  },
  "56": {
    "numero": 56,
    "titulo": "Prohibición de actos de violencia política contra la mujer en debates",
    "texto": "Durante el desarrollo de los debates se encuentra prohibido cualquier acto que se pueda configurar como manifestaciones de violencia de conformidad con los artículos precedentes; en concordancia con la Ley 2453 de 2025 y cualquier otra que la complemente, modifique y adicione."
  },
  "57": {
    "numero": 57,
    "titulo": "Prohibición de actos de violencia política contra la mujer en debates (reiteración)",
    "texto": "Durante el desarrollo de los debates se encuentra prohibido cualquier acto que se pueda configurar como manifestaciones de violencia de conformidad con los artículos precedentes; en concordancia con la Ley 2453 de 2025 y cualquier otra que la complemente, modifique y adicione."
  },
  "58": {
    "numero": 58,
    "titulo": "Canales de comunicación para garantizar derechos políticos de las mujeres",
    "texto": "El concejo municipal, en cabeza de la mesa directiva garantizará canales de comunicación para todas las mujeres en ejercicio o goce de sus derechos políticos y de participación democrática.\nLos cuales se harán conocer a la comunidad, por los medios que tengan a su alcance."
  },
  "59": {
    "numero": 59,
    "titulo": "Rendición de cuentas prevención de violencia política contra las mujeres",
    "texto": "Rendición de cuentas prevención de violencia política contra las mujeres. En el último periodo de sesiones de cada anualidad el concejo municipal rendirá cuentas públicas de las medidas y acciones realizadas para prevenir, rechazar y sancionar actuaciones de violencia política contra las mujeres en el desarrollo de las sesiones y espacios públicos de debate y participación."
  },
  "60": {
    "numero": 60,
    "titulo": "Designación, requisitos y período",
    "texto": "Designación, requisitos y período. El secretario será elegido por el Concejo para período institucional de un (1) año, comprendido entre el primero (1) de enero y el treinta y uno (31) de diciembre, sin importar la fecha de su elección y posesión. La nombrada elección deberá darse con estricto cumplimiento de los parámetros constitucionales y legales.\nAtendiendo a lo dispuesto en la Constitución y la Ley, la elección de Servidores Públicos atribuida a Corporaciones Públicas deberá estar precedida de una Convocatoria Pública reglada por la Ley en las que se fijen requisitos y procedimientos que garanticen los principios de publicidad, transparencia, participación ciudadana, equidad de género y criterios de méritos para su elección.\nPara ser Secretario General del Concejo se deberá acreditar título de bachiller o experiencia administrativa mínima de dos (2) años.\nLa primera elección de este funcionario se realizará dentro de los diez (10) primeros días del mes de enero correspondiente a la iniciación del período constitucional del Concejo. Para los tres años subsiguientes del mismo período constitucional, la elección o reelección tendrá lugar en el mes de noviembre, correspondiente al último período ordinario de sesiones, iniciando funciones a partir del primero (1) de enero siguiente.\nParágrafo 1. El secretario electo del Concejo tomará posesión dentro de los quince (15) días hábiles siguientes a la elección y en caso de existir fuerza mayor o caso fortuito que impida la posesión en ese periodo de tiempo, se podrá prorrogar por quince días más. La posesión la hará el Presidente del Concejo Municipal y para ello no se requiere de la realización de una sesión plenaria.\nPara la posesión del secretario del concejo, éste deberá acreditar los requisitos exigidos por la Ley y presentar la documentación exigida por la Ley 190 de 1995, en especial los mismos exigidos para la posesión de los Concejales contemplados en el presente reglamento.\nSi vencido el termino para que el secretario electo tome posesión del cargo y no lo ha hecho por su culpa o dolo, el Presidente del Concejo declarará vacante el cargo y convocará nuevamente a elección, en la cual no podrá participar como candidato la persona electa en la primera elección que no se posesionó.\nParágrafo 2. La renuncia del Secretario General del Concejo genera vacancia absoluta del cargo. El nuevo Secretario será elegido por lo que resta del periodo hasta el 31 de diciembre. En este caso mientras se realiza la nueva elección, dicho cargo será asumido de manera Ad-Hoc por el concejal que el Presidente de la Corporación designe para cada sesión, resaltando que por ese hecho no perderá su derecho a voz y voto en la respectiva sesión.\nParágrafo 3. En caso de elección del secretario (a) general del Concejo Municipal se deberá agotar el trámite dispuesto en la Constitución y la Ley."
  },
  "61": {
    "numero": 61,
    "titulo": "Funciones del secretario del Concejo",
    "texto": "Funciones del secretario del Concejo. Son funciones y deberes del secretario de la corporación:\n1. Asistir a todas las sesiones.\n2. Realizar la convocatoria a sesiones que se programen por autorización del Presidente y de la Mesa Directiva, de conformidad con lo previsto en este reglamento.\n3. Llevar y firmar las actas, de acuerdo con la sana costumbre y el reglamento, así como certificar la fidelidad de su contenido.\n4. Dar lectura a los proyectos, proposiciones y demás documentos y mensajes que deban ser leídos en sesión plenaria.\n5. Informar sobre los resultados de toda clase de votación que se cumpla en la corporación.\n6. Elaborar las comunicaciones oficiales que deban ser enviadas por el presidente o por la mesa directiva.\n7. Informar regularmente al presidente de todos los documentos y mensajes dirigidos a la corporación, acusar oportunamente su recibo, y mantener organizado y actualizado un registro de entrega y devolución de los mismos y de los enviados a las comisiones permanentes.\n8. Recibir y dar trámite a todo documento o petición que llegue al Concejo con destino a la Presidencia y a la Secretaría General de la Corporación.\n9. Recibir y radicar los proyectos de acuerdo, y repartirlos a la comisión correspondiente para su trámite en primer debate.\n10. Llevar los siguientes libros: el de actas; el de registro de intereses privados de los Concejales de que trata el artículo 70 inciso segundo de la ley 136 de 1994, y el de registro de participación ciudadana a que se refiere el artículo 77 de la misma ley.\n11. Organizar el archivo del Concejo, acompañado del índice de los acuerdos municipales expedidos, las resoluciones dictadas y las actas aprobadas.\n12. Dirigir y publicar la Gaceta del Concejo cuando a ello hubiere lugar y por disposición del Presidente de la Corporación.\n13. Recibir la inscripción de constitución de las Bancadas existentes al interior del Concejo Municipal junto con sus estatutos y publicar los documentos constitutivos de las mismas.\n14. Velar porque el archivo se encuentre en estricto orden y en cumplimiento con los parámetros de la Ley.\n15. Mantener la Corporación al día con la actualización del Modelo Estándar de Control Interno -MECI-, e informar a la mesa directiva sobre cualquier cambio o falta de cumplimiento de estas normas.\n16. Los demás deberes que señale la corporación, la mesa directiva o el presidente, y las inherentes a la naturaleza del cargo.\nParágrafo único. Las faltas absolutas del secretario se suplen con una nueva elección, en el menor término posible. En caso de falta temporal, la mesa directiva procederá a designar uno.\nNo puede ser designado secretario, en propiedad, un miembro del Concejo. Las Faltas Temporales del Secretario General de Concejo que no sean superior a diez (10) días, podrán ser suplidas de manera Ad-Hoc por un Concejal, quien por ese hecho no perderá su derecho a voz y voto en la respectiva sesión."
  },
  "62": {
    "numero": 62,
    "titulo": "Diversas comisiones",
    "texto": "Diversas comisiones. Además de las comisiones legales permanentes y la comisión legal para la equidad de la mujer, el Concejo integrará comisiones especiales y comisiones accidentales.\nLas comisiones especiales son la comisión de ética y la comisión de acreditación documental."
  },
  "63": {
    "numero": 63,
    "titulo": "Comisión de ética",
    "texto": "Comisión de ética. El Concejo integrará una comisión de ética, encargada de conocer los casos de conflicto de intereses y las violaciones al régimen de inhabilidades, incompatibilidades y prohibiciones de los Concejales, así como del comportamiento indecoroso, irregular o inmoral que pueda afectar a miembros o empleados de la corporación en su gestión pública. Estará conformada por tres (3) Concejales, elegidos de la misma manera que las comisiones permanentes; se pronunciará en reserva y por la unanimidad de sus integrantes. La plenaria será informada acerca de sus conclusiones con el fin de adoptar, previo debate, decisiones acordes con la ley.\nCualquier persona podrá recusar ante la comisión de ética a un Concejal, cuando tenga conocimiento de una causal de impedimento. Si se aceptare la recusación, el presidente del Concejo procederá a la designación de un nuevo ponente, si fuere el caso, o dispondrá que el recusado se abstenga de participar en el respectivo debate y en la votación."
  },
  "64": {
    "numero": 64,
    "titulo": "Comisión de acreditación documental",
    "texto": "Comisión de acreditación documental. Integrada por tres (3) Concejales, es designada por la plenaria de la corporación por el período constitucional. Revisa la lista enviada por el Consejo Nacional Electoral sobre los Concejales electos y la documentación presentada por éstos; si llegare a encontrar irregularidad en una documentación, llevará el caso a la plenaria, en donde se tomará la decisión pertinente.\nEsta comisión revisará también la documentación de los llamados a ocupar una curul en reemplazo de los titulares.\nÉsta comisión está también llamada a revisar las hojas de vida de los candidatos a Personeros, Secretarios de los Concejos y todo aquel funcionario que la corporación tenga a su cargo."
  },
  "65": {
    "numero": 65,
    "titulo": "Comisiones accidentales",
    "texto": "Comisiones accidentales. El presidente nombrará comisiones accidentales de carácter transitorio para el cumplimiento de asuntos específicos tales como protocolo, transmisión de mensajes, escrutinio de las votaciones internas, presentación de informes a la plenaria sobre asuntos de interés para la corporación, estudio en primer debate de proyectos de acuerdo cuando no se hayan integrado las comisiones permanentes y cuando no se sepa a qué comisión permanente corresponde el estudio de un proyecto según el tema de que se trate.\nSin perjuicio de lo dicho, serán funciones específicas de las Comisiones Accidentales:\n1. Recibir sectores de la comunidad para el conocimiento de las situaciones y problemas relacionados con el Municipio en sus diferentes aspectos.\n2. Presentar a la Plenaria del Concejo o de las comisiones permanentes informe escrito sobre la gestión adelantada.\n3. Escrutar el resultado de las votaciones.\n4. Recibir dignatarios o personalidades que invite el Concejo Municipal.\n5. Presentar informe escrito sobre las objeciones del Alcalde Municipal a los proyectos de acuerdo.\n6. Preparar proyectos de acuerdo de especial interés para la Corporación y el Municipio.\n7. Dar primer debate a los proyectos de acuerdo cuando no se han integrado las comisiones permanentes o cuando no sea posible identificar a que comisión permanente corresponde el estudio de un proyecto por el tema de que se trate.\n8. Presentar informe a la plenaria sobre la reconsideración solicitada por el autor o cualquier Concejal de un proyecto de acuerdo negado y archivado en primer debate.\n9. Llevar a cabo las funciones que le sean asignadas por el respectivo presidente de la Corporación y de las Comisiones Permanentes.\nParágrafo único. Dichas comisiones deberán ser integradas máximo hasta por tres (3) Concejales, asegurando la representación de las bancadas. En su designación el Presidente definirá el término para la presentación del informe sobre el tema, que deberá ser por escrito y radicado en la secretaría para la programación de la sesión correspondiente."
  },
  "66": {
    "numero": 66,
    "titulo": "Número, Integración y Funciones legales",
    "texto": "Número. Integración. Funciones legales. En el Concejo funcionará un mínimo de dos (2) y hasta un máximo de cuatro (4) comisiones permanentes, cada una integrada por una tercera o cuarta parte de los Concejales miembros de la Corporación, en caso de que el cociente no sea un número entero, la Mesa Directiva del Concejo mediante acto administrativo resolverá a qué comisión o comisiones asigna el mayor número de Concejales.\nDe acuerdo con la ley, en las comisiones se surtirá el primer debate a los proyectos de acuerdo que, por competencia, le sean remitidos por la secretaría de la corporación. Tendrán prelación los de iniciativa popular y los presentados por las Bancadas con presencia en el Concejo municipal.\nLos informes de las comisiones permanentes se presentarán por escrito y llevarán la firma del ponente, y anexo al mismo irá la certificación de aprobación o no aprobación del proyecto de acuerdo en primer debate, suscrito por el presidente; la opinión diferente, si la hubiere, se presentará en informe separado. El informe completo y su anexo serán remitidos a la Secretaría General de Concejo. Si el proyecto de acuerdo fue aprobado el Secretario lo remitirá a la Mesa Directiva del Concejo para que se fije fecha de sesión plenaria, para efectos de que el proyecto de acuerdo reciba segundo debate. Si el proyecto de acuerdo no fue aprobado por la comisión el Secretario informará a su autor quién dentro de los cinco (5) días siguientes a la notificación podrá solicitar su reconsideración ante la plenaria. Lo anterior no impide que cualquier Concejal pueda solicitar que el proyecto sea nuevamente considerado por el Concejo dentro del mismo lapso de tiempo. Transcurridos los cinco (5) días sin que se haya solicitado la reconsideración del proyecto, el mismo quedará archivado definitivamente y para que el Concejo se vuelva a pronunciar sobre él, deberá ser nuevamente presentado.\nCualquier comisión permanente podrá citar a persona natural o jurídica para que en sesión especial rinda declaraciones orales o escritas, sobre hechos relacionados directamente con asuntos de interés público, investigados por la misma. Los citados podrán abstenerse de asistir solo por causa debidamente justificada y aceptada por la comisión respectiva, excusa que deberá ser presentada al menos dos (2) días antes de la fecha de citación, exceptuando los casos de fuerza mayor o caso fortuito que se presenten el mismo día en que fue citado el funcionario.\nLa renuencia de los citados a comparecer o a rendir declaraciones requeridas, sin que medie justa causa aceptada por la comisión, será sancionada por las autoridades jurisdiccionales o disciplinarias competentes, según el caso y las normas vigentes para los casos de desacato a las autoridades. El presidente de la Comisión adelantará el trámite ante la autoridad judicial o disciplinaria para que se surta el correspondiente proceso.\nEl fundamento legal de atribución en relación con la competencia en el caso en particular es el artículo 40 de la ley 136 de 1994.\nTodo Concejal deberá hacer parte de una comisión permanente y en ningún caso podrá pertenecer a dos o más comisiones permanentes. Un Concejal puede pertenecer a una comisión permanente, a una comisión legal y a una comisión especial o accidental simultáneamente.\nParágrafo 1. Los reemplazos de los Concejales titulares, por falta temporal en caso de licencia de maternidad o absoluta de éstos, harán parte de la comisión permanente a que pertenece o pertenecía el titular de la curul.\nParágrafo 2. Si no se justificare disponer de un empleado como secretario, o el secretario general no pudiere cumplir esta labor, el presidente de la respectiva comisión podrá designar como secretario a uno de sus miembros.\nParágrafo 3. En los eventos en que las comisiones permanentes no se hayan reglamentado o integrado, los informes serán rendidos por comisiones accidentales nombradas para el efecto por la mesa directiva de la corporación.\nParágrafo 4. En caso de existir empate entre los miembros de las comisiones permanentes en la votación de proyectos de acuerdo el mismo será reconsiderado por esta en sesión que se realizará en un día distinto al del sufragio, y de persistir el empate la iniciativa será archivada. Resaltando que el mismo podrá ser reconsiderado por el cabildo de conformidad con lo establecido en el artículo 73 de la Ley 136 de 1994."
  },
  "67": {
    "numero": 67,
    "titulo": "Elección",
    "texto": "Elección. Las comisiones permanentes, tan pronto sean reglamentadas por la Mesa Directiva, deberán ser integradas y elegidas en Sesión Plenaria que se llevará a cabo a más tardar dentro de los tres (3) días hábiles siguientes a la integración y elección de la Mesa Directiva del Concejo Municipal, dando participación en ellas a los miembros de los diversos partidos o movimientos políticos que integran las Bancadas y teniendo en cuenta la especialización o preferencias de los candidatos.\nCada comisión permanente elegirá, el día de su instalación, un presidente que ejercerá su cargo durante un (1) año institucional y no podrá ser reelegido para el período inmediato. A él corresponde dirigir los debates y señalar día y hora para la reunión de la comisión, sin que la misma pueda coincidir con horario de sesión plenaria.\nCada año los Concejales a consideración de la plenaria y mediante proposición realizadas por uno o más concejales podrán proponer la modificación de la integración de las Comisiones Permanentes, debiendo, en lo posible, hacer parte de cada una de ellas durante el período constitucional.\nParágrafo único. Lo anterior sin perjuicio de ser reelegido en la misma comisión."
  },
  "68": {
    "numero": 68,
    "titulo": "Materia de Estudio de las Comisiones",
    "texto": "Materia de Estudio de las Comisiones. Las Comisiones Permanentes se dedicarán en sus deliberaciones al examen de los temas especializados que le sean propios en materia normativa y de control político, al análisis y evaluación de los informes que deben rendir los funcionarios de la administración, aprobar o negar en primer debate los Proyectos de Acuerdo que sean sometidos a su consideración y a la realización de los debates que hayan sido aprobados en la Comisión sobre asuntos propios de su competencia. No se podrán tramitar en diferentes comisiones los mismos temas para efectos de realizar control político."
  },
  "69": {
    "numero": 69,
    "titulo": "Distribución de materias",
    "texto": "Distribución de materias. Los asuntos que deba tratar el Concejo Municipal y que por su naturaleza no estén claramente definidos como responsabilidad de sus Comisiones Permanentes, serán distribuidos para su estudio por el Presidente del Concejo a la Comisión Permanente que él designe o a la Comisión Accidental que integre para que asuma su estudio en primer debate."
  },
  "70": {
    "numero": 70,
    "titulo": "Comisiones y Sesiones conjuntas – generalidades",
    "texto": "Comisiones y Sesiones conjuntas – generalidades. Las Comisiones Permanentes podrán ser convocadas a Comisión Conjunta y desarrollar sesiones conjuntas por el Presidente de la Corporación."
  },
  "71": {
    "numero": 71,
    "titulo": "Definición de Comisión Conjunta",
    "texto": "Definición. Se considera Comisión Conjunta y se desarrollará sesión conjunta cuando dos comisiones permanentes se reúnen para dar primer debate a un proyecto de acuerdo, cuya materia les es común. Ella tiene lugar cuando lo dispone la plenaria, el presidente de la corporación o mediante proposición aprobada de una Comisión Permanente."
  },
  "72": {
    "numero": 72,
    "titulo": "Presidencia de la Comisión y Sesión Conjunta",
    "texto": "Presidencia de la Comisión y Sesión Conjunta. La sesión conjunta será presidida por el Presidente de la Comisión donde haya sido radicado el proyecto de acuerdo para estudio ó en caso contrario por quien designe el presidente de la Corporación, siempre y cuando tenga competencia en su estudio."
  },
  "73": {
    "numero": 73,
    "titulo": "Informe de Ponencia de sesión conjunta",
    "texto": "Informe de Ponencia de sesión conjunta. En el término indicado por la Presidencia de la Corporación, se presentará el Informe de Ponencia ante la Secretaría del Concejo. Si hubiere varios informes de ponencia, el primero radicado será la base para el Debate."
  },
  "74": {
    "numero": 74,
    "titulo": "Quórum en Sesión Conjunta",
    "texto": "Quórum en Sesión Conjunta. El Quórum decisorio será el que se requiera para cada una de las Comisiones individualmente consideradas."
  },
  "75": {
    "numero": 75,
    "titulo": "Votación en sesión conjunta",
    "texto": "Votación en sesión conjunta. Concluido el debate cada Comisión votará por separado. La decisión final será la resultante de la sumatoria de los votos emitidos en una y otra Comisión, con lo cual se entenderá surtido el Primer Debate.\nParágrafo 1º. Actuará como secretario de la sesión el Secretario General de la Corporación.\nParágrafo 2º. En caso de votación, cada comisión permanente deberá decidir separadamente."
  },
  "76": {
    "numero": 76,
    "titulo": "Comisiones Permanentes Particulares",
    "texto": "Comisiones Permanentes Particulares. Para efectos de integrar las Comisiones Permanentes Particulares del Concejo Municipal, la Plenaria deberá integrar preferentemente las Comisiones permanentes siguientes: Comisión Primera Permanente del Plan de Desarrollo, Comisión Segunda Permanente de Gobierno y Comisión Tercera Permanente de Presupuesto y Hacienda Pública."
  },
  "77": {
    "numero": 77,
    "titulo": "Materias objeto de desarrollo de las Comisiones Permanentes Particulares",
    "texto": "Materias objeto de desarrollo de las Comisiones Permanentes Particulares. En ejercicio de sus funciones normativas y de Control Político, las Materias objeto de desarrollo por parte de las Comisiones Permanentes Particulares antes señaladas serán las siguientes:\n1. Comisión Primera Permanente de Presupuesto y Hacienda Pública: Será la encargada de ejercer las funciones normativas y de control político en los asuntos relacionados con las siguientes materias:\n1.1. Plan de inversiones del Municipio y el componente financiero que contengan los Planes de Desarrollo Económico, Social y de Obras Públicas.\n1.2. Establecimiento, reforma o eliminación de tributos, contribuciones, impuestos y sobretasas, exenciones tributarias, sistemas de retención y anticipos.\n1.3. Normas orgánicas del Presupuesto y expedición anual del presupuesto de rentas y gastos.\n1.4. Los recursos de gastos e inversión para el municipio.\n1.5. Definición de las escalas de remuneración para las distintas categorías de empleos de la Administración Municipal.\n1.6. Cupo global de endeudamiento.\n1.7. Estudio de las facultades pro-témpore al Alcalde Municipal sobre materias de competencia de esta comisión.\n1.8. Examen del balance general y demás estados contables del municipio, presentados por el Alcalde, firmados por el secretario de Hacienda y presentación al Concejo Municipal de sus conclusiones.\n1.9. Examen del informe sobre el estado de las finanzas del municipio y análisis de las políticas económicas adoptadas por la Administración.\n1.10. Las demás que le sean asignadas por el Presidente del Concejo o su Mesa Directiva.\n2. Comisión Segunda Permanente del Plan de Desarrollo: Será la encargada del manejo de los asuntos relacionados con las siguientes materias:\n2.1. Eficiente prestación de los servicios a cargo del Municipio, en el marco de la Constitución y la Ley.\n2.2. Organización y funcionamiento de las veedurías ciudadanas, la descentralización, la desconcentración y el control social de los servicios públicos.\n2.3. Plan General de Desarrollo Económico y Social.\n2.4. Plan General de Ordenamiento físico y territorial del Municipio.\n2.5. Plan Vial.\n2.6. Reglamentación del uso del suelo y el espacio público del Municipio.\n2.7. Desarrollo físico de las áreas rurales del Municipio.\n2.8. División del territorio Municipal.\n2.9. Planeación y asesoría a las Juntas Administradoras Locales en la elaboración del Plan de Desarrollo Económico y Social.\n2.10. Preservación y defensa del patrimonio ecológico, los recursos naturales y del medio ambiente.\n2.11. Vigilancia y control de la prestación de los servicios públicos domiciliarios y del transporte público y seguridad.\n2.12. Divulgación, fomento y pedagogía de los procesos de participación ciudadana.\n2.13. Estudio de facultades pro tempore al Alcalde Municipal en las materias antes relacionadas.\n2.14. Las demás que sean asignadas por el presidente de la Corporación o la Mesa Directiva.\n3. Comisión Tercera Permanente de Gobierno: Será la encargada de ejercer las funciones normativas y de control político en los asuntos relacionados con las siguientes materias:\n3.1. Normas de Tránsito, Transporte y seguridad.\n3.2. Normas de regulación, preservación y defensa del patrimonio cultural.\n3.3. Estudio de facultades Pro-Témpore al Alcalde sobre materias de competencia de esta comisión.\n3.4. Normas sobre la estructura de la Administración Central y sus funciones, creación y supresión de empleos, creación, constitución, supresión, transformación y fusión de establecimientos públicos, empresas industriales y comerciales, sociedades de economía mixta y participación del Municipio en otras entidades de carácter asociativo.\n3.5. Normas sobre la organización de la Personería.\n3.6. Reglamento Interno del Concejo y determinación de la estructura orgánica del mismo.\n3.7. Normas sobre educación, salud, bienestar social, deporte, recreación, turismo y cultura ciudadana.\n3.8. Atención de organizaciones sindicales, comunitarias y sociales.\n3.9. Derechos humanos.\n3.10. Desplazamientos, en caso de urgencia, en representación del Concejo Municipal.\nLas demás que la Mesa Directiva considere convenientes."
  },
  "78": {
    "numero": 78,
    "titulo": "Definición de la Comisión Legal para la Equidad de la Mujer",
    "texto": "Definición. La Comisión Legal para la Equidad de la Mujer tiene como propósito fomentar la participación de la mujer en el ejercicio de la labor normativa y de control político, buscando contribuir en la eliminación de cualquier situación de desigualdad y discriminación que se presente en el ejercicio de la ciudadanía por parte de las mujeres, luchar contra la violencia de género, promover el empoderamiento de la mujer y la equidad de género en el Municipio de El Cerrito – Valle del Cauca."
  },
  "79": {
    "numero": 79,
    "titulo": "Composición e Integración de la Comisión Legal para la Equidad de la Mujer",
    "texto": "Composición e Integración. La comisión Legal para la equidad de la Mujer estará conformada preferentemente por todas las mujeres cabildantes de la Corporación. Los Concejales hombres podrán de igual forma participar voluntariamente de ella.\nParágrafo 1. La Comisión Legal para la equidad de la Mujer deberá contar con una Mesa Directiva, que estará conformada por un Presidente y un Vicepresidente elegidos por un año, el cual coincidirá con el periodo de la Mesa Directiva del Concejo Municipal; sin la posibilidad de ser reelegidos.\nParágrafo 2. Si el Concejo Municipal no cuenta con una cuota de participación femenina, igualmente tiene la obligación de conformar la Comisión Legal para la Equidad de la Mujer con los Concejales hombres.\nParágrafo 3. La comisión para la equidad de la mujer por poseer naturaleza jurídica legal, no le será aplicable la regla de renovación anual con respecto a las mujeres que integran la comisión, pues éstas tendrán asiento permanente durante el periodo constitucional. Los concejales hombres que conformen la comisión, serán elegidos anualmente garantizando la participación a todas las organizaciones políticas.\nParágrafo 4. Si no se justificare disponer de un empleado como secretario, actuará como secretario de la comisión el Secretario General de la Corporación; si el secretario general no pudiere cumplir esta labor, el presidente de la respectiva comisión podrá designar como secretario a uno de sus miembros."
  },
  "80": {
    "numero": 80,
    "titulo": "Funciones y/o atribuciones de la Comisión Legal para la Equidad de la Mujer",
    "texto": "Funciones y/o atribuciones de la Comisión Legal para la Equidad de la Mujer. La Comisión Legal para la equidad de la Mujer tendrá las siguientes funciones y/o atribuciones:\n1. Elaborar proyectos de acuerdo que propendan en la realización de los derechos humanos, civiles, políticos, económicos, sociales y culturales de las mujeres, con el acompañamiento de la Alcaldía Municipal, las organizaciones y grupos de mujeres, centros de investigación y demás organizaciones que defienden los derechos de las mujeres en el municipio de El Cerrito – Valle del Cauca.\n2. Ejercer el control político en los diversos organismos de la Administración Municipal en relación con la formulación y desarrollo de planes, programas, proyectos y políticas públicas dirigidas al reconocimiento, promoción, realización, ampliación, protección y restitución de los derechos civiles, políticos, económicos, sociales y culturales de las mujeres, así como el seguimiento a las iniciativas relacionadas con los temas de género.\n3. Proponer y velar por que en el proceso de discusión y aprobación del Plan Municipal de Desarrollo y del Presupuesto Municipal, se incluyan programas, proyectos y acciones que hagan efectiva la realización de los derechos civiles, políticos, económicos, sociales y culturales de las mujeres.\n4. Promover e incentivar la participación de las mujeres en los cargos de elección popular y de designación.\n5. Ser interlocutoras de las organizaciones y grupos de mujeres establecidas en la ciudad.\n6. Promover y celebrar audiencias públicas, foros, seminarios, simposios, encuentros, mesas de trabajo, conversatorios y demás estrategias de comunicación para desarrollar, informar y divulgar los temas relacionados con los derechos de las mujeres.\n7. Hacer seguimiento a los procesos de verdad justicia y reparación para los delitos cometidos contra las mujeres durante el conflicto armado interno en sus territorios a los que haya lugar.\n8. Hacer seguimiento sobre los resultados de los procesos de investigación y/o sanción, existentes en los distintos entes de control, relacionados con las violaciones de los derechos civiles, políticos, económicos, sociales, culturales y a la integridad física y sexual de las mujeres.\n9. Tramitar ante las Comisiones Permanentes las observaciones, adiciones y modificaciones que consideren pertinentes o que por escrito hagan llegar a la Comisión para la Equidad de la Mujer, las y los ciudadanos con respecto a proyectos de acuerdo alusivos a los derechos humanos, civiles, políticos, económicos, sociales y culturales de las mujeres.\n10. Las demás que le asigne la ley o reciba por Delegación de la Mesa Directiva del Concejo Municipal de El Cerrito – Valle del Cauca.\n11. Trabajar articuladamente con la Comisión Legal para la Equidad de la Mujer del Congreso de la República en iniciativas que contribuyan a la defensa y fortalecimiento de los derechos y libertades de las mujeres en Colombia.\n12. Solicitar el acompañamiento interinstitucional de organismos municipales, nacionales e internacionales, entidades públicas o privadas y asociaciones de mujeres para el desarrollo de su misión institucional, desarrollar proyectos de investigación, de promoción, defensa y divulgación de los derechos civiles, políticos, económicos, sociales y culturales de las mujeres.\n13. Darse su propio Reglamento."
  },
  "81": {
    "numero": 81,
    "titulo": "Instalación y Sesiones de la Comisión Legal para la Equidad de la Mujer",
    "texto": "Instalación y Sesiones. La Comisión Legal para la Equidad de la Mujer se instalará en un lapso no mayor de diez (10) días hábiles después de la instalación de la mesa directiva del Concejo Municipal y se reunirá por convocatoria de su Mesa Directiva, como mínimo una vez al mes o cuando lo considere necesario. Las decisiones de la Comisión serán adoptadas por mayoría simple.\nParágrafo Transitorio. La primera comisión Legal para la Equidad de la Mujer se instalará en un lapso no mayor de diez (10) días hábiles después de la sanción de este acuerdo."
  },
  "82": {
    "numero": 82,
    "titulo": "Sesiones Ordinarias – Reuniones",
    "texto": "Sesiones Ordinarias – Reuniones. Durante el periodo para el cual fue elegido el Concejo Municipal se reunirá por derecho propio cuatro (4) veces al año en periodos de sesiones ordinarias, así: el primer día calendario de los meses de febrero, mayo, agosto y noviembre para municipios de categorías tercera, cuarta, quinta y sexta.\nDurante dichos periodos y sus prórrogas, todos los días de la semana son hábiles para las reuniones del Concejo y sus comisiones. Los horarios serán señalados por los respectivos presidentes.\nLas Comisiones Permanentes sesionarán válidamente para ejercer sus funciones de control político en todo tiempo y momento correspondiente al periodo constitucional de elección de los Concejales, y para ejercer sus funciones normativas durante los períodos de sesiones ordinarias, sus prórrogas y extraordinarias.\nLas sesiones plenarias, al igual que las sesiones de las comisiones permanentes, durarán máximo cuatro (4) horas, a partir del momento en que el presidente las declarare abiertas. Pero, por decisión del órgano respectivo, podrán ser suspendidas o prorrogadas, o ser objeto de declaratoria de sesión permanente.\nDurante el desarrollo de las sesiones el Presidente podrá ordenar hasta dos (2) recesos por el término que considere necesario, con la aprobación de la mayoría de los asistentes a la sesión que conformen quórum decisorio. Vencido el término, reanudará la sesión sin interrupción alguna.\nCada período de sesiones ordinarias tendrá una duración de treinta (30) días calendario, prorrogables hasta por diez días (10) calendario más. La prórroga de las sesiones ordinarias se decidirá mediante proposición presentada por cualquier Concejal y ser aprobada por la mayoría simple de la plenaria."
  },
  "83": {
    "numero": 83,
    "titulo": "Modalidades de sesión",
    "texto": "El Concejo podrá sesionar bajo las siguientes modalidades:\n1. Sesión Plenaria. Es la reunión de la mayoría de los Concejales para tratar asuntos que, por la Constitución y la Ley, son de su competencia.\n1.1. Sesión Inaugural. Es aquélla con la cual se inicia cada nuevo período Constitucional del Concejo.\n1.2. Sesión de Instalación. Es aquella sesión con la cual se inicia todo período legal.\n1.3. Sesión de Clausura. Corresponde a la última sesión plenaria de la Corporación en cada Período Ordinario y la última de las Sesiones Extraordinarias. (Art. 131 Reglamento Interno)\n1.4. Sesión Secreta. La Corporación puede constituirse en Sesión Secreta cuando, por requerirlo el asunto que haya de tratarse, lo disponga la Mesa Directiva, o cuando en tal sentido se apruebe una Proposición.\n1.5. Sesiones Especiales.\n1.5.1. Cuando el Concejo se reúne a solicitud de la comunidad con el lleno de los requisitos señalados en éste reglamento y sólo se tratarán los asuntos para los cuales fue convocada.\n1.5.2. Cuando por alguna situación atípica debe reunirse el Concejo encontrándose en periodo de receso y deba cumplir o atender asuntos de orden constitucional o legal.\n1.6. Cabildo Abierto. Cuando el Concejo se reúne previo el lleno de los requisitos establecidos en la Ley 1757 de 2015 acerca de los mecanismos de participación ciudadana y democrática, así como de la Ley 388 de 1997 – Ordenamiento Territorial – y de este Reglamento.\n2. Sesión de Comisiones.\n2.1. Sesiones de Comisiones Permanentes. Son aquéllas en las cuales se surte el Primer Debate a los Proyectos de Acuerdo, se hacen citaciones de conformidad con el artículo 40 de la ley 136 de 1994 y se tratan los asuntos que la Corporación determine pertinentes, en cumplimiento de sus funciones.\n2.2. Sesiones de Comisiones Accidentales. Son aquellas en las cuales se reúnen los Concejales designados para tratar los asuntos que se les haya encomendado.\nParágrafo único. Para efecto de sesiones conjuntas se tomarán en cuenta las reglas señaladas en éste reglamento."
  },
  "84": {
    "numero": 84,
    "titulo": "Citaciones y Orden Interno",
    "texto": "Citaciones. La citación a las sesiones plenarias y a las comisiones, deberá hacerse a los Concejales por los presidentes, cuando al finalizar una sesión informe el día y la hora de la siguiente reunión, o por orden de éstos, a través de la secretaría, de manera expresa y oportuna, dejando constancia de la misma, por lo menos con veinticuatro (24) horas de anticipación, salvo en los casos de urgencia en que deba reunirse la plenaria o las Comisiones Permanentes.\nTratándose de elección de funcionarios o de integración de comisión, la citación se hará con tres (3) días de anticipación, dando a conocer a los Concejales citados el cargo por proveer, el nombre del candidato o candidatos nominados, su programación en el orden del día y la hora de la reunión.\nOrden Interno. Al recinto destinado para la realización de las sesiones del Concejo, podrán ingresar los miembros de la corporación, quienes participen con derecho a voz en sus deliberaciones, el personal administrativo y de seguridad, así como periodistas. La presidencia podrá autorizar el ingreso de otras autoridades y de particulares cuando no se afecte el normal desarrollo de las sesiones.\nEn dicho recinto, tendrán sillas determinadas los Concejales y los funcionarios de primer nivel del municipio.\nTratándose de reuniones no reservadas, a las barras podrán ingresar libremente las personas, pero el presidente regulará su ingreso cuando las circunstancias lo exijan y ejercerá el control aconsejable. Durante la sesión, podrá pedir que guarden compostura y silencio, y/o solicitar a la autoridad policial mandar salir a los perturbadores, e incluso ordenar el despeje de las barras.\nPara el mantenimiento del orden, el presidente impondrá a quien faltare al respeto debido a la corporación o ultrajare de palabra a cualquiera de sus miembros, según la gravedad de la falta, alguna de estas sanciones:\n1. Llamamiento al orden.\n2. Declaración pública de haber faltado al orden y al respeto debido.\n3. Suspensión en el uso de la palabra.\n4. Suspensión del derecho a continuar interviniendo en el debate o en la sesión.\n5. Desalojo inmediato del recinto.\n6. Suspensión del derecho a intervenir en los debates de la corporación por un lapso no inferior a dos (2) días ni superior a diez (10). Esta decisión es apelable ante la plenaria.\nParágrafo 1. Ninguna persona podrá portar armas en el recinto del Concejo, también estará prohibido ingerir bebidas alcohólicas, sustancias alucinógenas o fumar así se trate de cigarrillos electrónicos.\nParágrafo 2. En el caso de inasistencia reiterada del Concejal, sin excusa justificada, la mesa directiva comunicará al Tribunal Administrativo para originar la pérdida de investidura o a la Procuraduría General de la Nación como quiera que se constituiría como Falta a sus deberes como Servidor Público."
  },
  "85": {
    "numero": 85,
    "titulo": "Orden de las sesiones",
    "texto": "Orden de las sesiones. Llegada la hora para la cual ha sido convocada la sesión, el Presidente ordenará al secretario llamar a lista para verificar el quórum constitucional. Si a pesar del apremio a los ausentes, no se presentare el quórum requerido, transcurrida una (1) hora los asistentes podrán retirarse hasta nueva citación.\nVerificado el quórum, el presidente declarará abierta la sesión y ordenará al secretario dar lectura al orden del día.\nDurante el desarrollo de la sesión, los Concejales y quienes hayan sido citados o invitados deberán observar las reglas de consideración y respeto, procurando enaltecer el espíritu de la democracia.\nSi por haberse turbado el orden de la sesión, fuere conveniente diferir el tratamiento de un asunto previsto en la agenda del día, el presidente podrá disponer su aplazamiento hasta la sesión siguiente. Esta decisión es susceptible de apelación inmediata ante la plenaria, por cualquier Concejal.\nEn relación con el orden en el que deberán adelantarse las sesiones, se considerarán como faltas de los Concejales:\n1. El desconocimiento de los deberes que impone este reglamento, la Constitución y la Ley.\n2. El cometer actos de desorden e irrespeto en el recinto de sesiones.\n3. No presentar las ponencias en los plazos señalados, salvo excusa legítima."
  },
  "86": {
    "numero": 86,
    "titulo": "Sesiones Extraordinarias",
    "texto": "Sesiones Extraordinarias. El Concejo Municipal sesionará extraordinariamente por convocatoria que haga el Alcalde Municipal y por el término que éste le fije. Durante el período de sesiones extraordinarias el Concejo únicamente se ocupará de los asuntos que el Alcalde convoque, sin perjuicio de que éste ejerza la función de control político que le corresponde en todo tiempo y las funciones propias para el correcto funcionamiento de la Corporación."
  },
  "87": {
    "numero": 87,
    "titulo": "Orden del día",
    "texto": "Orden del día. La serie de asuntos que se someten en cada sesión a la información, discusión y decisión del Concejo pleno y sus comisiones permanentes, se llaman Orden del Día, el cual seguirá el siguiente orden y orientación:\n1. Llamado a lista y verificación de quórum.\n2. Lectura, discusión y aprobación del orden del día.\n3. Lectura, discusión y aprobación del acta de la sesión anterior.\n4. Citaciones a debate.\n5. Lectura y aprobación de proposiciones.\n6. Intervención de funcionarios citados o invitados.\n7. Lectura de comunicaciones.\n8. Proyectos de acuerdo que versen sobre planeación o el presupuesto municipal.\n9. Proyectos de acuerdo objetados por el alcalde.\n10. Informe de las comisiones permanentes.\n11. Proyectos de acuerdo para segundo debate. Se dará prelación a los de iniciativa popular, así como aquellos presentados por las Bancadas; los demás seguirán el orden de presentación de las ponencias.\n12. Informe de comisiones especiales y accidentales.\n13. Proposiciones y asuntos varios.\nParágrafo 1. El orden del día será elaborado por la mesa directiva y llevará la firma de sus integrantes y la del secretario.\nParágrafo 2. El orden del día puede ser alterado, a sugerencia de uno de los Concejales asistentes, por la respectiva plenaria o comisión, sin desconocer la prelación que por ley tiene la intervención de funcionarios citados en el ejercicio del control político que corresponde a la corporación.\nParágrafo 3. Previamente a cada sesión, será publicado el orden del día por un medio idóneo; éste incluye la fijación de su texto en un lugar visible de la secretaría, con no menos de una (1) hora de anticipación a la reunión."
  },
  "88": {
    "numero": 88,
    "titulo": "Orden del día para elecciones",
    "texto": "Orden del día para elecciones. El día que se realizaré cualquier elección, el orden del día contendrá exclusivamente los siguientes puntos:\n1. Llamado a lista y verificación del quórum.\n2. Lectura, discusión y aprobación del orden del día.\n3. Aprobación de actas.\n4. Elecciones.\n5. Comunicaciones y varios."
  },
  "89": {
    "numero": 89,
    "titulo": "Concepto de Debate",
    "texto": "Concepto. El debate, que es el sometimiento a discusión de cualquier proyecto o proposición sobre cuya adopción deba resolver el Concejo o una de sus comisiones, empieza al abrirlo el presidente y termina con la votación general.\nLa presidencia declara abierto un debate y permite su desarrollo cuando exista quórum deliberatorio. Las decisiones sólo pueden tomarse con la mayoría requerida."
  },
  "90": {
    "numero": 90,
    "titulo": "Intervenciones (Uso de la Palabra)",
    "texto": "Intervenciones (Uso de la Palabra). Para hacer uso de la palabra, se requiere autorización previa de la presidencia. Ella se concederá con sujeción al orden establecido en el artículo 17 del presente reglamento."
  },
  "91": {
    "numero": 91,
    "titulo": "Interpelación",
    "texto": "Interpelación. Es la solicitud al orador para que conceda el uso de la palabra, exclusivamente para la formulación de preguntas o de aclaración de algún aspecto que aquel esté tratando y requiere la autorización de la Presidencia.\nLa interpelación tendrá una duración máxima e improrrogable de diez (10) minutos. Si excede este límite o no se dirige solicitud de aclaración o pregunta, el presidente le retirará la autorización para interpelar y dispondrá que el orador continúe su exposición.\nEl orador podrá solicitar al Presidente no conceder la autorización de interpelación hasta tanto termine su intervención. En ningún caso se concederá más de dos (2) interpelaciones al orador.\nLos oradores en uso de la palabra sólo podrán ser interpelados cuando se trate de la formulación de preguntas o en solicitud de aclaraciones; si no fuere concisa y pertinente, el presidente podrá retirar la autorización para interpelar."
  },
  "92": {
    "numero": 92,
    "titulo": "Derecho de réplica",
    "texto": "Derecho de réplica. En todo debate se garantizará el derecho de réplica, a favor de quien sea contradicho en sus argumentos o cuando se expresen juicios de valor o inexactitudes. Al aludido o titular del derecho de réplica, se le concederá el uso de la palabra por cinco (5) minutos.\nEl presidente, al valorar la importancia del debate, podrá ampliar o reducir el número y el tiempo de las intervenciones.\nA las alusiones no se podrá contestar sino en la misma sesión o en la siguiente, en caso de que el aludido no se encontrare presente.\nCuando la alusión afecte el decoro o la dignidad de un partido o movimiento político con representación en el Concejo, el Presidente podrá conceder a uno de sus voceros el uso de la palabra por el mismo tiempo y en las condiciones indicadas."
  },
  "93": {
    "numero": 93,
    "titulo": "Mociones",
    "texto": "Mociones. Moción: Es una proposición especial que presentan uno o varios Concejales para recuperar el orden en el tratamiento de los temas o el debido procedimiento o la suficiente ilustración y la Presidencia la someterá a votación de inmediato. La moción es de tres clases:\n1. Moción de Orden: Cuando exista dispersión en el tratamiento del tema correspondiente al orden del día, se podrá solicitar Moción de Orden, con el fin de que las intervenciones se centren en el tema que se está tratando.\n2. Moción de Procedimiento: Cuando se considere que en el curso de la sesión no se está cumpliendo con lo dispuesto en el Reglamento Interno del Concejo, se podrá solicitar Moción de Procedimiento.\n3. Moción de Suficiente Ilustración: Cuando se considere que el debate sobre algún tema deba cerrarse porque existe suficiente ilustración respecto de este, cualquier Concejal podrá proponer que la plenaria acepte la moción de Suficiente Ilustración siempre y cuando hayan transcurrido más de cuarenta y cinco (45) minutos desde cuando se inició la discusión.\nEl presidente, previa consulta con los miembros de la mesa directiva, aceptará o negará la proposición, decisión que podrá ser apelada de inmediato. Declarada la suficiente ilustración, se entrará a votar.\nPara tales efectos el Presidente someterá a votación la proposición inmediatamente.\n4. Moción de suspender o levantar la sesión: También podrá proponer el aplazamiento de un debate en curso y que se decida la fecha para su continuación.\nEn el desarrollo de una sesión, si se propone que ella sea suspendida o levantada, debido a una moción de duelo o por circunstancias de fuerza mayor, se someterá a votación sin necesidad de debate alguno.\nLa proposición para declarar sesión permanente, presentada en los últimos treinta (30) minutos de la duración ordinaria de la sesión, será votada sin lugar a discusión previa.\nEn cualquier momento podrá solicitarse la verificación del quórum, a lo cual procederá de inmediato la presidencia. Comprobada la falta de quórum, se levantará la sesión.\nParágrafo 1. Durante la discusión de un asunto, cualquier Concejal podrá presentar mociones que decidirá la presidencia inmediatamente.\nParágrafo 2. El autor de una moción o proposición oral, podrá retirarla en cualquier momento, pero antes de ser sometida a votación o ser objeto de modificaciones."
  },
  "94": {
    "numero": 94,
    "titulo": "Proposiciones",
    "texto": "Proposiciones. Uno o más Concejales pueden presentar, por escrito y firmada, una proposición de las que admiten discusión, sin necesidad de incluir razones o argumentos.\nPuesta en consideración, el autor o el vocero de los proponentes podrá hacer uso de la palabra para sustentarla.\nLas proposiciones podrán ser:\n1. Principal: Es la que se presenta por primera vez a consideración y decisión de la plenaria o de una comisión.\n2. Supresivas: Cuando se propone suprimir total o parcialmente uno o más artículos de un proyecto de acuerdo, el contenido de un informe, ponencia o una proposición.\n3. Aditivas: Cuando se propone adicionar los artículos de un proyecto de acuerdo, o el texto de informe, ponencia o proposición.\n4. Sustitutivas: Cuando se propone sustituir el título, atribuciones o el articulado de un proyecto de acuerdo, el texto de un informe o una proposición. Esta proposición deberá presentarse por escrito de manera clara, concreta y completa. Se discute y vota primero. Si es aprobada, la inicial queda negada y viceversa. No podrá haber ninguna proposición sustitutiva de la sustitutiva. La proposición sustitutiva tiende a reemplazar a la principal. Se discute y decide primero que aquella que pretende sustituir. Aprobada la sustitutiva, desaparece la principal.\n5. Divisivas: Cuando se propone dividir un artículo o capítulo de un proyecto de acuerdo o el texto de un informe, ponencia o proposición.\n6. Asociativas: Cuando se propone reunir artículos o capítulos de un Proyecto de Acuerdo o ponencia.\n7. Transpositivas: Cuando se propone cambiar de ubicación uno o varios títulos o artículos de un proyecto de acuerdo o ponencia.\n8. De Citación: Cuando se propone citar para debate a funcionarios o autoridades de la administración municipal o Distrital. Las proposiciones de citación que versen sobre temas, asuntos o materias similares deberán ser acumuladas para ordenar y hacer más productiva la programación y el desarrollo de los debates, cuando así lo disponga el Presidente respectivo.\n9. De reconocimiento: Cuando se propone exaltar y reconocer la vida y obra de personas naturales o jurídicas. Este tipo de proposición solamente podrá presentarse ante la Plenaria de la Corporación, previo el cumplimiento de los requisitos que señale la Mesa Directiva.\n10. Modificativa: Es la que aclara la principal. Puede ser mediante la variación de su redacción sin cambiar el contenido material, o dividiendo o reuniendo sus temas para su mayor comprensión o claridad, o por otro procedimiento similar.\nParágrafo 1º. No será admisible la proposición sustitutiva de sustitutiva, ni modificativa de modificativa. Aprobada una modificación, se tendrá por rechazado el artículo o texto original. Por el contrario, negada una proposición de modificación, continuará abierta la discusión sobre la disposición original; pero sobre ésta podrá plantearse una nueva y última modificación. Cerrada la discusión sobre el artículo de un proyecto, el presidente preguntará a la plenaria o comisión si adopta el artículo original aprobado, o si adopta la modificación propuesta.\nParágrafo 2º. Corresponde a la Mesa Directiva de la Corporación reglamentar lo correspondiente a las proposiciones de reconocimiento."
  },
  "95": {
    "numero": 95,
    "titulo": "Prohibiciones durante el uso de la palabra",
    "texto": "Prohibiciones. Durante las sesiones ordinarias y extraordinarias en uso de la palabra el Concejal no podrá:\n1. Referirse a un tema diferente al que se encuentra en discusión y el desconocimiento de este deber obligará a la Presidencia a llamar la atención y suspender el derecho para continuar en la intervención.\n2. Dar lectura a discursos escritos, salvo notas o apuntes tomados para auxiliar la memoria.\n3. Hablar más de una vez cuando se trate de proposiciones para alterar o diferir el orden del día; cuestiones de orden; proposiciones de suspensión o que dispongan iniciar o continuar en el orden del día; apelaciones por lo resuelto en la presidencia o revocatorias; proposiciones para que un proyecto regrese a primer debate."
  },
  "96": {
    "numero": 96,
    "titulo": "Uso de la palabra de Funcionarios",
    "texto": "Uso de la palabra de Funcionarios. Los funcionarios citados o invitados por la Corporación hablarán en el momento en que el Presidente de la Plenaria o de las Comisiones Permanentes les conceda el uso de la palabra. Lo harán únicamente para referirse al tema debatido y tendrán para ello hasta treinta (30) minutos. Si estiman que necesitan más tiempo, deberán solicitar autorización al Presidente para continuar con el tema a tratar. En este caso el Presidente de la Plenaria o la Comisión Permanente fijará el tiempo adicional para su intervención."
  },
  "97": {
    "numero": 97,
    "titulo": "Incumplimiento de una citación",
    "texto": "Incumplimiento de una citación. Si el funcionario citado reglamentariamente para un debate incumple la citación sin justa causa, no radica el informe o el mismo es presentado extemporáneamente, o no da respuesta completa y veraz al cuestionario, el Presidente del Concejo o de la Comisión Permanente, según sea el caso, oficiosamente deberá dar traslado al organismo competente para que realice la correspondiente investigación disciplinaria.\nParágrafo único. El funcionario citado no podrá delegar su asistencia salvo por justa causa debidamente comprobada y aceptada previamente por la Mesa Directiva. Se entiende por justa causa la calamidad doméstica, la grave perturbación del orden público, la enfermedad debidamente certificada, la comisión de servicios y los períodos legales de vacaciones."
  },
  "98": {
    "numero": 98,
    "titulo": "Uso de la palabra de invitados y Comunidad",
    "texto": "Uso de la palabra de invitados y Comunidad. Para efectos de foros, debates de control político, la comunidad invitada a la Corporación hablará en el momento en que el Presidente de la Plenaria o de las comisiones permanentes les conceda el uso de la palabra. Lo harán únicamente para referirse al tema y tendrá para ello hasta quince (15) minutos. Si estiman que necesitan más tiempo, deberán solicitar Autorización del Presidente para continuar con el tema a tratar, en cuyo caso el Presidente de la Plenaria o de la Comisión Permanente fijará el tiempo adicional para su intervención."
  },
  "99": {
    "numero": 99,
    "titulo": "Grabación y Transcripción de las sesiones",
    "texto": "Grabación y Transcripción de las sesiones. Las sesiones del Concejo podrán ser grabadas en su totalidad. La grabación y la digitación del contenido de las grabaciones será responsabilidad del secretario de la corporación. En su transcripción se deberá conservar la fidelidad de lo expresado. Las grabaciones y su transcripción deberán conservarse en las condiciones de archivo apropiadas con copia de seguridad y su propósito será el de atender las solicitudes o consultas que eleven los honorables Concejales, las autoridades competentes o personas interesadas."
  },
  "100": {
    "numero": 100,
    "titulo": "Reglas en materia de votaciones",
    "texto": "Reglas en materia de votaciones. Cada Concejal tiene derecho a un voto, el cual es personal, intransferible e indelegable, el cual deberá reflejar las posiciones adoptadas por la Bancada a la que pertenece el votante, si el partido político del Concejal así lo determina.\nEl voto además es irrenunciable, pues una vez cerrada la discusión de un proyecto de acuerdo o de una proposición, los Concejales están obligados a votar afirmativa o negativamente, salvo su excusa, con autorización del presidente, cuando no haya estado presente en la primera decisión, o en el caso en que manifieste tener conflicto de interés en el asunto que se debate.\nNo existe la posibilidad de formular \"salvamentos de voto\" por ser ésta una facultad exclusivamente jurisdiccional.\nTratándose de elecciones, los Concejales deberán votar por uno de los candidatos o en blanco.\nEn toda votación el número de votos debe ser igual al número de Concejales presentes al momento de ejercer este derecho; si el resultado no coincide, el presidente anulará la elección y ordenará su repetición.\nMientras se halle en curso una votación, no se concederá el uso de la palabra, ni la presidencia aceptará que un Concejal se retire del recinto, salvo que previamente haya ejercido su derecho al voto.\nParágrafo. En las elecciones que efectúe el Concejo, se considera como voto en blanco la papeleta que, depositada en la urna, no contenga escrito alguno o cuando así se expresa. El voto será nulo cuando corresponde a un nombre distinto al de las personas por las cuales se está votando, o contiene un nombre ilegible, o contiene más de un nombre."
  },
  "101": {
    "numero": 101,
    "titulo": "Modos de votación",
    "texto": "Modos de votación. En el Concejo existen tres modos de votación:\n1. Ordinaria: Se efectúa dando los Concejales, con la mano, un golpe sobre el pupitre. Si se pidiere verificación, los que quieran el \"Sí\" se pondrán de pie y enseguida los que quieran el \"No\"; el secretario los contará e informará su número y el resultado de la votación. Se acudirá a la votación ordinaria en todos los casos en que no se requiera votación nominal o secreta.\n2. Nominal: Si la votación no debe ser secreta, puede ser nominal, a petición de cualquier Concejal, con el respaldo de la mayoría de los asistentes. En este caso, cada Concejal, al ser llamado en orden alfabético de apellidos por el secretario, contestará individualmente y en voz alta, \"Sí\" o \"No\". El resultado de la votación nominal se consignará en el acta, con expresión de los nombres de los Concejales que votaron por el \"Sí\" y de quienes votaron por el \"No\".\n3. Secreta: La votación secreta no permite identificar la forma como vota el Concejal. La votación secreta se hará por medio de:\n3.1. Balotas. Cada Concejal deposita una balota blanca para expresar su voto afirmativo o negra si fuere negativo.\n3.2. Papeletas. Cada Concejal escribirá en una papeleta, el nombre del candidato o el número de la plancha a elegir si fuere la forma. Una vez terminada la votación, el Secretario procederá a la incineración de las papeletas.\nParágrafo primero. Para el conteo en ambas modalidades, la Presidencia designará una Comisión Escrutadora, conformada por dos (2) Concejales de diferentes partidos políticos, quienes verificarán la votación y expresarán en voz alta el resultado.\nParágrafo segundo. Solo se podrá efectuar votación secreta para la elección de funcionarios que corresponda al Concejo y elección de Mesa Directiva cuando por plenaria fuere aprobada esta forma de votación. Cuando deba efectuarse votación secreta, el secretario llamará a cada Concejal por orden alfabético de apellidos, para que deposite la papeleta en la urna. Éste procederá depositando en la urna la respectiva papeleta, marcada con la leyenda \"Sí\" o \"No\", o tratándose de votación para elección de dignatarios estos deberán indicar el nombre por quien se manifieste su intensión.\nParágrafo tercero. El Concejal puede solicitar que su voto conste en el acta, si así lo indica en forma inmediata y públicamente.\n4. Remota: Se usará en los casos en que una Congresista haya optado por la modalidad de licencia de maternidad para mujeres en política, o esta haya sido extensiva a la licencia de paternidad, y siempre que la naturaleza de la iniciativa así lo permita. Esta modalidad se realizará utilizando Tecnologías de la Información y las Telecomunicaciones."
  },
  "102": {
    "numero": 102,
    "titulo": "Votación por partes",
    "texto": "Votación por partes. Un proyecto de acuerdo podrá ser objeto de votación por partes, de modo que sus artículos, o la enmienda o la proposición, sean sometidos a votación separadamente. La solicitud puede provenir de un Concejal o de quien tenga la iniciativa jurídica; si no hay consenso, decidirá la mesa directiva, después de abrir discusión hasta por un máximo de diez (10) minutos. Si se apoyare la moción, las partes que sean aprobadas serán sometidas luego a votación en conjunto."
  },
  "103": {
    "numero": 103,
    "titulo": "Empates",
    "texto": "Empates. En caso de empate en la votación de un proyecto, se procederá a una segunda votación en la misma sesión o en la inmediatamente siguiente, según lo disponga la presidencia. De presentarse nuevamente empate, se entenderá negada la propuesta o archivado el proyecto.\nSi el empate se produce en votación para elección de un funcionario, ésta se repetirá y si el empate subsiste, se decidirá por la suerte."
  },
  "104": {
    "numero": 104,
    "titulo": "Reglas especiales en materia de elecciones",
    "texto": "Reglas especiales en materia de elecciones. Al acto de elección se citará con tres (3) días de anticipación, conforme a la ley. En la fecha y hora indicada, el presidente abrirá la votación secreta.\nCada votante escribirá en su papeleta el nombre de uno de los candidatos al cargo por proveer y la depositará en la urna dispuesta para el efecto, en el orden de llamado a lista por el secretario.\nPreviamente, el presidente designará una comisión escrutadora, encargada de contar las papeletas depositadas e informar del resultado, indicando el número de votos obtenido por cada uno de los candidatos, los votos en blanco, los votos nulos, y el total de votos. Entregado el resultado, la presidencia preguntará a la corporación si declara legalmente elegido para el cargo o dignidad de que se trate y en el período correspondiente, al candidato que ha obtenido la mayoría de los votos. Si es Concejal que se hallare presente, o secretario reelegido, se le tomará el juramento de rigor; si se trata de funcionario que deba acreditar requisitos, se dispondrá su posesión para otra oportunidad dentro del término legal.\nParágrafo 1. En caso de que la plenaria mediante proposición solicitare a la mesa directiva la realización de la elección de los miembros de la mesa directiva siguiente periodo por votación nominal y pública, ésta podrá llevarse a cabo mediante las reglas de la ley 1431 de 2011 (votación nominal y pública) cuya votación estará sujeta quien obtenga la mayoría de votos. En todo caso para la elección del Primer Vicepresidente deberá tenerse en cuenta por derecho propio, a los miembros de los partidos que se declaren en oposición de conformidad con la Ley.\nParágrafo 2. Con el fin de prevenir acusaciones o demandas, los Concejales, al hacer una elección, tendrán en consideración el régimen de incompatibilidades y prohibiciones de que tratan los artículos 126 y 292 de la Constitución Política y 49 de la ley 617 de 2000."
  },
  "105": {
    "numero": 105,
    "titulo": "Funciones de control",
    "texto": "Funciones de control. Corresponde al Concejo ejercer función de control político a la administración municipal, a la personería municipal y a la contraloría municipal. Con tal fin podrá exigir informes escritos o citar a los secretarios de la Alcaldía, Directores de departamentos administrativos o entidades descentralizadas del orden municipal, al contralor y al personero, así como a cualquier funcionario municipal, excepto el alcalde, para que haga declaraciones orales sobre asuntos relacionados con la marcha del municipio.\nIgualmente, los Concejos municipales podrán invitar a los diferentes funcionarios del Orden Departamental, así como a los representantes legales de los organismos descentralizados y de los establecimientos públicos del orden nacional, con sedes en el respectivo departamento o municipio, en relación con temas de interés local."
  },
  "106": {
    "numero": 106,
    "titulo": "Características del control",
    "texto": "Características del control. El control que ejerce el Concejo tiene como fundamento la conveniencia política para el municipio, por ende, se entenderá por Control Político la exigencia de responsabilidad política que se le hace a los funcionarios que ejercen el poder en la rama ejecutiva del nivel municipal, al personero y al contralor, quienes deben rendir cuentas al Concejo por el cumplimiento de las funciones que le fueron asignadas previa y específicamente por mandato legal, constitucional o reglamentario."
  },
  "107": {
    "numero": 107,
    "titulo": "Citaciones a funcionarios",
    "texto": "Citaciones a funcionarios. La Plenaria del Concejo podrá citar a funcionarios de la administración pública municipal, para que en sesión rindan informes y/o absuelvan cuestionarios previamente enviados por la Corporación. La solicitud de citación se hará por cualquier Concejal o bancada mediante proposición que deberá ser aprobada por la mayoría simple de los asistentes a la respectiva sesión.\nAprobada la proposición, el Concejal o la Bancada citante radicarán en la Secretaria General del Concejo dentro del día hábil siguiente, el cuestionario propuesto para la sesión de control político. La Secretaría del Concejo colocará a disposición de los demás Concejales el cuestionario radicado con el propósito de que en el término de dos (02) días, le puedan adicionar otras preguntas. Vencido el anterior término se dispondrá por parte de la Mesa Directiva según el procedimiento indicado en el siguiente parágrafo.\nParágrafo 1. Procedimiento. Las citaciones se harán con una antelación mínima de cinco (5) días hábiles antes de la fecha programada para el debate, mediante acta escrita aprobada y firmada por la Mesa Directiva, que contenga fecha, lugar, hora y el respectivo formulario de preguntas.\nEl debate no podrá extenderse a asuntos ajenos al cuestionario y deberá encabezar el orden del día de la sesión. También podrá el Concejo solicitar informaciones escritas a otras autoridades municipales. En todo caso, las citaciones e informaciones deberán referirse a asuntos propios del cargo del respectivo funcionario.\nPara la elaboración de los formularios, se tendrá en cuenta dos aspectos:\n1. Los temas sobre los cuales se debe ejercer el control político teniendo en cuenta el espíritu de la Constitución que actualmente nos rige y la legislación vigente en áreas tales como: el cumplimiento de planes y programas, el manejo fiscal, la contratación municipal, la conservación y recuperación del medio ambiente, la prevención de hechos y la atención a la población afectada en casos de alto riesgo, el orden público, los derechos humanos, la seguridad y la convivencia y los aspectos de participación y democracia.\n2. Los procedimientos que permitan hacer una calificación cuantitativa y/o cualitativa no solo de una obra o programa, sino del conjunto de la actuación de los funcionarios o personas citadas. Para ello es deseable contar con tablas o matrices que se pueden encontrar en el Manual de Indicadores de Control Político que permiten a través de variables e indicadores calificar de una forma técnica y objetiva dicha actuación.\nDos días antes del debate como mínimo, el funcionario citado deberá entregar a la secretaría general del Concejo la respuesta por escrito y en medio magnético, con los soportes documentales que den veracidad o hayan sido relacionados en la absolución del cuestionario, la cual el secretario hará llegar por tardar un día antes de la sesión a todos los Concejales.\nParágrafo 2. Citaciones de Comisiones Permanentes. Las comisiones permanentes podrán citar a cualquier persona natural o jurídica para que en sesión especial rinda manifestaciones orales o escritas, sobre hechos relacionados directamente con el municipio. Los llamados a comparecer ante el Cabildo podrán abstenerse de participar solamente por causa debidamente justificada. De persistir la conducta del citado de no comparecer ante el llamado que hace la Corporación, dicho comportamiento será sancionado por la autoridad jurisdiccional competente como un incidente de desacato.\nParágrafo 3. Pluralidad de citaciones. Sólo tratándose de asuntos similares, podrán citarse varios funcionarios para la misma sesión.\nParágrafo 4. Citaciones no realizadas. Para llevar a cabo la citación, alguno de los Concejales citantes deberá estar presente al inicio y durante el debate, de lo contrario se cancelará. En el caso de que ninguno asista a la sesión, no podrá citarse nuevamente a los funcionarios sobre los mismos temas hasta el mismo período de sesiones del siguiente año, a menos que medien causas debidamente justificadas y aceptadas por la corporación."
  },
  "108": {
    "numero": 108,
    "titulo": "Uso de la palabra de Funcionarios en Control Político",
    "texto": "Uso de la palabra de Funcionarios. En debates de Control Político los funcionarios citados o invitados por la Corporación hablarán en el momento en que el Presidente de la Plenaria o de las Comisiones Permanentes les conceda el uso de la palabra. Lo harán únicamente para referirse al tema debatido y tendrán para ello hasta sesenta (60) minutos a criterio del Presidente de la Plenaria o de la Comisión. Si estiman que necesitan más tiempo, deberán solicitar autorización al Presidente para continuar con el tema a tratar. En este caso el Presidente de la Plenaria o la Comisión Permanente fijará el tiempo adicional para su intervención.\nEn las sesiones de control político al funcionario citado deberá concedérsele el uso de la palabra, para que se refiera a cada uno de los puntos controvertidos en el debate. El primer punto del orden del día de la sesión del Concejo será la intervención del funcionario citado si así se estima conveniente dado el grado de importancia del tema. Posteriormente tomarán la palabra los Concejales citantes por un máximo de 30 minutos cada uno, seguidos en su orden por los Concejales que se adhirieron la citación con un máximo de 15 minutos cada uno y finalmente los demás Concejales con un máximo de 10 minutos cada uno. Finalmente, uno de los citantes podrá intervenir de nuevo por 15 minutos para recoger las conclusiones del debate.\nParágrafo único. El funcionario citado podrá ceder tiempo de su intervención a otro funcionario de la misma dependencia para que éste intervenga y complemente la información una vez el citado haya finalizado la absolución del cuestionario ante la Plenaria del Concejo o ante la Comisión Permanente citante."
  },
  "109": {
    "numero": 109,
    "titulo": "Incumplimiento de una citación (Control Político)",
    "texto": "Incumplimiento de una citación. Si el funcionario citado reglamentariamente para un debate incumple la citación sin justa causa, no radica el informe o el mismo es presentado extemporáneamente, o no da respuesta completa y veraz al cuestionario, el Presidente del Concejo o de la Comisión Permanente, según sea el caso, oficiosamente deberá dar traslado al organismo competente para que realice la correspondiente investigación disciplinaria.\nLa inasistencia de un Secretario de Despacho a una citación hecha por el Concejo sin una excusa válidamente justificada o el incumplimiento a los requerimientos hechos por la Corporación dará lugar a que mediante proposición se solicite moción de censura para el funcionario cuando el municipio tenga una población superior a 25 mil habitantes o moción de observación para municipios con población inferior al mismo número de habitantes.\nParágrafo único. El funcionario citado no podrá delegar su asistencia salvo por justa causa debidamente comprobada y aceptada por la Mesa Directiva, enviada mínimo con dos (02) días de antelación a la fecha de citación. Se entiende por justa causa la calamidad doméstica, la grave perturbación del orden público, la enfermedad debidamente certificada, la comisión de servicios y los períodos legales de vacaciones. Corresponde al Presidente del Concejo aceptar la delegación hecha por el funcionario citado o aplazar y fijar nueva fecha para el debate."
  },
  "110": {
    "numero": 110,
    "titulo": "Uso de la palabra de invitados y Comunidad (Control Político)",
    "texto": "Uso de la palabra de invitados y Comunidad. Para efectos de foros, debates de control político, la comunidad invitada a la Corporación hablará en el momento en que el Presidente de la Plenaria o de las comisiones permanentes les conceda el uso de la palabra, para lo cual deberán inscribirse ante la secretaria del concejo municipal con una (1) hora de antelación a la sesión. Una vez realizada la inscripción los mismos podrán realizar su intervención únicamente para referirse al tema y tendrá para ello hasta quince (15) minutos a discreción del presidente. Si estiman que necesitan más tiempo, deberán solicitar autorización del Presidente para continuar con el tema a tratar, en cuyo caso el Presidente de la Plenaria o de la Comisión Permanente fijará el tiempo adicional para su intervención."
  },
  "111": {
    "numero": 111,
    "titulo": "Moción de observación",
    "texto": "Moción de observación. Por moción de observación se entiende el acto mediante el cual el Concejo en pleno, previo debate, observa la actuación de uno o varios funcionarios.\nParágrafo 1. Procedimiento. Al finalizar el debate y con la firma de por lo menos la tercera parte de los miembros de la corporación, se podrá proponer que el Concejo observe las decisiones del funcionario citado. La propuesta se votará en plenaria entre el tercero y el décimo día siguiente a la terminación del debate. Aprobada la moción por el voto de la mitad más uno de los miembros de la corporación, se comunicará al alcalde. Si fuere rechazada, no podrá presentarse otra sobre la misma materia, a menos que hechos nuevos la justifiquen.\nParágrafo 2. Votación. La votación se hará entre el tercero y el décimo día siguientes a la terminación del debate, con audiencia pública del funcionario respectivo. La votación será remota o nominal y pública, en este caso, cada Concejal, al ser llamado en orden alfabético de apellidos por el secretario, contestará individualmente y en voz alta, \"Sí\" o \"No\". El resultado de la votación nominal se consignará en el acta, con expresión de los nombres de los Concejales que votaron por el \"Sí\" y de quienes votaron por el \"No\". La aprobación de la moción de observación requerirá el voto afirmativo de las dos terceras partes de los miembros que integran la Corporación. Si fuere rechazada, no podrá presentarse otra sobre la misma materia a menos que la motiven hechos nuevos."
  },
  "112": {
    "numero": 112,
    "titulo": "Moción de Censura",
    "texto": "Moción de Censura. Por moción de censura se entiende el acto mediante el cual el Concejo en Pleno, después de realizado el debate de control político, censura la actuación de uno o varios funcionarios.\nParágrafo 1. Procedimiento. La moción de censura deberá ser propuesta por la mitad más uno de los miembros que componen el Concejo Municipal. Se propondrá moción de censura contra los Secretarios de Despacho del Alcalde por asuntos relacionados con las funciones propias del cargo o por desatención a los requerimientos y citaciones del Concejo.\nParágrafo 2. Votación. La votación se hará entre el tercero y el décimo día siguientes a la terminación del debate, con audiencia pública del funcionario respectivo. La votación será remota o nominal y pública, en este caso, cada Concejal, al ser llamado en orden alfabético de apellidos por el secretario, contestará individualmente y en voz alta, \"Sí\" o \"No\". El resultado de la votación nominal se consignará en el acta, con expresión de los nombres de los Concejales que votaron por el \"Sí\" y de quienes votaron por el \"No\". La aprobación de la moción de censura requerirá el voto afirmativo de las dos terceras partes de los miembros que integran la Corporación. Una vez aprobada, el funcionario quedará separado de su cargo. Si fuere rechazada, no podrá presentarse otra sobre la misma materia a menos que la motiven hechos nuevos. La renuncia del funcionario respecto del cual se haya promovido moción de censura no obsta para que la misma sea aprobada conforme a lo previsto en este artículo.\nParágrafo 3. Redondeo. Para el cálculo de las dos terceras partes de los miembros del Concejo se tendrán en cuenta las reglas de aproximación numérica y redondeo. Si el resultado es inferior a punto cinco (.5) se aproximará al número entero que antecede al resultado; si el resultado es igual o superior a punto cinco (.5) se aproximará al número entero que le sigue al resultado. La misma regla se aplicará para la moción de observación.\nParágrafo 4. Empates. En caso de empate en la votación de una moción de censura o de observación, se procederá a una segunda votación en la misma sesión o en la inmediatamente siguiente, según lo disponga la presidencia. De presentarse nuevamente empate, se entenderá negada la moción de censura u observación contra el funcionario."
  },
  "113": {
    "numero": 113,
    "titulo": "Retiro del Funcionario",
    "texto": "Retiro del Funcionario. Aprobada la moción de censura para un secretario de la administración municipal, el Presidente del Concejo comunicará mediante escrito dirigido al Alcalde la decisión de la Corporación para que éste proceda con la designación en el cargo de un nuevo secretario. El funcionario censurado deberá realizar el empalme respectivo de su cargo con el nuevo funcionario designado de conformidad con las disposiciones legales sobre la materia.\nParágrafo único. El desacato por parte de la Administración a la decisión del Concejo de censurar a un funcionario dará lugar a las sanciones legales y disciplinarias de los organismos judiciales y de control. En todo caso ningún funcionario podrá seguir en el ejercicio de sus funciones una vez se la haya censurado por parte del Concejo.\nLa Secretaría del Concejo informará a los organismos judiciales y de control sobre cualquier contravención o desacato a las decisiones tomadas por la Plenaria de la Corporación."
  },
  "114": {
    "numero": 114,
    "titulo": "Publicidad de los debates de Control Político",
    "texto": "Los debates de Control Político serán públicos y a él podrán concurrir miembros de la comunidad, medios de comunicación, funcionarios de la administración municipal, veedores municipales y demás organismos nacionales e internacionales que quieran presenciar el mismo."
  },
  "115": {
    "numero": 115,
    "titulo": "Iniciativa",
    "texto": "Iniciativa. La presentación de los proyectos de acuerdo ante la secretaría del Concejo, deberá hacerse en original y copia e incluirá su texto distribuido en título, encabezamiento, considerandos (en caso de ser necesario) y parte dispositiva (articulado); irán acompañados de la correspondiente exposición de motivos y conservarán el principio de unidad de materia. Sin el cumplimiento de estos requisitos, la presidencia devolverá el proyecto para su corrección.\nSon titulares de la iniciativa cualquiera de los Concejales individualmente considerados o agrupados en bancadas, así como también el alcalde, quien podrá actuar por intermedio del secretario o de los respectivos secretarios del despacho ejecutivo.\nEn las materias relacionadas con sus atribuciones, también tienen iniciativa el personero, el contralor y las juntas administradoras locales con jurisdicción en corregimientos o comunas del territorio del municipio.\nDel mismo modo, los acuerdos pueden ser de iniciativa popular en los términos que contempla la Ley 134 de 1994 modificado por la Ley 1757 de 2015 art. 9º literal \"c\" y sus concordantes y aquellas que la modifiquen o adicionen. Este medio de participación ciudadana, conforme a la respectiva ley, consiste en el derecho político de un grupo de ciudadanos que representen no menos del diez por ciento (10%) del censo electoral vigente en el municipio, para presentar proyectos de acuerdo. Se exceptúan los proyectos que sean de iniciativa exclusiva del alcalde; los que versen sobre asuntos presupuestales, fiscales o tributarios, y los de preservación y restablecimiento del orden público. El vocero presentará el proyecto respectivo y será convocado e intervendrá en todas las etapas del trámite.\nDe conformidad con los artículos 313 numeral 6 y 315 numeral 5 de la Constitución y 71 de la ley 136 de 1994, sólo por iniciativa del alcalde podrán ser dictados o reformados los acuerdos que versen sobre las siguientes materias:\n1. Planes de desarrollo y de ordenamiento territorial.\n2. Presupuesto anual de rentas y gastos.\n3. Estructura de la administración municipal y las funciones de sus dependencias, así como las escalas de remuneración correspondientes a las distintas categorías de empleos.\n4. Establecimientos públicos y empresas industriales o comerciales.\n5. Sociedades de economía mixta.\n6. Celebración de contratos.\n7. Facultades temporales y precisas al alcalde, de aquellas que corresponden al Concejo.\n8. Las demás que determinen la Constitución o la ley.\nParágrafo único. El alcalde, antes de su aprobación en plenaria, podrá coadyuvar en el impulso de cualquier proyecto de su iniciativa que curse en el Concejo cuando las circunstancias lo justifiquen."
  },
  "116": {
    "numero": 116,
    "titulo": "Distribución del proyecto",
    "texto": "Distribución del proyecto. Por disposición del presidente de la corporación, el proyecto recibido, una vez radicado y debidamente clasificado (por materia, autor, clase y comisión), será remitido por la secretaría a la comisión permanente respectiva. En ésta también se le radicará y clasificará, como acto previo a su tramitación en primer debate.\nParágrafo. La presidencia procurará que los acuerdos de especial importancia o que consten de más de diez (10) artículos, sean dados a conocer a los Concejales por cualquier medio idóneo, por lo menos con un (1) día de antelación al inicio del debate programado."
  },
  "117": {
    "numero": 117,
    "titulo": "Ponente",
    "texto": "Ponente. Corresponde al presidente de la corporación designar ponente o ponentes para cada proyecto de acuerdo, que será el mismo en los dos debates reglamentarios. Si las circunstancias lo aconsejan, podrá designar varios ponentes y un coordinador de los mismos. Teniendo en cuenta la significación, urgencia y extensión del trabajo, señalará un término para la presentación de las ponencias entre uno (1) y diez (10) días, prorrogable por una sola vez hasta por cinco (5) días más. En caso de incumplimiento se procederá a su reemplazo y dará trámite al organismo disciplinario correspondiente para lo de su competencia.\nParágrafo único. Antes de presentarse ponencia para primer debate, el proyecto podrá ser retirado por su autor. En los demás eventos se requerirá la aceptación de la comisión respectiva o de la plenaria."
  },
  "118": {
    "numero": 118,
    "titulo": "Acumulación de proyectos",
    "texto": "Acumulación de proyectos. Sólo en primer debate y antes de rendirse ponencia, el proyecto o proyectos que se refieran a un mismo tema podrán ser remitidos con nota explicativa por el presidente de la comisión al ponente del proyecto en estudio, quien a su juicio podrá acumularlos. Si ya los proyectos cursaren simultáneamente, en las mismas condiciones podrán acumularse por decisión de la presidencia."
  },
  "119": {
    "numero": 119,
    "titulo": "Requisitos legales",
    "texto": "Requisitos legales. Ningún proyecto será acuerdo municipal sin los requisitos siguientes:\n1. Haber sido aprobado en primer debate en la comisión permanente respectiva o en la accidental si fuere el caso.\n2. Haber sido aprobado en segundo debate en la plenaria de la corporación.\n3. Haber obtenido la sanción ejecutiva por parte del alcalde.\nParágrafo único. Para la obligatoriedad del acuerdo, es indispensable su promulgación."
  },
  "120": {
    "numero": 120,
    "titulo": "Presentación de la ponencia y apertura del debate",
    "texto": "Presentación de la ponencia y apertura del debate. Presentada y leída la ponencia, se someterá a discusión la proposición con que termina. El debate será abierto tan pronto la comisión decida dar primer debate al proyecto.\nSi la ponencia propone archivar o negar el proyecto, esta propuesta será sometida a votación al final del debate.\nA la aprobación del proyecto se procederá en este orden: articulado, considerandos, encabezamiento, título."
  },
  "121": {
    "numero": 121,
    "titulo": "Discusión",
    "texto": "Discusión. En la discusión de la ponencia, el ponente intervendrá para dar explicaciones, aclarar los temas debatidos y ordenar el trabajo.\nSe considerarán las modificaciones propuestas por el ponente, y las que puedan ser presentadas por Concejales o autoridades municipales con derecho a voz.\nEl respectivo presidente podrá ordenar los debates por artículos, grupo de artículos, materia o atendiendo a las enmiendas presentadas, según lo aconseje la naturaleza del proyecto, la conexidad entre las pretensiones y la mayor claridad."
  },
  "122": {
    "numero": 122,
    "titulo": "Enmiendas",
    "texto": "Enmiendas. Al tiempo de discutir el texto serán consideradas las modificaciones, adiciones o supresiones propuestas por el Ponente u otro Concejal, pertenezcan o no a la Comisión; por los secretarios de despachos o jefes de organismos descentralizados, Personero, Contralor, integrantes de las juntas administradoras locales, voceros de la iniciativa popular y representantes de la comunidad, en materias de su interés. Aquellas que la Comisión apruebe serán incluidas en el Texto Definitivo.\nLas enmiendas que se pretendan realizar a las iniciativas presentadas ante el cuerpo colegiado (Concejo Municipal) no podrán cambiar el sentido del acto en estudio.\nParágrafo único. Presentación de Enmiendas. Toda enmienda a los Proyectos de Acuerdo que estuvieren en curso en las Comisiones Permanentes observará los siguientes requisitos:\n1. El plazo para la presentación es hasta el cierre de la discusión del texto, mediante escrito dirigido a la Presidencia de la Comisión.\n2. Las enmiendas podrán hacerse a la totalidad del Proyecto o a parte del articulado.\n3. Las enmiendas deberán presentarse en forma de articulado, con el debido sustento legal o el fundamento de conveniencia, según el caso."
  },
  "123": {
    "numero": 123,
    "titulo": "Enmiendas a la Totalidad",
    "texto": "Enmiendas a la Totalidad. Serán enmiendas a la totalidad, aquellas que versen sobre la oportunidad, los principios o el espíritu del Proyecto; o las que propongan un texto completo alternativo al del proyecto, conservando el propósito de la iniciativa original."
  },
  "124": {
    "numero": 124,
    "titulo": "Enmiendas al Articulado",
    "texto": "Enmiendas al Articulado. Estas podrán ser de supresión, modificación o adición a algunos artículos o disposiciones del Proyecto."
  },
  "125": {
    "numero": 125,
    "titulo": "Enmiendas que Impliquen Erogación o Disminución de Ingresos",
    "texto": "Enmiendas que Impliquen Erogación o Disminución de Ingresos. Las enmiendas a un Proyecto de Acuerdo que supongan gasto público como: adición, disminución de partidas y apertura de rubros presupuestales, siempre requerirán certificación de disponibilidad presupuestal de la Secretaría de Hacienda y de impacto fiscal; sin este requisito se suspenderá el debate de la respectiva enmienda. (Art. 82 inciso 2°, Decreto 111 de 1996 y la ley 819 de 2003)"
  },
  "126": {
    "numero": 126,
    "titulo": "Participación ciudadana",
    "texto": "Participación ciudadana. En cumplimiento del precepto contenido en el artículo 77 de la ley 136 de 1994, toda persona natural o jurídica podrá presentar observaciones escritas sobre cualquier proyecto de acuerdo cuyo estudio y examen se esté adelantando en una de las comisiones permanentes, previa fijación de día, hora y duración de las intervenciones por la mesa directiva. Las mismas serán publicadas oportunamente en la Gaceta del Concejo."
  },
  "127": {
    "numero": 127,
    "titulo": "Proyecto aprobado",
    "texto": "Proyecto aprobado. Cerrado el debate y aprobado el proyecto, éste pasará de nuevo al ponente para su revisión y ordenación con las modificaciones que le hayan sido introducidas. Así mismo consignará la totalidad de las propuestas que hubieren sido consideradas en la comisión y las razones de las que fueron rechazadas.\nEl informe a la plenaria para efectos del segundo debate será suscrito por el ponente, o ponentes, y autorizado con las firmas del presidente y secretario de la comisión.\nA dicho informe serán anexadas las razones que hagan constar por escrito los Concejales que votaron en contra del proyecto."
  },
  "128": {
    "numero": 128,
    "titulo": "Negación o Archivo de Proyectos",
    "texto": "Negación o Archivo de Proyectos. El Proyecto que no recibiere Aprobación en Primer Debate, durante cualquiera de los períodos de sesiones ordinarias y extraordinarias de un período constitucional, será archivado; para que el Concejo se pronuncie sobre él deberá presentarse nuevamente. (Art. 75, Ley 136 de 1994.)\nCuando el informe de ponencia propone negar o archivar el proyecto, se debatirá esta propuesta y se someterá a votación.\nAprobado el archivo del proyecto, la secretaría de la Comisión Permanente informará al proponente, ponente o coordinador, indicando las causas de la decisión, los recursos y términos que tiene para apelar esta decisión."
  },
  "129": {
    "numero": 129,
    "titulo": "Apelación de Proyecto Negado u ordenado su archivo",
    "texto": "Apelación de Proyecto Negado u ordenado su archivo. El Proyecto de Acuerdo que hubiere sido negado y ordenado su archivo en Primer Debate, podrá ser nuevamente considerado por el Concejo mediante el recurso de apelación, a solicitud de su autor, de cualquier Concejal, del Gobierno Municipal o del vocero de los proponentes en el caso de la iniciativa popular. (Art. 73 Ley 136/94.)"
  },
  "130": {
    "numero": 130,
    "titulo": "Trámite de la Apelación",
    "texto": "Trámite de la Apelación. Planteado el recurso dentro de los cinco (5) días siguientes a la notificación de la decisión, el Presidente de la Comisión lo remitirá de inmediato al Presidente del Concejo, quien integrará, dentro de los tres (3) días siguientes, una Comisión Accidental para su estudio.\nEsta Comisión rendirá informe a la Plenaria, dentro de los ocho (8) días hábiles siguientes. La Plenaria, dentro de los dos (2) días hábiles siguientes, decidirá si acoge o rechaza la apelación. En el Primer evento, la Presidencia remitirá el Proyecto a una Comisión accidental o permanente que tenga relación o afinidad con el tema diferente de la de origen del proyecto, para que surta el trámite de Primer Debate. Si fuere negada la apelación se procederá a su archivo definitivo."
  },
  "131": {
    "numero": 131,
    "titulo": "Proyectos en Tránsito o en Estudio",
    "texto": "Proyectos en Tránsito o en Estudio. Son aquellos que reciben aprobación en Primer Debate y queda pendiente el Segundo Debate para un nuevo período de sesiones del Concejo o un nuevo periodo constitucional, salvo cuando se cite a extraordinarias para dar continuidad al estudio y aprobación o negación del proyecto; cuando se trate de un nuevo periodo constitucional, se repartirá de nuevo la Ponencia y se nombrarán nuevos ponentes, si cambian los inicialmente designados. (Art. 75 Ley 136 de 1994)."
  },
  "132": {
    "numero": 132,
    "titulo": "Proyectos en Suspensión",
    "texto": "Proyectos en Suspensión. Son aquellos que se encuentran en estudio en la comisión permanente o accidental y que aún no han sido votado(s), sus efectos se causan cuando deba suspenderse su trámite o su curso normal por disposición de la misma comisión o por reglamentación."
  },
  "133": {
    "numero": 133,
    "titulo": "Definición de Segundo Debate",
    "texto": "Definición. Segundo Debate es el conocimiento a fondo y discusión que la Plenaria les da a los proyectos de acuerdo, para su aprobación o no."
  },
  "134": {
    "numero": 134,
    "titulo": "Convocatoria para segundo debate",
    "texto": "Convocatoria para segundo debate. La Convocatoria la realiza el Presidente del Concejo. La fecha será fijada tres (3) días hábiles después de repartido el informe de ponencia para segundo (2°) debate, este reparto se realizará el mismo día del primer (1°) debate y aprobación, estos serán estudiados en el estricto orden en que hayan sido radicados ante la Secretaría General del Concejo.\nLa Secretaría General invitará a las autoridades y comunidades comprometidas en cada uno de los proyectos de acuerdo."
  },
  "135": {
    "numero": 135,
    "titulo": "Contenido del Informe de Ponencia para Segundo Debate",
    "texto": "Contenido del Informe de Ponencia para Segundo Debate. En el informe de Ponencia para Segundo Debate, el Ponente(s) deberá(n) consignar la totalidad de las propuestas que fueron consideradas por la Comisión, las aprobadas y, las razones del rechazo de las negadas. La omisión de este requisito imposibilitará a la Plenaria la discusión del Proyecto, hasta tanto el informe cumpla esta disposición.\nEl Informe de Ponencia para Segundo (2°) Debate, será suscrito por el Presidente de la Comisión Permanente o por quien haya hecho sus veces; por el Ponente o Coordinador de Ponentes y por el Secretario de la misma."
  },
  "136": {
    "numero": 136,
    "titulo": "Discusión en Segundo Debate",
    "texto": "Discusión en Segundo Debate. Leída la Ponencia por el Secretario General, el Ponente o Coordinador podrá explicar a la Plenaria, en forma sucinta, la significación y el alcance del Proyecto. A continuación, lo harán los Concejales interesados y las autoridades municipales con derecho a voz. Concluida la explicación, podrán intervenir los funcionarios, voceros y representantes de la comunidad.\nAprobada la proposición con que termina el informe de ponencia, se inicia la discusión del Texto Definitivo, el cual se discutirá globalmente, salvo que un Concejal solicite el análisis del articulado uno a uno o por bloques."
  },
  "137": {
    "numero": 137,
    "titulo": "Enmiendas en Segundo Debate",
    "texto": "Enmiendas. Se admitirán en la plenaria las enmiendas que tengan por finalidad subsanar errores, yerros o incorrecciones técnicas, terminológicas o gramaticales, así como las que no impliquen un cambio sustancial.\nNo se considerarán las enmiendas negadas en primer debate, salvo que se surtan por el procedimiento de la apelación.\nParágrafo único. En todo caso se tendrán en cuenta los parámetros establecidos en el artículo 107 y siguientes de éste reglamento en lo que sea aplicable."
  },
  "138": {
    "numero": 138,
    "titulo": "Devolución del proyecto a la comisión de origen",
    "texto": "Devolución del proyecto a la comisión de origen. De la iniciativa aprobada por la comisión podrá ser devuelta a ésta, para su reexamen en primer debate, cuando se observen serias discrepancias con la misma y se presenten razones de conveniencia. Si la comisión persiste en su posición, resolverá la plenaria.\nLa devolución del proyecto es también posible por la presidencia, cuando como consecuencia de las enmiendas introducidas o de la votación de los artículos, el texto resultare incongruente, incomprensible, confuso o repetitivo en algunos puntos, o fuere necesario realizar ajustes numéricos o de cifras, con el fin de, que en el plazo que se determine, se efectúe una redacción armónica que deje a salvo los acuerdos de la Mayoría. Devuelto el proyecto, la plenaria lo aprobará o rechazará en su conjunto, sin reabrir el debate concluido."
  },
  "139": {
    "numero": 139,
    "titulo": "Aprobación",
    "texto": "Aprobación. Declarada la suficiente ilustración, el presidente someterá a votación el contenido del proyecto en este orden: el articulado, los considerandos, el encabezamiento y el título. Así aprobado el proyecto, preguntará a la corporación si quiere que se convierta en acuerdo municipal.\nLa mesa directiva, dentro de los cinco (5) días hábiles siguientes, remitirá al alcalde para su sanción el proyecto de acuerdo aprobado por el Concejo.\nSi el alcalde no objetare dicho proyecto, lo sancionará como acuerdo y ordenará su promulgación. El acuerdo sancionado será publicado en la Gaceta del Concejo o en medio que se considere de acuerdo con las disposiciones contenidas en la Ley 136 de 1994, Ley 1551 de 2012 y Ley 1437 de 2011, dentro de los diez (10) días siguientes.\nEl proyecto votado negativamente por la plenaria, al entenderse rechazado, se archivará; podrá ser presentado de nuevo para que se someta a su consideración."
  },
  "140": {
    "numero": 140,
    "titulo": "Revisión de los acuerdos por el Gobernador",
    "texto": "Revisión de los acuerdos por el Gobernador. Dentro de los cinco (5) días siguientes a la sanción, el alcalde enviará copia del acuerdo al Gobernador del departamento para que cumpla con la atribución del numeral 10 del artículo 305 de la Constitución; en consecuencia, el Gobernador por motivos de inconstitucionalidad o de ilegalidad, podrá remitir los acuerdos al respectivo Tribunal Administrativo para que decida sobre su validez.\nLa revisión no suspende los efectos jurídicos de los acuerdos.\nLos acuerdos son de obligatorio cumplimiento mientras no sean derogados, o suspendidos o anulados por la jurisdicción contencioso-administrativa."
  },
  "141": {
    "numero": 141,
    "titulo": "Motivos",
    "texto": "Motivos. Los proyectos de acuerdo aprobados por el Concejo podrán ser objetados por el alcalde por los dos motivos siguientes: por considerarlos inconvenientes (objeción de inconveniencia) o por estimarlos contrarios a la Constitución Política o al ordenamiento jurídico del país (objeción de derecho)."
  },
  "142": {
    "numero": 142,
    "titulo": "Plazos",
    "texto": "Plazos. El alcalde dispone de cinco (5) días para devolver con objeciones un proyecto de no más de veinte artículos, de diez (10) días cuando el proyecto sea de veintiuno a cincuenta artículos y hasta de veinte (20) días cuando el proyecto exceda de cincuenta artículos."
  },
  "143": {
    "numero": 143,
    "titulo": "Devolución con objeciones",
    "texto": "Devolución con objeciones. Si el Concejo se encuentra sesionando, el proyecto devuelto será incluido por la mesa directiva en el orden del día de la siguiente sesión plenaria, en la cual el presidente nombrará una comisión accidental para que estudie los argumentos del alcalde en un plazo no mayor de tres (3) días.\nSi el Concejo estuviere en receso, el alcalde lo convocará a sesiones extraordinarias en la semana siguiente a la presentación de las objeciones, por un término no superior a cinco (5) días."
  },
  "144": {
    "numero": 144,
    "titulo": "Objeciones por inconveniencia",
    "texto": "Objeciones por inconveniencia. La comisión puede proponer que las objeciones sean declaradas fundadas, parcialmente fundadas, o infundadas.\nSi la plenaria declara las objeciones fundadas, el proyecto se archivará.\nSi decide declarar las objeciones parcialmente fundadas, el proyecto una vez corregido será devuelto y el alcalde lo sancionará dentro de los ocho (8) días siguientes.\nSi decide declarar las objeciones infundadas, el proyecto será devuelto y el alcalde deberá sancionarlo en plazo que no excederá de ocho (8) días.\nEn los dos últimos casos, si el alcalde omite el cumplimiento de sus obligaciones, el presidente del Concejo procederá a sancionar y promulgar el acuerdo correspondiente de conformidad como lo establece el Art. 4º de la Ley 177 de 1994."
  },
  "145": {
    "numero": 145,
    "titulo": "Objeciones de derecho",
    "texto": "Objeciones de derecho. Para las objeciones jurídicas se seguirá el mismo procedimiento dispuesto en el artículo inmediatamente anterior.\nSi las objeciones jurídicas no fueren acogidas, el alcalde enviará dentro de los diez días siguientes, el proyecto acompañado de una exposición de motivos de las objeciones al Tribunal Administrativo que tenga jurisdicción en el municipio. Si el Tribunal las considera fundadas, el proyecto se archivará. Si decidiere que son infundadas, el alcalde sancionará el proyecto dentro de los tres días siguientes al recibo de la comunicación respectiva. Si el tribunal considera parcialmente vaciado el proyecto, así lo indicará al Concejo para que se reconsidere.\nCumplido este trámite, el proyecto se remitirá de nuevo el Tribunal para fallo definitivo.\nParágrafo único. Objeciones de Derecho al Proyecto de presupuesto. Si el proyecto objetado fuere el de presupuesto, deberá enviarlo al Tribunal Administrativo dentro de los cinco (5) días siguientes a su recibo, y esta corporación se pronunciará dentro de los veinte (20) días hábiles siguientes. Mientras el tribunal decide regirá el proyecto de presupuesto presentado oportunamente por el alcalde, bajo su directa responsabilidad (decreto 111 de 1996, art. 109).\nSi las objeciones son declaradas fundadas por el tribunal, el proyecto se archivará y si son declaradas infundadas, el alcalde podrá sancionarlo dentro de los tres (3) días siguientes al recibo de la comunicación oficial. Pero, considerado parcialmente viciado, así lo indicará al Concejo para que se reconsidere y rehaga, oído el respectivo secretario de la alcaldía; cumplido este trámite, será devuelto al tribunal para fallo definitivo."
  },
  "146": {
    "numero": 146,
    "titulo": "Petición ciudadana",
    "texto": "Petición ciudadana. En cada período de sesiones ordinarias podrán celebrarse cabildos abiertos en los que, por iniciativa de un número no inferior al cinco por mil de los ciudadanos del censo electoral del municipio, se considerarán los asuntos que los residentes soliciten sean estudiados, siempre, y cuando sean de competencia de la respectiva corporación. Es obligación del alcalde, asistir al cabildo abierto."
  },
  "147": {
    "numero": 147,
    "titulo": "Materias del cabildo abierto",
    "texto": "Materias del cabildo abierto. Podrán ser materias del cabildo abierto cualquier asunto de interés para la comunidad. En caso de que la comunidad cite al alcalde, deberá adjuntar a las firmas el cuestionario que formulará al funcionario, el cual debe ser remitido por el presidente de la corporación, con mínimo cinco (5) días de antelación a la celebración del cabildo. El cuestionario deberá versar únicamente sobre asuntos de competencia del funcionario citado.\nParágrafo. A través del Cabildo Abierto no se podrán presentar iniciativas de acuerdo o resolución."
  },
  "148": {
    "numero": 148,
    "titulo": "Prelación",
    "texto": "Prelación. En los cabildos abiertos se tratarán los temas en el orden en que fueron presentados ante la respectiva secretaría. En todo caso el Cabildo Abierto deberá celebrarse a más tardar un mes después de la radicación de la petición.\nParágrafo único. Si la petición fue radicada cuando la corporación no se encontraba en sesiones ordinarias, el cabildo deberá realizarse en el siguiente periodo de sesiones ordinarias."
  },
  "149": {
    "numero": 149,
    "titulo": "Difusión del cabildo",
    "texto": "Difusión del cabildo. El Concejo municipal, dispondrá la amplia difusión de la fecha, el lugar y de los temas que serán objeto del cabildo abierto. Para ello, antes de la fecha de vencimiento para la fecha de inscripción de los participantes ordenarán la publicación de dos convocatorias en un medio de comunicación de amplia circulación y cuando fuere posible, a través de las tecnologías de la información y las comunicaciones, con diferencia no menor de diez (10) días entre una y otra."
  },
  "150": {
    "numero": 150,
    "titulo": "Asistencia y vocería",
    "texto": "Asistencia y vocería. A los cabildos abiertos podrán asistir todas las personas que tengan interés en el asunto. Además del vocero podrán intervenir, por la misma duración a la que tienen derecho por reglamento los respectivos miembros de la corporación, quienes se inscriban a más tardar tres (3) días antes de la realización del cabildo en la secretaría respectiva, presentando para ello un resumen escrito de su intervención.\nLuego de las intervenciones de la comunidad, el alcalde dará respuesta a sus inquietudes. Una vez surtido este trámite, los miembros de la corporación podrán hacer uso de la palabra en los términos que establece éste reglamento.\nParágrafo. Cuando los medios tecnológicos lo permitan, los cabildos abiertos serán transmitidos en directo a través de Internet o a través de los mecanismos que estime conveniente la mesa directiva de la corporación."
  },
  "151": {
    "numero": 151,
    "titulo": "Citación a funcionarios de la administración",
    "texto": "Citación a funcionarios de la administración. Por solicitud ciudadana derivada de la convocatoria al cabildo abierto conforme a esta ley, podrá citarse a funcionarios departamentales, municipales, distritales o locales, con cinco (5) días de anticipación, para que concurran al cabildo y para que respondan, oralmente o por escrito, sobre hechos relacionados con el tema del cabildo. La desatención a la citación sin justa causa será causal de mala conducta."
  },
  "152": {
    "numero": 152,
    "titulo": "Obligatoriedad de la respuesta",
    "texto": "Obligatoriedad de la respuesta. Una semana después de la realización del cabildo se realizará una sesión a la cual serán invitados todos los que participaron en él, en la cual se expondrán las respuestas razonadas a los planteamientos y solicitudes presentadas por los ciudadanos, por parte del mandatario y de la corporación.\nCuando se trate de un asunto relacionado con inversiones públicas municipales, distritales o locales, la respuesta deberá señalar el orden de prioridad de las mismas dentro del presupuesto y los planes correspondientes.\nSi las respuestas dadas por los funcionarios incluyen compromisos decisorios, estos serán obligatorios y las autoridades deberán proceder a su ejecución, previo cumplimiento de las normas constitucionales y legales."
  },
  "153": {
    "numero": 153,
    "titulo": "Sesiones fuera de la sede",
    "texto": "Sesiones fuera de la sede. Cuando se trate de asuntos que afecten específicamente a una localidad, corregimiento o comuna, la sesión de la corporación pública correspondiente podrá realizarse en el sitio en que la mesa directiva y el vocero estimen conveniente de manera concertada."
  },
  "154": {
    "numero": 154,
    "titulo": "Registro de los Cabildos Abiertos",
    "texto": "Registro de los Cabildos Abiertos. La Secretaría General de la corporación deberá llevar un registro de cada cabildo abierto, los temas que se abordaron, los participantes, las memorias del evento y la respuesta dada. Copia de este registro se enviará al Consejo Nacional de Participación y al Consejo Nacional Electoral."
  },
  "155": {
    "numero": 155,
    "titulo": "Generalidades y Obligatoriedad de Ley",
    "texto": "Generalidades y Obligatoriedad de Ley. En todo caso para aplicar los parámetros y procedimientos de los Cabildos Abiertos se deberá tener en cuenta lo establecido en la ley 134 de 1994 modificada por la Ley 1757 de 2015 \"Mecanismos de Participación Ciudadana\" y \"Promoción y Protección a la Participación Democrática\"."
  },
  "156": {
    "numero": 156,
    "titulo": "Definición de Oposición Política",
    "texto": "Definición. La oposición política es la función crítica que ejercen los partidos y movimientos políticos que no participan del gobierno de turno. La crítica al gobierno permite plantear y desarrollar alternativas políticas y ejercer control sobre las acciones del ejecutivo."
  },
  "157": {
    "numero": 157,
    "titulo": "Derecho fundamental a la Oposición",
    "texto": "Derecho fundamental a la Oposición. Entiéndase por este como el ejercicio autónomo de proponer alternativas políticas, disentir, criticar, fiscalizar y ejercer libremente el control político a la gestión de gobierno.\nEste derecho gozará de especial protección por el Estado y demás autoridades públicas, de conformidad con lo establecido en los artículos 40 y 112 de la Constitución Política de Colombia."
  },
  "158": {
    "numero": 158,
    "titulo": "Sujetos del Estatuto de la Oposición",
    "texto": "Sujetos. Las disposiciones normativas contenidas en el presente título serán aplicables a los representantes del nivel territorial de los partidos y movimientos políticos con personería jurídica.\nParágrafo único. Entiéndase por representantes a nivel territorial de los partidos y movimientos políticos con personería jurídica, aquellas personas electas para el periodo constitucional vigente al interior de la Corporación Pública."
  },
  "159": {
    "numero": 159,
    "titulo": "Declaración Política",
    "texto": "Declaración Política. Dentro del mes siguiente al inicio del gobierno, so pena de considerarse falta al régimen contenido en la ley 1475 de 2011 y ser sancionadas de oficio por la autoridad electoral, las organizaciones políticas deberán optar por:\n1. Declararse en Oposición.\n2. Declararse Independiente.\n3. Declararse Organización de Gobierno.\nLas organizaciones políticas que inscribieron al candidato electo como Alcalde, se tendrán como de Gobierno o en Coalición de Gobierno. En consecuencia, mientras dure su mandato no podrán acceder a los derechos que se le reconocen a las organizaciones políticas de oposición o independientes, fijadas en la ley.\nParágrafo 1. Las organizaciones políticas podrán por una sola vez y ante la autoridad electoral modificar su declaración política durante el periodo de gobierno.\nParágrafo 2. La declaración política o su modificación se adoptará de conformidad con lo establecido en los estatutos de cada partido o movimiento político con personería jurídica.\nParágrafo 3. Las organizaciones políticas con personería jurídica deberán registrar la declaración política o su modificación, ante la Registraduría Municipal. Adicionalmente deberá remitirse copia a la Mesa Directiva de la Corporación pública."
  },
  "160": {
    "numero": 160,
    "titulo": "Derechos de la Oposición",
    "texto": "Derechos de la Oposición. Las organizaciones políticas declaradas en oposición al Gobierno Municipal, tendrán los siguientes derechos:\n1. Acceso a la información y a la documentación oficial.\n2. Derecho de réplica.\n3. Participación en mesas directivas de plenarias de las corporaciones públicas de elección popular.\n4. Participación en la Agenda de las Corporaciones Públicas.\n5. Garantía del libre ejercicio de los derechos políticos.\n6. Derecho a participar en las herramientas de comunicación de las corporaciones públicas de elección popular.\n7. Derecho a la sesión exclusiva sobre el Plan de Desarrollo y presupuesto."
  },
  "161": {
    "numero": 161,
    "titulo": "Acceso a la Información y Documentación Oficial",
    "texto": "Acceso a la Información y Documentación Oficial. Las organizaciones políticas que se declaren en oposición tendrán derecho a que se les facilite con celeridad, la información y documentación oficial, dentro de los cinco (5) días siguientes a la presentación de la solicitud.\nLos correspondientes partidos deberán llevar un registro de las solicitudes que realicen en ejercicio de este derecho, en el que indicarán fecha, autoridad pública a la que se dirige, asunto, fecha de respuesta y si esta satisface sus pretensiones. Este registro será reportado a la Autoridad Electoral cada seis (6) meses.\nEl Consejo Nacional Electoral deberá llevar un registro de estas solicitudes, llevará la estadística al respecto y constatará el cumplimiento de los derechos que en esta materia asisten a la oposición.\nLo anterior, sin perjuicio de las acciones que se adelanten a efectos de proteger los derechos de la oposición.\nParágrafo 1. El Concejo no cobrará el valor de las fotocopias de documentos que se encuentran en la Corporación y sean solicitados en ejercicio de los derechos de oposición.\nParágrafo 2. A solicitud de la organización política declarada en oposición, la reproducción de la información se podrá realizar a través de medios electrónicos como disco compacto, memorias USB o correo electrónico, entre otros. No obstante, todas las solicitudes que se atiendan en los mencionados medios electrónicos deben ser suministrados por el/los peticionario(s)."
  },
  "162": {
    "numero": 162,
    "titulo": "Derecho de Réplica",
    "texto": "Derecho de Réplica. Las organizaciones políticas que se declaren en oposición, tendrán el derecho de réplica en los medios de comunicación social de acuerdo a la cobertura y correspondencia del nivel territorial, frente a tergiversaciones graves y evidentes o ataques públicos proferidos por el Alcalde, Secretarios de Despacho, Directores o Gerentes de Entidades Descentralizadas y por cualquier otro alto funcionario oficial.\nCuando los ataques mencionados se produzcan en alocuciones o intervenciones oficiales, haciendo uso de los espacios que la ley reserva para este tipo de funcionarios en los medios de comunicación social del Estado o que utilicen el espectro electromagnético, se solicitará la protección del derecho en los términos establecidos en la ley y se concederá en condiciones de equidad para que el representante de la organización de oposición pueda responder en forma oportuna, y con tiempos y medios similares, y que en todo caso garanticen una amplia difusión.\nCuando los ataques mencionados por una intervención o declaración de los funcionarios enunciados, transmitida en los noticieros y programas de opinión que se emitan en los medios de comunicación social del Estado, que utilicen el espectro electromagnético, el medio de comunicación donde se emitió la declaración deberá dar la oportunidad a la organización de oposición afectada de responder y controvertir el ataque. Cuando el medio de comunicación en el cual se haya emitido el ataque haya dado oportunidad de respuesta, no procederá en ningún caso el derecho de réplica.\nSi el medio no concede la oportunidad de responder al afectado y quien así se considere contacta al medio de comunicación, dentro de los tres días siguientes a la emisión de las declaraciones, y éste se niega a permitir su intervención, la organización de oposición afectada podrá acudir a la acción de protección de los derechos de oposición en los términos del artículo 28 de la Ley 1909 de 2018.\nEn todo caso, la réplica se otorgará con base en el principio de buena fe y de forma oportuna, y con tiempo y medio proporcionales, y en un espacio por lo menos similar al que suscitó su ejercicio, y en todo caso que garantice una difusión amplia con respeto por la libertad del noticiero o espacio de opinión para elaborar la respectiva nota informativa o de opinión. Los contenidos completos de la réplica deben estar disponibles en la versión electrónica de los medios de comunicación.\nParágrafo único. Para la aplicación del presente artículo se deberán tener en cuenta las disposiciones contenidas en el artículo 13 de la Ley 1909 de 2018 y la Resolución 3134 de 2018 del Consejo Nacional Electoral, en lo que sea referente a los Concejos Municipales o Distritales."
  },
  "163": {
    "numero": 163,
    "titulo": "Participación en la Mesa directiva de Plenaria del Concejo",
    "texto": "Participación en la Mesa directiva de Plenaria del Concejo. Las organizaciones políticas declaradas en oposición y con representación en la Corporación Pública, tendrán participación en la primera vicepresidencia de la mesa directiva de la Plenaria del Concejo. Los candidatos para ocupar la plaza que le corresponda a la oposición solo podrán ser postulados por dichas organizaciones.\nLa organización política que hubiese ocupado este lugar en la mesa directiva no podrá volver a ocuparlo hasta tanto no lo hagan las demás declaradas en oposición, salvo que por unanimidad así lo decidan.\nEsta representación debe alternarse en períodos sucesivos entre hombres y mujeres de conformidad con el estatuto de oposición, siempre que ello fuere posible.\nParágrafo único. No podrá ser elegido en la Mesa Directiva quien haya pertenecido a la misma el año inmediatamente anterior, así fuere parcialmente."
  },
  "164": {
    "numero": 164,
    "titulo": "Participación en la Agenda del Concejo",
    "texto": "Participación en la Agenda del Concejo. Los voceros de las bancadas de las organizaciones políticas declaradas en oposición y con representación en el Concejo, según sus prioridades y de común acuerdo entre ellos, tendrán derecho a determinar el orden del día de la sesión plenaria y ponentes, una (1) vez durante cada período de sesiones ordinarias de la Corporación Pública. El orden del día podrá incluir debates de control político. La mesa directiva deberá acogerse y respetar ese orden del día.\nEl orden del día que por derecho propio determinan los voceros de las bancadas de las organizaciones políticas declaradas en oposición, sólo podrá ser modificado por ellos mismos.\nParágrafo 1. Para la aplicación del presente artículo, el vocero de la bancada declarada en oposición, deberá informar a la Mesa Directiva con tres (3) días de antelación el ejercicio del derecho.\nParágrafo 2. Será considerada falta grave la inasistencia, sin causa justificada, por parte del funcionario de la administración municipal citado a debate de control político durante las sesiones en donde el orden del día haya sido determinado por las organizaciones políticas declaradas en oposición."
  },
  "165": {
    "numero": 165,
    "titulo": "Derecho a Participar en las Herramientas de Comunicación",
    "texto": "Derecho a Participar en las Herramientas de Comunicación de la Corporación Pública de Elección Popular. Las organizaciones políticas con representación en el concejo, declaradas en oposición tendrán derecho a una participación adecuada y equitativa en los programas de radio, televisión, publicaciones escritas y demás herramientas de comunicación que estén a cargo de la respectiva corporación pública de elección popular.\nParágrafo único. Para la aplicación del presente artículo se deberán tener en cuenta las disposiciones contenidas en el artículo 13 de la ley 1909 de 2018 y la Resolución 3134 de 2018 del Consejo Nacional Electoral, en lo que sea referente a los Concejos Municipales o Distritales."
  },
  "166": {
    "numero": 166,
    "titulo": "Transparencia y Rendición de Cuentas en el Plan de Desarrollo",
    "texto": "Transparencia y Rendición de Cuentas en el Plan de Desarrollo y Planes Plurianuales de Inversión. En el marco de la aprobación de los planes plurianuales de inversiones de los Planes de Desarrollo del nivel municipal, el respectivo Gobierno deberá hacer público en los portales web institucionales los programas y proyectos que se pretendan ejecutar. Además, deberán publicarse las modificaciones o adiciones a su articulado presentadas en el trámite de la construcción de dichos planes plurianuales y los Concejales autores de las mismas.\nEl gobierno municipal realizará audiencias públicas para que la ciudadanía pueda conocer los proyectos de inversión en el marco de los planes plurianuales y pueda presentar propuestas de priorización de las respectivas inversiones. Estas audiencias deberán realizarse según el caso, por localidades, comunas o barrios.\nIgualmente, antes de finalizar cada año del período constitucional, el alcalde municipal, presentará al Concejo, un informe de cumplimiento de metas del Plan de Desarrollo y ejecución del presupuesto de inversión.\nLa Administración Municipal deberá poner a disposición de la ciudadanía el informe en la página web y demás canales digitales que para tal efecto disponga cada entidad.\nEl informe será debatido en plenaria del Concejo dentro de los treinta (30) días siguientes de su radicación. Para ello, las organizaciones políticas declaradas en oposición y en independencia tendrán derecho a que se realice una sesión exclusiva en el Concejo para exponer sus posturas y argumentos frente a dicho informe. La presencia del gobierno será obligatoria.\nParágrafo único. En el informe deberá especificarse el cumplimiento de metas sobre el Plan de Desarrollo y el monto total de la inversión que se realizó en el municipio, en los corregimientos, comunas o localidades, la distribución sectorial de la inversión, los programas que se implementaron en cada sector y la entidad competente de su ejecución."
  },
  "167": {
    "numero": 167,
    "titulo": "Curules en las corporaciones públicas de elección popular",
    "texto": "Curules en las corporaciones públicas de elección popular de las entidades territoriales. El candidato que siga en votos a quien la autoridad electoral declare elegido Alcalde Distrital o Municipal, tendrá derecho personal a ocupar, en su orden, una curul en el Concejo, durante el periodo constitucional de esta corporación. Con la organización política a que pertenezca, podrá intervenir en las opciones previstas en el artículo 132 del reglamento y hará parte de la misma organización política.\nPosterior a la declaratoria de elección del cargo de Alcalde y previo al del Concejo, el candidato que ocupó el segundo puesto en votación, deberá manifestar por escrito ante la comisión escrutadora competente, su decisión de aceptar o no una curul en el Concejo.\nOtorgadas la credencial de alcalde, la autoridad electoral le expedirá, previa aceptación, la credencial como concejal a quien ocupó el segundo puesto en la votación para el mismo cargo y aplicará la regla general prevista en el artículo 263 de la Constitución para la distribución de las curules restantes de Concejos Distritales y Municipales.\nSi no hay aceptación de la curul se aplicará la regla general prevista en el artículo 263 de la Constitución política para la distribución de todas las curules del Concejo."
  },
  "168": {
    "numero": 168,
    "titulo": "Pérdida de derechos de la oposición",
    "texto": "Pérdida de derechos de la oposición. Los derechos reconocidos en la Ley 1909 de 2018 a las organizaciones políticas se mantendrán mientras esté vigente la declaración de oposición. En caso contrario se perderán.\nEn consecuencia, la Autoridad Electoral cancelará el correspondiente registro como organización política de oposición y reasignará los espacios en radio y televisión. A su vez, el Concejo elegirá un nuevo miembro de la mesa directiva."
  },
  "169": {
    "numero": 169,
    "titulo": "Derechos de los Independientes",
    "texto": "Derechos de los Independientes. Las organizaciones políticas que cuentan con representación en la corporación pública de elección popular, que no hacen parte del gobierno, ni de la oposición, deberán declararse como independientes. Sin perjuicio de los que le asisten a toda organización política, tendrán los siguientes derechos:\n1. Participar en las herramientas de comunicación de la corporación pública de elección popular.\n2. Postular los candidatos a la mesa directiva del Concejo, en ausencia de organizaciones políticas declaradas en oposición, o de postulaciones realizadas por éstas últimas.\nSi la organización modifica su declaración política, el Concejo elegirá nuevo miembro de la mesa directiva."
  }
};

const EXAMENES = {
  "1": [
    {
      "p": "¿Cuál es el número mínimo de Concejales que puede tener el Concejo Municipal?",
      "ops": [
        "5",
        "7",
        "9",
        "11"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál es el número máximo de Concejales que puede tener el Concejo Municipal?",
      "ops": [
        "15",
        "18",
        "21",
        "25"
      ],
      "r": 2
    },
    {
      "p": "¿Cuál es el periodo de permanencia de los Concejales?",
      "ops": [
        "2 años",
        "3 años",
        "4 años",
        "6 años"
      ],
      "r": 2
    },
    {
      "p": "¿Pueden los Concejales ser reelegidos?",
      "ops": [
        "No, nunca",
        "Sí, indefinidamente",
        "Solo una vez",
        "Solo dos veces"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 3, ¿en qué materias es autónomo el Concejo?",
      "ops": [
        "Solo en materia judicial",
        "Administrativa y presupuestal",
        "Solo en materia electoral",
        "Solo en materia fiscal"
      ],
      "r": 1
    },
    {
      "p": "¿Quién puede elegir al Personero según las atribuciones del Art. 4?",
      "ops": [
        "El Alcalde",
        "El Gobernador",
        "El Concejo Municipal",
        "La Procuraduría"
      ],
      "r": 2
    },
    {
      "p": "¿Con cuántos días de anticipación deben hacerse las citaciones a los Secretarios del Despacho del Alcalde?",
      "ops": [
        "3 días",
        "5 días",
        "8 días",
        "10 días"
      ],
      "r": 1
    },
    {
      "p": "¿Qué se requiere para aprobar una moción de censura según el Art. 4?",
      "ops": [
        "Mayoría simple",
        "Mitad más uno para proponerla y dos terceras partes para aprobarla",
        "Unanimidad",
        "Solo el voto del Presidente"
      ],
      "r": 1
    },
    {
      "p": "¿Qué establece el Parágrafo 4 del Art. 4 sobre contratación del Alcalde?",
      "ops": [
        "No requiere autorización del Concejo",
        "Requiere autorización del Concejo para empréstitos, vigencias futuras, enajenación de inmuebles, entre otros",
        "Solo aplica para contratos menores",
        "Solo aplica en municipios grandes"
      ],
      "r": 1
    },
    {
      "p": "¿Dónde sesionará ordinariamente el Concejo según el Art. 5?",
      "ops": [
        "En cualquier municipio del departamento",
        "En la cabecera municipal",
        "En la capital del departamento",
        "En Bogotá"
      ],
      "r": 1
    },
    {
      "p": "¿Quién convoca las sesiones extraordinarias del Concejo?",
      "ops": [
        "El Presidente del Concejo",
        "El Gobernador",
        "El Alcalde",
        "El Secretario General"
      ],
      "r": 2
    },
    {
      "p": "Según el Art. 5, ¿en qué casos pueden los Concejales sesionar de forma no presencial?",
      "ops": [
        "Cuando ellos lo decidan libremente",
        "Por razones de orden público, intimidación o amenaza declaradas por la Presidencia",
        "Solo los fines de semana",
        "Nunca está permitido"
      ],
      "r": 1
    },
    {
      "p": "¿Cómo se llaman las principales decisiones del Concejo según el Art. 6?",
      "ops": [
        "Decretos",
        "Resoluciones",
        "Acuerdos",
        "Circulares"
      ],
      "r": 2
    },
    {
      "p": "¿Quién suscribe los contratos de la Corporación según el Art. 6?",
      "ops": [
        "El Secretario General",
        "El Presidente del Concejo",
        "La Mesa Directiva en conjunto",
        "El Alcalde"
      ],
      "r": 1
    },
    {
      "p": "¿Qué consecuencia tienen las reuniones del Concejo realizadas fuera de la sede oficial sin cumplir la ley, según el Art. 7?",
      "ops": [
        "Son válidas igualmente",
        "Son inválidas y sus decisiones ilegales e ineficaces",
        "Requieren ratificación posterior",
        "Son válidas si asisten la mayoría"
      ],
      "r": 1
    },
    {
      "p": "¿Qué es el quórum deliberatorio según el Art. 8?",
      "ops": [
        "La mayoría absoluta de los miembros",
        "La asistencia de al menos una cuarta parte de los miembros",
        "Las dos terceras partes",
        "La totalidad de los miembros"
      ],
      "r": 1
    },
    {
      "p": "¿Qué es el quórum decisorio según el Art. 8?",
      "ops": [
        "La cuarta parte de los miembros",
        "La asistencia de la mayoría de los asistentes",
        "Un tercio de los miembros",
        "Solo el Presidente y un Vicepresidente"
      ],
      "r": 1
    },
    {
      "p": "¿En qué artículo de la Constitución se fundamentan los Principios Generales de la función Administrativa, según el Art. 9?",
      "ops": [
        "Art. 209",
        "Art. 313",
        "Art. 312",
        "Art. 134"
      ],
      "r": 0
    },
    {
      "p": "Según el Art. 10, ¿cómo debe interpretarse el Reglamento cuando haya dificultades interpretativas?",
      "ops": [
        "Según la voluntad del Presidente",
        "Según el sentido lógico y literal, y los artículos 25 a 32 del Código Civil",
        "Solo según jurisprudencia internacional",
        "No hay reglas de interpretación"
      ],
      "r": 1
    },
    {
      "p": "¿Qué ley regula el funcionamiento del Congreso, aplicable por integración normativa según el Art. 11?",
      "ops": [
        "Ley 136 de 1994",
        "Ley 5ª de 1992",
        "Ley 1551 de 2012",
        "Ley 974 de 2005"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 12, ¿qué ocurre si hay incompatibilidad entre la Constitución y el Reglamento Interno?",
      "ops": [
        "Prevalece el Reglamento Interno",
        "Prevalecen las disposiciones constitucionales y legales",
        "Se somete a votación del Concejo",
        "Decide el Alcalde"
      ],
      "r": 1
    },
    {
      "p": "¿Qué es una bancada según el Art. 13?",
      "ops": [
        "Un comité técnico del Concejo",
        "Los miembros elegidos por un mismo partido, movimiento o grupo significativo de ciudadanos",
        "Una comisión accidental",
        "El conjunto de empleados del Concejo"
      ],
      "r": 1
    },
    {
      "p": "¿A quién deben entregar las bancadas el documento de constitución según el Art. 14?",
      "ops": [
        "Al Alcalde",
        "A la Secretaría de la Corporación",
        "Al Gobernador",
        "A la Procuraduría"
      ],
      "r": 1
    },
    {
      "p": "¿Puede una sola persona ejercer las funciones de vocero y coordinador de una bancada?",
      "ops": [
        "No, deben ser personas distintas",
        "Sí, según el Art. 14",
        "Solo con autorización del Concejo",
        "Solo si el partido lo permite expresamente por escrito al Gobernador"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál NO es una facultad de las Bancadas según el Art. 16?",
      "ops": [
        "Promover citaciones o debates",
        "Presentar mociones",
        "Nombrar al Alcalde",
        "Postular candidatos"
      ],
      "r": 2
    },
    {
      "p": "Según el Art. 17, ¿cuánto tiempo máximo tiene una bancada para intervenir por tema?",
      "ops": [
        "10 minutos",
        "20 minutos",
        "30 minutos",
        "45 minutos"
      ],
      "r": 2
    },
    {
      "p": "¿Cuántas veces, como máximo, puede intervenir un Concejal en la discusión de un proyecto sobre el mismo tema, según el Art. 19?",
      "ops": [
        "Una vez",
        "Dos veces",
        "Tres veces",
        "Sin límite"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 20, ¿qué proyectos tienen programación preferente en el orden del día?",
      "ops": [
        "Los presentados por el Alcalde",
        "Los presentados a nombre de una bancada",
        "Los presentados por el Secretario",
        "Los más antiguos"
      ],
      "r": 1
    },
    {
      "p": "¿Qué deben dejar los Concejales sobre sus posiciones en los proyectos de acuerdo, según el Art. 21?",
      "ops": [
        "Una grabación de audio",
        "Constancia escrita",
        "Un comunicado de prensa",
        "Nada, no es obligatorio"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 22, ¿cuántos minutos máximo tiene la Administración Municipal para intervenir en un debate de control político citado por una bancada?",
      "ops": [
        "30 minutos",
        "45 minutos",
        "Una hora",
        "Dos horas"
      ],
      "r": 2
    },
    {
      "p": "¿Cuántos miembros integran la Mesa Directiva del Concejo según el Art. 24?",
      "ops": [
        "Dos: Presidente y Vicepresidente",
        "Tres: Presidente, Primer y Segundo Vicepresidente",
        "Cuatro miembros",
        "Solo el Presidente"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál es el periodo de la Mesa Directiva del Concejo según el Art. 24?",
      "ops": [
        "Dos años calendario",
        "Un año institucional, de enero a diciembre",
        "Cuatro años",
        "Seis meses"
      ],
      "r": 1
    },
    {
      "p": "¿Quién elige al Secretario General y a los integrantes de las Comisiones Permanentes según el Art. 24?",
      "ops": [
        "El Alcalde",
        "La Mesa Directiva",
        "La Plenaria del Concejo Municipal",
        "El Gobernador"
      ],
      "r": 2
    }
  ],
  "2": [
    {
      "p": "¿Qué día se instalan los Concejos Distritales y Municipales según el Art. 25?",
      "ops": [
        "1 de enero",
        "2 de enero",
        "10 de enero",
        "1 de febrero"
      ],
      "r": 1
    },
    {
      "p": "¿Hasta qué fecha máximo puede reunirse el Concejo para la sesión inaugural según el Art. 25?",
      "ops": [
        "5 de enero",
        "10 de enero",
        "15 de enero",
        "31 de enero"
      ],
      "r": 1
    },
    {
      "p": "¿Quién preside la junta preparatoria en la sesión inaugural?",
      "ops": [
        "El Alcalde",
        "El Secretario General anterior",
        "El concejal a quien corresponda el primer lugar por orden alfabético de apellidos",
        "El Gobernador"
      ],
      "r": 2
    },
    {
      "p": "¿Cuál de estos documentos NO se exige a los Concejales antes de su posesión según el Art. 25?",
      "ops": [
        "Hoja de vida",
        "Certificado de antecedentes disciplinarios",
        "Declaración de Bienes y Rentas",
        "Certificado de afiliación a un partido"
      ],
      "r": 3
    },
    {
      "p": "Según el Art. 25, ¿qué plazo máximo puede otorgar el presidente de la Junta Preparatoria si un Concejal no puede aportar sus documentos?",
      "ops": [
        "5 días",
        "10 días",
        "15 días",
        "20 días"
      ],
      "r": 1
    },
    {
      "p": "¿Qué juramento hace el Presidente provisional según el Art. 26?",
      "ops": [
        "Juro lealtad al partido",
        "Invocando la protección de Dios, juro defender la Constitución y desempeñar fielmente los deberes del cargo",
        "Prometo servir a mi municipio",
        "Ninguno, no se exige juramento"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 26, ¿ante quién toman posesión los Vicepresidentes?",
      "ops": [
        "Ante el Alcalde",
        "Ante el Gobernador",
        "Ante el Presidente del Concejo",
        "Ante el Secretario General"
      ],
      "r": 2
    },
    {
      "p": "¿Qué se entona al inicio de las sesiones ordinarias y extraordinarias según el Parágrafo 1 del Art. 26?",
      "ops": [
        "Solo el Himno Nacional",
        "El Himno Nacional y el del Municipio",
        "Ningún himno",
        "Solo el himno departamental"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo 3 del Art. 26, ¿cuánto tiempo tiene un Concejal para resolver una inhabilidad o incompatibilidad sobreviniente?",
      "ops": [
        "1 mes",
        "2 meses",
        "3 meses",
        "6 meses"
      ],
      "r": 2
    },
    {
      "p": "¿Se pagan las sesiones especiales de instalación e inaugurales del primer año según el Parágrafo 4 del Art. 26?",
      "ops": [
        "Sí, siempre",
        "No, no serán pagadas",
        "Solo la mitad del valor",
        "Depende del municipio"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál es el primer periodo legal de sesiones ordinarias según el Art. 27?",
      "ops": [
        "Del 1 al 28 de enero",
        "Del 1 al 28/29 de febrero",
        "Del 1 al 31 de marzo",
        "Del 1 al 30 de abril"
      ],
      "r": 1
    },
    {
      "p": "¿Cuántas veces al año sesiona ordinariamente el Concejo según el Art. 27?",
      "ops": [
        "Dos veces",
        "Tres veces",
        "Cuatro veces",
        "Seis veces"
      ],
      "r": 2
    },
    {
      "p": "¿Por cuántos días puede prorrogarse cada período ordinario según el Parágrafo 1 del Art. 27?",
      "ops": [
        "5 días",
        "10 días",
        "15 días",
        "20 días"
      ],
      "r": 1
    },
    {
      "p": "¿Quién convoca las sesiones extraordinarias según el Parágrafo 2 del Art. 27?",
      "ops": [
        "El Presidente del Concejo",
        "El alcalde municipal",
        "El Gobernador",
        "La Mesa Directiva"
      ],
      "r": 1
    },
    {
      "p": "¿Qué debe constar en el acta de cada sesión según el Art. 28?",
      "ops": [
        "Solo el resultado de las votaciones",
        "Asistentes, ausentes, excusas, temas debatidos y decisiones adoptadas",
        "Solo la fecha y hora",
        "Solo los nombres de los Concejales presentes"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 28, ¿qué debe hacerse con el Acta de la sesión anterior al abrir una nueva sesión?",
      "ops": [
        "Destruirla",
        "Sometterla a discusión y aprobación",
        "Enviarla al Gobernador",
        "Archivarla sin revisión"
      ],
      "r": 1
    },
    {
      "p": "¿Cómo se llama el órgano oficial de publicidad del Concejo según el Art. 29?",
      "ops": [
        "Boletín Municipal",
        "Gaceta del Concejo",
        "Diario Oficial",
        "Informativo Legislativo"
      ],
      "r": 1
    },
    {
      "p": "¿Quién es el director de la Gaceta del Concejo según el Art. 29?",
      "ops": [
        "El Presidente del Concejo",
        "El Alcalde",
        "El secretario de la corporación",
        "El Gobernador"
      ],
      "r": 2
    },
    {
      "p": "Según el Art. 30, ¿en qué artículo constitucional se fundamentan las funciones constitucionales del Concejo?",
      "ops": [
        "Art. 209",
        "Art. 312",
        "Art. 313",
        "Art. 314"
      ],
      "r": 2
    },
    {
      "p": "¿Quién elige al Personero y al Contralor Municipal según el Art. 30?",
      "ops": [
        "El Alcalde",
        "El Gobernador",
        "El Concejo Municipal",
        "La Procuraduría"
      ],
      "r": 2
    },
    {
      "p": "Según el Art. 30, numeral 1.13, ¿cuántos miembros deben proponer la moción de censura?",
      "ops": [
        "La tercera parte",
        "La mitad más uno",
        "Las dos terceras partes",
        "La totalidad"
      ],
      "r": 1
    },
    {
      "p": "¿A quién corresponde aceptar la renuncia de los Concejales cuando el Concejo está en receso, según el Art. 30 numeral 1.14?",
      "ops": [
        "Al Presidente del Concejo",
        "Al Secretario General",
        "Al Alcalde",
        "Al Gobernador"
      ],
      "r": 2
    },
    {
      "p": "Según el Art. 30 numeral 2.16, ¿cómo está compuesta la Mesa Directiva que elige el Concejo?",
      "ops": [
        "Un presidente y un vicepresidente",
        "Un presidente y dos vicepresidentes",
        "Tres presidentes rotativos",
        "Un presidente y tres vicepresidentes"
      ],
      "r": 1
    },
    {
      "p": "¿Qué ley regula la creación de Fondos de Solidaridad y Redistribución de Ingresos según el Art. 30 numeral 2.22?",
      "ops": [
        "Ley 136 de 1994 y 617 de 2000",
        "Ley 142 de 1994 y 632 de 2000",
        "Ley 1551 de 2012",
        "Ley 152 de 1994"
      ],
      "r": 1
    },
    {
      "p": "¿Sobre qué tema puede el Concejo llevar a cabo procesos de concertación con la comunidad según el Art. 31?",
      "ops": [
        "Presupuestos Participativos",
        "Elección de Alcalde",
        "Elección de Concejales",
        "Modificación de la Constitución"
      ],
      "r": 0
    },
    {
      "p": "¿Qué ley regula las reglas de delegación de funciones del Concejo al Alcalde según el Art. 31?",
      "ops": [
        "Ley 136 de 1994",
        "Ley 489 de 1998",
        "Ley 617 de 2000",
        "Ley 1551 de 2012"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál de estas conductas SÍ está prohibida al Concejo según el Art. 32?",
      "ops": [
        "Aprobar el presupuesto municipal",
        "Decretar auxilios o donaciones a personas naturales o jurídicas de derecho privado",
        "Elegir al Personero",
        "Citar a debates de control político"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 32, ¿qué sucede si un Concejal acepta un cargo en la administración pública?",
      "ops": [
        "No pasa nada",
        "Pierde su investidura",
        "Debe pagar una multa",
        "Se suspende temporalmente"
      ],
      "r": 1
    },
    {
      "p": "¿Puede el Concejo dar votos de censura a actos oficiales según el Art. 32?",
      "ops": [
        "Sí, libremente",
        "No, está prohibido, aunque puede pedir la revocación de actos ilegales o inconvenientes",
        "Solo si lo aprueba el Alcalde",
        "Solo en sesión extraordinaria"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 32 numeral 9, ¿qué le está prohibido a un Concejal respecto a las bancadas?",
      "ops": [
        "Pertenecer a una bancada",
        "Adscribirse a una bancada diferente a la de su partido o movimiento por el cual fue elegido",
        "Votar con su bancada",
        "Asistir a reuniones de bancada"
      ],
      "r": 1
    }
  ],
  "3": [
    {
      "p": "¿Cuántos integrantes conforman la Mesa Directiva del Concejo según el Art. 33?",
      "ops": [
        "Dos: presidente y un vicepresidente",
        "Tres: un presidente y dos vicepresidentes",
        "Cuatro miembros",
        "Solo el presidente"
      ],
      "r": 1
    },
    {
      "p": "¿La dignidad de Presidente o Vicepresidente del Concejo equivale a un nuevo cargo o empleo público?",
      "ops": [
        "Sí, es un nuevo empleo público",
        "No, en ningún caso es asimilable a un nuevo cargo o empleo público",
        "Solo si dura más de un año",
        "Depende del municipio"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál es el periodo de la Mesa Directiva según el Art. 33?",
      "ops": [
        "Dos años calendario",
        "Un año institucional, del 1 de enero al 31 de diciembre",
        "Cuatro años",
        "Seis meses"
      ],
      "r": 1
    },
    {
      "p": "¿Qué tipo de mayoría se requiere para elegir al Presidente del Concejo según el Art. 34?",
      "ops": [
        "Mayoría absoluta",
        "Mayoría simple de los Concejales asistentes con quórum decisorio",
        "Dos terceras partes",
        "Unanimidad"
      ],
      "r": 1
    },
    {
      "p": "En caso de empate persistente en la elección del Presidente, ¿cómo se dirime según el Art. 34?",
      "ops": [
        "Gana el de mayor edad",
        "Por sorteo o suerte entre los candidatos empatados",
        "Decide el Alcalde",
        "Se aplaza un año"
      ],
      "r": 1
    },
    {
      "p": "¿Cuántas veces como máximo se repite la votación en caso de empate antes de recurrir al sorteo, según el Art. 34?",
      "ops": [
        "Una vez",
        "Dos veces",
        "Tres veces",
        "Cinco veces"
      ],
      "r": 2
    },
    {
      "p": "Según el Parágrafo 3 del Art. 34, ¿quién NO puede ser Presidente del Concejo?",
      "ops": [
        "Quien sea el concejal más joven",
        "Quien haya pertenecido a la Mesa Directiva el año inmediatamente anterior, aunque sea parcialmente",
        "Quien pertenezca a la oposición",
        "Quien tenga menos de 5 años de experiencia"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 35, ¿ante quién se posesiona el Presidente electo de la Mesa Directiva?",
      "ops": [
        "Ante el Alcalde",
        "Ante el Gobernador",
        "Ante quien se encuentre actuando como tal",
        "Ante el Secretario General únicamente"
      ],
      "r": 2
    },
    {
      "p": "¿Cuál de las siguientes es una función del presidente del Concejo según el Art. 36?",
      "ops": [
        "Sancionar acuerdos como Alcalde",
        "Convocar, presidir y dirigir las sesiones del Concejo en pleno",
        "Nombrar al Personero sin intervención del Concejo",
        "Ejercer función judicial"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 36, ¿qué puede hacer un Concejal si no está de acuerdo con una decisión del Presidente sobre la aplicación del reglamento?",
      "ops": [
        "Nada, la decisión es definitiva",
        "Apelar ante la Plenaria",
        "Acudir directamente a un juez",
        "Renunciar a su cargo"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 36 numeral 18, ¿cuántos días hábiles tiene el Presidente para llamar al candidato que llene una vacancia absoluta?",
      "ops": [
        "2 días",
        "3 días",
        "5 días",
        "10 días"
      ],
      "r": 1
    },
    {
      "p": "¿Quién acepta la renuncia voluntaria de un Concejal cuando el Concejo está en receso, según el Art. 36 numeral 16?",
      "ops": [
        "El Presidente del Concejo",
        "El Secretario General",
        "El Alcalde",
        "El Gobernador"
      ],
      "r": 2
    },
    {
      "p": "Según el Art. 36, ¿ante qué organismo representa el Presidente al Concejo en seminarios y congresos?",
      "ops": [
        "La Procuraduría",
        "FENACON (Federación Nacional de Concejos)",
        "El Ministerio del Interior",
        "El Congreso de la República"
      ],
      "r": 1
    },
    {
      "p": "¿Quién suple las faltas temporales del Presidente del Concejo según el Art. 37?",
      "ops": [
        "El Secretario General",
        "El Primer Vicepresidente, y si no es posible, el Segundo",
        "El Alcalde",
        "Cualquier Concejal de mayor edad"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 37, ¿qué ocurre con las faltas absolutas del Presidente?",
      "ops": [
        "Las suple automáticamente el Vicepresidente de forma indefinida",
        "Determinan la celebración de una nueva elección por el resto del período",
        "No requieren acción alguna",
        "Se nombra directamente al Alcalde"
      ],
      "r": 1
    },
    {
      "p": "¿Qué se nombra cuando faltan el Presidente, el Primer y el Segundo Vicepresidente para presidir una sesión, según el Art. 37?",
      "ops": [
        "Un Presidente ad hoc",
        "Se cancela la sesión obligatoriamente",
        "Asume el Secretario General",
        "Asume el Alcalde"
      ],
      "r": 0
    },
    {
      "p": "Según el Art. 38, ¿ante quién son apelables las decisiones del Presidente del Concejo en materia política?",
      "ops": [
        "Ante el Tribunal Administrativo",
        "Ante la Plenaria de la Corporación",
        "Ante el Gobernador",
        "Ante el Consejo de Estado"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál es una función del Primer Vicepresidente según el Art. 39?",
      "ops": [
        "Sancionar acuerdos municipales",
        "Suplir al Presidente en sus ausencias temporales o accidentales",
        "Elegir al Personero",
        "Presidir el Concejo de forma permanente"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 39, ¿qué función tiene el Segundo Vicepresidente respecto a los Concejales nuevos?",
      "ops": [
        "Sancionarlos",
        "Darles inducción cuando lleguen por primera vez a la Corporación",
        "Elegirlos",
        "Removerlos"
      ],
      "r": 1
    },
    {
      "p": "¿Quién integra y elige la Mesa Directiva del Concejo según el Art. 40?",
      "ops": [
        "El Alcalde",
        "El Gobernador",
        "La Plenaria del Concejo Municipal",
        "El Secretario General"
      ],
      "r": 2
    },
    {
      "p": "Según el Art. 40, ¿cuántos integrantes de un mismo partido pueden estar en la Mesa Directiva, como regla general?",
      "ops": [
        "Hasta tres",
        "No más de uno, salvo excepciones",
        "Sin límite",
        "Solo dos"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo 1 del Art. 40, ¿puede un Concejal ser reelegido en dos periodos consecutivos en la Mesa Directiva?",
      "ops": [
        "Sí, sin restricción",
        "No, está prohibido",
        "Solo si su partido lo solicita",
        "Solo en caso de empate"
      ],
      "r": 1
    },
    {
      "p": "¿A quién corresponde definir la agenda general del Concejo según el Parágrafo 2 del Art. 40?",
      "ops": [
        "Al Alcalde",
        "A la Mesa Directiva, concertada con los voceros de las Bancadas",
        "Al Secretario General únicamente",
        "Al Gobernador"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo 4 del Art. 40, ¿a quién corresponde asumir Ad hoc una dignidad de la Mesa Directiva si no se puede ocupar en propiedad?",
      "ops": [
        "Al Concejal de mayor edad",
        "Al Concejal que según orden alfabético de apellido esté de primero",
        "Al Secretario General",
        "Al Alcalde"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál es una función de la Mesa Directiva según el Art. 41?",
      "ops": [
        "Elegir al Alcalde",
        "Elaborar el Plan de Acción anual conforme al MIPG",
        "Sancionar acuerdos municipales",
        "Nombrar al Gobernador"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 41 numeral 7, ¿a quién puede solicitar la Mesa Directiva la declaratoria de pérdida de investidura de un Concejal?",
      "ops": [
        "A la Procuraduría",
        "Al tribunal administrativo departamental",
        "Al Consejo de Estado",
        "Al Congreso"
      ],
      "r": 1
    },
    {
      "p": "¿Con qué frecuencia mínima se reúne la Mesa Directiva durante los periodos de sesiones según el Parágrafo único del Art. 41?",
      "ops": [
        "Una vez al mes",
        "Una vez a la semana",
        "Cada dos semanas",
        "Solo cuando hay sesión plenaria"
      ],
      "r": 1
    },
    {
      "p": "¿Quién conforma el Comité de Coordinación Política según el Art. 42?",
      "ops": [
        "Solo el Presidente del Concejo",
        "El Presidente de la corporación y los Jefes, Voceros o Coordinadores de las Bancadas",
        "El Alcalde y su gabinete",
        "El Secretario General y los Concejales nuevos"
      ],
      "r": 1
    },
    {
      "p": "¿Con qué frecuencia se reúne el Comité de Coordinación Política según el Art. 42?",
      "ops": [
        "Una vez al mes",
        "Por lo menos una vez a la semana durante cada periodo de sesiones",
        "Solo al inicio del año",
        "Cada quince días"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál es una función del Comité de Coordinación Política según el Art. 42?",
      "ops": [
        "Aprobar el presupuesto municipal",
        "Proponer la agenda de trabajo de la corporación",
        "Elegir al Secretario General",
        "Sancionar a los Concejales"
      ],
      "r": 1
    }
  ],
  "4": [
    {
      "p": "Según el Art. 43, ¿cuál es uno de los deberes del Concejal?",
      "ops": [
        "Revelar información reservada",
        "Guardar secreto sobre los asuntos que demanden reserva",
        "Usar su cargo para beneficio personal",
        "Faltar a las sesiones libremente"
      ],
      "r": 1
    },
    {
      "p": "¿Qué debe declarar el Concejal antes de tomar posesión y al retirarse del cargo, según el Art. 43?",
      "ops": [
        "Su afiliación política",
        "El monto de sus bienes y rentas, bajo juramento",
        "Su historial académico",
        "Sus antecedentes familiares"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 43, ¿en qué bancada debe actuar el Concejal?",
      "ops": [
        "En cualquiera que elija libremente",
        "Exclusivamente en la del Partido o Movimiento Político por el cual fue elegido",
        "En la del Alcalde",
        "En ninguna, los Concejales no pertenecen a bancadas"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál es un derecho del Concejal según el Art. 44?",
      "ops": [
        "A voto secreto siempre",
        "A voz durante las sesiones conforme al reglamento",
        "A no asistir a las sesiones",
        "A ser remunerado sin asistir"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 44, ¿qué tipo de voto tienen los Concejales en general?",
      "ops": [
        "Voto secreto siempre",
        "Voto nominal y público, remoto y excepcionalmente secreto",
        "Voto delegado",
        "Voto por correspondencia"
      ],
      "r": 1
    },
    {
      "p": "¿Dentro de cuántos días debe pagarse el honorario mensual de los Concejales según el Art. 44 numeral 6?",
      "ops": [
        "Los primeros 5 días del mes siguiente",
        "Los primeros 10 días",
        "Los primeros 15 días",
        "Al final del mes"
      ],
      "r": 0
    },
    {
      "p": "Según el Art. 44, ¿a qué porcentaje de subsidio del Fondo de Solidaridad Pensional puede ser beneficiario un Concejal?",
      "ops": [
        "50%",
        "65%",
        "75%",
        "100%"
      ],
      "r": 2
    },
    {
      "p": "¿Qué entidades dan capacitación gratuita a los Concejales según el Art. 44 numeral 12?",
      "ops": [
        "Universidades privadas",
        "El SENA, la ESAP y las Corporaciones Autónomas Regionales",
        "El Ministerio de Educación",
        "Solo el Concejo Municipal"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 45, ¿cuántas sesiones ordinarias anuales se pagan en municipios de categoría especial, primera y segunda?",
      "ops": [
        "80 sesiones",
        "100 sesiones",
        "150 sesiones",
        "200 sesiones"
      ],
      "r": 2
    },
    {
      "p": "¿Cuántas sesiones ordinarias anuales se pagan en municipios de categoría tercera a sexta según el Art. 45?",
      "ops": [
        "50 sesiones",
        "80 sesiones",
        "100 sesiones",
        "150 sesiones"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo Segundo del Art. 45, ¿qué Concejales se exceptúan de esta liquidación de honorarios?",
      "ops": [
        "Los de municipios pequeños",
        "Los de la ciudad de Bogotá",
        "Los de categoría especial",
        "Ninguno, todos están incluidos"
      ],
      "r": 1
    },
    {
      "p": "¿Con qué se incrementan anualmente los honorarios de los Concejales según el Art. 45?",
      "ops": [
        "Con el salario mínimo",
        "Con un porcentaje equivalente a la variación del IPC del año anterior",
        "Con un 10% fijo",
        "No se incrementan"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 46, ¿a quiénes se les reconoce el valor de transporte?",
      "ops": [
        "A todos los Concejales por igual",
        "A los Concejales que residan en zonas rurales y deban desplazarse a la cabecera municipal",
        "Solo al Presidente del Concejo",
        "A ningún Concejal"
      ],
      "r": 1
    },
    {
      "p": "¿Están sujetos a retención en la fuente los pagos de transporte a Concejales según el Art. 46?",
      "ops": [
        "Sí, siempre",
        "No, no estarán sujetos a retención en la fuente",
        "Solo si superan cierto monto",
        "Depende del municipio"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 47, ¿bajo qué ley se establece el pago oportuno de honorarios?",
      "ops": [
        "Ley 136 de 1994",
        "Ley 617 de 2000",
        "Ley 2461 de 2025",
        "Ley 1551 de 2012"
      ],
      "r": 2
    },
    {
      "p": "¿A qué tienen derecho los Concejales en materia de seguridad social según el Art. 48?",
      "ops": [
        "Solo a salud",
        "Pensión, salud, ARL y cajas de compensación familiar",
        "Solo a pensión",
        "Ninguno, no aplica para Concejales"
      ],
      "r": 1
    },
    {
      "p": "¿Implica vínculo laboral con la entidad territorial la cotización a seguridad social de los Concejales, según el Art. 48?",
      "ops": [
        "Sí, siempre",
        "No, no implica vínculo laboral",
        "Solo en municipios grandes",
        "Depende del Alcalde"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 49, ¿cómo se calcula el ingreso base de cotización de los Concejales?",
      "ops": [
        "Es un valor fijo nacional",
        "El total de honorarios anuales por sesiones ordinarias dividido entre doce (12)",
        "Es el salario mínimo legal",
        "Lo determina cada Concejal libremente"
      ],
      "r": 1
    },
    {
      "p": "¿Quién debe aprobar previamente los gastos de viaje por comisiones oficiales de los Concejales según el Art. 50?",
      "ops": [
        "El Alcalde",
        "La plenaria del Concejo Municipal",
        "El Secretario General",
        "El Gobernador"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 51, ¿qué porcentaje de retención en la fuente se aplica a los Concejales declarantes de renta?",
      "ops": [
        "5%",
        "10%",
        "15%",
        "20%"
      ],
      "r": 1
    },
    {
      "p": "¿Qué se entiende por violencia contra las mujeres en política según el Art. 52?",
      "ops": [
        "Solo agresiones físicas",
        "Toda acción, conducta u omisión que cause daño basada en elementos de género y afecte sus derechos políticos",
        "Solo violencia verbal",
        "Únicamente delitos sexuales"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 53, ¿qué es la 'interseccionalidad'?",
      "ops": [
        "Un tipo de votación",
        "Los elementos por los cuales las mujeres son violentadas de manera simultánea por género, raza, edad u otras características",
        "Un cargo dentro del Concejo",
        "Un mecanismo de participación ciudadana"
      ],
      "r": 1
    },
    {
      "p": "¿Qué establece la presunción de riesgo extraordinario de género según el Art. 53?",
      "ops": [
        "Que las mujeres deben demostrar el riesgo siempre",
        "Que ante solicitud de protección de mujeres lideresas, la autoridad debe partir de que existe riesgo extraordinario",
        "Que no aplica ninguna protección especial",
        "Que solo aplica para mujeres mayores de 50 años"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 54, ¿qué es la violencia simbólica contra las mujeres en política?",
      "ops": [
        "Agresión física directa",
        "Actos que refuerzan estereotipos de género mediante imágenes, gestos o comentarios que naturalizan la subordinación de la mujer",
        "Un tipo de delito sexual",
        "Restricción económica únicamente"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál de estas es una categoría de violencia contra la mujer en política según el Art. 54?",
      "ops": [
        "Violencia digital",
        "Violencia deportiva",
        "Violencia académica",
        "Violencia turística"
      ],
      "r": 0
    },
    {
      "p": "Según el Art. 55, ¿es exhaustiva la lista de manifestaciones de violencia política contra la mujer?",
      "ops": [
        "Sí, son las únicas posibles",
        "No, no son exhaustivas y pueden ser concurrentes",
        "Solo aplican 5 de las 14 mencionadas",
        "Solo aplica en campañas electorales"
      ],
      "r": 1
    },
    {
      "p": "¿Qué prohíbe el Art. 56 durante el desarrollo de los debates?",
      "ops": [
        "Cualquier intervención de las bancadas",
        "Cualquier acto que configure manifestaciones de violencia contra las mujeres en política",
        "Las votaciones nominales",
        "Las citaciones de control político"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 58, ¿quién garantiza los canales de comunicación para las mujeres en ejercicio de sus derechos políticos?",
      "ops": [
        "El Alcalde",
        "El concejo municipal, en cabeza de la mesa directiva",
        "El Gobernador",
        "La Procuraduría"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 59, ¿cuándo debe el Concejo rendir cuentas sobre prevención de violencia política contra las mujeres?",
      "ops": [
        "Cada mes",
        "En el último periodo de sesiones de cada anualidad",
        "Solo al final del periodo de 4 años",
        "Nunca es obligatorio"
      ],
      "r": 1
    },
    {
      "p": "¿En qué ley se fundamentan principalmente las disposiciones sobre violencia política contra las mujeres en los Arts. 52 al 59?",
      "ops": [
        "Ley 136 de 1994",
        "Ley 2453 de 2025",
        "Ley 617 de 2000",
        "Ley 974 de 2005"
      ],
      "r": 1
    }
  ],
  "5": [
    {
      "p": "¿Cuál es el período institucional del Secretario del Concejo según el Art. 60?",
      "ops": [
        "Seis meses",
        "Un (1) año, del 1 de enero al 31 de diciembre",
        "Dos años",
        "Cuatro años, igual al de los Concejales"
      ],
      "r": 1
    },
    {
      "p": "¿Qué debe preceder la elección del Secretario según el Art. 60?",
      "ops": [
        "Una decisión unilateral del Presidente",
        "Una Convocatoria Pública reglada por la Ley",
        "Una recomendación del Alcalde",
        "Ningún requisito previo"
      ],
      "r": 1
    },
    {
      "p": "¿Qué requisitos mínimos debe acreditar una persona para ser Secretario General del Concejo según el Art. 60?",
      "ops": [
        "Título universitario obligatorio",
        "Título de bachiller o experiencia administrativa mínima de dos (2) años",
        "Ser abogado",
        "Ser Concejal en ejercicio"
      ],
      "r": 1
    },
    {
      "p": "¿Dentro de qué plazo se realiza la primera elección del Secretario al iniciar el período constitucional, según el Art. 60?",
      "ops": [
        "Los primeros 5 días de enero",
        "Los primeros 10 días de enero",
        "Los primeros 15 días de enero",
        "El primer mes completo"
      ],
      "r": 1
    },
    {
      "p": "Para los tres años subsiguientes del período constitucional, ¿en qué mes se realiza la elección o reelección del Secretario según el Art. 60?",
      "ops": [
        "Diciembre",
        "Enero",
        "Noviembre",
        "Octubre"
      ],
      "r": 2
    },
    {
      "p": "Según el Parágrafo 1 del Art. 60, ¿dentro de cuántos días hábiles debe el Secretario electo tomar posesión?",
      "ops": [
        "10 días hábiles",
        "15 días hábiles",
        "20 días hábiles",
        "30 días hábiles"
      ],
      "r": 1
    },
    {
      "p": "¿Es posible prorrogar el plazo de posesión del Secretario por fuerza mayor o caso fortuito según el Parágrafo 1 del Art. 60?",
      "ops": [
        "No, el plazo es improrrogable",
        "Sí, se puede prorrogar por quince días más",
        "Sí, pero solo cinco días más",
        "Solo si lo aprueba el Alcalde"
      ],
      "r": 1
    },
    {
      "p": "¿Quién posesiona al Secretario electo del Concejo según el Parágrafo 1 del Art. 60?",
      "ops": [
        "El Alcalde",
        "El Presidente del Concejo Municipal",
        "El Gobernador",
        "El Secretario anterior"
      ],
      "r": 1
    },
    {
      "p": "¿Se requiere sesión plenaria para la posesión del Secretario según el Parágrafo 1 del Art. 60?",
      "ops": [
        "Sí, es obligatorio",
        "No, no se requiere sesión plenaria",
        "Solo en el primer año",
        "Solo si lo solicita un Concejal"
      ],
      "r": 1
    },
    {
      "p": "¿Qué documentación debe presentar el Secretario para su posesión según el Parágrafo 1 del Art. 60?",
      "ops": [
        "Solo su hoja de vida",
        "La exigida por la Ley 190 de 1995, similar a la de los Concejales",
        "Ningún documento adicional",
        "Solo su cédula de ciudadanía"
      ],
      "r": 1
    },
    {
      "p": "Si el Secretario electo no toma posesión por su culpa o dolo, ¿qué ocurre según el Art. 60?",
      "ops": [
        "Se le otorga un nuevo plazo indefinido",
        "El Presidente declara vacante el cargo y convoca nueva elección",
        "No pasa nada, sigue en el cargo",
        "Asume automáticamente el Alcalde"
      ],
      "r": 1
    },
    {
      "p": "En la nueva elección tras la no posesión, ¿puede participar la persona que no se posesionó la primera vez, según el Art. 60?",
      "ops": [
        "Sí, sin restricciones",
        "No, no podrá participar como candidato",
        "Solo si paga una multa",
        "Solo si lo aprueba el Concejo por unanimidad"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo 2 del Art. 60, ¿qué genera la renuncia del Secretario General?",
      "ops": [
        "Una falta temporal",
        "Vacancia absoluta del cargo",
        "Ninguna consecuencia legal",
        "La disolución del Concejo"
      ],
      "r": 1
    },
    {
      "p": "Mientras se elige nuevo Secretario tras una renuncia, ¿quién asume el cargo de manera Ad-Hoc según el Parágrafo 2 del Art. 60?",
      "ops": [
        "El Alcalde",
        "El concejal que el Presidente designe para cada sesión",
        "El Vicepresidente Primero obligatoriamente",
        "Nadie, el cargo queda vacío"
      ],
      "r": 1
    },
    {
      "p": "¿Pierde el Concejal su derecho a voz y voto al asumir como Secretario Ad-Hoc según el Parágrafo 2 del Art. 60?",
      "ops": [
        "Sí, lo pierde mientras ejerce esa función",
        "No, conserva su derecho a voz y voto",
        "Solo pierde el derecho a voto",
        "Solo pierde el derecho a voz"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál es una función del Secretario del Concejo según el Art. 61?",
      "ops": [
        "Presidir las sesiones plenarias",
        "Llevar y firmar las actas, certificando la fidelidad de su contenido",
        "Sancionar los acuerdos municipales",
        "Elegir a los miembros de la Mesa Directiva"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 61 numeral 10, ¿cuáles son los libros que debe llevar el Secretario?",
      "ops": [
        "Solo el libro de actas",
        "El de actas, el de registro de intereses privados y el de participación ciudadana",
        "Solo el libro contable",
        "Ningún libro es obligatorio"
      ],
      "r": 1
    },
    {
      "p": "¿Quién dirige y publica la Gaceta del Concejo según el Art. 61 numeral 12?",
      "ops": [
        "El Presidente del Concejo directamente",
        "El Secretario, cuando a ello hubiere lugar y por disposición del Presidente",
        "El Alcalde",
        "Cualquier Concejal designado"
      ],
      "r": 1
    },
    {
      "p": "¿Puede ser designado Secretario en propiedad un miembro del Concejo, según el Parágrafo único del Art. 61?",
      "ops": [
        "Sí, sin restricción",
        "No, no puede ser designado secretario en propiedad un miembro del Concejo",
        "Solo si renuncia a su curul",
        "Solo en municipios pequeños"
      ],
      "r": 1
    },
    {
      "p": "¿Cómo se suplen las faltas temporales del Secretario que no superen los diez (10) días, según el Parágrafo único del Art. 61?",
      "ops": [
        "Quedan sin suplir",
        "De manera Ad-Hoc por un Concejal, sin perder su voz y voto",
        "Las asume el Alcalde",
        "Se cierra la Secretaría temporalmente"
      ],
      "r": 1
    }
  ],
  "6": [
    {
      "p": "Según el Art. 62, ¿cuáles son las comisiones especiales que integra el Concejo?",
      "ops": [
        "Comisión de presupuesto y comisión de ética",
        "Comisión de ética y comisión de acreditación documental",
        "Comisión de género y comisión de transporte",
        "Comisión legal y comisión accidental"
      ],
      "r": 1
    },
    {
      "p": "¿Cuántos Concejales conforman la Comisión de Ética según el Art. 63?",
      "ops": [
        "Dos (2)",
        "Tres (3)",
        "Cuatro (4)",
        "Cinco (5)"
      ],
      "r": 1
    },
    {
      "p": "¿Cómo se pronuncia la Comisión de Ética según el Art. 63?",
      "ops": [
        "Por mayoría simple y públicamente",
        "En reserva y por unanimidad de sus integrantes",
        "Por votación nominal pública",
        "Por sorteo"
      ],
      "r": 1
    },
    {
      "p": "¿Quién puede recusar ante la comisión de ética a un Concejal según el Art. 63?",
      "ops": [
        "Solo otro Concejal",
        "Cualquier persona que tenga conocimiento de una causal de impedimento",
        "Solo el Alcalde",
        "Solo el Procurador"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 64, ¿cuántos Concejales integran la Comisión de Acreditación Documental?",
      "ops": [
        "Dos (2)",
        "Tres (3)",
        "Cuatro (4)",
        "Toda la plenaria"
      ],
      "r": 1
    },
    {
      "p": "¿Qué revisa la Comisión de Acreditación Documental según el Art. 64?",
      "ops": [
        "El presupuesto municipal",
        "La lista del Consejo Nacional Electoral y la documentación de los Concejales electos",
        "Las actas de sesiones anteriores",
        "Los proyectos de acuerdo"
      ],
      "r": 1
    },
    {
      "p": "¿Quién nombra las comisiones accidentales según el Art. 65?",
      "ops": [
        "La plenaria por votación",
        "El presidente del Concejo",
        "El Secretario General",
        "El Alcalde"
      ],
      "r": 1
    },
    {
      "p": "¿Cuántos Concejales como máximo integran una comisión accidental según el Parágrafo único del Art. 65?",
      "ops": [
        "Dos (2)",
        "Tres (3)",
        "Cinco (5)",
        "Sin límite"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 66, ¿cuál es el número mínimo y máximo de comisiones permanentes en el Concejo?",
      "ops": [
        "Mínimo 1, máximo 3",
        "Mínimo 2, máximo 4",
        "Mínimo 3, máximo 5",
        "Solo una comisión permanente"
      ],
      "r": 1
    },
    {
      "p": "¿Qué proyectos tienen prelación en las comisiones permanentes según el Art. 66?",
      "ops": [
        "Los presentados por el Alcalde",
        "Los de iniciativa popular y los presentados por las Bancadas",
        "Los más antiguos",
        "Los de mayor presupuesto"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 66, ¿dentro de cuántos días puede el autor de un proyecto no aprobado solicitar su reconsideración ante la plenaria?",
      "ops": [
        "3 días",
        "5 días",
        "8 días",
        "10 días"
      ],
      "r": 1
    },
    {
      "p": "¿Puede un Concejal pertenecer a dos o más comisiones permanentes según el Art. 66?",
      "ops": [
        "Sí, sin restricción",
        "No, en ningún caso podrá pertenecer a dos o más comisiones permanentes",
        "Solo si lo aprueba la plenaria",
        "Solo en municipios grandes"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo 4 del Art. 66, ¿qué ocurre si hay empate en la votación de un proyecto en comisión y persiste tras la reconsideración?",
      "ops": [
        "Se aprueba automáticamente",
        "La iniciativa será archivada",
        "Pasa directamente a la plenaria",
        "Decide el Presidente del Concejo"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 67, ¿dentro de cuántos días hábiles deben integrarse y elegirse las comisiones permanentes tras la elección de la Mesa Directiva?",
      "ops": [
        "2 días",
        "3 días",
        "5 días",
        "10 días"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál es el período del presidente de cada comisión permanente según el Art. 67?",
      "ops": [
        "Seis meses",
        "Un (1) año institucional",
        "Dos años",
        "Cuatro años"
      ],
      "r": 1
    },
    {
      "p": "¿Puede el presidente de una comisión permanente ser reelegido para el período inmediato según el Art. 67?",
      "ops": [
        "Sí, sin restricción",
        "No podrá ser reelegido para el período inmediato",
        "Solo si lo aprueba la bancada",
        "Solo una vez más"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 68, ¿a qué se dedican las Comisiones Permanentes en sus deliberaciones?",
      "ops": [
        "Solo a temas de presupuesto",
        "Al examen de temas especializados en materia normativa y de control político",
        "Solo a elecciones internas",
        "Solo a resolver quejas ciudadanas"
      ],
      "r": 1
    },
    {
      "p": "¿Quién distribuye los asuntos no definidos claramente entre las comisiones permanentes, según el Art. 69?",
      "ops": [
        "El Secretario General",
        "El Presidente del Concejo",
        "El Alcalde",
        "La Mesa Directiva de oficio sin intervención del Presidente"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 71, ¿cuándo se considera que existe una Comisión Conjunta?",
      "ops": [
        "Cuando lo decide el Alcalde",
        "Cuando dos comisiones permanentes se reúnen para dar primer debate a un proyecto de materia común",
        "Cuando se unen todas las comisiones",
        "Nunca está permitido"
      ],
      "r": 1
    },
    {
      "p": "¿Quién preside la sesión conjunta según el Art. 72?",
      "ops": [
        "El Presidente del Concejo siempre",
        "El Presidente de la Comisión donde fue radicado el proyecto, o quien designe el presidente de la Corporación",
        "El Secretario General",
        "El Concejal más antiguo"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 75, ¿cómo se determina la decisión final en una sesión conjunta?",
      "ops": [
        "Gana la comisión con más integrantes",
        "Es la sumatoria de los votos emitidos en una y otra Comisión",
        "Decide el Presidente del Concejo",
        "Se promedia el resultado"
      ],
      "r": 1
    },
    {
      "p": "¿Quién actúa como secretario en una sesión conjunta según el Parágrafo 1 del Art. 75?",
      "ops": [
        "El secretario de cada comisión por separado",
        "El Secretario General de la Corporación",
        "El Concejal más joven",
        "No se requiere secretario"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 76, ¿cuáles son las Comisiones Permanentes Particulares que debe integrar preferentemente la Plenaria?",
      "ops": [
        "Solo Comisión de Hacienda",
        "Plan de Desarrollo, Gobierno, y Presupuesto y Hacienda Pública",
        "Solo Comisión de Ética",
        "Comisión de Transporte únicamente"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 77, ¿qué materia corresponde a la Comisión Primera Permanente de Presupuesto y Hacienda Pública?",
      "ops": [
        "Educación y salud",
        "Plan de inversiones, tributos, presupuesto y endeudamiento",
        "Tránsito y transporte",
        "Derechos humanos"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 77, ¿qué materia corresponde a la Comisión Segunda Permanente del Plan de Desarrollo?",
      "ops": [
        "Solo presupuesto",
        "Servicios públicos, ordenamiento territorial, plan vial y medio ambiente",
        "Solo derechos humanos",
        "Solo tránsito"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 77, ¿qué materia corresponde a la Comisión Tercera Permanente de Gobierno?",
      "ops": [
        "Solo presupuesto municipal",
        "Tránsito, patrimonio cultural, estructura administrativa, educación, salud y derechos humanos",
        "Solo cupo de endeudamiento",
        "Solo plan vial"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 78, ¿cuál es el propósito de la Comisión Legal para la Equidad de la Mujer?",
      "ops": [
        "Manejar el presupuesto municipal",
        "Fomentar la participación de la mujer y luchar contra la violencia de género",
        "Resolver conflictos de tránsito",
        "Administrar la Gaceta del Concejo"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 79, ¿quiénes conforman preferentemente la Comisión Legal para la Equidad de la Mujer?",
      "ops": [
        "Solo el Presidente del Concejo",
        "Todas las mujeres cabildantes de la Corporación; los hombres pueden participar voluntariamente",
        "Solo Concejales hombres",
        "Solo personal administrativo"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo 3 del Art. 79, ¿se renueva anualmente el asiento de las mujeres en la comisión?",
      "ops": [
        "Sí, cada año",
        "No, las mujeres tendrán asiento permanente durante el periodo constitucional",
        "Solo cada dos años",
        "Depende de la bancada"
      ],
      "r": 1
    },
    {
      "p": "¿En qué lapso debe instalarse la Comisión Legal para la Equidad de la Mujer tras la instalación de la Mesa Directiva, según el Art. 81?",
      "ops": [
        "5 días hábiles",
        "10 días hábiles",
        "15 días hábiles",
        "30 días hábiles"
      ],
      "r": 1
    }
  ],
  "7": [
    {
      "p": "¿Cuántas veces al año se reúne el Concejo en sesiones ordinarias según el Art. 82?",
      "ops": [
        "Dos veces",
        "Tres veces",
        "Cuatro veces",
        "Seis veces"
      ],
      "r": 2
    },
    {
      "p": "¿Cuál es la duración máxima de las sesiones plenarias según el Art. 82?",
      "ops": [
        "Dos horas",
        "Tres horas",
        "Cuatro horas",
        "Seis horas"
      ],
      "r": 2
    },
    {
      "p": "¿Cuántos recesos puede ordenar el Presidente durante una sesión según el Art. 82?",
      "ops": [
        "Uno",
        "Hasta dos (2)",
        "Hasta tres (3)",
        "Sin límite"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál es la duración de cada período de sesiones ordinarias según el Art. 82?",
      "ops": [
        "20 días calendario",
        "30 días calendario, prorrogables hasta 10 más",
        "45 días calendario",
        "60 días calendario"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 83, ¿qué es la Sesión Inaugural?",
      "ops": [
        "La última sesión del año",
        "Aquella con la cual se inicia cada nuevo período Constitucional del Concejo",
        "Una sesión secreta",
        "Una sesión de comisión accidental"
      ],
      "r": 1
    },
    {
      "p": "¿Cuándo puede constituirse el Concejo en Sesión Secreta según el Art. 83?",
      "ops": [
        "Nunca está permitido",
        "Cuando lo disponga la Mesa Directiva o se apruebe una Proposición",
        "Solo si lo pide el Alcalde",
        "Solo en época electoral"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 84, ¿con cuánta anticipación debe hacerse la citación ordinaria a sesiones?",
      "ops": [
        "12 horas",
        "24 horas",
        "48 horas",
        "72 horas"
      ],
      "r": 1
    },
    {
      "p": "¿Con cuántos días de anticipación se cita para elección de funcionarios según el Art. 84?",
      "ops": [
        "1 día",
        "3 días",
        "5 días",
        "7 días"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 84, ¿qué está prohibido en el recinto del Concejo?",
      "ops": [
        "Hablar en público",
        "Portar armas, ingerir alcohol o fumar incluso cigarrillos electrónicos",
        "Tomar notas",
        "Usar corbata"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál es la sanción más grave que puede imponer el presidente por faltas al orden según el Art. 84?",
      "ops": [
        "Solo una multa económica",
        "Suspensión del derecho a intervenir en debates entre 2 y 10 días",
        "Expulsión definitiva del Concejo",
        "Ninguna sanción está permitida"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 85, ¿qué ocurre si no se presenta el quórum requerido transcurrida una hora?",
      "ops": [
        "Se suspende indefinidamente",
        "Los asistentes podrán retirarse hasta nueva citación",
        "Se multa a los ausentes",
        "Se cancela el periodo de sesiones"
      ],
      "r": 1
    },
    {
      "p": "¿Quién convoca las sesiones extraordinarias según el Art. 86?",
      "ops": [
        "El Presidente del Concejo",
        "El Alcalde Municipal",
        "El Gobernador",
        "El Secretario General"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 87, ¿cuál es el primer punto del Orden del Día?",
      "ops": [
        "Lectura de comunicaciones",
        "Llamado a lista y verificación de quórum",
        "Proposiciones varias",
        "Informe de comisiones"
      ],
      "r": 1
    },
    {
      "p": "¿Quién elabora el orden del día según el Parágrafo 1 del Art. 87?",
      "ops": [
        "El Alcalde",
        "La mesa directiva",
        "El Secretario solo",
        "Cualquier Concejal"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 88, en el orden del día para elecciones, ¿qué puntos se tratan exclusivamente?",
      "ops": [
        "Todos los puntos normales más elecciones",
        "Quórum, orden del día, actas, elecciones y comunicaciones",
        "Solo elecciones",
        "Debates de control político"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 89, ¿cuándo empieza y termina el debate?",
      "ops": [
        "Empieza al abrirlo el presidente y termina con la votación general",
        "Empieza con la votación y termina al cerrarlo el secretario",
        "No tiene inicio ni fin definido",
        "Dura toda la sesión"
      ],
      "r": 0
    },
    {
      "p": "¿Cuál es la duración máxima de una interpelación según el Art. 91?",
      "ops": [
        "5 minutos",
        "10 minutos",
        "15 minutos",
        "20 minutos"
      ],
      "r": 1
    },
    {
      "p": "¿Cuántas interpelaciones máximo se conceden a un orador según el Art. 91?",
      "ops": [
        "Una",
        "Dos",
        "Tres",
        "Sin límite"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 92, ¿cuánto tiempo se concede para ejercer el derecho de réplica?",
      "ops": [
        "Tres minutos",
        "Cinco minutos",
        "Diez minutos",
        "Quince minutos"
      ],
      "r": 1
    },
    {
      "p": "¿Cuáles son las tres clases de moción según el Art. 93?",
      "ops": [
        "De orden, de procedimiento y de suficiente ilustración",
        "De aplauso, de censura y de duelo",
        "De citación, de reconocimiento y modificativa",
        "De votación, de quórum y de receso"
      ],
      "r": 0
    },
    {
      "p": "Según el Art. 93, ¿cuántos minutos deben haber transcurrido desde el inicio de la discusión para proponer Moción de Suficiente Ilustración?",
      "ops": [
        "20 minutos",
        "30 minutos",
        "45 minutos",
        "60 minutos"
      ],
      "r": 2
    },
    {
      "p": "Según el Art. 94, ¿qué es una proposición sustitutiva?",
      "ops": [
        "La que se presenta por primera vez",
        "La que propone sustituir el título, atribuciones o articulado de un proyecto",
        "La que divide un artículo",
        "La que reúne artículos"
      ],
      "r": 1
    },
    {
      "p": "¿Es admisible una proposición sustitutiva de la sustitutiva según el Art. 94?",
      "ops": [
        "Sí, sin restricción",
        "No, no podrá haber ninguna proposición sustitutiva de la sustitutiva",
        "Solo si lo aprueba la mesa directiva",
        "Solo en casos urgentes"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 95, ¿qué tiene prohibido el Concejal durante el uso de la palabra?",
      "ops": [
        "Hacer preguntas",
        "Dar lectura a discursos escritos, salvo notas o apuntes para auxiliar la memoria",
        "Pedir la palabra",
        "Votar"
      ],
      "r": 1
    },
    {
      "p": "¿Cuánto tiempo tienen los funcionarios citados para hablar según el Art. 96?",
      "ops": [
        "15 minutos",
        "20 minutos",
        "30 minutos",
        "45 minutos"
      ],
      "r": 2
    },
    {
      "p": "Según el Art. 97, ¿qué debe hacer el Presidente si un funcionario citado incumple sin justa causa?",
      "ops": [
        "Ignorar la situación",
        "Dar traslado al organismo competente para investigación disciplinaria",
        "Imponer una multa directamente",
        "Suspender la sesión"
      ],
      "r": 1
    },
    {
      "p": "¿Cuántos modos de votación existen en el Concejo según el Art. 101?",
      "ops": [
        "Dos",
        "Tres, además de la remota",
        "Cuatro sin contar la remota",
        "Cinco"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 101, ¿cómo se realiza la votación ordinaria?",
      "ops": [
        "Por papeleta secreta",
        "Dando un golpe sobre el pupitre con la mano",
        "Por llamado nominal",
        "Por medios electrónicos únicamente"
      ],
      "r": 1
    },
    {
      "p": "¿En qué casos se usa la votación remota según el Art. 101?",
      "ops": [
        "Siempre que el Concejal lo solicite",
        "Cuando un Concejal esté en licencia de maternidad o paternidad extensiva, si la naturaleza de la iniciativa lo permite",
        "Solo en sesiones extraordinarias",
        "Nunca está permitida"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 103, ¿qué ocurre si persiste el empate en la votación de un proyecto tras una segunda votación?",
      "ops": [
        "Se aprueba automáticamente",
        "Se entenderá negada la propuesta o archivado el proyecto",
        "Decide el Alcalde",
        "Se somete a cabildo abierto obligatoriamente"
      ],
      "r": 1
    }
  ],
  "8": [
    {
      "p": "Según el Art. 105, ¿a quiénes ejerce el Concejo función de control político?",
      "ops": [
        "Solo al Alcalde",
        "A la administración municipal, la personería y la contraloría municipal",
        "Solo a la Policía Nacional",
        "Solo al Gobernador"
      ],
      "r": 1
    },
    {
      "p": "¿Puede el Concejo citar directamente al Alcalde para declaraciones orales según el Art. 105?",
      "ops": [
        "Sí, sin restricciones",
        "No, el Alcalde está exceptuado de esta citación directa",
        "Solo una vez al año",
        "Solo si lo aprueba el Gobernador"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 106, ¿en qué se fundamenta el control que ejerce el Concejo?",
      "ops": [
        "En la conveniencia económica",
        "En la conveniencia política para el municipio",
        "En decisiones judiciales",
        "En la opinión pública únicamente"
      ],
      "r": 1
    },
    {
      "p": "¿Quién puede solicitar una citación a un funcionario según el Art. 107?",
      "ops": [
        "Solo el Presidente del Concejo",
        "Cualquier Concejal o bancada mediante proposición aprobada por mayoría simple",
        "Solo el Alcalde",
        "Solo la Procuraduría"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo 1 del Art. 107, ¿con cuántos días hábiles de antelación mínima se hacen las citaciones?",
      "ops": [
        "3 días",
        "5 días",
        "8 días",
        "10 días"
      ],
      "r": 1
    },
    {
      "p": "¿Cuántos días antes del debate debe el funcionario citado entregar su respuesta escrita según el Art. 107?",
      "ops": [
        "Un día antes",
        "Dos días antes como mínimo",
        "Cinco días antes",
        "Una semana antes"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo 4 del Art. 107, ¿qué ocurre si ningún Concejal citante asiste a la sesión de citación?",
      "ops": [
        "Se repite automáticamente al día siguiente",
        "No podrá citarse nuevamente sobre los mismos temas hasta el siguiente período de sesiones del año siguiente",
        "Se cancela el período de sesiones",
        "El funcionario queda exonerado permanentemente"
      ],
      "r": 1
    },
    {
      "p": "¿Cuántos minutos tienen los funcionarios citados para hablar en debates de Control Político según el Art. 108?",
      "ops": [
        "30 minutos",
        "45 minutos",
        "60 minutos",
        "90 minutos"
      ],
      "r": 2
    },
    {
      "p": "Según el Art. 108, ¿cuánto tiempo máximo tienen los Concejales citantes para intervenir?",
      "ops": [
        "15 minutos",
        "30 minutos",
        "45 minutos",
        "60 minutos"
      ],
      "r": 1
    },
    {
      "p": "¿Cuánto tiempo tienen los Concejales que se adhirieron a la citación según el Art. 108?",
      "ops": [
        "10 minutos",
        "15 minutos",
        "20 minutos",
        "30 minutos"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 109, ¿qué debe hacer el Presidente si un funcionario incumple una citación sin justa causa?",
      "ops": [
        "Nada, no hay consecuencias",
        "Dar traslado al organismo competente para investigación disciplinaria",
        "Aplicar una multa directamente",
        "Suspender al funcionario de inmediato"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 109, ¿en qué municipios procede moción de censura por inasistencia de un Secretario sin excusa?",
      "ops": [
        "En municipios con menos de 25 mil habitantes",
        "En municipios con población superior a 25 mil habitantes",
        "En todos los municipios sin excepción",
        "Solo en la capital del departamento"
      ],
      "r": 1
    },
    {
      "p": "¿Con cuántos días de antelación debe enviarse la justa causa para no asistir a una citación según el Parágrafo único del Art. 109?",
      "ops": [
        "Un día",
        "Dos días",
        "Cinco días",
        "Una semana"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 110, ¿con cuánto tiempo de antelación deben inscribirse los miembros de la comunidad para hablar en debates de control político?",
      "ops": [
        "30 minutos",
        "1 hora",
        "2 horas",
        "1 día"
      ],
      "r": 1
    },
    {
      "p": "¿Cuántos minutos tiene la comunidad invitada para hablar según el Art. 110?",
      "ops": [
        "10 minutos",
        "15 minutos",
        "20 minutos",
        "30 minutos"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 111, ¿qué es la moción de observación?",
      "ops": [
        "Una sanción penal",
        "El acto mediante el cual el Concejo observa la actuación de uno o varios funcionarios, previo debate",
        "Una multa económica",
        "Un voto de aplauso"
      ],
      "r": 1
    },
    {
      "p": "¿Con la firma de cuántos miembros se puede proponer la moción de observación según el Parágrafo 1 del Art. 111?",
      "ops": [
        "La mitad más uno",
        "Por lo menos la tercera parte de los miembros",
        "Dos terceras partes",
        "La totalidad"
      ],
      "r": 1
    },
    {
      "p": "¿Qué votación se requiere para aprobar la moción de observación según el Parágrafo 2 del Art. 111?",
      "ops": [
        "Mayoría simple",
        "Voto afirmativo de las dos terceras partes de los miembros",
        "Mitad más uno",
        "Unanimidad"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 112, ¿quién puede proponer la moción de censura?",
      "ops": [
        "Un solo Concejal",
        "La mitad más uno de los miembros que componen el Concejo Municipal",
        "Solo el Presidente del Concejo",
        "Solo el Alcalde"
      ],
      "r": 1
    },
    {
      "p": "¿Contra quiénes se propone la moción de censura según el Parágrafo 1 del Art. 112?",
      "ops": [
        "Contra el Alcalde directamente",
        "Contra los Secretarios de Despacho del Alcalde",
        "Contra el Gobernador",
        "Contra los Concejales"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo 2 del Art. 112, ¿qué porcentaje de votos se requiere para aprobar la moción de censura?",
      "ops": [
        "Mayoría simple",
        "Mitad más uno",
        "Las dos terceras partes de los miembros",
        "Unanimidad"
      ],
      "r": 2
    },
    {
      "p": "¿Qué sucede una vez aprobada la moción de censura según el Art. 112?",
      "ops": [
        "El funcionario sigue en su cargo",
        "El funcionario quedará separado de su cargo",
        "Se suspende por un mes",
        "Se le impone una multa"
      ],
      "r": 1
    },
    {
      "p": "¿La renuncia del funcionario impide que se apruebe la moción de censura ya iniciada, según el Art. 112?",
      "ops": [
        "Sí, la detiene completamente",
        "No, la renuncia no obsta para que la moción sea aprobada conforme a lo previsto",
        "Solo si renuncia antes del debate",
        "Depende del Alcalde"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo 3 del Art. 112 sobre redondeo, ¿qué ocurre si el resultado es igual o superior a punto cinco (.5)?",
      "ops": [
        "Se aproxima al número entero anterior",
        "Se aproxima al número entero que le sigue al resultado",
        "Se descarta el cálculo",
        "Se repite la votación"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo 4 del Art. 112, ¿qué ocurre si persiste el empate en la votación de una moción de censura?",
      "ops": [
        "Se aprueba automáticamente",
        "Se entenderá negada la moción de censura u observación",
        "Decide el Alcalde",
        "Se posterga indefinidamente"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 113, ¿a quién comunica el Presidente del Concejo la decisión de censura aprobada?",
      "ops": [
        "A la Procuraduría",
        "Al Alcalde, para que designe un nuevo secretario",
        "Al Gobernador",
        "A la Contraloría"
      ],
      "r": 1
    },
    {
      "p": "¿Puede un funcionario censurado seguir ejerciendo sus funciones según el Parágrafo único del Art. 113?",
      "ops": [
        "Sí, hasta que se nombre su reemplazo",
        "No, en ningún caso podrá seguir en el ejercicio de sus funciones una vez censurado",
        "Solo por 30 días más",
        "Solo si apela la decisión"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 114, ¿son públicos los debates de Control Político?",
      "ops": [
        "No, son siempre privados",
        "Sí, son públicos y pueden concurrir miembros de la comunidad, medios y veedores",
        "Solo son públicos si lo aprueba el Alcalde",
        "Solo asisten los Concejales"
      ],
      "r": 1
    },
    {
      "p": "¿Quién designa al nuevo secretario tras una moción de censura aprobada, según el Art. 113?",
      "ops": [
        "El Concejo Municipal",
        "El Alcalde",
        "El Gobernador",
        "La Procuraduría"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 108, ¿qué puede hacer el funcionario citado con parte de su tiempo de intervención?",
      "ops": [
        "No puede cederlo bajo ninguna circunstancia",
        "Cederlo a otro funcionario de la misma dependencia para que complemente la información",
        "Cederlo a un Concejal",
        "Cederlo a un ciudadano externo"
      ],
      "r": 1
    }
  ],
  "9": [
    {
      "p": "Según el Art. 115, ¿qué porcentaje del censo electoral se requiere para presentar un proyecto de acuerdo de iniciativa popular?",
      "ops": [
        "5%",
        "10%",
        "15%",
        "20%"
      ],
      "r": 1
    },
    {
      "p": "¿Quiénes tienen iniciativa para presentar proyectos de acuerdo según el Art. 115?",
      "ops": [
        "Solo el Alcalde",
        "Concejales, el Alcalde, el Personero, el Contralor y las JAL en sus materias",
        "Solo los Concejales",
        "Solo la comunidad organizada"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál de estas materias requiere iniciativa exclusiva del Alcalde según el Art. 115?",
      "ops": [
        "Nombramiento de Personero",
        "Presupuesto anual de rentas y gastos",
        "Elección de Mesa Directiva",
        "Aprobación de actas"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 116, ¿con cuánta antelación debe darse a conocer un acuerdo de más de 10 artículos antes del debate?",
      "ops": [
        "Sin antelación",
        "Al menos un (1) día",
        "Al menos 3 días",
        "Al menos una semana"
      ],
      "r": 1
    },
    {
      "p": "¿Quién designa al ponente de un proyecto de acuerdo según el Art. 117?",
      "ops": [
        "La plenaria por votación",
        "El presidente de la corporación",
        "El Alcalde",
        "El Secretario General"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 117, ¿entre cuántos días se fija el término para presentar ponencias?",
      "ops": [
        "Entre 1 y 5 días",
        "Entre 1 y 10 días, prorrogable por 5 más",
        "Entre 5 y 15 días",
        "Entre 10 y 20 días"
      ],
      "r": 1
    },
    {
      "p": "¿Cuándo puede el autor retirar su proyecto sin necesidad de aceptación de la comisión, según el Parágrafo del Art. 117?",
      "ops": [
        "En cualquier momento",
        "Antes de presentarse ponencia para primer debate",
        "Después de aprobado en segundo debate",
        "Nunca puede retirarlo"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 119, ¿cuáles son los requisitos para que un proyecto sea acuerdo municipal?",
      "ops": [
        "Solo aprobación en primer debate",
        "Aprobación en primer y segundo debate, y sanción ejecutiva del alcalde",
        "Solo sanción del Gobernador",
        "Solo publicación en la Gaceta"
      ],
      "r": 1
    },
    {
      "p": "¿Qué se requiere para la obligatoriedad de un acuerdo según el Parágrafo único del Art. 119?",
      "ops": [
        "Su aprobación únicamente",
        "Su promulgación",
        "La firma del Gobernador",
        "Su archivo"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 120, ¿en qué orden se procede a la aprobación de un proyecto?",
      "ops": [
        "Título, encabezamiento, considerandos, articulado",
        "Articulado, considerandos, encabezamiento, título",
        "Considerandos, título, articulado, encabezamiento",
        "No hay un orden establecido"
      ],
      "r": 1
    },
    {
      "p": "¿Quién interviene para dar explicaciones y aclarar temas durante la discusión según el Art. 121?",
      "ops": [
        "El Secretario General",
        "El ponente",
        "El Alcalde",
        "El Presidente del Concejo únicamente"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 122, ¿pueden las enmiendas cambiar el sentido del acto en estudio?",
      "ops": [
        "Sí, sin restricción",
        "No, no podrán cambiar el sentido del acto en estudio",
        "Solo si lo aprueba el Alcalde",
        "Solo en segundo debate"
      ],
      "r": 1
    },
    {
      "p": "¿Hasta cuándo es el plazo para presentar enmiendas según el Parágrafo único del Art. 122?",
      "ops": [
        "Hasta el inicio del debate",
        "Hasta el cierre de la discusión del texto",
        "Después de aprobado el proyecto",
        "No hay plazo límite"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 123, ¿qué son las enmiendas a la totalidad?",
      "ops": [
        "Las que corrigen errores ortográficos",
        "Las que versan sobre la oportunidad, principios o espíritu del Proyecto, o proponen un texto alternativo completo",
        "Las que solo modifican un artículo",
        "Las que eliminan el proyecto"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 125, ¿qué se requiere para enmiendas que impliquen gasto público?",
      "ops": [
        "Solo aprobación de la plenaria",
        "Certificación de disponibilidad presupuestal y de impacto fiscal de la Secretaría de Hacienda",
        "Aprobación del Gobernador",
        "Ninguna certificación especial"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 126, ¿dónde se publican las observaciones ciudadanas sobre un proyecto de acuerdo?",
      "ops": [
        "En el periódico local",
        "En la Gaceta del Concejo",
        "En redes sociales únicamente",
        "No se publican"
      ],
      "r": 1
    },
    {
      "p": "¿Qué pasa con un proyecto que no recibe aprobación en primer debate durante ningún periodo de sesiones del periodo constitucional, según el Art. 128?",
      "ops": [
        "Se aprueba automáticamente",
        "Será archivado y deberá presentarse nuevamente",
        "Pasa directamente a segundo debate",
        "Lo decide el Alcalde"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 129, ¿quién puede apelar un proyecto negado y archivado en primer debate?",
      "ops": [
        "Solo el autor",
        "El autor, cualquier Concejal, el Gobierno Municipal o el vocero de la iniciativa popular",
        "Solo el Alcalde",
        "Nadie puede apelar"
      ],
      "r": 1
    },
    {
      "p": "¿Dentro de cuántos días siguientes a la notificación debe plantearse el recurso de apelación según el Art. 130?",
      "ops": [
        "3 días",
        "5 días",
        "8 días",
        "10 días"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 130, ¿dentro de cuántos días debe la Comisión Accidental rendir informe a la Plenaria sobre la apelación?",
      "ops": [
        "3 días hábiles",
        "5 días hábiles",
        "8 días hábiles",
        "15 días hábiles"
      ],
      "r": 2
    },
    {
      "p": "¿Qué son los Proyectos en Tránsito o en Estudio según el Art. 131?",
      "ops": [
        "Los que nunca fueron debatidos",
        "Los que recibieron aprobación en Primer Debate y queda pendiente el Segundo Debate",
        "Los que fueron archivados definitivamente",
        "Los proyectos del Alcalde exclusivamente"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 133, ¿qué es el Segundo Debate?",
      "ops": [
        "La primera revisión del proyecto",
        "El conocimiento a fondo y discusión que la Plenaria da a los proyectos para su aprobación o no",
        "Una votación simbólica",
        "Un trámite administrativo sin debate"
      ],
      "r": 1
    },
    {
      "p": "¿Cuántos días hábiles después de repartido el informe de ponencia se fija la fecha del segundo debate, según el Art. 134?",
      "ops": [
        "1 día hábil",
        "3 días hábiles",
        "5 días hábiles",
        "8 días hábiles"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 135, ¿quién suscribe el Informe de Ponencia para Segundo Debate?",
      "ops": [
        "Solo el ponente",
        "El Presidente de la Comisión, el Ponente o Coordinador, y el Secretario de la misma",
        "Solo el Secretario General",
        "Solo el Alcalde"
      ],
      "r": 1
    },
    {
      "p": "¿Cómo se discute el Texto Definitivo en segundo debate según el Art. 136?",
      "ops": [
        "Siempre artículo por artículo obligatoriamente",
        "Globalmente, salvo que un Concejal solicite análisis uno a uno o por bloques",
        "Solo por votación directa sin discusión",
        "Lo decide el Alcalde"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 137, ¿qué tipo de enmiendas se admiten en la plenaria (segundo debate)?",
      "ops": [
        "Cualquier tipo de enmienda sin restricción",
        "Las que subsanen errores técnicos, terminológicos o gramaticales, sin cambio sustancial",
        "Solo enmiendas de fondo",
        "Ninguna enmienda está permitida"
      ],
      "r": 1
    },
    {
      "p": "¿Pueden considerarse en segundo debate las enmiendas negadas en primer debate, según el Art. 137?",
      "ops": [
        "Sí, sin restricción",
        "No, salvo que se surtan por el procedimiento de apelación",
        "Solo si lo aprueba el Alcalde",
        "Solo en sesiones extraordinarias"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 139, ¿en qué orden se somete a votación el proyecto en la aprobación final?",
      "ops": [
        "Título, encabezamiento, considerandos, articulado",
        "Articulado, considerandos, encabezamiento, título",
        "Solo se vota el articulado",
        "Se vota todo junto sin orden"
      ],
      "r": 1
    },
    {
      "p": "¿Dentro de cuántos días hábiles remite la mesa directiva el proyecto aprobado al alcalde para su sanción, según el Art. 139?",
      "ops": [
        "3 días hábiles",
        "5 días hábiles",
        "8 días hábiles",
        "10 días hábiles"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 140, ¿a quién envía el alcalde copia del acuerdo sancionado dentro de los cinco días siguientes?",
      "ops": [
        "A la Procuraduría",
        "Al Gobernador del departamento",
        "Al Presidente de la República",
        "A la Contraloría General"
      ],
      "r": 1
    }
  ],
  "10": [
    {
      "p": "Según el Art. 141, ¿cuáles son los dos motivos por los que el Alcalde puede objetar un proyecto de acuerdo?",
      "ops": [
        "Por falta de presupuesto y por error de forma",
        "Por inconveniencia y por ser contrario a la Constitución o el ordenamiento jurídico (objeción de derecho)",
        "Solo por inconveniencia",
        "Solo por motivos jurídicos"
      ],
      "r": 1
    },
    {
      "p": "¿Cómo se denomina la objeción cuando el Alcalde considera el proyecto contrario a la Constitución, según el Art. 141?",
      "ops": [
        "Objeción de inconveniencia",
        "Objeción de derecho",
        "Objeción presupuestal",
        "Objeción técnica"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 142, ¿cuántos días tiene el Alcalde para devolver con objeciones un proyecto de no más de 20 artículos?",
      "ops": [
        "3 días",
        "5 días",
        "8 días",
        "10 días"
      ],
      "r": 1
    },
    {
      "p": "¿Cuántos días tiene el Alcalde para objetar un proyecto de 21 a 50 artículos según el Art. 142?",
      "ops": [
        "5 días",
        "10 días",
        "15 días",
        "20 días"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 142, ¿cuántos días tiene el Alcalde para objetar un proyecto que exceda de 50 artículos?",
      "ops": [
        "10 días",
        "15 días",
        "20 días",
        "30 días"
      ],
      "r": 2
    },
    {
      "p": "Si el Concejo está sesionando cuando llega un proyecto objetado, ¿qué hace la mesa directiva según el Art. 143?",
      "ops": [
        "Lo ignora hasta el siguiente periodo",
        "Lo incluye en el orden del día de la siguiente sesión plenaria",
        "Lo archiva automáticamente",
        "Lo remite directamente al Tribunal"
      ],
      "r": 1
    },
    {
      "p": "¿Cuánto tiempo tiene la comisión accidental para estudiar los argumentos del Alcalde según el Art. 143?",
      "ops": [
        "1 día",
        "No mayor de tres (3) días",
        "5 días",
        "8 días"
      ],
      "r": 1
    },
    {
      "p": "Si el Concejo está en receso cuando llegan las objeciones, ¿qué debe hacer el Alcalde según el Art. 143?",
      "ops": [
        "Esperar al siguiente periodo ordinario",
        "Convocar a sesiones extraordinarias en la semana siguiente, por término no superior a 5 días",
        "Archivar el proyecto definitivamente",
        "Enviarlo directamente al Tribunal"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 144, ¿en cuántas categorías puede la comisión proponer que se declaren las objeciones por inconveniencia?",
      "ops": [
        "Dos: fundadas o infundadas",
        "Tres: fundadas, parcialmente fundadas o infundadas",
        "Cuatro categorías distintas",
        "Solo una categoría"
      ],
      "r": 1
    },
    {
      "p": "¿Qué ocurre si la plenaria declara fundadas las objeciones por inconveniencia, según el Art. 144?",
      "ops": [
        "El proyecto se aprueba igualmente",
        "El proyecto se archivará",
        "Se envía al Tribunal Administrativo",
        "El Alcalde debe renunciar"
      ],
      "r": 1
    },
    {
      "p": "Si las objeciones son declaradas parcialmente fundadas, ¿en cuántos días debe sancionar el Alcalde el proyecto corregido según el Art. 144?",
      "ops": [
        "3 días",
        "5 días",
        "8 días siguientes",
        "10 días"
      ],
      "r": 2
    },
    {
      "p": "Si las objeciones son declaradas infundadas, ¿qué plazo tiene el Alcalde para sancionar el proyecto según el Art. 144?",
      "ops": [
        "No excederá de 8 días",
        "No excederá de 15 días",
        "Inmediatamente",
        "No tiene plazo"
      ],
      "r": 0
    },
    {
      "p": "¿Qué sucede si el Alcalde omite sancionar el proyecto en los casos de objeciones parcialmente fundadas o infundadas, según el Art. 144?",
      "ops": [
        "El proyecto queda archivado",
        "El presidente del Concejo procederá a sancionar y promulgar el acuerdo",
        "Se inicia un nuevo debate",
        "Se convoca a elecciones"
      ],
      "r": 1
    },
    {
      "p": "¿Qué ley fundamenta la facultad del presidente del Concejo de sancionar el acuerdo cuando el Alcalde omite hacerlo, según el Art. 144?",
      "ops": [
        "Ley 136 de 1994",
        "Ley 177 de 1994, Art. 4º",
        "Ley 617 de 2000",
        "Ley 1551 de 2012"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 145, ¿qué procedimiento se sigue para las objeciones de derecho?",
      "ops": [
        "Un procedimiento totalmente distinto",
        "El mismo procedimiento dispuesto para las objeciones por inconveniencia",
        "No tienen procedimiento definido",
        "Se decide directamente en el Tribunal sin pasar por el Concejo"
      ],
      "r": 1
    },
    {
      "p": "Si las objeciones jurídicas no son acogidas por el Concejo, ¿a quién debe enviar el Alcalde el proyecto según el Art. 145?",
      "ops": [
        "A la Procuraduría",
        "Al Tribunal Administrativo con jurisdicción en el municipio",
        "Al Congreso de la República",
        "Al Consejo de Estado directamente"
      ],
      "r": 1
    },
    {
      "p": "¿Dentro de cuántos días debe el Alcalde enviar el proyecto al Tribunal tras no acogerse las objeciones jurídicas, según el Art. 145?",
      "ops": [
        "5 días",
        "10 días siguientes",
        "15 días",
        "20 días"
      ],
      "r": 1
    },
    {
      "p": "Si el Tribunal considera fundadas las objeciones jurídicas según el Art. 145, ¿qué ocurre con el proyecto?",
      "ops": [
        "Se aprueba de todas formas",
        "El proyecto se archivará",
        "Se envía de nuevo al Concejo sin más trámite",
        "El Alcalde debe sancionarlo igual"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo único del Art. 145, ¿dentro de cuántos días debe el Alcalde enviar al Tribunal un proyecto de presupuesto objetado?",
      "ops": [
        "3 días",
        "5 días siguientes a su recibo",
        "8 días",
        "10 días"
      ],
      "r": 1
    },
    {
      "p": "¿Dentro de cuántos días hábiles debe pronunciarse el Tribunal sobre el proyecto de presupuesto objetado, según el Parágrafo único del Art. 145?",
      "ops": [
        "10 días hábiles",
        "15 días hábiles",
        "20 días hábiles siguientes",
        "30 días hábiles"
      ],
      "r": 2
    }
  ],
  "11": [
    {
      "p": "Según el Art. 146, ¿qué porcentaje mínimo del censo electoral se requiere para solicitar un cabildo abierto?",
      "ops": [
        "Uno por mil (1‰)",
        "Cinco por mil (5‰)",
        "Diez por ciento (10%)",
        "Uno por ciento (1%)"
      ],
      "r": 1
    },
    {
      "p": "¿Es obligatoria la asistencia del Alcalde al cabildo abierto según el Art. 146?",
      "ops": [
        "No, es opcional",
        "Sí, es obligación del alcalde asistir",
        "Solo si lo decide el Concejo",
        "Solo en cabildos sobre presupuesto"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 147, ¿qué deben adjuntar los ciudadanos si citan al alcalde a un cabildo abierto?",
      "ops": [
        "Solo las firmas",
        "Las firmas junto con el cuestionario que formularán al funcionario",
        "Un poder notarial",
        "Nada adicional"
      ],
      "r": 1
    },
    {
      "p": "¿Con cuánta antelación debe remitirse el cuestionario antes del cabildo según el Art. 147?",
      "ops": [
        "3 días",
        "5 días",
        "8 días",
        "10 días"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo del Art. 147, ¿qué NO se puede presentar a través del Cabildo Abierto?",
      "ops": [
        "Preguntas a funcionarios",
        "Iniciativas de acuerdo o resolución",
        "Quejas ciudadanas",
        "Solicitudes de información"
      ],
      "r": 1
    },
    {
      "p": "¿En qué orden se tratan los temas en los cabildos abiertos según el Art. 148?",
      "ops": [
        "Por orden alfabético",
        "En el orden en que fueron presentados ante la secretaría",
        "Por importancia según el Alcalde",
        "Al azar"
      ],
      "r": 1
    },
    {
      "p": "¿A más tardar en cuánto tiempo después de radicada la petición debe celebrarse el Cabildo Abierto según el Art. 148?",
      "ops": [
        "Una semana",
        "Un mes",
        "Tres meses",
        "Seis meses"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo único del Art. 148, ¿qué ocurre si la petición se radica cuando el Concejo no está en sesiones ordinarias?",
      "ops": [
        "Se rechaza la petición",
        "El cabildo se realiza en el siguiente periodo de sesiones ordinarias",
        "Se convoca sesión extraordinaria de inmediato",
        "Se pospone indefinidamente"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 149, ¿cuántas convocatorias debe publicar el Concejo para difundir el cabildo abierto?",
      "ops": [
        "Una",
        "Dos",
        "Tres",
        "Cuatro"
      ],
      "r": 1
    },
    {
      "p": "¿Con qué diferencia mínima de días deben publicarse las dos convocatorias según el Art. 149?",
      "ops": [
        "5 días",
        "10 días",
        "15 días",
        "20 días"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 150, ¿hasta cuántos días antes del cabildo deben inscribirse quienes desean intervenir?",
      "ops": [
        "1 día",
        "3 días",
        "5 días",
        "8 días"
      ],
      "r": 1
    },
    {
      "p": "¿Qué deben presentar quienes se inscriban para intervenir en el cabildo según el Art. 150?",
      "ops": [
        "Solo su cédula",
        "Un resumen escrito de su intervención",
        "Una carta de recomendación",
        "Nada adicional"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 150, ¿quién responde a las inquietudes de la comunidad después de sus intervenciones?",
      "ops": [
        "El Presidente del Concejo",
        "El alcalde",
        "El Secretario General",
        "El Gobernador"
      ],
      "r": 1
    },
    {
      "p": "¿Pueden los cabildos abiertos transmitirse en directo por Internet según el Parágrafo del Art. 150?",
      "ops": [
        "No, está prohibido",
        "Sí, cuando los medios tecnológicos lo permitan",
        "Solo si lo paga la comunidad",
        "Solo en la capital del departamento"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 151, ¿con cuántos días de anticipación se cita a funcionarios para el cabildo abierto?",
      "ops": [
        "3 días",
        "5 días",
        "8 días",
        "10 días"
      ],
      "r": 1
    },
    {
      "p": "¿Qué consecuencia tiene la desatención a la citación sin justa causa, según el Art. 151?",
      "ops": [
        "Ninguna consecuencia",
        "Es causal de mala conducta",
        "Una multa económica automática",
        "Pérdida del cargo inmediata"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 152, ¿cuánto tiempo después del cabildo se realiza la sesión de respuestas?",
      "ops": [
        "Tres días",
        "Una semana después",
        "Un mes después",
        "Inmediatamente"
      ],
      "r": 1
    },
    {
      "p": "Si las respuestas de los funcionarios incluyen compromisos decisorios, ¿qué carácter tienen según el Art. 152?",
      "ops": [
        "Son simplemente indicativos",
        "Son obligatorios y las autoridades deben proceder a su ejecución",
        "No tienen ningún efecto",
        "Quedan sujetos a nueva votación"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 153, ¿dónde puede realizarse la sesión cuando el asunto afecta específicamente a una localidad o corregimiento?",
      "ops": [
        "Siempre en la sede principal del Concejo",
        "En el sitio que la mesa directiva y el vocero estimen conveniente de manera concertada",
        "Solo en la Alcaldía",
        "En cualquier lugar sin acuerdo previo"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 154, ¿quién debe llevar el registro de cada cabildo abierto?",
      "ops": [
        "El Alcalde",
        "La Secretaría General de la corporación",
        "El Personero",
        "El Gobernador"
      ],
      "r": 1
    },
    {
      "p": "¿A qué organismos se envía copia del registro de los cabildos abiertos según el Art. 154?",
      "ops": [
        "Solo a la Procuraduría",
        "Al Consejo Nacional de Participación y al Consejo Nacional Electoral",
        "Solo al Tribunal Administrativo",
        "A ningún organismo externo"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 155, ¿qué ley regula los Mecanismos de Participación Ciudadana aplicable a los Cabildos Abiertos?",
      "ops": [
        "Ley 136 de 1994",
        "Ley 134 de 1994, modificada por la Ley 1757 de 2015",
        "Ley 617 de 2000",
        "Ley 1551 de 2012"
      ],
      "r": 1
    },
    {
      "p": "¿Puede cualquier asunto ser materia de cabildo abierto según el Art. 147?",
      "ops": [
        "No, solo asuntos presupuestales",
        "Sí, cualquier asunto de interés para la comunidad",
        "Solo asuntos de seguridad",
        "Solo asuntos ambientales"
      ],
      "r": 1
    },
    {
      "p": "¿Sobre qué debe versar el cuestionario cuando se cita al alcalde a un cabildo, según el Art. 147?",
      "ops": [
        "Cualquier tema sin restricción",
        "Únicamente sobre asuntos de competencia del funcionario citado",
        "Solo temas personales del alcalde",
        "Temas de otros municipios"
      ],
      "r": 1
    },
    {
      "p": "¿Cada cuánto pueden celebrarse cabildos abiertos según el Art. 146?",
      "ops": [
        "Una vez al año",
        "En cada período de sesiones ordinarias",
        "Cada cuatro años",
        "Solo una vez por periodo constitucional"
      ],
      "r": 1
    }
  ],
  "12": [
    {
      "p": "Según el Art. 156, ¿qué es la oposición política?",
      "ops": [
        "Un partido único de gobierno",
        "La función crítica que ejercen los partidos y movimientos que no participan del gobierno de turno",
        "Un órgano judicial",
        "Una rama del poder ejecutivo"
      ],
      "r": 1
    },
    {
      "p": "¿En qué artículos de la Constitución se fundamenta el derecho a la oposición según el Art. 157?",
      "ops": [
        "Arts. 1 y 2",
        "Arts. 40 y 112",
        "Arts. 209 y 313",
        "Arts. 312 y 313"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 158, ¿a quiénes son aplicables las disposiciones del Estatuto de la Oposición?",
      "ops": [
        "A cualquier ciudadano",
        "A los representantes territoriales de partidos y movimientos políticos con personería jurídica",
        "Solo al Alcalde",
        "Solo a la Mesa Directiva"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 159, ¿en cuánto tiempo después del inicio de gobierno deben las organizaciones políticas declarar su posición?",
      "ops": [
        "Una semana",
        "Dentro del mes siguiente",
        "Tres meses",
        "Un año"
      ],
      "r": 1
    },
    {
      "p": "¿Cuáles son las tres opciones de declaración política según el Art. 159?",
      "ops": [
        "Oposición, neutral y aliado",
        "Oposición, Independiente y Organización de Gobierno",
        "Mayoría, minoría y oposición",
        "Liberal, conservador e independiente"
      ],
      "r": 1
    },
    {
      "p": "¿Cuántas veces puede una organización política modificar su declaración política durante el periodo de gobierno, según el Parágrafo 1 del Art. 159?",
      "ops": [
        "Sin límite",
        "Por una sola vez",
        "Dos veces",
        "Nunca puede modificarla"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 160, ¿cuál NO es un derecho de las organizaciones declaradas en oposición?",
      "ops": [
        "Acceso a la información oficial",
        "Derecho de réplica",
        "Nombrar directamente al Alcalde",
        "Participación en mesas directivas"
      ],
      "r": 2
    },
    {
      "p": "Según el Art. 161, ¿en cuántos días debe facilitarse la información solicitada por la oposición?",
      "ops": [
        "3 días",
        "5 días siguientes",
        "8 días",
        "10 días"
      ],
      "r": 1
    },
    {
      "p": "¿Cada cuánto debe reportarse a la Autoridad Electoral el registro de solicitudes de información según el Art. 161?",
      "ops": [
        "Cada mes",
        "Cada seis (6) meses",
        "Cada año",
        "Cada dos años"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo 1 del Art. 161, ¿cobra el Concejo el valor de fotocopias solicitadas por la oposición?",
      "ops": [
        "Sí, siempre",
        "No, el Concejo no cobrará el valor de las fotocopias",
        "Solo si exceden 100 páginas",
        "Depende del presupuesto"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 162, ¿frente a qué procede el derecho de réplica de la oposición?",
      "ops": [
        "Cualquier comentario",
        "Tergiversaciones graves y evidentes o ataques públicos de altos funcionarios oficiales",
        "Solo críticas del Concejo",
        "Solo declaraciones del Gobernador"
      ],
      "r": 1
    },
    {
      "p": "¿Dentro de cuántos días puede el afectado contactar al medio si no se le concede oportunidad de respuesta, según el Art. 162?",
      "ops": [
        "Un día",
        "Tres días siguientes",
        "Cinco días",
        "Diez días"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 163, ¿en qué cargo de la mesa directiva tiene participación la oposición?",
      "ops": [
        "Presidencia",
        "Primera vicepresidencia",
        "Segunda vicepresidencia",
        "Secretaría General"
      ],
      "r": 1
    },
    {
      "p": "¿Puede la misma organización política ocupar nuevamente el cargo de oposición en la mesa directiva al año siguiente, según el Art. 163?",
      "ops": [
        "Sí, sin restricción",
        "No, hasta que las demás declaradas en oposición lo hayan ocupado, salvo unanimidad",
        "Solo si gana las elecciones de nuevo",
        "Solo si lo decide el Alcalde"
      ],
      "r": 1
    },
    {
      "p": "¿Cómo debe alternarse la representación de oposición en la mesa directiva según el Art. 163?",
      "ops": [
        "Siempre debe ser hombre",
        "Entre hombres y mujeres en periodos sucesivos, cuando sea posible",
        "Por sorteo cada mes",
        "No hay reglas de alternancia"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 164, ¿cuántas veces por periodo de sesiones ordinarias pueden los voceros de oposición determinar el orden del día?",
      "ops": [
        "Dos veces",
        "Una (1) vez",
        "Tres veces",
        "En cada sesión"
      ],
      "r": 1
    },
    {
      "p": "¿Con cuántos días de antelación debe informarse a la Mesa Directiva el ejercicio de este derecho según el Parágrafo 1 del Art. 164?",
      "ops": [
        "1 día",
        "3 días",
        "5 días",
        "8 días"
      ],
      "r": 1
    },
    {
      "p": "Según el Parágrafo 2 del Art. 164, ¿qué se considera la inasistencia injustificada de un funcionario citado en sesión de oposición?",
      "ops": [
        "Una excusa válida",
        "Falta grave",
        "Un simple retraso",
        "No tiene consecuencias"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 165, ¿a qué tiene derecho la oposición en materia de comunicaciones?",
      "ops": [
        "Exclusividad total de los medios",
        "Participación adecuada y equitativa en programas de radio, televisión y publicaciones",
        "Censura de los medios oficiales",
        "Ningún derecho en medios"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 166, ¿dentro de cuántos días debe debatirse en plenaria el informe de cumplimiento de metas del Plan de Desarrollo?",
      "ops": [
        "15 días",
        "30 días siguientes a su radicación",
        "45 días",
        "60 días"
      ],
      "r": 1
    },
    {
      "p": "¿Es obligatoria la presencia del gobierno en la sesión exclusiva sobre el informe del Plan de Desarrollo según el Art. 166?",
      "ops": [
        "No, es opcional",
        "Sí, la presencia del gobierno será obligatoria",
        "Solo si lo solicita la oposición",
        "Solo en años electorales"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 167, ¿quién tiene derecho a ocupar una curul en el Concejo tras la elección de Alcalde?",
      "ops": [
        "El ganador de las elecciones de Concejo",
        "El candidato que siga en votos al elegido Alcalde",
        "El Personero saliente",
        "El Secretario de Gobierno"
      ],
      "r": 1
    },
    {
      "p": "¿Ante quién debe manifestar el candidato su decisión de aceptar o no la curul, según el Art. 167?",
      "ops": [
        "Ante el Alcalde electo",
        "Ante la comisión escrutadora competente",
        "Ante el Concejo en pleno",
        "Ante el Gobernador"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 168, ¿qué ocurre con los derechos de oposición si se pierde la declaración de oposición?",
      "ops": [
        "Se mantienen indefinidamente",
        "Se pierden, y la Autoridad Electoral cancela el registro como organización de oposición",
        "Se transfieren a otro partido",
        "No hay ninguna consecuencia"
      ],
      "r": 1
    },
    {
      "p": "¿Qué debe hacer el Concejo si una organización en oposición pierde su declaración según el Art. 168?",
      "ops": [
        "Nada cambia",
        "Elegir un nuevo miembro de la mesa directiva",
        "Disolver la mesa directiva completa",
        "Convocar elecciones extraordinarias"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 169, ¿quiénes deben declararse como independientes?",
      "ops": [
        "Solo el partido de gobierno",
        "Las organizaciones que no son ni de gobierno ni de oposición",
        "Solo organizaciones sin personería jurídica",
        "Ninguna organización puede ser independiente"
      ],
      "r": 1
    },
    {
      "p": "¿Cuál es un derecho de los Independientes según el Art. 169?",
      "ops": [
        "Vetar las decisiones del Concejo",
        "Participar en las herramientas de comunicación de la Corporación",
        "Nombrar al Alcalde",
        "Suspender sesiones"
      ],
      "r": 1
    },
    {
      "p": "Según el Art. 169, ¿cuándo pueden los Independientes postular candidatos a la mesa directiva del Concejo?",
      "ops": [
        "Siempre, sin restricción",
        "En ausencia de organizaciones declaradas en oposición o de sus postulaciones",
        "Nunca pueden postular candidatos",
        "Solo si lo aprueba el Alcalde"
      ],
      "r": 1
    }
  ]
};