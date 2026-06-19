import defineAuthenticatedEventHandler from "~/lib/define-authenticated-event-handler";
// server/api/locations.get.ts
import { findLocations } from "~/utils/db/queries/location";

export default defineAuthenticatedEventHandler(async (event) => {
  return findLocations(event.context.user.id);
});
