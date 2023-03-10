
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.8.1
 * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
 */
Prisma.prismaVersion = {
  client: "4.8.1",
  engine: "d6e67a83f971b175a593ccc12e15c4a757f93ffe"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AuthorScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.BookScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title'
});

exports.Prisma.BooksOnAuthorsScalarFieldEnum = makeEnum({
  bookId: 'bookId',
  authorId: 'authorId'
});

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.CourseLookupScalarFieldEnum = makeEnum({
  id: 'id',
  originalCourseId: 'originalCourseId',
  courseName: 'courseName',
  courseStartDate: 'courseStartDate',
  price: 'price',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.CustomerScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  surname: 'surname',
  tel: 'tel',
  email: 'email',
  id_card: 'id_card',
  bookbank: 'bookbank'
});

exports.Prisma.LoingProviderScalarFieldEnum = makeEnum({
  id: 'id',
  providerSource: 'providerSource',
  providerType: 'providerType',
  providerUid: 'providerUid',
  displayName: 'displayName',
  providerLoginImgurl: 'providerLoginImgurl',
  createAt: 'createAt',
  updateAt: 'updateAt',
  customerId: 'customerId'
});

exports.Prisma.PostScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  title: 'title',
  published: 'published',
  authorId: 'authorId'
});

exports.Prisma.ProductScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  firstname: 'firstname',
  fullname: 'fullname'
});

exports.Prisma.ProfileScalarFieldEnum = makeEnum({
  id: 'id',
  bio: 'bio',
  userId: 'userId'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StudentProfileScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  fullName: 'fullName',
  address: 'address',
  homePhone: 'homePhone',
  mobilePhone: 'mobilePhone',
  birthDate: 'birthDate',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.StudentWishListScalarFieldEnum = makeEnum({
  id: 'id',
  profileId: 'profileId',
  courseLookupId: 'courseLookupId'
});

exports.Prisma.TempScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  name: 'name',
  role: 'role',
  tel: 'tel',
  test: 'test'
});
exports.Role = makeEnum({
  USER: 'USER',
  ADMIN: 'ADMIN'
});

exports.Prisma.ModelName = makeEnum({
  Temp: 'Temp',
  StudentProfile: 'StudentProfile',
  StudentWishList: 'StudentWishList',
  CourseLookup: 'CourseLookup',
  User: 'User',
  Profile: 'Profile',
  Post: 'Post',
  Category: 'Category',
  Book: 'Book',
  Author: 'Author',
  BooksOnAuthors: 'BooksOnAuthors',
  Customer: 'Customer',
  LoingProvider: 'LoingProvider',
  Product: 'Product'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
