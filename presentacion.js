const URL_DESCARGA_APK = "";

const botonDescarga = document.getElementById("botonDescarga");
const estadoDescarga = document.getElementById("estadoDescarga");
const aviso = document.getElementById("aviso");
const codigoQr = document.getElementById("codigoQr");
const estadoQr = document.getElementById("estadoQr");
const enlacePublico = document.getElementById("enlacePublico");
const copiarEnlace = document.getElementById("copiarEnlace");
let temporizadorAviso;

function mostrarAviso(mensaje) {
    aviso.textContent = mensaje;
    aviso.classList.add("visible");
    window.clearTimeout(temporizadorAviso);
    temporizadorAviso = window.setTimeout(() => {
        aviso.classList.remove("visible");
    }, 3200);
}

if (URL_DESCARGA_APK) {
    botonDescarga.href = URL_DESCARGA_APK;
    botonDescarga.target = "_blank";
    botonDescarga.rel = "noopener";
    botonDescarga.setAttribute("download", "");
    estadoDescarga.textContent = "Descarga la aplicación en tu teléfono.";
} else {
    botonDescarga.addEventListener("click", (evento) => {
        evento.preventDefault();
        mostrarAviso("El enlace de descarga del APK estará disponible próximamente.");
    });
}

function obtenerUrlPublicaCompartible() {
    if (window.location.protocol !== "https:" && window.location.protocol !== "http:") {
        return null;
    }

    const url = new URL(window.location.href);
    if (url.hostname === "localhost" || url.hostname === "127.0.0.1" || url.hostname === "::1") {
        return null;
    }

    url.hash = "huancano-distrito";
    return url;
}

const urlCompartible = obtenerUrlPublicaCompartible();
if (urlCompartible) {
    enlacePublico.value = urlCompartible.href;
    enlacePublico.setAttribute("aria-label", "Enlace público Huancano-distrito");
    copiarEnlace.disabled = false;
    estadoQr.textContent = "Preparando el código QR para esta página...";
    codigoQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=12&data=${encodeURIComponent(urlCompartible.href)}`;
    codigoQr.addEventListener("load", () => {
        codigoQr.hidden = false;
        estadoQr.hidden = true;
    });
    codigoQr.addEventListener("error", () => {
        estadoQr.hidden = false;
        estadoQr.textContent = "No se pudo cargar el código QR. Comprueba tu conexión a internet.";
    });
}

copiarEnlace.addEventListener("click", async () => {
    if (!urlCompartible) {
        mostrarAviso("El enlace estará disponible cuando publiques la página.");
        return;
    }

    try {
        await navigator.clipboard.writeText(urlCompartible.href);
        mostrarAviso("Enlace Huancano-distrito copiado.");
    } catch (error) {
        console.error("No se pudo copiar el enlace público.", error);
        enlacePublico.focus();
        enlacePublico.select();
        mostrarAviso("No se pudo copiar automáticamente. Mantén pulsado el enlace para copiarlo.");
    }
});
