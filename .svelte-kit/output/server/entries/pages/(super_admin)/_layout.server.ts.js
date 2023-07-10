import { r as redirect } from "../../../chunks/index.js";
async function load({ parent }) {
  let parentData = await parent();
  if (parentData?.user?.admin || parentData?.user?.super_admin) {
    return { ...parentData };
  } else {
    throw redirect(
      301,
      "/?alert_danger=you are not allowed to access that page"
    );
  }
}
export {
  load
};
