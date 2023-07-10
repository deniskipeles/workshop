import { p as pb } from "./pocketbase.js";
import { s as serializeNonPOJOs } from "./index4.js";
async function loadCompanyServices(pb2, hostel) {
  let record = await pb2.collection("services").getList(1, 50, {
    filter: `company_id = "${hostel?.id}"`,
    expand: "specialist"
  });
  record = serializeNonPOJOs(record);
  return record;
}
const createService = async (data) => {
  let record = await pb.collection("services").create(data);
  record = serializeNonPOJOs(record);
  return record;
};
export {
  createService as c,
  loadCompanyServices as l
};
