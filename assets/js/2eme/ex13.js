function calculIMC() {
    let poids = document.getElementById("1").value;
    let taille = document.getElementById("2").value;
    let imc = poids/(taille*taille);
    imc = imc.toFixed(2)
    if (imc < 16.5)
        document.getElementById("retour").innerHTML = imc + " - Dénutrition ou famine";
    else if (imc < 18.5)
        document.getElementById("retour").innerHTML = imc + " - Maigre";
    else if (imc < 25)
        document.getElementById("retour").innerHTML = imc + " - Normal";
    else if (imc < 30)
        document.getElementById("retour").innerHTML = imc + " - Surpoids";
    else if (imc < 35)
        document.getElementById("retour").innerHTML = imc + " - Obésité modérée";
    else if (imc < 40)
        document.getElementById("retour").innerHTML = imc + " - Obésité sévère";
    else if (imc >= 40)
        document.getElementById("retour").innerHTML = imc + " - Obésité morbide";
}