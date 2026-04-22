import pool from '$lib/server/database.js';
import { request } from 'http';

export async function load({ locals }) {
	if (!locals.user) redirect(303, '/login');

	const [rows] = await pool.execute('SELECT * from Categories');

	return {
		categories: rows
	};
}

export const actions = {
	delete: async ({ request, locals }) => {
		if (!locals.user) redirect(303, '/login');

		const formData = await request.formData();
		const id = formData.get('id');
		await pool.execute('DELETE FROM Categories WHERE id=?', [id]);
		return {
			success: true
		};
	}
};
