import PocketBase from "pocketbase";
import { w as writable } from "./index2.js";
const pb = new PocketBase("https://mosba.up.railway.app");
const currentUser = writable(pb.authStore.model);
pb.authStore.onChange((auth) => {
  currentUser.set(pb.authStore.model);
});
export {
  currentUser as c,
  pb as p
};
