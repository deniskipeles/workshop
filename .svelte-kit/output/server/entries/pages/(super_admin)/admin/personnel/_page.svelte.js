import { c as create_ssr_component, k as each, v as validate_component, g as escape } from "../../../../../chunks/index3.js";
import { E as ErrorComp } from "../../../../../chunks/ErrorComp.js";
import "classnames";
import { C as Card } from "../../../../../chunks/Card.js";
/* empty css                                                             */import { B as Breadcrumb } from "../../../../../chunks/Breadcrumb.js";
import { B as BreadcrumbItem } from "../../../../../chunks/BreadcrumbItem.js";
const PersonnelComp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div>${data?.personnel?.items ? `
    <div class="grid relative md:grid-cols-3 gap-6">${each(data?.personnel?.items, (item) => {
    return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `<h3 class="text-xl font-semibold">${escape(item?.name)}</h3>
          <div class="mb-2"><span class="font-semibold">Email:</span>
            ${escape(item?.email)}</div>
          <div class="mb-2"><span class="font-semibold">Phone:</span>
            ${escape(item?.phone_number)}</div>
          <div class="mb-2"><span class="font-semibold">Price:</span>
            ${escape(item?.price)}</div>
          <div class="mb-2"><span class="font-semibold">Discount:</span>
            ${escape(item?.discount)}%
          </div>
        `;
      }
    })}`;
  })}</div>` : ``}
  ${data?.personnel?.items.length == 0 ? `<p>No Products Found.</p>` : ``}</div>`;
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

<div>${data?.error ? `${validate_component(ErrorComp, "ErrorComp").$$render($$result, { error: data?.error }, {}, {})}` : ``}
  ${data?.personnel ? `
    ${validate_component(PersonnelComp, "PersonnelComp").$$render($$result, { data }, {}, {})}` : ``}</div>`;
});
export {
  Page as default
};
