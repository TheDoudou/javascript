function viewAll(d) {
    let that = d
    for(let key in that){
        console.log(typeof key)
        console.log(key)
        console.log(that[key])
    }
}

let item = function(name="None", physic=0, magic=0, minLevel=0, available=false) {
    this.name = name,
    this.physic = physic,
    this.magic = magic,
    this.minLevel = minLevel,
    this.available = available,
    this.view = function() {
        viewAll(this)
    }
}

let epee_de_noob = new item("Epee De Noob", 10, 0, 1, true)
let epee_moins_noob = new item("Epee Moins Noob", 20, 0, 5, true)
let epee_de_debutant = new item("Epee De Débutant", 30, 0, 10, true)
let epee_de_fou = new item("Epee De Fou", 60, 0, 20, true)
let epee_de_mj = new item("Epee De MJ", 100, 0, 1, false)

let pioche = new item("Pioche", 20, 0, 5, true)
let hache = new item("Hache", 30, 0, 10, true)
let couteau = new item("Couteau", 100, 0, 1, false)
let bite = new item("Bite", 60, 0, 20, true)

let chuck_noris = new item("Chuck Noris", 1000, 1000, 0, false)

let pnj = function(name='None', age='18', items_to_give=[]) {
    this.name = name,
    this.age = age,
    this.items_to_give = items_to_give,
    this.giveItem = function() {
        let random = Math.floor(Math.random()*(this.items_to_give.length-1))+1
        return this.items_to_give[random]
    }
    this.view = function() {
        viewAll(this)
    }
}

let jojo = new pnj('Jojo', 36, [epee_de_noob, pioche, hache, bite, couteau])

console.log("***** Infos PNJ *****")
console.log(jojo)

let shop_arme = [new item("Epee De Noob", 10, 0, 1, true), new item("Epee Moins Noob", 20, 0, 5, true), new item("Epee De Débutant", 30, 0, 10, true), new item("Epee De Fou", 60, 0, 20, true), new item("Epee De MJ", 100, 0, 1, false)]

let viewShopObject = function(list=[], available=true, lv=1, view=false) { // (Array, true/false/'all', Int/'all', false/true)
    let data = []
    for(let i = 0; i < list.length; i++) {
        if (available == 'all') {
            data.push(list[i])
        } else if (available == true) {
            if ((lv == 'all') && (list[i].available))
                data.push(list[i])
            else if ((lv >= list[i].minLevel) && (list[i].available)) 
                data.push(list[i])
        } else if (available == false) {
            if ((lv == 'all') && !(list[i].available))
                data.push(list[i])
            else if ((lv >= list[i].minLevel) && !(list[i].available)) 
                data.push(list[i])
        }
    }
    if(view) {
        for(let i = 0; i < data.length; i++) {
            console.log("***** Infos Objets "+i+" *****")
            console.log(data[i].view())
        }
    } else
        return data
}

viewShopObject(shop_arme, true, 'all', true)

let mainCharacter = function(name="None", level=1, life=10, weapon=new item("Epee De Noob", 10, 0, 1, true)) {
    this.name = name,
    this.level = level,
    this.life = life,
    this.weapon = weapon,
    this.attack = function() {
        return [this.weapon.physic*this.level, this.weapon.magic*this.level]
    }
    this.txtAttack = function() {
        return this.name+" attaque avec " + this.weapon.name + " dégats : " + this.attack()[0] + " physique, " + this.attack()[1] + " magique"
    }
}

let thedoudou = new mainCharacter("TheDoudou")
console.log("***** Infos Perso *****")
console.log(thedoudou.txtAttack())
console.log("***** Partie Bonus *****")

let character = function(name="None", level=1, life=1, weapon=epee_de_noob, classe="phy") { // Classe = phy ou mag
    this.name = name,
    this.level = level,
    this.life = life,
    this.weapon = weapon,
    this.classe = classe,
    this.attack = function() {
        return [this.weapon.physic*this.level, this.weapon.magic*this.level]
    }
    this.receiveDamage = function(arr) {
        if(this.classe == "phy") {
            if (arr[0] > arr[1]) {
                this.life = this.life - arr[0]
            } else {
                this.life = this.life - (arr[1]/2)
            }
        } else if (this.classe == "mag") {
            if (arr[0] < arr[1]) {
                this.life = this.life - arr[1]
            } else {
                this.life = this.life - (arr[0]/2)
            }
        }
        if (this.life <= 0) {
            console.log(this.name+" are dead")
        }
    }
}

let mainCharac = new character('TheDoudou', 10, 100, epee_de_noob, "phy")
let opponentCharac = new character('Un Noob', 10, 200, epee_de_noob, "phy")

console.log(mainCharac.name+' attaque '+opponentCharac.name)
console.log('Avec l\'arme '+mainCharac.weapon.name)
let dps = mainCharac.attack()
opponentCharac.receiveDamage(dps)
if(opponentCharac.classe == 'phy')
    console.log('Et lui inflige '+dps[0])
else if(opponentCharac.classe == 'mag')
    console.log('Et lui inflige '+dps[1])
console.log(opponentCharac.name+' n\'a plus que '+opponentCharac.life+' vies')
console.log('Deuxieme attaque')
opponentCharac.receiveDamage(dps)