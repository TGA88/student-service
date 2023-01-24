import { FastifyInstance } from "fastify"
import { courseInfoRoutes } from "./course-info/route"

export default function register(server:FastifyInstance):FastifyInstance{
  //Add Routes
  server.register(courseInfoRoutes,{ prefix: "/api/courseInfo"})
  return server
  }