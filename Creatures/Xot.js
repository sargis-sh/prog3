function getRandomArrayElement(arr) {
	let randomIndex = Math.floor(Math.random() * arr.length);
	let randomElement = arr[randomIndex];
	return randomElement;
}
LivingCreature = require("./LivingCreature")
module.exports = class Xot extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.life = 0;
    }

    mul() {
        this.life++;
        let newCell = getRandomArrayElement(this.chooseCell(0));
        if (newCell && this.life > 10) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 1;
            let xot = new Xot(x, y);
            xotArr.push(xot);
            this.life = 0;
        }
    }
}