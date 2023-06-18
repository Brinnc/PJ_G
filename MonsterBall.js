class MonsterBall extends GameObject { 

    constructor(container, src, width, height, x, y, velX, velY) {
        super(container, src, width, height, x, y, velX, velY);

        this.r = 0; 
        this.img.style.transform = "rotate(" + this.r + "deg)";
    }

    render() {

        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.r = this.r + 30;
        this.img.style.transform = "rotate(" + this.r + "deg)";
        this.hitTest_pokemon();
        this.hitTest_boss();
        this.hitTest_digimon();

        if (this.y < 0) {
            this.container.removeChild(this.img);
            let myIndex = ballArray.indexOf(this);
            ballArray.splice(myIndex, 1);
        }
    }

    hitTest_pokemon() { 

        let n = pokemonArray.length;

        for (let i = 0; i < n; i++) {
            let result = collisionCheck(this, pokemonArray[i]);

            if (result) { 

                plusScore();

                this.container.removeChild(this.img);
                this.container.removeChild(pokemonArray[i].img);
                let myIndex = ballArray.indexOf(this);
                ballArray.splice(myIndex, 1);
                let yourIndex = pokemonArray.indexOf(pokemonArray[i]);
                pokemonArray.splice(yourIndex, 1);

                break;
            }
        }
    }

    hitTest_boss() { 

        let n = bossArray.length;

        for (let i = 0; i < n; i++) {
            let result = collisionCheck(this, boss);

            if (result) {
                boss.hp--;
                boss.velY++;

                if (boss.hp == 0) {
                    plusScore();

                    this.container.removeChild(this.img);
                    this.container.removeChild(bossArray[i].img);
                    let myIndex = ballArray.indexOf(this);
                    ballArray.splice(myIndex, 1);
                    let yourIndex = bossArray.indexOf(bossArray[i]);
                    bossArray.splice(yourIndex, 1);

                    break;
                }
            }
        }
    }

    hitTest_digimon() { 

        let n = digimonArray.length;
        
        for (let i = 0; i < n; i++) {
            let result = collisionCheck(this, digimonArray[i]);

            if (result) {
             
                hpMinus();
            
                this.container.removeChild(this.img);
                this.container.removeChild(digimonArray[i].img);
                let myIndex = ballArray.indexOf(this);
                ballArray.splice(myIndex, 1);
                let yourIndex = digimonArray.indexOf(digimonArray[i]);
                digimonArray.splice(yourIndex, 1);

                break;
            }
        }
    }
}