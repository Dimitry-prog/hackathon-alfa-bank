import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import EmployeeList from '@/components/shared/employee-list';

const cx = classNames.bind(styles);

const TeamDevelopmentPlans = () => {
  return (
    <section className={cx('team')}>
      <h1 className={cx('team__title')}>Планы развития команды</h1>
      <EmployeeList />
    </section>
  );
};

export default TeamDevelopmentPlans;
