import { combineReducers } from "@reduxjs/toolkit";
import createAsyncSlice from "./helper/createAsyncSlice";
import getLocalStorage from "./helper/getLocalStorage";
import { removePhotos } from "./photos";

const token = createAsyncSlice({
  name: 'token',
  initialState: {
    data: {
      token: getLocalStorage('token', null)
    }
  },
  reducers: {
    removeToken(state) {
      state.data = null
    },
    fetchSucess: {
      reducer(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      prepare(payload) {
        return {
          payload, meta: {
            localStorage: {
              key: 'token',
              value: payload.token
            },
          },
        };
      },
    },
  },
  fetchConfig: (user) => ({
    url: 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    },
  })
});

const user = createAsyncSlice({
  name: 'user',
  reducers: {
    removeUser(state) {
      state.data = null
    },
  },
  fetchConfig: (token) => ({
    url: 'https://dogsapi.origamid.dev/json/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  })
});


export const fetchToken = token.asyncAction;
export const fetchUser = user.asyncAction;
export const { removeToken } = token.actions;
export const { removeUser } = user.actions;

const reducer = combineReducers({ user: user.reducer, token: token.reducer })

export default reducer;

export const loginin = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user));
    if (payload.token !== undefined) await dispatch(fetchUser(payload.token));
  } catch (error) {

  }
}

export const autoLogin = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = state.login.token.data;
  if (token) await dispatch(fetchUser(token));
};

export const userLogout = () => (dispatch) => {
  dispatch(removeUser());
  dispatch(removeToken());
  dispatch(removePhotos());
  window.localStorage.removeItem('token');
}
