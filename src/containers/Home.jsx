import React, { useState, useEffect } from 'react';
// import { Combobox, SelectMenu, Button } from 'evergreen-ui';
import CardHome from '../components/CardHome';
// import Component from '@reactions/component';

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  console.log('original data: ', data);
  console.log('filteredData: ', filteredData);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(response => {
        setData([...response]);
        setFilteredData([...response]);
        // setFilteredDataByRegion([...response]);
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
    <>
      <h1>Flags 😊</h1>
      <input type='search' onChange={handleChangeInput} id='search' />
      <div>
        <select id='dropdown' onChange={handleDropdownChange}>
          <option value='NA'>Filter by Region</option>
          <option value='Africa'>Africa</option>
          <option value='America'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </div>
      <ul>
        {filteredData.map(({ flag, name, population, region, capital }) => {
          return (
            <CardHome
              flag={flag}
              name={name}
              key={name}
              population={population}
              region={region}
              capital={capital}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Home;
