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
