-- CreateTable
CREATE TABLE "CourseInfo" (
    "id" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "courseStartDate" TEXT,
    "price" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseRegister" (
    "id" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "totalStudent" TEXT,
    "droped" TEXT,
    "registered" TEXT,

    CONSTRAINT "CourseRegister_pkey" PRIMARY KEY ("id")
);
