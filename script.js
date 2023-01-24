const Km = parseInt(prompt('Inserisci distanza in Km'));
const age = parseInt(prompt('Inserisci età anagrafica'));
const StandardPrice = Km * 0.21;

let Price

/* ISTRUZIONI CONDIZIONALI */
if (age < 18) {

    Price = (StandardPrice - (StandardPrice * 20 / 100));

} else if (age > 65) {

    Price = (StandardPrice - (StandardPrice * 40 / 100));

} else {

    Price = StandardPrice;

}

/* DECIMALI */
Price = Price.toFixed(2);
console.log(Price);

/* TOTALE */
document.getElementById('total').innerHTML = `TOTALE BIGLIETTO: ${Price} €`;
