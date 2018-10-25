function testWhile() {
    let value = "";
    while (value.indexOf("p")) {
        value = prompt("Tapez un texte (avec p) :")
    }
    document.getElementById("retour").innerHTML = "\""+value+"\"";
}