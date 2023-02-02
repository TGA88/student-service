import { FastifyInstance } from "fastify";
import { createCourseInfo } from "./controller";

export async function courseInfoRoutes(server: FastifyInstance) {
  server.post('/create',createCourseInfo)
}