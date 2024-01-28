import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Select from '@/components/ui/select';
import Button from '@/components/ui/button';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserRoleType } from '@/features/user/types';
import { userActions } from '@/features/user/slices';
import { useAppDispatch } from '@/libs/store.ts';
import { useNavigate } from 'react-router-dom';
import {
  LoginFormDataType,
  loginFormSchema,
} from '@/features/auth/components/login-form/validation';

const cx = classNames.bind(styles);

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<LoginFormDataType>({
    defaultValues: {
      role: {
        id: '',
        value: '',
      },
    },
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginFormDataType> = async (data) => {
    console.log(data);
    const user = {
      first_name: 'fdhfgf',
      role: data.role.value as UserRoleType,
      id: '2235',
      last_name: '',
      patronymic_name: '',
      position: '',
      photo: '',
      email: '',
      is_active: false,
      is_superuser: false,
      is_verified: false,
    };
    dispatch(userActions.setToken('sdgsdrr'));
    dispatch(userActions.setUserRole(data.role.value as UserRoleType));
    dispatch(userActions.setUser(user));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cx('form')}>
      <h2>Представьтесь и входите скорее</h2>

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
  );
};

export default LoginForm;
