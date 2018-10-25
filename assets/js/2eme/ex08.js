function jourDeLaSemaine() {
    let day = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
    let date = new Date();
    let d = date.getDay()
    
    document.getElementById("retour").innerHTML = day[d];
}