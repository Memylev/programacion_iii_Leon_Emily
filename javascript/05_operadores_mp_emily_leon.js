console.log("Operadores Aritméticos - ClickLab");
let precioCamara = 500;
let precioLente = 120;

console.log("Suma:", precioCamara + precioLente);
console.log("Resta:", precioCamara - precioLente);
console.log("Multiplicación:", precioCamara * 2);
console.log("División:", precioCamara / 2);
console.log("Módulo:", precioCamara % 30);

console.log("Operadores de Comparación");
console.log("precioCamara == precioLente:", precioCamara == precioLente);
console.log("precioCamara != precioLente:", precioCamara != precioLente);
console.log("precioCamara > precioLente:", precioCamara > precioLente);
console.log("precioCamara < precioLente:", precioCamara < precioLente);
console.log("precioCamara >= precioLente:", precioCamara >= precioLente);
console.log("precioCamara <= precioLente:", precioCamara <= precioLente);

console.log("Operadores Lógicos");
let tieneBateria = true;
let tieneEstuche = false;

console.log("tieneBateria AND tieneEstuche:", tieneBateria && tieneEstuche);
console.log("tieneBateria OR tieneEstuche:", tieneBateria || tieneEstuche);
console.log("NOT tieneBateria:", !tieneBateria);
console.log("NOT tieneEstuche:", !tieneEstuche);

console.log("Operadores de Asignación");
let stock = 10;
console.log("Stock inicial:", stock);

stock += 5;
console.log("Después de stock += 5:", stock);

stock -= 3;
console.log("Después de stock -= 3:", stock);

stock *= 2;
console.log("Después de stock *= 2:", stock);

stock /= 4;
console.log("Después de stock /= 4:", stock);

stock %= 3;
console.log("Después de stock %= 3:", stock);

console.log("Operadores de Incremento y Decremento");
let pedidos = 5;
console.log("Valor inicial de pedidos:", pedidos);
pedidos++;
console.log("Después de pedidos++:", pedidos);
pedidos--;
console.log("Después de pedidos--:", pedidos);

console.log("Operadores de Concatenación");
let nombre = "Emily";
let apellido = "Leon";
let nombreCompleto = nombre + " " + apellido;
console.log("Encargada de ClickLab:", nombreCompleto);

console.log("Operadores de Comparación Estricta");
let stockNumero = 10;
let stockTexto = "10";
console.log("stockNumero === stockTexto:", stockNumero === stockTexto);
console.log("stockNumero !== stockTexto:", stockNumero !== stockTexto);

console.log("Operadores Ternarios");
let unidades = 2;
let estadoStock = (unidades >= 5) ? "Stock disponible en ClickLab" : "Stock bajo en ClickLab";
console.log(estadoStock);

console.log("Tabla de precios de rollos 35mm ($12 c/u)");
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x $12 = $${12 * i}`);
}
