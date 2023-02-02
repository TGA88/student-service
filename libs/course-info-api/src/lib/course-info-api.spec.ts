import { courseInfoApi } from './course-info-api';

describe('courseInfoApi', () => {
  it('should work', () => {
    expect(courseInfoApi()).toEqual('course-info-api');
  });
});
