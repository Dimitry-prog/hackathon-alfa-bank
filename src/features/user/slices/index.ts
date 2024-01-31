import { EmployeeType, UserType } from '@/features/user/types';
import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '../services';

type UserStateType = {
  user: UserType | null;
  employees: EmployeeType[];
};

const initialState: UserStateType = {
  user: null,
  employees: [],
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addMatcher(userApi.endpoints.getEmployees.matchFulfilled, (state, { payload }) => {
      state.employees = payload;
    });
  },
  selectors: {
    getCurrentUser: (state) => state.user,
    getEmployees: (state) => state.employees,
  },
});

export const { actions: userActions, selectors: userSelectors } = userSlice;
