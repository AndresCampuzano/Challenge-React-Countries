import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  return (
    <>
      <header className='header'>
        <div className='wrapper'>
          <div className='content'>
            <Link to='/'>
              <h1>Where in the world?</h1>
            </Link>
            <p>🌓Dark Mode</p>
          </div>
        </div>
      </header>
      {children}
    </>
  );
};

export default Header;
