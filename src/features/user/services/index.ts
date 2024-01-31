import { api } from '@/libs/api.ts';
import { UserType } from '@/features/user/types';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.mutation<UserType, void>({
      query: () => `http://alfabankhack.ddns.net:8000/users/me`,
    }),
    updateUser: builder.mutation({
      query: () => ({
        url: `http://alfabankhack.ddns.net:8000/users/me`,
        method: 'PATCH',
      }),
    }),
    getUserById: builder.mutation<UserType, Omit<UserType, 'id'>>({
      query: (id) => `http://alfabankhack.ddns.net:8000/users/${id}`,
    }),
    updateUserById: builder.mutation({
      query: (id) => ({
        url: `http://alfabankhack.ddns.net:8000/users/${id}`,
        method: 'PATCH',
      }),
    }),
    deleteUserById: builder.mutation({
      query: (id) => ({
        url: `http://alfabankhack.ddns.net:8000/users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetUserMutation,
  useUpdateUserMutation,
  useGetUserByIdMutation,
  useUpdateUserByIdMutation,
  useDeleteUserByIdMutation,
} = userApi;
