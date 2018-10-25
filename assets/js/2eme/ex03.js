var a = 3;
var b = a - 1;

function triple(x) {
    return x * 3;
}

function affiche() {
    document.getElementById("retour1").innerHTML = triple(a);
    document.getElementById("retour2").innerHTML = triple(b);
}