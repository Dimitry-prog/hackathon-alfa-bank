import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from '../services';

type AuthStateType = {
  token: string | null;
};

const initialState: AuthStateType = {
  token: null,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.token = payload.access_token;
    });
  },
  selectors: {
    getToken: (state) => state.token,
  },
});

export const { actions: authActions, selectors: authSelectors } = authSlice;
