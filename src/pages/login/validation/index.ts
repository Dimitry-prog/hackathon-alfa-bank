import { z } from 'zod';

export const loginFormSchema = z.object({
  name: z.string().min(1, { message: 'Имя слишком короткое' }),
  role: z.object({
    value: z.string().min(1, { message: 'Выберите роль' }),
    id: z.string().min(1, { message: 'Выберите роль' }),
  }),
});

export type LoginFormDataType = z.infer<typeof loginFormSchema>;
