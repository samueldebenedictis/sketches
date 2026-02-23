import { Canvas } from 'components/canvas/Canvas';
import { NextPage } from 'next';
import p5 from 'p5';
import chroma from 'chroma-js';

export const SKETCH_DATE = '2026-02-20';

const sketch = (p5: p5) => {
  const randomBetween = (max: number) => Math.floor(p5.random(0, max + 1));

  const canvasDim = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
  const translateX = window.innerWidth > window.innerHeight ? (window.innerWidth - window.innerHeight) / 2 : 0;
  const translateY = window.innerHeight > window.innerWidth ? (window.innerHeight - window.innerWidth) / 2 : 0;
  const max = 8;
  const border = Math.floor(canvasDim / 10);
  const rectDim = Math.floor((canvasDim - border) / max);

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  var rand1 = getRandomColor();
  var rand2 = getRandomColor();
  while (chroma.contrast(rand1, rand2) < 4.5) {
    rand2 = getRandomColor();
  }
  const allColors = chroma
    .scale([rand1, rand2])
    .mode('lch')
    .colors(5)
    .map(el => p5.color(el));
  const colors = allColors;
  const colorsBg = [p5.color(10, 10, 10), p5.color(255, 255, 255)];

  class SpecialRect {
    x: number;
    y: number;
    t: number;
    r: number;
    c1: number;
    c2: number;
    cb: number;
    constructor(posX: number, posY: number) {
      this.x = posX;
      this.y = posY;
      this.t = randomBetween(8);
      this.r = randomBetween(3);

      this.c1 = randomBetween(colors.length - 1);
      this.c2 = randomBetween(colors.length - 1);
      this.cb = randomBetween(colorsBg.length - 1);
      while (this.c1 === this.c2) {
        this.c2 = randomBetween(colors.length - 1);
      }
    }

    draw() {
      p5.push();

      p5.translate(this.x, this.y);

      p5.fill(colorsBg[this.cb]);
      p5.rect(0, 0, rectDim, rectDim);

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
        // circle
        case 0: {
          p5.fill(colors[this.c1]);
          p5.circle(rectDim / 2, rectDim / 2, rectDim / 1.5);
          break;
        }
        // semicircle
        case 1: {
          p5.fill(colors[this.c1]);
          p5.arc(0, 0, 2 * rectDim, 2 * rectDim, 0, p5.HALF_PI);

          break;
        }
        // rect
        case 2: {
          p5.fill(colors[this.c1]);

          p5.rect(0, 0, rectDim, rectDim / 2);
          p5.fill(colors[this.c2]);

          p5.rect(0, rectDim / 2, rectDim / 2, rectDim / 2);
          break;
        }
        // cross
        case 3: {
          p5.fill(colors[this.c1]);
          const d = rectDim / 8;
          const p1 = { x: d, y: d * 3 };
          const p2 = { x: d * 3, y: d };
          const p3 = { x: d * 7, y: d * 5 };
          const p4 = { x: d * 5, y: d * 7 };
          p5.quad(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
          const pp1 = { x: d, y: d * 5 };
          const pp2 = { x: d * 5, y: d };
          const pp3 = { x: d * 7, y: d * 3 };
          const pp4 = { x: d * 3, y: d * 7 };
          p5.quad(pp1.x, pp1.y, pp2.x, pp2.y, pp3.x, pp3.y, pp4.x, pp4.y);
          break;
        }
        // double semicircle
        case 4: {
          p5.fill(colors[this.c1]);
          p5.arc(0, 0, 2 * rectDim, 2 * rectDim, 0, p5.HALF_PI);
          p5.fill(colors[this.c2]);
          p5.arc(0, 0, rectDim, rectDim, 0, p5.HALF_PI);
          break;
        }
        // triangle
        case 5: {
          p5.fill(colors[this.c1]);
          p5.triangle(0, 0, 0, rectDim, rectDim, rectDim);
          break;
        }
        // double triangle
        case 6: {
          p5.fill(colors[this.c1]);
          p5.triangle(0, 0, 0, rectDim, rectDim, rectDim);
          p5.fill(colors[this.c2]);
          p5.triangle(0, 0, rectDim, 0, rectDim, rectDim);
          break;
        }
        // multisquare
        case 7: {
          p5.fill(colors[this.c1]);
          p5.rect(rectDim / 2, 0, rectDim / 2, rectDim / 2);
          p5.rect(0, rectDim / 2, rectDim / 2, rectDim / 2);
          p5.fill(colors[this.c2]);
          p5.rect(0, 0, rectDim / 2, rectDim / 2);
          p5.circle((3 * rectDim) / 4, rectDim / 4, rectDim / 4);
          p5.arc(rectDim / 2, rectDim / 2, rectDim, rectDim, 0, p5.HALF_PI);
          p5.fill(colorsBg[this.cb]);
          p5.circle(rectDim / 4, rectDim / 4, rectDim / 4);
          break;
        }
        // line
        case 8: {
          const r = randomBetween(1);
          if (r) {
            p5.fill(colors[this.c2]);
            p5.rect(0, 0, rectDim, rectDim);
          }
          const w = rectDim / 8;
          p5.fill(colors[this.c1]);
          p5.triangle(0, 0, w, 0, 0, w);
          p5.quad(2 * w, 0, 3 * w, 0, 0, 3 * w, 0, 2 * w);
          p5.quad(4 * w, 0, 5 * w, 0, 0, 5 * w, 0, 4 * w);
          p5.quad(6 * w, 0, 7 * w, 0, 0, 7 * w, 0, 6 * w);
          p5.quad(rectDim, 0, rectDim, w, w, rectDim, 0, rectDim);
          p5.quad(rectDim, 2 * w, rectDim, 3 * w, w * 3, rectDim, w * 2, rectDim);
          p5.quad(rectDim, 4 * w, rectDim, 5 * w, w * 5, rectDim, w * 4, rectDim);
          p5.quad(rectDim, 6 * w, rectDim, 7 * w, w * 7, rectDim, w * 6, rectDim);
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
    p5.background(p5.color(255, 255, 255));
    p5.fill(222);
    p5.noStroke();

    for (const r of rects) {
      r.draw();
    }
  };
};

const ColorTiles: NextPage = () => <Canvas sketch={sketch} />;

export default ColorTiles;
