import { s as serializeNonPOJOs } from "../../../../../chunks/index4.js";
import "../../../../../chunks/pocketbase.js";
import { l as loadCompanyProducts } from "../../../../../chunks/products.js";
async function load({ locals }) {
  let { pb, ...rest } = locals;
  try {
    const products = await loadCompanyProducts(rest?.company);
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
export {
  load
};
