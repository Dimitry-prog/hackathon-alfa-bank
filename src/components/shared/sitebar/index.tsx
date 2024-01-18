import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const SiteBar = () => {
  return (
    <div className={cx('sitebar')}>
      <div className={cx('sitebar__container-btn')}>
        <button type="button" className={cx('sitebar__btn')}></button>
        <h1 className={cx('sitebar__text-btn')}>Назад</h1>
      </div>
      <Link to="#" className={cx('sitebar__container-link')}>
        <img src="../../../../public/icons/info-dev.svg" alt="" />
        <h2 className={cx('sitebar__text')}>Информация о развитии</h2>
      </Link>
      <Link to="#" className={cx('sitebar__container-link')}>
        <img src="../../../../public/icons/my-dev.svg" alt="" />
        <h2 className={cx('sitebar__text')}>Мой план развития</h2>
      </Link>
      <Link to="#" className={cx('sitebar__container-link')}>
        <img src="../../../../public/icons/komands-dev.svg" alt="" />
        <h2 className={cx('sitebar__text')}>Планы развития команды</h2>
      </Link>
    </div>
  );
};

export default SiteBar;
