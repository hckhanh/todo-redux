import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import todoApp from './reducers';
import App from './components/app';

const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

store.subscribe(() => {
  console.log(store.getState());
});
