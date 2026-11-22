const stock = document.getElementById("stock");
const linea = document.getElementById("linea");
const estado = document.getElementById("estado");

stock.textContent = "Stock: 25";
linea.textContent = "Línea: Retro y Digital";
estado.textContent = "Estado: Disponible";

const equipo = document.querySelector(".equipo");
equipo.textContent = "Canon EOS R50 (Destacada)";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Preparando vitrina ClickLab";

const estudio = document.querySelector("#estudio");
estudio.textContent = "Estudio ClickLab Activo";

const estadoKit = document.querySelector("#kit .estado");
estadoKit.textContent = "Listo para entrega";

const accesorios = document.querySelectorAll(".accesorios");
console.log(accesorios);
console.log(accesorios.length);

for (let i = 0; i < accesorios.length; i++) {
    console.log(accesorios[i].textContent);
}

console.log("Recorrer con forEach");
accesorios.forEach(function (accesorio) {
    console.log(accesorio.textContent);
});

console.log("Recorrer con for...of");
for (let accesorio of accesorios) {
    console.log(accesorio.textContent);
}
