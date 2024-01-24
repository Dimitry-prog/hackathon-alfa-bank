export type UserRoleType = 'chief' | 'employee';

export type UserType = {
  id: string;
  first_name: string;
  last_name: string;
  patronymic_name: string;
  position: string;
  role: UserRoleType;
  photo: string;
  email: string;
  password: string;
  chief_id: string;
};

export type UserTaskType = {
  title: string;
  start_date: string;
  deadline: string;
  type: string;
  status: string;
  description: string;
  skills: string;
  comment: string;
};
