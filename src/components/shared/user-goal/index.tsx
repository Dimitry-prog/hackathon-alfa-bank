import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const UserGoal = () => {
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
    </section>
  );
};

export default UserGoal;
