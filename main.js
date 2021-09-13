document.addEventListener("DOMContentLoaded", () => {

    const grid = document.querySelector(".grid")
    const Start = document.querySelector("#start")
    const hide = document.querySelector(".hide")
    const welcome = document.querySelector(".welcome")
    const finish = document.querySelector(".finish")
    let cardsChosen = []
    let cardsChosenId =[]
    let cardsWon =[]

    Start.addEventListener("click",function(e){
        hide.style.display = "block";
        welcome.remove();
    })


  

    let cardArray =[
        {
            name:'ahsoka', 
            img: "img/ahsokaTano.jpg",
            responsive:true
        },
        {
            name: 'beebo',
            img: "img/beebo.jpg",
            responsive:false
        },
        {
            name:'ahsoka' ,
            img: "img/ahsokaTano.jpg",
            responsive:true
        },
        {
            name: 'beebo',
            img: "img/beebo.jpg",
            responsive:false
        },
        {
            name:'goku' ,
            img: "img/goku.jpg",
            responsive:true
        },
        {
            name: 'groot',
            img: "img/groot.jpg",
            responsive:true
        },
        {
            name:'goku' ,
            img: "img/goku.jpg",
            responsive:true
        },
        {
            name: 'groot',
            img: "img/groot.jpg",
            responsive:true
        },
        {
            name:'panda' ,
            img: "img/panda.jpg",
            responsive:true
        },
        {
            name: 'pikachu',
            img: "img/pikachu.jpg",
            responsive:true
        },
        {
            name:'panda' ,
            img: "img/panda.jpg",
            responsive:true
        },
        {
            name: 'pikachu',
            img: "img/pikachu.jpg",
            responsive:true
        },
        {
            name:'thanos' ,
            img: "img/thanos.jpg",
            responsive:true
        },
        {
            name: 'thanos',
            img: "img/thanos.jpg",
            responsive:true
        },
        {
            name:'dobby' ,
            img: "img/dobby.jpg",
            responsive:true
        },
        {
            name: 'dobby',
            img: "img/dobby.jpg",
            responsive:true
        },
        {
            name:'ms-marvel' ,
            img: "img/ms-marvel.jpg",
            responsive:true
        },
        {
            name: 'ms-marvel',
            img: "img/ms-marvel.jpg",
            responsive:true
        }
        
    ]

    cardArray.sort(() => 0.5-Math.random())

    if(window.matchMedia("(max-width:670px)").matches){
        function smallscreen(cardArray){
            return cardArray.filter(function(object){
                    return object['responsive'] === true;
        });
    }
    cardArray2 = smallscreen(cardArray)
    }
    

//calling createBoard() once
createBoard();
    
//creating a board

function createBoard() {
    if(window.matchMedia("(max-width:670px)").matches){
        for(let i=0; i< cardArray2.length; i++){
            let card = document.createElement('img')
            card.setAttribute('src', 'img/Hydra-Logo.jpg')
            card.setAttribute('data-id', i)
            $(card).off('dblclick');
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }    
    }else if(window.matchMedia("(min-width:670px)").matches){
        for(let i=0; i< cardArray.length; i++){
            let card = document.createElement('img')
            card.setAttribute('src', 'img/Hydra-Logo.jpg')
            card.setAttribute('data-id', i)
            $(card).off('dblclick');
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
} 


//flip the card
function flipCard() {
    if(window.matchMedia("(max-width:670px)").matches){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray2[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray2[cardId].img)
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }else if(window.matchMedia("(min-width:670px)").matches){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
}

//check for a match
function checkForMatch() {
    if(window.matchMedia("(max-width:670px)").matches){
        let cards = document.querySelectorAll('img')

        if(cardsChosen[0] === cardsChosen[1] ) {
            cards[cardsChosenId[0]].setAttribute('display', 'none')
            cards[cardsChosenId[1]].setAttribute('display', 'none')
            cardsWon.push(cardsChosen)
        }else {
            cards[cardsChosenId[0]].setAttribute('src', 'img/Hydra-Logo.jpg')
            cards[cardsChosenId[1]].setAttribute('src', 'img/Hydra-Logo.jpg')

        }
        cardsChosen = []
        cardsChosenId = []
        if(cardsWon.length === cardArray2.length/2) {
            alert("congrats! To play again refresh the page!")
            grid.style.display = "none"
            finish.style.display = "block"
        }
    }else if(window.matchMedia("(min-width:670px)").matches){
        let cards = document.querySelectorAll('img')

        if(cardsChosen[0] === cardsChosen[1] ) {
            cards[cardsChosenId[0]].setAttribute('display', 'none')
            cards[cardsChosenId[1]].setAttribute('display', 'none')
            cardsWon.push(cardsChosen)
        }else {
            cards[cardsChosenId[0]].setAttribute('src', 'img/Hydra-Logo.jpg')
            cards[cardsChosenId[1]].setAttribute('src', 'img/Hydra-Logo.jpg')

        }
        cardsChosen = []
        cardsChosenId = []
        if(cardsWon.length === cardArray.length/2) {
            alert("congrats! To play pagin refresh the page!")
            grid.style.display = "none"
            finish.style.display = "block"

        }
    }
    

}
})