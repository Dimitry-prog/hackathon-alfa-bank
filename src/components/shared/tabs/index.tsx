import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Button from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

type TabsProps = {
  tabs: {
    id: string;
    label: string;
    href: string;
  }[];
};

const Tabs = ({ tabs }: TabsProps) => {
  const { pathname } = useLocation();
  const basePath = pathname === '/' ? '' : pathname;

  return (
    <div className={cx('wrapper')}>
      {tabs.map((tab) => (
        <Button
          href={`${basePath}${tab.href}`}
          variant="link"
          className={cx('button', pathname.includes(tab.href) && 'button_active')}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
