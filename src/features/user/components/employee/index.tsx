import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import ProgressBar from '@/components/shared/progress-bar';
import Avatar from '@/components/shared/avatar';

const cx = classNames.bind(styles);
type EmployeeProps = {
  id: number;
  first_name: string;
  last_name: string;
  patronymic_name?: string | null;
  position: string;
  photo?: string;
  pdp: {
    goal: string;
    deadline: string;
    id: number;
    done: number;
    total: number;
  };
};

const Employee = ({ id, first_name, last_name, position, photo, pdp }: EmployeeProps) => {
  return (
    <li key={id} className={cx('employee')}>
      <div className={cx('employee__container')}>
        <div className={cx('employee__data')}>
          <Avatar src={photo} />
          <div className={cx('employee__info')}>
            <h4 className={cx('employee__name')}>
              {first_name} {last_name}
            </h4>
            <p className={cx('employee__position')}>{position}</p>
          </div>
        </div>
        <div className={cx('employee__condition')}>
          {!pdp && (
            <div>
              <img className={cx('employee__icon')} src="@/icons/no-pdp" alt="Нет ИПР" />
              <p className={cx('employee__text')}>Нет ИПР</p>
            </div>
          )}
          {pdp && (
            <div className={cx('employee__progress-bar')}>
              <ProgressBar step={pdp.done} totalSteps={pdp.total} />
            </div>
          )}
        </div>
        <div className={cx('employee__condition')}>
          {pdp.deadline && <p className={cx('employee__text')}>{pdp.deadline}</p>}
          {!pdp && <p className={cx('employee__text')}>нет</p>}

          <Link to={`employees/${id}`} className={cx('employee__link')} />
        </div>
      </div>
    </li>
  );
};

export default Employee;
