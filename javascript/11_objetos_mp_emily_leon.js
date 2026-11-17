let camara = {
    marca: "Canon",
    modelo: "EOS R50",
    categoria: "Digital",
    resolucionMP: 24,
    enMantenimiento: false
};

console.log("Información de la cámara en ClickLab:");
console.log("Marca: " + camara.marca);
console.log("Modelo: " + camara["modelo"]);
console.log("Categoría: " + camara["categoria"]);
console.log("Resolución: " + camara.resolucionMP + "MP");
console.log("Estado: " + (camara.enMantenimiento ? "En mantenimiento" : "Disponible"));

console.log("Agregar nuevas propiedades al equipo ClickLab");
camara.lenteIncluido = "18-45mm";
console.log("Lente incluido: " + camara.lenteIncluido);

camara["stockDisponible"] = 6;
console.log("Stock disponible: " + camara["stockDisponible"]);
console.log("Objeto cámara:", camara);

console.log("Actualizar propiedades del equipo");
camara.stockDisponible = 4;
console.log("Nuevo stock: " + camara.stockDisponible);
camara["enMantenimiento"] = true;
console.log("Nuevo estado: " + (camara.enMantenimiento ? "En mantenimiento" : "Disponible"));

console.log("Eliminar una propiedad del objeto");
delete camara.stockDisponible;
console.log("Propiedad 'stockDisponible' eliminada.");
console.log("Cámara ClickLab:", camara);

console.log("Inventario de accesorios ClickLab");
let inventario = {
    camaras: 10,
    lentes: 15,
    tripodes: 20,
    baterias: 25
};

let totalUnidades = 0;
for (let producto in inventario) {
    totalUnidades += inventario[producto];
}
console.log("Total de unidades en ClickLab: " + totalUnidades);
