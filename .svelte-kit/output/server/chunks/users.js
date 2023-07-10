import { p as pb } from "./pocketbase.js";
import { s as serializeNonPOJOs } from "./index4.js";
async function loadPersonnel(company) {
  const filter = `company_id ?~ "${company?.id}"`;
  let resultList = await pb.collection("retrieve_workers").getList(1, 50, {
    filter
  });
  resultList = serializeNonPOJOs(resultList);
  return resultList;
}
async function loadCustomers(company) {
  const filter = `company_id ?~ "${company?.id}"`;
  let resultList = await pb.collection("retrieve_customers").getList(1, 50, {
    filter
  });
  resultList = serializeNonPOJOs(resultList);
  return resultList;
}
export {
  loadPersonnel as a,
  loadCustomers as l
};
