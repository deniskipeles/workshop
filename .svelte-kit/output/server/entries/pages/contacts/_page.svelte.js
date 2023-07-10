import { c as create_ssr_component, v as validate_component, k as each, g as escape } from "../../../chunks/index3.js";
import { E as ErrorComp } from "../../../chunks/ErrorComp.js";
import "../../../chunks/index.js";
import "classnames";
import { B as Breadcrumb } from "../../../chunks/Breadcrumb.js";
import { B as BreadcrumbItem } from "../../../chunks/BreadcrumbItem.js";
import { C as Card } from "../../../chunks/Card.js";
/* empty css                                                       */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
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
          return `Contacts`;
        }
      })}`;
    }
  })}

<div><h2 class="text-2xl font-bold mb-4">Contact Information</h2>
  ${data?.error ? `${validate_component(ErrorComp, "ErrorComp").$$render($$result, { error: data?.error }, {}, {})}` : `
    <div class="grid relative md:grid-cols-3 gap-6">${each(data?.contacts?.items, (contact) => {
    return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `<div><h3 class="text-lg font-bold">${escape(contact.name)}</h3>
            <p class="text-gray-600">${escape(contact.position)}</p>
            <p>Email: <a href="${"mailto:" + escape(contact.email, true)}">${escape(contact.email)}</a></p>
            <p>Phone: <a href="${"tel:" + escape(contact.phone_number, true)}">${escape(contact.phone_number)}</a></p></div>
        `;
      }
    })}`;
  })}</div>`}</div>`;
});
export {
  Page as default
};
