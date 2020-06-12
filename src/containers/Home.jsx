import React, { useState, useEffect } from 'react';
import CardHome from '../components/CardHome';

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
      })
      .catch(e => console.log(e));
  }, []);

  const handleChangeInput = e => {
    const string = e.target.value.toLowerCase();
    const stringToUppercase = string.replace(/\b\w/g, l => l.toUpperCase());
    setFilteredData(data.filter(x => x.name.includes(stringToUppercase)));
  };

  // const convertToArray = Array.from(data.info);
  // console.log(convertToArray);

  return (
    <>
      <p>This is a test from Home</p>
      <input type='search' onChange={handleChangeInput} id='search' />
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
