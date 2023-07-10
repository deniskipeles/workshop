<script lang="ts">
  import { createJobStore, searchCustomers } from "$lib/stores";
  import {
    Button,
    Card,
    CloseButton,
    Drawer,
    Dropdown,
    Input,
    Label,
    Spinner,
  } from "flowbite-svelte";
  import ErrorComp from "../ErrorComp.svelte";
  import type { Record } from "pocketbase";
  import { sineIn } from "svelte/easing";
  import { goto } from "$app/navigation";
  import { pb } from "$lib/pocketbase";
  import { serializeNonPOJOs } from "$lib/tools";
  import SearchUser from "../SearchUser.svelte";
  // import Selecte from "svelecte";
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  };

  let loading = false;
  let createError: any = null;
  let created = false;
  let hidden = true;

  async function createJob() {
    loading = true;
    createError = "";
    created = false;
    const response = await fetch("/api/jobs", {
      method: "POST",
      body: JSON.stringify($createJobStore),
      headers: {
        "content-type": "application/json",
      },
    });
    const res = await response.json();

    if (res?.success) {
      created = true;
      goto(`/admin/jobs/${res?.data?.id}`, { replaceState: true });
    } else {
      loading = false;
      createError = res?.error;
      created = false;
    }
  }

  const searchCustomersFxn = async (event: any) => {
    const value = event?.target?.value;
    const filter = `username ~ "${value}" || name ~ "${value}" || email ~ "${value}" || phone_number ~ "${value}"`;
    let records = await pb.collection("retrieve_customers").getList(1, 20, {
      filter,
    });

    records = serializeNonPOJOs(records);
    searchCustomers.set(records);
    console.log($searchCustomers);
  };

  function onChange(value: string) {
    createJobStore.update((values) => {
      values.employer = value;
      return values;
    });
  }
</script>

<Button on:click={() => (hidden = false)} pill={true}>Create A Job Record</Button>
<Drawer
  transitionType="fly"
  {transitionParams}
  bind:hidden
  activateClickOutside={true}
  id="sidebar1"
>
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
      >CREATE JOB RECORD
    </h5>
    <CloseButton
      on:click={() => (hidden = true)}
      class="mb-4 dark:text-white"
    />
  </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Create The Customer's Project Plan.
  </p>
  <Card>
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">
      <Label for="name" class="mb-2">Down Payment:</Label>
      <Input
        bind:value={$createJobStore.down_payment}
        type="number"
        placeholder="1000"
      />
    </p>
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">
      <Label for="name" class="mb-2">Employer:</Label>
      <SearchUser {onChange} required={false} />
    </p>

    <div class="mb-6 space-y-10">
      <div class="block mb-2" />
      {#if loading}
        <Button class="text-center w-full"><Spinner />Saving...</Button>
      {:else}
        <Button class="text-center w-full" on:click={createJob}
          >Save Project Plan</Button
        >
      {/if}
      {#if createError}
        <ErrorComp error={createError} />
      {/if}
      {#if created}
        <p class="text-green-500 font-semibold text-lg">
          The Job Record Is Created Successfully
        </p>
      {/if}
    </div>
  </Card>
</Drawer>
