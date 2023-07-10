import { loadCompanyServices } from '$lib/server';
import { serializeNonPOJOs } from '$lib/tools';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
  let { pb, ...rest } = locals
  try {
    const services = await loadCompanyServices(pb, rest?.company)

    return {
      ...rest,
      services,
      error: null
    };

  } catch (error: any) {
    return {
      ...rest,
      services: null,
      error:serializeNonPOJOs(error)
    };
  }
}
