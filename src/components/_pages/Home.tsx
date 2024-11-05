import Search from 'components/Search';
import React, { FC } from 'react';
import { HomePageTypes } from 'types/Pages';

const HomePage: FC<HomePageTypes> = ({ data }) => {
  const { sketches } = data;

  return (
    <>
      <div className="justify-self-center w-3/4">
        <div className="text-5xl bg-sky-500">
          <h1>samuel</h1>
        </div>
      </div>
      <div className="justify-self-center w-3/4">
        <Search sketches={sketches} />
      </div>
    </>
  );
};

export default HomePage;
