import { Result } from "@inh-lib/common";
import { CourseInfoAGM, CourseInfoAGMParser, CourseInfoAGMProps } from "@student-service/course-info-core";
import { CreateCourseInfoInputDTO } from "./course-info.dto";

export const parseReqToDTO: CourseInfoAGMParser<CreateCourseInfoInputDTO> = (rawData: CreateCourseInfoInputDTO): Result<CourseInfoAGM> => {
  try {
    console.log("parse mapper")
    const props: CourseInfoAGMProps = {
      id: rawData.id as string,
      courseName: rawData.courseName as string,
      courseStartDate: rawData.courseStartDate as string,
      price: rawData.price as string
    }
    const agmOrError = CourseInfoAGM.create(props)
    if (agmOrError.isFailure) {
      return Result.fail(agmOrError.error)
    }
    return Result.ok(agmOrError.getValue())

  }catch(error){
    return Result.fail(error)
  }
    
}