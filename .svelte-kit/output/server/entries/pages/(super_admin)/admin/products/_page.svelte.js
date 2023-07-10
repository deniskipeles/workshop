import { c as create_ssr_component, l as subscribe, v as validate_component, g as escape } from "../../../../../chunks/index3.js";
import { E as ErrorComp } from "../../../../../chunks/ErrorComp.js";
import "classnames";
import { B as Breadcrumb } from "../../../../../chunks/Breadcrumb.js";
import { B as BreadcrumbItem } from "../../../../../chunks/BreadcrumbItem.js";
/* empty css                                                             */import { a as createProductStore } from "../../../../../chunks/index5.js";
import { D as Drawer, s as sineIn } from "../../../../../chunks/Drawer.js";
import { C as CloseButton } from "../../../../../chunks/CloseButton.js";
import { B as Button, L as Label, I as Input } from "../../../../../chunks/Input.js";
import { C as Card } from "../../../../../chunks/Card.js";
import { R as Radio } from "../../../../../chunks/Radio.js";
import { T as Textarea, F as Fileupload, H as Helper } from "../../../../../chunks/Textarea.js";
import "../../../../../chunks/pocketbase.js";
import { G as GalleryPage } from "../../../../../chunks/GalleryPage.js";
import { L as ListProducts } from "../../../../../chunks/ListProducts.js";
const AddProducts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $createProductStore, $$unsubscribe_createProductStore;
  $$unsubscribe_createProductStore = subscribe(createProductStore, (value) => $createProductStore = value);
  let { data } = $$props;
  let { updateData } = $$props;
  let transitionParams = { x: -320, duration: 200, easing: sineIn };
  let hidden = true;
  let fileInput;
  let files = [];
  let images = [];
  function removeImage(index) {
    images = images.filter((_, i) => i !== index);
    files = files.filter((_, i) => i !== index);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.updateData === void 0 && $$bindings.updateData && updateData !== void 0)
    $$bindings.updateData(updateData);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Button, "Button").$$render($$result, { pill: true }, {}, {
      default: () => {
        return `Add Product`;
      }
    })}
${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        transitionType: "fly",
        transitionParams,
        id: "sidebar1",
        hidden
      },
      {
        hidden: ($$value) => {
          hidden = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex items-center"><h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>ADD PRODUCT
    </h5>
    ${validate_component(CloseButton, "CloseButton").$$render($$result, { class: "mb-4 dark:text-white" }, {}, {})}</div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">All the fields are required.
  </p>

  <p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "name", class: "mb-2" }, {}, {
            default: () => {
              return `Name:`;
            }
          })}
    ${validate_component(Input, "Input").$$render(
            $$result,
            {
              placeholder: "Copper Wire",
              value: $createProductStore.name
            },
            {
              value: ($$value) => {
                $createProductStore.name = $$value;
                $$settled = false;
              }
            },
            {}
          )}</p>
  <p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "price", class: "mb-2" }, {}, {
            default: () => {
              return `Price:`;
            }
          })}
    ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "number",
              placeholder: "1000",
              value: $createProductStore.price
            },
            {
              value: ($$value) => {
                $createProductStore.price = $$value;
                $$settled = false;
              }
            },
            {}
          )}</p>
  <p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "name", class: "mb-2" }, {}, {
            default: () => {
              return `Description:`;
            }
          })}
    ${validate_component(Textarea, "Textarea").$$render(
            $$result,
            {
              placeholder: "your description...",
              value: $createProductStore.description
            },
            {
              value: ($$value) => {
                $createProductStore.description = $$value;
                $$settled = false;
              }
            },
            {}
          )}</p>
  <p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "with_helper", class: "pb-2" }, {}, {
            default: () => {
              return `Upload Product&#39;s Cover Images For Easier Recognition.`;
            }
          })}

    
    ${validate_component(Fileupload, "Fileupload").$$render(
            $$result,
            {
              id: "with_helper",
              class: "mb-2",
              required: true,
              this: fileInput
            },
            {
              this: ($$value) => {
                fileInput = $$value;
                $$settled = false;
              }
            },
            {}
          )}

    ${validate_component(Helper, "Helper").$$render($$result, {}, {}, {
            default: () => {
              return `JPEG,PNG OR SVG (MAX. 2MB).${escape(files?.length)}`;
            }
          })}
    
    ${validate_component(GalleryPage, "GalleryPage").$$render($$result, { images, removeImage }, {}, {})}</p>
  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `<p class="mb-4 font-semibold text-gray-800 dark:text-white">Available:</p>
    <div class="flex gap-4">${validate_component(Radio, "Radio").$$render(
                $$result,
                {
                  value: "true",
                  group: $createProductStore.available
                },
                {
                  group: ($$value) => {
                    $createProductStore.available = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `Yes`;
                  }
                }
              )}
      ${validate_component(Radio, "Radio").$$render(
                $$result,
                {
                  value: "false",
                  group: $createProductStore.available
                },
                {
                  group: ($$value) => {
                    $createProductStore.available = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `No`;
                  }
                }
              )}</div>`;
            }
          })}
  <div class="mb-6 space-y-10"><div class="block mb-2"></div>
    ${`${validate_component(Button, "Button").$$render($$result, { class: "text-center w-full" }, {}, {
            default: () => {
              return `Add This Product`;
            }
          })}`}
    ${``}
    ${``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_createProductStore();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  function updateData(dt) {
    data = dt;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { class: "pt-20 py-8" }, {}, {
    default: () => {
      return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/", home: true }, {}, {
        default: () => {
          return `Home`;
        }
      })}`;
    }
  })}

${validate_component(AddProducts, "AddProducts").$$render($$result, { updateData, data }, {}, {})}
<div>${data?.error ? `
    ${validate_component(ErrorComp, "ErrorComp").$$render($$result, { error: data?.error }, {}, {})}` : ``}
  ${data?.products ? `
    ${validate_component(ListProducts, "ListProducts").$$render($$result, { data }, {}, {})}` : ``}</div>`;
});
export {
  Page as default
};
