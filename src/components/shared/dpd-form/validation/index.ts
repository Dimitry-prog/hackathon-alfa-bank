import { z } from 'zod';

export const dpdFormSchema = z.object({
  name: z.string().min(1, { message: 'Имя слишком короткое' }),
});

export type DpdFormDataType = z.infer<typeof dpdFormSchema>;
