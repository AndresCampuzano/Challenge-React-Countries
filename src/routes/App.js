import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Home from '../containers/Home.jsx';
import CardDetail from '../containers/CardDetail.jsx';
import Header from '../components/Header.jsx';

// Styles
import '../assets/styles/app.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/country/:id' component={CardDetail} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Header>
    </BrowserRouter>
  );
};

export default App;
