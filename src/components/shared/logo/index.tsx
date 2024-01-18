import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Logo = () => {
  return (
    <div className={cx('logo')}>
      <div className={cx('logo__image')}></div>
      <p className={cx('logo__text')}>Alfa People</p>
    </div>
  );
};

export default Logo;
