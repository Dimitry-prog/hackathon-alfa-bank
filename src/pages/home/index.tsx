import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import useUserInfo from '@/features/user/hooks/use-user-info.tsx';
import ChiefHome from '@/features/user/components/chief-home';
import EmployeeHome from '@/features/user/components/employee-home';

const cx = classNames.bind(styles);

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
