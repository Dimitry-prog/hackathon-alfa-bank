import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import EmployeeTaskForm from '@/pages/request-task/components/employee-task-form';
import { useGetMyPdpQuery } from '@/features/pdp/services';
import useUserInfo from '@/features/user/hooks/use-user-info.tsx';
import { UserRoleType } from '@/features/user/types';
import { useParams } from 'react-router-dom';
import { useGetTaskByIdQuery } from '@/features/tasks/servises';
import Loader from '@/components/shared/loader';

const cx = classNames.bind(styles);

const EditTaskPage = () => {
  const { id } = useParams();
  const { data: pdp, isLoading: isLoadingPdp } = useGetMyPdpQuery();
  const { data: task, isLoading: isLoadingTask } = useGetTaskByIdQuery(id!);
  const { role } = useUserInfo();

  return (
    <section className={cx('wrapper')}>
      {isLoadingPdp || (isLoadingTask && <Loader size="xl" />)}

      {pdp && task && (
        <>
          <h2>{task.title}</h2>

          <EmployeeTaskForm type="update" pdpId={pdp.id} task={task} role={role as UserRoleType} />
        </>
      )}
    </section>
  );
};

export default EditTaskPage;
