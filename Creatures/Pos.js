function getRandomArrayElement(arr) {
	let randomIndex = Math.floor(Math.random() * arr.length);
	let randomElement = arr[randomIndex];
	return randomElement;
}
LivingCreature = require("./LivingCreature")
module.exports = class Pos extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
        this.chap = 0;
        this.dirs = [
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
    getNewDirs() {
        this.dirs = [
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

    eat() {
    	this.getNewDirs()
        	let newCell = getRandomArrayElement(this.chooseCell(1).concat(this.chooseCell(2)).concat(this.chooseCell(3)).concat(this.chooseCell(4)));
        	if(newCell){
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 11;
            matrix[this.y][this.x]=11;
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
        this.chap++
        } 
        if(this.chap>=300){
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                    if(matrix[y][x]==11){
                        matrix[y][x]=2;
                        let xotaker=new Xotaker(x,y);
                        xotakerArr.push(xotaker);
                        posArr.splice(x,y);
                    }
                }
            }
        }
            else{
            this.chap++
            }           	
    }
}