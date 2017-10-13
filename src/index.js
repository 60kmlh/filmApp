import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './containers/App';
import { HashRouter } from 'react-router-dom' 
import configureStore from './store'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <HashRouter basename="/">
        <App />
      </HashRouter>
    </Provider>, 
  document.getElementById('root'))
registerServiceWorker()
