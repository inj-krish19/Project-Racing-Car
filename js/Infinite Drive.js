
var canvas = document.getElementById("myCanvas");
var c = canvas.getContext("2d");
var ctx = canvas.getContext("2d");


var heigth, width;

/*  Here Both Are Written Bcuz Here Width Is 746 So 
The Some Block Are Cutting So Therefore Here Boxt Are Applied 
Till Learning Resize orr For Static Purpose Both Are 200
And Dynamicity Will Be Applied After Learning 
Event Listner Of Body And Windows        */

height = canvas.height = Math.max(750, innerHeight) * 0.99;
width = canvas.width = Math.max(1400, innerWidth);

var start, end, dist, track_len, med = [], common;

var key, l = 10, iteration_left = iteration_right = iteration_up = iteration_down = iterarion = 0;

var speed = 0, flagforEnd = 0, acc = 0, brake = 1, counterPlayPause = 0;

var val_x, val_y, i, j, limit_j = 10, max_limit = 50, distance = 150;

var nitroStatus = true, counterNitroStatus = 0, flagNitroStatus = 0;

var acceleratorStatus = true, counteracceleratoeStatus = 0, flagAccelerator = 0;

var score = 0, highestScoreInfiniteDrive = 0, gameStatus = 1;

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
    audios[8].src = './Sounds/FinalCountdown.mp3';
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

const footPath = [];
const car = [];

car.push(new Car(725, height * 0.7, 100, 8));

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

function retrack() {

    let RestoRe = val_y;
    let lj = max_limit - limit_j;

    for (i = 0; i < 4; i++) {
        val_y = RestoRe;
        for (j = 0; j < lj; j++) {
            footPath.push(new FootPath(val_x, val_y));
            console.log(footPath[footPath.length - 1].position.y);
            footPath[(4 * limit_j) + ((lj * i) + j)].draw();
            val_y -= distance;
        }
        val_x += 150;
    }

}

madeTrack();
const backupX = footPath[0].position.y;

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
// const endLabel = new End(400, ((car.length * 300) + 150000) * -1);


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

    audios[9].play();

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

    c.fillText(" Game Over ", (width / 2) - 300, (height / 2) + 25, 490);

}

function setScores() {
    if (sessionStorage.highestScoreInfiniteDrive > 0) {

    } else {
        sessionStorage.highestScoreInfiniteDrive = 0;
    }

    if (localStorage.highestScoreInfiniteDrive > 0) {

    } else {
        localStorage.highestScoreInfiniteDrive = 0;
    }
}

setScores();

function givehighestScoreInfiniteDrive() {
    highestScoreInfiniteDrive = score;
    if (sessionStorage.highestScoreInfiniteDrive < highestScoreInfiniteDrive) {
        sessionStorage.highestScoreInfiniteDrive = highestScoreInfiniteDrive;
    }
    if (localStorage.highestScoreInfiniteDrive < highestScoreInfiniteDrive) {
        localStorage.highestScoreInfiniteDrive = highestScoreInfiniteDrive;
    }
}

currentBackground = background[Math.floor(Math.random() * (background.length))];
getBackgroundNumber();

var limit = 5000, messageStaus = true, winnerPosition = 40, mainCarY = 0, tempY = [];

// miles = distance / perMileX  =>  miles = 150000 / 750 = 200 Miles 

var perMileX = 750, miles = 200;

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
        inCountdown = false;
    }

    seconds -= 1000;

    if (seconds > -1000) {
        setTimeout(makeCountDown, 1000);
    } else {
        clearTimeout(makeCountDown);
        audios[22].play();
        audios[22].loop = true;
        setTimeout(animate, 500);
    }

}

var tempSpeed = 10;

function allPause() {

    for (let i = 1; i < 25; i++) {

        if (i == 9) {
            continue;
        }
        else {
            audios[i].pause();
        }
    }
}

var carCount = car.length;

function drawAllcAR() {

    for (let i = 0; i < car.length; i++) {
        car[index].draw();
    }

}

speed = 35;
var flagReal = 0;
var tempStatus = true;

// miles = distance / perMileX  =>  miles = 150000 / 750 = 200 Miles 

function animate() {

    document.getElementById('scoreSession').innerHTML = "Sessions' Highest Score : " + sessionStorage.highestScoreInfiniteDrive;
    document.getElementById('scoreAllTime').innerHTML = "Best Score : " + localStorage.highestScoreInfiniteDrive;
    if (score > 0) {
        document.getElementById('score').innerHTML = "Score : " + score;
    }

    putImage();

    // console.log(footPath[0].position.y, footPath[40].position.y, footPath.length - 1, footPath[footPath.length - 1].position.y)

    path();

    startLabel.position.y += speed;

    startLabel.draw();

    carBlast();
    flagforEnd = Colizon() * brake;

    if (flagforEnd != 0) {
        gameOver();
        allPause();
        givehighestScoreInfiniteDrive();
        document.getElementById('result').innerHTML = 'Practice Increases Perfection';
        document.getElementById('alertBox').style.display = 'block';
        return 0;
    }
    else if (flagforEnd == 0) {
        if (counterPlayPause == 0) {
            requestAnimationFrame(animate);
            // if (score < 300000 && speed <= 100) {
            //     requestAnimationFrame(animate);
            // } else {
            //     allPause();
            //     document.getElementById('result').innerHTML = 'Well Played';
            //     document.getElementById('alertBox').style.display = 'block';
            //     audios[6].play();
            // }
        }
    }

    let index = 0;
    for (index = 0; index < footPath.length; index++) {
        footPath[index].position.y += speed;
    }

    for (index = 0; index < footPath.length; index++) {
        footPath[index].draw();
    }

    for (index = 1; index < car.length; index++) {
        car[index].position.y += car[0].speed;
    }

    if (footPath[footPath.length - 1].position.y > 0) {
        let foot = [475, 625, 775, 925];
        for (let i = 40; i < footPath.length; i++) {
            // footPath[i].position.x = foot[i % 4];
            footPath[i].position.y = -100 - footPath[i].position.y;
            // console.log(i, footPath[i].position.y)
        }
    }

    if (car[car.length - 1].position.y - height > 0) {
        for (let i = 1; i < car.length; i++) {
            car[i].position.x = cars_x[Math.ceil(Math.random() * (cars_x.length - 1))];
            car[i].position.y = 0 + (i * -300);
        }
    }

    for (index = 0; index < car.length; index++) {
        car[index].draw();
    }

    score = Math.ceil((footPath[0].position.y - car[0].position.y) / 1);
    givehighestScoreInfiniteDrive();
    if (score > limit) {
        speed += 10;
        limit += 20000;
    }
}

function PausexResume() {
    if (inCountdown == false) {

        if (counterPlayPause == 0) {
            counterPlayPause = 1;
            audios[22].pause();
            document.getElementById('PauseResume').style.backgroundImage = "url('./UI and Button Images/play.png')";
        } else {
            counterPlayPause = 0;
            animate();

            if (counterMusicPlayPause == 0) {
                audios[22].play();
            }
            document.getElementById('PauseResume').style.backgroundImage = "url('./UI and Button Images/pause.png')";
        }
    }
}

function MusicOnOff() {
    if (inCountdown == false) {

        if (counterMusicPlayPause == 0) {
            counterMusicPlayPause = 1;
            audios[22].pause();
            document.getElementById('audioYesNo').style.backgroundImage = "url('./UI and Button Images/MUSICOFF.png')";
        } else {
            counterMusicPlayPause = 0;
            if (counterPlayPause == 0) {
                audios[22].play();
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
            audios[13].play();
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

    event.preventDefault();
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
    document.getElementById("InfiniteDriveVideo").style.display = "none";
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


var aboutVideo = document.getElementById('InfiniteDriveVideo');
aboutVideo.onended = function () {
    aboutVideo.pause();
    document.getElementById("InfiniteDriveVideo").style.display = "none";
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

if (parseInt(sessionStorage.infiniteDriveVideoStatus) != 1) {
    sessionStorage.infiniteDriveVideoStatus = 1;
} else {
    stopVideo();
}