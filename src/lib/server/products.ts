import { pb } from "$lib/pocketbase";
import { serializeNonPOJOs } from "$lib/tools";
import type { Record } from "pocketbase";

export const loadCompanyProducts = async (company: Record) => {
    const filter = `company_id = "${company.id}"`
    // fetch a paginated records list
    let resultList = await pb.collection('retrieve_products').getList(1, 50, {
        filter,
    });
    resultList = serializeNonPOJOs(resultList)
    return resultList
}

export const createProduct = async (data: any) => {
    let record = await pb.collection('products').create(data);
    record = serializeNonPOJOs(record)
    return record
}

export const updateProduct = async (id: string, data: any) => {
    let record = await pb.collection('products').update(id, data);
    record = serializeNonPOJOs(record)
    return record
}