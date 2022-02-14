export class Circle {
  x: number;

  y: number;

  color: string;

  canvas: HTMLCanvasElement;

  constructor(x, y, canvas, color) {
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.color = color;
    this.drawCircle(x, y, color);
  }

  drawCircle(x, y, color) {
    const ctx = this.canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
  }

  updatePosition(circle, newColor) {
    circle.color = newColor;
    circle.y += 100;
    const { x, y, color } = circle;
    this.drawCircle(x, y, color);
  }
}
