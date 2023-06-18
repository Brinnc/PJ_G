class Pokemon extends GameObject {

    render() {
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";

        if (this.y >= 770) {
            stage.removeChild(this.img);
            let n = pokemonArray.indexOf(this);
            pokemonArray.splice(n, 1);
            hpMinus();
        }
    }
}