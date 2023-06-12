class Player extends GameObject {

    tick() { //물리값
        this.x += this.velX;
        this.y += this.velY;

        /*
        if (this.x == 0) {
            this.velX = 0;
        }
        */
    }

    render() { //렌더링
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        if (this.x <= 0) {
            this.img.style.left = 0 + "px";
        } else if (this.x >= (500 - this.width)) {
            this.img.style.left = (500 - this.width) + "px";
        }

        //this.hitTest_ramen(); //이슈) 컵라면 먹으면 자꾸 게임이 멈추고 있음
    }

    hitTest_ramen() { //hp포션을 먹으면
        this.x += this.velX;
        this.y += this.velY;

        let result = collisionCheck(this, ramen);

        if (result) { //충돌 시 
            console.log("컵라면냠냠");

            //1) 스테이지에서 너(라면)제거
            this.container.removeChild(ramen.img);

            //break;
        }
        /*
        //2) 배열에서 제거
        //1-1) 나(볼) 제거
        let myIndex=ballArray.indexOf(ballArray[i]);
        ballArray.splice(myIndex, 1);
        //1-2) 너(포켓몬) 제거
        let yourIndex=pokemonArray.indexOf(pokemonArray[i]);
        pokemonArray.splice(yourIndex, 1);

        break;
    }
 
*/

    }
}