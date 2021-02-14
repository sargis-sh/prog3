function getRandomArrayElement(arr) {
	let randomIndex = Math.floor(Math.random() * arr.length);
	let randomElement = arr[randomIndex];
	return randomElement;
}
LivingCreature = require("./LivingCreature")
module.exports = class Gyux extends LivingCreature {

     constructor(x, y, index){
        super(x, y, index);
        this.hashiv = 0;
        this.dies=0;
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let index = 0; index < gyuxArr.length; index++) {
            if (gyuxArr[index].x == this.x && gyuxArr[index].y == this.y) {
                gyuxArr.splice(index, 1)
            }
        }
    }

    mul() {
        this.hashiv++;
        let newCell = getRandomArrayElement(this.chooseCell(0));
        if (this.hashiv > 20 && newCell) {
            let x = newCell[0];
            let y = newCell[1];
            let cnvacKiller = new Killer(x, y);
            killerArr.push(cnvacKiller);
            this.hashiv = 0;
        }
        if(this.dies>=500){
            this.die();
        }
    }
}