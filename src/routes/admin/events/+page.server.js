import pool from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if (!locals.user) redirect(303, '/login');

	const [rows] = await pool.execute(
		'SELECT e.id as id, c.name as category_name, e.name as name from Event e LEFT JOIN Categories c ON e.category_id = c.id'
	);

	return {
		pageTitle: 'List of events',
		events: rows
	};
}

export const actions = {
	delete: async ({ request, locals }) => {
		if (!locals.user) redirect(303, '/login');

		const formData = await request.formData();
		const id = formData.get('id');
		await pool.execute('DELETE FROM Event WHERE id = ?', [id]);

		return {
			success: true
		};
	}
};
