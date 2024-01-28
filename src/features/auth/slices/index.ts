import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  selectors: {
    getToken: (state) => state,
  },
});

export const { actions: userActions, selectors: userSelectors } = authSlice;
