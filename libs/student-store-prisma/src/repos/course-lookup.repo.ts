import { Result } from '@inh-lib/common';
import { CourseLookupAGM, CourseLookupRepo } from '@student-service/course-lookup-core';
import client from '../dbclient';
import {Prisma} from "../generated/prisma-client-js"
// import { PrismaClient } from '@prisma/client';

// const client = new PrismaClient()

export class CourseLookupRepoEmpl implements CourseLookupRepo {
  getById(id: string): Promise<Result<CourseLookupAGM>> {
    throw new Error('Method not implemented.');
  }
  async create(profileAGM: CourseLookupAGM): Promise<Result<CourseLookupAGM>> {
    try {
      const item: Prisma.CourseLookupCreateInput = {
        originalCourseId: profileAGM.originalCourseId,
        courseName: profileAGM.courseName,
        courseStartDate: profileAGM.courseStartDate,
        price: profileAGM.price,
      }

      const create = await client.courseLookup.create({
        data: item
      })
      return Result.ok<CourseLookupAGM>(profileAGM);
    } catch (error) {
      console.log("Error",error)
    }
    return Result.fail<any>("test");
  }
  update(profileAGM: CourseLookupAGM): Promise<Result<CourseLookupAGM>> {
    throw new Error('Method not implemented.');
  }

}