import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, v as validate_component, g as escape, k as each, j as compute_slots, l as subscribe, o as onDestroy } from "../../../chunks/index3.js";
import { E as ErrorComp } from "../../../chunks/ErrorComp.js";
import { h as hostel_review_agg } from "../../../chunks/index5.js";
import { p as pb } from "../../../chunks/pocketbase.js";
import { w as writable } from "../../../chunks/index2.js";
import classNames from "classnames";
/* empty css                                                       */import "postcss";
import { a as getTimeAgo } from "../../../chunks/index4.js";
import { C as Card } from "../../../chunks/Card.js";
import { B as Breadcrumb } from "../../../chunks/Breadcrumb.js";
import { B as BreadcrumbItem } from "../../../chunks/BreadcrumbItem.js";
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M11.4806 3.49883C11.6728 3.03685 12.3272 3.03685 12.5193 3.49883L14.6453 8.61028C14.7263 8.80504 14.9095 8.93811 15.1197 8.95497L20.638 9.39736C21.1367 9.43735 21.339 10.0598 20.959 10.3853L16.7546 13.9867C16.5945 14.1239 16.5245 14.3392 16.5734 14.5444L17.8579 19.9293C17.974 20.416 17.4446 20.8007 17.0176 20.5398L12.2932 17.6542C12.1132 17.5443 11.8868 17.5443 11.7068 17.6542L6.98238 20.5398C6.55539 20.8007 6.02594 20.416 6.14203 19.9293L7.42652 14.5444C7.47546 14.3392 7.4055 14.1239 7.24531 13.9867L3.04099 10.3853C2.661 10.0598 2.86323 9.43735 3.36197 9.39736L8.88022 8.95497C9.09048 8.93811 9.27363 8.80504 9.35464 8.61028L11.4806 3.49883Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7881 3.2108C11.2364 2.13286 12.7635 2.13286 13.2118 3.2108L15.2938 8.21652L20.6979 8.64976C21.8616 8.74306 22.3335 10.1953 21.4469 10.9549L17.3295 14.4818L18.5874 19.7553C18.8583 20.8909 17.6229 21.7884 16.6266 21.1799L11.9999 18.354L7.37329 21.1799C6.37697 21.7884 5.14158 20.8909 5.41246 19.7553L6.67038 14.4818L2.55303 10.9549C1.66639 10.1953 2.13826 8.74306 3.302 8.64976L8.70609 8.21652L10.7881 3.2108Z" fill="${color}"/> `;
  let { ariaLabel = "star" } = $$props;
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
const Rating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { divClass = "flex items-center" } = $$props;
  let { size = "24" } = $$props;
  let { total = 5 } = $$props;
  let { rating = 4 } = $$props;
  let { ceil = false } = $$props;
  let { count = false } = $$props;
  let roundedRating = ceil ? Math.ceil(rating) : Math.floor(rating);
  let grayStars = total - roundedRating;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  if ($$props.rating === void 0 && $$bindings.rating && rating !== void 0)
    $$bindings.rating(rating);
  if ($$props.ceil === void 0 && $$bindings.ceil && ceil !== void 0)
    $$bindings.ceil(ceil);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  return `<div${add_attribute("class", classNames(divClass, $$props.class), 0)}>${count ? `${validate_component(Star, "Star").$$render(
    $$result,
    {
      variation: "solid",
      size,
      class: "text-yellow-300 dark:text-yellow-200"
    },
    {},
    {}
  )}
    <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">${escape(rating)}</p>
    ${slots.default ? slots.default({}) : ``}` : `${each(Array(roundedRating), (_) => {
    return `${slots.ratingUp ? slots.ratingUp({}) : `
        ${validate_component(Star, "Star").$$render(
      $$result,
      {
        variation: "solid",
        size,
        class: "text-yellow-300 dark:text-yellow-200"
      },
      {},
      {}
    )}
      `}`;
  })}
    ${each(Array(grayStars), (_) => {
    return `${slots.ratingDown ? slots.ratingDown({}) : `
        ${validate_component(Star, "Star").$$render(
      $$result,
      {
        size,
        class: "text-gray-300 dark:text-gray-500"
      },
      {},
      {}
    )}
      `}`;
  })}
    ${$$slots.text ? `${slots.text ? slots.text({}) : ``}` : ``}`}</div>`;
});
const AdvancedRating = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { ratings = [] } = $$props;
  let { divClass = "flex items-center mt-4" } = $$props;
  let { labelClass = "text-sm font-medium text-blue-600 dark:text-blue-500" } = $$props;
  let { ratingDivClass = "mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700" } = $$props;
  let { ratingClass = "h-5 bg-yellow-400 rounded" } = $$props;
  let { rightLabelClass = "text-sm font-medium text-blue-600 dark:text-blue-500" } = $$props;
  let { unit = "%" } = $$props;
  if ($$props.ratings === void 0 && $$bindings.ratings && ratings !== void 0)
    $$bindings.ratings(ratings);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.labelClass === void 0 && $$bindings.labelClass && labelClass !== void 0)
    $$bindings.labelClass(labelClass);
  if ($$props.ratingDivClass === void 0 && $$bindings.ratingDivClass && ratingDivClass !== void 0)
    $$bindings.ratingDivClass(ratingDivClass);
  if ($$props.ratingClass === void 0 && $$bindings.ratingClass && ratingClass !== void 0)
    $$bindings.ratingClass(ratingClass);
  if ($$props.rightLabelClass === void 0 && $$bindings.rightLabelClass && rightLabelClass !== void 0)
    $$bindings.rightLabelClass(rightLabelClass);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  return `${$$slots.rating ? `${slots.rating ? slots.rating({}) : ``}` : ``}
${$$slots.globalText ? `${slots.globalText ? slots.globalText({}) : ``}` : ``}
${each(ratings, ({ label, rating }) => {
    return `<div${add_attribute("class", divClass, 0)}><span${add_attribute("class", labelClass, 0)}>${escape(label)}</span>
		<div${add_attribute("class", ratingDivClass, 0)}><div${add_attribute("class", ratingClass, 0)} style="${"width: " + escape(rating, true) + "%"}"></div></div>
		<span${add_attribute("class", rightLabelClass, 0)}>${escape(rating)}${escape(unit)}</span>
	</div>`;
  })}`;
});
const Activity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { olClass = "relative border-l border-gray-200 dark:border-gray-700" } = $$props;
  if ($$props.olClass === void 0 && $$bindings.olClass && olClass !== void 0)
    $$bindings.olClass(olClass);
  return `<ol${add_attribute("class", olClass, 0)}>${slots.default ? slots.default({}) : ``}</ol>`;
});
const ActivityItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { activities } = $$props;
  if ($$props.activities === void 0 && $$bindings.activities && activities !== void 0)
    $$bindings.activities(activities);
  return `${each(activities, ({ title, date, src, alt, text }) => {
    return `<li class="mb-10 ml-6"><span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"><img class="rounded-full shadow-lg"${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}></span>
		<div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600"><div class="justify-between items-center mb-3 sm:flex"><time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">${escape(date)}</time>
				<div class="text-sm font-normal text-gray-500 lex dark:text-gray-300"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END -->
				</div></div>
			${text ? `<div class="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300"><!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END -->
				</div>` : ``}</div>
	</li>`;
  })}`;
});
const PreviewHostelAggReviews_svelte_svelte_type_style_lang = "";
const StarRatingComp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = 0 } = $$props;
  let { handleRatingClick } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.handleRatingClick === void 0 && $$bindings.handleRatingClick && handleRatingClick !== void 0)
    $$bindings.handleRatingClick(handleRatingClick);
  return `<div class="flex items-center space-x-1">${each([1, 2, 3, 4, 5], (rating) => {
    return `
    <svg class="w-10 h-10 cursor-pointer"${add_attribute("fill", rating <= value ? "green" : "black", 0)} viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 0L13.09 6.22754H20L14.82 10.0907L17.91 16.3182L10 12.4549L2.09 16.3182L5.18 10.0907L0 6.22754H6.91L10 0Z"></path></svg>`;
  })}</div>`;
});
const ReviewForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $formData, $$unsubscribe_formData;
  let { data } = $$props;
  const reviewData = { comment: "", rate: 5 };
  const formData = writable(reviewData);
  $$unsubscribe_formData = subscribe(formData, (value) => $formData = value);
  function handleRatingClick(value) {
    formData.update((vals) => {
      vals.rate = value;
      return vals;
    });
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<form class="max-w-md mx-auto p-4"><div class="mb-4"><label class="block font-medium mb-2" for="comment">Comment:</label>
    <textarea class="w-full px-3 py-2 border border-gray-300 rounded" id="comment" required>${$formData.comment || ""}</textarea></div>

  <div class="mb-4"><label class="block font-medium mb-2" for="rate">Rate: ${escape($formData.rate)}</label>
    ${validate_component(StarRatingComp, "StarRatingComp").$$render(
      $$result,
      { handleRatingClick, value: $formData.rate },
      {
        value: ($$value) => {
          $formData.rate = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

  <div class="text-center">${`
      <button class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">Submit</button>`}</div></form>
${``}`;
  } while (!$$settled);
  $$unsubscribe_formData();
  return $$rendered;
});
function calculateRatingPercentages(ratingCounts) {
  const totalRatingCount = ratingCounts.reduce((sum, count) => sum + count.rating_count, 0);
  const ratingPercentages = ratingCounts.map((count) => ({
    label: `${count.rating} star`,
    rating: Math.round(count.rating_count / totalRatingCount * 100)
  }));
  const lastRatingPercentage = ratingPercentages.reduce((sum, rating) => sum + rating.rating, 0);
  ratingPercentages[ratingPercentages.length - 1].rating += 100 - lastRatingPercentage;
  return ratingPercentages;
}
const ReviewsComp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hostel_review_agg, $$unsubscribe_hostel_review_agg;
  let $reviews, $$unsubscribe_reviews;
  $$unsubscribe_hostel_review_agg = subscribe(hostel_review_agg, (value) => $hostel_review_agg = value);
  let { data } = $$props;
  function getReviewImageUrl(record) {
    let imgUrl = record?.photo;
    imgUrl = imgUrl ? pb.files.getUrl(record, imgUrl, { thumb: "100x100" }) : "/images/img1.jpg";
    return imgUrl;
  }
  const reviews = writable(getStructuredView());
  $$unsubscribe_reviews = subscribe(reviews, (value) => $reviews = value);
  let interval;
  onDestroy(() => {
    clearInterval(interval);
    pb.collection("reviews").unsubscribe("*");
  });
  function getStructuredView() {
    if (data?.reviews) {
      return data.reviews.items.map((obj) => {
        return {
          title: obj?.name,
          date: getTimeAgo(obj?.created),
          alt: "image alt here",
          src: getReviewImageUrl(obj),
          text: obj?.comment
        };
      });
    }
    return [];
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_hostel_review_agg();
  $$unsubscribe_reviews();
  return `<div><div class="grid relative md:grid-cols-3 gap-6">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(AdvancedRating, "AdvancedRating").$$render(
        $$result,
        {
          ratings: calculateRatingPercentages($hostel_review_agg?.rating_counts)
        },
        {},
        {
          globalText: () => {
            return `<p slot="globalText" class="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">${escape($hostel_review_agg?.total_reviews)} total ratings
        </p>`;
          },
          rating: () => {
            return `<span slot="rating">${validate_component(Rating, "Rating").$$render($$result, { total: 5, rating: 3.72, id: "example-8" }, {}, {
              text: () => {
                return `<p slot="text" class="text-sm font-medium text-gray-500 dark:text-gray-400 ml-2">${escape($hostel_review_agg.mean_rate)} out of 5
            </p>`;
              }
            })}</span>`;
          }
        }
      )}`;
    }
  })}

    ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ReviewForm, "ReviewForm").$$render($$result, { data }, {}, {})}`;
    }
  })}</div></div>


<div class="p-4"><h1 class="text-2xl font-bold mb-4">Reviews</h1>

  ${validate_component(Activity, "Activity").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ActivityItem, "ActivityItem").$$render($$result, { activities: $reviews }, {}, {})}`;
    }
  })}

  ${data?.reviews?.items.length === 0 ? `<p>No reviews available.</p>` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `

${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { class: "pt-20 py-8" }, {}, {
    default: () => {
      return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/", home: true }, {}, {
        default: () => {
          return `Home`;
        }
      })}`;
    }
  })}

${data?.reviews ? `
   ${validate_component(ReviewsComp, "ReviewsComp").$$render($$result, { data }, {}, {})}` : `
   ${data?.error ? `
     ${validate_component(ErrorComp, "ErrorComp").$$render($$result, { error: data?.error }, {}, {})}` : ``}`}`;
});
export {
  Page as default
};
