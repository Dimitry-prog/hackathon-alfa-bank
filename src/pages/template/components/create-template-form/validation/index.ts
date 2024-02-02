import { z } from 'zod';

export const createTemplateFormSchema = z.object({
  title: z
    .string({
      required_error: 'Заполните поле',
      invalid_type_error: 'Заполните поле',
    })
    .min(1, 'Заполните поиск'),
  direction: z
    .object({
      value: z.string(),
      id: z.string(),
    })
    .optional(),
  type: z
    .object({
      value: z.string(),
      id: z.string(),
    })
    .optional(),
  skills: z
    .object({
      value: z.string().min(1, 'Выберите навык'),
      id: z.number().min(1, 'Выберите навык'),
    })
    .array()
    .min(1, 'Выберите навык'),
  grade: z
    .object({
      value: z.string(),
      id: z.string(),
    })
    .optional(),
  description: z
    .string({
      required_error: 'Заполните поле',
      invalid_type_error: 'Заполните поле',
    })
    .min(1, 'Заполните поиск'),
});

export type CreateTemplateFormDataType = z.infer<typeof createTemplateFormSchema>;
