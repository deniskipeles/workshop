import { s as serializeNonPOJOs } from "../../../../chunks/index4.js";
import "../../../../chunks/pocketbase.js";
import { c as createReviews } from "../../../../chunks/base.js";
import { j as json } from "../../../../chunks/index.js";
async function POST({ request, locals: { pb, user, company } }) {
  let data = await request.json();
  data = {
    ...data,
    company_id: company?.id,
    user_id: user?.id
  };
  try {
    const res = await createReviews(pb, data);
    return json({ success: true, data: res });
  } catch (error) {
    return json({ success: false, error: serializeNonPOJOs(error) });
  }
}
export {
  POST
};
