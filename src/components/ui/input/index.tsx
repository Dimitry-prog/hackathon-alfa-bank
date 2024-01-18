import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { ChangeEvent } from 'react';

const cx = classNames.bind(styles);

type InputProps = {
  type: string;
  value: string;
  onChange: (value: string) => void;
  name?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  icon?: boolean;
};

const Input: React.FC<InputProps> = ({ label, value, onChange, placeholder, icon }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={cx('input-container')}>
      {icon && <span className={cx('input-icon')}></span>}
      <label htmlFor={cx('input-field')}>{label}</label>
      <input
        className={cx('input-field')}
        type="text"
        id="input-field"
        name="input-field"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <span className={cx('input-error')}>{ }</span>
    </div>
  );
};

export default Input;
