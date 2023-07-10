import { p as pb } from "./pocketbase.js";
import { s as serializeNonPOJOs } from "./index4.js";
async function loadJobsForAdmin(pb2, company) {
  let record = await pb2.collection("retrieve_jobs").getList(1, 50, {
    expand: "services",
    sort: "-created",
    filter: `company_id = "${company?.id}"`
  });
  record = serializeNonPOJOs(record);
  return record;
}
async function loadJobsForClient(user, company) {
  let record = await pb.collection("retrieve_jobs").getList(1, 50, {
    expand: "services",
    sort: "-created",
    filter: `company_id = "${company?.id}" && employer_id = "${user?.id}"`
  });
  record = serializeNonPOJOs(record);
  return record;
}
const createJob = async (data) => {
  let record = await pb.collection("jobs").create(data);
  record = serializeNonPOJOs(record);
  return record;
};
const loadJobRequirements = async (job_id, user) => {
  if (user?.admin) {
    const filter = `job_id = "${job_id}"`;
    let records = await pb.collection("retrieve_job_requirements").getFullList({
      sort: "-created",
      filter
    });
    records = serializeNonPOJOs(records);
    return records;
  } else {
    const filter = `job_id = "${job_id}" && employer_id = "${user?.id}"`;
    let records = await pb.collection("retrieve_job_requirements").getFullList({
      sort: "-created",
      filter
    });
    records = serializeNonPOJOs(records);
    return records;
  }
};
export {
  loadJobRequirements as a,
  loadJobsForAdmin as b,
  createJob as c,
  loadJobsForClient as l
};
