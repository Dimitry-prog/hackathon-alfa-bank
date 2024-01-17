import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const BtnBack = () => {
  return (
    <div className={cx('wrapper')}>
      <button type="button" className={cx('wrapper__btn')}></button>
      <h1 className={cx('wrapper__title')}>Назад</h1>
    </div>
  );
};

export default BtnBack;
