import React from 'react';
import { useDarkMode } from "../hooks/useDarkMode";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, toggleMode] = useDarkMode("dark", false);

  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };

  return (
    <nav className="navbar"
    style={{
      backgroundColor: 'cyan',
      height: '10vh'
    }}>
      <Link to='/' style={{textDecoration: 'none'}}>
      <h1>Women's FIFA Cup Athletes</h1>
      </Link>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;