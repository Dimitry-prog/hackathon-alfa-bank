import { api } from '@/libs/api.ts';
import { UpdateUserByIdType, UpdateUserType, UserType } from '@/features/user/types';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<UserType, void>({
      query: () => `http://alfabankhack.ddns.net:8000/users/me`,
    }),
    updateUser: builder.mutation<UserType, UpdateUserType>({
      query: (body) => ({
        url: `http://alfabankhack.ddns.net:8000/users/me`,
        method: 'PATCH',
        body,
      }),
    }),
    getUserById: builder.mutation<UserType, string>({
      query: (id) => `http://alfabankhack.ddns.net:8000/users/${id}`,
    }),
    updateUserById: builder.mutation<UserType, UpdateUserByIdType>({
      query: ({ body, id }) => ({
        url: `http://alfabankhack.ddns.net:8000/users/${id}`,
        method: 'PATCH',
        body,
      }),
    }),
    deleteUserById: builder.mutation<string, string>({
      query: (id) => ({
        url: `http://alfabankhack.ddns.net:8000/users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useGetUserByIdMutation,
  useUpdateUserByIdMutation,
  useDeleteUserByIdMutation,
} = userApi;
