import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Button from '@/components/ui/button';

const cx = classNames.bind(styles);

const EmployeeHome = () => {
  return (
    <section className={cx('wrapper')}>
      <h2>Мой индивидуальный план развития</h2>

      <Button variant="accent" className={cx('button')} href="request-task">
        Подать заявку
      </Button>
    </section>
  );
};

export default EmployeeHome;
