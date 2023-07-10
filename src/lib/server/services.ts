import { pb } from '$lib/pocketbase';
import { serializeNonPOJOs } from '$lib/tools';

export async function loadCompanyServices(pb: import('pocketbase').default, hostel: import('pocketbase').Record) {

    let record = await pb.collection('services').getList(1, 50, {
        filter: `company_id = "${hostel?.id}"`,
        expand: 'specialist'
    });

    record = serializeNonPOJOs(record);
    return record;
}




export const createService = async (data: any) => {
    let record = await pb.collection('services').create(data);
    record = serializeNonPOJOs(record)
    return record
}