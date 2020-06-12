import React, { useState, useEffect } from 'react';
// import CardHome from '../components/CardHome';

const Home = () => {
  const [data, setData] = useState({
    info: ''
  });

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(response => setData({ info: response }));
  }, []);

  return (
    <>
      <p>This is a test from Home</p>
      <ul>
        {Object.keys(data.info).map(x => {
          return <li key={x.index}>{x.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Home;
