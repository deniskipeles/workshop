import * as server from '../entries/pages/(super_admin)/admin/personnel/_page.server.ts.js';

export const index = 10;
export const component = async () => (await import('../entries/pages/(super_admin)/admin/personnel/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(super_admin)/admin/personnel/+page.server.ts";
export const imports = ["_app/immutable/entry/(super_admin)-admin-personnel-page.svelte.8d95c56a.js","_app/immutable/chunks/index.95ba0b19.js","_app/immutable/chunks/ErrorComp.7ce35f35.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.7adfd83d.js","_app/immutable/chunks/Card.427bc080.js","_app/immutable/chunks/Frame.782fa498.js","_app/immutable/chunks/Breadcrumb.ce54d940.js","_app/immutable/chunks/BreadcrumbItem.3a5ea67a.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
