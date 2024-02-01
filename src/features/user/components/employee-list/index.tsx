import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Employee from '@/features/user/components/employee';
import { EmployeeType } from '../../types';
import { useGetEmployeesQuery } from '../../services';
import { userSelectors } from '../../slices';
import { useAppSelector } from '@/libs/store';

const cx = classNames.bind(styles);

const EmployeeList = () => {
  useGetEmployeesQuery();
  const employeesList = useAppSelector(userSelectors.getEmployees);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper__container')}>
        <div className={cx('wrapper__container-row')}>
          <p className={cx('wrapper__title')}>Сотрудник</p>
          <button className={cx('wrapper__btn-m')}></button>
        </div>

        <div className={cx('wrapper__container-row')}>
          <p className={cx('wrapper__title')}>Состояние ИПР</p>
          <button className={cx('wrapper__btn-s')}></button>
        </div>
        <div className={cx('wrapper__container-column')}>
          <p className={cx('wrapper__title')}>Срок ИПР</p>
        </div>
      </div>
      <ul>
        {employeesList.map((item: EmployeeType) => (
          <Employee
            id={item.id}
            first_name={item.first_name}
            last_name={item.last_name}
            position={item.position}
            photo={item.photo}
            pdp={item.pdp}
          />
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
