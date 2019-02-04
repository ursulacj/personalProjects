/*----- constants -----*/ 
const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

/*----- app's state (variables) -----*/ 

let x = innerWidth / 2;
let y = innerHeight - 50;
let radius = 30;
let dx = 10;
let color = randomRGBA();

function drawCircle() {
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = color;
    c.fillStyle = color;
    c.fill();

    if (canvas.width < 500) {
        radius = 20;
    } else {
        radius = 30;
    }
};

function drawTaco() {
    c.fillRect(400, 15, 55, 135);
    c.fillStyle = "red";
};



function drawWork() {
    c.fillRect(250, 20, 50, 100);
    c.fillStyle = 'white';
    c.fill();
}

/*----- cached element references -----*/ 



/*----- event listeners -----*/ 

window.addEventListener('resize', function() {
   canvas.width = this.innerWidth;
   canvas.height = this.innerHeight;

   x = this.innerWidth / 2;
   y = this.innerHeight - 50;

    if (canvas.width < 500 || canvas.height < 150) {
    radius = 20;
} 

})

window.addEventListener('keydown', arrowKey, true);
window.setInterval(init, 10);

/*----- functions -----*/

function init() {
    drawCircle();
    drawTaco();
    drawWork(); 
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



