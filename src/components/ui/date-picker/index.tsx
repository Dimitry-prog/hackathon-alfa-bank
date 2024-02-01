import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { Calendar } from '@alfalab/core-components-calendar';
import { ControllerRenderProps } from 'react-hook-form';
import Dropdown from '@/components/ui/dropdown';
import { formattedDate } from '@/libs/utils.ts';

const cx = classNames.bind(styles);

type DatePickerProps = {
  value: number;
  onChange: (...event: unknown[]) => void;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
  field?: ControllerRenderProps<{
    title: string;
    start_date: number;
    deadline: number;
    type: {
      id: string;
      value: string;
    };
    status: {
      id: string;
      value: string;
    };
    description: string;
    skills: string;
    comment: string;
  }>;
};

const DatePicker = ({
  disabled = false,
  label,
  value,
  onChange,
  error,
  placeholder = '',
  className,
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(placeholder);
  const classes = cx('calendar', [className]);

  const handleOptionClick = () => {
    setIsOpen(false);
    if (value) {
      setDate(formattedDate(value as number));
    }
  };

  const handleToggleOpen = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    handleOptionClick();
  }, [value]);

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
          value={value as number}
          open={isOpen}
          responsive
          onChange={onChange}
          className={classes}
        />
      </Dropdown>

      {error && <span className={cx('error')}>{error}</span>}
    </div>
  );
};

export default DatePicker;
