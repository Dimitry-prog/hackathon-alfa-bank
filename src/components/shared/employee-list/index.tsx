import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Employee from '@/components/shared/employee';

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
      <Employee />
    </div>
  );
};

export default EmployeeList;
