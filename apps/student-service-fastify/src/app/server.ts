import Fastify, { FastifyListenOptions } from "fastify";
import multer from 'fastify-multer'
import { courseLookupRoutes } from "./modules/course-lookup/route";

import registerAppRoutes  from "./modules/routes";
import initialDomainEventHandler from "./modules/event-handler.register";
import cors from "@fastify/cors";
import { courseLookupSchemas } from "@student-service/course-lookup-api";
import { swaggerSchema } from "./swagger";

declare module "fastify" {
  interface FastifyInstance {
    jwtAuth: (fastify: FastifyInstance,next: any) => void
  }
}

//import schema from dto in buildJsonSchemas
const schemaList = [
  ...courseLookupSchemas,
]

const server = Fastify()

server.register(cors)
server.register(multer.contentParser)

server.get('/healthcheck', async function () {
  return { status: "OK" }
})

const broker:unknown ={}

swaggerSchema(server,schemaList)
registerAppRoutes(server)
initialDomainEventHandler(broker)


export async function start(opt: FastifyListenOptions = { port: 3000, host: "0.0.0.0" }) {
  try {
    await server.listen(opt)
    console.log(`Student Service is start at http://localhost:${opt.port}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }

}