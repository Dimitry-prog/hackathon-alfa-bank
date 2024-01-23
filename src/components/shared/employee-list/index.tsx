import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Employee from '@/components/shared/employee';
import { employeeList } from '@/libs/constants.ts';

const cx = classNames.bind(styles);

const EmployeeList = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper__container')}>
        <div className={cx('wrapper__container-row')}>
          <p className={cx('wrapper__title')}>Сотрудник</p>
          <button className={cx('wrapper__btn-m')}> </button>
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
        {employeeList.map((item) => (
          <Employee
            key={item.id}
            imgSrc={item.imgSrc}
            name={item.name}
            position={item.position}
            icon={item.icon}
            status={item.status}
            data={item.data}
          />
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
