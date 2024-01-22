import { useAppSelector } from '@/libs/store.ts';
import { userSelectors } from '@/features/user/slices';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequiredAuth = () => {
  const location = useLocation();
  const token = useAppSelector(userSelectors.getToken);

  return <>{token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />}</>;
};

export default RequiredAuth;
