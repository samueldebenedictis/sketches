import Search from 'components/Search';
import React, { FC, useEffect } from 'react';
import { HomePageTypes } from 'types/Pages';

const HomePage: FC<HomePageTypes> = ({ data }) => {
  const { sketches } = data;

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }


  return (
    <div className="justify-self-center w-3/4">
      <div className="text-5xl bg-sky-500 dark:bg-red-500">
        <h1>samuel</h1>
        <button onClick={toggleTheme} className='h-4 dark:border-blue-700 border-red-500 border-solid border-4 w-full'/>
      </div>
      <div>
        <Search sketches={sketches} />
      </div>
    </div>
  );
};

export default HomePage;
