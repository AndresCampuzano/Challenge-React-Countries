import React, { useState, useEffect } from 'react';

const CardDetail = props => {
  const [valueBorder, setValueBorder] = useState(props.match.params.id);
  const [data, setData] = useState([]);

  const handleBorderCountries = e => {
    e.preventDefault();
    props.history.push(`/country/${e.target.value}`);
    setValueBorder(e.target.value);
  };

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha?codes=${valueBorder}`)
      .then(response => response.json())
      .then(response => {
        setData([...response]);
      })
      .catch(e => console.log(e));
  }, [valueBorder]);

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <>
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
                    {borders.length > 0 ? (
                      borders.map(x => {
                        return (
                          <div key={Math.random()}>
                            {/* <a href={`/country/${x}`}>{x}</a> */}
                            <button onClick={handleBorderCountries} value={x}>
                              {x}
                            </button>
                          </div>
                        );
                      })
                    ) : (
                      <p>No border countries 🏝</p>
                    )}
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
