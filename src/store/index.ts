// import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

/*
let middleware;

if (process.env.NODE_ENV === 'development') {
  const { composeWithDevTools } = require('redux-devtools-extension');
  const { createLogger } = require('redux-logger');
  const loggerMiddleware = createLogger();

  // middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware));
} else {
  // middleware = applyMiddleware(thunkMiddleware);
}
*/

/*
const configureStore = (preloadedState) => createStore(
  rootReducer,
  preloadedState,
  middleware,
);
*/

const store = configureStore({
  reducer: rootReducer,
});

export default store;
