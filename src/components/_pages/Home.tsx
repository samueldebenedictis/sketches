import FuseSearch from 'components/FuseSearch';
import React, { FC } from 'react';
import { HomePageTypes } from 'types/Pages';

const HomePage: FC<HomePageTypes> = ({ data }) => {
  const { sketches } = data;

  return (
    <div className=''>
      <div>
        <h1 pb={4}>samuel</h1>
      </div>
      <FuseSearch sketches={sketches} />
    </div>
  );
};

export default HomePage;
