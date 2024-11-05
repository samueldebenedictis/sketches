import Fuse from 'fuse.js';
import React, { FC, useState } from 'react';

export interface FuseSearchProps {
  sketches: string[];
}

const Search: FC<FuseSearchProps> = ({ sketches }) => {
  const [value, setValue] = useState<string>('');
  const fuse = new Fuse(sketches, { includeScore: true });
  const filteredSketches = fuse.search(value);

  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} className='border-red-500 border-solid border-4 w-full'/>
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
                <li key={sketch + i}>
                  <a href={`/sketches/${sketch}`}>{sketch.replaceAll('-', ' ')}</a>
                </li>
              );
            })}
      </ul>
    </>
  );
};

export default Search;
