import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Error404 from './Error404'
import PostListView from './PostListView'
import PostDetailView from './PostDetailView'
import { fetchCategories } from '../actions'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    return (
      <div className="app center">
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

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(fetchCategories())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));