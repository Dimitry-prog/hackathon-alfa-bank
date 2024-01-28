import { api } from '@/libs/api.ts';
import { PdpType, UpdatePdpType } from '@/features/pdp/types';

export const pdpApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMyPdp: builder.query<PdpType, void>({
      query: () => `/pdp/my`,
    }),
    getPdpById: builder.query<PdpType, number>({
      query: (pdpId) => `/pdp/${pdpId}`,
    }),
    updatePdp: builder.mutation<PdpType, UpdatePdpType>({
      query: (data) => ({
        url: `/pdp/${data.pdpId}`,
        method: 'POST',
        body: data.body,
      }),
    }),
  }),
});

export const { useGetMyPdpQuery, useUpdatePdpMutation } = pdpApi;
