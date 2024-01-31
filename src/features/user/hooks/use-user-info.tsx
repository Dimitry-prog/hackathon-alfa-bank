import { useAppSelector } from '@/libs/store.ts';
import { userSelectors } from '@/features/user/slices';
import { authSelectors } from '@/features/auth/slices';

const useUserInfo = () => {
  const userInfo = useAppSelector(userSelectors.getCurrentUser);
  const token = useAppSelector(authSelectors.getToken);
  const userTask = useAppSelector(userSelectors.getUserTask);
  const userRole = useAppSelector(userSelectors.getUserRole);

  return {
    ...userInfo,
    token,
    userTask,
    userRole,
  };
};

export default useUserInfo;
