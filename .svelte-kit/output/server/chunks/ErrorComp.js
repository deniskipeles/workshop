import { c as create_ssr_component, g as escape, k as each } from "./index3.js";
const ErrorComp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  return `<p class="text-xl text-red-800 dark:text-red-900">ERROR:</p>

<div class="text-red-800 dark:text-red-900"><p>Code Error: ${escape(error?.response?.code)}</p>
  <p>Error Message: ${escape(error?.response?.message)}</p>
  ${error?.response?.data ? `<ul>${each(Object.keys(error?.response?.data), (key) => {
    return `<li>${escape(key)}: ${escape(error?.response?.data[key].message)}</li>`;
  })}</ul>` : ``}</div>`;
});
export {
  ErrorComp as E
};
