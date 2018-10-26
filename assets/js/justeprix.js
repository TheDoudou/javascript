const minimum = 20
const maximum = 80
let random

let randomNumber = function(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min
}

let trouve = function(input) {
    if (input < random)
        return 1
    else if (input > random)
        return 2
    else if (input == random)
        return 3
}

let startGame = function() {
    let state = true
    let count = 0
    random = randomNumber(minimum, maximum)
    while(state) {
        let input = parseInt(prompt("Tapez un chiffre de 20 à 80 :"))
        count++
        console.log(":"+count)
        if (trouve(input) == 1)
            alert("Valeur trop petite")
        else if (trouve(input) == 2)
            alert("Valeur trop grande")
        else if (trouve(input) == 3) {
            alert("Vous avez trouver le chiffre : "+random+"\nEn : "+count+" coups")
            state = false
        }
    }
}