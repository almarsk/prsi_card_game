import Card from "./card.js"
export const PACK_PROPS = {top: 33.05, left: 47, height: 13.9, width: 10}
export const TABLE_PROPS = {width: 80}
export let hand = []

//todo      refactor style to css and only attribut class
//todo      limit rotation - issue -> communication between calculateleft and calculate rotation?
//todo      opponent card drawing
//todo      playing cards (incl recalculating positions of cards)

window.addEventListener("DOMContentLoaded", ()=>{
    const container = document.querySelector('#container')  
    container.style.width = TABLE_PROPS.width + "vmin"     

    const pack = new Card(PACK_PROPS)
    pack.add()
    
    pack.card.style.backgroundColor = "red"

    pack.card.addEventListener("mousedown", handlePackage)
    pack.card.addEventListener("touchstart", handlePackage)

    function handlePackage(){
        const card = new Card(PACK_PROPS)
        hand.push(card)        
        card.add()
        requestAnimationFrame(()=>{
            hand.forEach((currentCard, index)=>{
                currentCard.move(currentCard, index)
            })
        }) 
    }

 







})