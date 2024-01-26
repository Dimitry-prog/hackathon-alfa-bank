import { api } from '@/libs/api.ts';
import { TaskType, UpdateTaskType } from '../type';

export const tasksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: (data) => `/task/${data.id}`,
    }),
    changeTask: builder.mutation<TaskType, UpdateTaskType>({
      query: (data) => ({
        url: `/task/${data.id}`,
        method: 'PATCH',
        data,
      }),
    }),
    createTask: builder.mutation<TaskType, void>({
      query: (data) => ({
        url: `/task`,
        method: 'POST',
        data,
      }),
    }),
  }),
});

export const { useGetTasksQuery, useChangeTaskMutation, useCreateTaskMutation } = tasksApi;
