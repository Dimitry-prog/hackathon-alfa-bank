import { api } from '@/libs/api.ts';
import { LoginRequestType, LoginResponseType } from '@/features/auth/types';
import { UserType } from '@/features/user/types';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponseType, LoginRequestType>({
      query: (body) => ({
        url: `/auth/jwt/login`,
        method: 'POST',
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/auth/jwt/logout`,
        method: 'POST',
      }),
    }),
    register: builder.mutation<UserType, Omit<UserType, 'id'>>({
      query: (body) => ({
        url: `/auth/register`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
