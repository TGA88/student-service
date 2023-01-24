import fastify, { FastifyListenOptions } from "fastify";
import multer from 'fastify-multer'
import register from "./modules/routes";
import registerHandler from "./modules/event-handler.register"
const server = fastify()
server.register(multer.contentParser)

const broker:unknown ={}

register(server)
registerHandler(broker)

export async function start(opt: FastifyListenOptions = { port: 3001, host: "0.0.0.0" }) {
  try {
    await server.listen(opt)
    console.log(`Course Service is start at http://localhost:${opt.port}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }

}