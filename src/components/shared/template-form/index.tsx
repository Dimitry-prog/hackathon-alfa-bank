import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import Select from '@/components/ui/select';
import { statusTaskMock, typesTaskMock } from '@/libs/constants.ts';
import { TemplateFormDataType, templateFormSchema } from './validation';

const cx = classNames.bind(styles);

const TemplateForm = () => {
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<TemplateFormDataType>({
    defaultValues: {
      title: '',
      direction: {
        id: '',
        value: '',
      },
      skills: {
        id: '',
        value: '',
      },
      grade: {
        id: '',
        value: '',
      },
      duration: {
        id: '',
        value: '',
      },
      creator: {
        id: '',
        value: '',
      },
    },
    resolver: zodResolver(templateFormSchema),
  });

  const onSubmit: SubmitHandler<TemplateFormDataType> = (data) => {
    console.log(data);
    // const template = {
    //   title: data.title,
    //   direction: data.direction.value,
    //   skills: data.skills.value,
    //   grade: data.grade.value,
    //   duration: data.duration.value,
    //   creator: data.creator.value,
    // };
    // dispatch(templateActions.setTemplate(template));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cx('wrapper')}>
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <Input
            label="Поиск задачи"
            placeholder="Текст"
            {...field}
            error={errors.title?.message}
          />
        )}
      />

      <Controller
        name="direction"
        control={control}
        render={({ field }) => (
          <Select
            options={typesTaskMock}
            onChange={field.onChange}
            label="Направление обучения"
            placeholder="Выберите направление"
            error={errors.direction?.value?.message}
          />
        )}
      />

      <div className={cx('container')}>
        <Controller
          name="skills"
          control={control}
          render={({ field }) => (
            <Select
              options={typesTaskMock}
              onChange={field.onChange}
              label="Навык"
              placeholder="Выберите навык"
              error={errors.skills?.value?.message}
            />
          )}
        />

        <Controller
          name="grade"
          control={control}
          render={({ field }) => (
            <Select
              options={statusTaskMock}
              onChange={field.onChange}
              label="Уровень"
              placeholder="Выберите уровень"
              error={errors.grade?.value?.message}
            />
          )}
        />
      </div>

      <Controller
        name="duration"
        control={control}
        render={({ field }) => (
          <Select
            options={statusTaskMock}
            onChange={field.onChange}
            label="Тип задачи"
            placeholder="Выберите тип задачи"
            error={errors.duration?.value?.message}
          />
        )}
      />

      <Controller
        name="creator"
        control={control}
        render={({ field }) => (
          <Select
            options={statusTaskMock}
            onChange={field.onChange}
            label="Создатель"
            placeholder="Выберите название должности"
            error={errors.creator?.value?.message}
          />
        )}
      />

      <div className={cx('buttons')}>
        <Button type="submit" variant="accent" disabled={isSubmitting}>
          {isSubmitting ? 'Ищем задачу...' : 'Найти'}
        </Button>
      </div>
    </form>
  );
};

export default TemplateForm;
