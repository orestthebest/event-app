import { fail, redirect } from '@sveltejs/kit';
import pool from '$lib/server/database.js';
import { verifyPassword, createSession } from '$lib/server/auth.js';

export const actions = {
	login: async ({ request, cookies }) => {
		const formData = await request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		if (!username || !password) {
			return fail(400, { error: 'Username and password are required' });
		}

		// Find user in database and verify password

		const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);

		if (rows.length === 0) {
			return fail(400, { error: 'Invalid username' });
		}

		if (!(await verifyPassword(password, rows[0].password_hash))) {
			{
				return fail(400, { error: 'Invalid password' });
			}
		}
		// Create cookie
		const sessionId = await createSession(rows[0].id);
		cookies.set('session', sessionId, {
			path: '/',
			maxAge: 60 * 60 * 24 * 30
		});
		throw redirect(303, '/admin');
	}
};
