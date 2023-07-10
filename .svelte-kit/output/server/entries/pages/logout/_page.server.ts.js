import { c as currentUser } from "../../../chunks/pocketbase.js";
import { r as redirect } from "../../../chunks/index.js";
const actions = {
  default: async ({ locals }) => {
    locals.pb.authStore.clear();
    locals.user = null;
    currentUser.set(null);
    throw redirect(303, "/");
  }
};
export {
  actions
};
