import { Result } from "@inh-lib/common";
// import { PrismaClient } from "../../../prisma/generated/prisma-client-js";
import { CourseInfoAGM, CourseInfoRepo } from "@student-service/course-info-core";
import "./dbhook"
import client from '../../dbclient'

export class CourseInfoRepoEmpl implements CourseInfoRepo{
  async create(courseAGM: CourseInfoAGM): Promise<Result<CourseInfoAGM>> {
    console.log("create course lookup")
    const create = await client.courseInfo.create({
      data:{
        id: courseAGM.id.toValue() as string,
        courseName: courseAGM.courseName,
        courseStartDate: courseAGM.courseStartDate,
        price: courseAGM.price
      }
    })
    
    return Result.ok<CourseInfoAGM>(courseAGM);
  }
  
}