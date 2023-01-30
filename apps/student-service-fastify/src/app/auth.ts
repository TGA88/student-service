import { makeAuthorizer, authzOptions, authorize2 } from "@student-service/utils/jwt-authorizer";
import { FastifyInstance } from "fastify";

export function jwtAuth(fastify: FastifyInstance): any {
  fastify.addHook('preHandler', async (req, reply, done) => {
    try {
      const make = authorize2(req.headers, authzOptions);
    } catch (error) {
      console.log("error", error);
    }
    console.log("authen success");
    done();

  })
}