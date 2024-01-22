import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { ReactNode, useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

type DropdownProps = {
  isOpen: boolean;
  trigger: ReactNode;
  onClose: () => void;
  children?: ReactNode;
  className?: string;
};

const Dropdown = ({ isOpen, trigger, onClose, children, className }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const classes = cx('wrapper', [className]);

  useEffect(() => {
    const el = dropdownRef?.current;

    const outsideClick = (e: Event) => {
      if (isOpen && el && !el.contains(e?.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('click', outsideClick);

    return () => {
      document.removeEventListener('click', outsideClick);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={classes}>
      {trigger}

      <div className={cx('content', isOpen && 'open')}>{children}</div>
    </div>
  );
};

export default Dropdown;
