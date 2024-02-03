import { api } from '@/libs/api.ts';
import { CreateTaskType, StatusesType, TaskType, TypesType, UpdateTaskType } from '../type';

export const tasksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTask: builder.query<TaskType, number>({
      query: (id) => `/api/v1/task/${id}`,
    }),
    updateTask: builder.mutation<TaskType, UpdateTaskType>({
      query: (data) => ({
        url: `/api/v1/task/${data.id}`,
        method: 'PATCH',
        body: data.body,
      }),
    }),
    createTask: builder.mutation<TaskType, CreateTaskType>({
      query: (data) => ({
        url: `/api/v1/task/`,
        method: 'POST',
        body: data,
      }),
    }),
    getStatuses: builder.query<StatusesType[], void>({
      query: () => `/api/v1/task_properties/statuses`,
    }),
    getTypes: builder.query<TypesType[], void>({
      query: () => `/api/v1/task_properties/types`,
    }),
  }),
});

export const {
  useGetTaskQuery,
  useUpdateTaskMutation,
  useCreateTaskMutation,
  useGetStatusesQuery,
  useGetTypesQuery,
} = tasksApi;
