import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import UserInfo from '@/components/shared/user-info';
import TasksTable from '../../features/user/components/tasks-table';
import Button from '@/components/ui/button';
import UserGoal from '@/components/shared/user-goal';
import { useGetPdpByIdQuery } from '@/features/pdp/services';
import { useEmployeeInfo } from '@/features/user/hooks/use-employee-info.tsx';
import { usePdpInfo } from '@/features/pdp/hooks/use-pdp-info.ts';

const cx = classNames.bind(styles);

const SingleEmployeePage = () => {
  const { currentEmployee } = useEmployeeInfo();
  useGetPdpByIdQuery(currentEmployee?.pdp.id || 0, { skip: !currentEmployee?.pdp?.id });
  const pdpInfo = usePdpInfo();

  return (
    <section className={cx('wrapper')}>
      <h2>Индивидуальный план развития</h2>

      <div className={cx('content')}>
        <div className={cx('container')}>
          <UserGoal
            goal={pdpInfo?.goal || ''}
            done={pdpInfo?.done || 0}
            starting_date={pdpInfo?.starting_date || ''}
            total={pdpInfo?.total || 0}
            deadline={pdpInfo?.deadline || ''}
          />
          <UserInfo
            first_name={currentEmployee!.first_name}
            last_name={currentEmployee!.last_name}
            position={currentEmployee!.position}
            photo={currentEmployee?.photo || ''}
          />
        </div>
        {pdpInfo?.tasks && <TasksTable tasks={pdpInfo.tasks} />}
        <Button variant="accent" href="create">
          Создать задачу
        </Button>
      </div>
    </section>
  );
};

export default SingleEmployeePage;
