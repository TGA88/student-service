import { Kafka } from "kafkajs";

interface KafkaTopics {
  topic: string,
  numPartitions: number,
  replicationFactor: number
}

const topicsList= [
  "courseinfo",
  "testCreateTopic",

]

export async function createTopics() {

  let topicsArray: KafkaTopics[] = []
  for (const i of topicsList){
    topicsArray.push({
      topic: i,
      numPartitions: 1,
      replicationFactor: 1
    })
  }

  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ['localhost:9092']
    })
    const admin = kafka.admin()
    console.log("Connecting. . .")
    await admin.connect().then(()=>{console.log("Connected!")})
    await admin.createTopics({
      topics: topicsArray
    }).then(()=> console.log("Topic Created!"))

    await admin.disconnect()
    console.log("Kafka topic creater stop!")
  }catch(err){
    console.error(err);
  }finally{
    process.exit(0)
  }
}