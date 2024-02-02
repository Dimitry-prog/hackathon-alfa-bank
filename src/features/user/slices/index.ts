import { EmployeeType, UserType } from '@/features/user/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from '../services';

type UserStateType = {
  user: UserType | null;
  employees: EmployeeType[];
  searchQuery: string;
};

const initialState: UserStateType = {
  user: null,
  employees: [],
  searchQuery: '',
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
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
    getSearchQuery: (state) => state.searchQuery,
  },
});

export const { actions: userActions, selectors: userSelectors } = userSlice;
