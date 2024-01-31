import { UserRoleType, UserTaskType, UserType } from '@/features/user/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from '../services';

type UserStateType = {
  user: UserType | null;
  name: string;
  role: UserRoleType;
  userTask: UserTaskType | null;
};

const initialState: UserStateType = {
  user: null,
  userTask: null,
  name: '',
  role: 'employee',
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserRole: (state, action: PayloadAction<UserRoleType>) => {
      state.role = action.payload;
    },
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    setUserTask: (state, action: PayloadAction<UserTaskType>) => {
      state.userTask = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, { payload }) => {
      state.role = payload.role;
      state.name = payload.email;
      state.user = payload;
    });
  },
  selectors: {
    getCurrentUser: (state) => state.user,
    getUserRole: (state) => state.role,
    getUserTask: (state) => state.userTask,
  },
});

export const { actions: userActions, selectors: userSelectors } = userSlice;
