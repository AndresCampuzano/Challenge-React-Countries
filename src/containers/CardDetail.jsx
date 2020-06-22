import React, { useState, useEffect } from 'react';

// Styles
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../assets/styles/theme';
import { GlobalStyles } from '../assets/styles/global';

const CardDetail = props => {
  const [valueBorder, setValueBorder] = useState(props.match.params.id);
  const [data, setData] = useState([]);

  const handleBorderCountries = e => {
    e.preventDefault();
    props.history.push(`country/${e.target.value}`);
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
      <ThemeProvider
        theme={props.match.params.theme === 'light' ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        <div className='cardDetail'>
          <div className='wrapper'>
            <div className='cardDetail--button'>
              <button className='btn' onClick={goBack}>
                Back
              </button>
            </div>
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
                  <div key={Math.random()} className='cardDetail--grid'>
                    <div className='cardDetail--image'>
                      <img src={flag} alt={name} />
                    </div>
                    <div className='cardDetail--text'>
                      <div className='cardDetail--text--title'>
                        <h1>{name}</h1>
                      </div>
                      <div className='cardDetail--text--secondGrid'>
                        <div>
                          <p>
                            <strong>Native Name: </strong>
                            {nativeName}
                          </p>
                          <p>
                            <strong>Population: </strong>
                            {population}
                          </p>
                          <p>
                            <strong>Region: </strong>
                            {region}
                          </p>
                          <p>
                            <strong>Sub Region: </strong>
                            {subregion}
                          </p>
                          <p>
                            <strong>Capital: </strong>
                            {capital}
                          </p>
                        </div>
                        <div>
                          <p>
                            <strong>Top Level Domain: </strong>
                            {topLevelDomain}
                          </p>
                          <div className='currencies'>
                            <strong>Currencies: </strong>
                            {currencies.map(({ name }) => {
                              return <div key={Math.random()}>{name}</div>;
                            })}
                          </div>
                          <div className='languages'>
                            <strong>Languages: </strong>
                            {languages.map(({ name }) => {
                              return <div key={Math.random()}>{name}</div>;
                            })}
                          </div>
                        </div>
                      </div>

                      <div className='borderCountries'>
                        <strong>Border Countries: </strong>
                        {borders.length > 0 ? (
                          borders.map(x => {
                            return (
                              <div key={Math.random()}>
                                <div
                                  className='btn'
                                  // onClick={handleBorderCountries}
                                  value={x}
                                >
                                  {x}
                                </div>
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
        </div>
      </ThemeProvider>
    </>
  );
};

export default CardDetail;
