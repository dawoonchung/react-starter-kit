/* eslint-disable global-require */
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: process.env.NODE_ENV === 'development' ? require('redux-logger') : undefined,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

/*
if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');
  const loggerMiddleware = createLogger();

  middleware = composeWithDevTools(applyMiddleware(loggerMiddleware));
} else {
  middleware = applyMiddleware();
}
*/

export default store;
