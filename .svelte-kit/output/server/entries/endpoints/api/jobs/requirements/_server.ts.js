import { p as pb } from "../../../../../chunks/pocketbase.js";
import { s as serializeNonPOJOs } from "../../../../../chunks/index4.js";
import { j as json } from "../../../../../chunks/index.js";
async function POST({ request }) {
  try {
    let data = await request.json();
    let res = await pb.collection("job_requirements").create(data);
    let record = await pb.collection("retrieve_job_requirements").getOne(res?.id, {
      // expand: 'relField1,relField2.subRelField',
    });
    record = serializeNonPOJOs(record);
    return json({ success: true, data: { ...record } });
  } catch (error) {
    error = serializeNonPOJOs(error);
    return json({ success: false, error });
  }
}
async function PUT({ request }) {
  try {
    let data = await request.json();
    let res = await pb.collection("job_requirements").update(data?.id, data);
    let record = await pb.collection("retrieve_job_requirements").getOne(res?.id, {
      // expand: 'relField1,relField2.subRelField',
    });
    record = serializeNonPOJOs(record);
    return json({ success: true, data: { ...record } });
  } catch (error) {
    error = serializeNonPOJOs(error);
    return json({ success: false, error });
  }
}
async function GET({ request, url }) {
  let ids = url.searchParams.get("ids") ?? '["ckp8og9obfsar84", "le7g7ltdma5gxv4"]';
  try {
    ids = JSON.parse(ids);
    ids = ids.join(" ");
    const filter = `id !~ "${ids}"`;
    let records = await pb.collection("retrieve_products").getFullList({
      sort: "-created",
      filter
    });
    records = serializeNonPOJOs(records);
    return json({ success: true, data: { ...records } });
  } catch (error) {
    error = serializeNonPOJOs(error);
    return json({ success: false, error });
  }
}
export {
  GET,
  POST,
  PUT
};
