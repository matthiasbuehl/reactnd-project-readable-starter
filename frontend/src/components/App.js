import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Error404 from './Error404'
import PostListView from './PostListView'
import PostDetailView from './PostDetailView'
import PostAddEditView from './PostAddEditView'
import { fetchCategories, setCategory } from '../actions'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  handleAllPosts = (event) => {
    this.props.setCategory(null)
  }

  render() {
    return (
      <div className="app center">
        <div className='nav-bar'>
          <ul>
            <li><Link to='/' onClick={this.handleAllPosts}>All Posts</Link></li>
            <li><Link to='/add'>New Post</Link></li>
          </ul>
        </div>
        <Switch>
          <Route exact path='/404' component={Error404} />
          <Route exact path='/add' component={PostAddEditView} />
          <Route exact path='/:post_id/edit' component={PostAddEditView} />
          <Route exact path='/:category/:post_id' component={PostDetailView} />
          <Route exact path='/:category' component={PostListView} />
          <Route exact path='/' component={PostListView} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(fetchCategories()),
    setCategory: (category) => dispatch(setCategory(category))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));