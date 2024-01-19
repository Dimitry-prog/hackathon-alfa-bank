import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx('wrapper')}>
      <h2>HomePage</h2>
    </div>
  );
};

export default HomePage;
