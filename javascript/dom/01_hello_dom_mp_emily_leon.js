console.log(document);

const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "ClickLab - Cámaras y Accesorios";

const estado = document.getElementById("estado");
const botonTienda = document.getElementById("botonTienda");
botonTienda.addEventListener("click", function () {
    console.log("Ejecutando click en ClickLab");
    estado.textContent = "Vitrina Abierta";
    console.log("Texto cambiado en el elemento estado");
    alert("Tienda ClickLab abierta");
});

const mensaje = document.getElementById("mensaje");
const botonListo = document.getElementById("botonListo");
botonListo.addEventListener("click", function () {
    mensaje.textContent = "ClickLab listo para atender clientes";
});

let ventas = 0;
const contador = document.getElementById("contador");
const nuevaVenta = document.getElementById("nuevaVenta");
nuevaVenta.addEventListener("click", function () {
    ventas += 1;
    contador.textContent = ventas;
});
