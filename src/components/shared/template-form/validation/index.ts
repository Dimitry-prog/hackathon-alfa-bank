import { z } from 'zod';

export const templateFormSchema = z.object({
  title: z.string().optional(),
  direction: z.object({
    value: z.string().optional(),
    id: z.string().optional(),
  }),
  skills: z.object({
    value: z.string().optional(),
    id: z.string().optional(),
  }),
  grade: z.object({
    value: z.string().optional(),
    id: z.string().optional(),
  }),
  duration: z.object({
    value: z.string().optional(),
    id: z.string().optional(),
  }),
  creator: z.object({
    value: z.string().optional(),
    id: z.string().optional(),
  }),
});

export type TemplateFormDataType = z.infer<typeof templateFormSchema>;
