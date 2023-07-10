// @ts-nocheck
import { loadCompanyReviews } from '$lib/server';
import { serializeNonPOJOs } from '$lib/tools';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ locals: { pb, company, user } }) {
  try {
    const reviews = await loadCompanyReviews(pb, company)

    return {
      reviews,
      company,
      user,
      error: null
    };

  } catch (error: any) {
    return {
      reviews: null,
      company,
      user,
      error:serializeNonPOJOs(error)
    };
  }
}
