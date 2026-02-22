import Fuse from 'fuse.js';
import Link from 'next/link';
import React, { FC, useState } from 'react';

interface SketchInfo {
  name: string;
  date: string;
}

export interface FuseSearchProps {
  sketches: SketchInfo[];
}

const Search: FC<FuseSearchProps> = ({ sketches }) => {
  const [value, setValue] = useState<string>('');
  const fuse = new Fuse(sketches, {
    includeScore: true,
    keys: ['name'],
  });
  const filteredSketches = fuse.search(value);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  };

  return (
    <div className="pt-4 pb-4 text-lg">
      <div className="pb-4">
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          className=" text-gray-800 border-gray-400 border-solid border w-full rounded-md h-10 focus:border-gray-600 focus:outline-none pl-2"
        />
      </div>
      <div>
        <ul>
          {value !== ''
            ? filteredSketches.map(({ item }, i) => {
                return (
                  <li key={item.name + i} className="flex justify-between">
                    <Link href={`/sketches/${item.name}`}>{item.name.replaceAll('-', ' ')}</Link>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{formatDate(item.date)}</span>
                  </li>
                );
              })
            : sketches.map((sketch, i) => {
                return (
                  <li key={sketch.name + i} className="flex justify-between">
                    <Link href={`/sketches/${sketch.name}`}>{sketch.name.replaceAll('-', ' ')}</Link>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{formatDate(sketch.date)}</span>
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
};

export default Search;
