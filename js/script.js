// REGOLE
// Prezzo biglietto in base a Costo per km €0.21
const pricePerKm = 0.21

// INPUT
// Chiedere all'utente numero di chilometri
const userDistance = parseInt(prompt ("Quanti chilometri devi percorrere?"));

// Chiedere età del passeggero
const userAge = parseInt(prompt ("Quanti anni hai?"));
console.log(userDistance, userAge);



// ELABORAZIONE
let price = (userDistance * pricePerKm);
console.log(price);
let message = 'Il totale da pagare è: €';

if(userAge < 18) {
    price = price - (price / 100 * 20);
    message = 'Il totale da pagare (con sconto Junior applicato) è: €'; 
} else if(userAge >= 65) {
    price = price - (price / 100 * 40);
    message = 'Il totale da pagare (con sconto Senior applicato) è: €'
}

console.log(message, price);

// OUTPUT
document.getElementById("result").innerHTML = message + price.toFixed(2);
if(isNaN(userDistance && userAge) === true) {
    console.log("Per favore, inserisci solo valori numerici e ricarica la pagina. Grazie!");
    document.getElementById("result").innerHTML = "Per favore, inserisci solo valori numerici e ricarica la pagina. Grazie!"
} 
