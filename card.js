import { hand, PACK_PROPS, TABLE_PROPS } from "./app.js"

export default class Card {
    constructor(PACK_PROPS){
        // put in css and just assign class
        this.card = document.createElement("div") 
        this.card.style.transition = "left 0.5s ease-in-out, top 0.5s ease-in-out, transform 0.5s ease-in-out"
        this.card.style.height = PACK_PROPS.height + "vmin"
        this.card.style.width = PACK_PROPS.width + "vh"
        this.card.style.border = "3px solid orange"
        this.card.style.position = "absolute"
        this.card.style.left = PACK_PROPS.left + "vmin"
        this.card.style.top = PACK_PROPS.top + "vmin" 
    }

    calculateLeft(i){
        let left = (TABLE_PROPS.width/2)-(PACK_PROPS.width/2)
        let skew = 0 + (i+(hand.length%2/2)-hand.length/2)*PACK_PROPS.width/2    
        hand.length%2
        ? {} 
        : skew += PACK_PROPS.width/2
        return (left+skew)+"vmin"
    }

    calculateRotation(i){
        let rotation
        if (hand.length%2 == 1){
            rotation = 0 + (i-Math.floor(hand.length / 2))*15
        } else if (i<hand.length/2){
            rotation = (i-hand.length/2)*15
        } else {
            rotation = 15+(i-hand.length/2)*15
        }
        return "rotate("+rotation+"deg)"
    }

    add(){                    
        container.append(this.card)                          
    }

    move(currentCard, i){    
        this.card.style.left = this.calculateLeft(i)
        this.card.style.top = "60vmin"
        this.card.style.transform = this.calculateRotation(i)
    }

}