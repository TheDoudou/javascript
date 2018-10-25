// Exercice 1
function ex1_inOut(val) {
    if (val == 0)
        document.getElementById("ex1_image1").src = "assets/img/image1_2.jpg";
    else
        document.getElementById("ex1_image1").src = "assets/img/image1.jpg";
}


// Exercice 2
function encoreUneAlerte() {
    alert("Merci de votre participation.");
    alert("J'avais promis plus d'alerte pourtant ?\nC'est ballo :D\Bonne journée ;).");
}

document.getElementById("ex2_nom").addEventListener("focusout", encoreUneAlerte);

// Exercice 3
function ex3() {
    alert(document.getElementById("ex3_nom").value);
}

// Exercice 4
function ex4() {
    document.getElementById("ex4_nom").value = "";
    document.getElementById("ex4_prenom").value = "";
    document.getElementById("ex4_ville").value = "";
}

// Exercice 5 & 6
function ex5_inOut(val, i, ex) {
    if (val == 0)
        document.getElementById("ex"+ex+"_image"+i).src = "assets/img/image"+i+"_2.jpg";
    else
        document.getElementById("ex"+ex+"_image"+i).src = "assets/img/image"+i+".jpg";
}

// Exercice 6

