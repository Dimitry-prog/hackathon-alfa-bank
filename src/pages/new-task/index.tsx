import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import UserInfo from '@/components/shared/user-info';
import DpdForm from '@/components/shared/dpd-form';

const cx = classNames.bind(styles);

const NewTask = () => {
  return (
    <section className={cx('wrapper')}>
      <h2 className={cx('title')}>Индивидуальный план развития</h2>
      <UserInfo />
      <h3 className={cx('heading')}>Новая задача</h3>
      <DpdForm />
    </section>
  );
};

export default NewTask;
