import { pb } from '$lib/pocketbase';
import { serializeNonPOJOs } from '$lib/tools';
import type { Admin, Record } from 'pocketbase';

export async function loadJobsForAdmin(pb: import('pocketbase').default, company: Record) {

    let record = await pb.collection('retrieve_jobs').getList(1, 50, {
        expand: 'services',
        sort: '-created',
        filter: `company_id = "${company?.id}"`,
    });

    record = serializeNonPOJOs(record);
    return record;
}

export async function loadJobsForClient(user: Record | Admin | null, company: Record) {

    let record = await pb.collection('retrieve_jobs').getList(1, 50, {
        expand: 'services',
        sort: '-created',
        filter: `company_id = "${company?.id}" && employer_id = "${user?.id}"`,
    });

    record = serializeNonPOJOs(record);
    return record;
}

export const createJob = async (data: any) => {
    let record = await pb.collection('jobs').create(data);
    record = serializeNonPOJOs(record)
    return record
}

export const loadJobRequirements = async (job_id: string, user: Record | Admin | null) => {
    if (user?.admin) {
        const filter = `job_id = "${job_id}"`
        // you can also fetch all records at once via getFullList
        let records = await pb.collection('retrieve_job_requirements').getFullList({
            sort: '-created',
            filter
        });
        records = serializeNonPOJOs(records)
        return records
    } else {
        const filter = `job_id = "${job_id}" && employer_id = "${user?.id}"`
        // you can also fetch all records at once via getFullList
        let records = await pb.collection('retrieve_job_requirements').getFullList({
            sort: '-created',
            filter
        });
        records = serializeNonPOJOs(records)
        return records
    }
}