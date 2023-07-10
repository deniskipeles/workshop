import { loadCompanyProducts } from '$lib/server';
import { serializeNonPOJOs } from '$lib/tools/index.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
  let { pb, ...rest } = locals
  try {
    const products = await loadCompanyProducts(rest?.company)
    return {
      ...rest,
      products,
      error: null
    };
  } catch (error) {
    return {
      ...rest,
      products: null,
      error: serializeNonPOJOs(error)
    };
  }
}
