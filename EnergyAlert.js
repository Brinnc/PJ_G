class EnergyAlert extends GameObject {
    constructor(container, src, width, height, x, y, velX, velY) {
        super(container, src, width, height, x, y, velX, velY);

        this.div = document.createElement("div");
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.background = "red";
        this.container.appendChild(this.div);
        this.container.removeChild(this.img);
        this.op = 0;
        this.div.style.opacity = this.op;
        this.blinkFlag = true; 
        this.flag = false; 

        this.blink();
    }

    blink() {
        if (this.flag) {
            this.op = (this.blinkFlag == true) ? 0.7 : 0;
            this.div.style.opacity = this.op;
            this.blinkFlag = !this.blinkFlag;
        }
    }

    turnOn(){
        this.flag=true;
    }

    turnOff(){
        this.flag=false;
        this.div.style.opacity = 0;
    }
}