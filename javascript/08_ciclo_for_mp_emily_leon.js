console.log("Ciclo for - ClickLab");
for (let i = 1; i <= 5; i++) {
    console.log("Revisión de cámara #" + i);
}

console.log("Cuenta regresiva para apertura de tienda ClickLab");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("¡ClickLab abierto al público!");
    } else {
        console.log("Faltan " + i + " minutos para abrir");
    }
}

console.log("Nivel de carga de batería en laboratorio ClickLab");
let cargaActual = 60;
for (let i = 0; i <= 100; i += 10) {
    if (cargaActual >= i) {
        console.log("Nivel de batería: " + i + "%");
    }
}

const fotosPorRollo = 36;
let totalFotos = 0;
for (let rollo = 1; rollo <= 5; rollo++) {
    totalFotos += fotosPorRollo;
    console.log("Rollo " + rollo + " - Fotos acumuladas: " + totalFotos);
}

console.log("Ventas semanales de accesorios ClickLab");
let totalAccesorios = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let vendidos = dia * 2 + 3;
    totalAccesorios += vendidos;
    console.log("Día " + dia + ": " + vendidos + " accesorios vendidos.");
}
console.log("Total vendidos:", totalAccesorios);
console.log("Promedio diario:", (totalAccesorios / dias).toFixed(2));

console.log("Control de sesiones fotográficas");
let ventasPorDia = [3, 8, 5, 10, 7, 12, 4];
let sumaVentas = 0;
let diasDestacados = 0;

for (let i = 0; i < ventasPorDia.length; i++) {
    sumaVentas += ventasPorDia[i];
    if (ventasPorDia[i] >= 7) {
        diasDestacados++;
    } else {
        console.log("Día " + (i + 1) + " tuvo pocas ventas (" + ventasPorDia[i] + ").");
    }
}
console.log("Total de ventas en la semana:", sumaVentas);
console.log("Días destacados:", diasDestacados);

console.log("Recorrer productos con for...of");
const productos = ["Canon EOS R50", "Pentax K1000", "Lente 50mm", "Trípode Pro", "Batería Li-ion"];
for (let producto of productos) {
    console.log("Producto ClickLab: " + producto);
}

let kitEstudio = {
    nombre: "Kit Creador ClickLab",
    precio: 850,
    garantiaMeses: 12,
    componentes: ["Cámara Canon", "Lente 50mm", "Trípode"]
};

console.log("Recorrer propiedades del kit con for...in");
for (let propiedad in kitEstudio) {
    console.log(propiedad + ": " + kitEstudio[propiedad]);
    if (propiedad === "componentes") {
        console.log("Componentes del kit:");
        for (let item of kitEstudio[propiedad]) {
            console.log("- " + item);
        }
    }
}

let pedidos = [
    { cliente: "Andrea", entregados: 9, meta: 10, asesor: "Emily" },
    { cliente: "Carlos", entregados: 8, meta: 10, asesor: "Memy" },
    { cliente: "Sofía", entregados: 10, meta: 10, asesor: "Emily" }
];

let pedidosOptimos = 0;
for (let pedido of pedidos) {
    let porcentaje = (pedido.entregados / pedido.meta) * 100;
    console.log("Pedido de " + pedido.cliente + " atendido por " + pedido.asesor + ": " + porcentaje.toFixed(2) + "%");
    if (porcentaje >= 90) {
        pedidosOptimos++;
    }
}
console.log("Pedidos óptimos:", pedidosOptimos);

console.log("Uso de break y continue en ClickLab");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se encontró el código 5, se detiene la búsqueda.");
        break;
    }
    console.log("Código revisado: " + i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Lote par omitido: " + i);
        continue;
    }
    console.log("Lote impar procesado: " + i);
}
