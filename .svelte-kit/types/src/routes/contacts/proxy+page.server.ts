// @ts-nocheck

import { loadPersonnel } from '$lib/server';
import { serializeNonPOJOs } from '$lib/tools/index.js';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ locals }) {
    let { pb, ...rest } = locals
    try {
        let contacts = await pb.collection('retrieve_contacts').getList(1, 50, {
            filter: `company_id = "${rest.company.id}"`,
        });
        contacts = serializeNonPOJOs(contacts)
        return {
            ...rest,
            contacts,
            error: null
        };

    } catch (error: any) {
        return {
            ...rest,
            contacts: null,
            error: serializeNonPOJOs(error)
        };
    }
}
