/* eslint-disable global-require */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

let middleware;

if (process.env.NODE_ENV === 'development') {
  const { composeWithDevTools } = require('redux-devtools-extension');
  const { createLogger } = require('redux-logger');
  const loggerMiddleware = createLogger();

  middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware));
} else {
  middleware = applyMiddleware(thunkMiddleware);
}

const configureStore = (preloadedState) => createStore(
  rootReducer,
  preloadedState,
  middleware,
);

export default configureStore;
