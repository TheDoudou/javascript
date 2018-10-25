// Exercice 1
function ex1_inOut(val, id) {
    if (val == 0) {
        id.style.border = "3px solid red";
        
    } else {
        id.style.border = "";
    }
}

// Exercice 2
function ex2(val) {
    if (val == 1)
        document.getElementById("ex2_texte").style.display = "block";
    else
        document.getElementById("ex2_texte").style.display = "none";
}

// Exercice 3
function ex3(color) {
        document.getElementById("ex3_texte").style.color = color;
}

// Exercice 4
function ex4() {
    if (document.getElementById("ex4_motdepasse").value == document.getElementById("ex4_confirmation").value) {
        document.getElementById("ex4_motdepasse").style.border = "3px solid green";
        document.getElementById("ex4_confirmation").style.border = "3px solid green";
    } else {
        document.getElementById("ex4_motdepasse").style.border = "3px solid red";
        document.getElementById("ex4_confirmation").style.border = "3px solid red";
    }
}