/*----- constants -----*/ 
const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth * .85;
    canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

/*----- app's state (variables) -----*/ 

let x = canvas.width / 2;
let y = innerHeight - 50;
let radius = 30;
let dx = 25;

let color = randomRGBA();

var rx = Math.round(Math.random() * innerWidth);
var ry = 20;
let rdy = Math.random() + .0001;
var rWidth = 55;

/*----- cached element references -----*/ 



/*----- event listeners -----*/ 

window.addEventListener('resize', function() {
   canvas.width = this.innerWidth * .85;
   canvas.height = this.innerHeight;

   x = canvas.width / 2;
   y = this.innerHeight - 50;

    if (canvas.width < 500 || canvas.height < 150) {
    radius = 20;
} 

})

window.addEventListener('keydown', arrowKey, true);
window.setInterval(init, 20);

/*----- functions -----*/

function spicyBoy() {
   
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.fillStyle = 'white';
    c.fill();

    if (canvas.width < 500 || canvas.height < 500) {
        radius = 20;
    } else {
        radius = 30;
    }

    taco();
};


function taco() {

    requestAnimationFrame(taco);

    c.beginPath();
    c.fillRect(rx, ry, rWidth, 135);
    c.fillStyle = color;
    
    ry += rdy;

    if(ry > canvas.height) {
        return;
    }
};

function work() {
    c.fillRect(250, 20, 50, 80);
    c.fillStyle = color; 
}

function init() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    spicyBoy();
    work(); 
}

function randomRGBA() {
    let a = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let c = Math.round(Math.random() * 255);
    return 'rgba('+ a + ',' + b + ',' + c + ', 1' + ')';
}

function arrowKey(event) {
    switch(event.keyCode){
        case 37: x -= dx;
            break;
        case 39: x += dx;
            break;
    };
};

