import { CourseInfoHandler, courseInfoInputSchema, CourseInfoResponseDTO, CreateCourseInfoInputDTO, CreateFailures, parseReqToDTO } from "@student-service/course-info-api";
import { CourseInfoAGMParser, CourseInfoRepo } from "@student-service/course-info-core";
import { CourseInfoRepoEmpl } from "@student-service/course-store-prisma";
import { FastifyReply, FastifyRequest } from "fastify";

export async function createCourseInfo(req: FastifyRequest, reply: FastifyReply){
  const repo: CourseInfoRepo = new CourseInfoRepoEmpl()
  const parserToModel: CourseInfoAGMParser<CreateCourseInfoInputDTO> = parseReqToDTO
  
  const handler = new CourseInfoHandler(repo, parserToModel)

  let dto: CreateCourseInfoInputDTO
  try{
    dto = courseInfoInputSchema.parse(req.body)
    const result = await handler.execute(dto)
    createCourseInfoResponseDTOToHttp(result, reply)
  }catch(error){
    console.error(error)
    reply.status(400)
  }
}

function createCourseInfoResponseDTOToHttp(result: CourseInfoResponseDTO, reply: FastifyReply) {
  
  if (result.isLeft()) {
    const err = result.value;
    switch (err.constructor) {
      case CreateFailures.CreateFail:
        return reply.status(500)
      default:
        return reply.status(501)
    }
  }
  return reply.send(result.value.getValue())
}