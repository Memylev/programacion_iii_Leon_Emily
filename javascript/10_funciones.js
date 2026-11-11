console.log("Funciones")

function abrirPortal() {
    console.log("Portal abierto. ¡Vamos a otra dimensión!");
}

abrirPortal();
abrirPortal();
abrirPortal();
abrirPortal();
abrirPortal();

function pilotoNave(nombre) {
    console.log("El piloto " + nombre + " está a bordo de la nave.");
}

pilotoNave("Rick");
pilotoNave("Morty");

function pilotoNave(nombre) {
    console.log("El piloto " + nombre + " está a bordo de la nave.");
}

pilotoNave("Rick");
pilotoNave("Morty");

function recargarPistola(energiaActual, recarga) {
    let energiaTotal = energiaActual + recarga;

    if (energiaTotal > 100) {
        energiaTotal = 100;
    }

    console.log("Pistola de portales recargada. Nivel de energía: " + energiaTotal + "%");

    return energiaTotal;
}

let energiaPistola = 50;
energiaPistola = recargarPistola(energiaPistola, 30);
energiaPistola = recargarPistola(energiaPistola, 40);

console.log("Calcular descuentos interdimensionales");

function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * (descuento / 100));
    return precioFinal;
}

let precioOriginal = 100;
let porcentajeDescuento = 20;

let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);

console.log("Precio original: " + precioOriginal + ", Precio con descuento: " + precioConDescuento);

/*Rick tiene un arreglo con los cristales recolectados durante cincio misiones. 
Necesita una funcion que calcule el total.*/

function calcularTotalCristales(cristales) {
    let total = 0;
    for (let i = 0; i < cristales.length; i++) {
        total += cristales[i];
    }
    return total;
}

let cristalesRecolectados = [5, 10, 15, 20, 25];
let totalCristales = calcularTotalCristales(cristalesRecolectados);
console.log("Total de cristales recolectados: " + totalCristales);

/*UNA MISION SE CONSIDERA EXITOSA SI RECOLECTA MAS DE 50 CRISTALES
LA FUNCION DEBE DETERMINAR CUANTAS MISIONES FUERON EXITOSAS */

function contarmisionesexsitosas(cristales) {
    let exitosas = 0;
    for (let i = 0; i < cristales.length; i++) {
        if (cristales [i]> 50) {
        exitosas++;}
    }
    return exitosas;
}

let contarmisionesexsitosas = [55,65,67,70];
let  totalmisiones =  contarmisionesexsitosas(cristales);
console.log("total de misiones exitosas" + totalmisiones)

/* Otro metodo con let of. for  */
/*function calculomision (cristales){
    let misionesexitosas=0;
    for (let cristal of cristales){
        if (cristal > 50){
        console.log("MIsion exitosa")
        misionesexitosas++
    };
    }
    return misionesexitosas;

}
let cristales= [55,65,67,70];
let totalmisiones = calculomision(cristales);
console.log("total de misiones exitosas"+ totalmisiones)*/

/* */