import { c as create_ssr_component, k as each, v as validate_component, f as add_attribute, g as escape } from "./index3.js";
import "classnames";
import { C as Card } from "./Card.js";
/* empty css                                         */import { g as getPbImageUrl } from "./index4.js";
const ListProducts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div>${data?.products?.items ? `
    <div class="grid relative md:grid-cols-3 gap-6">${each(data?.products?.items, (item) => {
    return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `
          <img${add_attribute("src", getPbImageUrl(item, item?.photos[0], "200x200"), 0)}>
          <h3 class="text-xl font-semibold">${escape(item?.name)}</h3>
          <div class="mb-2"><span class="font-semibold">Color:</span>
            ${escape(JSON.stringify(item?.colors))}</div>
          <div class="mb-2"><span class="font-semibold">Material:</span>
            ${escape(JSON.stringify(item?.material))}</div>
          <div class="mb-2"><span class="font-semibold">Price:</span>
            ${escape(item?.price)}</div>
          <div class="mb-2"><span class="font-semibold">Discount:</span>
            ${escape(item?.discount)}%
          </div>
        `;
      }
    })}`;
  })}</div>` : ``}
  ${data?.products?.items.length == 0 ? `<p>No Products Found.</p>` : ``}</div>`;
});
export {
  ListProducts as L
};
