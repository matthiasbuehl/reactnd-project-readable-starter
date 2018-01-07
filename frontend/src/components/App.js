import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Error404 from './Error404'
import PostListView from './PostListView'
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="app">
        <Switch>
          <Route path='/a' render={() => (
            <div>a</div>
          )} />
          <Route exact path='/' render={() => (
            <PostListView />
          )} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return state
}

export default connect(
  mapStateToProps
)(App);
