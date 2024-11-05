import Fuse from 'fuse.js';
import React, { FC, useState } from 'react';

export interface FuseSearchProps extends InputProps {
  sketches: string[];
}

const FuseSearch: FC<FuseSearchProps> = ({ sketches }) => {
  const [value, setValue] = useState<string>('');
  const fuse = new Fuse(sketches, { includeScore: true });
  const filteredSketches = fuse.search(value);

  return (
    <>
      <input mb={4} borderColor={'gray.500'} value={value} onChange={e => setValue(e.target.value)} />
      <ul>
        {value !== ''
          ? filteredSketches.map(({ item }, i) => {
              return (
                <li key={item + i}>
                  <a href={`/sketches/${item}`}>{item.replaceAll('-', ' ')}</a>
                </li>
              );
            })
          : sketches.map((sketch, i) => {
              return (
                <li key={sketch + i} fontSize="2xl">
                  <a href={`/sketches/${sketch}`}>{sketch.replaceAll('-', ' ')}</a>
                </li>
              );
            })}
      </ul>
    </>
  );
};

export default FuseSearch;
