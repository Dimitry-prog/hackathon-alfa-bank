import { UserRoleType, UserType } from '@/features/user/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserStateType = {
  user: UserType | null;
  name: string;
  token: string | null;
  role: UserRoleType;
};

const initialState: UserStateType = {
  user: {
    id: '2235',
    last_name: '',
    first_name: '',
    patronymic_name: '',
    role: 'employee',
    password: '',
    position: '',
    photo: '',
    email: '',
    chief_id: '780',
  },
  name: '',
  token: null,
  role: 'employee',
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserRole: (state, action: PayloadAction<UserRoleType>) => {
      state.role = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
  selectors: {
    getCurrentUser: (state) => state.user,
    getUserRole: (state) => state.role,
    getToken: (state) => state.token,
  },
});

export const { actions: userActions, selectors: userSelectors } = userSlice;
