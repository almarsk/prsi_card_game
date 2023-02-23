import { hand } from "./app.js"

export default class Card {
    constructor(PACK_PROPS){
        this.card = document.createElement("div") 
        this.card.style.transition = "left 0.5s ease-in-out, top 0.5s ease-in-out"
        this.card.style.height = PACK_PROPS.height  
        this.card.style.width = PACK_PROPS.width
        this.card.style.border = "1px solid green"
        this.card.style.position = "absolute"
        this.card.style.left = PACK_PROPS.left
        this.card.style.top = PACK_PROPS.top    
    }

    calculatePosition(){

        //const left = (hand * this.card.style.width + 2) + "vmin"
        const left = (hand*parseInt(this.card.style.width)+2)+"vmin"
        return {top:"60vmin", left:left}
    }

    addToHand(){                    
        container.append(this.card) 
        //console.log("cards in hand from card class: " + hand)
        requestAnimationFrame(()=>{  
            const newCoordinates =  this.calculatePosition()
            this.card.style.left = newCoordinates.left
            this.card.style.top = newCoordinates.top}
            ,0)                   
    }





}