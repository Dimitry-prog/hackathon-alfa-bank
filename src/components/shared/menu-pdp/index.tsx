import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { menuPdp } from '../../../libs/constants.ts';

const cx = classNames.bind(styles);

const MenuPdp = () => {
  return (
    <div className={cx('menu-pdp')}>
      <div className={cx('menu-pdp__container-btn')}>
        <button type="button" className={cx('menu-pdp__btn')}></button>
        <p className={cx('menu-pdp__text-btn')}>Назад</p>
      </div>
      <nav>
        <ul>
          {menuPdp.map((link) => (
            <li key={link.id}>
              <Link to={link.href} className={cx('menu-pdp__container-link')}>
                <img src={link.imgSrc} alt={link.label} className={cx('menu-pdp__icons')} />
                <label className={cx('menu-pdp__text')}>{link.label}</label>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MenuPdp;
