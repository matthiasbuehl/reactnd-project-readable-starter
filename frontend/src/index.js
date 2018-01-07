import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import App from './components/App';
import './index.css';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

//console.log(store.getState())

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
