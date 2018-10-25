function somme() {
    let value = [];
    let r = 0;

    for (var i = 0; i <= 2; i++) {
        value[i] = prompt("Taper le chiffre " + i + ":");
        r += parseFloat(value[i]);
    }
    
    document.getElementById("retour").innerHTML = r;
}