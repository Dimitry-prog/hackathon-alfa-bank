import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Button from '@/components/ui/button';

const cx = classNames.bind(styles);

const CreateIpr = () => {
  return (
    <section className={cx('wrapper')}>
      <h2 className={cx('title')}>Мой индивидуальный план развития</h2>
      <p className={cx('text')}>План развития еще не создан. Подайте заявку</p>
      <Button className={cx('button')} href="/new_task">
        Подать заявку
      </Button>
    </section>
  );
};

export default CreateIpr;
