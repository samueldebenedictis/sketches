import { Input, InputProps, List, ListItem, SystemStyleObject } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
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
      <Input mb={4} borderColor={'gray.500'} value={value} onChange={e => setValue(e.target.value)} />
      <List>
        {value !== ''
          ? filteredSketches.map(({ item }, i) => {
              return (
                <ListItem key={item + i}>
                  <Link href={`/sketches/${item}`}>{item.replaceAll('-', ' ')}</Link>
                </ListItem>
              );
            })
          : sketches.map((sketch, i) => {
              return (
                <ListItem key={sketch + i} fontSize="2xl">
                  <Link href={`/sketches/${sketch}`}>{sketch.replaceAll('-', ' ')}</Link>
                </ListItem>
              );
            })}
      </List>
    </>
  );
};

export default FuseSearch;
