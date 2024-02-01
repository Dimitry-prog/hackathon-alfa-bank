import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/ui/button';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from '@/features/auth/components/login-form/validation';
import Input from '@/components/ui/input';
import { useLoginMutation } from '../../services';
import { LoginRequestType } from '../../types';

const cx = classNames.bind(styles);

const LoginForm = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    getValues,
  } = useForm<LoginRequestType>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(loginFormSchema),
  });
  const [login] = useLoginMutation();
  const username = getValues('username');

  const onSubmit: SubmitHandler<LoginRequestType> = async (credentials) => {
    await login(credentials);
  };
  const getTitle = (username: string) => {
    if (username.length > 0) {
      return username;
    } else {
      return 'Представьтесь и входите скорее';
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cx('form')}>
      <h2>{getTitle(username)}</h2>

      {!username && (
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input label="" placeholder="email" {...field} error={errors.username?.message} />
          )}
        />
      )}
      {!!username && (
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input label="" placeholder="Пароль" {...field} error={errors.password?.message} />
          )}
        />
      )}
      {!username && (
        <Button
          variant="primary"
          type="submit"
          disabled={isSubmitting}
          className={cx('button-auth')}
        >
          {isSubmitting ? 'Поиск...' : 'Продолжить'}
        </Button>
      )}
      {!!username && (
        <Button
          type="submit"
          variant="accent"
          disabled={isSubmitting}
          className={cx('button-auth')}
        >
          {isSubmitting ? 'Входим...' : 'Войти'}
        </Button>
      )}
    </form>
  );
};

export default LoginForm;
