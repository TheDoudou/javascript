let keys = []
let canonDeltaX = 0
let munitionDeltaY = 600
let fire = [false, false, 0]; 
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let pseudo = ["43199263", "43204860", "43204214", "43204710", "43204187", "5494417", "43204449", "13210725", "43204501", "43120104", "43204245", "43202154", "43204748", "39455706", "43204039", "43205549", "43204614", "43206422", "43204342", "43183996", "43204337", "43204340", "43202113", "43199482", "43204029", "43204476", "43204670"]
let boss = ["26960886", "35733971"]
let src_img = ""
let stateCible = 0
let stateGame = 0
let timerId = 0
let tmpC, cibeDeltaX, disObj
let coups = 10
let point = 0
let tableauScore = []
let name = ""
let urlState = true

function objectLength(obj){

    let counter = 0
    let state = true
    while(state)
    {
        (obj[0].name) ? counter +=1 : state = false
    }
    return counter
}



ctx.fillStyle = "pink"

function keysPressed(e) {
    keys[e.keyCode] = true
    
    if (keys[37]) {
        if (canonDeltaX <= -325)
            canonDeltaX = -325
        else
            canonDeltaX -= 15
    }
    if (keys[39]) {
        if (canonDeltaX >= 325)
            canonDeltaX = 325
        else
            canonDeltaX += 15
    }
    if (keys[32] && fire[1] == false) {
        fire[0] = true 
        fire[1] = true 
        fire[2] = canonDeltaX
    }

    e.preventDefault()
}

function keysRelassed(e) {
    keys[e.keyCode] = false
    fire[0] = false
}

function draw() {
    if (coups > 0) {
        ctx.clearRect(0, 0, 800, 600)
        canon()
        if (fire[1] && coups > 0) {
            munition()
        }
        cible()
    } else if (coups == 0) {
        stateGame = 1
        stateG()
    }
}

function canon() {
    ctx.fillRect(325+canonDeltaX, 550, 150, 50)
    ctx.fillRect(390+canonDeltaX, 500, 24, 50)
    
}

function munition() {
    let munition = new Path2D()
    if (munitionDeltaY == 0) {
        coups--
        fire[1] = false
        munitionDeltaY = 600
        document.getElementById("lcout").innerText = coups
    }
    if ((402+fire[2] <= cibeDeltaX+85) && (402+fire[2] >= cibeDeltaX-20)) {
        if (munitionDeltaY == 5) {
            stateCible = 0
            cible()
            point = point + 10
            if (coups == 1)
                point = point + 10
            document.getElementById("lscore").innerText = point
            document.getElementById("lcout").innerText = coups
        }
    }
    munition.arc(402+fire[2], munitionDeltaY, 10, 0, 180, false)
    munitionDeltaY -= 5
    ctx.fill(munition);
}
let pos = 0
function cible() {
    let img = new Image()
    
    if ((stateCible == 0) && (coups >= 3)) {
        tmpC = Math.floor(Math.random() * pseudo.length )
        cibeDeltaX = Math.floor((Math.random() * 725 + 1) + 0)
        src_img = "assets/img/"+pseudo[tmpC]+".jpg"
    } else if ((stateCible == 0) && (coups == 2)) {
        tmpC = Math.floor(Math.random() * boss.length )
        cibeDeltaX = Math.floor((Math.random() * 725 + 1) + 0)
        src_img = "assets/img/"+boss[tmpC]+".jpg"
    }
    
    if (stateCible == 1) {
        console.log(cibeDeltaX)

        if(cibeDeltaX <= 0 && pos == 0) {
            cibeDeltaX += 1*(point/10)
            pos = 1
        }
        else if (cibeDeltaX >= 725 && pos == 1) {
            cibeDeltaX -= 1*(point/10)
            pos = 0
        } else if (pos == 0)
            cibeDeltaX -= 1*(point/10)
        else if (pos == 1)
            cibeDeltaX += 1*(point/10)
    }
    img.src = src_img
    ctx.drawImage(img, cibeDeltaX, 0,75,75)
    stateCible = 1
}

function menu() {
    ctx.clearRect(0, 0, 800, 600)
    ctx.font = "35pt Calibri,Geneva,Arial";
    ctx.fillText("Tableau de score", 100, 60)

    if (urlState) {
        urlState = false
        var xhr = new XMLHttpRequest()
        var xhr2 = new XMLHttpRequest()
        if(name != '' && point != 0) {
            let data = new FormData()
            data.append("name" , name)
            data.append("score", point)
            xhr2.open('POST', 'http://thedoudou.myds.me/be_code/javascript/assets/lib/thedoudou/pioupiou_file_gestion.php', true)
            xhr2.send(data)
        }


        xhr.open('GET', 'http://thedoudou.myds.me/be_code/javascript/assets/data/pioupiou_db.json', true)

        xhr.onload = function() 
        {
            if (xhr.status === 200) {
                tableauScore = JSON.parse(xhr.responseText)
                for (let i = 1; i-1 < tableauScore.length; i++) {
                    if (point >= tableauScore[i-1].score) {
                    }
                    ctx.fillText(i+". "+tableauScore[i-1].name+" Score : "+tableauScore[i-1].score, 100, 70+(i*75))
                }
                name = ''
                point = 0
            }
        }
        xhr.send()
    }
}

function stateG() {
    if (stateGame == 0) {
        document.getElementById("start_stop").value = "Stop game"
        stateGame = 1
        coups = 10
        point = 0
        name = ''
        urlState = true
        name = document.getElementById("nom").value
        document.getElementById("nom").value = ''
        document.getElementById("nom").disabled = true
        document.getElementById("canvas").focus()
        ctx.clearRect(0, 0, 800, 600)
        clearInterval(timerId)
        window.addEventListener("keydown", keysPressed, false)
        window.addEventListener("keyup", keysRelassed, false)
        timerId = setInterval(draw, 16)
    }
    else if (stateGame == 1) {
        document.getElementById("nom").disabled = false
        document.getElementById("start_stop").value = "Start game"
        stateGame = 0
        clearInterval(timerId)
        menu()
    }
}