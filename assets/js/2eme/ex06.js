var tab = [-2, 1, 4];

function soustrait(x) {
    return ((x - 2) >= 0) ? x - 2 : "Nombre négatif !";
}

function affiche() {
    document.getElementById("retour1").innerHTML = soustrait(tab[0]);
    document.getElementById("retour2").innerHTML = soustrait(tab[tab.length-1]);
}