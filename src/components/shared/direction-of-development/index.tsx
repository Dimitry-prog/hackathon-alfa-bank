import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { directionOfDevelopmentMock } from '@/libs/constants.ts';

const cx = classNames.bind(styles);

const DirectionOfDevelopment = () => {
  return (
    <section className={cx('wrapper')}>
      <h2>Направления развития внутри компании</h2>

      <ul className={cx('list')}>
        {directionOfDevelopmentMock.map((direc) => (
          <li className={cx('card')} key={direc.id}>
            <h4>{direc.label}</h4>
            <img src={direc.src} alt={direc.label} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DirectionOfDevelopment;
