class Pokemon extends GameObject {

    render() {
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        //포켓몬이 땅바닥에 떨어지면 HP를 -1씩 제거하고 화면과 배열에서 삭제
        if (this.y >= 770) {
            //8-1) 화면에서 제거
            stage.removeChild(this.img);
            //8-2) 배열에서 제거
            let n = pokemonArray.indexOf(this);
            pokemonArray.splice(n, 1);

            hpMinus();
            
            //energyAlert.flag=false;
            
            //8-3) HP이미지 교체 
            //h++;
            //hpArray[h].img.src = "./images/death.png";
            
        }

    }
}