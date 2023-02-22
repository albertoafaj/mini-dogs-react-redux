import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import localStorage from './middleware/localStorage';
import login from './login';
import photos from './photos';

const middleware = [...getDefaultMiddleware(), localStorage];

const reducer = combineReducers({ login, photos })
const store = configureStore({ reducer, middleware });
export default store;