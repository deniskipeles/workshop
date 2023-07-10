<script lang="ts">
  import AiComponent from "$lib/components/AiComponent.svelte";
  import ErrorComp from "$lib/components/ErrorComp.svelte";
  import AddProducts from "$lib/components/products/AddProducts.svelte";
  import ListProducts from "$lib/components/products/ListProducts.svelte";
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import type { Admin, ListResult, Record } from "pocketbase";

  export let data: {
    products: ListResult<Record> | null;
    error: any;
    user: Record | Admin | null;
    company: Record;
  };
  function updateData(dt: any) {
    data = dt;
  }
  // $: products_for_ai = data?.products?.items?.map((item) => {
  //   return {
  //     name: item?.name,
  //     colors: item?.colors,
  //     materials: item?.material,
  //     price: item?.price,
  //     discount: `${item?.discount}%`,
  //   };
  // });
</script>

<Breadcrumb class="pt-20 py-8">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
</Breadcrumb>
<!-- <AiComponent data={`Given the list of products with prices in kenya shillings in ${data?.company?.name} workshop: ${JSON.stringify(products_for_ai)}. if [] available advice differently on products to buy.`} /> -->
<AddProducts {updateData} {data} />
<div>
  {#if data?.error}
    <!-- content here -->
    <ErrorComp error={data?.error} />
  {/if}
  {#if data?.products}
    <!-- content here -->
    <ListProducts {data} />
  {/if}
</div>
