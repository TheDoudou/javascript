var tab = [-2, 1, 4];

function additionne(x) {
    return x + 2;
}

function affiche() {
    document.getElementById("retour1").innerHTML = additionne(tab[0]);
    document.getElementById("retour2").innerHTML = additionne(tab[tab.length-1]);
}