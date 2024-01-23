import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
type EmployeeProps = {
  key: string;
  imgSrc: string;
  name: string;
  position: string;
  icon: string;
  status: string;
  data: string;
};

const Employee = ({ key, imgSrc, name, position, icon, status, data }: EmployeeProps) => {
  return (
    <li key={key} className={cx('employee')}>
      <div className={cx('employee__container')}>
        <div className={cx('employee__data')}>
          <img className={cx('employee__avatar')} src={imgSrc} alt={name} />
          <div className={cx('employee__info')}>
            <h4 className={cx('employee__name')}>{name}</h4>
            <p className={cx('employee__position')}>{position}</p>
          </div>
        </div>
        <div className={cx('employee__condition')}>
          <div>
            <img className={cx('employee__icon')} src={icon} alt={status} />
            <p className={cx('employee__text')}>{status}</p>
          </div>
        </div>
        <div className={cx('employee__condition')}>
          <p className={cx('employee__text')}>{data}</p>
        </div>
        <Link to="/development-information" className={cx('employee__link')} />
      </div>
    </li>
  );
};

export default Employee;
