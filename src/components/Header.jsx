import React from 'react';

const Header = ({ children }) => {
  return (
    <>
      <div className='header'>
        <div className='wrapper'>
          <h1>Where in the world?</h1>
          <p>Dark Mode</p>
        </div>
      </div>
      {children}
    </>
  );
};

export default Header;
