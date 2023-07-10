import { c as create_ssr_component, g as escape, f as add_attribute, v as validate_component } from "../../chunks/index3.js";
import { E as ErrorComp } from "../../chunks/ErrorComp.js";
import { p as pb } from "../../chunks/pocketbase.js";
import "classnames";
import { B as Breadcrumb } from "../../chunks/Breadcrumb.js";
import { B as BreadcrumbItem } from "../../chunks/BreadcrumbItem.js";
/* empty css                                                    */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let background;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  background = data?.company?.logo ? pb.files.getUrl(data?.company, data?.company?.logo, { thumb: "100x100" }) : "/images/img1.jpg";
  return `${$$result.head += `<!-- HEAD_svelte-vfaedc_START -->${$$result.title = `<title>${escape(data?.company?.name)}</title>`, ""}<meta name="description"${add_attribute("content", data?.company?.description, 0)}><!-- HEAD_svelte-vfaedc_END -->`, ""}

${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { class: "pt-20 py-8" }, {}, {
    default: () => {
      return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/", home: true }, {}, {
        default: () => {
          return `Home`;
        }
      })}`;
    }
  })}

${data?.error ? `${validate_component(ErrorComp, "ErrorComp").$$render($$result, { error: data?.error }, {}, {})}` : `${data?.company?.page_bg ? `<div class="dark:text-white w-full h-full bg-center bg-cover opacity-50 bg-slate-800"${add_attribute("style", `background-image: url(${background});`, 0)}><!-- HTML_TAG_START -->${data?.company?.about_us}<!-- HTML_TAG_END --></div>` : `<!-- HTML_TAG_START -->${data?.company?.about_us}<!-- HTML_TAG_END -->`}`}`;
});
export {
  Page as default
};
