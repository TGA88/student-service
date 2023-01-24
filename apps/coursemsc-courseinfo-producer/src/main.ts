import { Kafka, Message, Partitioners } from "kafkajs"

//connect kafka 
const kafka = new Kafka({
  clientId: "myapp",
  brokers: ['localhost:9092']
})

//setup producer
const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner,
  allowAutoTopicCreation: false,
  //transaction setting
  transactionalId: 'myapp-transactional-producer-course',
  maxInFlightRequests: 1,
  idempotent: true
})

//connect producer
producer.connect().then(() => {
  console.log("Connected Producer!")
})

async function publishCourseInfo(topic: string,messages: Message[]) {
  // try{
  //   await producer.send({
  //     topic,
  //     messages
  //   })
  // }
}