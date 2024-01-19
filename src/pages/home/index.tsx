import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Header from '@/components/shared/header';
import Menu from '@/components/shared/menu';

const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <Menu />
    </div>
  );
};

export default HomePage;
