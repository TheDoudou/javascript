function faireChoix() {
    var choice = prompt("Choisir une valeur (1 2 ou 3) :");
    document.getElementById("retour").innerHTML = (choice == 1) ? "1. Merci" : ((choice == 2) ? "2. Bonjour" : ((choice == 3) ? "3. Au revoir" : "Pardon, que voulez-vous ?"));
}