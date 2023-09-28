import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'; 

import { userReducer } from './userReducer'; 


const rootReducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer, 
});