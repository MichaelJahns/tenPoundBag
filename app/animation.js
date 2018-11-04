function moveLeft() {
    scoreUP()
}
function moveRight() {
    scoreUP()
}

document.onkeydown = checkKey;

function checkKey(event) {
    event = event || window.event;

    if (event.keyCode == '39') {
        moveRight()
    }
    else if (event.keyCode == '37') {
       moveLeft()
    }
}