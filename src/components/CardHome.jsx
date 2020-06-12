import React from 'react';

const CardHome = ({ key, name }) => {
  // console.log('from CardHome: ', props);

  return (
    <>
      <li key={key}>{name}</li>
    </>
  );
};

export default CardHome;
