import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Logo from '@/components/shared/logo';
import Avatar from '../avatar';
import Input from '@/components/ui/input';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Header = () => {
  const [value, setValue] = useState('');
  return (
    <header className={cx('header')}>
      <Logo />
      <menu className={cx('header__menu')}>
        <ul className={cx('header__menu-list')}>
          <li className={cx('header__menu-item')}>
            <a href="#">Контакты</a>
          </li>
          <li className={cx('header__menu-item')}>
            <a href="#">Всё о работе</a>
          </li>
          <li className={cx('header__menu-item')}>
            <a href="#">Подразделения</a>
          </li>
        </ul>
      </menu>
      <div className={cx('header__wrapper')}>
        <Input type={'text'} icon placeholder={'Поиск'} value={value} onChange={setValue} />
        <div className={cx('header__alert')}></div>
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
