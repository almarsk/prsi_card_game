import Card from "./card.js"
export const TABLE_PROPS = {width: 80}
export const PACK_PROPS = {top: 33.05, left: TABLE_PROPS.width*0.55, height: 13.9*0.6, width: 10*0.6}
export let hand = []
export let playedCards = []
const NUMBER_OR_PLAYERS = 2 //do not change for now!!! rotation() in card.js and more will break
export let player = 0
let cardsLeft = 32

//todo      refactor style to css and only attribut class
//todo      limit rotation - issue -> communication between calculateleft and calculate rotation?
//todo      opponent card drawing
//todo      playing cards (incl recalculating positions of cards)

for (let i=0; i<NUMBER_OR_PLAYERS; i++){
    hand.push([])
}


window.addEventListener("DOMContentLoaded", ()=>{
   
    const container = document.querySelector('#container')  
    container.style.width = TABLE_PROPS.width + "vw"     

    const pack = new Card(PACK_PROPS)
    pack.add()
    pack.card.textContent = "lízni si"
    //pack.card.style.backgroundColor = "red"

    pack.card.addEventListener("mousedown", handlePackage)
    pack.card.addEventListener("touchstart", handlePackage)

    function handlePackage(){
        player = (player+1)%NUMBER_OR_PLAYERS
        const card = new Card(PACK_PROPS)
        hand[player].push(card)        
        card.add()
        card.card.textContent = "zahraj mě"
        rearrange(player)
        cardsLeft--
        if(!cardsLeft){
            container.removeChild(pack.card)
        }

        card.card.addEventListener("mousedown", ()=>{
            card.play()
            playedCards.push(card)

            const index = hand[card.player].indexOf(card)
            hand[card.player].splice(index,1)
            rearrange(card.player)
        })
    }

    function rearrange(turn){
        requestAnimationFrame(()=>{
            hand[turn].forEach((currentCard, index)=>{
                currentCard.move(currentCard, index, turn)
            })
        }) 
    }

 







})