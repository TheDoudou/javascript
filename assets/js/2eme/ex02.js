var rayon;

function calcul_rayon() {
    rayon = prompt("Tapez un rayon : ");
    rayon = Math.PI * (rayon * rayon);
}

function resultat() {
    document.getElementById("retour").innerHTML = rayon;
}