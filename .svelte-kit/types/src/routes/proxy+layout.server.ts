// @ts-nocheck

/** @param {Parameters<import('./$types').LayoutServerLoad>[0]} event */
export const load = async ({ locals: { user, company } }) => {

  return {
    user,
    company,
  };
};


