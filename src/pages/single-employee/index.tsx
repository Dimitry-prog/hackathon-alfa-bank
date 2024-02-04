import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Button from '@/components/ui/button';
import { useGetPdpByIdQuery } from '@/features/pdp/services';
import Loader from '@/components/shared/loader';
import { useParams } from 'react-router-dom';
import TasksTable from '@/features/tasks/components/tasks-table';
import UserGoal from '@/features/user/components/user-goal';
import UserInfo from '@/features/user/components/user-info';

const cx = classNames.bind(styles);

const SingleEmployeePage = () => {
  const { id } = useParams();
  const { data: pdp, isLoading } = useGetPdpByIdQuery(id!);

  return (
    <section className={cx('wrapper')}>
      <h2>Индивидуальный план развития</h2>

      {isLoading && <Loader />}

      {pdp && (
        <div className={cx('content')}>
          <div className={cx('header')}>
            <UserGoal pdp={pdp} />

            <UserInfo userId={pdp.user_id} />
          </div>

          {pdp.tasks.length > 0 && <TasksTable tasks={pdp.tasks} />}

          <Button variant="accent" href="create">
            Создать задачу
          </Button>
        </div>
      )}
    </section>
  );
};

export default SingleEmployeePage;
