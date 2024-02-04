import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import Button from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import Select from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import DatePicker from '@/components/ui/date-picker';
import {
  EmployeeTaskFormDataType,
  employeeTaskFormSchema,
} from '@/pages/request-task/components/employee-task-form/validation';
import Loader from '@/components/shared/loader';
import { useProperties } from '@/shared/hooks/use-properties.ts';
import { useCreateTaskMutation } from '@/features/tasks/servises';
import { formattedDate } from '@/libs/utils.ts';
import { defaultValuesEmployeeFormData } from '@/libs/constants.ts';
import { TaskType } from '@/features/tasks/type';
import { UserRoleType } from '@/features/user/types';

const cx = classNames.bind(styles);

type EmployeeTaskFormProps = {
  pdpId?: number;
  type: 'create' | 'update';
  task?: TaskType;
  role: UserRoleType;
};

const EmployeeTaskForm = ({ pdpId, task, type, role }: EmployeeTaskFormProps) => {
  const navigate = useNavigate();
  const { statuses, types, skills, isLoading } = useProperties();
  const editStatuses =
    type === 'create'
      ? statuses.filter((status) => status.value !== 'Исполнена')
      : statuses.filter((status) => status.value !== 'Заявка');
  const isDisabledEditing = role === 'employee' && type === 'update';

  let updateDefValue;
  if (task) {
    const typeId = types.find((type) => type.id === task.type.id);
    const statusId = statuses.find((status) => status.id === task.status.id);
    const startingDate = new Date(task.starting_date).getTime();
    const deadline = new Date(task.deadline).getTime();

    updateDefValue = {
      type: typeId,
      status: statusId,
      title: task.title,
      description: task.description,
      skills: task.skills,
      comment: task.employee_comment,
      starting_date: startingDate,
      deadline: deadline,
    };
  }

  const initialValues = type === 'update' && task ? updateDefValue : defaultValuesEmployeeFormData;
  const [createTask] = useCreateTaskMutation();

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<EmployeeTaskFormDataType>({
    defaultValues: initialValues,
    resolver: zodResolver(employeeTaskFormSchema),
  });

  const onSubmit: SubmitHandler<EmployeeTaskFormDataType> = async (data) => {
    const employeeTask = {
      pdp_id: pdpId,
      title: data.title,
      description: data.description,
      employee_comment: data.comment,
      starting_date: data.starting_date
        ? formattedDate(data.starting_date)
        : formattedDate(new Date().getTime()),
      deadline: data.deadline ? formattedDate(data.deadline) : formattedDate(new Date().getTime()),
    };

    await createTask(employeeTask);
  };

  return (
    <>
      {isLoading ? (
        <Loader size="xl" />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={cx('wrapper')}>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Input
                label="Название задачи"
                placeholder="Введите название задачи"
                {...field}
                disabled={isDisabledEditing || isSubmitting}
                error={errors.title?.message}
              />
            )}
          />

          <div className={cx('container')}>
            <Controller
              name="starting_date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  value={field.value as number}
                  onChange={field.onChange}
                  label="Дата начала"
                  placeholder="Выберите дату"
                  disabled={isDisabledEditing || isSubmitting}
                  error={errors.starting_date?.message}
                />
              )}
            />

            <Controller
              name="deadline"
              control={control}
              render={({ field }) => (
                <DatePicker
                  value={field.value as number}
                  onChange={field.onChange}
                  label="Дата окончания"
                  placeholder="Выберите дату"
                  disabled={isDisabledEditing || isSubmitting}
                  error={errors.deadline?.message}
                />
              )}
            />
          </div>

          <div className={cx('container')}>
            {types.length && (
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <Select
                    options={types}
                    onChange={field.onChange}
                    defaultValue={field.value?.value}
                    label="Тип задачи"
                    placeholder="Выберите тип задачи"
                    disabled={isDisabledEditing || isSubmitting}
                    error={errors.type?.value?.message}
                  />
                )}
              />
            )}

            {statuses.length && (
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select
                    options={editStatuses}
                    onChange={field.onChange}
                    label="Статус"
                    defaultValue={field.value?.value}
                    placeholder="Выберите статус"
                    disabled={isSubmitting}
                    error={errors.status?.value?.message}
                  />
                )}
              />
            )}
          </div>

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Textarea
                label="Содержание"
                placeholder="Подробно опишите задачу"
                {...field}
                disabled={isDisabledEditing || isSubmitting}
                error={errors.description?.message}
              />
            )}
          />

          {skills.length && (
            <Controller
              name="skills"
              control={control}
              render={({ field }) => (
                <Select
                  options={skills}
                  onChange={field.onChange}
                  isMulti
                  isSearch
                  multiDefaultValues={field.value}
                  label="Навык"
                  placeholder="Выберите навык"
                  disabled={isDisabledEditing || isSubmitting}
                  error={errors.skills?.message}
                />
              )}
            />
          )}

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
              {isSubmitting ? (
                <Loader size="s" />
              ) : type === 'create' ? (
                'Создать задачу'
              ) : (
                'Обновить задачу'
              )}
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
      )}
    </>
  );
};

export default EmployeeTaskForm;
