import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import TaskForm from '@/components/shared/task-form';

const cx = classNames.bind(styles);

const RequestTaskPage = () => {
  return (
    <section className={cx('wrapper')}>
      <h2>Новая задача</h2>

      <TaskForm />
    </section>
  );
};

export default RequestTaskPage;
