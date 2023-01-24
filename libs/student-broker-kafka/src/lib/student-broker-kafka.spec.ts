import { studentBrokerKafka } from './student-broker-kafka';

describe('studentBrokerKafka', () => {
  it('should work', () => {
    expect(studentBrokerKafka()).toEqual('student-broker-kafka');
  });
});
