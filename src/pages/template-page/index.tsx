import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import TemplateForm from '@/components/shared/template-form';
import { useLoginMutation } from '@/features/auth/services';

const cx = classNames.bind(styles);

const TemplatePage = () => {
  // ниже 2 строки для проверки запроса
  const [login] = useLoginMutation();
  useEffect(() => {
    login({
      username: 'email5@email.com',
      password: 'password',
    });
  }, [])

  return (
    <section className={cx('wrapper')}>
      <h2>Конструктор ИПР</h2>

      <TemplateForm />
    </section>
  );
};

export default TemplatePage;
