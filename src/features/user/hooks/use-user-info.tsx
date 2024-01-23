import { useAppSelector } from '@/libs/store.ts';
import { userSelectors } from '@/features/user/slices';

const UseUserInfo = () => {
  const userInfo = useAppSelector(userSelectors.getCurrentUser);
  const token = useAppSelector(userSelectors.getToken);

  return {
    ...userInfo,
    token,
  };
};

export default UseUserInfo;
