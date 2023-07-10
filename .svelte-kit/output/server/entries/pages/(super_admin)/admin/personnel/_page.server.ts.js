import { s as serializeNonPOJOs } from "../../../../../chunks/index4.js";
import "../../../../../chunks/pocketbase.js";
import { a as loadPersonnel } from "../../../../../chunks/users.js";
async function load({ locals }) {
  let { pb, ...rest } = locals;
  try {
    const personnel = await loadPersonnel(rest?.company);
    return {
      ...rest,
      personnel,
      error: null
    };
  } catch (error) {
    return {
      ...rest,
      personnel: null,
      error: serializeNonPOJOs(error)
    };
  }
}
export {
  load
};
