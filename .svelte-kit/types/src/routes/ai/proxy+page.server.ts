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
            Given the products: >>${products}<<.
            Given the services: >>${services}<<.
            Given the Manpower/labor/specialists/personnel/workers: >>${workers}<<.
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
  return JSON.stringify(arr);
};

const getProducts = async (company: Record) => {
  let products = await pb.collection("products").getFullList({
    sort: "-created",
  });
  const arr = products.map((obj) => {
    let { name, price, available, discount, colors, material } = obj;
    return { name, price, available, discount, colors, material };
  });
  return JSON.stringify(arr);
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
    let u = {};
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
  return JSON.stringify(users);
};
