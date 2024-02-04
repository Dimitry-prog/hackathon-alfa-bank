import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import useUserInfo from '@/features/user/hooks/use-user-info.tsx';
import Avatar from '@/components/shared/avatar';

const cx = classNames.bind(styles);

const UserInfo = () => {
  const { first_name, last_name, position } = useUserInfo();

  return (
    <div className={cx('wrapper')}>
      <div className={cx('info')}>
        <Avatar size="m" />

        <div className={cx('name')}>
          <h3>{last_name}</h3>
          <p>{first_name}</p>
          <span>{position}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
