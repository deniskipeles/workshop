import * as server from '../entries/pages/(client)/client/jobs/_page.server.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/(client)/client/jobs/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(client)/client/jobs/+page.server.ts";
export const imports = ["_app/immutable/entry/(client)-client-jobs-page.svelte.223a0368.js","_app/immutable/chunks/index.95ba0b19.js","_app/immutable/chunks/ErrorComp.7ce35f35.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.7adfd83d.js","_app/immutable/chunks/Breadcrumb.ce54d940.js","_app/immutable/chunks/BreadcrumbItem.3a5ea67a.js","_app/immutable/chunks/navigation.d70a8bb1.js","_app/immutable/chunks/singletons.9ff886ae.js","_app/immutable/chunks/index.3ed7aa21.js","_app/immutable/chunks/paths.67ad0797.js","_app/immutable/chunks/pocketbase.4e4d61cd.js","_app/immutable/chunks/JobsPage.3b8831ff.js","_app/immutable/chunks/Card.427bc080.js","_app/immutable/chunks/Frame.782fa498.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css","_app/immutable/assets/JobsPage.e61d6aa4.css"];
export const fonts = [];
