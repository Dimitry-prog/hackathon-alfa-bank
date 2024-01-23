import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import EmployeeList from '@/features/user/components/employee-list';

const cx = classNames.bind(styles);

const ChiefHome = () => {
  return (
    <section className={cx('wrapper')}>
      <h2>Планы развития команды</h2>

      <div className={cx('content')}>
        <EmployeeList />
      </div>
    </section>
  );
};

export default ChiefHome;
