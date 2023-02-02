import { DomainEvents, IEventHandler, IHandle } from "@inh-lib/ddd";
import { CourseInfoCreatedEvent } from "@student-service/course-info-core";
import { Producer } from "kafkajs";





export class AfterCourseInfoCreated implements IHandle , IEventHandler<CourseInfoCreatedEvent> {
  private broker: Producer;

  constructor (broker: Producer) {
    this.setupSubscriptions;
    this.broker = broker;
  }

  async handle(event: CourseInfoCreatedEvent): Promise<void> {
      console.log('handle')
      this.onCourseInfoCreatedEvent(event)
      
  }

  setupSubscriptions(): void {
    console.log("setup sub")
    console.log(".name",CourseInfoCreatedEvent.name)
    let handle = this.handle.bind(this)
    DomainEvents.register(handle, CourseInfoCreatedEvent.name);
  }

  private async onCourseInfoCreatedEvent (event: CourseInfoCreatedEvent): Promise<void> {
    const { courseInfoAGM} = event;

    console.log("onCourseInfoCreatedEvent-executed!")
    console.log("AGM",courseInfoAGM)
    const body = {
      eventName: "course-create",
      eventData: {
        originalCourseId: courseInfoAGM.id.toValue(),
        courseName: courseInfoAGM.props.courseName,
        courseStartDate: courseInfoAGM.props.courseStartDate,
        price: courseInfoAGM.props.price
      }
    }

    // console.log("BROKER",this.broker)

    let sent = await this.broker.send({
      topic: "courseinfo",
      messages:[{
        value: JSON.stringify(body)
      }]
    })

    console.log("SENT",sent)

    //  broker.publish(eventName,eventData(courseInfoAGM))

    // this.assignInitialUsername.execute({ user })
    //   .then((r) => { console.log(r) })
    //   .catch((err) => { console.log(err) })
    
  }
}