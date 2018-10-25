/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length
}
var remplaceECar = function (texte) {
    return texte.replace(/e/i, ' ')
}
var concatString = function (texte1, texte2) {
    return texte1+texte2
}
var afficherCar5 = function (texte) {
    return texte.charAt(4)
}
var afficher9Car = function (texte) {
    return texte.substr(0, 9)
}
var majusculeString = function (texte) {
    return texte.toUpperCase()
}
var minusculeString = function (texte) {
    return texte.toLowerCase()
}
var SupprEspaceString = function (texte) {
    return texte.replace(/^\s+|\s+$/g, '')
}
var IsString = function (texte) {
    return (typeof texte == "string") ? true : false
}

var AfficherExtensionString = function (texte) {
    return (/[.]/.exec(texte)) ? /[^.]+$/.exec(texte)[0] : undefined;
}
var NombreEspaceString = function (texte) {
    return texte.split(" ").length - 1
}
var InverseString = function (texte) {
    return texte.split("").reverse().join("")
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y)
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre)
}
var valeurAbsolueArray = function (array) {
    let ret = new Array()
    for (let i = 0; i < array.length; i++)
        ret.push(Math.abs(array[i]))
    return ret
}
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI * (rayon * rayon))
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac)
}
var calculIMC = function (poids, taille) {
    return Math.round(poids/(taille*taille)*100)/100
}
