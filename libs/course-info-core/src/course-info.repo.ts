import { Result } from "@inh-lib/common";
import { CourseInfoAGM } from "./models";

export interface CourseInfoRepo{
  create(profileAGM: CourseInfoAGM):Promise<Result<CourseInfoAGM>>
}