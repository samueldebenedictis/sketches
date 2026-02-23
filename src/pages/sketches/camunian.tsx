import { Canvas } from 'components/canvas/Canvas';
import { NextPage } from 'next';
import p5 from 'p5';

export const SKETCH_DATE = '2026-02-20';

const sketch = (p5: p5) => {
  const randomBetween = (max: number) => Math.floor(p5.random(0, max + 1));

  const canvasDim = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
  const translateX = window.innerWidth > window.innerHeight ? (window.innerWidth - window.innerHeight) / 2 : 0;
  const translateY = window.innerHeight > window.innerWidth ? (window.innerHeight - window.innerWidth) / 2 : 0;
  const max = 3;
  const border = Math.floor(canvasDim / 10);
  const rectDim = Math.floor((canvasDim - border) / max);
  const dist = Math.floor(rectDim / 4);
  class SpecialRect {
    x: number;
    y: number;
    t: number;
    r: number;
    c: number;
    constructor(posX: number, posY: number) {
      this.x = posX;
      this.y = posY;
      this.t = randomBetween(4);
      this.r = randomBetween(3);
      console.log(this.r);
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
        case 1:
          // rotate 2/4
          p5.rotate(p5.PI);
          p5.translate(-rectDim, -rectDim);
          break;
        case 2:
          // rotate 3/4
          p5.rotate(3 * p5.HALF_PI);
          p5.translate(-rectDim, 0);
          break;
        case 3:
          // rotate 4/4
          break;
      }

      switch (this.t) {
        // 1,5,9
        case 0: {
          p5.circle(dist, dist, dist);
          p5.circle(1.5 * dist, 1.5 * dist, dist);
          p5.circle(2 * dist, 2 * dist, dist);
          p5.circle(2.5 * dist, 2.5 * dist, dist);
          p5.circle(3 * dist, 3 * dist, dist);

          p5.fill(p5.color(30, 30, 30));
          p5.circle(dist, 2 * dist, dist);
          p5.circle(2 * dist, dist, dist);
          p5.circle(3 * dist, 2 * dist, dist);
          p5.circle(3 * dist, 2 * dist, dist);
          p5.circle(2 * dist, 3 * dist, dist);

          break;
        }
        // 1,5
        case 1: {
          p5.circle(dist, dist, dist);
          p5.circle(1.5 * dist, 1.5 * dist, dist);
          p5.circle(2 * dist, 2 * dist, dist);

          p5.fill(p5.color(30, 30, 30));
          p5.circle(dist, 2 * dist, dist);
          p5.circle(2 * dist, dist, dist);

          break;
        }
        // 1,5,3
        case 2: {
          p5.circle(dist, dist, dist);
          p5.circle(1.5 * dist, 1.5 * dist, dist);
          p5.circle(2 * dist, 2 * dist, dist);
          p5.circle(2.5 * dist, 1.5 * dist, dist);
          p5.circle(3 * dist, dist, dist);

          p5.fill(p5.color(30, 30, 30));
          p5.circle(dist, 2 * dist, dist);
          p5.circle(2 * dist, dist, dist);
          p5.circle(3 * dist, 2 * dist, dist);
          p5.circle(3 * dist, 2 * dist, dist);

          break;
        }
        // 1,5,7,9
        case 3: {
          p5.circle(dist, dist, dist);
          p5.circle(1.5 * dist, 1.5 * dist, dist);
          p5.circle(2 * dist, 2 * dist, dist);
          p5.circle(2.5 * dist, 2.5 * dist, dist);
          p5.circle(3 * dist, 3 * dist, dist);
          p5.circle(1.5 * dist, 2.5 * dist, dist);
          p5.circle(dist, 3 * dist, dist);

          p5.fill(p5.color(30, 30, 30));
          p5.circle(dist, 2 * dist, dist);
          p5.circle(2 * dist, dist, dist);
          p5.circle(3 * dist, 2 * dist, dist);
          p5.circle(3 * dist, 2 * dist, dist);
          p5.circle(2 * dist, 3 * dist, dist);

          break;
        }
        // 1,5,7,9
        case 4: {
          p5.circle(dist, dist, dist);
          p5.circle(1.5 * dist, 1.5 * dist, dist);
          p5.circle(2 * dist, 2 * dist, dist);
          p5.circle(2.5 * dist, 2.5 * dist, dist);
          p5.circle(3 * dist, 3 * dist, dist);
          p5.circle(1.5 * dist, 2.5 * dist, dist);
          p5.circle(dist, 3 * dist, dist);
          p5.circle(2.5 * dist, 1.5 * dist, dist);
          p5.circle(3 * dist, dist, dist);

          p5.fill(p5.color(30, 30, 30));
          p5.circle(dist, 2 * dist, dist);
          p5.circle(2 * dist, dist, dist);
          p5.circle(3 * dist, 2 * dist, dist);
          p5.circle(3 * dist, 2 * dist, dist);
          p5.circle(2 * dist, 3 * dist, dist);

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

const Camunian: NextPage = () => <Canvas sketch={sketch} />;

export default Camunian;
