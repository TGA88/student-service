import { DomainEvents, UniqueEntityID } from "@inh-lib/ddd";
import client from "../../dbclient";

(async function createHooksForAggregateRoots() {
  console.log("dbhook work")
  client.$use(async (params, next) => {
    console.log(`Prisma middleware:`)
    const res = await next(params)
    if (params.model == 'CourseInfo' && params.action == "create") {
      console.log("idddddddddddd",params.args.data.id)
      console.log("id2",params.args)
      const uid = new UniqueEntityID(params.args.data.id)
      // Logic only runs for delete action and Post model
      console.log(`Fire DomainEvents CourseInfo aggID: ${uid}`)
      DomainEvents.dispatchEventsForAggregate(uid)
    }
    return res
  })

})();