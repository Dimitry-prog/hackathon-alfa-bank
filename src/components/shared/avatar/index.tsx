import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Avatar = () => {
  return <div className={cx('avatar')}></div>;
};

export default Avatar;
