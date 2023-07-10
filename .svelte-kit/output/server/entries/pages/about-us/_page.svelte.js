import { c as create_ssr_component, v as validate_component, g as escape } from "../../../chunks/index3.js";
import "classnames";
import { B as Breadcrumb } from "../../../chunks/Breadcrumb.js";
import { B as BreadcrumbItem } from "../../../chunks/BreadcrumbItem.js";
/* empty css                                                       */let hostelDescription = "Welcome to Our Workshop! We are a cozy and friendly services located in the heart of the city. Our mission is to provide a affordable and quality services. With our convenient location, excellent facilities, and dedicated staff, we strive to make your experience with us unforgettable.";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let hostelName = data?.company?.name;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { class: "pt-20 py-8" }, {}, {
    default: () => {
      return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/", home: true }, {}, {
        default: () => {
          return `Home`;
        }
      })}
  ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
        default: () => {
          return `About Us`;
        }
      })}`;
    }
  })}

<div class="max-w-lg mx-auto"><h2 class="text-2xl font-bold mb-4">About ${escape(hostelName)}</h2>

  <p class="text-gray-600">${escape(hostelDescription)}</p></div>`;
});
export {
  Page as default
};
