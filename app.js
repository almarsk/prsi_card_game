import Card from "./card.js"
import Pack from "./pack.js"
export const PACK_PROPS = {top: "33.05vmin", left: "47vmin", height: "13.9vmin", width: "10vh"}
export let hand = 0

window.addEventListener("DOMContentLoaded", ()=>{

    const container = document.querySelector('#container')       
    const pack = new Pack(PACK_PROPS)
    pack.add()
    pack.pack.addEventListener("mousedown", e=>{
        const card = new Card(PACK_PROPS)
        hand++        
        card.addToHand()

        
           
        
        
    })

    
 




})