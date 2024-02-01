import { api } from '@/libs/api.ts';
import { LoginRequestType, LoginResponseType } from '@/features/auth/types';
import { UserType } from '@/features/user/types';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponseType, LoginRequestType>({
      query: (body) => ({
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        url: `/auth/jwt/login`,
        method: 'POST',
        body: transformBody(body),
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

function transformBody(body: Record<string, string>) {
  const formBody = [];
  for (const property in body) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(body[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&');
}

export const { useLoginMutation } = authApi;
