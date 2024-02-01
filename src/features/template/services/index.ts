import { api } from '@/libs/api.ts';
import {
  CreatorType,
  DirectionType,
  GradeType,
  RequestTemplateType,
  RequestUpdateTemplateType,
  SkillType,
  TemplateType,
} from '@/features/template/types';

export const templateApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTemplates: builder.query<TemplateType[], string | void>({
      query: (query = '') => `/api/v1/template/${query}`,
    }),
    getTemplateById: builder.query<TemplateType, number>({
      query: (templateId) => `/template/${templateId}`,
    }),
    getTemplateDirections: builder.query<DirectionType[], void>({
      query: () => `api/v1/template_properties/direction`,
    }),
    getTemplateGrades: builder.query<GradeType[], void>({
      query: () => `/api/v1/template_properties/grade`,
    }),
    getTemplateCreators: builder.query<CreatorType[], void>({
      query: () => `/api/v1/template_properties/creators`,
    }),
    getSkills: builder.query<SkillType[], void>({
      query: () => `/api/v1/task_properties/skills/`,
    }),
    createTemplate: builder.mutation<TemplateType, RequestTemplateType>({
      query: (body) => ({
        url: `/api/v1/template`,
        method: 'POST',
        body,
      }),
    }),
    updateTemplateById: builder.mutation<TemplateType, RequestUpdateTemplateType>({
      query: (data) => ({
        url: `/api/v1/template/${data.templateId}`,
        method: 'PATCH',
        body: data.body,
      }),
    }),
  }),
});

export const {
  useGetTemplatesQuery,
  useGetTemplateDirectionsQuery,
  useGetTemplateGradesQuery,
  useGetTemplateCreatorsQuery,
  useGetTemplateByIdQuery,
  useGetSkillsQuery,
} = templateApi;
