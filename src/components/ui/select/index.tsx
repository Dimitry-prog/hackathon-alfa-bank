import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useState } from 'react';
import Dropdown from '@/components/ui/dropdown';

const cx = classNames.bind(styles);

type SelectOptionType = {
  id: string;
  value: string;
};

type SelectProps = {
  options: SelectOptionType[];
  onChange?: (option: SelectOptionType) => void;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
};

const Select = ({
  options,
  onChange,
  disabled = false,
  label,
  error,
  placeholder = '',
  className,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(placeholder);
  const classes = cx('list', [className]);

  const handleOptionClick = (option: SelectOptionType) => {
    setIsOpen(!isOpen);
    if (onChange) {
      onChange(option);
    }
    setValue(option.value);
  };

  const handleToggleOpen = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const triggerEl = (
    <button
      onClick={handleToggleOpen}
      type="button"
      className={cx(
        'trigger',
        isOpen && 'trigger_active',
        error && 'trigger_error',
        disabled && 'trigger_disabled'
      )}
    >
      {value}
    </button>
  );

  return (
    <div className={cx('wrapper')}>
      {label && <span className={cx('label')}>{label}</span>}

      <Dropdown trigger={triggerEl} isOpen={isOpen} onClose={handleToggleOpen}>
        <ul className={classes}>
          {options.map((option) => (
            <li
              onClick={() => handleOptionClick(option)}
              key={option.id}
              className={cx('item', option.value === value && 'item_active')}
            >
              {option.value}
            </li>
          ))}
        </ul>
      </Dropdown>

      {error && <span className={cx('error')}>{error}</span>}
    </div>
  );
};

export default Select;
