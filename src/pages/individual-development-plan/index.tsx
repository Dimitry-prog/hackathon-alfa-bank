import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import UserInfo from '@/components/shared/user-info';
import TableRow from '@/components/shared/table-row';
import Button from '@/components/ui/button';
import UserGoal from '@/components/shared/user-goal';

const cx = classNames.bind(styles);

const IndividualDevelopmentPlan = () => {
  return (
    <section className={cx('wrapper')}>
      <h2 className={cx('title')}>Индивидуальный план развития</h2>
      <div className={cx('container')}>
        <UserGoal />
        <UserInfo />
      </div>
      <TableRow />
      <Button className={cx('button')} href="/create_task">
        Создать задачу
      </Button>
    </section>
  );
};

export default IndividualDevelopmentPlan;
