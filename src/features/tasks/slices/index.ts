import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskType } from '../type';

interface TaskState {
  tasks: TaskType[];
}

const initialState: TaskState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<TaskType[]>) => {
      state.tasks = action.payload;
    },
  },
  selectors: {
    getTasks: (state) => state,
  },
});

export const { actions: taskActions, selectors: taskSelectors } = taskSlice;
