import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import UserInfo from '@/components/shared/user-info';
import TaskForm from '@/components/shared/task-form';
import UserGoal from '@/components/shared/user-goal';

const cx = classNames.bind(styles);

const CreateTaskForEmployeePage = () => {
  return (
    <section className={cx('wrapper')}>
      <h2>Индивидуальный план развития</h2>

      <div className={cx('content')}>
        <div className={cx('container')}>
          <UserGoal />
          <UserInfo />
        </div>
        <TaskForm />
      </div>
    </section>
  );
};

export default CreateTaskForEmployeePage;
