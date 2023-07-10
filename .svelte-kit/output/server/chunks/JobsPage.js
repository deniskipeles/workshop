import { c as create_ssr_component, v as validate_component, k as each, g as escape } from "./index3.js";
import "classnames";
import { C as Card } from "./Card.js";
/* empty css                                         */import { E as ErrorComp } from "./ErrorComp.js";
const ChevronIcon_svelte_svelte_type_style_lang = "";
const ClearIcon_svelte_svelte_type_style_lang = "";
const LoadingIcon_svelte_svelte_type_style_lang = "";
const Select_svelte_svelte_type_style_lang = "";
const JobsPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div>${data?.error ? `
    ${validate_component(ErrorComp, "ErrorComp").$$render($$result, { error: data?.error }, {}, {})}` : ``}
  ${data?.jobs?.items ? `
    <div class="grid relative md:grid-cols-3 gap-6">${each(data?.jobs?.items, (item) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        href: `/${data?.user?.admin ? "admin" : "client"}/jobs/${item?.id}`
      },
      {},
      {
        default: () => {
          return `<h3 class="text-xl font-semibold">Employer: ${escape(item?.employer_name)}</h3>
          <div class="mb-2"><span class="font-semibold">Estimated Full Payment:</span>
            ${escape(item?.estimated_full_payment)}</div>
          <div class="mb-2"><span class="font-semibold">Down Payment:</span>
            ${escape(item?.down_payment)}</div>

          <div class="mb-2"><span class="font-semibold">Requested Services:</span>
            <ul>${each(
            Array.isArray(item?.expand?.services) ? item?.expand?.services : [],
            (service) => {
              return `
                <li>${escape(service?.name)}</li>
                `;
            }
          )}
            </ul></div>
          
        `;
        }
      }
    )}`;
  })}</div>` : ``}
  ${data?.jobs?.items?.length === 0 ? `<p>No Jobs found.</p>` : ``}</div>`;
});
export {
  JobsPage as J
};
