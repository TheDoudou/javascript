function calculMoyenne() {
    let value = "1.1";
    let i = count = 0;

    while (parseFloat(value) > 0) {
        value = prompt("Tapez un chiffre sans virgule sinon ... :");

        if (!(Number.isInteger(parseFloat(value))))
            alert("SANS VIRGULE BANANE");
        else if (Number.isInteger(parseFloat(value))) {
            count += parseInt(value);
            i++;
        }

        if (parseInt(value) < 0)
            count = count / i;
    }

    document.getElementById("retour1").innerHTML = i;
    document.getElementById("retour2").innerHTML = count;
}