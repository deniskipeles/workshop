import { c as create_ssr_component, l as subscribe, v as validate_component, g as escape, f as add_attribute } from "../../../chunks/index3.js";
import { p as pb } from "../../../chunks/pocketbase.js";
import { w as writable } from "../../../chunks/index2.js";
import "classnames";
import { B as Breadcrumb } from "../../../chunks/Breadcrumb.js";
import { B as BreadcrumbItem } from "../../../chunks/BreadcrumbItem.js";
import { L as Label, I as Input, B as Button } from "../../../chunks/Input.js";
import { C as Card } from "../../../chunks/Card.js";
/* empty css                                                       */import { F as Fileupload, H as Helper, T as Textarea } from "../../../chunks/Textarea.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $photo, $$unsubscribe_photo;
  let { data } = $$props;
  data?.user?.username;
  const photo = writable(data?.user?.avatar ? pb.files.getUrl(data?.user, data?.user?.avatar, { thumb: "100x100" }) : "/images/img1.jpg");
  $$unsubscribe_photo = subscribe(photo, (value) => $photo = value);
  const user = writable(data?.user);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  new FormData();
  let fileInput;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { class: "pt-20 py-8" }, {}, {
      default: () => {
        return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/", home: true }, {}, {
          default: () => {
            return `Home`;
          }
        })}
  ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
          default: () => {
            return `Account`;
          }
        })}`;
      }
    })}

<div><div class="grid relative md:grid-cols-3 gap-6">${validate_component(Card, "Card").$$render($$result, { padding: "sm" }, {}, {
      default: () => {
        return `<p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "name2", class: "mb-2" }, {}, {
          default: () => {
            return `Name:`;
          }
        })}
        ${escape($user?.name)}</p>
      <p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "name2", class: "mb-2" }, {}, {
          default: () => {
            return `Username:`;
          }
        })}
        ${escape($user?.username)}</p>
      <p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "name2", class: "mb-2" }, {}, {
          default: () => {
            return `Verified:`;
          }
        })}
        ${escape($user?.verified ? "yes" : "No")}</p>
      <p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "name2", class: "mb-2" }, {}, {
          default: () => {
            return `Email:`;
          }
        })}
        ${escape($user?.email ?? "No Email")}</p>`;
      }
    })}

    ${validate_component(Card, "Card").$$render($$result, { padding: "sm" }, {}, {
      default: () => {
        return `
      <img${add_attribute("src", $photo, 0)}>
      ${validate_component(Label, "Label").$$render(
          $$result,
          {
            for: "fileInput",
            class: "pb-2 text-xs font-thin"
          },
          {},
          {
            default: () => {
              return `${escape(photo ? "Update Your Image" : "Upload Your Image")}`;
            }
          }
        )}
      ${`${validate_component(Fileupload, "Fileupload").$$render(
          $$result,
          {
            id: "fileInput",
            class: "mb-2",
            required: true,
            this: fileInput
          },
          {
            this: ($$value) => {
              fileInput = $$value;
              $$settled = false;
            }
          },
          {}
        )}
        ${validate_component(Helper, "Helper").$$render($$result, {}, {}, {
          default: () => {
            return `PNG, JPEG, SVG or WEBP (MAX. 2MB).`;
          }
        })}`}`;
      }
    })}
    ${validate_component(Card, "Card").$$render($$result, { padding: "sm" }, {}, {
      default: () => {
        return `<p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "name1", class: "mb-2" }, {}, {
          default: () => {
            return `Username:`;
          }
        })}
        ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "text",
            id: "name",
            placeholder: "example@gmail.com",
            value: $user.username
          },
          {
            value: ($$value) => {
              $user.username = $$value;
              $$settled = false;
            }
          },
          {}
        )}
        ${validate_component(Helper, "Helper").$$render($$result, { color: "green" }, {}, {
          default: () => {
            return `${escape("Use this username")}.`;
          }
        })}</p>
      <p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "name1", class: "mb-2" }, {}, {
          default: () => {
            return `Name:`;
          }
        })}
        ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "text",
            id: "name",
            placeholder: "example@gmail.com",
            value: $user.name
          },
          {
            value: ($$value) => {
              $user.name = $$value;
              $$settled = false;
            }
          },
          {}
        )}</p>
      <p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "name", class: "mb-2" }, {}, {
          default: () => {
            return `About Me:`;
          }
        })}
        ${validate_component(Textarea, "Textarea").$$render(
          $$result,
          {
            type: "text",
            id: "description",
            placeholder: "Anything about you...",
            value: $user.description
          },
          {
            value: ($$value) => {
              $user.description = $$value;
              $$settled = false;
            }
          },
          {}
        )}</p>`;
      }
    })}

    ${validate_component(Card, "Card").$$render($$result, { padding: "sm" }, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { class: "text-xl font-bold" }, {}, {
          default: () => {
            return `Contacts :`;
          }
        })}
      <p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "name1", class: "mb-2" }, {}, {
          default: () => {
            return `Email:`;
          }
        })}
        ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "email",
            id: "email",
            placeholder: "example@gmail.com",
            value: $user.email
          },
          {
            value: ($$value) => {
              $user.email = $$value;
              $$settled = false;
            }
          },
          {}
        )}</p>
      <p class="mb-4 font-semibold text-gray-900 dark:text-white">${validate_component(Label, "Label").$$render($$result, { for: "phone1", class: "mb-2" }, {}, {
          default: () => {
            return `Phone Number:`;
          }
        })}
        ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "text",
            id: "phone",
            placeholder: "+254 712345678",
            value: $user.phone_number
          },
          {
            value: ($$value) => {
              $user.phone_number = $$value;
              $$settled = false;
            }
          },
          {}
        )}</p>`;
      }
    })}</div></div>
<div class="mb-6 block"></div>
${`${validate_component(Button, "Button").$$render($$result, { class: "mr-2 w-full" }, {}, {
      default: () => {
        return `Update Account Data`;
      }
    })}`}

${``}
${``}`;
  } while (!$$settled);
  $$unsubscribe_user();
  $$unsubscribe_photo();
  return $$rendered;
});
export {
  Page as default
};
