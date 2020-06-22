import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
// Dark mode
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../assets/styles/theme';
import { GlobalStyles } from '../assets/styles/global';

// Pages
import CardHome from '../components/CardHome';

// Assets
import searchIcon from '../assets/images/search-24px.svg';
import Header from '../components/Header.jsx';

const Home = props => {
  // console.log(props);

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Dark mode
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  console.log(theme);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(response => {
        setData([...response]);
        setFilteredData([...response]);
      })
      .catch(e => console.log(e));
  }, []);

  const handleChangeInput = e => {
    const string = e.target.value.toLowerCase();
    const stringToUppercase = string.replace(/\b\w/g, l => l.toUpperCase());
    setFilteredData(data.filter(x => x.name.includes(stringToUppercase)));
  };

  const handleDropdownChange = e => {
    if (e.target.value == 'NA') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(x => x.region.includes(e.target.value)));
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header propToggleTheme={toggleTheme} />
      <section className='home'>
        <div className='wrapper'>
          <div className='search'>
            <div className='search--container'>
              <div className='loupe'>
                <img src={searchIcon} alt='search' />
              </div>
              <input
                type='search'
                onChange={handleChangeInput}
                id='search'
                placeholder='Search for a country...'
              />
            </div>
            <div>
              <select
                id='dropdown'
                onChange={handleDropdownChange}
                className='dropdown'
              >
                <option value='NA'>Filter by Region</option>
                <option value='Africa'>Africa</option>
                <option value='America'>America</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
              </select>
            </div>
          </div>
          <div className='cards'>
            {filteredData.map(
              ({ flag, name, population, region, capital, alpha3Code }) => {
                return (
                  <LazyLoad height={300} key={Math.random()}>
                    <CardHome
                      currentTheme={theme}
                      flag={flag}
                      name={name}
                      key={name}
                      population={population}
                      region={region}
                      capital={capital}
                      route={alpha3Code}
                    />
                  </LazyLoad>
                );
              }
            )}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default Home;
