let bonjour = [
    'B',
    'O',
    'N',
    'J',
    'O',
    'U',
    'R'
]

var bonjour2 = [
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_'
]

var store = ['']

var guessLetter = function(m1) {
    let state = true
    while(state) {
        let input = prompt("Tapez une lettre :")
        while(input.length > 1)
            input = prompt("UNE LETTRE :")
        input = input.toUpperCase()
        for(let i = 0; i < store.length; i++) {
            while(store[i] == input) {
                input = prompt("Tapez une autre lettre :")
                input = input.toUpperCase()
            }
        }
        store.push(input)
        console.log(store)
        for(let i = 0; i < m1.length; i++) {
            if (input == m1[i]) {
                alert("Vous avez trouver la lettre : "+m1[i])
                bonjour2[i] = m1[i]
            }
            if (bonjour2.toString().replace(/\,/g, "") == "BONJOUR")
                state = false
        }
    }
    alert("Fin de la partie vous avez trouver le mot : "+bonjour2.toString().replace(/\,/gi, "") + "\nEn : "+(store.length-1))
}