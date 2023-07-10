// @ts-nocheck
import { currentUser } from '$lib/pocketbase';
import { bookHostelFxn } from '$lib/server';
import { bookingFormData } from '$lib/stores';
import { serializeNonPOJOs } from '$lib/tools';
import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ locals: { user, company } }) {
  if (user?.id) {
    throw redirect(301, '/account')
  } else {
    return { company }
  }
}

export const actions = {
  default: async ({ locals: { pb }, request }: import('./$types').RequestEvent) => {
    const formData = await request.formData();

    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string
    };
    

    try {
      const authData = await pb.collection('users').authWithPassword(
        data.email,
        data.password,
      )
      currentUser.set(authData.record)
    } catch (e: any) {
      return { incorrect: true, error: serializeNonPOJOs(e) };
    }

    throw redirect(301, '/')
  },
}
// XaD5msDYcMjyHTf;null as any as Actions;