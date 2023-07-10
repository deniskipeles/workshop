import { loadJobRequirements } from '$lib/server';
import { serializeNonPOJOs } from '$lib/tools';

/** @type {import('./$types').PageServerLoad} */
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
