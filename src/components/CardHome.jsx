import React from 'react';

const CardHome = props => {
  console.log('from CardHome: ', props);

  return (
    <>
      {Object.keys(props).map(x => {
        return <li>{x.name}</li>;
      })}
    </>
  );
};

export default CardHome;
