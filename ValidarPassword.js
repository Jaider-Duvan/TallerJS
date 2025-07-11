

const prompt = require("prompt-sync")();

let password = prompt("Ingrese su contraseña: ");

function validarContraseña(password) {
    if (password.length < 8) {
        return false;
    }

    let tieneNumero = false;
    let tieneMayuscula = false;

    for (let caracter of password) {
        if (!isNaN(caracter)) {
            tieneNumero = true;
        }

        if (caracter === caracter.toUpperCase() && caracter !== caracter.toLowerCase()) {
            tieneMayuscula = true;
        }
    }

    return tieneNumero && tieneMayuscula;
}

if (validarContraseña(password)) {
    console.log(" Contraseña válida.");
} else {
    console.log(" Contraseña inválida. Debe tener al menos 8 caracteres, un número y una mayúscula.");
}

