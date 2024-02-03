import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { selectStatus } from '@/libs/utils.ts';
import { Task } from '@/features/pdp/types';

const cx = classNames.bind(styles);
type TasksTableProps = {
  tasks: Task[];
};
const TasksTable = ({ tasks }: TasksTableProps) => {
  return (
    <table className={cx('table')}>
      <thead className={cx('table-head')}>
        <tr className={cx('heading')}>
          <th className={cx('head-cell', 'min-width')}>№</th>
          <th className={cx('head-cell')}>Название задачи</th>
          <th className={cx('head-cell')}>Начало</th>
          <th className={cx('head-cell')}>Окончание</th>
          <th className={cx('head-cell')}>Типы задач</th>
          <th className={cx('head-cell')}>Статус</th>
          <th className={cx('head-cell')} />
        </tr>
      </thead>
      <tbody className={cx('table-body')}>
        {tasks.map((task) => (
          <tr key={task.id} className={cx('rows')}>
            <td className={cx('row')}>{task.pdp_id}</td>
            <td className={cx('row')}>{task.title}</td>
            <td className={cx('row')}>{task.starting_date}</td>
            <td className={cx('row')}>{task.deadline}</td>
            <td className={cx('row')}>{task.type.value}</td>
            <td className={cx('row')}>
              <Link to="edit" className={cx('link', selectStatus(task.status.value))}>
                {task.status.value}
              </Link>
            </td>
            <td className={cx('row')}>
              <Link to={`edit/${task.id}`} className={cx('edit')} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TasksTable;
