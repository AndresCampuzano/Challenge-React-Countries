import React, { useState, useEffect } from 'react';
import CardHome from '../components/CardHome';

// Search icon
import searchIcon from '../assets/images/search-24px.svg';
// import arrowDown from '../assets/images/keyboard_arrow_down-24px.svg';

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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
                <CardHome
                  flag={flag}
                  name={name}
                  key={name}
                  population={population}
                  region={region}
                  capital={capital}
                  route={alpha3Code}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
