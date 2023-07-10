<script lang="ts">
  import { page } from "$app/stores";
  import { getTotal, serializeNonPOJOs } from "$lib/tools";
  import {
    Button,
    Card,
    CloseButton,
    Drawer,
    Label,
    Spinner,
    Search,
    List,
  } from "flowbite-svelte";

  import { sineIn } from "svelte/easing";
  import ErrorComp from "../ErrorComp.svelte";
  import { pb } from "$lib/pocketbase";
  import type { Admin, Record } from "pocketbase";
  import ProductCard from "./ProductCard.svelte";
  import { jobRequirementsTotalPriceStore } from "$lib/stores";
  import { writable, type Writable } from "svelte/store";

  export let data: {
    job_requirements: Record[];
    error: any;
    user: Record | Admin | null;
    company: Record;
  };
  export let resetParentData: Function;

  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  };

  let hidden = true;
  let loading = false;
  let fetchError: any = null;

  const records: Writable<Record[]> = writable([]);
  async function fetchJobRequirementsData() {
    hidden = false;
    loading = true;
    fetchError = null;
    try {
      let filter = `name ~ "${search_value}"`;
      if (data.job_requirements.length > 0) {
        let ids = data?.job_requirements
          ?.map((obj) => `id != "${obj?.product_id}"`)
          .join(" && ");
        filter += ` && (${ids})`;
      }
      // you can also fetch all records at once via getFullList
      let res = await pb.collection("retrieve_products").getFullList({
        sort: "-created",
        filter,
      });
      res = serializeNonPOJOs(res);
      records.set(res)
      loading = false;
      fetchError = null;
    } catch (error) {
      loading = false;
      fetchError = serializeNonPOJOs(error);
    }
  }

  let search_value = "";
  async function searchData() {
    await fetchJobRequirementsData();
  }

  let adding = false;
  let target: any = null;
  let adding_error: any = null;
  let adding_success: any = null;
  async function addProductFxn(rec: Record) {
    target = rec;
    adding = true;
    adding_error = null;
    try {
      // example create data
      const dt = {
        product_id: rec?.id,
        job_id: $page.params.job_id,
        quantity: 1,
      };

      const response = await fetch("/api/jobs/requirements", {
        method: "POST",
        body: JSON.stringify(dt),
        headers: {
          "content-type": "application/json",
        },
      });
      const res = await response.json();

      if (res?.success) {
        data.job_requirements = [...data?.job_requirements, res?.data];
        jobRequirementsTotalPriceStore.set(
          getTotal(data?.job_requirements?.map((obj) => obj?.total_price))
        );
        resetParentData(data);
        let ids = data?.job_requirements?.map((obj) => obj?.product_id);
        records.update((records)=>{
          return records.filter((obj) => !ids.includes(obj?.id));
        })
        adding = false;
        adding_error = null;
        target = null;
      } else {
        adding = false;
        adding_error = res?.error;
        setTimeout(() => {
          target = null;
          adding_error = null;
        }, 10000);
      }
    } catch (error) {
      adding = false;
      adding_error = serializeNonPOJOs(error);
      setTimeout(() => {
        target = null;
        adding_error = null;
      }, 10000);
    }
  }
</script>

<Button on:click={fetchJobRequirementsData} pill={true}>Add Product</Button>
<Drawer transitionType="fly" {transitionParams} bind:hidden id="sidebar1">
  <div class="flex items-center">
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
    >
      <svg
        class="w-5 h-5 mr-2"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        /></svg
      >ADD REQUIRED PRODUCTS
    </h5>
    <CloseButton
      on:click={() => (hidden = true)}
      class="mb-4 dark:text-white"
    />
  </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Click the product to add.
  </p>

  <Card>
    <form class="flex gap-2" on:submit|preventDefault={searchData}>
      <Search
        placeholder="Search student to assign a book"
        size="md"
        bind:value={search_value}
      />
      <Button class="!p-2.5" type="submit">
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          /></svg
        >
      </Button>
    </form>
  </Card>

  {#if loading}
    <Spinner size="24" />
  {:else}
    <div>
      <Label class="space-y-2">
        <span class="text-lg font-bold">Searched Products List:</span>
        <List tag="ul" class="space-y-1" list="none">
          {#each $records as record, key}
            {#if target == record && adding}
              <Card>
                <Spinner size="16" />Adding...
              </Card>
            {:else}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <div on:click={() => addProductFxn(record)}>
                <ProductCard {record} />
              </div>
              {#if target == record && adding_error}
                <ErrorComp error={adding_error} />
              {/if}
              {#if target == record && adding_success}
                <p class="bg-green-500 text-base font-semibold">
                  {@html adding_success}
                </p>
              {/if}
            {/if}
          {/each}
        </List>
      </Label>
    </div>
  {/if}
  <!-- {#if records.length < total_count}
    <div class="block my-4">
      {#if loading_more}
        <Button class="w-full py-4" color="light" on:click={fetchMoreData}>
          <Spinner />fetching more...
        </Button>
      {:else}
        <Button class="w-full py-4" color="purple" on:click={fetchMoreData}>
          LOAD MORE
        </Button>
      {/if}
    </div>
  {/if} -->
  {#if fetchError}
    <ErrorComp error={fetchError} />
  {/if}
</Drawer>
