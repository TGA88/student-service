import { Either, GenericAppError, left, Result, right } from "@inh-lib/common";
import { UseCase } from "@inh-lib/ddd";
import { CourseInfoAGM, CourseInfoAGMParser, CourseInfoRepo } from "@student-service/course-info-core";
import { CreateCourseInfoInputDTO } from "./course-info.dto";
import { CreateFailures } from "./course-info.failures";

export type CourseInfoResponseDTO = Either<GenericAppError.UnexpectedError| CreateFailures.CreateFail , Result<CreateCourseInfoInputDTO>>

export class CourseInfoHandler implements UseCase<CreateCourseInfoInputDTO, Promise<CourseInfoResponseDTO>>{
  private repo: CourseInfoRepo
  private mapper:CourseInfoAGMParser<CreateCourseInfoInputDTO>

  constructor(repo:CourseInfoRepo,mapper:CourseInfoAGMParser<CreateCourseInfoInputDTO>) {
    this.repo = repo;
    this.mapper = mapper
  }
  
  async execute(req: CreateCourseInfoInputDTO): Promise<CourseInfoResponseDTO> {
    const courseInfoAGMOrError = this.mapper(req)

    if(courseInfoAGMOrError.isFailure){
      return left(new CreateFailures.ParserFail(courseInfoAGMOrError.error as string))
    }

    const courseInfoAGM = courseInfoAGMOrError.getValue() as CourseInfoAGM
    
    const createOrError = await this.repo.create(courseInfoAGM)
    
    if(createOrError.isFailure){
      return left(new GenericAppError.UnexpectedError(createOrError.error))
    }
    return right(Result.ok<any>())
  }
}