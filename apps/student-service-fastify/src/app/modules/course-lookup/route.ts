import { $ref } from "@student-service/course-lookup-api";
import { FastifyInstance } from "fastify";
import { jwtAuth } from "../../auth";
import upload from "../../upload";
import { uploadfileEncode } from "../customer/controller";
import { createCourseLookup } from './controller'



export async function courseLookupRoutes(server: FastifyInstance) {
  server.post('/create',{
    handler: createCourseLookup,
    schema: {
      tags: ["Create By Aon"],
      description: 'test description',
      body: $ref('courseLookupInputSchema'),
      response: {
        201: {
          description: "default return if follow true flow",
          content: {
            'application/json' : {
              schema: $ref('courseLookupInputSchema'),
            }
          }
        },
        500: {
          description : "CreateFailures CreateFail",
          type: "string"
        }
      }
    }
  })
  server.post('/creates',{
    //preValidation verify jwt token logic
    preValidation: jwtAuth(server), 
    //handler function need to execute
    handler: createCourseLookup
  })
}