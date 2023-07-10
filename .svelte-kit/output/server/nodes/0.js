import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/entry/_layout.svelte.0f85396f.js","_app/immutable/chunks/index.95ba0b19.js","_app/immutable/chunks/Drawer.ba152a25.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.7adfd83d.js","_app/immutable/chunks/navigation.d70a8bb1.js","_app/immutable/chunks/singletons.9ff886ae.js","_app/immutable/chunks/index.3ed7aa21.js","_app/immutable/chunks/paths.67ad0797.js","_app/immutable/chunks/stores.13f14e11.js","_app/immutable/chunks/CloseButton.1985a2bd.js","_app/immutable/chunks/Frame.782fa498.js","_app/immutable/chunks/pocketbase.4e4d61cd.js"];
export const stylesheets = ["_app/immutable/assets/_layout.d5654f2d.css","_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
