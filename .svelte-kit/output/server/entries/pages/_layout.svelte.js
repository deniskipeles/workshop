import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, g as escape, v as validate_component, h as getContext, i as is_void, s as setContext, j as compute_slots, k as each, l as subscribe } from "../../chunks/index3.js";
import { q as quintOut, s as sineIn, D as Drawer } from "../../chunks/Drawer.js";
import { p as page } from "../../chunks/stores.js";
import classNames from "classnames";
import { T as ToolbarButton, C as CloseButton } from "../../chunks/CloseButton.js";
/* empty css                                                    */import { F as Frame } from "../../chunks/Frame.js";
import { p as pb, c as currentUser } from "../../chunks/pocketbase.js";
const ChevronDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 16.2803C12.2374 16.5732 11.7626 16.5732 11.4697 16.2803L3.96967 8.78033C3.67678 8.48744 3.67678 8.01256 3.96967 7.71967C4.26256 7.42678 4.73744 7.42678 5.03033 7.71967L12 14.6893L18.9697 7.71967C19.2626 7.42678 19.7374 7.42678 20.0303 7.71967C20.3232 8.01256 20.3232 8.48744 20.0303 8.78033L12.5303 16.2803Z" fill="${color}"/> `;
  let { ariaLabel = "chevron down" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const ChevronUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M4.5 15.75L12 8.25L19.5 15.75" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 7.71967C11.7626 7.42678 12.2374 7.42678 12.5303 7.71967L20.0303 15.2197C20.3232 15.5126 20.3232 15.9874 20.0303 16.2803C19.7374 16.5732 19.2626 16.5732 18.9697 16.2803L12 9.31066L5.03033 16.2803C4.73744 16.5732 4.26256 16.5732 3.96967 16.2803C3.67678 15.9874 3.67678 15.5126 3.96967 15.2197L11.4697 7.71967Z" fill="${color}"/> `;
  let { ariaLabel = "chevron up" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const DarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass"]);
  let { btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" } = $$props;
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  return `<button${spread(
    [
      { "aria-label": "Dark mode" },
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(btnClass, $$props.class))
      }
    ],
    {}
  )}><span class="hidden dark:block">${slots.lightIcon ? slots.lightIcon({}) : `
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    `}</span>
  <span class="block dark:hidden">${slots.darkIcon ? slots.darkIcon({}) : `
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    `}</span></button>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["customClass", "footerType"]);
  let { customClass = "" } = $$props;
  let { footerType = "default" } = $$props;
  if ($$props.customClass === void 0 && $$bindings.customClass && customClass !== void 0)
    $$bindings.customClass(customClass);
  if ($$props.footerType === void 0 && $$bindings.footerType && footerType !== void 0)
    $$bindings.footerType(footerType);
  return `<footer${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(
          {
            "bg-gray-800": footerType === "sitemap",
            "p-4 bg-white sm:p-6 dark:bg-gray-800": footerType === "socialmedia",
            "p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800": footerType === "logo",
            "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800": footerType === "default",
            [`${customClass}`]: footerType === "custom"
          },
          $$props.class
        ))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</footer>`;
});
const FooterBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["aClass", "spanClass", "imgClass", "href", "src", "alt", "name", "target"]);
  let { aClass = "flex items-center" } = $$props;
  let { spanClass: spanClass2 = "self-center text-2xl font-semibold whitespace-nowrap dark:text-white" } = $$props;
  let { imgClass = "mr-3 h-8" } = $$props;
  let { href = "" } = $$props;
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  let { name = "" } = $$props;
  let { target = void 0 } = $$props;
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass2 !== void 0)
    $$bindings.spanClass(spanClass2);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `${href ? `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      {
        class: escape_attribute_value(classNames(aClass, $$props.class))
      }
    ],
    {}
  )}><img${add_attribute("src", src, 0)}${add_attribute("class", imgClass, 0)}${add_attribute("alt", alt, 0)}>
    <span${add_attribute("class", spanClass2, 0)}>${escape(name)}</span>
    ${slots.default ? slots.default({}) : ``}</a>` : `<img${spread(
    [
      escape_object($$restProps),
      { src: escape_attribute_value(src) },
      { class: escape_attribute_value(imgClass) },
      { alt: escape_attribute_value(alt) }
    ],
    {}
  )}>`}`;
});
const FooterCopyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["spanClass", "aClass", "year", "href", "by", "target", "copyrightMessage"]);
  let { spanClass: spanClass2 = "block text-sm text-gray-500 sm:text-center dark:text-gray-400" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { year = (/* @__PURE__ */ new Date()).getFullYear() } = $$props;
  let { href = "" } = $$props;
  let { by = "" } = $$props;
  let { target = void 0 } = $$props;
  let { copyrightMessage = "All Rights Reserved." } = $$props;
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass2 !== void 0)
    $$bindings.spanClass(spanClass2);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.by === void 0 && $$bindings.by && by !== void 0)
    $$bindings.by(by);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.copyrightMessage === void 0 && $$bindings.copyrightMessage && copyrightMessage !== void 0)
    $$bindings.copyrightMessage(copyrightMessage);
  return `<span${add_attribute("class", classNames(spanClass2, $$props.class), 0)}>© ${escape(year)}
  ${href ? `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      { class: escape_attribute_value(aClass) }
    ],
    {}
  )}>${escape(by)}</a>` : `<span class="ml-1">${escape(by)}</span>`}
  ${escape(copyrightMessage)}</span>`;
});
const FooterIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "ariaLabel", "aClass", "target"]);
  let { href = "" } = $$props;
  let { ariaLabel = "" } = $$props;
  let { aClass = "text-gray-500 hover:text-gray-900 dark:hover:text-white" } = $$props;
  let { target = void 0 } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `${href ? `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        class: escape_attribute_value(classNames(aClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const FooterLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["liClass", "aClass", "href", "target"]);
  let { liClass = "mr-4 last:mr-0 md:mr-6" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { href = "" } = $$props;
  let { target = void 0 } = $$props;
  if ($$props.liClass === void 0 && $$bindings.liClass && liClass !== void 0)
    $$bindings.liClass(liClass);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<li${add_attribute("class", classNames(liClass, $$props.class), 0)}><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { class: escape_attribute_value(aClass) },
      { target: escape_attribute_value(target) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a></li>`;
});
const FooterLinkGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ulClass: ulClass2 = "text-gray-600 dark:text-gray-400" } = $$props;
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass2 !== void 0)
    $$bindings.ulClass(ulClass2);
  return `<ul${add_attribute("class", classNames(ulClass2, $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["navClass", "navDivClass", "fluid", "color"]);
  let { navClass = "px-2 sm:px-4 py-2.5 w-full" } = $$props;
  let { navDivClass = "mx-auto flex flex-wrap justify-between items-center " } = $$props;
  let { fluid = false } = $$props;
  let { color = "navbar" } = $$props;
  let hidden = true;
  let toggle = () => {
    hidden = !hidden;
  };
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass !== void 0)
    $$bindings.navClass(navClass);
  if ($$props.navDivClass === void 0 && $$bindings.navDivClass && navDivClass !== void 0)
    $$bindings.navDivClass(navDivClass);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `${validate_component(Frame, "Frame").$$render(
    $$result,
    Object.assign({}, { tag: "nav" }, { color }, $$restProps, {
      class: classNames(navClass, $$props.class)
    }),
    {},
    {
      default: () => {
        return `<div${add_attribute("class", classNames(navDivClass, fluid || "container"), 0)}>${slots.default ? slots.default({ hidden, toggle }) : ``}</div>`;
      }
    }
  )}`;
});
const NavBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href"]);
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames("flex items-center", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.75C3 6.33579 3.33579 6 3.75 6H20.25C20.6642 6 21 6.33579 21 6.75C21 7.16421 20.6642 7.5 20.25 7.5H3.75C3.33579 7.5 3 7.16421 3 6.75ZM3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12ZM3 17.25C3 16.8358 3.33579 16.5 3.75 16.5H20.25C20.6642 16.5 21 16.8358 21 17.25C21 17.6642 20.6642 18 20.25 18H3.75C3.33579 18 3 17.6642 3 17.25Z" fill="${color}"/> `;
  let { ariaLabel = "bars 3" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const NavHamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass"]);
  let { btnClass = "ml-3 md:hidden" } = $$props;
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render(
    $$result,
    Object.assign({}, { name: "Open main menu" }, $$restProps, {
      class: classNames(btnClass, $$props.class)
    }),
    {},
    {
      default: () => {
        return `${validate_component(Menu, "Menu").$$render($$result, { class: "h-6 w-6 shrink-0" }, {}, {})}`;
      }
    }
  )}`;
});
const NavLi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "active", "activeClass", "nonActiveClass"]);
  let { href = "" } = $$props;
  let { active = false } = $$props;
  let { activeClass = void 0 } = $$props;
  let { nonActiveClass = void 0 } = $$props;
  const context = getContext("navbar") ?? {};
  let liClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  liClass = classNames(
    "block py-2 pr-4 pl-3 md:p-0 rounded md:border-0",
    active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass,
    $$props.class
  );
  return `<li>${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        { class: escape_attribute_value(liClass) }
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}</li>`;
});
const NavUl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass", "ulClass", "hidden", "slideParams", "activeClass", "nonActiveClass"]);
  let { divClass: divClass2 = "w-full md:block md:w-auto" } = $$props;
  let { ulClass: ulClass2 = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" } = $$props;
  let { hidden = true } = $$props;
  let { slideParams = {
    delay: 250,
    duration: 500,
    easing: quintOut
  } } = $$props;
  let { activeClass = "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" } = $$props;
  let { nonActiveClass = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" } = $$props;
  setContext("navbar", { activeClass, nonActiveClass });
  let _divClass;
  let _ulClass;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass2 !== void 0)
    $$bindings.divClass(divClass2);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass2 !== void 0)
    $$bindings.ulClass(ulClass2);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.slideParams === void 0 && $$bindings.slideParams && slideParams !== void 0)
    $$bindings.slideParams(slideParams);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  _divClass = classNames(divClass2, $$props.class);
  _ulClass = classNames(
    ulClass2,
    // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
    $$props.class
  );
  return `${!hidden ? `<div${spread([escape_object($$restProps), { class: escape_attribute_value(_divClass) }], {})}>${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: _ulClass
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div>` : `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { hidden: hidden || null }
    ],
    {}
  )}><ul${add_attribute("class", _ulClass, 0)}>${slots.default ? slots.default({}) : ``}</ul></div>`}`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["asideClass"]);
  let { asideClass = "w-64" } = $$props;
  if ($$props.asideClass === void 0 && $$bindings.asideClass && asideClass !== void 0)
    $$bindings.asideClass(asideClass);
  return `<aside${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(asideClass, $$props.class))
      },
      { "aria-label": "Sidebar" }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</aside>`;
});
const SidebarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["aClass", "href", "label", "spanClass", "activeClass", "active"]);
  let $$slots = compute_slots(slots);
  let { aClass = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { href = "" } = $$props;
  let { label = "" } = $$props;
  let { spanClass: spanClass2 = "ml-3" } = $$props;
  let { activeClass = "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { active = false } = $$props;
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass2 !== void 0)
    $$bindings.spanClass(spanClass2);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  return `<li><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(classNames(active ? activeClass : aClass, $$props.class))
      }
    ],
    {}
  )}>${slots.icon ? slots.icon({}) : ``}
    <span${add_attribute("class", spanClass2, 0)}>${escape(label)}</span>
    ${$$slots.subtext ? `${slots.subtext ? slots.subtext({}) : ``}` : ``}</a></li>`;
});
const SidebarDropdownWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "btnClass",
    "label",
    "spanClass",
    "ulClass",
    "transitionType",
    "transitionParams",
    "isOpen"
  ]);
  let $$slots = compute_slots(slots);
  let { btnClass = "flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" } = $$props;
  let { label = "" } = $$props;
  let { spanClass: spanClass2 = "flex-1 ml-3 text-left whitespace-nowrap" } = $$props;
  let { ulClass: ulClass2 = "py-2 space-y-2" } = $$props;
  let { transitionType = "slide" } = $$props;
  let { transitionParams = {} } = $$props;
  let { isOpen = false } = $$props;
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass2 !== void 0)
    $$bindings.spanClass(spanClass2);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass2 !== void 0)
    $$bindings.ulClass(ulClass2);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  return `<li><button${spread(
    [
      escape_object($$restProps),
      { type: "button" },
      {
        class: escape_attribute_value(classNames(btnClass, $$props.class))
      },
      { "aria-controls": "sidebar-dropdown" }
    ],
    {}
  )}>${slots.icon ? slots.icon({}) : ``}
    <span${add_attribute("class", spanClass2, 0)}>${escape(label)}</span>
    ${isOpen ? `${$$slots.arrowup ? `${slots.arrowup ? slots.arrowup({}) : ``}` : `${validate_component(ChevronUp, "ChevronUp").$$render($$result, {}, {}, {})}`}` : `${$$slots.arrowdown ? `${slots.arrowdown ? slots.arrowdown({}) : ``}` : `${validate_component(ChevronDown, "ChevronDown").$$render($$result, {}, {}, {})}`}`}</button>
  ${isOpen ? `<ul id="dropdown"${add_attribute("class", ulClass2, 0)}>${slots.default ? slots.default({}) : ``}</ul>` : ``}</li>`;
});
const SidebarGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ulClass", "borderClass", "border"]);
  let { ulClass: ulClass2 = "space-y-2" } = $$props;
  let { borderClass = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700" } = $$props;
  let { border = false } = $$props;
  if (border) {
    ulClass2 += " " + borderClass;
  }
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass2 !== void 0)
    $$bindings.ulClass(ulClass2);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  return `<ul${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(ulClass2, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const SidebarWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass"]);
  let { divClass: divClass2 = "overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass2 !== void 0)
    $$bindings.divClass(divClass2);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(divClass2, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const app = "";
const AdminSideBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dropDownsData = [];
  let noDropDownsData = [
    { label: "Jobs", url: "/admin/jobs" },
    {
      label: "Products",
      url: "/admin/products"
    },
    {
      label: "Personnel",
      url: "/admin/personnel"
    },
    {
      label: "Customers",
      url: "/admin/customers"
    },
    { label: "Reviews", url: "/reviews" },
    { label: "Services", url: "/services" }
  ];
  let { activeUrl } = $$props;
  let { spanClass: spanClass2 } = $$props;
  let { toggleSide } = $$props;
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0)
    $$bindings.activeUrl(activeUrl);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass2 !== void 0)
    $$bindings.spanClass(spanClass2);
  if ($$props.toggleSide === void 0 && $$bindings.toggleSide && toggleSide !== void 0)
    $$bindings.toggleSide(toggleSide);
  return `${validate_component(Sidebar, "Sidebar").$$render($$result, { asideClass: "w-54" }, {}, {
    default: () => {
      return `${validate_component(SidebarWrapper, "SidebarWrapper").$$render($$result, {}, {}, {
        default: () => {
          return `${each(noDropDownsData, ({ label, url }) => {
            return `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(SidebarItem, "SidebarItem").$$render(
                  $$result,
                  {
                    href: url,
                    label,
                    spanClass: spanClass2,
                    active: activeUrl === `${url}`
                  },
                  {},
                  {}
                )}
        `;
              }
            })}`;
          })}
  
      ${each(dropDownsData, ({ title, children }) => {
            return `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, { class: "pt-4" }, {}, {
              default: () => {
                return `${validate_component(SidebarDropdownWrapper, "SidebarDropdownWrapper").$$render(
                  $$result,
                  {
                    label: title.toUpperCase(),
                    isOpen: activeUrl.includes(title)
                  },
                  {},
                  {
                    default: () => {
                      return `${each(children, ({ url, name }) => {
                        return `${validate_component(SidebarItem, "SidebarItem").$$render(
                          $$result,
                          {
                            label: name,
                            href: url,
                            spanClass: spanClass2,
                            active: activeUrl === `${url}`
                          },
                          {},
                          {}
                        )}`;
                      })}
          `;
                    }
                  }
                )}
        `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}`;
});
const ClientSideBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dropDownsData = [];
  let noDropDownsData = [
    { label: "Jobs", url: "/client/jobs" },
    {
      label: "Products",
      url: "/client/products"
    },
    { label: "Reviews", url: "/reviews" },
    { label: "Services", url: "/services" }
  ];
  let { activeUrl } = $$props;
  let { spanClass: spanClass2 } = $$props;
  let { toggleSide } = $$props;
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0)
    $$bindings.activeUrl(activeUrl);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass2 !== void 0)
    $$bindings.spanClass(spanClass2);
  if ($$props.toggleSide === void 0 && $$bindings.toggleSide && toggleSide !== void 0)
    $$bindings.toggleSide(toggleSide);
  return `${validate_component(Sidebar, "Sidebar").$$render($$result, { asideClass: "w-54" }, {}, {
    default: () => {
      return `${validate_component(SidebarWrapper, "SidebarWrapper").$$render($$result, {}, {}, {
        default: () => {
          return `${each(noDropDownsData, ({ label, url }) => {
            return `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(SidebarItem, "SidebarItem").$$render(
                  $$result,
                  {
                    href: url,
                    label,
                    spanClass: spanClass2,
                    active: activeUrl === `${url}`
                  },
                  {},
                  {}
                )}
        `;
              }
            })}`;
          })}
  
      ${each(dropDownsData, ({ title, children }) => {
            return `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, { class: "pt-4" }, {}, {
              default: () => {
                return `${validate_component(SidebarDropdownWrapper, "SidebarDropdownWrapper").$$render(
                  $$result,
                  {
                    label: title.toUpperCase(),
                    isOpen: activeUrl.includes(title)
                  },
                  {},
                  {
                    default: () => {
                      return `${each(children, ({ url, name }) => {
                        return `${validate_component(SidebarItem, "SidebarItem").$$render(
                          $$result,
                          {
                            label: name,
                            href: url,
                            spanClass: spanClass2,
                            active: activeUrl === `${url}`
                          },
                          {},
                          {}
                        )}`;
                      })}
          `;
                    }
                  }
                )}
        `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}`;
});
let spanClass = "pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white";
let darkModeClass = "text-lg";
let divClass = "w-full md:block md:w-auto pr-8 order-1 md:order-none";
let ulClass = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium";
let backdrop = false;
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeUrl;
  let user;
  let company;
  let site_name;
  let logo;
  let keds;
  let $page, $$unsubscribe_page;
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  let { data } = $$props;
  let drawerHidden = false;
  let activateClickOutside = true;
  const toggleSide = () => {
  };
  let main;
  let transitionParams = { x: -320, duration: 200, easing: sineIn };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        drawerHidden = true;
        activateClickOutside = true;
      }
    }
    activeUrl = $page.url.pathname;
    ({ user, company } = data);
    site_name = data?.company?.name;
    logo = (data?.company?.logo ? pb.files.getUrl(data?.company, data?.company?.logo, { thumb: "200x200" }) : null) ?? "/images/img7.png";
    keds = {
      github: "https://chat.whatsapp.com/J94f3Jvma2rAjsmG2CCXXM",
      discord: "https://discord.gg/cArvwxjYV4",
      qbits: "https://discord.gg/cArvwxjYV4",
      twitter: "https://twitter.com/KipelesKemboi"
    };
    $$rendered = `

<div class="mx-auto dark:bg-slate-900">${validate_component(Navbar, "Navbar").$$render(
      $$result,
      {
        navClass: "px-2 py-0.5 fixed w-full mx-auto z-20 top-0 left-0 border-b"
      },
      {},
      {
        default: ({ hidden, toggle }) => {
          return `${validate_component(NavHamburger, "NavHamburger").$$render($$result, { btnClass: "ml-3 lg:hidden" }, {}, {})}
    ${validate_component(NavBrand, "NavBrand").$$render($$result, { href: "/" }, {}, {
            default: () => {
              return `<img${add_attribute("src", logo, 0)} class="mr-3 h-6 sm:h-9" alt="Logo">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">${escape(site_name)}</span>`;
            }
          })}
    ${validate_component(NavHamburger, "NavHamburger").$$render($$result, {}, {}, {})}
    ${validate_component(NavUl, "NavUl").$$render($$result, { hidden, divClass, ulClass }, {}, {
            default: () => {
              return `${validate_component(NavLi, "NavLi").$$render($$result, { href: "/" }, {}, {
                default: () => {
                  return `Home`;
                }
              })}
      ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/contacts" }, {}, {
                default: () => {
                  return `Contacts`;
                }
              })}
      ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/about-us" }, {}, {
                default: () => {
                  return `About Us`;
                }
              })}
      ${validate_component(NavLi, "NavLi").$$render($$result, { href: user ? `/account` : `/login` }, {}, {
                default: () => {
                  return `${escape($currentUser?.username ?? $currentUser?.email ?? "login")}`;
                }
              })}`;
            }
          })}
    ${validate_component(DarkMode, "DarkMode").$$render($$result, { class: darkModeClass }, {}, {})}`;
        }
      }
    )}
  ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        transitionType: "fly",
        backdrop,
        transitionParams,
        leftOffset: "lg:top-16 h-screen lg:left-0",
        id: "sidebar",
        width: "w-64",
        class: "overflow-scroll pb-32",
        hidden: drawerHidden,
        activateClickOutside
      },
      {
        hidden: ($$value) => {
          drawerHidden = $$value;
          $$settled = false;
        },
        activateClickOutside: ($$value) => {
          activateClickOutside = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex items-center">${validate_component(CloseButton, "CloseButton").$$render($$result, { class: "mb-4 dark:text-white lg:hidden" }, {}, {})}</div>

    ${validate_component(SidebarWrapper, "SidebarWrapper").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(SidebarItem, "SidebarItem").$$render(
                    $$result,
                    {
                      href: `/ai`,
                      label: `Ask AI`,
                      spanClass,
                      active: activeUrl === `/ai`
                    },
                    {},
                    {}
                  )}`;
                }
              })}
      ${$currentUser && !$currentUser?.admin ? `${validate_component(ClientSideBar, "ClientSideBar").$$render($$result, { activeUrl, spanClass, toggleSide }, {}, {})}` : `${$currentUser?.admin ? `${validate_component(AdminSideBar, "AdminSideBar").$$render($$result, { activeUrl, spanClass, toggleSide }, {}, {})}` : ``}`}
      ${$currentUser ? `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(SidebarItem, "SidebarItem").$$render(
                    $$result,
                    {
                      href: `/account`,
                      label: `My Account`,
                      spanClass,
                      active: activeUrl === `/account`
                    },
                    {},
                    {}
                  )}`;
                }
              })}
        ${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, {}, {}, {
                default: () => {
                  return `<span${add_attribute("class", spanClass, 0)}><form method="POST" action="/logout"><button type="submit">logout<button></button></button></form></span>`;
                }
              })}` : `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(SidebarItem, "SidebarItem").$$render(
                    $$result,
                    {
                      href: `/login`,
                      label: `Login`,
                      spanClass,
                      active: activeUrl === `/login`
                    },
                    {},
                    {}
                  )}`;
                }
              })}
        ${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(SidebarItem, "SidebarItem").$$render(
                    $$result,
                    {
                      href: `/register`,
                      label: `Register`,
                      spanClass,
                      active: activeUrl === `/register`
                    },
                    {},
                    {}
                  )}`;
                }
              })}`}`;
            }
          })}`;
        }
      }
    )}

  <div class="bg-white dark:bg-slate-900 flex px-4 mx-auto w-full"><main class="lg:ml-72 w-full mx-auto"${add_attribute("this", main, 0)}><div class="dark:text-white">${slots.default ? slots.default({}) : ``}</div></main></div>
  <div class="dark:bg-slate-900 mx-auto mb-4 pt-4 lg:pl-64">${validate_component(Footer, "Footer").$$render(
      $$result,
      {
        footerType: "custom",
        customClass: "py-6 px-16 bg-white dark:bg-gray-900"
      },
      {},
      {
        default: () => {
          return `<div class="md:flex md:justify-between"><div class="mb-6 md:mb-0">${validate_component(FooterBrand, "FooterBrand").$$render(
            $$result,
            {
              href: "/",
              src: logo,
              alt: site_name,
              name: site_name
            },
            {},
            {}
          )}</div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"><div><h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources
            </h2>
            ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/contacts" }, {}, {
                default: () => {
                  return `Contacts`;
                }
              })}
              ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: "/about-us" }, {}, {
                default: () => {
                  return `About us`;
                }
              })}`;
            }
          })}</div>
          <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us
            </h2>
            ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: keds?.github }, {}, {
                default: () => {
                  return `GitHub`;
                }
              })}
              ${validate_component(FooterLink, "FooterLink").$$render($$result, { liClass: "mb-4", href: keds?.discord }, {}, {
                default: () => {
                  return `Discord`;
                }
              })}`;
            }
          })}</div>
          <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal
            </h2>
            ${validate_component(FooterLinkGroup, "FooterLinkGroup").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(FooterLink, "FooterLink").$$render(
                $$result,
                {
                  liClass: "mb-4",
                  href: "https://github.com/themesberg/flowbite-svelte/blob/main/LICENSE"
                },
                {},
                {
                  default: () => {
                    return `License`;
                  }
                }
              )}`;
            }
          })}</div></div></div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
      <div class="sm:flex sm:items-center sm:justify-between">${validate_component(FooterCopyright, "FooterCopyright").$$render($$result, { href: keds?.qbits, by: "qbits™" }, {}, {})}
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">${validate_component(FooterIcon, "FooterIcon").$$render(
            $$result,
            {
              hreflocals: "https://deniskipeles.github.io",
              class: "text-gray-400 hover:text-gray-900"
            },
            {},
            {
              default: () => {
                return `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>`;
              }
            }
          )}</div></div>`;
        }
      }
    )}</div></div>

${$$result.head += `<!-- HEAD_svelte-19w46wm_START -->${$$result.title = `<title>${escape(data?.company?.name)}</title>`, ""}<meta name="description"${add_attribute("content", data?.company?.description, 0)}><link rel="apple-touch-icon" sizes="76x76"${add_attribute("href", logo, 0)}><link rel="icon" type="image/svg+xml"${add_attribute("href", logo, 0)}><link rel="icon" type="image/png"${add_attribute("href", logo, 0)}><!-- HEAD_svelte-19w46wm_END -->`, ""}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_currentUser();
  return $$rendered;
});
export {
  Layout as default
};
