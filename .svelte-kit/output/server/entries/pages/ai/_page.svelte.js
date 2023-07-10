import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_object, e as escape_attribute_value, k as each, f as add_attribute, l as subscribe, v as validate_component, g as escape } from "../../../chunks/index3.js";
import { b as ai_input_store, d as ai_result_store } from "../../../chunks/index5.js";
import classNames from "classnames";
import { B as Breadcrumb } from "../../../chunks/Breadcrumb.js";
import { B as BreadcrumbItem } from "../../../chunks/BreadcrumbItem.js";
/* empty css                                                       */const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let divClass;
  let $$restProps = compute_rest_props($$props, ["items"]);
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  divClass = classNames("grid", $$props.class);
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(divClass) }], {})}>${items.length ? each(items, (item) => {
    return `${slots.default ? slots.default({ item }) : `
      <div><img${add_attribute("src", item.src, 0)}${add_attribute("alt", item.alt, 0)} class="h-auto max-w-full rounded-lg"></div>
    `}`;
  }) : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
function getImages(images) {
  return images.map((url) => ({ src: url }));
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $ai_input_store, $$unsubscribe_ai_input_store;
  let $ai_result_store, $$unsubscribe_ai_result_store;
  $$unsubscribe_ai_input_store = subscribe(ai_input_store, (value) => $ai_input_store = value);
  $$unsubscribe_ai_result_store = subscribe(ai_result_store, (value) => $ai_result_store = value);
  let { data } = $$props;
  console.log(data?.context);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_ai_input_store();
  $$unsubscribe_ai_result_store();
  return `${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { class: "pt-20 py-8" }, {}, {
    default: () => {
      return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/", home: true }, {}, {
        default: () => {
          return `Home`;
        }
      })}
  ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
        default: () => {
          return `AI`;
        }
      })}`;
    }
  })}

<div><div class="relative"><div id="inputContainer" class="border w-full border-gray-300 rounded p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" contenteditable placeholder="Enter you question.." style="min-height: 1rem; max-height: 10rem;">${(($$value) => $$value === void 0 ? `` : $$value)($ai_input_store.question)}</div>
    ${`<button class="absolute right-0 flex items-center justify-center bg-blue-500 text-white rounded-full w-10 h-10 focus:outline-none bottom-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>`}</div></div>

${``}

<pre class="bg-gray-100 text-lg rounded p-4 shadow-md whitespace-pre-wrap">  ${escape($ai_result_store.answer)}
  ${$ai_result_store.images.length > 0 ? `${validate_component(Gallery, "Gallery").$$render(
    $$result,
    {
      class: "gap-2 grid-cols-2",
      items: getImages($ai_result_store.images)
    },
    {},
    {}
  )}` : ``}
 </pre>`;
});
export {
  Page as default
};
