const load = async ({ locals: { user, company } }) => {
  return {
    user,
    company
  };
};
export {
  load
};
