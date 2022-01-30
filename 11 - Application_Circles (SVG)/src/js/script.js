//removeIf(production)
const { Circle, ctx } = require("./Circle");
//endRemoveIf(production)

//removeIf(production)----------------- Implementation ------------------//endRemoveIf(production)
let circles = [];

addEventListener('mousedown', function (e) {
    circles.push(new Circle(e.x, e.y));
})

function animate(){

    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.strokeStyle = "#000000";
    ctx.font = "bold 280pt Arial";
    ctx.textAlign = "center";
    ctx.strokeText(".CIRCLES", canvas.width/2, canvas.height/2);


    circles.forEach((circle, index, circles) => {
        circle.updatePosition(circle, index, circles);
    })
}

animate();