import { Canvas } from 'components/canvas/Canvas';
import { NextPage } from 'next';
import p5 from 'p5';

const sketch = (p5: p5) => {
  const randomBetween = (max: number) => Math.floor(p5.random(0, max + 1));

  const canvasDim = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
  const translateX = window.innerWidth > window.innerHeight ? (window.innerWidth - window.innerHeight) / 2 : 0;
  const translateY = window.innerHeight > window.innerWidth ? (window.innerHeight - window.innerWidth) / 2 : 0;
  const max = 5;
  const border = Math.floor(canvasDim / 10);
  const rectDim = Math.floor((canvasDim - border) / max);
  class SpecialRect {
    x: number;
    y: number;
    t: number;
    r: number;
    c: number;
    constructor(posX: number, posY: number) {
      this.x = posX;
      this.y = posY;
      this.t = randomBetween(5);
      this.r = randomBetween(4);
      this.c = randomBetween(10);
    }
    draw() {
      p5.push();

      p5.translate(this.x, this.y);

      if (this.c === 1) {
        p5.fill(222, 0, 0);
      }

      switch (this.r) {
        case 0:
          // rotate 1/4
          p5.rotate(p5.HALF_PI);
          p5.translate(0, -rectDim);
          break;
        case 2:
          // rotate 2/4
          p5.rotate(p5.PI);
          p5.translate(-rectDim, -rectDim);
          break;
        case 3:
          // rotate 3/4
          p5.rotate(3 * p5.HALF_PI);
          p5.translate(-rectDim, 0);
          break;
        case 4:
          // rotate 4/4
          break;
      }

      switch (this.t) {
        // same direction
        case 0: {
          p5.arc(rectDim / 2, rectDim / 2, rectDim, rectDim, p5.PI, 0);
          p5.arc(rectDim / 2, rectDim, rectDim, rectDim, p5.PI, 0);
          break;
        }
        // circle
        case 1: {
          p5.arc(rectDim / 2, rectDim / 2, rectDim, rectDim, 0, 2 * p5.PI);
          break;
        }
        // opposite
        default: {
          p5.arc(0, rectDim / 2, rectDim, rectDim, 3 * p5.HALF_PI, p5.HALF_PI);
          p5.arc(rectDim, rectDim / 2, rectDim, rectDim, p5.HALF_PI, 3 * p5.HALF_PI);
          break;
        }
      }

      p5.pop();
    }
  }

  const rects: SpecialRect[] = [];

  p5.preload = () => {};

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    for (let x = 0; x < max; x++) {
      for (let y = 0; y < max; y++) {
        rects.push(new SpecialRect(x * rectDim, y * rectDim));
      }
    }
    p5.noLoop();
  };

  p5.draw = () => {
    p5.translate(translateX + border / 2, translateY + border / 2);
    p5.background(p5.color(30, 30, 30));
    p5.fill(222);
    p5.noStroke();

    for (const r of rects) {
      r.draw();
    }
  };
};

const Esse: NextPage = () => <Canvas sketch={sketch} />;

export default Esse;
