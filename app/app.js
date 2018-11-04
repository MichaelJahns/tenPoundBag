var score = 0;
function scoreUP(){
    score ++;
    document.getElementById('scoreCounter').innerHTML = score;
}
//++++++++++
//Game Timer
var gameLength = 60 * 3 * 1000;
var elaspedTime = 0;
var timeRemaining = gameLength;
var gameInProgress = false;
var startTime;

var sunZenith = false;

var canvasWidth = 300;
var canvasHeight = 220;


function startGame(){
    if(!gameInProgress){
        startTime = Date.now();
    }
    gameInProgress = true;
    timer = setInterval(tick, 10)
}

function tick(){
    elaspedTime = Date.now() - startTime;
    timeRemaining = gameLength - elaspedTime;

    document.getElementById('timer').innerHTML = timeRemaining;

    moveSun();

    if(timeRemaining < 0){
        alert('Game Over');
    }
}

var xIncrement = canvasWidth / (gameLength/10);
var yIncrement = canvasHeight / (gameLength/10)/2;
var sunY = 100;
var sunX = 0;

function moveSun(){
    clearMap()
    sunX += xIncrement
    if(sunZenith === false){
        sunY -=yIncrement
    }
    if(sunY < 50){
        sunZenith = true
    }
    if(sunZenith === true){
        sunY +=yIncrement
    }
    drawSun();
}

var startEl = document.getElementById('startGame')
startEl.addEventListener('click', startGame);