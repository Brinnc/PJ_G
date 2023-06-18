class Boss extends GameObject {
    constructor(container, src, width, height, x, y, velX, velY) {
        super(container, src, width, height, x, y, velX, velY);

        this.hp = 30;
    }

    render() {
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        if (this.y >= 770) {
            stage.removeChild(this.img);
            let n = bossArray.indexOf(this);
            bossArray.splice(n, 1);
            hpMinus();
        }
    }
}