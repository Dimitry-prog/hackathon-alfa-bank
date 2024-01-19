import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { footerLinks, socialLinks } from '@/libs/constants';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/button';

const cx = classNames.bind(styles);

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer className={cx('footer')}>
      <div className={cx('container')}>
        <nav className={cx('nav')}>
          <ul className={cx('nav-list')}>
            {footerLinks.map((link) => (
              <li key={link.id} className={cx('item')}>
                <Link to={link.href} className={cx('item-link', pathname && 'active')}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={cx('wrapper')}>
          <div className={cx('logo')}>
            <img className={cx('image')} src="/images/footer_logo.svg" alt="Логотип Альфа банка" />
            <div>
              <p className={cx('text')}>Мобильное приложение</p>
              <p className={cx('text-xs')}>Для iOS и Android</p>
            </div>
            <nav className={cx('social')}>
              <ul className={cx('list')}>
                {socialLinks.map((link) => (
                  <li key={link.id} className={cx('element')}>
                    <Link to={link.href} className={cx('link', pathname && 'active-link')}>
                      <img src={link.src} alt={link.label} className={cx('link-img')} />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={cx('support')}>
        <div className={cx('copyright')}>
          <p className={cx('help')}>011-1111 Help Desk | IT - поддержка</p>
          <p className={cx('help')}>013-3777 Human Help | IT - поддержка</p>
        </div>
        {/* компонент Button пока в доработке */}
        <Button
          type="submit"
          className="button"
          children={undefined}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
