import { AfterCourseInoCreated } from "@student-service/course-info-api";

export default function register(broker:unknown):void{
  const courseCreated = new AfterCourseInoCreated(broker)
  courseCreated.setupSubscriptions()
}