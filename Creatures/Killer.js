function getRandomArrayElement(arr) {
	let randomIndex = Math.floor(Math.random() * arr.length);
	let randomElement = arr[randomIndex];
	return randomElement;
}
LivingCreature = require("./LivingCreature")
module.exports = class Killer extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 50;
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

    mul() {
        let newCell = getRandomArrayElement(this.chooseCell(0));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            let killer = new Killer(x, y);
            killerArr.push(killer);
            this.energy = 0;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let index = 0; index < killerArr.length; index++) {
            if (killerArr[index].x == this.x && killerArr[index].y == this.y) {
                killerArr.splice(index, 1)
            }
        }
    }
    eat() {
        this.getNewCoordinates();
        let newCell = getRandomArrayElement(this.chooseCell(2));
        if (newCell) {
            this.energy += 10;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 1;

            this.y = y;
            this.x = x;

            for (let index = 0; index < xotakerArr.length; index++) {
                if (xotakerArr[index].x == x && xotakerArr[index].y == y) {
                    xotakerArr.splice(index, 1)
                }
            }

            if (this.energy > 70) {
                this.mul()
            }
        }
        else { this.move() }
    }

    move() {
        this.energy--;
        let newCell = getRandomArrayElement(this.chooseCell(1));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 1;

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
