import { UserRoleType } from '@/features/user/types';

export type TemplateType = {
  id: number;
  title: string;
  description: string;
  skills: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    patronymic_name: string;
    position: string;
    role: UserRoleType;
    photo: string;
  };
  direction: {
    id: number;
    name: string;
  };
  grade: {
    id: number;
    name: string;
  };
  type: {
    id: number;
    name: string;
  };
  duration: number;
  recommendation: string;
};

export type RequestTemplateType = {
  title: string;
  description: string;
  skills: string;
  direction_id: number;
  grade_id: number;
  type_id: number;
  duration: number;
  recommendation: 'string';
};

export type RequestUpdateTemplateType = {
  templateId: number;
  body: Partial<RequestTemplateType>;
};
