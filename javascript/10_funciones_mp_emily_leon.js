console.log("Funciones - ClickLab");

function abrirTienda() {
    console.log("Tienda ClickLab abierta. ¡Bienvenidos a nuestra tienda fotográfica!");
}

abrirTienda();
abrirTienda();

function atenderCliente(nombre) {
    console.log("La asesora " + nombre + " está atendiendo en ClickLab.");
}

atenderCliente("Emily");
atenderCliente("Memy");

function recargarBateria(cargaActual, recarga) {
    let cargaTotal = cargaActual + recarga;
    if (cargaTotal > 100) {
        cargaTotal = 100;
    }
    console.log("Batería Li-ion recargada. Nivel actual: " + cargaTotal + "%");
    return cargaTotal;
}

let cargaBateria = 50;
cargaBateria = recargarBateria(cargaBateria, 30);
cargaBateria = recargarBateria(cargaBateria, 40);

console.log("Calcular descuentos en ClickLab");

function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * (descuento / 100));
    return precioFinal;
}

let precioOriginal = 450;
let porcentajeDescuento = 15;
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("Precio original: $" + precioOriginal + ", Precio con descuento: $" + precioConDescuento);

function calcularTotalEquipos(cantidades) {
    let total = 0;
    for (let i = 0; i < cantidades.length; i++) {
        total += cantidades[i];
    }
    return total;
}

let equiposIngresados = [5, 10, 15, 20, 25];
let totalEquipos = calcularTotalEquipos(equiposIngresados);
console.log("Total de equipos ingresados en ClickLab: " + totalEquipos);

function contarDiasExitosos(ventas) {
    let exitosos = 0;
    for (let i = 0; i < ventas.length; i++) {
        if (ventas[i] > 50) {
            exitosos++;
        }
    }
    return exitosos;
}

let ventasSemanales = [55, 65, 42, 70];
let totalExitosos = contarDiasExitosos(ventasSemanales);
console.log("Total de días con ventas mayores a 50: " + totalExitosos);
