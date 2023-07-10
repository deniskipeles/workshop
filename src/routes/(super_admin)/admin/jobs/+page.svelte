<script lang="ts">
  import ErrorComp from "$lib/components/ErrorComp.svelte";
  import AddJobs from "$lib/components/jobs/AddJobs.svelte";
  import JobsPage from "$lib/components/jobs/JobsPage.svelte";
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import type { Admin, ListResult, Record } from "pocketbase";

  export let data: {
    jobs: ListResult<Record> | null;
    error: any;
    user: Record | Admin | null;
    company: Record;
  };
</script>

<Breadcrumb class="pt-20 py-8">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
</Breadcrumb>

<AddJobs/>
<div>
  {#if data?.error}
    <ErrorComp error={data?.error} />
  {/if}
  {#if data?.jobs}
    <!-- content here -->
    <JobsPage {data} />
  {/if}
</div>
