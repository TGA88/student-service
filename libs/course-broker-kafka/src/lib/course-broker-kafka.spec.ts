import { courseBrokerKafka } from './course-broker-kafka';

describe('courseBrokerKafka', () => {
  it('should work', () => {
    expect(courseBrokerKafka()).toEqual('course-broker-kafka');
  });
});
