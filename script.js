let matrix = [];
let side = 10;

let xotArr = [];
let xotakerArr = [];
let gishArr = [];
let killerArr = [];
let antarArr = [];
let gyuxArr = [];
let gomArr = [];
let posArr = [];
let amkArr = [];
let amkamkArr = [];

function setup() {
    matrixGenerator(80, 1500, 80, 30, 50, 5, 5, 3, 1, 2, 2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('grey');
    frameRate(8);


    function matrixGenerator(matrixSize, xotCount, xotakerCount, gishCount, killerCount, antarCount, gyuxCount, gomCount, posCount, amkCount ,amksCount) {
        for (let index = 0; index < matrixSize; index++) {
            matrix[index] = [];
            for (let i = 0; i < matrixSize; i++) {
                matrix[index][i] = 0;
            }
        }
        for (let index = 0; index < xotCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 1;
        }
        for (let index = 0; index < xotakerCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 2;
        }
        for (let index = 0; index < gishCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 3;
        }
        for (let index = 0; index < killerCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 4;
        }
        for (let index = 0; index < antarCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 5;
        }
        for (let index = 0; index < gyuxCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 6;
        }
        for (let index = 0; index < gomCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 7;
        }
        for (let index = 0; index < posCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 11;
        }
        for (let index = 0; index < amkCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 15;
        }
        for (let index = 0; index < amksCount; index++) {
            let x = Math.floor(random(0, matrixSize));
            let y = Math.floor(random(0, matrixSize));
            matrix[y][x] = 16;
        }
    }

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let xot = new Xot(x, y);
                xotArr.push(xot);
            }
            else if (matrix[y][x] == 2) {
                let xotaker = new Xotaker(x, y);
                xotakerArr.push(xotaker);
            }
            else if (matrix[y][x] == 3) {
                let gish = new Gish(x, y);
                gishArr.push(gish);
            }
            else if (matrix[y][x] == 4) {
                let killer = new Killer(x, y);
                killerArr.push(killer);
            }
            else if (matrix[y][x] == 5) {
                let antar = new Antar(x, y);
                antarArr.push(antar);
            }
            else if (matrix[y][x] == 6) {
                let gyux = new Gyux(x, y);
                gyuxArr.push(gyux);
            }
            else if (matrix[y][x] == 7) {
                let gom = new Gom(x, y);
                gomArr.push(gom);
            }
            else if (matrix[y][x] == 11) {
                let pos = new Pos(x, y);
                posArr.push(pos);
            }
            else if (matrix[y][x] == 15) {
                let amk = new Amk(x, y);
                amkArr.push(amk);
            }
            else if (matrix[y][x] == 16) {
                let amks = new Amkamk(x, y);
                amkamkArr.push(amks);
            }
        }
    }
}
function draw() {

    for (let y = 0; y < matrix.length; y++) {
        const element = matrix[y];
        for (let x = 0; x < element.length; x++) {

            if (matrix[y][x] == 1) {
                fill('green')
            }
            else if (matrix[y][x] == 2) {
                fill('yellow')
            }
            else if (matrix[y][x] == 3) {
                fill('red')
            }
            else if (matrix[y][x] == 4) {
                fill('blue')
            }
            else if (matrix[y][x] == 5) {
                fill('#5fe164')
            }
            else if (matrix[y][x] == 6) {
                fill('#924d5f')
            }
            else if (matrix[y][x] == 7) {
                fill('#d2522f')
            }
            else if (matrix[y][x] == 11) {
                fill('black')
            }
            else if (matrix[y][x] == 15) {
                fill('white')
            }
            else if (matrix[y][x] == 16) {
                fill('pink')
            }
            else {
                fill('grey')
            }
            rect(x * side, y * side, side, side)
        }
    }
    for (let index = 0; index < xotArr.length; index++) {
        xotArr[index].mul();
    }
    for (let index = 0; index < xotakerArr.length; index++) {
        xotakerArr[index].eat();
    }
    for (let index = 0; index < gishArr.length; index++) {
        gishArr[index].eat();
    }
    for (let index = 0; index < killerArr.length; index++) {
        killerArr[index].eat();
    }
    for (let index = 0; index < antarArr.length; index++) {
        antarArr[index].mul();
    }
    for (let index = 0; index < gyuxArr.length; index++) {
        gyuxArr[index].mul();
    }
    for (let index = 0; index < gomArr.length; index++) {
        gomArr[index].mul();
    }
    for (let index = 0; index < posArr.length; index++) {
        posArr[index].eat();
    }
    for (let index = 0; index < amkArr.length; index++) {
        amkArr[index].eat();
    }
    for (let index = 0; index < amkamkArr.length; index++) {
        amkamkArr[index].mul();
    }
} 
