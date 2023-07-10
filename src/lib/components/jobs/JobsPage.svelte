<script lang="ts">
  import { Card, Button } from "flowbite-svelte";
  import type { Admin, ListResult, Record } from "pocketbase";
  import ErrorComp from "../ErrorComp.svelte";

  export let data: {
    jobs: ListResult<Record> | null;
    error: any;
    user: Record | Admin | null;
    company: Record;
  };

</script>

<div>
  {#if data?.error}
    <!-- content here -->
    <ErrorComp error={data?.error} />
  {/if}
  {#if data?.jobs?.items}
    <!-- content here -->
    <div class="grid relative md:grid-cols-3 gap-6">
      {#each data?.jobs?.items as item}
        <Card href={`/${data?.user?.admin ? 'admin' : 'client'}/jobs/${item?.id}`}>
          <h3 class="text-xl font-semibold">Employer: {item?.employer_name}</h3>
          <div class="mb-2">
            <span class="font-semibold">Estimated Full Payment:</span>
            {item?.estimated_full_payment}
          </div>
          <div class="mb-2">
            <span class="font-semibold">Down Payment:</span>
            {item?.down_payment}
          </div>

          <div class="mb-2">
            <span class="font-semibold">Requested Services:</span>
            <ul>
              {#each Array.isArray(item?.expand?.services) ? item?.expand?.services : [] as service}
                <!-- {#if amenityId in item.amenities_ids} -->
                <li>
                  {service?.name}
                </li>
                <!-- {/if} -->
              {/each}
            </ul>
          </div>
          <!-- <BookingForm {data} {item} /> -->
        </Card>
      {/each}
    </div>
  {/if}
  {#if data?.jobs?.items?.length === 0}
    <p>No Jobs found.</p>
  {/if}
</div>
