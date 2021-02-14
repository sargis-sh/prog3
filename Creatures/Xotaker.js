function getRandomArrayElement(arr) {
	let randomIndex = Math.floor(Math.random() * arr.length);
	let randomElement = arr[randomIndex];
	return randomElement;
}
LivingCreature = require("./LivingCreature")
module.exports = class Xotaker extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 30;
    }
   getNewCoordinates() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   chooseCell(character) {
       this.getNewCoordinates();
       return super.chooseCell(character);
   }
   getNewDirections() {
    this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
    ];
}
mul() {
    let newCell = getRandomArrayElement(this.chooseCell(0));
    if (newCell) {
        let x = newCell[0];
        let y = newCell[1];
        matrix[y][x] = 2;
        let xotaker = new Xotaker(x, y);
        xotakerArr.push(xotaker);
        this.energy = 0;
    }
}
die() {
    matrix[this.y][this.x] = 0;
    for (let index = 0; index < xotakerArr.length; index++) {
        if (xotakerArr[index].x == this.x && xotakerArr[index].y == this.y) {
            xotakerArr.splice(index, 1)
        }
    }
}
eat() {
    this.getNewDirections();
    let newCell = getRandomArrayElement(this.chooseCell(1));
    if (newCell) {
        this.energy += 5;
        let x = newCell[0];
        let y = newCell[1];

        matrix[y][x] = 2;
        matrix[this.y][this.x] = 0;

        this.y = y;
        this.x = x;

        for (let index = 0; index < xotArr.length; index++) {
            if (xotArr[index].x == x && xotArr[index].y == y) {
                xotArr.splice(index, 1)
            }
        }

        if (this.energy > 60) {
            this.mul()
        }
    }
    else { this.move() }
}
move() {
    this.energy--;
    let newCell = getRandomArrayElement(this.chooseCell(0));
    if (newCell) {
        let x = newCell[0];
        let y = newCell[1];
        matrix[y][x] = 2;
        matrix[this.y][this.x] = 0;

        this.y = y;
        this.x = x;
    }
    if (newCell && this.energy < 0) {
        this.die();
    }
    if (this.energy < 0) {
        this.die();
    }
}
}
