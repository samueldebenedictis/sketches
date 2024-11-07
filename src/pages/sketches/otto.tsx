import { Canvas } from 'components/canvas/Canvas';
import { NextPage } from 'next';
import p5 from 'p5';

const sketch = (p5: p5) => {
  p5.preload = () => {};

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
  };

  p5.draw = () => {
    p5.background(p5.color(30, 30, 30));
    p5.stroke(255);
    p5.noFill();
    const dim = 200;
    p5.rect(p5.width / 2, p5.height / 2, dim, dim);
    // for (let i = 0; i < 9; i++) {
    //   if (i == 5 || i == 3) {
    //     p5.stroke(255, 0, 0);
    //   } else {
    //     p5.stroke(255);
    //     p5.circle(p5.width / 2, p5.height / 2 + (dim / 8) * i, 10);
    //   }
    // }
    const x1 = p5.width / 2;
    const y1 = p5.height / 2 + (dim / 8) * 5;

    const x4 = p5.width / 2 + (dim / 8) * 5;
    const y4 = p5.height / 2;
    p5.circle(x1, y1, 10);
    p5.circle(x4, y4, 10);
    const xc = p5.width / 2 ;
    const yc = p5.height / 2 ;

    p5.circle(xc,yc, 15)
    p5.strokeWeight(15);
    p5.strokeCap('round');
    // p5.curve(
    //   p5.width / 2 + (-100),
    //   p5.height / 2 + (-100),

    //   p5.width / 2,
    //   p5.height / 2 +( (dim / 8) * 5),

    //   p5.width / 2 + ((dim / 8) * 5),
    //   p5.height / 2,

    //   p5.width / 2 + (-100),
    //   p5.height / 2 + (-100),
    // );


    const ax = x1 - xc;
    const ay = y1 - yc;
    const bx = x4 - xc;
    const by = y4 - yc;
    const q1 = ax * ax + ay * ay;
    const q2 = q1 + ax * bx + ay * by;
    const k2 = ((4 / 3) * (p5.sqrt(2 * q1 * q2) - q2)) / (ax * by - ay * bx);

    const x2 = xc + ax - k2 * ay;
    const y2 = yc + ay + k2 * ax;
    const x3 = xc + bx + k2 * by;
    const y3 = yc + by - k2 * bx;

    p5.bezier(
      x1,y1,x2,y2,x3,y3,x4,y4
    );

    p5.strokeWeight(1);
  };
};

const FirstCommit: NextPage = () => <Canvas sketch={sketch} />;

export default FirstCommit;
