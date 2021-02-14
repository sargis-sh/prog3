function getRandomArrayElement(arr) {
	let randomIndex = Math.floor(Math.random() * arr.length);
	let randomElement = arr[randomIndex];
	return randomElement;
}
LivingCreature = require("./LivingCreature")
module.exports = class Antar extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.hashiv = 0;
        this.dies=0;
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let index = 0; index < antarArr.length; index++) {
            if (antarArr[index].x == this.x && antarArr[index].y == this.y) {
                antarArr.splice(index, 1)
            }
        }
    }

    mul() {
        this.hashiv++;
        this.dies++;
        let newCell = getRandomArrayElement(this.chooseCell(0));
        if (this.hashiv > 25 && newCell) {
            let x = newCell[0];
            let y = newCell[1];
            let cnvacGish = new Gish(x, y);
            gishArr.push(cnvacGish);
            this.hashiv = 0;
        }
        if(this.dies>=700){
            this.die();
        }
    }
}
