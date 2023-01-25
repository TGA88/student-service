import * as dotenv from 'dotenv'

dotenv.config({path:'libs/course-store-prisma/.env'})
import { PrismaClient } from "../prisma/generated/prisma-client-js";


const client = new PrismaClient()

export default client