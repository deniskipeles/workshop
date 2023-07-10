<script>
  export let images = [];
  export let removeImage;
</script>

<div class="image-list">
  {#each images as image, index}
    <div class="image">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src={image.src}
        alt="Preview Image"
        class="h-auto w-full rounded-lg"
      />

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="remove-button" on:click={() => removeImage(index)}>X</div>
    </div>
  {/each}
</div>

<style>
  .image-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
  }

  .image {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;
  }

  .remove-button {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 4px;
    border-radius: 50%;
    font-size: 12px;
    cursor: pointer;
  }

  .remove-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
</style>
