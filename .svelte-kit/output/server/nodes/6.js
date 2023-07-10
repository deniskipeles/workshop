import * as server from '../entries/pages/(client)/client/products/_page.server.ts.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/(client)/client/products/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(client)/client/products/+page.server.ts";
export const imports = ["_app/immutable/entry/(client)-client-products-page.svelte.31162d9d.js","_app/immutable/chunks/index.95ba0b19.js","_app/immutable/chunks/ErrorComp.7ce35f35.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.7adfd83d.js","_app/immutable/chunks/Breadcrumb.ce54d940.js","_app/immutable/chunks/BreadcrumbItem.3a5ea67a.js","_app/immutable/chunks/pocketbase.4e4d61cd.js","_app/immutable/chunks/index.3ed7aa21.js","_app/immutable/chunks/ListProducts.ae0ee1eb.js","_app/immutable/chunks/Card.427bc080.js","_app/immutable/chunks/Frame.782fa498.js","_app/immutable/chunks/index.138b2d79.js"];
export const stylesheets = ["_app/immutable/assets/GalleryPage.0746c970.css","_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
