// @ts-nocheck
import { loadJobRequirements } from '$lib/server';
import { serializeNonPOJOs } from '$lib/tools';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ locals, params }) {
  let { pb, ...rest } = locals
  try {
    const service = await loadJobRequirements(params.service_id)
    return {
      ...rest,
      service,
      error: null
    };

  } catch (error: any) {
    return {
      ...rest,
      service: null,
      error: serializeNonPOJOs(error)
    };
  }
}
