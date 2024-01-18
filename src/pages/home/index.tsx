import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Header from '@/components/shared/header';

const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <h2>HomePage</h2>
      <SiteBar />
    </div>
  );
};

export default HomePage;
