// El usuario ingresa el numero para la tabla de multiplicar
let numero = "3";

numero = parseInt(numero);

//Verificamos si el numero es valido
if (isNaN(numero)) {
    console.log("Ingresa un numero valido");
} else {
    //Muestra la tabla de multiplicar usando un bucle for
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i<=12; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}