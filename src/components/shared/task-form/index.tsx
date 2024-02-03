import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Button from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { TaskFormDataType, taskFormSchema } from '@/components/shared/task-form/validation';
import Select from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import DatePicker from '@/components/ui/date-picker';
import { useProperties } from '@/shared/hooks/use-properties.ts';
import { useCreateTaskMutation, useUpdateTaskMutation } from '@/features/tasks/servises';
import { CreateTaskType, TaskType } from '@/features/tasks/type';
import { formatDate } from '@/libs/utils.ts';

const cx = classNames.bind(styles);

type TaskFormProps = {
  pdpId?: number;
  initValues?: TaskType;
};

const TaskForm = ({ pdpId, initValues }: TaskFormProps) => {
  const navigate = useNavigate();
  const { statuses, types, isLoading } = useProperties();
  const [createTask] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
    control,
  } = useForm<TaskFormDataType>({
    defaultValues: {
      title: initValues?.title || '',
      start_date: initValues?.starting_date ? Date.parse(initValues.starting_date) : undefined,
      deadline: initValues?.deadline ? Date.parse(initValues.deadline) : undefined,
      type: {
        id: initValues?.type.id || 0,
        value: initValues?.type.value || '',
      },
      status: {
        id: initValues?.status.id || 0,
        value: initValues?.status.value || '',
      },
      description: initValues?.description || '',
      skills: initValues?.skills ? initValues.skills.join(', ') : '',
      comment: initValues?.chief_comment || '',
    },
    resolver: zodResolver(taskFormSchema),
  });

  console.log('values:', getValues());

  const onSubmit: SubmitHandler<TaskFormDataType> = async (data) => {
    const transformedData: CreateTaskType = {
      pdp_id: 0,
      title: data.title,
      description: data.description,
      deadline: formatDate(new Date(data.deadline)),
    };

    if (pdpId) {
      transformedData.pdp_id = Number(pdpId);
    }

    if (data?.type?.id) {
      transformedData.type_id = data.type.id;
    }

    if (data?.start_date) {
      transformedData.starting_date = formatDate(new Date(data.start_date));
    }

    if (data.skills?.trim()) {
      transformedData.skills = data.skills.split(',').map((it) => it.trim());
    }

    if (data.comment?.trim()) {
      transformedData.chief_comment = data.comment;
    }

    if (data?.status?.id) {
      transformedData.status_id = data.status.id;
    }
    try {
      if (initValues) {
        await updateTask({ body: transformedData, id: initValues.id });
      } else {
        await createTask(transformedData);
      }
      navigate(-1);
    } catch (e) {
      console.log('Что-то пошло не так');
    }
  };

  if (isLoading) {
    return <span>Загрузка...</span>;
  }

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
              options={types}
              onChange={field.onChange}
              label="Тип задачи"
              placeholder={field.value.value || 'Выберите тип задачи'}
              error={errors.type?.value?.message}
            />
          )}
        />

        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Select
              options={statuses}
              onChange={field.onChange}
              label="Статус"
              placeholder={field.value.value || 'Выберите статус'}
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
          {isSubmitting ? 'Сохраняем задачу...' : initValues ? 'Изменить' : 'Создать задачу'}
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
