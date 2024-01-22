import { UserRole } from '@/features/user/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserStateType = {
  name: string;
  token: string | null;
  role: UserRole;
};

const initialState: UserStateType = {
  name: '',
  token: null,
  role: 'employee',
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserRole: (state, action: PayloadAction<UserRole>) => {
      state.role = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  selectors: {
    getCurrentUser: (state) => state,
    getUserRole: (state) => state.role,
    getToken: (state) => state.token,
  },
});

export const { actions: userActions, selectors: userSelectors } = userSlice;
