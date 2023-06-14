class Digimon extends GameObject {
    constructor(container, src, width, height, x, y, velX, velY) {
        super(container, src, width, height, x, y, velX, velY);

        this.r = 0; //디지몬 각도를 누적시킬 변수
        this.img.style.transform = "rotate(" + this.r + "deg)";

    }

    render() {
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        this.r = this.r + 20;
        this.img.style.transform = "rotate(" + this.r + "deg)";

        //디지몬도 땅바닥에 닿으면 hp감소시키고 화면과 배열에서 삭제해야하지 않을까??

    }

}