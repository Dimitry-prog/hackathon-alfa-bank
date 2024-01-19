import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import SiteBar from '@/components/shared/sitebar';

const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx('wrapper')}>
      <h2>HomePage</h2>
      <SiteBar />
    </div>
  );
};

export default HomePage;
