import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { tasks } from '@/libs/constants';
import { Link } from 'react-router-dom';
import { selectStatus } from '@/libs/utils';

const cx = classNames.bind(styles);

const TableRow = () => {
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
        </tr>
      </thead>
      <tbody className={cx('table-body')}>
        {tasks.map((task) => (
          <tr key={task.id} className={cx('rows')}>
            <td className={cx('row')}>{task.pdp_id}</td>
            <td className={cx('row')}>{task.description}</td>
            <td className={cx('row')}>{task.start_date}</td>
            <td className={cx('row')}>{task.deadline}</td>
            <td className={cx('row')}>{task.skills}</td>
            <td className={cx('row')}>
              <Link to="/edit_task" className={cx('link', selectStatus(task.status))}>
                {task.status}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableRow;
