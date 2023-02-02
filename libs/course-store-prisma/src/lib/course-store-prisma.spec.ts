import { courseStorePrisma } from './course-store-prisma';

describe('courseStorePrisma', () => {
  it('should work', () => {
    expect(courseStorePrisma()).toEqual('course-store-prisma');
  });
});
