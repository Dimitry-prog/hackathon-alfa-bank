import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import ProgressBar from '@/components/shared/progress-bar';
import { PdpType } from '@/features/pdp/types';

const cx = classNames.bind(styles);

type UserGoal2Props = {
  pdp: PdpType;
};

const UserGoal2 = ({ pdp }: UserGoal2Props) => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('goal')}>
        <div>
          <span>цель развития</span>
          <p>{pdp.goal}</p>
        </div>

        <div>
          <span>состояние ИПР</span>
          <p>
            <ProgressBar step={pdp.done} totalSteps={pdp.total} />{' '}
          </p>
        </div>

        <div>
          <span>Начало ИПР</span>
          <p>{pdp.starting_date}</p>
        </div>

        <div>
          <span>Дедлайн ИПР</span>
          <p>{pdp.deadline}</p>
        </div>
      </div>
    </section>
  );
};

export default UserGoal2;
