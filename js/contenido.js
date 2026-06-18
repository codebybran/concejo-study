// contenido.js - Reglamento Interno Concejo Municipal El Cerrito
// Acuerdo No. 024 de 2025
// CONSTRUCCIÓN POR MÓDULOS: Preámbulo + Títulos I-VI cargados. Títulos VII-XIII pendientes.
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
        "modulo": null
      },
      {
        "titulo": "Reuniones. Citaciones. Orden Interno y Sesiones en General",
        "pagina": "82",
        "modulo": null
      },
      {
        "titulo": "ORDEN DEL DÍA",
        "pagina": "87",
        "modulo": null
      },
      {
        "titulo": "DEBATES",
        "pagina": "88",
        "modulo": null
      },
      {
        "titulo": "VOTACIONES",
        "pagina": "95",
        "modulo": null
      },
      {
        "titulo": "DEL CONTROL POLÍTICO",
        "pagina": "100",
        "modulo": null
      },
      {
        "titulo": "PROCESO NORMATIVO",
        "pagina": "108",
        "modulo": null
      },
      {
        "titulo": "ACUERDOS MUNICIPALES",
        "pagina": "108",
        "modulo": null
      },
      {
        "titulo": "PRIMER DEBATE",
        "pagina": "111",
        "modulo": null
      },
      {
        "titulo": "SEGUNDO DEBATE",
        "pagina": "115",
        "modulo": null
      },
      {
        "titulo": "DE LAS OBJECIONES",
        "pagina": "118",
        "modulo": null
      },
      {
        "titulo": "MOTIVOS PLAZOS",
        "pagina": "118",
        "modulo": null
      },
      {
        "titulo": "TRÁMITE DE LAS OBJECIONES",
        "pagina": "118",
        "modulo": null
      },
      {
        "titulo": "CABILDO ABIERTO",
        "pagina": "120",
        "modulo": null
      },
      {
        "titulo": "DISPOSICIONES GENERALES ESTATUTO DE LA OPOSICIÓN",
        "pagina": "123",
        "modulo": null
      },
      {
        "titulo": "DERECHOS DE LA OPOSICIÓN",
        "pagina": "124",
        "modulo": null
      },
      {
        "titulo": "DERECHOS DE LOS INDEPENDIENTES",
        "pagina": "131",
        "modulo": null
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
  ]
};