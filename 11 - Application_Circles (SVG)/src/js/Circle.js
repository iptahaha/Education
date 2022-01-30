//removeIf(production)
const { getRandomArbitrary, getRandomInt } = require("./utils");
const { isCollided, resolveCollision } = require("./collision");
//endRemoveIf(production)

const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");

class Circle {
    color = `hsla(${getRandomInt(0, 360)}, ${getRandomInt(30, 60)}%, ${getRandomInt(60, 80)}%, ${getRandomArbitrary(0.4, 1)})`
    radius = getRandomArbitrary(10, 50);
    quaziMass = (Math.sqrt(this.radius) * Math.PI) * 0.01;
    xSpeed = getRandomArbitrary(-2.5, 2.5);
    ySpeed = getRandomArbitrary(-2.5, 2.5);

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = {
            x: this.xSpeed,
            y: this.ySpeed
        }

        // code to draw each circle including color and start location
        this.drawCircle = function(){
            ctx.beginPath();
            ctx.strokeStyle = "hsl(0,0%,15%)";
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            // c.closePath();
            // c.restore();
        }
    }

    updatePosition(circle, index, circles){
        const { x, y, radius } = circle;

        //change direction on boundary collision
        if( x >= (innerWidth - radius) || x <= (0 + radius)){
            circle.velocity.x *= -1;
        }
        circle.x += circle.velocity.x;
        if( y >= (innerHeight - radius) || y <= (0 + radius)){
            circle.velocity.y *= -1;
        }
        circle.y += circle.velocity.y;

        //change direction on collision with other circles
        const self = circle;
        for (let i = 0; i < circles.length; i++) {
            if (index === i) continue; // ignore self
            const someCircle = circles[i];
            if (isCollided(self, someCircle)) {
                resolveCollision(self, someCircle);
            }
        }
        circle.drawCircle();
    }
}

//removeIf(production)
module.exports = { Circle, ctx };
//endRemoveIf(production)
