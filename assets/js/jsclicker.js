let score = 0
let clic_multiplicateur = 1
let tm = 50
let autoClic_loop
let boostLoop
let autoToggle = true
let boostToggle = true

let clic = function() {
    score = score + (1*clic_multiplicateur)
    loop_calc()
}

let multiplicateur = function() {
    if (score >= tm) {
        score = score - tm
        clic_multiplicateur = clic_multiplicateur + 1
        tm = tm + tm
    }
    loop_calc()
}

let autoClic = () => {
    if (autoToggle) {
        autoClic_loop = setInterval('autoClic()', 1000)
        score = score - 500
        autoToggle = false
    } else
        score = score + 1
    loop_calc()
}

let booster = () => {
    if (boostToggle) {
        clic_multiplicateur = clic_multiplicateur*2
        score = score - 5000
        boostLoop = setInterval('booster()', 30000)
        boostToggle = false
    } else {
        boostToggle = true
        clic_multiplicateur = clic_multiplicateur/2
        clearInterval(boostLoop)
    }
    loop_calc()
}

let loop_calc = () => {

    document.getElementById("affichage").innerHTML = 'Score : '+score
    document.getElementById("multi").value = 'Mutiplicateur X'+(clic_multiplicateur+1)+' ('+tm+'pts)'
    document.getElementById("autoclic").value = 'Auto Clic (500pts)'

    if (score >= tm)
        document.getElementById("multi").disabled = false
    else
        document.getElementById("multi").disabled = true
    
    if (score >= 500 && autoToggle)
        document.getElementById("autoclic").disabled = false
    else
        document.getElementById("autoclic").disabled = true

    if (score >= 5000 && boostToggle)
        document.getElementById("booster").disabled = false
    else
        document.getElementById("booster").disabled = true
}