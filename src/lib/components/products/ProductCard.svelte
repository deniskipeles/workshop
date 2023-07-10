<script lang="ts">
  import { pb } from "$lib/pocketbase";
  import { Badge, Card, Heading, Avatar } from "flowbite-svelte";
  import type { Record } from "pocketbase";

  export let record: Record;
  $: src = record?.photos[0]
    ? pb.files.getUrl(record, record?.photos[0], { thumb: "100x100" })
    : "/images/img1.jpg";
</script>

<Card>
  <!-- content here -->
  <Badge rounded color="yellow">{record?.name}</Badge>
  <Badge rounded color="pink">price : {record?.price}</Badge>
  <Heading
    tag="h2"
    customSize="text-lg font-semibold"
    class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
    >{record?.name}:
  </Heading>
  <Avatar {src} size="xl" rounded={true} />
</Card>
