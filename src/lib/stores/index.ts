import type { ListResult, Record } from "pocketbase";
import { writable, type Writable } from "svelte/store";


export const ai_input_store = writable({
  question: "",
  target: "general",
});
export const ai_result_store = writable({
  'answer': 'Hi. I am ai powered by bard.',
  'links': [],
  'images': []
});

// Create a writable store for form data
export const bookingFormData = writable({
  room_id: '',
  check_in_date: '',
  check_out_date: '',
});

export const hostel_review_agg: Writable<Record | any> = writable({
  "hostel_id": "RECORD_ID",
  "mean_rate": 4.5,
  "mode_rate": 5,
  "median_rate": 4,
  "total_reviews": 50,
  "max_rate": 5,
  "min_rate": 3,
  "rating_counts": [
    { "rating": 1, "rating_count": 10 },
    { "rating": 2, "rating_count": 5 },
    { "rating": 3, "rating_count": 8 },
    { "rating": 4, "rating_count": 20 },
    { "rating": 5, "rating_count": 7 }
  ]
})


export const createJobStore = writable({
  "employer": "",
  "employee": [],
  "down_payment": 500,
  "estimated_full_payment": 1500,
  "services": [],
})

export const createProductStore = writable({
  "colors": [],
  "material": [],
  "price": 100,
  "category": "",
  "discount": 0,
  "name": "",
  "photos": [],
  "company_id": "RELATION_RECORD_ID",
  "added_by_user_id": "RELATION_RECORD_ID",
  "available": 'true',
  "description": ""
})


export const createServiceStore = writable({
  "name": "",
  "description": "",
  "photos": [],
  "price": 10000,
  "company_id": null
})

export const searchCustomers: Writable<ListResult<Record>> = writable()
export const jobRequirementsTotalPriceStore = writable(0);