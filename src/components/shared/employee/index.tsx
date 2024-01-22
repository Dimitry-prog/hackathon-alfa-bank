import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Employee = () => {
  return (
    <div className={cx('employee')}>
      <div className={cx('employee__container')}>
        <div className={cx('employee__data')}>
          <img
            className={cx('employee__avatar')}
            src="/images/foto-employee.png"
            alt="Фото сотрудника"
          />
          <div className={cx('employee__info')}>
            <h4 className={cx('employee__name')}>
              Константинов-Полонский-Георгиевский Владимир Владиславович
            </h4>
            <p className={cx('employee__about')}>Frontend-разработчик</p>
          </div>
        </div>
        <div className={cx('employee__condition')}>
          <div>
            <img className={cx('employee__icon')} src="/icons/no-pdp.svg" alt="нет ИПР" />
            <p className={cx('employee__text')}>нет ИПР</p>
          </div>
        </div>
        <div className={cx('employee__condition')}>
          <p className={cx('employee__text')}>нет</p>
        </div>
      </div>
    </div>
  );
};

export default Employee;
