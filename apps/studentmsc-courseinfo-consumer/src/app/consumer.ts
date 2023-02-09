import { consumer, kafkaConsumerSetup, kafkaMessage, sleep } from "@student-service/student-broker-kafka";

import { createCourseLookup } from "./modules/create/course-lookup/controller";

// import { Client } from 'pg';

// declare module "kafkajs" {
//   interface MessageSetEntry {
//     value: Buffer | null | 
//   }
// }

export async function start() {
  const consumerConfig: kafkaConsumerSetup = {
    clientId: "course-lookup-app",
    brokers: ["localhost:9092"],
    groupId: "course-lookup-create",
    topics: ["courseinfo"]
  }

  let broker = await consumer(consumerConfig)

  await broker.run({
    eachBatchAutoResolve: false,
    eachBatch: async result => {
      for (const i of result.batch.messages) {
        if (!result.isRunning() || result.isStale()) break

        try {
          // await sleep(2000).then(() => { 'readed' })
          if (i.value) {
            let message: kafkaMessage = JSON.parse(i.value.toString());
            if (result.batch.topic === "courseinfo") {
              console.log(`-Each batch ${i.value} -partitions ${result.batch.partition} -offset ${i.offset} -timestamp ${i.timestamp}`)
              console.log("eventName: ", message.eventName)
              console.log("eventData: ", message.eventData)
              if (message.eventName === "course-create"){
                // const createCourseLookup = await axios.post('http://localhost:3000/api/course-lookup/create',message.eventData)
                const create = await createCourseLookup(message.eventData)
              }
            }
            result.resolveOffset(i.offset)
          }
        } catch (e) {
          console.error(e)
          // await sleep(2000)
          broker.pause([{ topic: result.batch.topic, partitions: [result.batch.partition] }])
          setTimeout(() => broker.resume([{ topic: result.batch.topic, partitions: [result.batch.partition] }]), 5000)
        }
      }
      await result.heartbeat()
    }
    // eachMessage: async ({ topic, partition, message }) => {
    //   console.log({
    //     value: message.value.toString(),
    //   })
    //   const { value } = message;
    // },
  })
}