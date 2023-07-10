import { loadJobsForClient } from '$lib/server';
import { serializeNonPOJOs } from '$lib/tools/index.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
  let { pb, ...rest } = locals
  try {
    const jobs = await loadJobsForClient(rest?.user, rest?.company)
    return {
      ...rest,
      jobs,
      error: null
    };

  } catch (error: any) {
    return {
      ...rest,
      jobs: null,
      error: serializeNonPOJOs(error)
    };
  }
}
