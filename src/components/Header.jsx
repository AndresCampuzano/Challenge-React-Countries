import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  // console.log(props);

  const [count, setCount] = useState(0);

  // console.log('Count from header: ', count);

  return (
    <>
      <header className='header'>
        <div className='wrapper'>
          <div className='content'>
            <Link to='/' onClick={() => setCount(count + 1)}>
              <h1>Where in the world?</h1>
            </Link>
            <p>🌓Dark Mode</p>
          </div>
        </div>
      </header>
      {props.children}
    </>
  );
};

export default Header;
