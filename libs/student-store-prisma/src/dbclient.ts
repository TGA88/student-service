import * as dotenv from 'dotenv'

dotenv.config({path:'libs/student-store-prisma/.env'})
// console.log(dotenv.config({path:'libs/student-store-prisma/.env'})) // Load the environment variables

 console.log(`The connection URL is ${process.env.DATABASE_URL}`)

// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from  "./generated/prisma-client-js"
const client = new PrismaClient()

export default client