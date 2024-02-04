import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import EmployeeTaskForm from '@/pages/request-task/components/employee-task-form';
import { useGetMyPdpQuery } from '@/features/pdp/services';
import useUserInfo from '@/features/user/hooks/use-user-info.tsx';
import { UserRoleType } from '@/features/user/types';

const cx = classNames.bind(styles);

const RequestTaskPage = () => {
  const { data: pdp } = useGetMyPdpQuery();
  const { role } = useUserInfo();

  return (
    <section className={cx('wrapper')}>
      <h2>Новая задача</h2>

      {pdp && <EmployeeTaskForm type="create" pdpId={pdp.id} role={role as UserRoleType} />}
    </section>
  );
};

export default RequestTaskPage;
