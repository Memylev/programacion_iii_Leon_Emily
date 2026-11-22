const cantidadInput = document.getElementById("cantidad");
const precioInput = document.getElementById("precio");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", function () {
    if (cantidadInput.value.trim() === "" || precioInput.value.trim() === "") {
        resultado.textContent = "Completa ambos campos";
        return;
    }

    const cantidad = Number(cantidadInput.value);
    const precio = Number(precioInput.value);

    if (!Number.isFinite(cantidad) || !Number.isFinite(precio)) {
        resultado.textContent = "Ingrese valores válidos";
        return;
    }

    const total = cantidad * precio;
    resultado.textContent = "Total del pedido ClickLab: $" + total;
});
