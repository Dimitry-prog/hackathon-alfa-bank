import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Header from '@/components/shared/header';

const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <h2>HomePage</h2>
    </div>
  );
};

export default HomePage;
