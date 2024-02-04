import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import useUserInfo from '@/features/user/hooks/use-user-info.tsx';

const cx = classNames.bind(styles);

type AvatarProps = {
  size?: 's' | 'm';
  src?: string;
};

const Avatar = ({ size = 's', src }: AvatarProps) => {
  const { photo } = useUserInfo();

  return (
    <div className={cx('wrapper', size)}>
      <img
        src={
          photo
            ? `${import.meta.env.VITE_MEDIA_HOST}/${photo}`
            : src
              ? src
              : '/images/no_avatar.png'
        }
        alt="аватар пользователя"
        className={cx(size)}
      />
    </div>
  );
};

export default Avatar;
