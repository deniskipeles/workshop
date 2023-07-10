<script lang="ts">
  import AddService from "$lib/components/services/AddService.svelte";
  import ServicesPage from "$lib/components/services/ServicesPage.svelte";
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import type { Admin, ListResult, Record } from "pocketbase";

  /** @type {import('./$types').PageData} */
  export let data: {
    services: ListResult<Record> | null;
    user: Record | Admin | null;
    company: Record;
    error: any;
  };
</script>

<Breadcrumb class="pt-20 py-8">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
</Breadcrumb>
<div>
  {#if data?.user?.admin}
    <AddService />
  {/if}
  <ServicesPage {data} />
</div>
