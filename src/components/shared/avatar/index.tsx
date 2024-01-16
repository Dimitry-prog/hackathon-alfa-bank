import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Avatar = () => {
  return <div className={cx('wrapper')}></div>;
};

export default Avatar;
