import pool from '$lib/server/database.js';

export async function GET({ params }) {
	const id = params.id;
	const [rows] = await pool.query('SELECT * from Event WHERE id=?', [id]);

	if (rows.length === 0) {
	}

	return Response.json(rows[0]);
}

export async function DELETE({ params }) {
	const id = params.id;
	const [result] = await pool.query('DELETE FROM Event WHERE id=?', [id]);
	if (result.affectedRows === 0) {
		return Response({ message: 'Event not found' }, { status: 404 });
	}
	return Response.json({ message: 'Event is now successfully deleted ' });
}

export async function PUT({ request, params }) {
	const id = params.id;
	const { name, description, startdate } = await request.json();

	const [result] = await pool.query('UPDATE Event SET name = ?, startdate = ? WHERE id = ?', [
		name,
		description,
		startdate,
		id
	]);

	if (result.affectedRows === 0) {
		return Response.json({ error: 'Event not found' }, { status: 404 });
	}
	return Response.json({ message: 'Event updated successfully!' });
}
