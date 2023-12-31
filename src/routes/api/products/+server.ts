import { pb } from '$lib/pocketbase';
import { createProduct } from '$lib/server';
import { serializeNonPOJOs } from '$lib/tools';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, locals: { user, company } }) {
    let formData = await request.formData()
    try {
        if (user) {
            formData.append('added_by_user_id', user?.id)
            formData.append('company_id', company?.id)
        }

        const res = await createProduct(formData)
        let record = await pb.collection('retrieve_products').getOne(res?.id, {
            // expand: 'relField1,relField2.subRelField',
        });
        record = serializeNonPOJOs(record)
        return json({ success: true, data: { ...record } });
    } catch (error: any) {
        error = serializeNonPOJOs(error)
        return json({ success: false, error });
    }
}
