import { oAuth2JwtAuthz, lineJwtAuthz } from "@student-service/utils/jwt-authorizer";
import { FastifyInstance } from "fastify";

//header need to contain authorization and login-type to use this function
//if hook is async you dont need to use done()
export function jwtAuth(fastify: FastifyInstance): any {
    fastify.addHook('preHandler', async (req, reply, done) => {
    try {
      if (req.headers["login-type"] === "line"){
        console.log("LINEEEE")
        const { makeAuthorizer,lineOptions } = lineJwtAuthz
        const authen = makeAuthorizer(req.headers, lineOptions)
        authen()
      }
      else {
        console.log("AZURE")
        const { makeAuthorizer, authzOptions } = oAuth2JwtAuthz
        const authen = makeAuthorizer(req.headers,authzOptions)
        authen()
      }
      // done();
    } catch (error) {
      console.log("error", error);
      reply.send("Unauthorize")
    }
    console.log("authen success");
    // done();
  })
}