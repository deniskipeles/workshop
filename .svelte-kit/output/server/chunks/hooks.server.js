import { p as pb } from "./pocketbase.js";
import { a as loadCompany } from "./base.js";
const handle = async ({ event, resolve }) => {
  event.locals.pb = pb;
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  try {
    event.locals.pb.authStore.isValid && await event.locals.pb.collection("users").authRefresh();
    event.locals.company = await loadCompany();
    event.locals.user = structuredClone(event.locals.pb.authStore.model);
  } catch (_) {
    event.locals.pb.authStore.clear();
  }
  const response = await resolve(event);
  response.headers.append("set-cookie", event.locals.pb.authStore.exportToCookie());
  response.headers.set(
    "set-cookie",
    pb.authStore.exportToCookie({ httpOnly: false })
  );
  return response;
};
export {
  handle
};
