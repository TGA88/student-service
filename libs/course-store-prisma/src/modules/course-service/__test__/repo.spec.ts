import { IDomainEvent, Entity } from '@inh-lib/ddd'
import { CourseInfoAGM, CourseInfoAGMProps } from '@student-service/course-info-core'
import {CourseInfoRepoEmpl} from '../repo'

const mockValues: CourseInfoAGMProps = {
  courseName: "test"
}
it("test course service ", async () =>{
  const agm: CourseInfoAGM = CourseInfoAGM.create(mockValues).getValue() as CourseInfoAGM

  const repo = new CourseInfoRepoEmpl()

  await repo.create(agm)
})