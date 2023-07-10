// @ts-nocheck
import { loadCustomers } from '$lib/server';
import { serializeNonPOJOs } from '$lib/tools/index.js';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ locals }) {
  let { pb, ...rest } = locals
  try {
    const customers = await loadCustomers(rest?.company)
    return {
      ...rest,
      customers,
      error: null
    };

  } catch (error: any) {
    return {
      ...rest,
      customers: null,
      error: serializeNonPOJOs(error)
    };
  }
}
