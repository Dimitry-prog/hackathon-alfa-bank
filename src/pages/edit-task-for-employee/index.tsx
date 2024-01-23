import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import UserInfo from '@/components/shared/user-info';
import TaskForm from '@/components/shared/task-form';

const cx = classNames.bind(styles);

const EditTaskForEmployeePage = () => {
  return (
    <section className={cx('wrapper')}>
      <h2>Индивидуальный план развития</h2>

      <div className={cx('content')}>
        <UserInfo />
        <TaskForm />
      </div>
    </section>
  );
};

export default EditTaskForEmployeePage;
