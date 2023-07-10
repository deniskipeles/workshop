// @ts-nocheck
import { currentUser, pb } from '$lib/pocketbase'
import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions = {
  default: async ({ locals }: import('./$types').RequestEvent) => {
    locals.pb.authStore.clear()
    locals.user = null
    currentUser.set(null)
    throw redirect(303, '/')
  },
};null as any as Actions;