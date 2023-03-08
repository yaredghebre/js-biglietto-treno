// REGOLE
// Prezzo biglietto in base a Costo per km €0.21
const pricePerKm = 0.21



// INPUT
// Chiedere all'utente numero di chilometri
const userDistance = parseInt(prompt ("Quanti chilometri devi percorrere?"));

// Chiedere età del passeggero
const userAge = parseInt(prompt ("Quanti anni hai?"));
console.log(userDistance, userAge);

if(isNaN(userDistance, userAge) === true) {
    console.log("Per favore, inserisci un valore numerico e ricarica la pagina. Grazie!");
} 
// da mettere nell'OUTPUT


// ELABORAZIONE
const fullPrice = (userDistance * pricePerKm);
console.log(fullPrice);

if(userAge < 18) {
    let = fullPrice - discJunior 
} else if( userAge >= 65) {
    let = fullPrice - discSenior
} else {
    let = fullPrice
}

// Sconto 20% <18 anni
const discJunior = (fullPrice / 100 * 20);
// Sconto 40% >65 anni
const discSenior = (fullPrice / 100 * 40);







// OUTPUT
// Prezzo finale con due decimali dopo la virgola