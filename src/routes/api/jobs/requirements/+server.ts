import { pb } from '$lib/pocketbase';
import { serializeNonPOJOs } from '$lib/tools';
import { json } from '@sveltejs/kit';




/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    try {
        let data = await request.json()
        let res = await pb
            .collection("job_requirements")
            .create(data);
        let record = await pb.collection('retrieve_job_requirements').getOne(res?.id, {
            // expand: 'relField1,relField2.subRelField',
        });
        record = serializeNonPOJOs(record)
        return json({ success: true, data: { ...record } });
    } catch (error: any) {
        error = serializeNonPOJOs(error)
        return json({ success: false, error });
    }
}


/** @type {import('./$types').RequestHandler} */
export async function PUT({ request }) {
    try {
        let data = await request.json()
        let res = await pb
            .collection("job_requirements")
            .update(data?.id, data);
        let record = await pb.collection('retrieve_job_requirements').getOne(res?.id, {
            // expand: 'relField1,relField2.subRelField',
        });
        record = serializeNonPOJOs(record)
        return json({ success: true, data: { ...record } });
    } catch (error: any) {
        error = serializeNonPOJOs(error)
        return json({ success: false, error });
    }
}



/** @type {import('./$types').RequestHandler} */
export async function GET({ request, url }) {
    let ids: any = url.searchParams.get("ids") ?? '["ckp8og9obfsar84", "le7g7ltdma5gxv4"]'
    try {
        ids = JSON.parse(ids)
        ids = ids.join(' ')
        const filter = `id !~ "${ids}"`;
        // you can also fetch all records at once via getFullList
        let records = await pb.collection("retrieve_products").getFullList({
            sort: "-created",
            filter,
        });
        records = serializeNonPOJOs(records);
        return json({ success: true, data: { ...records } });
    } catch (error: any) {
        error = serializeNonPOJOs(error)
        return json({ success: false, error });
    }
}
