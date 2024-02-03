import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import UserInfo from '@/components/shared/user-info';
import TaskForm from '@/components/shared/task-form';
import UserGoal from '@/components/shared/user-goal';
import { useEmployeeInfo } from '@/features/user/hooks/use-employee-info';
import { useGetPdpByIdQuery } from '@/features/pdp/services';
import { usePdpInfo } from '@/features/pdp/hooks/use-pdp-info';

const cx = classNames.bind(styles);

const CreateTaskForEmployeePage = () => {
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
        <TaskForm pdpId={currentEmployee?.pdp.id} />
      </div>
    </section>
  );
};

export default CreateTaskForEmployeePage;
