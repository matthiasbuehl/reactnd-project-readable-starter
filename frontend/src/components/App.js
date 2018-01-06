import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404 from './Error404'
import './App.css';
import logo from '../logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path='/a' render={() => (
            <div>a</div>
          )} />
          <Route exact path='/' render={() => (
            <div>root</div>
          )} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
