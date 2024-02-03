import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Button from '@/components/ui/button';
import { useGetMyPdpQuery } from '@/features/pdp/services';
import Loader from '@/components/shared/loader';
import UserGoal2 from '@/components/shared/user-goal-2';
import TasksTable2 from '@/features/user/components/tasks-table-2';

const cx = classNames.bind(styles);

const EmployeeHome = () => {
  const { data: pdp, isLoading } = useGetMyPdpQuery();
  return (
    <section className={cx('wrapper')}>
      <h2>Мой индивидуальный план развития</h2>

      {isLoading && <Loader />}

      {!pdp && <p className={cx('empty')}>План развития еще не создан. Подайте заявку</p>}

      {pdp && (
        <div className={cx('content')}>
          <UserGoal2 pdp={pdp} />

          <TasksTable2 tasks={pdp.tasks} />
        </div>
      )}

      <Button variant="accent" className={cx('button')} href="request">
        Подать заявку
      </Button>
    </section>
  );
};

export default EmployeeHome;
