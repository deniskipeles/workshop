import * as server from '../entries/pages/services/_service_id_/_page.server.ts.js';

export const index = 21;
export const component = async () => (await import('../entries/pages/services/_service_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/services/[service_id]/+page.server.ts";
export const imports = ["_app/immutable/entry/services-_service_id_-page.svelte.2b76998a.js","_app/immutable/chunks/index.95ba0b19.js","_app/immutable/chunks/pocketbase.4e4d61cd.js","_app/immutable/chunks/index.3ed7aa21.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.7adfd83d.js","_app/immutable/chunks/Breadcrumb.ce54d940.js","_app/immutable/chunks/BreadcrumbItem.3a5ea67a.js","_app/immutable/chunks/ErrorComp.7ce35f35.js","_app/immutable/chunks/paths.67ad0797.js"];
export const stylesheets = ["_app/immutable/assets/JobRequirementTable.a768626a.css","_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
