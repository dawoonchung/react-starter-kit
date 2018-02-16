import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const middleWare = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)) :
  applyMiddleware(thunkMiddleware);

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    middleWare,
  );
}
