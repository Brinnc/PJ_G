class Ramen extends GameObject {


    render() { //같은 내용인데 렌더 없애면 에러남
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        //hp포션을 먹지않고 흘려보내면, 화면과 배열에서 삭제해야함

        /*
        if (this.y >= 770) {
            //8-1) 화면에서 제거
            stage.removeChild(this.img);
            //8-2) 배열에서 제거
            let n = ramenArray.indexOf(this);
            ramenArray.splice(n, 1);
        }
        */
    }

}