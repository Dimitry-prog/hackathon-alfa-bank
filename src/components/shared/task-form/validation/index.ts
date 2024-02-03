import { z } from 'zod';

export const taskFormSchema = z.object({
  title: z.string().min(1, { message: 'Название слишком короткое' }),
  start_date: z.coerce.number({ invalid_type_error: 'Заполните поле' }),
  deadline: z.coerce.number({ invalid_type_error: 'Заполните поле' }),
  type: z.object({
    value: z.string().optional(),
    id: z.number().optional(),
  }),
  status: z.object({
    value: z.string().optional(),
    id: z.number().optional(),
  }),
  description: z.string().min(1, { message: 'Описание слишком короткое' }),
  skills: z.string().optional(),
  comment: z.string().optional(),
});

export type TaskFormDataType = z.infer<typeof taskFormSchema>;
