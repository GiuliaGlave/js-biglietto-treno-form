const obtain = document.getElementById('btn-obtain');
obtain.addEventListener(

    "click",
    function () {

        /* DICHIARAZIONE VARIABILI */
        const userName = document.getElementById("name").value;
        const km = parseInt(document.getElementById('km').value);
        const age = parseInt(document.getElementById('age').value);

        const standardPrice = km * 0.21;
        let price;

        if (!isNaN(km)) {

            if (age == "Minorenne") {

                price = (standardPrice - (standardPrice * .2));

            } else if (age == "Over 65") {

                price = (standardPrice - (standardPrice * .4));

            } else {

                price = standardPrice;

            }
        }

        else {
            alert('inserire un valore numerico per i km')
        }

        /* DECIMALI */
        price = price.toFixed(2);
        console.log(price);

        /* TOTALE */
        document.getElementById('total').innerHTML = `TOTALE BIGLIETTO: ${price} €`;
    }
)

