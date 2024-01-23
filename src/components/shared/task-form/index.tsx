import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Button from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { TaskFormDataType, taskFormSchema } from '@/components/shared/task-form/validation';
import DatePicker from '@/components/ui/date-picker';
import Select from '@/components/ui/select';
import { statusTaskMock, typesTaskMock } from '@/libs/constants.ts';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/libs/store.ts';
import { userActions } from '@/features/user/slices';

const cx = classNames.bind(styles);

const TaskForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<TaskFormDataType>({
    defaultValues: {
      title: '',
      start_date: undefined,
      deadline: undefined,
      type: {
        id: '',
        value: '',
      },
      status: {
        id: '',
        value: '',
      },
      description: '',
      skills: '',
      comment: '',
    },
    resolver: zodResolver(taskFormSchema),
  });

  const onSubmit: SubmitHandler<TaskFormDataType> = (data) => {
    console.log(data);
    const task = {
      title: data.title,
      start_date: data.start_date,
      deadline: data.deadline,
      type: data.type.value,
      status: data.type.value,
      description: data.description,
      skills: data.skills,
      comment: data.comment,
    };
    dispatch(userActions.setUserTask(task));
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cx('wrapper')}>
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <Input
            label="Название задачи"
            placeholder="Введите название задачи"
            {...field}
            error={errors.title?.message}
          />
        )}
      />

      <div className={cx('container')}>
        <Controller
          name="start_date"
          control={control}
          render={({ field }) => (
            <DatePicker
              value={field.value}
              onChange={field.onChange}
              label="Дата начала"
              placeholder="Выберите дату"
              error={errors.start_date?.message}
            />
          )}
        />

        <Controller
          name="deadline"
          control={control}
          render={({ field }) => (
            <DatePicker
              value={field.value}
              onChange={field.onChange}
              label="Дата окончания"
              placeholder="Выберите дату"
              error={errors.deadline?.message}
            />
          )}
        />
      </div>

      <div className={cx('container')}>
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <Select
              options={typesTaskMock}
              onChange={field.onChange}
              label="Тип задачи"
              placeholder="Выберите тип задачи"
              error={errors.type?.value?.message}
            />
          )}
        />

        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Select
              options={statusTaskMock}
              onChange={field.onChange}
              label="Статус"
              placeholder="Выберите статус"
              error={errors.status?.value?.message}
            />
          )}
        />
      </div>

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Textarea
            label="Содержание"
            placeholder="Подробно опишите задачу"
            {...field}
            error={errors.description?.message}
          />
        )}
      />

      <Controller
        name="skills"
        control={control}
        render={({ field }) => (
          <Input
            label="Навыки"
            placeholder="Например, ведение деловой переписки"
            {...field}
            error={errors.skills?.message}
          />
        )}
      />

      <Controller
        name="comment"
        control={control}
        render={({ field }) => (
          <Textarea
            label="Комментарий"
            placeholder="В этом поле можете описать более подробно задачу"
            {...field}
            error={errors.comment?.message}
          />
        )}
      />

      <div className={cx('buttons')}>
        <Button type="submit" variant="accent" disabled={isSubmitting}>
          {isSubmitting ? 'Сохраняем задачу...' : 'Создать задачу'}
        </Button>

        <Button
          onClick={() => {
            navigate(-1);
            reset();
          }}
          variant="secondary"
        >
          Выйти без сохранения
        </Button>
      </div>
    </form>
  );
};

export default TaskForm;
