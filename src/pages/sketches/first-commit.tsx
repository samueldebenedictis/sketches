import { Draw, P5, P5Function, Setup } from '@react-p5/core';
import Sketch from 'components/Sketch';
import { NextPage } from 'next';

const palette = ['#845ec2', '#d65db1', '#ff6f91', '#ff9671', '#ffc75f', '#f9f871'];

const grid = () => {
  
}

function myEasingFunction(t: number) {
  return t * t * (3 - 2 * t);
}

function calcScale(p5: P5, t: number, m: number) {
  const tP = t % m;
  const a = m / 2;
  const p = p5.abs(a - tP) + a;
  const v = p5.lerp(1, 3, myEasingFunction(1 - p / m));
  return v;
}

const preload: P5Function = p5 => {};

const setup: Setup = p5 => {
  p5.angleMode('degrees');
};

const draw: Draw = p5 => {
  const maxDim = p5.width > p5.height ? p5.width : p5.height;
  p5.background(255);
  const fc = p5.frameCount;
  p5.fill(125);
  // p5.circle(fc, fc, 30);

  const c = p5.lerpColor(p5.color(palette[0]), p5.color(palette[1]), (p5.frameCount % 360) / 360);

  p5.background(c);

  p5.push();
  p5.noStroke();

  p5.translate(200, 200);
  const s = calcScale(p5, p5.frameCount, 720);
  const r = p5.lerp(0, 900, myEasingFunction((p5.frameCount % 360) / 360));
  p5.rotate(r);
  p5.scale(s);
  p5.fill(palette[4]);
  p5.ellipse(40, 0, 70, 50);
  p5.ellipse(-40, 0, 70, 50);
  p5.ellipse(0, 40, 50, 70);
  p5.ellipse(0, -40, 50, 70);
  p5.fill(palette[3]);
  p5.circle(0, 0, 50);

  p5.pop();
};

const FirstCommit: NextPage = () => <Sketch preload={preload} setup={setup} draw={draw} />;

export default FirstCommit;
