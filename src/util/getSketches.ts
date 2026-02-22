import fs from 'fs/promises';
import path from 'path';

interface SketchInfo {
  name: string;
  date: string;
}

const getSketches = async (): Promise<SketchInfo[]> => {
  const sketches: SketchInfo[] = [];
  const sketchesDir = path.join(process.cwd(), '/src/pages/sketches');

  try {
    const fileArray = await fs.readdir(sketchesDir);

    const sketchNames = fileArray
      .filter(file => file.endsWith('.tsx'))
      .map(file => path.parse(file).name.split('.')[0]);

    for (const sketchName of sketchNames) {
      try {
        const sketchModule = await import(`../pages/sketches/${sketchName}`);
        const date = sketchModule.SKETCH_DATE || new Date().toISOString().split('T')[0];

        sketches.push({
          name: sketchName,
          date: date,
        });
      } catch (error) {
        console.warn(`Could not import sketch ${sketchName}:`, error);
        sketches.push({
          name: sketchName,
          date: new Date().toISOString().split('T')[0],
        });
      }
    }
  } catch (error) {
    console.error('Error reading sketches directory:', error);
  }

  return sketches;
};

export default getSketches;
