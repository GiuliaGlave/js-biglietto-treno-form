const obtain = document.getElementById('btn-obtain');

//DICHIARAZIONE VARIABILI INPUT
let userNameEl = document.getElementById("name").value;
let userName = userNameEl;

const userKmEl = document.getElementById('km');
const userAgeEl = document.getElementById('age');

//DICHIARAZIONE VARIABILI OUTPUT
const namePassengerEl = document.getElementById("name-on-ticket").value;
let namePassenger = namePassengerEl;

const ticketTypeEl = document.getElementById("ticket-type");
let ticketType = ticketTypeEl;

const trainCarriageEl = document.getElementById("train-carriage");
const codeCPEl = document.getElementById("cp-code");
const ticketFinalPriceEl = document.getElementById("total");

obtain.addEventListener(

    "click",
    function () {

        /* DICHIARAZIONE VARIABILI */
        const userKm = userKmEl.value
        const userAge = userAgeEl.value

        const pricePerKm = 0.21;
        const standardPrice = userKm * pricePerKm;
        let finalPrice=standardPrice

        if (userAge == "minorenne") {

            const discountMinor = 20 / 100;
            const discountTotalMinor = standardPrice * discountMinor;
            finalPrice = standardPrice - discountTotalMinor;

        } else if (userAge == "over-65") {
            const discountOver65 = 40 / 100;
            const discountTotalOver65 = standardPrice * discountOver65;
            finalPrice = standardPrice - discountTotalOver65;

        } else {

            finalPrice = standardPrice;
            
        }

        /* DECIMALI */
        finalPrice = finalPrice.toFixed(2);

        //CODICI E DATI BIGLIETTO

        let codeCP = Math.floor(Math.random() * 100000) + 1;
        let trainCarriage = Math.floor(Math.random() * 10) + 1;
        

        codeCPEl.innerHTML = codeCP;
        trainCarriageEl.innerHTML = trainCarriage;

     
        /* TOTALE */
        ticketFinalPriceEl.innerHTML = `TOTALE BIGLIETTO: ${finalPrice} €`;
    }
)

