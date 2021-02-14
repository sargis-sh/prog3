let side = 10;
var socket = io();
socket.on('send data', nkarel);
function change(){
    weatherName.innerHTML= this.innerHTML;
    socket.emit('weather change', this.innerHTML);
}

var weatherName=document.createElement('h2');
weatherName.innerHTML="Winter";
document.body.appendChild(weatherName);
let arrW=['Winter','Spring','Summer','Autumn']

    var w1 = document.createElement('button');
    w1.innerHTML=arrW[0];
    w1.addEventListener("click", change);
    document.body.appendChild(w1);



    var w2 = document.createElement('button');
    w2.innerHTML=arrW[1];
    w2.addEventListener("click", change);
    document.body.appendChild(w2);



    var w3 = document.createElement('button');
    w3.innerHTML=arrW[2];
    w3.addEventListener("click", change);
    document.body.appendChild(w3);



    var w4 = document.createElement('button');
    w4.innerHTML=arrW[3];
    w4.addEventListener("click", change);
    document.body.appendChild(w4);

    var event = document.createElement('button');
    event.innerHTML="Void";
    event.addEventListener("click", Event1);
    document.body.appendChild(event);


function setup() {
    createCanvas(80 * side, 80 * side);
    background('grey');
}

function nkarel(data) {
    var matrix = data.matrix;
    var weather = data.weather;
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix.length; x++) {
            if(weather == "Winter"){
                if (matrix[y][x] == 1) {
                    fill("white");
                } else if (matrix[y][x] == 2) {
                    fill("#fffca1");
                } else if (matrix[y][x] == 0) {
                    fill('#acacac');
                } else if (matrix[y][x] == 3) {
                    fill('#ffa1a1');
                } else if (matrix[y][x] == 4) {
                    fill('red');
                } else if (matrix[y][x] == 5) {
                    fill('white');
                }else if(matrix[y][x] == 6){
                    fill('#a1d9ff');
                }
                else if (matrix[y][x] == 7) {
                    fill('#d2522f')
                }
                else if (matrix[y][x] == 11) {
                    fill('black')
                }
                else if (matrix[y][x] == 15) {
                    fill('#d7bdee')
                }
                else if (matrix[y][x] == 16) {
                    fill('pink')
                }
                else {
                    fill('grey')
                }
            }
            if(weather == "Summer"){
                if (matrix[y][x] == 1) {
                    fill("green");
                } else if (matrix[y][x] == 2) {
                    fill("yellow");
                } else if (matrix[y][x] == 0) {
                    fill('#acacac');
                } else if (matrix[y][x] == 3) {
                    fill('red');
                } else if (matrix[y][x] == 4) {
                    fill('#670067');
                } else if (matrix[y][x] == 5) {
                    fill('white');
                }else if(matrix[y][x] == 6){
                    fill('blue');
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
            }
            if(weather == "Spring" || weather == "Autumn"){
                if (matrix[y][x] == 1) {
                    fill("#1a6b15");
                } else if (matrix[y][x] == 2) {
                    fill("#d3d624");
                } else if (matrix[y][x] == 0) {
                    fill('#acacac');
                } else if (matrix[y][x] == 3) {
                    fill('#a60d0d');
                } else if (matrix[y][x] == 4) {
                    fill('#5c5858');
                } else if (matrix[y][x] == 5) {
                    fill('#f0e8ce');
                }else if(matrix[y][x] == 6){
                    fill('#0f1b73');
                }else if (matrix[y][x] == 7) {
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
            }

            // if (matrix[y][x] == 1) {
            //     fill('green')
            // }
            // else if (matrix[y][x] == 2) {
            //     fill('yellow')
            // }
            // else if (matrix[y][x] == 3) {
            //     fill('red')
            // }
            // else if (matrix[y][x] == 4) {
            //     fill('blue')
            // }
            // else if (matrix[y][x] == 5) {
            //     fill('#5fe164')
            // }
            // else if (matrix[y][x] == 6) {
            //     fill('#924d5f')
            // }
            // else if (matrix[y][x] == 7) {
            //     fill('#d2522f')
            // }
            // else if (matrix[y][x] == 11) {
            //     fill('black')
            // }
            // else if (matrix[y][x] == 15) {
            //     fill('white')
            // }
            // else if (matrix[y][x] == 16) {
            //     fill('pink')
            // }
            // else {
            //     fill('grey')
            // }
            rect(x * side, y * side, side, side)
        }
    }
}

function Event1() {
    socket.emit('Event1');
}


