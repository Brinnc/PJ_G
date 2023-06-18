class Player extends GameObject {
    constructor(container, src, width, height, x, y, velX, velY) {
        super(container, src, width, height, x, y, velX, velY);

        this.h = -1; 
    }

    render() { 
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        if (this.x <= 0) {
            this.img.style.left = 0 + "px";
        } else if (this.x >= (500 - this.width)) {
            this.img.style.left = (500 - this.width) + "px";
        }

        this.hitTest_ramen(); 
        this.hitTest_timeItem();
    }

    hitTest_ramen() { 

        let n = ramenArray.length;

        for (let i = 0; i < n; i++) {
            let result = collisionCheck(this, ramenArray[i]);

            if (result) { 
                this.container.removeChild(ramenArray[i].img);
                let yourIndex = ramenArray.indexOf(ramenArray[i]);
                ramenArray.splice(yourIndex, 1);
                hpPlus();
                
                break;
            }
        }
    }

    hitTest_timeItem(){ 
        
        let n=t_itemArray.length;

        for(let i=0; i<n; i++){
            let result=collisionCheck(this, t_itemArray[i]);

            if(result){ 
            
                loadTimeEffect();

                for(let p=0; p<pokemonArray.length; p++){
                    pokemonArray[p].velY=getRandomByRange(1, 2); 
                }
                
                this.container.removeChild(t_itemArray[i].img);
                let yourIndex = t_itemArray.indexOf(t_itemArray[i]);
                t_itemArray.splice(yourIndex, 1);

                break;
            }
        }
    }
}