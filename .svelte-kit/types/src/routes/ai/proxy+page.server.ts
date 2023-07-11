// @ts-nocheck
import { pb } from "$lib/pocketbase";
import type { Record } from "pocketbase";
/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ parent }) {
  let parentData = await parent();
  let context = await getAIContext(parentData?.company)
  return { ...parentData, context };
}

const getAIContext = async (company: Record) => {
  let instruction =
    "Strictly response with context in electrical and plumping answer or warn that the question is not related to context.";
  try {
    let products = await getProducts(company);
    let services = await getServices(company);
    let workers = await getWorkers(company);
    // console.log((workers))
    instruction = `
            guides>>The question should relate to electrical and plumbing.
            If prices are involve they should be in kenya shillings. 
            The response should be answered in first person from company:${company?.name}<<
            Given csv list of the products: >>${products}<<.
            Given csv list of the services: >>${services}<<.
            Given csv list of the Manpower/labor/specialists/personnel/workers: >>${workers}<<.
            Given about the company: >>${company?.ai_details}<<.`
  } catch (error) {
    console.log(error);
  }
  return instruction;
};

const getServices = async (company: Record) => {
  let services = await pb.collection("services").getFullList({
    sort: "-created",
  });
  const arr = services.map((obj) => {
    let { name, description, price, available } = obj;
    return { name, description, price, available };
  });
  return jsonToCsv(arr,['name','price','available']);
};

const getProducts = async (company: Record) => {
  let products = await pb.collection("products").getFullList({
    sort: "-created",
  });
  const arr = products.map((obj) => {
    let { name, price, available, discount, colors, material } = obj;
    return { name, price, available, discount, colors, material };
  });
  return jsonToCsv(arr,['name','price','available','discount as percentage_discount']);
};

const getWorkers = async (company: Record) => {
  let workers = await pb.collection("workers").getFullList({
    sort: "-created",
    filter: `company_id = "${company?.id}"`,
    expand: `user_id`,
  });
  // console.log(workers);
  let users = workers?.map((obj) => {
    let user = obj?.expand?.user_id;
    let u = {name:'',email:'',username:'',phone_number:''};
    if (!Array.isArray(user)) {
      u = {
        name: user?.name,
        email: user?.email,
        username: user?.username,
        phone_number: user?.phone_number,
      };
    }
    return {
      ...u,
      position: obj?.position,
      worker_type: obj?.worker_type,
    };
  });
  return jsonToCsv(users,['name','email','phone_number','position','worker_type']);
};



function jsonToCsv(jsonArray: any[], fields: string[]): string {
  if (jsonArray.length === 0) {
    return '';
  }

  const csvRows = [];

  // Extract original field names and renamed field names
  const fieldNames = fields.map(field => field.split(' as ')[0].trim());
  const renamedFieldNames = fields.map(field => {
    const parts = field.split(' as ');
    return parts.length > 1 ? parts[1].trim() : parts[0].trim();
  });

  // Push the header row with renamed field names
  csvRows.push(renamedFieldNames.join(','));

  // Iterate over each object in the array
  for (const item of jsonArray) {
    const values = fieldNames.map((fieldName, index) => {
      const value = item[fieldName];
      return typeof value === 'string' ? `"${value}"` : value;
    });
    csvRows.push(values.join(','));
  }

  // Join rows with line breaks
  return csvRows.join('\n');
}
