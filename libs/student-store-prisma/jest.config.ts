/* eslint-disable */
export default {
  clearMocks:true,
  displayName: 'student-store-prisma',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/student-store-prisma',
 setupFilesAfterEnv: ['<rootDir>/singleton.ts']
};
