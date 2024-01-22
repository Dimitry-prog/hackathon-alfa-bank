import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { sidebarMenuLinks } from '@/libs/constants.ts';

const cx = classNames.bind(styles);

type SidebarMenuProps = {
  role: 'chief' | 'employee';
};

const SidebarMenu = ({ role }: SidebarMenuProps) => {
  const { pathname } = useLocation();

  return (
    <aside className={cx('wrapper')}>
      <button type="button" className={cx('back')} aria-label="вернуться назад">
        Назад
      </button>

      <nav>
        <ul className={cx('list')}>
          {sidebarMenuLinks
            .filter((rol) => rol.role === role)[0]
            ?.links?.map((link) => (
              <li key={link.id}>
                <Link to={link.href} className={cx('link', pathname === link.href && 'active')}>
                  <img src={link.imgSrc} alt={link.label} className={cx('icon')} />
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarMenu;
