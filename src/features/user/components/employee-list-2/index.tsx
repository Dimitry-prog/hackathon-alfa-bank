import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import Avatar from '@/components/shared/avatar';
import ProgressBar from '@/components/shared/progress-bar';
import Checkbox from '@/components/ui/checkbox';
import { EmployeeType } from '@/features/user/types';

const cx = classNames.bind(styles);

type EmployeeList2Props = {
  employees: EmployeeType[];
  employeeIds: number[];
  onChange: (id: number) => void;
  isView?: boolean;
};

const EmployeeList2 = ({
  employees,
  onChange,
  employeeIds,
  isView = false,
}: EmployeeList2Props) => {
  return (
    <table className={cx('wrapper')}>
      <thead className={cx('head')}>
        <tr>
          <th />
          <th>Сотрудник</th>
          <th>Состояние ИПР</th>
          <th>Срок ИПР</th>
          {!isView && <th />}
        </tr>
      </thead>
      <tbody className={cx('body')}>
        {employees.map((employee) => (
          <tr key={employee.id} className={cx('rows')}>
            <td>
              <Checkbox
                name={employee.id.toString()}
                checked={Boolean(employeeIds.find((id) => id === employee.id))}
                onChange={() => onChange(employee.id)}
                className={cx('checkbox')}
              />
            </td>
            <td>
              <div className={cx('person')}>
                <Avatar src={employee.photo} />
                <div className={cx('info')}>
                  <h5>
                    {employee.first_name} {employee.last_name}
                  </h5>
                  <span>{employee.position}</span>
                </div>
              </div>
            </td>
            <td>
              <>
                {!employee.pdp && (
                  <div className={cx('status')}>
                    <img src="/icons/no-pdp" alt="Нет ИПР" />
                    <p>Нет ИПР</p>
                  </div>
                )}
                {employee.pdp && (
                  <ProgressBar step={employee.pdp.done} totalSteps={employee.pdp.total} />
                )}
              </>
            </td>
            <td>
              <div className={cx('deadline', isView && 'deadline_view')}>
                {employee.pdp.deadline && <p>{employee.pdp.deadline}</p>}
                {!employee.pdp && <p>нет</p>}
              </div>
            </td>
            {!isView && (
              <td>
                <Link to={`${employee.id}`} className={cx('view')} />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList2;
