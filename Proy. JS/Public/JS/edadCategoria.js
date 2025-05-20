// La edad al usuario
let edad = "12";

edad = parseInt(edad);

// Clasificamos la edad usando if
if (isNaN(edad) || edad < 0){
    console.log("Edad no valida");
} else if (edad >= 0 && edad <= 12){
    console.log("Eres un/a Niñ@");
} else if (edad >=13 && edad <=17){
    console.log("Eres un Adolecente");
} else if (edad >= 18 && edad <= 59){
    console.log("Eres un Adulto")
} else if (edad >= 60){
    console.log("Eres un Adulto Mayor")
}
