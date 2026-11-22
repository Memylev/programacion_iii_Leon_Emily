const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Bienvenidos a ClickLab: donde lo retro y lo nuevo se juntan";
saludo.innerHTML = "<h2>Catálogo ClickLab</h2>";

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
    <h2>Canon EOS R50</h2>
    <p>Categoría: Digital</p>
    <p>Resolución: 24MP</p>
    <p>Estado: Disponible</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");

registrar.addEventListener("click", function () {
    console.log("Cliente registrado en ClickLab:", nombre.value);
    saludar.textContent = "Hola " + nombre.value + ", bienvenida a ClickLab";
});
