import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Button from '@/components/ui/button';
import { zodResolver } from "@hookform/resolvers/zod";
import { DpdFormDataType, dpdFormSchema } from "@/components/shared/dpd-form/validation";

const cx = classNames.bind(styles);

const DpdForm = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<DpdFormDataType>({
    resolver: zodResolver(dpdFormSchema)
  });

  const onSubmit:SubmitHandler<DpdFormDataType> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cx('wrapper')}>
      <Controller
        name=""
        control={control}
        render={({ field }) => (
          <Input label="Название задачи" placeholder="Введите название задачи" error={errors.} {...field} />
        )}
      />

      <div className={cx('container')}>
        <Controller
          name=""
          control={control}
          render={({ field }) => (
            <Input label="Дата начала" placeholder="Выберите дату" error={errors.} {...field} />
          )}
        />

        <Controller
          name=""
          control={control}
          render={({ field }) => (
            <Input label="Дата окончания" placeholder="Выберите дату" error={errors.} {...field} />
          )}
        />
      </div>

      <div className={cx('container')}>
        <Controller
          name=""
          control={control}
          render={({ field }) => (
            <Input label="Тип задачи" placeholder="Выберите тип задачи" error={errors.} {...field} />
          )}
        />

        <Controller
          name=""
          control={control}
          render={({ field }) => <Input label="Статус" placeholder="Выберите статус" error={errors.} {...field} />}
        />
      </div>

      <Controller
        name=""
        control={control}
        render={({ field }) => (
          <Input label="Содержание" placeholder="В этом поле опишите подробно задачу" error={errors.} {...field} />
        )}
      />

      <Controller
        name=""
        control={control}
        render={({ field }) => (
          <Input label="Навыки" placeholder="Например, ведение деловой переписки" error={errors.} {...field} />
        )}
      />

      <Controller
        name=""
        control={control}
        render={({ field }) => (
          <Textarea
            label="Комментарий"
            placeholder="В этом поле можете описать более подробно задачу"
            error={errors.}
            {...field}
          />
        )}
      />

      <div className={cx('buttons')}>
        <Button type="submit" variant="accent" disabled={isSubmitting}>
          {isSubmitting ? 'Сохраняем задачу...' : 'Создать задачу'}
        </Button>

        <Button variant="secondary">Выйти без сохранения</Button>
      </div>
    </form>
  );
};

export default DpdForm;
