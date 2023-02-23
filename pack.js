export default class Pack {
    constructor(PACK_PROPS){
        this.height = PACK_PROPS.height
        this.width = PACK_PROPS.width
        this.border = "1px solid red"
        this.left = PACK_PROPS.left
        this.top = PACK_PROPS.top  
        this.pack = document.createElement("div")
    }

    add(){           
        this.pack.style.height = this.height    
        this.pack.style.width = this.width
        this.pack.style.border = this.border
        this.pack.style.position = "absolute"
        this.pack.style.left = this.left
        this.pack.style.top = this.top  
        this.pack.style.transition = "transform 0.5s ease-in-out"         
        container.append(this.pack)
    }

}