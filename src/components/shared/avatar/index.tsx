import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

type AvatarProps = {
  size?: 's' | 'm';
  href?: string;
};

const Avatar = ({ size = 's' }: AvatarProps) => {
  return <img className={cx('avatar', size)} src="/images/account.png" alt="Фото сотрудника" />;
};

export default Avatar;
