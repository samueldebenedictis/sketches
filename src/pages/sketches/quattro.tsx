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
  class SpecialRect {
    x: number;
    y: number;
    t: number;
    constructor(posX: number, posY: number, t: number) {
      this.x = posX;
      this.y = posY;
      this.t = t;
    }
    draw() {
      if (this.t == 0) {
        p5.arc(this.x, this.y, rectDim, rectDim, 0, p5.HALF_PI);
        p5.arc(this.x + rectDim, this.y + rectDim, rectDim, rectDim, p5.PI, p5.HALF_PI * 3);
      }
      if (this.t == 1) {
        p5.arc(this.x + rectDim, this.y, rectDim, rectDim, p5.HALF_PI, p5.PI);
        p5.arc(this.x, this.y + rectDim, rectDim, rectDim, p5.HALF_PI * 3, 0);
      }
      if (this.t == 2) {
        p5.line(this.x + rectDim / 2, this.y, this.x + rectDim / 2, this.y + rectDim);
        p5.line(this.x, this.y + rectDim / 2, this.x + rectDim, this.y + rectDim / 2);
      }
    }
  }

  const rects: SpecialRect[] = [];

  p5.preload = () => {};

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    for (let x = 0; x < max; x++) {
      for (let y = 0; y < max; y++) {
        rects.push(new SpecialRect(x * rectDim, y * rectDim, Math.floor(p5.random(0, 3))));
      }
    }
    p5.noLoop();
  };

  p5.draw = () => {
    p5.translate(translateX + border / 2, translateY + border / 2);
    p5.background(p5.color(30, 30, 30));
    p5.stroke(222);
    p5.strokeWeight(canvasDim / 100);
    p5.noFill();

    for (const r of rects) {
      r.draw();
    }
    p5.strokeWeight(canvasDim / 80);
    p5.rect(0, 0, canvasDim - border, canvasDim - border);
  };
};

const Quattro: NextPage = () => <Canvas sketch={sketch} />;

export default Quattro;
