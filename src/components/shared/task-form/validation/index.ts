import { z } from 'zod';

const time = new Date().getTime();
export const taskFormSchema = z.object({
  title: z.string().min(1, { message: 'Название слишком короткое' }),
  start_date: z.coerce
    .number({
      invalid_type_error: 'Заполните поле',
    })
    .min(time, { message: 'Дата не может быть в прошлом' }),
  deadline: z.coerce
    .number({
      invalid_type_error: 'Заполните поле',
    })
    .min(time, { message: 'Дата не может быть в прошлом' }),
  type: z.object({
    value: z.string().min(1, { message: 'Выберите тип задачи' }),
    id: z.string().min(1, { message: 'Выберите тип задачи' }),
  }),
  status: z.object({
    value: z.string().min(1, { message: 'Выберите роль' }),
    id: z.string().min(1, { message: 'Выберите роль' }),
  }),
  description: z.string().min(1, { message: 'Описание слишком короткое' }),
  skills: z.string().min(1, { message: 'Впишите навыки через запятую' }),
  comment: z.string().min(1, { message: 'Поле слишком короткое' }),
});

export type TaskFormDataType = z.infer<typeof taskFormSchema>;
