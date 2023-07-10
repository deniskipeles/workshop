import { c as create_ssr_component, k as each, f as add_attribute } from "./index3.js";
/* empty css                                           */const css = {
  code: ".image-list.svelte-l0nbzf{display:grid;grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));grid-gap:1rem}.image.svelte-l0nbzf{position:relative;cursor:pointer;overflow:hidden;border-radius:8px}.remove-button.svelte-l0nbzf{position:absolute;top:5px;right:5px;background-color:rgba(0, 0, 0, 0.5);color:white;padding:4px;border-radius:50%;font-size:12px;cursor:pointer}.remove-button.svelte-l0nbzf:hover{background-color:rgba(0, 0, 0, 0.8)}",
  map: null
};
const GalleryPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images = [] } = $$props;
  let { removeImage } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.removeImage === void 0 && $$bindings.removeImage && removeImage !== void 0)
    $$bindings.removeImage(removeImage);
  $$result.css.add(css);
  return `<div class="image-list svelte-l0nbzf">${each(images, (image, index) => {
    return `<div class="image svelte-l0nbzf">
      <img${add_attribute("src", image.src, 0)} alt="Preview Image" class="h-auto w-full rounded-lg">

      
      <div class="remove-button svelte-l0nbzf">X</div>
    </div>`;
  })}
</div>`;
});
export {
  GalleryPage as G
};
