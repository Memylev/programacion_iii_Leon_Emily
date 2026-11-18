const energia = document.getElementById("energia");
const dimension = document.getElementById("dimension");
const portal = document.getElementById("portal");

energia.textContent="Energia: 100";
dimension.textContent="Dimension: C-137";
portal.textContent="portal: activado";

// seleccion a traves del nombre de la clase

const personaje = document.querySelector(". personaje");
personaje.textContent="Rick C-137";

const h20bjeto = document.querySelector("h2");
personaje.textContent="Preparando Nave";

const personaje = document.querySelector("#universo");
personaje.textContent="Preparando Universo";

const estadoMorty = document
            .querySelector("#morty .estado");
estadoMorty.textContent="Preparando Para viajar";


const planetas = document
        .querySelectorAll(".planetas");
console.log(planetas)
console.log(planetas.length)


console.log(planetas[0].textContent);
console.log(planetas[1].textContent);
console.log(planetas[2].textContent);
console.log(planetas[3].textContent);
console.log(planetas[4].textContent);
console.log(planetas[5].textContent);


console.log("recorrer a traves de for");
for (let i = 0; i < planetas.length; i++) {
    console.log(planetas[i].textContent);
}

console.log("recorrer a traves de forEach");
planetas.forEach(function(planeta){
    console.log(planeta.textContent);
});

console.log("Con forEach");
planetas.forEach(function(planeta){
    console.log(planeta.textContent);
});

console.log("Con for of");
for (let planeta of planetas){
    console.log(planeta.textContent);
}