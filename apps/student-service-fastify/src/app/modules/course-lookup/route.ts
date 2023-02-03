import { FastifyInstance } from "fastify";
import { jwtAuth } from "../../auth";
import upload from "../../upload";
import { uploadfileEncode } from "../customer/controller";
import { createCourseLookup } from './controller'



export async function courseLookupRoutes(server: FastifyInstance) {
  server.post('/create',{handler: createCourseLookup})
  server.post('/creates',{preValidation: jwtAuth(server), handler: createCourseLookup})
}