import * as server from '../entries/pages/services/_page.server.ts.js';

export const index = 20;
export const component = async () => (await import('../entries/pages/services/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/services/+page.server.ts";
export const imports = ["_app/immutable/entry/services-page.svelte.fcc4d70c.js","_app/immutable/chunks/index.95ba0b19.js","_app/immutable/chunks/index.1292737e.js","_app/immutable/chunks/index.3ed7aa21.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.7adfd83d.js","_app/immutable/chunks/Drawer.ba152a25.js","_app/immutable/chunks/Input.65253b51.js","_app/immutable/chunks/Card.427bc080.js","_app/immutable/chunks/Frame.782fa498.js","_app/immutable/chunks/Textarea.23e68b2b.js","_app/immutable/chunks/Spinner.3aae4f2d.js","_app/immutable/chunks/ErrorComp.7ce35f35.js","_app/immutable/chunks/navigation.d70a8bb1.js","_app/immutable/chunks/singletons.9ff886ae.js","_app/immutable/chunks/paths.67ad0797.js","_app/immutable/chunks/index.138b2d79.js","_app/immutable/chunks/pocketbase.4e4d61cd.js","_app/immutable/chunks/GalleryPage.df67f649.js","_app/immutable/chunks/Breadcrumb.ce54d940.js","_app/immutable/chunks/BreadcrumbItem.3a5ea67a.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css","_app/immutable/assets/GalleryPage.0746c970.css"];
export const fonts = [];
