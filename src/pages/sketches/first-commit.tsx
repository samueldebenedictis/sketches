import { ColorValue, Draw, P5, P5Function, Setup } from '@react-p5/core';
import Sketch from 'components/Sketch';
import { NextPage } from 'next';

const width: number = 2048;
const height: number = 2048;
const dimensions: number[] = [width, height];
const padding: number[] = [40];
const background: ColorValue = [255, 253, 252];


const preload: P5Function = p5 => {};

const setup: Setup = p5 => {
  
};

const draw: Draw = p5 => {
  p5.background(255)
  const fc = p5.frameCount
  p5.fill(125)
  p5.circle(fc,fc,30)
};

const BackgroundImages: NextPage = () => (
  <Sketch
    preload={preload}
    setup={setup}
    draw={draw}
    dimensions={dimensions}
    padding={padding}
    background={background}
  />
);

export default BackgroundImages;
