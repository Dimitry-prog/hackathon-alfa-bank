import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Outlet } from 'react-router-dom';
import SidebarMenu from '@/components/shared/sidebar-menu';
import useUserInfo from '@/features/user/hooks/use-user-info.tsx';

const cx = classNames.bind(styles);

const Layout = () => {
  const { userRole } = useUserInfo();

  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <SidebarMenu role={userRole} />

        <main className={cx('main')}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
