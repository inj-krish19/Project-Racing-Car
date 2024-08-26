
var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
var ctx = canvas.getContext("2d");


var heigth, width;

/*  Here Both Are Written Bcuz Here Width Is 746 So 
The Some Block Are Cutting So Therefore Here Boxt Are Applied 
Till Learning Resize orr For Static Purpose Both Are 200
And Dynamicity Will Be Applied After Learning 
Event Listner Of Body And Windows        */



height = canvas.height = innerHeight - 5;
width = canvas.width = innerWidth - 0;

var start, end, dist, track_len, med = [], common;

var key, l = 10, iteration_left = iteration_right = iteration_up = iteration_down = iterarion = 0;

var speed = 0, flagforEnd = 0, acc = 0, brake = 1, counterPlayPause = 0;

var val_x, val_y, i, j, limit_j = 10, max_limit = 6000, distance = 150;

var nitroStatus = true, counterNitroStatus = 0, flagNitroStatus = 0;

var acceleratorStatus = true, counteracceleratoeStatus = 0, flagAccelerator = 0;

var score = 0, highestScoreRacingMode = 0, gameStatus = 1;

var counterMusicPlayPause = 0;

function path() {

    common = 50;

    start = 400;
    end = 1000;

    dist = end - start;
    track_len = width;

    med[0] = dist - common;
    med[1] = dist + (2 * common);
    med[2] = dist + (5 * common);

    c.beginPath();
    c.moveTo(start, 0);
    c.lineTo(start, track_len);
    c.lineWidth = 20;
    c.strokeStyle = "#aaaccc";
    c.stroke();

    c.moveTo(end, 0);
    c.lineTo(end, track_len);
    c.lineWidth = 20;
    c.strokeStyle = "#aaaccc";
    c.stroke();

    c.fillStyle = "black";
    c.fillRect(start, 0, dist, track_len);
    c.closePath();

    ctx.beginPath();
    ctx.moveTo(med[0], 0);
    ctx.lineTo(med[0], track_len);
    ctx.lineWidth = 8;
    ctx.strokeStyle = "yellow";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(med[1], 0);
    ctx.lineTo(med[1], track_len);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#aaaccc";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(med[2], 0);
    ctx.lineTo(med[2], track_len);
    ctx.lineWidth = 8;
    ctx.strokeStyle = "yellow";
    ctx.stroke();
    ctx.closePath();

}

path();

class FootPath {
    constructor(a, b) {
        this.position = {
            x: a,
            y: b
        }
    }

    wid = 9;
    hei = 60;


    draw() {
        c.fillStyle = "white";
        c.fillRect(this.position.x, this.position.y, this.wid, this.hei);
    }
}

const ima = [];
const background = [];
const audios = [];


var currentBackground = new Image();
var indexForBackground;

function setImagesxAudio() {

    for (i = 0; i < 16; i++) {
        ima[i] = new Image();
    }

    for (i = 0; i < 16; i++) {
        ima[i].src = './Final Cars/' + i + '.png';
    }

    for (i = 0; i < 10; i++) {
        background[i] = new Image();
    }

    for (i = 0; i < 10; i++) {

        if (i == 1 || i == 2)
            background[i].src = './Final BackGrounds/' + i + '.jfif';
        else if (i == 3 || i == 4 || i == 5 || i == 6 || i == 9)
            background[i].src = './Final BackGrounds/' + i + '.jpg';
        else
            background[i].src = './Final BackGrounds/' + i + '.png';

    }

    for (i = 0; i < 25; i++) {
        audios[i] = new Audio();
    }

    audios[0].src = './Sounds/Accident1.mp3';
    audios[1].src = './Sounds/BirdVoices.mp3';
    audios[2].src = './Sounds/Bonus.wav';
    audios[3].src = './Sounds/CarStart and Crash.mp3';
    audios[4].src = './Sounds/Carstart.mp3';
    audios[5].src = './Sounds/Complete1.wav';
    audios[6].src = './Sounds/Complete2.wav';
    audios[7].src = './Sounds/CountDown1.m4a';
    audios[8].src = './Sounds/FinalCountDdown.mp3';
    audios[9].src = './Sounds/Gameover1.mp3';
    audios[10].src = './Sounds/Gameover2.mp3';
    audios[11].src = './Sounds/GameStart.mp3';
    audios[12].src = './Sounds/Nitro.wav';
    audios[13].src = './Sounds/nitro1.wav';
    audios[14].src = './Sounds/Nitro2.wav';
    audios[15].src = './Sounds/NitroRecharge1.wav';
    audios[16].src = './Sounds/NitroRecharge2.wav';
    audios[17].src = './Sounds/Overtake.mp3';
    audios[18].src = './Sounds/ReachedEnd.wav';
    audios[19].src = './Sounds/Song1.mp3';
    audios[20].src = './Sounds/Song2.mp3';
    audios[21].src = './Sounds/Song3.mp3';
    audios[22].src = './Sounds/Song4.mp3';
    audios[23].src = './Sounds/SpeedUp.mp3';
    audios[24].src = './Sounds/Tetris BGM.wav';

}

setImagesxAudio();

function getBackgroundNumber() {
    for (let i = 0; i < background.length; i++) {
        if (currentBackground.src === background[i].src) {
            indexForBackground = i;
            // console.log(i);
        }
    }
}

function putImage() {
    if (indexForBackground == 0 || indexForBackground == 5) {
        c.drawImage(currentBackground, 0, 0, width, height, 0, 0, width, height);
        c.drawImage(currentBackground, 0, 0, width, height, 950, 0, width, height);
    }
    else if (indexForBackground == 1 || indexForBackground == 4 || indexForBackground == 8) {
        c.drawImage(currentBackground, 0, 0, width, height, 0, 0, width, height);
    }
    else if (indexForBackground == 2 || indexForBackground == 3) {
        c.drawImage(currentBackground, 1000, 400, width, height, 0, 0, width, height);
    }
    else if (indexForBackground == 6) {
        c.drawImage(currentBackground, 200, 300, width, height, 0, 0, width, height);
    }
    else if (indexForBackground == 7) {
        c.drawImage(currentBackground, 150, 800, width, height, 0, 0, width, height);
    }
    else {
        c.drawImage(currentBackground, 200, 2000, width, height, 0, 0, width, height);
        c.drawImage(currentBackground, 425, 2000, width, height, end, 0, width, height);
    }

}

var counter = 0;
temporary = new Image();


function swapCar() {

    let tempImage = new Image();

    tempImage = ima[ima.length - 1];
    ima[ima.length - 1] = ima[localStorage.carSelected];
    ima[localStorage.carSelected] = tempImage;

}

swapCar();

function ImageValidation(i) {

    if (counter === 0) { temporary = ima[ima.length - 1]; }
    else {
        temporary = ima[Math.floor(Math.random() * (ima.length - (0 + counter)))];
    }
    counter = 1;
    return (temporary);

}

class Car {
    constructor(a, b, c, d) {
        this.position = {
            x: a,
            y: b
        }
        this.wid = c;
        this.speed = d;

    }

    image = ImageValidation(this.image);
    hei = 175;

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y - 10, this.wid, this.hei);
    }

}

var restoreX, restoreY, boxSize = 25, var_x, var_y, area = 300;

var cols = (area / boxSize);
var rows = (dist / boxSize);

class Start {
    constructor(a, b) {
        this.position = {
            x: a,
            y: b
        }
    }
    area = 300;

    draw() {

        c.beginPath();

        c.fillStyle = "green";

        c.fillRect(startLabel.position.x - 10, startLabel.position.y - 10, dist + (2 * 10), 10);   // 10 for lineWidth

        c.fillRect(startLabel.position.x - 10, startLabel.position.y, 10, startLabel.area + 10);

        c.fillRect(startLabel.position.x - 10, startLabel.area + startLabel.position.y, dist + (2 * 10), 10);

        c.fillRect(startLabel.position.x + dist, startLabel.position.y, 10, startLabel.area);

        // console.log((startLabel.position.x - 10, startLabel.position.y - 10, dist + (2 * 10), 10));
        c.closePath();

        restoreX = this.position.x;
        restoreY = this.position.y;


        for (let b = 0; b < 12; b++) {
            var_x = restoreX;
            var_y = restoreY;
            var_y = var_y + (b * boxSize);
            for (let a = 0; a < rows; a++) {

                if ((a + b) % 2 == 0) {
                    c.fillStyle = "black";
                }
                else {
                    c.fillStyle = "white";
                }
                c.fillRect(var_x, var_y, boxSize, boxSize);
                var_x += boxSize;
            }
        }

        var gradient = c.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop("0.22", "red");
        gradient.addColorStop("0.30", "blue");
        gradient.addColorStop("0.38", "yellow");
        gradient.addColorStop("0.43", "blue");
        gradient.addColorStop("0.60", "magenta");
        gradient.addColorStop("0.82", "orange");
        gradient.addColorStop("1.0", "pink");


        c.fillStyle = gradient;
        c.font = "90px Verdana";

        c.fillText("Start", restoreX + ((dist) / 2) - 100, restoreY + (startLabel.area / 2) + 90 / 3);

    }
}

class End {
    constructor(a, b) {
        this.position = {
            x: a,
            y: b
        }
    }
    area = 300;

    draw() {

        c.beginPath();

        c.fillStyle = "purple";

        c.fillRect(endLabel.position.x - 10, endLabel.position.y - 10, dist + (2 * 10), 10);   // 10 for lineWidth

        c.fillRect(endLabel.position.x - 10, endLabel.position.y - 10, 10, endLabel.area + 10);

        c.fillRect(endLabel.position.x - 10, endLabel.area + endLabel.position.y, dist + (2 * 10), 10);

        c.fillRect(endLabel.position.x + dist, endLabel.position.y, 10, endLabel.area);

        c.closePath();


        restoreX = this.position.x;
        restoreY = this.position.y;

        for (let b = 0; b < cols; b++) {
            var_x = restoreX;
            var_y = restoreY;
            var_y = var_y + (b * boxSize);
            for (let a = 0; a < rows; a++) {

                if ((a + b) % 2 == 0) {
                    c.fillStyle = "black";
                }
                else {
                    c.fillStyle = "white";
                }
                c.fillRect(var_x, var_y, boxSize, boxSize);
                var_x += boxSize;
            }
        }

        var gradient = c.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop("0.22", "red");
        gradient.addColorStop("0.30", "blue");
        gradient.addColorStop("0.38", "yellow");
        gradient.addColorStop("0.43", "blue");
        gradient.addColorStop("0.60", "magenta");
        gradient.addColorStop("0.82", "orange");
        gradient.addColorStop("1.0", "pink");

        c.fillStyle = gradient;
        c.font = "90px Verdana";
        c.fillText("End", restoreX + ((dist) / 2) - 90, restoreY + (endLabel.area / 2) + 90 / 3);

    }
}

const footPath = [];
const car = [];

car.push(new Car(725, heigth * 0.7, 100, 8));

val_x = 475;
val_y = 300;

function madeTrack() {
    for (i = 0; i < 4; i++) {
        val_y = 50;
        for (j = 0; j < limit_j; j++) {
            footPath.push(new FootPath(val_x, val_y));
            footPath[(limit_j * i) + j].draw();
            val_y += distance;
        }

        val_x += 150;
    }



    let lj = max_limit - limit_j;

    val_x = 475;

    for (i = 0; i < 4; i++) {
        val_y = -100;
        for (j = 0; j < lj; j++) {
            footPath.push(new FootPath(val_x, val_y));
            footPath[(4 * limit_j) + ((lj * i) + j)].draw();
            val_y -= distance;
        }
        val_x += 150;
    }
}


madeTrack();

car[0].draw();

const cars_x = [425, 575, 875, 425, 875, 425, 875, 875, 425, 575, 725, 575, 725, 575, 425, 875, 575, 875, 425, 425, 575, 725, 875];
var choice, cars_y, speedLimit = 10, respawnCar = 0;

speed = car[0].speed;

for (let i = 1; i < 40; i++) {
    choice = Math.floor(Math.random() * cars_x.length);
    cars_y = i * -300;


    car.push(new Car(cars_x[choice], cars_y - 1000, 100, 10 - (Math.ceil(Math.random() * speedLimit))));

}

const startLabel = new Start(400, 20);
const endLabel = new End(400, ((car.length * 300) + 500000) * -1);


function Colizon() {
    let j;
    for (j = 1; j < car.length; j++) {
        if (
            ((car[0].position.y - car[j].position.y < car[0].hei) &&
                (car[0].position.y - car[j].position.y > (-1 * car[0].hei))) &&
            ((car[0].position.x - car[j].position.x) == 0 ||
                ((car[0].position.x - car[j].position.x) > 0 &&
                    (car[0].position.x - car[j].position.x) < 10))
        ) {
            audios[0].play();
            return j;
        }
    }
    return 0;
}

var jumpY = 5000, countRespawn = 0, respawnCount = 0;

function carBlast() {
    for (i = 1; i < car.length; i++) {
        let j;
        for (j = i + 1; j < car.length; j++) {
            if (
                ((car[i].position.y - car[j].position.y < car[i].hei + 10) &&
                    (car[i].position.y - car[j].position.y > (-1 * car[i].hei) + 10)) &&
                ((car[i].position.x - car[j].position.x) == 0 ||
                    ((car[i].position.x - car[j].position.x) > 0 &&
                        (car[i].position.x - car[j].position.x) < 10))
            ) {

                if (car[i].position.y > car[j].position.y) {

                    if (car[i].speed > car[j].speed) {

                        respawnCar = j;
                        if (winnerPosition - 2 > 0 && winnerPosition > 40) { }
                        respawn();

                    } else {
                        respawnCar = i;
                        if (winnerPosition - 2 > 0 && winnerPosition > 40) { }
                        respawn();
                    }
                }
                else {

                    if (car[i].speed > car[j].speed) {
                        respawnCar = i;
                        if (winnerPosition - 2 > 0 && winnerPosition > 40) { }
                        respawn();

                    } else {
                        respawnCar = j;
                        if (winnerPosition - 2 > 0 && winnerPosition > 40) { }
                        respawn();
                    }
                }

            }
        }
    }
}

function respawn() {


    if (winnerPosition - respawnCount - 1 > -10) {
        respawnCount++;
        winnerPosition--;
    }

    for (let i = 1; i < car.length; i++) {
        if (car[i].position.y > 7500) {

            if (
                (!((car[0].position.y - 1500) > (- endLabel.position.y / 2) &&
                    (car[0].position.y + 1500) < (- endLabel.position.y / 2)))
            ) {

                car[i].position.y = cars_x[Math.ceil(Math.random() * (cars_x.length - 1))];
                car[i].position.y = - endLabel.position.y / 2;
            }
        }
    }

    if (car[respawnCar].position.y - jumpY > endLabel.position.y) {

        if (car[respawnCar].position.y > 0) {

            if (!((car[0].position.y - 1500) > Math.ceil(endLabel.position.y / 2) &&
                (car[0].position.y + 1500) < Math.ceil(endLabel.position.y / 2))) {

                car[respawnCar].position.X = cars_x[Math.ceil(Math.random() * (cars_x - 1))];
                car[respawnCar].position.y = Math.ceil(endLabel.position.y / 2) - (countRespawn * 1000);

            }

        } else if (
            (!((car[0].position.y - 1500) > (car[respawnCar].position.y - jumpY) &&
                (car[0].position.y + 1500) < (car[respawnCar].position.y - jumpY)))
        ) {
            car[respawnCar].position.X = cars_x[Math.ceil(Math.random() * (cars_x - 1))];
            car[respawnCar].position.y -= jumpY;
        } else {
            car[respawnCar].position.X = cars_x[Math.ceil(Math.random() * (cars_x - 1))];
            car[respawnCar].position.y -= (jumpY + 2000);
        }

        countRespawn++;

    }
}

function gameOver() {

    audios[10].play();

    c.fillStyle = "aqua";
    c.fillRect(start - 10, (height / 2) - 150, dist + 20, startLabel.area);

    c.fillStyle = "blue";
    c.fillRect(start - 10, (height / 2) - 150, dist + 20, 10);

    c.fillStyle = "blue";
    c.fillRect(start - 10, (height / 2) - 150, 10, startLabel.area);

    c.fillStyle = "blue";
    c.fillRect(start + dist, (height / 2) - 150, 10, startLabel.area);

    c.fillStyle = "blue";
    c.fillRect(start - 10, (height / 2) - 150 + startLabel.area, dist + 20, 10);

    var gradient = c.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop("0.22", "red");
    gradient.addColorStop("0.30", "blue");
    gradient.addColorStop("0.38", "yellow");
    gradient.addColorStop("0.43", "blue");
    gradient.addColorStop("0.60", "magenta");
    gradient.addColorStop("0.82", "orange");
    gradient.addColorStop("1.0", "pink");

    c.fillStyle = gradient;
    c.font = "90px Verdana";

    c.fillText(" Game Over ", (width / 2) - 300, endLabel.position.y - restoreY + (height / 2) + 20, 490);

}

function Congratulations() {

    audios[6].play();
    audios[18].play();

    c.fillStyle = "#335c67";
    c.fillRect(start - 10, (height / 2) - 150, dist + 20, startLabel.area);

    c.fillStyle = "blue";
    c.fillRect(start - 10, (height / 2) - 150, dist + 20, 10);

    c.fillStyle = "blue";
    c.fillRect(start - 10, (height / 2) - 150, 10, startLabel.area);

    c.fillStyle = "blue";
    c.fillRect(start + dist, (height / 2) - 150, 10, startLabel.area);

    c.fillStyle = "blue";
    c.fillRect(start - 10, (height / 2) - 150 + startLabel.area, dist + 20, 10);

    var gradient = c.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop("0.22", "red");
    gradient.addColorStop("0.30", "blue");
    gradient.addColorStop("0.38", "yellow");
    gradient.addColorStop("0.43", "blue");
    gradient.addColorStop("0.60", "magenta");
    gradient.addColorStop("0.82", "orange");
    gradient.addColorStop("1.0", "pink");

    c.fillStyle = gradient;
    c.font = "90px Verdana";
    c.fillText(" Congratulations ", (width / 2) - 270, endLabel.position.y - restoreY + (height / 2) + 20, 490);

}

function setScores() {
    if (sessionStorage.highestScoreRacingMode > 0) {

    } else {
        sessionStorage.highestScoreRacingMode = 0;
    }

    if (localStorage.highestScoreRacingMode > 0) {

    } else {
        localStorage.highestScoreRacingMode = 0;
    }
}

setScores();

function givehighestScoreRacingMode() {
    highestScoreRacingMode = score;
    if (sessionStorage.highestScoreRacingMode < highestScoreRacingMode) {
        sessionStorage.highestScoreRacingMode = highestScoreRacingMode;
    }
    if (localStorage.highestScoreRacingMode < highestScoreRacingMode) {
        localStorage.highestScoreRacingMode = highestScoreRacingMode;
    }
}

currentBackground = background[Math.floor(Math.random() * (background.length))];
getBackgroundNumber();

var limit = 5000, messageStaus = true, winnerPosition = 40, mainCarY = 0, tempY = [];

function giveCarPosition() {

    let flag = 1, pos = 0;
    mainCarY = 0 - (((footPath[40].position.y + 100) / speed) + (2 * car[0].hei));

    tempY[0] = mainCarY;

    let swapVar = 0;

    for (let i = 1; i < car.length; i++) {
        // tempY[0] = mainCarY;
        tempY[i] = car[i].position.y - car[i].speed - car[i].hei;
    }

    tempY[0] = mainCarY;

    for (let i = 0; i < car.length; i++) {
        for (let j = i + 1; j < car.length; j++) {

            if (tempY[i] > tempY[j]) {

                swapVar = tempY[i];
                tempY[i] = tempY[j];
                tempY[j] = swapVar;

            }

        }
    }

    for (let i = 0; i < car.length; i++) {

        if (tempY[i] > 0 || tempY[i] > mainCarY) {
            pos++;
        }

    }

    if (winnerPosition <= 0) {
        winnerPosition = 1;
    } else if (winnerPosition > 40) {
        winnerPosition = 40;
    }
    else if (winnerPosition > 30) {
        winnerPosition = car.length - pos + 1;
    }
    else {
        winnerPosition = car.length - pos - respawnCount + 15;
    }

}

// miles = distance / perMileX  =>  miles = 150000 / 750 = 200 Miles 

var perMileX = 2500, miles = 200;

function blink() {
    document.getElementById('messageDistance').innerHTML = "";
}

function distanceCalculator() {

    if (score > (miles * perMileX) - (10 * perMileX) && messageStaus == true) {
        document.getElementById('messageDistance').innerHTML = "10 Miles To Go";
    } else if (score > (miles * perMileX) - (30 * perMileX) && messageStaus == true) {
        document.getElementById('messageDistance').innerHTML = "30 Miles To Go";
    } else if (score > (miles * perMileX) - (50 * perMileX) && messageStaus == true) {
        document.getElementById('messageDistance').innerHTML = "50 Miles To Go";
    } else if (score > ((miles - 100) * perMileX) && messageStaus == true) {
        document.getElementById('messageDistance').innerHTML = "Half Way To Go";
    } else if (score > ((miles - 150) * perMileX) && messageStaus == true) {
        document.getElementById('messageDistance').innerHTML = "50 Miles Covered";
    } else if (score > ((miles - 175) * perMileX) && messageStaus == true) {
        document.getElementById('messageDistance').innerHTML = "25 Miles Covered";
    } else {
        document.getElementById('messageDistance').innerHTML = "Best Of Luck";
    }

}

var seconds = 3000, inCountdown = true;

function makeCountDown() {

    audios[8].play()

    c.fillStyle = "#384687";
    c.fillRect(start + (dist / 2) - 115, (height / 2) - 155, 250, 250);

    if (seconds == 3000 || seconds == 0) {
        ctx.beginPath();
        ctx.strokeStyle = "lightblue";
        ctx.lineWidth = 6;
        ctx.arc(start + (dist / 2) + 10, (height / 2) - 30, 120, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
        carArranger();
    }
    if (seconds == 2000 || seconds == 0) {
        ctx.beginPath();
        ctx.strokeStyle = "lightgreen";
        ctx.lineWidth = 8;
        ctx.arc(start + (dist / 2) + 10, (height / 2) - 30, 100, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }
    if (seconds == 1000 || seconds == 0) {
        ctx.beginPath();
        ctx.strokeStyle = "aqua";
        ctx.lineWidth = 10;
        ctx.arc(start + (dist / 2) + 10, (height / 2) - 30, 80, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }

    c.fillStyle = "white";

    if (seconds != 0) {
        c.font = "90px Verdana";
        c.fillText(seconds / 1000, start + (dist / 2) - 20, height / 2, 490);
    } else {
        c.font = "40px Verdana";
        c.fillText("Ready", start + (dist / 2) - 50, (height / 2) - 20, 490);
    }

    seconds -= 1000;

    if (seconds > -1000) {
        setTimeout(makeCountDown, 1000);
    } else {
        clearTimeout(makeCountDown);
        audios[19].play();
        audios[19].loop = true;
        setTimeout(animate, 500);
    }

}

var tempSpeed = 10;

function spawn() {

    car[0].position.x = 725;
    car[0].position.y = 480;
    car[0].speed = 8;

    for (let i = 1; i < 40; i++) {

        choice = Math.floor(Math.random() * cars_x.length);
        cars_y = i * -300;

        car[i].position.x = cars_x[choice];
        car[i].position.y = cars_y - 100;
        car[i].speed = 10 - (Math.ceil(Math.random() * speedLimit));

    }

    flagReal = 1;
    inCountdown = false;

}

function allPause() {

    for (let i = 1; i < 25; i++) {

        if (i == 10) {
            continue;
        }
        else {
            audios[i].pause();
        }
    }
}

function carArranger() {

    let carArrangerArray = [425, 575, 725, 875];

    for (let i = 0; i < 10; i++) {

        for (j = 0; j < 4; j++) {

            if ((car.length - 1) - ((i * 4) + j) >= 2) {
                car[(car.length - 1) - ((i * 4) + j)].position.x = carArrangerArray[j];
                car[(car.length - 1) - ((i * 4) + j)].position.y = 500 + (i * 200);

                car[(car.length - 1) - ((i * 4) + j)].speed = 30 + tempSpeed;
            }
            else if ((car.length - 1) - ((i * 4) + j) == 1) {
                car[(car.length - 1) - ((i * 4) + j)].position.x = carArrangerArray[j + 1];
                car[(car.length - 1) - ((i * 4) + j)].position.y = 500 + (i * 200);

                car[(car.length - 1) - ((i * 4) + j)].speed = 30 + tempSpeed;
            } else if ((car.length - 1) - ((i * 4) + j) == 0) {

                setTimeout(() => {
                    audios[4].play();
                }, 3000);

                car[(car.length - 1) - ((i * 4) + j)].position.x = carArrangerArray[j - 1];
                car[(car.length - 1) - ((i * 4) + j)].position.y = 500 + (i * 200);

                car[(car.length - 1) - ((i * 4) + j)].speed = 25 + tempSpeed;
            }

        }
        tempSpeed--;
    }

}

var carCount = car.length;

function drawAllcAR() {

    for (let i = 0; i < car.length; i++) {
        car[index].draw();
    }

}

function performanceMessage() {

    if (score > (500000 * 30 / 100)) {
        if (winnerPosition > 19) {
            winnerPosition = 19;
        };
    }

    document.getElementById('myCanvas').style.zIndex = -1;
    document.getElementById('alertBox').style.zIndex = 1;
    document.getElementById('result').style.zIndex = 1;
    document.getElementById('result').innerHTML = '# ' + winnerPosition + " / " + carCount;

    if (winnerPosition == 1) {
        document.getElementById('praise').innerHTML = "You Are Champion Of Race ";
    } else if (winnerPosition < 8) {
        document.getElementById('praise').innerHTML = "Very Close to Win ";
    } else if (winnerPosition < 15) {
        document.getElementById('praise').innerHTML = "Improvisation Needed ";
    } else if (winnerPosition < 25) {
        document.getElementById('praise').innerHTML = "Good Try But Need To Learn ";
    } else {
        document.getElementById('praise').innerHTML = "Early Elimination ";
    }

    document.getElementById('alertBox').style.display = 'block';

}

speed = 35;
var flagReal = 0;

// miles = distance / perMileX  =>  miles = 500000 / 2500 = 200 Miles 

distanceCalculator();

setInterval(distanceCalculator, 2500);
setInterval(blink, 2000);

function animate() {

    document.getElementById('scoreSession').innerHTML = "Sessions' Highest Score : " + sessionStorage.highestScoreRacingMode;
    document.getElementById('scoreAllTime').innerHTML = "Best Score : " + localStorage.highestScoreRacingMode;
    if (score > 0) {
        document.getElementById('score').innerHTML = "Score : " + score;
    }

    putImage();

    path();

    startLabel.position.y += speed;
    endLabel.position.y += speed;

    startLabel.draw();
    endLabel.draw();

    carBlast();
    flagforEnd = Colizon() * brake;

    giveCarPosition();
    if (car[0].position.y < endLabel.position.y - 185) {
        flagforEnd = 1;
        givehighestScoreRacingMode();
        Congratulations();
        allPause();
        performanceMessage();
        return 0;
    }
    else if (flagforEnd != 0) {
        gameOver();
        allPause();
        givehighestScoreRacingMode();
        performanceMessage();
        return 0;
    }
    else if (flagforEnd == 0) {
        if (counterPlayPause == 0) {
            requestAnimationFrame(animate);
        }
    }

    let index = 0;
    for (index = 0; index < footPath.length; index++) {
        footPath[index].position.y += speed;
    }

    for (index = 0; index < footPath.length; index++) {
        footPath[index].draw();
    }

    if (car[0].position.y < 500) {
        if (car[0].position.y > 500) {
            for (let i = 0; i < 40; i++) {
                car[i].speed = 100;
            }
        }
        else {

            if (flagReal == 0) {
                requestAnimationFrame(spawn);
            } else {
                if (flagReal == 1) {
                    for (index = 1; index < car.length; index++) {
                        car[index].position.y += car[index].speed;
                    }
                }
            }

        }

    } else {

        if (flagReal == 0) {
            for (index = 0; index < car.length; index++) {
                car[index].position.y += (speedLimit + 1 - car[index].speed);
            }
        } else {
            for (index = 1; index < car.length; index++) {
                car[index].position.y += (speedLimit + 1 - car[index].speed);
            }
        }

    }

    for (index = 0; index < car.length; index++) {
        car[index].draw();
    }

    score = Math.ceil((footPath[0].position.y - car[0].position.y) / 1);
    givehighestScoreRacingMode();
    if (score > limit) {
        speed += 10;
        limit += 20000;
    }
}

function PausexResume() {
    if (inCountdown == false) {
        if (counterPlayPause == 0) {
            counterPlayPause = 1;
            audios[19].pause();
            document.getElementById('PauseResume').style.backgroundImage = "url('./UI and Button Images/play.png')";
        } else {
            counterPlayPause = 0;
            animate();

            if (counterMusicPlayPause == 0) {
                audios[19].play();
            }
            document.getElementById('PauseResume').style.backgroundImage = "url('./UI and Button Images/pause.png')";
        }
    }
}

function MusicOnOff() {
    if (inCountdown == false) {
        if (counterMusicPlayPause == 0) {
            counterMusicPlayPause = 1;
            audios[19].pause();
            document.getElementById('audioYesNo').style.backgroundImage = "url('./UI and Button Images/MUSICOFF.png')";
        } else {
            counterMusicPlayPause = 0;
            if (counterPlayPause == 0) {
                audios[19].play();
            }
            document.getElementById('audioYesNo').style.backgroundImage = "url('./UI and Button Images/MUSICON.png')";
        }
    }
}

function buttonLeft() {
    goLeft();
}
function buttonRight() {
    goRight();
}
function buttonUp() {
    goFast();
    if (car[0].speed < 20) { car[0].speed += 1.25; }
}
function buttonDown() {
    goSlow();
    if (car[0].speed > 2) { car[0].speed -= 0.75; }
}

function goLeft() {
    if (car[0].position.x > 425 && iteration_left < 15) {
        requestAnimationFrame(goLeft);
        car[0].position.x -= l;
        iteration_left++;
    }
    else if (iteration_left === 15) { iteration_left = 0; }
}

function goRight() {
    if (car[0].position.x < 875 && iteration_right < 15) {
        requestAnimationFrame(goRight);
        car[0].position.x += l;
        iteration_right++;
    }
    else if (iteration_right === 15) { iteration_right = 0; }
}

function goFast() {
    if (iteration_up < 7 && car[0].position.y > 20) {
        requestAnimationFrame(goFast);
        car[0].position.y -= l;
        iteration_up++;
    }
    else if (iteration_up === 7) { iteration_up = 0; }
}

function goSlow() {
    if (iteration_down < 7 && car[0].position.y < height - car[0].hei) {
        requestAnimationFrame(goSlow);
        car[0].position.y += l;
        iteration_down++;
    }
    else if (iteration_down === 7) { iteration_down = 0; }
}

function BrakeHappening() {
    brake = 1;
    speed += 2;
}

function nerfAccelerator() {
    acceleratorStatus = false;
    counteracceleratoeStatus = flagAccelerator = 1;
}

function cooldownAccelerator() {
    acceleratorStatus = true;
    counteracceleratoeStatus = flagAccelerator = 0;
}

function eventAccelerator() {
    audios[23].play();
    speed++;
}

function eventBrake() {
    let tempofSpeed = tempofCar = 0;
    brake = 0;
    speed -= 2;
    setTimeout(BrakeHappening, 1500);
    clearTimeout(BrakeHappening);
}

function buffToSpeed() {
    speed -= 10;
    nitroStatus = false;
    flagNitroStatus = counterNitroStatus = 1;
}

function cooldownBuff() {
    if (flagforEnd == 0) {
        audios[16].play();
    }
    nitroStatus = true;
    flagNitroStatus = counterNitroStatus = 0;

}

function NitroHappening() {

    if (nitroStatus == true) {

        if (flagNitroStatus == 0 && counterNitroStatus == 0) {
            speed += 10;
            audios[14].play();
            setTimeout(buffToSpeed, 3000);

            counterNitroStatus++;

            setTimeout(cooldownBuff, 8000);
            clearTimeout(cooldownBuff);

        }

    }
    else {
        // console.log('Nitro Is On Cooldown');
    }

}

var interval = 0;

addEventListener("keydown", (event) => {

    if (event.keyCode !== 32) {
        key = event.keyCode;
    }
    if (inCountdown == false) {

        switch (key) {
            case 78:
                NitroHappening();
                break;
            case 37:
                iterarion = 0;
                goLeft();
                break;
            case 38:
                iterarion = 0;
                setTimeout(goFast, 200);
                clearTimeout(goFast);
                if (speed < 20) { speed += 1.25; }
                break;
            case 39:
                iterarion = 0;
                goRight();
                break;
            case 40:
                iterarion = 0;
                goSlow();
                if (speed > 2) { speed -= 0.75; }
                break;
        }
    }
});

function refreshPage() {
    window.location.reload();
}

function stopVideo() {
    aboutVideo.pause();
    document.getElementById("racingModeVideo").style.display = "none";
    document.querySelector(".skip").style.display = "none";
    document.getElementById("myCanvas").style.display = "block";
    document.querySelector(".Controller").style.display = "block";
    document.querySelector(".RightLeft").style.display = "block";
    document.querySelector(".UpDown").style.display = "block";
    document.querySelector(".toolBox").style.display = "block";
    document.querySelector(".pedals").style.display = "block";
    document.querySelector(".menuBar").style.display = "block";
    document.querySelector(".scoreBoard").style.display = "block";
    document.querySelector(".messageBoard").style.display = "block";
    makeCountDown();
}


var aboutVideo = document.getElementById('racingModeVideo');
aboutVideo.onended = function () {
    aboutVideo.pause();
    document.getElementById("racingModeVideo").style.display = "none";
    document.querySelector(".skip").style.display = "none";
    document.getElementById("myCanvas").style.display = "block";
    document.querySelector(".Controller").style.display = "block";
    document.querySelector(".RightLeft").style.display = "block";
    document.querySelector(".UpDown").style.display = "block";
    document.querySelector(".toolBox").style.display = "block";
    document.querySelector(".pedals").style.display = "block";
    document.querySelector(".menuBar").style.display = "block";
    document.querySelector(".scoreBoard").style.display = "block";
    document.querySelector(".messageBoard").style.display = "block";
    makeCountDown();
}

if (parseInt(sessionStorage.racingModeVideoStatus) != 1) {
    sessionStorage.racingModeVideoStatus = 1;
} else {
    stopVideo();
}