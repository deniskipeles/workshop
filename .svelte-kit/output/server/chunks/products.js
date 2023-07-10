import { p as pb } from "./pocketbase.js";
import { s as serializeNonPOJOs } from "./index4.js";
const loadCompanyProducts = async (company) => {
  const filter = `company_id = "${company.id}"`;
  let resultList = await pb.collection("retrieve_products").getList(1, 50, {
    filter
  });
  resultList = serializeNonPOJOs(resultList);
  return resultList;
};
const createProduct = async (data) => {
  let record = await pb.collection("products").create(data);
  record = serializeNonPOJOs(record);
  return record;
};
export {
  createProduct as c,
  loadCompanyProducts as l
};
