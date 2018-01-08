import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Error404 from './Error404'
import PostListView from './PostListView'
import PostDetailView from './PostDetailView'
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="app">
        <Switch>
          <Route exact path='/:post_id' component={PostDetailView} />
          <Route exact path='/' component={PostListView} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return state
}

export default withRouter(connect(mapStateToProps)(App));
