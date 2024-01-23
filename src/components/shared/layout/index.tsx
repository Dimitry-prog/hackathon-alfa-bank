import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { Outlet } from 'react-router-dom';
import SidebarMenu from '@/components/shared/sidebar-menu';

const cx = classNames.bind(styles);

const Layout = () => {
  return (
    <>
      <Header />
      <div className={cx('wrapper')}>
        <SidebarMenu role="chief" />

        <main className={cx('main')}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
