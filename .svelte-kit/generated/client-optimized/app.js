import * as client_hooks from '../../../src/hooks.client.ts';

export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21')
];

export const server_loads = [0,2];

export const dictionary = {
		"/": [~3],
		"/about-us": [12],
		"/account": [~13],
		"/(super_admin)/admin/customers": [~7,[2]],
		"/(super_admin)/admin/jobs": [~8,[2]],
		"/(super_admin)/admin/jobs/[job_id]": [~9,[2]],
		"/(super_admin)/admin/personnel": [~10,[2]],
		"/(super_admin)/admin/products": [~11,[2]],
		"/ai": [~14],
		"/(client)/client/jobs": [~4],
		"/(client)/client/jobs/[job_id]": [~5],
		"/(client)/client/products": [~6],
		"/contacts": [~15],
		"/login": [~16],
		"/logout": [17],
		"/register": [~18],
		"/reviews": [~19],
		"/services": [~20],
		"/services/[service_id]": [~21]
	};

export const hooks = {
	handleError: client_hooks.handleError || (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';