var canvas = document.getElementById("myCanvas")

var ctx = canvas.getContext("2d");


//sun
function drawSun(){
ctx.clearRect(0,0,0,0);
ctx.beginPath();
ctx.arc(sunX, sunY, 10, 0, 2*Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();
}
function drawBackdrop(){
//sky
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300, 0);
ctx.lineTo(300, 220);
ctx.lineTo(0, 220);
ctx.lineTo(0, 0);
ctx.fillStyle = 'lightblue'
ctx.fill();
ctx.stroke();

//the behind hill
ctx.beginPath();
ctx.moveTo(0, 120);
ctx.lineTo(50, 100);
ctx.lineTo(140, 120);
ctx.lineTo(190, 110);
ctx.lineTo(240, 120);
ctx.lineTo(300, 120);
ctx.lineTo(300, 220);
ctx.lineTo(0, 220);
ctx.lineTo(0, 120);
ctx.fillStyle = '#41980a';
ctx.fill();
ctx.stroke();

//the middle hill
ctx.beginPath();
ctx.moveTo(0, 110);
ctx.lineTo(100, 140);
ctx.lineTo(300, 120);
ctx.lineTo(300, 220);
ctx.lineTo(0, 220);
ctx.lineTo(0, 120);
ctx.fillStyle = '#138510';
ctx.fill();
ctx.stroke();

//the front hill
ctx.beginPath();
ctx.moveTo(0, 140);
ctx.lineTo(100, 120);
ctx.lineTo(150, 130);
ctx.lineTo(300, 120);
ctx.lineTo(300, 220);
ctx.lineTo(0, 220);
ctx.lineTo(0, 160);
ctx.fillStyle = "#136d15";
ctx.fill();
ctx.stroke();
}
function clearMap(){
    ctx.beginPath();
    ctx.clearRect(0 , 0, 300, 220)

    drawBackdrop();

}
clearMap();
drawSun();
drawBackdrop();
