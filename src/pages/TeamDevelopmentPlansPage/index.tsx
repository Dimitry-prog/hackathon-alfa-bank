import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import UserInfo from '@/components/shared/user-info';
import TableRow from '@/components/shared/tableRow';
import Button from '@/components/ui/button';

const cx = classNames.bind(styles);

const TeamDevelopmentPlansPage = () => {
  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('title')}>Индивидуальный план развития</h1>
      <UserInfo />
      <TableRow />
      <Button className={cx('button')} href="#">
        Создать задачу
      </Button>
    </div>
  );
};

export default TeamDevelopmentPlansPage;
