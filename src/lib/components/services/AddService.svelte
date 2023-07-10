<script lang="ts">
  import { createServiceStore } from "$lib/stores";
  import {
    Button,
    Card,
    Drawer,
    Fileupload,
    Gallery,
    Helper,
    Input,
    Label,
    Spinner,
    Textarea,
  } from "flowbite-svelte";
  import ErrorComp from "../ErrorComp.svelte";
  import type { Record } from "pocketbase";
  import { sineIn } from "svelte/easing";
  import { goto } from "$app/navigation";
  import { previewFiles, setObjectFormData } from "$lib/tools";
  import GalleryPage from "../GalleryPage.svelte";
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
    const formData = setObjectFormData($createServiceStore)
    files.forEach((file) => {
      formData.append("photos", file);
    });
    const response = await fetch("/api/services", {
      method: "POST",
      body: formData
    });
    const res = await response.json();

    if (res?.success) {
      created = true;
      goto(`/services/${res?.data?.id}`, { replaceState: false });
    } else {
      loading = false;
      createError = res?.error;
      created = false;
    }
  }

  let fileInput: any;
  let files: File[] = [];
  let images: { src: string }[] = [];

  async function handleFileInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      files = files.concat(Array.from(inputElement.files));
      const previewUrls = await previewFiles(files);
      images = previewUrls.map((url) => ({ src: url }));
    }
  }


  function removeImage(index: number) {
    images = images.filter((_, i) => i !== index);
    files = files.filter((_, i) => i !== index);
  }
</script>

<Button on:click={() => (hidden = false)} pill={true}
  >Create A Service Record</Button
>
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
      >CREATE SERVICE RECORD
    </h5>
  </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Add the service that this company provide.
  </p>
  <Card>
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">
      <Label for="name" class="mb-2">Service Name:</Label>
      <Input
        bind:value={$createServiceStore.name}
        type="text"
        placeholder="Wiring"
      />
    </p>
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">
      <Label for="name" class="mb-2">About Service:</Label>
      <Textarea
        bind:value={$createServiceStore.description}
        type="text"
        id="description"
        placeholder="Anything about service..."
      />
    </p>
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">
      <Label for="name" class="mb-2">Service Price:</Label>
      <Input
        bind:value={$createServiceStore.price}
        type="number"
        placeholder="1000"
      />
    </p>
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">
      <Label for="with_helper" class="pb-2"
        >Upload Cover Images For Easier Recognition.</Label
      >

      <!-- else content here -->
      <Fileupload
        bind:this={fileInput}
        id="with_helper"
        class="mb-2"
        on:change={handleFileInputChange}
        required
      />

      <Helper>JPEG,PNG OR SVG (MAX. 2MB).{files?.length}</Helper>
      <!-- <Gallery class="gap-2 grid-cols-2" items={images} /> -->
      <GalleryPage {images} {removeImage} />
    </p>

    <div class="mb-6 space-y-10">
      <div class="block mb-2" />
      {#if loading}
        <Button class="text-center w-full"><Spinner />Saving...</Button>
      {:else}
        <Button class="text-center w-full" on:click={createJob}
          >Save This Service</Button
        >
      {/if}
      {#if createError}
        <ErrorComp error={createError} />
      {/if}
      {#if created}
        <p class="text-green-500 font-semibold text-lg">
          The Service Record Is Created Successfully
        </p>
      {/if}
    </div>
  </Card>
</Drawer>
