import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Avatar from '../avatar';

const cx = classNames.bind(styles);

type UserInfoProps = {
  first_name: string;
  last_name: string;
  position: string;
  photo?: string;
};

const UserInfo = ({ first_name, last_name, position, photo }: UserInfoProps) => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('info')}>
        <Avatar size="m" src={`${import.meta.env.VITE_MEDIA_HOST}/${photo}`} />

        <div className={cx('name')}>
          <h3>{last_name}</h3>
          <p>{first_name}</p>
          <span>{position}</span>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
