import Fuse from 'fuse.js';
import Link from 'next/link';
import React, { FC, useState } from 'react';

export interface FuseSearchProps {
  sketches: string[];
}

const Search: FC<FuseSearchProps> = ({ sketches }) => {
  const [value, setValue] = useState<string>('');
  const fuse = new Fuse(sketches, { includeScore: true });
  const filteredSketches = fuse.search(value);

  return (
    <div className="pt-4 pb-4 text-lg">
      <div className="pb-4">
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          className="border-gray-400 border-solid border w-full rounded-md h-10 focus:border-gray-600 focus:outline-none pl-2"
        />
      </div>
      <div>
        <ul>
          {value !== ''
            ? filteredSketches.map(({ item }, i) => {
                return (
                  <li key={item + i}>
                    <Link href={`/sketches/${item}`}>{item.replaceAll('-', ' ')}</Link>
                  </li>
                );
              })
            : sketches.map((sketch, i) => {
                return (
                  <li key={sketch + i}>
                    <Link href={`/sketches/${sketch}`}>{sketch.replaceAll('-', ' ')}</Link>
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
};

export default Search;
