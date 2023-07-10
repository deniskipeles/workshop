// @ts-nocheck
import { loadCompanyServices } from '$lib/server';
import { serializeNonPOJOs } from '$lib/tools';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
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
