import React from 'react';
import { Link } from 'react-router-dom';

const CardHome = ({ flag, name, population, region, capital, route }) => {
  // console.log('from CardHome inside Home: ', alpha3Code);

  return (
    <article className='cards--item' key={route}>
      <Link to={`/country/${route}`}>
        <img src={flag} alt={name} />
        <div className='cards--item--container'>
          <h2>{name}</h2>
          <p>
            <strong>Population: </strong>
            {population}
          </p>
          <p>
            <strong>Region: </strong>
            {region}
          </p>
          <p>
            <strong>Capital: </strong>
            {capital}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default CardHome;
