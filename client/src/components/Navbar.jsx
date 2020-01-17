import React from 'react';
import { useDarkMode } from "../hooks/useDarkMode";


const Navbar = () => {
  const [darkMode, toggleMode] = useDarkMode(false);

  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };

  return (
    <nav className="navbar"
    style={{
      backgroundColor: 'cyan',
      height: '20vh'
    }}>
      <h1>Women's FIFA Cup Athletes</h1>
      <button onClick={toggleMode}>
          {darkMode ? 'darkside' : 'let there be light'}
      </button>
    </nav>
  );
};

export default Navbar;