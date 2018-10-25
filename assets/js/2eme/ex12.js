function calcul(val, type) {
    if (type == 1)
        return Math.round(((val*1.8)+32)*100)/100 // Ou var.toFixed(2);
    else if (type == 2)
        return Math.round((val+273.15)*100)/100
    else if (type == 3)
        return Math.round(((val-32)/1.8)*100)/100
    else if (type == 4)
        return Math.round((((val-32)/1.8)+273.15)*100)/100
    else if (type == 5)
        return Math.round((val-273.15)*100)/100
    else if (type == 6)
        return Math.round((((val-273.15)*1.8)+32)*100)/100
}

function calcul2(val, type) {
    val = parseFloat(val);
    type = parseFloat(type);
    if (type == 1) {
        console.log("test");
        document.getElementById("2").value = Math.round(((val*1.8)+32)*100)/100 // Ou var.toFixed(2);
        document.getElementById("3").value = Math.round((val+273.15)*100)/100
    } else if (type == 2) {
        document.getElementById("1").value = Math.round(((val-32)/1.8)*100)/100
        document.getElementById("3").value = Math.round((((val-32)/1.8)+273.15)*100)/100
    } else if (type == 3) {
        document.getElementById("1").value = Math.round((val-273.15)*100)/100
        document.getElementById("2").value = Math.round((((val-273.15)*1.8)+32)*100)/100
    }
}

function conversionTemperature() {
    var choix = 1;
    var valeur = 0;
    while(parseInt(choix) != 0) {
        choix = prompt("Indiquez votre choix :");

        if (parseInt(choix) == 1) {
            valeur = prompt("Indiquez la température en °C :")
            alert(parseInt(valeur)+"°C = "+calcul(parseInt(valeur), parseInt(choix))+"°F");
        } else if (parseInt(choix) == 2) {
            valeur = prompt("Indiquez la température en °C :")
            alert(parseInt(valeur)+"°C = "+calcul(parseInt(valeur), parseInt(choix))+"°K");
        } else if (parseInt(choix) == 3) {
            valeur = prompt("Indiquez la température en °F :")
            alert(parseInt(valeur)+"°F = "+calcul(parseInt(valeur), parseInt(choix))+"°C");
        } else if (parseInt(choix) == 4) {
            valeur = prompt("Indiquez la température en °F :")
            alert(parseInt(valeur)+"°F = "+calcul(parseInt(valeur), parseInt(choix))+"°K");
        } else if (parseInt(choix) == 5) {
            valeur = prompt("Indiquez la température en °K :")
            alert(parseInt(valeur)+"°K = "+calcul(parseInt(valeur), parseInt(choix))+"°C");
        } else if (parseInt(choix) == 6) {
            valeur = prompt("Indiquez la température en °K :")
            alert(parseInt(valeur)+"°K = "+calcul(parseInt(valeur), parseInt(choix))+"°F");
        } else if (parseInt(choix) == 0) {
            alert("Tu veux sortir ?");
            alert("Mais pourquoi ?");
            alert("Tu n'aime pas les alertes ?");
            alert("C'est triste ?");
            alert("Mais comment faire ?\n Pioupiou appel poulet.");
            alert("Une petite loop ?");
            for (i = 0; i < 4; i++)
                alert("Clic");
            for (i = 0; i < 10; i++)
                alert("CLIC");
            alert("CLIIIICCCCCC");
            alert("Trop de clic tue le clic non ?")
            alert("Encore un peu");
            alert("4");
            alert("3");
            alert("2");
            alert("1");
            alert("Ou pas :(");
            alert("Encore une boucle ?")
            for (i = 0; i < 10; i++)
                alert("Et de " + i);
            alert("ATTENTION");
            alert("Plus d'alerte apres cette série d'éxo promis");
            alert("A moins que ... y'a eu que 42 ;) alertes");

        }
    }
}

/*
0 - Fin du programme
1 - De Celsius vers Fahrenheit
2 - De Celsius vers Kelvin
3 - De Fahrenheit vers Celsius
4 - De Fahrenheit vers Kelvin
5 - De Kelvin vers Celsius
6 - De Kelvin vers Fahrenheit
*/