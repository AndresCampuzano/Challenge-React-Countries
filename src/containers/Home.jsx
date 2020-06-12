import React, { useState, useEffect } from 'react';
import CardHome from '../components/CardHome';

const Home = () => {
  const [data, setData] = useState({
    info: ''
  });

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(response =>
        setData({
          info: response
        })
      );
  }, []);

  return (
    <>
      <p>This is a test from Home</p>
      <ul>
        <CardHome {...data.info} />
      </ul>
    </>
  );
};

export default Home;
