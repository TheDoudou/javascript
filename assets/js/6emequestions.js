var CreationTableauLangages = function () {
    return ['Html', 'CSS', 'Java', 'PHP']
}

var CreationTableauNombres = function () {
    return [0, 1, 2, 3, 4, 5]
}

var RemplacementElement = function (langages) {
    langages[2] = "Javascript"
    return langages
}

var AjoutElementLangages = function (langages) {
    langages.push("Ruby", "Python")
    return langages
}

var AjoutElementNombres = function (nombres) {
    nombres.unshift(-2, -1)
    return nombres
}

var SuppressionPremierElement = function (langages) {
    langages.shift()
    return langages
}

var SuppressionDernierElement = function (langages) {
    langages.pop()
    return langages
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
    let reseaux_sociaux = reseaux_sociaux_chaine.split(",")
    return reseaux_sociaux
}

var ConversionTableauChaine = function (langages) {
    let langages_chaine = langages.join()
    return langages_chaine
}

var TriTableau = function (reseaux_sociaux) {
    return reseaux_sociaux.sort()
}

var InversionTableau = function (reseaux_sociaux){
    return reseaux_sociaux.reverse()
}
