import { Kafka, Partitioners, Producer } from "kafkajs";

export interface kafkaProducerSetup {
  clientId?: string,
  brokers: string[]
}


export async function producer(config: kafkaProducerSetup):Promise<Producer>{
  try {

    const kafka = new Kafka({
      clientId: config.clientId,
      brokers: config.brokers,
    })

    const producer = kafka.producer({
      createPartitioner: Partitioners.LegacyPartitioner,
      allowAutoTopicCreation: false,
      //transaction setting
      transactionalId: `myapp-transactional-producer-${config.clientId}`,
      maxInFlightRequests: 1,
      idempotent: true
    })

    await producer.connect().then(() => {
      console.log("Connected Producer!")
    })

    return producer 
  } catch (error) {
    console.log("Kafka Producer Error",error)
    throw new error
  }
}

