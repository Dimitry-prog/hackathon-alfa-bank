import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useGetPdpByIdQuery } from '@/features/pdp/services';
import useUserInfo from '@/features/user/hooks/use-user-info.tsx';
import { UserRoleType } from '@/features/user/types';
import { useParams } from 'react-router-dom';
import TaskForm from '@/features/tasks/components/task-form';

const cx = classNames.bind(styles);

const CreateTaskPage = () => {
  const { id } = useParams();
  const { data: pdp } = useGetPdpByIdQuery(id!);
  const { role } = useUserInfo();

  return (
    <section className={cx('wrapper')}>
      <h2>Новая задача</h2>

      {pdp && <TaskForm type="create" pdpId={pdp.id} role={role as UserRoleType} />}
    </section>
  );
};

export default CreateTaskPage;
