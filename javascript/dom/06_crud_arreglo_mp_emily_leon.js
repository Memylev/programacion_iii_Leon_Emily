let equipos = [
    {
        id: 1,
        nombre: "Canon EOS R50",
        categoria: "Digital",
        estado: "Disponible"
    },
    {
        id: 2,
        nombre: "Pentax K1000",
        categoria: "Retro",
        estado: "Disponible"
    },
    {
        id: 3,
        nombre: "Lente 50mm f/1.8",
        categoria: "Accesorios",
        estado: "Mantenimiento"
    }
];

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const categoria = document.getElementById("categoria");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");

const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

let idEditando = null;
let siguienteId = 4;

function mostrarEquipos() {
    contenedor.replaceChildren();
    cantidad.textContent = "Cantidad: " + equipos.length;

    equipos.forEach(function (equipo) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const titulo = document.createElement("h3");
        titulo.textContent = equipo.nombre;

        const parrafoCategoria = document.createElement("p");
        parrafoCategoria.textContent = "Categoría: " + equipo.categoria;

        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent = "Estado: " + equipo.estado;

        const acciones = document.createElement("div");
        acciones.classList.add("acciones");

        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.classList.add("editar");
        botonEditar.addEventListener("click", function () {
            editarEquipo(equipo.id);
        });

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");
        botonEliminar.addEventListener("click", function () {
            eliminarEquipo(equipo.id);
        });

        acciones.append(botonEditar, botonEliminar);
        tarjeta.append(titulo, parrafoCategoria, parrafoEstado, acciones);
        contenedor.appendChild(tarjeta);
    });
}

function eliminarEquipo(id) {
    const equipo = equipos.find(function (item) {
        return item.id === id;
    });
    const confirmar = confirm("¿Eliminar a " + equipo.nombre + " del inventario ClickLab?");
    if (!confirmar) {
        return;
    }
    equipos = equipos.filter(function (item) {
        return item.id !== id;
    });
    mostrarEquipos();
}

function editarEquipo(id) {
    const equipo = equipos.find(function (item) {
        return item.id === id;
    });
    nombre.value = equipo.nombre;
    categoria.value = equipo.categoria;
    estado.value = equipo.estado;
    idEditando = id;
    guardar.textContent = "Editar";
    cancelar.hidden = false;
    nombre.focus();
}

function limpiarFormulario() {
    formulario.reset();
    idEditando = null;
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
}

mostrarEquipos();

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombreEquipo = nombre.value.trim();
    const categoriaEquipo = categoria.value;
    const estadoEquipo = estado.value;

    if (nombreEquipo === "") {
        return;
    }

    if (idEditando === null) {
        const nuevoEquipo = {
            id: siguienteId,
            nombre: nombreEquipo,
            categoria: categoriaEquipo,
            estado: estadoEquipo
        };
        siguienteId++;
        equipos.push(nuevoEquipo);
    } else {
        const equipo = equipos.find(function (item) {
            return item.id === idEditando;
        });
        equipo.nombre = nombreEquipo;
        equipo.categoria = categoriaEquipo;
        equipo.estado = estadoEquipo;
    }

    mostrarEquipos();
    limpiarFormulario();
});

cancelar.addEventListener("click", function () {
    limpiarFormulario();
});
