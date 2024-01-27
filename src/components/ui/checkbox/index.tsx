import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { TextareaHTMLAttributes } from 'react';

const cx = classNames.bind(styles);

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <div className={cx('wrapper')}>
      <label className={cx('label')}>
        <input
          className={cx('checkbox')}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
