let baterias = [30, 50, 70, 40];
let posicion = 2;
let nuevaCarga = 100;

for (let i = 0; i < baterias.length; i++) {
    console.log("Posición", i);
    console.log("Carga:", baterias[i]);
    if (posicion >= 0 && posicion < baterias.length) {
        baterias[posicion] = nuevaCarga;
    } else {
        console.log("Posición no válida");
    }
}
console.log("Baterías actualizadas:", baterias);

let equipos = [
    { id: 1, nombre: "Canon EOS R50", stock: 12, precio: 750 },
    { id: 2, nombre: "Pentax K1000", stock: 5, precio: 320 },
    { id: 3, nombre: "Lente 50mm f/1.8", stock: 8, precio: 180 }
];

for (let equipo of equipos) {
    console.log("ID:", equipo.id);
    console.log("Producto:", equipo.nombre);
    console.log("Stock:", equipo["stock"]);
    console.log("Precio: $" + equipo["precio"]);
}

console.log("ClickLab organiza sus ventas por asesor");
let ventasAsesores = [
    {
        asesor: "Emily",
        ventas: [300, 500, 600]
    },
    {
        asesor: "Memy",
        ventas: [200, 350, 400]
    },
    {
        asesor: "Soporte",
        ventas: [150, 250, 300]
    }
];

for (let registro of ventasAsesores) {
    let totalVendido = 0;
    console.log("Asesor:", registro.asesor);
    for (let monto of registro.ventas) {
        console.log("Venta registrada: $" + monto);
        totalVendido += monto;
    }
    console.log("Total vendido por", registro.asesor, "es: $" + totalVendido);
}

let preciosOriginales = [30, 50, 70, 40];
let preciosDobles = preciosOriginales.map((elemento) => {
    return elemento * 2;
});
console.log("Precios dobles:", preciosDobles);

let validos = preciosOriginales.filter((precio) => precio >= 50);
console.log("Precios >= 50:", validos);

let resultado = preciosOriginales.reduce((acumulador, elemento) => {
    return acumulador + elemento;
}, 0);
console.log("Suma total de precios:", resultado);
