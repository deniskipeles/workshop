// @ts-nocheck
import { loadPersonnel } from '$lib/server';
import { serializeNonPOJOs } from '$lib/tools/index.js';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ locals }) {
  let { pb, ...rest } = locals
  try {
    const personnel = await loadPersonnel(rest?.company)
    return {
      ...rest,
      personnel,
      error: null
    };

  } catch (error: any) {
    return {
      ...rest,
      personnel: null,
      error: serializeNonPOJOs(error)
    };
  }
}
