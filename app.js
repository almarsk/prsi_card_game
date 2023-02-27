import Card from "./card.js"
import { zindex } from "./card.js"
export const TABLE_PROPS = {width: 80}
export const PACK_PROPS = {top: 33.05, left: TABLE_PROPS.width*0.55, height: 13.9*0.6, width: 10*0.6}
export let hand = []
export let playingDeck = []
const NUMBER_OR_PLAYERS = 2 //do not change for now!!! rotation() in card.js and more will break
export let player = 0
let cardsLeft = 32

// create empty player hands
for (let i=0; i<NUMBER_OR_PLAYERS; i++){
    hand.push([])
}

//todo      refactor style to css and only attribut class
//todo      limit rotation - issue -> communication between calculateleft and calculate rotation?
//todo      opponent card drawing
//todo      playing cards (incl recalculating positions of cards)

window.addEventListener("DOMContentLoaded", ()=>{
   
    const container = document.querySelector('#container')  
    container.style.width = TABLE_PROPS.width + "vw"     
    const lid = document.querySelector('#lid')
    lid.style.width = TABLE_PROPS.width*0.5 + "vw"
    const pack = new Card(PACK_PROPS)
    pack.add()
    pack.card.textContent = "lízni si"

    for (let i=0; i<4*NUMBER_OR_PLAYERS;i++){handlePackage()}

    pack.card.addEventListener("mousedown", ()=>{
        pack.card.style.backgroundColor = "rgb(194, 174, 143)"
    })
    pack.card.addEventListener("mouseup", handlePackage)
    pack.card.addEventListener("touchstart", handlePackage)

    function handlePackage(){
        pack.card.style.backgroundColor = "rgb(255, 231, 194)"
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

        card.card.addEventListener("mouseup", ()=>handleClick(card))
    }



    function handleClick(playedCard){
        playedCard.play()
        playingDeck.push(playedCard)
        const index = hand[playedCard.player].indexOf(playedCard)
        hand[playedCard.player].splice(index,1)
        rearrange(playedCard.player)  
        lid.style.zindex += zindex + 1
        console.log(lid)
          
    }

    function rearrange(turn){
        requestAnimationFrame(()=>{
            hand[turn].forEach((currentCard, index)=>{
                currentCard.move(currentCard, index, turn)
            })
        }) 
    }

 







})