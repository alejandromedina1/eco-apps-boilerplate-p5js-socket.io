const localURL = `http://${window.location.hostname}:8080`;

let socket = io(localURL, {
    path: '/real-time'
});


const b1 = {
    x: 200,
    y: 200,
    width: 200,
    height: 50,
}

function setup() {
    frameRate(60);
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(0);
    fill(0, 255, 0)
    rect(b1.x, b1.y, b1.width, b1.height)
}

function mousePressed() {

    if (b1.x < mouseX && mouseX < b1.x + b1.width && b1.y < mouseY && mouseY < b1.y + b1.height) {
        const ellipseColor = {
            red: 0,
            green: 255
        }
        socket.emit('change-color', ellipseColor)
        console.log('mensaje enviado')
    }
}