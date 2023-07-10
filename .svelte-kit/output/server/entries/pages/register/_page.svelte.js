import { c as create_ssr_component, l as subscribe, v as validate_component } from "../../../chunks/index3.js";
import "devalue";
import { E as ErrorComp } from "../../../chunks/ErrorComp.js";
import "../../../chunks/pocketbase.js";
import { e as bookingFormData } from "../../../chunks/index5.js";
import "classnames";
import { B as Breadcrumb } from "../../../chunks/Breadcrumb.js";
import { B as BreadcrumbItem } from "../../../chunks/BreadcrumbItem.js";
import { L as Label, I as Input, B as Button } from "../../../chunks/Input.js";
import { C as Card } from "../../../chunks/Card.js";
/* empty css                                                       */import { C as Checkbox } from "../../../chunks/Checkbox.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1xoea98_START -->${$$result.title = `<title>Registration Form</title>`, ""}<meta name="description" content="Add Questions And Answers Form"><!-- HEAD_svelte-1xoea98_END -->`, ""}

${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { class: "pt-16 py-8" }, {}, {
      default: () => {
        return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/", home: true }, {}, {
          default: () => {
            return `Home`;
          }
        })}
  ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
          default: () => {
            return `Register`;
          }
        })}`;
      }
    })}

${form?.error ? `${validate_component(ErrorComp, "ErrorComp").$$render($$result, { error: form?.error }, {}, {})}` : ``}

${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `<form class="flex flex-col space-y-6" method="POST"><h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Create Your Account
    </h3>
    ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
          default: () => {
            return `<span>Email</span>
      ${validate_component(Input, "Input").$$render(
              $$result,
              {
                type: "email",
                name: "email",
                placeholder: "name@company.com",
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
            return `<span>Your Password</span>
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
    ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
          default: () => {
            return `<span>Confirm Password</span>
      ${validate_component(Input, "Input").$$render(
              $$result,
              {
                type: "password",
                name: "passwordConfirm",
                placeholder: "•••••",
                required: true
              },
              {},
              {}
            )}`;
          }
        })}
    <div class="flex items-start">${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {
          default: () => {
            return `Remember me`;
          }
        })}
      <a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost password?</a></div>
    ${`${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
          default: () => {
            return `Create your account`;
          }
        })}`}
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">Registered? <a href="/login" class="text-blue-700 hover:underline dark:text-blue-500">login to your account</a></div></form>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_bookingFormData();
  return $$rendered;
});
export {
  Page as default
};
