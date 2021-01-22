class LivingCreature {
    constructor(x, y, index){
        this.x = x;
        this.y = y;
        this.dirr=[this.x, this.y];
        this.multiply = 0;
        this.index = index;
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
    chooseCell(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }   
        }
        return found;
    }
}

class Xot extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.life = 0;
    }

   mul() {
        this.life++;
        let newCell = random(this.chooseCell(0));
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

class Xotaker extends LivingCreature {
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
    mul() {
        let newCell = random(this.chooseCell(0));
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
        this.getNewCoordinates();
        let newCell = random(this.chooseCell(1));
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
        let newCell = random(this.chooseCell(0));
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

class Gish extends LivingCreature {
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
        let newCell = random(this.chooseCell(0));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 3;
            let gish = new Gish(x, y);
            gishArr.push(gish);
            this.energy = 0;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let index = 0; index < gishArr.length; index++) {
            if (gishArr[index].x == this.x && gishArr[index].y == this.y) {
                gishArr.splice(index, 1)
            }
        }
    }
    eat() {
        this.getNewCoordinates();
        let newCell = random(this.chooseCell(2));
        if (newCell) {
            this.energy += 10;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;

            for (let index = 0; index < xotakerArr.length; index++) {
                if (xotakerArr[index].x == x && xotakerArr[index].y == y) {
                    xotakerArr.splice(index, 1)
                }
            }

            if (this.energy > 40) {
                this.mul()
            }
        }
        else { this.move() }
    }
    move() {
        this.energy--;
        let newCell = random(this.chooseCell(0).concat(this.chooseCell(1)));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x]=0
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

class Killer extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 100;
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
        let newCell = random(this.chooseCell(0));
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
        let newCell = random(this.chooseCell(2));
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
        let newCell = random(this.chooseCell(1));
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

class Antar extends LivingCreature {
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
        let newCell = random(this.chooseCell(0));
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

class Gyux extends LivingCreature {

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
        let newCell = random(this.chooseCell(0));
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

class Gom extends LivingCreature{
        constructor(x, y, index){
        super(x, y, index);
        this.hashiv = 0;
        this.dies=0;
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let index = 0; index < gomArr.length; index++) {
            if (gomArr[index].x == this.x && gomArr[index].y == this.y) {
                gomArr.splice(index, 1)
            }
        }
    }

    mul() {
        this.hashiv++;
        let newCell = random(this.chooseCell(1).concat(this.chooseCell(0)));
        if (this.hashiv > 40 && newCell) {
            let x = newCell[0];
            let y = newCell[1];
            let cnvacXotaker = new Xotaker(x, y);
            xotakerArr.push(cnvacXotaker);
            this.hashiv = 0;
        }
        if(this.dies>=800){
            this.die();
        }
    }
}

class Pos extends LivingCreature {
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
constructor(x, y, index){
        super(x, y, index);
        this.chap = 0;
    }
    eat() {
     this.getNewCoordinates();
         let newCell = random(this.chooseCell(1).concat(this.chooseCell(2)).concat(this.chooseCell(3)).concat(this.chooseCell(4)));
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

class Amk extends LivingCreature {
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
            let newCell = random(this.chooseCell(1).concat(this.chooseCell(2)).concat(this.chooseCell(3)).concat(this.chooseCell(4)));
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
        let newCell = random(this.chooseCell(0).concat(this.chooseCell(1)).concat(this.chooseCell(2)).concat(this.chooseCell(3)).concat(this.chooseCell(4)));
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

class Amkamk extends LivingCreature {
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
        this.d++
        let newCell = random(this.chooseCell(1).concat(this.chooseCell(0)));
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