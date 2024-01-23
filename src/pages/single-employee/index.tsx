import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import UserInfo from '@/components/shared/user-info';
import TasksTable from '../../features/user/components/tasks-table';
import Button from '@/components/ui/button';

const cx = classNames.bind(styles);

const SingleEmployeePage = () => {
  return (
    <section className={cx('wrapper')}>
      <h2>Индивидуальный план развития</h2>

      <div className={cx('content')}>
        <UserInfo />
        <TasksTable />

        <Button variant="accent" href="create">
          Создать задачу
        </Button>
      </div>
    </section>
  );
};

export default SingleEmployeePage;
