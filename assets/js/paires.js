let liste = ['Abradolf_Lincler_Angry.png', 'Arthricia_end_HQ.png', 'Beth_Smith.png', 'BirdpersonTransparent.png', 'Doofus_Rick.png', 'Fart.jpg', 'Gearheadtransparent.png', 
'Jerry_Smith.png', 'Jessica.png', 'Little_Dipper.jpg', 'MeeseeksHQ.png', 'Morty_Smith.png', 'Mr_poopy_butthole.png',
'MrGoldenfold.png', 'Principal_Vagina.png', 'Rick_Sanchez.png', 'Squanchy.png', 'Summer_Smith.png']
var cc = 300
var timer1, timer2
var findCount = 0
var c1 = ''
var c2 = ''
var ca1, ca2

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
    let board = document.getElementById('board')
    let card = []
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
            col_card_f.className = 'card__face card__face--front'

            let col_card_b = document.createElement('div')
            col_card_b.className = 'card__face card__face--back'

            let url = document.createElement('img')
            url.src = 'assets/img/'+list[id]
            url.alt = list[id]

            col_card.appendChild(col_card_f)
            col_card.appendChild(col_card_b)
            col_card_b.appendChild(url)
            col.appendChild(col_card)
            row.appendChild(col)
            /*let a = document.getElementById('card'+id)
            let name = url.alt
            card[id] = a
            card[id].addEventListener('click', function() {
                a.classList.toggle('is-flipped')
                if (c1 == '') {
                    c1 = name
                    ca1 = a
                   
                } else {
                    c2 = name
                    ca2 = a
                }
                
                if (c1 != '' && c2 != '') {
                    timer2 = setInterval('test()', 1500)
                }
                
            })*/
            
            id++
        }
    }
}

let test = () => {
    console.log(c1+' '+c2+' '+ca1+' '+ca2)
    clearTimeout(timer2)
    if(c1 != c2) {
        ca1.classList.toggle('is-flipped')
        ca2.classList.toggle('is-flipped')
        c1 = ''
        c2 = ''
        ca1 = ''
        ca2 = ''
    } else if (c1 == c2) {
        findCount++
        document.getElementById('score').innerText = findCount
        ca1.removeEventListener("click", function(){})
        ca2.removeEventListener("click", function(){})
        c1 = ''
        c2 = ''
        ca1 = ''
        ca2 = ''
    }
}

/*
(function(){
	
	var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.paused = false;
     	this.guess = null;
			this.binding();
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/codepen-logo.png"\
				alt="Codepen" /></div></div>\
				</div>';
			});
			return frag;
		}
	};
    
	Memory.init(cards);


})();


var cards = [
    {
        name: "Abradolf_Lincler_Angry.png",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/Abradolf_Lincler_Angry.png",
        id: 1,
    },
    {
        name: "Arthricia_end_HQ.png",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/Arthricia_end_HQ.png",
        id: 2
    },
    {
        name: "Beth_Smith.png",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/Beth_Smith.png",
        id: 3
    },
    {
        name: "BirdpersonTransparent.png",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/BirdpersonTransparent.png",
        id: 4
    }, 
    {
        name: "Doofus_Rick.png",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/Doofus_Rick.png",
        id: 5
    },
    {
        name: "Fart.jpg",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/Fart.jpg",
        id: 6
    },
    {
        name: "Gearheadtransparent.png",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/Gearheadtransparent.png",
        id: 7
    },
    {
        name: "Jerry_Smith.png",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/Jerry_Smith.png",
        id: 8
    },
    {
        name: "Jessica.png",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/Jessica.png",
        id: 9
    },
    {
        name: "Little_Dipper.jpg",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/Little_Dipper.jpg",
        id: 10
    },
    {
        name: "MeeseeksHQ.png",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/MeeseeksHQ.png",
        id: 11
    },
    {
        name: "Morty_Smith.png",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/Morty_Smith.png",
        id: 12
    },
    {
        name: "Mr_poopy_butthole.png",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/Mr_poopy_butthole.png",
        id: 13
    },
    {
        name: "MrGoldenfold.png",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/MrGoldenfold.png",
        id: 14
    },
    {
        name: "Principal_Vagina.png",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/Principal_Vagina.png",
        id: 15
    },
    {
        name: "Rick_Sanchez.png",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/Rick_Sanchez.png",
        id: 16
    },
    {
        name: "Squanchy.png",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/Squanchy.png",
        id: 17
    },
    {
        name: "Summer_Smith.png",
        img: "http://thedoudou.myds.me/be_code/javascript/assets/img/Summer_Smith.png",
        id: 18
    },
];*/