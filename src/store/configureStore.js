import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import localStorage from './middleware/localStorage';
import login from './login';

const middleware = [...getDefaultMiddleware(), localStorage];

const reducer = combineReducers({ login })
const store = configureStore({ reducer, middleware });
export default store;