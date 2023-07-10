import { c as create_ssr_component, l as subscribe, v as validate_component, f as add_attribute } from "../../../chunks/index3.js";
import { e as bookingFormData } from "../../../chunks/index5.js";
import "classnames";
import { B as Breadcrumb } from "../../../chunks/Breadcrumb.js";
import { B as BreadcrumbItem } from "../../../chunks/BreadcrumbItem.js";
import { L as Label, I as Input, B as Button } from "../../../chunks/Input.js";
import { C as Card } from "../../../chunks/Card.js";
/* empty css                                                       */import { C as Checkbox } from "../../../chunks/Checkbox.js";
import "devalue";
import "../../../chunks/pocketbase.js";
import { E as ErrorComp } from "../../../chunks/ErrorComp.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let booking_data;
  let $bookingFormData, $$unsubscribe_bookingFormData;
  $$unsubscribe_bookingFormData = subscribe(bookingFormData, (value) => $bookingFormData = value);
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    booking_data = JSON.stringify($bookingFormData);
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-ku9w9_START -->${$$result.title = `<title>Q&amp;A Form</title>`, ""}<meta name="description" content="Add Questions And Answers Form"><!-- HEAD_svelte-ku9w9_END -->`, ""}

${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { class: "pt-16 py-8" }, {}, {
      default: () => {
        return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/", home: true }, {}, {
          default: () => {
            return `Home`;
          }
        })}
  ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
          default: () => {
            return `Login`;
          }
        })}`;
      }
    })}


${form?.error ? `${validate_component(ErrorComp, "ErrorComp").$$render($$result, { error: form?.error }, {}, {})}` : ``}

<div class="text-center">${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `<form class="flex flex-col space-y-6" method="POST"><h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Sign in to our platform
      </h3>
      ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
          default: () => {
            return `<span>Email / Username</span>
        ${validate_component(Input, "Input").$$render(
              $$result,
              {
                type: "text",
                name: "email",
                placeholder: "user123",
                required: true,
                value: $bookingFormData.email
              },
              {
                value: ($$value) => {
                  $bookingFormData.email = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })}
      ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
          default: () => {
            return `<span>Your password</span>
        ${validate_component(Input, "Input").$$render(
              $$result,
              {
                type: "password",
                name: "password",
                placeholder: "•••••",
                required: true
              },
              {},
              {}
            )}`;
          }
        })}
      ${$bookingFormData?.name ? `
        <input type="hidden" name="booking_data"${add_attribute("value", booking_data, 0)}>` : ``}
      <div class="flex items-start">${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {
          default: () => {
            return `Remember me`;
          }
        })}
        <a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost password?</a></div>
      ${`${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
          default: () => {
            return `Login to your account`;
          }
        })}`}
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">Not registered? <a href="/register" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a></div></form>`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_bookingFormData();
  return $$rendered;
});
export {
  Page as default
};
