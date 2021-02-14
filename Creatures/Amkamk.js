function getRandomArrayElement(arr) {
	let randomIndex = Math.floor(Math.random() * arr.length);
	let randomElement = arr[randomIndex];
	return randomElement;
}
LivingCreature = require("./LivingCreature")
module.exports = class Amkamk extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.hashiv = 0;
        this.d=0;
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let index = 0; index < amkamkArr.length; index++) {
            if (amkamkArr[index].x == this.x && amkamkArr[index].y == this.y) {
                amkamkArr.splice(index, 1)
            }
        }
    }

    mul() {
        this.hashiv++;
        this.d++;
        let newCell = getRandomArrayElement(this.chooseCell(1).concat(this.chooseCell(0)));
        if (this.hashiv > 100 && newCell) {
            let x = newCell[0];
            let y = newCell[1];
            let newamk = new Amk(x, y);
            amkArr.push(newamk);
            this.hashiv = 0;
        }
        if(this.d>=1000){
            this.die();
        }
    }
}