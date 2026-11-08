console.log("Condicional if - ClickLab");
let stockCamaras = 12;

console.log("Condicional Simple If");
if (stockCamaras > 0) {
    console.log("Hay cámaras disponibles en ClickLab.");
}

console.log("Condicional If-Else dos caminos");
let bateria = 85;
if (bateria > 0) {
    console.log("La cámara de demostración tiene batería suficiente.");
} else {
    console.log("La cámara necesita recarga de batería Li-ion.");
}

console.log("Condicional If-Else If múltiples caminos");
let linea = "Retro";
if (linea === "Retro") {
    console.log("Sección de cámaras analógicas 35mm.");
} else if (linea === "Digital") {
    console.log("Sección de cámaras mirrorless y réflex.");
} else {
    console.log("Sección de accesorios generales.");
}

console.log("Condicional If anidado");
let stockLentes = 8;
let cajaCompleta = true;
if (stockLentes > 0) {
    if (cajaCompleta) {
        console.log("Lente 50mm listo para entrega en ClickLab.");
    } else {
        console.log("Lente disponible sin caja original.");
    }
}

console.log("Condicional If con operador lógico");
let stockTripodes = 5;
let tiendaAbierta = true;
if (stockTripodes > 0 && tiendaAbierta) {
    console.log("Venta inmediata disponible en ClickLab.");
} else {
    console.log("No es posible completar la venta en este momento.");
}

console.log("Control de despacho de pedidos ClickLab");
let stockDisponible = 15;
let cargaBateria = 80;
let emilyDisponible = "si";
let memyDisponible = "no";
let equipoDanado = "no";

if (
    stockDisponible >= 1 &&
    cargaBateria >= 50 &&
    (emilyDisponible === "si" || memyDisponible === "si") &&
    !(equipoDanado === "si")
) {
    console.log("Pedido ClickLab Autorizado para entrega");
} else {
    if (stockDisponible < 1) {
        console.log("No hay stock disponible en bodega.");
    }
    if (cargaBateria < 50) {
        console.log("La batería de prueba necesita carga.");
    }
    if (equipoDanado === "si") {
        console.log("El equipo requiere revisión técnica antes de entregar.");
    }
    if (emilyDisponible === "no" && memyDisponible === "no") {
        console.log("No hay asesor disponible en ClickLab.");
    }
}

console.log("Evaluación mensual de ventas ClickLab");
let metaVentas = 40;
let ventasRealizadas = 36;
let presupuestoInicial = 1000;
let gastosOperativos = 650;
let devoluciones = "no";
let retrasoEnvio = "no";
let bono = 0;

let porcentajeMeta = (ventasRealizadas / metaVentas) * 100;
let saldoRestante = presupuestoInicial - gastosOperativos;

if (porcentajeMeta >= 90) {
    console.log("Meta de ClickLab cumplida con éxito");
} else if (porcentajeMeta >= 70 && porcentajeMeta < 90) {
    console.log("Meta cumplida parcialmente");
} else if (porcentajeMeta >= 50 && porcentajeMeta < 70) {
    console.log("Desempeño regular en ventas");
} else {
    console.log("Se requiere reforzar promoción en ClickLab");
}

if (porcentajeMeta >= 90 && saldoRestante >= 200) {
    bono = 250;
    console.log("Bonificación otorgada al equipo ClickLab.");
} else {
    console.log("No se otorga bonificación este mes.");
}

if (devoluciones === "no" && retrasoEnvio === "no") {
    console.log("Cierre de mes limpio sin incidencias.");
} else {
    console.log("Cierre de mes con observaciones por revisar.");
}

console.log("Resumen ClickLab:", {
    metaVentas,
    ventasRealizadas,
    porcentajeMeta: porcentajeMeta.toFixed(2) + "%",
    saldoRestante,
    bono
});
