import { createJob } from '$lib/server';
import { serializeNonPOJOs } from '$lib/tools/index.js';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, locals: { user, company } }) {
    try {
        let data = await request.json()
        data = {
            ...data,
            added_by_user_id: user?.id,
            company_id: company?.id
        }
        const res = await createJob(data)
        return json({ success: true, data: { ...res } });
    } catch (error: any) {
        error = serializeNonPOJOs(error)
        return json({ success: false, error });
    }
}
