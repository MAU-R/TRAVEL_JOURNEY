// server/middleware/auth.ts

import { auth } from "~/utils/auth";
export default defineEventHandler(async (event) => {
  const session = await auth.api.getSession({
    headers: event.headers,
  });
  event.context.user = session?.user;
  if (event.path.startsWith("/dashboard")) {
    const session = await auth.api.getSession({
      headers: event.headers,
    });
    if (!session?.user) {
      await sendRedirect(event, "/", 302);
    }
  }
});