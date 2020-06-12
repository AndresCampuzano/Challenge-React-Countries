import React from 'react';

const CardHome = ({ flag, name, population, region, capital }) => {
  // console.log('from CardHome: ', props);

  return (
    <>
      <li key={name}>
        <img src={flag} alt={name} />
        <h2>{name}</h2>
        <p>{population}</p>
        <p>{region}</p>
        <p>{capital}</p>
      </li>
    </>
  );
};

export default CardHome;
