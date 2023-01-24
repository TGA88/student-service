// import { Result } from "@inh-lib/common";
// import { UniqueEntityID } from "@inh-lib/ddd";
// import { PrismaClient } from "@prisma/client";
// import { CourseInfoAGM, CourseInfoRepo } from "@student-service/course-info-core";

// const client = new PrismaClient()

// export class CourseInfoRepoEmpl implements CourseInfoRepo{
//   async create(courseAGM: CourseInfoAGM): Promise<Result<CourseInfoAGM>> {
//     const create = await client.courseInfo.create({
//       data:{
//         id: courseAGM.id as any,
//         courseName: courseAGM.courseName,
//         courseStartDate: courseAGM.courseStartDate,
//         price: courseAGM.price
//       }
//     })
    
//     return Result.ok<CourseInfoAGM>(courseAGM);
//   }
  
// }