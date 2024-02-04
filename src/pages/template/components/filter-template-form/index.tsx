import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import Select from '@/components/ui/select';
import {
  FilterTemplateFormDataType,
  filterTemplateFormSchema,
} from '@/pages/template/components/filter-template-form/validation';
import { useProperties } from '@/shared/hooks/use-properties.ts';
import Loader from '@/components/shared/loader';
import { TemplateQueryType } from '@/features/template/types';
import { useAppDispatch } from '@/libs/store.ts';
import { templateActions } from '@/features/template/slices';

const cx = classNames.bind(styles);

const FilterTemplateForm = () => {
  const { directions, creators, grades, skills, types, isLoading } = useProperties();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<FilterTemplateFormDataType>({
    resolver: zodResolver(filterTemplateFormSchema),
  });

  const onSubmit: SubmitHandler<FilterTemplateFormDataType> = (data) => {
    const query: TemplateQueryType = {
      q: data.title,
      direction: data?.direction?.value || '',
      type: data.type?.value || '',
      creator: data.creator?.value || '',
      skills: data.skills?.map((skill) => skill.id) || [],
      grade: data.grade?.map((grade) => grade.id) || [],
    };
    dispatch(templateActions.setQuery(query));
    dispatch(templateActions.setStartQueryRequest(true));
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
                label="Поиск задачи"
                placeholder="Текст"
                icon={<img src="/icons/lupa.svg" alt="Поиск" />}
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
                    isMulti
                    isSearch
                    label="Уровень"
                    placeholder="Выберите уровень"
                    disabled={isSubmitting}
                    error={errors.grade?.message}
                  />
                )}
              />
            )}
          </div>

          {creators.length && (
            <Controller
              name="creator"
              control={control}
              render={({ field }) => (
                <Select
                  options={creators}
                  onChange={field.onChange}
                  label="Создатель"
                  placeholder="Выберите название должности"
                  disabled={isSubmitting}
                  error={errors.creator?.value?.message}
                />
              )}
            />
          )}

          <div className={cx('buttons')}>
            <Button type="submit" variant="accent" disabled={isSubmitting}>
              {isSubmitting ? <Loader size="s" /> : 'Найти'}
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default FilterTemplateForm;
