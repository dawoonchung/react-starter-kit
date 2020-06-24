import { combineReducers } from '@reduxjs/toolkit';

const initialReducer = () => ({
  reduxInitialised: true,
});

const rootReducer = combineReducers({ initialReducer });

export default rootReducer;
