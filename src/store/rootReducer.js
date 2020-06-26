import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../components/Counter/slice';

const rootReducer = combineReducers({ counter: counterReducer });

export default rootReducer;
