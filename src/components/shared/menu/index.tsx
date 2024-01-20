import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { menu } from '@/libs//constants.ts';

const cx = classNames.bind(styles);

const Menu = () => {
  return (
    <div className={cx('menu')}>
      <p className={cx('menu__title')}>СЕРВИСЫ</p>
      <nav>
        <ul>
          {menu.map((link) => (
            <li key={link.id}>
              <Link to={link.href} className={cx('menu__container-link')}>
                <img src={link.imgSrc} alt={link.label} className={cx('menu__icons')} />
                <label className={cx('menu__text')}>{link.label}</label>
              </Link>
            </li>
          ))}
          <li>
            <Link to="#" className={cx('menu__container-link')}>
              <img src="icons/next.svg" alt="Загрузить еще" className={cx('menu__icons')} />
              <label className={cx('menu__text-gray')}>ещё 100</label>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
