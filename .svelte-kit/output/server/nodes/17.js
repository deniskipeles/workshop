import * as server from '../entries/pages/logout/_page.server.ts.js';

export const index = 17;
export const component = async () => (await import('../entries/pages/logout/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/logout/+page.server.ts";
export const imports = ["_app/immutable/entry/logout-page.svelte.3438c819.js","_app/immutable/chunks/index.95ba0b19.js","_app/immutable/chunks/navigation.d70a8bb1.js","_app/immutable/chunks/singletons.9ff886ae.js","_app/immutable/chunks/index.3ed7aa21.js","_app/immutable/chunks/paths.67ad0797.js"];
export const stylesheets = [];
export const fonts = [];
