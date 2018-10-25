// Exercice 1
function ex1() {
    var ex1_var = "Super Pioupiou";

    alert(ex1_var);
}

// Exercice 2
function ex2() {
    var ex2_nom = "Super";
    var ex2_prenom = "Pioupiou";
    var ex2_ville = "Pioupiou Land";

    alert("Nom : " + ex2_nom+"\nPrénom : " + ex2_prenom + "\nVille : " + ex2_ville);
}

// Exercice 3
function ex3() {
    ex3_prenom = prompt("Quel est ton prénom ? :");
    alert("Salut, " + ex3_prenom);
}
// Exercice 4
function ex4() {
    alert("Nom : " + document.getElementById("ex4_nom").value  + "\nNom : " + document.getElementById("ex4_prenom").value  + "\nVille : " + document.getElementById("ex4_ville").value);
}

// Exercice 5
function ex5() {
    alert("La multiplication des deux valeurs (sans la ,) vaut :\n" + parseInt(document.getElementById("ex5_premier_nombre").value) * parseFloat(document.getElementById("ex5_deuxieme_nombre").value));
}

// Exercice 6
function ex6() {
    document.getElementById("ex6_retour").innerHTML = ex6_reste(document.getElementById("ex6_premier_nombre").value, document.getElementById("ex6_deuxieme_nombre").value);
}

function ex6_reste(var1, var2) {
    return var1 % var2;
}

// Exercice 7
function ex7() {
    var resultat = (((((document.getElementById("ex7_pointure").value * 2) + 5) *50) - document.getElementById("ex7_annee").value) + 1766);
    document.getElementById("ex7_retour").innerHTML = resultat;
}

// Exercice 8
function ex8() {
    document.getElementById("ex8_retour").innerHTML = (document.getElementById("ex8_age").value > 18) ? "Majeur" : "Mineur";
}