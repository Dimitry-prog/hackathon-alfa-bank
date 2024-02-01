import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Avatar from '../avatar';

const cx = classNames.bind(styles);

const UserInfo = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('info')}>
        <Avatar size="m" />

        <div className={cx('name')}>
          <h3>Велимирова</h3>
          <p>Анна Викторовна</p>
          <span>Дизайнер</span>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
