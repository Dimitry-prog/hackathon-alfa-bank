import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Button from '@/components/ui/button';
import useUserInfo from '@/features/user/hooks/use-user-info.tsx';
import UserInfo from '@/components/shared/user-info';
import TasksTable from '@/features/user/components/tasks-table';

const cx = classNames.bind(styles);

const EmployeeHome = () => {
  const { userTask } = useUserInfo();

  return (
    <section className={cx('wrapper')}>
      <h2>Мой индивидуальный план развития</h2>

      {userTask ? (
        <>
          <div className={cx('content')}>
            <UserInfo />
            <TasksTable />
          </div>
        </>
      ) : (
        <p className={cx('text')}>План развития еще не создан. Подайте заявку</p>
      )}

      <Button variant="accent" className={cx('button')} href="request-task">
        Подать заявку
      </Button>
    </section>
  );
};

export default EmployeeHome;
