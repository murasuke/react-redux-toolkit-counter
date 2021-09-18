import { render } from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { counterSlice } from './features/counter';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore({ reducer: counterSlice.reducer });

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
