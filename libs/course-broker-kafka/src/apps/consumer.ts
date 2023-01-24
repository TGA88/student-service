import { Consumer, Kafka } from "kafkajs";
import { consumers } from "stream";
// import { Client } from 'pg';

export interface kafkaConsumerSetup {
  clientId?: string,
  brokers: string[],
  groupId: string
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function consumer(config: kafkaConsumerSetup): Promise<Consumer> {
  try {
    const kafka = new Kafka({
      clientId: config.clientId as string,
      brokers: config.brokers,
      retry: {
        retries: 8,
        maxRetryTime: 15000,
        initialRetryTime: 10000
      }
    })

    const consumer = kafka.consumer({
      groupId: config.groupId,
    })

    await consumer.connect().then(() => console.log("Connected Consumer"))
    return consumer
  } catch (error) {
    console.error("Kafka Consumer Error",error);
    throw new error
  }

}