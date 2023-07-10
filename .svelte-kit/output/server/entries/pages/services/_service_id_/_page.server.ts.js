import { s as serializeNonPOJOs } from "../../../../chunks/index4.js";
import { a as loadJobRequirements } from "../../../../chunks/jobs.js";
import "../../../../chunks/pocketbase.js";
async function load({ locals, params }) {
  let { pb, ...rest } = locals;
  try {
    const service = await loadJobRequirements(params.service_id);
    return {
      ...rest,
      service,
      error: null
    };
  } catch (error) {
    return {
      ...rest,
      service: null,
      error: serializeNonPOJOs(error)
    };
  }
}
export {
  load
};
