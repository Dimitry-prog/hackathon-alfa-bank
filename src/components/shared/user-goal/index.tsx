import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import ProgressBar from '@/components/shared/progress-bar';

const cx = classNames.bind(styles);

type UserGoalProps = {
  goal: string;
  deadline: string;
  starting_date: string;
  done: number;
  total: number;
};

const UserGoal = ({ goal, deadline, starting_date, done, total }: UserGoalProps) => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('goal')}>
        <div>
          <span>цель развития</span>
          <p>{goal}</p>
        </div>

        <div>
          <span>состояние ИПР</span>
          <p>
            <ProgressBar step={done} totalSteps={total} />{' '}
          </p>
        </div>

        <div>
          <span>Начало ИПР</span>
          <p>{starting_date}</p>
        </div>

        <div>
          <span>Дедлайн ИПР</span>
          <p>{deadline}</p>
        </div>
      </div>
    </section>
  );
};

export default UserGoal;
