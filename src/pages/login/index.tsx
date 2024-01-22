import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LoginFormDataType, loginFormSchema } from '@/pages/login/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import Select from '@/components/ui/select';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { useAppDispatch } from '@/libs/store.ts';
import { userActions } from '@/features/user/slices';
import { UserRole } from '@/features/user/types';

const cx = classNames.bind(styles);

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<LoginFormDataType>({
    defaultValues: {
      name: '',
      role: {
        id: '',
        value: '',
      },
    },
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginFormDataType> = async (data) => {
    console.log(data);
    dispatch(userActions.setToken('sdgsdrr'));
    dispatch(userActions.setUserRole(data.role.value as UserRole));
    navigate('/');
  };

  return (
    <section className={cx('wrapper')}>
      <h2>LoginPage</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={cx('form')}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              label="Имя"
              placeholder="Введите имя"
              onChange={field.onChange}
              value={field.value}
              error={errors.name?.message}
            />
          )}
        />

        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <Select
              options={[
                { id: '1', value: 'chief' },
                { id: '2', value: 'employee' },
              ]}
              label="Роль"
              placeholder="Выберите роль"
              onChange={field.onChange}
              error={errors.role?.value?.message}
            />
          )}
        />

        <Button type="submit" variant="accent" disabled={isSubmitting}>
          {isSubmitting ? 'Входим...' : 'Войти'}
        </Button>
      </form>
    </section>
  );
};

export default LoginPage;
