const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var colorArray = ['#b34348', '#5db343', '#6e43b3'];

function Ball(x,y,dx,dy,radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.gravity = 1;
    this.friction = .95;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
    }

    this.update = function () {
        if (this.y + this.radius + this.dy > window.innerHeight || this.y - this.radius - this.dy < 0) {
            this.dy = -this.dy * this.friction;
        } else {
            this.dy += this.gravity;
        }

        if (this.x + this.radius + this.dx > window.innerWidth || this.x - this.radius < radius) {
            this.dx = -this.dx;
        }
        
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var ballArray = [];

for (var i = 0; i < 100; i++) {
    var x = Math.random() * (canvas.width - radius * 2) + radius;
    var y = Math.random() * (canvas.height - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 10;
    var dy = (Math.random() - 0.5) * 1;
    var radius = (Math.random() + 1) * 15;
    // var gravity = 1;
    // var friction = .9;

    ballArray.push(new Ball(x, y, dx, dy, radius));
}


function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);

    
    for (var i = 0; i < ballArray.length; i++) {
        
        ballArray[i].update();
    }

    
}

animate();