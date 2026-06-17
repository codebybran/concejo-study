// contenido.js - Reglamento Interno Concejo Municipal El Cerrito
// Acuerdo No. 024 de 2025
// CONSTRUCCIÓN POR MÓDULOS: Preámbulo + Título I + Título II cargados. Títulos III-XIII pendientes.

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
        "pagina": null
      },
      {
        "titulo": "CONSIDERANDO:",
        "pagina": "2"
      },
      {
        "titulo": "ACUERDA",
        "pagina": "5"
      },
      {
        "titulo": "DISPOSICIONES PRELIMINARES",
        "pagina": "5"
      },
      {
        "titulo": "EL CONCEJO COMO CORPORACIÓN POLÍTICO ADMINISTRATIVA Y POPULAR",
        "pagina": "5"
      },
      {
        "titulo": "DEL CONCEJO",
        "pagina": "11"
      },
      {
        "titulo": "PRINCIPIOS RECTORES Y CRITERIOS DE INTERPRETACIÓN",
        "pagina": "14"
      },
      {
        "titulo": "DEL CONCEJO Y LAS BANCADAS",
        "pagina": "15"
      },
      {
        "titulo": "ESTRUCTURA ORGÁNICA DEL CONCEJO",
        "pagina": "21"
      },
      {
        "titulo": "CONCEJO PLENO",
        "pagina": "22"
      },
      {
        "titulo": "INAUGURACIÓN. POSESIÓN. PERIODO DE SESIONES. ACTAS. PUBLICIDAD",
        "pagina": "22"
      },
      {
        "titulo": "FUNCIONES. DELEGACIÓN. PROHIBICIONES",
        "pagina": "28"
      },
      {
        "titulo": "DIGNATARIOS",
        "pagina": "36"
      },
      {
        "titulo": "DEL PRESIDENTE, VICEPRESIDENTE. MESA DIRECTIVA. COMITÉ DE COORDINACIÓN POLÍTICA",
        "pagina": "37"
      },
      {
        "titulo": "DEBERES Y DERECHOS DE LOS CONCEJALES",
        "pagina": "48"
      },
      {
        "titulo": "De los Deberes",
        "pagina": "48"
      },
      {
        "titulo": "DE LOS DERECHOS",
        "pagina": "51"
      },
      {
        "titulo": "SECRETARIO",
        "pagina": "64"
      },
      {
        "titulo": "Designación. Requisitos. Periodo. Funciones",
        "pagina": "64"
      },
      {
        "titulo": "COMISIONES",
        "pagina": "67"
      },
      {
        "titulo": "Clases de Comisiones",
        "pagina": "68"
      },
      {
        "titulo": "COMISIONES PERMANENTES",
        "pagina": "70"
      },
      {
        "titulo": "COMISIÓN LEGAL PARA LA EQUIDAD DE LA MUJER",
        "pagina": "78"
      },
      {
        "titulo": "SESIONES",
        "pagina": "81"
      },
      {
        "titulo": "Reuniones. Citaciones. Orden Interno y Sesiones en General",
        "pagina": "82"
      },
      {
        "titulo": "ORDEN DEL DÍA",
        "pagina": "87"
      },
      {
        "titulo": "DEBATES",
        "pagina": "88"
      },
      {
        "titulo": "VOTACIONES",
        "pagina": "95"
      },
      {
        "titulo": "DEL CONTROL POLÍTICO",
        "pagina": "100"
      },
      {
        "titulo": "PROCESO NORMATIVO",
        "pagina": "108"
      },
      {
        "titulo": "ACUERDOS MUNICIPALES",
        "pagina": "108"
      },
      {
        "titulo": "PRIMER DEBATE",
        "pagina": "111"
      },
      {
        "titulo": "SEGUNDO DEBATE",
        "pagina": "115"
      },
      {
        "titulo": "DE LAS OBJECIONES",
        "pagina": "118"
      },
      {
        "titulo": "MOTIVOS PLAZOS",
        "pagina": "118"
      },
      {
        "titulo": "TRÁMITE DE LAS OBJECIONES",
        "pagina": "118"
      },
      {
        "titulo": "CABILDO ABIERTO",
        "pagina": "120"
      },
      {
        "titulo": "DISPOSICIONES GENERALES ESTATUTO DE LA OPOSICIÓN",
        "pagina": "123"
      },
      {
        "titulo": "DERECHOS DE LA OPOSICIÓN",
        "pagina": "124"
      },
      {
        "titulo": "DERECHOS DE LOS INDEPENDIENTES",
        "pagina": "131"
      },
      {
        "titulo": "OTRAS DISPOSICIONES",
        "pagina": "132"
      },
      {
        "titulo": "VIGENCIA Y REVISIÓN",
        "pagina": "134"
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
  ]
};