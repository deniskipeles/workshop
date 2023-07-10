import { s as serializeNonPOJOs } from "../../../../chunks/index4.js";
import "../../../../chunks/pocketbase.js";
import { c as createService } from "../../../../chunks/services.js";
import { j as json } from "../../../../chunks/index.js";
async function POST({ request, locals: { user, company } }) {
  try {
    let data = await request.formData();
    if (user) {
      data.append("added_by_user_id", user?.id);
      data.append("company_id", company?.id);
    }
    const res = await createService(data);
    return json({ success: true, data: { ...res } });
  } catch (error) {
    error = serializeNonPOJOs(error);
    return json({ success: false, error });
  }
}
export {
  POST
};
