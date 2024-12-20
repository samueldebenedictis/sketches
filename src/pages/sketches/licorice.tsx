import { Canvas } from 'components/canvas/Canvas';
import { NextPage } from 'next';
import p5 from 'p5';

const sketch = (p5: p5) => {
  const canvasDim = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
  const translateX = window.innerWidth > window.innerHeight ? (window.innerWidth - window.innerHeight) / 2 : 0;
  const translateY = window.innerHeight > window.innerWidth ? (window.innerHeight - window.innerWidth) / 2 : 0;

  const max = 16;
  class Arc {
    radius: number;
    radius2: number;
    rotation: number;
    length: number;

    constructor(radius: number, rotation: number, lenght: number) {
      this.radius = radius;
      this.rotation = rotation;
      this.radius2 = radius + canvasDim / max / 2;
      this.length = lenght;
    }

    draw(p5: p5) {
      p5.push();

      p5.translate(canvasDim / 2, canvasDim / 2);
      p5.rotate(this.rotation);

      p5.arc(0, 0, this.radius, this.radius, 0, this.length);
      p5.arc(0, 0, this.radius2, this.radius2, 0, this.length);

      p5.arc(
        (this.radius + this.radius2) / 4,
        0,
        (this.radius2 - this.radius) / 2,
        (this.radius2 - this.radius) / 2,
        p5.PI,
        2 * p5.PI
      );

      p5.push();

      p5.rotate(this.length);

      p5.arc(
        (this.radius + this.radius2) / 4,
        0,
        (this.radius2 - this.radius) / 2,
        (this.radius2 - this.radius) / 2,
        2 * p5.PI,
        p5.PI
      );
      p5.pop();

      p5.pop();
      this.rotation += 1 / this.radius;
    }
  }
  const arcs: Arc[] = [];

  p5.preload = () => {};

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    for (let i = 0; i < max; i = i + 2) {
      arcs.push(
        new Arc((canvasDim / 1.1 / max) * (i + 1), p5.random() * 2 * p5.PI, p5.PI + p5.random() * p5.PI - p5.PI / max)
      );
    }
    // p5.noLoop();
  };

  p5.draw = () => {
    p5.translate(translateX, translateY);
    p5.background(p5.color(30, 30, 30));
    p5.stroke(222);
    p5.strokeWeight(canvasDim / (max * 10));
    p5.noFill();

    for (const a of arcs) {
      a.draw(p5);
    }

    // p5.rect(0, 0, canvasDim, canvasDim);
  };
};

const Licorice: NextPage = () => <Canvas sketch={sketch} />;

export default Licorice;
