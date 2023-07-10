import { p as pb } from "../../../../chunks/pocketbase.js";
import { s as serializeNonPOJOs } from "../../../../chunks/index4.js";
import { c as createProduct } from "../../../../chunks/products.js";
import { j as json } from "../../../../chunks/index.js";
async function POST({ request, locals: { user, company } }) {
  let formData = await request.formData();
  try {
    if (user) {
      formData.append("added_by_user_id", user?.id);
      formData.append("company_id", company?.id);
    }
    const res = await createProduct(formData);
    let record = await pb.collection("retrieve_products").getOne(res?.id, {
      // expand: 'relField1,relField2.subRelField',
    });
    record = serializeNonPOJOs(record);
    return json({ success: true, data: { ...record } });
  } catch (error) {
    error = serializeNonPOJOs(error);
    return json({ success: false, error });
  }
}
export {
  POST
};
