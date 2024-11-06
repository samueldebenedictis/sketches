import Search from 'components/Search';
import React, { FC, useEffect } from 'react';
import { IconBase } from 'react-icons';
import { HomePageTypes } from 'types/Pages';
import { FaRegMoon, FaRegSun } from "react-icons/fa"

const HomePage: FC<HomePageTypes> = ({ data }) => {
  const { sketches } = data;

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    console.log(document.body.classList)
  }


  return (
    <div className="justify-self-center w-3/4">
      <div className="p-4 text-5xl bg-sky-500 dark:bg-red-500 justify-between items-center flex">
        <h1>samuel</h1>
        <button>
          <FaRegMoon onClick={toggleTheme} size={20}/>
        </button>
      </div>
      <div>
        <Search sketches={sketches} />
      </div>
    </div>
  );
};

export default HomePage;
