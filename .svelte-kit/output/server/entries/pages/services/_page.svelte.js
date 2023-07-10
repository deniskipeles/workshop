import { c as create_ssr_component, l as subscribe, v as validate_component, g as escape, k as each, f as add_attribute } from "../../../chunks/index3.js";
import { f as createServiceStore } from "../../../chunks/index5.js";
import "classnames";
import { D as Drawer, s as sineIn } from "../../../chunks/Drawer.js";
import { B as Button, L as Label, I as Input } from "../../../chunks/Input.js";
import { C as Card } from "../../../chunks/Card.js";
/* empty css                                                       */import { T as Textarea, F as Fileupload, H as Helper } from "../../../chunks/Textarea.js";
import { p as pb } from "../../../chunks/pocketbase.js";
import { G as GalleryPage } from "../../../chunks/GalleryPage.js";
import { E as ErrorComp } from "../../../chunks/ErrorComp.js";
import { B as Breadcrumb } from "../../../chunks/Breadcrumb.js";
import { B as BreadcrumbItem } from "../../../chunks/BreadcrumbItem.js";
const AddService = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $createServiceStore, $$unsubscribe_createServiceStore;
  $$unsubscribe_createServiceStore = subscribe(createServiceStore, (value) => $createServiceStore = value);
  let transitionParams = { x: -320, duration: 200, easing: sineIn };
  let hidden = true;
  let fileInput;
  let files = [];
  let images = [];
  function removeImage(index) {
    images = images.filter((_, i) => i !== index);
    files = files.filter((_, i) => i !== index);
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Button, "Button").$$render($$result, { pill: true }, {}, {
      default: () => {
        return `Create A Service Record`;
      }
    })}
${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        transitionType: "fly",
        transitionParams,
        activateClickOutside: true,
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
          return `<div class="flex items-center"><h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>CREATE SERVICE RECORD
    </h5></div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Add the service that this company provide.
  </p>
  ${validate_component(Card, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `<p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "name", class: "mb-2" }, {}, {
                default: () => {
                  return `Service Name:`;
                }
              })}
      ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  placeholder: "Wiring",
                  value: $createServiceStore.name
                },
                {
                  value: ($$value) => {
                    $createServiceStore.name = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</p>
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "name", class: "mb-2" }, {}, {
                default: () => {
                  return `About Service:`;
                }
              })}
      ${validate_component(Textarea, "Textarea").$$render(
                $$result,
                {
                  type: "text",
                  id: "description",
                  placeholder: "Anything about service...",
                  value: $createServiceStore.description
                },
                {
                  value: ($$value) => {
                    $createServiceStore.description = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</p>
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "name", class: "mb-2" }, {}, {
                default: () => {
                  return `Service Price:`;
                }
              })}
      ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "number",
                  placeholder: "1000",
                  value: $createServiceStore.price
                },
                {
                  value: ($$value) => {
                    $createServiceStore.price = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</p>
    <p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "with_helper", class: "pb-2" }, {}, {
                default: () => {
                  return `Upload Cover Images For Easier Recognition.`;
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

    <div class="mb-6 space-y-10"><div class="block mb-2"></div>
      ${`${validate_component(Button, "Button").$$render($$result, { class: "text-center w-full" }, {}, {
                default: () => {
                  return `Save This Service`;
                }
              })}`}
      ${``}
      ${``}</div>`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_createServiceStore();
  return $$rendered;
});
const ServicesPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const returnImageUrl = (record, imgUrl) => {
    imgUrl = imgUrl ? pb.files.getUrl(record, imgUrl, { thumb: "100x100" }) : "/images/img1.jpg";
    return imgUrl;
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="p-4 dark:bg-gray-900 dark:text-white bg-white text-black"><h1 class="text-2xl font-bold mb-4">Our Services</h1>
  ${data?.services ? `
    ${each(data?.services?.items, (item) => {
    return `<div class="mb-4"><h2 class="text-xl font-bold">${escape(item?.name)}</h2>
        <p>Available: ${escape(item?.available ? "Yes" : "No")}</p>
        <p>Description: ${escape(item?.description)}</p>

        <h3 class="text-lg font-bold mt-4">Photos:</h3>
        <ul class="list-disc ml-6">${each(item?.photos ?? [], (photo) => {
      return `
            <li><img class="max-w-xs mb-2"${add_attribute("src", returnImageUrl(item, photo), 0)} alt="Service Photo">
            </li>`;
    })}</ul>

        <hr class="my-4">
      </div>`;
  })}` : `
    ${data?.error ? `
      ${validate_component(ErrorComp, "ErrorComp").$$render($$result, { error: data?.error }, {}, {})}` : ``}`}

  ${data?.services?.items?.length === 0 ? `<p>No additional services found.</p>` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
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
<div>${data?.user?.admin ? `${validate_component(AddService, "AddService").$$render($$result, {}, {}, {})}` : ``}
  ${validate_component(ServicesPage, "ServicesPage").$$render($$result, { data }, {}, {})}</div>`;
});
export {
  Page as default
};
