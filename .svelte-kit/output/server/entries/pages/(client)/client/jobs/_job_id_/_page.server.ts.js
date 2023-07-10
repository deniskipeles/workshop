import { s as serializeNonPOJOs } from "../../../../../../chunks/index4.js";
import { a as loadJobRequirements } from "../../../../../../chunks/jobs.js";
import "../../../../../../chunks/pocketbase.js";
async function load({ locals, params }) {
  let { pb, ...rest } = locals;
  try {
    const job_requirements = await loadJobRequirements(params.job_id, rest.user);
    return {
      ...rest,
      job_requirements,
      error: null
    };
  } catch (error) {
    return {
      ...rest,
      job_requirements: null,
      error: serializeNonPOJOs(error)
    };
  }
}
export {
  load
};
