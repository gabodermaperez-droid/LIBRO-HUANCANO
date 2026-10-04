let paginaActual = 1;
let PAGINA_MAXIMA = 90;
const PAGINAS_POR_SECCION = {};
const CLAVE_ULTIMA_PAGINA = "libro-comunidad-ultima-pagina";
const CLAVE_RESALTADOS = "libro-comunidad-resaltados";
let temporizadorAviso;
const SECCIONES = [
    { clave: "origen", etiqueta: "Origen", titulo: "📜 Origen", ancla: 1, minimo: 15 },
    { clave: "educacion", etiqueta: "Educación", titulo: "🏫 Educación", ancla: 16, minimo: 10 },
    { clave: "agricultura", etiqueta: "Agricultura", titulo: "🌱 Agricultura", ancla: 26, minimo: 15 },
    { clave: "arqueologia", etiqueta: "Aspectos arqueológicos", titulo: "🏺 Aspectos arqueológicos", ancla: 41, minimo: 25 },
    { clave: "mitos", etiqueta: "Mitos, leyendas y tradiciones", titulo: "🎭 Mitos, leyendas y tradiciones", ancla: 66, minimo: 36 }
];

const paginas = {

    1: {
        titulo: "📜 Origen",
        contenido: `
            <p>
           Huancano, la tierra de los afamados "Alfajores y los deliciosos Camarones,  
           es a la vez el lugar de mujeres y hombres que basan su economia en el diario
           trabajo de la tierra y la crianza de ganado, desafiando lo dificil de su 
           geografia a base de esfuerzo y sacrificio..
            </p>

            <p>
                ..Bendecida por las cristalinas aguas que descienden desde los Andes hasta
                formar el nacimiento del rio Pisco, guarda en sus entrañas el preciado metal
                que durante años le dieron vida minera. Es a la vez cuna de una poblacion 
                luhchadora, que a traves de años ha escrito en letras de oro, la historia de un
                pueblo luchador...
            </p>
        `
    },

    2: {
        titulo: "📜 Origen",
        contenido: `
            <p>
                No se sabe, la fecha exacta o cercana sobre el poblamiento del valle de Pisco, específicamente en lo que corresponde desde el sector de Huáncano, relacionado con la serranía adyacente. Quizás sea por la falta de estudios e investigación en esta parte del valle, que no se haya podido encontrar restos sobre esos primeros poblamientos y deducir los asentamientos que se habrían dado en la antigüedad.
            </p>
            <p>
                Si hay estudios sobre la zona de Paracas, es decir, sobre ese lapso, algo habría sucedido en Paracas; quizás la napa freática (agua subterránea) descendía hasta los niveles que no era posible conseguir agua potable para los habitantes; quizás un brusco descenso del nivel original de la línea de marea, algún movimiento telúrico o geológico. Lo cierto es que Paracas deja de tener la densa población que tuvo, y el valle de Pisco comienza a ser habitado aproximadamente por los años 3000 antes de Cristo.
            </p>
        `
    },

    3: {
        titulo: "📜 Origen",
        contenido: `
            <p>
              El actual Distrito de Huáncano ha sido escenario en la antiguedad, del desarrollo de las sociedades que se dieron relacionados a la de la sierra contigua, es decir ¡, a la de Castrovirreyna y de Huytará. En este caso, se puede decir, de los Huari, Huancas y Chancas. Según los estudios arqueologicos, eran los "CHOCORVOS" quienes dominaban toda esta zona andina, hasta antes de la llegada de los Incas. los "chocorvos", cuya etimologia parece derivar de la palabra "CHUCURPU", es la palabra quechua cuyo significado es "Cántaro cónico", son recordados por haber ofrecido fiera resistencia a los ejercitos incas en su campaña conquistadora, y ademas, por haber sido aliados de los "Chancas". Sin embargo, luego de muchos años de detener el avance incaico, fueron sometidos e incorporados al Tawantinsuyo. La region "Chocorvos", que entonces comprendia a las actuales provincias de Castrovirreyna y Huaytara;                                                                                                                                                                                                                   
            </p>
        `
    },

    4: {
        titulo: "📜 Origen",
        contenido: `
            <p>
              Estaba habitada por gente beliciosa y libertaria, que ofreció tenaz resistencia a los incas. Historiadores y cronistas descrepan acerca de la conquista de los "Chocorvos"; según algunos, ellos fueron sometidos luego de las campañas sangrientas conta la alianza de Lucanas y Vischongos.  consumada la invasion española, con la muerte del Inca Atahualpa, se dieron una serie de sucesos, que devendria en la lucha entre los mismos invasores, dividiendose en bandos, en pizzaristas y almagristas, sobre todo por el reparto de los tesoros, la verdadera extension de las "Gobernaciones" para ambos jefes, la exacta situacion de "Sangallán" (o Lima La Vieja) para determinar la ubicaion del cuzco, si quedaba en poder de uno u de otro; lo que llevaria a una abierta y declarada enemistad entre ellos. En ese contexto, el actual territorio de Huancano fue escenario del paso de ambos ejercitos, en camino ascendente 
            </p>
        `
    },

    5: {
        titulo: "📜 Origen",
        contenido: `
            <p>
              a la sierra, y que desembocarian en la llamada "escaramuza" o "Batalla de Huaytara".  el territorio de Huancano, seria testigo del paso de los ejercitos de los invasores españoles a fines del año 1537, al no ponerse de acuerdo sobre la delimitacion de sus "gobernaciones", yendo hacia Huaytara, en cuya cercania se libraria una de las batallas de la primera guerra civil entre ellos. Conocida la traicion de Pizarro , el ejercito almagrista se retiro hcia Sangalla(cerca de Humay), donde su caudillo habia fundado la Villa de Almagro, nombrando alcaldes y regidores y alzando una picota y horca en nombre de la ley. entre tanto, el ejercito pizarrista emprendio la persecusion, Almagro resolvio entonces transladarse a las sierras de Huaytara, lugar donde pensaba contener el avanza enemigo.  con la llegada de los invasores españoles, se cambia todo el sistema establecido por los incas; y para una mejor   
            </p>
        `
    },  

    6: {
        titulo: "📜 Origen",
        contenido: `
            <p>
            Cobranza de los impuestos a los aborigentes, se procede al reparto y la llamada "reducir de indios":
            </p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>1</strong> Castrovirreyna (CHOQLLU QOCHA)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>2</strong> Sinto (CHINTU)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>3</strong> Sacsaquero (SAKSA QERU)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>4</strong> Huacahuaca (WAKA WAKA)</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>5</strong> Huallantu (hacienda)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>6</strong> Huaullanqa (WAWLLANQA)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>7</strong> Cordillera de Pilpichaca (PILLPI CHAKA)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>8</strong> Cargamundo (QAQONCHU)</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>9</strong> Santa Ana</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>10</strong> Acostambo (AQUSTAMBO)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>11</strong> Cordova</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>12</strong> Acobamba (AQOPAMPA)</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>13</strong> Ayamarca (AYA MARCA)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>14</strong> Ocoyo (AQOYU)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>15</strong> Lamari</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>16</strong> Pacomarca (PAQO MARKA)</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>17</strong> Querco (QERQU)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>18</strong> Lamarca (LLARA MARKA)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>19</strong> Quirahuara (KIRA WARA)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>20</strong> Huaitara (WAYTARA)</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>21</strong> Chiris (CHIRI)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>22</strong> Cocas (QOQA)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>23</strong> Pauranga (PAW RANQA - Estancia)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>24</strong> Tambillo (QUCHUY TAMPU)</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>25</strong> Ayavi (AYAWI)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>26</strong> Tambo (TAMPU)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>27</strong> Capillas (QAPILLA)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>28</strong> Sangayayco (SAQA YAYKU)</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>29</strong> Andaymarca (ANTAY MARKA)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>30</strong> Santiago</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>31</strong> Arma</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>32</strong> Cotas (QOTA)</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>33</strong> Huanactambo (WANAC TAMPU)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>34</strong> Huanacu (WANAKU)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>35</strong> Cacrillo (QAQRILLA)</td>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>36</strong> Yanacc (YANAC)</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #333; padding: 10px;"><strong>37</strong> Tantara (TANTARA)</td>
                    <td colspan="3" style="border: 1px solid #333; padding: 10px; text-align: center;"><strong>TOTAL: 6,900 indios</strong></td>
                </tr>
            </table>
        `
    },        

     7: {
        titulo: "📜 Origen",
        contenido: `
            <p>
           Por la misma geografia que se tiene, ha existido desde tiempos inmemoriables, relacion entre los sectores de Pauranga y Huancano. Parcaticamente, el 45% del territorio del Distrito de Huancano es comprension de la actualidad comunidades campesinas de Pauranga, y muchas de sus vias, tanto de ingresos o salida a la costa, comprenden a Huancano.  el 8 de setiembre de 1890, en horas de la madrugada desembarca la Expedicion Libertadora al mando del General Don Jose de San martin en Paracas. El dia 12 de septiembre se instala San Martin en Pisco (en el solar donde actualmente, estuvo ubicado hasta el terremoto del 15 de agosto de 2007, el local del Club Social Pisco).  Si bien el territorio de Huancano no llego a oficialmente a ser ocupado por las fuerzas invasoras chilenas, existen versiones orales de sus incursiones por este lugar. Los chilenos desembarcan en Pisco el 19 de Noviembre de 1880 al mando de Villagran. 
           </p>
        `
    },   
    
    8: {
        titulo: "📜 Origen",
        contenido: `
            <p>
                Unos pocos disparos del buque chileno "Chacabuco" hicieron huir a los defensores pisqueños, que estaban desplegados en línea de guerrilla en la playa; los mismos que ante esos disparos tuvieron que huir en desbandada hacia las haciendas del interior del valle de Pisco. una vez que se habian posesionado del puerto y Villa de Pisco, los invasores chilelnos habian enviado inmediatamente varias partidas de Granaderos en diversas deirecciones, con el fin de obtener alimento necesario para la tropa y para el ganado.  El ejercito chileno llego al atardecer del dia 1 de Enero de 1881, a la hacienda "Manrique", lugar donde pasaron la noche; al dia siguiente se dirigieron a la hacienda "Casaconcha", de donde enviaron a un soldadoy dos mas a reconocer el valle y "a notificaciones a los hacendados que a cualquier disparo que se hiciera contra -sus- fuerzas seria castigado con la destruccion de sus propiedades"(* Parte oficial de los chilenos, del combate de Humay).
            </p>
        `
    },

    9: { 
        titulo: "📜 Origen",
        contenido: `
            <p>
             Esta comision cuando regrsaba de cumplir su cometido, fue atacada por "montaneros" que se encontraban apostados en la hacienda "Bernales".  Para batir a los "montaneros", de Humay los chilenos enviaron a media campaña de cazadores, sosteniendo nutrido fuego con los "montaneros", quines por la superioralidad manifestada de los invasores en armamento y municiones, fugaron en direccion a la Cordillera de los Andes.  Teniendo noticias de los ataques chilenos al valle de Humay , y sabedores de que habian quemado el pueblo de Humay,los vecinos de Huaylla y demas sectores hasta la comprension de Huancano, y poriblemente Huaytara y Pauranga, se organizaran a fin de detener el avance de los chilenos. para lo cual, segun las versiones orales, deciden construir una "muralla" para detener el avance de los invasores, y atacarlos en ese lugar, geograficamente estrategico para la defensa. De hay que circulen las tradiciones al respecto,
            </p>
        `       
    },

    10: {
        titulo: "📜 Origen",
        contenido: `
            <p>
             una de ellas se presenta a continuacion, por medio de Eudomiro Flores Cardenas:  "Los chilenos desembarcan en Pisco en Noviembre de 1880, y fueron los de Humay, con mucha gente de la serrania, que se organizaron, para detener el avance de los chilenos, que venian buscando alimentos, que se agarraban a la fuerza, quitandole a la gente. Como ya no habian ejercito peruano en la zona, se tuvieron que organizar, y es ahi donde los pauranguinos, desde la llama, Quitasol, hasta los del mismo Pauranga, se unen a los humainos, para detener a los abusivos chilenos. No tenian armas, eran mucho menos que los soldados chilenos, por lo cual, tenian que usar la inteligencia. Deciden construir entonces, una "muralla" que los detuvieran, y lo hacen en el lugar en donde el rio Pisco se acortan mas, en donde se estrecha. Esa muralla los detendria, y asi fue efectivamente, mientras los chilenos se detenian para pasar por la muralla, los peruanos desde arriba de los cerros,  
            </p>
        `    
    },

    11: {
        titulo: "📜 Origen",
        contenido: `
            <p>
              les soltaban "galgadas" de piedra, polvo, rocones, todo lo que podian, matando algunos de ellos, hiriendo a otros. Cayendo en la trampa, los chilenos no podian trepar por los cerros, mientras que los humainos y pauranguinos como cabras se subian rapidamente escondiendose de las balas. Pero ahi no acabo la cosa, pues los chilenos, una vez mas detenidos por la muralla, decidieron hacer su comida, y comenzaron a prepararla con la raiz de la caña brava, confundiendo con la "achira", porque ya en Santiago de Chocorvos habian probado la achira, por la cual, la galgada esta vez, fue por el estomago. Cuando llegaron a Pauranga, se alojaron en la antigua igelsia, en donde tambien confundieron el fruto de la espina "mulle"(que en quechua se dice "AncuKichka") con las tunas, pues antes de llegar a Pauranga habian comido tunas. Tambien les dio de nuevo otro galgada al estomago que cada uno de ellos, con fuertes colicos. Pensaron que los estaban envenenando, teniendo que retirarse. Pero a pesar de todo, quedo en el recuerdo de todos, la accion heroica de Muralla, y asi se le llama hasta ahora".
            </p>
        `
    },

    12: {
        titulo: "📜 Origen",
        contenido: `
             <p>
               Segun los estudios de la arqueologia, desde los años prehispanicos, ha existido poblacion en esta zona. Basta mencionar la que "ciudadela" que se instalo en el cerro El Mirador, a base de viviendas con "colcas" (especies de almacenes tipo cilindricas), quienes a la vez, se habrian posesionado en la parte inferior (a manera de Hurin), naciendo de esa manera, el nucleo urbano original de lo que seria con el transcurso de los años, el pueblo de Huancano. Segun las referencias orales, es en la segunda mitad del siglo XIX cuando se instalan algunas familias en forma definitiva en este lugar. Llegan por ejemplo, los Espinoza, provenientes de Huaytara; llega tambien doña Rosaura Vasquez (provenientes de Ticrapo), quien contrae matrimonio con don Santiago Arriola, siendo madre de "los Arriola".    
            </p>
        `
    },    

    13: {
        titulo: "🖼️ Origen",
        contenido: `
            <div class="galeria-imagenes">
                <img src="imagenes/arriola.jpeg" class="imagen-libro" alt="Arriola">
                <img src="imagenes/pobladores .jpeg" class="imagen-libro" alt="Pobladores">
                <img src="imagenes/pobladores2.jpeg" class="imagen-libro" alt="Pobladores 2">
            </div>
        `
    },

    14: {
        titulo: "📜 Origen",
        contenido: `
             <p>
               El distrito de Huancano, por su misma cercania a la convulsionada zona de Huancavelica-Ayacucho, fue escenario de incursiones de elementos de grupos alzados en armas, en donde, lograron su cometido de causar terror entre la poblacion y llevando a cabo acciones propias de la doctrina que pregonaban. De esa manera tenemos, que el 8 de Enero de 1986, un grupo de subversivos, compuestos de doce sujetos, ingresa a Pampano, y se dirige directamente a la vivienda de la Sra. Maria viuda de Valdivieso, convocando a la pobalcion de ese lugar, en donde, a manera de un "juicio popular", comienza a repartir los enseres de esa vivienda: semillas, alimentos, muebles, etc. Tomando de rehen a dos policias de la zona, poco despues, al llegar los efectivos de la policia a Pampano, logran recuperar parte de lo 
            </p>
        `    
     },
     
     15: {
        titulo: "📜 Origen",
        contenido: `
             <p>
               que los subversivos habian repartido. En el mes de Mayo de 1990 las indicadas fuerzas subvesivas ingresan al pueblo de Huancano, en donde de acuerdo a sus practicas, convocan a la poblacion, e incendian las instalaciones de la Municipalidad Distrital de Huancano, quemando los archivos historicos. Luego de aquel incidente, el 30 de Enero de 1991, nuevamente las fuerzas subversivas ingresan al pueblo de Huancano, quemando lo que quedaba de los archivos municipales salvados de la primera incursion, y que se encontraban provisionalmente en las instalaciones del Centro Educativo 22448. pero aquel incidente solo genera hoy en dia mas dudas, en como fue todo el territorio de Huancano anteriormente, dejando un vacio a nivel historico de este valle de Pisco.
            </p>
        `    
     },

    16: {
        titulo: "🏫 Educación",
        contenido: `
             <p>
               Todo parece indicar, que no haya existido escuela elemental, durante los años del coloniaje en el actual territorio del Distrito de Huancano. Ello era logico, dentro de la mentalidad de los propietarios, de solo, explotar la mano de obra constituida por los negros e indigenas, a base del cultivo intensivo de las tierras. En el siglo XIX, los hijos de los propietarios de grandes terrenos, recibirian estudios, bien a traves de profesores particulares, o irian a las escuelas de ese orden, que existian en el Valle de Pisco, o dirigiendose a Ica o Lima, para seguir estudios primarios y secundarios. No se tiene registro de algunas escuelas elementales, en el Distrito de Huancano para esos años. Para esos años, existia una escuela de caracter particular en la Villa de Pisco;
            </p>
        
        `
    },

    17: {
        titulo: "🏫 Educación",
        contenido: `
            <p>
               pero con fondos propios (65 pesos mensuales). En el año de 1900, se da un nuevo marco legal para la educacion en el Peru; siendo Presidente de la Republica don Eduardo de la Romaña, se promulga la Ley Organica de Enseñanza, en donde se considera las "Escuelas Fiscales", de primer hasta tercer grado. Practicamente, nacen junto con el Distrito de Huancano. El 22 de Agosto de 1902 se crea la Escuela Mixta de Huancano, que seria dirigida por doña Rosalia Robles de Gonzales, destinandose la cantidad de cien soles para el mobiliario de esa escuela mixta en San Andres, Huancano, Humay y San Miguel. A inicios de 1904,desaparece los Consejos Escolares. Todo parece indicar, que seguia el descuido en muchas de las haciendas y fundos del valle de Pisco, en lo relacionado de la educacion 
            </p>
           
        `
    },

    18: {
        titulo: "🏫 Educación",
        contenido: `
            <p>
               de los hijos de los campesinos, a pesar de existir un marco legal que obligaba a los propietarios, a solventar una escuela para la educacion basica de los infantes. Por decreto supremo del 28 de Julio de 1941, se dispuso el cumplimiento de las disposiciones contenidas en el Capitulo VII de la Ley Organica de Educacion, referente a las obligaciones de los "patrones" en materia educativa. En pisco, diecinueve haciendas del valle, estaban obligadas a abrir una escuela, segun el numero de habitaciones que habia demostrando el ultimo censo. Por lo cual, el Dr. Guillermo Palomino A., quien era inspector de Enseñanza de Ica, Pisco y Nazca, se dirige una circular a los dueños de las haciendas a fin de disponer de inmediato, el establecimiento de una escuela a la cual estaba obligado a sostener, en vista del crecimiento poblacional.
            </p>
          
        `
    },

    19: {
        titulo: "🏫 Educación",
        contenido: `
            <p>
               Decia ese circular; en su parte resolutiva:
               "... Para tal efecto, sirvase determinar un local adecuado, dotele de mobiliario y utiles de enseñanza para el regular funcionamientos de la escuela y proponga ante mi despacho el maestro o maestra que ha de prestar sus servicios en el plantel a crearse, a fin de gestionar la tramitacion de sus nombramientos por el Ministerio del Ramo... ... A los infractores, se les aplicara las sanciones del caso, de conformidad con la ley de facultades correctivas".
            </p>

            <p>
               Una revision al valle de pisco de esos años, nos permite observar, por ejemplo, que las haciendas, pertenecientes ahora al actual Distrito de Independencia tales como San Jacinto, escolar; por lo cual, se hacia necesario, la creacion de escuelas dentro de esas haciendas; y en menor numero, las del Distrito de Humay.                
            </p>

        `
    },    

    20: {
        titulo: "🏫 Educación",
        contenido: `
            <p>
               El Gobierno Militar, establece para los años 70, el sistema de la "Nuclearizacion" mediante el cual, se agrupaba a un grupo de centros educativos, bajo un "Director de NEC" (Nucleo Educativo Comunal), teniendo a uno de esos centros, como "base", y en donde se establecia, el "Director". Por efectos de la "Nuclearizacion", en pisco se establece el NEC N-09, mientras que en el valle de Pisco, se instala el NEC N-20, que despues se convertiria en NEC N-14, teniendo como "Base", al C.E, N-22467 de San Clemente; y como segunda "Base", y como segunda "base", al C.E, N-22451, de Humay. Dentro del distrito de Huancano, "nucleaba" a los siguientes centros educativos: Segun la Carta Educativa del N-14 (Base San Clemente), el año 1977 se tenia dentro de Distritos de Huancano, a los siguientes centros educativos:  
            </p>           
        `
    },

    21: {
        titulo: "🏫 Educación",
        contenido: `
            <section class="cuadro-linea-260">
                <div class="encabezado-linea-260">
                    <span class="icono-linea-260">📚</span>
                    <span class="titulo-linea-260">Centros educativos del distrito</span>
                </div>

                <ol class="lista-linea-260">
                    <li><span class="numero-lista">1</span><span class="texto-lista">Centro Educativo N-22448 - Huancano - Director: Constantino Ramos, Fernando.</span></li>
                    <li><span class="numero-lista">2</span><span class="texto-lista">Centro Educativo N-22449 - Pampano - Directora: Marin Jurado, Jacinta.</span></li>
                    <li><span class="numero-lista">3</span><span class="texto-lista">Centro Educativo N-22513 - Quitasol - Director: Gutierrez Reinosa, Ernesto.</span></li>
                    <li><span class="numero-lista">4</span><span class="texto-lista">Centro Educativo N-22530 - Muralla - Director: Quijano Sanchez, Luis.</span></li>
                    <li><span class="numero-lista">5</span><span class="texto-lista">Centro Educativo N-23553 - Huayrani - Director: Lévano Ávalos, Eugenio.</span></li>
                </ol>
            </section>
        `
    },

    22: {
        titulo: "🏫 Educación",
        contenido: `
            <p>
               Las estadisticas de la UGEL-Pisco en el año 2005, nos reporta los siguientes cuadros:
            </p>

            <section class="cuadro-linea-280">
                <div class="encabezado-linea-280">
                    <span class="icono-linea-280">📚</span>
                    <span class="titulo-linea-280">EDUCACION INICIAL ESTATALES</span>
                </div>

                <table class="tabla-linea-280">
                    <thead>
                        <tr>
                            <th class="codigo-columna">N°</th>
                            <th class="centro-columna">Centro educativo</th>
                            <th class="lugar-columna">Lugar</th>
                            <th class="direccion-columna">Direccion</th>
                            <th class="alumno-columna">N° Alum.</th>
                            <th class="docente-columna">N° Doc.</th>
                            <th class="seccion-columna">N° Sec.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="codigo-columna">1</td>
                            <td class="centro-columna">198</td>
                            <td class="lugar-columna">Huancano</td>
                            <td class="direccion-columna">Via Los Libertadores Km.70</td>
                            <td class="alumno-columna">22</td>
                            <td class="docente-columna">1</td>
                            <td class="seccion-columna">3</td>
                        </tr>
                        <tr>
                            <td class="codigo-columna">2</td>
                            <td class="centro-columna">202</td>
                            <td class="lugar-columna">Pampano</td>
                            <td class="direccion-columna">Via Los Libertadores Km.81</td>
                            <td class="alumno-columna">15</td>
                            <td class="docente-columna">1</td>
                            <td class="seccion-columna">3</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section class="cuadro-linea-280">
                <div class="encabezado-linea-280">
                    <span class="icono-linea-280">📚</span>
                    <span class="titulo-linea-280">EDUCACION PRIMARIA ESTATAL</span>
                </div>

                <table class="tabla-linea-280">
                    <thead>
                        <tr>
                            <th class="codigo-columna">N°</th>
                            <th class="centro-columna">Centro educativo</th>
                            <th class="lugar-columna">Lugar</th>
                            <th class="direccion-columna">Direccion</th>
                            <th class="alumno-columna">N° Alum.</th>
                            <th class="docente-columna">N° Doc.</th>
                            <th class="seccion-columna">N° Sec.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="codigo-columna">1</td>
                            <td class="centro-columna">22448 "porsia senisse de arriola"</td>
                            <td class="lugar-columna">Huancano</td>
                            <td class="direccion-columna">Via Los Libertadores Km.70</td>
                            <td class="alumno-columna">99</td>
                            <td class="docente-columna">4</td>
                            <td class="seccion-columna">6</td>
                        </tr>
                        <tr>
                            <td class="codigo-columna">2</td>
                            <td class="centro-columna">22449</td>
                            <td class="lugar-columna">Pampano</td>
                            <td class="direccion-columna">Via Los Libertadores Km.81</td>
                            <td class="alumno-columna">55</td>
                            <td class="docente-columna">3</td>
                            <td class="seccion-columna">6</td>
                        </tr>
                        <tr>
                            <td class="codigo-columna">3</td>
                            <td class="centro-columna">22475</td>
                            <td class="lugar-columna">Chilca</td>
                            <td class="direccion-columna">Calle Luis Yanes N.202</td>
                            <td class="alumno-columna">9</td>
                            <td class="docente-columna">1</td>
                            <td class="seccion-columna">4</td>
                        </tr>
                        <tr>
                            <td class="codigo-columna">4</td>
                            <td class="centro-columna">22500</td>
                            <td class="lugar-columna">Ticacancha</td>
                            <td class="direccion-columna">Anexo de Ticacancha</td>
                            <td class="alumno-columna">20</td>
                            <td class="docente-columna">1</td>
                            <td class="seccion-columna">6</td>
                        </tr>
                        <tr>
                            <td class="codigo-columna">5</td>
                            <td class="centro-columna">22513</td>
                            <td class="lugar-columna">Quitasol</td>
                            <td class="direccion-columna">Via Los Libertadores Km.52</td>
                            <td class="alumno-columna">16</td>
                            <td class="docente-columna">1</td>
                            <td class="seccion-columna">6</td>
                        </tr>
                        <tr>
                            <td class="codigo-columna">6</td>
                            <td class="centro-columna">22530</td>
                            <td class="lugar-columna">Muralla</td>
                            <td class="direccion-columna">Via Los Libertadores Km.76</td>
                            <td class="alumno-columna">21</td>
                            <td class="docente-columna">1</td>
                            <td class="seccion-columna">6</td>
                        </tr>
                        <tr>
                            <td class="codigo-columna">7</td>
                            <td class="centro-columna">22559</td>
                            <td class="lugar-columna">Huayrani</td>
                            <td class="direccion-columna">Via Los Libertadores Km.85</td>
                            <td class="alumno-columna">15</td>
                            <td class="docente-columna">1</td>
                            <td class="seccion-columna">6</td>
                        </tr>
                        <tr>
                            <td class="codigo-columna">8</td>
                            <td class="centro-columna">22600</td>
                            <td class="lugar-columna">Huayanga</td>
                            <td class="direccion-columna">Via Los Libertadores Km.62</td>
                            <td class="alumno-columna">13</td>
                            <td class="docente-columna">1</td>
                            <td class="seccion-columna">6</td>
                        </tr>
                        <tr>
                            <td class="codigo-columna">9</td>
                            <td class="centro-columna">22768</td>
                            <td class="lugar-columna">Paracas</td>
                            <td class="direccion-columna">Via Los Libertadores Km.100</td>
                            <td class="alumno-columna">9</td>
                            <td class="docente-columna">1</td>
                            <td class="seccion-columna">4</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        `
    }, 

    23: {
        titulo: "🏫 Educación",
        contenido: `
            <p>
            La Institucion Educativa N.22448 "Porsia Senisse de Arriola" fue creada por Resolucion Ministral N. 17507 del 7 de Setiembre de 1962, como Escuela Mixta 5811, iniciandose en el nivel primario, estando coo profesora y Directora, doña Porsia Senisse de Arriola. Con Resolucion Directorial 0574 del 7 de Junio de 1978 se amplia el servicio educativo al nivel secundario, con Resolucion Directorial N.0322 del 8 de Agosto de 1994 se le da el nombre de la ilustre educadora "Porsia Senisse de Arriola".
            </p>
            <p>
                <strong>Directores de la I.E. 22448 de Huancano</strong>
                <ol>
                    <li>Porsia Senisse de Arriola</li>
                    <li>Norma Montaya</li>
                    <li>Carmen Fidanza</li>
                    <li>Constantino Ramos</li>
                    <li>Julia Guiterrez</li>
                    <li>Carlos Siguas Peña</li>
                    <li>Flor Chauca Valencia</li>
                    <li>Luisa Quijaite Espino</li>
                    <li>Teobaldo Guillen Ochoa</li>
                    <li>Luisa Quijaite Espino</li>
                </ol>
            </p>
        `
    },

    24: {
        titulo: "🏫 Educación",
        contenido: `
            <p>
                <strong>PROFESORES DE LA I.E. N.22448</strong>
            </p>
            <p>
                <strong>Directora:</strong> Maria Luisa Quijaite Espino.
            </p>
            <ol>
                <li>Clara Neyra Loza.</li>
                <li>Jessica Garcia Benavides.</li>
                <li>Pilar Huarhua Cahuana.</li>
                <li>Ruth Vizarreta Cancino.</li>
                <li>Roberto Perez Arrospide.</li>
                <li>Jorge Vazques Pacheco.</li>
                <li>Carmen Canelo Meneses.</li>
                <li>Joe Muñoz Hernandez.</li>
                <li>Reyna Mendoza Palomina.</li>
                <li>Marco Chipana Vilca.</li>
                <li>Cesar Huamani Huamani.</li>
                <li>Jose Vasquez Ruiz.</li>
                <li>Virginia Huamani Lopez.</li>
                <li>Leandro Alfaro Chumpe.</li>
                <li>Martin Julian Guerrero (Auxiliar).</li>
                <li>Hernan Huaman Morales (Personal Administrativo).</li>
            </ol>

            <p>
                <strong>HIMNO DE LA INSTITUCION EDUCATIVA N.22448 "PORSIA SENISSE DE ARRIOLA"</strong>
            </p>
            <p>
                Porsia Senisse de Arriola<br>
                El honor y el progreso dejo<br>
                Cual ilustre personaje<br>
                El trabajo en la escuela sembro (bis).<br>
                Son tus aulas sagrados rincones<br>
                Donde ansiosos aprendemos tu saber<br>
                Nos alumbra el Señor de la Agonia<br>
                Bendiciendo el Templo del Saber.<br>
                Huancaninos siempre unidos<br>
                Buscaremos siempre superar<br>
                Para triunfar en la vida<br>
                Buscando el mejor ideal.<br>
                Cual camino de ilustres personajes<br>
                Construyamos amor y lealtad<br>
                A los hombres de nuestros lugares<br>
                Los educaremos para la paz.<br>
                ¡Oh colegio!, bastion de la ciencia<br>
                Que cobijas la gran juventud<br>
                Buscando el sendero del progreso<br>
                Para el futuro de nuestro pais.
            </p>
        ` 
    },

    25: {
        titulo: "🏫 Educación",
        contenido: `
            <p>
              (Doña Victoria Porsia Senisse de Arriola, realizo estudios en el colegio "San Jose" de Ica y los superiores, en la Escuela Normal de Lima. Llega a Huancano teniendo 23 años de edad, procedente del Distrito de Pueblo Nuevo (Ica). Contrajo matrimonio con don Augusto Arriola Mora). 
             </p>
        ` 
    },

    26: {
        titulo: "🌱 Agricultura",
        contenido: `
            <p>
              El proyecto de desarrollo rural del Distrito de Huancano, debera estar estrechamente ligado a una base irrigacional que, racionalizando el uso del agua como recurso limitante de la productividad agricola, permita incentivar los mecanismos de la produccion de bienes primarios que actuaran como generadores de otras actividad conexas que a la vez estimularan la elevacion del nivel de vida del poblador de este distrito. En la cuenca alta del rio Pisco, mediante la conclusion de la obra del vaso de Santa Ana, se elevaran los recursos regulados para complementar el riego actual del valle, existiendo en la cuenca alta otras lagunas a mas de las ya actuales regualadas como Pocococha, San Francisco, Agnococha, Pultoc y Pocchalla.
            </p>
        `
    },

    27: {
        titulo: "🌱 Agricultura",
        contenido: `
            <p>
              En la Cuenca alta del rio Pisco, se encuentran pequeñas irrigaciones como las de Ticrapo, Chacota, Sinto, Huayranca, Pauranga, Pauranga, Huayacundo Arma y Huaytara, que se abastecende los rios Chiris, Huaytara y otros afluentes, reduciendo los aportes de los tributarios del Pisco y que, sin embargo demandan estudios para conocer la potencialidad de sus recursos, en especial pecuarios y forestales. Las Provincias de Castrovirreyna del Departamento de Huancavelica, localizando en la cuenca alta del rio Pisco ejercer un efecto determinante en el desarrollo del Valle de Pisco, tanto por el uso de sus recursos naturales como por efecto que jercen sus recursos humanos que presionan sobre el valle, favorecidos por la organizacion tecnico-administrativo existente, por lo que no es racional considerar un desarrollo del ambito provincial sin incluir la cuenca alta.
            </p>
        `
    },

    28: {
        titulo: "🌱 Agricultura",
        contenido: `
            <p>
              El desarrollo y la ordenacion de los recursos hidricos, requiere del conocimiento de la informacion hidrometeorologica que permita definir la climatologia e hidrologia de las diferentes unidades hidrologicas (cuencas y subcuencas). La informacion es obtenida de la red de estaciones instaladas en la region de estudios y su utilidad depende de la densidad de las mismas y de la extension de los registros, los cuales estan en funcion de la variabilidad de los factores hidrometeorologicos, tanto en el espacio como en el tiempo. Se presenta a continuacion, el inventario Fisico de la red hidrometereologico existente en la cuenca del rio Pisco perteneciente al distrito de Huancano y zonas adyacentes, que permita establecer la densidad de estaciones y la existencia de registros correspondiente.
            </p>
        `
    },

    29: {
        titulo: "🌱 Agricultura",
        contenido: `
            <p>
              Se han identificado 19 estaciones en la cuenca del rio Pisco y 3 estaciones en cuencas vecinas (Tunel Cero y San Genaro, en la cuenca del rio Pampas, y Pampas Villacuri, en la cuenca del rio Ica). Para la cuenca alta del rio Pisco, se identifica las de Accnococha, Pisco y Bernales. Tambien existian, las estaciones de Santa Ana, Yanamachay y Pultoc; la de Pocococha, la de Castrovirreyna, de Sinto, y las de Cocas y Huancano. (Entre las de pluviometria, se tiene las de Ticrapo, Cusicancha, Totora y Santa Ana).
            </p>
        `
    },

    30: {
        titulo: "🌱 Agricultura",
        contenido: `
            <div class="cuadro-lagunas">
                <div class="encabezado-lagunas">
                    <span class="icono-lagunas">💧</span>
                    <span class="titulo-lagunas">Inventario de lagunas reguladas</span>
                </div>

                <table class="tabla-lagunas">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Sub cuenca</th>
                            <th>Cap. max (MMC)</th>
                            <th>Tipo de presa</th>
                            <th>Alt. máxima</th>
                            <th>Long. corona</th>
                            <th>Zona benef.</th>
                            <th>Propósito</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pultoc</td>
                            <td>Santa Ana</td>
                            <td>8.0</td>
                            <td>Mampostería</td>
                            <td>15.5</td>
                            <td>15.5</td>
                            <td>Valle de Pisco</td>
                            <td>Irrigación</td>
                        </tr>
                        <tr>
                            <td>Agnococha</td>
                            <td>Santa Ana</td>
                            <td>25.0</td>
                            <td>Tierra</td>
                            <td>135.0</td>
                            <td>135.0</td>
                            <td>Valle de Pisco</td>
                            <td>Irrigación</td>
                        </tr>
                        <tr>
                            <td>Pacococha</td>
                            <td>Santuario</td>
                            <td>12.0</td>
                            <td>Tierra</td>
                            <td>72.0</td>
                            <td>72.0</td>
                            <td>Valle de Pisco y Castrovirreyna</td>
                            <td>Irrigación y energía</td>
                        </tr>
                        <tr>
                            <td>San Francisco</td>
                            <td>Santuario</td>
                            <td>8.7</td>
                            <td>Mampostería</td>
                            <td>18.0</td>
                            <td>18.0</td>
                            <td>Valle de Pisco y conc. La Virreyna</td>
                            <td>Uso múltiple</td>
                        </tr>
                        <tr>
                            <td>Pocchaila</td>
                            <td>Huaytara</td>
                            <td>12.0</td>
                            <td>Tierra</td>
                            <td>69.0</td>
                            <td>69.0</td>
                            <td>Valle de Pisco</td>
                            <td>Irrigación</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },

    31: {
        titulo: "🌱 Agricultura",
        contenido: `
            <p>
              El rio Pisco sigue el patron caracteristico de los rios de la costa, cuyo ciclo anual muestra una fuerte variacion de sus descargas, como respuestas al regimen de lluvias. La cuenca de todo el rio Pisco tiene un area de drenaje total de 4,376 Km2, de las cuales 2,736 Km2 corresponden a la cuenca humeda, situado por encima de los 2,500 msnm. La maxima descarga diaria registrada en Febrero de 1937 y Octubre de 1999 respectivamente. La descarga media es de 24,66 m3/s, para el periodo de regitro 1950-1999. A pesar de su clara torrencialidad de regimen, la cuenca del rio Pisco no se llega a secar complemamente en la epoca de estiaje. El regimen de rio Pisco, puede ser divido en tres periodos caracteristicos que conforman un ciclo:
            </p>
            <ol class="lista-ordenada-simple">
                <li>El periodo de avenidas (Enero a Marzo).</li>
                <li>El periodo de Estiaje (Agosto a Diciembre).</li>
                <li>El periodo transicional (Abril a Julio) entre el fin de avenidas y el principio del estiaje.</li>
            </ol>
        `
    },

    32: {
        titulo: "🌱 Agricultura",
        contenido: `
            <p>
               Este regimen, es una consecuencia directa del comportamiento de las precipitaciones que se presentan en la cuenca humeda, siendo muy poco afectado por las obras de regulacion construidas en la parte alta. La fisiografia de la cuenca receptora, caracterizada por fuentes pendientes y superficiales accidentada, asi como su bajo poder de retencion debido a la escasa cobertura vegetal, determinan que las precipitacion se convierta en forma inmediata en descarga superficial del rio. Los recursos de agua de REGIMEN ESTACIONAL, tienen circulacion hidrologica solo durante los meses lluviosos del verano, especialmente cuando ocurren años humedos o cuando se presenta el fenomeno "El Niño". El escurrimiento de estas quebradas puede representar por breves momentos caudales de varios m3/seg, aunque se trata de flujos altamente saturados en solidos en suspension y arrastre,
            </p>
        `
    },

    33: {
        titulo: "🌱 Agricultura",
        contenido: `
            <p>
              que actuan como avenidas torrenciales conocidas en el sector como "huaycos". Luego de estas avenidas estacionales, los caudales descienden rapidamente hasta pocos litros por segundo, para secarse completamente deurante varios meses de la estacion en el area de estudios, solo dos quebradas han sido identificadas como de regimen de escurrimiento estacional; las quebradas de Chacaras - Huancano, y la quebrada Veladero. La primera es especialmente importante para el trazo del gasoducto puesto que la variante recorre longitudinalmente varios Kms de su valle torrencial, mientras que la segunda solo es cruzada en un tramo de pocos metros.  Dentro de los estudios preeliminares que se realiza para la instalacion de gasoducto por el territorio de Huancano, la empresa Consuladora Walsh y TGP, realizan evaluacion de los caudales medios en el rio de Pisco,  
            </p>
        `
    }, 
    
    34: {
        titulo: "🌱 Agricultura",
        contenido: `
            <p>
              tomando los datos de la estacion de Letrayoc para el periodo 1950-1999, resultando un caudal medio anual de 24,66 m3/se, un maximo medio anual de 57,72 m3/s y un minimo anual de 6,34 m3/s. De esta serie de caudales calculados en base a registros diarios de caudales, el caudal medio mensual pertenece a Noviembre de 1990 con 0,56 m3/s. El estudio de eventos hidrologicos extremos incluye la seleccion de una secuencia de observaciones maximas o minimas de conjunto de datos, el estudio de los caudales picos utiliza solamente el caudal maximo registrado cada año, entre muchos valores registrados. (se tiene infromacion de caudales maximos diarios de la Estacion de Letrayoc, la cual corresponde a un periodo de registro de 67 años, es decir, de 1993 a 1999) 
            </p>
        `
    },

    35: {
        titulo: "🌱 Agricultura",
        contenido: `
            <p>
              El rio Pisco cuenta en la actualidad con cinco obras de represamiento, los cuales se haran menciones de algunos, todos ubicados en la cuenca alta. Las lagunas embalsadas son: tres con presa de tierra (Pacococha, Accnococha y Pocchalla) y dos con presa de mamposteria (San Francisco y Pultoc). En la actualidad el valle dispone de una capacidad maxima de regulacion de 65.7 MMC de agua. Para los fines de la presente descripcion, las lagunas han sido agrupadas segun tres sistemas: Santuario, Santa Ana y Jatum - Rumichaca.
            </p>

            <p>
              <strong>a) LAGUNAS DEL SISTEMA SANTUARIO.-</strong>
            </p>

            <p>
              Componen este sistema los reservorios de las lagunas Pacococha y San Francisco, los cuales permiten la regulacion de una cuenca colectora de 56 Km2 de extension, con una capacidad de regulacion de 20.7 MMC.
            </p>

            <p>
              <strong>Caracteristicas Principales:</strong><br>
              Altura de Presa: 13 m.<br>
              Capacidad de Almacenamiento: 12 MMC.<br>
              Tipo de Presa: Tierra.<br>

              Caracteristica Geologicas:<br>
              El represamiento se ubica en una unidad geomorfologica denominada "Altiplano", cuyo relieve se origina por accion glaciar.
            </p>
        `
    },
    
    36: {
        titulo: "🌱 Agricultura",
        contenido: `
            <p>
              b) LAGUNAS DEL SISTEMA DE SANTA ANA.-
              Este sistema, esta conformado por los reservorios de Accnocochay Pultoc y el embalse de Santa Ana en proceso de construccion.
            </p>
  
            <p>
               <strong>Caracteristicas Principales:</strong><br>
            </p>

            <p>
               Altura de Presa: 19m.<br>
               Capacidad de Almacenamiento: 25 MMC.<br>
               Tipo de Presa: Tierra.<br>

               Caracteristicas geologicas:<br>
               Esta laguna se ubica en una depresion por erosion glaciar; la zona se identifica con la unidad geomorfologica de altiplano.
            </p>
        `
    },

    37: {
        titulo: "🌱 Agricultura",
        contenido: `
            <p>
              c) LAGUNAS DEL SISTEMA JATUM - RUMICHACA
              Esta obra regula una cuenca propia de 18 Km2 mas una cuenca vecina de 6 Km2, con una capacidad maxima embalsable de 12 MMC.
            </p>

            <p>
               <strong>Caracteristicas Principales:</strong><br>
            </p>

            <p>
              Altura de Presa: 9m.<br>
              Capacidad de Almacenamiento: 12 MMC.<br>
              Tipo de Presa: Manposteria.<br>

              Caracteristicas geologicas:<br>
              La region es una altiplanicie cuyo relieve ha sido originado por la glaciacion. En la zona del reservorio se encuentra rocas de la secuencia volcanica-sedimentaria, representados por andesitas, arcillitas y tufos de edad Terciario Superior.
            </p>
        `
    },

    38: {
        titulo: "🌱 Agricultura",
        contenido: `
            <p>
            La irrigacion de Ticrapo, fue construida por el Estado con la finalidad de mejorar el riego de 180 Ha, bajo cultivos y proporcionar riego a 420 Ha adicionales que se hallaban incultas o que eran cultivadas en secano en muy pequeña proporcion.
            </p>

            <p>
           a) ESTRUCTURAS HIDRAULICAS:
            </p>

            <p>
             Bocatoma de concreto armado, con un muro de encauzamiento de concreto ciclopeo
            </p>

             <strong>Canal principal:</strong><br>
             Se inicia en un tunel de 170m, continua en canal con una longitud total de 14.7 Km, que incluyen cinco tuneles con una longitud total 370 m; 10 alcantarillas para cruce de quebradas y la carretera y un acueducto de 10m de longitud.
        `
    },

    39: {
        titulo: "🌱 Agricultura",
        contenido: `
            <p>
            b) <strong>Caracteristicas Geologicas</strong><br>
            </p>

             <p>
            La localidad de Ticrapo se ubica en el flanco occidental de los Andes, en la margen izquierda del rio Chiris, con una topografia de contraste donde alternan cerros de formas muy variadas, con depresiones, lomadas y quebradas, con diversas pendientes que carian entre 3º a 55º. El basamento esta representado por rocas del Grupo Goyllarisquizga, constituidos por capas gruesas y medianas de arenisca y cuarcitas intercalados con capas de lutitas carbonosas, que afloran en la Qda. Ubragha y en las riberas del rio Chiris.
            </p>
        `
    },

    40: {
        titulo: "🌱 Agricultura",
        contenido: `
            <p>
            c) La zona de fundacion, en donde se instalan las estructuras hidraulicas de la irrigacion Ticrapo, se identifica con un antiguo gran deslizamiento que hoy en dia esta sometido a reactivaciones locales, con evidencias de una evolucion cada vez mayor. La evolucion de los fenomenos de geodinamicas externa se incremento a partir de la puesta en servicio del canal de irrigacion de Ticrapo (1964). El canal presentaba, hasta el año 1980, serios problemas de funcionamiento debido a los continuos deslizamientos que lo cubren, colmatandolo y/destruyendolo en algunos tramos.
            </p>
        `
    },

    41: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
         <p>
            Por la presencia de pobladores, aproximadamente desde los años 3000 a.c., el territorio del Distrito de Huancano cuenta con diversos centros arqueologicos. Lamentablemente, Huancano, es casi una zona desconocida para la arqueologia peruana. pues son pocos los trabajos arqueologicos realizados en este lugar (a diferencia de lo realizado en Huaytara), asi como son minimas, las publicaciones al respecto, por lo cual no se puede determinar a exactitud el patron de asentamientos, distribucion espacial, jerarquia de asentamientos y su relacion con otros lugares de la region. No se podria decir entonces, que el territorio comprendido de Huancano, haya estado bajo el control de los funcionarios que habitaron Tambo Colorado, o de los que vivieros en Huaytara-Inkawasi; de quienes dependeria jerarquicamente.En el territorio circundante si se pueden encontrar encontrar asentamientos inkas, tales como las de Tambo Colorado (o Naykasha),
         </p>
     `
    },

    42: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
           en Humay, asi como en las cuencas del Mantaro y del Pampa, mencionando los asentamientos inkas de Huaytara, Vilcashuaman (Ayacucho), el cual ascendia por el valle de Pisco, en cuyas margenes se Wayanto, Pilpachaca; asi como los sectores de Qorimina, Incañan y Chuncana, agrupados bajo el nombre de complejo arqueologico de Uchukus, mientras que para el sector norte, se encuentran los restos arqueologicos de Aoccampa, en Pauranga. Se puede decir entonces, que la influencia incaica en este lugar fue decisiva, especialemte dentro de la jurisdiccion de Huaytara.  Al sector Este del cenntro poblado de Quitasol sobre el lado Norte de la carretera asfaltada de la Via "Los Libertadores", sobre una pequeña colina, se encuentra este centro, compuesto por paredes amanera de pirca, comprendiendo a la vez especies de corralones. El año 1958, el arqueologo norteamericano. D. Wallace, realiza un estadio sobre el valle de Pisco,
        </p>
    `
    },   

    43: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
           llegando a inventariar una serie de centros, muchos de los cuales, ya no existen o estan en la actualidad en mal estado de conservacion. Sus estudios son publicados en un texto titulado "Arqueologicas 13", por el Museo Nacional de Atropologia y Arqueologia (Pueblo Libre, 1971). En esa publicacion se puede observar, los realizados en el Distrito de Huancano; los mismos que son presentados a continuacion:
        </p>

        <p>
         <strong>DE LA HACIENDA LA QUINGA CHICA</strong><br>
        </p>

        <p>  
           Centro arqueologico catalogado con el codigo PV 58-60; es visitado por el estudioso norteameticano el 17 de Marzo de 1958. Esta ubicado sobre terraza, encima del rio y de la carretera, a la base de colinas, en el sector norte del valle de pisco.
        </p>
    `
    }, 

    44: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
           Consiste en estructuras de piedras de campo en forma de casa rectangular, que mide 4 x 6 metros y 80 centimetros de altura o poco mas en algunos casos. Sobre las escarpadas laderas de las colinas hay andenes y algunas estructuras detras de las casas.Se nota un tramo de pared de tapia.
        </p>

        <p>
           <strong>DE LA HACIENDA LA QUINGA GRANDE</strong><br>
        </p>

        <p>
           Centro arqueologico catalogado por el Dr. Wallace con el codigo 58-61; visitado el 25 de Marzo de 1958. Esta ubicado sobre las laderas, encima de la Hacienda La Quinga Grande, aproximadamente a 12o sobre el camino principal que lleva a Castrovirreyna; en un ambiente de saliente seca sobre el rio. Constituye de restos de paredes de piedras, bastantes destruidas; parecen haber sido casas Sobre las laderas mas empinadas de la parte alta hay restos de andenes.
        </p>
    `
    },

    45: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
           Indiscutiblemente, la zona alta del Distrito de Huancano (sector de Pauranga), fue habitado desde los tiempos remotos, debido a las condiciones para la ganaderia. Las referencias vertables, manifiestan, que fueron grupos de los "campas", los primeros habitantes, mientras otros refieren, que fueron los "llactas", los primeros en habitar esta zona. En la zona de Chilca, existe el llamado "Campo Rojo" o Pukacancha, en donde las escalinatas de piedra, sirven de "Estadio" en la actualidad; y en donde se encuentran los restos arqueologicos de "Llactapata", que semejan gigantescas tumbas, por lo cual los lugareños las denominan como "Chulpas".         
        </p>
    `
    },

    46: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
           (Recordemos que en el lugar, existe el conjunto de restos arqueologicos, que la tradicion oral refiere, fue de los "llactas", cuyo nombre del pueblo que tuvieron (ahora en ruina) es de "Llactapata", adyacente a "Cunturkichka" y "Pukacorral", y su hermosas pampa cuyo nombre puesto, es de Yawarpampa (campo de sangre), sitio que segun la leyenda, fue escenario de la batalla entre los "campas" y los "llactas", pues ambos querian poseer la hermosa pampa codiciada y ser los dominantes). En Huauyanga y su centro arqueologico, es el centro arqueologico de Huancano que ha tenido mayores "estudios", pudiendose observarse a ambas bandas del rio Pisco.   
        </p>
    `
    },

    47: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
            Se caracteriza por la presencia de andenes, sobre todo en la parte izquierda (o norte) del rio pisco, y en otro sector, se puede apreciar una serie de viviendas diseminadas, con regular estado de conservacion.  A continuacion, se presenta algunos de los estudios realizados.
        </p>

        <p>
           El Dr. Wallace el 25 de Marzo realizo estudios de este lugar, llegando a detectar hasta cuatro centros, designandolo con codigo sucesivo en el informe final. 
        </p>

        <p>
           Al primero de ellos lo codifica como <strong>EL PV 58-62</strong><br>
        </p>

        <p>
          y lo describe de la siguiente manera: "ubicado a 3 Kms al Oeste de Huancano, 30 Kms valle arriba de Tambo Colorado. Sobre el risco escarpado, a 10 metros encima del camino, sobre el sector sur del rio. El sitio se extiende hacia base de las colinas.
        </p>
    `
    },

    48: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p> 
            <strong>EL PV 58-63</strong><br>
        </p>

        <p>
          (Se ubica) sobre la ribera del rio, al lado opuesto del sitio 64, ligeramente rio arriba. El sito esta sobre una terraza angosta aproximadamente a 30 metros. sobre el rio y a la base de unos cerros muy empinados. (Se halla) al lado derecho del rio.
        </p>

        <p>
        <strong>PV 58-64 </strong><br>
        </p>

        <p> 
          "se halla sobre las laderas, a la base de las colinas, sobre el lado sur del valle, cerca del camino, pero por encima de el, aproximadamente a 4 Kms al Oeste de Huancano; que se encuentra (como) a 70 Kms, valle arriba de la carretera Panamericana
        </p>
    `
    },

    49: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
           "Area donde hay una concentracion de estructuras hechas de piedra de campo, con la apariencia de un pequeño poblado. Existen hoyos revestidos de piedra. Las bocas de estos hoos miden 0.50 metros de diametro y esta cubierto con piedras".
        </p>

        <p>
           <strong>PV 58-65</strong><br>
        </p>

        <p>
           "Ubicado.- Sobre la ribera norte del rio y sobre una terraza situada 100 metros por encima del mismo (consiste en) Una serie de piedras de campo; hay hoyos cuyas bocas estan revestidas con piedras. Lo unico que queda son algunas paredes cuya altura maxima alcanza un metro".
        </P>
    `
    },

    50: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
          Hay un conjunto urbanistico instalado en las laderas del cerro ubicado al lado Sur del pueblo de Huancano, denominado precisamente "EL MIRADOR", pues desde las alturas de ese cerro, se puede contemplar la belleza paisajistica del lugar: el rio, el valle, el cielo... Ese parece que fue uno de los mayores principales motivos, por el cual desde tiempos antiquisimo, grupos de personas se hayan instalado en esta ladera, para aprovechar a la vez, los recursos que le brindaba, tanto el valle como el rio. Constituia de una serie de construcciones a manera de viviendas,
        </p>
    `
    },

    51: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
           a base de habitaciones,cuyas paredes fueron hechas de piedra del mismo cerro, en donde a la vez se podia observar, especies de pasadizos que intercomunicanicaban las "viviendas". Tambien tenia, una serie de paredes adobe, y la abertura de ingreso, de un diamtero, hecho bajo relieve del terreno, paredes de adobe, y la abertura de ingresos, de un diametro promedio de un metro, con una profundidad variable de dos a un metro aproximadamente, lo que les habria permitido "guardar" los alimentos. Lamentablemente,
        </p>
    `
    },

    52: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
            durante los trabajos de instalacion de la tuberia de conduccion del gas de Camisea por este sector, se permitio la destruccion de este centro arqueologico; y por las referencias de los testigos, se encontro numerosa ceramica (sobre todo platos), que tenia, "dibujado" el camaron de rio, asi como se encontraba restos de camarones, por lo cual, se podria decir que era la base de su alimentacion y a la vez, seria considerado como una deidad por los habitantes de esos años.
        </p>
    `
    },

    53: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
           Estudiado por el Dr. Wallace el 17 de Marzo de 1958, sale a la luz restos arqueologicos en Lauta, los cuales son describidos de la siguiente manera:
        </p>

        <p> 
           "Sobre las laderas a la base de las colinas; mas arriba de los cultivos y sobre el lado sur del rio. (El ambiente se caracteriza por tener el rio en sus cercanias)".  "Area  con huellas de estructuras de piedras del campo y hoyos, cuyas entradas estan revestidas de piedra".
        </p>
    `
    },

    54: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
           Ubicado sobre el lado Este del actual grifo, sobre una colina, al lado norte del rio Pisco, se haya los restos arqueologicos de Fuente de Oro, se caracteriza por presentar paredes hechas de piedra, a manera de habitaciones, con escalinatas hechas tambien de piedra. Abarca un area aproximada de 50 x 20 metros.
        </p>
    `
    },

    55: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
           La palabra "PETROGLIFO" proviene de dos raices que significa  <strong>PIEDRA</strong><br>, y <strong>GLIFOS</strong><br>: <strong>GRABADO</strong><br>. Desde luego, etimologicamente es "piedra grabada" o "piedra grabada".
        </p>

        <P>
          <strong>LOS PETROGLIFOS DE HUANCANO</strong><br>
        </P>

        <P> 
           Los petrogrlifos del valle de Pisco en el sur de del Peru, como muestra del arte rupestre precolombino, ya habia sido estudiado y documentado hace 20 años,
        </p>
    `
    },

    56: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
           (Por Nuñez Jimenez 1986:229). En este trabajo, se describe al valle de Pisco, como una de las mayores rutas de trafico sierra a la costa o viceversa; por lo cual, los restos de varias culturas se han mantenido en ciertos lugares. Lamentablemente, no se ha seguido con la profundizacion del estudio sobre estos petroglifos.
        </p>
    `
    },

    57: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
           En los petroglifos hallados "La tecnica utilizada, es la de petroglifos de talla superficiales...La figura trata de un largo mural donde se ven figuras antropomorfas un tanto geometricas con adornos en la cabeza; otras parecen tener alas; brages en cuyas bocas aparecen raras figuras zoomorfas". Este grupo de petroglifos, estan ubicados muy cerca el uno al otro, en la ribera occidental del rio Pisco, unos 85 Km. distante de la ciudad de Pisco.
        </p>
    `
    },

    58: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
           <strong>PETROGLIFOS DE MURALLA Y PAKRA</strong><br>
        </p>

        <P>
          En sus estudios Maarten van Hoek demuestra, que todos los petroglifos de Muralla y Pakra han sido hechas o ejecutadas al picotear y remover la patina de la superficie de la piedra; algunos claramente han sido grabados nuevamente y algunos podrian haber sido confeccionados recientemente. Por eso que, muchos de esos "grabados" han o estan desaparecidos. Aunque hay poca variedad entre imagenes de Muralla (mas del 85% probablemente representan "camelidos"),
        </P>
    `
    },

    59: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
           hay indicaciones que diferentes tradiciones culturales han sido grabado cerca de su punto mas alto: uno muestra un contorno rectangular. Si estas conclusiones son ciertas, podrian implicar o significar que Muralla habria servido como lugar de descarnso para grupos de gente que viajaba hacia arriba o abajo del valle. Otras imagenes en Muralla incluyen por lo menos cinco figuras cruciformes, "aves", "perros" o "zorros".
        </p>
    `
    },

    60: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
           Aunque el nombre actual es de "Fuente de Oro", los estudiosos holandeses prefieren utilizar el nombre generico PAKRA para designar al grupo de petroglifos que se hallan en este lugar, sobre todo, en la parte Sur de la carretera Los Libertadores; En esta zona que es dificil de delimitar, constatamos por lo menos 23 monumentos con petroglifos. Despues de nuestro trabajo en el campo, no pudimos establecer la localizacion de varias rocas grabadas.
        </p>
    `
    },

    61: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
           Aunque en Pakra los "camelidos" (especies de llamas dibujadas en las piedras), tambien dominan en el registro de motivos, este sitio ofrece mas diversidad y un mayor cantidad de imagenes idiosincrasicas que Muralla. Nos sorprende que hay menos "camelidos" (117 ejemplos lo que significa menos del 50% del total de sitios) y que existe una mayor variedad de los estilos.
        </p>
    `
    },

    62: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <p>
            En conclusion; aunque Muralla posee una menor cantidad de rocas decoradas, tiene mas petroglifos: el promedio de los grabados por roca es 24,8 en comparacion con 11,1 en Pakra, mientras el promedio para ambos sitios es 16,5. Esta diferencia notable probablemente se debe a la concentracion enorme de cuadrupedos de MUR 009 y 015.
        </p>
    `
    },

     63: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <img src="imagenes/petroglifos1.jpeg" class="imagen-arqueologica" alt="Petroglifos 1">
    `
    },

     64: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
        <img src="imagenes/petroglifos2.jpeg" class="imagen-arqueologica" alt="Petroglifos 2">
    `
    },

         65: {
        titulo: "🏺 Aspectos arqueológicos",
        contenido: `
            <img src="imagenes/petroglifos3.jpeg" class="imagen-arqueologica" alt="Petroglifos 3">
        `
    },

    66: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
            <strong>LA PRINCESA DE PAMPANO (O "EL CERRO DE LA MUJER EMBARAZADA")</strong><br>
        </p>

        <P>
           Cuentan los señores de mayor edad, que en la antiguedad, Pampano era el lugar de habitacion de cuatro gigantes, pero fueron derrotados por los incas, por lo cual, se consideraban este lugar como epecial; la princesa desde un comienzo estuvo deleitaba con la hermosura del lugar, recorria el territorio desde el mismo lugar en donde se juntaban los dos rios par dar inicio a uno mas grande, que iba a morir al mar. Era muy bella, y habia sido educada como una verdadera princesa.
        </P>
    `
    },

    67: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           Para su seguridad, se le habia designado a cuatro soldados, quienes tenian la orden de cuidarla siempre. Mujer sola, alejada de sus familiares del Qosqo, caia en la enfermedad de la melanconia, y equivocando sus sentimientos, llega a caer en amores con los cuatro soldados que la cuidaban, saliendo a la finales, embarazada sin saber, cual de ellos era el padre del hijo que llevaba en sus entrañas. Para ocultar este pecado a los ojos de su padre sol, decide su padre Asto Huaranca, sepultar viva a la princesa 
        </p>
    `
    },

    68: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           y a los cuatro soldados culpables; la entierran en el mismo lugar donde fuera el pecado, por lo cual designaria como "Pampana Wasi" a todo este lugar. La princesa y sus cuatro soldados, fue enterrada cerca de la actual casa de Don Pancho, La princesa cree que ya pago su culpa, y que es tiempo de resarcir al pueblo de Pampano y a todo Huancano, por el mal que pudo haberle causado por esos años, por eso se le revela en sueños a mucha gente, y el dia que su tumba sea descubierta, con toda la opulencia con que fue sepultada,
        </p>
    `
    },

    69: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
          la suerte de todo Huancano cambiara, pues sera un descubrimiento mucho mayor que el del Señor de Sipan.
        </p>

        <p>
           <strong>DONDE BAILA LA ÑUSTA</strong><br>
        </p>

        <p>
           El paisaje que se observaba desde Huayanay Grande, mas arriba de Huertacucho, era y es hermoso, y eso hacia, que todos los dias llegase hasta ese lugar, ñusta principal de la zona. Todas las tardes venia, y subiendose sobre la piedra mas grande, que estaba encima de otra gran piedra, podia ver, como el padre sol iba a su sueño, perdiendose entre cerros...y cada despedida del sol, era entre fulgores de fuego, que era como si el cielo estuviera incendiandose. Y para despedir a su padre, la ñusta bailaba y bailaba sobre esa piedra grande,
        </p>
    `
    },

    70: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
          para que lo viera el Inti en su diaria despedida, volviendose una costumbre, un rito. Y desde entonces se llamo a esa piedra con el nombre de "Paya Rumi", donde baila la ñusta, donde baila la danzante. Si usted quiere ir a esa piedra, se va a encontrar, que el pasto cubre con mas de un metro la piedra de abajo, como queriendo proteger la memoria de la ñusta danzante
        </p>
    `
    },

    71: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
          <strong>LAS CANDELITAS DE QUITASOL</strong><br>
        </p>

        <P>
          Todo el territorio de Huancano esta lleno de "tapados", es decir, de enterramientos de tesoros, que fueron enterrados por alguna u otra razon por los antiguos. Pero al paso del tiempo, ese tesoro quiere salir, y se manifiesta de diferente manera, generalmente, a personas de buena voluntad, a aquellos que no son ambiciosas. Por todas las noches pasaba Don Florencio Flores,
        </P>
    `
    },

    72: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
          quien era compadre del famoso bandolero Jose Moron que azotaba el valle de Pisco. Y cuando cruzaba por el zanjon todas las noches, se le presentaba un gato, que de pronto salia del Zanjon, Hasta que en una de esas noches, cuando pasaba por ese lugar un arriero que traia quesos, salio nuevamente el gato, asustando al comerciante, quien pudo ver el lugar exacto donde desaparecia el felino animal. Comenzo a mover las piedras, hasta que encontro el tesoro que habia tomado la forma gatuna para hacerse ver.
        </p>
    `
    },

    73: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
          El arriero sorprendido, comenzo a excavar y excavar, sacando todo el tesoro que se habia guardado en ese lugar, (Existen varias versiones sobre las "candelitas", que se aparecen en los cerros, sobre todo, en las "huacas", en los llamados "tapados" o enterramientos de tesoros. Ellos es comun en todo el territorio de Huancano).
        </p>

        <p>
          <strong>LA FERIA DEL QUESO EN QUITASOL</strong><br>
        </p>

        <P>
          Desde hace muchos años, el camino de las alturas de Pauranga para salir a la costa, ha sido por Quitasol, cuando era temporada de lluvias, pues los otros lugares se ponen practicamente intransitables,
        </P>
    `
    },

    74: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           por las lloviznas constantes, los huaycos y yapanas que se presentan, no se puede pasar por las quebradas y rios, el suelo se pone resbaloso. Entonces, se optaba venir por Quitasol, y pasar luego a la costa. Desde hace mas o menos diez años, ha comenzado a tener renombre la "Feria del Queso de Quitasol", donde comienza a llegar mucha gente, es mas, cuando se hace la reunion de la comunidad Campesina de Pauranga, coincide con esas feria, y por lo tanto, es posible enontrarse con muchos conocidos que estan dispersos en todos los fundos y anexos de la comunidad.                                                                                                                                                                                       
        </p>
    `
    },

    75: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           Bajan los "queseros", y a eso de las diez de la mañana, que aparecen por las laderas, a veces con tres o cuatro burros, a veces con mas; vienen trayendo los quesos que van a vender en su "harapa" (especie de alforja que ahora hacen de malla; harapa le llaman cuando trae queso, y cuando no lo contiene se le dice "redecilla"); vienen a veces diez, a veces veinte, a veces mas personas, con sus familiares. Ponen los quesos a la venta; aveces a cuatro soles cada uno, segun el tamaño. Llegan los chinchanos, y ellos compran al por mayor; vienen tambien de otros lugares, de Pisco mismo.
        </p>
    `
    },

    76: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           <strong>REPOSO</strong><br>
        </p>

        <p>
          El camino establecido desde la epoca de los preincas, era el que seguia desde Tambo Colorado, y que dirigia por Huaytara, llegando a Incawasi; y prosguiendo a Vilcaswaman para llegar al Cuzco. Era el camino utilizado entonces, por aquellos que iban o venian desde la sierra a costa o viceversa. Se hacia caminando en varias jornadas, por lo cual tenian que hacer decansos o "pascanas". Se establecio entonces, la parada, en el lugar que ahora conocemos como "Reposos", pues ahi se "reposaba" tranquilamente.
        </p>
    `
    },

    77: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           <strong>LA MURALLA</strong><br> 
        </p>

        <p>
          Durante la invasion de los chilenos al territorio peruano, (la llamada "Guerra del Pacifico"), se tiene el relato oral, recogido por don Eudomiro Flores Cardenas, en los termoinos sigiuientes:
        </p>

        <p>
          "Los chilenos desembarcan en Pisco en Noviembre de 1880, y fueron los de Humay, con mucha gente de la serrania, que se organizaron, para detener el avance de los chilenos, que venian buscando alimentos, que se agarraban a la fuerza, quitandole a la gente. Como ya no habia ejercito peruano en la zona, se tuvieron que organizar, y es ahi donde los pauranginos, desde La Llama, Quitasol, hasta los del mismo Pauranga, se unen a los humainos, para detener a los abusivos chilenos. No tenian armas, era mucho menos que los soldados chilenos,
        </P>
    `
    },

   78: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           por lo cual tenian que usar la inteligencia. Deciden construir entonces, una "muralla" que los detuviera, y lo hacen en el lugar en donde el rio Pisco se acorta mas, en donde se estrecha. Esa muralla los detendria, y asi fue efectivamente, mientras los chilenos se detenian para pasar por la muralla, los peruanos desde arriba de los cerros, les soltaban "galgadas" de piedra, polvo, rocones, todo lo que podian, matando algunos de ellos, hiriendo a otros".
        </p>
    `
    },

    79: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           <strong>SAN ANTONIO DE MURALLA</strong><br>
        </p>

        <P>
          En el paraje denominado actualmente San Antonio, constituido por un abismo de rocas graniticas, de aproximadamente 5o metros de altura, a poco menos de terminar la cima abismal, se encuentra enclaustrada el Santuario Natural con la imagen de "San Antonio de Muralla", donde se apaceria al santo tomando un niño en sus brazos, la imagen petrea se ubica mirando hacia la carretera, al rio y las fertiles tierras de Muralla, su aparicion es un misterio,
        </P>
    `
    },

    80: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
            muchos han pretendido escalar el abismo para observarlo de cerca, inclusive se van descalzos son sogas, pero fuertes vientos los han hecho retroceder en tales hazañas, pero en vano son los esfuerzos por ser un lugar muy occidentado.
        </p>

        <P>
          <strong>SAN VALENTIN</strong><br>
        </p>

        <p>
          Se aparecio en Fuente de Oro en un momento determinado de la antiguedad, decidio quedarse para siempre, alojandose en el cerro que esta frente del actual grifo, haciendo su urna y alojandose en es lugar.
        </p>
    `
    },

    81: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
            Ahi se le encuentra, mirando hacia el rio, los petroglifos, los cerros del frente, el paso de los vehiculos que van o vienen, el trabajar de la gente de la zona. Por eso, se decidio celebrar su aniversario, so el catorce de Febrero como lo hace la mayor cantidad de personas, sino, el primero o uno de Enero, con las celebraciones del recibimiento del año nuevo. (Con el nombre de "San Valentin" se conoce a una formacion petrea ubicada dentro de una especie de hornacina natural,)
        </p>
    `
    },

    82: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           <strong>LA FESTIVIDAD DEL SEÑOR DE LA AGONIA</strong><br>
        </p>

        <P>
          Constituye la festividad religiosa principal del pueblo de Huacano. La venerada imagen, llego aproximadamente el año de 1968, las actividades de la serenata (a cargo de la "hermandad")estas constituidas des la misma mañana, con la limpieza de las calles por los mismos pobladores; arreglos de las andas, de la misma imagen, luego de una semana de diversas Misas organizadas por diferentes entidades de la localidad de Huancano, a modo de devocion hacia la imagen. En la noche del sabado, 
        </P>
    `
    },

    83: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           a las doce de la noche sale en procesion la venerada imagen del Señor de la Agonia, por las principales calles del pueblo hasta dia domingo, el amanecer del domingo se inicia con la quema de bombardas, y se brindan un brindis a todos los asistentes, consiste en un "calentito", a cargo de la Hermandad del Señor de la Agonia, ademas que se brinda tambien alimentacion.
        </p>
    `
    },

    84: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           <strong>LA SIRENA DE HUAYANGA</strong><br>
        </p>

        <p>
          Era el año de 1912; frente a la rancheria de Huayanga, habia un pedron en el rio Pisco, aproximadamente por el Km 62. Todo perteneceria a doña Elia Arriola Meza(su mamá era de Pauranga), existian dos pozos grandes, tipo lagunas. De una de ellas -la que estaba empotrada en el cerro, tipo cueva- habia en la "puerta" un planta de pacae, a donde iba toda la gente de la zona a darse refrescante baño.           
        </p>
    `
    },

    85: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           A partir de las seis de la tarde, salia una sirena con una guitarra; la gente antigua escuchaba sus canticos, y se retiraban, mientras que los niños la sirena los engañaba con juguetes para encantarlos. Quienes vieron a la sirena, manifiestan que eran de cabello rubio, ojos verdes, y la parte inferior de su cuerpo era igual que el de un pez, tenia cola; pero a nadie dio muerte la sirena;
        </p>
    `
    },
    
    86: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
            <strong>EL CONDENADO DE SANQUITAMBO</strong><br>(leyenda referida por el señor Jose Mercedes Conislla Bendezu)
        </p>

        <p>
            Eran los años en que aun no habia carretera, ni existian los vehiculos. El camino utilizado era herradura, y pasaba en ese entonces, por la zona de Pauranga, por Chilca especificamente, para salir por Quitasol. Eso era lo hacian todos los arrieros que iban o venia a la costa. En Ticacancha se encuetra las familias de Pantaleon Yauricasa, los Quispe, doña Teodosia, de Pelagio Choque, de Yolanda Campos,
        </p>
    `
    },

    87: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           todos ellos dedicados a la ganaderia. En el lugar llamado por los incas como Saquitambo (estancia en donde se podia comer tunas de sanqui), se tenia que pasar a pie o con las mulas y los cansados viajeros se alojaban en la cueva del cerro Acaratambo. En una de esas noches, llegaron por el lugar, dos viajeros, quienes cansados por el viaje realizado, deciden dormir en esa cueva. Y mientras uno de ellos inmediatamente quedo dormido,
        </p>
    `
    },

    88: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           el otro no podia, estaba como sobresaltado. En una de esas escucho unos ruidos raros, como si algo viniera rapido con tremenda bulla, por lo cual se asusto; quiso despertar a su compañero de viaje, y por mas que comenzo a moverlo, no se despertaba, decidiendo entonces hincarlo con agujarriero para que despierte mas rapido, u aun asi, el cansado viajero no salia de su sueño. Como el ruido estaba cada vez mas cerca, el viajero que estaba despierto decide trepar las piedras que estaban cerca,
        </p>
    `
    },

    89: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           para esconderse de lo que viniese, subiendo rapidamente, y escondiendose. Desde donde estaba vio como llegada el mal espirit, y que en un forma veloz, tomaba el cuerpo del hombre que se habia quedado dormido, llevandoselo. El sobreviviente propago la presencia del espiritu del condenado en esa cueva y lo que habia pasado con su compañero de viaje, y desde entonces, ya nadie dormia en esa cueva, y los que lo hacian, tenian que dormir mas abajo, por el temor, de que condenado, vaya a llevarselo
        </p>
    `
    },

    90: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
            <strong>COSTUMBRE DE LA ERRANZA</strong><br>
        </p>

        <p>
          Una tradicion que se mantiene entre los ganaderos de Huancano (en todos los sectores), es la erranza; llevandolo a cabo en un cerro determinado (ante el Huamani o espiritu del cerro), en donde segun los antiguos ganaderos, se tiene una fecha especial para llevarlo a cabo. Se hace para "para que el ganado aumente", se "le hace el pedido al cerro", por intermedio de "la erranza"; puede hacerse en los meses de Junio o Julio, mes de San Juan Bautista; en donde se corta parte de la oreja de todo el ganado
        </p>
    `
    },

   91 : {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
            que se ha hecho "la señal o marca", y en un recipiente especial (puede ser una olla de barro o una calabaza seca denominaada "poto"), se entierra bajo una enome piedra (llamada "Rumi mesa" o "Mesa de Piedra"); es decir, se "entrega en ofrenda al cerro, las orejas del ganado, conjuntamente con a coca quintucha, las rosas rosadas; las cintas que han adornado al ganado".
        </p>

        <p>
          <strong>LOS DIFUNTOS</strong><br>
        </p>

        <p>
          Una de las actividades que se mantiene con todas sus caracteristicas propias,
        </p>
    `
    },

    92: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
            es el "Difuntos", que se lleva a cabo, cada primero de Noviembre, en donde se recuerda a los fallecidos y se ve a los pobladores, ir con sus velas, sobre todo en la noche. Cada tumba, puede estas recubierta de piedras, que protegen los fuegos de las velas, para que el viento no las apague, bien puede tener lozas de concreto, que le dan forma de sepultura, existe la tradicion, de llevarle comida ese dia a los difuntos,
        </p>
    `
    },

    93: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
            "pues debe estar con hambre", sobre todo, le llevan la comida que mas le gustaba, especialmente, la rica "pachamanca".
        </p>
    `
    },

   94: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
            <strong>EL ESPIRITU DE LA MINA</strong><br>
        </p>

        <p>
          Una de las creencias que deviene desde los años prehispanicos, es la del "animismo", es decir, atribuir a cada cerro, cada laguna, rio o animal, la potestad que tiene un "espiritu", una "anima". De ahi que se crea en los apus o espiritus que tiene cada cerro, por lo cual, se le tiene que hacer un pago determinado. Es mas, en esta zona, se atribuye que cada cerro puede "hombre" o "puede ser mujer", por lo cual, va a incidir entre los hombres y mujeres.
        </p>
    `
    },

    95: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           Se piensa ademas, que "cuando el cerro es pesado", "no deja dormir", es que tiene una veta, contiene mineral. Dentro de ese "animismo", se atribuye, que cuando un cerro contiene mineral, existe una especie de "duende", "un pequeño espiritu", al cual lo llaman "MUKI", es el que protege al mineral. Por eso hay que pedir permiso, hay que hacer un pago de todas maneras
        </p>
    `
    },

    96: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
            <strong>LOS NIÑOS LLORONES</strong><br>(Referida por Jhon Vasquez Cuba)
        </p>

        <p>
          Muchos misterios encierra estos parajes como encantos en los alrededores de Pampano. Muchos tambien aseguran haber visto varias personas cargando un feretro, otros observan una bola incandesente que se desplaza lentamente con direccion desconocida. Todo esto es tenebroso y por ello los pobladores no caminan mucho de noche...Al parecer Pampano fue un antiguo cementerio y quizas halla varios tesoros enterrados,
        </p>
    `
    },

    97: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
            por los españoles o los incas, o quizas sean almas en pena, o seran dos niños que murieron sin ser bautizados, por lo que se recomienda construir un madero gigante. Otros refieren que el grito de los niños no son mas que el grito de los buhos bebes que asemejan el llanto de un bebe humano.
        </p>

        <p>
          <strong>EL CHOCLON...</strong><br>
        </p>

        <p>
           Era un juego muy popular hasta los años 1970, ahora ya nadie lo juega. Muchos lo vieron y hasta lo jugaron, pero ya no se hace en las festividades,
        </p>
    `
    },

    98: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
           como se realizaban antes. Podia verse en las festividades de la Virgen de Santuarion de Huaca Huaca, en la Mina Condor, cuando habia festividad religiosa. Consistia en hacer primero una hoquedad en el suelo, de aproximadamente una vara de diametro mayor en la superficie e hiba tomando forma conica para terminar en especie de punta, en donde se habia colocado una latita de leche, que contenia tierra compactada con unos hoyos pequeños. Alrededor de esa "latita" 
        </p>
    `
    },

    99: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
          se habia formado una especie de plano descendente, se echaba las "bolitas" bolitas, que podian encajar comodamente en los hoyos de la tierra compactada, y ese era la clave de la suerte.
        </p>

        <p>
          <strong>LOS ALFAJORES DE HUANCANO</strong><br>
        </p>

        <P>
           Los alfajores de Huancano constituyen toda una leyenda, por su exquisitez y por su dulzura, han alcanzado fama que ha trascendido los limites provinciales.¿Quien no ha escuchado sobre los alfajores y manjarblanco de Huancano?
        </P>

    `
    },

    100: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
            Viene a ser el producto emblema del distrito, habiendo comenzado su produccion desde los comienzos del siglo XX, transmitiendose el secreto de su elaboracion, de generacion en generacion entre familias que se dedican a este rubro. Todo producen deliciosos manjarblanco, no existiendo discrepancia en ellos, al contrario, el esfuerzo mancomunado de las familias que los producen, aumenta y acrecia el prestigio de los alfajores de Huancano. Ahi estan los descendientes de don Ricardo Vasquez Conislla, quien muestra con orgullo, que en la partida del matrimonio de su señor padre, aparece el oficio de "panadero", expendiendo los alfajores a Pampano.
        </p>
    `
    },

    101: {
        titulo: "🎭 Mitos, leyendas y tradiciones",
        contenido: `
        <p>
            
        </p>
    `
    },

    
};

function obtenerTextoDeBloque(nodo) {
    const copia = nodo.cloneNode(true);
    copia.querySelectorAll("br").forEach((salto) => {
        salto.replaceWith(document.createTextNode("\n"));
    });
    copia.querySelectorAll("tr").forEach((fila) => {
        fila.append(document.createTextNode("\n"));
    });
    return copia.textContent.trim();
}

function envolverTextoSeccion(texto) {
    const maxCaracteresPorLinea = 25;
    const lineas = [];
    let linea = "";

    texto.split("\n").forEach((fragmento) => {
        fragmento.trim().split(/\s+/).filter(Boolean).forEach((palabra) => {
            if (linea && linea.length + palabra.length + 1 > maxCaracteresPorLinea) {
                lineas.push(linea);
                linea = "";
            }

            while (palabra.length > maxCaracteresPorLinea) {
                if (linea) {
                    lineas.push(linea);
                    linea = "";
                }
                lineas.push(palabra.slice(0, maxCaracteresPorLinea));
                palabra = palabra.slice(maxCaracteresPorLinea);
            }

            linea = linea ? linea + " " + palabra : palabra;
        });

        if (linea) {
            lineas.push(linea);
            linea = "";
        }
    });

    return lineas;
}

function esBloqueDeFormato(elemento) {
    return elemento.matches("table, img, figure, section, ul, ol") ||
        elemento.matches("div") && (
            elemento.querySelector("table, img, figure") !== null ||
            Array.from(elemento.classList).some((clase) =>
                clase.startsWith("cuadro-") || clase.startsWith("galeria-"))
        );
}

function obtenerSeccion(pagina) {
    return SECCIONES.find((seccion) => pagina.titulo.includes(seccion.etiqueta));
}

function crearPaginasConTexto(seccion, paginasOriginales) {
    const paginasNuevas = [];
    let bloquesPagina = [];
    let lineasPagina = 0;

    function guardarPagina() {
        if (!bloquesPagina.length) {
            return;
        }
        paginasNuevas.push({
            titulo: seccion.titulo,
            contenido: bloquesPagina.join("")
        });
        bloquesPagina = [];
        lineasPagina = 0;
    }

    function agregarBloqueTexto(html, nodo) {
        const lineas = envolverTextoSeccion(obtenerTextoDeBloque(nodo));
        if (!lineas.length) {
            return;
        }

        if (lineas.length > 15) {
            guardarPagina();
            for (let inicio = 0; inicio < lineas.length; inicio += 15) {
                const textoHtml = lineas
                    .slice(inicio, inicio + 15)
                    .map((linea) => linea
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;"))
                    .join("<br>");
                paginasNuevas.push({
                    titulo: seccion.titulo,
                    contenido: `<p class="contenido-lineas">${textoHtml}</p>`
                });
            }
            return;
        }

        if (lineasPagina + lineas.length > 15) {
            guardarPagina();
        }
        bloquesPagina.push(html);
        lineasPagina += lineas.length;
    }

    paginasOriginales.forEach((pagina) => {
        const documento = new DOMParser().parseFromString(pagina.contenido, "text/html");
        Array.from(documento.body.childNodes).forEach((nodo) => {
            if (nodo.nodeType === Node.TEXT_NODE && !nodo.textContent.trim()) {
                return;
            }

            if (nodo.nodeType === Node.ELEMENT_NODE && esBloqueDeFormato(nodo)) {
                guardarPagina();
                paginasNuevas.push({
                    titulo: seccion.titulo,
                    contenido: nodo.matches("table")
                        ? `<div class="tabla-pagina">${nodo.outerHTML}</div>`
                        : nodo.outerHTML
                });
                return;
            }

            if (nodo.nodeType === Node.ELEMENT_NODE) {
                agregarBloqueTexto(nodo.outerHTML, nodo);
                return;
            }

            const texto = nodo.textContent.trim();
            if (texto) {
                const nodoTexto = documento.createElement("p");
                nodoTexto.textContent = texto;
                agregarBloqueTexto(nodoTexto.outerHTML, nodoTexto);
            }
        });
    });
    guardarPagina();

    while (paginasNuevas.length < seccion.minimo) {
        paginasNuevas.push({
            titulo: seccion.titulo,
            contenido: "<p></p>"
        });
    }

    return paginasNuevas;
}

function paginarSecciones() {
    const paginasPorClave = new Map();

    const paginasOrdenadas = Object.entries(paginas)
        .sort(([numeroPrimera], [numeroSegunda]) => Number(numeroPrimera) - Number(numeroSegunda))
        .map(([, pagina]) => pagina);

    SECCIONES.forEach((seccion) => {
        const paginasSeccion = paginasOrdenadas.filter((pagina) => obtenerSeccion(pagina) === seccion);
        const resultado = crearPaginasConTexto(seccion, paginasSeccion);
        paginasPorClave.set(seccion.clave, resultado);
    });

    Object.keys(paginas).forEach((numero) => delete paginas[numero]);
    let siguienteNumero = 1;
    PAGINA_MAXIMA = 0;

    SECCIONES.forEach((seccion) => {
        const paginasSeccion = paginasPorClave.get(seccion.clave) || [];
        PAGINAS_POR_SECCION[seccion.clave] = {
            inicio: siguienteNumero,
            fin: siguienteNumero + paginasSeccion.length - 1
        };

        paginasSeccion.forEach((pagina) => {
            paginas[siguienteNumero] = pagina;
            siguienteNumero++;
        });
    });

    PAGINA_MAXIMA = siguienteNumero - 1;
}

function actualizarIndiceSecciones() {
    const botones = document.querySelectorAll("#indice button");

    botones.forEach((boton, indice) => {
        const seccion = SECCIONES[indice];
        const rango = seccion && PAGINAS_POR_SECCION[seccion.clave];
        const textoRango = boton.querySelector("small");
        if (rango && textoRango) {
            textoRango.textContent = `Páginas ${rango.inicio} - ${rango.fin}`;
        }
    });
}

paginarSecciones();

function mostrarAviso(mensaje) {
    const aviso = document.getElementById("estadoAplicacion");
    if (!aviso) {
        return;
    }

    aviso.textContent = mensaje;
    aviso.classList.add("visible");
    window.clearTimeout(temporizadorAviso);
    temporizadorAviso = window.setTimeout(() => {
        aviso.classList.remove("visible");
    }, 3200);
}

function obtenerPaginaGuardada() {
    try {
        const paginaGuardada = Number(localStorage.getItem(CLAVE_ULTIMA_PAGINA));
        return Number.isInteger(paginaGuardada) &&
            paginaGuardada >= 1 &&
            paginaGuardada <= PAGINA_MAXIMA
            ? paginaGuardada
            : null;
    } catch (error) {
        console.error("No se pudo leer la última página guardada.", error);
        mostrarAviso("No se pudo acceder al marcador de lectura en este dispositivo.");
        return null;
    }
}

function actualizarEstadoMarcador() {
    const estado = document.getElementById("estadoMarcador");
    if (!estado) {
        return;
    }

    const paginaGuardada = obtenerPaginaGuardada();
    estado.textContent = paginaGuardada
        ? `Página ${paginaGuardada} guardada`
        : "Aún no hay una lectura guardada";
}

function guardarPaginaActual() {
    try {
        localStorage.setItem(CLAVE_ULTIMA_PAGINA, String(paginaActual));
        actualizarEstadoMarcador();
    } catch (error) {
        console.error("No se pudo guardar la última página leída.", error);
        mostrarAviso("No se pudo guardar la página. Revisa el almacenamiento del navegador.");
    }
}

function continuarLeyendo() {
    const paginaGuardada = obtenerPaginaGuardada();
    if (!paginaGuardada) {
        actualizarEstadoMarcador();
        mostrarAviso("Aún no hay una lectura guardada.");
        return;
    }

    paginaActual = paginaGuardada;
    document.getElementById("portada").classList.remove("activa");
    document.getElementById("indice").classList.remove("activa");
    document.getElementById("lectura").classList.add("activa");
    actualizarPagina();
}

function obtenerResaltados() {
    try {
        const guardados = localStorage.getItem(CLAVE_RESALTADOS);
        if (!guardados) {
            return {};
        }

        const resaltados = JSON.parse(guardados);
        if (!resaltados || typeof resaltados !== "object" || Array.isArray(resaltados)) {
            throw new TypeError("El formato almacenado para los resaltados no es válido.");
        }
        return resaltados;
    } catch (error) {
        console.error("No se pudieron leer los resaltados guardados.", error);
        mostrarAviso("No se pudieron cargar los resaltados guardados en este dispositivo.");
        return {};
    }
}

function guardarResaltados(resaltados) {
    try {
        localStorage.setItem(CLAVE_RESALTADOS, JSON.stringify(resaltados));
        return true;
    } catch (error) {
        console.error("No se pudieron guardar los resaltados.", error);
        mostrarAviso("No se pudo guardar el resaltado. Revisa el almacenamiento del navegador.");
        return false;
    }
}

function obtenerRangosResaltados(pagina) {
    const guardados = obtenerResaltados();
    const rangos = guardados[String(pagina)];
    if (!Array.isArray(rangos)) {
        return [];
    }

    return rangos.filter((rango) =>
        rango &&
        Number.isInteger(rango.inicio) &&
        Number.isInteger(rango.fin) &&
        rango.inicio >= 0 &&
        rango.fin > rango.inicio
    );
}

function aplicarResaltados(pagina) {
    const contenido = document.getElementById("contenido");
    const rangos = obtenerRangosResaltados(pagina);
    if (!contenido || rangos.length === 0) {
        return;
    }

    const textoTotal = contenido.textContent.length;
    const rangosValidos = rangos
        .filter((rango) => rango.inicio < textoTotal)
        .map((rango) => ({
            inicio: rango.inicio,
            fin: Math.min(rango.fin, textoTotal)
        }))
        .sort((primero, segundo) => primero.inicio - segundo.inicio);
    const rangosUnidos = [];

    rangosValidos.forEach((rango) => {
        const anterior = rangosUnidos[rangosUnidos.length - 1];
        if (anterior && rango.inicio <= anterior.fin) {
            anterior.fin = Math.max(anterior.fin, rango.fin);
        } else {
            rangosUnidos.push({ ...rango });
        }
    });

    const caminante = document.createTreeWalker(contenido, NodeFilter.SHOW_TEXT);
    const nodosTexto = [];
    while (caminante.nextNode()) {
        nodosTexto.push(caminante.currentNode);
    }

    let desplazamiento = 0;
    nodosTexto.forEach((nodoTexto) => {
        const texto = nodoTexto.nodeValue;
        const inicioNodo = desplazamiento;
        const finNodo = inicioNodo + texto.length;
        desplazamiento = finNodo;
        const cortes = new Set([0, texto.length]);

        rangosUnidos.forEach((rango) => {
            if (rango.inicio < finNodo && rango.fin > inicioNodo) {
                cortes.add(Math.max(0, rango.inicio - inicioNodo));
                cortes.add(Math.min(texto.length, rango.fin - inicioNodo));
            }
        });

        const puntos = Array.from(cortes).sort((primero, segundo) => primero - segundo);
        if (puntos.length <= 2) {
            return;
        }

        const fragmento = document.createDocumentFragment();
        for (let indice = 0; indice < puntos.length - 1; indice++) {
            const inicio = puntos[indice];
            const fin = puntos[indice + 1];
            const textoParte = texto.slice(inicio, fin);
            const inicioAbsoluto = inicioNodo + inicio;
            const debeResaltar = rangosUnidos.some((rango) =>
                inicioAbsoluto >= rango.inicio && inicioAbsoluto < rango.fin
            );

            if (debeResaltar) {
                const marca = document.createElement("mark");
                marca.className = "resaltado-usuario";
                marca.textContent = textoParte;
                fragmento.appendChild(marca);
            } else {
                fragmento.appendChild(document.createTextNode(textoParte));
            }
        }
        nodoTexto.replaceWith(fragmento);
    });
}

function obtenerOffsetsSeleccion(contenido, rango) {
    const inicio = document.createRange();
    inicio.selectNodeContents(contenido);
    inicio.setEnd(rango.startContainer, rango.startOffset);

    const fin = document.createRange();
    fin.selectNodeContents(contenido);
    fin.setEnd(rango.endContainer, rango.endOffset);

    return { inicio: inicio.toString().length, fin: fin.toString().length };
}

function resaltarTextoSeleccionado() {
    const seleccion = window.getSelection();
    const contenido = document.getElementById("contenido");
    const herramientas = document.getElementById("herramientasSeleccion");

    if (!seleccion || seleccion.isCollapsed || !contenido || !herramientas) {
        return;
    }

    const rango = seleccion.getRangeAt(0);
    if (!contenido.contains(rango.startContainer) || !contenido.contains(rango.endContainer)) {
        return;
    }

    const nuevoRango = obtenerOffsetsSeleccion(contenido, rango);
    if (nuevoRango.fin <= nuevoRango.inicio) {
        return;
    }

    const resaltados = obtenerResaltados();
    const clavePagina = String(paginaActual);
    const rangos = Array.isArray(resaltados[clavePagina])
        ? resaltados[clavePagina].filter((item) =>
            item &&
            Number.isInteger(item.inicio) &&
            Number.isInteger(item.fin) &&
            item.inicio >= 0 &&
            item.fin > item.inicio
        )
        : [];
    rangos.push(nuevoRango);
    rangos.sort((primero, segundo) => primero.inicio - segundo.inicio);

    const rangosUnidos = [];
    rangos.forEach((item) => {
        const anterior = rangosUnidos[rangosUnidos.length - 1];
        if (anterior && item.inicio <= anterior.fin) {
            anterior.fin = Math.max(anterior.fin, item.fin);
        } else {
            rangosUnidos.push({ inicio: item.inicio, fin: item.fin });
        }
    });
    resaltados[clavePagina] = rangosUnidos;

    if (guardarResaltados(resaltados)) {
        seleccion.removeAllRanges();
        actualizarPagina();
        mostrarAviso("Texto resaltado y guardado.");
    }

    actualizarHerramientaSeleccion();
}

function eliminarResaltadosPagina() {
    const resaltados = obtenerResaltados();
    const clavePagina = String(paginaActual);

    if (!Array.isArray(resaltados[clavePagina]) || resaltados[clavePagina].length === 0) {
        mostrarAviso("Esta página no tiene resaltados para eliminar.");
        actualizarHerramientaSeleccion();
        return;
    }

    delete resaltados[clavePagina];
    if (guardarResaltados(resaltados)) {
        window.getSelection()?.removeAllRanges();
        actualizarPagina();
        mostrarAviso("Se eliminaron los resaltados de esta página.");
    }
}

function actualizarHerramientaSeleccion() {
    const seleccion = window.getSelection();
    const contenido = document.getElementById("contenido");
    const herramientas = document.getElementById("herramientasSeleccion");
    const botonResaltar = document.getElementById("botonResaltar");
    const botonEliminar = document.getElementById("botonEliminarResaltados");
    if (!contenido || !herramientas || !botonResaltar || !botonEliminar) {
        return;
    }

    const haySeleccion = Boolean(seleccion && !seleccion.isCollapsed);
    const rango = haySeleccion ? seleccion.getRangeAt(0) : null;
    const seleccionEnContenido = Boolean(
        rango &&
        contenido.contains(rango.startContainer) &&
        contenido.contains(rango.endContainer) &&
        seleccion.toString().trim().length > 0
    );
    const hayResaltados = obtenerRangosResaltados(paginaActual).length > 0;

    botonResaltar.hidden = !seleccionEnContenido;
    botonEliminar.hidden = !hayResaltados;
    herramientas.hidden = !seleccionEnContenido && !hayResaltados;
}

// Mostrar portada
function mostrarPortada() {
    document.getElementById("portada").classList.add("activa");
    document.getElementById("indice").classList.remove("activa");
    document.getElementById("lectura").classList.remove("activa");
}

// Mostrar índice

function mostrarIndice() {

    document.getElementById("portada").classList.remove("activa");
    document.getElementById("lectura").classList.remove("activa");

    document.getElementById("indice").classList.add("activa");
}


// Ir a una sección
function irASeccion(pagina) {

    const seccion = SECCIONES.find((item) => item.ancla === pagina);
    paginaActual = seccion ? PAGINAS_POR_SECCION[seccion.clave].inicio : pagina;

    document.getElementById("portada").classList.remove("activa");
    document.getElementById("indice").classList.remove("activa");

    document.getElementById("lectura").classList.add("activa");

    guardarPaginaActual();
    actualizarPagina();
}


// Página siguiente
function paginaSiguiente() {

    if (paginaActual < PAGINA_MAXIMA) {

        paginaActual++;

        guardarPaginaActual();
        actualizarPagina();
    }
}


// Página anterior
function paginaAnterior() {

    if (paginaActual > 1) {

        paginaActual--;

        guardarPaginaActual();
        actualizarPagina();
    }
}


// Actualizar el contenido
function actualizarPagina() {
    document.getElementById("herramientasSeleccion").hidden = true;
    window.getSelection()?.removeAllRanges();

    document.getElementById("numeroPagina").textContent =
        "Página " + paginaActual;

    const pagina = paginas[paginaActual];

    if (pagina) {
        document.getElementById("tituloSeccion").textContent = pagina.titulo;
        document.getElementById("contenido").innerHTML = pagina.contenido;
        aplicarResaltados(paginaActual);
        actualizarHerramientaSeleccion();
        return;
    }

    const seccion = SECCIONES.find((item) => {
        const rango = PAGINAS_POR_SECCION[item.clave];
        return rango && paginaActual >= rango.inicio && paginaActual <= rango.fin;
    });
    const titulo = seccion ? seccion.titulo : "";
    const contenido = seccion && seccion.clave === "mitos"
        ? "<p>[Escribe aquí el mito, la leyenda o la tradición de la página " + paginaActual + ".]</p>"
        : "<p>Contenido de la página " + paginaActual + ".</p>";

    document.getElementById("tituloSeccion").textContent = titulo;
    document.getElementById("contenido").innerHTML = contenido;
    aplicarResaltados(paginaActual);
    actualizarHerramientaSeleccion();
}


    window.addEventListener('DOMContentLoaded', function () {
        document.body.classList.add('js-ready');
        actualizarIndiceSecciones();
        actualizarEstadoMarcador();
        document.getElementById("botonResaltar").addEventListener("click", resaltarTextoSeleccionado);
        document.getElementById("botonEliminarResaltados").addEventListener("click", eliminarResaltadosPagina);
        document.addEventListener("selectionchange", actualizarHerramientaSeleccion);
        paginaActual = 1;
        mostrarPortada();
        actualizarPagina();
    });