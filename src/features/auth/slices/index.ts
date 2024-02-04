import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../services';
import { userApi } from '@/features/user/services';

type AuthStateType = {
  token: string | null;
};

const initialState: AuthStateType = {
  token: localStorage.getItem('token') || null,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.token = payload.access_token;
      localStorage.setItem('token', payload.access_token);
    });
    builder.addMatcher(userApi.endpoints.getUser.matchRejected, (state) => {
      state.token = null;
      localStorage.removeItem('token');
    });
  },
  selectors: {
    getToken: (state) => state.token,
  },
});

export const { actions: authActions, selectors: authSelectors } = authSlice;
