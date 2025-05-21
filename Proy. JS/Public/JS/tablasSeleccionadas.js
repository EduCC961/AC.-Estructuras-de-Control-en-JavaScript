//Escribe el tipo de tabla pares o impares
let tipo = "impares";

// Verificar la seleccion
if (tipo === 'pares' || tipo === 'impares') {
    console.log(`Tablas de los numeros ${tipo}:`);
    // Determinamos el incio y el paso deacuerdo a lo seleccionado
    let incio = tipo == 'pares' ? 2:1;
    let paso = 2; // Salto de 2 en dos para obtener par o impar

    // Generamos las tablas
    for (let numero = incio; numero <= 10; numero += paso) {
        console.log(`\nTabla del ${numero}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }        
    }
} else {
    console.log("Opcion no valida. Escriba pares o impares");
}