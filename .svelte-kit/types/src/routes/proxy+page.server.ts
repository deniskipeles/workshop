// @ts-nocheck
import { loadHostelRooms } from '$lib/server';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ locals: { pb, company, user } }) {
  try {

    return {
      company,
      user,
      error: null
    };
  } catch (error:any) {

    return {
      company,
      user,
      error
    };
  }
}
