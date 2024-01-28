export type TaskType = {
  id: number;
  title: string;
  starting_date: string;
  deadline: string;
  pdp_id: number;
  type: TypesType;
  status: StatusesType;
  description: string;
  skills: string;
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
  name: string;
};

export type TypesType = {
  id: number;
  name: string;
};
