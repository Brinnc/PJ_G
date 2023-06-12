class MonsterBall extends GameObject { //생성자에 rotate 

    constructor(container, src, width, height, x, y, velX, velY) {
        super(container, src, width, height, x, y, velX, velY);

        this.r = 0; //몬스터볼 각도를 누적시킬 변수
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

        //화면 밖으로 나간 볼의 제거
        if (this.y < 0) {
            //화면에서 제거
            this.container.removeChild(this.img);
            //배열에서 제거
            let myIndex = ballArray.indexOf(this); 
            ballArray.splice(myIndex, 1);
        }
    }

    hitTest_pokemon() { //일반 몬스터와의 충돌체크 (:1번 충돌 시 사라짐)
      
        let n=pokemonArray.length;

        for (let i = 0; i < n; i++) {
            let result = collisionCheck(this, pokemonArray[i]);

            if (result) { //충돌 시 
                console.log(i + "번째 포켓몬을 잡았어!");

                //1) 스테이지에서 제거
                //1-1) 나(볼) 제거
                this.container.removeChild(this.img);
                //1-2) 너(포켓몬) 제거
                this.container.removeChild(pokemonArray[i].img);

                //2) 배열에서 제거
                //1-1) 나(볼) 제거
                let myIndex = ballArray.indexOf(this);
                ballArray.splice(myIndex, 1);
                //1-2) 너(포켓몬) 제거
                let yourIndex = pokemonArray.indexOf(pokemonArray[i]);
                pokemonArray.splice(yourIndex, 1);

                break;
            }
        }
    }

    hitTest_boss() { //보스 몬스터와의 충돌체크(:5번 충돌 시 사라짐)
      
        let result = collisionCheck(this, boss);
        if (result) {
            console.log("으악");
            boss.hp--;
            boss.velY++;

            if (boss.hp == 0) {
                //1) 스테이지에서 제거
                //1-1) 나(볼) 제거
                this.container.removeChild(this.img);
                //1-2) 너(보스) 제거
                this.container.removeChild(boss.img);

                //2) 배열에서 제거
                //1-1) 나(볼) 제거
                let myIndex = ballArray.indexOf(this);
                ballArray.splice(myIndex, 1);
                //1-2) 너(보스) 제거
                //let yourIndex = bossArray.indexOf(bossArray[0]);
                //bossArray.splice(yourIndex, 1);

            }
        }
    }

    hitTest_digimon() { //디지몬과의 충돌체크(:볼로 맞히면 속도가 빨라짐)

        let n=digimonArray.length;

        for (let i = 0; i < n; i++) {
            let result = collisionCheck(this, digimonArray[i]);

            if (result) {
                console.log("나는디지몬이야");
                digimonArray[i].velY++;
                //pokemonArray[pokemonArray.length-1].velY++;

                break;
            }
        }
    }
}