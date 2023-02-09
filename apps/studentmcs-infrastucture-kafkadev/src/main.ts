import { createTopics } from "./app/server"

async function start() {
  console.log("Kafka server for Create Topic Start!")
  await createTopics()
}

start()
