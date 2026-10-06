const BANCO_ACTIVIDADES = {
    origen: [
        { type: "choice", prompt: "¿Qué actividades económicas se mencionan como base del trabajo de muchas familias de Huancano?", options: ["Agricultura y crianza de ganado", "Pesca marítima y comercio portuario", "Minería y fabricación de textiles", "Turismo y transporte"], answer: 0 },
        { type: "choice", prompt: "¿Qué río nace en la zona descrita en el libro?", options: ["Río Pisco", "Río Ica", "Río Chiris", "Río Pampas"], answer: 0 },
        { type: "choice", prompt: "¿Aproximadamente cuándo comenzó a poblarse el valle de Pisco, según el texto?", options: ["3000 a. C.", "1537", "1902", "300 d. C."], answer: 0 },
        { type: "choice", prompt: "¿Qué pueblo dominaba la zona andina antes de la llegada de los Incas, según los estudios citados?", options: ["Los Chocorvos", "Los Pizarros", "Los Almagristas", "Los Espinoza"], answer: 0 },
        { type: "choice", prompt: "¿Qué significado quechua se atribuye a «Chucurpu»?", options: ["Cántaro cónico", "Piedra grabada", "Río caudaloso", "Casa del valle"], answer: 0 },
        { type: "choice", prompt: "¿Entre qué jefes españoles se produjo el conflicto que llevó ejércitos por el territorio de Huancano?", options: ["Pizarro y Almagro", "Wallace y Hoek", "Huáscar y Atahualpa", "Arriola y Espinoza"], answer: 0 },
        { type: "choice", prompt: "¿En qué lugar cercano se libraría una de las batallas de la primera guerra civil entre los invasores españoles?", options: ["Huaytara", "Pampano", "Ticrapo", "Pisco"], answer: 0 },
        { type: "boolean", prompt: "El libro afirma que se conoce con exactitud la fecha del primer poblamiento del valle de Pisco.", answer: false },
        { type: "boolean", prompt: "Los Chocorvos ofrecieron resistencia a los Incas y fueron incorporados al Tawantinsuyo.", answer: true },
        { type: "boolean", prompt: "El libro relaciona a los Chocorvos como aliados de los Chancas.", answer: true },
        { type: "boolean", prompt: "Según el texto, la familia Espinoza llegó desde Ticrapo.", answer: false },
        { type: "select", prompt: "¿Cuál fue el nombre del cerro que el texto identifica como lugar de una antigua ciudadela y colcas?", options: ["El Mirador", "Paya Rumi", "Acaratambo", "Pukacancha"], answer: 0 },
        { type: "select", prompt: "¿De qué lugar provenía doña Rosaura Vásquez, según las referencias del libro?", options: ["Ticrapo", "Huaytara", "Ica", "Pauranga"], answer: 0 },
        { type: "select", prompt: "¿En qué año pasaron por el territorio de Huancano los ejércitos españoles que se dirigían hacia Huaytara?", options: ["1537", "1880", "1902", "1991"], answer: 0 },
        { type: "match", prompt: "Relaciona cada persona o grupo con el dato que le corresponde.", pairs: [["Chocorvos", "Resistieron a los Incas"], ["Espinoza", "Familia proveniente de Huaytara"], ["Rosaura Vásquez", "Proveniente de Ticrapo"]] },
        { type: "match", prompt: "Relaciona el acontecimiento con el año indicado en la sección.", pairs: [["Paso de los ejércitos españoles hacia Huaytara", "1537"], ["Incursión en Pampano mencionada en el libro", "1986"], ["Quema de archivos municipales", "1990 y 1991"]] },
        { type: "fill", prompt: "Completa: el valle de Pisco comenzó a ser habitado aproximadamente hacia los ______ antes de Cristo.", answers: ["3000", "3000 a c", "3000 antes de cristo"] },
        { type: "fill", prompt: "Completa: según la etimología citada, «Chucurpu» significa «________ cónico».", answers: ["cántaro", "cantaro"] },
        { type: "order", prompt: "Ordena estos hechos desde el más antiguo hasta el más reciente, según las fechas del libro.", items: ["Paso de ejércitos españoles por Huancano (1537)", "Incursión en Pampano (1986)", "Incendio de la Municipalidad de Huancano (1990)", "Quema de archivos municipales salvados (1991)"] },
        { type: "order", prompt: "Ordena la secuencia narrada sobre los Chocorvos y los Incas.", items: ["Los Chocorvos dominaban la zona andina", "Ofrecieron resistencia a los ejércitos incas", "Fueron sometidos e incorporados al Tawantinsuyo"] }
    ],
    educacion: [
        { type: "choice", prompt: "¿Qué indica el libro sobre la existencia de escuelas elementales durante el coloniaje en el actual distrito de Huancano?", options: ["No parece que hubiera una escuela elemental", "Había una escuela en cada hacienda", "Funcionaba una escuela mixta desde 1902", "Solo existían escuelas secundarias"], answer: 0 },
        { type: "choice", prompt: "¿En qué año se promulgó la Ley Orgánica de Enseñanza mencionada en el texto?", options: ["1900", "1902", "1941", "1962"], answer: 0 },
        { type: "choice", prompt: "¿Qué escuela se creó en Huancano el 22 de agosto de 1902?", options: ["La Escuela Mixta de Huancano", "La Escuela Normal de Lima", "El NEC N.º 14", "La Escuela Mixta 5811"], answer: 0 },
        { type: "choice", prompt: "¿Quién dirigió inicialmente la Escuela Mixta de Huancano creada en 1902?", options: ["Rosalía Robles de Gonzales", "Porsia Senisse de Arriola", "Victoria Porsia Senisse", "Marín Jurado"], answer: 0 },
        { type: "choice", prompt: "¿Qué dispuso el decreto supremo del 28 de julio de 1941 referido en el libro?", options: ["Obligaciones educativas de los patrones", "La creación del nivel secundario en Huancano", "La fundación de la Escuela Normal de Lima", "La entrega de tierras para escuelas"], answer: 0 },
        { type: "choice", prompt: "¿Qué sistema educativo agrupaba centros bajo la dirección de un NEC durante los años setenta?", options: ["La Nuclearización", "La Irrigación", "La Red Hidrometeorológica", "La Reforma de Huaytara"], answer: 0 },
        { type: "choice", prompt: "¿En qué año se amplió al nivel secundario el servicio de la I. E. N.º 22448?", options: ["1978", "1962", "1902", "1994"], answer: 0 },
        { type: "boolean", prompt: "El libro señala que los hijos de algunos propietarios del siglo XIX estudiaban con profesores particulares o fuera del distrito.", answer: true },
        { type: "boolean", prompt: "La Escuela Mixta de Huancano se creó el 22 de agosto de 1902.", answer: true },
        { type: "boolean", prompt: "El NEC N.º 20 del valle de Pisco posteriormente se convirtió en NEC N.º 14.", answer: true },
        { type: "boolean", prompt: "La I. E. N.º 22448 recibió el nombre de Porsia Senisse de Arriola en 1962.", answer: false },
        { type: "select", prompt: "¿Quién era presidente cuando se promulgó la Ley Orgánica de Enseñanza de 1900?", options: ["Eduardo de la Romaña", "Guillermo Palomino A.", "Augusto Arriola Mora", "Constantino Ramos"], answer: 0 },
        { type: "select", prompt: "¿Cuál era el centro educativo base del NEC N.º 14 señalado para 1977?", options: ["C. E. N.º 22467 de San Clemente", "C. E. N.º 22448 de Huancano", "C. E. N.º 22451 de Humay", "Escuela Mixta 5811"], answer: 0 },
        { type: "select", prompt: "¿En qué año se dio a la I. E. N.º 22448 el nombre de la educadora Porsia Senisse de Arriola?", options: ["1994", "1962", "1978", "1941"], answer: 0 },
        { type: "match", prompt: "Relaciona cada fecha con el hecho educativo descrito.", pairs: [["1902", "Creación de la Escuela Mixta de Huancano"], ["1962", "Creación de la Escuela Mixta 5811"], ["1978", "Ampliación al nivel secundario"]] },
        { type: "match", prompt: "Relaciona la persona o entidad con el dato del texto.", pairs: [["Rosalía Robles de Gonzales", "Primera directora de la Escuela Mixta de Huancano"], ["Guillermo Palomino A.", "Inspector de Enseñanza de Ica, Pisco y Nazca"], ["Eduardo de la Romaña", "Presidente al promulgarse la ley de 1900"]] },
        { type: "fill", prompt: "Completa: la Escuela Mixta de Huancano fue creada el 22 de agosto de ______.", answers: ["1902"] },
        { type: "fill", prompt: "Completa: la institución educativa N.º 22448 lleva el nombre de Porsia Senisse de ______.", answers: ["arriola"] },
        { type: "order", prompt: "Ordena cronológicamente estos hitos de la I. E. N.º 22448.", items: ["Creación de la Escuela Mixta 5811 (1962)", "Ampliación al nivel secundario (1978)", "Asignación del nombre Porsia Senisse de Arriola (1994)"] },
        { type: "order", prompt: "Ordena cronológicamente los primeros hitos educativos descritos.", items: ["Ley Orgánica de Enseñanza (1900)", "Creación de la Escuela Mixta de Huancano (1902)", "Decreto sobre obligaciones educativas de los patrones (1941)"] }
    ],
    agricultura: [
        { type: "choice", prompt: "¿Qué recurso se identifica como limitante de la productividad agrícola del distrito?", options: ["El agua", "La piedra", "La madera", "El viento"], answer: 0 },
        { type: "choice", prompt: "¿Qué obra se menciona como medio para aumentar los recursos regulados en la cuenca alta?", options: ["El vaso de Santa Ana", "El canal de Ticrapo", "La presa de Pultoc", "La estación de Letrayoc"], answer: 0 },
        { type: "choice", prompt: "¿Cuántas estaciones se identificaron en la cuenca del río Pisco?", options: ["19", "3", "22", "65"], answer: 0 },
        { type: "choice", prompt: "¿Cuándo ocurre el periodo de avenidas del río Pisco, según el ciclo descrito?", options: ["Enero a marzo", "Abril a julio", "Agosto a diciembre", "Mayo a agosto"], answer: 0 },
        { type: "choice", prompt: "¿Cómo se llama el periodo entre el fin de avenidas y el principio del estiaje?", options: ["Periodo transicional", "Periodo de represamiento", "Periodo de lluvias", "Periodo de irrigación"], answer: 0 },
        { type: "choice", prompt: "¿Qué dos quebradas se identifican como de régimen de escurrimiento estacional?", options: ["Chacaras-Huancano y Veladero", "Chiris y Huaytara", "Ticrapo y Pauranga", "Santa Ana y Pultoc"], answer: 0 },
        { type: "choice", prompt: "¿Cuántas hectáreas adicionales buscaba regar la irrigación de Ticrapo, además de mejorar el riego de las ya cultivadas?", options: ["420 hectáreas", "180 hectáreas", "65 hectáreas", "14,7 hectáreas"], answer: 0 },
        { type: "boolean", prompt: "El texto explica que el régimen del río Pisco responde a la variación de las lluvias.", answer: true },
        { type: "boolean", prompt: "El río Pisco se seca completamente durante la época de estiaje.", answer: false },
        { type: "boolean", prompt: "El canal principal de la irrigación de Ticrapo tiene una longitud total de 14,7 km.", answer: true },
        { type: "boolean", prompt: "La cuenca húmeda del río Pisco se sitúa por encima de los 2.500 m s. n. m.", answer: true },
        { type: "select", prompt: "¿Cuál es el periodo de estiaje indicado en el libro?", options: ["Agosto a diciembre", "Enero a marzo", "Abril a julio", "Junio a septiembre"], answer: 0 },
        { type: "select", prompt: "¿Qué propósito aparece para la laguna Pultoc en el inventario?", options: ["Irrigación", "Consumo minero", "Transporte", "Pesca"], answer: 0 },
        { type: "select", prompt: "¿Qué capacidad máxima de regulación de agua se menciona para el valle?", options: ["65,7 MMC", "24,66 MMC", "20,7 MMC", "12 MMC"], answer: 0 },
        { type: "match", prompt: "Relaciona cada periodo del río con los meses que le corresponden.", pairs: [["Avenidas", "Enero a marzo"], ["Transicional", "Abril a julio"], ["Estiaje", "Agosto a diciembre"]] },
        { type: "match", prompt: "Relaciona la irrigación con el dato que aparece en el texto.", pairs: [["Ticrapo", "Mejora el riego de 180 ha y amplía a 420 ha"], ["Canal principal", "Longitud total de 14,7 km"], ["Túneles del canal", "Cinco, con 370 m en total"]] },
        { type: "fill", prompt: "Completa: la descarga media anual del río Pisco indicada para el periodo 1950-1999 fue de 24,66 m³ por ______.", answers: ["segundo", "s"] },
        { type: "fill", prompt: "Completa: el periodo de avenidas del río Pisco se extiende de enero a ______.", answers: ["marzo"] },
        { type: "order", prompt: "Ordena los tres periodos del ciclo anual del río Pisco según el calendario descrito.", items: ["Avenidas (enero a marzo)", "Transicional (abril a julio)", "Estiaje (agosto a diciembre)"] },
        { type: "order", prompt: "Ordena las etapas descritas para el agua en las quebradas estacionales.", items: ["Las lluvias producen escurrimiento y avenidas", "Los caudales descienden rápidamente", "Las quebradas pueden secarse durante varios meses"] }
    ],
    arqueologia: [
        { type: "choice", prompt: "¿Desde aproximadamente cuándo se señala presencia de pobladores en el territorio de Huancano?", options: ["3000 a. C.", "1537", "1958", "1971"], answer: 0 },
        { type: "choice", prompt: "¿Quién realizó estudios e inventarios arqueológicos del valle de Pisco en 1958?", options: ["D. Wallace", "Maarten van Hoek", "Porsia Senisse", "Eduardo de la Romaña"], answer: 0 },
        { type: "choice", prompt: "¿Qué código recibió el centro arqueológico de la hacienda La Quinga Chica?", options: ["PV 58-60", "PV 58-61", "PV 58-63", "MUR 009"], answer: 0 },
        { type: "choice", prompt: "¿Qué dimensiones aproximadas se atribuyen a una casa rectangular de La Quinga Chica?", options: ["4 por 6 metros", "50 por 20 metros", "12 por 8 metros", "30 por 10 metros"], answer: 0 },
        { type: "choice", prompt: "¿Qué nombre se da a los restos de Llactapata que semejan tumbas gigantescas?", options: ["Chulpas", "Colcas", "Pascana", "Harapa"], answer: 0 },
        { type: "choice", prompt: "¿Qué significa etimológicamente «petroglifo» en el texto?", options: ["Piedra grabada", "Piedra apilada", "Casa de piedra", "Pintura de animales"], answer: 0 },
        { type: "choice", prompt: "¿Qué motivo probablemente representa más del 85 % de las imágenes de Muralla, según el texto?", options: ["Camélidos", "Figuras humanas", "Aves", "Peces"], answer: 0 },
        { type: "boolean", prompt: "El libro señala que hay pocos trabajos arqueológicos realizados en Huancano.", answer: true },
        { type: "boolean", prompt: "La Quinga Grande aparece catalogada con el código PV 58-61.", answer: true },
        { type: "boolean", prompt: "El conjunto de El Mirador fue descrito en el texto como ubicado al norte del pueblo de Huancano.", answer: false },
        { type: "boolean", prompt: "El texto dice que los petroglifos se realizaban picoteando y removiendo la pátina de la piedra.", answer: true },
        { type: "select", prompt: "¿Qué lugar se describe con paredes de piedra y escalinatas, en un área aproximada de 50 por 20 metros?", options: ["Fuente de Oro", "Llactapata", "La Quinga Chica", "Aoccampa"], answer: 0 },
        { type: "select", prompt: "¿Qué hallazgo se menciona en las cerámicas encontradas en El Mirador?", options: ["El dibujo de un camarón de río", "Figuras de camélidos", "Un contorno rectangular", "Una imagen de San Antonio"], answer: 0 },
        { type: "select", prompt: "¿Cuántos monumentos con petroglifos se constataron por lo menos en la zona denominada Pakra?", options: ["23", "5", "16", "117"], answer: 0 },
        { type: "match", prompt: "Relaciona el sitio arqueológico con su característica descrita.", pairs: [["La Quinga Chica", "Centro catalogado PV 58-60"], ["La Quinga Grande", "Centro catalogado PV 58-61"], ["El Mirador", "Conjunto urbano en una ladera al sur de Huancano"]] },
        { type: "match", prompt: "Relaciona cada lugar o elemento con el dato del libro.", pairs: [["Lauta", "Estudiado por D. Wallace en marzo de 1958"], ["Fuente de Oro", "Paredes de piedra y escalinatas"], ["Pakra", "Mayor diversidad de imágenes que Muralla"]] },
        { type: "fill", prompt: "Completa: en Muralla, el promedio citado es de 24,8 grabados por ______.", answers: ["roca"] },
        { type: "fill", prompt: "Completa: el promedio de grabados por roca citado para Pakra es de ______.", answers: ["11,1", "11.1"] },
        { type: "order", prompt: "Ordena estos hitos de la investigación citados para La Quinga Chica.", items: ["D. Wallace visita el sitio (17 de marzo de 1958)", "El estudio se publica en «Arqueológicas 13» (1971)"] },
        { type: "order", prompt: "Ordena las acciones de la técnica descrita para elaborar petroglifos.", items: ["Picotear la piedra", "Remover la pátina de su superficie"] }
    ],
    mitos: [
        { type: "choice", prompt: "¿Cómo se llamaba la princesa de la leyenda asociada al «Cerro de la mujer embarazada»?", options: ["La princesa de Pampano", "La ñusta de Quitasol", "La princesa de Paya Rumi", "La mujer de Acaratambo"], answer: 0 },
        { type: "choice", prompt: "¿Cómo se llamaba la piedra donde bailaba la ñusta al despedir al Sol?", options: ["Paya Rumi", "Rumi Mesa", "Pukacancha", "Pampana Wasi"], answer: 0 },
        { type: "choice", prompt: "¿Qué forma tomaba el tesoro en el relato de las Candelitas de Quitasol?", options: ["Un gato", "Un zorro", "Una sirena", "Un camélido"], answer: 0 },
        { type: "choice", prompt: "¿Qué se transportaba en la harapa durante la feria de Quitasol?", options: ["Quesos", "Camarones", "Piedras", "Semillas"], answer: 0 },
        { type: "choice", prompt: "¿Qué era una «pascana» en el relato de Reposo?", options: ["Una parada para descansar durante el viaje", "Una feria de quesos", "Una forma de marcar al ganado", "Una piedra con grabados"], answer: 0 },
        { type: "choice", prompt: "¿En qué mes se recuerda a los difuntos, según la tradición descrita?", options: ["Noviembre", "Febrero", "Junio", "Agosto"], answer: 0 },
        { type: "choice", prompt: "¿Cómo llaman al pequeño espíritu que, según la creencia descrita, protege el mineral?", options: ["Muki", "Inti", "Huamani", "Ñusta"], answer: 0 },
        { type: "boolean", prompt: "La princesa de Pampano estaba protegida por cuatro soldados.", answer: true },
        { type: "boolean", prompt: "La feria del queso de Quitasol se relaciona con el camino desde las alturas de Pauranga hacia la costa.", answer: true },
        { type: "boolean", prompt: "El libro dice que la erranza se realiza para pedir que aumente el ganado.", answer: true },
        { type: "boolean", prompt: "En el relato de Reposo, el camino llevaba desde Tambo Colorado hacia Huaytara e Incawasi.", answer: true },
        { type: "select", prompt: "¿Quién es señalado como padre de la princesa en el relato de Pampano?", options: ["Asto Huaranca", "Don Florencio Flores", "José Morón", "San Antonio"], answer: 0 },
        { type: "select", prompt: "¿Qué día se celebra el aniversario de San Valentín en el relato de Fuente de Oro?", options: ["14 de febrero", "1 de noviembre", "24 de junio", "17 de marzo"], answer: 0 },
        { type: "select", prompt: "¿Qué comida se menciona entre las que se llevan a los difuntos?", options: ["Pachamanca", "Queso de Quitasol", "Tunas de sanqui", "Camarones"], answer: 0 },
        { type: "match", prompt: "Relaciona cada relato con el elemento que lo identifica.", pairs: [["Donde baila la ñusta", "Paya Rumi"], ["Las Candelitas de Quitasol", "Un gato que conduce al tesoro"], ["Reposo", "Lugar de descanso en una ruta antigua"]] },
        { type: "match", prompt: "Relaciona la tradición o personaje con su descripción.", pairs: [["Erranza", "Ofrenda vinculada al aumento del ganado"], ["Muki", "Espíritu que protege el mineral"], ["Harapa", "Alforja usada para llevar quesos"]] },
        { type: "fill", prompt: "Completa: la tradición de los difuntos se lleva a cabo cada primero de ______.", answers: ["noviembre"] },
        { type: "fill", prompt: "Completa: el lugar de descanso del relato recibió el nombre de «________».", answers: ["reposo"] },
        { type: "order", prompt: "Ordena los hechos principales del relato de las Candelitas de Quitasol.", items: ["El arriero ve aparecer al gato", "Observa dónde desaparece el animal", "Mueve las piedras y encuentra el tesoro"] },
        { type: "order", prompt: "Ordena los hechos de la leyenda de la princesa de Pampano.", items: ["La princesa se enamora de los cuatro soldados que la cuidaban", "Queda embarazada sin saber quién era el padre", "Asto Huaranca ordena sepultarla junto con los soldados"] }
    ]
};

(function () {
    const contenido = document.getElementById("contenidoActividades");
    const pantalla = document.getElementById("actividades");
    const botonVolver = document.getElementById("volverLecturaActividades");
    let seccionActual = null;
    let indiceActividad = 0;
    let puntuacion = 0;
    let ordenActual = [];
    let respondida = false;

    function mezclar(elementos) {
        const resultado = [...elementos];
        for (let indice = resultado.length - 1; indice > 0; indice--) {
            const aleatorio = Math.floor(Math.random() * (indice + 1));
            [resultado[indice], resultado[aleatorio]] = [resultado[aleatorio], resultado[indice]];
        }
        return resultado;
    }

    function normalizarRespuesta(texto) {
        return texto
            .trim()
            .toLocaleLowerCase("es")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[.,;:¿?¡!]/g, "")
            .replace(/\s+/g, " ");
    }

    function crearElemento(etiqueta, clase, texto) {
        const elemento = document.createElement(etiqueta);
        if (clase) {
            elemento.className = clase;
        }
        if (texto !== undefined) {
            elemento.textContent = texto;
        }
        return elemento;
    }

    function obtenerPreguntaActual() {
        return BANCO_ACTIVIDADES[seccionActual][indiceActividad];
    }

    function renderizarProgreso(total) {
        const contenedor = crearElemento("div", "progreso-actividades");
        const texto = crearElemento("div", "progreso-texto");
        texto.append(
            crearElemento("span", "", `Actividad ${indiceActividad + 1} de ${total}`),
            crearElemento("span", "", `${Math.round(((indiceActividad + 1) / total) * 100)} %`)
        );
        const progreso = document.createElement("progress");
        progreso.max = total;
        progreso.value = indiceActividad + 1;
        progreso.setAttribute("aria-label", `Progreso: actividad ${indiceActividad + 1} de ${total}`);
        contenedor.append(texto, progreso);
        return contenedor;
    }

    function crearControlOpciones(opciones, tarjeta) {
        const lista = crearElemento("div", "opciones-actividad");
        opciones.forEach((opcion) => {
            const etiqueta = crearElemento("label", "opcion-actividad");
            const entrada = document.createElement("input");
            entrada.type = "radio";
            entrada.name = "respuestaActividad";
            entrada.value = opcion.valor;
            etiqueta.append(entrada, crearElemento("span", "", opcion.texto));
            lista.appendChild(etiqueta);
        });
        tarjeta.appendChild(lista);
    }

    function crearControlSeleccion(pregunta, tarjeta) {
        const seleccion = crearElemento("select", "seleccion-respuesta");
        seleccion.setAttribute("aria-label", "Selecciona la respuesta correcta");
        const inicial = document.createElement("option");
        inicial.value = "";
        inicial.textContent = "Selecciona una respuesta";
        seleccion.appendChild(inicial);
        const opciones = mezclar(pregunta.options.map((texto, indice) => ({
            texto,
            valor: String(indice)
        })));
        opciones.forEach((opcion) => {
            const elemento = document.createElement("option");
            elemento.value = opcion.valor;
            elemento.textContent = opcion.texto;
            seleccion.appendChild(elemento);
        });
        tarjeta.appendChild(seleccion);
    }

    function crearControlRelacionar(pregunta, tarjeta) {
        const lista = crearElemento("div", "relaciones-actividad");
        const respuestas = mezclar(pregunta.pairs.map(([, derecha]) => derecha));
        pregunta.pairs.forEach(([izquierda], indice) => {
            const fila = crearElemento("label", "fila-relacion", izquierda);
            const seleccion = crearElemento("select", "seleccion-relacion");
            seleccion.dataset.par = String(indice);
            seleccion.setAttribute("aria-label", `Elige la relación para ${izquierda}`);
            const inicial = document.createElement("option");
            inicial.value = "";
            inicial.textContent = "Selecciona una respuesta";
            seleccion.appendChild(inicial);
            respuestas.forEach((derecha) => {
                const opcion = document.createElement("option");
                opcion.value = derecha;
                opcion.textContent = derecha;
                seleccion.appendChild(opcion);
            });
            fila.appendChild(seleccion);
            lista.appendChild(fila);
        });
        tarjeta.appendChild(lista);
    }

    function crearControlOrden(pregunta, tarjeta) {
        const lista = crearElemento("ol", "orden-actividad");
        ordenActual.forEach((elemento, indice) => {
            const fila = crearElemento("li", "fila-orden");
            fila.appendChild(crearElemento("span", "texto-orden", elemento));
            const botones = crearElemento("div", "botones-orden");
            const subir = crearElemento("button", "boton-mover-orden", "↑");
            subir.type = "button";
            subir.disabled = indice === 0;
            subir.setAttribute("aria-label", `Subir ${elemento}`);
            subir.addEventListener("click", () => moverElemento(indice, indice - 1, pregunta, tarjeta));
            const bajar = crearElemento("button", "boton-mover-orden", "↓");
            bajar.type = "button";
            bajar.disabled = indice === ordenActual.length - 1;
            bajar.setAttribute("aria-label", `Bajar ${elemento}`);
            bajar.addEventListener("click", () => moverElemento(indice, indice + 1, pregunta, tarjeta));
            botones.append(subir, bajar);
            fila.appendChild(botones);
            lista.appendChild(fila);
        });
        tarjeta.appendChild(lista);
    }

    function moverElemento(origen, destino, pregunta, tarjeta) {
        if (destino < 0 || destino >= ordenActual.length) {
            return;
        }
        [ordenActual[origen], ordenActual[destino]] = [ordenActual[destino], ordenActual[origen]];
        tarjeta.querySelector(".orden-actividad").remove();
        crearControlOrden(pregunta, tarjeta);
    }

    function respuestaCorrecta(pregunta, tarjeta) {
        if (pregunta.type === "choice") {
            const seleccionada = tarjeta.querySelector('input[name="respuestaActividad"]:checked');
            return seleccionada ? Number(seleccionada.value) === pregunta.answer : null;
        }
        if (pregunta.type === "select") {
            const seleccionada = tarjeta.querySelector(".seleccion-respuesta");
            return seleccionada && seleccionada.value
                ? Number(seleccionada.value) === pregunta.answer
                : null;
        }
        if (pregunta.type === "boolean") {
            const seleccionada = tarjeta.querySelector('input[name="respuestaActividad"]:checked');
            return seleccionada ? (seleccionada.value === "true") === pregunta.answer : null;
        }
        if (pregunta.type === "match") {
            const selecciones = Array.from(tarjeta.querySelectorAll(".seleccion-relacion"));
            if (selecciones.some((seleccion) => !seleccion.value)) {
                return null;
            }
            return selecciones.every((seleccion, indice) =>
                seleccion.value === pregunta.pairs[indice][1]
            );
        }
        if (pregunta.type === "fill") {
            const entrada = tarjeta.querySelector(".campo-respuesta-actividad");
            if (!entrada || !entrada.value.trim()) {
                return null;
            }
            const respuesta = normalizarRespuesta(entrada.value);
            return pregunta.answers.some((aceptada) => normalizarRespuesta(aceptada) === respuesta);
        }
        if (pregunta.type === "order") {
            return ordenActual.every((elemento, indice) => elemento === pregunta.items[indice]);
        }
        return null;
    }

    function textoRespuestaCorrecta(pregunta) {
        if (pregunta.type === "choice" || pregunta.type === "select") {
            return pregunta.options[pregunta.answer];
        }
        if (pregunta.type === "boolean") {
            return pregunta.answer ? "Verdadero" : "Falso";
        }
        if (pregunta.type === "match") {
            return pregunta.pairs.map(([izquierda, derecha]) => `${izquierda} → ${derecha}`).join("; ");
        }
        if (pregunta.type === "fill") {
            return pregunta.answers[0];
        }
        return pregunta.items.join(" → ");
    }

    function comprobarRespuesta(pregunta, tarjeta, estado) {
        if (respondida) {
            return;
        }
        const resultado = respuestaCorrecta(pregunta, tarjeta);
        if (resultado === null) {
            estado.textContent = "Completa tu respuesta antes de comprobarla.";
            estado.className = "respuesta-actividad aviso";
            estado.hidden = false;
            return;
        }

        respondida = true;
        if (resultado) {
            puntuacion++;
        }
        estado.textContent = resultado
            ? "¡Correcto! Has prestado atención a esta sección."
            : `No es correcto. La respuesta esperada es: ${textoRespuestaCorrecta(pregunta)}.`;
        estado.className = `respuesta-actividad ${resultado ? "correcta" : "incorrecta"}`;
        estado.hidden = false;
        tarjeta.querySelectorAll("input, select, .boton-mover-orden").forEach((control) => {
            control.disabled = true;
        });
        const botonComprobar = tarjeta.querySelector(".boton-comprobar");
        botonComprobar.disabled = true;
        botonComprobar.hidden = true;

        const siguiente = crearElemento("button", "boton-siguiente",
            indiceActividad === BANCO_ACTIVIDADES[seccionActual].length - 1
                ? "Ver resultado"
                : "Siguiente actividad");
        siguiente.type = "button";
        siguiente.addEventListener("click", () => {
            indiceActividad++;
            if (indiceActividad >= BANCO_ACTIVIDADES[seccionActual].length) {
                renderizarResultado();
            } else {
                renderizarActividad();
            }
        });
        tarjeta.querySelector(".acciones-actividad").appendChild(siguiente);
    }

    function renderizarActividad() {
        const lista = BANCO_ACTIVIDADES[seccionActual];
        const seccion = SECCIONES.find((item) => item.clave === seccionActual);
        const pregunta = obtenerPreguntaActual();
        respondida = false;
        ordenActual = pregunta.type === "order" ? mezclar(pregunta.items) : [];
        if (pregunta.type === "order" &&
            ordenActual.every((elemento, indice) => elemento === pregunta.items[indice])) {
            ordenActual.reverse();
        }

        const titulo = crearElemento("h1", "titulo-hoja-actividades", "Comprueba lo que aprendiste");
        titulo.id = "tituloActividades";
        const subtitulo = crearElemento("p", "subtitulo-hoja-actividades",
            `Sección: ${seccion.etiqueta}. Responde las actividades para repasar esta parte del libro.`);
        const tarjeta = crearElemento("article", "tarjeta-actividad");
        tarjeta.setAttribute("aria-labelledby", "preguntaActividad");
        tarjeta.appendChild(crearElemento("p", "tipo-actividad", {
            choice: "Opción múltiple",
            boolean: "Verdadero o falso",
            select: "Selecciona la respuesta",
            match: "Relaciona los conceptos",
            fill: "Completa la frase",
            order: "Ordena los elementos"
        }[pregunta.type]));
        const textoPregunta = crearElemento("h2", "pregunta-actividad", pregunta.prompt);
        textoPregunta.id = "preguntaActividad";
        tarjeta.appendChild(textoPregunta);

        if (pregunta.type === "choice") {
            const opciones = mezclar(pregunta.options.map((texto, indice) => ({
                texto,
                valor: String(indice)
            })));
            crearControlOpciones(opciones, tarjeta);
        } else if (pregunta.type === "select") {
            crearControlSeleccion(pregunta, tarjeta);
        } else if (pregunta.type === "boolean") {
            crearControlOpciones({
                options: [
                    { texto: "Verdadero", valor: "true" },
                    { texto: "Falso", valor: "false" }
                ]
            }.options, tarjeta);
        } else if (pregunta.type === "match") {
            crearControlRelacionar(pregunta, tarjeta);
        } else if (pregunta.type === "fill") {
            const entrada = crearElemento("input", "campo-respuesta-actividad");
            entrada.type = "text";
            entrada.autocomplete = "off";
            entrada.setAttribute("aria-label", "Escribe tu respuesta");
            tarjeta.appendChild(entrada);
        } else if (pregunta.type === "order") {
            crearControlOrden(pregunta, tarjeta);
        }

        const estado = crearElemento("p", "respuesta-actividad");
        estado.setAttribute("role", "status");
        estado.setAttribute("aria-live", "polite");
        estado.hidden = true;
        tarjeta.appendChild(estado);

        const acciones = crearElemento("div", "acciones-actividad");
        const comprobar = crearElemento("button", "boton-comprobar", "Comprobar respuesta");
        comprobar.type = "button";
        comprobar.addEventListener("click", () => comprobarRespuesta(pregunta, tarjeta, estado));
        acciones.appendChild(comprobar);
        tarjeta.appendChild(acciones);

        contenido.replaceChildren(
            renderizarProgreso(lista.length),
            titulo,
            subtitulo,
            tarjeta
        );
        window.scrollTo(0, 0);
    }

    function mensajeResultado(porcentaje) {
        if (porcentaje >= 90) {
            return "¡Excelente! Conoces muy bien esta parte de nuestra historia.";
        }
        if (porcentaje >= 70) {
            return "¡Muy bien! Solo necesitas repasar algunos detalles.";
        }
        if (porcentaje >= 50) {
            return "Buen intento. Te recomendamos volver a leer esta sección.";
        }
        return "Parece que necesitas repasar esta parte del libro.";
    }

    function renderizarResultado() {
        const total = BANCO_ACTIVIDADES[seccionActual].length;
        const porcentaje = Math.round((puntuacion / total) * 100);
        const resultado = crearElemento("section", "resultado-actividades");
        resultado.setAttribute("aria-labelledby", "tituloResultado");
        const titulo = crearElemento("h2", "", "¡Actividad completada!");
        titulo.id = "tituloResultado";
        const puntaje = crearElemento("p", "puntuacion-final", `${puntuacion} / ${total}`);
        puntaje.setAttribute("aria-label", `Puntuación: ${puntuacion} de ${total}`);
        const porcentajeTexto = crearElemento("p", "porcentaje-final", `Porcentaje: ${porcentaje} %`);
        const mensaje = crearElemento("p", "mensaje-final", mensajeResultado(porcentaje));
        const acciones = crearElemento("div", "acciones-resultado");
        const reintentar = crearElemento("button", "boton-reintentar", "Intentar nuevamente");
        reintentar.type = "button";
        reintentar.addEventListener("click", iniciarDeNuevo);
        const volver = crearElemento("button", "boton-resultado", "Volver al libro");
        volver.type = "button";
        volver.addEventListener("click", () => {
            if (typeof window.continuarLuegoDeActividades === "function") {
                window.continuarLuegoDeActividades();
            }
        });
        acciones.append(reintentar, volver);
        resultado.append(titulo, puntaje, porcentajeTexto, mensaje, acciones);
        contenido.replaceChildren(resultado);
        window.scrollTo(0, 0);
    }

    function iniciarDeNuevo() {
        indiceActividad = 0;
        puntuacion = 0;
        renderizarActividad();
    }

    function abrirHoja(clave) {
        if (!BANCO_ACTIVIDADES[clave] || !Array.isArray(BANCO_ACTIVIDADES[clave])) {
            console.error(`No existe un banco de actividades válido para la sección "${clave}".`);
            mostrarAviso("No están disponibles las actividades de esta sección.");
            return;
        }
        seccionActual = clave;
        iniciarDeNuevo();
        document.getElementById("portada").classList.remove("activa");
        document.getElementById("indice").classList.remove("activa");
        document.getElementById("lectura").classList.remove("activa");
        pantalla.classList.add("activa");
        document.body.classList.add("modo-actividades");
    }

    window.abrirHojaActividades = abrirHoja;
    botonVolver.addEventListener("click", () => {
        if (typeof window.salirDeActividades === "function") {
            window.salirDeActividades();
        }
        document.getElementById("lectura").classList.add("activa");
    });
})();
