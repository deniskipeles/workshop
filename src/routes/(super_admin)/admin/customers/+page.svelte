<script lang="ts">
  import ErrorComp from "$lib/components/ErrorComp.svelte";
  import CustomersComp from "$lib/components/users/CustomersComp.svelte";
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import type { Admin, ListResult, Record } from "pocketbase";

  export let data: {
    customers: ListResult<Record> | null;
    error: any;
    user: Record | Admin | null;
    company: Record;
  };
</script>

<Breadcrumb class="pt-20 py-8">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
</Breadcrumb>

<div>
  {#if data?.error}
    <ErrorComp error={data?.error} />
  {/if}
  {#if data?.customers}
    <!-- content here -->
    <CustomersComp {data} />
  {/if}
</div>
