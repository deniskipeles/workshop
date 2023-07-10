import * as server from '../entries/pages/account/_page.server.ts.js';

export const index = 13;
export const component = async () => (await import('../entries/pages/account/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/account/+page.server.ts";
export const imports = ["_app/immutable/entry/account-page.svelte.ba5c4d0a.js","_app/immutable/chunks/index.95ba0b19.js","_app/immutable/chunks/ErrorComp.7ce35f35.js","_app/immutable/chunks/pocketbase.4e4d61cd.js","_app/immutable/chunks/index.3ed7aa21.js","_app/immutable/chunks/index.138b2d79.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.7adfd83d.js","_app/immutable/chunks/Breadcrumb.ce54d940.js","_app/immutable/chunks/BreadcrumbItem.3a5ea67a.js","_app/immutable/chunks/Input.65253b51.js","_app/immutable/chunks/Card.427bc080.js","_app/immutable/chunks/Frame.782fa498.js","_app/immutable/chunks/Textarea.23e68b2b.js","_app/immutable/chunks/Spinner.3aae4f2d.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
