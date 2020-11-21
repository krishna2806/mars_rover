var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
roverw = 90;
roverh = 100;
roverx = 10;
rovery = 10;
image=["mars.jpg","mars 2.jfif","mars 3.jfif","mars 4.jpg"]
random_no=Math.floor(Math.random()*4)
marsimage =image[random_no];
roverimage = "rover.png";
function add() {
    backgroundimgtag = new Image();
    backgroundimgtag.onload = set_background_image;
    backgroundimgtag.src = marsimage;

    roverimgtag = new Image();
    roverimgtag.onload = set_rover_image;
    roverimgtag.src = roverimage;
}
function set_background_image() {
    ctx.drawImage(backgroundimgtag, 0, 0, canvas.width, canvas.height)
}
function set_rover_image() {
    ctx.drawImage(roverimgtag, roverx, rovery, roverw, roverh)
}
window.addEventListener("keydown", keypressed)
function keypressed(e) {
    keyclicked = e.keyCode;
    if (keyclicked == '40') {
        down();
        console.log("down");
    }
    if (keyclicked == '39') {
        right();
        console.log("right");
    }
    if (keyclicked == '38') {
        up();
        console.log("up");
    }
    if (keyclicked == '37') {
        left();
        console.log("down")
    }
}

function up() {
    if (rovery > 0) {
        rovery = rovery - 10;
        console.log("x=" + roverx + ",y=" + rovery)
        set_background_image()
        set_rover_image()
    }
}
function down() {
    if (rovery < 500) {
        rovery = rovery + 10;
        console.log("x=" + roverx + ",y=" + rovery)
        set_background_image()
        set_rover_image()
    }
}
function left() {
    if (roverx > 0) {
        roverx = roverx - 10;
        console.log("x=" + roverx + ",y=" + rovery)
        set_background_image()
        set_rover_image()
    }
}
function right() {
    if (roverx <700) {
        roverx = roverx + 10;
        console.log("x=" + roverx + ",y=" + rovery)
        set_background_image()
        set_rover_image()
    }
}

