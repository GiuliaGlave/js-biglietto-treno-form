const obtain = document.getElementById('btn-obtain');

//DICHIARAZIONE VARIABILI INPUT
const userName = document.getElementById("name").value;
const userKmEl = document.getElementById('km');
const userAgeEl = document.getElementById('age');

//DICHIARAZIONE VARIABILI OUTPUT
const namePassenger = document.getElementById("name")
const ticketTypeEl = document.getElementById("ticket-type")
const trainCarriageEl = document.getElementById("train-carriage")
const codeCPEl = document.getElementById("cp-code")
const ticketFinalPrice = document.getElementById("total")

obtain.addEventListener(

    "click",
    function () {

        /* DICHIARAZIONE VARIABILI */
        const userKm = userKmEl.value
        const userAge = userAgeEl.value

        const pricePerKm = 0.21;
        const standardPrice = userKm * pricePerKm;

        if (userAge == "minorenne") {

            const discountMinor = 20 / 100;
            const discountTotalMinor = standardPrice * discountMinor;
            price = standardPrice - discountTotalMinor;

        } else if (userAge == "over-65") {
            const discountOver65 = 40 / 100;
            const discountTotalOver65 = standardPrice * discountOver65;
            price = standardPrice - discountTotalOver65;

        } else {

            price = standardPrice;

        }

        /* DECIMALI */
        price = price.toFixed(2);

        //CODICI E DATI BIGLIETTO
        let trainCarriage = Math.floor(Math.random() * 10) + 1;
        let codeCP = Math.floor(Math.random() * 100000) + 1;

        codeCPEl.innerHTML = codeCP;
        trainCarriageEl.innerHTML = trainCarriage;

        /* TOTALE */
        document.getElementById('total').innerHTML = `TOTALE BIGLIETTO: ${price} €`;
    }
)