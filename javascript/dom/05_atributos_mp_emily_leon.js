const producto = document.getElementById("producto");
const cambiar = document.getElementById("cambiar");
const verCategoria = document.getElementById("verCategoria");
const categoria = document.getElementById("categoria");

cambiar.addEventListener("click", function () {
    producto.setAttribute("src", "https://i.pinimg.com/originals/be/30/d3/be30d35790c948ba36a5138a1a6c48f2.jpg");
    producto.setAttribute("title", "Cámara Retro ClickLab");
    producto.dataset.categoria = "Retro / Analógica";
});

verCategoria.addEventListener("click", function () {
    categoria.textContent = "Categoría: " + producto.dataset.categoria;
});
