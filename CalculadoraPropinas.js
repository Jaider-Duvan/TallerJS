const prompt = require("prompt-sync")();
let total ,  porcentaje
total =parseFloat(prompt("Ingrese el total de la cuenta: "));
porcentaje = parseFloat(prompt("Ingrese el porcentaje a dar: "));

function CalcularPropina(total,porcentaje){
    let propina 
    propina = (total * porcentaje) /100
    let montoFinal
    montoFinal = total + propina
    return montoFinal
}

console.log("El valor total de la cuenta es: ",CalcularPropina(total , porcentaje))