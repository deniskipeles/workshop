import { p as pb } from "./pocketbase.js";
const serializeNonPOJOs = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
function getTimeAgo(date) {
  date = new Date(date);
  const now = /* @__PURE__ */ new Date();
  const elapsedSeconds = Math.floor((now.getTime() - date.getTime()) / 1e3);
  const intervals = {
    year: 31536e3,
    month: 2592e3,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };
  if (elapsedSeconds < intervals.minute) {
    return "Just now";
  } else if (elapsedSeconds < intervals.hour) {
    const minutes = Math.floor(elapsedSeconds / intervals.minute);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (elapsedSeconds < intervals.day) {
    const hours = Math.floor(elapsedSeconds / intervals.hour);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (elapsedSeconds < intervals.week) {
    const days = Math.floor(elapsedSeconds / intervals.day);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (elapsedSeconds < intervals.month) {
    const weeks = Math.floor(elapsedSeconds / intervals.week);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (elapsedSeconds < intervals.year) {
    const months = Math.floor(elapsedSeconds / intervals.month);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(elapsedSeconds / intervals.year);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
}
const getPbImageUrl = (doc, img, dim) => {
  let logo = (img ? pb.files.getUrl(doc, img, { thumb: dim ?? "100x100" }) : null) ?? "/images/img1.jpg";
  return logo;
};
export {
  getTimeAgo as a,
  getPbImageUrl as g,
  serializeNonPOJOs as s
};
