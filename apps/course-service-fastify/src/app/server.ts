import fastify, { FastifyListenOptions } from "fastify";
import multer from 'fastify-multer'
import register from "./modules/routes";
import registerHandler from "./modules/event-handler.register"
import { kafkaProducerSetup, producer } from "@student-service/course-broker-kafka"
import { Producer } from "kafkajs";

const server = fastify()
server.register(multer.contentParser)

const producerConfig: kafkaProducerSetup = {
  clientId: "myapp",
  brokers: ["localhost:9092"]
}


export async function start(opt: FastifyListenOptions = { port: 3001, host: "0.0.0.0" }) {
  try {

    let broker: Producer = await producer(producerConfig)

    register(server)
    registerHandler(broker)

    await server.listen(opt)
    console.log(`Course Service is start at http://localhost:${opt.port}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }

}