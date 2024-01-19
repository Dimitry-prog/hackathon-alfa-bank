import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import DpdForm from '@/components/shared/dpd-form';

const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <div className={cx('wrapper')}>
      <DpdForm />
    </div>
  );
};

export default HomePage;
