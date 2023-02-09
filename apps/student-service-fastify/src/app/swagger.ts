import swagger = require("@fastify/swagger");
import { FastifyInstance } from "fastify";
import { JsonSchema, withRefResolver } from "fastify-zod";
import swaggerUi from '@fastify/swagger-ui'

export function swaggerSchema(server: FastifyInstance, schemaList: JsonSchema[]){
  for (const schema of schemaList) {
    server.addSchema(schema)
  }
  server.register(
    swagger,
    withRefResolver({
      routePrefix: '/docs',
      exposeRoute: true,
      staticCSP: true,
      openapi: {
        info: {
          title: 'Fastify API',
          description: 'API for some products',
          version: "1"
        }
      }
    })
  )
  
  server.register(swaggerUi,
    {
      routePrefix: '/documentation',
      uiConfig: {
        docExpansion: 'full',
        deepLinking: false
      },
      uiHooks: {
        onRequest: function (request, reply, next) { next() },
        preHandler: function (request, reply, next) { next() }
      },
      staticCSP: true,
      transformStaticCSP: (header) => header,
      transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
      transformSpecificationClone: true
    }
  )
}