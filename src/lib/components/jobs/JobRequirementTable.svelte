<script lang="ts">
  import { getPbImageUrl, getTotal } from "$lib/tools";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";
  import type { Admin, Record } from "pocketbase";
  import { onMount } from "svelte";
  import { jobRequirementsTotalPriceStore as total } from "$lib/stores";

  export let data: {
    job_requirements: Record[];
    error: any;
    user: Record | Admin | null;
    company: Record;
  };

  let updating = false;
  let target: any = null;
  let update_error: any = null;
  async function increaseQuantity(record: any) {
    updating = true;
    target = record;
    update_error = null;
    record = {
      ...record,
      quantity: record?.quantity + 1,
    };
    const response = await fetch("/api/jobs/requirements", {
      method: "PUT",
      body: JSON.stringify(record),
      headers: {
        "content-type": "application/json",
      },
    });
    const res = await response.json();

    if (res?.success) {
      data.job_requirements = data?.job_requirements?.map((obj) => {
        if (obj?.id == res?.data?.id) {
          return res?.data;
        }
        return obj;
      });
      total.set(
        getTotal(data?.job_requirements?.map((obj) => obj?.total_price))
      );
      updating = false;
      target = null;
      update_error = null;
    } else {
      updating = false;
      target = null;
      update_error = res?.error;
    }
  }

  async function decreaseQuantity(record: any) {
    updating = true;
    target = record;
    update_error = null;
    record = {
      ...record,
      quantity: record?.quantity > 1 ? record?.quantity - 1 : record?.quantity,
    };
    const response = await fetch("/api/jobs/requirements", {
      method: "PUT",
      body: JSON.stringify(record),
      headers: {
        "content-type": "application/json",
      },
    });
    const res = await response.json();

    if (res?.success) {
      data.job_requirements = data?.job_requirements?.map((obj) => {
        if (obj?.id == res?.data?.id) {
          return res?.data;
        }
        return obj;
      });
      total.set(
        getTotal(data?.job_requirements?.map((obj) => obj?.total_price))
      );
      updating = false;
      target = null;
      update_error = null;
    } else {
      updating = false;
      target = null;
      update_error = res?.error;
    }
  }

  onMount(() => {
    total.set(getTotal(data?.job_requirements?.map((obj) => obj?.total_price)));
  });
</script>

<div>
  <Table hoverable={true} striped={true}>
    <thead>
      <tr>
        <th colspan="1" class="fill">
          <img
            src={getPbImageUrl(data?.company, data?.company?.logo)}
            class="rounded-full h-16 w-16"
            alt="Logo"
          />
          <p>{data?.company?.name}</p>
        </th>
        <th colspan="3">
          <div class="flex flex-col justify-center h-full">
            <tr>
              <h1>{data?.job?.employer?.name ?? "Customer 254"}</h1>
            </tr>
          </div>
        </th>
      </tr>
    </thead>

    <TableHead class="bg-gray-400">
      <TableHeadCell>ID</TableHeadCell>
      <TableHeadCell>Name</TableHeadCell>
      <TableHeadCell>Unit Price</TableHeadCell>
      <TableHeadCell>Quantity</TableHeadCell>
      <TableHeadCell>Total Price</TableHeadCell>
    </TableHead>

    <TableBody tableBodyClass="divide-y">
      {#each data?.job_requirements as item, key}
        <TableBodyRow>
          <TableBodyCell>
            {key + 1}
          </TableBodyCell>
          <TableBodyCell>
            {item?.product_name}
          </TableBodyCell>
          <TableBodyCell>
            {item?.price}
          </TableBodyCell>
          <TableBodyCell>
            <div class="increment-decrement-button">
              <button type="button" on:click={() => decreaseQuantity(item)}>
                -
              </button>
              <span class="mx-2">
                <!-- Display your counter value here -->
                {item?.quantity}
              </span>
              <button type="button" on:click={() => increaseQuantity(item)}>
                +
              </button>
            </div>
          </TableBodyCell>
          <TableBodyCell>
            {item?.total_price}
          </TableBodyCell>
        </TableBodyRow>
      {/each}
      <TableBodyRow>
        <td colspan="4" class="">
          <TableBodyCell>Total:</TableBodyCell>
        </td>
        <td colspan="1">
          <TableBodyCell>
            {$total}
          </TableBodyCell>
        </td>
      </TableBodyRow>
    </TableBody>
  </Table>
</div>

<style>
  .increment-decrement-button {
    display: flex;
    align-items: center;
  }

  .increment-decrement-button button {
    padding: 0.5rem;
    background-color: #fff;
    border: 1px solid #e2e8f0;
    cursor: pointer;
  }

  .increment-decrement-button button:hover {
    background-color: #f7fafc;
  }
</style>
