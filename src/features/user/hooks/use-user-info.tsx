import { useAppSelector } from '@/libs/store.ts';
import { userSelectors } from '@/features/user/slices';

const useUserInfo = () => {
  const userInfo = useAppSelector(userSelectors.getCurrentUser);
  const token = useAppSelector(userSelectors.getToken);
  const userTask = useAppSelector(userSelectors.getUserTask);

  return {
    ...userInfo,
    token,
    userTask,
  };
};

export default useUserInfo;
