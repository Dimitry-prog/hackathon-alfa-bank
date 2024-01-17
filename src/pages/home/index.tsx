import classNames from 'classnames/bind';
import styles from './styles.module.scss';
// import BtnBack from '../../components/shared/btn-back/index.tsx';

const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx('wrapper')}>
      <h2>HomePage</h2>
      {/* <BtnBack /> */}
    </div>
  );
};

export default HomePage;
