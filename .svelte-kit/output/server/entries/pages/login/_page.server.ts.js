import { c as currentUser } from "../../../chunks/pocketbase.js";
import { s as serializeNonPOJOs } from "../../../chunks/index4.js";
import { r as redirect } from "../../../chunks/index.js";
async function load({ locals: { user, company } }) {
  if (user?.id) {
    throw redirect(301, "/account");
  } else {
    return { company };
  }
}
const actions = {
  default: async ({ locals: { pb }, request }) => {
    const formData = await request.formData();
    const data = {
      email: formData.get("email"),
      password: formData.get("password")
    };
    try {
      const authData = await pb.collection("users").authWithPassword(
        data.email,
        data.password
      );
      currentUser.set(authData.record);
    } catch (e) {
      return { incorrect: true, error: serializeNonPOJOs(e) };
    }
    throw redirect(301, "/");
  }
};
export {
  actions,
  load
};
