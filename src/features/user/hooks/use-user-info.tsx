import { useAppSelector } from '@/libs/store.ts';
import { userSelectors } from '@/features/user/slices';
import { authSelectors } from '@/features/auth/slices';

const useUserInfo = () => {
  const userInfo = useAppSelector(userSelectors.getCurrentUser);
  const token = useAppSelector(authSelectors.getToken);

  return {
    ...userInfo,
    token,
  };
};

export default useUserInfo;
