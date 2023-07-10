import { p as pb } from "./pocketbase.js";
import { s as serializeNonPOJOs } from "./index4.js";
const PUBLIC_KEY = "5alrjcjacgazxqu";
async function loadCompany() {
  let record = await pb.collection("companies").getOne(PUBLIC_KEY, {});
  record = serializeNonPOJOs(record);
  return record;
}
async function loadCompanyReviews(pb2, hostel) {
  let record = await pb2.collection("retrieve_reviews").getList(1, 50, {
    sort: "-created",
    filter: `company_id = "${hostel?.id}"`
  });
  record = serializeNonPOJOs(record);
  return record;
}
async function createReviews(pb2, data) {
  try {
    let record = await pb2.collection("reviews").create(data);
    record = serializeNonPOJOs(record);
    return record;
  } catch (error) {
    throw new Error(`${error?.message}`);
  }
}
export {
  loadCompany as a,
  createReviews as c,
  loadCompanyReviews as l
};
