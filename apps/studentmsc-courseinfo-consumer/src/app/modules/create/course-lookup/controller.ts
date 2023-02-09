import { CourseLookupHandler, courseLookupInputSchema, CreateCourseLookupInputDTO, parseReqToDTO } from "@student-service/course-lookup-api";
import { CourseLookupAGMParser, CourseLookupRepo } from "@student-service/course-lookup-core";
import { CourseLookupRepoEmpl } from "@student-service/student-store-prisma";

export async function createCourseLookup(eventData: object,) {
  const repo: CourseLookupRepo = new CourseLookupRepoEmpl()
  const parserToModel: CourseLookupAGMParser<CreateCourseLookupInputDTO> = parseReqToDTO

  const handler = new CourseLookupHandler(repo, parserToModel)

  let dto: CreateCourseLookupInputDTO
  try {
   
    dto = courseLookupInputSchema.parse(eventData)
    const result = await handler.execute(dto)

  } catch (error) {
    console.log(error)
    throw new Error(error)
  }

}
