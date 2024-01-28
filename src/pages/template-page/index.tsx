import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import TemplateForm from '@/components/shared/template-form';

const cx = classNames.bind(styles);

const TemplatePage = () => {
  return (
    <section className={cx('wrapper')}>
      <h2>Конструктор ИПР</h2>

      <TemplateForm />
    </section>
  );
};

export default TemplatePage;
