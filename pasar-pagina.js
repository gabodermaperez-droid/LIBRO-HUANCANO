(() => {
    const area = document.querySelector(".pagina-area");
    const spread = document.getElementById("bookSpread");
    const leftPage = document.querySelector(".pagina-izquierda");
    const rightPage = document.getElementById("paginaDerecha");
    const layer = document.getElementById("pageTurnLayer");
    const pageNumber = document.getElementById("numeroPagina");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wideScreen = window.matchMedia("(min-width: 900px)");
    const duration = () => reduceMotion.matches ? 220 : 760;

    if (!area || !spread || !leftPage || !rightPage || !layer || typeof window.actualizarPagina !== "function") {
        console.error("No se pudo iniciar el paso de páginas: falta la estructura del libro.");
        return;
    }

    const actualizarPaginaOriginal = window.actualizarPagina;
    const paginaSiguienteOriginal = window.paginaSiguiente;
    const paginaAnteriorOriginal = window.paginaAnterior;
    let gesto = null;
    let transicionActiva = false;
    let temporizadorTransicion;
    let cancelarGiroActivo = () => {};

    function seccionDe(pagina) {
        return SECCIONES.find((seccion) => {
            const rango = PAGINAS_POR_SECCION[seccion.clave];
            return rango && pagina >= rango.inicio && pagina <= rango.fin;
        });
    }

    function datosPagina(numero) {
        if (numero < 1 || numero > PAGINA_MAXIMA) {
            return null;
        }

        const pagina = paginas[numero];
        if (pagina) {
            return pagina;
        }

        const seccion = seccionDe(numero);
        return {
            titulo: seccion ? seccion.titulo : "",
            contenido: seccion && seccion.clave === "mitos"
                ? `<p>[Escribe aquí el mito, la leyenda o la tradición de la página ${numero}.]</p>`
                : `<p>Contenido de la página ${numero}.</p>`
        };
    }

    function actualizarPaginaDerecha() {
        const indice = paginaActual + 1;
        const seccionActual = seccionDe(paginaActual);
        const seccionDerecha = seccionDe(indice);
        const datos = seccionActual && seccionActual === seccionDerecha ? datosPagina(indice) : null;
        const titulo = document.getElementById("tituloPaginaDerecha");
        const contenido = document.getElementById("contenidoPaginaDerecha");
        const paginaVacia = !datos;

        rightPage.classList.toggle("pagina-vacia", paginaVacia);
        rightPage.setAttribute("aria-hidden", String(!wideScreen.matches));
        titulo.textContent = paginaVacia && typeof window.abrirHojaActividades === "function"
            ? "Hoja de actividades"
            : datos ? datos.titulo : "";
        contenido.innerHTML = paginaVacia && typeof window.abrirHojaActividades === "function"
            ? "<p>Usa «Siguiente» para abrir las actividades de esta sección.</p>"
            : datos ? datos.contenido : "";

        if (pageNumber) {
            pageNumber.textContent = wideScreen.matches && datos
                ? `Páginas ${paginaActual}–${indice}`
                : `Página ${paginaActual}`;
        }
    }

    function actualizarVista() {
        const seccion = seccionDe(paginaActual);
        const rango = seccion && PAGINAS_POR_SECCION[seccion.clave];
        const previaActividades = Boolean(rango && paginaActual === rango.fin);
        area.classList.toggle("spread-enabled", wideScreen.matches);
        area.classList.toggle("pagina-previa-actividades", previaActividades);
        document.getElementById("lectura").classList.toggle("previsualiza-actividades", previaActividades);
        const indicacion = area.querySelector(".indicacion-arrastre");
        if (indicacion) {
            indicacion.textContent = previaActividades
                ? "Usa «Siguiente» para abrir las actividades de esta sección"
                : "Arrastra una esquina o el borde de la hoja para pasarla";
        }
        actualizarPaginaDerecha();
    }

    window.actualizarPagina = function (...argumentos) {
        actualizarPaginaOriginal.apply(this, argumentos);
        actualizarVista();
    };

    function ejecutarNavegacion(direccion) {
        if (direccion === "forward") {
            const seccion = seccionDe(paginaActual);
            const rango = seccion && PAGINAS_POR_SECCION[seccion.clave];

            if (rango && paginaActual === rango.fin) {
                paginaSiguienteOriginal.call(window);
                return false;
            }
            if (paginaActual >= PAGINA_MAXIMA) {
                return false;
            }

            const cantidad = wideScreen.matches && rango && paginaActual + 1 === rango.fin ? 1
                : wideScreen.matches ? 2 : 1;
            for (let paso = 0; paso < cantidad; paso++) {
                const anterior = paginaActual;
                paginaSiguienteOriginal.call(window);
                if (paginaActual === anterior || document.getElementById("actividades")?.classList.contains("activa")) {
                    break;
                }
            }
            return true;
        }

        if (paginaActual <= 1) {
            return false;
        }

        const seccion = seccionDe(paginaActual);
        const rango = seccion && PAGINAS_POR_SECCION[seccion.clave];
        const cantidad = wideScreen.matches && rango &&
            paginaActual !== rango.inicio && paginaActual !== rango.fin ? 2 : 1;

        for (let paso = 0; paso < cantidad && paginaActual > 1; paso++) {
            paginaAnteriorOriginal.call(window);
        }
        return true;
    }

    function paginaFuente(direccion) {
        if (wideScreen.matches) {
            return direccion === "forward" ? rightPage : leftPage;
        }
        return leftPage;
    }

    function numeroFuente(direccion) {
        if (!wideScreen.matches) {
            return paginaActual;
        }
        return direccion === "forward" ? paginaActual + 1 : paginaActual;
    }

    function crearCara(datos, etiqueta) {
        const cara = document.createElement("div");
        cara.className = `page-turn-face ${etiqueta}`;
        const pagina = document.createElement("article");
        pagina.className = "pagina";

        if (datos) {
            pagina.innerHTML = `<h2>${datos.titulo}</h2><div class="contenido-pagina-derecha">${datos.contenido}</div>`;
        }
        cara.appendChild(pagina);
        return cara;
    }

    function comenzarGiro(direccion, origen, alCompletar, progresoInicial = 0, inclinacion = 0) {
        const fuente = paginaFuente(direccion);
        const numero = numeroFuente(direccion);
        const delante = datosPagina(numero);
        const detras = datosPagina(numero + (direccion === "forward" ? 1 : -1));
        const hoja = document.createElement("div");
        const caraDelante = crearCara(delante, "page-turn-face-front");
        const caraDetras = crearCara(detras, "page-turn-face-back");

        hoja.className = "page-turn-sheet";
        hoja.append(caraDelante, caraDetras);
        layer.replaceChildren(hoja);
        layer.className = `page-turn-layer turning ${direccion}`;
        layer.style.transition = "none";

        if (wideScreen.matches && direccion === "forward") {
            layer.style.left = "50%";
            layer.style.right = "0";
        } else if (wideScreen.matches) {
            layer.style.left = "0";
            layer.style.right = "50%";
        } else {
            layer.style.left = "0";
            layer.style.right = "0";
        }

        const rect = fuente.getBoundingClientRect();
        const rotacion = direccion === "forward" ? -180 : 180;
        const distancia = Math.max(1, rect.width);

        function aplicarProgreso(progreso, x = 0, y = 0) {
            const limitado = Math.max(0, Math.min(1, progreso));
            const angulo = rotacion * limitado;
            const giroVertical = Math.max(-7, Math.min(7, (y / Math.max(1, rect.height)) * 12));
            hoja.style.setProperty("--fold-shade", String(Math.min(0.68, limitado * 0.72)));
            hoja.style.transform = `translateX(${x * 0.045}px) rotateY(${angulo}deg) rotateX(${giroVertical}deg)`;
            hoja.style.filter = `drop-shadow(${direccion === "forward" ? 1 : -1} ${4 + limitado * 9}px ${8 + limitado * 12}px rgba(40, 28, 15, ${0.12 + limitado * 0.2}))`;
        }

        function limpiar() {
            clearTimeout(temporizadorTransicion);
            layer.replaceChildren();
            layer.className = "page-turn-layer";
            layer.removeAttribute("style");
            transicionActiva = false;
            gesto = null;
            cancelarGiroActivo = () => {};
        }

        function terminar(guardar) {
            try {
                if (guardar) {
                    alCompletar();
                }
            } finally {
                limpiar();
                actualizarPaginaDerecha();
            }
        }

        function finalizarAlTerminar(evento) {
            if (evento.target !== hoja || evento.propertyName !== "transform") {
                return;
            }
            hoja.removeEventListener("transitionend", finalizarAlTerminar);
            terminar(guardar);
        }

        let guardar = true;
        transicionActiva = true;
        cancelarGiroActivo = limpiar;
        hoja.addEventListener("transitionend", finalizarAlTerminar);

        if (origen === "automatico") {
            aplicarProgreso(0);
            void hoja.offsetWidth;
            hoja.style.transition = `transform ${duration()}ms cubic-bezier(.2,.72,.16,1), filter ${duration()}ms ease`;
            aplicarProgreso(1);
        } else {
            aplicarProgreso(progresoInicial, origen.dx, inclinacion);
            return {
                hoja,
                distancia,
                completar: (confirmar) => {
                    guardar = confirmar;
                    hoja.style.transition = `transform ${duration()}ms cubic-bezier(.2,.72,.16,1), filter ${duration()}ms ease`;
                    aplicarProgreso(confirmar ? 1 : 0);
                    temporizadorTransicion = window.setTimeout(() => terminar(confirmar), duration() + 120);
                },
                mover: aplicarProgreso,
                cancelar: limpiar
            };
        }

        temporizadorTransicion = window.setTimeout(() => terminar(true), duration() + 120);
        return { cancelar: limpiar };
    }

    function puedeGirar(direccion) {
        if (direccion === "backward") {
            return paginaActual > 1;
        }
        const seccion = seccionDe(paginaActual);
        const rango = seccion && PAGINAS_POR_SECCION[seccion.clave];
        return paginaActual < PAGINA_MAXIMA && !(rango && paginaActual === rango.fin);
    }

    function girarAutomaticamente(direccion) {
        if (transicionActiva) {
            return;
        }
        if (!puedeGirar(direccion)) {
            if (direccion === "forward") {
                ejecutarNavegacion(direccion);
            }
            return;
        }
        comenzarGiro(direccion, "automatico", () => ejecutarNavegacion(direccion));
    }

    window.paginaSiguiente = () => girarAutomaticamente("forward");
    window.paginaAnterior = () => girarAutomaticamente("backward");

    ["mostrarPortada", "mostrarIndice", "irASeccion", "continuarLeyendo"].forEach((nombre) => {
        const original = window[nombre];
        if (typeof original === "function") {
            window[nombre] = function (...argumentos) {
                cancelarGiroActivo();
                return original.apply(this, argumentos);
            };
        }
    });

    function esControl(elemento) {
        return Boolean(elemento.closest(
            "button, a, input, textarea, select, option, summary, video, audio, [contenteditable='true'], .tabla-pagina"
        ));
    }

    function iniciarGesto(evento) {
        if (!evento.isPrimary || evento.button !== 0 || transicionActiva ||
            document.getElementById("lectura").classList.contains("activa") === false ||
            esControl(evento.target) || window.getSelection()?.toString().trim()) {
            return;
        }

        const fuente = evento.target.closest(".pagina");
        if (!fuente) {
            return;
        }

        const rect = fuente.getBoundingClientRect();
        const banda = Math.max(38, Math.min(78, rect.width * 0.16));
        let direccion;
        if (wideScreen.matches) {
            if (fuente === rightPage && evento.clientX >= rect.right - banda) {
                direccion = "forward";
            } else if (fuente === leftPage && evento.clientX <= rect.left + banda) {
                direccion = "backward";
            }
        } else if (evento.clientX >= rect.right - banda) {
            direccion = "forward";
        } else if (evento.clientX <= rect.left + banda) {
            direccion = "backward";
        }

        if (!direccion || !puedeGirar(direccion)) {
            return;
        }
        gesto = {
            pointerId: evento.pointerId,
            direccion,
            x: evento.clientX,
            y: evento.clientY,
            origen: fuente,
            giro: null
        };
    }

    function moverGesto(evento) {
        if (!gesto || evento.pointerId !== gesto.pointerId) {
            return;
        }
        const dx = evento.clientX - gesto.x;
        const dy = evento.clientY - gesto.y;
        if (!gesto.giro) {
            if (Math.abs(dx) < 7 && Math.abs(dy) < 7) {
                return;
            }
            if (Math.abs(dy) > Math.abs(dx) * 1.1 || Math.abs(dx) < 7) {
                gesto = null;
                return;
            }
            if ((gesto.direccion === "forward" && dx >= 0) ||
                (gesto.direccion === "backward" && dx <= 0)) {
                gesto = null;
                return;
            }

            evento.preventDefault();
            gesto.origen.setPointerCapture(evento.pointerId);
            const currentDirection = gesto.direccion;
            const currentOrigin = gesto;
            currentOrigin.giro = comenzarGiro(
                currentDirection,
                { dx, dy },
                () => ejecutarNavegacion(currentDirection),
                0,
                dy
            );
            currentOrigin.giro.mover(0, dx, dy);
        }

        evento.preventDefault();
        const sentido = gesto.direccion === "forward" ? -1 : 1;
        const progreso = Math.min(1, Math.max(0, (dx * sentido) / gesto.giro.distancia));
        gesto.giro.mover(progreso, dx, dy);
        gesto.progreso = progreso;
        gesto.ultimaX = evento.clientX;
        gesto.ultimoTiempo = performance.now();
    }

    function finalizarGesto(evento, cancelar = false) {
        if (!gesto || evento.pointerId !== gesto.pointerId) {
            return;
        }
        const actual = gesto;
        if (!actual.giro) {
            gesto = null;
            return;
        }

        const sentido = actual.direccion === "forward" ? -1 : 1;
        const dx = (evento.clientX - actual.x) * sentido;
        const duracionGesto = Math.max(1, performance.now() - (actual.ultimoTiempo || performance.now()));
        const velocidad = Math.abs(evento.clientX - (actual.ultimaX || evento.clientX)) / duracionGesto;
        const progreso = Math.max(actual.progreso || 0, dx / actual.giro.distancia);
        const completar = !cancelar && progreso >= 0.34 || !cancelar && progreso >= 0.12 && velocidad > 0.45;
        actual.giro.completar(Boolean(completar));
    }

    area.addEventListener("pointerdown", iniciarGesto);
    area.addEventListener("pointermove", moverGesto, { passive: false });
    area.addEventListener("pointerup", (evento) => finalizarGesto(evento));
    area.addEventListener("pointercancel", (evento) => finalizarGesto(evento, true));

    document.addEventListener("keydown", (evento) => {
        if (evento.altKey || evento.ctrlKey || evento.metaKey ||
            esControl(evento.target) || window.getSelection()?.toString().trim()) {
            return;
        }
        if (evento.key === "ArrowRight") {
            evento.preventDefault();
            window.paginaSiguiente();
        } else if (evento.key === "ArrowLeft") {
            evento.preventDefault();
            window.paginaAnterior();
        }
    });

    wideScreen.addEventListener("change", () => {
        if (transicionActiva) {
            cancelarGiroActivo();
        }
        actualizarVista();
    });

    actualizarVista();
})();
