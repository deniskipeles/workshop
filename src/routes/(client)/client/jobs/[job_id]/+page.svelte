<script lang="ts">
  import JobRequirementTable from "$lib/components/jobs/JobRequirementTable.svelte";
  import ErrorComp from "$lib/components/ErrorComp.svelte";
  import AddProductsToJobRequirements from "$lib/components/products/AddProductsToJobRequirements.svelte";
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import type { Admin, ListResult, Record } from "pocketbase";

  export let data: {
    job_requirements: Record[];
    error: any;
    user: Record | Admin | null;
    company: Record;
  };
  function resetParentData(rec:any) {
    data = rec
  }
</script>

<Breadcrumb class="pt-20 py-8">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
</Breadcrumb>


<div>
  {#if data?.error}
    <ErrorComp error={data?.error} />
  {/if}
  {#if data?.job_requirements}
    <!-- content here -->
    <JobRequirementTable {data} />
  {/if}
</div>
