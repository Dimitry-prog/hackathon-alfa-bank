export type TaskType = {
  id: number;
  title: string;
  starting_date: string;
  deadline: string;
  pdp_id: number;
  type: TypesType;
  status: StatusesType;
  description: string;
  skills: string[];
  chief_comment: string;
  employee_comment: string;
};

export type CreateTaskType = {
  title: string;
  pdp_id: number;
  description: string;

  type_id?: number;
  starting_date?: string;
  deadline?: string;
  status_id?: number;
  skills?: string[];
  link?: string;
  chief_comment?: string;
  employee_comment?: string;
};

export type UpdateTaskType = {
  id: number;
  body: Omit<CreateTaskType, 'pdp_id'>;
};

export type StatusesType = {
  id: number;
  value: string;
};

export type TypesType = {
  id: number;
  value: string;
};
