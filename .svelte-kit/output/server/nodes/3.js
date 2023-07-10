import * as server from '../entries/pages/_page.server.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/entry/_page.svelte.8846eab2.js","_app/immutable/chunks/index.95ba0b19.js","_app/immutable/chunks/ErrorComp.7ce35f35.js","_app/immutable/chunks/pocketbase.4e4d61cd.js","_app/immutable/chunks/index.3ed7aa21.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.7adfd83d.js","_app/immutable/chunks/Breadcrumb.ce54d940.js","_app/immutable/chunks/BreadcrumbItem.3a5ea67a.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
