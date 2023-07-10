export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Thumbs.db","favicon.png","images/img1.jpg","images/img7.png","images/img8.png","images/img9.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.6508667a.js","imports":["_app/immutable/entry/start.6508667a.js","_app/immutable/chunks/index.95ba0b19.js","_app/immutable/chunks/singletons.9ff886ae.js","_app/immutable/chunks/index.3ed7aa21.js","_app/immutable/chunks/paths.67ad0797.js","_app/immutable/chunks/parse.d12b0d5b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.06507f61.js","imports":["_app/immutable/entry/app.06507f61.js","_app/immutable/chunks/pocketbase.4e4d61cd.js","_app/immutable/chunks/index.3ed7aa21.js","_app/immutable/chunks/index.95ba0b19.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about-us",
				pattern: /^\/about-us\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/account",
				pattern: /^\/account\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(super_admin)/admin/customers",
				pattern: /^\/admin\/customers\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(super_admin)/admin/jobs",
				pattern: /^\/admin\/jobs\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(super_admin)/admin/jobs/[job_id]",
				pattern: /^\/admin\/jobs\/([^/]+?)\/?$/,
				params: [{"name":"job_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(super_admin)/admin/personnel",
				pattern: /^\/admin\/personnel\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(super_admin)/admin/products",
				pattern: /^\/admin\/products\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/ai",
				pattern: /^\/ai\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/api/ai",
				pattern: /^\/api\/ai\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/ai/_server.ts.js')
			},
			{
				id: "/api/ai/post",
				pattern: /^\/api\/ai\/post\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/ai/post/_server.ts.js')
			},
			{
				id: "/api/jobs",
				pattern: /^\/api\/jobs\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/jobs/_server.ts.js')
			},
			{
				id: "/api/jobs/requirements",
				pattern: /^\/api\/jobs\/requirements\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/jobs/requirements/_server.ts.js')
			},
			{
				id: "/api/mails",
				pattern: /^\/api\/mails\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/mails/_server.ts.js')
			},
			{
				id: "/api/products",
				pattern: /^\/api\/products\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/products/_server.ts.js')
			},
			{
				id: "/api/reviews",
				pattern: /^\/api\/reviews\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/reviews/_server.ts.js')
			},
			{
				id: "/api/services",
				pattern: /^\/api\/services\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/services/_server.ts.js')
			},
			{
				id: "/(client)/client/jobs",
				pattern: /^\/client\/jobs\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(client)/client/jobs/[job_id]",
				pattern: /^\/client\/jobs\/([^/]+?)\/?$/,
				params: [{"name":"job_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(client)/client/products",
				pattern: /^\/client\/products\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/contacts",
				pattern: /^\/contacts\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "/reviews",
				pattern: /^\/reviews\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 20 },
				endpoint: null
			},
			{
				id: "/services/[service_id]",
				pattern: /^\/services\/([^/]+?)\/?$/,
				params: [{"name":"service_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 21 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
