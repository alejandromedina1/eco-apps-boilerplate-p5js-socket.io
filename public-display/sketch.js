const localURL = `http://${window.location.hostname}:8080`;

let socket = io(localURL, {
    path: '/real-time'
});

let red = 255;
let green = 0;
let blue = 0
function setup() {
    frameRate(60);
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(0);
    fill(red, green, blue)
    ellipse(100, 100, 100, 100)
}

socket.on('sending-colors', ellipseColors =>{
    red = ellipseColors.red;
    green = ellipseColors.green
})

