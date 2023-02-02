import { CourseLookupAGMProps,CourseLookupAGM } from '@student-service/course-lookup-core';
import { CourseLookupRepoEmpl } from './course-lookup.repo';


const repo = new CourseLookupRepoEmpl();

describe('Test CourseLookUpRepoEmpl', () => {
  it('should be able to create', async () => {
    const props: CourseLookupAGMProps = {
      originalCourseId: 'sfghrtthrth',
      title: 'asdf',
    };

    const agm = CourseLookupAGM.create(props).getValue() as CourseLookupAGM
    await repo.create(agm)
    
  });
});
