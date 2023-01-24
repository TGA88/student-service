import { Result } from "@inh-lib/common";
import { CourseInfoAGM } from "./models";

export interface CourseInfoRepo{
  create(courseAGM: CourseInfoAGM):Promise<Result<CourseInfoAGM>>
}