class Boss extends GameObject {
    constructor(container, src, width, height, x, y, velX, velY) {
        super(container, src, width, height, x, y, velX, velY);

        //보스몬스터의 hp를 변수로 설정하여, 몬스터볼과의 충돌 횟수를 설정해 화면에서 제거
        //hp를 변수로 둬서 스테이지마다 보스몬스터의 hp 증가 시켜야함 
        this.hp = 30;
    }

    /*
    tick(){
        this.x += this.velX;
        this.y += this.velY;
    }
    */

    render() {
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        //보스몬스터도 땅바닥에 닿으면 hp감소시키고 화면과 배열에서 삭제해야함

        if (this.y >= 770) {
            //8-1) 화면에서 제거
            stage.removeChild(this.img);
            //8-2) 배열에서 제거
            let n = bossArray.indexOf(this);
            bossArray.splice(n, 1);

            hpMinus();
            
            //8-3) HP이미지 교체 
            //h++;
            //hpArray[h].img.src = "./images/death.png";
            
        }

    }

}