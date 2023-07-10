import * as server from '../entries/pages/contacts/_page.server.ts.js';

export const index = 15;
export const component = async () => (await import('../entries/pages/contacts/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contacts/+page.server.ts";
export const imports = ["_app/immutable/entry/contacts-page.svelte.ec2ee36e.js","_app/immutable/chunks/index.95ba0b19.js","_app/immutable/chunks/ErrorComp.7ce35f35.js","_app/immutable/chunks/index.c4ca6160.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.7adfd83d.js","_app/immutable/chunks/Breadcrumb.ce54d940.js","_app/immutable/chunks/BreadcrumbItem.3a5ea67a.js","_app/immutable/chunks/Card.427bc080.js","_app/immutable/chunks/Frame.782fa498.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
