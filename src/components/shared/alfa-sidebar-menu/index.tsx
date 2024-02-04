import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { alfaSidebarMenuLinks } from '@/libs//constants.ts';
import useUserInfo from '@/features/user/hooks/use-user-info.tsx';

const cx = classNames.bind(styles);

const AlfaSidebarMenu = () => {
  const { role } = useUserInfo();
  const navigate = role === 'employee' ? `/pdp` : `/employees`;

  return (
    <aside className={cx('menu')}>
      <p className={cx('menu__title')}>СЕРВИСЫ</p>
      <nav>
        <ul>
          <li>
            <Link to={navigate} className={cx('menu__container-link')}>
              <img src="icons/pdp.svg" alt="ИПР" className={cx('menu__icons')} />
              <label className={cx('menu__text')}>ИПР</label>
            </Link>
          </li>
          {alfaSidebarMenuLinks.map((link) => (
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
    </aside>
  );
};

export default AlfaSidebarMenu;
