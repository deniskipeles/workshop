import { s as serializeNonPOJOs } from "../../../chunks/index4.js";
import "../../../chunks/pocketbase.js";
import { l as loadCompanyServices } from "../../../chunks/services.js";
async function load({ locals }) {
  let { pb, ...rest } = locals;
  try {
    const services = await loadCompanyServices(pb, rest?.company);
    return {
      ...rest,
      services,
      error: null
    };
  } catch (error) {
    return {
      ...rest,
      services: null,
      error: serializeNonPOJOs(error)
    };
  }
}
export {
  load
};
