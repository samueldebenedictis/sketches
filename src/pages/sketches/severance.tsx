import { Canvas } from 'components/canvas/Canvas';
import { NextPage } from 'next';
import p5 from 'p5';

const sketch = (p5: p5) => {
  const canvasDim = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
  const translateX = window.innerWidth > window.innerHeight ? (window.innerWidth - window.innerHeight) / 2 : 0;
  const translateY = window.innerHeight > window.innerWidth ? (window.innerHeight - window.innerWidth) / 2 : 0;
  const max = 10;
  const border = canvasDim / 10;
  const rectDim = (canvasDim - border) / max;

  class Number {
    x: number
    y: number
    v: number
    k: number
    constructor(x: number, y: number, v: number) {
      this.x = x
      this.y = y
      this.v = v
      this.k = (x + v) * 0.01
    }
    
    draw() {
      // p5.strokeWeight(p5.noise(this.x, this.y, this.k));

      p5.textSize(p5.noise(this.x, this.y, this.k)*50)
      p5.text(this.v, this.x, this.y, this.x+(1000))
      this.k+=0.01
    }
  }

  const numbers: Number[] = [];

  p5.preload = () => { };

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    for (let x = 0; x < max; x++) {
      for (let y = 0; y < max; y++) {
        numbers.push(new Number(x * rectDim, y * rectDim, Math.floor(p5.random(0, 10))));
      }
    }
    // p5.noLoop();
  };

  p5.draw = () => {
    p5.translate(translateX + border / 2, translateY + border / 2);
    p5.background(p5.color(30, 30, 30));
    p5.stroke(222);
    p5.strokeWeight(canvasDim / 1000);
    p5.noFill();

    p5.push()
    p5.translate(border / 2, border / 2);
    for (const r of numbers) {
      r.draw();
    }
    p5.pop()

    p5.strokeWeight(canvasDim / 100);
    p5.rect(0, 0, canvasDim - border, canvasDim - border);
  };
};

const Quattro: NextPage = () => <Canvas sketch={sketch} />;

export default Quattro;
