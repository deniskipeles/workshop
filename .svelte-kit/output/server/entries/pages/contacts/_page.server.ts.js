import { s as serializeNonPOJOs } from "../../../chunks/index4.js";
import "../../../chunks/pocketbase.js";
async function load({ locals }) {
  let { pb, ...rest } = locals;
  try {
    let contacts = await pb.collection("retrieve_contacts").getList(1, 50, {
      filter: `company_id = "${rest.company.id}"`
    });
    contacts = serializeNonPOJOs(contacts);
    return {
      ...rest,
      contacts,
      error: null
    };
  } catch (error) {
    return {
      ...rest,
      contacts: null,
      error: serializeNonPOJOs(error)
    };
  }
}
export {
  load
};
