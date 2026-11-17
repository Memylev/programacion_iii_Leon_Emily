let productos = ["Canon R50", "Nikon Z30", "Pentax K1000", "Sony a6400", "Lente 50mm", "Trípode"];
console.log("Elemento 0:", productos[0]);
console.log("Elemento 2:", productos[2]);
console.log("Elemento 5:", productos[5]);
console.log("Elemento 4:", productos[4]);
console.log("Tamaño del arreglo:", productos.length);
console.log("Productos ClickLab:", productos);

console.log("Incluir elementos al arreglo con push y unshift");
productos.push("Batería Li-ion");
productos.unshift("Tarjeta SD 128GB");

console.log("Modificar elementos de un arreglo");
productos[0] = "Tarjeta SD 256GB";
console.log("Productos ClickLab:", productos);

console.log("Eliminar elementos del arreglo:");
productos.pop();
console.log("Después de pop:", productos);
productos.shift();
console.log("Después de shift:", productos);
productos.splice(1, 1);
console.log("Después de splice:", productos);
