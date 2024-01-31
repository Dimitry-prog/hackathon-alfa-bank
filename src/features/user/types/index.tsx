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
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
};

export type UpdateUserType = Pick<
  UserType,
  'first_name' | 'last_name' | 'patronymic_name' | 'photo'
>;

export type UpdateUserByIdType = {
  id: string;
  body: UpdateUserType;
};

export type UserTaskType = {
  title: string;
  start_date: number;
  deadline: number;
  type: string;
  status: string;
  description: string;
  skills: string;
  comment: string;
};
