import { api } from '@/libs/api.ts';
import {
  RequestTemplateType,
  RequestUpdateTemplateType,
  TemplateType,
} from '@/features/template/types';

export const templateApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTemplateById: builder.query<TemplateType, number>({
      query: (templateId) => `/template/${templateId}`,
    }),
    createTemplate: builder.mutation<TemplateType, RequestTemplateType>({
      query: (body) => ({
        url: `/template`,
        method: 'POST',
        body,
      }),
    }),
    updateTemplateById: builder.mutation<TemplateType, RequestUpdateTemplateType>({
      query: (data) => ({
        url: `/template/${data.templateId}`,
        method: 'PATCH',
        body: data.body,
      }),
    }),
  }),
});

export const { useGetTemplateByIdQuery } = templateApi;
