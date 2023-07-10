import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { E as ErrorComp } from "../../../../../chunks/ErrorComp.js";
import "classnames";
import { B as Breadcrumb } from "../../../../../chunks/Breadcrumb.js";
import { B as BreadcrumbItem } from "../../../../../chunks/BreadcrumbItem.js";
/* empty css                                                             */import "../../../../../chunks/pocketbase.js";
import { J as JobsPage } from "../../../../../chunks/JobsPage.js";
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
  ${data?.jobs ? `
    ${validate_component(JobsPage, "JobsPage").$$render($$result, { data }, {}, {})}` : ``}</div>`;
});
export {
  Page as default
};
