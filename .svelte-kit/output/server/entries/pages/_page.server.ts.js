import "../../chunks/pocketbase.js";
async function load({ locals: { pb, company, user } }) {
  try {
    return {
      company,
      user,
      error: null
    };
  } catch (error) {
    return {
      company,
      user,
      error
    };
  }
}
export {
  load
};
