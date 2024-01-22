import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { Calendar } from '@alfalab/core-components-calendar';
import { ControllerRenderProps } from 'react-hook-form';
import Dropdown from '@/components/ui/dropdown';
import { formattedDate } from '@/libs/utils.ts';

const cx = classNames.bind(styles);

type DatePickerProps = {
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
  field: ControllerRenderProps;
};

const DatePicker = ({
  disabled = false,
  label,
  error,
  placeholder = '',
  className,
  field,
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(placeholder);
  const classes = cx('calendar', [className]);

  const handleOptionClick = () => {
    setIsOpen(false);
    if (field.value) {
      setDate(formattedDate(field.value));
    }
  };

  const handleToggleOpen = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    handleOptionClick();
  }, [field.value]);

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
      {date}
    </button>
  );

  return (
    <div className={cx('wrapper')}>
      {label && <span className={cx('label')}>{label}</span>}

      <Dropdown trigger={triggerEl} isOpen={isOpen} onClose={handleToggleOpen}>
        <Calendar
          value={field.value}
          open={isOpen}
          responsive
          onChange={field.onChange}
          className={classes}
        />
      </Dropdown>

      {error && <span className={cx('error')}>{error}</span>}
    </div>
  );
};

export default DatePicker;
