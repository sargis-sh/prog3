
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
weather = "Winter";
matrix = [];
app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

function setup() {
    matrixGenerator(80, 1500, 80, 30, 50, 5, 5, 3, 1, 2, 2);
    // frameRate(8);
    function matrixGenerator(matrixSize, xotCount, xotakerCount, gishCount, killerCount, antarCount, gyuxCount, gomCount, posCount, amkCount, amksCount) {
        for (let index = 0; index < matrixSize; index++) {
            matrix[index] = [];
            for (let i = 0; i < matrixSize; i++) {
                matrix[index][i] = 0;
            }
        }
        for (let index = 0; index < xotCount; index++) {
            let x = Math.floor(getRandomInt(0, matrixSize));
            let y = Math.floor(getRandomInt(0, matrixSize));
            matrix[y][x] = 1;
        }
        for (let index = 0; index < xotakerCount; index++) {
            let x = Math.floor(getRandomInt(0, matrixSize));
            let y = Math.floor(getRandomInt(0, matrixSize));
            matrix[y][x] = 2;
        }
        for (let index = 0; index < gishCount; index++) {
            let x = Math.floor(getRandomInt(0, matrixSize));
            let y = Math.floor(getRandomInt(0, matrixSize));
            matrix[y][x] = 3;
        }
        for (let index = 0; index < killerCount; index++) {
            let x = Math.floor(getRandomInt(0, matrixSize));
            let y = Math.floor(getRandomInt(0, matrixSize));
            matrix[y][x] = 4;
        }
        for (let index = 0; index < antarCount; index++) {
            let x = Math.floor(getRandomInt(0, matrixSize));
            let y = Math.floor(getRandomInt(0, matrixSize));
            matrix[y][x] = 5;
        }
        for (let index = 0; index < gyuxCount; index++) {
            let x = Math.floor(getRandomInt(0, matrixSize));
            let y = Math.floor(getRandomInt(0, matrixSize));
            matrix[y][x] = 6;
        }
        for (let index = 0; index < gomCount; index++) {
            let x = Math.floor(getRandomInt(0, matrixSize));
            let y = Math.floor(getRandomInt(0, matrixSize));
            matrix[y][x] = 7;
        }
        for (let index = 0; index < posCount; index++) {
            let x = Math.floor(getRandomInt(0, matrixSize));
            let y = Math.floor(getRandomInt(0, matrixSize));
            matrix[y][x] = 11;
        }
        for (let index = 0; index < amkCount; index++) {
            let x = Math.floor(getRandomInt(0, matrixSize));
            let y = Math.floor(getRandomInt(0, matrixSize));
            matrix[y][x] = 15;
        }
        for (let index = 0; index < amksCount; index++) {
            let x = Math.floor(getRandomInt(0, matrixSize));
            let y = Math.floor(getRandomInt(0, matrixSize));
            matrix[y][x] = 16;
        }
    }
    let data = {
        "matrix": matrix,
        "weather": weather
    };
    io.sockets.emit("send data", data);
}


xotArr = [];
xotakerArr = [];
gishArr = [];
killerArr = [];
antarArr = [];
gyuxArr = [];
gomArr = [];
posArr = [];
amkArr = [];
amkamkArr = [];

Xot = require("./Creatures/Xot.js")
Xotaker = require("./Creatures/Xotaker.js")
Gish = require("./Creatures/Gish.js")
Killer = require("./Creatures/Killer.js")
Gom = require("./Creatures/Gom.js")
Gyux = require("./Creatures/Gyux.js")
Antar = require("./Creatures/Antar.js")
Pos = require("./Creatures/Pos.js")
Amk = require("./Creatures/Amk.js")
Amkamk = require("./Creatures/Amkamk.js")


function createObject() {
    for (var y = 0; y < matrix.length; y++) {
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
}

function game() {
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

    let data = {
        "matrix": matrix,
        "weather": weather
    };
    io.sockets.emit("send data", data);
}

setup();
createObject();
setInterval(game, 1000);

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('weather change', weatherF);
    socket.on('Event1', function () {
        console.log("EVENT")
        let x = getRandomInt(0, matrix[0].length);
        let y = getRandomInt(0, matrix.length);
        console.log(matrix[y][x])


        for (let index = 0; index < xotArr.length; index++) {
            if (xotArr[index].x == x && xotArr[index].y == y) {
                xotArr.splice(index, 1)
                matrix[y][x] = 0;
            }
        }
        for (let index = 0; index < xotakerArr.length; index++) {
            if (xotakerArr[index].x == x && xotakerArr[index].y == y) {
                xotakerArr.splice(index, 1)
                matrix[y][x] = 0;
            }
        }
        for (let index = 0; index < gishArr.length; index++) {
            if (gishArr[index].x == x && gishArr[index].y == y) { 
                gishArr.splice(index, 1)
                matrix[y][x] = 0;
            }
        }
        for (let index = 0; index < killerArr.length; index++) {
            if (killerArr[index].x == x && killerArr[index].y == y) {
                killerArr.splice(index, 1)
                matrix[y][x] = 0;
            }
        }
        for (let index = 0; index < gomArr.length; index++) {
            if (gomArr[index].x == x && gomArr[index].y == y) {
                gomArr.splice(index, 1)
                matrix[y][x] = 0;
            }
        }
        for (let index = 0; index < amkArr.length; index++) {
            if (amkArr[index].x == x && amkArr[index].y == y) {
                amkArr.splice(index, 1)
                matrix[y][x] = 0;
            }
        }
        for (let index = 0; index < amkamkArr.length; index++) {
            if (amkamkArr[index].x == x && amkamkArr[index].y == y) { 
                amkamkArr.splice(index, 1)
                matrix[y][x] = 0;
            }
        }
        for (let index = 0; index < antarArr.length; index++) {
            if (antarArr[index].x == x && antarArr[index].y == y) {
                antarArr.splice(index, 1)
                matrix[y][x] = 0;
            }
        }
        for (let index = 0; index < gyuxArr.length; index++) {
            if (gyuxArr[index].x == x && gyuxArr[index].y == y) {
                gyuxArr.splice(index, 1)
                matrix[y][x] = 0;
            }
        }
        for (let index = 0; index < posArr.length; index++) {
            if (posArr[index].x == x && posArr[index].y == y) {
                posArr.splice(index, 1)
                matrix[y][x] = 0;
            }
        }
        data = {
        "matrix": matrix,
        "weather": weather
        };
        io.sockets.emit("send data", data);
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomArrayElement(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomElement = arr[randomIndex];
    return randomElement;
}

function weatherF(name) {
    weather = name;
    data = {
        "matrix": matrix,
        "weather": name
        };
        io.sockets.emit("send data", data);
}