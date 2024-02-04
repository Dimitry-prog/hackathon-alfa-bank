import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

type ProgressBarProps = {
  step: number;
  totalSteps: number;
};

const ProgressBar = ({ step, totalSteps }: ProgressBarProps) => {
  const percent = Math.ceil((step / totalSteps) * 100);

  return (
    <div className={cx('wrapper')}>
      <div>
        <span style={{ width: `${percent}%` }} />
      </div>

      <p>
        {step}/{totalSteps}
      </p>
    </div>
  );
};

export default ProgressBar;
