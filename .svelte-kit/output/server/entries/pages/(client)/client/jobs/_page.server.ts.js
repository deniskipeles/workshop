import { s as serializeNonPOJOs } from "../../../../../chunks/index4.js";
import { l as loadJobsForClient } from "../../../../../chunks/jobs.js";
import "../../../../../chunks/pocketbase.js";
async function load({ locals }) {
  let { pb, ...rest } = locals;
  try {
    const jobs = await loadJobsForClient(rest?.user, rest?.company);
    return {
      ...rest,
      jobs,
      error: null
    };
  } catch (error) {
    return {
      ...rest,
      jobs: null,
      error: serializeNonPOJOs(error)
    };
  }
}
export {
  load
};
