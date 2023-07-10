// import { pb } from "$lib/pocketbase";
import { canMakeBooking, getReadableDate, isWithinPastDays, serializeNonPOJOs } from "$lib/tools";
import type { Admin, Record, RecordAuthResponse } from "pocketbase";
import { createJob, loadJobRequirements, loadJobsForAdmin, loadJobsForClient } from "./jobs";
import { createReviews, loadCompany, loadCompanyReviews } from "./base";
import { loadHostelReservations } from "./reservations";
import { loadCustomers, loadPersonnel } from "./users";
import { createService, loadCompanyServices } from "./services";
import { createProduct, loadCompanyProducts, updateProduct } from "./products";

export {
    loadCompany,
    loadPersonnel,
    loadHostelReservations,
    loadCompanyServices,
    loadCompanyReviews,
    createReviews,
    loadJobsForAdmin,
    createJob,
    loadJobRequirements,
    loadCompanyProducts,
    createProduct,
    updateProduct,
    loadCustomers,
    createService,
    loadJobsForClient
}


export async function bookHostelFxn(pb: import('pocketbase').default, booking_data: any) {
    // console.log(booking_data)
    let filter = `user_id="${booking_data?.user_id}"`;
    let obj: any = null
    let allow: any = null
    try {
        obj = await pb.collection('partial_bookings').getFirstListItem(filter, {
            sort: '-created',
        });
        console.log(obj)
        allow = canMakeBooking(obj?.check_out_date)
        if (!allow && obj?.accept) {
            throw new Error(`You can not book a room. Since your lease has not expired. From ${getReadableDate(obj?.check_in_date)} to ${getReadableDate(obj?.check_out_date)}`);
        }
        const last_days = isWithinPastDays(obj?.created, 7)
        if (!allow && !obj?.accept && last_days) {
            throw new Error(`You can not book a room. Since you made a request within last 7 days [${getReadableDate(obj?.created)}]. The requested lease is from ${getReadableDate(obj?.check_in_date)} to ${getReadableDate(obj?.check_out_date)}`);
        }
    } catch (error) { console.log(error) }

    // let { user_id, ...data } = booking_data;

    let record = await pb.collection('reservations').create(booking_data);
    record = serializeNonPOJOs(record)
    return record
}