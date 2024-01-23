import useUserInfo from '@/features/user/hooks/use-user-info.tsx';
import ChiefHome from '@/features/user/components/chief-home';
import EmployeeHome from '@/features/user/components/employee-home';

const HomePage = () => {
  const { role } = useUserInfo();

  return (
    <>
      {role === 'employee' && <EmployeeHome />}

      {role === 'chief' && <ChiefHome />}
    </>
  );
};

export default HomePage;
