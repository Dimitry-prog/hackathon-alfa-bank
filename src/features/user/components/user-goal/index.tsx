import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import ProgressBar from '@/components/shared/progress-bar';
import { PdpType } from '@/features/pdp/types';

const cx = classNames.bind(styles);

type UserGoalProps = {
  pdp: PdpType;
};

const UserGoal = ({ pdp }: UserGoalProps) => {
  return (
    <div className={cx('wrapper')}>
      <div>
        <span>цель развития</span>
        <p>{pdp.goal}</p>
      </div>

      <div>
        <span>состояние ИПР</span>
        <ProgressBar step={pdp.done} totalSteps={pdp.total} />
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
  );
};

export default UserGoal;
