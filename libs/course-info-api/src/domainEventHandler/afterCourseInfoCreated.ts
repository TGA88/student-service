import { DomainEvents, IEventHandler, IHandle } from "@inh-lib/ddd";
import { CourseInfoCreatedEvent } from "@student-service/course-info-core";





export class AfterCourseInoCreated implements IHandle , IEventHandler<CourseInfoCreatedEvent> {
  private broker: unknown;

  constructor (broker: unknown) {
    this.setupSubscriptions();
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

    console.log("onCourseInfoCreatedEvent////////////////////////////")

    //  broker.publish(eventName,eventData(courseInfoAGM))

    // this.assignInitialUsername.execute({ user })
    //   .then((r) => { console.log(r) })
    //   .catch((err) => { console.log(err) })
    
  }
}