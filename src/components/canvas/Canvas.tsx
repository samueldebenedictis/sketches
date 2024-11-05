import P5 from 'p5';
import { useEffect, useId } from 'react';

type SketchCleanup = { cleanup: () => void };

const visualisation = ({ sketch }: { sketch: (p5: P5) => void }): SketchCleanup => {
  const p5 = new P5(sketch);

  return {
    cleanup: p5.remove,
  };
};

export const WorkingDemonstration = ({ sketch }: { sketch: (p5: P5) => void }) => {
  const id = useId();

  useEffect(() => {
    const { cleanup } = visualisation({
      sketch,
    });

    return cleanup; // This removes the canvas when the component is rerendered.
  });

  return <div id={id}></div>;
};

export default WorkingDemonstration;
