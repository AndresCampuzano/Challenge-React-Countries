import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Home from '../containers/Home.jsx';
import CardDetail from '../containers/CardDetail.jsx';

// Styles
// import '../assets/styles/Styles.scss';
// import { GlobalStyles } from '../assets/styles/global';

const App = () => {
  return (
    <BrowserRouter>
      {/* <GlobalStyles /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:theme/country/:id' component={CardDetail} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
