/* eslint-disable global-require */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: process.env.NODE_ENV === 'development'
    ? getDefaultMiddleware().concat(require('redux-logger').default)
    : undefined,
  devTools: process.env.NODE_ENV === 'development',
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
