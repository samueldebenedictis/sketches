import { Canvas } from 'components/canvas/Canvas';
import { NextPage } from 'next';
import p5 from 'p5';

const sketch = (p5: p5) => {
  const boxes: any[] = [];

  const dim = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
  const translateX = window.innerWidth > window.innerHeight ? (window.innerWidth - window.innerHeight) / 2 : 0;
  const translateY = window.innerHeight > window.innerWidth ? (window.innerHeight - window.innerWidth) / 2 : 0;
  const boxDim = dim / 40;
  const radius = dim / 2.3;

  const noiseLevel = 255;
  const noiseScale = 0.02;

  const distance = (x: number, y: number, c: number) => p5.sqrt(p5.pow(c / 2 - x, 2) + p5.pow(c / 2 - y, 2));

  p5.preload = () => {};

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    for (let x = 0; x < dim; x += boxDim) {
      for (let y = 0; y < dim; y += boxDim) {
        if (distance(x, y, dim) < radius) {
          boxes.push({ x, y });
        }
      }
    }
  };

  p5.draw = () => {
    p5.translate(translateX, translateY);
    p5.background(p5.color(30, 30, 30));

    p5.noStroke();

    for (const b of boxes) {
      const nx = noiseScale * b.x;
      const ny = noiseScale * b.y;
      const nt = noiseScale * 1 * p5.frameCount;

      const nn = p5.noise(nx, ny, nt);

      const c = noiseLevel * nn;

      p5.fill(c);
      p5.circle(b.x, b.y, boxDim * 1.1 * nn);
    }
  };
};

const FirstCommit: NextPage = () => <Canvas sketch={sketch} />;

export default FirstCommit;
