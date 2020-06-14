import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CardDetail = props => {
  // console.log(props.match.params.id); // Colombia : 57
  console.log('props: ', props);
  // console.log('props goBack: ', props.history.goBack);

  const [data, setData] = useState([]);

  console.log('data from cardDetail: ', data);

  useEffect(() => {
    fetch(
      `https://restcountries.eu/rest/v2/alpha?codes=${props.match.params.id}`
    )
      .then(response => response.json())
      .then(response => {
        setData([...response]);
      })
      .catch(e => console.log(e));
  }, []);

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <>
      <p>Test from cardDetail</p>
      <button onClick={goBack}>Back</button>
      <div>
        {data.map(
          ({
            flag,
            nativeName,
            name,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders
          }) => {
            return (
              <div key={Math.random()}>
                <h1>{name}</h1>
                <img src={flag} alt={name} />
                <div>
                  <p>Native Name: {nativeName}</p>
                  <p>Population: {population}</p>
                  <p>Region: {region}</p>
                  <p>Sub Region: {subregion}</p>
                  <p>Capital: {capital}</p>
                </div>
                <div>
                  <p>Top Level Domain: {topLevelDomain}</p>
                  <div>
                    Currencies:{' '}
                    {currencies.map(({ name }) => {
                      return <div key={Math.random()}>{name}</div>;
                    })}
                  </div>
                  <div>
                    Languages:{' '}
                    {languages.map(({ name }) => {
                      return <div key={Math.random()}>{name}</div>;
                    })}
                  </div>
                  <div>
                    Border Countries:{' '}
                    {borders.map(x => {
                      return (
                        <div key={Math.random()}>
                          <a href={`/country/${x}`}>{x}</a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default CardDetail;
