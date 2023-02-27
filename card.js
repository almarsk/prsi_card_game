import { hand, PACK_PROPS, player, TABLE_PROPS } from "./app.js"
let zindex = 1

export default class Card {
    constructor(PACK_PROPS){
        this.card = document.createElement("div") 
        this.card.classList.add("card")
        this.card.style.height = PACK_PROPS.height + "vmin"
        this.card.style.width = PACK_PROPS.width + "vmin"
        this.card.style.left = PACK_PROPS.left + "vw"
        this.card.style.top = PACK_PROPS.top + "vmin" 
        this.card.style.fontSize = "12px"
        this.player = player
    }

    calculateLeft(i, turn){
        const currentHand = hand[turn]
        let left = (TABLE_PROPS.width/2)-(PACK_PROPS.width/2)
        let skew = 0 + (i+(currentHand.length%2/2)-currentHand.length/2)*PACK_PROPS.width/1.5    
        currentHand.length%2
        ? {} 
        : skew += PACK_PROPS.width/4
        return (left+skew)+"vw"
    }

    calculateRotation(i, turn){
        const currentHand = hand[turn]
        let rotation
        const rotationRate = 15/(currentHand.length/3)
        if (currentHand.length%2 == 1){
            rotation = 0 + (i-Math.floor(currentHand.length / 2))* rotationRate
        } else if (i<currentHand.length/2){
            rotation = (i-currentHand.length/2)* rotationRate
        } else {
            rotation = rotationRate +(i-currentHand.length/2)* rotationRate
        }

        if (!turn){
            rotation = -rotation + 180
        }
        return "rotate("+rotation+"deg)"
    }

    add(){                    
        container.append(this.card)                          
    }

    calculateTop(turn){
        if(turn){
            return "60vmin"
        } else {
            return "10vmin"
        }
    }

    move(currentCard, i, turn){    
        this.card.style.left = this.calculateLeft(i, turn)
        this.card.style.top = this.calculateTop(turn)
        this.card.style.transform = this.calculateRotation(i, turn)
    }

    play(){
        this.card.style.left = TABLE_PROPS.width*0.45 + "vw"
        this.card.style.top = PACK_PROPS.top + "vmin"
        zindex++
        this.card.style.zIndex = zindex
        this.card.textContent = "smě zahrál"
    }

}