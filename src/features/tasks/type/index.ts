export type TaskType = {
  id: number;
  title: string;
  starting_date: string;
  deadline: string;
  pdp_id: number;
  type: {
    id: number;
    name: string;
  };
  status: {
    id: number;
    name: string;
  };
  description: string;
  skills: string;
  chief_comment: string;
  employee_comment: string;
};

export type UpdateTaskType = {
  id: number;
  title: string;
  starting_date: string;
  deadline: string;
  pdp_id: number;
  type_id: number;
  status_id: number;
  description: string;
  skills: string;
  chief_comment: string;
  employee_comment: string;
};
