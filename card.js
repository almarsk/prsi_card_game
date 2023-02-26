import { hand, PACK_PROPS, player, TABLE_PROPS } from "./app.js"

export default class Card {
    constructor(PACK_PROPS){
        // put in css and just assign class
        this.card = document.createElement("div") 
        this.card.classList.add("card")
        this.card.style.height = PACK_PROPS.height + "vmin"
        this.card.style.width = PACK_PROPS.width + "vmin"
        this.card.style.left = PACK_PROPS.left + "vW"
        this.card.style.top = PACK_PROPS.top + "vmin" 
        this.card.style.fontSize = "12px"
        this.player = player
    }

    calculateLeft(i){
        const currentHand = hand[player]
        let left = (TABLE_PROPS.width/2)-(PACK_PROPS.width/2)
        let skew = 0 + (i+(currentHand.length%2/2)-currentHand.length/2)*PACK_PROPS.width/1.5    
        currentHand.length%2
        ? {} 
        : skew += PACK_PROPS.width/4
        return (left+skew)+"vw"
    }

    calculateRotation(i){
        const currentHand = hand[player]
        let rotation
        const rotationRate = 15/(currentHand.length/3)
        if (currentHand.length%2 == 1){
            rotation = 0 + (i-Math.floor(currentHand.length / 2))* rotationRate
        } else if (i<currentHand.length/2){
            rotation = (i-currentHand.length/2)* rotationRate
        } else {
            rotation = rotationRate +(i-currentHand.length/2)* rotationRate
        }

        if (!player){
            rotation = -rotation + 180
        }
        return "rotate("+rotation+"deg)"
    }

    add(){                    
        container.append(this.card)                          
    }

    calculateTop(){
        if(player){
            return "60vmin"
        } else {
            return "10vmin"
        }
    }

    move(currentCard, i){    
        this.card.style.left = this.calculateLeft(i)
        this.card.style.top = this.calculateTop()
        this.card.style.transform = this.calculateRotation(i)
    }

    play(){
        this.card.style.left = TABLE_PROPS.width*0.45 + "vw"
        this.card.style.top = PACK_PROPS.top + "vmin"
        
    }

}