
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Temp
 * 
 */
export type Temp = {
  id: string
  code: string
}

/**
 * Model StudentProfile
 * 
 */
export type StudentProfile = {
  id: string
  code: number
  fullName: string
  address: string | null
  homePhone: string | null
  mobilePhone: string | null
  birthDate: Date | null
  createAt: Date
  updateAt: Date | null
}

/**
 * Model StudentWishList
 * 
 */
export type StudentWishList = {
  id: string
  profileId: string
  courseLookupId: string
}

/**
 * Model CourseLookup
 * 
 */
export type CourseLookup = {
  id: string
  originalCourseId: string
  courseName: string
  courseStartDate: string | null
  price: string | null
  createAt: Date
  updateAt: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: number
  email: string
  name: string | null
  role: Role
  tel: string | null
  test: string
}

/**
 * Model Profile
 * 
 */
export type Profile = {
  id: number
  bio: string
  userId: number
}

/**
 * Model Post
 * 
 */
export type Post = {
  id: number
  createdAt: Date
  title: string
  published: boolean
  authorId: number
}

/**
 * Model Category
 * 
 */
export type Category = {
  id: number
  name: string
}

/**
 * Model Book
 * 
 */
export type Book = {
  id: number
  title: string
}

/**
 * Model Author
 * 
 */
export type Author = {
  id: number
  name: string
}

/**
 * Model BooksOnAuthors
 * 
 */
export type BooksOnAuthors = {
  bookId: number
  authorId: number
}

/**
 * Model Customer
 * 
 */
export type Customer = {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  surname: string
  tel: string
  email: string
  id_card: string
  bookbank: string
}

/**
 * Model LoingProvider
 * 
 */
export type LoingProvider = {
  id: string
  providerSource: string
  providerType: string
  providerUid: string
  displayName: string
  providerLoginImgurl: string
  createAt: Date
  updateAt: Date
  customerId: string
}

/**
 * Model Product
 * 
 */
export type Product = {
  id: number
  createdAt: Date
  updatedAt: Date
  firstname: string
  fullname: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Temps
 * const temps = await prisma.temp.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Temps
   * const temps = await prisma.temp.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.temp`: Exposes CRUD operations for the **Temp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Temps
    * const temps = await prisma.temp.findMany()
    * ```
    */
  get temp(): Prisma.TempDelegate<GlobalReject>;

  /**
   * `prisma.studentProfile`: Exposes CRUD operations for the **StudentProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentProfiles
    * const studentProfiles = await prisma.studentProfile.findMany()
    * ```
    */
  get studentProfile(): Prisma.StudentProfileDelegate<GlobalReject>;

  /**
   * `prisma.studentWishList`: Exposes CRUD operations for the **StudentWishList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentWishLists
    * const studentWishLists = await prisma.studentWishList.findMany()
    * ```
    */
  get studentWishList(): Prisma.StudentWishListDelegate<GlobalReject>;

  /**
   * `prisma.courseLookup`: Exposes CRUD operations for the **CourseLookup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseLookups
    * const courseLookups = await prisma.courseLookup.findMany()
    * ```
    */
  get courseLookup(): Prisma.CourseLookupDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<GlobalReject>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<GlobalReject>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<GlobalReject>;

  /**
   * `prisma.booksOnAuthors`: Exposes CRUD operations for the **BooksOnAuthors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BooksOnAuthors
    * const booksOnAuthors = await prisma.booksOnAuthors.findMany()
    * ```
    */
  get booksOnAuthors(): Prisma.BooksOnAuthorsDelegate<GlobalReject>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<GlobalReject>;

  /**
   * `prisma.loingProvider`: Exposes CRUD operations for the **LoingProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoingProviders
    * const loingProviders = await prisma.loingProvider.findMany()
    * ```
    */
  get loingProvider(): Prisma.LoingProviderDelegate<GlobalReject>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.1
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentProfileCountOutputType
   */


  export type StudentProfileCountOutputType = {
    wishLists: number
  }

  export type StudentProfileCountOutputTypeSelect = {
    wishLists?: boolean
  }

  export type StudentProfileCountOutputTypeGetPayload<S extends boolean | null | undefined | StudentProfileCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StudentProfileCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (StudentProfileCountOutputTypeArgs)
    ? StudentProfileCountOutputType 
    : S extends { select: any } & (StudentProfileCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof StudentProfileCountOutputType ? StudentProfileCountOutputType[P] : never
  } 
      : StudentProfileCountOutputType




  // Custom InputTypes

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StudentProfileCountOutputType
     * 
    **/
    select?: StudentProfileCountOutputTypeSelect | null
  }



  /**
   * Count Type CourseLookupCountOutputType
   */


  export type CourseLookupCountOutputType = {
    wishLists: number
  }

  export type CourseLookupCountOutputTypeSelect = {
    wishLists?: boolean
  }

  export type CourseLookupCountOutputTypeGetPayload<S extends boolean | null | undefined | CourseLookupCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CourseLookupCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CourseLookupCountOutputTypeArgs)
    ? CourseLookupCountOutputType 
    : S extends { select: any } & (CourseLookupCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CourseLookupCountOutputType ? CourseLookupCountOutputType[P] : never
  } 
      : CourseLookupCountOutputType




  // Custom InputTypes

  /**
   * CourseLookupCountOutputType without action
   */
  export type CourseLookupCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CourseLookupCountOutputType
     * 
    **/
    select?: CourseLookupCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    post: number
  }

  export type UserCountOutputTypeSelect = {
    post?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type PostCountOutputType
   */


  export type PostCountOutputType = {
    categories: number
  }

  export type PostCountOutputTypeSelect = {
    categories?: boolean
  }

  export type PostCountOutputTypeGetPayload<S extends boolean | null | undefined | PostCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PostCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PostCountOutputTypeArgs)
    ? PostCountOutputType 
    : S extends { select: any } & (PostCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PostCountOutputType ? PostCountOutputType[P] : never
  } 
      : PostCountOutputType




  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     * 
    **/
    select?: PostCountOutputTypeSelect | null
  }



  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    posts: number
  }

  export type CategoryCountOutputTypeSelect = {
    posts?: boolean
  }

  export type CategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | CategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CategoryCountOutputTypeArgs)
    ? CategoryCountOutputType 
    : S extends { select: any } & (CategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CategoryCountOutputType ? CategoryCountOutputType[P] : never
  } 
      : CategoryCountOutputType




  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     * 
    **/
    select?: CategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type BookCountOutputType
   */


  export type BookCountOutputType = {
    booksOnAuthors: number
  }

  export type BookCountOutputTypeSelect = {
    booksOnAuthors?: boolean
  }

  export type BookCountOutputTypeGetPayload<S extends boolean | null | undefined | BookCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BookCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BookCountOutputTypeArgs)
    ? BookCountOutputType 
    : S extends { select: any } & (BookCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BookCountOutputType ? BookCountOutputType[P] : never
  } 
      : BookCountOutputType




  // Custom InputTypes

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     * 
    **/
    select?: BookCountOutputTypeSelect | null
  }



  /**
   * Count Type AuthorCountOutputType
   */


  export type AuthorCountOutputType = {
    BooksOnAuthors: number
  }

  export type AuthorCountOutputTypeSelect = {
    BooksOnAuthors?: boolean
  }

  export type AuthorCountOutputTypeGetPayload<S extends boolean | null | undefined | AuthorCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AuthorCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AuthorCountOutputTypeArgs)
    ? AuthorCountOutputType 
    : S extends { select: any } & (AuthorCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AuthorCountOutputType ? AuthorCountOutputType[P] : never
  } 
      : AuthorCountOutputType




  // Custom InputTypes

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     * 
    **/
    select?: AuthorCountOutputTypeSelect | null
  }



  /**
   * Count Type CustomerCountOutputType
   */


  export type CustomerCountOutputType = {
    loingProvider: number
  }

  export type CustomerCountOutputTypeSelect = {
    loingProvider?: boolean
  }

  export type CustomerCountOutputTypeGetPayload<S extends boolean | null | undefined | CustomerCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CustomerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CustomerCountOutputTypeArgs)
    ? CustomerCountOutputType 
    : S extends { select: any } & (CustomerCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CustomerCountOutputType ? CustomerCountOutputType[P] : never
  } 
      : CustomerCountOutputType




  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     * 
    **/
    select?: CustomerCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Temp
   */


  export type AggregateTemp = {
    _count: TempCountAggregateOutputType | null
    _min: TempMinAggregateOutputType | null
    _max: TempMaxAggregateOutputType | null
  }

  export type TempMinAggregateOutputType = {
    id: string | null
    code: string | null
  }

  export type TempMaxAggregateOutputType = {
    id: string | null
    code: string | null
  }

  export type TempCountAggregateOutputType = {
    id: number
    code: number
    _all: number
  }


  export type TempMinAggregateInputType = {
    id?: true
    code?: true
  }

  export type TempMaxAggregateInputType = {
    id?: true
    code?: true
  }

  export type TempCountAggregateInputType = {
    id?: true
    code?: true
    _all?: true
  }

  export type TempAggregateArgs = {
    /**
     * Filter which Temp to aggregate.
     * 
    **/
    where?: TempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Temps to fetch.
     * 
    **/
    orderBy?: Enumerable<TempOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Temps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Temps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Temps
    **/
    _count?: true | TempCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TempMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TempMaxAggregateInputType
  }

  export type GetTempAggregateType<T extends TempAggregateArgs> = {
        [P in keyof T & keyof AggregateTemp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemp[P]>
      : GetScalarType<T[P], AggregateTemp[P]>
  }




  export type TempGroupByArgs = {
    where?: TempWhereInput
    orderBy?: Enumerable<TempOrderByWithAggregationInput>
    by: Array<TempScalarFieldEnum>
    having?: TempScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TempCountAggregateInputType | true
    _min?: TempMinAggregateInputType
    _max?: TempMaxAggregateInputType
  }


  export type TempGroupByOutputType = {
    id: string
    code: string
    _count: TempCountAggregateOutputType | null
    _min: TempMinAggregateOutputType | null
    _max: TempMaxAggregateOutputType | null
  }

  type GetTempGroupByPayload<T extends TempGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TempGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TempGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TempGroupByOutputType[P]>
            : GetScalarType<T[P], TempGroupByOutputType[P]>
        }
      >
    >


  export type TempSelect = {
    id?: boolean
    code?: boolean
  }


  export type TempGetPayload<S extends boolean | null | undefined | TempArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Temp :
    S extends undefined ? never :
    S extends { include: any } & (TempArgs | TempFindManyArgs)
    ? Temp 
    : S extends { select: any } & (TempArgs | TempFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Temp ? Temp[P] : never
  } 
      : Temp


  type TempCountArgs = Merge<
    Omit<TempFindManyArgs, 'select' | 'include'> & {
      select?: TempCountAggregateInputType | true
    }
  >

  export interface TempDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Temp that matches the filter.
     * @param {TempFindUniqueArgs} args - Arguments to find a Temp
     * @example
     * // Get one Temp
     * const temp = await prisma.temp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TempFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TempFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Temp'> extends True ? Prisma__TempClient<TempGetPayload<T>> : Prisma__TempClient<TempGetPayload<T> | null, null>

    /**
     * Find one Temp that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TempFindUniqueOrThrowArgs} args - Arguments to find a Temp
     * @example
     * // Get one Temp
     * const temp = await prisma.temp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TempFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TempFindUniqueOrThrowArgs>
    ): Prisma__TempClient<TempGetPayload<T>>

    /**
     * Find the first Temp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempFindFirstArgs} args - Arguments to find a Temp
     * @example
     * // Get one Temp
     * const temp = await prisma.temp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TempFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TempFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Temp'> extends True ? Prisma__TempClient<TempGetPayload<T>> : Prisma__TempClient<TempGetPayload<T> | null, null>

    /**
     * Find the first Temp that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempFindFirstOrThrowArgs} args - Arguments to find a Temp
     * @example
     * // Get one Temp
     * const temp = await prisma.temp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TempFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TempFindFirstOrThrowArgs>
    ): Prisma__TempClient<TempGetPayload<T>>

    /**
     * Find zero or more Temps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Temps
     * const temps = await prisma.temp.findMany()
     * 
     * // Get first 10 Temps
     * const temps = await prisma.temp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tempWithIdOnly = await prisma.temp.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TempFindManyArgs>(
      args?: SelectSubset<T, TempFindManyArgs>
    ): PrismaPromise<Array<TempGetPayload<T>>>

    /**
     * Create a Temp.
     * @param {TempCreateArgs} args - Arguments to create a Temp.
     * @example
     * // Create one Temp
     * const Temp = await prisma.temp.create({
     *   data: {
     *     // ... data to create a Temp
     *   }
     * })
     * 
    **/
    create<T extends TempCreateArgs>(
      args: SelectSubset<T, TempCreateArgs>
    ): Prisma__TempClient<TempGetPayload<T>>

    /**
     * Create many Temps.
     *     @param {TempCreateManyArgs} args - Arguments to create many Temps.
     *     @example
     *     // Create many Temps
     *     const temp = await prisma.temp.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TempCreateManyArgs>(
      args?: SelectSubset<T, TempCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Temp.
     * @param {TempDeleteArgs} args - Arguments to delete one Temp.
     * @example
     * // Delete one Temp
     * const Temp = await prisma.temp.delete({
     *   where: {
     *     // ... filter to delete one Temp
     *   }
     * })
     * 
    **/
    delete<T extends TempDeleteArgs>(
      args: SelectSubset<T, TempDeleteArgs>
    ): Prisma__TempClient<TempGetPayload<T>>

    /**
     * Update one Temp.
     * @param {TempUpdateArgs} args - Arguments to update one Temp.
     * @example
     * // Update one Temp
     * const temp = await prisma.temp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TempUpdateArgs>(
      args: SelectSubset<T, TempUpdateArgs>
    ): Prisma__TempClient<TempGetPayload<T>>

    /**
     * Delete zero or more Temps.
     * @param {TempDeleteManyArgs} args - Arguments to filter Temps to delete.
     * @example
     * // Delete a few Temps
     * const { count } = await prisma.temp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TempDeleteManyArgs>(
      args?: SelectSubset<T, TempDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Temps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Temps
     * const temp = await prisma.temp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TempUpdateManyArgs>(
      args: SelectSubset<T, TempUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Temp.
     * @param {TempUpsertArgs} args - Arguments to update or create a Temp.
     * @example
     * // Update or create a Temp
     * const temp = await prisma.temp.upsert({
     *   create: {
     *     // ... data to create a Temp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Temp we want to update
     *   }
     * })
    **/
    upsert<T extends TempUpsertArgs>(
      args: SelectSubset<T, TempUpsertArgs>
    ): Prisma__TempClient<TempGetPayload<T>>

    /**
     * Count the number of Temps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempCountArgs} args - Arguments to filter Temps to count.
     * @example
     * // Count the number of Temps
     * const count = await prisma.temp.count({
     *   where: {
     *     // ... the filter for the Temps we want to count
     *   }
     * })
    **/
    count<T extends TempCountArgs>(
      args?: Subset<T, TempCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TempCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Temp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TempAggregateArgs>(args: Subset<T, TempAggregateArgs>): PrismaPromise<GetTempAggregateType<T>>

    /**
     * Group by Temp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TempGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TempGroupByArgs['orderBy'] }
        : { orderBy?: TempGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TempGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTempGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Temp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TempClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Temp base type for findUnique actions
   */
  export type TempFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Temp
     * 
    **/
    select?: TempSelect | null
    /**
     * Filter, which Temp to fetch.
     * 
    **/
    where: TempWhereUniqueInput
  }

  /**
   * Temp findUnique
   */
  export interface TempFindUniqueArgs extends TempFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Temp findUniqueOrThrow
   */
  export type TempFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Temp
     * 
    **/
    select?: TempSelect | null
    /**
     * Filter, which Temp to fetch.
     * 
    **/
    where: TempWhereUniqueInput
  }


  /**
   * Temp base type for findFirst actions
   */
  export type TempFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Temp
     * 
    **/
    select?: TempSelect | null
    /**
     * Filter, which Temp to fetch.
     * 
    **/
    where?: TempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Temps to fetch.
     * 
    **/
    orderBy?: Enumerable<TempOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Temps.
     * 
    **/
    cursor?: TempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Temps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Temps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Temps.
     * 
    **/
    distinct?: Enumerable<TempScalarFieldEnum>
  }

  /**
   * Temp findFirst
   */
  export interface TempFindFirstArgs extends TempFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Temp findFirstOrThrow
   */
  export type TempFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Temp
     * 
    **/
    select?: TempSelect | null
    /**
     * Filter, which Temp to fetch.
     * 
    **/
    where?: TempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Temps to fetch.
     * 
    **/
    orderBy?: Enumerable<TempOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Temps.
     * 
    **/
    cursor?: TempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Temps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Temps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Temps.
     * 
    **/
    distinct?: Enumerable<TempScalarFieldEnum>
  }


  /**
   * Temp findMany
   */
  export type TempFindManyArgs = {
    /**
     * Select specific fields to fetch from the Temp
     * 
    **/
    select?: TempSelect | null
    /**
     * Filter, which Temps to fetch.
     * 
    **/
    where?: TempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Temps to fetch.
     * 
    **/
    orderBy?: Enumerable<TempOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Temps.
     * 
    **/
    cursor?: TempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Temps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Temps.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TempScalarFieldEnum>
  }


  /**
   * Temp create
   */
  export type TempCreateArgs = {
    /**
     * Select specific fields to fetch from the Temp
     * 
    **/
    select?: TempSelect | null
    /**
     * The data needed to create a Temp.
     * 
    **/
    data: XOR<TempCreateInput, TempUncheckedCreateInput>
  }


  /**
   * Temp createMany
   */
  export type TempCreateManyArgs = {
    /**
     * The data used to create many Temps.
     * 
    **/
    data: Enumerable<TempCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Temp update
   */
  export type TempUpdateArgs = {
    /**
     * Select specific fields to fetch from the Temp
     * 
    **/
    select?: TempSelect | null
    /**
     * The data needed to update a Temp.
     * 
    **/
    data: XOR<TempUpdateInput, TempUncheckedUpdateInput>
    /**
     * Choose, which Temp to update.
     * 
    **/
    where: TempWhereUniqueInput
  }


  /**
   * Temp updateMany
   */
  export type TempUpdateManyArgs = {
    /**
     * The data used to update Temps.
     * 
    **/
    data: XOR<TempUpdateManyMutationInput, TempUncheckedUpdateManyInput>
    /**
     * Filter which Temps to update
     * 
    **/
    where?: TempWhereInput
  }


  /**
   * Temp upsert
   */
  export type TempUpsertArgs = {
    /**
     * Select specific fields to fetch from the Temp
     * 
    **/
    select?: TempSelect | null
    /**
     * The filter to search for the Temp to update in case it exists.
     * 
    **/
    where: TempWhereUniqueInput
    /**
     * In case the Temp found by the `where` argument doesn't exist, create a new Temp with this data.
     * 
    **/
    create: XOR<TempCreateInput, TempUncheckedCreateInput>
    /**
     * In case the Temp was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TempUpdateInput, TempUncheckedUpdateInput>
  }


  /**
   * Temp delete
   */
  export type TempDeleteArgs = {
    /**
     * Select specific fields to fetch from the Temp
     * 
    **/
    select?: TempSelect | null
    /**
     * Filter which Temp to delete.
     * 
    **/
    where: TempWhereUniqueInput
  }


  /**
   * Temp deleteMany
   */
  export type TempDeleteManyArgs = {
    /**
     * Filter which Temps to delete
     * 
    **/
    where?: TempWhereInput
  }


  /**
   * Temp without action
   */
  export type TempArgs = {
    /**
     * Select specific fields to fetch from the Temp
     * 
    **/
    select?: TempSelect | null
  }



  /**
   * Model StudentProfile
   */


  export type AggregateStudentProfile = {
    _count: StudentProfileCountAggregateOutputType | null
    _avg: StudentProfileAvgAggregateOutputType | null
    _sum: StudentProfileSumAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  export type StudentProfileAvgAggregateOutputType = {
    code: number | null
  }

  export type StudentProfileSumAggregateOutputType = {
    code: number | null
  }

  export type StudentProfileMinAggregateOutputType = {
    id: string | null
    code: number | null
    fullName: string | null
    address: string | null
    homePhone: string | null
    mobilePhone: string | null
    birthDate: Date | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type StudentProfileMaxAggregateOutputType = {
    id: string | null
    code: number | null
    fullName: string | null
    address: string | null
    homePhone: string | null
    mobilePhone: string | null
    birthDate: Date | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type StudentProfileCountAggregateOutputType = {
    id: number
    code: number
    fullName: number
    address: number
    homePhone: number
    mobilePhone: number
    birthDate: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type StudentProfileAvgAggregateInputType = {
    code?: true
  }

  export type StudentProfileSumAggregateInputType = {
    code?: true
  }

  export type StudentProfileMinAggregateInputType = {
    id?: true
    code?: true
    fullName?: true
    address?: true
    homePhone?: true
    mobilePhone?: true
    birthDate?: true
    createAt?: true
    updateAt?: true
  }

  export type StudentProfileMaxAggregateInputType = {
    id?: true
    code?: true
    fullName?: true
    address?: true
    homePhone?: true
    mobilePhone?: true
    birthDate?: true
    createAt?: true
    updateAt?: true
  }

  export type StudentProfileCountAggregateInputType = {
    id?: true
    code?: true
    fullName?: true
    address?: true
    homePhone?: true
    mobilePhone?: true
    birthDate?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type StudentProfileAggregateArgs = {
    /**
     * Filter which StudentProfile to aggregate.
     * 
    **/
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentProfiles
    **/
    _count?: true | StudentProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentProfileMaxAggregateInputType
  }

  export type GetStudentProfileAggregateType<T extends StudentProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentProfile[P]>
      : GetScalarType<T[P], AggregateStudentProfile[P]>
  }




  export type StudentProfileGroupByArgs = {
    where?: StudentProfileWhereInput
    orderBy?: Enumerable<StudentProfileOrderByWithAggregationInput>
    by: Array<StudentProfileScalarFieldEnum>
    having?: StudentProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentProfileCountAggregateInputType | true
    _avg?: StudentProfileAvgAggregateInputType
    _sum?: StudentProfileSumAggregateInputType
    _min?: StudentProfileMinAggregateInputType
    _max?: StudentProfileMaxAggregateInputType
  }


  export type StudentProfileGroupByOutputType = {
    id: string
    code: number
    fullName: string
    address: string | null
    homePhone: string | null
    mobilePhone: string | null
    birthDate: Date | null
    createAt: Date
    updateAt: Date | null
    _count: StudentProfileCountAggregateOutputType | null
    _avg: StudentProfileAvgAggregateOutputType | null
    _sum: StudentProfileSumAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  type GetStudentProfileGroupByPayload<T extends StudentProfileGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StudentProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
        }
      >
    >


  export type StudentProfileSelect = {
    id?: boolean
    code?: boolean
    fullName?: boolean
    address?: boolean
    homePhone?: boolean
    mobilePhone?: boolean
    birthDate?: boolean
    wishLists?: boolean | StudentProfile$wishListsArgs
    createAt?: boolean
    updateAt?: boolean
    _count?: boolean | StudentProfileCountOutputTypeArgs
  }


  export type StudentProfileInclude = {
    wishLists?: boolean | StudentProfile$wishListsArgs
    _count?: boolean | StudentProfileCountOutputTypeArgs
  } 

  export type StudentProfileGetPayload<S extends boolean | null | undefined | StudentProfileArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StudentProfile :
    S extends undefined ? never :
    S extends { include: any } & (StudentProfileArgs | StudentProfileFindManyArgs)
    ? StudentProfile  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'wishLists' ? Array < StudentWishListGetPayload<S['include'][P]>>  :
        P extends '_count' ? StudentProfileCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (StudentProfileArgs | StudentProfileFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'wishLists' ? Array < StudentWishListGetPayload<S['select'][P]>>  :
        P extends '_count' ? StudentProfileCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof StudentProfile ? StudentProfile[P] : never
  } 
      : StudentProfile


  type StudentProfileCountArgs = Merge<
    Omit<StudentProfileFindManyArgs, 'select' | 'include'> & {
      select?: StudentProfileCountAggregateInputType | true
    }
  >

  export interface StudentProfileDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one StudentProfile that matches the filter.
     * @param {StudentProfileFindUniqueArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentProfileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StudentProfileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'StudentProfile'> extends True ? Prisma__StudentProfileClient<StudentProfileGetPayload<T>> : Prisma__StudentProfileClient<StudentProfileGetPayload<T> | null, null>

    /**
     * Find one StudentProfile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StudentProfileFindUniqueOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentProfileFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StudentProfileFindUniqueOrThrowArgs>
    ): Prisma__StudentProfileClient<StudentProfileGetPayload<T>>

    /**
     * Find the first StudentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentProfileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StudentProfileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'StudentProfile'> extends True ? Prisma__StudentProfileClient<StudentProfileGetPayload<T>> : Prisma__StudentProfileClient<StudentProfileGetPayload<T> | null, null>

    /**
     * Find the first StudentProfile that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentProfileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StudentProfileFindFirstOrThrowArgs>
    ): Prisma__StudentProfileClient<StudentProfileGetPayload<T>>

    /**
     * Find zero or more StudentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany()
     * 
     * // Get first 10 StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentProfileFindManyArgs>(
      args?: SelectSubset<T, StudentProfileFindManyArgs>
    ): PrismaPromise<Array<StudentProfileGetPayload<T>>>

    /**
     * Create a StudentProfile.
     * @param {StudentProfileCreateArgs} args - Arguments to create a StudentProfile.
     * @example
     * // Create one StudentProfile
     * const StudentProfile = await prisma.studentProfile.create({
     *   data: {
     *     // ... data to create a StudentProfile
     *   }
     * })
     * 
    **/
    create<T extends StudentProfileCreateArgs>(
      args: SelectSubset<T, StudentProfileCreateArgs>
    ): Prisma__StudentProfileClient<StudentProfileGetPayload<T>>

    /**
     * Create many StudentProfiles.
     *     @param {StudentProfileCreateManyArgs} args - Arguments to create many StudentProfiles.
     *     @example
     *     // Create many StudentProfiles
     *     const studentProfile = await prisma.studentProfile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentProfileCreateManyArgs>(
      args?: SelectSubset<T, StudentProfileCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a StudentProfile.
     * @param {StudentProfileDeleteArgs} args - Arguments to delete one StudentProfile.
     * @example
     * // Delete one StudentProfile
     * const StudentProfile = await prisma.studentProfile.delete({
     *   where: {
     *     // ... filter to delete one StudentProfile
     *   }
     * })
     * 
    **/
    delete<T extends StudentProfileDeleteArgs>(
      args: SelectSubset<T, StudentProfileDeleteArgs>
    ): Prisma__StudentProfileClient<StudentProfileGetPayload<T>>

    /**
     * Update one StudentProfile.
     * @param {StudentProfileUpdateArgs} args - Arguments to update one StudentProfile.
     * @example
     * // Update one StudentProfile
     * const studentProfile = await prisma.studentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentProfileUpdateArgs>(
      args: SelectSubset<T, StudentProfileUpdateArgs>
    ): Prisma__StudentProfileClient<StudentProfileGetPayload<T>>

    /**
     * Delete zero or more StudentProfiles.
     * @param {StudentProfileDeleteManyArgs} args - Arguments to filter StudentProfiles to delete.
     * @example
     * // Delete a few StudentProfiles
     * const { count } = await prisma.studentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentProfileDeleteManyArgs>(
      args?: SelectSubset<T, StudentProfileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentProfileUpdateManyArgs>(
      args: SelectSubset<T, StudentProfileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentProfile.
     * @param {StudentProfileUpsertArgs} args - Arguments to update or create a StudentProfile.
     * @example
     * // Update or create a StudentProfile
     * const studentProfile = await prisma.studentProfile.upsert({
     *   create: {
     *     // ... data to create a StudentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentProfile we want to update
     *   }
     * })
    **/
    upsert<T extends StudentProfileUpsertArgs>(
      args: SelectSubset<T, StudentProfileUpsertArgs>
    ): Prisma__StudentProfileClient<StudentProfileGetPayload<T>>

    /**
     * Count the number of StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileCountArgs} args - Arguments to filter StudentProfiles to count.
     * @example
     * // Count the number of StudentProfiles
     * const count = await prisma.studentProfile.count({
     *   where: {
     *     // ... the filter for the StudentProfiles we want to count
     *   }
     * })
    **/
    count<T extends StudentProfileCountArgs>(
      args?: Subset<T, StudentProfileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentProfileAggregateArgs>(args: Subset<T, StudentProfileAggregateArgs>): PrismaPromise<GetStudentProfileAggregateType<T>>

    /**
     * Group by StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentProfileGroupByArgs['orderBy'] }
        : { orderBy?: StudentProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProfileGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StudentProfileClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    wishLists<T extends StudentProfile$wishListsArgs= {}>(args?: Subset<T, StudentProfile$wishListsArgs>): PrismaPromise<Array<StudentWishListGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * StudentProfile base type for findUnique actions
   */
  export type StudentProfileFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the StudentProfile
     * 
    **/
    select?: StudentProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentProfileInclude | null
    /**
     * Filter, which StudentProfile to fetch.
     * 
    **/
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findUnique
   */
  export interface StudentProfileFindUniqueArgs extends StudentProfileFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StudentProfile findUniqueOrThrow
   */
  export type StudentProfileFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the StudentProfile
     * 
    **/
    select?: StudentProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentProfileInclude | null
    /**
     * Filter, which StudentProfile to fetch.
     * 
    **/
    where: StudentProfileWhereUniqueInput
  }


  /**
   * StudentProfile base type for findFirst actions
   */
  export type StudentProfileFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the StudentProfile
     * 
    **/
    select?: StudentProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentProfileInclude | null
    /**
     * Filter, which StudentProfile to fetch.
     * 
    **/
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     * 
    **/
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     * 
    **/
    distinct?: Enumerable<StudentProfileScalarFieldEnum>
  }

  /**
   * StudentProfile findFirst
   */
  export interface StudentProfileFindFirstArgs extends StudentProfileFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StudentProfile findFirstOrThrow
   */
  export type StudentProfileFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the StudentProfile
     * 
    **/
    select?: StudentProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentProfileInclude | null
    /**
     * Filter, which StudentProfile to fetch.
     * 
    **/
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     * 
    **/
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     * 
    **/
    distinct?: Enumerable<StudentProfileScalarFieldEnum>
  }


  /**
   * StudentProfile findMany
   */
  export type StudentProfileFindManyArgs = {
    /**
     * Select specific fields to fetch from the StudentProfile
     * 
    **/
    select?: StudentProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentProfileInclude | null
    /**
     * Filter, which StudentProfiles to fetch.
     * 
    **/
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentProfiles.
     * 
    **/
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StudentProfileScalarFieldEnum>
  }


  /**
   * StudentProfile create
   */
  export type StudentProfileCreateArgs = {
    /**
     * Select specific fields to fetch from the StudentProfile
     * 
    **/
    select?: StudentProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentProfileInclude | null
    /**
     * The data needed to create a StudentProfile.
     * 
    **/
    data: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
  }


  /**
   * StudentProfile createMany
   */
  export type StudentProfileCreateManyArgs = {
    /**
     * The data used to create many StudentProfiles.
     * 
    **/
    data: Enumerable<StudentProfileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * StudentProfile update
   */
  export type StudentProfileUpdateArgs = {
    /**
     * Select specific fields to fetch from the StudentProfile
     * 
    **/
    select?: StudentProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentProfileInclude | null
    /**
     * The data needed to update a StudentProfile.
     * 
    **/
    data: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
    /**
     * Choose, which StudentProfile to update.
     * 
    **/
    where: StudentProfileWhereUniqueInput
  }


  /**
   * StudentProfile updateMany
   */
  export type StudentProfileUpdateManyArgs = {
    /**
     * The data used to update StudentProfiles.
     * 
    **/
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     * 
    **/
    where?: StudentProfileWhereInput
  }


  /**
   * StudentProfile upsert
   */
  export type StudentProfileUpsertArgs = {
    /**
     * Select specific fields to fetch from the StudentProfile
     * 
    **/
    select?: StudentProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentProfileInclude | null
    /**
     * The filter to search for the StudentProfile to update in case it exists.
     * 
    **/
    where: StudentProfileWhereUniqueInput
    /**
     * In case the StudentProfile found by the `where` argument doesn't exist, create a new StudentProfile with this data.
     * 
    **/
    create: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
    /**
     * In case the StudentProfile was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
  }


  /**
   * StudentProfile delete
   */
  export type StudentProfileDeleteArgs = {
    /**
     * Select specific fields to fetch from the StudentProfile
     * 
    **/
    select?: StudentProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentProfileInclude | null
    /**
     * Filter which StudentProfile to delete.
     * 
    **/
    where: StudentProfileWhereUniqueInput
  }


  /**
   * StudentProfile deleteMany
   */
  export type StudentProfileDeleteManyArgs = {
    /**
     * Filter which StudentProfiles to delete
     * 
    **/
    where?: StudentProfileWhereInput
  }


  /**
   * StudentProfile.wishLists
   */
  export type StudentProfile$wishListsArgs = {
    /**
     * Select specific fields to fetch from the StudentWishList
     * 
    **/
    select?: StudentWishListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentWishListInclude | null
    where?: StudentWishListWhereInput
    orderBy?: Enumerable<StudentWishListOrderByWithRelationInput>
    cursor?: StudentWishListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StudentWishListScalarFieldEnum>
  }


  /**
   * StudentProfile without action
   */
  export type StudentProfileArgs = {
    /**
     * Select specific fields to fetch from the StudentProfile
     * 
    **/
    select?: StudentProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentProfileInclude | null
  }



  /**
   * Model StudentWishList
   */


  export type AggregateStudentWishList = {
    _count: StudentWishListCountAggregateOutputType | null
    _min: StudentWishListMinAggregateOutputType | null
    _max: StudentWishListMaxAggregateOutputType | null
  }

  export type StudentWishListMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    courseLookupId: string | null
  }

  export type StudentWishListMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    courseLookupId: string | null
  }

  export type StudentWishListCountAggregateOutputType = {
    id: number
    profileId: number
    courseLookupId: number
    _all: number
  }


  export type StudentWishListMinAggregateInputType = {
    id?: true
    profileId?: true
    courseLookupId?: true
  }

  export type StudentWishListMaxAggregateInputType = {
    id?: true
    profileId?: true
    courseLookupId?: true
  }

  export type StudentWishListCountAggregateInputType = {
    id?: true
    profileId?: true
    courseLookupId?: true
    _all?: true
  }

  export type StudentWishListAggregateArgs = {
    /**
     * Filter which StudentWishList to aggregate.
     * 
    **/
    where?: StudentWishListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentWishLists to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentWishListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StudentWishListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentWishLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentWishLists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentWishLists
    **/
    _count?: true | StudentWishListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentWishListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentWishListMaxAggregateInputType
  }

  export type GetStudentWishListAggregateType<T extends StudentWishListAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentWishList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentWishList[P]>
      : GetScalarType<T[P], AggregateStudentWishList[P]>
  }




  export type StudentWishListGroupByArgs = {
    where?: StudentWishListWhereInput
    orderBy?: Enumerable<StudentWishListOrderByWithAggregationInput>
    by: Array<StudentWishListScalarFieldEnum>
    having?: StudentWishListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentWishListCountAggregateInputType | true
    _min?: StudentWishListMinAggregateInputType
    _max?: StudentWishListMaxAggregateInputType
  }


  export type StudentWishListGroupByOutputType = {
    id: string
    profileId: string
    courseLookupId: string
    _count: StudentWishListCountAggregateOutputType | null
    _min: StudentWishListMinAggregateOutputType | null
    _max: StudentWishListMaxAggregateOutputType | null
  }

  type GetStudentWishListGroupByPayload<T extends StudentWishListGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StudentWishListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentWishListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentWishListGroupByOutputType[P]>
            : GetScalarType<T[P], StudentWishListGroupByOutputType[P]>
        }
      >
    >


  export type StudentWishListSelect = {
    id?: boolean
    profile?: boolean | StudentProfileArgs
    profileId?: boolean
    courseLookup?: boolean | CourseLookupArgs
    courseLookupId?: boolean
  }


  export type StudentWishListInclude = {
    profile?: boolean | StudentProfileArgs
    courseLookup?: boolean | CourseLookupArgs
  } 

  export type StudentWishListGetPayload<S extends boolean | null | undefined | StudentWishListArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StudentWishList :
    S extends undefined ? never :
    S extends { include: any } & (StudentWishListArgs | StudentWishListFindManyArgs)
    ? StudentWishList  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'profile' ? StudentProfileGetPayload<S['include'][P]> :
        P extends 'courseLookup' ? CourseLookupGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (StudentWishListArgs | StudentWishListFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'profile' ? StudentProfileGetPayload<S['select'][P]> :
        P extends 'courseLookup' ? CourseLookupGetPayload<S['select'][P]> :  P extends keyof StudentWishList ? StudentWishList[P] : never
  } 
      : StudentWishList


  type StudentWishListCountArgs = Merge<
    Omit<StudentWishListFindManyArgs, 'select' | 'include'> & {
      select?: StudentWishListCountAggregateInputType | true
    }
  >

  export interface StudentWishListDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one StudentWishList that matches the filter.
     * @param {StudentWishListFindUniqueArgs} args - Arguments to find a StudentWishList
     * @example
     * // Get one StudentWishList
     * const studentWishList = await prisma.studentWishList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentWishListFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StudentWishListFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'StudentWishList'> extends True ? Prisma__StudentWishListClient<StudentWishListGetPayload<T>> : Prisma__StudentWishListClient<StudentWishListGetPayload<T> | null, null>

    /**
     * Find one StudentWishList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StudentWishListFindUniqueOrThrowArgs} args - Arguments to find a StudentWishList
     * @example
     * // Get one StudentWishList
     * const studentWishList = await prisma.studentWishList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentWishListFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StudentWishListFindUniqueOrThrowArgs>
    ): Prisma__StudentWishListClient<StudentWishListGetPayload<T>>

    /**
     * Find the first StudentWishList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentWishListFindFirstArgs} args - Arguments to find a StudentWishList
     * @example
     * // Get one StudentWishList
     * const studentWishList = await prisma.studentWishList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentWishListFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StudentWishListFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'StudentWishList'> extends True ? Prisma__StudentWishListClient<StudentWishListGetPayload<T>> : Prisma__StudentWishListClient<StudentWishListGetPayload<T> | null, null>

    /**
     * Find the first StudentWishList that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentWishListFindFirstOrThrowArgs} args - Arguments to find a StudentWishList
     * @example
     * // Get one StudentWishList
     * const studentWishList = await prisma.studentWishList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentWishListFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StudentWishListFindFirstOrThrowArgs>
    ): Prisma__StudentWishListClient<StudentWishListGetPayload<T>>

    /**
     * Find zero or more StudentWishLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentWishListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentWishLists
     * const studentWishLists = await prisma.studentWishList.findMany()
     * 
     * // Get first 10 StudentWishLists
     * const studentWishLists = await prisma.studentWishList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWishListWithIdOnly = await prisma.studentWishList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentWishListFindManyArgs>(
      args?: SelectSubset<T, StudentWishListFindManyArgs>
    ): PrismaPromise<Array<StudentWishListGetPayload<T>>>

    /**
     * Create a StudentWishList.
     * @param {StudentWishListCreateArgs} args - Arguments to create a StudentWishList.
     * @example
     * // Create one StudentWishList
     * const StudentWishList = await prisma.studentWishList.create({
     *   data: {
     *     // ... data to create a StudentWishList
     *   }
     * })
     * 
    **/
    create<T extends StudentWishListCreateArgs>(
      args: SelectSubset<T, StudentWishListCreateArgs>
    ): Prisma__StudentWishListClient<StudentWishListGetPayload<T>>

    /**
     * Create many StudentWishLists.
     *     @param {StudentWishListCreateManyArgs} args - Arguments to create many StudentWishLists.
     *     @example
     *     // Create many StudentWishLists
     *     const studentWishList = await prisma.studentWishList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentWishListCreateManyArgs>(
      args?: SelectSubset<T, StudentWishListCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a StudentWishList.
     * @param {StudentWishListDeleteArgs} args - Arguments to delete one StudentWishList.
     * @example
     * // Delete one StudentWishList
     * const StudentWishList = await prisma.studentWishList.delete({
     *   where: {
     *     // ... filter to delete one StudentWishList
     *   }
     * })
     * 
    **/
    delete<T extends StudentWishListDeleteArgs>(
      args: SelectSubset<T, StudentWishListDeleteArgs>
    ): Prisma__StudentWishListClient<StudentWishListGetPayload<T>>

    /**
     * Update one StudentWishList.
     * @param {StudentWishListUpdateArgs} args - Arguments to update one StudentWishList.
     * @example
     * // Update one StudentWishList
     * const studentWishList = await prisma.studentWishList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentWishListUpdateArgs>(
      args: SelectSubset<T, StudentWishListUpdateArgs>
    ): Prisma__StudentWishListClient<StudentWishListGetPayload<T>>

    /**
     * Delete zero or more StudentWishLists.
     * @param {StudentWishListDeleteManyArgs} args - Arguments to filter StudentWishLists to delete.
     * @example
     * // Delete a few StudentWishLists
     * const { count } = await prisma.studentWishList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentWishListDeleteManyArgs>(
      args?: SelectSubset<T, StudentWishListDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentWishLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentWishListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentWishLists
     * const studentWishList = await prisma.studentWishList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentWishListUpdateManyArgs>(
      args: SelectSubset<T, StudentWishListUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentWishList.
     * @param {StudentWishListUpsertArgs} args - Arguments to update or create a StudentWishList.
     * @example
     * // Update or create a StudentWishList
     * const studentWishList = await prisma.studentWishList.upsert({
     *   create: {
     *     // ... data to create a StudentWishList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentWishList we want to update
     *   }
     * })
    **/
    upsert<T extends StudentWishListUpsertArgs>(
      args: SelectSubset<T, StudentWishListUpsertArgs>
    ): Prisma__StudentWishListClient<StudentWishListGetPayload<T>>

    /**
     * Count the number of StudentWishLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentWishListCountArgs} args - Arguments to filter StudentWishLists to count.
     * @example
     * // Count the number of StudentWishLists
     * const count = await prisma.studentWishList.count({
     *   where: {
     *     // ... the filter for the StudentWishLists we want to count
     *   }
     * })
    **/
    count<T extends StudentWishListCountArgs>(
      args?: Subset<T, StudentWishListCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentWishListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentWishList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentWishListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentWishListAggregateArgs>(args: Subset<T, StudentWishListAggregateArgs>): PrismaPromise<GetStudentWishListAggregateType<T>>

    /**
     * Group by StudentWishList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentWishListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentWishListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentWishListGroupByArgs['orderBy'] }
        : { orderBy?: StudentWishListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentWishListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentWishListGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentWishList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StudentWishListClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    profile<T extends StudentProfileArgs= {}>(args?: Subset<T, StudentProfileArgs>): Prisma__StudentProfileClient<StudentProfileGetPayload<T> | Null>;

    courseLookup<T extends CourseLookupArgs= {}>(args?: Subset<T, CourseLookupArgs>): Prisma__CourseLookupClient<CourseLookupGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * StudentWishList base type for findUnique actions
   */
  export type StudentWishListFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the StudentWishList
     * 
    **/
    select?: StudentWishListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentWishListInclude | null
    /**
     * Filter, which StudentWishList to fetch.
     * 
    **/
    where: StudentWishListWhereUniqueInput
  }

  /**
   * StudentWishList findUnique
   */
  export interface StudentWishListFindUniqueArgs extends StudentWishListFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StudentWishList findUniqueOrThrow
   */
  export type StudentWishListFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the StudentWishList
     * 
    **/
    select?: StudentWishListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentWishListInclude | null
    /**
     * Filter, which StudentWishList to fetch.
     * 
    **/
    where: StudentWishListWhereUniqueInput
  }


  /**
   * StudentWishList base type for findFirst actions
   */
  export type StudentWishListFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the StudentWishList
     * 
    **/
    select?: StudentWishListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentWishListInclude | null
    /**
     * Filter, which StudentWishList to fetch.
     * 
    **/
    where?: StudentWishListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentWishLists to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentWishListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentWishLists.
     * 
    **/
    cursor?: StudentWishListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentWishLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentWishLists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentWishLists.
     * 
    **/
    distinct?: Enumerable<StudentWishListScalarFieldEnum>
  }

  /**
   * StudentWishList findFirst
   */
  export interface StudentWishListFindFirstArgs extends StudentWishListFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StudentWishList findFirstOrThrow
   */
  export type StudentWishListFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the StudentWishList
     * 
    **/
    select?: StudentWishListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentWishListInclude | null
    /**
     * Filter, which StudentWishList to fetch.
     * 
    **/
    where?: StudentWishListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentWishLists to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentWishListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentWishLists.
     * 
    **/
    cursor?: StudentWishListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentWishLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentWishLists.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentWishLists.
     * 
    **/
    distinct?: Enumerable<StudentWishListScalarFieldEnum>
  }


  /**
   * StudentWishList findMany
   */
  export type StudentWishListFindManyArgs = {
    /**
     * Select specific fields to fetch from the StudentWishList
     * 
    **/
    select?: StudentWishListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentWishListInclude | null
    /**
     * Filter, which StudentWishLists to fetch.
     * 
    **/
    where?: StudentWishListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentWishLists to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentWishListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentWishLists.
     * 
    **/
    cursor?: StudentWishListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentWishLists from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentWishLists.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StudentWishListScalarFieldEnum>
  }


  /**
   * StudentWishList create
   */
  export type StudentWishListCreateArgs = {
    /**
     * Select specific fields to fetch from the StudentWishList
     * 
    **/
    select?: StudentWishListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentWishListInclude | null
    /**
     * The data needed to create a StudentWishList.
     * 
    **/
    data: XOR<StudentWishListCreateInput, StudentWishListUncheckedCreateInput>
  }


  /**
   * StudentWishList createMany
   */
  export type StudentWishListCreateManyArgs = {
    /**
     * The data used to create many StudentWishLists.
     * 
    **/
    data: Enumerable<StudentWishListCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * StudentWishList update
   */
  export type StudentWishListUpdateArgs = {
    /**
     * Select specific fields to fetch from the StudentWishList
     * 
    **/
    select?: StudentWishListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentWishListInclude | null
    /**
     * The data needed to update a StudentWishList.
     * 
    **/
    data: XOR<StudentWishListUpdateInput, StudentWishListUncheckedUpdateInput>
    /**
     * Choose, which StudentWishList to update.
     * 
    **/
    where: StudentWishListWhereUniqueInput
  }


  /**
   * StudentWishList updateMany
   */
  export type StudentWishListUpdateManyArgs = {
    /**
     * The data used to update StudentWishLists.
     * 
    **/
    data: XOR<StudentWishListUpdateManyMutationInput, StudentWishListUncheckedUpdateManyInput>
    /**
     * Filter which StudentWishLists to update
     * 
    **/
    where?: StudentWishListWhereInput
  }


  /**
   * StudentWishList upsert
   */
  export type StudentWishListUpsertArgs = {
    /**
     * Select specific fields to fetch from the StudentWishList
     * 
    **/
    select?: StudentWishListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentWishListInclude | null
    /**
     * The filter to search for the StudentWishList to update in case it exists.
     * 
    **/
    where: StudentWishListWhereUniqueInput
    /**
     * In case the StudentWishList found by the `where` argument doesn't exist, create a new StudentWishList with this data.
     * 
    **/
    create: XOR<StudentWishListCreateInput, StudentWishListUncheckedCreateInput>
    /**
     * In case the StudentWishList was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StudentWishListUpdateInput, StudentWishListUncheckedUpdateInput>
  }


  /**
   * StudentWishList delete
   */
  export type StudentWishListDeleteArgs = {
    /**
     * Select specific fields to fetch from the StudentWishList
     * 
    **/
    select?: StudentWishListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentWishListInclude | null
    /**
     * Filter which StudentWishList to delete.
     * 
    **/
    where: StudentWishListWhereUniqueInput
  }


  /**
   * StudentWishList deleteMany
   */
  export type StudentWishListDeleteManyArgs = {
    /**
     * Filter which StudentWishLists to delete
     * 
    **/
    where?: StudentWishListWhereInput
  }


  /**
   * StudentWishList without action
   */
  export type StudentWishListArgs = {
    /**
     * Select specific fields to fetch from the StudentWishList
     * 
    **/
    select?: StudentWishListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentWishListInclude | null
  }



  /**
   * Model CourseLookup
   */


  export type AggregateCourseLookup = {
    _count: CourseLookupCountAggregateOutputType | null
    _min: CourseLookupMinAggregateOutputType | null
    _max: CourseLookupMaxAggregateOutputType | null
  }

  export type CourseLookupMinAggregateOutputType = {
    id: string | null
    originalCourseId: string | null
    courseName: string | null
    courseStartDate: string | null
    price: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CourseLookupMaxAggregateOutputType = {
    id: string | null
    originalCourseId: string | null
    courseName: string | null
    courseStartDate: string | null
    price: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CourseLookupCountAggregateOutputType = {
    id: number
    originalCourseId: number
    courseName: number
    courseStartDate: number
    price: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type CourseLookupMinAggregateInputType = {
    id?: true
    originalCourseId?: true
    courseName?: true
    courseStartDate?: true
    price?: true
    createAt?: true
    updateAt?: true
  }

  export type CourseLookupMaxAggregateInputType = {
    id?: true
    originalCourseId?: true
    courseName?: true
    courseStartDate?: true
    price?: true
    createAt?: true
    updateAt?: true
  }

  export type CourseLookupCountAggregateInputType = {
    id?: true
    originalCourseId?: true
    courseName?: true
    courseStartDate?: true
    price?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type CourseLookupAggregateArgs = {
    /**
     * Filter which CourseLookup to aggregate.
     * 
    **/
    where?: CourseLookupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseLookups to fetch.
     * 
    **/
    orderBy?: Enumerable<CourseLookupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CourseLookupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseLookups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseLookups.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseLookups
    **/
    _count?: true | CourseLookupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseLookupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseLookupMaxAggregateInputType
  }

  export type GetCourseLookupAggregateType<T extends CourseLookupAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseLookup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseLookup[P]>
      : GetScalarType<T[P], AggregateCourseLookup[P]>
  }




  export type CourseLookupGroupByArgs = {
    where?: CourseLookupWhereInput
    orderBy?: Enumerable<CourseLookupOrderByWithAggregationInput>
    by: Array<CourseLookupScalarFieldEnum>
    having?: CourseLookupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseLookupCountAggregateInputType | true
    _min?: CourseLookupMinAggregateInputType
    _max?: CourseLookupMaxAggregateInputType
  }


  export type CourseLookupGroupByOutputType = {
    id: string
    originalCourseId: string
    courseName: string
    courseStartDate: string | null
    price: string | null
    createAt: Date
    updateAt: Date
    _count: CourseLookupCountAggregateOutputType | null
    _min: CourseLookupMinAggregateOutputType | null
    _max: CourseLookupMaxAggregateOutputType | null
  }

  type GetCourseLookupGroupByPayload<T extends CourseLookupGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CourseLookupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseLookupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseLookupGroupByOutputType[P]>
            : GetScalarType<T[P], CourseLookupGroupByOutputType[P]>
        }
      >
    >


  export type CourseLookupSelect = {
    id?: boolean
    originalCourseId?: boolean
    courseName?: boolean
    courseStartDate?: boolean
    price?: boolean
    wishLists?: boolean | CourseLookup$wishListsArgs
    createAt?: boolean
    updateAt?: boolean
    _count?: boolean | CourseLookupCountOutputTypeArgs
  }


  export type CourseLookupInclude = {
    wishLists?: boolean | CourseLookup$wishListsArgs
    _count?: boolean | CourseLookupCountOutputTypeArgs
  } 

  export type CourseLookupGetPayload<S extends boolean | null | undefined | CourseLookupArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CourseLookup :
    S extends undefined ? never :
    S extends { include: any } & (CourseLookupArgs | CourseLookupFindManyArgs)
    ? CourseLookup  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'wishLists' ? Array < StudentWishListGetPayload<S['include'][P]>>  :
        P extends '_count' ? CourseLookupCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CourseLookupArgs | CourseLookupFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'wishLists' ? Array < StudentWishListGetPayload<S['select'][P]>>  :
        P extends '_count' ? CourseLookupCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof CourseLookup ? CourseLookup[P] : never
  } 
      : CourseLookup


  type CourseLookupCountArgs = Merge<
    Omit<CourseLookupFindManyArgs, 'select' | 'include'> & {
      select?: CourseLookupCountAggregateInputType | true
    }
  >

  export interface CourseLookupDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one CourseLookup that matches the filter.
     * @param {CourseLookupFindUniqueArgs} args - Arguments to find a CourseLookup
     * @example
     * // Get one CourseLookup
     * const courseLookup = await prisma.courseLookup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseLookupFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CourseLookupFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CourseLookup'> extends True ? Prisma__CourseLookupClient<CourseLookupGetPayload<T>> : Prisma__CourseLookupClient<CourseLookupGetPayload<T> | null, null>

    /**
     * Find one CourseLookup that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourseLookupFindUniqueOrThrowArgs} args - Arguments to find a CourseLookup
     * @example
     * // Get one CourseLookup
     * const courseLookup = await prisma.courseLookup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseLookupFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CourseLookupFindUniqueOrThrowArgs>
    ): Prisma__CourseLookupClient<CourseLookupGetPayload<T>>

    /**
     * Find the first CourseLookup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseLookupFindFirstArgs} args - Arguments to find a CourseLookup
     * @example
     * // Get one CourseLookup
     * const courseLookup = await prisma.courseLookup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseLookupFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CourseLookupFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CourseLookup'> extends True ? Prisma__CourseLookupClient<CourseLookupGetPayload<T>> : Prisma__CourseLookupClient<CourseLookupGetPayload<T> | null, null>

    /**
     * Find the first CourseLookup that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseLookupFindFirstOrThrowArgs} args - Arguments to find a CourseLookup
     * @example
     * // Get one CourseLookup
     * const courseLookup = await prisma.courseLookup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseLookupFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CourseLookupFindFirstOrThrowArgs>
    ): Prisma__CourseLookupClient<CourseLookupGetPayload<T>>

    /**
     * Find zero or more CourseLookups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseLookupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseLookups
     * const courseLookups = await prisma.courseLookup.findMany()
     * 
     * // Get first 10 CourseLookups
     * const courseLookups = await prisma.courseLookup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseLookupWithIdOnly = await prisma.courseLookup.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourseLookupFindManyArgs>(
      args?: SelectSubset<T, CourseLookupFindManyArgs>
    ): PrismaPromise<Array<CourseLookupGetPayload<T>>>

    /**
     * Create a CourseLookup.
     * @param {CourseLookupCreateArgs} args - Arguments to create a CourseLookup.
     * @example
     * // Create one CourseLookup
     * const CourseLookup = await prisma.courseLookup.create({
     *   data: {
     *     // ... data to create a CourseLookup
     *   }
     * })
     * 
    **/
    create<T extends CourseLookupCreateArgs>(
      args: SelectSubset<T, CourseLookupCreateArgs>
    ): Prisma__CourseLookupClient<CourseLookupGetPayload<T>>

    /**
     * Create many CourseLookups.
     *     @param {CourseLookupCreateManyArgs} args - Arguments to create many CourseLookups.
     *     @example
     *     // Create many CourseLookups
     *     const courseLookup = await prisma.courseLookup.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseLookupCreateManyArgs>(
      args?: SelectSubset<T, CourseLookupCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CourseLookup.
     * @param {CourseLookupDeleteArgs} args - Arguments to delete one CourseLookup.
     * @example
     * // Delete one CourseLookup
     * const CourseLookup = await prisma.courseLookup.delete({
     *   where: {
     *     // ... filter to delete one CourseLookup
     *   }
     * })
     * 
    **/
    delete<T extends CourseLookupDeleteArgs>(
      args: SelectSubset<T, CourseLookupDeleteArgs>
    ): Prisma__CourseLookupClient<CourseLookupGetPayload<T>>

    /**
     * Update one CourseLookup.
     * @param {CourseLookupUpdateArgs} args - Arguments to update one CourseLookup.
     * @example
     * // Update one CourseLookup
     * const courseLookup = await prisma.courseLookup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseLookupUpdateArgs>(
      args: SelectSubset<T, CourseLookupUpdateArgs>
    ): Prisma__CourseLookupClient<CourseLookupGetPayload<T>>

    /**
     * Delete zero or more CourseLookups.
     * @param {CourseLookupDeleteManyArgs} args - Arguments to filter CourseLookups to delete.
     * @example
     * // Delete a few CourseLookups
     * const { count } = await prisma.courseLookup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseLookupDeleteManyArgs>(
      args?: SelectSubset<T, CourseLookupDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseLookups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseLookupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseLookups
     * const courseLookup = await prisma.courseLookup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseLookupUpdateManyArgs>(
      args: SelectSubset<T, CourseLookupUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CourseLookup.
     * @param {CourseLookupUpsertArgs} args - Arguments to update or create a CourseLookup.
     * @example
     * // Update or create a CourseLookup
     * const courseLookup = await prisma.courseLookup.upsert({
     *   create: {
     *     // ... data to create a CourseLookup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseLookup we want to update
     *   }
     * })
    **/
    upsert<T extends CourseLookupUpsertArgs>(
      args: SelectSubset<T, CourseLookupUpsertArgs>
    ): Prisma__CourseLookupClient<CourseLookupGetPayload<T>>

    /**
     * Count the number of CourseLookups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseLookupCountArgs} args - Arguments to filter CourseLookups to count.
     * @example
     * // Count the number of CourseLookups
     * const count = await prisma.courseLookup.count({
     *   where: {
     *     // ... the filter for the CourseLookups we want to count
     *   }
     * })
    **/
    count<T extends CourseLookupCountArgs>(
      args?: Subset<T, CourseLookupCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseLookupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseLookup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseLookupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseLookupAggregateArgs>(args: Subset<T, CourseLookupAggregateArgs>): PrismaPromise<GetCourseLookupAggregateType<T>>

    /**
     * Group by CourseLookup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseLookupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseLookupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseLookupGroupByArgs['orderBy'] }
        : { orderBy?: CourseLookupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseLookupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseLookupGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseLookup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CourseLookupClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    wishLists<T extends CourseLookup$wishListsArgs= {}>(args?: Subset<T, CourseLookup$wishListsArgs>): PrismaPromise<Array<StudentWishListGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CourseLookup base type for findUnique actions
   */
  export type CourseLookupFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CourseLookup
     * 
    **/
    select?: CourseLookupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseLookupInclude | null
    /**
     * Filter, which CourseLookup to fetch.
     * 
    **/
    where: CourseLookupWhereUniqueInput
  }

  /**
   * CourseLookup findUnique
   */
  export interface CourseLookupFindUniqueArgs extends CourseLookupFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CourseLookup findUniqueOrThrow
   */
  export type CourseLookupFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CourseLookup
     * 
    **/
    select?: CourseLookupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseLookupInclude | null
    /**
     * Filter, which CourseLookup to fetch.
     * 
    **/
    where: CourseLookupWhereUniqueInput
  }


  /**
   * CourseLookup base type for findFirst actions
   */
  export type CourseLookupFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CourseLookup
     * 
    **/
    select?: CourseLookupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseLookupInclude | null
    /**
     * Filter, which CourseLookup to fetch.
     * 
    **/
    where?: CourseLookupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseLookups to fetch.
     * 
    **/
    orderBy?: Enumerable<CourseLookupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseLookups.
     * 
    **/
    cursor?: CourseLookupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseLookups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseLookups.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseLookups.
     * 
    **/
    distinct?: Enumerable<CourseLookupScalarFieldEnum>
  }

  /**
   * CourseLookup findFirst
   */
  export interface CourseLookupFindFirstArgs extends CourseLookupFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CourseLookup findFirstOrThrow
   */
  export type CourseLookupFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CourseLookup
     * 
    **/
    select?: CourseLookupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseLookupInclude | null
    /**
     * Filter, which CourseLookup to fetch.
     * 
    **/
    where?: CourseLookupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseLookups to fetch.
     * 
    **/
    orderBy?: Enumerable<CourseLookupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseLookups.
     * 
    **/
    cursor?: CourseLookupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseLookups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseLookups.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseLookups.
     * 
    **/
    distinct?: Enumerable<CourseLookupScalarFieldEnum>
  }


  /**
   * CourseLookup findMany
   */
  export type CourseLookupFindManyArgs = {
    /**
     * Select specific fields to fetch from the CourseLookup
     * 
    **/
    select?: CourseLookupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseLookupInclude | null
    /**
     * Filter, which CourseLookups to fetch.
     * 
    **/
    where?: CourseLookupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseLookups to fetch.
     * 
    **/
    orderBy?: Enumerable<CourseLookupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseLookups.
     * 
    **/
    cursor?: CourseLookupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseLookups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseLookups.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CourseLookupScalarFieldEnum>
  }


  /**
   * CourseLookup create
   */
  export type CourseLookupCreateArgs = {
    /**
     * Select specific fields to fetch from the CourseLookup
     * 
    **/
    select?: CourseLookupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseLookupInclude | null
    /**
     * The data needed to create a CourseLookup.
     * 
    **/
    data: XOR<CourseLookupCreateInput, CourseLookupUncheckedCreateInput>
  }


  /**
   * CourseLookup createMany
   */
  export type CourseLookupCreateManyArgs = {
    /**
     * The data used to create many CourseLookups.
     * 
    **/
    data: Enumerable<CourseLookupCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CourseLookup update
   */
  export type CourseLookupUpdateArgs = {
    /**
     * Select specific fields to fetch from the CourseLookup
     * 
    **/
    select?: CourseLookupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseLookupInclude | null
    /**
     * The data needed to update a CourseLookup.
     * 
    **/
    data: XOR<CourseLookupUpdateInput, CourseLookupUncheckedUpdateInput>
    /**
     * Choose, which CourseLookup to update.
     * 
    **/
    where: CourseLookupWhereUniqueInput
  }


  /**
   * CourseLookup updateMany
   */
  export type CourseLookupUpdateManyArgs = {
    /**
     * The data used to update CourseLookups.
     * 
    **/
    data: XOR<CourseLookupUpdateManyMutationInput, CourseLookupUncheckedUpdateManyInput>
    /**
     * Filter which CourseLookups to update
     * 
    **/
    where?: CourseLookupWhereInput
  }


  /**
   * CourseLookup upsert
   */
  export type CourseLookupUpsertArgs = {
    /**
     * Select specific fields to fetch from the CourseLookup
     * 
    **/
    select?: CourseLookupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseLookupInclude | null
    /**
     * The filter to search for the CourseLookup to update in case it exists.
     * 
    **/
    where: CourseLookupWhereUniqueInput
    /**
     * In case the CourseLookup found by the `where` argument doesn't exist, create a new CourseLookup with this data.
     * 
    **/
    create: XOR<CourseLookupCreateInput, CourseLookupUncheckedCreateInput>
    /**
     * In case the CourseLookup was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CourseLookupUpdateInput, CourseLookupUncheckedUpdateInput>
  }


  /**
   * CourseLookup delete
   */
  export type CourseLookupDeleteArgs = {
    /**
     * Select specific fields to fetch from the CourseLookup
     * 
    **/
    select?: CourseLookupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseLookupInclude | null
    /**
     * Filter which CourseLookup to delete.
     * 
    **/
    where: CourseLookupWhereUniqueInput
  }


  /**
   * CourseLookup deleteMany
   */
  export type CourseLookupDeleteManyArgs = {
    /**
     * Filter which CourseLookups to delete
     * 
    **/
    where?: CourseLookupWhereInput
  }


  /**
   * CourseLookup.wishLists
   */
  export type CourseLookup$wishListsArgs = {
    /**
     * Select specific fields to fetch from the StudentWishList
     * 
    **/
    select?: StudentWishListSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentWishListInclude | null
    where?: StudentWishListWhereInput
    orderBy?: Enumerable<StudentWishListOrderByWithRelationInput>
    cursor?: StudentWishListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StudentWishListScalarFieldEnum>
  }


  /**
   * CourseLookup without action
   */
  export type CourseLookupArgs = {
    /**
     * Select specific fields to fetch from the CourseLookup
     * 
    **/
    select?: CourseLookupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CourseLookupInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    role: Role | null
    tel: string | null
    test: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    role: Role | null
    tel: string | null
    test: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    tel: number
    test: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    tel?: true
    test?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    tel?: true
    test?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    tel?: true
    test?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    role: Role
    tel: string | null
    test: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    profile?: boolean | ProfileArgs
    post?: boolean | User$postArgs
    role?: boolean
    tel?: boolean
    test?: boolean
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    profile?: boolean | ProfileArgs
    post?: boolean | User$postArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'profile' ? ProfileGetPayload<S['include'][P]> | null :
        P extends 'post' ? Array < PostGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'profile' ? ProfileGetPayload<S['select'][P]> | null :
        P extends 'post' ? Array < PostGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    profile<T extends ProfileArgs= {}>(args?: Subset<T, ProfileArgs>): Prisma__ProfileClient<ProfileGetPayload<T> | Null>;

    post<T extends User$postArgs= {}>(args?: Subset<T, User$postArgs>): PrismaPromise<Array<PostGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User.post
   */
  export type User$postArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Profile
   */


  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    bio: string | null
    userId: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    bio: string | null
    userId: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    bio: number
    userId: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    bio?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    bio?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    bio?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs = {
    /**
     * Filter which Profile to aggregate.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs = {
    where?: ProfileWhereInput
    orderBy?: Enumerable<ProfileOrderByWithAggregationInput>
    by: Array<ProfileScalarFieldEnum>
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }


  export type ProfileGroupByOutputType = {
    id: number
    bio: string
    userId: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect = {
    id?: boolean
    bio?: boolean
    user?: boolean | UserArgs
    userId?: boolean
  }


  export type ProfileInclude = {
    user?: boolean | UserArgs
  } 

  export type ProfileGetPayload<S extends boolean | null | undefined | ProfileArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Profile :
    S extends undefined ? never :
    S extends { include: any } & (ProfileArgs | ProfileFindManyArgs)
    ? Profile  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProfileArgs | ProfileFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Profile ? Profile[P] : never
  } 
      : Profile


  type ProfileCountArgs = Merge<
    Omit<ProfileFindManyArgs, 'select' | 'include'> & {
      select?: ProfileCountAggregateInputType | true
    }
  >

  export interface ProfileDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProfileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProfileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Profile'> extends True ? Prisma__ProfileClient<ProfileGetPayload<T>> : Prisma__ProfileClient<ProfileGetPayload<T> | null, null>

    /**
     * Find one Profile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProfileFindUniqueOrThrowArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProfileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProfileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Profile'> extends True ? Prisma__ProfileClient<ProfileGetPayload<T>> : Prisma__ProfileClient<ProfileGetPayload<T> | null, null>

    /**
     * Find the first Profile that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProfileFindManyArgs>(
      args?: SelectSubset<T, ProfileFindManyArgs>
    ): PrismaPromise<Array<ProfileGetPayload<T>>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends ProfileCreateArgs>(
      args: SelectSubset<T, ProfileCreateArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Create many Profiles.
     *     @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProfileCreateManyArgs>(
      args?: SelectSubset<T, ProfileCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends ProfileDeleteArgs>(
      args: SelectSubset<T, ProfileDeleteArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProfileUpdateArgs>(
      args: SelectSubset<T, ProfileUpdateArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProfileDeleteManyArgs>(
      args?: SelectSubset<T, ProfileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProfileUpdateManyArgs>(
      args: SelectSubset<T, ProfileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends ProfileUpsertArgs>(
      args: SelectSubset<T, ProfileUpsertArgs>
    ): Prisma__ProfileClient<ProfileGetPayload<T>>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProfileClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Profile base type for findUnique actions
   */
  export type ProfileFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     * 
    **/
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUnique
   */
  export interface ProfileFindUniqueArgs extends ProfileFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     * 
    **/
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile base type for findFirst actions
   */
  export type ProfileFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     * 
    **/
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }

  /**
   * Profile findFirst
   */
  export interface ProfileFindFirstArgs extends ProfileFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profile to fetch.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     * 
    **/
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter, which Profiles to fetch.
     * 
    **/
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     * 
    **/
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * Profile create
   */
  export type ProfileCreateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * The data needed to create a Profile.
     * 
    **/
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }


  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs = {
    /**
     * The data used to create many Profiles.
     * 
    **/
    data: Enumerable<ProfileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Profile update
   */
  export type ProfileUpdateArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * The data needed to update a Profile.
     * 
    **/
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     * 
    **/
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs = {
    /**
     * The data used to update Profiles.
     * 
    **/
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     * 
    **/
    where?: ProfileWhereInput
  }


  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * The filter to search for the Profile to update in case it exists.
     * 
    **/
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     * 
    **/
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }


  /**
   * Profile delete
   */
  export type ProfileDeleteArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
    /**
     * Filter which Profile to delete.
     * 
    **/
    where: ProfileWhereUniqueInput
  }


  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs = {
    /**
     * Filter which Profiles to delete
     * 
    **/
    where?: ProfileWhereInput
  }


  /**
   * Profile without action
   */
  export type ProfileArgs = {
    /**
     * Select specific fields to fetch from the Profile
     * 
    **/
    select?: ProfileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProfileInclude | null
  }



  /**
   * Model Post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    published: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    published?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    published?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    published?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs = {
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithAggregationInput>
    by: Array<PostScalarFieldEnum>
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    id: number
    createdAt: Date
    title: string
    published: boolean
    authorId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    published?: boolean
    author?: boolean | UserArgs
    authorId?: boolean
    categories?: boolean | Post$categoriesArgs
    _count?: boolean | PostCountOutputTypeArgs
  }


  export type PostInclude = {
    author?: boolean | UserArgs
    categories?: boolean | Post$categoriesArgs
    _count?: boolean | PostCountOutputTypeArgs
  } 

  export type PostGetPayload<S extends boolean | null | undefined | PostArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Post :
    S extends undefined ? never :
    S extends { include: any } & (PostArgs | PostFindManyArgs)
    ? Post  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? UserGetPayload<S['include'][P]> :
        P extends 'categories' ? Array < CategoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? PostCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PostArgs | PostFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? UserGetPayload<S['select'][P]> :
        P extends 'categories' ? Array < CategoryGetPayload<S['select'][P]>>  :
        P extends '_count' ? PostCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Post ? Post[P] : never
  } 
      : Post


  type PostCountArgs = Merge<
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface PostDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Post'> extends True ? Prisma__PostClient<PostGetPayload<T>> : Prisma__PostClient<PostGetPayload<T> | null, null>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Post'> extends True ? Prisma__PostClient<PostGetPayload<T>> : Prisma__PostClient<PostGetPayload<T> | null, null>

    /**
     * Find the first Post that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>
    ): PrismaPromise<Array<PostGetPayload<T>>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    categories<T extends Post$categoriesArgs= {}>(args?: Subset<T, Post$categoriesArgs>): PrismaPromise<Array<CategoryGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Post base type for findUnique actions
   */
  export type PostFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where: PostWhereUniqueInput
  }

  /**
   * Post findUnique
   */
  export interface PostFindUniqueArgs extends PostFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post base type for findFirst actions
   */
  export type PostFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }

  /**
   * Post findFirst
   */
  export interface PostFindFirstArgs extends PostFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Posts to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to create a Post.
     * 
    **/
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs = {
    /**
     * The data used to create many Posts.
     * 
    **/
    data: Enumerable<PostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to update a Post.
     * 
    **/
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    /**
     * The data used to update Posts.
     * 
    **/
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     * 
    **/
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The filter to search for the Post to update in case it exists.
     * 
    **/
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     * 
    **/
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter which Post to delete.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    /**
     * Filter which Posts to delete
     * 
    **/
    where?: PostWhereInput
  }


  /**
   * Post.categories
   */
  export type Post$categoriesArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which Category to aggregate.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: Array<CategoryScalarFieldEnum>
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect = {
    id?: boolean
    name?: boolean
    posts?: boolean | Category$postsArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }


  export type CategoryInclude = {
    posts?: boolean | Category$postsArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  } 

  export type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Category :
    S extends undefined ? never :
    S extends { include: any } & (CategoryArgs | CategoryFindManyArgs)
    ? Category  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'posts' ? Array < PostGetPayload<S['include'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CategoryArgs | CategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'posts' ? Array < PostGetPayload<S['select'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Category ? Category[P] : never
  } 
      : Category


  type CategoryCountArgs = Merge<
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }
  >

  export interface CategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): PrismaPromise<Array<CategoryGetPayload<T>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    posts<T extends Category$postsArgs= {}>(args?: Subset<T, Category$postsArgs>): PrismaPromise<Array<PostGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Category base type for findUnique actions
   */
  export type CategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUnique
   */
  export interface CategoryFindUniqueArgs extends CategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category base type for findFirst actions
   */
  export type CategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     * 
    **/
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * Category findFirst
   */
  export interface CategoryFindFirstArgs extends CategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     * 
    **/
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter, which Categories to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to create a Category.
     * 
    **/
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs = {
    /**
     * The data used to create many Categories.
     * 
    **/
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The data needed to update a Category.
     * 
    **/
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    /**
     * The data used to update Categories.
     * 
    **/
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     * 
    **/
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * The filter to search for the Category to update in case it exists.
     * 
    **/
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     * 
    **/
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
    /**
     * Filter which Category to delete.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    /**
     * Filter which Categories to delete
     * 
    **/
    where?: CategoryWhereInput
  }


  /**
   * Category.posts
   */
  export type Category$postsArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CategoryInclude | null
  }



  /**
   * Model Book
   */


  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type BookAggregateArgs = {
    /**
     * Filter which Book to aggregate.
     * 
    **/
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs = {
    where?: BookWhereInput
    orderBy?: Enumerable<BookOrderByWithAggregationInput>
    by: Array<BookScalarFieldEnum>
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }


  export type BookGroupByOutputType = {
    id: number
    title: string
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect = {
    id?: boolean
    title?: boolean
    booksOnAuthors?: boolean | Book$booksOnAuthorsArgs
    _count?: boolean | BookCountOutputTypeArgs
  }


  export type BookInclude = {
    booksOnAuthors?: boolean | Book$booksOnAuthorsArgs
    _count?: boolean | BookCountOutputTypeArgs
  } 

  export type BookGetPayload<S extends boolean | null | undefined | BookArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Book :
    S extends undefined ? never :
    S extends { include: any } & (BookArgs | BookFindManyArgs)
    ? Book  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'booksOnAuthors' ? Array < BooksOnAuthorsGetPayload<S['include'][P]>>  :
        P extends '_count' ? BookCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BookArgs | BookFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'booksOnAuthors' ? Array < BooksOnAuthorsGetPayload<S['select'][P]>>  :
        P extends '_count' ? BookCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Book ? Book[P] : never
  } 
      : Book


  type BookCountArgs = Merge<
    Omit<BookFindManyArgs, 'select' | 'include'> & {
      select?: BookCountAggregateInputType | true
    }
  >

  export interface BookDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BookFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Book'> extends True ? Prisma__BookClient<BookGetPayload<T>> : Prisma__BookClient<BookGetPayload<T> | null, null>

    /**
     * Find one Book that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BookFindUniqueOrThrowArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BookFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Book'> extends True ? Prisma__BookClient<BookGetPayload<T>> : Prisma__BookClient<BookGetPayload<T> | null, null>

    /**
     * Find the first Book that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookFindFirstOrThrowArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookFindManyArgs>(
      args?: SelectSubset<T, BookFindManyArgs>
    ): PrismaPromise<Array<BookGetPayload<T>>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
    **/
    create<T extends BookCreateArgs>(
      args: SelectSubset<T, BookCreateArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Create many Books.
     *     @param {BookCreateManyArgs} args - Arguments to create many Books.
     *     @example
     *     // Create many Books
     *     const book = await prisma.book.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookCreateManyArgs>(
      args?: SelectSubset<T, BookCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
    **/
    delete<T extends BookDeleteArgs>(
      args: SelectSubset<T, BookDeleteArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookUpdateArgs>(
      args: SelectSubset<T, BookUpdateArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookDeleteManyArgs>(
      args?: SelectSubset<T, BookDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookUpdateManyArgs>(
      args: SelectSubset<T, BookUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
    **/
    upsert<T extends BookUpsertArgs>(
      args: SelectSubset<T, BookUpsertArgs>
    ): Prisma__BookClient<BookGetPayload<T>>

    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BookClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    booksOnAuthors<T extends Book$booksOnAuthorsArgs= {}>(args?: Subset<T, Book$booksOnAuthorsArgs>): PrismaPromise<Array<BooksOnAuthorsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Book base type for findUnique actions
   */
  export type BookFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter, which Book to fetch.
     * 
    **/
    where: BookWhereUniqueInput
  }

  /**
   * Book findUnique
   */
  export interface BookFindUniqueArgs extends BookFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter, which Book to fetch.
     * 
    **/
    where: BookWhereUniqueInput
  }


  /**
   * Book base type for findFirst actions
   */
  export type BookFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter, which Book to fetch.
     * 
    **/
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     * 
    **/
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     * 
    **/
    distinct?: Enumerable<BookScalarFieldEnum>
  }

  /**
   * Book findFirst
   */
  export interface BookFindFirstArgs extends BookFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter, which Book to fetch.
     * 
    **/
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     * 
    **/
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     * 
    **/
    distinct?: Enumerable<BookScalarFieldEnum>
  }


  /**
   * Book findMany
   */
  export type BookFindManyArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter, which Books to fetch.
     * 
    **/
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BookOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     * 
    **/
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BookScalarFieldEnum>
  }


  /**
   * Book create
   */
  export type BookCreateArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * The data needed to create a Book.
     * 
    **/
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }


  /**
   * Book createMany
   */
  export type BookCreateManyArgs = {
    /**
     * The data used to create many Books.
     * 
    **/
    data: Enumerable<BookCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Book update
   */
  export type BookUpdateArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * The data needed to update a Book.
     * 
    **/
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     * 
    **/
    where: BookWhereUniqueInput
  }


  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs = {
    /**
     * The data used to update Books.
     * 
    **/
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     * 
    **/
    where?: BookWhereInput
  }


  /**
   * Book upsert
   */
  export type BookUpsertArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * The filter to search for the Book to update in case it exists.
     * 
    **/
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     * 
    **/
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }


  /**
   * Book delete
   */
  export type BookDeleteArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
    /**
     * Filter which Book to delete.
     * 
    **/
    where: BookWhereUniqueInput
  }


  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs = {
    /**
     * Filter which Books to delete
     * 
    **/
    where?: BookWhereInput
  }


  /**
   * Book.booksOnAuthors
   */
  export type Book$booksOnAuthorsArgs = {
    /**
     * Select specific fields to fetch from the BooksOnAuthors
     * 
    **/
    select?: BooksOnAuthorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksOnAuthorsInclude | null
    where?: BooksOnAuthorsWhereInput
    orderBy?: Enumerable<BooksOnAuthorsOrderByWithRelationInput>
    cursor?: BooksOnAuthorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BooksOnAuthorsScalarFieldEnum>
  }


  /**
   * Book without action
   */
  export type BookArgs = {
    /**
     * Select specific fields to fetch from the Book
     * 
    **/
    select?: BookSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BookInclude | null
  }



  /**
   * Model Author
   */


  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthorSumAggregateOutputType = {
    id: number | null
  }

  export type AuthorMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    id?: true
  }

  export type AuthorSumAggregateInputType = {
    id?: true
  }

  export type AuthorMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AuthorAggregateArgs = {
    /**
     * Filter which Author to aggregate.
     * 
    **/
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs = {
    where?: AuthorWhereInput
    orderBy?: Enumerable<AuthorOrderByWithAggregationInput>
    by: Array<AuthorScalarFieldEnum>
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }


  export type AuthorGroupByOutputType = {
    id: number
    name: string
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect = {
    id?: boolean
    name?: boolean
    BooksOnAuthors?: boolean | Author$BooksOnAuthorsArgs
    _count?: boolean | AuthorCountOutputTypeArgs
  }


  export type AuthorInclude = {
    BooksOnAuthors?: boolean | Author$BooksOnAuthorsArgs
    _count?: boolean | AuthorCountOutputTypeArgs
  } 

  export type AuthorGetPayload<S extends boolean | null | undefined | AuthorArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Author :
    S extends undefined ? never :
    S extends { include: any } & (AuthorArgs | AuthorFindManyArgs)
    ? Author  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'BooksOnAuthors' ? Array < BooksOnAuthorsGetPayload<S['include'][P]>>  :
        P extends '_count' ? AuthorCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AuthorArgs | AuthorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'BooksOnAuthors' ? Array < BooksOnAuthorsGetPayload<S['select'][P]>>  :
        P extends '_count' ? AuthorCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Author ? Author[P] : never
  } 
      : Author


  type AuthorCountArgs = Merge<
    Omit<AuthorFindManyArgs, 'select' | 'include'> & {
      select?: AuthorCountAggregateInputType | true
    }
  >

  export interface AuthorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AuthorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Author'> extends True ? Prisma__AuthorClient<AuthorGetPayload<T>> : Prisma__AuthorClient<AuthorGetPayload<T> | null, null>

    /**
     * Find one Author that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AuthorFindUniqueOrThrowArgs>
    ): Prisma__AuthorClient<AuthorGetPayload<T>>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AuthorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Author'> extends True ? Prisma__AuthorClient<AuthorGetPayload<T>> : Prisma__AuthorClient<AuthorGetPayload<T> | null, null>

    /**
     * Find the first Author that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AuthorFindFirstOrThrowArgs>
    ): Prisma__AuthorClient<AuthorGetPayload<T>>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AuthorFindManyArgs>(
      args?: SelectSubset<T, AuthorFindManyArgs>
    ): PrismaPromise<Array<AuthorGetPayload<T>>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
    **/
    create<T extends AuthorCreateArgs>(
      args: SelectSubset<T, AuthorCreateArgs>
    ): Prisma__AuthorClient<AuthorGetPayload<T>>

    /**
     * Create many Authors.
     *     @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     *     @example
     *     // Create many Authors
     *     const author = await prisma.author.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthorCreateManyArgs>(
      args?: SelectSubset<T, AuthorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
    **/
    delete<T extends AuthorDeleteArgs>(
      args: SelectSubset<T, AuthorDeleteArgs>
    ): Prisma__AuthorClient<AuthorGetPayload<T>>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuthorUpdateArgs>(
      args: SelectSubset<T, AuthorUpdateArgs>
    ): Prisma__AuthorClient<AuthorGetPayload<T>>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthorDeleteManyArgs>(
      args?: SelectSubset<T, AuthorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuthorUpdateManyArgs>(
      args: SelectSubset<T, AuthorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
    **/
    upsert<T extends AuthorUpsertArgs>(
      args: SelectSubset<T, AuthorUpsertArgs>
    ): Prisma__AuthorClient<AuthorGetPayload<T>>

    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AuthorClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    BooksOnAuthors<T extends Author$BooksOnAuthorsArgs= {}>(args?: Subset<T, Author$BooksOnAuthorsArgs>): PrismaPromise<Array<BooksOnAuthorsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Author base type for findUnique actions
   */
  export type AuthorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Filter, which Author to fetch.
     * 
    **/
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUnique
   */
  export interface AuthorFindUniqueArgs extends AuthorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Filter, which Author to fetch.
     * 
    **/
    where: AuthorWhereUniqueInput
  }


  /**
   * Author base type for findFirst actions
   */
  export type AuthorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Filter, which Author to fetch.
     * 
    **/
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     * 
    **/
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     * 
    **/
    distinct?: Enumerable<AuthorScalarFieldEnum>
  }

  /**
   * Author findFirst
   */
  export interface AuthorFindFirstArgs extends AuthorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Filter, which Author to fetch.
     * 
    **/
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     * 
    **/
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     * 
    **/
    distinct?: Enumerable<AuthorScalarFieldEnum>
  }


  /**
   * Author findMany
   */
  export type AuthorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Filter, which Authors to fetch.
     * 
    **/
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     * 
    **/
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AuthorScalarFieldEnum>
  }


  /**
   * Author create
   */
  export type AuthorCreateArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * The data needed to create a Author.
     * 
    **/
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }


  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs = {
    /**
     * The data used to create many Authors.
     * 
    **/
    data: Enumerable<AuthorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Author update
   */
  export type AuthorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * The data needed to update a Author.
     * 
    **/
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     * 
    **/
    where: AuthorWhereUniqueInput
  }


  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs = {
    /**
     * The data used to update Authors.
     * 
    **/
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     * 
    **/
    where?: AuthorWhereInput
  }


  /**
   * Author upsert
   */
  export type AuthorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * The filter to search for the Author to update in case it exists.
     * 
    **/
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     * 
    **/
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }


  /**
   * Author delete
   */
  export type AuthorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
    /**
     * Filter which Author to delete.
     * 
    **/
    where: AuthorWhereUniqueInput
  }


  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs = {
    /**
     * Filter which Authors to delete
     * 
    **/
    where?: AuthorWhereInput
  }


  /**
   * Author.BooksOnAuthors
   */
  export type Author$BooksOnAuthorsArgs = {
    /**
     * Select specific fields to fetch from the BooksOnAuthors
     * 
    **/
    select?: BooksOnAuthorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksOnAuthorsInclude | null
    where?: BooksOnAuthorsWhereInput
    orderBy?: Enumerable<BooksOnAuthorsOrderByWithRelationInput>
    cursor?: BooksOnAuthorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BooksOnAuthorsScalarFieldEnum>
  }


  /**
   * Author without action
   */
  export type AuthorArgs = {
    /**
     * Select specific fields to fetch from the Author
     * 
    **/
    select?: AuthorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthorInclude | null
  }



  /**
   * Model BooksOnAuthors
   */


  export type AggregateBooksOnAuthors = {
    _count: BooksOnAuthorsCountAggregateOutputType | null
    _avg: BooksOnAuthorsAvgAggregateOutputType | null
    _sum: BooksOnAuthorsSumAggregateOutputType | null
    _min: BooksOnAuthorsMinAggregateOutputType | null
    _max: BooksOnAuthorsMaxAggregateOutputType | null
  }

  export type BooksOnAuthorsAvgAggregateOutputType = {
    bookId: number | null
    authorId: number | null
  }

  export type BooksOnAuthorsSumAggregateOutputType = {
    bookId: number | null
    authorId: number | null
  }

  export type BooksOnAuthorsMinAggregateOutputType = {
    bookId: number | null
    authorId: number | null
  }

  export type BooksOnAuthorsMaxAggregateOutputType = {
    bookId: number | null
    authorId: number | null
  }

  export type BooksOnAuthorsCountAggregateOutputType = {
    bookId: number
    authorId: number
    _all: number
  }


  export type BooksOnAuthorsAvgAggregateInputType = {
    bookId?: true
    authorId?: true
  }

  export type BooksOnAuthorsSumAggregateInputType = {
    bookId?: true
    authorId?: true
  }

  export type BooksOnAuthorsMinAggregateInputType = {
    bookId?: true
    authorId?: true
  }

  export type BooksOnAuthorsMaxAggregateInputType = {
    bookId?: true
    authorId?: true
  }

  export type BooksOnAuthorsCountAggregateInputType = {
    bookId?: true
    authorId?: true
    _all?: true
  }

  export type BooksOnAuthorsAggregateArgs = {
    /**
     * Filter which BooksOnAuthors to aggregate.
     * 
    **/
    where?: BooksOnAuthorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BooksOnAuthors to fetch.
     * 
    **/
    orderBy?: Enumerable<BooksOnAuthorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BooksOnAuthorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BooksOnAuthors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BooksOnAuthors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BooksOnAuthors
    **/
    _count?: true | BooksOnAuthorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BooksOnAuthorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BooksOnAuthorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BooksOnAuthorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BooksOnAuthorsMaxAggregateInputType
  }

  export type GetBooksOnAuthorsAggregateType<T extends BooksOnAuthorsAggregateArgs> = {
        [P in keyof T & keyof AggregateBooksOnAuthors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooksOnAuthors[P]>
      : GetScalarType<T[P], AggregateBooksOnAuthors[P]>
  }




  export type BooksOnAuthorsGroupByArgs = {
    where?: BooksOnAuthorsWhereInput
    orderBy?: Enumerable<BooksOnAuthorsOrderByWithAggregationInput>
    by: Array<BooksOnAuthorsScalarFieldEnum>
    having?: BooksOnAuthorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BooksOnAuthorsCountAggregateInputType | true
    _avg?: BooksOnAuthorsAvgAggregateInputType
    _sum?: BooksOnAuthorsSumAggregateInputType
    _min?: BooksOnAuthorsMinAggregateInputType
    _max?: BooksOnAuthorsMaxAggregateInputType
  }


  export type BooksOnAuthorsGroupByOutputType = {
    bookId: number
    authorId: number
    _count: BooksOnAuthorsCountAggregateOutputType | null
    _avg: BooksOnAuthorsAvgAggregateOutputType | null
    _sum: BooksOnAuthorsSumAggregateOutputType | null
    _min: BooksOnAuthorsMinAggregateOutputType | null
    _max: BooksOnAuthorsMaxAggregateOutputType | null
  }

  type GetBooksOnAuthorsGroupByPayload<T extends BooksOnAuthorsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BooksOnAuthorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BooksOnAuthorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BooksOnAuthorsGroupByOutputType[P]>
            : GetScalarType<T[P], BooksOnAuthorsGroupByOutputType[P]>
        }
      >
    >


  export type BooksOnAuthorsSelect = {
    book?: boolean | BookArgs
    bookId?: boolean
    author?: boolean | AuthorArgs
    authorId?: boolean
  }


  export type BooksOnAuthorsInclude = {
    book?: boolean | BookArgs
    author?: boolean | AuthorArgs
  } 

  export type BooksOnAuthorsGetPayload<S extends boolean | null | undefined | BooksOnAuthorsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BooksOnAuthors :
    S extends undefined ? never :
    S extends { include: any } & (BooksOnAuthorsArgs | BooksOnAuthorsFindManyArgs)
    ? BooksOnAuthors  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'book' ? BookGetPayload<S['include'][P]> :
        P extends 'author' ? AuthorGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BooksOnAuthorsArgs | BooksOnAuthorsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'book' ? BookGetPayload<S['select'][P]> :
        P extends 'author' ? AuthorGetPayload<S['select'][P]> :  P extends keyof BooksOnAuthors ? BooksOnAuthors[P] : never
  } 
      : BooksOnAuthors


  type BooksOnAuthorsCountArgs = Merge<
    Omit<BooksOnAuthorsFindManyArgs, 'select' | 'include'> & {
      select?: BooksOnAuthorsCountAggregateInputType | true
    }
  >

  export interface BooksOnAuthorsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one BooksOnAuthors that matches the filter.
     * @param {BooksOnAuthorsFindUniqueArgs} args - Arguments to find a BooksOnAuthors
     * @example
     * // Get one BooksOnAuthors
     * const booksOnAuthors = await prisma.booksOnAuthors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BooksOnAuthorsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BooksOnAuthorsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BooksOnAuthors'> extends True ? Prisma__BooksOnAuthorsClient<BooksOnAuthorsGetPayload<T>> : Prisma__BooksOnAuthorsClient<BooksOnAuthorsGetPayload<T> | null, null>

    /**
     * Find one BooksOnAuthors that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BooksOnAuthorsFindUniqueOrThrowArgs} args - Arguments to find a BooksOnAuthors
     * @example
     * // Get one BooksOnAuthors
     * const booksOnAuthors = await prisma.booksOnAuthors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BooksOnAuthorsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BooksOnAuthorsFindUniqueOrThrowArgs>
    ): Prisma__BooksOnAuthorsClient<BooksOnAuthorsGetPayload<T>>

    /**
     * Find the first BooksOnAuthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksOnAuthorsFindFirstArgs} args - Arguments to find a BooksOnAuthors
     * @example
     * // Get one BooksOnAuthors
     * const booksOnAuthors = await prisma.booksOnAuthors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BooksOnAuthorsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BooksOnAuthorsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BooksOnAuthors'> extends True ? Prisma__BooksOnAuthorsClient<BooksOnAuthorsGetPayload<T>> : Prisma__BooksOnAuthorsClient<BooksOnAuthorsGetPayload<T> | null, null>

    /**
     * Find the first BooksOnAuthors that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksOnAuthorsFindFirstOrThrowArgs} args - Arguments to find a BooksOnAuthors
     * @example
     * // Get one BooksOnAuthors
     * const booksOnAuthors = await prisma.booksOnAuthors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BooksOnAuthorsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BooksOnAuthorsFindFirstOrThrowArgs>
    ): Prisma__BooksOnAuthorsClient<BooksOnAuthorsGetPayload<T>>

    /**
     * Find zero or more BooksOnAuthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksOnAuthorsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BooksOnAuthors
     * const booksOnAuthors = await prisma.booksOnAuthors.findMany()
     * 
     * // Get first 10 BooksOnAuthors
     * const booksOnAuthors = await prisma.booksOnAuthors.findMany({ take: 10 })
     * 
     * // Only select the `bookId`
     * const booksOnAuthorsWithBookIdOnly = await prisma.booksOnAuthors.findMany({ select: { bookId: true } })
     * 
    **/
    findMany<T extends BooksOnAuthorsFindManyArgs>(
      args?: SelectSubset<T, BooksOnAuthorsFindManyArgs>
    ): PrismaPromise<Array<BooksOnAuthorsGetPayload<T>>>

    /**
     * Create a BooksOnAuthors.
     * @param {BooksOnAuthorsCreateArgs} args - Arguments to create a BooksOnAuthors.
     * @example
     * // Create one BooksOnAuthors
     * const BooksOnAuthors = await prisma.booksOnAuthors.create({
     *   data: {
     *     // ... data to create a BooksOnAuthors
     *   }
     * })
     * 
    **/
    create<T extends BooksOnAuthorsCreateArgs>(
      args: SelectSubset<T, BooksOnAuthorsCreateArgs>
    ): Prisma__BooksOnAuthorsClient<BooksOnAuthorsGetPayload<T>>

    /**
     * Create many BooksOnAuthors.
     *     @param {BooksOnAuthorsCreateManyArgs} args - Arguments to create many BooksOnAuthors.
     *     @example
     *     // Create many BooksOnAuthors
     *     const booksOnAuthors = await prisma.booksOnAuthors.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BooksOnAuthorsCreateManyArgs>(
      args?: SelectSubset<T, BooksOnAuthorsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a BooksOnAuthors.
     * @param {BooksOnAuthorsDeleteArgs} args - Arguments to delete one BooksOnAuthors.
     * @example
     * // Delete one BooksOnAuthors
     * const BooksOnAuthors = await prisma.booksOnAuthors.delete({
     *   where: {
     *     // ... filter to delete one BooksOnAuthors
     *   }
     * })
     * 
    **/
    delete<T extends BooksOnAuthorsDeleteArgs>(
      args: SelectSubset<T, BooksOnAuthorsDeleteArgs>
    ): Prisma__BooksOnAuthorsClient<BooksOnAuthorsGetPayload<T>>

    /**
     * Update one BooksOnAuthors.
     * @param {BooksOnAuthorsUpdateArgs} args - Arguments to update one BooksOnAuthors.
     * @example
     * // Update one BooksOnAuthors
     * const booksOnAuthors = await prisma.booksOnAuthors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BooksOnAuthorsUpdateArgs>(
      args: SelectSubset<T, BooksOnAuthorsUpdateArgs>
    ): Prisma__BooksOnAuthorsClient<BooksOnAuthorsGetPayload<T>>

    /**
     * Delete zero or more BooksOnAuthors.
     * @param {BooksOnAuthorsDeleteManyArgs} args - Arguments to filter BooksOnAuthors to delete.
     * @example
     * // Delete a few BooksOnAuthors
     * const { count } = await prisma.booksOnAuthors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BooksOnAuthorsDeleteManyArgs>(
      args?: SelectSubset<T, BooksOnAuthorsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more BooksOnAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksOnAuthorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BooksOnAuthors
     * const booksOnAuthors = await prisma.booksOnAuthors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BooksOnAuthorsUpdateManyArgs>(
      args: SelectSubset<T, BooksOnAuthorsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one BooksOnAuthors.
     * @param {BooksOnAuthorsUpsertArgs} args - Arguments to update or create a BooksOnAuthors.
     * @example
     * // Update or create a BooksOnAuthors
     * const booksOnAuthors = await prisma.booksOnAuthors.upsert({
     *   create: {
     *     // ... data to create a BooksOnAuthors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BooksOnAuthors we want to update
     *   }
     * })
    **/
    upsert<T extends BooksOnAuthorsUpsertArgs>(
      args: SelectSubset<T, BooksOnAuthorsUpsertArgs>
    ): Prisma__BooksOnAuthorsClient<BooksOnAuthorsGetPayload<T>>

    /**
     * Count the number of BooksOnAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksOnAuthorsCountArgs} args - Arguments to filter BooksOnAuthors to count.
     * @example
     * // Count the number of BooksOnAuthors
     * const count = await prisma.booksOnAuthors.count({
     *   where: {
     *     // ... the filter for the BooksOnAuthors we want to count
     *   }
     * })
    **/
    count<T extends BooksOnAuthorsCountArgs>(
      args?: Subset<T, BooksOnAuthorsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BooksOnAuthorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BooksOnAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksOnAuthorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BooksOnAuthorsAggregateArgs>(args: Subset<T, BooksOnAuthorsAggregateArgs>): PrismaPromise<GetBooksOnAuthorsAggregateType<T>>

    /**
     * Group by BooksOnAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksOnAuthorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BooksOnAuthorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BooksOnAuthorsGroupByArgs['orderBy'] }
        : { orderBy?: BooksOnAuthorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BooksOnAuthorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooksOnAuthorsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BooksOnAuthors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BooksOnAuthorsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    book<T extends BookArgs= {}>(args?: Subset<T, BookArgs>): Prisma__BookClient<BookGetPayload<T> | Null>;

    author<T extends AuthorArgs= {}>(args?: Subset<T, AuthorArgs>): Prisma__AuthorClient<AuthorGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BooksOnAuthors base type for findUnique actions
   */
  export type BooksOnAuthorsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BooksOnAuthors
     * 
    **/
    select?: BooksOnAuthorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksOnAuthorsInclude | null
    /**
     * Filter, which BooksOnAuthors to fetch.
     * 
    **/
    where: BooksOnAuthorsWhereUniqueInput
  }

  /**
   * BooksOnAuthors findUnique
   */
  export interface BooksOnAuthorsFindUniqueArgs extends BooksOnAuthorsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BooksOnAuthors findUniqueOrThrow
   */
  export type BooksOnAuthorsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BooksOnAuthors
     * 
    **/
    select?: BooksOnAuthorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksOnAuthorsInclude | null
    /**
     * Filter, which BooksOnAuthors to fetch.
     * 
    **/
    where: BooksOnAuthorsWhereUniqueInput
  }


  /**
   * BooksOnAuthors base type for findFirst actions
   */
  export type BooksOnAuthorsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BooksOnAuthors
     * 
    **/
    select?: BooksOnAuthorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksOnAuthorsInclude | null
    /**
     * Filter, which BooksOnAuthors to fetch.
     * 
    **/
    where?: BooksOnAuthorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BooksOnAuthors to fetch.
     * 
    **/
    orderBy?: Enumerable<BooksOnAuthorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BooksOnAuthors.
     * 
    **/
    cursor?: BooksOnAuthorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BooksOnAuthors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BooksOnAuthors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BooksOnAuthors.
     * 
    **/
    distinct?: Enumerable<BooksOnAuthorsScalarFieldEnum>
  }

  /**
   * BooksOnAuthors findFirst
   */
  export interface BooksOnAuthorsFindFirstArgs extends BooksOnAuthorsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BooksOnAuthors findFirstOrThrow
   */
  export type BooksOnAuthorsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BooksOnAuthors
     * 
    **/
    select?: BooksOnAuthorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksOnAuthorsInclude | null
    /**
     * Filter, which BooksOnAuthors to fetch.
     * 
    **/
    where?: BooksOnAuthorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BooksOnAuthors to fetch.
     * 
    **/
    orderBy?: Enumerable<BooksOnAuthorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BooksOnAuthors.
     * 
    **/
    cursor?: BooksOnAuthorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BooksOnAuthors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BooksOnAuthors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BooksOnAuthors.
     * 
    **/
    distinct?: Enumerable<BooksOnAuthorsScalarFieldEnum>
  }


  /**
   * BooksOnAuthors findMany
   */
  export type BooksOnAuthorsFindManyArgs = {
    /**
     * Select specific fields to fetch from the BooksOnAuthors
     * 
    **/
    select?: BooksOnAuthorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksOnAuthorsInclude | null
    /**
     * Filter, which BooksOnAuthors to fetch.
     * 
    **/
    where?: BooksOnAuthorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BooksOnAuthors to fetch.
     * 
    **/
    orderBy?: Enumerable<BooksOnAuthorsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BooksOnAuthors.
     * 
    **/
    cursor?: BooksOnAuthorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BooksOnAuthors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BooksOnAuthors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BooksOnAuthorsScalarFieldEnum>
  }


  /**
   * BooksOnAuthors create
   */
  export type BooksOnAuthorsCreateArgs = {
    /**
     * Select specific fields to fetch from the BooksOnAuthors
     * 
    **/
    select?: BooksOnAuthorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksOnAuthorsInclude | null
    /**
     * The data needed to create a BooksOnAuthors.
     * 
    **/
    data: XOR<BooksOnAuthorsCreateInput, BooksOnAuthorsUncheckedCreateInput>
  }


  /**
   * BooksOnAuthors createMany
   */
  export type BooksOnAuthorsCreateManyArgs = {
    /**
     * The data used to create many BooksOnAuthors.
     * 
    **/
    data: Enumerable<BooksOnAuthorsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BooksOnAuthors update
   */
  export type BooksOnAuthorsUpdateArgs = {
    /**
     * Select specific fields to fetch from the BooksOnAuthors
     * 
    **/
    select?: BooksOnAuthorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksOnAuthorsInclude | null
    /**
     * The data needed to update a BooksOnAuthors.
     * 
    **/
    data: XOR<BooksOnAuthorsUpdateInput, BooksOnAuthorsUncheckedUpdateInput>
    /**
     * Choose, which BooksOnAuthors to update.
     * 
    **/
    where: BooksOnAuthorsWhereUniqueInput
  }


  /**
   * BooksOnAuthors updateMany
   */
  export type BooksOnAuthorsUpdateManyArgs = {
    /**
     * The data used to update BooksOnAuthors.
     * 
    **/
    data: XOR<BooksOnAuthorsUpdateManyMutationInput, BooksOnAuthorsUncheckedUpdateManyInput>
    /**
     * Filter which BooksOnAuthors to update
     * 
    **/
    where?: BooksOnAuthorsWhereInput
  }


  /**
   * BooksOnAuthors upsert
   */
  export type BooksOnAuthorsUpsertArgs = {
    /**
     * Select specific fields to fetch from the BooksOnAuthors
     * 
    **/
    select?: BooksOnAuthorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksOnAuthorsInclude | null
    /**
     * The filter to search for the BooksOnAuthors to update in case it exists.
     * 
    **/
    where: BooksOnAuthorsWhereUniqueInput
    /**
     * In case the BooksOnAuthors found by the `where` argument doesn't exist, create a new BooksOnAuthors with this data.
     * 
    **/
    create: XOR<BooksOnAuthorsCreateInput, BooksOnAuthorsUncheckedCreateInput>
    /**
     * In case the BooksOnAuthors was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BooksOnAuthorsUpdateInput, BooksOnAuthorsUncheckedUpdateInput>
  }


  /**
   * BooksOnAuthors delete
   */
  export type BooksOnAuthorsDeleteArgs = {
    /**
     * Select specific fields to fetch from the BooksOnAuthors
     * 
    **/
    select?: BooksOnAuthorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksOnAuthorsInclude | null
    /**
     * Filter which BooksOnAuthors to delete.
     * 
    **/
    where: BooksOnAuthorsWhereUniqueInput
  }


  /**
   * BooksOnAuthors deleteMany
   */
  export type BooksOnAuthorsDeleteManyArgs = {
    /**
     * Filter which BooksOnAuthors to delete
     * 
    **/
    where?: BooksOnAuthorsWhereInput
  }


  /**
   * BooksOnAuthors without action
   */
  export type BooksOnAuthorsArgs = {
    /**
     * Select specific fields to fetch from the BooksOnAuthors
     * 
    **/
    select?: BooksOnAuthorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksOnAuthorsInclude | null
  }



  /**
   * Model Customer
   */


  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    surname: string | null
    tel: string | null
    email: string | null
    id_card: string | null
    bookbank: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    surname: string | null
    tel: string | null
    email: string | null
    id_card: string | null
    bookbank: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    surname: number
    tel: number
    email: number
    id_card: number
    bookbank: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    surname?: true
    tel?: true
    email?: true
    id_card?: true
    bookbank?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    surname?: true
    tel?: true
    email?: true
    id_card?: true
    bookbank?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    surname?: true
    tel?: true
    email?: true
    id_card?: true
    bookbank?: true
    _all?: true
  }

  export type CustomerAggregateArgs = {
    /**
     * Filter which Customer to aggregate.
     * 
    **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs = {
    where?: CustomerWhereInput
    orderBy?: Enumerable<CustomerOrderByWithAggregationInput>
    by: Array<CustomerScalarFieldEnum>
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }


  export type CustomerGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    surname: string
    tel: string
    email: string
    id_card: string
    bookbank: string
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    surname?: boolean
    tel?: boolean
    email?: boolean
    id_card?: boolean
    bookbank?: boolean
    loingProvider?: boolean | Customer$loingProviderArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }


  export type CustomerInclude = {
    loingProvider?: boolean | Customer$loingProviderArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  } 

  export type CustomerGetPayload<S extends boolean | null | undefined | CustomerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Customer :
    S extends undefined ? never :
    S extends { include: any } & (CustomerArgs | CustomerFindManyArgs)
    ? Customer  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'loingProvider' ? Array < LoingProviderGetPayload<S['include'][P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CustomerArgs | CustomerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'loingProvider' ? Array < LoingProviderGetPayload<S['select'][P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Customer ? Customer[P] : never
  } 
      : Customer


  type CustomerCountArgs = Merge<
    Omit<CustomerFindManyArgs, 'select' | 'include'> & {
      select?: CustomerCountAggregateInputType | true
    }
  >

  export interface CustomerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CustomerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Customer'> extends True ? Prisma__CustomerClient<CustomerGetPayload<T>> : Prisma__CustomerClient<CustomerGetPayload<T> | null, null>

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CustomerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Customer'> extends True ? Prisma__CustomerClient<CustomerGetPayload<T>> : Prisma__CustomerClient<CustomerGetPayload<T> | null, null>

    /**
     * Find the first Customer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs>(
      args?: SelectSubset<T, CustomerFindManyArgs>
    ): PrismaPromise<Array<CustomerGetPayload<T>>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs>(
      args: SelectSubset<T, CustomerCreateArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs>(
      args?: SelectSubset<T, CustomerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs>(
      args: SelectSubset<T, CustomerDeleteArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs>(
      args: SelectSubset<T, CustomerUpdateArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs>(
      args?: SelectSubset<T, CustomerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs>(
      args: SelectSubset<T, CustomerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs>(
      args: SelectSubset<T, CustomerUpsertArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomerClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    loingProvider<T extends Customer$loingProviderArgs= {}>(args?: Subset<T, Customer$loingProviderArgs>): PrismaPromise<Array<LoingProviderGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Customer base type for findUnique actions
   */
  export type CustomerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     * 
    **/
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUnique
   */
  export interface CustomerFindUniqueArgs extends CustomerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     * 
    **/
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer base type for findFirst actions
   */
  export type CustomerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     * 
    **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     * 
    **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     * 
    **/
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }

  /**
   * Customer findFirst
   */
  export interface CustomerFindFirstArgs extends CustomerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     * 
    **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     * 
    **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     * 
    **/
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter, which Customers to fetch.
     * 
    **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     * 
    **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * The data needed to create a Customer.
     * 
    **/
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs = {
    /**
     * The data used to create many Customers.
     * 
    **/
    data: Enumerable<CustomerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * The data needed to update a Customer.
     * 
    **/
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     * 
    **/
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs = {
    /**
     * The data used to update Customers.
     * 
    **/
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     * 
    **/
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * The filter to search for the Customer to update in case it exists.
     * 
    **/
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     * 
    **/
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter which Customer to delete.
     * 
    **/
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs = {
    /**
     * Filter which Customers to delete
     * 
    **/
    where?: CustomerWhereInput
  }


  /**
   * Customer.loingProvider
   */
  export type Customer$loingProviderArgs = {
    /**
     * Select specific fields to fetch from the LoingProvider
     * 
    **/
    select?: LoingProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoingProviderInclude | null
    where?: LoingProviderWhereInput
    orderBy?: Enumerable<LoingProviderOrderByWithRelationInput>
    cursor?: LoingProviderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LoingProviderScalarFieldEnum>
  }


  /**
   * Customer without action
   */
  export type CustomerArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
  }



  /**
   * Model LoingProvider
   */


  export type AggregateLoingProvider = {
    _count: LoingProviderCountAggregateOutputType | null
    _min: LoingProviderMinAggregateOutputType | null
    _max: LoingProviderMaxAggregateOutputType | null
  }

  export type LoingProviderMinAggregateOutputType = {
    id: string | null
    providerSource: string | null
    providerType: string | null
    providerUid: string | null
    displayName: string | null
    providerLoginImgurl: string | null
    createAt: Date | null
    updateAt: Date | null
    customerId: string | null
  }

  export type LoingProviderMaxAggregateOutputType = {
    id: string | null
    providerSource: string | null
    providerType: string | null
    providerUid: string | null
    displayName: string | null
    providerLoginImgurl: string | null
    createAt: Date | null
    updateAt: Date | null
    customerId: string | null
  }

  export type LoingProviderCountAggregateOutputType = {
    id: number
    providerSource: number
    providerType: number
    providerUid: number
    displayName: number
    providerLoginImgurl: number
    createAt: number
    updateAt: number
    customerId: number
    _all: number
  }


  export type LoingProviderMinAggregateInputType = {
    id?: true
    providerSource?: true
    providerType?: true
    providerUid?: true
    displayName?: true
    providerLoginImgurl?: true
    createAt?: true
    updateAt?: true
    customerId?: true
  }

  export type LoingProviderMaxAggregateInputType = {
    id?: true
    providerSource?: true
    providerType?: true
    providerUid?: true
    displayName?: true
    providerLoginImgurl?: true
    createAt?: true
    updateAt?: true
    customerId?: true
  }

  export type LoingProviderCountAggregateInputType = {
    id?: true
    providerSource?: true
    providerType?: true
    providerUid?: true
    displayName?: true
    providerLoginImgurl?: true
    createAt?: true
    updateAt?: true
    customerId?: true
    _all?: true
  }

  export type LoingProviderAggregateArgs = {
    /**
     * Filter which LoingProvider to aggregate.
     * 
    **/
    where?: LoingProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoingProviders to fetch.
     * 
    **/
    orderBy?: Enumerable<LoingProviderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LoingProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoingProviders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoingProviders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoingProviders
    **/
    _count?: true | LoingProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoingProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoingProviderMaxAggregateInputType
  }

  export type GetLoingProviderAggregateType<T extends LoingProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateLoingProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoingProvider[P]>
      : GetScalarType<T[P], AggregateLoingProvider[P]>
  }




  export type LoingProviderGroupByArgs = {
    where?: LoingProviderWhereInput
    orderBy?: Enumerable<LoingProviderOrderByWithAggregationInput>
    by: Array<LoingProviderScalarFieldEnum>
    having?: LoingProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoingProviderCountAggregateInputType | true
    _min?: LoingProviderMinAggregateInputType
    _max?: LoingProviderMaxAggregateInputType
  }


  export type LoingProviderGroupByOutputType = {
    id: string
    providerSource: string
    providerType: string
    providerUid: string
    displayName: string
    providerLoginImgurl: string
    createAt: Date
    updateAt: Date
    customerId: string
    _count: LoingProviderCountAggregateOutputType | null
    _min: LoingProviderMinAggregateOutputType | null
    _max: LoingProviderMaxAggregateOutputType | null
  }

  type GetLoingProviderGroupByPayload<T extends LoingProviderGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LoingProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoingProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoingProviderGroupByOutputType[P]>
            : GetScalarType<T[P], LoingProviderGroupByOutputType[P]>
        }
      >
    >


  export type LoingProviderSelect = {
    id?: boolean
    providerSource?: boolean
    providerType?: boolean
    providerUid?: boolean
    displayName?: boolean
    providerLoginImgurl?: boolean
    createAt?: boolean
    updateAt?: boolean
    custmer?: boolean | CustomerArgs
    customerId?: boolean
  }


  export type LoingProviderInclude = {
    custmer?: boolean | CustomerArgs
  } 

  export type LoingProviderGetPayload<S extends boolean | null | undefined | LoingProviderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LoingProvider :
    S extends undefined ? never :
    S extends { include: any } & (LoingProviderArgs | LoingProviderFindManyArgs)
    ? LoingProvider  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'custmer' ? CustomerGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (LoingProviderArgs | LoingProviderFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'custmer' ? CustomerGetPayload<S['select'][P]> :  P extends keyof LoingProvider ? LoingProvider[P] : never
  } 
      : LoingProvider


  type LoingProviderCountArgs = Merge<
    Omit<LoingProviderFindManyArgs, 'select' | 'include'> & {
      select?: LoingProviderCountAggregateInputType | true
    }
  >

  export interface LoingProviderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one LoingProvider that matches the filter.
     * @param {LoingProviderFindUniqueArgs} args - Arguments to find a LoingProvider
     * @example
     * // Get one LoingProvider
     * const loingProvider = await prisma.loingProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LoingProviderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LoingProviderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'LoingProvider'> extends True ? Prisma__LoingProviderClient<LoingProviderGetPayload<T>> : Prisma__LoingProviderClient<LoingProviderGetPayload<T> | null, null>

    /**
     * Find one LoingProvider that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LoingProviderFindUniqueOrThrowArgs} args - Arguments to find a LoingProvider
     * @example
     * // Get one LoingProvider
     * const loingProvider = await prisma.loingProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LoingProviderFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LoingProviderFindUniqueOrThrowArgs>
    ): Prisma__LoingProviderClient<LoingProviderGetPayload<T>>

    /**
     * Find the first LoingProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoingProviderFindFirstArgs} args - Arguments to find a LoingProvider
     * @example
     * // Get one LoingProvider
     * const loingProvider = await prisma.loingProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LoingProviderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LoingProviderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'LoingProvider'> extends True ? Prisma__LoingProviderClient<LoingProviderGetPayload<T>> : Prisma__LoingProviderClient<LoingProviderGetPayload<T> | null, null>

    /**
     * Find the first LoingProvider that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoingProviderFindFirstOrThrowArgs} args - Arguments to find a LoingProvider
     * @example
     * // Get one LoingProvider
     * const loingProvider = await prisma.loingProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LoingProviderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LoingProviderFindFirstOrThrowArgs>
    ): Prisma__LoingProviderClient<LoingProviderGetPayload<T>>

    /**
     * Find zero or more LoingProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoingProviderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoingProviders
     * const loingProviders = await prisma.loingProvider.findMany()
     * 
     * // Get first 10 LoingProviders
     * const loingProviders = await prisma.loingProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loingProviderWithIdOnly = await prisma.loingProvider.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LoingProviderFindManyArgs>(
      args?: SelectSubset<T, LoingProviderFindManyArgs>
    ): PrismaPromise<Array<LoingProviderGetPayload<T>>>

    /**
     * Create a LoingProvider.
     * @param {LoingProviderCreateArgs} args - Arguments to create a LoingProvider.
     * @example
     * // Create one LoingProvider
     * const LoingProvider = await prisma.loingProvider.create({
     *   data: {
     *     // ... data to create a LoingProvider
     *   }
     * })
     * 
    **/
    create<T extends LoingProviderCreateArgs>(
      args: SelectSubset<T, LoingProviderCreateArgs>
    ): Prisma__LoingProviderClient<LoingProviderGetPayload<T>>

    /**
     * Create many LoingProviders.
     *     @param {LoingProviderCreateManyArgs} args - Arguments to create many LoingProviders.
     *     @example
     *     // Create many LoingProviders
     *     const loingProvider = await prisma.loingProvider.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LoingProviderCreateManyArgs>(
      args?: SelectSubset<T, LoingProviderCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a LoingProvider.
     * @param {LoingProviderDeleteArgs} args - Arguments to delete one LoingProvider.
     * @example
     * // Delete one LoingProvider
     * const LoingProvider = await prisma.loingProvider.delete({
     *   where: {
     *     // ... filter to delete one LoingProvider
     *   }
     * })
     * 
    **/
    delete<T extends LoingProviderDeleteArgs>(
      args: SelectSubset<T, LoingProviderDeleteArgs>
    ): Prisma__LoingProviderClient<LoingProviderGetPayload<T>>

    /**
     * Update one LoingProvider.
     * @param {LoingProviderUpdateArgs} args - Arguments to update one LoingProvider.
     * @example
     * // Update one LoingProvider
     * const loingProvider = await prisma.loingProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LoingProviderUpdateArgs>(
      args: SelectSubset<T, LoingProviderUpdateArgs>
    ): Prisma__LoingProviderClient<LoingProviderGetPayload<T>>

    /**
     * Delete zero or more LoingProviders.
     * @param {LoingProviderDeleteManyArgs} args - Arguments to filter LoingProviders to delete.
     * @example
     * // Delete a few LoingProviders
     * const { count } = await prisma.loingProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LoingProviderDeleteManyArgs>(
      args?: SelectSubset<T, LoingProviderDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoingProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoingProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoingProviders
     * const loingProvider = await prisma.loingProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LoingProviderUpdateManyArgs>(
      args: SelectSubset<T, LoingProviderUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one LoingProvider.
     * @param {LoingProviderUpsertArgs} args - Arguments to update or create a LoingProvider.
     * @example
     * // Update or create a LoingProvider
     * const loingProvider = await prisma.loingProvider.upsert({
     *   create: {
     *     // ... data to create a LoingProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoingProvider we want to update
     *   }
     * })
    **/
    upsert<T extends LoingProviderUpsertArgs>(
      args: SelectSubset<T, LoingProviderUpsertArgs>
    ): Prisma__LoingProviderClient<LoingProviderGetPayload<T>>

    /**
     * Count the number of LoingProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoingProviderCountArgs} args - Arguments to filter LoingProviders to count.
     * @example
     * // Count the number of LoingProviders
     * const count = await prisma.loingProvider.count({
     *   where: {
     *     // ... the filter for the LoingProviders we want to count
     *   }
     * })
    **/
    count<T extends LoingProviderCountArgs>(
      args?: Subset<T, LoingProviderCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoingProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoingProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoingProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoingProviderAggregateArgs>(args: Subset<T, LoingProviderAggregateArgs>): PrismaPromise<GetLoingProviderAggregateType<T>>

    /**
     * Group by LoingProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoingProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoingProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoingProviderGroupByArgs['orderBy'] }
        : { orderBy?: LoingProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoingProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoingProviderGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for LoingProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LoingProviderClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    custmer<T extends CustomerArgs= {}>(args?: Subset<T, CustomerArgs>): Prisma__CustomerClient<CustomerGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * LoingProvider base type for findUnique actions
   */
  export type LoingProviderFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the LoingProvider
     * 
    **/
    select?: LoingProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoingProviderInclude | null
    /**
     * Filter, which LoingProvider to fetch.
     * 
    **/
    where: LoingProviderWhereUniqueInput
  }

  /**
   * LoingProvider findUnique
   */
  export interface LoingProviderFindUniqueArgs extends LoingProviderFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LoingProvider findUniqueOrThrow
   */
  export type LoingProviderFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the LoingProvider
     * 
    **/
    select?: LoingProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoingProviderInclude | null
    /**
     * Filter, which LoingProvider to fetch.
     * 
    **/
    where: LoingProviderWhereUniqueInput
  }


  /**
   * LoingProvider base type for findFirst actions
   */
  export type LoingProviderFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the LoingProvider
     * 
    **/
    select?: LoingProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoingProviderInclude | null
    /**
     * Filter, which LoingProvider to fetch.
     * 
    **/
    where?: LoingProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoingProviders to fetch.
     * 
    **/
    orderBy?: Enumerable<LoingProviderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoingProviders.
     * 
    **/
    cursor?: LoingProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoingProviders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoingProviders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoingProviders.
     * 
    **/
    distinct?: Enumerable<LoingProviderScalarFieldEnum>
  }

  /**
   * LoingProvider findFirst
   */
  export interface LoingProviderFindFirstArgs extends LoingProviderFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LoingProvider findFirstOrThrow
   */
  export type LoingProviderFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the LoingProvider
     * 
    **/
    select?: LoingProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoingProviderInclude | null
    /**
     * Filter, which LoingProvider to fetch.
     * 
    **/
    where?: LoingProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoingProviders to fetch.
     * 
    **/
    orderBy?: Enumerable<LoingProviderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoingProviders.
     * 
    **/
    cursor?: LoingProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoingProviders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoingProviders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoingProviders.
     * 
    **/
    distinct?: Enumerable<LoingProviderScalarFieldEnum>
  }


  /**
   * LoingProvider findMany
   */
  export type LoingProviderFindManyArgs = {
    /**
     * Select specific fields to fetch from the LoingProvider
     * 
    **/
    select?: LoingProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoingProviderInclude | null
    /**
     * Filter, which LoingProviders to fetch.
     * 
    **/
    where?: LoingProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoingProviders to fetch.
     * 
    **/
    orderBy?: Enumerable<LoingProviderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoingProviders.
     * 
    **/
    cursor?: LoingProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoingProviders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoingProviders.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LoingProviderScalarFieldEnum>
  }


  /**
   * LoingProvider create
   */
  export type LoingProviderCreateArgs = {
    /**
     * Select specific fields to fetch from the LoingProvider
     * 
    **/
    select?: LoingProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoingProviderInclude | null
    /**
     * The data needed to create a LoingProvider.
     * 
    **/
    data: XOR<LoingProviderCreateInput, LoingProviderUncheckedCreateInput>
  }


  /**
   * LoingProvider createMany
   */
  export type LoingProviderCreateManyArgs = {
    /**
     * The data used to create many LoingProviders.
     * 
    **/
    data: Enumerable<LoingProviderCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * LoingProvider update
   */
  export type LoingProviderUpdateArgs = {
    /**
     * Select specific fields to fetch from the LoingProvider
     * 
    **/
    select?: LoingProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoingProviderInclude | null
    /**
     * The data needed to update a LoingProvider.
     * 
    **/
    data: XOR<LoingProviderUpdateInput, LoingProviderUncheckedUpdateInput>
    /**
     * Choose, which LoingProvider to update.
     * 
    **/
    where: LoingProviderWhereUniqueInput
  }


  /**
   * LoingProvider updateMany
   */
  export type LoingProviderUpdateManyArgs = {
    /**
     * The data used to update LoingProviders.
     * 
    **/
    data: XOR<LoingProviderUpdateManyMutationInput, LoingProviderUncheckedUpdateManyInput>
    /**
     * Filter which LoingProviders to update
     * 
    **/
    where?: LoingProviderWhereInput
  }


  /**
   * LoingProvider upsert
   */
  export type LoingProviderUpsertArgs = {
    /**
     * Select specific fields to fetch from the LoingProvider
     * 
    **/
    select?: LoingProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoingProviderInclude | null
    /**
     * The filter to search for the LoingProvider to update in case it exists.
     * 
    **/
    where: LoingProviderWhereUniqueInput
    /**
     * In case the LoingProvider found by the `where` argument doesn't exist, create a new LoingProvider with this data.
     * 
    **/
    create: XOR<LoingProviderCreateInput, LoingProviderUncheckedCreateInput>
    /**
     * In case the LoingProvider was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LoingProviderUpdateInput, LoingProviderUncheckedUpdateInput>
  }


  /**
   * LoingProvider delete
   */
  export type LoingProviderDeleteArgs = {
    /**
     * Select specific fields to fetch from the LoingProvider
     * 
    **/
    select?: LoingProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoingProviderInclude | null
    /**
     * Filter which LoingProvider to delete.
     * 
    **/
    where: LoingProviderWhereUniqueInput
  }


  /**
   * LoingProvider deleteMany
   */
  export type LoingProviderDeleteManyArgs = {
    /**
     * Filter which LoingProviders to delete
     * 
    **/
    where?: LoingProviderWhereInput
  }


  /**
   * LoingProvider without action
   */
  export type LoingProviderArgs = {
    /**
     * Select specific fields to fetch from the LoingProvider
     * 
    **/
    select?: LoingProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LoingProviderInclude | null
  }



  /**
   * Model Product
   */


  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    firstname: string | null
    fullname: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    firstname: string | null
    fullname: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    firstname: number
    fullname: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstname?: true
    fullname?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstname?: true
    fullname?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstname?: true
    fullname?: true
    _all?: true
  }

  export type ProductAggregateArgs = {
    /**
     * Filter which Product to aggregate.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithAggregationInput>
    by: Array<ProductScalarFieldEnum>
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }


  export type ProductGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    firstname: string
    fullname: string
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstname?: boolean
    fullname?: boolean
  }


  export type ProductGetPayload<S extends boolean | null | undefined | ProductArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Product :
    S extends undefined ? never :
    S extends { include: any } & (ProductArgs | ProductFindManyArgs)
    ? Product 
    : S extends { select: any } & (ProductArgs | ProductFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Product ? Product[P] : never
  } 
      : Product


  type ProductCountArgs = Merge<
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }
  >

  export interface ProductDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Product'> extends True ? Prisma__ProductClient<ProductGetPayload<T>> : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Product'> extends True ? Prisma__ProductClient<ProductGetPayload<T>> : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find the first Product that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs>
    ): PrismaPromise<Array<ProductGetPayload<T>>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Product base type for findUnique actions
   */
  export type ProductFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUnique
   */
  export interface ProductFindUniqueArgs extends ProductFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product base type for findFirst actions
   */
  export type ProductFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     * 
    **/
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product findFirst
   */
  export interface ProductFindFirstArgs extends ProductFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Filter, which Product to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     * 
    **/
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     * 
    **/
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product create
   */
  export type ProductCreateArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * The data needed to create a Product.
     * 
    **/
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs = {
    /**
     * The data used to create many Products.
     * 
    **/
    data: Enumerable<ProductCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * The data needed to update a Product.
     * 
    **/
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs = {
    /**
     * The data used to update Products.
     * 
    **/
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     * 
    **/
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * The filter to search for the Product to update in case it exists.
     * 
    **/
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     * 
    **/
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
    /**
     * Filter which Product to delete.
     * 
    **/
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs = {
    /**
     * Filter which Products to delete
     * 
    **/
    where?: ProductWhereInput
  }


  /**
   * Product without action
   */
  export type ProductArgs = {
    /**
     * Select specific fields to fetch from the Product
     * 
    **/
    select?: ProductSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AuthorScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const BooksOnAuthorsScalarFieldEnum: {
    bookId: 'bookId',
    authorId: 'authorId'
  };

  export type BooksOnAuthorsScalarFieldEnum = (typeof BooksOnAuthorsScalarFieldEnum)[keyof typeof BooksOnAuthorsScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CourseLookupScalarFieldEnum: {
    id: 'id',
    originalCourseId: 'originalCourseId',
    courseName: 'courseName',
    courseStartDate: 'courseStartDate',
    price: 'price',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type CourseLookupScalarFieldEnum = (typeof CourseLookupScalarFieldEnum)[keyof typeof CourseLookupScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    surname: 'surname',
    tel: 'tel',
    email: 'email',
    id_card: 'id_card',
    bookbank: 'bookbank'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const LoingProviderScalarFieldEnum: {
    id: 'id',
    providerSource: 'providerSource',
    providerType: 'providerType',
    providerUid: 'providerUid',
    displayName: 'displayName',
    providerLoginImgurl: 'providerLoginImgurl',
    createAt: 'createAt',
    updateAt: 'updateAt',
    customerId: 'customerId'
  };

  export type LoingProviderScalarFieldEnum = (typeof LoingProviderScalarFieldEnum)[keyof typeof LoingProviderScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    published: 'published',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    firstname: 'firstname',
    fullname: 'fullname'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    bio: 'bio',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StudentProfileScalarFieldEnum: {
    id: 'id',
    code: 'code',
    fullName: 'fullName',
    address: 'address',
    homePhone: 'homePhone',
    mobilePhone: 'mobilePhone',
    birthDate: 'birthDate',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type StudentProfileScalarFieldEnum = (typeof StudentProfileScalarFieldEnum)[keyof typeof StudentProfileScalarFieldEnum]


  export const StudentWishListScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    courseLookupId: 'courseLookupId'
  };

  export type StudentWishListScalarFieldEnum = (typeof StudentWishListScalarFieldEnum)[keyof typeof StudentWishListScalarFieldEnum]


  export const TempScalarFieldEnum: {
    id: 'id',
    code: 'code'
  };

  export type TempScalarFieldEnum = (typeof TempScalarFieldEnum)[keyof typeof TempScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    tel: 'tel',
    test: 'test'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type TempWhereInput = {
    AND?: Enumerable<TempWhereInput>
    OR?: Enumerable<TempWhereInput>
    NOT?: Enumerable<TempWhereInput>
    id?: StringFilter | string
    code?: StringFilter | string
  }

  export type TempOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
  }

  export type TempWhereUniqueInput = {
    id?: string
  }

  export type TempOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    _count?: TempCountOrderByAggregateInput
    _max?: TempMaxOrderByAggregateInput
    _min?: TempMinOrderByAggregateInput
  }

  export type TempScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TempScalarWhereWithAggregatesInput>
    OR?: Enumerable<TempScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TempScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    code?: StringWithAggregatesFilter | string
  }

  export type StudentProfileWhereInput = {
    AND?: Enumerable<StudentProfileWhereInput>
    OR?: Enumerable<StudentProfileWhereInput>
    NOT?: Enumerable<StudentProfileWhereInput>
    id?: StringFilter | string
    code?: IntFilter | number
    fullName?: StringFilter | string
    address?: StringNullableFilter | string | null
    homePhone?: StringNullableFilter | string | null
    mobilePhone?: StringNullableFilter | string | null
    birthDate?: DateTimeNullableFilter | Date | string | null
    wishLists?: StudentWishListListRelationFilter
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeNullableFilter | Date | string | null
  }

  export type StudentProfileOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    fullName?: SortOrder
    address?: SortOrder
    homePhone?: SortOrder
    mobilePhone?: SortOrder
    birthDate?: SortOrder
    wishLists?: StudentWishListOrderByRelationAggregateInput
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StudentProfileWhereUniqueInput = {
    id?: string
    code?: number
  }

  export type StudentProfileOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    fullName?: SortOrder
    address?: SortOrder
    homePhone?: SortOrder
    mobilePhone?: SortOrder
    birthDate?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: StudentProfileCountOrderByAggregateInput
    _avg?: StudentProfileAvgOrderByAggregateInput
    _max?: StudentProfileMaxOrderByAggregateInput
    _min?: StudentProfileMinOrderByAggregateInput
    _sum?: StudentProfileSumOrderByAggregateInput
  }

  export type StudentProfileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StudentProfileScalarWhereWithAggregatesInput>
    OR?: Enumerable<StudentProfileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StudentProfileScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    code?: IntWithAggregatesFilter | number
    fullName?: StringWithAggregatesFilter | string
    address?: StringNullableWithAggregatesFilter | string | null
    homePhone?: StringNullableWithAggregatesFilter | string | null
    mobilePhone?: StringNullableWithAggregatesFilter | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type StudentWishListWhereInput = {
    AND?: Enumerable<StudentWishListWhereInput>
    OR?: Enumerable<StudentWishListWhereInput>
    NOT?: Enumerable<StudentWishListWhereInput>
    id?: StringFilter | string
    profile?: XOR<StudentProfileRelationFilter, StudentProfileWhereInput>
    profileId?: StringFilter | string
    courseLookup?: XOR<CourseLookupRelationFilter, CourseLookupWhereInput>
    courseLookupId?: StringFilter | string
  }

  export type StudentWishListOrderByWithRelationInput = {
    id?: SortOrder
    profile?: StudentProfileOrderByWithRelationInput
    profileId?: SortOrder
    courseLookup?: CourseLookupOrderByWithRelationInput
    courseLookupId?: SortOrder
  }

  export type StudentWishListWhereUniqueInput = {
    id?: string
  }

  export type StudentWishListOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    courseLookupId?: SortOrder
    _count?: StudentWishListCountOrderByAggregateInput
    _max?: StudentWishListMaxOrderByAggregateInput
    _min?: StudentWishListMinOrderByAggregateInput
  }

  export type StudentWishListScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StudentWishListScalarWhereWithAggregatesInput>
    OR?: Enumerable<StudentWishListScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StudentWishListScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    profileId?: StringWithAggregatesFilter | string
    courseLookupId?: StringWithAggregatesFilter | string
  }

  export type CourseLookupWhereInput = {
    AND?: Enumerable<CourseLookupWhereInput>
    OR?: Enumerable<CourseLookupWhereInput>
    NOT?: Enumerable<CourseLookupWhereInput>
    id?: StringFilter | string
    originalCourseId?: StringFilter | string
    courseName?: StringFilter | string
    courseStartDate?: StringNullableFilter | string | null
    price?: StringNullableFilter | string | null
    wishLists?: StudentWishListListRelationFilter
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type CourseLookupOrderByWithRelationInput = {
    id?: SortOrder
    originalCourseId?: SortOrder
    courseName?: SortOrder
    courseStartDate?: SortOrder
    price?: SortOrder
    wishLists?: StudentWishListOrderByRelationAggregateInput
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CourseLookupWhereUniqueInput = {
    id?: string
    originalCourseId?: string
  }

  export type CourseLookupOrderByWithAggregationInput = {
    id?: SortOrder
    originalCourseId?: SortOrder
    courseName?: SortOrder
    courseStartDate?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: CourseLookupCountOrderByAggregateInput
    _max?: CourseLookupMaxOrderByAggregateInput
    _min?: CourseLookupMinOrderByAggregateInput
  }

  export type CourseLookupScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CourseLookupScalarWhereWithAggregatesInput>
    OR?: Enumerable<CourseLookupScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CourseLookupScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    originalCourseId?: StringWithAggregatesFilter | string
    courseName?: StringWithAggregatesFilter | string
    courseStartDate?: StringNullableWithAggregatesFilter | string | null
    price?: StringNullableWithAggregatesFilter | string | null
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    name?: StringNullableFilter | string | null
    profile?: XOR<ProfileRelationFilter, ProfileWhereInput> | null
    post?: PostListRelationFilter
    role?: EnumRoleFilter | Role
    tel?: StringNullableFilter | string | null
    test?: StringFilter | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    post?: PostOrderByRelationAggregateInput
    role?: SortOrder
    tel?: SortOrder
    test?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    tel?: SortOrder
    test?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    role?: EnumRoleWithAggregatesFilter | Role
    tel?: StringNullableWithAggregatesFilter | string | null
    test?: StringWithAggregatesFilter | string
  }

  export type ProfileWhereInput = {
    AND?: Enumerable<ProfileWhereInput>
    OR?: Enumerable<ProfileWhereInput>
    NOT?: Enumerable<ProfileWhereInput>
    id?: IntFilter | number
    bio?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    bio?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type ProfileWhereUniqueInput = {
    id?: number
    userId?: number
  }

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProfileScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    bio?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    published?: BoolFilter | boolean
    author?: XOR<UserRelationFilter, UserWhereInput>
    authorId?: IntFilter | number
    categories?: CategoryListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    published?: SortOrder
    author?: UserOrderByWithRelationInput
    authorId?: SortOrder
    categories?: CategoryOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = {
    id?: number
  }

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    published?: BoolWithAggregatesFilter | boolean
    authorId?: IntWithAggregatesFilter | number
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    posts?: PostListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    posts?: PostOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = {
    id?: number
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type BookWhereInput = {
    AND?: Enumerable<BookWhereInput>
    OR?: Enumerable<BookWhereInput>
    NOT?: Enumerable<BookWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    booksOnAuthors?: BooksOnAuthorsListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    booksOnAuthors?: BooksOnAuthorsOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = {
    id?: number
  }

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BookScalarWhereWithAggregatesInput>
    OR?: Enumerable<BookScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BookScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
  }

  export type AuthorWhereInput = {
    AND?: Enumerable<AuthorWhereInput>
    OR?: Enumerable<AuthorWhereInput>
    NOT?: Enumerable<AuthorWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    BooksOnAuthors?: BooksOnAuthorsListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    BooksOnAuthors?: BooksOnAuthorsOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = {
    id?: number
  }

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _avg?: AuthorAvgOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
    _sum?: AuthorSumOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AuthorScalarWhereWithAggregatesInput>
    OR?: Enumerable<AuthorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AuthorScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type BooksOnAuthorsWhereInput = {
    AND?: Enumerable<BooksOnAuthorsWhereInput>
    OR?: Enumerable<BooksOnAuthorsWhereInput>
    NOT?: Enumerable<BooksOnAuthorsWhereInput>
    book?: XOR<BookRelationFilter, BookWhereInput>
    bookId?: IntFilter | number
    author?: XOR<AuthorRelationFilter, AuthorWhereInput>
    authorId?: IntFilter | number
  }

  export type BooksOnAuthorsOrderByWithRelationInput = {
    book?: BookOrderByWithRelationInput
    bookId?: SortOrder
    author?: AuthorOrderByWithRelationInput
    authorId?: SortOrder
  }

  export type BooksOnAuthorsWhereUniqueInput = {
    bookId_authorId?: BooksOnAuthorsBookIdAuthorIdCompoundUniqueInput
  }

  export type BooksOnAuthorsOrderByWithAggregationInput = {
    bookId?: SortOrder
    authorId?: SortOrder
    _count?: BooksOnAuthorsCountOrderByAggregateInput
    _avg?: BooksOnAuthorsAvgOrderByAggregateInput
    _max?: BooksOnAuthorsMaxOrderByAggregateInput
    _min?: BooksOnAuthorsMinOrderByAggregateInput
    _sum?: BooksOnAuthorsSumOrderByAggregateInput
  }

  export type BooksOnAuthorsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BooksOnAuthorsScalarWhereWithAggregatesInput>
    OR?: Enumerable<BooksOnAuthorsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BooksOnAuthorsScalarWhereWithAggregatesInput>
    bookId?: IntWithAggregatesFilter | number
    authorId?: IntWithAggregatesFilter | number
  }

  export type CustomerWhereInput = {
    AND?: Enumerable<CustomerWhereInput>
    OR?: Enumerable<CustomerWhereInput>
    NOT?: Enumerable<CustomerWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    name?: StringFilter | string
    surname?: StringFilter | string
    tel?: StringFilter | string
    email?: StringFilter | string
    id_card?: StringFilter | string
    bookbank?: StringFilter | string
    loingProvider?: LoingProviderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    id_card?: SortOrder
    bookbank?: SortOrder
    loingProvider?: LoingProviderOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = {
    id?: string
  }

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    id_card?: SortOrder
    bookbank?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    surname?: StringWithAggregatesFilter | string
    tel?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    id_card?: StringWithAggregatesFilter | string
    bookbank?: StringWithAggregatesFilter | string
  }

  export type LoingProviderWhereInput = {
    AND?: Enumerable<LoingProviderWhereInput>
    OR?: Enumerable<LoingProviderWhereInput>
    NOT?: Enumerable<LoingProviderWhereInput>
    id?: StringFilter | string
    providerSource?: StringFilter | string
    providerType?: StringFilter | string
    providerUid?: StringFilter | string
    displayName?: StringFilter | string
    providerLoginImgurl?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    custmer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    customerId?: StringFilter | string
  }

  export type LoingProviderOrderByWithRelationInput = {
    id?: SortOrder
    providerSource?: SortOrder
    providerType?: SortOrder
    providerUid?: SortOrder
    displayName?: SortOrder
    providerLoginImgurl?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    custmer?: CustomerOrderByWithRelationInput
    customerId?: SortOrder
  }

  export type LoingProviderWhereUniqueInput = {
    id?: string
  }

  export type LoingProviderOrderByWithAggregationInput = {
    id?: SortOrder
    providerSource?: SortOrder
    providerType?: SortOrder
    providerUid?: SortOrder
    displayName?: SortOrder
    providerLoginImgurl?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    customerId?: SortOrder
    _count?: LoingProviderCountOrderByAggregateInput
    _max?: LoingProviderMaxOrderByAggregateInput
    _min?: LoingProviderMinOrderByAggregateInput
  }

  export type LoingProviderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LoingProviderScalarWhereWithAggregatesInput>
    OR?: Enumerable<LoingProviderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LoingProviderScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    providerSource?: StringWithAggregatesFilter | string
    providerType?: StringWithAggregatesFilter | string
    providerUid?: StringWithAggregatesFilter | string
    displayName?: StringWithAggregatesFilter | string
    providerLoginImgurl?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    customerId?: StringWithAggregatesFilter | string
  }

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    firstname?: StringFilter | string
    fullname?: StringFilter | string
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstname?: SortOrder
    fullname?: SortOrder
  }

  export type ProductWhereUniqueInput = {
    id?: number
  }

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstname?: SortOrder
    fullname?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    firstname?: StringWithAggregatesFilter | string
    fullname?: StringWithAggregatesFilter | string
  }

  export type TempCreateInput = {
    id: string
    code: string
  }

  export type TempUncheckedCreateInput = {
    id: string
    code: string
  }

  export type TempUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type TempUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type TempCreateManyInput = {
    id: string
    code: string
  }

  export type TempUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type TempUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type StudentProfileCreateInput = {
    id?: string
    code?: number
    fullName: string
    address?: string | null
    homePhone?: string | null
    mobilePhone?: string | null
    birthDate?: Date | string | null
    wishLists?: StudentWishListCreateNestedManyWithoutProfileInput
    createAt?: Date | string
    updateAt?: Date | string | null
  }

  export type StudentProfileUncheckedCreateInput = {
    id?: string
    code?: number
    fullName: string
    address?: string | null
    homePhone?: string | null
    mobilePhone?: string | null
    birthDate?: Date | string | null
    wishLists?: StudentWishListUncheckedCreateNestedManyWithoutProfileInput
    createAt?: Date | string
    updateAt?: Date | string | null
  }

  export type StudentProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    homePhone?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wishLists?: StudentWishListUpdateManyWithoutProfileNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    homePhone?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wishLists?: StudentWishListUncheckedUpdateManyWithoutProfileNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentProfileCreateManyInput = {
    id?: string
    code?: number
    fullName: string
    address?: string | null
    homePhone?: string | null
    mobilePhone?: string | null
    birthDate?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string | null
  }

  export type StudentProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    homePhone?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    homePhone?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentWishListCreateInput = {
    id?: string
    profile: StudentProfileCreateNestedOneWithoutWishListsInput
    courseLookup: CourseLookupCreateNestedOneWithoutWishListsInput
  }

  export type StudentWishListUncheckedCreateInput = {
    id?: string
    profileId: string
    courseLookupId: string
  }

  export type StudentWishListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile?: StudentProfileUpdateOneRequiredWithoutWishListsNestedInput
    courseLookup?: CourseLookupUpdateOneRequiredWithoutWishListsNestedInput
  }

  export type StudentWishListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    courseLookupId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentWishListCreateManyInput = {
    id?: string
    profileId: string
    courseLookupId: string
  }

  export type StudentWishListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type StudentWishListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    courseLookupId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseLookupCreateInput = {
    id?: string
    originalCourseId: string
    courseName: string
    courseStartDate?: string | null
    price?: string | null
    wishLists?: StudentWishListCreateNestedManyWithoutCourseLookupInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CourseLookupUncheckedCreateInput = {
    id?: string
    originalCourseId: string
    courseName: string
    courseStartDate?: string | null
    price?: string | null
    wishLists?: StudentWishListUncheckedCreateNestedManyWithoutCourseLookupInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CourseLookupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalCourseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    wishLists?: StudentWishListUpdateManyWithoutCourseLookupNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseLookupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalCourseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    wishLists?: StudentWishListUncheckedUpdateManyWithoutCourseLookupNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseLookupCreateManyInput = {
    id?: string
    originalCourseId: string
    courseName: string
    courseStartDate?: string | null
    price?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CourseLookupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalCourseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseLookupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalCourseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    profile?: ProfileCreateNestedOneWithoutUserInput
    post?: PostCreateNestedManyWithoutAuthorInput
    role?: Role
    tel?: string | null
    test: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    post?: PostUncheckedCreateNestedManyWithoutAuthorInput
    role?: Role
    tel?: string | null
    test: string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUpdateOneWithoutUserNestedInput
    post?: PostUpdateManyWithoutAuthorNestedInput
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    test?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    post?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    test?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    role?: Role
    tel?: string | null
    test: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    test?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    test?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateInput = {
    bio: string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    bio: string
    userId: number
  }

  export type ProfileUpdateInput = {
    bio?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileCreateManyInput = {
    id?: number
    bio: string
    userId: number
  }

  export type ProfileUpdateManyMutationInput = {
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateInput = {
    createdAt?: Date | string
    title: string
    published?: boolean
    author: UserCreateNestedOneWithoutPostInput
    categories?: CategoryCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    title: string
    published?: boolean
    authorId: number
    categories?: CategoryUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutPostNestedInput
    categories?: CategoryUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    createdAt?: Date | string
    title: string
    published?: boolean
    authorId: number
  }

  export type PostUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    name: string
    posts?: PostCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    posts?: PostUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    posts?: PostUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BookCreateInput = {
    title: string
    booksOnAuthors?: BooksOnAuthorsCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    title: string
    booksOnAuthors?: BooksOnAuthorsUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    booksOnAuthors?: BooksOnAuthorsUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    booksOnAuthors?: BooksOnAuthorsUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    title: string
  }

  export type BookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorCreateInput = {
    name: string
    BooksOnAuthors?: BooksOnAuthorsCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: number
    name: string
    BooksOnAuthors?: BooksOnAuthorsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    BooksOnAuthors?: BooksOnAuthorsUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    BooksOnAuthors?: BooksOnAuthorsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: number
    name: string
  }

  export type AuthorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BooksOnAuthorsCreateInput = {
    book: BookCreateNestedOneWithoutBooksOnAuthorsInput
    author: AuthorCreateNestedOneWithoutBooksOnAuthorsInput
  }

  export type BooksOnAuthorsUncheckedCreateInput = {
    bookId: number
    authorId: number
  }

  export type BooksOnAuthorsUpdateInput = {
    book?: BookUpdateOneRequiredWithoutBooksOnAuthorsNestedInput
    author?: AuthorUpdateOneRequiredWithoutBooksOnAuthorsNestedInput
  }

  export type BooksOnAuthorsUncheckedUpdateInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type BooksOnAuthorsCreateManyInput = {
    bookId: number
    authorId: number
  }

  export type BooksOnAuthorsUpdateManyMutationInput = {

  }

  export type BooksOnAuthorsUncheckedUpdateManyInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    surname: string
    tel: string
    email: string
    id_card: string
    bookbank: string
    loingProvider?: LoingProviderCreateNestedManyWithoutCustmerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    surname: string
    tel: string
    email: string
    id_card: string
    bookbank: string
    loingProvider?: LoingProviderUncheckedCreateNestedManyWithoutCustmerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    bookbank?: StringFieldUpdateOperationsInput | string
    loingProvider?: LoingProviderUpdateManyWithoutCustmerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    bookbank?: StringFieldUpdateOperationsInput | string
    loingProvider?: LoingProviderUncheckedUpdateManyWithoutCustmerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    surname: string
    tel: string
    email: string
    id_card: string
    bookbank: string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    bookbank?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    bookbank?: StringFieldUpdateOperationsInput | string
  }

  export type LoingProviderCreateInput = {
    id?: string
    providerSource: string
    providerType: string
    providerUid: string
    displayName: string
    providerLoginImgurl: string
    createAt?: Date | string
    updateAt?: Date | string
    custmer: CustomerCreateNestedOneWithoutLoingProviderInput
  }

  export type LoingProviderUncheckedCreateInput = {
    id?: string
    providerSource: string
    providerType: string
    providerUid: string
    displayName: string
    providerLoginImgurl: string
    createAt?: Date | string
    updateAt?: Date | string
    customerId: string
  }

  export type LoingProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerSource?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerUid?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    providerLoginImgurl?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    custmer?: CustomerUpdateOneRequiredWithoutLoingProviderNestedInput
  }

  export type LoingProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerSource?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerUid?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    providerLoginImgurl?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: StringFieldUpdateOperationsInput | string
  }

  export type LoingProviderCreateManyInput = {
    id?: string
    providerSource: string
    providerType: string
    providerUid: string
    displayName: string
    providerLoginImgurl: string
    createAt?: Date | string
    updateAt?: Date | string
    customerId: string
  }

  export type LoingProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerSource?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerUid?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    providerLoginImgurl?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoingProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerSource?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerUid?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    providerLoginImgurl?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    firstname: string
    fullname: string
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstname: string
    fullname: string
  }

  export type ProductUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstname?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstname?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstname: string
    fullname: string
  }

  export type ProductUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstname?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstname?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type TempCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
  }

  export type TempMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
  }

  export type TempMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type StudentWishListListRelationFilter = {
    every?: StudentWishListWhereInput
    some?: StudentWishListWhereInput
    none?: StudentWishListWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StudentWishListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentProfileCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    fullName?: SortOrder
    address?: SortOrder
    homePhone?: SortOrder
    mobilePhone?: SortOrder
    birthDate?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StudentProfileAvgOrderByAggregateInput = {
    code?: SortOrder
  }

  export type StudentProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    fullName?: SortOrder
    address?: SortOrder
    homePhone?: SortOrder
    mobilePhone?: SortOrder
    birthDate?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StudentProfileMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    fullName?: SortOrder
    address?: SortOrder
    homePhone?: SortOrder
    mobilePhone?: SortOrder
    birthDate?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StudentProfileSumOrderByAggregateInput = {
    code?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StudentProfileRelationFilter = {
    is?: StudentProfileWhereInput
    isNot?: StudentProfileWhereInput
  }

  export type CourseLookupRelationFilter = {
    is?: CourseLookupWhereInput
    isNot?: CourseLookupWhereInput
  }

  export type StudentWishListCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    courseLookupId?: SortOrder
  }

  export type StudentWishListMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    courseLookupId?: SortOrder
  }

  export type StudentWishListMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    courseLookupId?: SortOrder
  }

  export type CourseLookupCountOrderByAggregateInput = {
    id?: SortOrder
    originalCourseId?: SortOrder
    courseName?: SortOrder
    courseStartDate?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CourseLookupMaxOrderByAggregateInput = {
    id?: SortOrder
    originalCourseId?: SortOrder
    courseName?: SortOrder
    courseStartDate?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CourseLookupMinOrderByAggregateInput = {
    id?: SortOrder
    originalCourseId?: SortOrder
    courseName?: SortOrder
    courseStartDate?: SortOrder
    price?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ProfileRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    tel?: SortOrder
    test?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    tel?: SortOrder
    test?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    tel?: SortOrder
    test?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BooksOnAuthorsListRelationFilter = {
    every?: BooksOnAuthorsWhereInput
    some?: BooksOnAuthorsWhereInput
    none?: BooksOnAuthorsWhereInput
  }

  export type BooksOnAuthorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BookRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type AuthorRelationFilter = {
    is?: AuthorWhereInput
    isNot?: AuthorWhereInput
  }

  export type BooksOnAuthorsBookIdAuthorIdCompoundUniqueInput = {
    bookId: number
    authorId: number
  }

  export type BooksOnAuthorsCountOrderByAggregateInput = {
    bookId?: SortOrder
    authorId?: SortOrder
  }

  export type BooksOnAuthorsAvgOrderByAggregateInput = {
    bookId?: SortOrder
    authorId?: SortOrder
  }

  export type BooksOnAuthorsMaxOrderByAggregateInput = {
    bookId?: SortOrder
    authorId?: SortOrder
  }

  export type BooksOnAuthorsMinOrderByAggregateInput = {
    bookId?: SortOrder
    authorId?: SortOrder
  }

  export type BooksOnAuthorsSumOrderByAggregateInput = {
    bookId?: SortOrder
    authorId?: SortOrder
  }

  export type LoingProviderListRelationFilter = {
    every?: LoingProviderWhereInput
    some?: LoingProviderWhereInput
    none?: LoingProviderWhereInput
  }

  export type LoingProviderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    id_card?: SortOrder
    bookbank?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    id_card?: SortOrder
    bookbank?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    id_card?: SortOrder
    bookbank?: SortOrder
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type LoingProviderCountOrderByAggregateInput = {
    id?: SortOrder
    providerSource?: SortOrder
    providerType?: SortOrder
    providerUid?: SortOrder
    displayName?: SortOrder
    providerLoginImgurl?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    customerId?: SortOrder
  }

  export type LoingProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    providerSource?: SortOrder
    providerType?: SortOrder
    providerUid?: SortOrder
    displayName?: SortOrder
    providerLoginImgurl?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    customerId?: SortOrder
  }

  export type LoingProviderMinOrderByAggregateInput = {
    id?: SortOrder
    providerSource?: SortOrder
    providerType?: SortOrder
    providerUid?: SortOrder
    displayName?: SortOrder
    providerLoginImgurl?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    customerId?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstname?: SortOrder
    fullname?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstname?: SortOrder
    fullname?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstname?: SortOrder
    fullname?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type StudentWishListCreateNestedManyWithoutProfileInput = {
    create?: XOR<Enumerable<StudentWishListCreateWithoutProfileInput>, Enumerable<StudentWishListUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<StudentWishListCreateOrConnectWithoutProfileInput>
    createMany?: StudentWishListCreateManyProfileInputEnvelope
    connect?: Enumerable<StudentWishListWhereUniqueInput>
  }

  export type StudentWishListUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<Enumerable<StudentWishListCreateWithoutProfileInput>, Enumerable<StudentWishListUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<StudentWishListCreateOrConnectWithoutProfileInput>
    createMany?: StudentWishListCreateManyProfileInputEnvelope
    connect?: Enumerable<StudentWishListWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StudentWishListUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Enumerable<StudentWishListCreateWithoutProfileInput>, Enumerable<StudentWishListUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<StudentWishListCreateOrConnectWithoutProfileInput>
    upsert?: Enumerable<StudentWishListUpsertWithWhereUniqueWithoutProfileInput>
    createMany?: StudentWishListCreateManyProfileInputEnvelope
    set?: Enumerable<StudentWishListWhereUniqueInput>
    disconnect?: Enumerable<StudentWishListWhereUniqueInput>
    delete?: Enumerable<StudentWishListWhereUniqueInput>
    connect?: Enumerable<StudentWishListWhereUniqueInput>
    update?: Enumerable<StudentWishListUpdateWithWhereUniqueWithoutProfileInput>
    updateMany?: Enumerable<StudentWishListUpdateManyWithWhereWithoutProfileInput>
    deleteMany?: Enumerable<StudentWishListScalarWhereInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentWishListUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Enumerable<StudentWishListCreateWithoutProfileInput>, Enumerable<StudentWishListUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<StudentWishListCreateOrConnectWithoutProfileInput>
    upsert?: Enumerable<StudentWishListUpsertWithWhereUniqueWithoutProfileInput>
    createMany?: StudentWishListCreateManyProfileInputEnvelope
    set?: Enumerable<StudentWishListWhereUniqueInput>
    disconnect?: Enumerable<StudentWishListWhereUniqueInput>
    delete?: Enumerable<StudentWishListWhereUniqueInput>
    connect?: Enumerable<StudentWishListWhereUniqueInput>
    update?: Enumerable<StudentWishListUpdateWithWhereUniqueWithoutProfileInput>
    updateMany?: Enumerable<StudentWishListUpdateManyWithWhereWithoutProfileInput>
    deleteMany?: Enumerable<StudentWishListScalarWhereInput>
  }

  export type StudentProfileCreateNestedOneWithoutWishListsInput = {
    create?: XOR<StudentProfileCreateWithoutWishListsInput, StudentProfileUncheckedCreateWithoutWishListsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutWishListsInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type CourseLookupCreateNestedOneWithoutWishListsInput = {
    create?: XOR<CourseLookupCreateWithoutWishListsInput, CourseLookupUncheckedCreateWithoutWishListsInput>
    connectOrCreate?: CourseLookupCreateOrConnectWithoutWishListsInput
    connect?: CourseLookupWhereUniqueInput
  }

  export type StudentProfileUpdateOneRequiredWithoutWishListsNestedInput = {
    create?: XOR<StudentProfileCreateWithoutWishListsInput, StudentProfileUncheckedCreateWithoutWishListsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutWishListsInput
    upsert?: StudentProfileUpsertWithoutWishListsInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<StudentProfileUpdateWithoutWishListsInput, StudentProfileUncheckedUpdateWithoutWishListsInput>
  }

  export type CourseLookupUpdateOneRequiredWithoutWishListsNestedInput = {
    create?: XOR<CourseLookupCreateWithoutWishListsInput, CourseLookupUncheckedCreateWithoutWishListsInput>
    connectOrCreate?: CourseLookupCreateOrConnectWithoutWishListsInput
    upsert?: CourseLookupUpsertWithoutWishListsInput
    connect?: CourseLookupWhereUniqueInput
    update?: XOR<CourseLookupUpdateWithoutWishListsInput, CourseLookupUncheckedUpdateWithoutWishListsInput>
  }

  export type StudentWishListCreateNestedManyWithoutCourseLookupInput = {
    create?: XOR<Enumerable<StudentWishListCreateWithoutCourseLookupInput>, Enumerable<StudentWishListUncheckedCreateWithoutCourseLookupInput>>
    connectOrCreate?: Enumerable<StudentWishListCreateOrConnectWithoutCourseLookupInput>
    createMany?: StudentWishListCreateManyCourseLookupInputEnvelope
    connect?: Enumerable<StudentWishListWhereUniqueInput>
  }

  export type StudentWishListUncheckedCreateNestedManyWithoutCourseLookupInput = {
    create?: XOR<Enumerable<StudentWishListCreateWithoutCourseLookupInput>, Enumerable<StudentWishListUncheckedCreateWithoutCourseLookupInput>>
    connectOrCreate?: Enumerable<StudentWishListCreateOrConnectWithoutCourseLookupInput>
    createMany?: StudentWishListCreateManyCourseLookupInputEnvelope
    connect?: Enumerable<StudentWishListWhereUniqueInput>
  }

  export type StudentWishListUpdateManyWithoutCourseLookupNestedInput = {
    create?: XOR<Enumerable<StudentWishListCreateWithoutCourseLookupInput>, Enumerable<StudentWishListUncheckedCreateWithoutCourseLookupInput>>
    connectOrCreate?: Enumerable<StudentWishListCreateOrConnectWithoutCourseLookupInput>
    upsert?: Enumerable<StudentWishListUpsertWithWhereUniqueWithoutCourseLookupInput>
    createMany?: StudentWishListCreateManyCourseLookupInputEnvelope
    set?: Enumerable<StudentWishListWhereUniqueInput>
    disconnect?: Enumerable<StudentWishListWhereUniqueInput>
    delete?: Enumerable<StudentWishListWhereUniqueInput>
    connect?: Enumerable<StudentWishListWhereUniqueInput>
    update?: Enumerable<StudentWishListUpdateWithWhereUniqueWithoutCourseLookupInput>
    updateMany?: Enumerable<StudentWishListUpdateManyWithWhereWithoutCourseLookupInput>
    deleteMany?: Enumerable<StudentWishListScalarWhereInput>
  }

  export type StudentWishListUncheckedUpdateManyWithoutCourseLookupNestedInput = {
    create?: XOR<Enumerable<StudentWishListCreateWithoutCourseLookupInput>, Enumerable<StudentWishListUncheckedCreateWithoutCourseLookupInput>>
    connectOrCreate?: Enumerable<StudentWishListCreateOrConnectWithoutCourseLookupInput>
    upsert?: Enumerable<StudentWishListUpsertWithWhereUniqueWithoutCourseLookupInput>
    createMany?: StudentWishListCreateManyCourseLookupInputEnvelope
    set?: Enumerable<StudentWishListWhereUniqueInput>
    disconnect?: Enumerable<StudentWishListWhereUniqueInput>
    delete?: Enumerable<StudentWishListWhereUniqueInput>
    connect?: Enumerable<StudentWishListWhereUniqueInput>
    update?: Enumerable<StudentWishListUpdateWithWhereUniqueWithoutCourseLookupInput>
    updateMany?: Enumerable<StudentWishListUpdateManyWithWhereWithoutCourseLookupInput>
    deleteMany?: Enumerable<StudentWishListScalarWhereInput>
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutPostInput = {
    create?: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutPostsInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutPostsInput>, Enumerable<CategoryUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutPostsInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type CategoryUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutPostsInput>, Enumerable<CategoryUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutPostsInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostInput
    upsert?: UserUpsertWithoutPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>
  }

  export type CategoryUpdateManyWithoutPostsNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutPostsInput>, Enumerable<CategoryUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutPostsInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutPostsInput>
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutPostsInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutPostsInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type CategoryUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutPostsInput>, Enumerable<CategoryUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutPostsInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutPostsInput>
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutPostsInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutPostsInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type PostCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<Enumerable<PostCreateWithoutCategoriesInput>, Enumerable<PostUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCategoriesInput>
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<Enumerable<PostCreateWithoutCategoriesInput>, Enumerable<PostUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCategoriesInput>
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type PostUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutCategoriesInput>, Enumerable<PostUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCategoriesInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutCategoriesInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutCategoriesInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutCategoriesInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutCategoriesInput>, Enumerable<PostUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCategoriesInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutCategoriesInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutCategoriesInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutCategoriesInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type BooksOnAuthorsCreateNestedManyWithoutBookInput = {
    create?: XOR<Enumerable<BooksOnAuthorsCreateWithoutBookInput>, Enumerable<BooksOnAuthorsUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<BooksOnAuthorsCreateOrConnectWithoutBookInput>
    createMany?: BooksOnAuthorsCreateManyBookInputEnvelope
    connect?: Enumerable<BooksOnAuthorsWhereUniqueInput>
  }

  export type BooksOnAuthorsUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<Enumerable<BooksOnAuthorsCreateWithoutBookInput>, Enumerable<BooksOnAuthorsUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<BooksOnAuthorsCreateOrConnectWithoutBookInput>
    createMany?: BooksOnAuthorsCreateManyBookInputEnvelope
    connect?: Enumerable<BooksOnAuthorsWhereUniqueInput>
  }

  export type BooksOnAuthorsUpdateManyWithoutBookNestedInput = {
    create?: XOR<Enumerable<BooksOnAuthorsCreateWithoutBookInput>, Enumerable<BooksOnAuthorsUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<BooksOnAuthorsCreateOrConnectWithoutBookInput>
    upsert?: Enumerable<BooksOnAuthorsUpsertWithWhereUniqueWithoutBookInput>
    createMany?: BooksOnAuthorsCreateManyBookInputEnvelope
    set?: Enumerable<BooksOnAuthorsWhereUniqueInput>
    disconnect?: Enumerable<BooksOnAuthorsWhereUniqueInput>
    delete?: Enumerable<BooksOnAuthorsWhereUniqueInput>
    connect?: Enumerable<BooksOnAuthorsWhereUniqueInput>
    update?: Enumerable<BooksOnAuthorsUpdateWithWhereUniqueWithoutBookInput>
    updateMany?: Enumerable<BooksOnAuthorsUpdateManyWithWhereWithoutBookInput>
    deleteMany?: Enumerable<BooksOnAuthorsScalarWhereInput>
  }

  export type BooksOnAuthorsUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<Enumerable<BooksOnAuthorsCreateWithoutBookInput>, Enumerable<BooksOnAuthorsUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<BooksOnAuthorsCreateOrConnectWithoutBookInput>
    upsert?: Enumerable<BooksOnAuthorsUpsertWithWhereUniqueWithoutBookInput>
    createMany?: BooksOnAuthorsCreateManyBookInputEnvelope
    set?: Enumerable<BooksOnAuthorsWhereUniqueInput>
    disconnect?: Enumerable<BooksOnAuthorsWhereUniqueInput>
    delete?: Enumerable<BooksOnAuthorsWhereUniqueInput>
    connect?: Enumerable<BooksOnAuthorsWhereUniqueInput>
    update?: Enumerable<BooksOnAuthorsUpdateWithWhereUniqueWithoutBookInput>
    updateMany?: Enumerable<BooksOnAuthorsUpdateManyWithWhereWithoutBookInput>
    deleteMany?: Enumerable<BooksOnAuthorsScalarWhereInput>
  }

  export type BooksOnAuthorsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BooksOnAuthorsCreateWithoutAuthorInput>, Enumerable<BooksOnAuthorsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BooksOnAuthorsCreateOrConnectWithoutAuthorInput>
    createMany?: BooksOnAuthorsCreateManyAuthorInputEnvelope
    connect?: Enumerable<BooksOnAuthorsWhereUniqueInput>
  }

  export type BooksOnAuthorsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BooksOnAuthorsCreateWithoutAuthorInput>, Enumerable<BooksOnAuthorsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BooksOnAuthorsCreateOrConnectWithoutAuthorInput>
    createMany?: BooksOnAuthorsCreateManyAuthorInputEnvelope
    connect?: Enumerable<BooksOnAuthorsWhereUniqueInput>
  }

  export type BooksOnAuthorsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<BooksOnAuthorsCreateWithoutAuthorInput>, Enumerable<BooksOnAuthorsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BooksOnAuthorsCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<BooksOnAuthorsUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: BooksOnAuthorsCreateManyAuthorInputEnvelope
    set?: Enumerable<BooksOnAuthorsWhereUniqueInput>
    disconnect?: Enumerable<BooksOnAuthorsWhereUniqueInput>
    delete?: Enumerable<BooksOnAuthorsWhereUniqueInput>
    connect?: Enumerable<BooksOnAuthorsWhereUniqueInput>
    update?: Enumerable<BooksOnAuthorsUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<BooksOnAuthorsUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<BooksOnAuthorsScalarWhereInput>
  }

  export type BooksOnAuthorsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<BooksOnAuthorsCreateWithoutAuthorInput>, Enumerable<BooksOnAuthorsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BooksOnAuthorsCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<BooksOnAuthorsUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: BooksOnAuthorsCreateManyAuthorInputEnvelope
    set?: Enumerable<BooksOnAuthorsWhereUniqueInput>
    disconnect?: Enumerable<BooksOnAuthorsWhereUniqueInput>
    delete?: Enumerable<BooksOnAuthorsWhereUniqueInput>
    connect?: Enumerable<BooksOnAuthorsWhereUniqueInput>
    update?: Enumerable<BooksOnAuthorsUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<BooksOnAuthorsUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<BooksOnAuthorsScalarWhereInput>
  }

  export type BookCreateNestedOneWithoutBooksOnAuthorsInput = {
    create?: XOR<BookCreateWithoutBooksOnAuthorsInput, BookUncheckedCreateWithoutBooksOnAuthorsInput>
    connectOrCreate?: BookCreateOrConnectWithoutBooksOnAuthorsInput
    connect?: BookWhereUniqueInput
  }

  export type AuthorCreateNestedOneWithoutBooksOnAuthorsInput = {
    create?: XOR<AuthorCreateWithoutBooksOnAuthorsInput, AuthorUncheckedCreateWithoutBooksOnAuthorsInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksOnAuthorsInput
    connect?: AuthorWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutBooksOnAuthorsNestedInput = {
    create?: XOR<BookCreateWithoutBooksOnAuthorsInput, BookUncheckedCreateWithoutBooksOnAuthorsInput>
    connectOrCreate?: BookCreateOrConnectWithoutBooksOnAuthorsInput
    upsert?: BookUpsertWithoutBooksOnAuthorsInput
    connect?: BookWhereUniqueInput
    update?: XOR<BookUpdateWithoutBooksOnAuthorsInput, BookUncheckedUpdateWithoutBooksOnAuthorsInput>
  }

  export type AuthorUpdateOneRequiredWithoutBooksOnAuthorsNestedInput = {
    create?: XOR<AuthorCreateWithoutBooksOnAuthorsInput, AuthorUncheckedCreateWithoutBooksOnAuthorsInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksOnAuthorsInput
    upsert?: AuthorUpsertWithoutBooksOnAuthorsInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<AuthorUpdateWithoutBooksOnAuthorsInput, AuthorUncheckedUpdateWithoutBooksOnAuthorsInput>
  }

  export type LoingProviderCreateNestedManyWithoutCustmerInput = {
    create?: XOR<Enumerable<LoingProviderCreateWithoutCustmerInput>, Enumerable<LoingProviderUncheckedCreateWithoutCustmerInput>>
    connectOrCreate?: Enumerable<LoingProviderCreateOrConnectWithoutCustmerInput>
    createMany?: LoingProviderCreateManyCustmerInputEnvelope
    connect?: Enumerable<LoingProviderWhereUniqueInput>
  }

  export type LoingProviderUncheckedCreateNestedManyWithoutCustmerInput = {
    create?: XOR<Enumerable<LoingProviderCreateWithoutCustmerInput>, Enumerable<LoingProviderUncheckedCreateWithoutCustmerInput>>
    connectOrCreate?: Enumerable<LoingProviderCreateOrConnectWithoutCustmerInput>
    createMany?: LoingProviderCreateManyCustmerInputEnvelope
    connect?: Enumerable<LoingProviderWhereUniqueInput>
  }

  export type LoingProviderUpdateManyWithoutCustmerNestedInput = {
    create?: XOR<Enumerable<LoingProviderCreateWithoutCustmerInput>, Enumerable<LoingProviderUncheckedCreateWithoutCustmerInput>>
    connectOrCreate?: Enumerable<LoingProviderCreateOrConnectWithoutCustmerInput>
    upsert?: Enumerable<LoingProviderUpsertWithWhereUniqueWithoutCustmerInput>
    createMany?: LoingProviderCreateManyCustmerInputEnvelope
    set?: Enumerable<LoingProviderWhereUniqueInput>
    disconnect?: Enumerable<LoingProviderWhereUniqueInput>
    delete?: Enumerable<LoingProviderWhereUniqueInput>
    connect?: Enumerable<LoingProviderWhereUniqueInput>
    update?: Enumerable<LoingProviderUpdateWithWhereUniqueWithoutCustmerInput>
    updateMany?: Enumerable<LoingProviderUpdateManyWithWhereWithoutCustmerInput>
    deleteMany?: Enumerable<LoingProviderScalarWhereInput>
  }

  export type LoingProviderUncheckedUpdateManyWithoutCustmerNestedInput = {
    create?: XOR<Enumerable<LoingProviderCreateWithoutCustmerInput>, Enumerable<LoingProviderUncheckedCreateWithoutCustmerInput>>
    connectOrCreate?: Enumerable<LoingProviderCreateOrConnectWithoutCustmerInput>
    upsert?: Enumerable<LoingProviderUpsertWithWhereUniqueWithoutCustmerInput>
    createMany?: LoingProviderCreateManyCustmerInputEnvelope
    set?: Enumerable<LoingProviderWhereUniqueInput>
    disconnect?: Enumerable<LoingProviderWhereUniqueInput>
    delete?: Enumerable<LoingProviderWhereUniqueInput>
    connect?: Enumerable<LoingProviderWhereUniqueInput>
    update?: Enumerable<LoingProviderUpdateWithWhereUniqueWithoutCustmerInput>
    updateMany?: Enumerable<LoingProviderUpdateManyWithWhereWithoutCustmerInput>
    deleteMany?: Enumerable<LoingProviderScalarWhereInput>
  }

  export type CustomerCreateNestedOneWithoutLoingProviderInput = {
    create?: XOR<CustomerCreateWithoutLoingProviderInput, CustomerUncheckedCreateWithoutLoingProviderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLoingProviderInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutLoingProviderNestedInput = {
    create?: XOR<CustomerCreateWithoutLoingProviderInput, CustomerUncheckedCreateWithoutLoingProviderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLoingProviderInput
    upsert?: CustomerUpsertWithoutLoingProviderInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutLoingProviderInput, CustomerUncheckedUpdateWithoutLoingProviderInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StudentWishListCreateWithoutProfileInput = {
    id?: string
    courseLookup: CourseLookupCreateNestedOneWithoutWishListsInput
  }

  export type StudentWishListUncheckedCreateWithoutProfileInput = {
    id?: string
    courseLookupId: string
  }

  export type StudentWishListCreateOrConnectWithoutProfileInput = {
    where: StudentWishListWhereUniqueInput
    create: XOR<StudentWishListCreateWithoutProfileInput, StudentWishListUncheckedCreateWithoutProfileInput>
  }

  export type StudentWishListCreateManyProfileInputEnvelope = {
    data: Enumerable<StudentWishListCreateManyProfileInput>
    skipDuplicates?: boolean
  }

  export type StudentWishListUpsertWithWhereUniqueWithoutProfileInput = {
    where: StudentWishListWhereUniqueInput
    update: XOR<StudentWishListUpdateWithoutProfileInput, StudentWishListUncheckedUpdateWithoutProfileInput>
    create: XOR<StudentWishListCreateWithoutProfileInput, StudentWishListUncheckedCreateWithoutProfileInput>
  }

  export type StudentWishListUpdateWithWhereUniqueWithoutProfileInput = {
    where: StudentWishListWhereUniqueInput
    data: XOR<StudentWishListUpdateWithoutProfileInput, StudentWishListUncheckedUpdateWithoutProfileInput>
  }

  export type StudentWishListUpdateManyWithWhereWithoutProfileInput = {
    where: StudentWishListScalarWhereInput
    data: XOR<StudentWishListUpdateManyMutationInput, StudentWishListUncheckedUpdateManyWithoutWishListsInput>
  }

  export type StudentWishListScalarWhereInput = {
    AND?: Enumerable<StudentWishListScalarWhereInput>
    OR?: Enumerable<StudentWishListScalarWhereInput>
    NOT?: Enumerable<StudentWishListScalarWhereInput>
    id?: StringFilter | string
    profileId?: StringFilter | string
    courseLookupId?: StringFilter | string
  }

  export type StudentProfileCreateWithoutWishListsInput = {
    id?: string
    code?: number
    fullName: string
    address?: string | null
    homePhone?: string | null
    mobilePhone?: string | null
    birthDate?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string | null
  }

  export type StudentProfileUncheckedCreateWithoutWishListsInput = {
    id?: string
    code?: number
    fullName: string
    address?: string | null
    homePhone?: string | null
    mobilePhone?: string | null
    birthDate?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string | null
  }

  export type StudentProfileCreateOrConnectWithoutWishListsInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutWishListsInput, StudentProfileUncheckedCreateWithoutWishListsInput>
  }

  export type CourseLookupCreateWithoutWishListsInput = {
    id?: string
    originalCourseId: string
    courseName: string
    courseStartDate?: string | null
    price?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CourseLookupUncheckedCreateWithoutWishListsInput = {
    id?: string
    originalCourseId: string
    courseName: string
    courseStartDate?: string | null
    price?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CourseLookupCreateOrConnectWithoutWishListsInput = {
    where: CourseLookupWhereUniqueInput
    create: XOR<CourseLookupCreateWithoutWishListsInput, CourseLookupUncheckedCreateWithoutWishListsInput>
  }

  export type StudentProfileUpsertWithoutWishListsInput = {
    update: XOR<StudentProfileUpdateWithoutWishListsInput, StudentProfileUncheckedUpdateWithoutWishListsInput>
    create: XOR<StudentProfileCreateWithoutWishListsInput, StudentProfileUncheckedCreateWithoutWishListsInput>
  }

  export type StudentProfileUpdateWithoutWishListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    homePhone?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentProfileUncheckedUpdateWithoutWishListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    homePhone?: NullableStringFieldUpdateOperationsInput | string | null
    mobilePhone?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseLookupUpsertWithoutWishListsInput = {
    update: XOR<CourseLookupUpdateWithoutWishListsInput, CourseLookupUncheckedUpdateWithoutWishListsInput>
    create: XOR<CourseLookupCreateWithoutWishListsInput, CourseLookupUncheckedCreateWithoutWishListsInput>
  }

  export type CourseLookupUpdateWithoutWishListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalCourseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseLookupUncheckedUpdateWithoutWishListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalCourseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentWishListCreateWithoutCourseLookupInput = {
    id?: string
    profile: StudentProfileCreateNestedOneWithoutWishListsInput
  }

  export type StudentWishListUncheckedCreateWithoutCourseLookupInput = {
    id?: string
    profileId: string
  }

  export type StudentWishListCreateOrConnectWithoutCourseLookupInput = {
    where: StudentWishListWhereUniqueInput
    create: XOR<StudentWishListCreateWithoutCourseLookupInput, StudentWishListUncheckedCreateWithoutCourseLookupInput>
  }

  export type StudentWishListCreateManyCourseLookupInputEnvelope = {
    data: Enumerable<StudentWishListCreateManyCourseLookupInput>
    skipDuplicates?: boolean
  }

  export type StudentWishListUpsertWithWhereUniqueWithoutCourseLookupInput = {
    where: StudentWishListWhereUniqueInput
    update: XOR<StudentWishListUpdateWithoutCourseLookupInput, StudentWishListUncheckedUpdateWithoutCourseLookupInput>
    create: XOR<StudentWishListCreateWithoutCourseLookupInput, StudentWishListUncheckedCreateWithoutCourseLookupInput>
  }

  export type StudentWishListUpdateWithWhereUniqueWithoutCourseLookupInput = {
    where: StudentWishListWhereUniqueInput
    data: XOR<StudentWishListUpdateWithoutCourseLookupInput, StudentWishListUncheckedUpdateWithoutCourseLookupInput>
  }

  export type StudentWishListUpdateManyWithWhereWithoutCourseLookupInput = {
    where: StudentWishListScalarWhereInput
    data: XOR<StudentWishListUpdateManyMutationInput, StudentWishListUncheckedUpdateManyWithoutWishListsInput>
  }

  export type ProfileCreateWithoutUserInput = {
    bio: string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    bio: string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type PostCreateWithoutAuthorInput = {
    createdAt?: Date | string
    title: string
    published?: boolean
    categories?: CategoryCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    createdAt?: Date | string
    title: string
    published?: boolean
    categories?: CategoryUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: Enumerable<PostCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostInput>
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    published?: BoolFilter | boolean
    authorId?: IntFilter | number
  }

  export type UserCreateWithoutProfileInput = {
    email: string
    name?: string | null
    post?: PostCreateNestedManyWithoutAuthorInput
    role?: Role
    tel?: string | null
    test: string
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    email: string
    name?: string | null
    post?: PostUncheckedCreateNestedManyWithoutAuthorInput
    role?: Role
    tel?: string | null
    test: string
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    post?: PostUpdateManyWithoutAuthorNestedInput
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    test?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    post?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    test?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutPostInput = {
    email: string
    name?: string | null
    profile?: ProfileCreateNestedOneWithoutUserInput
    role?: Role
    tel?: string | null
    test: string
  }

  export type UserUncheckedCreateWithoutPostInput = {
    id?: number
    email: string
    name?: string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    role?: Role
    tel?: string | null
    test: string
  }

  export type UserCreateOrConnectWithoutPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
  }

  export type CategoryCreateWithoutPostsInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostInput = {
    update: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>
    create: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
  }

  export type UserUpdateWithoutPostInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUpdateOneWithoutUserNestedInput
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    test?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    test?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateManyWithWhereWithoutPostsInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: Enumerable<CategoryScalarWhereInput>
    OR?: Enumerable<CategoryScalarWhereInput>
    NOT?: Enumerable<CategoryScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
  }

  export type PostCreateWithoutCategoriesInput = {
    createdAt?: Date | string
    title: string
    published?: boolean
    author: UserCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCategoriesInput = {
    id?: number
    createdAt?: Date | string
    title: string
    published?: boolean
    authorId: number
  }

  export type PostCreateOrConnectWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
  }

  export type PostUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCategoriesInput, PostUncheckedUpdateWithoutCategoriesInput>
    create: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCategoriesInput, PostUncheckedUpdateWithoutCategoriesInput>
  }

  export type PostUpdateManyWithWhereWithoutCategoriesInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type BooksOnAuthorsCreateWithoutBookInput = {
    author: AuthorCreateNestedOneWithoutBooksOnAuthorsInput
  }

  export type BooksOnAuthorsUncheckedCreateWithoutBookInput = {
    authorId: number
  }

  export type BooksOnAuthorsCreateOrConnectWithoutBookInput = {
    where: BooksOnAuthorsWhereUniqueInput
    create: XOR<BooksOnAuthorsCreateWithoutBookInput, BooksOnAuthorsUncheckedCreateWithoutBookInput>
  }

  export type BooksOnAuthorsCreateManyBookInputEnvelope = {
    data: Enumerable<BooksOnAuthorsCreateManyBookInput>
    skipDuplicates?: boolean
  }

  export type BooksOnAuthorsUpsertWithWhereUniqueWithoutBookInput = {
    where: BooksOnAuthorsWhereUniqueInput
    update: XOR<BooksOnAuthorsUpdateWithoutBookInput, BooksOnAuthorsUncheckedUpdateWithoutBookInput>
    create: XOR<BooksOnAuthorsCreateWithoutBookInput, BooksOnAuthorsUncheckedCreateWithoutBookInput>
  }

  export type BooksOnAuthorsUpdateWithWhereUniqueWithoutBookInput = {
    where: BooksOnAuthorsWhereUniqueInput
    data: XOR<BooksOnAuthorsUpdateWithoutBookInput, BooksOnAuthorsUncheckedUpdateWithoutBookInput>
  }

  export type BooksOnAuthorsUpdateManyWithWhereWithoutBookInput = {
    where: BooksOnAuthorsScalarWhereInput
    data: XOR<BooksOnAuthorsUpdateManyMutationInput, BooksOnAuthorsUncheckedUpdateManyWithoutBooksOnAuthorsInput>
  }

  export type BooksOnAuthorsScalarWhereInput = {
    AND?: Enumerable<BooksOnAuthorsScalarWhereInput>
    OR?: Enumerable<BooksOnAuthorsScalarWhereInput>
    NOT?: Enumerable<BooksOnAuthorsScalarWhereInput>
    bookId?: IntFilter | number
    authorId?: IntFilter | number
  }

  export type BooksOnAuthorsCreateWithoutAuthorInput = {
    book: BookCreateNestedOneWithoutBooksOnAuthorsInput
  }

  export type BooksOnAuthorsUncheckedCreateWithoutAuthorInput = {
    bookId: number
  }

  export type BooksOnAuthorsCreateOrConnectWithoutAuthorInput = {
    where: BooksOnAuthorsWhereUniqueInput
    create: XOR<BooksOnAuthorsCreateWithoutAuthorInput, BooksOnAuthorsUncheckedCreateWithoutAuthorInput>
  }

  export type BooksOnAuthorsCreateManyAuthorInputEnvelope = {
    data: Enumerable<BooksOnAuthorsCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type BooksOnAuthorsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BooksOnAuthorsWhereUniqueInput
    update: XOR<BooksOnAuthorsUpdateWithoutAuthorInput, BooksOnAuthorsUncheckedUpdateWithoutAuthorInput>
    create: XOR<BooksOnAuthorsCreateWithoutAuthorInput, BooksOnAuthorsUncheckedCreateWithoutAuthorInput>
  }

  export type BooksOnAuthorsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BooksOnAuthorsWhereUniqueInput
    data: XOR<BooksOnAuthorsUpdateWithoutAuthorInput, BooksOnAuthorsUncheckedUpdateWithoutAuthorInput>
  }

  export type BooksOnAuthorsUpdateManyWithWhereWithoutAuthorInput = {
    where: BooksOnAuthorsScalarWhereInput
    data: XOR<BooksOnAuthorsUpdateManyMutationInput, BooksOnAuthorsUncheckedUpdateManyWithoutBooksOnAuthorsInput>
  }

  export type BookCreateWithoutBooksOnAuthorsInput = {
    title: string
  }

  export type BookUncheckedCreateWithoutBooksOnAuthorsInput = {
    id?: number
    title: string
  }

  export type BookCreateOrConnectWithoutBooksOnAuthorsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutBooksOnAuthorsInput, BookUncheckedCreateWithoutBooksOnAuthorsInput>
  }

  export type AuthorCreateWithoutBooksOnAuthorsInput = {
    name: string
  }

  export type AuthorUncheckedCreateWithoutBooksOnAuthorsInput = {
    id?: number
    name: string
  }

  export type AuthorCreateOrConnectWithoutBooksOnAuthorsInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutBooksOnAuthorsInput, AuthorUncheckedCreateWithoutBooksOnAuthorsInput>
  }

  export type BookUpsertWithoutBooksOnAuthorsInput = {
    update: XOR<BookUpdateWithoutBooksOnAuthorsInput, BookUncheckedUpdateWithoutBooksOnAuthorsInput>
    create: XOR<BookCreateWithoutBooksOnAuthorsInput, BookUncheckedCreateWithoutBooksOnAuthorsInput>
  }

  export type BookUpdateWithoutBooksOnAuthorsInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type BookUncheckedUpdateWithoutBooksOnAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUpsertWithoutBooksOnAuthorsInput = {
    update: XOR<AuthorUpdateWithoutBooksOnAuthorsInput, AuthorUncheckedUpdateWithoutBooksOnAuthorsInput>
    create: XOR<AuthorCreateWithoutBooksOnAuthorsInput, AuthorUncheckedCreateWithoutBooksOnAuthorsInput>
  }

  export type AuthorUpdateWithoutBooksOnAuthorsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateWithoutBooksOnAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LoingProviderCreateWithoutCustmerInput = {
    id?: string
    providerSource: string
    providerType: string
    providerUid: string
    displayName: string
    providerLoginImgurl: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type LoingProviderUncheckedCreateWithoutCustmerInput = {
    id?: string
    providerSource: string
    providerType: string
    providerUid: string
    displayName: string
    providerLoginImgurl: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type LoingProviderCreateOrConnectWithoutCustmerInput = {
    where: LoingProviderWhereUniqueInput
    create: XOR<LoingProviderCreateWithoutCustmerInput, LoingProviderUncheckedCreateWithoutCustmerInput>
  }

  export type LoingProviderCreateManyCustmerInputEnvelope = {
    data: Enumerable<LoingProviderCreateManyCustmerInput>
    skipDuplicates?: boolean
  }

  export type LoingProviderUpsertWithWhereUniqueWithoutCustmerInput = {
    where: LoingProviderWhereUniqueInput
    update: XOR<LoingProviderUpdateWithoutCustmerInput, LoingProviderUncheckedUpdateWithoutCustmerInput>
    create: XOR<LoingProviderCreateWithoutCustmerInput, LoingProviderUncheckedCreateWithoutCustmerInput>
  }

  export type LoingProviderUpdateWithWhereUniqueWithoutCustmerInput = {
    where: LoingProviderWhereUniqueInput
    data: XOR<LoingProviderUpdateWithoutCustmerInput, LoingProviderUncheckedUpdateWithoutCustmerInput>
  }

  export type LoingProviderUpdateManyWithWhereWithoutCustmerInput = {
    where: LoingProviderScalarWhereInput
    data: XOR<LoingProviderUpdateManyMutationInput, LoingProviderUncheckedUpdateManyWithoutLoingProviderInput>
  }

  export type LoingProviderScalarWhereInput = {
    AND?: Enumerable<LoingProviderScalarWhereInput>
    OR?: Enumerable<LoingProviderScalarWhereInput>
    NOT?: Enumerable<LoingProviderScalarWhereInput>
    id?: StringFilter | string
    providerSource?: StringFilter | string
    providerType?: StringFilter | string
    providerUid?: StringFilter | string
    displayName?: StringFilter | string
    providerLoginImgurl?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    customerId?: StringFilter | string
  }

  export type CustomerCreateWithoutLoingProviderInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    surname: string
    tel: string
    email: string
    id_card: string
    bookbank: string
  }

  export type CustomerUncheckedCreateWithoutLoingProviderInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    surname: string
    tel: string
    email: string
    id_card: string
    bookbank: string
  }

  export type CustomerCreateOrConnectWithoutLoingProviderInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutLoingProviderInput, CustomerUncheckedCreateWithoutLoingProviderInput>
  }

  export type CustomerUpsertWithoutLoingProviderInput = {
    update: XOR<CustomerUpdateWithoutLoingProviderInput, CustomerUncheckedUpdateWithoutLoingProviderInput>
    create: XOR<CustomerCreateWithoutLoingProviderInput, CustomerUncheckedCreateWithoutLoingProviderInput>
  }

  export type CustomerUpdateWithoutLoingProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    bookbank?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateWithoutLoingProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    id_card?: StringFieldUpdateOperationsInput | string
    bookbank?: StringFieldUpdateOperationsInput | string
  }

  export type StudentWishListCreateManyProfileInput = {
    id?: string
    courseLookupId: string
  }

  export type StudentWishListUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseLookup?: CourseLookupUpdateOneRequiredWithoutWishListsNestedInput
  }

  export type StudentWishListUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseLookupId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentWishListUncheckedUpdateManyWithoutWishListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseLookupId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentWishListCreateManyCourseLookupInput = {
    id?: string
    profileId: string
  }

  export type StudentWishListUpdateWithoutCourseLookupInput = {
    id?: StringFieldUpdateOperationsInput | string
    profile?: StudentProfileUpdateOneRequiredWithoutWishListsNestedInput
  }

  export type StudentWishListUncheckedUpdateWithoutCourseLookupInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    createdAt?: Date | string
    title: string
    published?: boolean
  }

  export type PostUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    categories?: CategoryUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    categories?: CategoryUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpdateWithoutCategoriesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type BooksOnAuthorsCreateManyBookInput = {
    authorId: number
  }

  export type BooksOnAuthorsUpdateWithoutBookInput = {
    author?: AuthorUpdateOneRequiredWithoutBooksOnAuthorsNestedInput
  }

  export type BooksOnAuthorsUncheckedUpdateWithoutBookInput = {
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type BooksOnAuthorsUncheckedUpdateManyWithoutBooksOnAuthorsInput = {
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type BooksOnAuthorsCreateManyAuthorInput = {
    bookId: number
  }

  export type BooksOnAuthorsUpdateWithoutAuthorInput = {
    book?: BookUpdateOneRequiredWithoutBooksOnAuthorsNestedInput
  }

  export type BooksOnAuthorsUncheckedUpdateWithoutAuthorInput = {
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type LoingProviderCreateManyCustmerInput = {
    id?: string
    providerSource: string
    providerType: string
    providerUid: string
    displayName: string
    providerLoginImgurl: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type LoingProviderUpdateWithoutCustmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerSource?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerUid?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    providerLoginImgurl?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoingProviderUncheckedUpdateWithoutCustmerInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerSource?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerUid?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    providerLoginImgurl?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoingProviderUncheckedUpdateManyWithoutLoingProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerSource?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerUid?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    providerLoginImgurl?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}