import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ propToggleTheme }) => {
  return (
    <>
      <header className='header'>
        <div className='wrapper'>
          <div className='content'>
            <Link to='/'>
              <h1>Where in the world?</h1>
            </Link>
            <p onClick={propToggleTheme}>🌓Dark Mode</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
