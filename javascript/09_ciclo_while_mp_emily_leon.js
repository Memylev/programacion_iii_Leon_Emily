console.log("Revisando vitrinas de ClickLab...");
let vitrina = 1;
while (vitrina <= 5) {
    console.log("Vitrina " + vitrina + " organizada.");
    vitrina++;
}
console.log("Todas las vitrinas de ClickLab están listas.");

console.log("Cuenta regresiva para cierre de caja ClickLab");
let i = 5;
while (i >= 0) {
    console.log("Faltan " + i + " minutos para cierre");
    i--;
}

console.log("Recargando batería Li-ion de cámara en estudio");
let bateria = 50;
let recarga = 10;
let ciclosCarga = 0;
while (bateria < 100) {
    bateria += recarga;
    ciclosCarga++;
    console.log("Cargando... Nivel de batería: " + bateria + "%");
}
console.log("Batería cargada al 100% en " + ciclosCarga + " ciclos.");

console.log("Consumo de rollos fotográficos en sesión ClickLab");
let fotosDisponibles = 100;
let fotosPorToma = 35;
let sesiones = 0;
while (fotosDisponibles >= fotosPorToma) {
    fotosDisponibles -= fotosPorToma;
    sesiones++;
    console.log("Sesión " + sesiones + " completada. Fotos restantes: " + fotosDisponibles);
    if (fotosDisponibles < 40) {
        console.log("Advertencia: Quedan pocas exposiciones disponibles (" + fotosDisponibles + ").");
    }
}
console.log("Total de sesiones realizadas: " + sesiones);

console.log("Calibración de flash con do...while");
let energiaFlash = 50;
do {
    console.log("Disparo de prueba. Energía restante del flash: " + energiaFlash + "%");
    energiaFlash -= 15;
} while (energiaFlash > 0);
console.log("Flash descargado, recargar baterías.");

console.log("Ahorro para nueva cámara Sony en ClickLab");
let ahorro = 100;
let meta = 600;
let ahorroSemanal = 85;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorro actual $" + ahorro);
} while (ahorro < meta);
console.log("Meta alcanzada en " + semanas + " semanas para adquirir el nuevo equipo ClickLab.");
