import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { userReducer } from './userReducer';

const persistConfig = {
  key: 'token',
  version: 1,
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, userReducer)

export const rootReducer = combineReducers({
    auth: persistedAuthReducer,
});