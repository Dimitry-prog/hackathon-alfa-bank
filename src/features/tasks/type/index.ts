import { SkillType } from '@/features/template/types';

export type TaskType = {
  id: number;
  title: string;
  starting_date: string;
  deadline: string;
  pdp_id: number;
  type: TypesType;
  status: StatusesType;
  description: string;
  skills: SkillType[];
  link: string;
  chief_comment: string;
  employee_comment: string;
};

export type UpdateTaskType = {
  id: number;
  pdp_id: number;
  body: {
    title: string;
    starting_date: string;
    deadline: string;
    type_id: number;
    status_id: number;
    description: string;
    skills: string;
    chief_comment: string;
    employee_comment: string;
  };
};

export type StatusesType = {
  id: number;
  value: string;
};

export type TypesType = {
  id: number;
  value: string;
};
