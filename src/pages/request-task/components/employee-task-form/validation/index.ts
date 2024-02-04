import { z } from 'zod';

const time = new Date().getTime();
export const employeeTaskFormSchema = z.object({
  title: z.string().min(1, { message: 'Название слишком короткое' }),
  starting_date: z.coerce
    .number({
      invalid_type_error: 'Заполните поле',
    })
    .min(time, { message: 'Дата не может быть в прошлом' })
    .optional(),
  deadline: z.coerce
    .number({
      invalid_type_error: 'Заполните поле',
    })
    .min(time, { message: 'Дата не может быть в прошлом' })
    .optional(),
  type: z
    .object({
      value: z.string(),
      id: z.number(),
    })
    .optional(),
  status: z.object({
    value: z.string().min(1, { message: 'Выберите статус' }),
    id: z.number().min(1, { message: 'Выберите статус' }),
  }),
  description: z.string().min(1, { message: 'Описание слишком короткое' }),
  skills: z
    .object({
      value: z.string(),
      id: z.number(),
    })
    .array()
    .optional(),
  comment: z.string().optional(),
});

export type EmployeeTaskFormDataType = z.infer<typeof employeeTaskFormSchema>;
