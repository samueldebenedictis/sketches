import { Canvas } from 'components/canvas/Canvas';
import { NextPage } from 'next';
import p5 from 'p5';

const sketch = (p5: p5) => {
  const canvasDim = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
  const translateX = window.innerWidth > window.innerHeight ? (window.innerWidth - window.innerHeight) / 2 : 0;
  const translateY = window.innerHeight > window.innerWidth ? (window.innerHeight - window.innerWidth) / 2 : 0;
  const max = 8;
  const border = canvasDim / 10;
  const rectDim = (canvasDim - border) / max;
  class SpecialRect {
    x: number;
    y: number;
    t: number;
    r: number;
    constructor(posX: number, posY: number, t: number, r: number) {
      this.x = posX;
      this.y = posY;
      this.t = t;
      this.r = r;
    }
    draw() {
      p5.push();

      p5.translate(this.x, this.y);
      
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
        case 0: {
          const arc = (rectDim * 2) / 3;
          p5.arc(0, 0, arc, arc, 0, p5.HALF_PI);
          p5.arc(0, 0, arc, arc, 0, p5.HALF_PI);
          p5.arc(rectDim, rectDim, arc, arc, p5.PI, p5.HALF_PI * 3);
          p5.arc(0, rectDim, arc, arc, 3 * p5.HALF_PI, 0);
          p5.arc(rectDim, 0, arc, arc, p5.HALF_PI, p5.PI);
          break;
        }
        case 1: {
          p5.arc(rectDim / 2, 0, rectDim / 3, rectDim / 3, 0, p5.PI);
          p5.arc(0, rectDim / 2, rectDim / 3, rectDim / 3, 3 * p5.HALF_PI, p5.HALF_PI);
          p5.arc(rectDim, rectDim / 2, rectDim / 3, rectDim / 3, p5.HALF_PI, 3 * p5.HALF_PI);
          p5.arc(rectDim / 2, rectDim, rectDim / 3, rectDim / 3, p5.PI, 0);
          break;
        }
        case 2: {
          const arc = (rectDim * 4) / 3;
          p5.arc(0, 0, arc, arc, 0, p5.HALF_PI);
          p5.arc(rectDim, rectDim, arc, arc, p5.PI, p5.HALF_PI * 3);
          p5.arc(0, rectDim, arc, arc, 3 * p5.HALF_PI, 0);
          p5.arc(rectDim, 0, arc, arc, p5.HALF_PI, p5.PI);
          break;
        }
        case 3: {
          const shift = rectDim / 3;
          p5.line(0 + shift, 0, 0 + shift, 0 + rectDim);
          p5.line(0 + 2 * shift, 0, 0 + 2 * shift, 0 + rectDim);
          p5.line(0, 0 + shift, 0 + rectDim, 0 + shift);
          p5.line(0, 0 + 2 * shift, 0 + rectDim, 0 + 2 * shift);
          break;
        }
        case 4: {
          const arc1 = (rectDim * 4) / 3;
          const arc2 = (rectDim * 2) / 3;
          p5.arc(0, 0, arc1, arc1, 0, p5.HALF_PI);
          p5.arc(0, 0, arc2, arc2, 0, p5.HALF_PI);
          p5.arc(rectDim, rectDim, arc1, arc1, p5.PI, p5.HALF_PI * 3);
          p5.arc(rectDim, rectDim, arc2, arc2, p5.PI, p5.HALF_PI * 3);
          break;
        }
        case 5: {
          const arc = (rectDim * 2) / 3;
          const shift = rectDim / 3;
          p5.arc(0, 0, arc, arc, 0, p5.HALF_PI);
          p5.arc(0 + rectDim, 0, arc, arc, p5.HALF_PI, p5.PI);
          p5.line(0, 0 + 2 * shift, 0 + rectDim, 0 + 2 * shift);
          p5.line(0, 0 + 2 * shift, 0 + rectDim, 0 + 2 * shift);
          p5.arc(rectDim / 2, (rectDim / 3) * 2, rectDim / 3, rectDim / 3, p5.PI, 0);
          p5.line(shift, 2 * shift, shift, rectDim);
          p5.line(2 * shift, 2 * shift, 2 * shift, rectDim);
          break;
        }
        case 6: {
          const shift = rectDim / 3;
          p5.arc(rectDim / 2, 0, rectDim / 3, rectDim / 3, 0, p5.PI);
          p5.arc(rectDim / 2, rectDim, rectDim / 3, rectDim / 3, p5.PI, 0);
          p5.bezier(0, shift, 2 * shift, shift, shift, 2 * shift, rectDim, 2 * shift);
          p5.bezier(0, 2 * shift, 2 * shift, 2 * shift, shift, shift, rectDim, shift);
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
        rects.push(new SpecialRect(x * rectDim, y * rectDim, Math.floor(p5.random(0, 7)), Math.floor(p5.random(0, 5))));
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

const Otto: NextPage = () => <Canvas sketch={sketch} />;

export default Otto;
