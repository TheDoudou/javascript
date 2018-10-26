let liste = ['Abradolf_Lincler_Angry.png', 'Arthricia_end_HQ.png', 'Beth_Smith.png', 'BirdpersonTransparent.png', 'Doofus_Rick.png', 'Fart.jpg', 'Gearheadtransparent.png', 
'Jerry_Smith.png', 'Jessica.png', 'Little_Dipper.jpg', 'MeeseeksHQ.png', 'Morty_Smith.png', 'Mr_poopy_butthole.png',
'MrGoldenfold.png', 'Principal_Vagina.png', 'Rick_Sanchez.png', 'Squanchy.png', 'Summer_Smith.png']
let cc = 300
let timer1, timer2
let findCount = 0
let c1 = ''
let c2 = ''
let n1 = ''
let n2 = ''
let ca1, ca2, e1, e2 
let board = document.getElementById('board')
let state = true

let shuffle = (array) => {
    let arr = [...array]
    for (let i = arr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[rand]]=[arr[rand], arr[i]]
    }
    return arr;
}

let start = () => {
    console.log(document.getElementById('start').value)
    if (document.getElementById('start').value == 'Start') {
        drawCard()
        document.getElementById('start').value = 'Stop'
        timer1 = setInterval('counter()', 1000)
    } else if (document.getElementById('start').value == 'Stop') {
        stop()
    }
}

let stop = () => {
    clearTimeout(timer1)

    cc = 300
    c1 = 0
    c2 = 0
    document.getElementById('score').innerText = findCount
    findCount = 0
    document.getElementById('start').value = 'Start'
    document.getElementById('board').innerHTML = ''
}

let counter = () => {
    minutes = Math.floor(cc / 60);
    secondes = Math.floor(cc - (minutes * 60));
    if (cc == 0) {
        stop()
    }
    if (secondes < 10)
        secondes = '0'+secondes
    if (minutes < 10 && minutes > 0)
        minutes = '0'+minutes
    else if (minutes == 0)
        minutes = '00'
    if (findCount == 17) {
        stop()
        document.getElementById('score').innerText = 'Victoire'
    }
    document.getElementById('timer').innerHTML = minutes+':'+secondes
    cc--
}

let drawCard = () => {
    let id = 0
    let list = shuffle(liste).concat(shuffle(liste))
    for(let i = 0; i < 4; i++) {
        let row = document.createElement('div')

        row.className = "row "+i
        board.appendChild(row)

        for(let j = 0; j < 9; j++) {
            
            let col = document.createElement('div')
            col.className = 'col-auto scene scene--card'
            let col_card = document.createElement('div')
            col_card.className  = 'card'+id
            col_card.setAttribute("id", "card"+id)

            let col_card_f = document.createElement('div')
            col_card_f.className = 'card__face card__face--front card'+id
            col_card_f.setAttribute("id", id)

            let col_card_b = document.createElement('div')
            col_card_b.className = 'card__face card__face--back card'+id
            col_card_b.setAttribute("id", id)

            let url = document.createElement('img')
            url.setAttribute("id", "img"+id)
            url.src = 'assets/img/'+list[id]
            url.alt = list[id]

            col_card.appendChild(col_card_f)
            col_card.appendChild(col_card_b)
            col_card_b.appendChild(url)
            col.appendChild(col_card)
            row.appendChild(col)
            
            
            id++
        }
    }
}

function check() {
    clearTimeout(timer2)
    console.log(n1+' '+n2)
    if (n1 != '' && n2 != '') {
        if(n1.alt != n2.alt) {
            document.getElementById('img')
            ca1.classList.toggle('is-flipped')
            ca2.classList.toggle('is-flipped')
            e1 = ''
            e2 = ''
            c1 = ''
            c2 = ''
            ca1 = ''
            ca2 = ''
            n1 = ''
            n2 = ''
            state = true
        } else if (n1.alt == n2.alt) {
            findCount++
            document.getElementById('score').innerText = findCount
            e1.className = ''
            e2.className = ''
            e1 = ''
            e2 = ''
            c1 = ''
            c2 = ''
            ca1 = ''
            ca2 = ''
            n1 = ''
            n2 = ''
            state = true
        }
    }
}

board.addEventListener('click', function (event) {
    let e = event.target
    if (e.className.includes('card__face') && state) {
        if (n1 == '') {
            e1 = e
            c1 = e.id
            ca1 = document.getElementById('card'+c1)
            ca1.classList.toggle('is-flipped')
            n1 = document.getElementById('img'+e1.id)
        } else if (n2 == '' && n1 != n2) {
            e2 = e
            c2 = e.id
            ca2 = document.getElementById('card'+c2)
            ca2.classList.toggle('is-flipped')
            n2 = document.getElementById('img'+e2.id)
            state = false
            timer2 = setTimeout(check, 1000)
        }

        
            /*
			let a = document.getElementById('card'+id)
			card[id] = a
            card[id].addEventListener('click', function _listener() {
                a.classList.toggle('is-flipped')
                if (c1 == '') {
                    c1 = name
                    ca1 = a
                   
                } else {
                    c2 = name
                    ca2 = a
                }
                
                if (c1 != '' && c2 != '') {
                    
                    if(c1 != c2) {
                        ca1.classList.toggle('is-flipped')
                        ca2.classList.toggle('is-flipped')
                        ca1.removeEventListener("click", _listener, true)
                        ca2.removeEventListener("click", _listener, true)
                        c1 = ''
                        c2 = ''
                        ca1 = ''
                        ca2 = ''
                    } else if (c1 == c2) {
                        findCount++
                        document.getElementById('score').innerText = findCount
                        ca1.removeEventListener("click", _listener, true)
                        ca2.removeEventListener("click", _listener, true)
                        c1 = ''
                        c2 = ''
                        ca1 = ''
                        ca2 = ''
                    }
                }
                
            }, true)*/
    }
})