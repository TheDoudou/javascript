function surfaceRectagle() {
    var largeur = prompt("Largeur :");
    var hauteur = prompt("Hauteur :");
    document.getElementById("retour1").innerHTML = largeur * hauteur;
}

function periRectangle() {
    var largeur = prompt("Largeur :");
    var hauteur = prompt("Hauteur :");
    document.getElementById("retour2").innerHTML = (parseInt(largeur) + parseInt(hauteur)) * 2;
}