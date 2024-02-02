import { UserRoleType } from '@/features/user/types';

export type TemplateType = {
  id: number;
  title: string;
  description: string;
  skills: SkillType[];
  user: CreatorType;
  direction: DirectionType;
  grade: GradeType;
  type: TaskType;
  link: string;
  duration: number;
  recommendation: string;
};

export type TemplateByIdType = {
  title: 'string';
  id: 0;
  description: 'string';
  skills: [{}];
  user: {
    id: 0;
    first_name: 'string';
    last_name: 'string';
    patronymic_name: 'string';
    position: 'string';
    role: 'chief';
    photo: 'string';
  };
  direction: {
    id: 0;
    value: 'string';
  };
  grade: {
    id: 0;
    value: 'string';
  };
  type: {
    id: 0;
    value: 'string';
  };
  link: 'string';
  duration: 0;
  recommendation: 'string';
};

export type RequestTemplateType = {
  title: string;
  description: string;
  skills: string[];
  direction_id: number;
  grade_id: number;
  type_id: number;
  link: string;
  duration: number;
  recommendation: string;
};

export type RequestUpdateTemplateType = {
  templateId: number;
  body: Partial<RequestTemplateType>;
};

export type SkillType = {
  id: number;
  value: string;
};

export type DirectionType = {
  id: number;
  value: string;
};

export type GradeType = {
  id: number;
  value: string;
};

export type TaskType = {
  id: number;
  value: string;
};

export type CreatorType = {
  id: number;
  first_name: string;
  last_name: string;
  patronymic_name: string;
  position: string;
  role: UserRoleType;
  photo: string;
};

export type TemplateQueryType = {
  q: string;
  direction: string;
  skills: number[];
  grade: number[];
  type: string;
  creator: string;
};

export type SetTemplateToUsersRequestType = {
  users_ids: number[];
  template_id: number;
};
