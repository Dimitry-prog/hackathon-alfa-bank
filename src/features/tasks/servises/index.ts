import { api } from '@/libs/api.ts';
import { StatusesType, TaskType, TypesType, UpdateTaskType } from '../type';

export const tasksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTaskById: builder.query<TaskType, string>({
      query: (id) => `/api/v1/task/${id}`,
    }),
    updateTask: builder.mutation<TaskType, UpdateTaskType>({
      query: (data) => ({
        url: `/task/${data.id}`,
        method: 'PATCH',
        body: data.body,
      }),
    }),
    createTask: builder.mutation<TaskType, Partial<TaskType>>({
      query: (data) => ({
        url: `/api/v1/task`,
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
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
  useCreateTaskMutation,
  useGetStatusesQuery,
  useGetTypesQuery,
} = tasksApi;
