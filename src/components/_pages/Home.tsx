import Search from 'components/Search';
import React, { FC, useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export interface HomePageProps {
  data: {
    sketches: string[];
  };
}

const HomePage: FC<HomePageProps> = ({ data }) => {
  const { sketches } = data;
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.classList.add('dark');
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <div className='flex justify-center'>
      <div className="sm:w-3/4 w-full p-4">
        <div className="text-2xl font-bold justify-between items-center flex">
          <h1>samuel</h1>
          {theme === 'dark' ? (
            <button>
              <FaSun onClick={toggleTheme} size={20} />
            </button>
          ) : (
            <button>
              <FaMoon onClick={toggleTheme} size={20} />
            </button>
          )}
        </div>
        <div>
          <Search sketches={sketches} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
