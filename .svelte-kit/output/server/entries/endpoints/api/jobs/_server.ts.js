import { s as serializeNonPOJOs } from "../../../../chunks/index4.js";
import { c as createJob } from "../../../../chunks/jobs.js";
import "../../../../chunks/pocketbase.js";
import { j as json } from "../../../../chunks/index.js";
async function POST({ request, locals: { user, company } }) {
  try {
    let data = await request.json();
    data = {
      ...data,
      added_by_user_id: user?.id,
      company_id: company?.id
    };
    const res = await createJob(data);
    return json({ success: true, data: { ...res } });
  } catch (error) {
    error = serializeNonPOJOs(error);
    return json({ success: false, error });
  }
}
export {
  POST
};
