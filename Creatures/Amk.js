function getRandomArrayElement(arr) {
	let randomIndex = Math.floor(Math.random() * arr.length);
	let randomElement = arr[randomIndex];
	return randomElement;
}
LivingCreature = require("./LivingCreature")
module.exports = class Amk extends LivingCreature {
constructor(x, y, index){
        super(x, y, index);
        this.qayl = 0;
        this.energy=100;
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let index = 0; index < amkArr.length; index++) {
            if (amkArr[index].x == this.x && amkArr[index].y == this.y) {
                amkArr.splice(index, 1)
            }
        }
    }

    eat() {
            let newCell = getRandomArrayElement(this.chooseCell(1).concat(this.chooseCell(2)).concat(this.chooseCell(3)).concat(this.chooseCell(4)));
            if(newCell){
            this.energy+=2
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 15;
            matrix[this.y][this.x]=0;
            this.x=x;
            this.y=y;
            for (let index = 0; index < xotArr.length; index++) {
                if (xotArr[index].x == x && xotArr[index].y == y) {
                    xotArr.splice(index, 1)
                }
            }
            for (let index = 0; index < xotakerArr.length; index++) {
                if (xotakerArr[index].x == x && xotakerArr[index].y == y) {
                    xotakerArr.splice(index, 1)
                }
            }
            for (let index = 0; index < gishArr.length; index++) {
                if (gishArr[index].x == x && gishArr[index].y == y) { 
                    gishArr.splice(index, 1)
                }
            }
            for (let index = 0; index < killerArr.length; index++) {
                if (killerArr[index].x == x && killerArr[index].y == y) {
                    killerArr.splice(index, 1)
                }
            }
    }
            else{
            this.move();
            }               
    }
    move() {
        this.energy--;
        let newCell = getRandomArrayElement(this.chooseCell(0).concat(this.chooseCell(1)).concat(this.chooseCell(2)).concat(this.chooseCell(3)).concat(this.chooseCell(4)));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 15;
            matrix[this.y][this.x]=0;
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
