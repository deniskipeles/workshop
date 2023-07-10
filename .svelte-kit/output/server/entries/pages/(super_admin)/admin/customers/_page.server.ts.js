import { s as serializeNonPOJOs } from "../../../../../chunks/index4.js";
import "../../../../../chunks/pocketbase.js";
import { l as loadCustomers } from "../../../../../chunks/users.js";
async function load({ locals }) {
  let { pb, ...rest } = locals;
  try {
    const customers = await loadCustomers(rest?.company);
    return {
      ...rest,
      customers,
      error: null
    };
  } catch (error) {
    return {
      ...rest,
      customers: null,
      error: serializeNonPOJOs(error)
    };
  }
}
export {
  load
};
