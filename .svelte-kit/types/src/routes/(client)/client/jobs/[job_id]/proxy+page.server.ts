// @ts-nocheck
import { loadJobRequirements } from '$lib/server';
import { serializeNonPOJOs } from '$lib/tools/index.js';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ locals, params }) {
  let { pb, ...rest } = locals
  try {
    const job_requirements = await loadJobRequirements(params.job_id, rest.user)
    return {
      ...rest,
      job_requirements,
      error: null
    };

  } catch (error: any) {
    return {
      ...rest,
      job_requirements: null,
      error: serializeNonPOJOs(error)
    };
  }
}
