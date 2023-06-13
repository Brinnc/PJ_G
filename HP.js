class HP extends GameObject{
    constructor(container, src, width, height, x, y, velX, velY){
        super(container, src, width, height, x, y, velX, velY);

        this.hasHeart=true;

    }    

    setImage(flag){
        this.hasHeart=flag;
        
        if(flag){
            this.img.src="./images/heart.png";
        }else{
            this.img.src="./images/death.png";
        }
    }
}