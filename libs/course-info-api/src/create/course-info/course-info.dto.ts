import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

export const courseInfoInputSchema = z.object({
  id: z.string().optional(),
  courseName: z.string(),
  courseStartDate: z.string().optional(),
  price: z.string().optional()
})

export type CreateCourseInfoInputDTO = z.infer<typeof courseInfoInputSchema>

export const { schemas: courseInfoSchema, $ref} = buildJsonSchemas({
  courseInfoInputSchema
})