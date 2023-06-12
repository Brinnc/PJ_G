class Boss extends GameObject{
    constructor(container, src, width, height, x, y, velX, velY){
        super(container, src, width, height, x, y, velX, velY);

        //보스몬스터의 hp를 변수로 설정하여, 몬스터볼과의 충돌 횟수를 설정해 화면에서 제거
        this.hp=10;
    }

    tick(){
        this.x += this.velX;
        this.y += this.velY;
    }

    render(){
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }

}