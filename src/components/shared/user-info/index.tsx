import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Avatar from '@/components/shared/avatar';

const cx = classNames.bind(styles);

const UserInfo = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('goal')}>
        <div>
          <span>цель развития</span>
          <p>Lead-дизайнер</p>
        </div>

        <div>
          <span>состояние ИПР</span>
          <p>нет</p>
        </div>

        <div>
          <span>Начало ИПР</span>
          <p>20.12.2024</p>
        </div>

        <div>
          <span>Дедлайн ИПР</span>
          <p>28.12.2024</p>
        </div>
      </div>

      <div className={cx('info')}>
        <Avatar size="m" />

        <div className={cx('name')}>
          <h3>Велимирова</h3>
          <p>Анна Викторовна</p>
          <span>Дизайнер</span>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
