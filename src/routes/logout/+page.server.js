import { invalidateSession } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';
import path from 'node:path';

export const actions = {
	logout: async ({ cookies }) => {
		const sessionId = cookies.get('session');
		if (sessionId) {
			await invalidateSession(sessionId);
			cookies.delete('session', { path: '/' });
		}
		redirect(303, '/');
	}
};
