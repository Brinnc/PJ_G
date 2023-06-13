class Player extends GameObject {
    constructor(container, src, width, height, x, y, velX, velY) {
        super(container, src, width, height, x, y, velX, velY);

        this.h = -1; //hp변수
    }

    render() { //렌더링
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        //게임화면에서 벗어나지 못하게 고정함
        if (this.x <= 0) {
            this.img.style.left = 0 + "px";
        } else if (this.x >= (500 - this.width)) {
            this.img.style.left = (500 - this.width) + "px";
        }

        this.hitTest_ramen(); //이슈) 컵라면 먹으면 자꾸 게임이 멈추고 있음
    }

    //8)
    hitTest_ramen() { //hp포션을 먹으면

        let n = ramenArray.length;

        for (let i = 0; i < n; i++) {
            let result = collisionCheck(this, ramenArray[i]);

            if (result) { //플레이어가 먹으면(충돌 시)
                console.log("컵라면냠냠");

                //1) 스테이지에서 라면 제거
                this.container.removeChild(ramenArray[i].img);
                //2) 배열에서 제거
                let yourIndex = ramenArray.indexOf(ramenArray[i]);
                ramenArray.splice(yourIndex, 1);

                //hp +1
                hpArray[h].img.src = "./images/heart.png";
                h--;

                break;
            }
        }


        /*
            //반복문이 hp배열만큼 도는 동안 
            //하트 이미지를 대조해서 빈 하트로 교체된 hp배열의 인덱스를 어떻게 가져오고
            //빈 하트가 있다면 다시 기본하트로 전환해야 함
                    h--;
                    //8-2) HP 이미지 교체 (바뀐 hp이미지의 index값) 
                    hpArray[h].img.src = "./images/heart.png";
        */
    }
}