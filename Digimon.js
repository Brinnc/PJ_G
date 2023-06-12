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
    }

}