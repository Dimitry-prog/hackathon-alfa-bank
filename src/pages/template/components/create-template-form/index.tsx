import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import Select from '@/components/ui/select';
import { useProperties } from '@/shared/hooks/use-properties.ts';
import Loader from '@/components/shared/loader';
import {
  CreateTemplateFormDataType,
  createTemplateFormSchema,
} from '@/pages/template/components/create-template-form/validation';
import Textarea from '@/components/ui/textarea';
import { useCreateTemplateMutation } from '@/features/template/services';
import { useNavigate } from 'react-router-dom';
import { useModal } from '@/shared/hooks/use-modal.ts';

const cx = classNames.bind(styles);

const CreateTemplateForm = () => {
  const { directions, grades, skills, types, isLoading } = useProperties();
  const [create] = useCreateTemplateMutation();
  const navigate = useNavigate();
  const { onOpen } = useModal();

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<CreateTemplateFormDataType>({
    defaultValues: {
      skills: [],
    },
    resolver: zodResolver(createTemplateFormSchema),
  });

  const onSubmit: SubmitHandler<CreateTemplateFormDataType> = async (data) => {
    const template = {
      title: data.title,
      description: data.description,
      skills: data.skills.map((skill) => skill.value),
      direction_id: data.direction?.id ? parseInt(data.direction?.id) : 1,
      grade_id: data.grade?.id ? parseInt(data.grade?.id) : 1,
      type_id: data.type?.id ? parseInt(data.type?.id) : 1,
      link: 'string',
      duration: 1,
      recommendation: 'string',
    };
    await create(template);
    onOpen(data.title);
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
                disabled={isSubmitting}
                error={errors.title?.message}
              />
            )}
          />

          <div className={cx('container')}>
            {directions.length && (
              <Controller
                name="direction"
                control={control}
                render={({ field }) => (
                  <Select
                    options={directions}
                    onChange={field.onChange}
                    label="Направление обучения"
                    placeholder="Выберите направление"
                    disabled={isSubmitting}
                    error={errors.direction?.value?.message}
                  />
                )}
              />
            )}

            {types.length && (
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <Select
                    options={types}
                    onChange={field.onChange}
                    label="Тип задачи"
                    placeholder="Выберите тип задачи"
                    disabled={isSubmitting}
                    error={errors.type?.value?.message}
                  />
                )}
              />
            )}
          </div>

          <div className={cx('container')}>
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
                    label="Навык"
                    placeholder="Выберите навык"
                    disabled={isSubmitting}
                    error={errors.skills?.message}
                  />
                )}
              />
            )}

            {grades.length && (
              <Controller
                name="grade"
                control={control}
                render={({ field }) => (
                  <Select
                    options={grades}
                    onChange={field.onChange}
                    label="Уровень"
                    placeholder="Выберите уровень"
                    disabled={isSubmitting}
                    error={errors.grade?.message}
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
                value={field.value}
                onChange={field.onChange}
                label="Содержание"
                placeholder="Подробно опишите задачу"
                disabled={isSubmitting}
                error={errors.description?.message}
              />
            )}
          />

          <div className={cx('buttons')}>
            <Button type="submit" variant="accent" disabled={isSubmitting}>
              {isSubmitting ? <Loader size="s" /> : 'Сохранить задачу в образец'}
            </Button>

            <Button onClick={() => navigate(-1)} type="button" variant="secondary">
              Отмена
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default CreateTemplateForm;
