<script lang="ts">
  import { pb } from "$lib/pocketbase";
  import type { Admin, ListResult, Record } from "pocketbase";
  import ErrorComp from "../ErrorComp.svelte";

  export let data: {
    services: ListResult<Record> | null;
    user: Record | Admin | null;
    company: Record;
    error: any;
  };

  function formatDateTime(dateTimeString: string) {
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  }

  const returnImageUrl = (record: Record, imgUrl: string) => {
    imgUrl = imgUrl
      ? pb.files.getUrl(record, imgUrl, { thumb: "100x100" })
      : "/images/img1.jpg";
    // console.log(imgUrl)
    return imgUrl;
  };
</script>

<div class="p-4 dark:bg-gray-900 dark:text-white bg-white text-black">
  <h1 class="text-2xl font-bold mb-4">Our Services</h1>
  {#if data?.services}
    <!-- content here -->
    {#each data?.services?.items as item}
      <div class="mb-4">
        <h2 class="text-xl font-bold">{item?.name}</h2>
        <p>Available: {item?.available ? "Yes" : "No"}</p>
        <p>Description: {item?.description}</p>

        <h3 class="text-lg font-bold mt-4">Photos:</h3>
        <ul class="list-disc ml-6">
          {#each item?.photos ?? [] as photo}
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <li>
              <img
                class="max-w-xs mb-2"
                src={returnImageUrl(item, photo)}
                alt="Service Photo"
              />
            </li>
          {/each}
        </ul>

        <hr class="my-4" />
      </div>
    {/each}
  {:else}
    <!-- else content here -->
    {#if data?.error}
      <!-- content here -->
      <ErrorComp error={data?.error} />
    {/if}
  {/if}

  {#if data?.services?.items?.length === 0}
    <p>No additional services found.</p>
  {/if}
</div>
