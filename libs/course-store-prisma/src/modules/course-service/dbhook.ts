import { DomainEvents } from "@inh-lib/ddd";
import client from "../../dbclient";

(async function createHooksForAggregateRoots() {
  console.log("dbhook work")
  client.$use(async (params, next) => {
    console.log(`Prisma middleware:`)
    const res = await next(params)
    if (params.model == 'CourseInfo' && params.action == "create") {
      console.log("idddddddddddd",params.args.data.id)
      // Logic only runs for delete action and Post model
      console.log(`Fire DomainEvents CourseInfo aggID: ${params.args.data.id}`)
      DomainEvents.dispatchEventsForAggregate(params.args.data.id)
    }
    return res
  })

})();