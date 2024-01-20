import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Logo = () => {
  return (
    <div className={cx('logo')}>
      <img className={cx('logo__image')} src="/images/logo_image.svg" alt="Логотип" />
      <p className={cx('logo__text')}>Alfa People</p>
    </div>
  );
};

export default Logo;
