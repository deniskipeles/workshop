import { s as serializeNonPOJOs } from "../../../chunks/index4.js";
import "../../../chunks/pocketbase.js";
import { l as loadCompanyReviews } from "../../../chunks/base.js";
async function load({ locals: { pb, company, user } }) {
  try {
    const reviews = await loadCompanyReviews(pb, company);
    return {
      reviews,
      company,
      user,
      error: null
    };
  } catch (error) {
    return {
      reviews: null,
      company,
      user,
      error: serializeNonPOJOs(error)
    };
  }
}
export {
  load
};
