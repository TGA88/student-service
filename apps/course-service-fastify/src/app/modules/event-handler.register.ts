import { AfterCourseInfoCreated } from "@student-service/course-info-api";
import { Producer } from "kafkajs";

export default function register(broker:Producer):void{
  const courseCreated = new AfterCourseInfoCreated(broker)
  courseCreated.setupSubscriptions()
}