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
  default: async ({ locals, request }) => {
    const formData = await request.formData();
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      passwordConfirm: formData.get("passwordConfirm"),
      company_id: [locals?.company?.id]
    };
    try {
      await locals.pb.collection("users").create(data);
      await locals.pb.collection("users").requestVerification(data?.email);
      let res = await locals.pb.collection("users").authWithPassword(data.email, data.password);
      currentUser.set(res.record);
    } catch (e) {
      console.error(e);
      return { incorrect: true, error: serializeNonPOJOs(e) };
    }
    throw redirect(301, "/");
  }
};
export {
  actions,
  load
};
