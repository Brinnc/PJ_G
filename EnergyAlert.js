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
        this.blinkFlag = true; //레드스크린 깜빡임
        this.flag = false; //energyAlert.flag=true -> 블링크 호출 

        this.blink();
    }

    //energyAlert.flag=true -> 블링크 호출 
    //energyAlert.flag=false-> 더이상 깜빡이진 않는데 화면이 랜덤임
    
    blink() {
        if (this.flag) {

            this.op = (this.blinkFlag == true) ? 0.7 : 0;
            this.div.style.opacity = this.op;
            this.blinkFlag = !this.blinkFlag;

            console.log("블링크호출");

        }
        //setTimeout(() => { this.blink() }, 150);
        
    }

    turnOn(){
        this.flag=true;
    }

    turnOff(){
        this.flag=false;
        this.div.style.opacity = 0;
    }
    

}