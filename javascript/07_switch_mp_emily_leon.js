let sucursal = 1;

switch (sucursal) {
    case 1:
        console.log("Sucursal ClickLab Quito Norte.");
        break;
    case 2:
        console.log("Sucursal ClickLab Centro Histórico.");
        break;
    case 3:
        console.log("Sucursal ClickLab Cumbayá.");
        break;
    default:
        console.log("Sucursal no registrada en ClickLab.");
}

let marca = "Canon";

switch (marca) {
    case "Canon":
    case "Nikon":
        console.log("Cámara réflex o mirrorless disponible en ClickLab.");
        break;
    case "Pentax":
        console.log("Cámara analógica retro disponible en ClickLab.");
        break;
    default:
        console.log("Marca bajo pedido especial.");
}

let bateriaCamara = 65;

switch (true) {
    case (bateriaCamara > 0 && bateriaCamara <= 25):
        console.log("Batería baja: conectar cargador Li-ion.");
        break;
    case (bateriaCamara > 25 && bateriaCamara <= 50):
        console.log("Batería media.");
        break;
    case (bateriaCamara > 50 && bateriaCamara <= 75):
        console.log("Batería buena para sesión fotográfica.");
        break;
    case (bateriaCamara > 75 && bateriaCamara <= 100):
        console.log("Batería completa.");
        break;
    default:
        console.log("Nivel de batería no válido.");
}

console.log("Calculadora de Pedidos ClickLab con Switch");
let precioUnitario = 120;
let cantidad = 3;
let operacion = "multiplicacion";
let resultado;

switch (operacion) {
    case "suma":
        resultado = precioUnitario + cantidad;
        console.log("Resultado de la suma:", resultado);
        break;
    case "resta":
        resultado = precioUnitario - cantidad;
        console.log("Resultado de la resta:", resultado);
        break;
    case "multiplicacion":
        resultado = precioUnitario * cantidad;
        console.log("Total del pedido ($):", resultado);
        break;
    case "division":
        if (cantidad !== 0) {
            resultado = precioUnitario / cantidad;
            console.log("Precio dividido:", resultado);
        } else {
            console.log("No se puede dividir entre cero.");
        }
        break;
    default:
        console.log("Operación no válida.");
        break;
}
