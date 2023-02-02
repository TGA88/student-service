import { makeAuthorizer, authorize2 } from "@student-service/utils/jwt-authorizer";
import { FastifyInstance } from "fastify";

//header need to contain authorization and login-type to use this function
export function jwtAuth(fastify: FastifyInstance): any {
  fastify.addHook('preHandler', async (req, reply, done) => {
    try {
      const make = await authorize2(req.headers);
      console.log("authen success: ", make)
    } catch (error) {
      console.log("error", error);
      reply.send("Unauthorize")
    }
    console.log("authen success");
    done();

  })
}