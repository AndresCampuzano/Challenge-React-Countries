import React from 'react';
import { Link } from 'react-router-dom';

const CardHome = ({ flag, name, population, region, capital, route }) => {
  // console.log('from CardHome inside Home: ', alpha3Code);

  return (
    <>
      <li key={route}>
        <img src={flag} alt={name} />
        <h2>{name}</h2>
        <p>{population}</p>
        <p>{region}</p>
        <p>{capital}</p>
        <Link to={`/country/${route}`}>details</Link>
      </li>
    </>
  );
};

export default CardHome;
