import * as server from '../entries/pages/(super_admin)/_layout.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(super_admin)/+layout.server.ts";
export const imports = ["_app/immutable/entry/layout.svelte.9cc27fd4.js","_app/immutable/chunks/index.95ba0b19.js"];
export const stylesheets = [];
export const fonts = [];
