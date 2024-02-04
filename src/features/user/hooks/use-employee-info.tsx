import { useAppSelector } from '@/libs/store.ts';
import { userSelectors } from '@/features/user/slices';
import { useParams } from 'react-router-dom';

export const useEmployeeInfo = () => {
  const { employeeId } = useParams();
  const employees = useAppSelector(userSelectors.getEmployees);

  const currentEmployee = employees.find(({ id }) => id.toString() === employeeId) || null;

  return {
    employees,
    currentEmployee,
  };
};
